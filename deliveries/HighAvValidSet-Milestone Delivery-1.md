# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md
* **Milestone Number:** 1

**Context** 

The goal of the first milestone will be adding a switch to the substrate codebase, which will conditionally allow block production, voting or sending I'm online message. We will achieve this by introducing a PermissionResolver trait. Only for the purpose of this milestone there are going to be two trivial implantations of this trait. First configuration will grant the validator permissions and the second one will not. At this stage we only want to verify if hardcoded conditional logic works well with the nodes with the same auth key but different configurations (permission granted/denied). For the testing purpose we will provide an additional option to the CLI, to run a validator with one of the pointed configurations.



**Deliverables**

| Number | Deliverable | Testing | Notes 
| ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | License can be found under: [substrate-raft](https://github.com/bright/substrate-raft/blob/m1/LICENSE-GPL3)| Apache 2.0 / GPLv3 / MIT / Unlicense | |
| **0b.** | Documentation | | We will provide inline documentation.|
| **0c.** | Testing and Testing Guide | Run `cargo test` in project’s root directory. | We will provide unit tests and the guidelines for running and testing it the scope. |
| **0d.** | Docker | First run `bash docker/build.sh` in the project's root directory | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1. | Update substrate | In `docker-compose.yml`, we have setup Alice-1 with permission granted to produce blocks/votes for finalised blocks and `I'm online` messages. Alice-2 is setup with permission deny. By running `docker-compose up`, we can observe that only Alice-1 is producing/finalising bloks and sending `I'm online` messages.   | Modify the substrate code to conditionally submit blocks/votes for finalised blocks (GRANDPA)/`I'm online` messages. |
| 2. | Update substrate client - cli | We can run node with the `--permission-resolver=never` / `--permission-resolver=always` option, which will prevent / allows block production / vote finalisation and sending `I'm online` messages. | Modify the substrate code to conditionally grant or permit permissions. There will be option to run node in permission granted or permission denied mode). It will be useful to prove that permissioning works by running two nodes with same auth keys but different modes (permission granted/denied) |
| 3. | Integration test | Run `bash docker/build.sh` and `docker-compose up`| A dockerised setup that allows to run network in setup described above. |

