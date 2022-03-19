
# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/datdot.md
* **Milestone Number:** 2

**Context**
Milestone 2 is based on the amendment from Feb 2022 and it contains work on the service.js logic, process-cluster management for running simulations and updated documentation.


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Process-cluster management for running simulations |https://github.com/playproject-io/datdot-service/blob/wip/demo/simulation.js| ...| 
| 2 | Polkadot.js simulator |https://github.com/playproject-io/datdot-service/blob/wip/src/node_modules/datdot-chain-sdk/simulate-polkadotjs.js| ...| 
| 3.  | Implementation of service logic split between 3 roles: hoster, attester and encoder |[hoster.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/hoster.js), [attester.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/attester.js), [encoder.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/encoder.js)| There are networking bugs remaining. In order to resolve them, need to build a Networking module & Task management module (aka Restarting tasks system), which will take more time and we therefore apllied these tasks in the Treasury proposal. 
| 4.  | Implementation of the chain logic (simulated as javascript, but all the extrinsics and params will stay the same, they will just need to be reimplemented in rust/substrate) |https://github.com/playproject-io/datdot-service/blob/wip/src/node_modules/datdot-node-javascript/chain.js| Here's the screencast with a short demo of the code https://watch.screencastify.com/v/ZSx4VaflQnJaM9S9xrIB (in the meanwhile I merged the milestone_2 branch to main, so you can just clone the main branch| 
| 5.  | Updated documentation|https://datdot.org/#doc | ...| 