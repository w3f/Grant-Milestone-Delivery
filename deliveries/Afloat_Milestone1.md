# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md
* **Milestone Number:** 1

**Context** (optional)

Regarding the user onboarding and KYC process, we anticipated to use the identity pallet to store crucial information, however, modifying the user identity causes the current judgements to be reset, therefore we opted for storing the necessary information (which results from a developed privacy solution) within a custom pallet storage, along with some other items to describe pivotal data relations to keep it more persistant.

**Deliverables**
| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| 0a. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE | MIT |
| 0b. | Documentation | https://github.com/Afloat-Inc/marketplaces-ui <br> https://github.com/Afloat-Inc/pallets https://github.com/Afloat-Inc/private-server https://github.com/Afloat-Inc/private-client-api| The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |
| 0c. | Testing | https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs | The test is built directly into the Rust project |
| 0d. | Video | Video in [English](https://drive.google.com/file/d/1Gzz1scZt4LSBPrQ30XXZzclhAXjjdUHJ/view?usp=sharing) and [Spanish](https://drive.google.com/file/d/12HGvMEMDU5NMRXcEa8m3gkuqjwO3iONV/view?usp=sharing) | 14 minute video demonstrating the deliverables |
| 0e. | Article | Article in [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) |
| 1. | Set Profile and Upload KYC Materials | https://github.com/Afloat-Inc/private-server https://github.com/Afloat-Inc/private-client-api  | Users can upload files that are visible only to themselves, a designated custodian and the Marketplace owner. The video demos this functionality. |
| 2. | KYC Admin | https://github.com/Afloat-Inc/marketplaces-ui https://github.com/Afloat-Inc/pallets | |
| 3. | Slides | https://drive.google.com/file/d/1_YgnWkFoFXhjG1XdSFGa1F_Vbz1HkwA8/view?usp=sharing | Presentation slides used by Louise W. Reed, CPA’s talks at CPA conferences regarding blockchain, cryptocurrency, triple-entry accounting and transferring state tax credits. The slides address why Afloat sees value in being supported by Polkadot’s ecosystem| 

**Repositories** 
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Marketplace UI | https://github.com/Afloat-Inc/marketplaces-ui | Quasar/Vue |
| Marketplace pallets | https://github.com/Afloat-Inc/pallets | Rust |
| Confidential Documents Server | https://github.com/Afloat-Inc/private-server | Javascript |
| Confidential Documents API | https://github.com/Afloat-Inc/private-client-api | Javascript |

**Other Deliverables** 

[English](https://drive.google.com/file/d/1Gzz1scZt4LSBPrQ30XXZzclhAXjjdUHJ/view?usp=sharing) and [Spanish](https://drive.google.com/file/d/12HGvMEMDU5NMRXcEa8m3gkuqjwO3iONV/view?usp=sharing) Videos

[English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) Articles

[Slides for CPA presentations](https://drive.google.com/file/d/1_YgnWkFoFXhjG1XdSFGa1F_Vbz1HkwA8/view?usp=sharing)


**Additional Information**

We will create more extensive and polished end user documentation as we continue delivering the Milestones.
