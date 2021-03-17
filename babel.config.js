module.exports = function(api) {
  api.cache(true);
  const presets = [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: '3.2.1',
        ignoreBrowserslistConfig: true,
        targets: {
          ie: '11',
          browsers: '> 1%, not dead, last 4 versions',
        },
      },
    ],
  ];
  const plugins = [
    '@babel/plugin-transform-classes',
    '@babel/plugin-transform-arrow-functions',
    '@babel/plugin-syntax-dynamic-import',
  ];
  return {
    presets,
    plugins,
  };
};
