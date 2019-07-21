# Props

The list of all elementary styling props.


### Layout

- [display / d](#display)
- [height / h](#height)
- [minHeight / mih](#minHeight)
- [maxHeight / mah](#maxHeight)
- [width / w](#width)
- [minWidth / miw](#minWidth)
- [maxWidth / maw](#maxWidth)
- [size](#size)
- [verticalAlign](#verticalAlign)


### Spaces
 
- [padding / p](#p)
- [paddingTop / pt](#pt)
- [paddingRight / pr](#pr)
- [paddingBottom / pb](#pb)
- [paddingLeft / pl](#pl)
- [paddingX / px](#px)
- [paddingY / py](#py)
- [margin / m](#m)
- [marginTop / mt](#mt)
- [marginRight / mr](#mr)
- [marginBottom / mb](#mb)
- [marginLeft / ml](#ml)
- [marginX / mx](#mx)
- [marginY / my](#my)


### Typography

- [fontSize / fz](#fontSize)
- [color / c](#color)
- [fontFamily / ff](#fontFamily)
- [fontWeight / fw](#fontWeight)
- [textAlign / ta](#textAlign)
- [lineHeight / lh](#lineHeight)
- [fontStyle / fs](#fontStyle)
- [letterSpacing / lts](#letterSpacing)


### Flex
 
- [alignItems / ai](#alignItems)
- [alignContent / ac](#alignContent)
- [justifyItems / ji](#justifyItems)
- [justifyContent / jc](#justifyContent)
- [flexWrap / fxw](#flexWrap)
- [flexBasis / fxb](#flexBasis)
- [flexDirection / fxd](#flexDirection)
- [flex / fx](#flex)
- [order / ord](#order)


### Grid
 
- [justifySelf / js](#justifySelf)
- [alignSelf / as](#alignSelf)
- [gridGap](#gridGap)
- [gridColumnGap](#gridColumnGap)
- [gridRowGap](#gridRowGap)
- [gridColumn](#gridColumn)
- [gridRow](#gridRow)
- [gridAutoFlow](#gridAutoFlow)
- [gridAutoColumns](#gridAutoColumns)
- [gridAutoRows](#gridAutoRows)
- [gridTemplateColumns](#gridTemplateColumns)
- [gridTemplateRows](#gridTemplateRows)
- [gridTemplateAreas](#gridTemplateAreas)
- [gridArea](#gridTemplateAreas)


### Background
 
- [background / bg](#bg)
- [backgroundColor / bgc](#bgc)
- [backgroundImage / bgi](#background)
- [backgroundSize / bgsz](#backgroundSize)
- [backgroundPosition / bgp](#backgroundPosition)
- [backgroundRepeat / bgr](#backgroundRepeat)


### Misc
 
- [border / bd](#border)
- [borderTop / bdt](#borderTop)
- [borderRight / bdr](#borderRight)
- [borderBottom / bdb](#borderBottom)
- [borderLeft / bdl](#borderLeft)
- [borderColor / bdc](#borderColor)
- [borderRadius / bdrs](#borderRadius)
- [opacity / op](#opacity)
- [boxShadow / bxsh](#boxShadow)
- [overflow / ov](#overflow)


### Position
 
- [position / pos](#position)
- [top / t](#top)
- [right / r](#right)
- [bottom / b](#bottom)
- [left / l](#left)
- [zIndex / z](#zIndex)
<br/>
<br/>



## Reference


### `display`	

 This CSS property specifies the display behavior (the type of rendering box) of an element.	

| Type                                                          | Default |	
| ------------------------------------------------------------- | :----- |	
| oneOf(inline, block, inline-block, flex, grid, none) or array |  block  |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "inline"                                                      |  Simple value  |	
| ["block", "block", "inline", "inline", "inline"]              |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>

### `height`	

 This CSS property sets the height of an element. The height of an element does not include padding, borders, or margins.	

| Type                    | Default |	
| ----------------------- | :-----  |	
| string, number or array |  auto   |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| "auto"                                                        |  The browser calculates the height  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `minHeight`	

 This CSS property defines the minimum height of an element.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |    0    |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `maxHeight`	

 This CSS property defines the maximum height of an element.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `width`	

 This CSS property sets the width of an element. The width of an element does not include padding, borders, or margins.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  auto   |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| "auto"                                                        |  The browser calculates the width  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `minWidth`	

 This CSS property defines the minimum width of an element.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |    0    |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `maxWidth`	

 This CSS property defines the maximum width of an element.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `size`	

 This property defines both are "width" and "height" CSS properties.	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| 1/2                                                           |  Value in fractions of the parent container  |	
| [1, 1/2, 2/3, 2/3, 1/3]                                       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `verticalAlign`	

 This CSS property sets the vertical alignment of an element.	

| Type                                                        | Default  |	
| ----------------------------------------------------------- | :------- |	
| oneOf(baseline, text-top, text-bottom, sub, super) or array | baseline |	
<br/>

| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "baseline"                                                      |  Simple value  |	
| ["baseline", "baseline", "text-top", "text-top", "text-top"]              |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>

### `p`	

 The shorthand of the "padding" CSS property. Are used to generate space around an element's content, inside of any defined borders.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>

|      Examples of value       |                                                             Description                                                              |
| ---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| "100px"                      | Value in pixels                                                                                                                      |
| "40%"                        | Percentage value                                                                                                                     |
| "10em"                       | Value in em                                                                                                                          |
| "10rem"                      | Value in rem                                                                                                                         |
| "10ch"                       | Value in ch                                                                                                                          |
| "10ex"                       | Value in ex                                                                                                                          |
| "10vh"                       | Value in vh                                                                                                                          |
| "10vw"                       | Value in vw                                                                                                                          |
| "10vmin"                     | Value in vmin                                                                                                                        |
| "10vmax"                     | Value in vmax                                                                                                                        |
| 5                            | Value from theme/scale                                                                                                               |
| [5, 5, 6, 6, 6]              | Value for diffenent breakpoints (sets in theme/breakpoints)                                                                          |
| "100px, 200px, 300px, 400px" | The four-value syntax separately: first for top padding, second for right padding, third for bottom padding, fourth for left padding |
| "100px, 200px, 300px"        | The three-value syntax separately: first for top padding, second for right and left paddings, third for bottom padding               |
| "100px, 200px"               | The two-value syntax separately: first for top and bottom paddings, second for right and left paddings                               |
<br/>

### `pt`	

 The shorthand of the "padding-top" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>

| Examples of value |                         Description                         |
| ----------------- | :---------------------------------------------------------- |
| "100px"           | Value in pixels                                             |
| "40%"             | Percentage value                                            |
| "10em"            | Value in em                                                 |
| "10rem"           | Value in rem                                                |
| "10ch"            | Value in ch                                                 |
| "10ex"            | Value in ex                                                 |
| "10vh"            | Value in vh                                                 |
| "10vw"            | Value in vw                                                 |
| "10vmin"          | Value in vmin                                               |
| "10vmax"          | Value in vmax                                               |
| 5                 | Value from theme/scale                                      |
| [5, 5, 6, 6, 6]   | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>

### `pr`	

 The shorthand of the "padding-right" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `pb`	

 The shorthand of the "padding-bottom" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `pl`	

 The shorthand of the "padding-left" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `px`	

 Both are "padding-right" and "padding-left" (x-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `py`	

 This property defines both are "padding-top" and "padding-bottom" (y-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `m`	

 The shorthand of the "margin" CSS property. Are used to sets the margins for an element, outside of any defined borders.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
| "100px, 200px, 300px, 400px"                                  |  The four-value syntax separately: first for top margin, second for  right margin, third for bottom margin, fourth for left margin |	
| "100px, 200px, 300px"                                         |  The three-value syntax separately: first for top margin, second for  right and left margins, third for bottom margin |	
| "100px, 200px"                                         |  The two-value syntax separately: first for top and bottom margins, second for right and left margins |
<br/>


### `mt`	

 The shorthand of the "margin-top" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `mr`	

 The shorthand of the "margin-right" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `mb`	

 The shorthand of the "margin-bottom" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `ml`	

 The shorthand of the "margin-left" CSS property.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `mx`	

 This property defines both are "margin-right" and "margin-left" (x-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `my`	

 Both are "margin-top" and "margin-bottom" (x-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :------ |	
| string, number or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "100px"                                                       |  Value in pixels                  |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/scale           |	
| [5, 5, 6, 6, 6]                                               |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `fontSize`	

 This CSS property sets the size of a font.	

| Type                                                                                                                          | Default   |	
| ----------------------------------------------------------------------------------------------------------------------------- | :-------- |	
| oneOf(medium, xx-small, x-small, small, large, x-large, xx-large, smaller, larger, initial, inherit), string, number or array |  medium   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "medium"                                                      |  Value is a predefined name        |	
| "40%"                                                         |  Percentage value                 |	
| "10em"                                                        |  Value in em                      |	
| "10rem"                                                       |  Value in rem                     |	
| "10ch"                                                        |  Value in ch                      |	
| "10ex"                                                        |  Value in ex                      |	
| "10vh"                                                        |  Value in vh                      |	
| "10vw"                                                        |  Value in vw                      |	
| "10vmin"                                                      |  Value in vmin                    |	
| "10vmax"                                                      |  Value in vmax                    |	
| 5                                                             |  Value from theme/fontSizes       |	
| ["12px", "14px", "16px", "18px", "20px"]                      |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `color`	

 This CSS property specifies the color of text.	
 They can be specified by the following methods:
 - Hexadecimal colors (`#0000ff`)
 - RGB colors (`rgb(0, 0, 255)`)
 - RGBA colors (`rgba(0, 0, 255, 0.3)`)
 - HSL colors (`hsl(120, 100%, 25%)`)
 - HSLA colors (`hsla(120, 100%, 25%, 0.3)`)
 - Predefined/Cross-browser color names (`darkblue`)
 - Theme variable (`primary`)

| Type            | Default           |	
| --------------- | :---------------- |	
| string or array | *not specified*   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "#0000ff"                                                     |  Value in hexadecimal colors      |	
| "rgb(0, 0, 255)"                                              |  Value in RGB colors              |	
| "rgba(0, 0, 255, 0.3)"                                        |  Value in RGBA colors             |	
| "hsl(120, 100%, 25%)"                                         |  Value in HSL colors              |	
| "hsla(120, 100%, 25%, 0.3)"                                   |  Value in ch                      |	
| "darkblue"                                                    |  Value is a predefined name        |	
| "primary"                                                     |  Value from theme/colors          |	
| ["primary", "red", "rgb(0, 0, 255)", "yellow-l3", "green-d2"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `fontFamily`	

 This CSS property specifies the font for an element

| Type                    | Default |	
| ----------------------- | :------ |	
| string or array |  *depends on the browser*   |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "times"                                                       |  Value is the name of a font-family  |	
| "sans-serif"                                                  |  Value is the name of a generic-family  |	
| "'Times New Roman', Times, serif"                             |  Value are several font names as a "fallback" system. If the browser does not support the first font, it tries the next font  |	
| "sans-heavy"                                                  |  Value from theme/fonts  |	
| ["sans-serif", "sans-serif", "serif", "serif", "serif"]       |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `fontWeight`	

 This CSS property sets how thick or thin characters in text should be displayed.

| Type                                                                                                          | Default   |	
| ------------------------------------------------------------------------------------------------------------- | :-------- |	
| oneOf(normal, bold, bolder, lighter, 100, 200, 300, 400, 500, 600, 700, 800, 900, initial, inherit), or array |  normal   |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "normal"                                                      |  Value is a predefined name  |	
| 500                                                           |  Value in number of weightness  |	
| [700, 600, 500, 400, 300]                                     |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `textAlign`	

 This CSS property specifies the horizontal alignment of text in an element.

| Type                                                            | Default           |	
| --------------------------------------------------------------- | :---------------- |	
| oneOf(left, right, center, justify, initial, inherit), or array |  left *or* right  |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "left"                                                        |  Value is a predefined name  |	
| ["center", "center", "left", "left", "left"]                  |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `lineHeight`	

 This CSS property specifies the height of a line.
 It can be specified in number, length or percentage.

| Type                       | Default  |	
| -------------------------- | :------- |	
| "normal", string, or array |  normal  |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "normal"                                                      |  Value is a predefined name  |	
| "1.6"                                                         |  Value in numbers  |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| ["1", "1", "1.6", "2", "2"]                                   |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `fontStyle`	

 This CSS property specifies the font style for a text.
 It can be specified in number, length or percentage.

| Type                                                       | Default  |	
| ---------------------------------------------------------- | :------- |	
| oneOf(normal, italic, oblique, initial, inherit), or array |  normal  |
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "normal"                                                      |  Value is a predefined name  |	
| ["normal", "normal", "normal", "italic", "italic"]            |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `letterSpacing`	

 This CSS property increases or decreases the space between characters in a text.
 It can be specified in number, length or percentage.

| Type                                              | Default  |	
| ------------------------------------------------- | :------- |	
| oneOf(normal, initial, inherit), string, or array |  normal  |
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "normal"                                                      |  Value is a predefined name  |	
| "2px"                                                         |  Value in pixels  |	
| ["normal", "normal", "normal", "italic", "italic"]            |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `alignItems`	

 This CSS property specifies the default alignment for items inside the flexible container.	

| Type                                                                              | Default |	
| --------------------------------------------------------------------------------- | :------ |	
| oneOf(stretch, center, flex-start, flex-end, baseline, initial, inherit) or array | stretch |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "stretch"                                                      |  Value is a predefined name  |	
| ["center", "center", "flex-start", "flex-start", "flex-start"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `alignContent`	

 This CSS property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines. There must be multiple lines of items for this property to have any effect!	

| Type                                                                                                 | Default |	
| ---------------------------------------------------------------------------------------------------- | :------ |	
| oneOf(stretch, center, flex-start, flex-end, space-between, space-around, initial, inherit) or array | stretch |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "stretch"                                                      |  Value is a predefined name  |	
| ["center", "center", "flex-start", "flex-start", "flex-start"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `justifyItems`	

 This CSS property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.	

| Type                                                                                                                                                                                                                                                       | Default |	
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |	
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or array |  none   |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "stretch"                                                      |  Value is a predefined name  |	
| ["center", "center", "flex-start", "flex-start", "flex-start"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `justifyContent`	

 This CSS property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).	

| Type                                                                                        |  Default   |	
| ------------------------------------------------------------------------------------------- | :--------- |	
| oneOf(flex-start, flex-end, center, space-between, space-around, initial, inherit) or array | flex-start |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "center"                                                      |  Value is a predefined name  |	
| ["center", "center", "flex-start", "flex-start", "flex-start"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `flexWrap`	

 This CSS property specifies whether the flexible items should wrap or not.	

| Type                                                         | Default |	
| ------------------------------------------------------------ | :------ |	
| oneOf(nowrap, wrap, wrap-reverse, initial, inherit) or array | nowrap  |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "wrap"                                                      |  Value is a predefined name  |	
| ["wrap", "wrap", "nowrap", "nowrap", "nowrap"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `flexBasis`	

 This CSS property specifies the initial length of a flexible item.	

| Type            | Default |	
| --------------- | :------ |	
| number or array |    0    |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "1"                                                           |  Value in number  |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| ["1", "1", "2", "2", "2"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `flexDirection`	

 This CSS property specifies the direction of the flexible items.	

| Type                                                                       | Default |	
| -------------------------------------------------------------------------- | :------ |	
| oneOf(row, row-reverse, column, column-reverse, initial, inherit) or array |   row   |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "row"                                                      |  Value is a predefined name  |	
| ["column", "column", "column", "row", "row"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `flex`	

 This CSS property is a shorthand property for: flex-grow, flex-shrink, flex-basis.	

| Type            | Default  |	
| --------------- | :------- |	
| string or array | 0 1 auto |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "auto"                                                        |  Value is a predefined name  |	
| "0 1 auto"                                                    |  Value is a group flex-grow flex-shrink and flex-basis values |	
| ["1 1 auto", "1 1 auto", "1 1 auto", "auto", "auto"]                  |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `order`	

 This CSS property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.	

| Type            | Default |	
| --------------- | :------ |	
| number or array |    0    |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "0"                                                           |  Value in number  |	
| ["0", "0", "1", "1", "1"]                                     |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `justifySelf`	

 This CSS property set the way a box is justified inside its alignment container along the appropriate axis.	

| Type                                                                                                                                                                                                                                                       | Default |	
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |	
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or array |  auto   |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "stretch"                                                     |  Value is a predefined name  |	
| ["stretch", "stretch", "center", "center", "center"]            |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `alignSelf`	

 This CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.	

| Type                                                                                                                                                                                                                                                       | Default |	
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------ |	
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or array |  auto   |	
<br/>
| Examples of value                                             | Description |	
| ------------------------------------------------------------- | :--------- |	
| "stretch"                                                     |  Value is a predefined name  |	
| ["stretch", "stretch", "center", "center", "center"]          |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `gridGap`	

 It is a shorthand for row-gap and column-gap.	

 **Syntax**: there are three different syntaxes you can use with this property:	

1. the one-value syntax for both row and column in any CSS units ("20px", "3vmin", "100%", e.g.),	
2. the two-value syntax separately: first row, second column in any CSS units ("20px 10px", "3vmin 2vmax", "21px 82%", e.g.),	
3. global values (inherit, initial, unset)	

| Type            | Default |	
| --------------- | :------ |	
| string or array | normal  |	
<br/>
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| "100px 200px"                                                 |  The two-value syntax separately: first row, second column |	
| ["30px", "30px", "60px", "60px", "60px"]                      |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>

### `gridColumnGap`	

 This CSS property sets the size of the gap (gutter) between an element's columns.	

| Type                                                   | Default |	
| ------------------------------------------------------ | :------ |	
| oneOf(normal, inherit, initial, unset) string or array | normal  |	
<br/>
| "normal"                                                       |  Value is a predefined name   |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| ["30px", "30px", "60px", "60px", "60px"]                      |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `gridRowGap`	

 This CSS property sets the size of the gap (gutter) between an element's grid rows.	

| Type                                                   | Default |	
| ------------------------------------------------------ | :------ |	
| oneOf(normal, inherit, initial, unset) string or array | normal  |	
<br/>
| "normal"                                                       |  Value is a predefined name   |	
| "100px"                                                       |  Value in pixels  |	
| "40%"                                                         |  Percentage value  |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| ["30px", "30px", "60px", "60px", "60px"]                      |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `gridColumn`	

 This is a shorthand property for grid-column-start and grid-column-end.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>
| "auto"                                                        |  Value is a predefined name |
| "1"                                                           |  Value in number for both properties: grid-column-start and grid-column-end |
| "2 / 4"                                                       |  The two-value syntax separately: first for grid-column-start, second for grid-column-end   |	
| "somegridarea"                                                |  Value is a name  |	
| "somegridarea / someothergridarea"                            |  The two-value syntax separately: first for grid-column-start, second for grid-column-end   |	
| "4 somegridarea / 6"                                          |  The two-value syntax separately: first for grid-column-start, second for grid-column-end   |	
| "span 3 / 6"                                                  |  Percentage value  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| ["30px", "30px", "60px", "60px", "60px"]                      |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `gridRow`	

 This is a shorthand property for grid-row-start and grid-row-end.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>



### `gridAutoFlow`	

 This CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.	

| Type                                                                                 | Default |	
| ------------------------------------------------------------------------------------ | :------ |	
| oneOf(row, column, dense, row dense, column dense, inherit, initial, unset) or array |   row   |<br/>




### `gridAutoColumns`	

 This CSS property specifies the size of an implicitly-created grid column track.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>



### `gridAutoRows`	

 This CSS property specifies the size of an implicitly-created grid row track.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>



### `gridTemplateColumns`	

 This CSS property defines the line names and track sizing functions of the grid columns.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>



### `gridTemplateRows`	

 This CSS property defines the line names and track sizing functions of the grid rows.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>



### `gridTemplateAreas`	

 This CSS property specifies named grid areas.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>



### `gridArea`	

 It is a shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>



### `bgс`	

 The shorthand of the "background-color" CSS property.	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "#0000ff"                                                     |  Value in hexadecimal colors      |	
| "rgb(0, 0, 255)"                                              |  Value in RGB colors              |	
| "rgba(0, 0, 255, 0.3)"                                        |  Value in RGBA colors             |	
| "hsl(120, 100%, 25%)"                                         |  Value in HSL colors              |	
| "hsla(120, 100%, 25%, 0.3)"                                   |  Value in ch                      |	
| "darkblue"                                                    |  Value is a predefined name        |	
| "primary"                                                     |  Value from theme/colors          |	
| ["primary", "red", "rgb(0, 0, 255)", "yellow-l3", "green-d2"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `background`	

 That's a shorthand property for background-color, background-image, background-position, background-size, background-repeat, background-origin, background-clip, background-attachment.	

 **Syntax**: background="bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment"	

| Type            |  Default   |	
| --------------- | :--------- |	
| string or array | individual |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "lightblue url('image.jpg') center center cover no-repeat padding-box content-box fixed"           |  Value is a group of values for properties in order: background-color, background-image, background-position, background-size, background-repeat, background-origin, background-clip, background-attachment      |	
<br/>



### `backgroundImage`	

 This CSS property sets one or more background images for an element.	

 **Syntax**: backgroundColor="url(firstImage.png), url(secondImage.png)"	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "url(image1.jpg), url(image2.jpg)"                            |  Value is the two image URLs       |	
| ["url(image1.jpg)", "url(image2.jpg)", "url(image3.jpg)", "url(image4.jpg)", "url(image5.jpg)"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `backgroundSize`	

 This CSS property specifies the size of the background images.	

 **Syntax**: there are four different syntaxes you can use with this property:	

 1. the keyword syntax ("auto", "cover" and "contain"),	
1. the one-value syntax (sets the width of the image (height becomes "auto"),	
2. the two-value syntax (first value: width of the image, second value: height),	
3. the multiple background syntax (separated with comma).	

| Type                                                           | Default |	
| -------------------------------------------------------------- | :------ |	
| oneOf(auto, cover, contain, initial, inherit), string or array |  auto   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "auto"                                                        |  Value is a predefined name       |	
| "100px"                                                       |  Value in pixels  |	
| "50%"                                                         |  Percentage value       |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| "10px 150px"                                                  |  The two-value syntax separately: first for width, second for height |
| ["cover", "cover", "cover", "contain", "contain"]              |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `backgroundPosition`	

 This CSS property sets the starting position of a background image.	

 **Syntax**: there are three different syntaxes you can use with this property:	

1. the keyword syntax ("left top", "left center", e.g.),	
2. the two-value syntax in percentages (the first value is the horizontal position and the second value is the vertical. The top left corner is 0% 0%),	
3. the two-value syntax in any CSS units(the first value is the horizontal position and the second value is the vertical. The top left corner is 0 0).	

| Type                                                                                                                                        | Default |	
| ------------------------------------------------------------------------------------------------------------------------------------------- | :------ |	
| oneOf(left top, left center, left bottom, right top, right center, right bottom, center top, center center, center bottom), string or array |  0% 0%  |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "left top"                                |  The two-value syntax in predefined names separately: first for horizontal, second for vertical       |	
| "25% 75%"                                 |  The two-value syntax in percentages separately: first for horizontal, second for vertical       |	
| "50px 150px"                                 |  The two-value syntax in pixels separately: first for horizontal, second for vertical       |	
| ["left top", "left top", "left top", "center", "center"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>


### `backgroundRepeat`	

 This CSS property sets if/how a background image will be repeated.	

| Type                                                                                  | Default |	
| ------------------------------------------------------------------------------------- | :------ |	
| oneOf(repeat, repeat-x, repeat-y, no-repeat, space, round, initial, inherit) or array | repeat  |
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "repeat"                                                      |  Value is a predefined name       |	
| ["repeat", "repeat-x", "no-repeat", "space", "round"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |	
<br/>



### `border`	

 It is a shorthand property for: border-width, border-style (required), border-color.	

| Type            |      Default      |	
| --------------- | :---------------- |	
| string or array | medium none color |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "2px solid blue"                                              |  The three-value syntax separately: first for border-width, second for border-style, third for border-color        |	
| ["2px solid blue", "2px solid blue", "3px solid blue", "3px solid blue", "4px solid blue"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>



### `borderTop`	

 It is a shorthand property sets all the top border properties in one declaration. The properties that can be set must be in the following order: border-top-width, border-top-style (required), border-top-color.	

| Type            |      Default      |	
| --------------- | :---------------- |	
| string or array | medium none color |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "2px solid blue"                                              |  The three-value syntax separately: first for border-top-width, second for border-top-style, third for border-top-color        |	
| ["2px solid blue", "2px solid blue", "3px solid blue", "3px solid blue", "4px solid blue"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>


### `borderRight`	

 It is a shorthand property sets all the right border properties in one declaration. The properties that can be set must be in the following order: border-right-width, border-right-style (required), border-right-color.	

| Type            |      Default      |	
| --------------- | :---------------- |	
| string or array | medium none color |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "2px solid blue"                                              |  The three-value syntax separately: first for border-right-width, second for border-right-style, third for border-right-color        |	
| ["2px solid blue", "2px solid blue", "3px solid blue", "3px solid blue", "4px solid blue"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>



### `borderBottom`	

 It is a shorthand property sets all the bottom border properties in one declaration. The properties that can be set must be in the following order: border-bottom-width, border-bottom-style (required), border-bottom-color.	

| Type            |      Default      |	
| --------------- | :---------------- |	
| string or array | medium none color |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "2px solid blue"                                              |  The three-value syntax separately: first for border-bottom-width, second for border-bottom-style, third for border-bottom-color        |	
| ["2px solid blue", "2px solid blue", "3px solid blue", "3px solid blue", "4px solid blue"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>



### `borderLeft`	

 It is a shorthand property sets all the left border properties in one declaration. The properties that can be set must be in the following order: border-left-width, border-left-style (required), border-left-color.	

| Type            |      Default      |	
| --------------- | :---------------- |	
| string or array | medium none color |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "2px solid blue"                                              |  The three-value syntax separately: first for border-left-width, second for border-left-style, third for border-left-color        |	
| ["2px solid blue", "2px solid blue", "3px solid blue", "3px solid blue", "4px solid blue"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>



### `borderColor`	

 This CSS property sets the color of an element's four borders. This property can have from one to four values.	

 **Syntax**: there are four different syntaxes you can use with this property:	

 1. the one-value syntax (the value applies to all four borders),	
1. the two-value syntax (first value applies to top and bottom, and the second value applies to right and left borders),	
2. the three-value syntax (first value applies to top, second value applies to right and left, and third value applies to bottom border),	
3. the four-value syntax (first value applies to top, second value applies to right, third value applies to bottom, and fourth value applies to left border).	

| Type                                                  | Default |	
| ----------------------------------------------------- | :------ |	
| oneOf(transparent, initial, inherit), string or array |  none   |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "blue"                                                        |  The one-value syntax for all four borders |	
| "blue green"                                                  |  The two-value syntax separately: first for top and bottom borders, second for left and right borders |	
| "blue green yellow"                                           |  The three-value syntax separately: first for top border, second for left and right borders, third for bottom border |	
| "blue green yellow orange"                                    |  The four-value syntax separately: first for top border, second for right border, third for bottom border, fourth for left border |	
| ["blue", "black", "green", "yellow", "red"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>



### `borderRadius`	

 This CSS property defines the radius of the element's corners. This property can have from one to four values.	

 **Syntax**: there are four different syntaxes you can use with this property:	

 1. the one-value syntax (the value applies to all four corners, which are rounded equally),	
2. the two-value syntax (first value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners),	
3. the three-value syntax (first value applies to top-left corner, second value applies to top-right and bottom-left corners, and third value applies to bottom-right corner),	
4. the four-value syntax (first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner).	

| Type            | Default |	
| --------------- | :------ |	
| string or array |    0    |	
<br/>
| Examples of value                                             | Description                       |	
| ------------------------------------------------------------- | :---------                        |	
| "10px"                                                       |  The one-value syntax in pixels for all four corners  |	
| "50%"                                                         |  Percentage value       |	
| "10em"                                                        |  Value in em  |	
| "10rem"                                                       |  Value in rem  |	
| "10ch"                                                        |  Value in ch  |	
| "10ex"                                                        |  Value in ex  |	
| "10vh"                                                        |  Value in vh  |	
| "10vw"                                                        |  Value in vw  |	
| "10vmin"                                                      |  Value in vmin  |	
| "10vmax"                                                      |  Value in vmax  |	
| "10px 150px"                                                  |  The two-value syntax separately: first for top-left and bottom-right corners, second for top-right and bottom-left corners |
| "10px 150px 200px"                                            |  The three-value syntax separately: first for top-left corner, second for top-right and bottom-left corners, third for bottom-right corner  |
| "10px 150px 200px 50px"                                       |  The four-value syntax separately: first for top-left corner, second for top-right corner, third for bottom-left corner, fourth for bottom-right corner |
| ["3px", "5px", "10px", "20px", "30px"] |  Value for diffenent breakpoints (sets in theme/breakpoints)  |
<br/>


### `opacity`	

 This CSS property sets the opacity level for an element.	

| Type            | Default |	
| --------------- | :------ |	
| number or array |    1    |	
<br/>

|         Examples of value         |                         Description                         |
| --------------------------------- | :---------------------------------------------------------- |
| "0.6"                             | Value in number                                             |
| ["0.2", "0.4", "0.6", "0.8", "1"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>




### `boxShadow`	

 This CSS property attaches one or more shadows to an element. To attach more than one shadow to an element, add a comma-separated list of shadows.	

 **Syntax**: boxShadow="h-offset v-offset blur spread color"	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  none   |	
<br/>

|                    Examples of value                     |                                                                    Description                                                                    |
| -------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------ |
| "none"                                                   | Value is a predefined name                                                                                                                        |
| "10px 20px"                                              | The two-value syntax separately: first for the h-offset, second for the v-offset                                                                  |
| "10px 20px 30px 2px blue"                                | The five-value syntax separately: first for the h-offset, second for the v-offset, third for the blur, fourth for the spread, fifth for the color |
| ["none", "2px 2px", "5px 5px", "10px 10px", "20px 20px"] | Value for diffenent breakpoints (sets in theme/breakpoints)                                                                                       |
<br/>


### `overflow`	

 This CSS property specifies what should happen if content overflows an element's box.	

| Type                                                            | Default |	
| --------------------------------------------------------------- | :------ |	
| oneOf(visible, hidden, scroll, auto, initial, inherit) or array | visible |	
<br/>

|                 Examples of value                 |                         Description                         |
| ------------------------------------------------- | :---------------------------------------------------------- |
| "scroll"                                          | Value is a predefined name                                  |
| ["visible", "hidden", "scroll", "auto", "hidden"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>



### `position`	

 This CSS property specifies the type of positioning method used for an element.	

| Type                                                                        | Default |	
| --------------------------------------------------------------------------- | :------ |	
| oneOf(static, absolute, fixed, relative, sticky, initial, inherit) or array | static  |	
<br/>

|                   Examples of value                   |                         Description                         |
| ----------------------------------------------------- | :---------------------------------------------------------- |
| "absolute"                                            | Value is a predefined name                                  |
| ["static", "absolute", "fixed", "relative", "sticky"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>



### `top`	

 This CSS property affects the vertical position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the top property sets the top edge of an element to a unit above/below the top edge of its nearest positioned ancestor,	
2. If position="relative" - the top property makes the element's top edge to move above/below its normal position.	
3. If position="sticky" - the top property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>

|           Examples of value            |                         Description                         |
| -------------------------------------- | :---------------------------------------------------------- |
| "auto"                                 | Value is a predefined name                                  |
| "10px"                                 | Value in pixels                                             |
| "10%"                                  | Percentage value                                         |
| "10em"                                 | Value in em                                                 |
| "10rem"                                | Value in rem                                                |
| "10ch"                                 | Value in ch                                                 |
| "10ex"                                 | Value in ex                                                 |
| "10vh"                                 | Value in vh                                                 |
| "10vw"                                 | Value in vw                                                 |
| "10vmin"                               | Value in vmin                                               |
| "10vmax"                               | Value in vmax                                               |
| ["2px", "5px", "10px", "20px", "30px"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>


### `right`	

 This CSS property affects the horizontal position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor,	
2. If position="relative" - the right property sets the right edge of an element to a unit to the left/right of its normal position,	
3. If position="sticky" - the right property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>

|           Examples of value            |                         Description                         |
| -------------------------------------- | :---------------------------------------------------------- |
| "auto"                                 | Value is a predefined name                                  |
| "10px"                                 | Value in pixels                                             |
| "10%"                                  | Percentage value                                         |
| "10em"                                 | Value in em                                                 |
| "10rem"                                | Value in rem                                                |
| "10ch"                                 | Value in ch                                                 |
| "10ex"                                 | Value in ex                                                 |
| "10vh"                                 | Value in vh                                                 |
| "10vw"                                 | Value in vw                                                 |
| "10vmin"                               | Value in vmin                                               |
| "10vmax"                               | Value in vmax                                               |
| ["2px", "5px", "10px", "20px", "30px"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>


### `bottom`	

 This CSS property affects the vertical position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the bottom property sets the bottom edge of an element to a unit above/below the bottom edge of its nearest positioned ancestor,	
2. If position="relative" - the bottom property makes the element's bottom edge to move above/below its normal position.	
3. If position="sticky" - the bottom property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>

|           Examples of value            |                         Description                         |
| -------------------------------------- | :---------------------------------------------------------- |
| "auto"                                 | Value is a predefined name                                  |
| "10px"                                 | Value in pixels                                             |
| "10%"                                  | Percentage value                                         |
| "10em"                                 | Value in em                                                 |
| "10rem"                                | Value in rem                                                |
| "10ch"                                 | Value in ch                                                 |
| "10ex"                                 | Value in ex                                                 |
| "10vh"                                 | Value in vh                                                 |
| "10vw"                                 | Value in vw                                                 |
| "10vmin"                               | Value in vmin                                               |
| "10vmax"                               | Value in vmax                                               |
| ["2px", "5px", "10px", "20px", "30px"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>


### `left`	

 This CSS property affects the horizontal position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the left property sets the left edge of an element to a unit to the left of the left edge of its nearest positioned ancestor,	
2. If position="relative" - the left property sets the left edge of an element to a unit to the left/right of its normal position,	
3. If position="sticky" - the left property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :------ |	
| string or array |  auto   |	
<br/>

|           Examples of value            |                         Description                         |
| -------------------------------------- | :---------------------------------------------------------- |
| "auto"                                 | Value is a predefined name                                  |
| "10px"                                 | Value in pixels                                             |
| "10%"                                  | Percentage value                                            |
| "10em"                                 | Value in em                                                 |
| "10rem"                                | Value in rem                                                |
| "10ch"                                 | Value in ch                                                 |
| "10ex"                                 | Value in ex                                                 |
| "10vh"                                 | Value in vh                                                 |
| "10vw"                                 | Value in vw                                                 |
| "10vmin"                               | Value in vmin                                               |
| "10vmax"                               | Value in vmax                                               |
| ["2px", "5px", "10px", "20px", "30px"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>


### `zIndex`	

 This CSS property specifies the stack order of an element. Works on positioned elements (position="absolute", position="relative", position="fixed", or position="sticky").	

| Type                                           | Default |	
| ---------------------------------------------- | :------ |	
| oneOf(auto, initial, inherit), number or array |  auto   |
<br/>

|     Examples of value     |                         Description                         |
| ------------------------- | :---------------------------------------------------------- |
| "auto"                    | Value is a predefined name                                  |
| "1"                       | Value in number                                             |
| ["1", "1", "2", "2", "2"] | Value for diffenent breakpoints (sets in theme/breakpoints) |
<br/>