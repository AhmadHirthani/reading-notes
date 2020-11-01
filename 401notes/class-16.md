# Event-Driven Programming in Node.js
## Event-Driven
Event-Driven Programming is a logical pattern that we can choose 
to confine our programming within it to avoid issues of complexity and collision. Event-Driven Programming makes use of the following concepts:

An Event Handler is a callback function that will be called when an event is triggered.
A Main Loop listens for event triggers and calls the associated event handler for that event.

## EventEmitter
NodeJs provides us with a native module called EventEmitter that allows us to get started incorporating Event-Driven Programming in our project right away. Developers worked then to intrdouce EventEmitter2 and EventEmitter3 using npm packages and they was much faster than original EventEmitter. Deciding which one to use depends on your project needs of speed and performance. We access the EventEmitter class through the events module. Once imported we’ll need to create a new object from the class to start using it.

`const EventEmitter = require('events').EventEmitter;`  
`const myEventEmitter = new EventEmitter;`  

## Removing Listeners
To remove event listeners in EventEmitter we can use the removeListener or removeAllListeners method. It’s important to note that in the EventEmitter that comes built-in with Node you must pass a reference to the exact function you wish to remove when using the removeListener method. This means wherever you wish to remove the event, you’ll need to make sure the function is able to be referenced from that place in your code. For this reason it is often best to name your event handling functions and declaring them before you register the event listener, as opposed to leaving them anonymous.




