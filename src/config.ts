// Integration endpoints for the St James Zongoro Primary School management
// system (a separate Next.js app). Override the base URL at build time with a
// Vite env var, e.g. VITE_MANAGEMENT_URL=https://... npm run build
const base =
  (import.meta.env.VITE_MANAGEMENT_URL as string | undefined) ??
  'https://schoolhub1.vercel.app';

export const MANAGEMENT_URL = base.replace(/\/+$/, '');
export const MANAGEMENT_ENROLL_URL = `${MANAGEMENT_URL}/zongoro/enroll`;
export const MANAGEMENT_LOGIN_URL = `${MANAGEMENT_URL}/zongoro/login`;
export const CONTACT_API_URL = `${MANAGEMENT_URL}/api/public/contact`;