# router.param(name, callback)
using router.param will add callback triggers to route parameters. Name is the name of the parameter and callback is the callback function. Note that name was optional until v4.11.0.

## The parameters of the callback function are:
### req, the request object.
### res, the response object.
### next, indicating the next middleware function.
### The value of the name parameter.
### The name of the parameter.

Param callback functions are local to the router on which they are defined. This means only route parameters defined on router routes can trigger param callbacks defined on the same router.

A param callback will be called only once in a request-response cycle, even if the parameter is matched in multiple routes, as shown in the following examples.

# Mongoose Middleware
Middleware (also called pre and post hooks) are functions which are passed control during execution of asynchronous functions. Middleware is specified on the schema level and is useful for writing plugins.

## Types of Middleware:
1- Document middleware.
2- Model middleware.
3- Aggregate middleware.
4- Query middleware.

Document middleware is supported for (validate, save, remove, updateOne, deleteOne, init ) document functions. In document middleware functions, this refers to the document.

Query middleware is supported for (count, deleteMany, deleteOne, find, findOne, findOneAndDelete, findOneAndRemove, findOneAndUpdate, remove, update, updateOne, updateMany) Model and Query functions. In query middleware functions, this refers to the query.

## Examples:
`schema.pre('remove')`
Mongoose will register this middleware for doc.remove() by default.

`schema.pre('remove', { query: true, document: false }, fn).`
Mongoose will register this middleware for Query.remove().

`doc.updateOne()`
`Model.updateOne()`
This trigger updateOne hooks, but this refers to a query, not a document.

`schema.pre('updateOne', { document: true, query: false }).`
This will register updateOne middleware as document middleware





















