# In this class we will answer a set of question
## Q1: Describe what Array.map() does?
The job of map is to change the picture (type or content) of variable to another picture. The same idea is used with **Array.map** but in this time we are executing the same map (the same functionallity) on all elements inside the array, so the result will be an array with a new picture for each element in the old array. For eample if we have an aray that contains objects and want to extract the names from these objects, we can map over the array of objects and return array of names.

## Describe what Array.reduce() does?
In general we use to reduce to do a repeated job without using for loop. Using reduce we can do the needed functionallity in something similar to a template or stamp so dont need to repeat the steps agin and agin. All we need is to say to to the compiler, hey compiler please sum these tow numbers then each number comes add it to the total and at the end we will have a single value instead of set of vlues. For example if we have an array and we want to sum all element on this array. Instead of using for loop, we can easialy use reduce and get the sum using on line of code.

## Provide code snippets showing how to use superagent() to fetch data from a URL and log the result
### With normal Promise .then() syntax

let url=`api url`;
superagent.get(url).then(result=>{
    console.log('result: ',result.body);
})

### Again with async / await syntax
// Using an async function!

let getDataFromUrl = (url) => new Promise( (resolve,reject) => {  
    if( superagent.get(url) )  { resolve(`OK`) }
    else  { reject(`BAD Request`) }
});

async function getData(url) {
  try {
    let result = await getDataFromUrl(url);
    console.log(result);
  } catch(e) { console.error(err); }
}

## Explain promises as though you were mentoring a Code 301 level student
Some times we need to run functions that need much time to finish and return its result. If there is no decicion will be taken based on this result then there is no problem, but what will happen if we need the result from this function to do another job or run another function. In this case we should wait for this function until it finishes its work and return the result. We can use promise to handle this type of functions. We make this function return a promise after the promise returning we put the code to execute inside then function.

## Are all callback functions considered to be Asynchronous? Why or Why Not?
Yes. A simple answer is try to run call back function with timeout then it will be delayed and the line after the line of calling the callback function will be executed before the callback result.