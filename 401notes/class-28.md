# Component Composition
## What even is ‘children’?
The React docs say that you can use props.children on components that represent ‘generic boxes’ and that ‘don’t know their children ahead of time’. For me, that didn’t really clear things up. I’m sure for some, that definition makes perfect sense but it didn’t for me.

A simple example
Here’s an example of a stateless function that is used to create a component. Again, since this is a stateless function, there is no 'this' keyword so just use props.children
`const Picture = (props) => {`  
`  return (`  
`    <div>`  
`      <img src={props.src}/>`  
`      {props.children}`  
`    </div>`  
`  )`  
`}`  
This component contains an <img> that is receiving some props and then it is displaying {props.children}.
Whenever this component is invoked {props.children} will also be displayed and this is just a reference to what is between the opening and closing tags of the component.  

### App.js
`render () {`  
`  return (`  
`    <div className='container'>`  
`      <Picture key={picture.id} src={picture.src}>`  
`          //what is placed here is passed as props.children`  
`      </Picture>`  
`    </div>`  
`  )`  
`}`  
Instead of invoking the component with a self-closing tag <Picture /> if you invoke it will full opening and closing tags <Picture> </Picture> you can then place more code between it.
This de-couples the <Picture> component from its content and makes it more reusable.

## Composition
Some components don’t know their children ahead of time. This is especially common for components like Sidebar or Dialog that represent generic “boxes”.

React developres recommend that such components use the special children prop to pass children elements directly into their output:

`function FancyBorder(props) {`  
` return (`  
`   <div className={'FancyBorder FancyBorder-' + props.color}>`  
`      {props.children}`  
`    </div>`  
`  );`  
`}`  

This lets other components pass arbitrary children to them by nesting the JSX:

`function WelcomeDialog() {`  
`  return (`  
`    <FancyBorder color="blue">`  
`      <h1 className="Dialog-title">`  
`        Welcome`  
`      </h1>`  
`      <p className="Dialog-message">`  
`        Thank you for visiting our spacecraft!`  
`      </p>`  
`    </FancyBorder>`  
`  );`  
`}`  

Anything inside the <FancyBorder> JSX tag gets passed into the FancyBorder component as a children prop. Since FancyBorder renders {props.children} inside a <div>, the passed elements appear in the final output.