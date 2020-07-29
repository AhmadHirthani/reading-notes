# Functional programming
To understand functional programming, lets start with pure function and immutability. What does pure function means? **Pure function** means that this function return the same result if we passed the same parameters many times. This means that pure function depends only on the passed parameters in it's calculation. If it depends on other values besides the passed parameters it will be inpure function and it will be a functional programming.

## Pure functions benefits
The code’s definitely easier to test. We don’t need to mock anything. So we can unit test pure functions with different contexts:
#### Given a parameter A → expect the function to return value B
#### Given a parameter C → expect the function to return value D

## Pure functon example
function sum(a,b){
    return a+b;
}

## Inpure functon example
function circleSpace(r){
    return r*r*pi;//it depends on pi besides the parameter r
}

## Inpure functon examples
Reading Files
Random number generation

## Immutability
When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.
In Javascript we commonly use the for loop. This next for statement has some mutable variables.

## What is functional programming?
As in Wikipedia, functional programming is a programming paradigm — a style of building the structure and elements of computer programs — that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.









