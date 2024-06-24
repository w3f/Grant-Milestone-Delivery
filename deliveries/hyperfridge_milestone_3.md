# Milestone Delivery :mailbox: Hyperfridge, MS3

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
  
* **Milestone Number:** 3

**Context** 

This milestone builds on the previous ones by integrating `hyperfridge` risc0 module to EBICS chain.

**Deliverables**

| Number | Deliverable | Link | Notes/Specification |
| -----: | ----------- | ------ | ------------- |
| 0a. | License | [Licence](https://github.com/element36-io/ocw-ebics/blob/main/LICENSE) |  |
| 0b. | Documentation | [Documentation Root](https://github.com/element36-io/ocw-ebics/blob/main/README.md) |  |
| 0c. | Testing Guide | [Testing Guide](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md) | Use this as starting point to test the whole system.  |
| 0d. | Docker |  | [Docker](https://hub.docker.com/r/e36io/ebics-ocw/tags), see main README how to use |
| 1. | Integrate Receipt | [Repo](https://github.com/element36-io/ocw-ebics/blob/main/pallets/fiat-ramps/src/lib.rs#L1041) | Receipt fetching and verification logic is included in the pallet |
| 2. | fiat-ramp pallet | [Pallet](https://github.com/element36-io/ocw-ebics/tree/main/pallets/fiat-ramps) | `hyperfridge` risc0 module has been integrated into the `fiatramps` pallet. Now OCW first queries the bank statement along with the url of the zk proof receipt and stores it in the queue. It polls EBICS API until the receipt is ready, downloads the receipt and does the verification against the `hyperfridge` image ID. |
| 3. | Unit Tests | [Unit tests](https://github.com/element36-io/ocw-ebics/blob/main/pallets/fiat-ramps/src/tests.rs) | Unit tests were refactored and enhanced to accomodate the above changes. More test cases are added for new extrinsics and new way of processing statements. |

**Additional Information**

Not included in the deliverables:

- upgraded `substrate` dependencies
- fixed various bugs in the pallet
- removed boilerplate and unused code

As with the previous milestones, we use the `RISC0_DEV_MODE=true` to speed up the development process. This mode is not suitable for production, but it would take significanly more time to see the results without it (generating receipts is a computationally expensive process). Therefore, `risc0_dev_mode` feature is enabled by default and if you want to test your production environment, you should disable it with `--no-default-features` flag.
