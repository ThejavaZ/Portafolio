/**
 * Analítica sin cookies (Umami Cloud o una instancia propia).
 *
 * 1. Crea la cuenta en https://umami.is (hay plan gratuito) y copia el
 *    "Website ID" del panel.
 * 2. Pégalo abajo. Mientras esté vacío no se inyecta ningún script, así
 *    que el sitio sigue sin llamadas de terceros.
 * 3. Los eventos personalizados usan atributos `data-umami-event`; si el
 *    script no está cargado no hacen nada.
 *
 * Si prefieres otra herramienta (Plausible, GoatCounter…), cambia solo
 * `scriptSrc` y los atributos de evento en los componentes.
 */
export const analytics = {
  websiteId: "",
  scriptSrc: "https://cloud.umami.is/script.js",
};

/** Marca los elementos que Umami debe registrar como evento. */
export const analyticsEvent = analytics.websiteId ? { "data-umami-event": true } : {};
