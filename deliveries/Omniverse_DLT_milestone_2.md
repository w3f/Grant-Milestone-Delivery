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
* In this milestone, we have finished the `Omniverse-DLT` protocol in `Ink!` technology stack, it have the same functions as the `assets pallet` in milestone 1.
* We have enhanced the related off-chain tools to operate `o-tokens` both on the Parachain of Polkadot and EVM chains.
* We have provided **incredibly convenient** **deployment** and **testing** tools for deploying and testing the entire process, which was complex and suffering in the previous milestone.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable |     Link      | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | - [Omniverse Swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/milestone-2/LICENSE) <br/> -[Omniverse Ink!]() | GPLv3  |
| 0b. | Documentation | - [A high-level Priciple of the Omniverse Swap](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/High-Level%20Principle%20of%20Omniverse%20Swap.md) <br/> - [How to dev with `Ink!`](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/dev-for-Ink!.md) <br/> - [Tutorial of how to auto-deploy](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Auto-Deployment.md) <br/> - [Tutorial of how to operate](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Auto-Tutorial.md) | The documentation for this milestone include the high-level introduction of the swap, how to dev with `Ink!`, and the tutorial of how to use. We provide the tutorial for two parts, the one is the deployment that is made **automatically**, and the other is the operation. |
| 0c. | Testing Guide | [The test guide for milestone 2](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/test-guide/m2-test-guide.md) | For this milestone we have provided incredibly convenient testing tools for testing the entire process in just a few steps. We think it brings much convenient and really makes sense. |
| 0d. | Docker | [Synchronizer docker](https://github.com/Omniverse-Web3-Labs/omniverse-synchronizer/tree/milestone-2/docker)| We provide a Dockerfile to auto-run synchronizers. The related document can be found in the [Auto-Deployment](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Auto-Deployment.md#launch-the-auto-synchronizer) |
| 0e. | Article | [link](https://medium.com/@xiyuzheng1984/the-ink-tech-stack-along-with-a-swap-for-o-dlt-tokens-be128bb955e6) | The Ink! Tech Stack along with a Swap for O-DLT Tokens |
| 1. | Substrate module: swap | - [Pallet for Omniverse Swap](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2/pallets/omni-swap) <br/> -[the simulation of the o-amm](https://github.com/Omniverse-Web3-Labs/o-amm) <br/> - [off-chain calc and on-chain verify](https://github.com/Omniverse-Web3-Labs/O-AMM-ParaSim/tree/main) | - We made out Omniverse Swap which can exchanges two different omniverse fungible tokens. <br/> - Besides, to make a intuitive comprehension of the o-amm model, we provide a simulation based on python (not included in the milestone but makes sense). <br/> - Also for intuitive understanding of the off-chain calc and on-chain verification mechanism, we provide a parachain to show the details, and developers can build their own mechanism based on it. |
| 2. | Substrate chain | [Parachain itself](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/milestone-2) | Building a Parachain is very easy. We have provided an implementation example mentioned in milestone 1 |  
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

We will continue to dedicate ourselves to the improvement of `O-DLT` protocol and explore further applications based on it. Currently we just provide CLI tools, and the front-ui is on the way. Besides, a `zk-synchronization` platform rolluping the transactions will be made out to save most of the gas fees.  
