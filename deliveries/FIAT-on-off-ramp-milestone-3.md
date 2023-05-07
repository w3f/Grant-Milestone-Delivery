# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** FIAT on-off-ramp [FIAT-on-off-ramp.md](https://github.com/w3f/Open-Grants-Program/blob/master/applications/FIAT-on-off-ramp.md)
* **Milestone Number:** 3 out of 3

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

In this milestone we worked on a demo application that uses the Substrate chain developed in the previous milestone. The demo application is a simple web application that allows users to register their bank accounts and perform basic token actions such as minting, burning and transferring. The demo application is a proof of concept that shows how the Substrate chain can be used to build a FIAT on-off ramp. 

Demo app is a React application that uses [Polkadot JS API](https://polkadot.js.org/docs/api/start/) to interact with the Substrate chain.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

### Milestone 3 Demo-Dapp & Documentation

* **Estimated Duration:** 2 months
* **FTE:**  1
* **Costs:** 5000 USD

* Link to [github repo](https://github.com/element36-io/ocw-ebics)
* Link to the initial [pull request 348](https://github.com/w3f/Open-Grants-Program/pull/348)


| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Tutorial | Tutorial is provided in the [`/ebics-demo/DEMO.md`](https://github.com/element36-io/ocw-ebics/blob/main/ebics-demo/DEMO.md) file. |
| 1. | Buy me a coffee dApp | A decentralized [application](https://github.com/element36-io/ocw-ebics/tree/main/ebics-demo) is provided, which allows users to buy someone a coffee or simply donate to support their cause. Users can donate by either sending stablecoins or fiat to the recipient's on-chain account or bank account (IBAN). The recipient can then withdraw the funds to their bank account or send them to someone else. |
| 2. | Docker-Compose: node & Dapp | Instead of `docker-compose` a [Makefile](https://github.com/element36-io/ocw-ebics/blob/main/Makefile) is provided with the commands that launch the chain and the demo app |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
All previously completed deliverables can be tested the same way as described in the older milestone. Specifically, unit tests and coverage. We also added linting with `clippy`.

There have been some major change to the project. Along with the demo app, to provide a better context to the project we were working on a draft whitepaper for our project “HyperFridge” which builds right on top of our delivery. In the initial funding request we noted that an attack vector would be the (ISO20022) API based backend which is vulnerable to man-in-the-middle attack or just to a fake backend, which we are actually using in our demo environment. The paper describes how this can be mitigated by zero knowledge proofs which leverage on the signatures of the banks, which are included in each transaction message coming from the banking backend. With HyperFridge, we cryptographically prove transaction data (and balances) of the banking ledger.  Hence a bank account (its transactions) can be treated like a blockchain ledger in terms of trust. If this would work, we are able to fully mirror a bank ledger data  on-chain, thus reducing the problem with “asymmetric information” between blockchain and banking ledgers. This allows us to create zero-trust decentralized Fiat bridges which also work across multiple chains consistently - proof of assets for stable coins and payment systems are  the most obvious use cases.  

We also would like to note that we are very grateful for your support and understanding during the last months. We had to deal with some personal issues and we are very happy that we were able to deliver the project. We are looking forward to continue working on the project and we are very excited about the future of the Web3 Foundation and the Polkadot ecosystem.
