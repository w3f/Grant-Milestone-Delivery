# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md
* **Milestone Number:** 1

**Context** 
This milestone improves Solidity development experience on Substrate based chains, by providing debugging features to the Solang compiler. The features added include printing runtime errors and formatting debugging output.


**Deliverables**





| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/hyperledger/solang/blob/main/LICENSE | Apache-2.0 |
| 0b. | Documentation | https://solang.readthedocs.io/en/latest/code_gen_options.html#log-runtime-errors <br> https://solang.readthedocs.io/en/latest/running.html | The provided links for pull requests (in deliverables 1, 2,3 &4) all have inline documentation. The documentation provided in this section is for a Solang user. |
| 0c. | Testing | https://github.com/hyperledger/solang/blob/main/integration/substrate/runtime_errors.spec.ts <br> https://github.com/hyperledger/solang/blob/main/integration/substrate/release_version.spec.ts <br> https://github.com/hyperledger/solang/blob/main/integration/substrate/debug_buffer_format.spec.ts <br>  https://github.com/hyperledger/solang/blob/main/tests/substrate_tests/errors.rs <br> https://github.com/hyperledger/solang/blob/main/tests/substrate_tests/debug_buffer_format.rs| The provided integration tests show the debugging features added: printing runtime errors and debug buffer formatting. |
| 1. | [Use structured data in the debug buffer](https://github.com/hyperledger/solang/issues/1048) | https://github.com/hyperledger/solang/pull/1188  | - |
| 2&3 | [Print execution errors in the debug buffer](https://github.com/hyperledger/solang/issues/1083) &  [Execution errors to be passed with source file and line number](https://github.com/hyperledger/solang/issues/972) | https://github.com/hyperledger/solang/pull/1150 | The mentioned pull request addresses both deliverables.|
| 4. | Fix [Bug: Substrate Integration tests fail to compile with -g](https://github.com/hyperledger/solang/issues/1051) | https://github.com/hyperledger/solang/pull/1222 | -| 
| 5. | Add a `release` flag | https://github.com/hyperledger/solang/pull/1227 | -| 

**Repositories** 
(Apache-2.0)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| All components | https://github.com/hyperledger/solang | Rust/Solidity |