# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **PR Link:** [Logion wallet](https://github.com/w3f/Grants-Program/pull/627)
* **Milestone Number:** 1

**Context**

This milestone is about delivering an early version of logion's wallet with account recovery features (possibility of a user to recover assets even if he/she lost his/her key).
The 3 main components of the solution are part of the deliverables:

- the Substrate node including the [recovery pallet](https://docs.substrate.io/rustdocs/latest/pallet_recovery/index.html),
- the off-chain service responsible for handling private data (i.e. user identity information),
- the Dapp Logion's users interact with.

See additional information below.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | / | All components are published under Apache 2.0 license, see the LICENSE file in each repository below. |
| 0b. | Documentation | / | See README file in each repository below. |
| 0c. | Testing Guide | [Logion Test README](https://github.com/logion-network/logion-test/tree/grant1-milestone1#logion-test) | Each component comes with a set of unit and integration tests. However, this milestone is more about delivering a user experience. It is therefore advised to instantiate logion locally and use the Web application to execute the protection and recovery processes. This can be easily done using Docker Compose and [Logion Test](https://github.com/logion-network/logion-test/tree/grant1-milestone1), a project enabling the easy deployment of logion for testing. Logion test's `grant1-milestone1` branch must be checked out before following the README. The processes to execute are described in the README [here](https://github.com/logion-network/logion-test/tree/grant1-milestone1#account-protection) and [here](https://github.com/logion-network/logion-test/tree/grant1-milestone1#account-recovery). |
| 0d. | Docker | [Logion Test docker-compose file](https://github.com/logion-network/logion-test/blob/grant1-milestone1/docker-compose.yml) | We provide Docker images that can be used to test all the functionality delivered with this milestone, follow the link for more details. The images were built from the top of below branches and are available from [DockerHub](https://hub.docker.com/u/logionnetwork). |
| 1. | Logion node | [GitHub repository @ branch grant1-milestone1](https://github.com/logion-network/logion-node/tree/grant1-milestone1) | We deliver logion's Substrate node including the recovery pallet in its runtime. The node is based on Substrate Node Template v3.0. |
| 2. | Off-chain service | [GitHub repository @ branch grant1-milestone1](https://github.com/logion-network/logion-backend-ts/tree/grant1-milestone1) | We deliver the companion off-chain service handling protection requests (the first step for a wallet user before being able to actually get the protection of legal officers) through a REST API implemented in Node.JS/TypeScript. The controller implementing the REST resources for protection request handling is defined in [this file](https://github.com/logion-network/logion-backend-ts/blob/grant1-milestone1/src/logion/controllers/protectionrequest.controller.ts). Unit tests are located in [this file](https://github.com/logion-network/logion-backend-ts/blob/grant1-milestone1/test/unit/controllers/protectionrequest.controller.spec.ts). Note that most resources require the caller to be authenticated. The authentication "protocol" is described [here](https://github.com/logion-network/logion-backend-ts/blob/grant1-milestone1/doc/Authentication.md) and implemented using resources defined in [this file](https://github.com/logion-network/logion-backend-ts/blob/grant1-milestone1/src/logion/controllers/authentication.controller.ts). Tests are [here](https://github.com/logion-network/logion-backend-ts/blob/grant1-milestone1/test/unit/controllers/authentication.controller.spec.ts). |
| 3. | Web application | [GitHub repository @ branch grant1-milestone1](https://github.com/logion-network/logion-wallet/tree/grant1-milestone1) | We deliver logion's Web application (React/TypeScript) which enables the execution of the processes described [here](https://github.com/logion-network/logion-test/tree/grant1-milestone1#use-cases). |

**Additional Information**

As mentioned in our Grant Application (see development status):
"The development of logion's wallet started in March 2021. The account protection and recovery processes are implemented (off-chain and on-chain) and ready to be used."

We have worked on the evolution and maturation of our project. As we are ready to move on to the next steps, the time is appropriate to propose the review of our first millestone.

If you have any questions about this millestone, our organization, our project as a whole, contact us.
We are developing specific services. Through these we want to contribute to the enhancement of the ecosystem as a whole.

The recovery service could, for example, be used by a wallet like Talisman or another. It could be the same with the multisign option using logion network legal officiers as institutional and neutral gardians.
