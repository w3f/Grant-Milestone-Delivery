# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/native-bitcoin-vaults.md
* **Milestone Number:** 2

**Context** (optional)

We recorded a [video demonstration](https://us02web.zoom.us/rec/share/E4aqWkYK7n_f9tbmf5BNTqGMPW7NECOmkcY18iK5ZttHfWNLZeZ0JlAN3S-zpFOB.0QgU4C_WrzCEUS9Z?startTime=1665605589000) for this milestone.


**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE  | MIT |
| 0b. | Documentation | [Technical](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/nbv-storage) Documentation and a step by step [Tutorial](https://github.com/hashed-io/hashed-network-portal-ui/blob/dev/docs/tutorials/native_bitcoin_vault_user_guide.md) on how to use NBV| The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |
| 0c. | Testing Guide | https://github.com/hashed-io/bdk-services/blob/master/src/hbdk/mod.rs#L457, https://github.com/hashed-io/hashed-substrate/blob/main/pallets/nbv-storage/src/tests.rs  | Tests are build directly into Rust projects, integration tests shown in video described below |
| 0d. | Docker | https://github.com/hashed-io/bdk-services/blob/master/Dockerfile | Dockerfile for `bdk_services` is used to deploy to Kubernetes |
| 0e. | Video & Article | Videos in Spanish and [English](https://us02web.zoom.us/rec/share/E4aqWkYK7n_f9tbmf5BNTqGMPW7NECOmkcY18iK5ZttHfWNLZeZ0JlAN3S-zpFOB.0QgU4C_WrzCEUS9Z?startTime=1665605589000) and the articles in Spanish and English | NA |
| 1. | PSBT Signing	 | https://github.com/hashed-io/bdk-services | Users can sign with BlueWallet and it will support other signers soon. |  
| 2. | Transaction Broadcast | https://github.com/hashed-io/hashed-network-portal-ui/blob/dev/docs/tutorials/native_bitcoin_vault_user_guide.md#refFinalizeProposal |   |  
| 4. | Hosted Instances	 | https://hashed-portal-dev.hashed.systems/ | Connects to our solochain testnet and the BTC mainnet  |  
| 6. | Support & Maintenance |  | NA  |  


**Repositories** 
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Pallet | [Hashed Substrate](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/bitcoin-vaults) | Rust
| Bitcoin Services | [BDK Services](https://github.com/hashed-io/bdk-services) | Rust |
| Client | [Web App](https://github.com/hashed-io/native-bitcoin-vaults-UI) | Quasar/Vuejs |
| QR Codec | [QR Encoding Package](https://github.com/hashed-io/nbv-ur-codec) | Javascript |


**Additional Information**


