# Sending form data
## Client/server architecture
In client/server architecture, the client (usually a web browser) sends a request to a server using the HTTP protocol. The server answers the request using the same protocol. Client/server architecture is the mostly used architecture on the internet.

### On the client side: defining how to send the data
In the client side, we use the form to collect data from user then send it to the server. The form itself contains attributes that allow us to define many things such as action and method.
The **action** attribute defines where the data gets sent. Its value must be a valid relative or absolute URL. Action's defualt value is the URL of the page containing the form "the current page".
The **action** value should be a file on the server that can handle the incoming data, including ensuring server-side validation. The server then responds, generally handling the data and loading the URL defined by the action attribute, causing a new page load (or a refresh of the existing page, if the action points to the same page).

The **method** attribute defines how data is sent using the HTTP protocol. HTTP protocol provides several ways to perform a request; HTML form data can be transmitted via a number of different methods, the most common being the **GET** method and the **POST** method.

The **GET** method is the method used by the browser to ask the server to send back a given resource. When the form is sent using the method **GET**, the data sent to the server is appended to the URL. After the URL web address has ended, we include a question mark (?) then add the data as key=value and to add more (keys/values) can add & then add new key and value. Using **GET** the server don not takes into account the data provided in the body of the HTTP request.

The **POST** method is the method the browser uses to talk to the server when asking for a response that takes into account the data provided in the body of the HTTP request. When Using the **POST** method, the data sent to the server is not appended to the URL. Instead, the data is appended to the body of the HTTP request.

 method is the method used by the browser to ask the server to send back a given resource. When the form is sent using the method **GET**, the data sent to the server is appended to the URL. After the URL web address has ended, we include a question mark (?) then add the data as key=value and to add more (keys/values) can add & then add new key and value. Using **GET** the server don not takes into account the data provided in the body of the HTTP request.

 ### On the server side: retrieving the data
 Whichever HTTP method you choose, the server receives a string that will be parsed in order to get the data as a list of key/value pairs. The way you access this list depends on the development platform you use and on any specific frameworks you may be using with it.
 



