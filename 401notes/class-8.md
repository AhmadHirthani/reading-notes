# Routing
Routing refers to how an application’s endpoints (URIs) respond to client requests. In Express we define routing using methods of the Express app object that correspond to HTTP methods.

#### app.get() to handle GET requests
#### app.post() to handle POST requests.
#### app.all() to handle all HTTP methods
#### app.use() to specify middleware as the callback function.

These routing methods take at least two arguments: The route as a string and callback function (handler functionsd) which will be executed when user requests this route. In other words, the application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function. If we provided the routing method with more than one callback function, we have to provide next as an argument for the callback function then call next() at the end of function's body. If we do, this means control callback fuctions order by order the current function to call the next function.

## Eample:
### GET method route
#### app.get('/', function (req, res) {
####   res.send('GET request to the homepage')
#### })

### POST method route
#### app.post('/', function (req, res) {
####   res.send('POST request to the homepage')
#### })

There is a special routing method, app.all(), used to load middleware functions at a path for all HTTP request methods. For example, the following handler is executed for requests to the route “/secret” whether using GET, POST, PUT, DELETE, or any other HTTP request method supported in the http module.

#### app.all('/secret', function (req, res, next) {
####   console.log('Accessing the secret section ...')
####   next() // pass control to the next handler
#### })

## Route paths
Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expressions.  

The characters ?, +, *, and () are subsets of their regular expression counterparts. The hyphen (-) and the dot (.) are interpreted literally by string-based paths.  

If you need to use the dollar character ($) in a path string, enclose it escaped within ([ and ]). For example, the path string for requests at “/data/$book”, would be “/data/([\$])book”.  

### This route path will match acd and abcd.
#### app.get('/ab?cd', function (req, res) {
####   res.send('ab?cd')
#### })

### This route path will match abcd, abbcd, abbbcd, and so on.
#### app.get('/ab+cd', function (req, res) {
####   res.send('ab+cd')
#### })

## Route parameters
We can use the route itself to provide parameters for eample if we are requesting about users we can add user id to the request by adding : then the value of id in the url. In server side we can etract id's value by using the request.params.id.

## Response methods
#### res.download()	Prompt a file to be downloaded.
#### res.end()	End the response process.
#### res.json()	Send a JSON response.
#### res.jsonp()	Send a JSON response with JSONP support.
#### res.redirect()	Redirect a request.
#### res.render()	Render a view template.
#### res.send()	Send a response of various types.
#### res.sendFile()	Send a file as an octet stream.
#### res.sendStatus()	Set the response status code and send its string representation as the #### response body.

## app.route()
Now in most cases you need four routes for each category for eample four for users and four for categories. This is too much especialy when you have a lot of categories. app.route can help in reducing the four route to one for each category by handling all methods in one route.
### Eample
#### app.route('/book')
####   .get(function (req, res) {
    res.send('Get a random book')
####   })
####   .post(function (req, res) {
####     res.send('Add a book')
####   })
####   .put(function (req, res) {
####     res.send('Update the book')
####  })

