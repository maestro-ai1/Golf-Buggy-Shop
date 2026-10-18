import { NextRequest, NextResponse } from 'next/server';
import report from '@/data/keyword-report.json';
import { checkAdmin } from '@/lib/server';

export const runtime = 'nodejs';

// Keyword mapping report for the owner. Same passcode as the reply portal (X-Admin-Passcode). Regenerate with: node scripts/keyword-audit.mjs <site url>
export async function GET(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  return NextResponse.json(report, { headers: { 'Cache-Control': 'no-store' } });
}
