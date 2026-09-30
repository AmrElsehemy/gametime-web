import { NextResponse, type NextRequest } from "next/server";

// Next's built-in trailing-slash redirect is disabled (next.config.ts) so this
// can send legacy `/games/nine/` URLs to `/games/exactly-one` in one hop. It
// also takes over stripping trailing slashes for every other page.
const LEGACY_PATH = /^\/(games|support|privacy)\/nine(\/.*)?$/;

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const trimmed = pathname.length > 1 ? pathname.replace(/\/+$/, "") || "/" : pathname;
  const legacy = LEGACY_PATH.exec(trimmed);
  const target = legacy ? `/${legacy[1]}/exactly-one${legacy[2] ?? ""}` : trimmed;

  if (target === pathname) return NextResponse.next();

  // A cloned nextUrl re-appends the incoming trailing slash, so build a plain URL.
  const url = new URL(target, request.url);
  url.search = request.nextUrl.search;
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ["/((?!_next/|.*\\.[^/]+$).*)"],
};
