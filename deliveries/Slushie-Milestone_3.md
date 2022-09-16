# Milestone Delivery :mailbox:
> :zap: Only the GitHub account that submitted the application is allowed to submit milestones.
>
> Don’t remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.
**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Slushie Mixer.md
* **Milestone Number:** 3
**Context** (optional)
This Milestone adds proof verification capabilities, additions to the smart contract logic, integration tests w/ `substrate-contracts-node`, more unit tests, additions to the CLI.

**Name of the grant project:** Slushie

**Link to the open source code:** https://github.com/4IRE-Labs/Slushie/tree/main

**License:** MPL-2.0

**Documentation:** https://github.com/4IRE-Labs/Slushie/blob/main/README.md 

**Deliverables:**

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MPL-2.0 |
| 0b. | Documentation | We will provide the inline documentation of the code and docs for the verifier separately. |
| 0c. | Tests | The tests will be presented as unit tests, integration tests using `polkadot.js` / `redspot` (TBD) and instructions on how to run them will be referenced in the README file. |
| 1.  | Plonk verifier | ink! contract logic that verifies provided proofs |
| 2.  | Withdrawal contract logic | Add contract logic for withdrawing coins and saving the used nullifier |

| Number | Deliverable            | Link                                                     | Notes |
| ------ | ---------------------- | -------------------------------------------------------- | ----- |
| 0a.    | License (MPL-2.0)      | https://github.com/4IRE-Labs/Slushie/blob/main/LICENSE   |       |
| 0b.    | Documentation          | https://github.com/4IRE-Labs/Slushie/blob/main/README.md |       |
| 0c.    | Tests                  | https://github.com/4IRE-Labs/Slushie/tree/main/tests, https://github.com/4IRE-Labs/Slushie/blob/main/plonk_prover_tool/src/main.rs         |       |
| 1.     | Plonk verifier            | https://github.com/4IRE-Labs/Slushie/blob/main/plonk_prover/src/proof_verification.rs           |  Provides two ways to verify proofs: with hardcoded public parameters and with variable public parameters     |
| 2.     | Withdrawal contract logic | https://github.com/4IRE-Labs/Slushie/blob/0e0a5ccf7cc83448af7f5b8a184d26d092ddfe00/slushie/lib.rs#L167           |   Now performs the required checks.    |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.

Please ignore the `jsonrpsee_server` directory for now - this is to be delivered as the 4th milestone.
**IMPORTANT NOTES**:
1. We tried to deploy Slushie to `Contracts` parachain in Rococo, but the contract, even with hardcoded data, requires too much gas to even deploy, 
let alone withdraw (which takes up 49 * `SECONDS` of weight). To paraphrase: even though the contract is correct, even though we use hardcoded 
verifier data to reduce the contract size and gas expenses, it's just too heavy. To sum up: in order to make the contract work, we'll require more 
work on the contract size and execution time.
2. One more important thing is that Substrate is missing some functionality that is heavily used in one place in Tornado.cash. Basically, to generate 
tree openings, which are a part of a commitment, we need to traverse through all the events emitted by the contract, gather the tree openings, put 
them into an array to later use for generating the commitment. This is easy to do in EVM nodes (`eth_getLogs`), but really hard to do in Substrate 
without built-in rpc. There is obviously a way to do it: if we use the CLI, we can use `subxt` to get the events at each block, filter 
the `ContractEmitted` events by this contract account, decode them with the ABI... Same thing on the front-end, but with polkadot.js. But this is 
hard and ineffective without the native access to the block db.

These two issues are major blockers for the readiness of our project. We'd be happy to work on them as parts of potential follow-ups.
