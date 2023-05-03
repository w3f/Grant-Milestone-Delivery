# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/supersig_fellowship.md
* **Milestone Number:** 1

**Context** 

"A Supersig is a Multisig with superpowers"

A new pallet, RPC and UI that enables organisations to benefit from much more flexibility than multisig, where users can add and remove members, as well as optionally add "Master" users that have more power than "Standard" users. 

Supersig is like multisig but with superpowers. This means that you have some added features such as:

- you can add and remove members from the supersig.
- you get simpleMajority, instead of fixed thresholds. 
- you get a master superuser feature. A master user always has 50% of the voting power. This means that if a master user is involved in a transaction, only one other person needs to sign in order to approve the transaction for execution. (*More than one person can be a master user). 



**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ---------- | 
| 0a. | License | Apache 2.0  |  | |
| 0b. | Documentation | https://decentration.medium.com/, https://wiki.kabocha.network/docs/Supersig/introduction | 2 links |
| 0c. | Testing Guide | https://github.com/decentration/pallet_supersig/tree/polkadot-v0.9.37-fix-unbounded/src/tests | `cargo test` |
| 0d. | Article and Video  | https://medium.com/@decentration/supersig-statemine-cbe6533233c2, https://www.loom.com/share/ea2fe68f99c44a4b91baaa85828b1745 | Medium Article and Video for reviewal. If you are the reviewer watch this so you can navigate this milestone with ease. |
| 1. | Substrate module: pallet_supersig |  pallet_supersig https://github.com/decentration/pallet_supersig/tree/polkadot-v0.9.37-fix-unbounded | |
| 2. | Supersig-app: polkadot-js-ui (fork) | https://github.com/decentration/apps | When you `yarn build` and `yarn lint`. For best results build from Ubuntu. Polkadot JS is not designed to build for Macbook M2, though you may be able to with Mac Intel. 

When you yarn build you should find no errors occuring from `page-supersig`, though there may be errors from outside coming from the newest master branch of polkadot-js, we've dealt with some of the prior errors, however as we don't know the full context of those errors, we will leave them to the jurisdiction fo the product owner, Jaco. |
| 3. | Benchmarking | https://github.com/decentration/pallet_supersig/blob/master/src/weights.rs  |  No change to weights. | 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
