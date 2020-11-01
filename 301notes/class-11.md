# What is EJS?
EJS is just a plain JavaScript code used to generate HTML markup. It is a simple templating language. With EJS, no religiousness about how to organize things and no reinvention of iteration and control-flow.

## EJS properties
## Use plain JavaScript
EJS is totaly javascript code.

## Fast development time
Don't waste time and attention figuring out arcane new syntax because 'elegance' — or how to preprocess your data so it will actually render right.

## Simple syntax
Just write JavaScript that emits the HTML you want, and get the job done!

## Speedy execution
EJS is so fast because it works based on V8 and the other JavaScript runtimes. EJS caches the intermediate JS functions for fast execution.

## Easy debugging
It's easy to debug EJS errors: your errors are plain JavaScript exceptions, with template line-numbers included.

## Active development
EJS has a large community of active users, and the library is under active development. We're happy to answer your questions or give you help.

## How to use EJS
First of all you need to install ejs in your machine using npm:
### npm install ejs
After that you need two files, one for **NodeJs** code for example server.js, and one for EJS code for example index.ejs. The next step is making EJS availble for use using the the require method. So write this code in server.js file.
### let ejs = require('ejs');

## EJS example:
### server.js file:
#### var express=require('express);
#### var bodyParser=require('body-parser);
#### var cors=require('cors);
#### var path=require('path);

#### var app=express();

#### app.use(bodyParser());
#### app.use(cors());

#### app.set('views',path.join(__dirname,'views'));
#### app.set('view engine','ejs');

#### app.get('/', function(request,response){
#### response.render('index',{
####    foo:'bar'
####  });
#### })

#### app.listen(8000,function(){
####    console.log('listening on 8000');
#### })

### index.ejs file:
#### <h1>Hello <%= foo  %> </h1>

This sample of code will evaluate to display Hello bar when opening the page in the browser.