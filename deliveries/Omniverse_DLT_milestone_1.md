# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Omniverse DLT](https://github.com/w3f/Grants-Program/blob/master/applications/Omniverse%20DLT.md).
* **PR Link:** [Application Proposal](https://github.com/w3f/Grants-Program/pull/1431)
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

* In this milestone, we have finished the `Omniverse-DLT` protocol in `substrate pallet` technology stack, including a complete Parachain and all the related components:  
  * Substrate pallet: omniverse assets (both FT and NFT)
  * Substrate pallet: omniverse protocol 
* The related off-chain tools to operate `o-tokens` both on the Parachain of Polkadot and EVM chains.
* Although the `EVM` technology stack is not included in this grant, we still provide an implementation of it, which is quite suitable to be deployed on Moonbeam, one of the most famous ecosystems in Polkadot.  

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable |     Link      | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [GPLv3](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/web3-grant/LICENSE) | GPLv3  |
| 0b. | Documentation | - [A high-level Introduction](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/README.md) <br/> - [How to build in `pallet` tech stack](https://github.com/Omniverse-Web3-Labs/omniverse-swap/blob/web3-grant/README.md) <br/> - [Tutorial of how to use](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/README.md) | - Besides the `substrate pallets` tech stack, we also provided an implementation example in [EVM tech stacks](https://github.com/Omniverse-Web3-Labs/omniverse-evm/tree/web3-grant) <br/> - Although the off-chain synchronizers are not included in this mileston, we still provided an [introduction](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/Deployment.md#synchronizer) of how to deploy it <br/> - The *Tutorial about how to use* is so detailed that it may be difficult to get an overview at a glance and we recommend you read the *test guide for milestone 1* first. |
| 0c. | Testing Guide | [The test guide for milestone 1](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/test-guide/m1-test-guide.md) | Actually, the details of how to try `O-DLT` protocol are provided in [How to use it](https://github.com/Omniverse-Web3-Labs/Omniverse-DLT-Introduction/blob/main/docs/README.md), and we also provided a detailed introduction of how to test the functionalities step by step. |
| 0d. | Article | [link](https://medium.com/@xiyuzheng1984/omniverse-decentralized-ledger-technology-has-finished-the-first-milestone-66bbcd6546fa) | We presented an interesting analogy for `O-DLT` in this article |
| 1. | Substrate module: omniverse assets | - [pallet for Omniverse FT](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant/pallets/assets) <br/> -[pallet for Omniverse NFT](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant/pallets/uniques) | We made out both Omniverse FT and NFT based on the templates of built-in pallets, which makes it compatible to current token protocols. |
| 2. | Substrate module: omniverse protocol | - [the basic operations](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant/pallets/omni-protocol) | The basic operations and data structures are provided by one pallet, which makes it more convenient for developers to extend their own demands. |  
| 3. | Substrate chain | - [parachain itself](https://github.com/Omniverse-Web3-Labs/omniverse-swap/tree/web3-grant) | Based on the pallets mentioned above, building a Parachain is very easy. We have provided an implementation example. |
| 4. | Off-Chain Tools: Operate the o-tokens | [CLI Client](https://github.com/Omniverse-Web3-Labs/omniverse-swap-tools/tree/web3-grant) | In this stage, time is very limited for us, so we just provided a CLI Client to operate `O-DLT` Tokens. Actually, there's no need for new kind of wallets to operate `O-DLT` tokens, and what we need to do is just integrating existing wallets. |

**Additional Information**  
* Here is the [GitHub of O-DLT](https://github.com/Omniverse-Web3-Labs). 

#### **Works until now**  

Currently, we have finished the basic functions of `O-DLT` protocol, and provided three tech stack implementations:  

- [Ethereum (EVMs)](https://github.com/Omniverse-Web3-Labs/omniverse-evm)
- Polkadot
  - [Pallet](https://github.com/Omniverse-Web3-Labs/omniverse-swap)
  - `Ink!`: Next milestone
 - [Flow](https://github.com/Omniverse-Web3-Labs/omniverse-flow)


#### **Future Work**  

There're still lots of work to do. In the next milestone, we will complete the `Ink!` tech stack for smart contracts and provide an related swap platform for omniverse tokens.  

Besides, as the `o-transactions` need to be synchronized among many chains, the gas costs will be a definite problem. We have already had a solution to solve it, which is in our plan after milestone 2 is delivered.  
