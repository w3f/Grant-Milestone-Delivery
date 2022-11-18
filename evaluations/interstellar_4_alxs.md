# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Interstellar-Network.md
- **Milestone:** 4

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> |  APACHE 2.0 & GPL3 https://github.com/Interstellar-Network/api_garble/blob/main/LICENSE  https://github.com/Interstellar-Network/api_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/lib_garble/blob/main/LICENSE https://github.com/Interstellar-Network/lib_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/integritee-node/blob/interstellar/LICENSE https://github.com/Interstellar-Network/integritee-worker/blob/interstellar/LICENSE https://github.com/Interstellar-Network/pallets/blob/main/LICENSE | Not MIT as per application, but Apache 2.0 is also fine. Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs |
| 0b. | Documentation | <ul><li>[x] </li></ul> |  [code documentation](https://book.interstellar.gg/M4.html#code-documentation) | 
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [testing guide](https://book.interstellar.gg/M4.html#testing-guide) | Difficult to test  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Interstellar-Network/Interstellar-Book/blob/docker-compose/docker-compose.yml), [demo tutorial](https://book.interstellar.gg/M4_demo_tutorial.html) | 
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium](https://medium.com/@jlleleu/web3-foundation-and-interstellar-protocol-b4003a64e927) | Updated version of a previously submitted article
| 1. | Substrate modules Authenticator port in TEE | <ul><li>[x] </li></ul> | [ocw-common](https://github.com/Interstellar-Network/pallets/tree/main/ocw-common), [ocw-garble](https://github.com/Interstellar-Network/pallets/tree/main/pallets/ocw-garble), [tx-validation](https://github.com/Interstellar-Network/pallets/tree/main/pallets/tx-validation)
| 2. | Substrate module Mobile Registry port in TEE | <ul><li>[x] </li></ul> | [tx-registry](https://github.com/Interstellar-Network/pallets/tree/main/pallets/tx-registry) | 
| misc. | Integritee integration | <ul><li>[x] </li></ul> | [node](https://github.com/Interstellar-Network/integritee-node), [worker](https://github.com/Interstellar-Network/integritee-worker) | Instructions in `integritee-worker` broken, but probably only missing deps

## General Notes

Generally good documentation, though not easy to grasp without the necessary background.
No tutorial as described in deliverable 0b. in the application provided, since the team [argued](https://github.com/w3f/Grant-Milestone-Delivery/pull/594#issuecomment-1297544134) the steps to be followed by the end user are the same ones as for the last milestone.

See notes for the individual deliverables above.
Some additional information provided by the team in the delivery [file](https://github.com/w3f/Grant-Milestone-Delivery/blob/bc7e5f05da17b4962ad9a69ea0549874feb75613/deliveries/Interstellar-Network-milestone_4.md).

Partial test results provided by grantee due to difficulties in running them on testing machine, as well as CI in place for some repositories:

| Repo        | Language          |  cargo-tarpaulin | CI logs
| :-------------: |:-------------:| :-------------: | :-------------:|
| [lib_circuits](https://github.com/Interstellar-Network/lib_circuits)     | C++ | N/A | too old
| [api_circuits](https://github.com/Interstellar-Network/api_circuits)      | Rust      | FAIL; `ERROR cargo_tarpaulin: Failed to run tests: A segfault occurred while executing tests` Possibly b/c of this exe is linked with system-wide libraries? Or maybe thread safety issues in a linked lib? edit: works with `cargo tarpaulin --skip-clean --release`:  `83.33% coverage, 30/36 lines covered, +0.00% change in coverage` | https://github.com/Interstellar-Network/api_circuits/actions/runs/3182194945/jobs/5187832042 |
| [lib_garble](https://github.com/Interstellar-Network/lib_garble) | C++      | N/A | too old |
| [api_garble](https://github.com/Interstellar-Network/api_garble) | Rust      |    `80.33% coverage, 1074/1337 lines covered`  edit: wth `cargo tarpaulin --skip-clean --release`: `84.09% coverage, 37/44 lines covered, +3.76% change in coverage` | https://github.com/Interstellar-Network/api_garble/actions/runs/3182198854/jobs/5187840299 |
| [integritee-node](https://github.com/Interstellar-Network/integritee-node) | Rust | `1.34% coverage, 19/1414 lines covered` b/c the tests only cover our pallets, but the repo contains the whole integritee's sources | https://github.com/Interstellar-Network/integritee-node/actions/runs/3182785327/jobs/5189182367 |
| [integritee-worker](https://github.com/Interstellar-Network/integritee-worker) | Rust+SGX      |    N/A b/c of Intel SGX? | https://github.com/Interstellar-Network/integritee-worker/actions/runs/3227169082/jobs/5281617758 |
| [pallets](https://github.com/Interstellar-Network/pallets) | Rust | N/A      |    No CI, integrated in integritee-node/integritee-worker as submodule |
