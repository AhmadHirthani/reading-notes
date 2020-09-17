# Stacks and Queues
## What is a Stack
A stack is a linear data structure that consists of similar data types. Each Node references the next Node in the stack, but does not reference its previous.

Common terminology for a stack is
**Push:** Put node or item on the stack.
**Pop:** Remove node or item on the stack. When you attempt to pop an empty stack an exception will be raised.
**Top/Peek:** Returns the top element of the stack. It acts like pop without removing the element from the stack. When you attempt to top/peek an empty stack an exception will be raised.
**IsEmpty:** Returns true when stack is empty otherwise returns false.

### How Stack works
Stack works in **LIFO** or **FILO** methodology. They are the same idea.
LIFO means last in first out which means that you can only remove the last elemnet was added to the stack then the one before and so on.
FILO means first in last out which means the first element pushed to the slack will be the last element to leave.

## What is a Queue
Common terminology for a queue is

**Enqueue:** Nodes or items that are added to the queue.
**Dequeue:** Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised.
**Front:** This is the front/first Node of the queue.
**Rear:** This is the rear/last Node of the queue.
**Peek:** When you peek you will view the value of the front Node in the queue. If called when the queue is empty an exception will be raised.
**IsEmpty:** returns true when queue is empty otherwise returns false.

### How Queue works
Queue works in **FIFO** or **LILO** methodology. They are the same idea.
FIFO means first in first out which means that you can only remove the first elemnet was added to the stack then the one after and so on.
LILO means last in last out which means the last element pushed to the slack will be the last element to leave.