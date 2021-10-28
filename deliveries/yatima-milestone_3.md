# Yatima Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Yatima Open Grant Proposal](https://github.com/yatima-inc/Open-Grants-Program/blob/e122eb754e9c4c228dea6721e6822fef4953cb30/applications/yatima.md) 
* **Milestone Number:** 3

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number        | Deliverable               | Link                                                                 | Notes                                                                                                                                                                                  |
| ------------- | -------------             | -------------                                                        | -------------                                                                                                                                                                          |
| 0a.           | License                   | [LICENSE](https://github.com/yatima-inc/yatima/blob/main/LICENSE)     | MIT                                                                                                                                                                                    |
| 0b.           | Documentation             | [README](https://github.com/yatima-inc/yatima/blob/main/README.md) [Substrate Tutorial](https://github.com/yatima-inc/yatima/blob/main/substrate-tutorial.md)    | Enhanced documentation, wrote a usage tutorial, wrote an `sp-yatima` Substrate usage tutorial, and made a demo video (https://www.youtube.com/watch?v=H3XJIZ41HQ8)                                                                                                         |
| 0c.           | Testing Guide             | [README](https://github.com/yatima-inc/yatima/blob/main/README.md)    | Added `quickcheck` tests and benchmarks for typechecking and evaluating Yatima terms                                                                                |
| 0d.           | Nix                       | [yatima.nix](https://github.com/yatima-inc/yatima/blob/main/yatima.nix) | Created a `.nix` expression to immutably build `sp-yatima` and all top-level libraries                                                                                                                   |
| 1.            | Substrate module: `sp-yatima` (published as `yatima-core`) | [sp-yatima](https://github.com/yatima-inc/yatima/tree/main/core) [yatima-core](https://crates.io/crates/yatima-core)                         | Created a Substrate module that allows for parsing, typechecking and evaluating Yatima language expressions on-chain |
| 2.            | Repository: `yatima-node`     | [Yatima Node](https://github.com/yatima-inc/substrate-node-template/tree/yatima-tutorial) [Yatima Front End](https://github.com/yatima-inc/substrate-front-end-template/tree/yatima-tutorial) | Created a fork of the `substrate-node-template` that imports `sp-yatima` in the `yatima-tutorial` branch and implemented a sample frontend for theorem proving |
