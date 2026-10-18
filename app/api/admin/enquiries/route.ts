import { NextRequest, NextResponse } from 'next/server';
import { checkAdmin, deleteEnquiry, listEnquiries, storeReady } from '@/lib/server';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  return NextResponse.json({ configured: storeReady(), enquiries: await listEnquiries() });
}
export async function DELETE(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  await deleteEnquiry(req.nextUrl.searchParams.get('id') || '');
  return NextResponse.json({ ok: true });
}
