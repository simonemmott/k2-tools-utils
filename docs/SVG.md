# Javascipt SVG Utilities

K2 Javascript Utilities offers several utilities packages. The SVG package privide several methods to assist dynamically creating svg elements.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {svg} from "@k2_tools/utils";
```

## Usage
K2_tools SVG utilities offers a the following methods.

1. `viewBox`
1. `offset`
1. `cartesian2svg`
1. `describePath`
1. `describeArc`

### capitalizerFirstLetter

The `viewBox(xMin, yMin, width, height)` method accepts the same arguments as used to set the viewBox property of an `<svg />` element.

It returns a viewBox objectwhich can be used to set the `<svg>` viewBox attribute and as arguments to other svg utility functions.

``` javascript
const vb = viewBox(-50, -50, 100, 100);

return <svg viewBox={vb.svg}>
    ...
  </svg>;
```

sets the viewBox attribute of the `<svg>` to `-50 -50 100 100`

### offset

The `offset(viewBox, origin : string)` method accepts a viewBox as its first agrument as created by `viewBox(...)` and string
identifying the location of the origin. The origin parameter can be one of. `'bottom-left'|'top-left'|'center'`.

Its returns an offset object which can be used with the given viewBox in other `<svg>` support functions to convert the given 
arguments to the function from catresian co-ordinates at the given origin to co-ordinates in the svg's viewBox.

1. `origin = 'top-left'` sets the origin of the cartesian axis to the top left corner of the svg canvas.
1. `origin = 'bottom-left'` sets the origin of the cartesian axis to the bottom left corner of the svg canvas.
1. `origin = 'center'` sets the origin of the cartesian axis to center of the svg canvas.

using `viewBox` and `offset` allows points to be given in natural cartesian co-ordinates (y up) and converted to svg co-ordinates (y down) centered around the
configured cartesian origin accounting for the location of the svg origin as defined by viewBox.

``` javascript
const vb = viewBox(0, 0, 100, 100);
const oSet = offset(vb, 'center');
``` 

Produces an offset which locates the cartesian origin at the center of the svg canvas.


### cartesian2svg

The `cartesian2svg(x, y, viewBox, offset)` accepts an x,y co-ordinate with a viewBox and optional offset.
It returns an x,y co-ordinate on the svg axis as defined by the viewBox for cartesian axis as defined by the offset.
If no offset is given it defaults to `'top-left'`.
 

``` javascript
const vb = viewBox(0, 0, 100, 100);
const oSet = offset(vb, 'center');

console.log(JSON.stringify(cartesian2svg(25, -25, vb, oSet)));
``` 

Produces the following output

```
{x: 75, y: 75}
```
being 25 points to the right of the center and 25 points below the center of the viewBox.

### describePath

The `describePath(points : [{x,y}], viewBox, offset)` method method accepts an array of x,y co-ordinates and an optional viewBox and offset and converts the 
array of x,y co-ordinates into the descritption of a continuous svg `<path>` element.

``` javascript
const vb = viewBox(0, 0, 100, 100);
const oSet = offset(vb, 'center');

return <svg viewBox={vb.svg}>
    <path d={describePath([{x:0,y:10},{x:10,y:0},{x:0,y:-10},{x:-10,y:0}], vb, oSet) + " Z"} />
  </svg>

``` 

renders a diamond 20 points wide and 20 points high at the center of the `<svg>` canvas irrespective of the definion of the viewBox.

### describeArc

The `describeArc(rx, ry, rotation, largeArc, sweep, x, y, viewBox, offset)` method method accepts the parameters required to add an arc to an svg `<path>` element
and an optional viewBox and offset and returns the descirption of the arc.

If viewBox and offset are given then the `x` and `y` co-ordinates are recieved in the cartesian axis and the arc is described in the svg axis.


``` javascript
const vb = viewBox(0, 0, 100, 100);
const oSet = offset(vb, 'center');

return <svg viewBox={vb.svg}>
    <path d={"M 50 25 " + describeArc(25, 25, 0, 1, 0, vb, oSet)} />
  </svg>

``` 

renders a quater arc around the center of the `<svg>` canvas with a radius of 25 in the top-right quadrant. 

