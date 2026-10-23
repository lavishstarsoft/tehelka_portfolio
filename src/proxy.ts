import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// A poster deep link is tehelkanews.in/<24-hex-id>. When the Tehelka News app
// is installed, Android App Links open the app directly (this proxy never runs
// for that click). Reaching here means the visitor has NO app (plain browser)
// → send them to the Play Store to install it. Normal website pages (blog,
// careers, …) are untouched: the matcher only fires for a bare 24-hex segment.
const POSTER_ID = /^\/[0-9a-fA-F]{24}$/;
const PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.lavish.yellowsingam';

export function proxy(request: NextRequest) {
  if (POSTER_ID.test(request.nextUrl.pathname)) {
    return NextResponse.redirect(PLAY_STORE, 302);
  }
  return NextResponse.next();
}

export const config = {
  // Doc-supported parenthesised-regex form (like '/about/(.*)'): a bare 24-hex
  // segment only. The in-function check above is the authoritative guard.
  matcher: '/([0-9a-fA-F]{24})',
};
