# Combine Reducers
combineReducers is simply a utility function to simplify the most common use case when writing Redux reducers. 

## Why combineReducers
We can use one reducer to manage all application's data but if we went through a large-size project then there is more need to organize our code and using only one reducer will be non effective. The solution is to use combine reducers together.

## There are several important ideas to be aware of when using combineReducers
- You are not required to use it in your own application.
- CombineReducer does not handle every possible scenario.
- It is quite common to need to write custom reducer logic for cases that combineReducer does not handle.
- While Redux itself is not opinionated about how your state is organized, combineReducers enforces several rules to help users avoid common errors.
- Using combineReducers does "call all reducers", or at least all of the slice reducers it is wrapping.
- It's very common to have multiple combined reducers in various places, which are composed together to create the root reducer.

## Defining State Shape#
CombineReducers takes an object full of slice reducer functions, and creates a function that outputs a corresponding state object with the same keys. This means that if no preloaded state is provided to createStore, the naming of the keys in the input slice reducer object will define the naming of the keys in the output state object. The correlation between these names is not always apparent, especially when using ES6 features such as default module exports and object literal shorthands.

## Example
    import { combineReducers, createStore } from 'redux'

    // Rename the default import to whatever name we want. We can also rename a named import.
    import defaultState, {
    firstNamedReducer,
    secondNamedReducer as secondState
    } from './reducers'

    const rootReducer = combineReducers({
    defaultState, // key name same as the carefully renamed default export
    firstState: firstNamedReducer, // specific key name instead of the variable name
    secondState // key name same as the carefully renamed named export
    })

    const reducerInitializedStore = createStore(rootReducer)
    console.log(reducerInitializedStore.getState())
    // {defaultState : 0, firstState : 1, secondState : 2}


