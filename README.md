<div align="center">
  <a href="https://nostalgic-css.github.io/NES.css/" target="_blank"><img src="https://user-images.githubusercontent.com/5305599/49061716-da649680-f254-11e8-9a89-d95a7407ec6a.png" alt="NES.css: NES-style  CSS framework" style="max-width: 100%;" width="600" height="315"></a>
</div>

<br>

# ngx-nes-css

This library is a wrap around [NES.css](https://nostalgic-css.github.io/NES.css/), a NES-style (8bit-like) CSS Framework.

## Installation

### ngx-nes-css

To add `ngx-nes-css` library to your `package.json` use the following command.

```bash
npm install ngx-nes-css --save
```

### Styles

To include [NES.css](https://nostalgic-css.github.io/NES.css/) styles embedded along with a few modifications/fixes/improvements into `ngx-nes-css` you need to include `ngx-nes-css/css/styles.css` file following one of the methods below.

**CSS/SCSS import**

```scss
// in your `styles.css/scss` file
@import '~ngx-nes-css/css/styles.css';
```

**Angular CLI**

```jsonc
// in your `angular.json` file
"styles": [
  "node_modules/ngx-nes-css/css/styles.css"
],
```

### Fonts

[NES.css](https://nostalgic-css.github.io/NES.css/) doesn't provide any fonts but recommends using [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P). To include the recommended font [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) use one of the methods below.

> ☝ [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P) only supports English characters. If you need any language other than English, please use another font or refer to the list of other recommended fonts here: https://github.com/nostalgic-css/NES.css#fonts

**CSS/SCSS**

Add the import link to your global `styles.css/scss` file along with the CSS rule to apply the font:

```scss
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

html, body {
  font-family: 'Press Start 2P', cursive;
}
```

**HTML**

Add the link for the font to your `index.html` file into the `<head>` tag:

```html
<link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
```

Add the following CSS rule to your global `styles.css/scss` file to apply the font:

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

As for now, the documentation for components usage consist of consulting the `demo` folder of this repository, more precisely the [app.component.html](https://github.com/jfcere/ngx-nes-css/blob/master/demo/src/app/app.component.html) file which contains each and every component with a few different way to use them.

Code snippets will be added and demo will be improved in a near futur.

## Copyright and license

Code and documentation copyright 2018 [B.C.Rikko](https://github.com/BcRikko). Code released under the MIT License. Docs released under Creative Commons.
