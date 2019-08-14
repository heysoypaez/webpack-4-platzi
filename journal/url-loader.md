***Como trabajar con archivos estaticos (tipografias,)***

```

npm install --save-dev --save-exact url-loader
npm install --save-dev --save-exact file-loader

```

1. Usa url-loader para imagenes grandes
- archivos importados con file loader

2. Usa file-loader para imagenes pequeñas
- Menores a 900.000 bytes (900KB)
- archivos base 64


<style type="text/css">
@font-face {
  font-family: "open_sansregular";
  src: url("../fonts/OpenSans-Regular-webfont.eot");
  src: url("../fonts/OpenSans-Regular-webfont.eot?#iefix") format("embedded"),
    url("../fonts/OpenSans-Regular-webfont.woff") format("woff"),
    url("../fonts/OpenSans-Regular-webfont.ttf") format("truetype"),
    url("../fonts/OpenSans-Regular-webfont.svg#open_sansregular") format("svg");
  font-weight: normal;
  font-style: normal;
}
</style>