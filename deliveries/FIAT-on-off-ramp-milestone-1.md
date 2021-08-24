## Milestone Delivery 

* Name: FIAT on-off-ramp [FIAT-on-off-ramp.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/FIAT-on-off-ramp.md)
* Milestone 1 of 3 
* Link to the initial [pull request 348](https://github.com/w3f/Open-Grants-Program/pull/348)


### Milestone 1 Implement FIAT Rest interface

* Link to [github repo](https://github.com/element36-io/ebics-java-service/), commit hash: 58807c92d4132ef87378dba88fb193c90c13a374
* Link to the initial [pull request 348](https://github.com/w3f/Open-Grants-Program/pull/348)

| Number | Deliverable | Link | Notes | 
| -----: | ----------- | ------------- | ------| 
| 0a. | License | [Licence badge](https://github.com/element36-io/ebics-java-service) and [file](https://github.com/element36-io/ebics-java-service/blob/main/LICENCE) |Apache 2.0  |
| 0b. | Documentation | [Source](https://github.com/element36-io/ebics-java-service/tree/main/src/main/java/io/element36/cash36); [documentation](https://github.com/element36-io/ebics-java-service/blob/main/README.md#setup) | See inline documentation of the code and a basic tutorial that explains how a user can link the Open Banking Client to an Ebis/ISO20022 compatible bank account. After Ebics setup with the bank, you can query balance, to read new transactions and to send test and real transactions that will show how the new functionality works. Tested with Hypi Lenzburg, Switzerland. If you need a demo with the real backend, do not hesitate to contact us. |
| 0c. | Testing Guide | [TEST.md](https://github.com/element36-io/ebics-java-service/blob/main/TEST.md) | Core functions are covered by unit tests to ensure functionality and robustness. Tests can be run in the docker container.  |
| 1. | Module: Open Banking Client | [Start Image with Swagger](https://github.com/element36-io/ebics-java-service#start-the-service--take-a-look-at-the-api);  [source of controller](https://github.com/element36-io/ebics-java-service/blob/main/src/main/java/io/element36/cash36/ebics/controller/EbicsController.java) | We used different names for functions. The specified vs. implemented names map as follows: `getAccountBalance():Decimal` ==> POST `/unpeg`,  `getIncomingOrders():IncomingPayments` ==> GET `/bankstatements`, `createOrder (OutgoingPayment)` ==> POST `/unpeg` and  `simulatePayment(Payment)` ==> POST `/simulate`.  Addional APIs: `create`: send funds from any of linked accounts, GET `/paymentstatus`: status of a payment order.  |  
| 2. | Docker | [Dockerhub](https://hub.docker.com/r/e36io/ebics-service); [Howto link image with bank account](https://github.com/element36-io/ebics-java-service/blob/main/HOWTO.md) | Dockerfile for the Open Banking Client on Docker Hub, plus add documentation on how to link the image with a bank account.  |

### Remark

Please note that the milestone 1 does not contain substrate or rust code, as indicated in the grant.  

### Coding guidelines

We followed typical [coding style](https://www.cs.cornell.edu/courses/JavaAndDS/JavaStyle.html#NameVariable) 
for java and best practices for [application structure](https://medium.com/the-resonant-web/spring-boot-2-0-project-structure-and-best-practices-part-2-7137bdcba7d3) (folders, package names) for [Spring Boot](https://spring.io/projects/spring-boot). 


