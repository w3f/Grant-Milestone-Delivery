# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** 
[social recovery wallet](https://github.com/w3f/Grants-Program/tree/master/applications/social_recovery_wallet.md) directory).

* **Milestone Number:** 1

**Context**
Milestone 1 - Set up recovery. Also required us to implement Polkadot JS inside the wallet, adding create/import account, and remove recovery. 


**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

### Milestone 1 — Screen Designs and Configure Recovery
- **Estimated duration:** 4 weeks
- **FTE:**  2.5
- **Costs:** 14,000 USD

| Number | Deliverable | Link | Notes
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | [MIT License](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M1_00/LICENSE) | 
| 0b. | Documentation | [Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M1_00/documentation/tutorial.md) <BR> [Code](https://github.com/hypha-dao/hashed-wallet/tree/v1.0.0_M1_00/) | Install instructions <BR> Source code
| 0c. | Testing Guide | [Testing Guide](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M1_00/documentation/testing_guide.md) | Note only new functionality was added to unit tests, older Seeds Light Wallet or Polkawallet code is not tested.
| 0d. | App Binaries | [APK for Android](https://github.com/hypha-dao/hashed-wallet/releases/download/1.0.0_prerelease_M1/app-release.apk) |
| 0e. | Video | [Video Presentation](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M1_00/documentation/videos/milestone_1_delivery.md) |
| 1. | Screen Designs | [All Screens M1 PDF](https://github.com/hypha-dao/hashed-wallet/raw/v1.0.0_M1_00/documentation/Milestone%201%20Screens.pdf) | These are exported from Figma - happy to also provide Figma link
| 2. | Configure Recovery | Implemented. See app or demo video | 


| Pallet calls delivered |
| ------------ |
| createRecovery |

**Additional Information**

[Architecture Overview](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M1_00/documentation/architecture.md)
