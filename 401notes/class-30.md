# Hash table
A hash table is a data structure that used to store information in the key/value format. The idea of hash table is to access data with O(1) time based on accessing using the array index. If we have a data (key:value) then we hash the ket to get an index then we will store the data in the resulting index. When retreiving we will hash the key yo get the index then we can fetch the value using the index.

## Collisions
A collision is what happens when more than one key gets hashed to the same index value which means the location of the hashtable.

## Collision avoiding
There is many solution for collision. One of then is to store the values with the same hash(index) in the same index as a linked list contains all keys and values generated the same hash and this is called chaining.




