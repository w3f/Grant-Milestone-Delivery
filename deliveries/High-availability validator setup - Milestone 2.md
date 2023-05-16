# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md
* **Milestone Number:** 2

**Context** 

The second milestone introduces a microservice which will test dynamic switching of the permission granting, during the validator's work. We will be able to test permission granting triggered whenever the block is produced, the vote is made on the finalized block (GRANDPA) and a message (`I'm online`) is sent for communicating liveness. Only the leader validator will be granted to run those actions. At worst, the author may miss a slot.

The service should contain only basic logic (e.g. return `true` for node that asked first and `false` for following ones).



**Deliverables**

Milestone 2 is deliveried under the `milestone-2` branch on the [substrate-raft](https://github.com/bright/substrate-raft/blob/milestone-2) and the [substrate-raft-setup](https://github.com/bright/substrate-raft-setup/blob/milestone-2) repositories.


| Number | Deliverable | Notes | Testing |
| ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | Apache 2.0 / GPLv3 / MIT / Unlicense | License can be found under: [substrate-raft](https://github.com/bright/substrate-raft/blob/milestone-2/LICENSE-GPL3), [substrate-raft-setup](https://github.com/bright/substrate-raft-setup/blob/milestone-2/LICENSE)
| **0b.** | Documentation | We will provide inline documentation.|
| **0c.** | Testing and Testing Guide | We will provide unit tests and the guidelines for running and testing it the scope. | Run `cargo test` in `substrate-raft`, `substrate-raft-setup` root directory and for testing authority-service in `substrate-raft-setup/bin/authority-service`.
| **0d.** | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. | In the root directory of the `substrate-raft-setup` please run `bash docker/build.sh`
| 1. | Basic service | Create a microservice that accepts connections from the node.|[Authority-service](https://github.com/bright/substrate-raft-setup/blob/milestone-2/bin/authority-service) code 
| 2. | Getting permission from microservice | Set up a custom node repository and write the `PermissionResolver` trait implementation for getting permission from the microservice. | [Repository](https://github.com/bright/substrate-raft-setup/blob/milestone-2) for the custom node, and the [implementation](https://github.com/bright/substrate-raft-setup/blob/milestone-2/permission_resolver/src/lib.rs) for the PermissionResolver.
| 3. | Allow as optional | The choice of using an outside decision making agent for block submission should be configurable in the cli. | Code for the [cli](https://github.com/bright/substrate-raft-setup/blob/milestone-2/node/src/cli.rs)
| 4. | Clean up substrate code | Remove deprecated cli options. | Changes in [code](https://github.com/bright/substrate-raft/commit/f4bab8f2a461271ab52ec6343934f6b84623b6c8)
| 5. | Integration test | A dockerized setup that allows to run custom node networks and a microservice in order to show that the created solution works. | Build docker as pointed in **0d** and than run `docker-compose up` in the root of the `substrate-raft-setup`. We are running here a `permission-service`, which is our  `authority-service`, and the validator node.



**Additional Information**
> Any further comments on the milestone that you would like to share with us.
