# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/social_recovery_wallet.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/tutorial.md), [Architecture](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/architecture.md), [Substrate Signing Request Specification](https://github.com/hypha-dao/hashed-wallet/wiki/Substrate-Signing-Request-Specification) | Inline comments are rather spare, but sufficient for this use case. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Testing Guide](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/testing_guide.md) | TODO: Business logic functions will be fully covered by unit tests to ensure functionality and robustness. We will describe how to run these tests. |
| 0d. | App Binaries | <ul><li>[x] </li></ul> | [APK for Android](https://github.com/hypha-dao/hashed-wallet/releases/tag/1.0.0_M2), [Android Testing Track](https://play.google.com/apps/internaltest/4701631300800602818), [iOS Testflight App](https://testflight.apple.com/join/NKhGqqxE) | All delivered functions were successfully tested on iOS. |
| 0e. | Video | <ul><li>[x] </li></ul> | [Video Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/videos/milestone_3_delivery.md) | - |
| 1. | QR Code Format  | <ul><li>[ ] </li></ul> | (pending) | Spec: Flutter library for scanning polkadot.{js} QR codes |  
| 2. | Node Selector  | <ul><li>[ ] </li></ul> | (pending) | Spec: User can configure which network they are connecting to |  
| 3. | Sign and Broadcast  | <ul><li>[ ] </li></ul> | (pending) | Spec: Integrate Sign and Broadcast for Flutter |  
| 4. | Deployment  | <ul><li>[ ] </li></ul> | (pending) | Spec: Wallet deployed to iOS and Android app stores |  

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- during testing, there were a couple of bugs that were reported to the grantee
- the grantee created tickets and fixed the bugs promptly
- for deliverable 1-4 I'm currently waiting for the grantee to include the links
