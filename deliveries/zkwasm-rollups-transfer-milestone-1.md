# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Zkwasm Rollups Transfer](https://github.com/w3f/Grants-Program/blob/master/applications/zkwasm-rollups-transfer.md)
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link |
| -----: | ----------- | ---: |
| 0a. | License | [Apache 2.0](https://github.com/KogarashiNetwork/Kogarashi/blob/master/LICENSE) |
| 0b. | Documentation |[RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/)|
| 0c. | Testing Guide |[RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/)|
| 0d. | Docker |[docker-compose](https://github.com/KogarashiNetwork/Kogarashi/blob/master/docker-compose.yml) [base image](https://github.com/KogarashiNetwork/Kogarashi/tree/master/docker) |
| 0e. | Article |[RedDSA Signature](https://kogarashinetwork.github.io/Kogarashi/technical/reddsa_signature/)|
| 1. | `RedDSA` implementation |[Making Substrate RedDSA Compatible](https://github.com/KogarashiNetwork/zksubstrate/compare/49a4103...95f493c) [RedDSA Library](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/redjubjub) |
| 2. | `Jubjub` curve optimization |[field square](https://github.com/KogarashiNetwork/Kogarashi/pull/64) [field double](https://github.com/KogarashiNetwork/Kogarashi/pull/63) [jubjub NAF](https://github.com/KogarashiNetwork/Kogarashi/pull/60) [Twisted Edwards Revisit](https://github.com/KogarashiNetwork/Kogarashi/pull/68) |
|3. | Client wallet implementation | [Wallet Cli Example](https://github.com/KogarashiNetwork/Kogarashi/tree/master/node/client) |

We did some optimization not only for Jubjub curve and the benchmark result is following.

This is the benchmark before optimization.
https://github.com/KogarashiNetwork/Kogarashi/issues/44#issue-1523437460
This is the benchmark after optimization.
https://github.com/KogarashiNetwork/Kogarashi/issues/44#issuecomment-1399381991

We can see about 10~30% reduction.
