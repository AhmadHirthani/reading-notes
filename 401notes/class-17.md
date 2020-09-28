#  TCP Servers
## OSI model
OSI stands for Open Systems Interconnection. It has been developed by ISO – ‘International Organization of Standardization‘, in the year 1984. It is a 7 layer architecture with each layer having specific functionality to perform. All these 7 layers work collaboratively to transmit the data from one person to another across the globe.

## OSI seven layers
The idea of these seven layers is to transform data from understod data to zeros and ones to be transmitted through transering meduims.
In each layer there is a set of protolcols that used to perform the layer's task. In case of sending process, each layer receive data from the upper layer, do it's work then deliver to the next layer. Vice versa in receiving process, each layer receive data from the lower layer, do it's work then deliver to the uper layer.

## TCP - Transmission Control Protocol
TCP is a standard that defines how to establish and maintain a network conversation through which application programs can exchange data. TCP works with the Internet Protocol (IP), which defines how computers send packets of data to each other.

## TCP - Three-way handshake
Three-way handshake is a three steps tcp follows to establish connection between two hosts.

**Step 1 (SYN)** : In the first step, client wants to establish a connection with server, so it sends a segment with SYN(Synchronize Sequence Number) which informs server that client is likely to start communication and with what sequence number it starts segments with  
**Step 2 (SYN + ACK)**: Server responds to the client request with SYN-ACK signal bits set. Acknowledgement(ACK) signifies the response of segment it received and SYN signifies with what sequence number it is likely to start the segments with  
**Step 3 (ACK)** : In the final part client acknowledges the response of server and they both establish a reliable connection with which they will start the actual data transfer.  

![three_steps_handshake](../assets/img/three_steps_handshake.png)



