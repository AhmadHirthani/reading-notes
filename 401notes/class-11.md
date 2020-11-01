# Securing Passwords with Bcrypt Hashing Function
To add security to your site or application, you will use password and this password should be stored in somewhere. Storing passowrd in plain text is ridiculous. The best way to store password is by hashing it before store. But this is also not 100% secure because some attackers has the ability to crack hashed text and get the password.

## PROBLEMS WITH CRYPTOGRAPHIC HASH ALGORITHM
### Brute Force attack:
Hashes can't be reversed, so instead of reversing the hash of the password, an attacker can simply keep trying different inputs until he find the right one that generates the same hash value. Brute force attack is sutiable for short passwords since it takes a long time with long passwords.

### Hash Collision attack:
Hash functions have infinite input length and a predefined output length, so there is inevitably going to be the possibility of two different inputs that produce the same output hash. MD5, SHA1 (Secure Hash Algorithm), SHA2 are vulnerable to Hash Collision Attack i.e. two input strings of a hash function that produce the same hash result.

### How to save password if attackers can crack the hash?
To overcome such issues, we need algorithms which can make the brute force attacks slower and minimize the impact. Such algorithms are PBKDF2 and BCrypt, both of these algorithms use a technique called Key Stretching.

### BCrypt:
Bcrypt is an adaptive hash function and introduces a work factor (also known as security factor), which allows you to determine how expensive the hash function will be.
This work factor value determines how slow the hash function will be, means different work factor will generate different hash values in different time span, which makes it extremely resistant to brute force attacks.

# Basic access authentication
In the context of an HTTP transaction, basic access authentication is a method for an HTTP user agent (e.g. a web browser) to provide a user name and password when making a request. In basic HTTP authentication, a request contains a header field in the form of Authorization: Basic <credentials>, where credentials is the Base64 encoding of ID and password joined by a single colon :.

# What is JSON Web Token?
JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for transmitting information between parties securely. This information can be verified and trusted because it is digitally signed.  
JWTs can be encrypted to also provide secrecy between parties besides using signed tokens. Signed tokens can verify the integrity of the claims contained within it, while encrypted tokens hide those claims from other parties.

## When should you use JSON Web Tokens?
### Authorization:
The most common usage for JWT is Single Sign On which means once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token. This feature is widely used nowadays, because of its small overhead and its ability to be easily used across different domains.

### Information Exchange:
JSON Web Tokens are a good way of securely transmitting information between parties. Because JWTs can be signed—for example, using public/private key pairs—you can be sure the senders are who they say they are. Additionally, as the signature is calculated using the header and the payload, you can also verify that the content hasn't been tampered with.

### What is the JSON Web Token structure?
In its compact form, JSON Web Tokens consist of three parts separated by dots (.), which are:  
`Header.Payload.Signature`

**Header** typically consists of two parts: the type of the token, which is JWT, and the signing algorithm being used, such as HMAC SHA256 or RSA. Then, header's JSON is Base64Url encoded to form the first part of the JWT.

**Payload** contains the claims. Claims are statements about an entity (typically, the user) and additional data. There are three types of claims: registered, public, and private claims. Then payload's JSON Base64Url encoded to form the second part of the JSON Web Token.
To create the **signature** part you have to take the encoded header, the encoded payload, a secret, the algorithm specified in the header, and sign that.

Putting all together
The output is three Base64-URL strings separated by dots that can be easily passed in HTML and HTTP environments.

# Authentication
Authentication is the process of verifying that an individual, entity or website is whom it claims to be. Authentication in the context of web applications is commonly performed by submitting a username or ID and one or more items of private information that only a given user should know.

Session Management:
Session Management is a process by which a server maintains the state of an entity interacting with it. This is required for a server to remember how to react to subsequent requests throughout a transaction. Sessions are maintained on the server by a session identifier which can be passed back and forward between the client and server when transmitting and receiving requests. Sessions should be unique per user and computationally very difficult to predict.




















