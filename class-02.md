# Why would you want to run JavaScript code outside of a browser?
Running JavaScript without/outside a browser means you are using node.js technology to execute your JavaScript code. This type of usage of javascript typically refers to backend programming where your javascript code will interact with your database and can be used to create RESTful APIs.

# What is the difference between a module and a package?
A package is a file or directory that is described by a package.json file. A package must contain a package.json file in order to be published to the npm registry. A module is any file or directory in the node_modules directory that can be loaded by the Node.js require() function. Since modules are not required to have a package.json file, not all modules are packages

# What does the node package manager do?
To make use of Node.js packages in, we need to be able to install and manage them in a useful way. This is where npm, the Node package manager, comes in. It installs the packages you want to use and provides a useful interface to work with them.

# Provide code snippets showing 3 different ways to export a function from a node module
module.exports.getUser = () => {  
    // Code here  
}

module.exports = {  
    getUser,  
    getUsers  
}


module.exports = {  
    firstName: 'James',  
    lastName: 'Bond'  
}

exports.SimpleMessage = 'Hello world';  


module.exports.log = function (msg) {  
    console.log(msg);  
};


## Ecosystem:
Managed lifecycle and dependency injection for your application components

## Node.js:
Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.

## V8 Engine
V8 is Google’s open source high-performance JavaScript and WebAssembly engine, written in C++. It is used in Chrome and in Node.js, among others. 
## module
Module in Node.js is a simple or complex functionality organized in single or multiple JavaScript files which can be reused throughout the Node.js application.
Each module in Node.js has its own context, so it cannot interfere with other modules or pollute global scope. Also, each module can be placed in a separate .js file under a separate folder.

## node package manager (npm)
Node Package Manager (NPM) is a command line tool that installs, updates or uninstalls Node.js packages in your application. It is also an online repository for open-source Node.js packages. The node community around the world creates useful modules and publishes them as packages in this repository.

## server
Server is the one of two parts responsible for the web process. Since web process is depend in tow components user side (front end), this include the browser and every process that can performed locally without connecting the server. If we want to deal with API, data base or anything that needs more process we will contact the server with request and the serve. The server will handle all the http requests for the web application then reply with response.

## Interpreter and compiler
We generally write a computer program using a high-level language. A high-level language is one that is understandable by us, humans. This is called source code.
However, a computer does not understand high-level language. It only understands the program written in 0's and 1's in binary, called the machine code.
To convert source code into machine code, we use either a compiler or an interpreter.
Both compilers and interpreters are used to convert a program written in a high-level language into machine code understood by computers. However, there are differences between how an interpreter and a compiler works.
### Interpreter
#### Translates program one statement at a time.
#### Interpreters usually take less amount of time to analyze the source code. However, the overall execution time is comparatively slower than compilers.
#### No intermediate object code is generated, hence are memory efficient.
#### Programming languages like JavaScript, Python, Ruby use interpreters.
### compiler
#### Scans the entire program and translates it as a whole into machine code.
#### Compilers usually take a large amount of time to analyze the source code. However, the overall execution time is comparatively faster than interpreters.
#### Generates intermediate object code which further requires linking, hence requires more memory.
#### Programming languages like C, C++, Java use compilers.

## What is Test-Driven Development?
Test-driven development (TDD) is a technique that we use to ensure that the code id working in the expected way. Using TDD, you express your intentions twice: once as a test, and once as production code. If the two approaches don’t match, your tests fail, and you’ve caught a bug.



