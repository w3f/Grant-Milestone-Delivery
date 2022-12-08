# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Dante_Network](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md).
* **PR Link:** [Dante Network](https://github.com/w3f/Grants-Program/pull/895)
* **Milestone Number:** 2

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

* In this milestone, we finished the basic functions of Danta Protocol, with which users can start their multi-chain dApps being able to be accessed by Polkadot ecosystem and other public chains. The main ablities we completed in this milestone are as follows:
  * Docker for deploy routers
  * Router selection algorithm(We finished this ahead of schedule, which is done in milestone 1)
  * SQoS for ink!
  * Routers process SQoS

* We running a polkadot testnet on AWS, the Dante protocol stack is deployed on it, the Dante protocol address is: `5FVx18cBuQUVS9squHxUUdr2TtBNYBCCXawGM9EWzmXdmwF9`
* And we also deployed Dante protocol stack on `NEARTESTNET`. The address is: `170165c66e33a744726f7f8cd36885cc43aa1e55f88273df5c6aed72e45711e6`

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable |     Link      | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [GPLv3](https://github.com/dantenetwork/protocol-stack-for-ink/blob/feature-evaluation/LICENSE) | GPLv3  |
| 0b. | Documentation | - [Dante Notion](https://dantenetwork.notion.site/Dante-Network-37b3fb6b70a845ecb4f6bc9d0f23229b) | We have organized all Dante-related documentation in notion. |
| 0c. | Testing Guide | - [Algorithms Test(router selection)](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-evaluation) <br> - [Test Guide for SQoS](https://github.com/dantenetwork/protocol-stack-for-ink/tree/feature-sqos/test) | The `Functionality Test Report` is to check the basic functions. <br>The  `Algoritms Test` is to make users more intuitively to understand how the underly algorithms work. <br>The `Try it` provides some test applications to check the basic functions of Dante Protocol. <br> `Test Guide for SQoS` shows how to set SQoS and test SQoS <br> We also provide a video to show how Danta protocol works both on ink! and solidity. |
| 0d. | Docker | [Docker](https://github.com/dantenetwork/ink-test-router) | We provide the Docker of the off-chain router for testing. We are still developing advanced functions mentioned in the [future works](#future-work), the docker is just for the test of this milestone. There needs to be a config for key-pairs of different chains. |
| 0e. | Article | [Dante Notion](https://dantenetwork.notion.site/Dante-Network-37b3fb6b70a845ecb4f6bc9d0f23229b) | We continue to publish articles on different platforms, and the related information is synchronized at Dante Notion. |
| 1. | (ink!)smart contracts: parallel router scheduling algorithm | [code](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L657) and [details](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-selection) | We finished this ahead of schedule, which is done in milestone 1 |
| 2. | (ink!)smart contracts: SQoS | - [src-(init)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L187) <br> - [src-(error rollback)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L523) <br> - [src-(Hidden & Reveal)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L1321) <br> - [unit test](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L2045) <br> - [src-(challenge)](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L1369) <br> - [unit test](https://github.com/dantenetwork/protocol-stack-for-ink/blob/984879ac3d80ce6824604b321887b6a2759f3e73/contracts/cross-chain/lib.rs#L1984) | We have listed a few of the more core and complex SQoS items here, and other relatively simple SQoS items can be found in the code. The tests are detailed at the [test guide](https://docs.google.com/document/d/1wCnyN3DGUip_k8oppMloqJzoKt7pRDYzUfqjlP9Jwc0/edit?usp=sharing) above. |  
| 3. | off-chain routers: SQoS | [src link](https://github.com/dantenetwork/protocol-stack-for-ink/tree/green-leaf/leaf) |  Off-Chain routers are working background. In this stage, we deployed three routers to encode/decode and delivery messages between different chains, check SQoS and push SQoS message, The code shows the ink! part of the routers.|
| 4. | (Rust)SDK: contracts invocation; SQoS | [Ink sdk](https://github.com/dantenetwork/ink-sdk/tree/feature-sqos) | This SDK shows how to build an ink! smart contract offering the ability to cooperate with other smart contracts deployed on other public chains. |
| 5. | testnet | [testnet](https://github.com/dantenetwork/testnet) | The contracts for testing the basic abilities of the whole protocol stack and Demos for the whole abilities.|

**Additional Information**  
* Here is the [Source Code](https://github.com/dantenetwork/protocol-stack-for-ink/tree/feature-sqos/contracts/cross-chain). 

#### **Works until now**  
We really appreciate the help from W3F for this grant. After the delivery of this grant, we have completed the service presentation protocol layer, the basic security items in the SQoS layer, and the belief verification algorithms in the consensus layer.  
With the help of current work of Dante Network, remote invocations can be made between smart contracts deployed on Polkadot Parachains and smart contracts/resources deployed on other ecosystems. The detailed deployment information can be found at [Testnet](https://github.com/dantenetwork/testnet). And we provide [SDKs](https://github.com/dantenetwork/On-Chain-SDK) for easier development of omniverse-dApps.  
#### **Future Work**  
We persist in developing Dante Protocol in an absolutely decentralized way, so there might be still a long way to go.  
  * First, we are building advanced features of Dante Protocol to achieve higher and more efficient security. A commitment verification mechanism based on cryptographic algorithms and a multi-layer gaming model will be built to make a prisoner's dilemma, in which the best strategy for off-chain routers is to do honest things.  
  * Besides, an Omniverse Token Protocol based on Dante Protocol is to be implemented. This kind of token can be accessed from all chains we support without any bridge. So we can help DOT to be Omniverse without any additional work, that is, if someone transfers some DOTs on Polkadot, the same ownership transfer will happen on all connected chains.  
  * In addition, in the future, Dante Protocol will be implemented as a pallet for substrate, and everyone can integrate this pallet into their Parachains.
 