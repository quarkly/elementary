#### Base

- [variant](###variant)


#### Layout

- [display / d](###display)
- [height / h](###height)
- [minHeight / mih](###minHeight)
- [maxHeight / mah](###maxHeight)
- [width / w](###width)
- [minWidth / miw](###minWidth)
- [maxWidth / maw](###maxWidth)
- [size](###size)
- [verticalAlign](###verticalAlign)


 #### Spaces
 
- [padding / p](###p)
- [paddingTop / pt](###pt)
- [paddingRight / pr](###pr)
- [paddingBottom / pb](###pb)
- [paddingLeft / pl](###pl)
- [paddingX / px](###px)
- [paddingY / py](###py)
- [margin / m](###m)
- [marginTop / mt](###mt)
- [marginRight / mr](###mr)
- [marginBottom / mb](###mb)
- [marginLeft / ml](###ml)
- [marginX / mx](###mx)
- [marginY / my](###my)


 #### Typography

- fontSize / fz
- color / c
- fontFamily / ff
- fontWeight / fw
- textAlign / ta
- lineHeight / lh
- fontStyle / fs
- letterSpacing / lts


 #### Flex
 
- [alignItems / ai](###alignItems)
- [alignContent / ac](###alignContent)
- [justifyItems / ji](###justifyItems)
- [justifyContent / jc](###justifyContent)
- [flexWrap / fxw](###flexWrap)
- [flexBasis / fxb](###flexBasis)
- [flexDirection / fxd](###flexDirection)
- [flex / fx](###flex)
- [order / ord](###order)


 #### Grid
 
- [justifySelf / js](###justifySelf)
- [alignSelf / as](###alignSelf)
- [gridGap](###gridGap)
- [gridColumnGap](###gridColumnGap)
- [gridRowGap](###gridRowGap)
- [gridColumn](###gridColumn)
- [gridRow](###gridRow)
- [gridAutoFlow](###gridAutoFlow)
- [gridAutoColumns](###gridAutoColumns)
- [gridAutoRows](###gridAutoRows)
- [gridTemplateColumns](###gridTemplateColumns)
- [gridTemplateRows](###gridTemplateRows)
- [gridTemplateAreas](###gridTemplateAreas)
- [gridArea](###gridTemplateAreas)


 #### Background
 
- [background / bg](###bg)
- [backgroundColor / bgc](###bgc)
- [backgroundImage / bgi](###background)
- [backgroundSize / bgsz](###backgroundSize)
- [backgroundPosition / bgp](###backgroundPosition)
- [backgroundRepeat / bgr](###backgroundRepeat)


 #### Misc
 
- [border / bd](###border)
- [borderTop / bdt](###borderTop)
- [borderRight / bdr](###borderRight)
- [borderBottom / bdb](###borderBottom)
- [borderLeft / bdl](###borderLeft)
- [borderColor / bdc](###borderColor)
- [borderRadius / bdrs](###borderRadius)
- [opacity / op](###opacity)
- [boxShadow / bxsh](###boxShadow)
- [overflow / ov](###overflow)


 #### Position
 
- [position / pos](###position)
- [top / t](###top)
- [right / r](###right)
- [bottom / b](###bottom)
- [left / l](###left)
- [zIndex / z](###zIndex)


## Reference	

 ### `variant`	

 One of the variants of this element which are described in the theme.	

| Type   | Default |	
| ------ | :-----: |	
| string |  none   |	

 ### `display`	

 This CSS property specifies the display behavior (the type of rendering box) of an element.	

| Type                                                          | Default |	
| ------------------------------------------------------------- | :-----: |	
| oneOf(inline, block, inline-block, flex, grid, none) or array |  block  |	

 ### `height`	

 This CSS property sets the height of an element. The height of an element does not include padding, borders, or margins.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  auto   |	

 ### `minHeight`	

 This CSS property defines the minimum height of an element.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |    0    |	

 ### `maxHeight`	

 This CSS property defines the maximum height of an element.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `width`	

 This CSS property sets the width of an element. The width of an element does not include padding, borders, or margins.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  auto   |	

 ### `minWidth`	

 This CSS property defines the minimum width of an element.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |    0    |	

 ### `maxWidth`	

 This CSS property defines the maximum width of an element.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `size`	

 This property defines both are "width" and "height" CSS properties.	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `verticalAlign`	

 This CSS property sets the vertical alignment of an element.	

| Type                                                        | Default  |	
| ----------------------------------------------------------- | :------: |	
| oneOf(baseline, text-top, text-bottom, sub, super) or array | baseline |	

 ### `p`	

 The shorthand of the "padding" CSS property. Are used to generate space around an element's content, inside of any defined borders.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `pt`	

 The shorthand of the "padding-top" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `pr`	

 The shorthand of the "padding-right" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `pb`	

 The shorthand of the "padding-bottom" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `pl`	

 The shorthand of the "padding-left" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `px`	

 Both are "padding-right" and "padding-left" (x-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `py`	

 This property defines both are "padding-top" and "padding-bottom" (y-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `m`	

 The shorthand of the "margin" CSS property. Are used to sets the margins for an element, outside of any defined borders.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `mt`	

 The shorthand of the "margin-top" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `mr`	

 The shorthand of the "margin-right" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `mb`	

 The shorthand of the "margin-bottom" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `ml`	

 The shorthand of the "margin-left" CSS property.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `mx`	

 This property defines both are "margin-right" and "margin-left" (x-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `my`	

 Both are "margin-top" and "margin-bottom" (x-asix) CSS properties.	

| Type                    | Default |	
| ----------------------- | :-----: |	
| string, number or array |  none   |	

 ### `alignItems`	

 This CSS property specifies the default alignment for items inside the flexible container.	

| Type                                                                              | Default |	
| --------------------------------------------------------------------------------- | :-----: |	
| oneOf(stretch, center, flex-start, flex-end, baseline, initial, inherit) or array | stretch |	

 ### `alignContent`	

 This CSS property modifies the behavior of the flex-wrap property. It is similar to align-items, but instead of aligning flex items, it aligns flex lines. There must be multiple lines of items for this property to have any effect!	

| Type                                                                                                 | Default |	
| ---------------------------------------------------------------------------------------------------- | :-----: |	
| oneOf(stretch, center, flex-start, flex-end, space-between, space-around, initial, inherit) or array | stretch |	

 ### `justifyItems`	

 This CSS property defines the default justify-self for all items of the box, giving them all a default way of justifying each box along the appropriate axis.	

| Type                                                                                                                                                                                                                                                       | Default |	
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |	
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or array |  none   |	

 ### `justifyContent`	

 This CSS property aligns the flexible container's items when the items do not use all available space on the main-axis (horizontally).	

| Type                                                                                        |  Default   |	
| ------------------------------------------------------------------------------------------- | :--------: |	
| oneOf(flex-start, flex-end, center, space-between, space-around, initial, inherit) or array | flex-start |	

 ### `flexWrap`	

 This CSS property specifies whether the flexible items should wrap or not.	

| Type                                                         | Default |	
| ------------------------------------------------------------ | :-----: |	
| oneOf(nowrap, wrap, wrap-reverse, initial, inherit) or array | nowrap  |	

 ### `flexBasis`	

 This CSS property specifies the initial length of a flexible item.	

| Type            | Default |	
| --------------- | :-----: |	
| number or array |    0    |	

 ### `flexDirection`	

 This CSS property specifies the direction of the flexible items.	

| Type                                                                       | Default |	
| -------------------------------------------------------------------------- | :-----: |	
| oneOf(row, row-reverse, column, column-reverse, initial, inherit) or array |   row   |	

 ### `flex`	

 This CSS property is a shorthand property for: flex-grow, flex-shrink, flex-basis.	

| Type            | Default  |	
| --------------- | :------: |	
| string or array | 0 1 auto |	

 ### `order`	

 This CSS property specifies the order of a flexible item relative to the rest of the flexible items inside the same container.	

| Type            | Default |	
| --------------- | :-----: |	
| number or array |    0    |	

 ### `justifySelf`	

 This CSS property set the way a box is justified inside its alignment container along the appropriate axis.	

| Type                                                                                                                                                                                                                                                       | Default |	
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |	
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or array |  auto   |	

 ### `alignSelf`	

 This CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.	

| Type                                                                                                                                                                                                                                                       | Default |	
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |	
| oneOf(auto, normal, stretch, center, start, end, flex-start, flex-end, self-start, self-end, left, right, baseline, first baseline, last baseline, safe center, unsafe center, legacy right, legacy left, legacy center, inherit, initial, unset) or array |  auto   |	

 ### `gridGap`	

 It is a shorthand for row-gap and column-gap.	

 **Syntax**: there are three different syntaxes you can use with this property:	

 1. the one-value syntax for both row and column in any CSS units ("20px", "3vmin", "100%", e.g.),	
2. the two-value syntax separately: first row, second column in any CSS units ("20px 10px", "3vmin 2vmax", "21px 82%", e.g.),	
3. global values (inherit, initial, unset)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array | normal  |	

 ### `gridColumnGap`	

 This CSS property sets the size of the gap (gutter) between an element's columns.	

| Type                                                   | Default |	
| ------------------------------------------------------ | :-----: |	
| oneOf(normal, inherit, initial, unset) string or array | normal  |	

 ### `gridRowGap`	

 This CSS property sets the size of the gap (gutter) between an element's grid rows.	

| Type                                                   | Default |	
| ------------------------------------------------------ | :-----: |	
| oneOf(normal, inherit, initial, unset) string or array | normal  |	

 ### `gridColumn`	

 This is a shorthand property for grid-column-start and grid-column-end.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `gridRow`	

 This is a shorthand property for grid-row-start and grid-row-end.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `gridAutoFlow`	

 This CSS property controls how the auto-placement algorithm works, specifying exactly how auto-placed items get flowed into the grid.	

| Type                                                                                 | Default |	
| ------------------------------------------------------------------------------------ | :-----: |	
| oneOf(row, column, dense, row dense, column dense, inherit, initial, unset) or array |   row   |	

 ### `gridAutoColumns`	

 This CSS property specifies the size of an implicitly-created grid column track.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-columns)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `gridAutoRows`	

 This CSS property specifies the size of an implicitly-created grid row track.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-auto-rows)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `gridTemplateColumns`	

 This CSS property defines the line names and track sizing functions of the grid columns.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `gridTemplateRows`	

 This CSS property defines the line names and track sizing functions of the grid rows.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `gridTemplateAreas`	

 This CSS property specifies named grid areas.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-areas)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `gridArea`	

 It is a shorthand property for grid-row-start, grid-column-start, grid-row-end and grid-column-end, specifying a grid item’s size and location within the grid by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the edges of its grid area.	
[Read about syntax](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-area)	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `bg`	

 The shorthand of the "background-color" CSS property.	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `background`	

 That's a shorthand property for background-color, background-image, background-position, background-size, background-repeat, background-origin, background-clip, background-attachment.	

 **Syntax**: background="bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment"	

| Type            |  Default   |	
| --------------- | :--------: |	
| string or array | individual |	

 ### `backgroundImage`	

 This CSS property sets one or more background images for an element.	

 **Syntax**: backgroundColor="url(firstImage.png), url(secondImage.png)"	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `backgroundSize`	

 This CSS property specifies the size of the background images.	

 **Syntax**: there are four different syntaxes you can use with this property:	

 1. the keyword syntax ("auto", "cover" and "contain"),	
2. the one-value syntax (sets the width of the image (height becomes "auto"),	
3. the two-value syntax (first value: width of the image, second value: height),	
4. the multiple background syntax (separated with comma).	

| Type                                                           | Default |	
| -------------------------------------------------------------- | :-----: |	
| oneOf(auto, cover, contain, initial, inherit), string or array |  auto   |	

 ### `backgroundPosition`	

 This CSS property sets the starting position of a background image.	

 **Syntax**: there are three different syntaxes you can use with this property:	

 1. the keyword syntax ("left top", "left center", e.g.),	
2. the two-value syntax in persent (the first value is the horizontal position and the second value is the vertical. The top left corner is 0% 0%),	
3. the two-value syntax in any CSS units(the first value is the horizontal position and the second value is the vertical. The top left corner is 0 0).	

| Type                                                                                                                                        | Default |	
| ------------------------------------------------------------------------------------------------------------------------------------------- | :-----: |	
| oneOf(left top, left center, left bottom, right top, right center, right bottom, center top, center center, center bottom), string or array |  0% 0%  |	

 ### `backgroundRepeat`	

 This CSS property sets if/how a background image will be repeated.	

| Type                                                                                  | Default |	
| ------------------------------------------------------------------------------------- | :-----: |	
| oneOf(repeat, repeat-x, repeat-y, no-repeat, space, round, initial, inherit) or array | repeat  |	

 ### `border`	

 It is a shorthand property for: border-width, border-style (required), border-color.	

| Type            |      Default      |	
| --------------- | :---------------: |	
| string or array | medium none color |	

 ### `borderTop`	

 It is a shorthand property sets all the top border properties in one declaration. The properties that can be set must be in the following order: border-top-width, border-top-style (required), border-top-color.	

| Type            |      Default      |	
| --------------- | :---------------: |	
| string or array | medium none color |	

 ### `borderRight`	

 It is a shorthand property sets all the right border properties in one declaration. The properties that can be set must be in the following order: border-right-width, border-right-style (required), border-right-color.	

| Type            |      Default      |	
| --------------- | :---------------: |	
| string or array | medium none color |	

 ### `borderBottom`	

 It is a shorthand property sets all the bottom border properties in one declaration. The properties that can be set must be in the following order: border-bottom-width, border-bottom-style (required), border-bottom-color.	

| Type            |      Default      |	
| --------------- | :---------------: |	
| string or array | medium none color |	

 ### `borderLeft`	

 It is a shorthand property sets all the left border properties in one declaration. The properties that can be set must be in the following order: border-left-width, border-left-style (required), border-left-color.	

| Type            |      Default      |	
| --------------- | :---------------: |	
| string or array | medium none color |	

 ### `borderColor`	

 This CSS property sets the color of an element's four borders. This property can have from one to four values.	

 **Syntax**: there are four different syntaxes you can use with this property:	

 1. the one-value syntax (the value applies to all four borders),	
2. the two-value syntax (first value applies to top and bottom, and the second value applies to right and left borders),	
3. the three-value syntax (first value applies to top, second value applies to right and left, and third value applies to bottom border),	
4. the four-value syntax (first value applies to top, second value applies to right, third value applies to bottom, and fourth value applies to left border).	

| Type                                                  | Default |	
| ----------------------------------------------------- | :-----: |	
| oneOf(transparent, initial, inherit), string or array |  none   |	

 ### `borderRadius`	

 This CSS property defines the radius of the element's corners. This property can have from one to four values.	

 **Syntax**: there are four different syntaxes you can use with this property:	

 1. the one-value syntax (the value applies to all four corners, which are rounded equally),	
2. the two-value syntax (first value applies to top-left and bottom-right corners, and the second value applies to top-right and bottom-left corners),	
3. the three-value syntax (first value applies to top-left corner, second value applies to top-right and bottom-left corners, and third value applies to bottom-right corner),	
4. the four-value syntax (first value applies to top-left corner, second value applies to top-right corner, third value applies to bottom-right corner, and fourth value applies to bottom-left corner).	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |    0    |	

 ### `opacity`	

 This CSS property sets the opacity level for an element.	

| Type            | Default |	
| --------------- | :-----: |	
| number or array |    1    |	

 ### `boxShadow`	

 This CSS property attaches one or more shadows to an element. To attach more than one shadow to an element, add a comma-separated list of shadows.	

 **Syntax**: boxShadow="h-offset v-offset blur spread color"	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  none   |	

 ### `overflow`	

 This CSS property specifies what should happen if content overflows an element's box.	

| Type                                                            | Default |	
| --------------------------------------------------------------- | :-----: |	
| oneOf(visible, hidden, scroll, auto, initial, inherit) or array | visible |	

 ### `position`	

 This CSS property specifies the type of positioning method used for an element.	

| Type                                                                        | Default |	
| --------------------------------------------------------------------------- | :-----: |	
| oneOf(static, absolute, fixed, relative, sticky, initial, inherit) or array | static  |	

 ### `top`	

 This CSS property affects the vertical position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the top property sets the top edge of an element to a unit above/below the top edge of its nearest positioned ancestor,	
2. If position="relative" - the top property makes the element's top edge to move above/below its normal position.	
3. If position="sticky" - the top property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `right`	

 This CSS property affects the horizontal position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the right property sets the right edge of an element to a unit to the right of the right edge of its nearest positioned ancestor,	
2. If position="relative" - the right property sets the right edge of an element to a unit to the left/right of its normal position,	
3. If position="sticky" - the right property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `bottom`	

 This CSS property affects the vertical position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the bottom property sets the bottom edge of an element to a unit above/below the bottom edge of its nearest positioned ancestor,	
2. If position="relative" - the bottom property makes the element's bottom edge to move above/below its normal position.	
3. If position="sticky" - the bottom property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `left`	

 This CSS property affects the horizontal position of a positioned element. This property has no effect on non-positioned elements.	

 **Behaviour**	

 1. If position="absolute" or position="fixed" - the left property sets the left edge of an element to a unit to the left of the left edge of its nearest positioned ancestor,	
2. If position="relative" - the left property sets the left edge of an element to a unit to the left/right of its normal position,	
3. If position="sticky" - the left property behaves like its position is relative when the element is inside the viewport, and like its position is fixed when it is outside.	

| Type            | Default |	
| --------------- | :-----: |	
| string or array |  auto   |	

 ### `zIndex`	

 This CSS property specifies the stack order of an element. Works on positioned elements (position="absolute", position="relative", position="fixed", or position="sticky").	

| Type                                           | Default |	
| ---------------------------------------------- | :-----: |	
| oneOf(auto, initial, inherit), number or array |  auto   |
