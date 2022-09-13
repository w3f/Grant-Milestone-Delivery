# Evaluation

- **Status:** Accepted
- **Application Document:** [universaldot.me](https://github.com/w3f/Grants-Program/blob/master/applications/universaldot.me.md) 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License|https://github.com/UniversalDot/universal-dot-node/blob/universal-master/LICENSE </br> https://github.com/UniversalDot/front-end/blob/develop/LICENSE.md | Improved on request| 
| 0b.  | Documentation | Documentation regarding the app is provided at: https://docs.universaldot.me/| Improved on request| 
| 0c. | Testing Guide | https://docs.universaldot.me/docs/sdk/Testing | OK, fixed previously failed test| 
| 0d. | Docker |https://github.com/UniversalDot/compose-service/blob/master/docker-compose.yml| Ok| 
| 0e. | Article |https://medium.com/universaldot/vision-everything-starts-with-a-why-d4ad616a4310| ...| 
| 1. | Improve Profile,Task, Dao pallets |Release: https://github.com/UniversalDot/universal-dot-node/releases/tag/v0.7.0 <br/> Pallet Profile: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/profile/src/lib.rs <br/> Pallet Task: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/task/src/lib.rs <br/> Pallet Dao: https://github.com/UniversalDot/universal-dot-node/blob/universal-master/pallets/dao/src/lib.rs | Ok|
| 2. | Tensorflow Integration |https://github.com/UniversalDot/front-end/pull/11/files <br/> Model: https://github.com/UniversalDot/tensorflow| Uncertain on how to test that the integration is working properly| 
| 3. | DAO Redesign |Figma:  https://www.figma.com/file/HHVZfIdNWrKOKNka6gdm5d/Dao-Design?node-id=0%3A1 <br/>  New front-end: https://test.universaldot.me| Ok|
| 4. | IPFS Design Document |https://drive.google.com/file/d/1uYoLvdV9r5kaIxKSVCKBcEF5xWb_4ktn/view?usp=sharing| Ok|
| 5. | CI/CD |Github Actions: <br/> Node: https://github.com/UniversalDot/universal-dot-node/actions <br/> Front-end: https://github.com/UniversalDot/front-end/actions <br/> Actions Config: <br/> Node: https://github.com/UniversalDot/universal-dot-node/blob/universal-develop/.github/workflows/check.yml <br/> Front-end: https://github.com/UniversalDot/front-end/blob/develop/.github/workflows/deploy.yml | Ok|
| 6. | Udot Wiki |https://docs.universaldot.me| Already reviewed in 0b|

## General Notes

### 2. Tensorflow Integration

I was able to successfully test the model on colab. However, as you are using an existing Google model, what would be interesting would be to test the integration itself and not the model. Is there any way in which a demonstration could be done of this working, or some unit tests could be added testing the integration with the model from the app? I was told integration testing for the model is in the backlog.

### 4. IPFS design document

The document describes a fairly standard usage of IPFS in many blockchain projects (storing data in IPFS, then storing the cid in the blockchain). Reading Milestone 2 on the original proposal it seems like the idea initially was to integrate ipfs into a substrate pallet. This idea seems to have been abandoned, as a pallet would not make much sense here for what is needed.
