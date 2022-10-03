# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone, and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md
* **Milestone Number:** 2

**Context** (optional)

A running instance of the code can be found [here](https://portal-dev.hashed.systems)

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------------- |
| 0a. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate<br>  https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |
| 0c. | Testing | https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs | The test is built directly into the Rust project |
| 0d. | Video | [English](https://drive.google.com/file/d/1Gzz1scZt4LSBPrQ30XXZzclhAXjjdUHJ/view?usp=sharing) and [Spanish](https://drive.google.com/file/d/12HGvMEMDU5NMRXcEa8m3gkuqjwO3iONV/view?usp=sharing) versions | 14 minute video demonstrating the deliverables |
| 0e. | Article | [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) versions | Afloat's and general use case of gated Marketplaces |
| 1. | Originate Tax Credit | [JS library](https://github.com/hashed-io/afloat-client-api/blob/master/src/model/polkadot-pallets/afloatApi.js#L34) [Pallet](https://github.com/hashed-io/hashed-substrate/blob/develop/pallets/fruniques/src/lib.rs#L177) | This video provides a demonstration and explainer for how new tax credit NFTs are being originated: [Youtube Video](https://youtu.be/dpFk2d0UXYc) | 
| 2. | Upload Confidential Documents | [JS library](https://github.com/hashed-io/hashed-confidential-docs-client-api/blob/015b59837eb8c0117fecb0c6323053d605a6f5fd/src/model/OwnedData.js#L57) | This feature allows for NFT originators to upload encrypted files attached to tax credits. The files will be accessible only by the user and the application administrator. This is also explained in the [video](https://youtu.be/dpFk2d0UXYc) | 
| 3. | Tax Credit verification | n/a | This functionality actually does not go into the pallet, but rather the client because it requires access to confidential data not accessible in the pallet.  |
| 4. | List for Sale | link | Ability for Tax Credit (NFT) owners to assign a price and list it for sale.| 

**Repositories** 
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Marketplace UI | https://github.com/hashed-io/hashed-network-portal-ui | Quasar/Vue |
| Marketplace pallets | https://github.com/hashed-io/hashed-substrate/tree/develop/pallets/gated-marketplace | Rust |
| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |
| Confidential Documents API | https://github.com/hashed-io/hashed-confidential-docs-client-api | Javascript |



**Additional Information**

