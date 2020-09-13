# Define three related pieces of data in a possible application. An example for a store application might be Product, Category and Department. Describe the constraints and rules on each piece of data and how you would relate these pieces to each other. For example, each Product has a Category and belongs in a Department.
For university application we have Student, Faculty and department.
Each student has a department and belongs to a faculty.

# What is the advantage of an ORM, like Mongoose?
The net result of these is the simplification of database access from applications.
MongooseJS provides an abstraction layer on top of MongoDB that eliminates the need to use named collections.
Models in Mongoose perform the bulk of the work of establishing up default values for document properties and validating data.
Functions may be attached to Models in MongooseJS. This allows for seamless incorporation of new functionality.
Queries use function chaining rather than embedded mnemonics which result in code that is more flexible and readable, therefore more maintainable as well.
The net result of these is the simplification of database access from applications.

# How does the repository pattern compare with an ORM?
The ORM is an implementation detail of the Repository. The ORM just makes it easy to access the DB tables in an OOP friendly way.
Repositories deal with Domain/Business objects (from the app point of view), an ORM handles DB objects.
The repository abstract the access to all storage concerns, while the ORM abstract access to a specific RDBMS In a nutshell

# Name 3 cloud based NoSQL Databases
Firebase
MongoDB Atlas
AWS cloud

# Document the following Vocabulary Terms
## Lifecycle
Program lifecycle phases are the stages a computer program undergoes, from initial creation to deployment and execution. The phases are edit time, compile time, link time, distribution time, installation time, load time, and run time.

## Collections
MongoDB stores data records as documents (specifically BSON documents) which are gathered together in collections. A database stores one or more collections of documents.

## The “Repository” design pattern
The repository pattern is one of the more popular patterns at the moment. It follows the solid principles and done right it is clean and easy to use. The repository pattern have two purposes; first it is an abstraction of the data layer and second it is a way of centralizing the handling of the domain objects.

## mongoose middleware
Mongoose middleware are functions that can intercept the process of he init, validate, save, and remove instance methods. Middleware are executed at the instance level and have two types: pre middleware and post middleware.
Pre middleware gets executed before the operation happens. For instance, a pre-save middleware will get executed before the saving of the document. This functionality makes pre middleware perfect for more complex validations and default values assignment.
A pre middleware is defined using the pre() method of the schema object

## Object Relation Mapping (ORM)
Object-relational mapping (ORM, O/RM, and O/R mapping tool) in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages. This creates, in effect, a "virtual object database" that can be used from within the programming language.

# REST and HTTP
## Hypertext Transfer Protocol HTTP
In networks we have something called OSI which is consist of 7 layers. One of these layer is application layer which is an abstraction layer that specifies the shared communications protocols and interface methods used by hosts in a communications network. One the most important protocols in application layer is http. HTTP is protocol for transmitting hypermedia documents, such as HTML. It was designed for communication between web browsers and web servers, but it can also be used for other purposes.

## Application Program Interface API
API is a contract provided by one piece of software to another. It receives a structured request and reply with a structured response.

## Representational state transfer (REST)
REST is a software architectural style that defines a set of constraints to be used for creating Web services. REST is not a transfer protocol so it needs a carrier protocol such as HTTP. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the internet. RESTful Web services allow the requesting systems to access and manipulate textual representations of Web resources by using a uniform and predefined set of stateless operations.


