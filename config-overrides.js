const {
  override,
  addWebpackAlias,
  addDecoratorsLegacy,
  adjustStyleLoaders,
} = require("customize-cra");
const path = require("path");
const rewirePostcss = require("react-app-rewire-postcss");
// const multipleEntry = require('react-app-rewire-multiple-entry')([{
//   entry: 'src/index.tsx',
//   template: 'public/index.html',
//   outPath: '/index.html',
// },
// {
//   entry: 'src/estimate.tsx',
//   template: 'public/index.html',
//   outPath: '/estimate.html',
// }]);
module.exports = override(
  addWebpackAlias({
    "~": path.resolve(__dirname, "src"),
  }),
  adjustStyleLoaders(({ use: [, css, postcss, resolve, processor] }) => {
    if (processor && processor.loader.includes("sass-loader")) {
      processor.options.additionalData = `@import "~/style/variables.scss";`; // sass-loader
    }
  }),
  // multipleEntry.addMultiEntry,
  addDecoratorsLegacy(),
  (config, env) => {
    // 重写postcss
    rewirePostcss(config, {
      plugins: () => [
        // require("postcss-px-to-viewport")({
        //   unitToConvert: "px",
        //   viewportWidth: 750,
        //   unitPrecision: 5,
        //   propList: ["*"],
        //   viewportUnit: "vw",
        //   fontViewportUnit: "vw",
        //   selectorBlackList: [],
        //   minPixelValue: 1,
        //   mediaQuery: false,
        //   replace: true,
        //   exclude: /\/node_modules\//, // /\/src\/mobile\//,
        //   landscape: false,
        //   landscapeUnit: "vw",
        //   landscapeWidth: 1134,
        // }),
        require('postcss-pxtorem')({
          rootValue: 31.25,
          unitPrecision: 5,
          propList: ['*'],
          exclude: /\/node_modules\//, // /\/src\/mobile\//,
        }),
      ],
    });
    return config;
  }
);
