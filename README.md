# RenderIf

![npm](https://img.shields.io/badge/npm-austral--ui%2Frender--if-blue)
![GitHub issues](https://img.shields.io/github/issues-raw/oscarcornejo/render-if)
![NPM](https://img.shields.io/npm/dw/@austral-ui/render-if)

RenderIf is a function that receives a validation as a parameter, and if that validation is true, the content passed as children will be displayed. Try it!

## Installation

```
npm install @austral-ui/render-if
```

## Usage

### **See it in Action**

```
import React from 'react';
import { RenderIf } from '@austral-ui/render-if';

export function App() {

  const widthSize = window.innerWidth;

  return (
    <div>
        <RenderIf isTrue={widthSize > 600}>
          <span>You are using a large screen</span>
        </RenderIf>
    </div>
  );
}

export default App;
```

## Support

If you have read the examples and have any issues which you know are glitches, or would like to request something changed, please feel free to [post an issue on Github](https://github.com/oscarcornejo/render-if/issues/new).

Otherwise, if this was useful and you'd like to show your support, no donations necessary, but please consider [checking out the repo](https://github.com/oscarcornejo/render-if) and giving it a star (⭐).

## License

- Open Source **[MIT license](http://opensource.org/licenses/mit-license.php)**
