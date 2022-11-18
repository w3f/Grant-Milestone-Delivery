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
| 0b. | Documentation | - [Tech white Paper](https://github.com/dantenetwork/Pitch-Deck/blob/main/Dante%20Network%EF%BC%9AThe%20_Internet%20protocol%20stack_%20of%20Web3.pdf) <br> - [Website](https://www.dantechain.com/) <br> - [SDK guide](https://github.com/dantenetwork/ink-sdk) | We provide docs to explain the principle of Danta Protocol in technology white paper. <br> We create a official website to show general informations of Dante Network. <br> We provide a SDK that is very easy to use, users can build their multi-chain dApps with just three convenient interfaces described in SDK doc.|
| 0c. | Testing Guide | - [Functionality Test Report](https://docs.google.com/document/d/1Mc_VorQ5m5GMMtNKhW_KcI60Pwx681Ur5rjMrp1s38k/edit?usp=sharing) <br> - [Algorithms Test](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm) <br> - [Test Guide for Trying](https://github.com/dantenetwork/cross-chain-demo/tree/main) <br> - [Test Guide for SQoS](https://docs.google.com/document/d/1wCnyN3DGUip_k8oppMloqJzoKt7pRDYzUfqjlP9Jwc0/edit?usp=sharing) <br> - [Test Videos](https://dante-network.oss-cn-hangzhou.aliyuncs.com/Prototype_Multichain_SmartContract_invocation%20.mp4) | The `Functionality Test Report` is to check the basic functions. <br>The  `Algoritms Test` is to make users more intuitively to understand how the underly algorithms work. <br>The `Try it` provides some test applications to check the basic functions of Dante Protocol. <br> `Test Guide for SQoS` shows how to set SQoS and test SQoS <br> We also provide a video to show how Danta protocol works both on ink! and solidity. |
| 0d. | Docker| https://github.com/dantenetwork/router#docker | A dockerfile(s) and docker-compose files that can be used to deploy router image and container.|
| 0e. | Article | https://dantechain.com/blog/detail/101 <br> https://dantechain.com/blog/detail/103 <br> https://dantechain.com/blog/detail/109 | This is a series of articles explaining how Dante Protocol Stack works from a high-level perspective. This will be continued to update. |
| 1. | (ink!)smart contracts: parallel router scheduling algorithm | [code](https://github.com/dantenetwork/protocol-stack-for-ink/blob/c46af9610cd06b672226967f85d4c10351f787d0/contracts/cross-chain/lib.rs#L657) and [details](https://github.com/dantenetwork/protocol-stack-for-ink/tree/main/contracts/algorithm#router-selection) | We finished this ahead of schedule, which is done in milestone 1 |
| 2. | (ink!)smart contracts: SQoS | - [link](https://github.com/dantenetwork/protocol-stack-for-ink/blob/feature-sqos/contracts/cross-chain/sqos_base.rs) <br> - [Intuitively Test Trying Guide](https://docs.google.com/document/d/1wCnyN3DGUip_k8oppMloqJzoKt7pRDYzUfqjlP9Jwc0/edit?usp=sharing) | Security quality of service of Dante Protocol.|  
| 3. | off-chain routers: SQoS | [link](https://github.com/dantenetwork/protocol-stack-for-ink/tree/green-leaf/leaf) |  Off-Chain routers are working background. In this stage, we deployed three routers to encode/decode and delivery messages between different chains、check SQoS and push SQoS message, The code shows the ink! part of the routers.|
| 4. | (Rust)SDK: contracts invocation; SQoS | [Ink sdk](https://github.com/dantenetwork/ink-sdk/tree/feature-sqos) | This SDK shows how to build an ink! smart contract offering the ability to cooperate with other smart contracts deployed on other public chains. |
| 5. | testnet | [testnet](https://github.com/dantenetwork/testnet) | The contracts for testing the basic abilities of the whole protocol stack and Demos for the whole abilities.|