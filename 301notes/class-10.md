# The JavaScript Call Stack
Let us start with the call stack. Stack is an abstract data type with a bounded(predefined) capacity. It is a simple data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack and the only element that can be removed is the element that is at the top of the stack, just like a pile of objects. This means that the last function that gets pushed into the stack is the first to be pop out, when the function returns.

## LIFO Example:
function firstFunction(){  
  throw new Error('Stack Trace Error');  
}  

function secondFunction(){  
  firstFunction();  
}  

function thirdFunction(){  
  secondFunction();  
}  

thirdFunction();  

In this code, the start point will be the calling of third function and it will be pushed to the stack. Third function will call the second function so the second function will be pushed to the stack at the top of the third function. Second function will call the first function so the first function will be pushed to the stack at the top of the second function.
After the first function return, the second function continue implementing its code from the line after the calling of the first function. After the second function return, the third function continue implementing its code from the line after the calling of the second function.
