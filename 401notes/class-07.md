# Middleware
Middleware is any number of functions that are invoked by the Express.js routing layer before your final request handler is made.
Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.
If we use app.use(middleware function)  in our application, the middleware is called for every request on the server.
We can specify the middleware function to work with a specific request by passing the route before the middleware function to app.use. In the next example middleware function will only run for the route /things

## Example:
var express = require('express');
var app = express();
//Middleware function to log request protocol
app.use('/things', function(req, res, next){
   console.log("A request for things received at " + Date.now());
   next();
});
// Route handler that sends the response
app.get('/things', function(req, res){
   res.send('Things');
});
app.listen(3000);

## Third Party Middleware
There is a set of ready middleware that you can use, You only need to install it then require and use. We will talk about three of Third Party Middleware:

### body-parser
This is used to parse the body of requests which have payloads attached to them.

## Example:
var bodyParser = require('body-parser');
//To parse URL encoded data
app.use(bodyParser.urlencoded({ extended: false }))

//To parse json data
app.use(bodyParser.json())

### cookie-parser
It parses Cookie header and populate req.cookies with an object keyed by cookie names.
Example:
var cookieParser = require('cookie-parser');
app.use(cookieParser())

### express-session
It creates a session middleware with the given options. 

# Discussion:
## What’s the difference between PUT and PATCH?
We use PUT to add a new element and we use PATCH to edit an existing element.

## Provide links to 3 services or tools that allow you to “mock” an API for development like json-server
Mirage JS, Jest and Cypress

## Compare and contrast SOAP and ReST
SOAP is a XML-based message protocol, while REST is an architectural style
SOAP uses Web Service Definition Language WSDL for communication between consumer and provider, whereas REST just uses XML or JSON to send and receive data
SOAP invokes services by calling RPC method, REST just simply calls services via URL path
SOAP doesn't return human readable result, whilst REST result is readable with is just plain XML or JSON
SOAP is not just over HTTP, it also uses other protocols such as SMTP, FTP, etc, REST is over only HTTP

## SOAP
SOAP (abbreviation for Simple Object Access Protocol) is a messaging protocol specification for exchanging structured information in the implementation of web services in computer networks. Its purpose is to provide extensibility, neutrality, verbosity and independence

## ReST Verbs
POST: 	201 (Created), 'Location' header with link to /customers/{id} containing new ID
GET:	200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists.	200 (OK), single customer. 
PUT:	405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.
 PATCH:	405 (Method Not Allowed), unless you want to modify the collection itself.	
DELETE:	405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.
## CRUD Verbs
Create:	201 (Created), 'Location' header with link to /customers/{id} containing new ID
Read: 200 (OK), list of customers. Use pagination, sorting and filtering to navigate big lists.	200 (OK), single customer. 
Update/Replace:	405 (Method Not Allowed), unless you want to update/replace every resource in the entire collection.
Update/Modify:	405 (Method Not Allowed), unless you want to modify the collection itself.	
Delete:	405 (Method Not Allowed), unless you want to delete the whole collection—not often desirable.

## Swagger
Swagger is an online tool that helps in making requests to an API. It allows us to choose the method we want to use and edit the request’s body.

## Which 3 things had you heard about previously and now have better clarity on?
REST, Swagger, curl

## Which 3 things are you hoping to learn more about in the upcoming lecture/demo?
REST,API, JSON-server

## What are you most excited about trying to implement or see how it works?
REST,API and JSON-server


 
