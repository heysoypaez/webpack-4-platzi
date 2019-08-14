


**Apuntes**

- Dentro de dist van los compilados de  webpack (es una convencion de desarrolladores)

- Con --config le digo a webpack-cli donde esta el archivo de configuracion

- Es posible crear diferentes archivos config para webpack:

```
  "scripts": {
    "build:local": "webpack --entry ./index.js --output ./bundle.js --mode development",
    "build:production": "webpack --mode production",
    "build:external": "webpack --config ./external/webpack.config.js"
  },
```