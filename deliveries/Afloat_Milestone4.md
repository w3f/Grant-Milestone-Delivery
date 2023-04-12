<!-- @format -->

# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md
- **Milestone Number:** 4

**Context** (optional)

This is the third milestone of Afloat's grant. It covers ordering fractional tax credits, confirming and settling the order.

A running instance of the code can be found [here](https://hashed-portal-dev.hashed.systems/login)

**Deliverables**

| Number | Deliverable            | Link                                                                                                                                                                                                                                                                                                                                                                                                                      | Notes                                                                                                               |
| -----: | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
|    0a. | License                | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE                                                                                                                                                                                                                                                                                                                                                           | MIT                                                                                                                 |
|    0b. | Documentation          | https://github.com/hashed-io/hashed-network-portal-ui <br> https://github.com/hashed-io/hashed-substrate <br>[Marketplace](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/gated-marketplace)<br> [Fruniques](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/fruniques)<br> https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |
|    0c. | Testing                | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs)                                                                                                                                                                                                                                                                                                       | The test is built directly into the Rust project                                                                    |
|    0d. | Video                  | [English](https://drive.google.com/file/d/1GGBJORWcM9S3wkxrPJSjD77PZl_qXuMm/view) and [Spanish](https://drive.google.com/file/d/1sFH-fcm8Mfa-2-boJ35egd8AWByZmo-9/view) versions                                                                                                                                                                                                            | English and Spanish videos explaining the functionality on this Milestone, as well as some details on how to run it.                                                                                                                 |
|    0e. | Article                | [English](https://docs.google.com/document/d/1ybvHORc4SpFpTbVw97emFKPJeSdYPSXjsHKYnZ33s6U/view) and [Spanish](https://docs.google.com/document/d/1OJFNv0E7u93ljTYEuss_X5Xtp3mB-rxJ7TQ1pKzzoLU/view) versions                                                                                                                                                                                      | English and Spanish articles explaining the math of the fractional NFTs and the business advatanges                                                                                                                 |
|     1. | Approve Redemption Specialists     | [Documentation](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#approve-redemption-specialists) |The redemption specialist role is currently part of the administrator role to reflect Afloat's current workflow. Step shown in video|  
|     2. | Request Redemption                 | [Documentation](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#request-redemption) | Step shown in video.|  
|     3. | View materials and Redeem          | |The tax credit documentation is visible and the workflow is shown in the video.|   
|     4. | Asset Manager	                    | [Documentation](https://github.com/hashed-io/hashed-substrate/blob/develop/docs/pallets-review/gated-marketplace.md#asset-manager) |The asset manager role is currently part of the administrator role to reflect Afloat's current workflow.  Step shown in video.|  
|     5. | Launch Materials	                  | | [Louise](https://www.vscpa.com/people/louise-reed) is giving a series of talks that started January 12th, sponsored by 4 CPA societies (Indiana, Georgia, Michigan and Virginia) called [From Bitcoin to Parachains: How One Strand of the Blockchain Industry is Evolving](https://www.micpa.org/cpe/store/course-detail?ProductId=141530). <br> <br> Louise also gave the "[Roller Coaster of Media Reporting on Blockchain and Cryptocurrency](https://www.vscpa.com/sites/default/files/resources/Session%202C%20-%20The%20Roller%20Coaster%20of%20Media%20Reporting%20on%20Blockchain%20and%20Cryptocurrency.pdf)" talk in September and November 2022, supported by the Virginia Society of CPAs with Virginia Technological Insitute. The videos from the milestone will be used to show the general functionality.|  



**Repositories**
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Afloat Client API | https://github.com/hashed-io/afloat-client-api | Javascript |
| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |
| Marketplace pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |
| Fruniques pallet | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/fruniques | Rust |
| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |
| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |
| Faucet Server | https://github.com/hashed-io/faucet-server | Javascript |
