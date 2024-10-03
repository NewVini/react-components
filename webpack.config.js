const { merge } = require('webpack-merge');
const singleSpaDefaults = require('webpack-config-single-spa-react-ts');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'mc',
    projectName: 'react-components',
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module: {
      rules: [
        {
          test: /\.scss$/, // Processa arquivos .scss
          use: [
            'style-loader',  // Injeta CSS no DOM
            'css-loader',    // Interpreta `@import` e `url()`
            'sass-loader',   // Compila SCSS para CSS
          ],
        },
      ],
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'react_components',
        filename: 'remoteEntry.js',
        exposes: {
          './Button': './src/index.ts', 
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18.0.0' },
          'react-dom': { singleton: true, requiredVersion: '^18.0.0' },
        },
      }),
    ],
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
    },
  });
};
