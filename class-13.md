# Local Storage
Have you thinked about the values you store in the variables, where it stored? We use the variables to store values but these values really stored in the random memory. If power goes off or you refreshed the web page, you will lost these values. That means storing data inside variables is not perminant. There is an different between web application and client application or desktop application in the way of storing data. In client apllication, The operation system provides abstraction layer for storing and retrieving application-specific data like preferences or runtime state. On web there was many tries to store data locally:

## Cookies
Cookies were the first way used to store data but they have three potentially dealbreaking downsides. 

## userData
userData allows web pages to store up to 64 KB of data per domain, in a hierarchical XML-based structure. And in the best cases it will multiply the number with 10.

## Flash cookies
In 2002, Adobe introduced a feature of “Flash cookies.” Within the Flash environment, the feature is properly known as Local Shared Objects. The feature allows Flash objects to store up to 100 KB of data for each domain.

## AMASS
AMASS (AJAX Massive Storage System) was developed by Brad Neuberg, but it was limited by some of Flash’s design quirks. By 2006, when the ExternalInterface appeared in Flash 8, accessing LSOs from JavaScript became an order of magnitude easier and faster. After that Brad improved AMASS and intrduced under the moniker dojox.storage. Flash gives each domain a free 100 KB of storage and with each user's order of of magnitude the space will increase (1 Mb, 10 Mb, and so on).

## Gears
In 2007, Google launched Gears. Gears can store unlimited amounts of data per domain in SQL database tables.

## HTML5 storage
HTML5 storage, Web Storage or DOM Storage is a way for storing web page's named key/value pairs locally, within the client web browser. This data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you. Also this data is never transmitted to the remote web server unless you change its prmissions. This way of storing data is implemented natively in web browsers, so it can work even if the third-party browser plugins are unavailable.

### USING HTML5 STORAGE
HTML5 Storage is based on named key/value pairs. We store data based using the key name, then we can retrieve it using the same key. The name of the key is a string. The value of the key can be any strings, Booleans, integers, or floats. Whatever was the type of data you stored, when retreving it will be a string, so you need to use functions like parseInt() or parseFloat() to retreive its original type.
