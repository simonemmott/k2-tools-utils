# Javascipt Effects Utilities

K2 Javascript Utilities offers several utilities packages. The effects package privides reusable react effects.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {effects} from "@k2_tools/utils";
```

## Usage
K2_tools effect utilities offers some reusable react effects.

1. `noEffect`

### noEffect

The `noEffect()` method does nothing. It is useful for returning from react `useEffect` hooks as the cancel effect.

``` javascript
useEffect(() => {
  ...
  return noEffect;
}, []);
```

Prevents the effect from re-executing as a cancel effect when the component re-renders.