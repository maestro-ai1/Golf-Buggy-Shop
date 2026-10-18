import { NextRequest, NextResponse } from 'next/server';
import { checkAdmin, deleteOrder, getOrder, listOrders, saveOrder, storeReady } from '@/lib/server';

export const runtime = 'nodejs';

export async function GET(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  return NextResponse.json({ configured: storeReady(), orders: await listOrders() });
}
export async function PATCH(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  const { id, status } = await req.json();
  const o = await getOrder(id); if (!o) return NextResponse.json({ error: 'Not found' }, { status: 404 });
  if (['pending', 'payment-sent', 'screenshot-received', 'payment-confirmed'].includes(status)) { o.status = status; await saveOrder(o); }
  return NextResponse.json({ ok: true, order: o });
}
export async function DELETE(req: NextRequest) {
  const bad = checkAdmin(req); if (bad) return bad;
  const id = req.nextUrl.searchParams.get('id') || ''; await deleteOrder(id);
  return NextResponse.json({ ok: true });
}
