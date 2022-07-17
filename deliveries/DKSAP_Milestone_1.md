# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DKSAP.md
* **Milestone Number:** 1

**Context** (optional)
> The milestone 1 demonstrates how to build non-fungible tokens with an anonymous owner for the Polkadot ecosystem.


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                          | Link                                                                                    | Notes                                                        |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                              | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/LICENSE)          | Apache 2.0                                             
| 0b.    | Documentation                        | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)        | README.md       
| 0c.    | Testing Guide                        | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)        |                           
| 1.     | (Node.js)SDK: Client Tool            | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/tree/main/client)           | Node.js scripts to test ink! contract
| 2.     | (ink!)Smart contracts: Anonymous NFT	| [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/erc721/lib.rs)    | ink! implementation of DKSAP
| 3.     | HTTPS Service: Node.js Relayer	      | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/relayer/index.js) | Relayer service should start before test the client tool


**Additional Information**
> Currently, user transactions are sent free of charge by relayer. This is not possible in the production environment, so we need to modify the relayer in the future version. We can add a deposit function to NFT so that users can deposit tokens into the contract, and then transfer the token as a transaction fee to the relayer based on zero-knowledge proof.
