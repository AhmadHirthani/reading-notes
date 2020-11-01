# OAuth
Oauth was originally devloped to authorize service to another service. When a service is trying to access any recource on behalf of the user. The first version of OAuth was 1.0 and currently the most widely used is version 2.0.

## OAuth flow
We have a user authorized for two services and the user wants to give a limited access to the first service to access a specific user's files in the seond service. When the first service request this access then the second service will provide the user with a list of requested permissions asking the user to accept or refuse this request. If it is ok, then the second service will generate a token with limited access to approve list of permission and send the token to the first service. Now the first service can use this token to contact the second service without talking user permission again.

# OAuth2
## Roles
### The Third-Party Application: "Client"
The client is the application that is attempting to get access to the user's account. It needs to get permission from the user before it can do so.

### The API: "Resource Server"
The resource server is the API server used to access the user's information.

### The Authorization Server
This is the server that presents the interface where the user approves or denies the request. In smaller implementations, this may be the same server as the API server, but larger scale deployments will often build this as a separate component.

### The User: "Resource Owner"
The resource owner is the person who is giving access to some portion of their account.

