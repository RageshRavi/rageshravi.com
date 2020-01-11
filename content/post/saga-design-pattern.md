---
author: "Ragesh R"
date: 2019-08-18
title: Saga Design Patter
image: 'IMG_0562.jpg'
draft: false
---

## SAGA
Data consistence is an essential part of any software application. Unlike a monolithic application, the microservices model does not have a single source of truth. Each service have its own data store. As a result the state of the application is spread across multiple services. In order to maintain data consistency, the usual technique used by application developers is the transaction management. But it becomes very difficult in a world where data is spread across multiple services. A single transaction spreads across multiple services. To solve this kind of cumbersome job, we have a well known design pattern - SAGA.

Saga is one of the well known design patterns. It is more popular in the microservices world. Saga was proposed to alleviate the problems caused by Long Lived Transactions(LLT).  The term "saga" was first used in a [1987 research paper](http://www.cs.cornell.edu/andru/cs711/2002fa/reading/sagas.pdf) by Hector Garcia-Molina and Kenneth Salem. It’s introduced as an conceptual alternative for long lived database transactions.An LLT is a saga if it can be written as a sequence of transactions that can be interleaved with other transactions.

 - One fo the main advantage of saga pattern is data consistency across multiple services with out using tight coupling/distributed transactions.
 - The main disadvantage is the complexity involved in designing as well as programming this model.

**There are two models of saga design pattern.**

1. Orchestration based SAGA
2. Choreography based SAGA

**Orchestration based SAGA**

This style relies on a central orchestrator, that defines the sequence of execution as well as the rollback transactions. This central orchestration service is  known as Saga Execution Coordinator (SEC). The following is carried out by a SEC.
  - Stores & interprets a Saga’s state machine
  - Executes the Requests of a Saga by talking to other services
  - Handles failure recovery by executing Compensating Requests

**Choreography based SAGA**

This style relies on the method of event getting published from one service, and this event being the trigger for services who listen to it. Which means, if a local transaction in one of the service is successful, it would emit an event. There are other services that listen to this emitted event, which gets triggered and carry out their local transactions. Events are emitted both in the case of successful as well as failure transactions. The rollback mechanism needs to be implemented as well in case of a failure.

**Advantages**

  1. It helps maintain data consistency across multiple services without tight coupling.
  2. The support for long loved transactions. Each microservice focusses only on its own local atomic transaction, other microservices are not blocked if a microservice is running for a long time.


**Disadvantages**

  1. Requires complex programming.
  2. The rollback/compensating transactions is an overhead.
  3. Increases the difficulty of debugging with the increase in the number of microservices.
  4. There is no read isolation. There will be an inconsistency in read when there is a rollback.
