# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/native-bitcoin-vaults.md
* **Milestone Number:** 1

**Context** (optional)

We recorded a [video summary and demonstration](https://youtu.be/OYKvt-xir3E) for this milestone.

As mentioned in the proposal, we weren't sure if the `no_std` version of [Bitcoin Dev Kit](https://github.com/bitcoindevkit) would be ready, so we used an offchain worker in the meantime. The `no_std` versions of the dependencies (`rust-bitcoin` and `rust-miniscript`) have been developed but are not yet released. Once those are released, BDK will updated and we will integrate those changes into our solution. You can follow progress with this [open issue](https://github.com/bitcoindevkit/bdk/issues/205).

Also, instead of using Spectre Desktop or Caravan as the signer, we are using the mobile app [BlueWallet](https://github.com/BlueWallet). It is open source React Native and available on both app stores. This was a bit more difficult because it required the additional deliverable of encoding the payloads as QR codes. However, we believe it is an overall better fit, more secure, and improved UX over the other options.

We also originally intended to use the identity pallet `additional` mapping for storing the `xpub`. However, updating this field drops verification judgements from the identity, which of course would not be a desired effect. Instead, we save the `xpub` with our pallet. There is no impact to user experience.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | License | https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE  | MIT |
| 2. | Pallet | https://github.com/hashed-io/hashed-substrate/tree/main/pallets/nbv-storage | The code has inline documentation and each repository has a detailed README with build, run, and test instructions. |
| 3. | Video | https://youtu.be/OYKvt-xir3E  | 15-minute video details the milestone delivery and demonstrates the software  |
| 4. | BDK Integration | https://github.com/hashed-io/bdk-services | Web services that are invoked via offchain-worker; will be replaced with `no_std` version of BDK in future release |  
| 5. | Set `xpub` | https://github.com/hashed-io/hashed-substrate/blob/main/pallets/nbv-storage/src/lib.rs#L349 | User can set an `xpub` associated to their account within the NBV pallet |  
| 6. | Output Descriptors | https://github.com/hashed-io/bdk-services/blob/master/README.md#generate-output-descriptors | Generate output descriptor (vault/wallet) based on the selected Vault Signers |  
| 7. | Generate Receiving Addresses | https://github.com/hashed-io/bdk-services/blob/master/README.md#generate-new-address | NBV will be able to generate receiving addresses for a vault (can be generated on web or mobile) |  
| 8. | List and View vaults | https://github.com/hashed-io/native-bitcoin-vaults-UI | NBV client will show a list of treasuries/vault, their labels, and the eligible signers |  
| 9. | Pass to Signer | https://github.com/hashed-io/nbv-ur-codec | Web client communicates with BlueWallet mobile app via QR codes |  

**Repositories** 
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Pallet | [Hashed Substrate](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/nbv-storage) | Rust
| Bitcoin Services | [BDK Services](https://github.com/hashed-io/bdk-services) | Rust |
| Client | [Web App](https://github.com/hashed-io/native-bitcoin-vaults-UI) | Quasar/Vuejs |
| QR Codec | [QR Encoding Package](https://github.com/hashed-io/nbv-ur-codec) | Javascript |


**Additional Information**

We will create more extensive and polished end user documentation with the full product release (next milestone).