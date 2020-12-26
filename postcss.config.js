/* eslint-disable import/no-extraneous-dependencies */
const postcssPresetEnv = require('postcss-preset-env');
const postcssFocusWithin = require('postcss-focus-within');

module.exports = {
  plugins: [
    require('cssnano'),
    require('autoprefixer'),
    postcssFocusWithin({ replaceWith: '.focus-within' }),
    require('postcss-flexbugs-fixes'),
    require('postcss-import'),
    require('postcss-for'),
    require('postcss-mixins'),
    require('postcss-calc'),
    postcssPresetEnv({
      stage: 0,
      features: {
        'nesting-rules': true,
        'color-mod-function': true,
        'custom-media': true,
        'focus-within-pseudo-class': false,
      },
    }),
  ],
};
