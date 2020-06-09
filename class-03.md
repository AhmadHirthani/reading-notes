# HTML Lists
What if want to show a list on the web page using HTML. HTML provides three way of lists: ordered, unordered and definition list.
## Ordered list
The ordered list is the normal numerical list. To do ordered list we use the tag \<ol\>, inside the tag ol we use the tag \<li\> for each line of the list.

## Unordered list
The unordered list is the normal list. To do unordered list we use the tag \<ul\>, inside the tag ul we use the tag \<li\> for each line of the list.

## Definition list
Definition list is a special type of list it seems like an article with its address or term and its explanation. To do definition list we use the tag \<dl\>. Inside the dl tag, we use the tag \<dt\> to determine the term and the tag \<dd\> to determine the term's description

# CSS Boxes
CSS is styling language. One of the important styling things is CSS Boxes which deal with the location of element and the spaces between the element and the other elements. Every box has three available properties that can be adjusted to control its appearance: border, margin and padding. Using border we can modify the type of border (solid, dotted or double) or the color of the border. Margin is the free space from the element border to the nearest element. Padding is the free space between the element border and the element's content.

# JS Control Flow
Control flow is very important for any programming language. JavaScript control the flow with two statements, if and switch. The benefit if the control flow is to make the computer deciding what to do according to changing value.
## If statement syntax:
if(condition){
    code to run if the condition achieved
}else if(another condition to check with it){
        code to run if the other condition achieved
}else{
        code to run if none of the condition achieved
}
Note that else if and else are optional which means it is not mandatory to write them if you do not need.

## Switch case syntax:
switch(the variable name){
    case 'value to compare with variable':
    code to run if the value equal to the variable;
    break;
    case 'value2 to compare with variable':
    code to run if the value2 equal to the variable;
    break;
    default:
    code to run if the none of the values equal to the variable;
    break;
}
