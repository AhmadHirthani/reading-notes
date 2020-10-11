
# Name 5 Javascript UI Frameworks (other than React)
- Ext JS 
- React
- Angular
- Vue
- Ember
- Svelte 3  

# What’s the difference between a framework and a library?
- Frameworks and libraries are both code written by someone else that helps you perform some common tasks in a less verbose way.
- A framework inverts the control of the program. It tells the developer what they need. A library doesn’t. The programmer calls the library where and when they need it.
- The degree of freedom a library or framework gives the developer will dictate how “opinionated” it is.  

# React
## Hello World Example
`ReactDOM.render(`  
    `<h1>Hello, world!</h1>,`  
    `document.getElementById('root')`  
`);` 
This exmaple will display the text "Hello, world!" on the page.

## JSX
It is a syntax extension to JavaScript. It produces React **“elements”**. Instead of artificially separating technologies by putting markup and logic in separate files, React separates concerns with loosely coupled units called **“components”** that contain both. **React** doesn’t require using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.  

### JSX Example
In the example below, we declare a variable called name and then use it inside JSX by wrapping it in curly braces. You can put any valid JavaScript expression inside the curly braces in JSX. For example, 2 + 2, user.firstName, or formatName(user) are all valid JavaScript expressions.  
`const name = 'Josh Perez';`  
`const element = <h1>Hello, {name}</h1>;`  
`ReactDOM.render(`  
`element,`  
`document.getElementById('root')`  
`);`  

### Using if statement with JSX Example
`function getGreeting(user) {`  
` if (user) {`  
`    return <h1>Hello, {formatName(user)}!</h1>;`  
`  }`  
`  return <h1>Hello, Stranger.</h1>;`  
`}`

