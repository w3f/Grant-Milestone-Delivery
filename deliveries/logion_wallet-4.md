# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/logion_wallet.md
* **Milestone Number:** 4

**Context**

This milestone is about delivering multisig capabilities for the logion wallet (see application for more details). This is achieved through the logion Vault: a multisig account requiring the signature of its owner as well as at least one of its legal officers. FRAME's `multisig` pallet has been added to the logion node as well as a custom pallet and call filtering in order to enforce the following additional constraints:
- only 2 legal officers can be selected as "multisigners",
- a multisig must be initiated by a regular user and approved by a legal officer.

The feature also required an update of the Web application and the off-chain service in order to provide a fluid user experience.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | / | All components are published under Apache 2.0 license, see the LICENSE file in each repository below. |
| 0b. | Documentation | / | See README file in each repository below. |
| 0c. | Testing Guide | [Logion Test README](https://github.com/logion-network/logion-test/tree/grant1-milestone2-4#readme) | Each component comes with a set of unit and integration tests. In order to test the user experience linked to the multisig, one must instantiate logion locally and use the Web application to execute the processes linked to the multisig. This can be easily done using Docker Compose and [Logion Test](https://github.com/logion-network/logion-test/tree/grant1-milestone2-4), a project enabling the easy deployment of logion for testing purpose. Logion test's `grant1-milestone2-4` branch must be checked out and the `.env` file properly set up (just `cp .env.sample .env`) before following the README. The process to execute is described in the README [here](https://github.com/logion-network/logion-test/tree/grant1-milestone2-4#multisig). |
| 0d. | Docker | [Logion Test docker-compose file](https://github.com/logion-network/logion-test/blob/grant1-milestone2-4/docker-compose.yml) | We provide Docker images that can be used to test all the functionality delivered with this milestone, follow the link for more details. The images were built from the top of below tags and are available from [DockerHub](https://hub.docker.com/u/logionnetwork). |
| 1. | Logion node | [GitHub repository @ tag v0.8.0](https://github.com/logion-network/logion-node/tree/v0.8.0) | We deliver logion's Substrate node including the `multisig` pallet in its runtime. A custom [`vault` pallet](https://github.com/logion-network/logion-node/blob/v0.8.0/pallets/vault/src/lib.rs) has also been written to implement the additional constraints descibed above. Most direct calls to the multisig pallet are prevented (using a call filter) to guarantee the constraints. The node is based on Substrate Node Template v3.0. |
| 2. | Off-chain service | [GitHub repository @ tag v0.14.0](https://github.com/logion-network/logion-backend-ts/tree/v0.14.0) | We deliver the companion off-chain service handling multisig requests (a mean to notify a legal officer that there is an operation to countersign) through a REST API implemented in Node.JS/TypeScript. The controller implementing the REST resources for multisig request handling is defined in [this file](https://github.com/logion-network/logion-backend-ts/blob/v0.14.0/src/logion/controllers/vaulttransferrequest.controller.ts). Unit tests are located in [this file](https://github.com/logion-network/logion-backend-ts/blob/v0.14.0/test/unit/controllers/vaulttransferrequest.controller.spec.ts). |
| 3. | Web application | [GitHub repository @ branch v0.14.0](https://github.com/logion-network/logion-wallet/tree/v0.14.0) | We deliver an updated logion Web application (React/TypeScript) which exposes the Vault feature. |

**Additional Information**

The last 3 milestones of our grant are submitted at the same time but in different PRs.
