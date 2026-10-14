# Portafolio — JavierSG

Sitio personal construido con **Astro 5** + **React 19** + **Tailwind CSS 4**, desplegado en **Netlify**.
En vivo: [https://javiersg.netlify.app](https://javiersg.netlify.app)

## 🚀 Comandos

| Comando | Acción |
| :------ | :----- |
| `pnpm install` | Instala dependencias |
| `pnpm dev` | Servidor local en `localhost:4321` |
| `pnpm build` | Build de producción en `./dist/` |
| `pnpm preview` | Vista previa del build |
| `pnpm check` | Type-check de Astro + TypeScript (`astro check`) |

## 🧱 Stack

- [Astro 5](https://astro.build) con content collections (loaders glob)
- [React 19](https://react.dev) — solo el Header como isla hidratada
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-first, sin `tailwind.config.js`)
- Adapter `@astrojs/netlify` + `@astrojs/sitemap`
- Deploy en Netlify (incluye formulario de contacto con `data-netlify`)

## 📁 Estructura

```text
src/
├── components/
│   ├── layout/        # Header.tsx (isla React) y Footer.astro
│   └── sections/      # Secciones reutilizables
├── content/           # ⭐ Contenido del sitio (Markdown)
│   ├── blog/          # Artículos de la bitácora
│   ├── certificates/  # Certificados (title, image, firstColor, secondColor)
│   ├── projects/      # Proyectos (title, image, description, frameworks, urls...)
│   └── works/         # Experiencia laboral (role, company, period, startDate, logo)
├── data/              # Datos de tecnologías por categoría (python, backend, ...)
├── layouts/           # Layout.astro (head con SEO: OG, Twitter, canonical)
├── pages/             # Rutas: /, /about, /projects, /blog, /contact, /certificates/[id]
└── styles/            # global.css (@import tailwindcss)
public/                # Assets estáticos (imágenes, cv.pdf, robots.txt)
```

## ✍️ Agregar contenido

Todo el contenido se edita en `src/content/*.md` — no toques las páginas:

- **Proyecto nuevo:** crea `src/content/projects/mi-proyecto.md` con frontmatter
  (`title`, `image`, `description`, `frameworks`, `type`, `url_production`, `url_repo`, `urls`).
  La imagen va en `public/images/projects/`.
- **Experiencia:** edita `src/content/works/` (se ordena automáticamente por `startDate`,
  el más reciente aparece primero en la landing y en *Sobre mí*).
- **Certificado:** crea `src/content/certificates/` con `firstColor`/`secondColor`
  (usan el gradiente del glow de la página de detalle).
- **Post del blog:** crea `src/content/blog/` — el slug es el nombre del archivo
  (ej. `aprendiendo-go.md` → `/blog/aprendiendo-go`).

## 🔍 SEO

`astro.config.mjs` define `site` (necesario para sitemap/canonical). Cada página puede
pasar `description` al `Layout` para Open Graph y meta description:

```astro
<Layout title="Hola | JavierSG" description="..."></Layout>
```

## 🌐 Deploy

Configurado en `netlify.toml` (`pnpm build` → `dist`). El sitemap se genera en build
como `sitemap-index.xml` y `public/robots.txt` apunta a él.
# Portafolio
