# Bearer Authorization
Bearer authentication is a way to make accessing url's easier for authorized users. Instead of asking the user to enter his username and password, nothing will be required from the user if he is already logged ing. This will happen depending on Bearer token wich will be send from the server to client after valid login then client send this token with each request to avoid entring his username and password again an again.

## What is JSON Web Token?
JSON Web Token (JWT) is an open standard defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. 

## When should you use JSON Web Tokens?
Here are some scenarios where JSON Web Tokens are useful:

### Authorization:
This is the most common scenario for using JWT. Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. Single Sign On is a feature that widely uses JWT nowadays, because of its small overhead and its ability to be easily used across different domains.

### Information Exchange:
JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

## What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), for example `Header.Payload.Signature`
**Header** consist from two parts type and the uses algorithm.  
**Payload** consist from three cliams parts Registered claims, Public claims and Private claims.
**Signature** is the encoded header and the encoded payload encrypted with secret using the algorithm specified in the header.
