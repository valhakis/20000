// npm install --save rollup-plugin-babel
// npm install --save babel-preset-es2015-rollup
// npm install --save rollup-plugin-eslint

import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from 'rollup-plugin-json';

export default {
  input: './rollup/index.js',
  output: {
    file: 'dist/js/rollup.bundle.js',
    format: 'iife',
    // name: 'rollup',
    globals: {
      // jquery: '$',
      // axios: 'axios'
    },
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    resolve({
      //  module: true,
      //  jsnext: true,
      //  main: true,
      browser: true,
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    //babel({
    //  exclude: 'node_modules/**',
    //  presets: [
    //    ['env', {
    //      modules: false
    //    }]
    //  ],
    //  // plugins: ['external-helpers']
    //}),
    //// babel({
    ////   presets: ['es2015-rollup'],
    ////   exclude: 'node_modules/**'
    //// }),
    //commonjs({
    //  include: 'node_modules/**'
    //}),
    //json(),
    ////babel(),
  ],
  // external: ['axios']
};
