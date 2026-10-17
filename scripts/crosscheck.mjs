import fs from 'node:fs';
import path from 'node:path';

console.log('[crosscheck] Running Pre-Ship Audit & Validation...');

let hasErrors = false;

// Check 1: Agent Files A-N
const agentFiles = [
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
  'public/bfs-indexnow-key-2026.txt',
];

for (const f of agentFiles) {
  if (!fs.existsSync(path.resolve(process.cwd(), f))) {
    console.error(`[FAIL] Missing agent file: ${f}`);
    hasErrors = true;
  }
}

// Check 2: ucp: 1.0 mandatory check
try {
  const ucpRaw = fs.readFileSync(path.resolve(process.cwd(), 'public/.well-known/ucp'), 'utf8');
  const ucpJson = JSON.parse(ucpRaw);
  if (ucpJson.ucp !== '1.0') {
    console.error('[FAIL] ucp field in .well-known/ucp must be "1.0"');
    hasErrors = true;
  }
} catch (e) {
  console.error('[FAIL] Failed reading .well-known/ucp:', e.message);
  hasErrors = true;
}

// Check 3: auth.md first line check
try {
  const authRaw = fs.readFileSync(path.resolve(process.cwd(), 'public/auth.md'), 'utf8');
  if (!authRaw.startsWith('# Auth.md')) {
    console.error('[FAIL] public/auth.md MUST start with exactly "# Auth.md"');
    hasErrors = true;
  }
} catch (e) {
  console.error('[FAIL] Failed reading auth.md:', e.message);
  hasErrors = true;
}

// Check 4: MCP server-card tools check
try {
  const mcpRaw = fs.readFileSync(path.resolve(process.cwd(), 'public/.well-known/mcp/server-card.json'), 'utf8');
  const mcpJson = JSON.parse(mcpRaw);
  const toolNames = mcpJson.capabilities.tools.map(t => t.name);
  const expectedTools = ['search_products', 'get_product', 'list_categories', 'get_policies', 'create_order_draft'];
  for (const exp of expectedTools) {
    if (!toolNames.includes(exp)) {
      console.error(`[FAIL] Tool ${exp} missing from server-card.json`);
      hasErrors = true;
    }
  }
} catch (e) {
  console.error('[FAIL] Failed reading server-card.json:', e.message);
  hasErrors = true;
}

if (hasErrors) {
  console.error('[crosscheck] Pre-ship check FAILED.');
  process.exit(1);
} else {
  console.log('[crosscheck] All Pre-Ship Integrity checks PASSED!');
}
