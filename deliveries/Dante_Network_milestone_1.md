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

| Number | Deliverable |Link| Notes |
| -----: | ----------- |-------------| ------------- |
| 0a. | License |  | GPLv3  |
| 0b. | Documentation |  | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can use the the SDK of Dante smart contract developed in ink! to build their own Omnichain DApps. At this stage, the tutorial will cover how to make message communications and contract invocations between Polkadot’s smart contract parachains and other chains(like Ethereum).|
| 0c. | Testing Guide |  | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Article |  | We will publish an **article** that explains what was done as part of the grant. And we will publish a series of articles that explains how Dante Protocol Stack works from a high-level perspective. The content of the articles will be consistent with the functions at this stage.
| 1. | (ink!)smart contracts: Service expression layer |  | Development and testing of Service expression layer on some of Polkadot’s smart contract parachains (Astar/Edgeware); Demos for communication and interoperation between one of Polkadot’s smart contract platforms and Ethereum, Near, Avalanche.|
| 2. | (ink!)smart contracts: message verification algorithm |  | Development and testing of verification algorithms of the consensus verification layer on some of Polkadot’s smart contract parachains (Astar/Edgeware) and other chains including Ethereum, Near, Avalanche, Flow, PlatON. Verification contracts deployed on testnet. Demos for information verification.|  
| 3. | (ink!)smart contracts: router credibility evaluation algorithm |  |  Development and testing of the credibility evaluation algorithms of the consensus verification layer; Selection of growth function and decrease function suitable for smart contract on-chain is the key point; Router behavior evaluation contracts deployed on testnet; Demos for router evaluation according to their behaviors.|
| 4. | off-chain routers: general message sharing |  | Development and testing of the basic abilities of the off-chain router, including general message encoding and decoding, message delivery between multi-chains; Demos for some of Polkadot's smart-contracts parachain, along with Ethereum, Near, PlatON, etc. |
| 5. | (Rust)SDK: general message sharing |  | Build an early-stage SDK including a general message sending and receiving interface. Adapted to some of Polkadot's smart-contracts parachain, along with Ethereum, Near, PlatON, etc. |

**Additional Information**

The development [repo](https://github.com/dantenetwork/protocol-stack-for-ink/tree/feature-evaluation) 
