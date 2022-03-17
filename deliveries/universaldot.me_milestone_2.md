# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/universaldot-me.md
* **Milestone Number:** 2

**Context** 
We provide implementation of MVP 0.2 that is focused on the front-end application. This includes:
* New React Components that simplify the blockchain interaction for end-user.
* Complete deployment of a React application: https://universaldot.me
* Integration with functionality that was developed in Milestone 1.
* Running testnet. 


**Deliverables**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.| Licence | Unlicense: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/LICENSE | We use the same public license as substrate-front-end template |
| 0b.  | Documentation | https://universaldot.me/docs/pallet_profile/index.html <br> https://universaldot.me/docs/pallet_task/index.html <br> https://universaldot.me/docs/pallet_dao/index.html  | Complete documentation of all modules used is available also from the navigation bar.
| 0c.  | Testing Guide | https://github.com/UniversalDot/universal-dot-front-end/tree/universal-master#testing | We use Cypress for End-to-end testing | 
| 0d.  | Docker | https://github.com/UniversalDot/compose-service/blob/master/front-end/Dockerfile | ...| 
| 0e.  | User Manual | https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/USER-MANUAL.md | ...| 
| 1. | ReactModule: Profile |Hooks: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/src/hooks/useProfile.js <br> Component: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/src/components/profile-configuration/ProfileConfiguration.jsx | 
| 2.  | ReactModule: Task |Hooks: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/src/hooks/useTasks.js <br> Component: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/src/components/task/Task.jsx | ...| 
| 3.  | ReactModule: DAO |Hooks: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/src/hooks/useDao.js <br> Component: https://github.com/UniversalDot/universal-dot-front-end/blob/universal-master/src/components/organizations/Organizations.jsx| ...| 
| 4.  | Substrate Chain | Node:  wss://3lnc.l.time4vps.cloud:443 <br> Deployed App: https://universaldot.me| ...| 

**Additional Information**

* The main focus of the front-end application is to abstract out all blockchain knowledge from the end-user. The application should feel familiar to current UI design trends. This has been achieved in this Milestone. 
* The Dao Component will be further improved in the future.
* We have reached out to the Substrate Builders Program again, but had no response. All current functionality has been build without technical advice or support from the Builders Program. We hope this will change in the future.
* There are some known issues that will be resolved in a future release: https://github.com/UniversalDot/universal-dot-front-end/issues/13


