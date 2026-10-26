// Service worker for the School Admin app. It only handles opening admin.html when there is no internet.
const CACHE = 'school-admin-v1';
const SHELL = ['offline.html', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request, u = new URL(r.url);
  // Only the admin page itself; the public website and all Supabase requests are left alone.
  if (r.mode !== 'navigate' || u.origin !== location.origin || !u.pathname.endsWith('/admin.html')) return;
  e.respondWith(fetch(r).catch(() => caches.match('offline.html')));
});
