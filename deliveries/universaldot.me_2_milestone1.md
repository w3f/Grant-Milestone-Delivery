# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/universaldot.me.md
* **Milestone Number:** 1

**Context** (optional)

> *This application is a follow up grant to: https://github.com/w3f/Grants-Program/pull/714*

The new Release 0.7 contains the following features:
- Upgraded pallet functionality
- Redesigned front-end application
- Integration with Tensorflow Serving
- IPFS Integration Design 

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License|https://github.com/UniversalDot/universal-dot-node/blob/universal-master/LICENSE </br> https://github.com/UniversalDot/front-end/blob/develop/LICENSE.md | ...| 
| 0b.  | Documentation | Documentation regarding the app is provided at: https://docs.universaldot.me/| All substrate code (including tests includes ample inline code documentation)| 
| 0c. | Testing Guide | https://docs.universaldot.me/docs/sdk/Testing | ...| 
| 0d. | Docker |https://github.com/UniversalDot/compose-service/blob/master/docker-compose.yml| Single docker-compose file that starts the node, front-end, IPFS and Tensorflow| 
| 0e. | Article |https://medium.com/universaldot/vision-everything-starts-with-a-why-d4ad616a4310| ...| 
| 1. | Improve Profile,Task, Dao pallets |Release: https://github.com/UniversalDot/universal-dot-node/releases/tag/v0.7.0 <br/> Pallet Profile: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/profile/src/lib.rs <br/> Pallet Task: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/task/src/lib.rs <br/> Pallet Dao: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/dao/src/lib.rs | ...|
| 2. | Tensorflow Integration |https://github.com/UniversalDot/front-end/pull/11/files <br/> Model: https://github.com/UniversalDot/tensorflow| ...| 
| 3. | DAO Redesign |Figma:  https://www.figma.com/file/HHVZfIdNWrKOKNka6gdm5d/Dao-Design?node-id=0%3A1 <br/>  New front-end: https://test.universaldot.me| ...|
| 4. | IPFS Design Document |https://drive.google.com/file/d/1uYoLvdV9r5kaIxKSVCKBcEF5xWb_4ktn/view?usp=sharing| ...|
| 5. | CI/CD |Github Actions: <br/> Node: https://github.com/UniversalDot/universal-dot-node/actions <br/> Front-end: https://github.com/UniversalDot/front-end/actions <br/> Actions Config: <br/> Node: https://github.com/UniversalDot/universal-dot-node/blob/universal-develop/.github/workflows/check.yml <br/> Front-end: https://github.com/UniversalDot/front-end/blob/develop/.github/workflows/deploy.yml | ...|
| 6. | Udot Wiki |https://docs.universaldot.me| ...|

**Additional Information**

The previous version of the application is deployed to https://app.universaldot.me/

The latest 0.7 version of the application is deployed to https://test.universaldot.me/. On this endpoint you can find the DAO refactoring based on the latest design. Currently, we have a pipeline that automatocally deploys the latest develop branch to test.universaldot.me, so depending on when you are testing it, might have more features. We have already starting working towards 1.0 release.
