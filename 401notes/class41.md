# React Native
React Native combines the best parts of native development with React, a best-in-class JavaScript library for building user interfaces. 

## Facts about React Native:
- You can use React Native in your existing Android and iOS projects or you can create a whole new app from scratch.
- React primitives render to native platform UI, meaning your app uses the same native platform APIs other apps do.
- React Native components like View, Text, and Image are being mapped directly to the platform’s native UI building blocks.
- With the power of JavaScript, React Native lets you iterate at lightning speed. No more waiting for native builds to finish. Save, see, repeat.

## Views and mobile development
In Android and iOS development, a view is the basic building block of UI: a small rectangular element on the screen which can be used to display text, images, or respond to user input. Even the smallest visual elements of an app, like a line of text or a button, are kinds of views. Some kinds of views can contain other views. It’s views all the way down!

## Getting started
To start working with React Native you need a mobile device to test your code on it. React native provides many ways to see your runing code. Using **expo cli** you can run the app directly in your phone inside expo app. Also you can download android studio and use it's virtual device manger to run you React Native app. Using ExpoCli, you can run the app in your web brwoser. So I prefer that you use expoCli. Expo can be instaled using node package manger npm though you have to install node first to use npm commands.

### install expo
    npm install expo-cli --global

### Create React Native App using Expo
    expo init myFirstProject
This command will create a directory with the name you passed containing a simple React Native app Displaying amessage on the screen.

### Run React Native App using Expo
    expo start 
or
    npm start
