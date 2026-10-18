import { Redis } from '@upstash/redis';

// Shared lazy Redis accessor for routes that need a raw client (mirrors lib/server.ts configuration).
let r: Redis | null | undefined;
export function getRedis(): Redis | null {
  if (r !== undefined) return r;
  const e = process.env;
  const url = e.KV_REST_API_URL || e.UPSTASH_REDIS_REST_URL || e.STORAGE_KV_REST_API_URL || e.STORAGE_URL || e.REDIS_REST_URL;
  const token = e.KV_REST_API_TOKEN || e.UPSTASH_REDIS_REST_TOKEN || e.STORAGE_KV_REST_API_TOKEN || e.STORAGE_TOKEN || e.REDIS_REST_TOKEN;
  return (r = url && token ? new Redis({ url, token }) : null);
}
