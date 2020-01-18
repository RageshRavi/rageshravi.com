---
author: "Ragesh R"
date: 2019-08-18
title: Design Patterns
image: 'IMG_0550 2.JPG'
draft: false
---
## Design Patterns

In software engineering, there are few problems that are repetitive in nature. This may be as simple as creating a file name to a complex operation such as appling transactions for database operations. Every such problem needs a solution. If the problems are repeatable, then we could reuse the solutions repeatably as well.

Definition for Software Design Pattern from [wikipedia](https://en.wikipedia.org/wiki/Software_design_pattern)


*A software design pattern is a general, reusable solution to a commonly occurring problem within a given context in software design. It is not a finished design that can be transformed directly into source or machine code. It is a description or template for how to solve a problem that can be used in many different situations. Design patterns are formalized best practices that the programmer can use to solve common problems when designing an application or system.*


Design patterns are broadly classified into the following categories:

- Creational Patterns
- Structural Patterns
- Behavioural Patterns
- Concurrency Patterns

## Creational Design Patterns

Creational design patterns deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling this object creation.

Creational design patterns are composed of two dominant ideas.
- First is encapsulating knowledge about which concrete classes the system uses.
- Second is hiding how instances of these concrete classes are created and combined.

Creational design patterns are further categorized into
- Object-creational patterns - deal with Object creation. This pattern defer part of its object creation to another object
- Class-creational patterns - deal with Class-instantiation. This pattern defer its object creation to subclasses.

Five well-known design patterns that are parts of creational patterns are the

 1. Abstract factory pattern
 2. Builder pattern
 3. Factory method pattern
 4. Prototype pattern
 5. [Singleton pattern](singleton-pattern)

 ## Structural Design Pattern

  1. Adapter pattern
  2. Bridge pattern
  3. Composite pattern
  4. Decorator pattern
  5. Facade pattern
  6. Flyweight pattern
  7. Proxy pattern

 ## Behavioural Design Pattern

   1. Chain of responsibility
   2. Command
   3. Iterator
   4. Mediator
   5. Observer
   6. Momento
   7. State
   8. Strategy
   9. Template method
   10. Visitor

 ## Concurrency Design Pattern

   1. Signaling
   2. Rendezvous
   3. Mutex
   4. Multiplex
   5. Barrier
   6. Double-checked locking
   7. Read-write lock
   8. Thread pool
   9. Thread local storage
