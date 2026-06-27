#!/usr/bin/env node
/**
 * DebtFreePathways - Sitemap Generator
 * Run: node generate-sitemap.js
 * This scans all HTML files and generates sitemap.xml automatically.
 */

const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://debtfreepathways.com';
const ROOT = path.join(__dirname);
const TODAY = new Date().toISOString().split('T')[0];

// Priority map
const PRIORITIES = {
  '/': '1.0',
  '/debt-payoff-calculator/': '0.9',
  '/mortgage-calculator/': '0.9',
  '/loan-amortization-calculator/': '0.9',
  '/interest-rate-comparator/': '0.9',
  '/debt-avalanche-vs-snowball/': '0.9',
  '/emergency-fund-calculator/': '0.9',
  '/blog/': '0.8',
};

// Pages to skip
const SKIP = [
  '404.html', 'blog-index.html', '_headers', '_redirects',
  'robots.txt', 'ads.txt', 'sitemap.xml'
];

function findPages(dir, urlBase = '') {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const urls = [];
  
  for (const entry of entries) {
    if (entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    if (SKIP.includes(entry.name)) continue;
    
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory()) {
      const subUrl = urlBase + '/' + entry.name;
      const indexPath = path.join(fullPath, 'index.html');
      
      if (fs.existsSync(indexPath)) {
        const html = fs.readFileSync(indexPath, 'utf8');
        // Skip noindex pages
        if (html.includes('content="noindex') || html.includes("content='noindex")) continue;
        
        const url = subUrl + '/';
        urls.push(url);
      }
      
      // Recurse into directories
      urls.push(...findPages(fullPath, subUrl));
    }
  }
  
  return urls;
}

// Get root index
const rootHtml = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
let urls = ['/'];
urls.push(...findPages(ROOT));

// Remove duplicates and sort
urls = [...new Set(urls)].sort();

// Generate XML
const entries = urls.map(url => {
  const priority = PRIORITIES[url] || (url.startsWith('/blog/') ? '0.7' : '0.6');
  const changefreq = url === '/' ? 'weekly' : url.startsWith('/blog/') ? 'monthly' : 'monthly';
  return `  <url>
    <loc>${BASE_URL}${url}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}).join('\n');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`;

fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), xml);
console.log(`✓ sitemap.xml generated with ${urls.length} URLs (${TODAY})`);
