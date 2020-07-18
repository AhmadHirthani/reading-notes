# CSS Layout
## Key Concepts in Positioning Elements
CSS treats each HTML element as if it is in its own box. This box will either be a block-level box or an inline box. In block-level boxes the box treated as a separate component in a new line but inline boxes don’t go to new line and the box flow beside the other elements.

## Containing Elements
Sometimes we would like to group a set of elements together. If we do this, the elements that contains the others elements called containing element.

## Controlling the Position of Elements
Using CSS, we can control the element's position. Position takes the value static, relative, absolute, fixed or float. You should know that when you change the element's flow from normal to any other float, In this case boxes may overlap and you can use z-index to control which element overlap which element.

**Static Flow**
In normal flow, each block-level element sits on top of the next one. And this is the default one, so that you don’t need to declare position to use it.

**Relative Flow**
If you want to add space between the elements in its original place in the normal flow, you should use the position relative with the values of spaces such as left, right, bottom or top. If use the position relative without using the values of spaces such as left, right, bottom or top, nothing will change.

**Absolute Flow**
When the position property is given a value of absolute, all other position properties disabled and the box offset properties (top or bottom and left or right) specify element's place in relation to its containing element.

## Controlling the float of Elements
Using the float we can determine how the float of the element, without float two elements in the same container will be in two lines. If we use the float, the floated one will take the reserved width and the other will take the remaining space in the same line.


## Screen size
At the end, you will publish a web site and you will have a lot visitors and of course those visitors use different devices. These devices have different screen size. So you page should fit to all screens sizes. There is many ways to make your page responsive and dynamically adapt users screen. The best practice is by set element's sizes using the percentage. In this case your page's layout will not be destroyed when the screen size changed. 



