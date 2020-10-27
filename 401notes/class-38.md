# Asynchronus actions in Redux
Right now we are familiar with store and we can add data to it and retreive from it. But all of these operations done in synchronus way and it will not be valid for asynchronus operations such as fetching data from an API. To do we need to use Redux-thunk.

## Redux-thunk
Redux-thunk is a package from redux echo system. It is the standard way to define asynchronus action creators in your application. It is a middleware that can be applied in the store. The main idea of Thunk is to allow an action to return a function instead of action oblect. This will help in performing side effect actions such as asynchronus tasks.

## Install
    npm install redux-thunk