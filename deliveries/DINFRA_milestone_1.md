# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [DINFRA](https://github.com/w3f/Grants-Program/blob/master/applications/DINFRA.md)
* **Milestone Number:** 1

**Context** 

This DINFRA, Decentralized Infrastructure with Substrate, milestone one. This milestone focuses on the infrastructure integration part of DINFRA MVP. The interface to connect DINFRA to Cloud infrastructure.

After analyzing all potentials interfaces to integrate Substrate Parachain and the Chain Reactor we decided to adopt an specialized sidecar pattern for the parachain. A component called OGate. This interface is a milestone 2 deliverable but is partly delivered now because it comes with a parachain SIMULATOR that allows to simulate the parachain during Chain Reactor Development and QA.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | Link | Apache 2.0 |
| **0b.** | Documentation | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#about-dinfra) [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/acs-reactor#reference-implementation-chain-reactor) | We delivered module markdown documentation, **inline documentation** of the code and a testing **tutorial** as well as how to implement a Chain Reactor. |
| **0c.** | Testing and Testing Guide | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#testing-guide) [Link](https://gitlab.com/dinfra/dinfra/-/pipelines/951071017) | Delivered unit tests, CD pipelines, to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| **0d.** | Docker | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#test-run-of-the-system) [Link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE1/docker-compose.yml) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Chain Reactor API | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#available-playgrounds) [API UI](http://localhost:7300/dinfra)| We created the API for Chain Reactors using OpenAPI,  we integrated a client generator, Python and Javascript clients are generated. |
| 2. | Chain Reactor RI | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/acs-reactor#reference-implementation-chain-reactor) | We created a Chain Reactor Reference Implementation based on Apache CloudStack that can run against the Apache CloudStack Simulator to facilitate further development. The RI uses Ansible as automation stack|
| 3. | Chain Reactor RI Test Suite | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/acs-reactor#test-toolkit) | We will released a set of unit tests and a SIMULATOR that can run tests scripts against the Chain Reactor |
| 4. | CD/CI Chain Reactor RI | [Link](https://gitlab.com/dinfra/dinfra/-/jobs/4774377657) [Link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE1/.gitlab-ci.yml?ref_type=tags) | Gitlab Pipelines were created for Chain Reactor, based on the SIMULATOR |
| 5. | SSH Key Derivation | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/keytool?ref_type=tags#wip-dinfra-keytool) | We researched viability of key portability between Substrate and SSH with ed25519. Despite the API providing PKCS8 encoding we did not find portability between NodeJS and OpenSSL Keys.|
| 6. | Substrate Deployment Descriptors | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/descriptors?ref_type=tags#deployment-descriptors) | A comprehensive guide to deployment descriptors, the usage of JSON Schemas and use cases relevant to the Substrate community.|



**Additional Information**

With regards to key interoperability we believe the interface is perfectly possible, we have created a keytool module that we will continue to develop, although the priority is lower compared to releasing the MVP. We are working with the community to find out why the PKCS8 interface is not interoperable with other software in parallel. 
