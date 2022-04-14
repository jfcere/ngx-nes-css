<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>
</div>

<br>

# ngx-nes-css

This library is a wrap around [NES.css](https://nostalgic-css.github.io/NES.css/), a NES-style (8bit-like) CSS Framework.

## Installation

### ngx-nes-css

To add ngx-nes-css library to your package.json use the following command.

```bash
npm install ngx-nes-css --save
```

### Styles

Use one of the following methods to include the NES.css styling css file.

**AltCSS (sass, scss...)**

```scss
// style.scss
@import "./node_modules/nes.css/css/nes.css";
```

**TypeScript**

```typescript
import 'nes.css/css/nes.min.css';
```

**HTML**

```html
<!-- index.html -->
<html>
  <head>
    <link rel="stylesheet" href="./node_modules/nes.css/css/nes.min.css">
  </head>
  <body></body>
</html>
```

**Via CDN**

Import the CSS via a <link /> element:

```html
<!-- minify -->
<link href="https://unpkg.com/nes.css@2.3.0/css/nes.min.css" rel="stylesheet" />
<!-- latest -->
<link href="https://unpkg.com/nes.css@latest/css/nes.min.css" rel="stylesheet" />
<!-- core style only -->
<link href="https://unpkg.com/nes.css/css/nes-core.min.css" rel="stylesheet" />
```

### Fonts

NES.css doesn't provide any fonts, but we do maintain the following list of fonts that we recommend for usage alongside the library.

| Language  | Font                                                               |
| --------- | ------------------------------------------------------------------ |
| (Default) | [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) |
| English   | [Kongtext](https://www.dafont.com/kongtext.font)                   |
| Japanese  | [美咲フォント](http://littlelimit.net/misaki.htm)                  |
| Japanese  | [Nu もち](http://kokagem.sakura.ne.jp/font/mochi/)                 |
| Korean    | [둥근모꼴](http://cactus.tistory.com/193)                              |
| Chinese   | [Zpix (最像素)](https://github.com/SolidZORO/zpix-pixel-font)      |

## Usage

NES.css only provides components. You will need to define your own layout.

The recommended font for NES.css is [Press Start 2P][press-start-2p-font]. However, [Press Start 2P][press-start-2p-font] only supports English characters. When you're using this framework with any language other than English, please use another font. Follow the Google Fonts [instructions][google-fonts-guide] about how to include them, or simply include it as below:

```html
<head>
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet">
    <link href="https://unpkg.com/nes.css/css/nes.css" rel="stylesheet" />

    <style>
      html, body, pre, code, kbd, samp {
          font-family: "font-family you want to use";
      }
    </style>
</head>
```

## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.
