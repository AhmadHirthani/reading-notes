
# BDD
Behavior-driven development (BDD) is an Agile software development process that encourages collaboration among developers, QA and non-technical or business participants in a software project. It encourages teams to use conversation and concrete examples to formalize a shared understanding of how the application should behave.[4] It emerged from test-driven development (TDD). Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.

# Acceptance test
An acceptance test is a formal description of the behavior of a software product, generally expressed as an example or a usage scenario.

## setState
React components with state render UI based on that state. When the state of components changes, so does the component UI. setState() is the only legitimate way to update state after the initial state setup. The rule of thumb is to never mutate state directly. Always use setState() to change state. Modifying state directly using **this.state = {searchTerm: event.target.value}** will not cause the component to re-render.

## Reconciliation
reconciliation process is the way React updates the DOM, by making changes to the component based on the change in state. The reconciliation process does not necessarily change the entire tree, except in a situation where the root of the tree is changed.

### Passing a Function to setState()
If we have a button that increase the number of a counter with 1 in each time then we can call the function **handleIncrement** then inside the function we will call setState for example:

`handleIncrement = () => {`  
`  this.setState({ count: this.state.count + 1 })`  
`}`  

But if we want to increase the counter with 3 then we have to use a different way which ensure performing increase three times in the same function.

`handleIncrement = () => {`  
`  this.setState((prevState) => ({ count: prevState.count + 1 }))`  
`  this.setState((prevState) => ({ count: prevState.count + 1 }))`  
`  this.setState((prevState) => ({ count: prevState.count + 1 }))`  
`}`  

### Access Previous State Using Updater
If we want to do calculations between the current state and the previous one or if we want to compare between the current state and the previous one then it is not trusted to depend on **this.state** since it depends on the real state appears on screen and may not contain the real previous value. So do not depend on this.state immediately after calling setState() and make use of the updater function instead for example:

`handleDecrement = () => {`  
`  this.changeCount()`  
`  this.changeCount()`  
`  this.changeCount()`  
`}`  

## Handling events
To go through handling events in react we will compare it with the html's way of handling events.
- React events are named using camelCase, rather than lowercase. For example **onClick** not onclick.
- In React, with JSX you pass a function as the event handler, rather than a string. For example **onClick={activateLasers}** not "activateLasers()".
- In React, you cannot return false to prevent default behavior. You must call preventDefault explicitly. For example
`function ActionLink() {`  
`  function handleClick(e) {`  
`    e.preventDefault();`  
`    console.log('The link was clicked.');`  
`  }`  

`  return (`  
`    <a href="#" onClick={handleClick}>`  
`      Click me`  
`    </a>`  
`  );`  
`}`  

- When using React, you generally don’t need to call addEventListener to add listeners to a DOM element after it is created. Instead, just provide a listener when the element is initially rendered.

