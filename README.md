<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>
</div>

<br>

# ngx-nes-css

This library is a wrap around [NES.css](https://nostalgic-css.github.io/NES.css/), a NES-style (8bit-like) CSS Framework.

## Installation

### ngx-nes-css

To add `ngx-nes-css` package and required dependencies you will need to install:
- [NES.css](https://nostalgic-css.github.io/NES.css/) – 8-bit CSS framework
- [ngx-nes-css](https://github.com/jfcere/ngx-nes-css) – Angular wrapper
- [@angular/cdk](https://material.angular.io/cdk) – For dialog display

To install those librairies to your `package.json` use the following command.

```bash
npm install nes.css ngx-nes-css @angular/cdk --save
```

### Styles

To add `ngx-nes-css` required styles file you will need to include:
- [NES.css](https://nostalgic-css.github.io/NES.css/) styles file – 8-bit like styling
- [ngx-nes-css](https://github.com/jfcere/ngx-nes-css) styles file – Includes a few modifications/fixes/improvements
- [@angular/cdk/overlay](https://material.angular.io/cdk/overlay) styles file – Required for dialog display

To do so, follow either one of the methods provided below.

**CSS/SCSS import**

You can add the following imports to your global `styles.css/scss` file:

```scss
@import 'nes.css/css/nes.css';
@import 'ngx-nes-css/css/styles.css';
@import "@angular/cdk/overlay-prebuilt.css";
```

**Angular CLI**

Or you can add the following styles files to the `styles` section of your `angular.json` file:

```json
"styles": [
  "node_modules/nes.css/css/nes.css",
  "node_modules/ngx-nes-css/css/styles.css",
  "node_modules/@angular/cdk/overlay-prebuilt.css"
],
```

### Fonts

[NES.css](https://nostalgic-css.github.io/NES.css/) doesn't provide any fonts but recommends using [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P). To include the recommended font [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) use either one of the methods below.

> ☝ [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) only supports English characters. If you need any language other than English, please use another font or refer to the list of other recommended fonts here: https://github.com/nostalgic-css/NES.css#fonts

**CSS/SCSS**

You can add the import link to your global `styles.css/scss` file along with the CSS rule to apply the font:

```scss
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

html, body {
  font-family: 'Press Start 2P', cursive;
}
```

**HTML**

Or you can add the link for the font to your `index.html` file into the `<head>` tag:

```html
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
```

And add the following CSS rule to your global `styles.css/scss` file to apply the font:

```css
html, body {
  font-family: 'Press Start 2P', cursive;
}
```

## Usage

[NES.css](https://nostalgic-css.github.io/NES.css/) only provides components. You will need to define your own layout.

**Module Import**

In order to have access to all the components, you will need to import the `NesModule` into your modules like this:

```diff
import { NgModule } from '@angular/core';
+ import { NesModule } from 'ngx-nes-css';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
+   NesModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
```

**Components**

For documentation, you can refer to the demo page available @ [https://jfcere.github.io/ngx-nes-css/](https://jfcere.github.io/ngx-nes-css/) which includes collapsable code snippets. You can also directly consult the `demo` folder of this repository, more precisely the [app.component.html](https://github.com/jfcere/ngx-nes-css/blob/master/demo/src/app/app.component.html) file which contains each and every component with a few different way to use them.

## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.
