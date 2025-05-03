
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://geniusgopher.github.io/angular-table/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-table"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 25158, hash: '82249b226e8758272a47bd92505581986d8c628333ddb28a8044df6d0a88de62', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17158, hash: '5d90e666c5c840216b47e9d5476291a9606327263eb6f15aeb193312059c6ed9', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 146845, hash: '70533c1b603016b0536eaba6711c2fa6c4415c01c031dba8dac55adedcba3d26', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-QDWS3EWS.css': {size: 13500, hash: 'KCEaz8drWgk', text: () => import('./assets-chunks/styles-QDWS3EWS_css.mjs').then(m => m.default)}
  },
};
