# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/logion_wallet.md
* **Milestone Number:** 2

**Context**

This milestone is about delivering logion's node directory, a service which connects each node in a logion network with the public identity of its owning legal officer (see application for more details). From a functional point of view, the node directory:
- enables one to get the list of node owners in order to contact them directly
- enables node owners to update their public data

In addition to the directory itself, logion's Web Application had to be adapted as well so that it gets data from the directory.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | / | All components are published under Apache 2.0 license, see the LICENSE file in each repository below. |
| 0b. | Documentation | / | See README file in each repository below. |
| 0c. | Testing Guide | [Logion Test README](https://github.com/logion-network/logion-test/tree/grant1-milestone2-4#readme) | Each component comes with a set of unit and integration tests. In order to test the user experience linked to the directory, it is advised to instantiate logion locally and use the Web application to execute the processes linked to the directory. This can be easily done using Docker Compose and [Logion Test](https://github.com/logion-network/logion-test/tree/grant1-milestone2-4), a project enabling the easy deployment of logion for testing purpose. Logion test's `grant1-milestone2-4` branch must be checked out and the `.env` file properly set up (just `cp .env.sample .env`) before following the README. The process to execute is described in the README [here](https://github.com/logion-network/logion-test/tree/grant1-milestone2-4#register-legal-officers-with-directory). |
| 0d. | Docker | [Logion Test docker-compose file](https://github.com/logion-network/logion-test/blob/grant1-milestone2-4/docker-compose.yml) | We provide Docker images that can be used to test all the functionality delivered with this milestone, follow the link for more details. The images were built from the top of below branches and are available from [DockerHub](https://hub.docker.com/u/logionnetwork). |
| 1. | Logion node directory | [GitHub repository @ tag v0.5.0](https://github.com/logion-network/logion-directory/tree/v0.5.0) | We deliver logion's node directory, a REST API implemented in Node.JS/TypeScript. The main controller's code can be found in [here](https://github.com/logion-network/logion-directory/blob/v0.5.0/src/logion/controllers/legalofficer.controller.ts) and is tested [here](https://github.com/logion-network/logion-directory/blob/v0.5.0/test/unit/controllers/legalofficer.controller.spec.ts). |
| 2. | Web application | [GitHub repository @ branch v0.14.0](https://github.com/logion-network/logion-wallet/tree/v0.14.0) | We deliver an updated logion Web application (React/TypeScript) which now interacts with the node directory. To do so, we implemented a [React context](https://github.com/logion-network/logion-wallet/blob/v0.14.0/src/directory/DirectoryContext.tsx) enabling other components of the app to get data about legal officers or update them. [This component](https://github.com/logion-network/logion-wallet/blob/v0.14.0/src/wallet-user/trust-protection/ProtectionRecoveryRequest.tsx#L35) illustrates such use of the context.  |

**Additional Information**

The last 3 milestones of our grant are submitted at the same time but in different PRs.
