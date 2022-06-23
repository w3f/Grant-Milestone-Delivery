# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [contract](https://github.com/w3f/Grants-Program/blob/master/applications/spacewalk-bridge.md)
* **Milestone Number:** 1

**Context** (optional)
This is the first iteration of the Spacewalk bridge. This sets up the first basic structure consisting of i) the bridge pallet, ii) a simple vault client that is able to issue and redeem tokens and iii) a testchain, which is a standalone Substrate chain implementing the Spacewalk pallet.

This version of the bridge is not secure yet: it does not use vault collateralization and uses a simple process to forward information from Stellar to the Substrate chain implementing the pallet.
It can already be used to bridge different kinds of assets from Stellar to the Substrate chain.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/pendulum-chain/spacewalk/blob/main/LICENSE | - | 
| 0b. | Documentation | https://docs.pendulumchain.org/spacewalk/introduction | A basic tutorial that explains how a user can employ the bridge pallet and the Spacewalk protocol to build a working bridge. | 
| 0c. | Testing Guide | https://github.com/pendulum-chain/spacewalk#run-all-tests | Run a complete suit of unit tests | 
| 0d. | Article | https://pendulum-chain.medium.com/introducing-spacewalk-the-trust-minimized-bridge-between-stellar-and-pendulum-68ddbe7349a0 | This article explains how we extend interBTC to support multiple Stellar assets and provides an overview of the upcoming milestones of the protocol. |
| 2a. | Multi asset deposit | https://github.com/pendulum-chain/spacewalk#issue | We refer to "deposit" as "issue" now (using the wording of interBTC). The link directs to a summary of the code implementing the issue. It is spread over the vault client and the spacewalk pallet. |
| 2b. | Multi asset withdrawal | https://github.com/pendulum-chain/spacewalk#redeem | We refer to "withdrawal" as "redeem" now (using the wording of interBTC). The link directs to a summary of the code implementing the redeem. It is spread over the vault client and the spacewalk pallet. | 

**Additional Information**
We did not deliver the deliverables 1 and 2c for the following purposes:

- 1: Originally we intended to only implement the Spacewalk pallet and not the vault client itself. The protocol specification was supposed to formally describe the behavior of the vault. Instead we decided to implement the [vault](https://github.com/pendulum-chain/spacewalk/tree/main/clients/vault) as well and let it be a part of the Spacewalk repository.
- 2c: It turned out that the asset allow list would not be required for this milestone. We will implement it in the second milestone instead when we add more functionality to the vault client and add collateralization.
