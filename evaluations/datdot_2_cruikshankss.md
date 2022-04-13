# Evaluation

- **Status:** Accepted
- **Application Document:** The amendment is private 
- **Milestone:** 2

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 1. | Process-cluster management for running simulations | [x] | https://github.com/playproject-io/datdot-service/blob/wip/demo/simulation.js|| 
| 2 | Polkadot.js simulator | [x] | https://github.com/playproject-io/datdot-service/blob/wip/src/node_modules/datdot-chain-sdk/simulate-polkadotjs.js|| 
| 3.  | Implementation of service logic split between 3 roles: hoster, attester and encoder | [x] | [hoster.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/hoster.js), [attester.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/attester.js), [encoder.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/encoder.js)| There are networking bugs remaining. In order to resolve them, need to build a Networking module & Task management module (aka Restarting tasks system), which will take more time and we therefore apllied these tasks in the Treasury proposal. 
| 4.  | Implementation of the chain logic (simulated as javascript, but all the extrinsics and params will stay the same, they will just need to be reimplemented in rust/substrate) | [x] | https://github.com/playproject-io/datdot-service/blob/wip/src/node_modules/datdot-node-javascript/chain.js| Here's the screencast with a short demo of the code https://watch.screencastify.com/v/ZSx4VaflQnJaM9S9xrIB (in the meanwhile I merged the milestone_2 branch to main, so you can just clone the main branch| 
| 5.  | Updated documentation| [x] | https://datdot.org/#doc || 


## Additional Notes

Before this evaluation, I was unfamiliar with SRML (Simulation Reference Markup Language) and so didn't understand the benefits of it. I am happy now to have studied and so easily tested with just `npm run simulation 1`. Thank you for the ease of getting that testing set up and running. 

Your deliverable #4 states:

>Implementation of the chain logic (simulated as javascript, but all the extrinsics and params will stay the same, they will just need to be reimplemented in rust/substrate)

I feel very lucky to have reviewed your milestone 2, and since I personally have never implemented a blockchain and JavaScript is my best language, it was a privilege to read your `chain.js`. 

 and you've named variables very nicely. 



I am very much enjoying reading your code. 

