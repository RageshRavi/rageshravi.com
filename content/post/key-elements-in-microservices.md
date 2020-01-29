---
author: "Ragesh R"
date: 2020-01-28
title:  Key elements/patterns in Microservices
image: 'spring-cloud1.jpg'
draft: false
---
The most common design patterns that are used in distributed systems are the following.

**1. Configuration Management**
    
Configuration management supports the implementation phase of a software system. Typical solutions manage multiple versions of the source files that implement a system, provide for a selection mechanism to choose a consistent system configuration out of the version space, and subsequently construct the
software system out of the selected source files. In the era of cloud where infrastructure shrinks or grows dynamically and rapidly, 
we need to reconfigure the systems very quick. The reconfiguring of systems should take effect without even rebuilding or rebooting the application.
Configuration management is a major challenge in the microservices architecture. Each service may have its own set of configurations. These services
 deploy and update their configurations frequently. Thus configuration management becomes more of a devops issue. Some of the 
 major tools for configuration management are :
 
 - Spring config cloud
 - Consul
 - Etcd
 - Vault by HashiCorp

**2. Service Discovery**

In cloud based microservices architecture, multiple services as well as 
multiple instances of the same service are available. These services are not 
likely to run on a static IP-Port. There is always a tear down and spinnning up of new services 
based on the demand. Hence the service instances have dynamically assigned network locations.
 So it becomes impossible to use a configuration file 
with static addresses. Therefore the invoking client cannot rely on static addresses.
There ought to be a mechanism to provide the correct location of the service instance to the client. This should be provided dynamically.
Service discovery is one of the patterns that solves this issue. Service discovery model acts as the source of truth which can provide 
locations of all the services that are up and running. Any invoking client can use the service discovery server to find the location
 of a service. Therefore the service discovery acts as a registry of services and their location. Major tools of service discovery are :
 
 - Etcd
 - Consul
 - Apache Zookeeper
 - Netflix Eureka

**3. Circuit Breakers**

Services in a microservice will have to invoke each other very often. What happens if a service is unavailable and the requesting service 
waits for this service to respond? Precious resources such as threads might be consumed in the caller while waiting
 for the other service to respond. This might lead to resource exhaustion, which would make the calling service unable 
 to handle other requests. The failure of one service can potentially cascade to other services throughput the application.
 Circuit breaker is the pattern that solves this problem. It prevents a network or service failure from cascading to other services.
 In this pattern a client should invoke a remote service via a proxy that functions in a similar fashion to an electrical circuit breaker.
  When the number of consecutive failures crosses a threshold, the circuit breaker trips, and for the duration of a 
  timeout period all attempts to invoke the remote service will fail immediately. 
  After the timeout expires the circuit breaker allows a limited number of test requests to pass through. 
  If those requests succeed the circuit breaker resumes normal operation. 
  Otherwise, if there is a failure the timeout period begins again. An example is Netflix's Hystrix.

**4. Messaging in microservices**

There are two basic messaging patterns that microservices can use to communicate with other microservices.

 - **Synchronous communication :** In this pattern, a service calls an API that another service exposes, using a protocol 
 such as HTTP or gRPC. This option is a synchronous messaging pattern because the caller waits for a response from the receiver.
 - **Asynchronous message passing :** In this pattern, a service sends message without waiting for a response, 
 and one or more services process the message asynchronously.

**5. Authentication and authorization**

Under the microservice architecture, an application is split into multiple microservice processes, and each microservice 
implements the business logic of one module in the original single application. 
After the application is split, the access request for each microservice needs to be authenticated and authorized. The following are the approaches 
tht are available for implementing authentication and authorization in microservices.

- Local authentication and authorization.
- Global authentication and authorization.
- Global authentication and authorization as part of microservices.

**6. Distributed Transaction Management**

The most challenging part of microservices architecture is managing transactions across multiple services. 
When a microservice architecture decomposes a monolithic system into self-encapsulated services, 
it can break transactions. This means a local transaction in the monolithic system is now distributed 
into multiple services that will be called in a sequence. The microservice-based system does not have a global
 transaction coordinator by default. The major problem with distributed transaction management are the following:
 
 - Keeping the transaction atomic.
 - Handling concurrent requests.
 
 The above problems are mitigated by the following two patterns.
 
 - Two-phase commit
 - [Eventual Consistency and Compensation / SAGA](../saga-design-pattern)

**7. Leadership Election**

Multiple instances of the same microservice are involved in the completion of a prticular task. 
What if the client application invoking the microservice instances does not have the necessary logic to coordinate them? This leads to 
runtime exceptions leading to data corruption and failure to complete the task. The solution would be to implement a 
reliable leader election mechanism, isolated from the microservice runtime to elect the leader node.
The tasks and actions performed by a collection of collaborating instances in a distributed microservice 
architecture are coordinated by electing one instance as the leader to take responsibility for managing the others. 
This helps to ensure that tasks and operations are coordinated and that instances do not conflict with each other.

**8. Distributed sessions**

In order to make full use of benefits of the microservice architecture and to achieve the scalability and resiliency of the microservices, 
the microservices are preferably to be stateless. This solution can be applied through different ways like:

- **Sticky session**, which ensures that all requests from a specific user will be sent to the same server who handled the first 
request corresponding to that user, thus ensuring that session data is always correct for a certain user.
- **Session replication**, which means that each instance saves all session data, and synchronizes through the network. 
Synchronizing session data causes network bandwidth overhead. As long as the session data changes, the data needs to be 
synchronized to all other machines. The more instances, the more network bandwidth the synchronization brings.
- **Centralized session storage**, means that when a user accesses a microservice, user data can be obtained from shared session storage, 
ensuring that all microservices can read the same session data. In some scenarios, this scheme is very good, and the user login status 
is opaque. It is also a highly available and scalable solution. But the disadvantage of this solution is that shared session storage 
requires a certain protection mechanism and therefore needs to be accessed through a secure way.
