# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/uke-protocol.md
* **Milestone Number:** 2

**Context** 

This is a _Proof of Concept_ messaging app that utilizes the `uke-pallet` as the backend.  

Keep in mind the app hasn't been tested extensively in actual use, and may run into some minor issues.  It also has not been tested at scale.  However, it is viable, as shown in this client implementation. With proper testing and use, a smoother experience can be guaranteed in the future.

Extensive testing will be conducted; as it isn't part of this milestone delivery, however, it hasn't been conducted at this time. (besides unit tests)

You may visit [uke.chat](https://app.uke.chat/) to view a deployed version of the application.

![](https://miro.medium.com/max/1344/1*O4n27EuVfxk8YXu3Lv5ZiA.gif)

**Deliverables**
> For this delivery, the milestone content is placed under branch m2-delivery

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
 0a. | License | https://github.com/Uke-Messaging/uke/blob/m2-delivery/LICENSE.md  | Registered under the Apache 2.0 license. |
| 0b.  | Documentation | https://github.com/Uke-Messaging/uke/blob/m2-delivery/README.md | README the repository contains all necessary documentation for testing and building the project.  | 
| 0c.  | Testing Guide | https://github.com/Uke-Messaging/uke/blob/m2-delivery/README.md#testing| Contains necessary instructions on running unit tests for the project. | 
| 0d.  | Docker | https://github.com/Uke-Messaging/uke/blob/m2-delivery/README.md#testing | Contains the instructions needed to also build and test the project via the provided `Dockerfile`. | 
| 0e.  | Article | https://medium.com/@muchbader/breaking-web3-the-first-walletless-purely-blockchain-chat-app-introducing-the-uke-alpha-8c2297f2af68 | A full blog post on Medium on how Uke was created, what powers it, and what exact work was completed on it (as well as future goals). | 
| 1a.  | Uke Ionic Application: Data Models | https://github.com/Uke-Messaging/uke/tree/m2-delivery/src/app/model | The data models represent data that come from the Substrate node, and is parsed accordingly for display. | 
| 1b.  |  Uke Ionic Application: Login and Signup Service | https://github.com/Uke-Messaging/uke/blob/m2-delivery/src/app/services/keyring.service.ts | These ensure that users can sign up and login as needed. A local account is generated and stored locally, as well as a username assigned to each user in association. | 
| 1c.  | Uke Ionic Application: Message Delivery & Configuration | https://github.com/Uke-Messaging/uke/blob/m2-delivery/src/app/services/ukepallet.service.ts | Messages are encrypted and sent, and fetched and decrypted when needed.  This service manages all API calls to the Substrate node. | 
| 1d.  | Uke Ionic Application: In-App Notification System | https://github.com/Uke-Messaging/uke/blob/m2-delivery/src/app/services/notif.service.ts | These utilize Ionic APIs to display in-app prompts and notifications, i.e a new message received. | 

**Additional Information**

If you wish to test the deployed app, feel free to DM me on [Twitter](https://twitter.com/baderyo_o) when you do so you may have someone to send messages with!  
