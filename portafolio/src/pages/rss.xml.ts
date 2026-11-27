import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

/* "&" construido en tiempo de ejecución: evita literales de entidades */
const A = String.fromCharCode(38);

const XML_ESCAPES: Record<string, string> = {
  [A]: `${A}amp;`,
  "<": `${A}lt;`,
  ">": `${A}gt;`,
  '"': `${A}quot;`,
  "'": `${A}apos;`,
};

const escapeXml = (value: string) => value.replace(/[&<>"']/g, (char) => XML_ESCAPES[char] ?? char);

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, "") ?? "";

  const posts = (await getCollection("blog")).sort(
    (a, b) => b.data.date.getTime() - a.data.date.getTime()
  );

  const items = posts
    .map((post) => {
      const url = `${baseUrl}/blog/${post.id}`;

      return [
        "    <item>",
        `      <title>${escapeXml(post.data.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <description>${escapeXml(post.data.excerpt)}</description>`,
        `      <category>${escapeXml(post.data.category)}</category>`,
        `      <pubDate>${post.data.date.toUTCString()}</pubDate>`,
        `      <author>jsdash10000@gmail.com (${escapeXml(post.data.author)})</author>`,
        "    </item>",
      ].join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>JavierSG — Bitácora de desarrollo</title>
    <link>${baseUrl}/blog</link>
    <description>Artículos sobre desarrollo backend, arquitectura, IoT y carrera.</description>
    <language>es</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
