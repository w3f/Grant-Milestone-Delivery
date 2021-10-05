# Yatima Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Yatima Open Grant Proposal](https://github.com/yatima-inc/Open-Grants-Program/blob/e122eb754e9c4c228dea6721e6822fef4953cb30/applications/yatima.md) 
* **Milestone Number:** 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number        | Deliverable               | Link                                                                 | Notes                                                                                                                                                                                  |
| ------------- | -------------             | -------------                                                        | -------------                                                                                                                                                                          |
| 0a.           | License                   | [LICENSE](https://github.com/yatima-inc/sp-im/blob/main/LICENSE)     | MIT                                                                                                                                                                                    |
| 0b.           | Documentation             | [README](https://github.com/yatima-inc/sp-im/blob/main/README.md)    | Enhanced documentation and wrote a [tutorial](https://github.com/yatima-inc/sp-im/blob/main/substrate-tutorial.md) on `sp-im` usage within Substrate                                                                                                          |
| 0c.           | Testing Guide             | [README](https://github.com/yatima-inc/sp-im/blob/main/README.md)    | Added `quickcheck` tests for Vector, OrdSet, OrdMap, and serialization, and added additional unit tests                                                                                |
| 0d.           | Nix                       | [flake.nix](https://github.com/yatima-inc/sp-im/blob/main/flake.nix) | Created a `.nix` expression to immutably build `sp-im` and all tests                                                                                                                   |
| 1.           | Substrate module: `sp-im` | [sp-im](https://github.com/yatima-inc/sp-im)                         | Created a Substrate module that allows for creating and manipulating performant immutable data structures such as cons-lists, vectors based on rrb trees and maps/sets based on btrees |
