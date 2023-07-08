# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md
* **Milestone Number:** 2

**Context** 
This milestone improves Solidity development experience on Substrate based chains, by providing a way to read compiler configurations from a `solang.toml` file, as well as providing a command `solang new` responsible for creating a solang project directory with an example contract as well as an example configuration file.


**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/hyperledger/solang/blob/main/LICENSE | Apache-2.0 |
| 0b. | Documentation | https://solang.readthedocs.io/en/latest/running.html#compiler-usage https://solang.readthedocs.io/en/latest/running.html#starting-a-new-project| In Solang's documentation, one can find the flags `contract-authors`, `version` and `config-file`.  `solang new` can be found at the second link.|
| 0c. | Testing |https://github.com/hyperledger/solang/blob/main/src/bin/cli/test.rs https://github.com/hyperledger/solang/blob/main/tests/cli.rs| The provided tests cover the newly added functionalities: `solang new` as well as unit tests for reading the configurations from `solang.toml` |
| **0d.** | Docker | There will be no independent DockerFiler for this milestone, because Solang has its own DockerFile, which can be used to test the mentioned functionalities.|
|     0e. | Article |https://forum.polkadot.network/t/introducing-solang-improvements/3361 |
|      1. | Implement [Solang projects](https://github.com/hyperledger/solang/milestone/6) | https://github.com/hyperledger/solang/pull/1316 https://github.com/hyperledger/solang/pull/1347 https://github.com/hyperledger/solang/pull/1392 | Regarding the substrate target configuration, I added a comment on the milestone describing why it should be left as is. I took a week of researching this issue, then spoke with the maintainers and agreed that this was the best option for the users. |


**Repositories** 
(Apache-2.0)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| All components | https://github.com/hyperledger/solang | Rust/Solidity |