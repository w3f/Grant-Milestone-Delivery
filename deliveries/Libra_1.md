# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Libra.md
* **Milestone Number:** 1
* **Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/atscaletech/libra/blob/main/LICENSE| Apache License 2.0 |
| 0b. | Documentation | https://github.com/atscaletech/libra#libra https://github.com/atscaletech/libra/tree/main/pallets/lrp#lrp-protocol https://github.com/atscaletech/libra/tree/main/pallets/currencies-registry#currencies-registry| General concepts explanation, setup and run node guide, and public functions specs|
| 0c. | Testing |https://github.com/atscaletech/libra/blob/main/pallets/lrp/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/currencies-registry/src/tests.rs| Test cases of LRP pallet and currencies registry pallet|
| 0d. | Live testnet | wss://rpc.libra.atscale.xyz | Deployed testnet of the libra network| 
| 1. | Substrate module: LRP pallet | https://github.com/atscaletech/libra/blob/main/pallets/lrp | The p2p payment pallet allows the funding to be locked and released to protect both buyer and seller | 
| 2.  | Substrate module: Currencies pallet | https://github.com/atscaletech/libra/blob/main/pallets/currencies-registry | Currency pallet allow registrar create and remove currencies and merchant can choose to accept the currencies. | 
| 3.  | Substrate based chain | https://github.com/atscaletech/libra/blob/main/runtime/src/lib.rs | The runtime integrated with lrp and currencies registry  |
