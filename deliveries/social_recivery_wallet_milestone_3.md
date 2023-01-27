# Milestone Delivery :mailbox:

## Name of the Grant Project
**Social Recovery Wallet**

## Link to the open-source code/delivery

https://github.com/hypha-dao/hashed-wallet/tree/v1.0.0_M3

The milestone 3 delivery branch is v1.0.0_M3. All references in the context of this delivery will be made to this branch. 

Google Play Store [App download](https://play.google.com/apps/internaltest/4701631300800602818)
Apple Testflight [iOS download](https://testflight.apple.com/join/NKhGqqxE)

Most testing was done on iOS. 


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/social_recovery_wallet.md

* **Milestone Number:** 3

**Context** (optional)
Milestone 3: Scan QR code, Sign, and Broadcast

**Deliverables**

Please contact me for demo accounts with a balance in Hashed tokens. 

### Milestone 3 — Scan QR code, Sign, and Broadcast

- **Estimated Duration:** 4 weeks
- **FTE:**  2.5
- **Costs:** 14,000 USD

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | [MIT License](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M3/LICENSE) | 
| 0b. | Documentation | [Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M3/documentation/tutorial.md) <BR> [Code](https://github.com/hypha-dao/hashed-wallet/tree/v1.0.0_M3/)  <BR> [Architecture Overview](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M3/documentation/architecture.md) <BR> [Substrate Signing Request (SSR) Spec](https://github.com/hypha-dao/hashed-wallet/wiki/Substrate-Signing-Request-Specification) | Install instructions <BR> Source code <BR> Architecture <BR> Substrate Signing Request Spec
| 0c. | Testing Guide | [Testing Guide](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M3/documentation/testing_guide.md) | Note: Contact me for demo account with a token balance to test the recovery API calls. 
| 0d. | App Binaries | [APK for Android](https://github.com/hypha-dao/hashed-wallet/releases/tag/1.0.0_M2) <BR> [Android Testing Track](https://play.google.com/apps/internaltest/4701631300800602818) <BR> [iOS Testflight App](https://testflight.apple.com/join/NKhGqqxE) |
| 0e. | Video | [Video Presentation](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M3/documentation/videos/milestone_3_delivery.md) |
| 0f. | Screen Designs | [All Screens M3 PDF](https://github.com/hypha-dao/hashed-wallet/raw/v1.0.0_M3/documentation/Milestone%203%20Screens.pdf) | Not part of M3 but for completeness
| 1. | QR Code Format | Flutter library for scanning polkadot.{js} QR codes |  
| 2. | Node Selector | User can configure which network they are connecting to |  
| 3. | Sign and Broadcast | Integrate Sign and Broadcast for Flutter |  
| 4. | Deployment | Wallet deployed to iOS and Android app stores |  

**Additional Information**

For switching networks, we currently only support the native token of the chain

There is code to support all tokens but we found there to be no consistent standard that would work for all parachains. 
