# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GreenLemon.md
* **Milestone Number:** 1

**Context** (optional)
> The milestone 1 demonstrates how to hiding NFT owner by dual-key stealth address protocol


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                          | Link                                                                                    | Notes                                                        |
| ------ | ------------------------------------ | --------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| 0a.    | License                              | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/LICENSE)          | Apache 2.0                                             
| 0b.    | Documentation                        | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)        | README.md       
| 0c.    | Testing Guide                        | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)        | README.md
| 0d.     | Article                             | [Article](https://medium.com/@wuyahuang/green-lemon-protocol-an-anonymous-nft-solution-2fad91cc8f48)| [Video](https://www.youtube.com/watch?v=etVIPgOjFNg)
| 1.     | (ink!)Smart contracts: Anonymous NFT | [Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/erc721/lib.rs)    | ApprovalForAll and set_approval_for_all are mentioned by deliverable but are not necessary due to each token owner being a unique and one-time encrypted address.


**Additional Information**
> We added 2 additional features to this milestone, which are both not mentioned by the deliverable. First, add function `token_uri` for users to query the link of NFT metadata. Secondly, we add an additional param into the message before hashing, which is the token nonce. Account nonce is unfit due to each token owner being a unique and one-time encrypted address. When an NFT is operated once, its corresponding token nonce is automatically added by 1. We think that token nonce can prevent replay attacks for signatures already sent to the blockchain.
