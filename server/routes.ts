import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertDownloadSchema, insertFaqViewSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Track download events
  app.post("/api/downloads", async (req, res) => {
    try {
      const validatedData = insertDownloadSchema.parse(req.body);
      const download = await storage.createDownload({
        ...validatedData,
        ipAddress: req.ip || req.connection.remoteAddress,
      });
      res.json({ success: true, id: download.id });
    } catch (error) {
      console.error("Download tracking error:", error);
      res.status(400).json({ 
        error: error instanceof z.ZodError ? error.errors : "Invalid data" 
      });
    }
  });

  // Track FAQ views
  app.post("/api/faq-views", async (req, res) => {
    try {
      const validatedData = insertFaqViewSchema.parse(req.body);
      const faqView = await storage.createFaqView(validatedData);
      res.json({ success: true, id: faqView.id });
    } catch (error) {
      console.error("FAQ view tracking error:", error);
      res.status(400).json({ 
        error: error instanceof z.ZodError ? error.errors : "Invalid data" 
      });
    }
  });

  // Get download statistics (for analytics)
  app.get("/api/stats/downloads", async (req, res) => {
    try {
      const stats = await storage.getDownloadStats();
      res.json(stats);
    } catch (error) {
      console.error("Download stats error:", error);
      res.status(500).json({ error: "Failed to fetch download stats" });
    }
  });

  // Get FAQ statistics (for analytics)
  app.get("/api/stats/faq", async (req, res) => {
    try {
      const stats = await storage.getFaqStats();
      res.json(stats);
    } catch (error) {
      console.error("FAQ stats error:", error);
      res.status(500).json({ error: "Failed to fetch FAQ stats" });
    }
  });

  // Generate sitemap
  app.get("/sitemap.xml", (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('host');
    const languages = ['ja', 'en', 'ko', 'zh'];
    
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
  ${languages.map(lang => `
  <url>
    <loc>${baseUrl}/${lang === 'ja' ? '' : lang}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    ${languages.map(altLang => 
      altLang !== lang ? `<xhtml:link rel="alternate" hreflang="${altLang}" href="${baseUrl}/${altLang === 'ja' ? '' : altLang}" />` : ''
    ).join('')}
  </url>`).join('')}
</urlset>`;

    res.set('Content-Type', 'application/xml');
    res.send(sitemap);
  });

  const httpServer = createServer(app);
  return httpServer;
}
