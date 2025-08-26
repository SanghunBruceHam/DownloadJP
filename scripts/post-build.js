#!/usr/bin/env node

/**
 * Post-build script to copy client files to the correct location for deployment
 * This script ensures that the built client files are available in both:
 * - dist/public/ (for the Express server in production)
 * - dist/ (for static deployment compatibility)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const publicDir = path.resolve(distDir, 'public');

console.log('🔧 Running post-build setup...');

// Check if public directory exists
if (!fs.existsSync(publicDir)) {
  console.error('❌ Build failed: dist/public directory not found');
  process.exit(1);
}

try {
  // Copy index.html to dist root for static deployment compatibility
  const indexSource = path.resolve(publicDir, 'index.html');
  const indexDest = path.resolve(distDir, 'index.html');
  
  if (fs.existsSync(indexSource)) {
    fs.copyFileSync(indexSource, indexDest);
    console.log('✅ Copied index.html to dist root');
  }

  // Copy assets directory to dist root for static deployment compatibility
  const assetsSource = path.resolve(publicDir, 'assets');
  const assetsDest = path.resolve(distDir, 'assets');
  
  if (fs.existsSync(assetsSource)) {
    // Remove existing assets directory if it exists
    if (fs.existsSync(assetsDest)) {
      fs.rmSync(assetsDest, { recursive: true, force: true });
    }
    
    // Copy assets directory
    fs.cpSync(assetsSource, assetsDest, { recursive: true });
    console.log('✅ Copied assets directory to dist root');
  }

  console.log('🎉 Post-build setup completed successfully!');
  console.log('📁 Build structure:');
  console.log('   dist/');
  console.log('   ├── index.html (for static deployment)');
  console.log('   ├── assets/ (for static deployment)');
  console.log('   ├── index.js (server entry point)');
  console.log('   └── public/ (served by Express in production)');
  
} catch (error) {
  console.error('❌ Post-build setup failed:', error.message);
  process.exit(1);
}