# Intro
You may noticed motions in web pages while you browsing the internet. These motions called animations and we can do it using CSS transitions and transforms. CSS transitions and transforms are a powerful way to enhance and delight user experiences. Animations are a great way to provide visual feedback, delightful moments and memorable interactions.

# Transitions
Transitions act as the foundation of animations because they specify the duration of an element changing its state smoothly over time. Without a transition this state change would be abrupt and take effect immediately. You will want to use transitions when using transforms in order to produce a smooth and gradual animation.
There are four transition properties:

## transition-property (required)
We use transition-property to select the style (prperty) we want to apply transition on it or we can we all to select all.  

Example:  
element {  
  transition-property: border-color;  
  transition-property: all;  
}  

## transition-duration (required)
Transition-duration is used to specify the time span of the transition in seconds (s) or milliseconds (ms).  

Example:
element {  
  transition-duration: 0.5s;  
}  

## transition-timing-function
Transition-timing-function is used to specify the speed of the transition over the duration. It takes the values linear, ease-in, ease-out, ease-in-out, step-start or step-end. By default the timing is set to ease.  

Example:  
element {  
  transition-timing-function: ease-in;  
}  

## transition-delay
Transition-delay is used to specify the time of starting transition. By default the transition will start as soon as the state change on the element is triggered.  

Example:  
element {  
  transition-delay: 1s;  
}  

# Transforms
Using transform, we can really have some fun with elements by distorting them and making them zoom across the screen. Transforms allow us to move or change the appearance of an element on a 2D plane. To make the transform smooth we need to use it with transitions. They are triggered when an element changes state, such as on a hover.

There are four different types of transforms: Rotate, Skew, Scale and Translate
## Rotate
Rotate transform is used to rotate an element clockwise or counterclockwise by a specified number of degrees from 0 to 360. A positive value used to rotate clockwise and a negative value used to rotate counterclockwise.

Example:
element {  
  transition: transform 1s ease-in-out;  
}  
element:hover {  
  transform: rotate(90deg);  
  transform: rotate(-30deg);  
}  

## Skew
Skew is used to transform tilts an element based on values provided on the X and Y axes. Tilts postion depend on the value of x and y. Positive x value tilts the element left, while negative tilts it right. Positive Y value tilts the element down, and  negative tilts it up.

Example:  
element {  
  transition: transform 0.3s ease;  
}  
element:hover {  
  transform: skew(90deg);  
  transform: skewX(90deg);  
  transform: skewY(-50deg);  
  transform: skew(90deg, -50deg);  
}  

# Scale
Scale is used to increases or decreases the size of an element. The original size is 1. Numers greater than 1 will increase the scale and numbers less than 1 will decrease it. The size of an element can be scaled by the X-axis, Y-axis or both. The shorthand scale() will effect both axes at the same time.  

Example:  
element {  
  transition: transform 1s ease;  
}  
element:hover {  
  transform: scaleX(0.5);  
  transform: scaleY(2);  
  transform: scale(0.5);  
  transform: scale(0.5, 2);  
}  

# Translate
T%ransform is used to move an element right, left, up or down. A positive X value moves the element to the right and a negative X value moves the element to the left. A positive Y value moves the element downwards and a negative Y value moves the element upwards.  

Example:  
element {  
  transition: transform 0.5s linear;  
}  
element:hover {  
  transform: translateX(15px);  
  transform: translateY(50px);  
  transform: translate(15px, -40px);  
}
