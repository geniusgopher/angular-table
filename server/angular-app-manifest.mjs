
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-table/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-table"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25128, hash: 'a7e4dee3c5687dfb2144715ec6cb81aff5c64d104f074e593190c06b14f990df', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17128, hash: '267828f1ebaf2769b9ddf9b0e27b2f34eb55c22b4e8af9d6f4bdc81e750ebf2c', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 146815, hash: 'a20b0e0c343c2082189fe33df658ecf36b2d84c4fa09040a72de0559f10e87ce', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QDWS3EWS.css': {size: 13500, hash: 'KCEaz8drWgk', text: () => import('./assets-chunks/styles-QDWS3EWS_css.mjs').then(m => m.default)}
  },
};
