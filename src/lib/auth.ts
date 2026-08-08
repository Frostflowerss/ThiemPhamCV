import "server-only";
import { createHmac, timingSafeEqual } from "crypto";

const SECRET = process.env.AUTH_SECRET ?? "";
const MAX_AGE = 60 * 60 * 8; // 8h

/** Sign a session token: base64(payload).hmac */
export function createToken(): string {
  const payload = Buffer.from(
    JSON.stringify({ exp: Date.now() + MAX_AGE * 1000 })
  ).toString("base64url");
  const sig = createHmac("sha256", SECRET).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function verifyToken(token: string | undefined): boolean {
  if (!token || !SECRET) return false;
  const [payload, sig] = token.split(".");
  if (!payload || !sig) return false;
  const expected = createHmac("sha256", SECRET)
    .update(payload)
    .digest("base64url");
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  try {
    const { exp } = JSON.parse(Buffer.from(payload, "base64url").toString());
    return typeof exp === "number" && exp > Date.now();
  } catch {
    return false;
  }
}

export const COOKIE_NAME = "pnt_session";
export const COOKIE_MAX_AGE = MAX_AGE;
