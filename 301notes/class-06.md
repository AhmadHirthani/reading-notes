# What Is Node.js?
Node.js is event-based, non-blocking and asynchronous I/O backend programming language which wroks on the server side. What distinguishes Node.js from others is that it uses Google’s V8 JavaScript engine. This does not mean that Node programs are executed in a browser, this mean it is an enhanced from V8 engine with various features. This means that Node.js is a program we can use to execute JavaScript on our computers. In other words, it’s a JavaScript runtime.

## How Do I Install Node.js?
You have to ways to download Node.js. The first one the to go to the official Node download page and grab the Node binaries for your system. The other way is using a version manager which allow you to download multiple versions of Node.js and switch between them.

## Check prooper installation for Node.js
You can check that Node is installed on your system by opening a terminal and typing node -v. If all has gone well, you should see something like v12.14.1 displayed.

## Your first app with Node.js
We will use terminal to test our first Node.js application. We will start by creating the file hello.js
#### touch hello.js

Now we want to add the content to the file. Use this command to open the file:
#### nano hello.js

Write this line Node.js code inside the file heelo.js
#### console.log("Hello, World!");

Press Ctrl+x to exit then y then enter. This will save the changes into the file. Now it is time to run our first Node.js app. In your terminal write this command.
#### node hello.js
If Node.js is configured properly, “Hello, World!” will be displayed.

## npm
Npm is the JavaScript Package Manager. Node comes bundled with a package manager called npm. It is also the world’s largest software registry. There are over 1,000,000 packages of JavaScript code available to download, with billions of downloads per week. To check which version you have installed on your system, type npm -v.

## Tracking Node.js errors
To track Node.js errors you should install the **jshint** package. Use this command from you trminal to install **jshint** pakage. This command will install the package globally in you OS.
#### npm install -g jshint
There is another command which can be used to install the package locally, for the project only.
#### npm init -y

To run tracking errors you use this command in your command line:
#### jshint index.js
Note: index.js is the Node.js file name which contain the Node.js code
