# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md
* **Milestone Number:** 2

**Context** (optional)

A running instance of the code can be found [here](https://hashed-portal-dev.hashed.systems/login)

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------------- |
| 0a. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate<br>  https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |
| 0c. | Testing | [Github repository](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs) | The test is built directly into the Rust project |
| 0d. | Video | [Video](https://drive.google.com/file/d/1tpmsaml4RmKbPb2PB5D0_32y_NcVDSZ7/view?usp=share_link) | 8 minute video demonstrating the deliverables |
| 0e. | Article | [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) versions | Afloat's and general use case of gated Marketplaces |
| 1. | Originate Tax Credit | [JS library](https://github.com/hashed-io/afloat-client-api/blob/master/src/model/polkadot-pallets/afloatApi.js#L34) [Pallet](https://github.com/hashed-io/hashed-substrate/blob/develop/pallets/fruniques/src/lib.rs#L177) | This video provides a demonstration and explainer for how new tax credit NFTs are being originated: [Youtube Video](https://youtu.be/dpFk2d0UXYc) | 
| 2. | Upload Confidential Documents | [Video](https://drive.google.com/file/d/1yvCiuJ7P5xTPtTwCLZyNWCSez4NBUGfP/view?usp=sharing) showing NFT functionality specific to the tax credits implementation [JS library](https://github.com/hashed-io/hashed-confidential-docs-client-api/blob/015b59837eb8c0117fecb0c6323053d605a6f5fd/src/model/OwnedData.js#L57) | This feature allows for NFT originators to upload encrypted files attached to tax credits. The files will be accessible only by the user and the application administrator. This is also explained in the [video](https://youtu.be/dpFk2d0UXYc) | 
| 3. | Tax Credit verification | An example of state tax credit verification is shown in the [video](https://drive.google.com/file/d/1yvCiuJ7P5xTPtTwCLZyNWCSez4NBUGfP/view?usp=sharing) from the previous point of this deliverable (2.) at 4m12s | This shows a tax credit verification at the state level. Other verifications can be configured. |
| 4. | List for Sale | [Enlist NFT for sale](https://github.com/hashed-io/hashed-substrate/blob/00135e71f7bed81cf9f8dbd902b989bd19393f7e/pallets/gated-marketplace/src/lib.rs#L549) | Ability for Tax Credit (NFT) owners to assign a price and list it for sale.| 

**Repositories** 
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Afloat Client API | https://github.com/hashed-io/afloat-client-api | Javascript |
| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |
| Marketplace pallets | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |
| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |
| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |



**Additional Information**


