# Milestone Delivery :mailbox:

## Name of the Grant Project
**Social Recovery Wallet**

## Link to the open-source code/delivery

https://github.com/hypha-dao/hashed-wallet/tree/v1.0.0_M2

The milestone 2 delivery branch is v1.0.0_M2. All references in the context of this delivery will be made to this branch. 

Google Play Store [App download](https://play.google.com/apps/internaltest/4701631300800602818)
Apple Testflight [iOS download](https://testflight.apple.com/join/NKhGqqxE)

Most testing was done on iOS. 


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/social_recovery_wallet.md

* **Milestone Number:** 2

**Context** (optional)
Milestone 2: Implement all remaining functions of the recovery pallet. 

**Deliverables**

Please contact me for demo accounts with a balance in Hashed tokens. 

### Milestone 2 — Initiate Social Recovery, Vouch, Claim, and Recover
- **Estimated duration:** 5 weeks
- **FTE:**  2.5
- **Costs:** 17,500 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| Number | Deliverable | Link | Notes
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | [MIT License](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M2/LICENSE) | 
| 0b. | Documentation | [Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M2/documentation/tutorial.md) <BR> [Code](https://github.com/hypha-dao/hashed-wallet/tree/v1.0.0_M2/)  <BR> [Architecture Overview](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M2/documentation/architecture.md) | Install instructions <BR> Source code <BR> Architecture
| 0c. | Testing Guide | [Testing Guide](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M2/documentation/testing_guide.md) | Note: Contact me for demo account with a token balance to test the recovery API calls. 
| 0d. | App Binaries | [APK for Android](https://github.com/hypha-dao/hashed-wallet/releases/tag/1.0.0_M2) <BR> [Android Testing Track](https://play.google.com/apps/internaltest/4701631300800602818) <BR> [iOS Testflight App](https://testflight.apple.com/join/NKhGqqxE) |
| 0e. | Video | [Video Presentation](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M2/documentation/videos/milestone_2_delivery.md) |
| 0f. | Screen Designs | [All Screens M2 PDF](https://github.com/hypha-dao/hashed-wallet/raw/v1.0.0_M2/documentation/Milestone%202%20Screens.pdf) | Not part of M2 but for completeness
| 1. | Recovery Lookup | The ability to add guardians and an indicator whether that an account has a an active recovery. Note that the active recovery shows on the recovery screen when it exists. When there is no active recovery the UI element does not show. |  
| 2. | Vouch | The ability to vouch for user that has an active recovery requesting signature from the account in the wallet.  |  
| 3. | Claim and Recover | When threshold is met, user will have the ability to claim and recover their tokens.  |  

**Additional Information**

We had to change some screens from the original plan because of intricacies of the recovery we were not aware of. For example, if there is an active proxy, it shows on the recovery screen - this was added because users can actually leave the proxy there for as long as they want. 

We also added all 3 modes of shutting down the recovery - removing an active recovery object; removing the recovery configuraiton from the rescuer side; removing a proxy entry (closes a recovery).

[Architecture Overview](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M2/documentation/architecture.md)
