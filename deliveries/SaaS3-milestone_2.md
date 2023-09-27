# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SaaS3.md 
* **Milestone Number:** 2

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | Apache 2.0
| 0b. | Documentation |https://github.com/SaaS3-Foundation/saas3-dao| | 
| 0c.  | Testing Guide |https://github.com/SaaS3-Foundation/saas3-dao| | 
| 0d. | Docker |  We are not able to provide a Dockerfile | |
| oe. | Article/Tutorial | https://github.com/SaaS3-Foundation/saas3-dao/blob/main/Tutorial.md | |
| 1. | pallet-court | https://github.com/SaaS3-Foundation/saas3-dao/tree/main/pallets/court |A pallet of court DAO, dAPI user raise sue to determine the punishment of malfunction miners / services and return sue claimed tokens to dAPI user. |
|  | Functions | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L233 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L262 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L286|`pub fn submit_sue(origin, value, defendent, statement)` dAPI User submit sue claims for malfunction. <br> `pub fn vote_sue(origin, lawsuit_id, approve)` Jury evaluates and votes the sue submission to determine punishment.<br> `pub fn process_sue(origin, lawsuit_id)` Process the accepted sue claims of dAPI user to slash malfunction miner / dAPI. The tokens will be paid to dAPI user and treasury with a ratio. |
|  | Structs | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#LL68C1-L79C2 | |
|  | Storage | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#LL115C2-L121C4 | |
| | Events |https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/court/src/lib.rs#L160 |
| 2. | pallet-treasury | https://github.com/SaaS3-Foundation/saas3-dao/blob/main/pallets/treasury/src/lib.rs|A pallet of SaaS3 DAO treasury. It sends or receives token based on different situations. It is built on top of [FRAME Treasury Pallet](https://github.com/paritytech/substrate/tree/master/frame/treasury), with some additional functionalities. |
|  | Functions | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L221 </br> https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L254|`pub fn receive(origin, amount, category_type)` Receive tokens with categorized reason, such as commission fees and miner node malfunctions. <br>`pub fn claim_rewards(origin, amount)` Court Jury members claim their rewards for their contribution in Court DAO. |
| | Storage | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L117 |
| | Events | https://github.com/SaaS3-Foundation/saas3-dao/blob/ce2447ab1d54b2723f9ab72d8aabe5d65fff34d5/pallets/treasury/src/lib.rs#L169| |
| 3. | UI & Frontend | https://github.com/SaaS3-Foundation/SaaS3-DAO-Pallets|This part is implemented by [substrate front-end template](https://github.com/substrate-developer-hub/substrate-front-end-template). The frontend web interface contains DAO procedures related functions which including user sue judgement. A special document website is developed to guide entities to participate in DAO events. |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
