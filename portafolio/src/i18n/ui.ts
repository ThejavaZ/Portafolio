/**
 * Cadenas compartidas por la navegación, el pie y el layout.
 *
 * Cada página define su propio copy bilingüe dentro del archivo; aquí solo
 * vive lo que usan componentes compartidos por todos los idiomas.
 */
export type Locale = "es" | "en";

export const DEFAULT_LOCALE: Locale = "es";

const dictionary = {
  es: {
    skip: "Saltar al contenido",
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      stack: "Stack",
      blog: "Blog",
      contact: "Contacto",
    },
    brand: { role: "Backend Developer", home: "JavierSG — inicio" },
    navLabel: { main: "Navegación principal", mobile: "Menú móvil" },
    actions: {
      cv: "Descargar CV",
      github: "Perfil de GitHub",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
    },
    langSwitch: {
      label: "Ver el sitio en inglés",
      text: "EN",
    },
    footer: {
      tagline:
        "Desarrollador backend enfocado en crear soluciones eficientes, escalables y bien construidas. APIs, datos y todo lo que hay detrás de un buen producto.",
      available: "Disponible para proyectos",
      navigation: "Navegación",
      contact: "Contacto",
      location: "Hermosillo, Sonora · México",
      rights: "© {year} JavierSG · Todos los derechos reservados",
      made: "Hecho con Astro & Tailwind",
      top: "Volver arriba ↑",
    },
  },
  en: {
    skip: "Skip to content",
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      stack: "Stack",
      blog: "Blog (ES)",
      contact: "Contact",
    },
    brand: { role: "Backend Developer", home: "JavierSG — home" },
    navLabel: { main: "Main navigation", mobile: "Mobile menu" },
    actions: {
      cv: "Download CV",
      github: "GitHub profile",
      openMenu: "Open menu",
      closeMenu: "Close menu",
    },
    langSwitch: {
      label: "Ver el sitio en español",
      text: "ES",
    },
    footer: {
      tagline:
        "Backend developer focused on building efficient, scalable, well-crafted solutions. APIs, data and everything behind a good product.",
      available: "Available for projects",
      navigation: "Navigation",
      contact: "Contact",
      location: "Hermosillo, Sonora · Mexico",
      rights: "© {year} JavierSG · All rights reserved",
      made: "Built with Astro & Tailwind",
      top: "Back to top ↑",
    },
  },
} satisfies Record<Locale, Record<string, unknown>>;

export type Dictionary = (typeof dictionary)[Locale];

/** Devuelve las cadenas del idioma dado. */
export const t = (locale: Locale): Dictionary => dictionary[locale];

/** Ruta equivalente en el otro idioma para el conmutador de idioma. */
export const alternatePath = (pathname: string, locale: Locale, hasAlternate: boolean) => {
  if (!hasAlternate) return locale === "es" ? "/en" : "/";
  if (locale === "es") return pathname === "/" ? "/en" : `/en${pathname}`;
  return pathname.replace(/^\/en(\/|$)/, "/") || "/";
};
