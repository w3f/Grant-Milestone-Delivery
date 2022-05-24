# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/734
- **Milestone:** 2

**Deliverables** (all accepted)


| Number | Deliverable | Link | Notes  |
| -----: | ----------- | -----------|------------ |
| 0a. | Licence  |  APACHE 2.0 & GPL3 https://github.com/Interstellar-Network/api_garble/blob/main/LICENSE  https://github.com/Interstellar-Network/api_circuits/blob/main/LICENSE https://github.com/Interstellar-Network/lib_garble/blob/main/LICENSE https://github.com/Interstellar-Network/lib_circuits/blob/main/LICENSE | Only a part of the JustGarble repository is licenced with GPL3 and isolated with APIs |
| 0b. | Documentation  |  [code documentation](https://book.interstellar.gg/M2.html#code-documentation  ) | Please read first Garbled Circuit Factory (GCF) and Trusted Transaction Validation Protocol (TTVP) [overviews](https://book.interstellar.gg/M2.html#garbled-circuit-factory-gcf-overview)   |
| 0c. | Testing Guide | [testing guide](https://book.interstellar.gg/M2.html#testing-guide) | Core functions due to the specificity of the architecture are mainly covered with integration tests |
| 0d. | Dockers | `docker pull ghcr.io/interstellar-network/api_garble:milestone2` - `docker pull ghcr.io/interstellar-network/api_circuits:milestone2`-`docher pull ghcr.io/interstellar-network/lib_garble:milestone2` | APIS circuits and garble servers [How to launch apis dockers for the demo:]( https://book.interstellar.gg/M2_demo_tutorial.html#launch-api_circuit-docker)  and M2.3 to launch garbled circuit evaluator   |
| 0e. | Article | [article](https://book.interstellar.gg/M2.html#article)  |   links in Mx Interstellar Book  |  
| 1. | Substrate Module: OCWs GCF pallets |   [OCW Circuits](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/ocw-circuits) and  [OCW Garble](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/ocw-garble) pallets       | updated versions to manage the generation of Display Garbled Circuit to perform Transaction Validation |  
| 2. | Substrate module: TTVP Transaction Validation Protocol pallet| [TTVP (intermediary OCW version `txValidation` pallet for the demo)](https://github.com/Interstellar-Network/substrate-offchain-worker-demo/tree/master/pallets/tx-validation)    | limited TTVP pallet version to demonstrate the validation of garbled circuit metadata i.e. text message and one time code| 
| 3. | CLI Display Garbled Circuit Evaluation | `docher pull ghcr.io/interstellar-network/lib_garble:milestone2` | Client that Evaluate Display Garbled Circuit to display transaction message and one time code used by TTVP  [How to launch this docker for the demo](https://book.interstellar.gg/M2_demo_tutorial.html#32-create-the-garbled-circuits-in-the-above-folder)  | 


## Additional Notes

Dear Interstellar team,

You've made huge progress with your testing guide between Milestone 1 and 2. Your documentation was always excellent, but now additionally your testing guide is excellent. Thank you so much for implementing my feedback. And thanks; I've learned so much from your project.

Testing guide ("tutorial to get the entire pipeline running"): https://book.interstellar.gg/M2_demo_tutorial.html

> The thing is it really is structured as a pipeline, so you have to look at it step by step.
Code-wise most of the complexity is in "api_circuits" and "api_garble". The rest is essentially glue.
(At the M2 stage, b/c later the substrate/TEE part will be quite important)

Documentation ("overview"): https://book.interstellar.gg/GCF.html

I think you have a logical & ambitious business plan and I agree with your ideals such as cryptography. The logical work you've done so far seems awesome. Thank you very much for your work and wishing you continued success with the .exe of all your milestones! 

Kind regards,
Ashley Grevelink