# Trees


## Common Terminology
**Node** - A node is the individual item/data that makes up the data structure  
**Root** - The root is the first/top Node in the tree  
**Left Child** - The node that is positioned to the left of a root or node  
**Right Child** - The node that is positioned to the right of a root or node  
**Edge** - The edge in a tree is the link between a parent and child node  
**Leaf** - A leaf is a node that does not contain any children  
**Height** - The height of a tree is determined by the number of edges from the root to the bottommost node  

## Traversals
Traverse tree is an important concept since it allows us to go through the tree and get nodes, childs, leafes and roots. There are two categories of traversals when it comes to trees: **Depth First** and **Breadth First**.

## Depth First
In depth first, we give the priority to go through each node's childrens mans going in tree's height. Here are three methods for depth first traversal:

### Pre-order: root >> left >> right
### In-order: left >> root >> right
### Post-order: left >> right >> root

`The most common way to traverse through a tree is to use recursion. With these traversals, we rely on the call stack to navigate back up the tree when we have reached the end of a sub-path.`

## Breadth First
In breadth first, we give the priority to go through the tree level by level, node by node starting from root level until reaching the last leaf.

### Example
![Breadth First Example](../assets/breadth_first.png)

The output using breadth first traversal for the previous image will be:  

Output: A, B, C, D, E, F







