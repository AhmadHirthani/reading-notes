# Object Literals
## WHAT IS AN OBJECT?
In real life we have thing consist of other things. For example the car consist of body, glass, whells, mirrors, engine and many other parts. Supose that we are working in a cars factory's application and we want to add the car attributes such as color, engine power and automatic or manual. To represent these attributes, we thousand of variables to cover all of them and this is a hard work. The best way to represent the car is using object. Object is a data type which contain the primitive type inside it. We can say the car is an object and the color is an attribute inside the car object. Using objects make things easier and decreases the conflicts and bugs.

## How to declare an object?
There are many ways to create an object but the eaiset and most pupular one is literal notation.

## Literal notation example:
var hotel={  
    name:'Gaza Hotel',  
    rooms:40,  
    booked:10,  
    checkAvalibality: function(){  
        return this.room-this.booked;  
    }  
} 
CheckAvalibality is a normal function but it works only with the oblect hotel so it called method and the varibles indide the object called properties. Methods and properties inside the object can be reached using the object name followed by dot and the property or method name.

# The Document Object Model (DOM)
HTML strucure the web page, CSS add layout to it. What id we want to change the structure and the layout of a web page according to a result from the user. For example if the user;s answer wrong the text;s color will change to red. Thanks to DOM that JavaScript provided we can do such athing. To do, first you should call the element then you can change the content or the style. There are many ways to call HTML element to JavaScript like get El ement Byld () and querySe 1 ector () which we use to select indviual element and 
getElementsByClassName(), getElementsByTagName() and querySelectorAll() which we use to select multiple elements.
To do changes on HTML from JavaScript side you shoul take two steps. Find the element and store its location in the memory then assiagn the values you want directly to item's location in the memory. For example if we have an element in the HTML file with the id "answer" and we want to change the content of this element we will do:  
var answer=document.getElementByld('answer');  
answer.inlineText='new answer';  

Also we reach the attribute of the element to do changes on them. For example if we want to change the value of the attribute color for the element with the id answer we will do:  
var answerColor=document.getElementByld('answer').getAttribute('color');  
answerColor='newColor';  



