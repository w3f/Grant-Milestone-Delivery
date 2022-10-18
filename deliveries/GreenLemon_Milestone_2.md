# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GreenLemon.md
* **Milestone Number:** 2

**Context** (optional)
> The milestone 2 demonstrates how to send anonymous transactions to relayer contract based on zero-knowledge proof


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                          | Link                                                                                    | Notes                                                        |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                              | [Link](https://github.com/GreenLemonProtocol/ink/blob/main/LICENSE)               | Apache 2.0                                             
| 0b.    | Documentation                        | [Link](https://github.com/GreenLemonProtocol/ink/blob/main/README.md)                    | README.md       
| 0c.    | Testing Guide                        | [Link](https://github.com/GreenLemonProtocol/ink/blob/main/README.md)                    | README.md
| 0d.     | Article                             | [Article](https://medium.com/@wuyahuang/green-lemon-protocol-ii-an-anonymous-nft-solution-917046a8f1ef)| [Video](https://www.youtube.com/watch?v=2cP22UEVMF0)
| 1.     | (ink!)Smart contracts: Anonymous NFT | [Link](https://github.com/GreenLemonProtocol/ink/tree/main/contracts)    | ink! implementation of Green Lemon Protocol
| 2.     | (Node.js)Relayer service	            | [Link](https://github.com/GreenLemonProtocol/ink/blob/main/http/index.js)              | Relayer service should start before testing the client tool
 
**Additional Information**
> At present, it is relatively slow to verify zero-knowledge proof on-chain. We are planning to integrate APIs related to zero-knowledge proof into the substrate, to improve the execution speed of the transaction.
