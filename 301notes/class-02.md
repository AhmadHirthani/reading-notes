# JQUERY and Pair programming
## What is JQUERY?
JQUERY is a javascript file. It is target is to deal with html elements in quick and easy manner based on CSS-style selectors. The strength of JQUERY comes from the easy way of using and the short code you need to write. jQuery doesn't do anything you cannot achieve with pure JavaScript. It is just a JavaScript file containing javascript functions. To use JQUERY, you only need to embed the JQUERY file in your project.

### Find element using CSS-style selector
$('li.hot') //The text between quteations is the selector which is the JQUERY function parameter.

### Do something with the elements using JQUERY methods
$('li.hot').addClass('complete');

### A matched set
According to number -single or multiple- of selected elements JQUERY object will contain the refrences. Elements in the object can be reached using the index.

### Get and set data within elements
The html() and text() methods can be used to retrieve or update the element's content.
//Get element's content
$('li').html();

//Set element's content
$('li').html('New value);

**If you want to use more than one jQuery method on the same selection of elements, you can list several methods at a time using dot notation to separate each one, as shown below.**. For example you can use this line of code to run more than one method using only one line:
$( 'l i [i d!="one"] ') . hide() .delay(SOO) . fadeln(1400); 

**Before start working with JQUERY, you should check the readiness of the page. There is a JQUERY method you can use for this. It is called ready.** For example: $(document).ready(function(){//your code}    );

## JQUERY effects
Using JQUERY effects we can manpulate the apperance of element using the methods hide(), show() and toogle() which reverse the current state (hide/show) of the element. Also we can add fadding effets using fadeIn(), fadeOut(), fadeTo() and fadeToggle() which reverse the current fade state of the element. In addition to that we can add sliding effects to the elements using slideUp(), slideDown() and slideToggle() which reverse the current slide state of the element. 
## Example:
$(function() {  
    $('h2').hide().slideDown();  
    var $li = $('li');  
    $li.hide().each{function(index) {  
        $(this).delay(700 * index) .fadeln(7OO);  
    });  
    $li.on('click', function()  
        $(this) .fade0ut(700);  
});

## Pair programming
Pair programming is the way of programming that depends on two developers to work together, driver and navigator. A lot of programming companies used pair programming because its benifit. Pair programming can cost less effort in coding projects by reduce the code review and testing time. pair programming produce nearly complete project because one of the developers is writting the code and the other one is thinking, review code, planing and testing.

### Why pair program?
1. Greater efficiency
2. Engaged collaboration
3. Learning from fellow students
4. Social skills
5. Job interview readiness
6. Work environment readiness






