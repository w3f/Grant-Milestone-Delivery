# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Dante_Network](https://github.com/w3f/Grants-Program/blob/master/applications/Dante_Network.md).
* **PR Link:** [Dante Network](https://github.com/w3f/Grants-Program/pull/895)
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

* In this milestone, we finished the basic functions of Danta Protocol, with which users can start their multi-chain dApps being able to be accessed by Polkadot ecosystem and other public chains. The main ablities we completed in this milestone are as follows:
  * Message verification algorithm
  * Router evaluation algorithm
  * Router selection algorithm(We finished this ahead of schedule, which is planned in milestone 2)
* The Dante protocol stack is deployed on `SHIBUYA`, the Testnet of AStar supporting ink! smart contract. The address is: `YoF56GBPEGKKeokDzLxwsZyYsmCaWYPQ7eiiqdGtAZRswdd`
* And we also deployed Dante protocol stack on `MOONBASEALPHA`, the Testnet of Moonbeam supporting solidity smart contract. The address is: `0x197D00ff70372A48c10cAe8205680c9a9f5F8370`

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable |     Link      | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [GPLv3](https://github.com/dantenetwork/protocol-stack-for-ink/blob/feature-evaluation/LICENSE) | GPLv3  |
| 0b. | Documentation | - [Tech white Paper](https://github.com/dantenetwork/Pitch-Deck/blob/main/Dante%20Network%EF%BC%9AThe%20_Internet%20protocol%20stack_%20of%20Web3.pdf) <br> - [Website](https://www.dantechain.com/) <br> - [SDK guide](https://github.com/dantenetwork/ink-sdk) | We provide docs to explain the principle of Danta Protocol in technology white paper. <br> We create a official website to show general informations of Dante Network. <br> We provide a SDK that is very easy to use, users can build their multi-chain dApps with just three convenient interfaces described in SDK doc.|
| 0c. | Testing Guide | - [Functionality Test Report](https://docs.google.com/document/d/1Mc_VorQ5m5GMMtNKhW_KcI60Pwx681Ur5rjMrp1s38k/edit?usp=sharing) <br> - [Algorithms Test](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm) <br> - [Test Guide for Trying](https://github.com/dantenetwork/cross-chain-demo/tree/main) <br> - [Test Videos](https://dante-network.oss-cn-hangzhou.aliyuncs.com/Prototype_Multichain_SmartContract_invocation%20.mp4) | The `Functionality Test Report` is to check the basic functions. <br>The  `Algoritms Test` is to make users more intuitively to understand how the underly algorithms work. <br>The `Try it` provides some test applications to check the basic functions of Dante Protocol. <br> We also provide a video to show how Danta protocol works both on ink! and solidity. |
| 0d. | Article | https://dantechain.com/blog/detail/101 <br> https://dantechain.com/blog/detail/103 <br> https://dantechain.com/blog/detail/109 | This is a series of articles explaining how Dante Protocol Stack works from a high-level perspective. |
| 1. | (ink!)smart contracts: Service expression layer | [message protocol in ink](https://github.com/dantenetwork/message-ink/tree/develop) | Defines a simple message protocol for ink! smart contracts interacting with other smart contracts deployed on other chains. |
| 2. | (ink!)smart contracts: message verification algorithm | - [link](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L296) <br> - [Intuitively Test Trying Guide](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#message-verification) | One of the basic algorithms of Dante Protocol.|  
| 3. | (ink!)smart contracts: router credibility evaluation algorithm | - [link](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L355) <br> - [Intuitively Test Trying Guide](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-evaluation) |  One of the basic algorithms of Dante Protocol.|
| 4. | off-chain routers: general message sharing | [Ink! part](https://github.com/dantenetwork/protocol-stack-for-ink/tree/green-leaf/leaf) | Off-Chain routers are working background. In this stage, we deployed three routers to encode/decode and delivery messages between different chains. The code shows the ink! part of the routers. |
| 5. | (Rust)SDK: general message sharing | [ink sdk](https://github.com/dantenetwork/ink-sdk) | This SDK shows how to build an ink! smart contract offering the ability to cooperate with other smart contracts deployed on other public chains.|

**Additional Information**

* We have finished `selection algorithm` ahead of the schedule, whose link is [here](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L657) and can be checked [here](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-selection)

* The development [repo](https://github.com/dantenetwork/protocol-stack-for-ink/tree/feature-evaluation) 
