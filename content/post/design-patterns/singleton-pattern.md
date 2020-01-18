---
author: "Ragesh R"
date: 2020-01-18
title: Singleton Pattern
image: 'singleton.png'
draft: false
---

**What is singleton pattern?**

Singleton pattern is one of the simplest design patterns in Java. This pattern is used in situations where only a single instance of the object should be available for use. This pattern involves a single class which is responsible to create an object while making sure that only single object gets created. This class provides a way to access its only object which can be accessed directly without need to instantiate the object of the class.


**Use Cases**

The main usecase of singleton pattern is to create those instances which are costly to the system resources. For example an instance of database object, which establishes connection to the database. We do not want this object to be created by all those operations(objects) which need to perform read/write operation on the database. So we can limit this costly resource to a single instance using this pattern.
Some of the other usecases that can leverage the singleton design pattern would be 

   - Loggging
   - Caching
   - Service host repositories
   - Load Balancer 

**Implementation/Design options**

```java

    class Singleton {
    
        private static Singleton obj; 
      
        //private constructor will restrict 
        //instantiation through new operator.
        private Singleton() {} 
      
        //static method used to get the object
        public static Singleton getInstance() 
        { 
            if (obj==null) 
                obj = new Singleton(); 
            return obj; 
        } 
        
    }

```

**Thread safety**

By default the above implementation is not thread safe. Two threads can invoke the ```getInstance()``` method at the same time. So there can be two objects that gets instantiated. How can we make this design thread safe?
We can make the static ```getInstance()``` method synchronized.

```java

class Singleton 
{ 
    private static Singleton obj; 
  
    private Singleton() {} 
  
    // Only one thread can execute this at a time 
    public static synchronized Singleton getInstance() 
    { 
        if (obj==null) 
            obj = new Singleton(); 
        return obj; 
    } 
} 

```
The primary disadvantage of this implementation is that it creates performance issues as ```getInstance()``` is synchronized and every call to this method would decrease the performance of the application.
How can we fix it?

We can instantiate the object on class load itself using static initializer. So the object is creaed during class load and is guaranteed to be thread safe.

```java

class Singleton 
{ 
    //object is instantiated on class load.
    private static Singleton obj = new Singleton(); 
  
    private Singleton() {} 
  
    public static Singleton getInstance() 
    { 
        return obj; 
    } 
} 

```


