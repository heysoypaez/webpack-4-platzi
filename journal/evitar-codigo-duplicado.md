
#Desafio:
revisar codigo de optimization
Resolver warnings


- Cada import es un chunk


Esto es para produccion

1. Agregar lo siguiente al archivo webpack.config.js:

```

mode: 'production',
optimization: {
    splitChunks: {
      chunks: "all",
      minSize: 0,
      name: "commons"
    }
  }

```

2. Llamar al script commons.js generado en los archivos html:

```

<scriptsrc="dist/js/commons.js"></script>
<scriptsrc="dist/js/index.js"></script>

```
