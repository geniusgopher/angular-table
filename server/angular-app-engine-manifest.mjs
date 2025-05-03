
export default {
  basePath: 'https://geniusgopher.github.io/angular-table',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
