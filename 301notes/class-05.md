# Heroku
## What is Heroku
Heroku is a cloud platform as a service (PaaS) supporting several programming languages. Heroku allows us to deploy our web applications to have a rendering page for our application.

## Why Heroku
Somone may ask Heroku is donig thae same as GitHub pages so why to use Heroku. Actually Heroku is a bit similar to Github pages with a big differnce. The main differnce between Heroku and GitHub pages that Heroku support a backend language while GitHub pages only support **HTML**, **CSS** and **JavaScript**. That means Heroku provide us with a backend server running the backend language you need which in our case Node.js. Node.js is an open source, cross-platform runtime environment, which allows you to build server-side and networking applications. It's written in JavaScript and can be run within the Node.js runtime on any platform.

## How to create web server
First of all you should download Node.js in your device then we will create a javascript file named server.js with this content.
#### var http = require("http");
#### http.createServer(function(request, response) {
####   response.writeHead(200, {"Content-Type": "text/plain"});
####   response.write("It's alive!");
####   response.end();
#### }).listen(3000);
Then test its working using this command ``node server.js`` in your terminal then check it in your browser. Your new server's address is http://localhost:3000/.

<img src="img/idykoj7.png" alt="web browser" width="500" height="600">

## Make it worldwide
Works fine. But it works locally. WWW is for "World Wide Web" and we will turn your local server into a world wide server. We'll use Heroku cloud application platform for this. First of all, you need to create an account on developer's site and install Heroku. The first step after Heroku installation is to log in to the system from your computer using this command ``heroku login``.
#### We will leave Heroku for now. But we'll need it soon after we build our server.

Now we will create a simple blog with basic functionality. It will show you requested web pages and the error page in case of an error. So we will project's directory and inside it we will create the server.js file with this content:
#### var http = require("http"); //will give you the key to Node's HTTP functionality
#### var fs = require("fs"); //for possibility to interact with the file system
#### var path = require("path"); //allows you to handle file paths
#### var mime = require("mime"); //allows you to determine a file's MIME-type
Note that **mime** is not a part of Node.js, so we need to install third-party dependencies before using it. We need to create the package.json file for that purpose. It will contain project related information, such as name, version, description, and so on. For our project we will use MIME-types recognition, because it's not enough to just send the contents of a file when you use HTTP. You also need to set the Content-Type header with proper MIME-type. That's why we need this plug-in.

Now we will create the package.json file and fill it with this content:
#### {
####   "name" : "blog",
####   "version" : "0.0.1",
####   "description" : "My minimalistic blog",
####   "dependencies" : {
####     "mime" : "~1.2.7"
####   }
#### }

#### function send404(response) {
####   response.writeHead(404, {"Content-type" : "text/plain"});
####   response.write("Error 404: resource not found");
####   response.end();
#### }

#### function sendPage(response, filePath, fileContents) {
####   response.writeHead(200, {"Content-type" : mime.lookup(path.basename(filePath))});
####   response.end(fileContents);
#### }

Now we will download mime to our project. We'll use built-in Node Package Manager called npm.
#### npm install

Now we will create a file named handler.js with this content:

#### function serverWorking(response, absPath) {
####   fs.exists(absPath, function(exists) {
####     if (exists) {
####       fs.readFile(absPath, function(err, data) {
####         if (err) {
####           send404(response)
####         } else {
####           sendPage(response, absPath, data);
####         }
####       });
####     } else {
####       send404(response);
####     }
####   });
#### }

And now it's time to create the HTTP server, so we will create a file named create-server.js with this content
#### var server = http.createServer(function(request, response) {
####   var filePath = false;

####   if (request.url == '/') {
####     filePath = "public/index.html";
####   } else {
####     filePath = "public" + request.url;
####   }

####   var absPath = "./" + filePath;
####   serverWorking(response, absPath);
#### }); 

Now we will start our server using this command: 

#### http.createServer(<some code here>).listen(3000)

But unfortunatly this is not waht we need. Of course we can use this command to run our server locally. But with Heroku it is different because Heroku sets a dynamically assigned port number to your app. That's why we need to handle all this mess with ports as it’s shown below:

#### var port_number = server.listen(process.env.PORT || 3000);

Now it's time to create some content. We will create img and style folders to organize our code then we will create the index.html which looks like:
![index page html code](img/indexHtml.png)

Here you can see how the main page looks like:
![web browser with runing page](http://i.imgur.com/3pSODQH.png)

## How to deploy
Open your terminal within your project folder and run the command ``git init`` .Empty Git repository will be initialized in .git/ folder.

Then run the command ``git add .``. This command allows Git to track your files changes.

Then run the command ``git commit -m "Simple server functionality added"``. This will commit your files to the initialized Git repo.

Then run the command ``heroku create``. This will generate a random name for your application but you can change it later.

Now we can deploy our project. Every Heroku app starts with no branches and no code. So, the first time we deploy our project, we need to specify a remote branch to push to:
#### git push heroku master

The application is now deployed. Ensure that at least one instance of the app is running:
#### heroku ps:scale web=1

And now, before we open it, it's time to choose a proper name for our first creation. 
#### heroku apps:rename myfirstserver

Now you can use the command ``heroku open`` to open your Heroku project in your web browser. In this particular case, server address is https://myfirstserver.herokuapp.com/.




