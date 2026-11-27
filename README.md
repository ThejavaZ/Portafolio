# Portafolio — JavierSG

Sitio personal construido con **Astro 5** + **Tailwind CSS 4**, desplegado en **Netlify**.
En vivo: [https://javiersg.netlify.app](https://javiersg.netlify.app)

Bilingüe: **español en `/`** e **inglés en `/en/`**.

## 🚀 Comandos

| Comando                  | Acción                                                  |
| :----------------------- | :------------------------------------------------------ |
| `pnpm install`           | Instala dependencias (instala los hooks de git)         |
| `pnpm dev`               | Servidor local en `localhost:4321`                      |
| `pnpm build`             | Build de producción en `./dist/`                        |
| `pnpm preview`           | Vista previa del build                                  |
| `pnpm check`             | Type-check de Astro + TypeScript (`astro check`)        |
| `pnpm lint`              | ESLint (incluye reglas de accesibilidad)               |
| `pnpm format`            | Aplica Prettier a todo el código                        |
| `pnpm format:check`      | Comprueba el formato sin escribir (lo usa el CI)        |
| `pnpm lhci autorun`      | Lighthouse contra `dist/` (lo usa el CI)                |

## 🧱 Stack

- [Astro 5](https://astro.build) con content collections (loaders glob)
- [Tailwind CSS 4](https://tailwindcss.com) (CSS-first, sin `tailwind.config.js`)
- Imágenes con `astro:assets` → servidas por [Netlify Image CDN](https://docs.netlify.com/build/image-cdn/overview/) (avif/webp a demanda)
- Adapter `@astrojs/netlify` + `@astrojs/sitemap` (con alternates `es-MX`/`en-US`)
- Prettier + ESLint (flat config con `eslint-plugin-astro` y reglas jsx-a11y)
- Hooks de commit con Husky + lint-staged
- CI en GitHub Actions: formato, lint, type-check, build y **Lighthouse** en cada push/PR
- Dependabot para dependencias npm y Actions

## 📁 Estructura

```text
portafolio/
├── src/
│   ├── assets/          # Imágenes optimizadas (proyectos, certificados, foto)
│   ├── components/
│   │   ├── layout/      # Header.astro y Footer.astro (bilingües)
│   │   └── ui/          # SectionHeading, ButtonLink, Tag, SpanishOnlyNotice
│   ├── content/         # ⭐ Contenido del sitio (Markdown)
│   │   ├── projects/    # Proyectos en español
│   │   ├── en/          # Misma estructura en inglés (projects/works/cubits)
│   │   ├── blog/        # Artículos (solo español por ahora)
│   │   ├── certificates/
│   │   ├── works/       # Experiencia laboral (role, achievements, period…)
│   │   └── cubits/      # Proyectos profesionales
│   ├── data/            # Tecnologías por categoría + analytics.ts
│   ├── i18n/            # Diccionarios de UI (ui.ts) y de tecnología (tech.ts)
│   ├── layouts/         # Layout.astro (head con SEO, OG, hreflang, JSON-LD)
│   ├── pages/
│   │   ├── [...locale]/ # Rutas bilingües: /  y  /en/...
│   │   ├── blog/        # Solo español
│   │   └── certificates/ # Solo español
│   └── styles/          # global.css (tokens del diseño)
├── patches/             # pnpm patch de @netlify/edge-functions-dev
├── .husky/              # Hook de pre-commit
└── netlify.toml         # Deploy + cabeceras de seguridad
```

## 🌐 Idiomas

- Español en la raíz (`/about`, `/projects/…`); inglés con prefijo (`/en/about`).
  **Las URLs en español no cambian**: no hay redirects ni pérdida de posicionamiento.
- Las páginas bilingües viven en `src/pages/[...locale]/` y `getStaticPaths` genera
  las dos variantes; blog y certificados se quedan solo en español.
- El contenido se duplica en `src/content/en/…` **con el mismo slug**, así
  `/projects/laranet` y `/en/projects/laranet` son el mismo proyecto.
- Para traducir un contenido nuevo: crea el archivo en `src/content/en/…` con el
  mismo nombre y traduce el frontmatter; las etiquetas de UI de cada página están
  en el objeto `L` del propio `.astro`, y las de UI compartida en `src/i18n/ui.ts`.

## 📬 Formulario de contacto (Netlify Forms)

El formulario ya está declarado (`data-netlify`, honeypot y `form-name=contacto`) y
el envío se hace con `fetch` mostrando confirmación en la misma página.

Para que **lleguen** los mensajes:

1. Despliega en Netlify (el formulario se detecta en el build).
2. Netlify → tu sitio → **Forms** → activa el formulario `contacto`.
3. En **Forms → Form settings → Notifications** añade "Email notification"
   con tu correo (hay plantilla "New form submission").

## 📊 Analítica (opcional, sin cookies)

Sin configurar nada, **el sitio no hace ninguna llamada a terceros**.

1. Crea la cuenta en [Umami](https://umami.is) (plan gratuito) y copia el *Website ID*.
2. Pégalo en `src/data/analytics.ts` (`websiteId`) y vuelve a desplegar.
3. Ya se registran: `cv-download`, `language-switch`, `project-repo` y
   `contact-submit`, además de las páginas visitadas.

## 🔒 Seguridad y rendimiento

`netlify.toml` añade cabeceras (`X-Frame-Options`, `nosniff`, `Referrer-Policy`,
`Permissions-Policy`, HSTS con preload, COOP/CORP) y `Cache-Control: immutable`
para los assets con hash de `/_astro/*`.

Pendiente (hay que probarlo en un preview deploy): añadir `Content-Security-Policy`,
que depende de las fuentes de Google, Maps y el Image CDN.

## 🔍 SEO

`astro.config.mjs` define `site` (necesario para sitemap/canonical). Cada página pasa
`title`, `description` y `image` al `Layout` para Open Graph, más `alternate` cuando
tiene versión traducida (emite `hreflang`).

```astro
<Layout title="Hola | JavierSG" description="..." alternate>{...}</Layout>
```

Hay JSON-LD en el home (Person + WebSite), en los proyectos
(BreadcrumbList + SoftwareApplication) y en los artículos (BlogPosting).

## 🚀 Deploy

Configurado en `netlify.toml` (`pnpm build` → `dist`, **Node 22**). El sitemap se
genera en build como `sitemap-index.xml` y `public/robots.txt` apunta a él.
