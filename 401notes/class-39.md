# Redux Toolkit
The Redux Toolkit package is intended to be the standard way to write Redux logic. Redux Toolkit includes these APIs:
## configureStore():
configureStore wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.
## createReducer():
createReducer that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.
## createAction():
createAction generates an action creator function for the given action type string. The function itself has toString() defined, so that it can be used in place of the type constant.
## createSlice():
createSlice accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.
## createAsyncThunk:
createAsyncThunk accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise
## createEntityAdapter:
createEntityAdapter generates a set of reusable reducers and selectors to manage normalized data in the store
- The createSelector utility from the Reselect library, re-exported for ease of use.

# MobX
MobX is a simple, scalable and battle tested state management solution. 

## Why do we need MobX?
MobX is mutable so we can push to state directly.
MobX always renders the minimal required components. Out of the box, and with little effort, MobX will rerender only components whose render tree will actually change when you update a specific part of the store. That means that MobX will never render a component unless the props it depended on changed; it'll never render the parent of the component that actually changes or it's siblings .

