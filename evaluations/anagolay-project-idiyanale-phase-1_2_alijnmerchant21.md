# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/anagolay-project-idiyanale-phase-1.md
- **Milestone:** 2
- **Kusama Identity:** DSkaX2CvWiWCLtXkL9j8Zeyy9DKrJ8ocmMWiMgDxTwRHKNx
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/388

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[X] </li></ul>| GPLv3, Apache2 | Correct License |
| 0b.  | Documentation |<ul><li>[ ] </li></ul>| https://github.com/anagolay/w3f-grant-support-repo/tree/project-idiyanale-phase1_milestone-2#intro | The tutorials written are difficult to follow without a lot of clear instructions. (Recommendation - https://developers.google.com/tech-writing & https://developers.google.com/style) There is place holder kept for an article with step by step instructions for workflow which is missing (fixed) |
|  | Testing guide |<ul><li>[ ] </li></ul>| https://github.com/anagolay/w3f-grant-support-repo/tree/project | No clear testing guide has been provided. |
|  | Docker |<ul><li>[x] </li></ul>| | Works fine. Difficult to use for someone not versed with docker. (Instructions should be set keeping new users in mind.) Had issues with resolving container name and container communication. (Solved)|
|  | Article |<ul><li>[ ] </li></ul>|...| ...|
|  | Substrate module: an_workflow |<ul><li>[x] </li></ul>| https://github.com/anagolay/anagolay-chain/tree/w3f-project-idiyanale-phase1_milestone-2/pallets/workflows/src | Looks good |
|  | Anagolay CLI: workflow manifest generation |<ul><li>[x] </li></ul>| https://gitlab.com/anagolay/micro-services/-/blob/w3f-project-idiyanale-phase1_milestone-2/services/publish/src/jobs/publishWorkflow.ts#L37 | Code looks good. A little explanation and comments would have been nice. |
|  | Operation:op_cid |<ul><li>[x] </li></ul>| https://gitlab.com/anagolay/operations/op_cid/-/tree/w3f-project-idiyanale-phase1_milestone-2 | Well explained. |
|  | Operation:op_multihash |<ul><li>[x] </li></ul>| https://gitlab.com/anagolay/operations/op_multihash/-/tree/w3f-project-idiyanale-phase1_milestone-2 | Worked for me. |
|  | Workflow: execution |<ul><li>[x] </li></ul>| https://gitlab.com/anagolay/anagolay-workflow-template/-/tree/w3f-project-idiyanale-phase1_milestone-2 | Basic structure has been defined. I was expecting more detailed documentation for this. |
|  | Demo nodejs app - Part 1 |<ul><li>[x] </li></ul>| https://github.com/anagolay/w3f-grant-support-repo/blob/project-idiyanale-phase1_milestone-2/demos/nodejs/README.md | Seems to work. (Was previously throwing some errors around packages.) Also, the documentation is designed for someone well versed with anagolay. It should be made with respect to someone using it for the first time. |
|  | Rust demo crate - Part 2 |<ul><li>[x] </li></ul>| https://github.com/anagolay/w3f-grant-support-repo/blob/project-idiyanale-phase1_milestone-2/demos/rust/README.md | Works. Had some warnings which I fixed. Please refer to my previous comment.|

## General Notes

- A good idea would be to create a simple demo, record it and then share link to YouTube or any other streaming platform.
- A 1:1 session with the team is required for explaining and demoing the product.

### Resources

Project Idiyanale milestone 1: https://github.com/w3f/Grant-Milestone-Delivery/pull/388
Link to application request: w3f/Grants-Program#719

**Project details:**

https://github.com/w3f/Grants-Program/blob/master/applications/anagolay-project-idiyanalephase-1.md
https://anagolay.dev
https://github.com/anagolay/w3f-grant-support-repo/tree/project-idiyanale-phase1_milestone-2

**Documentation:**

https://gitlab.com/anagolay/docs
https://github.com/anagolay/anagolay-chain
https://github.com/anagolay/anagolay-js-sdk

