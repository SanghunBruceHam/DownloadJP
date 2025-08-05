import { type Download, type InsertDownload, type FaqView, type InsertFaqView } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  createDownload(download: InsertDownload): Promise<Download>;
  createFaqView(faqView: InsertFaqView): Promise<FaqView>;
  getDownloadStats(): Promise<any>;
  getFaqStats(): Promise<any>;
}

export class MemStorage implements IStorage {
  private downloads: Map<string, Download>;
  private faqViews: Map<string, FaqView>;

  constructor() {
    this.downloads = new Map();
    this.faqViews = new Map();
  }

  async createDownload(insertDownload: InsertDownload): Promise<Download> {
    const id = randomUUID();
    const download: Download = { 
      ...insertDownload, 
      id,
      downloadedAt: new Date()
    };
    this.downloads.set(id, download);
    return download;
  }

  async createFaqView(insertFaqView: InsertFaqView): Promise<FaqView> {
    const id = randomUUID();
    const faqView: FaqView = { 
      ...insertFaqView, 
      id,
      viewedAt: new Date()
    };
    this.faqViews.set(id, faqView);
    return faqView;
  }

  async getDownloadStats(): Promise<any> {
    const downloads = Array.from(this.downloads.values());
    
    const platformStats = downloads.reduce((acc, download) => {
      acc[download.platform] = (acc[download.platform] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const languageStats = downloads.reduce((acc, download) => {
      acc[download.language] = (acc[download.language] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: downloads.length,
      byPlatform: platformStats,
      byLanguage: languageStats,
      recent: downloads.slice(-10).reverse(),
    };
  }

  async getFaqStats(): Promise<any> {
    const faqViews = Array.from(this.faqViews.values());
    
    const questionStats = faqViews.reduce((acc, faqView) => {
      acc[faqView.question] = (acc[faqView.question] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const languageStats = faqViews.reduce((acc, faqView) => {
      acc[faqView.language] = (acc[faqView.language] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      total: faqViews.length,
      byQuestion: questionStats,
      byLanguage: languageStats,
      recent: faqViews.slice(-10).reverse(),
    };
  }
}

export const storage = new MemStorage();
