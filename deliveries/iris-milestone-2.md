# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/tree/master/applications/iris.md
* **Milestone Number:** 2

**Context**
This milestone enables a semi-decentralized pinning service using Substrate and IPFS. It introduces a pallet to allow new validators to be added to a our proof of authority network and introduces incentive for validators to provide storage capacity to the network. Additionally, validators are responsible (and are rewarded) for proxying requests to the IPFS network.

Prerelease: https://github.com/iridium-labs/substrate/releases/tag/v0.0.2
Futher details can be found in the docs [here](https://iridium-labs.github.io/)

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | [Apache 2](https://github.com/iridium-labs/substrate/blob/iris-milestone-2/LICENSE-APACHE2) | No change to licenses used in Substrate |
| 0b. | Documentation | https://iridium-labs.github.io/ | The mdbook source is found at: https://github.com/iridium-labs/iris-docs |
| 0c. | Testing Guide | https://docs.google.com/document/d/1yFH74_yyJTSBXK3Lw3--2jgtqkyUkS4GoDvXlUsTlfw/edit?usp=sharing | |
| 0d. | Docker | [iris](https://hub.docker.com/repository/docker/iridiumlabs/iris), [UI](https://hub.docker.com/repository/docker/iridiumlabs/iris-ui) | The documentation (0b) outlines how to run both docker images. |
| 0e. | Article | https://medium.com/iridium/iris-a-next-gen-decentralized-storage-layer-part-2-16afbe0739e0 | |
| 1a. | Substrate module: iris-session Runtime Module | https://github.com/iridium-labs/substrate/tree/iris_milestone_2 | Our new module delivered exists at: https://github.com/iridium-labs/substrate/blob/iris_milestone_2/bin/node-template/pallets/iris-session/src/lib.rs |
| 1b. | Substrate module: iris-session Runtime Module Test | https://github.com/iridium-labs/substrate/tree/iris_milestone_2 | https://github.com/iridium-labs/substrate/blob/iris_milestone_2/bin/node-template/pallets/iris-session/src/mock.rs, https://github.com/iridium-labs/substrate/blob/iris_milestone_2/bin/node-template/pallets/iris-session/src/tests.rs |
| 2. | User Interface | https://github.com/iridium-labs/ui/tree/iris_milestone_2 | |

**Additional Information**
A   demo video has been created [here](https://www.youtube.com/watch?v=cDmQKB_xsO8)
