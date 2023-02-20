# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SaaS3.md 
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | Apache 2.0
| 0b. | Documentation |https://docs.saas3.io/dapi/get-started| | 
| 0c.  | Testing Guide |https://github.com/SaaS3-Foundation/dRuntime-fat#test| | 
| 0d. | Docker | We are not able to provide a Dockerfile, because dRuntime is written in Phat Contract, and it is finally compiled to WASM.| |
| oe. | Article/Tutorial | https://docs.saas3.io/demo-case | |
| 1. | dRuntime-fat| https://github.com/SaaS3-Foundation/dRuntime-fat | dRuntime implementation in Phat Contract which is a superset of ink!. |
|  | Functions | https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L418 </br> https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L100 | `pub fn handle_rollup()` Entry point for Phat Rollup Anchor</br>`pub fn config(rpc, anchor)` Configure the rollup target. |
|  | Structs | https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L45 | |
|  | Storage | https://github.com/SaaS3-Foundation/dRuntime-fat/blob/fb213ec6974739f9495a4fb3c37b8f1e7026c6cb/src/lib.rs#L34 | |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
