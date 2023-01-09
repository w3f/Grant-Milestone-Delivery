# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/734
- **Milestone:** 1

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence  | [x] |  APACHE 2.0 & GPL3 | Please provide license links for M2. | 
| 0b. | Documentation  | [x] |  [code documentation](https://book.interstellar.gg/M1.html#garbled-circuit-factory-gcf-and-circuit-types-overview) | Extremely detailed, thank you.  |
| 0c. | Testing Guide | [x] | [testing guide](https://book.interstellar.gg/M1.html#testing-guide) | Very thorough and they rapidly added even more info that I requested. |
| 0d. | Docker | [x] | [docker api_garble](https://github.com/orgs/Interstellar-Network/packages/container/package/api_garble) `docker pull ghcr.io/interstellar-network/api_garble:milestone1` [docker api_circuit](https://github.com/orgs/Interstellar-Network/packages/container/package/api_circuits) `docker pull ghcr.io/interstellar-network/api_circuits:milestone1` |  Very helpful, thank you!     |
| 0e. | Article | [ ] | [article](https://book.interstellar.gg/M1.html#article)  |  Not yet published.   |  
| 1. | GCF Substrate Interface  | [x] | [1: api_circuit](https://github.com/Interstellar-Network/api_circuits/tree/main) [2: api_garble](https://github.com/Interstellar-Network/api_garble)  |  They use APIs to provide functionality to their nodes. |https://github.com/Interstellar-Network/api_garble/tree/w3f-milestone1 | We replaced GCF CFG with another GCF APIs for garbled circuit production  |  
| 2. | Substrate module: OCW CFG | [x] | [pallet ocwExample](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/interstellar/pallets/example-offchain-worker)| Manages master config files. 
| 3. | ~~Substrate GCF CFG CLI~~ | [x] |  | Replaced by substrate front end and direct upload of config files/master files in IPFS. | 
| 4. | Substrate module: OCW GCF | [x] | [pallet ocwDemo](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/interstellar/pallets/ocw)| Manages the launch of garbled circuit production.

## Additional Notes

Interstellar makes use of many cutting-edge web3 technologies, including IPFS, OCWs, TEE, advanced cryptography based on hardware, etc. to build a hardware wallet with mobile app functionality. 

Their milestone 1 demo proves their two APIs work with the Substrate runtime and VHDL files. VHDL/verilog files are a way to describe hardware circuits with software (e.g. `adder.v`). They used docker for their demo and also provided instructions to run their nodes from source on a Linux machine. 

It's a highly complex technology and they were extremely responsive to questions and have very detailed documentation, both text and architecture diagrams. 

Thank you very much for your patience with my evaluation! It was a privilege to have the extra time to study your technologies and I wish you best of luck with your next milestones and your project! Thank you sincerely for contributing to the Polkadot/Substrate ecosystem!