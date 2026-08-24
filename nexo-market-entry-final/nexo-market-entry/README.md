# Nexo Market Entry — Landing page

Landing mobile-first en Next.js 16 (App Router) + Tailwind CSS, con selector de idioma ES/PT/EN,
mapa animado de entrada al mercado y blog integrado.

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel

### Opción A — CLI
```bash
npm install -g vercel
vercel login
vercel --prod
```

### Opción B — Desde GitHub
1. Sube esta carpeta a un repo de GitHub.
2. Entra a vercel.com → "Add New Project" → importa el repo.
3. Vercel detecta Next.js automáticamente. Sin configuración adicional.
4. "Deploy".

## Antes de publicar, reemplaza
- `hola@nexomarketentry.com` en `app/page.tsx` (sección de contacto) por tu email real.
- El enlace de WhatsApp `https://wa.me/5500000000000` por tu número real.
- El dominio: conéctalo desde Vercel → Settings → Domains.

## Estructura
- `app/layout.tsx` — metadata y carga de fuentes.
- `app/page.tsx` — landing principal, con el diccionario de textos ES/PT/EN.
- `app/components/EntryMap.tsx` — mapa SVG animado (flechas de 6 países convergiendo en Brasil).
- `app/blog/` — listado de blog (`page.tsx`) y artículos individuales (`[slug]/page.tsx`), con el
  contenido en `app/blog/posts.ts`. Para agregar un artículo nuevo, añade una entrada al array `posts`.
- `app/globals.css` — estilos base y animaciones del mapa (`route-line`, `map-node-pulse`).
- `tailwind.config.ts` — paleta de colores y tipografías de marca.

## Notas
- El blog está en español por ahora (no tiene selector de idioma propio todavía).
- Los nombres y posiciones de los países en el mapa están en `app/components/EntryMap.tsx` (objeto `NODES`
  y `PATHS`) — es un diagrama estilizado, no un mapa geográfico real, así que puedes ajustar coordenadas
  a mano si agregas o quitas países.
