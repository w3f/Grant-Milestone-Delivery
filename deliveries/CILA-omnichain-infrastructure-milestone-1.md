# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CILA-omnichain-infrastructure.md
* **Milestone Number:** 1

**Context** (optional)

Embarking on a journey to transform the Substrate framework, our focus is to seamlessly incorporate omnichain smart contract infrastructure. Central to our mission is the integration of the CQRS and Event Sourcing execution environments. With CQRS, we aim to enhance efficiency by distinctly managing read and write operations. On the other hand, Event Sourcing allows for the precise chronicling of application states through event sequences. Collectively, these modules ensure a streamlined command dispatching, robust event storage, and adept state management on the omnichain, providing an enriched environment for the deployment of smart contracts. 🌐🤖🛠️👨‍💻.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/LICENSE-APACHE.txt | Provision of an Apache License.| 
| 0b. | Documentation | https://github.com/Collective-Intelligence-Labs/cila-substrate/tree/main/docs | Comprehensive documentation to facilitate users and developers. | 
| 0c. | Testing and Testing Guide | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/README.md | A thorough testing procedure and accompanying guide.| 
| 0d. | Docker | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/Dockerfile | Dockerfile to build and run the project in a containerized environment.| 
| 1. | Event Store | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/pallets/event-store/src/lib.rs | Development and integration of the event store.| 
| 2.  | Dispatcher | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/pallets/dispatcher/src/lib.rs  | Implementation of the dispatcher module for operation commands dispatching handling. | 
| 3.  | Aggregate | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/common/src/aggregate.rs | A module offering CQRS aggregate implementation. | 
| 4.  | Event | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/proto/src/event.rs |  Definition of events. | 
| 5.  | Command | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/proto/src/command.rs |  Definition of commands. | 
| 6.  | Operations | https://github.com/Collective-Intelligence-Labs/cila-substrate/blob/main/proto/src/operation.rs |  Definition of operation. | 



**Additional Information**

The cila-substrate project, hosted under the Collective-Intelligence-Labs repository, represents a concerted effort to bring advanced event sourcing and command query responsibility segregation (CQRS) principles to the Substrate framework. The focus on robust modularization, evident from the diversified pallets and proto modules, ensures that the solution remains scalable, maintainable, and adaptable to evolving requirements.

Here's a brief overview of what each significant component achieves:

Licensing: The Apache License is chosen for this project. It is a permissive free software license, which allows users to use the software for any purpose, to distribute it, to modify it, and to distribute modified versions of the software under the terms of the license, without concern for royalties.

Documentation: Comprehensive documentation is provided to ensure that both users and developers can easily understand, deploy, and modify the system as necessary. It serves as the primary point of reference for troubleshooting, system understanding, and feature exploration.

Docker Integration: The inclusion of a Dockerfile signifies the project's commitment to reproducibility, portability, and ease of deployment. By containerizing the application, users can be assured of consistent behavior across different environments.

Event Store, Dispatcher, and Aggregate: These components form the backbone of the event-sourcing model implemented in the project. By segregating events, dispatch mechanisms, and aggregation functionalities, the solution ensures a clean separation of concerns and a high degree of modularity.

Protocols (Event, Command, Operations): The protocol definitions encapsulate the data models and interaction paradigms that the system adheres to. They ensure that there's a consistent structure to the messages and operations, paving the way for smooth interactions and future integrations.

As the project continues to evolve, contributors and stakeholders can expect periodic updates, optimizations, and feature additions. Feedback from the community is highly valued and will be instrumental in shaping the roadmap for cila-substrate.

For developers interested in contributing, it's recommended to familiarize oneself with the documentation and set up a local development environment using the provided Docker configurations. Collaboration, code reviews, and open discussions are encouraged to maintain the project's high-quality standards.

End-users and developers alike are encouraged to reach out with questions, suggestions, or issues through the project's GitHub issue tracker. The cila-substrate team is committed to providing timely responses and ensuring a vibrant, supportive community ecosystem.