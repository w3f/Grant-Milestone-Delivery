# Evaluation

- **Status:** Accepted
- **Application Document:** Private
- **Milestone:** 2

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence  | [x]] | [license](https://github.com/playproject-io/datdot-service/blob/main/LICENCE) | MIT | 
| 0b. | Documentation  | [x] |  [datdot docs](https://datdot.org/#doc) , [playproject site](https://playproject.io/) | Simply excellent!! Bravo! |
| 0c. | Testing Guide | [x] | [testing guide](https://github.com/playproject-io/datdot-service#datdot) | Very simple and easy to run! Sincere thanks! |
| 0d. | Docker | [ ] |  | No docker since they don't create substrate nodes in this M2, but a simulation of a chain with the chain logic defined in JavaScript.  |
| 1. | Process-cluster management for running simulations | [x] | [simulation.js](https://github.com/playproject-io/datdot-service/blob/wip/demo/simulation.js)| Useful to run simulations of other chains than polkadot/substrate chains. | 
| 2 | Polkadot.js simulator | [x] | [simulate-polkadotjs.js](https://github.com/playproject-io/datdot-service/blob/wip/src/node_modules/datdot-chain-sdk/simulate-polkadotjs.js) | Very clear and concise file. Extremely detailed, lengthy and complex output that simulates many extrinsics. | 
| 3.  | Implementation of service logic split between 3 roles: hoster, attester and encoder | [x] | [hoster.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/hoster.js), [attester.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/attester.js), [encoder.js](https://github.com/playproject-io/datdot-service/blob/wip/src/roles/encoder.js)| Main logic for decentralized incentived storage bridge for dat & dot. Note: They applied for funding from the Treasury for a Networking module & Task management module to resolve networking bugs. 
| 4.  | Implementation of the chain logic (simulated as javascript, but all the extrinsics and params will stay the same, they will just need to be reimplemented in rust/substrate) | [x] | [chain.js](https://github.com/playproject-io/datdot-service/blob/wip/src/node_modules/datdot-node-javascript/chain.js), [screencast](https://watch.screencastify.com/v/ZSx4VaflQnJaM9S9xrIB) | Very educational for me to read chain logic written in js, thank you! 
| 5.  | Updated documentation| [x] | https://datdot.org/#doc || 


## Additional Notes

Before this evaluation, I was unfamiliar with SRML (Simulation Reference Markup Language) and so didn't understand the benefits of it. I am happy now to have studied and so easily tested with just `npm run simulation 1`. Thank you for the ease of getting that testing set up and running. 

I feel very lucky to have reviewed your milestone 2, and since I personally have never implemented a blockchain, it was a privilege to read your `chain.js` chain logic. You've named variables very nicely and I learned a lot!

Best of luck with milestone 3!
