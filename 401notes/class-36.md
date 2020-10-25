# Redux
## What is Redux?
Redux is a pattern and library for managing and updating application state, using events called "actions". It is like a predictable state container.  It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. It serves as a centralized store for state that needs to be used across your entire application, with rules ensuring that the state can only be updated in a predictable fashion.

## When Should I Use Redux?
As we mentioned before Redux is used to manage application's state. But we have a lot of ways to manage application's state like context and props. This evaluate to the question when to use Redux? In fact Redux is a good way to manage your application's state but it is aliitle bit complex. This means if your project is not a large-size project then it is better to use props to pass data between components. But if it is a large-size project, then the best practice is to use Redux. Redux complexity can be ignored with its benefit in large-size projects. Redux is more useful when:

- You have large amounts of application state that are needed in many places in the app
- The app state is updated frequently over time
- The logic to update that state may be complex
- The app has a medium or large-sized codebase, and might be worked on by many people

## Redux Terminology
### Actions
An action is a plain JavaScript object that has a type field. You can think of an action as an event that describes something that happened in the application.
    const addTodoAction = {
    type: 'todos/todoAdded',
    payload: 'Buy milk'
    }

### Reducers
A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state. Reducers are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.

#### How reducer work
The logic inside reducer functions typically follows the same series of steps:

    Check to see if the reducer cares about this action
        If so, make a copy of the state, update the copy with new values, and return it
    Otherwise, return the existing state unchanged

#### Example
    const initialState = { value: 0 }

    function counterReducer(state = initialState, action) {
    // Check to see if the reducer cares about this action
    if (action.type === 'counter/increment') {
        // If so, make a copy of `state`
        return {
        ...state,
        // and update the copy with the new value
        value: state.value + 1
        }
    }
    // otherwise return the existing state unchanged
    return state
    }

### Store
The current Redux application state lives in an object called the store. The store is created by passing in a reducer, and has a method called getState that returns the current state value:

#### Example
    import { configureStore } from '@reduxjs/toolkit'

    const store = configureStore({ reducer: counterReducer })

    console.log(store.getState())
    // {value: 0}

### Dispatch
The Redux store has a method called dispatch. The only way to update the state is to call store.dispatch() and pass in an action object. The store will run its reducer function and save the new state value inside, and we can call getState() to retrieve the updated value:

#### Example
    store.dispatch({ type: 'counter/increment' })

    console.log(store.getState())
    // {value: 1}

### Selectors
Selectors are functions that know how to extract specific pieces of information from a store state value. As an application grows bigger, this can help avoid repeating logic as different parts of the app need to read the same data:

#### Example
    const selectCounterValue = state => state.value

    const currentValue = selectCounterValue(store.getState())
    console.log(currentValue)
    // 2

### Redux flow:

### Initial setup:
- A Redux store is created using a root reducer function
- The store calls the root reducer once, and saves the return value as its initial state
- When the UI is first rendered, UI components access the current state of the Redux store, and use that data to decide what to render. They also subscribe to any future store updates so they can know if the state has changed.
### Updates:
- Something happens in the app, such as a user clicking a button
- The app code dispatches an action to the Redux store, like dispatch({type: 'counter/increment'})
- The store runs the reducer function again with the previous state and the current action, and saves the return value as the new state
- The store notifies all parts of the UI that are subscribed that the store has been updated
- Each UI component that needs data from the store checks to see if the parts of the state they need have changed.
- Each component that sees its data has changed forces a re-render with the new data, so it can update what's shown on the screen

![redux](assets/reduxflow.gif)


