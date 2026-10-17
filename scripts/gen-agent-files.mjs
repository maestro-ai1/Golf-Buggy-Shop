import fs from 'node:fs';
import path from 'node:path';

const domain = 'buggiesforsale.com.au';
const brandName = 'Buggies For Sale';

console.log(`[gen-agent-files] Validating and syncing agent files for ${domain}...`);

// Verify that public files exist
const requiredFiles = [
  'public/robots.txt',
  'public/llms.txt',
  'public/auth.md',
  'public/.well-known/api-catalog',
  'public/.well-known/agent-skills/index.json',
  'public/.well-known/mcp/server-card.json',
  'public/.well-known/oauth-protected-resource',
  'public/.well-known/oauth-authorization-server',
  'public/.well-known/openid-configuration',
  'public/.well-known/acp.json',
  'public/.well-known/ucp',
  'public/js/webmcp.js',
];

for (const rel of requiredFiles) {
  const full = path.resolve(process.cwd(), rel);
  if (!fs.existsSync(full)) {
    console.error(`[gen-agent-files] Error: Missing required file ${rel}`);
    process.exit(1);
  }
}

console.log('[gen-agent-files] All agent-ready files verified and up to date.');
