# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md
* **Milestone Number:** 3

**Context** 

Replace the dummy microservice as an infrastructure component with a [TiKV](https://github.com/tikv/tikv) cluster used for leader selection. 
Each node should try to get authorship permission based on the KV (Key-value) state. Replace the current microservice client with a TiKV client and add corresponding logic.



**Deliverables**

Milestone 1 is deliveried under the [milestone-3](https://github.com/bright/substrate-raft-setup/blob/milestone-3) branch in our repository.


| Number | Deliverable | Specification | Testing |
| ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense | License can be found under: [substrate-raft-setup](https://github.com/bright/substrate-raft-setup/blob/milestone-3/LICENSE)
| **0b.** | Documentation | We will provide inline documentation.|
| **0c.** | Testing and Testing Guide | We will provide unit tests and the guidelines for running and testing it the scope. | Run `cargo test` in the `substrate-raft-setup` root directory
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | In the root directory of the `substrate-raft-setup` please run `bash docker/build.sh`
| 1. | Run the necessary Raft services | Set up a local dev infrastructure to run TiKV components in order to provide a distributed KV store. | Basicly [docker-compose.yml](https://github.com/bright/substrate-raft-setup/blob/milestone-3/docker-compose.yml) setups 6 validator nodes where two of them (`alice-1`, `alice-2`) works with authorship permission. We are running there a Placement Drivers (PD) with three TiKV nodes.
| 2. | Integrate a Raft client into the node | Replace the previous logic with a TiKV based one and modify configs to allow the TiKV client to connect to Placement Drivers. Placement Drivers (PD) is one of the components which stores metadata for the entire TiKV cluster. It is responsible for sending commands to the TiKV nodes. The minimum setup for PD is to manage three TiKV nodes. | Same as in point **1**.
| 3. | Integration test | A dockerised setup that allows to test the Raft consensus mechanism. | Build docker as pointed in **0d** and than run `docker-compose up` in the root of the `substrate-raft-setup`.


**Additional Information**
> Any further comments on the milestone that you would like to share with us.
