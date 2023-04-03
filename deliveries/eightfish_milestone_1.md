# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/eightfish.md
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/eightfish-org/eightfish/blob/master/LICENSE| ...| 
| 0b. |Documentation|https://github.com/eightfish-org/eightfish#readme| And also use `cargo docs` we can get the rust docs from the source code| 
| 0c. | Testing and Testing Guide |https://github.com/eightfish-org/eightfish/blob/master/unit_tests.md| ...| 
| 0d.  | Docker |https://github.com/eightfish-org/eightfish/blob/master/Dockerfile| Please follow the README to build a docker and run the container| 
| 0e. | Article |https://medium.com/@daogangtang/eightfish-milestone-1-81ef32e4bbf2| ...| 
| 1. | Substrate module: eightfish | 1. record the coming requests; https://github.com/eightfish-org/eightfish/blob/master/subnode/pallets/eightfish/src/lib.rs#L96 <br/> 2. record the coming model indexes; https://github.com/eightfish-org/eightfish/blob/master/subnode/pallets/eightfish/src/lib.rs#L117 <br/> 3. update the on-chain wasm code for the off-chain worker. https://github.com/eightfish-org/eightfish/blob/master/subnode/pallets/eightfish/src/lib.rs#L143 | ...|
| 2. | Subxt proxy | https://github.com/eightfish-org/eightfish/tree/master/subxtproxy| ...| 
| 3. | Off-chain wasm worker | https://github.com/eightfish-org/eightfish/tree/master/spin_worker | ...| 
| 4. | Upgrade utilities | 1. https://github.com/eightfish-org/eightfish/blob/master/upgrade/src/bin/upload_wasm.rs <br/> 2. https://github.com/eightfish-org/eightfish/blob/master/upgrade/src/main.rs <br/> 3.  https://github.com/eightfish-org/eightfish/blob/master/upgrade/nodemon.sh | ...| 
| 5. | A set of rust derive procedural macro | https://github.com/eightfish-org/eightfish/tree/master/eightfish-derive | ...| 
| 6. | Framework SDK interface | https://github.com/eightfish-org/eightfish/tree/master/src | And we provide a simple example to show how to write business: https://github.com/eightfish-org/eightfish/tree/master/examples/simple/src| 
 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.

We have walked through the post and query flow tests right now, which are part of tasks in the milestone 2. But we need it to verify the correction of these components, and verify that they  could work together.

