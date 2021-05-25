# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/182
* **Milestone Number:** 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |---------------|
| 0 | Testable features | Video walk through: https://www.youtube.com/watch?v=lUtS9-FF_UE | User upgrade new phone and transfer P1 from old phone to new phone. Use social recovery to keep assets and transfer to a new account in case of lost web and mobile app |
| 1 | Update test instruction | https://github.com/tearust/gluon-app/blob/milestone-2/readme.md | update with new features | 
| 2 | Source code | https://github.com/tearust/gluon-app/tree/milestone-2 |  |
| 3 | Video tutorial | https://www.youtube.com/watch?v=lUtS9-FF_UE | Full User's manual (For feature testers) | 

| Task ID | Module name | Description | Link |
| ------ | ----------- | ---- | ----- |
| 1.0 | layer1 | Add social recovery API. The tx name is **create_recovery** | https://github.com/tearust/tea-layer1/blob/milestone-2/pallets/recovery/src/lib.rs |
| 2.0 | Web Portal | Create social recovery page. The tx name is **initiate_recovery**  | https://github.com/tearust/tea-layer1/blob/milestone-2/pallets/recovery/src/lib.rs |
| 3.0 | Mobile app | Social recovery if initiated from phone | this has been done in webapp. Not mobile app. Because Recovery pallet doesn't have 2nd account (mobile account) support. |
| 3.1 | Mobile app | Scan QR code to confirm friends recovery request |  this has been done in webapp. Not mobile app. Because Recovery pallet doesn't have 2nd account (mobile account) support.  |
| 4.0 | Gluon TeaLeaf | Suspend old P2 P3 | The tx name is **test_transfer_all_asset** with [source-code](https://github.com/tearust/gluon-pallet/blob/milestone-2/gluon/src/lib.rs). when transfer will check it need suspend or not. |
| 4.1 | Layer1 | Suspend old account activity during the recovering process | The tx name is **test_transfer_all_asset** with [source-code](https://github.com/tearust/gluon-pallet/blob/milestone-2/gluon/src/lib.rs#L900-L902). when transfer will check it need suspend or not. more details to get from [https://github.com/tearust/gluon-app/blob/milestone-2/readme.md#asset-suspend](https://github.com/tearust/gluon-app/blob/milestone-2/readme.md#asset-suspend) | 
| 4.2 | Gluon TeaLeaf | Generate a new account to accept assets | User generate the new account on the Polkadot Browser Extension. Copy and paste to the Web UI for recovery process. |
| 5.0 | Layer1 | Verify all social recovery confirmation, transfer assets to new account | The tx name is **test_transfer_all_asset** with [source-code](https://github.com/tearust/gluon-pallet/blob/milestone-2/gluon/src/lib.rs). |


Besides, all remaining issues from milestone1 (such as compile warnings) are fixed in this milestone.

