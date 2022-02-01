# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [lip_payments.md](https://github.com/w3f/Grants-Program/blob/master/applications/lip_payments.md).
* **Milestone Number:** 1. Payment pallet basic functionality

**Context**
Our first milestone provides the minimum needed to securely send a payment that will be locked until an off-chain condition is met(e.g. a bank transfer takign place), also the ability for an authority to be assigned to each payment individually to resolve conflics in case one of the parties acts dishonestly.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[Unlicense][0a] | ... | 
| 0b.  | Documentation |[Readme][0b]| Code also comes with inline documentation | 
| 0c.  | Tests & benchmarks | [benchmarks implementation][0c] | Running the usual `cargo test` also runs the unit-tests in the pallet | 
| 1.  | Escrow functionality | [PR#95][1] | Basic escrow functionality was implemented a while back when the pallet was named "escrow pallet" |
| 2.  | Dispute resolution | [PR#99][2a],[PR#152][2b] | Initial implementation and later improvement for [added flexibility][2c] |

[0a]: https://github.com/virto-network/virto-node/blob/master/LICENSE
[0b]: https://github.com/virto-network/virto-node/blob/master/pallets/payment/README.md
[0c]: https://github.com/virto-network/virto-node/commit/73c2af347d320b5abd9e377867106d16314b1472
[1]: https://github.com/virto-network/virto-node/pull/95
[2a]: https://github.com/virto-network/virto-node/pull/99
[2b]: https://github.com/virto-network/virto-node/pull/152
[2c]: https://github.com/virto-network/virto-node/issues/143
