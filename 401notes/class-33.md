# Context Api
We used to pass data in react using props. Props is working well but sometime you feel it is confusing besides it may be not valid for repetitive passing operation. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.

## When to Use Context
Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language.  
Context is very easy so why we dont use it all the time instead of passing data using props. The answer is related to context itself. Context makes component reuse more difficult. So if you only want to pass a small number of data, component composition is often a simpler solution than context. But if you have alot of data to bass between react component then it is better to use context.

## Example using props
    class App extends React.Component {
    render() {
        return <Toolbar theme="dark" />;
    }
    }

    function Toolbar(props) {
    return (
        <div>
        <ThemedButton theme={props.theme} />
        </div>
    );
    }

    class ThemedButton extends React.Component {
    render() {
        return <Button theme={this.props.theme} />;
    }
    }

## Same example without using props
    const ThemeContext = React.createContext('light');

    class App extends React.Component {
    render() {
        // Use a Provider to pass the current theme to the tree below.
        // Any component can read it, no matter how deep it is.
        // In this example, we're passing "dark" as the current value.
        return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
        );
    }
    }

    function Toolbar() {
    return (
        <div>
        <ThemedButton />
        </div>
    );
    }

    class ThemedButton extends React.Component {
    static contextType = ThemeContext;
    render() {
        return <Button theme={this.context} />;
    }
    }

In the **first example**, the Toolbar component must take an extra "theme" prop and pass it to the ThemedButton. This can become painful if every single button in the app needs to know the theme because it would have to be passed through all components.  

In the **second example**, context lets us pass a value deep into the component tree without explicitly threading it through every component. Create a context for the current theme (with "light" as the default). 
- Use a Provider to pass the current theme to the tree.
- Any component can read it, no matter how deep it is.
- In this example, we're passing "dark" as the current value.


