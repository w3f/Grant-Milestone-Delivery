# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/supersig_fellowship.md
* **Milestone Number:** 2

**Context** 

"A Supersig is a Multisig with superpowers"

A new pallet, RPC and UI that enables organisations to benefit from much more flexibility than multisig, where users can add and remove members, as well as optionally add "Master" users that have more power than "Standard" users. 

Supersig is like multisig but with superpowers. This means that you have some added features such as:

- you can add and remove members from the supersig.
- you get simpleMajority, instead of fixed thresholds. 
- you get a master superuser feature. A master user always has 50% of the voting power. This means that if a master user is involved in a transaction, only one other person needs to sign in order to approve the transaction for execution. (*More than one person can be a master user). 

**This milestone is about creating a UI for chains that contain supersig pallet and rpc module.** 


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ---------- | 
| 0a. | License | Apache 2.0  |  | |
| 0b. | Documentation | https://github.com/decentration/supersig-ui#supersig-ui, https://decentration.medium.com/supersig-ui-simply-manage-your-orgs-250769f5367  |  Run through the Readme docs or the article to learn how to set up the project. |
| 0c. | e2e workflow tester |  https://github.com/decentration/supersig-ui | launch this on local machine, then go to Settings, where you can run through the workflow tester |
| 0d. | Docker  | https://github.com/decentration/supersig-ui#docker | run this command to run supersig ui from your local machine in one click. `docker run --rm -it --name supersig-ui -p 3000:3000  decentration/supersig-ui:latest` |
| 0e. | Article and Video  | https://decentration.medium.com/supersig-ui-simply-manage-your-orgs-250769f53679, https://www.loom.com/share/6c96b98b437e439ca1bd251ec0c2b937?sid=5854ef8b-a579-45a0-9702-6cf60f5277f8 | Medium Article and Video for reviewal. If you are the reviewer watch this so you can navigate this milestone with ease. |
| 1. | **Supersig UI** |  https://github.com/decentration/supersig-ui  | **This is the main event of the milestone...** simply clone, yarn and then yarn start |
| 2. | Substrate Chain | https://github.com/decentration/substrate-supersig-template/tree/v0.9.37-fix-unbounded | Follow the article how-to to get an exact step by step here  | 
| 3. | Polkadot JS Apps UI Fork | https://github.com/decentration/apps/tree/main-fellowship-1 | We are not current going to make a PR to the main repo because Jaco is not accepting outside teams. After talking to him, he said that he would only consider it if it is being used by many people, that probably means if supersig gets added not just insto statemine, but statemint, and other chains. However, that is no problem because we have a fork of polkadot js running here: https://apps.decentration.org |


**Additional Information**
> Any further comments on the milestone that you would like to share with us.
