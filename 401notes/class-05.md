# Data structures
Data structures means the different ways that we can organize our data; variables, arrays, hashes, and objects are all types of data structures.

# Linked list
A Linked List is a sequence of Nodes that are connected/linked to each other. The most defining feature of a Linked List is that each Node references the next Node in the link. One characteristic of linked lists is that they are linear data structures. In order to get to the end of the list, we have to go through all of the items in the list in order, or sequentially. There is tow types of linked list:

![SMACSS Image](../img/LinkedList1.png)

## Singly linked list:
Singly linked list means that there is only one reference, and the reference points to the Next node in a linked list.

## Doubly linked list:
Doubly refers to there being two (double) references within the node. A Doubly linked list means that there is a reference to both the Next and Previous node.

# Traversal
If we want to traverse a linked list, we can not use for loop because we depend on the refrence to move between linked list nodes. The Next property is exceptionally important because it will lead us where the next node is and allow us to extract the data appropriately. The best way to approach a traversal is through the use of a while() loop. This allows us to continually check that the Next node in the list is not null. If we accidentally end up trying to traverse on a node that is null, a NullReferenceException gets thrown and our program will crash/end. When traversing through a linked list, the Current node is the most helpful. The Current will tell us where exactly in the linked list we are and will allow us to move/traverse forward until we hit the end.

# Big O
Big O refers to the complexity of an algorithm from space and time prospective. When we work on a programming solution for any problem we should care about how much time and space this solution will take.
