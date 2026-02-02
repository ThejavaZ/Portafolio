import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DzQNiFAW.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/404.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/blog.astro.mjs');
const _page3 = () => import('./pages/certificate/_id_.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/projects/_id_.astro.mjs');
const _page6 = () => import('./pages/projects.astro.mjs');
const _page7 = () => import('./pages/technologies/backend.astro.mjs');
const _page8 = () => import('./pages/technologies/desktop.astro.mjs');
const _page9 = () => import('./pages/technologies/devops.astro.mjs');
const _page10 = () => import('./pages/technologies/frontend.astro.mjs');
const _page11 = () => import('./pages/technologies/git.astro.mjs');
const _page12 = () => import('./pages/technologies/iot.astro.mjs');
const _page13 = () => import('./pages/technologies/mobile.astro.mjs');
const _page14 = () => import('./pages/technologies/python.astro.mjs');
const _page15 = () => import('./pages/technologies/sql.astro.mjs');
const _page16 = () => import('./pages/technologies/tools.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/404.astro", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/blog.astro", _page2],
    ["src/pages/certificate/[id].astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/projects/[id].astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/technologies/backend.astro", _page7],
    ["src/pages/technologies/desktop.astro", _page8],
    ["src/pages/technologies/devops.astro", _page9],
    ["src/pages/technologies/frontend.astro", _page10],
    ["src/pages/technologies/git.astro", _page11],
    ["src/pages/technologies/iot.astro", _page12],
    ["src/pages/technologies/mobile.astro", _page13],
    ["src/pages/technologies/python.astro", _page14],
    ["src/pages/technologies/sql.astro", _page15],
    ["src/pages/technologies/tools.astro", _page16],
    ["src/pages/index.astro", _page17]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "b387ef7c-3308-47c5-a21e-352854b64082"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
