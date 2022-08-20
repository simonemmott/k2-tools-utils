# Javascipt Geometry Utilities

K2 Javascript Utilities offers several utilities packages. The geometry package privide several methods to to support geometric calculations.

## Install

```
npm install @k2_tools/utils
```

## Import

``` javascript
import {geomtery} from "@k2_tools/utils";
```

## Usage
K2_tools geometry utilities offers a the following geometric calculations support functions.

1. `deg2rad`
1. `rad2deg`
1. `polar2cartesian`
1. `cartesian2polar`

### deg2rad

The `deg2rad(degrees)` method accepts a number of degrees as its argument and returns the angle in radians

### deg2rad

The `rad2deg(radians)` method accepts a number of radians as its argument and returns the angle in degrees

### polar2cartesian

The `polar2cartesian(radius, deg)` method accepts a radius and number of degrees as its argument and returns the same as a cartesian co-ordinate 
`{x : number, y : nunber}`

### cartesian2polar

The `cartesian2polar(x, y)` method accepts a cartesian point as x and y and returns the same as a polar co-ordinate
`{radius : nuber, deg : number}`


