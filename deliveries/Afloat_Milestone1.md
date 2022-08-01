# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md
* **Milestone Number:** 1

**Context** (optional)

Regarding the user onboarding and KYC process, we anticipated to use the identity pallet to store crucial information, however, modifying the user identity causes the current judgements to be reset, therefore we opted for storing the necessary information (which results from a developed privacy solution) within a custom pallet storage, along with some other items to describe pivotal data relations to keep it more persistant.

**Deliverables**
| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | MIT |
| 0b. | Documentation | We will provide **inline documentation** of the code and a basic **tutorial** of the modules delivered in this Milestone.|
| 0c. | Testing | Unit testing will be applied to ensure reliability. Documentation of tests and results will be provided |
| 0d. | Video | We will provide a video demonstration that will illustrate all of the functionality delivered with this milestone. |
| 0e. | Article | We will publish an **article** in English and Spanish that explains what was built and how it can benefit other projects |
| 1. | Set Profile and Upload KYC Materials | User onboarding web client for uploading identity details in a privacy preserving manner. Data will be encrypted and only accessible by 1) the user, 2) a pre-specified KYC administrator account, and 3) a persistence partner/custodian that the user or app administrator selects. |
| 2. | KYC Admin | KYC administrator screen for viewing and approving new user (market participant) requests. We plan to use the existing `registrar` process on the Identity pallet. UI is in Angular, with a small chance we may migrate it to Vuejs |
| 3. | Slides |1-3 additional presentation slides for Louise W. Reed, CPA’s currently scheduled talks at CPA conferences regarding blockchain, cryptocurrency, triple-entry accounting and transferring state tax credits.  The additional slides will be added to address why Afloat sees value in being supported by Polkadot’s ecosystem| 

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
