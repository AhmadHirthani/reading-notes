# Socket.io
To understand soket.io let us start with identifying the web socket then go ahead with soket.io.

## WebSocket
WebSocket is the communication Protocol which provides bidirectional communication between the Client and the Server over a TCP connection, WebSocket remains open all the time so they allow the real-time data transfer. When clients trigger the request to the Server it does not close the connection on receiving the response, it rather persists and waits for Client or server to terminate the request.

## Real-time applications
A real-time application (RTA) is an application that functions within a period that the user senses as immediate or current. Some examples of real-time applications are:

**Instant messengers** − Chat apps like Whatsapp, Facebook Messenger, etc. You need not refresh your app/website to receive new messages.

**Push Notifications** − When someone tags you in a picture on Facebook, you receive a notification instantly.

**Collaboration Applications** − Apps like google docs, which allow multiple people to update same documents simultaneously and apply changes to all people's instances.

**Online Gaming** − Games like Counter Strike, Call of Duty, etc., are also some examples of real-time applications.

## Socket.IO
Socket.IO is a JavaScript library used in real-time full-duplex event-based communication. It is multi platform, browser and device. Socket.IO is balancing between reliability and speed. It has two parts: a **client-side library** that runs in the browser, and a **server-side library** for node.js.

## Why Socket.IO?
- In contrast of the old ways of making real time conecction which was not fast as required, Socket.IO provides faster solution providing a bi-directional communication channel between a client and a server.
- It helps in broadcasting to multiple sockets at a time and handles the connection transparently.
- It works on all platform, server or device ensuring the equality, reliability, and speed.
- It automatically upgrades the requirement to WebSocket if needed.
- It requires both libraries to be used Client side as well as a server-side library.
- It works on work-based events. there are some reserved events which can be accessed using the Socket on **server side** like Connect, message, Disconnect, Ping and Reconnect and there are some **Client based** reserved events like Connect, connect- error, connect-timeout and Reconnect etc.
- It handle all the degradation of your technical alternatives to get full duplex communication in real time.
- It also handles the various support level and the inconsistencies from the browser.
- It also gives the additional feature room support for basic publish infrastructure and thinks like automatic reconnect.
- Currently, AFAIK is the most used one and easier to help with vanilla web sockets.
- Socket.IO is quite popular, it is used by Microsoft Office, Yammer, Zendesk, Trello, and numerous other organizations to build robust real-time systems.

## How to use Socket.IO?
- Install socket.io using npm
`npm install --save express socket.io`
- Install nodemon which helps in restarting server automatically whrn changes occured.
`npm install -g nodemon`
- Whenever you need to start the server, instead of using the node app.js use, nodemon app.js. 






