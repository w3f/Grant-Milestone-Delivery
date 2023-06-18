# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Omniverse DLT](https://github.com/w3f/Grants-Program/blob/master/applications/Omniverse%20DLT.md).
* **PR Link:** [Omniverse DLT](https://github.com/w3f/Grants-Program/pull/1431), [update proposal](https://github.com/w3f/Grants-Program/pull/1475)
* **Milestone Number:** 2

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

* In this milestone, we have finished create `Swap` pallet, user can add liquidity and make exchanges for two different o-tokens.
* In this milestone, we have finished the `Omniverse-DLT` protocol in `Ink!` technology stack for fungible token, it have the same functions as the `assets pallet` in milestone 1.
* We have enhanced the related off-chain tools to operate `o-tokens` both on the Parachain of Polkadot and EVM chains.
* We have provided incredibly convenient testing tools for deploying and testing the entire process.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable |     Link      | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [GPLv3](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/milestone-2/LICENSE) | GPLv3  |
| 0b. | Documentation | - [A high-level Introduction](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/README.md) - [Tutorial of how to use](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/README.md) |  |
| 0c. | Testing Guide | [The test guide for milestone 2](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/test-guide/m2-test-guide.md) | We have provided a detailed introduction of [how to test](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/README.md), for this milestone we have provided incredibly convenient testing tools for deploying and testing the entire process in just a few steps. |
| 0d. | Docker | [Synchronizer docker](https://github.com/Omniverse-Web3-Labs/omniverse-synchronizer/tree/milestone-2/docker)| We have provide a Dockerfile to run Synchronizers and [test tool](https://github.com/Omniverse-Web3-Labs/omniverse-system-test/blob/milestone-2/src/index.js#L120) launch Synchronizer|
| 0e. | Article | [link]() |  |
| 1. | Substrate module: swap | [Pallet for Omniverse Swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2/pallets/omni-swap) | We made out Omniverse Swap which can exchanges two different omniverse fungible tokens|
| 2. | Substrate chain | [Parachain itself](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2) | Bbuilding a Parachain is very easy. We have provided an implementation example mentioned in milestone 1 |  
| 3. | Ink! smart contract implementation | [Ink! tech stacks](https://github.com/Omniverse-Web3-Labs/omniverse-ink) | We deploy the omniverse Ink! smart contract on [substrate-contracts-node-v0.25.1](https://github.com/paritytech/substrate-contracts-node/releases/tag/v0.25.1) |
| 4. | Off-Chain Synchronizer | [link](https://github.com/Omniverse-Web3-Labs/omniverse-synchronizer/tree/milestone-2) | We have optimized the synchronizer, improving its efficiency, added support for ink! parachain, and provided deployment through Docker. |

**Additional Information**  
* Here is the [GitHub of O-DLT](https://github.com/Omniverse-Web3-Labs). 

#### **Works until now**  

Currently, we have finished the basic functions of `O-DLT` protocol, and provided four tech stack implementations:  

- [Ethereum (EVMs)](https://github.com/Omniverse-Web3-Labs/omniverse-evm/tree/web3-grant)
- Polkadot
  - [Pallet](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant)
  - [Ink!](https://github.com/Omniverse-Web3-Labs/omniverse-ink)
 - [Flow](https://github.com/Omniverse-Web3-Labs/omniverse-flow)

And an application of `O-DLT` protocol:

- [Omniverse Swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2/pallets/omni-swap)

#### **Future Work**  

We will continue to dedicate ourselves to the improvement of `O-DLT` protocol and explore further applications based on it.
