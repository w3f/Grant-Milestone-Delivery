# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project. 

Link to the merged application: https://github.com/w3f/Grants-Program/blob/master/applications/Tellor.md

* **Milestone Number:**  1

**Context** (optional)
Tellor has completed milestone 1. This github repository contains the docker file to test all functionality for this milestone: https://github.com/tellor-io/tellor-parachain-contracts/tree/7f8cf44f526d0c42fd35074024f2daa40c637579

The implementation is very similar to the structure Tellor uses on other chains. The security of the oracle comes through a deposit of a token that acts as a bond or stake (note that stake and bond are used interchangebly) requirement in order for reporters to participate in providing data. The reporters risk losing this stake if they submit data that is successfully disputed. Anyone can become a reporter and push data on-chain and anyone can dispute the data for a fee. This is how Tellor is both crypto-economically secure and permissionless. 

The Tellor protocol is split in two parts: 1)The staking and governance which will live on an EVM compatible parachain and 2)the Tellor Pallet that can be implemented by any parachain. Milestone 1 focuses on the side of Tellor that will be deployed to an EVM compatible parachain. This is composed of four contracts that allow data reporters to stake (or put up a bond on-chain), for disputes to be resolved and to communicate with the consumer parachain(any parachain that implements the Tellor pallet) via XCM:  ParachainStaking, ParachainGovernance, Parachain, ParachainRegistry. 

* ParachanStaking - contains all the functionality for reporters to deposit their bond, withdraw their bond and allow the governace contract to put the reporter’s stake on escrow while a dispute resolves. 
* ParachainGovernance – this contract has the logic for receiving disputes from the consumer parachain and collecting vote outcomes and allowing for the dispute resolution. 
* ParachainRegistry – allows for parachains to register so they can interact with the Tellor staking and goverance mechanisms.
* Parachain contains – the XCM messaging functionality.


**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License |  https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/LICENSE |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial**. [Link to basic tutorial](https://drive.google.com/file/d/1E8XVzq2C875fyBnht7MA58a2ix9RIv2b/view?usp=share_link) | |
| **0c.** | Testing and Testing Guide | https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/README.md | |
| **0d.** | Docker | https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/Dockerfile | |
| 1 | Develop Controller contracts | [Staking](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/ParachainStaking.sol), [Governance](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/ParachainGovernance.sol)  | |
| 2 | Develop Parachain integration contract| [ParachainRegistry](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/ParachainRegistry.sol), [Parachain](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/Parachain.sol) | |

**Additional Information**
None
