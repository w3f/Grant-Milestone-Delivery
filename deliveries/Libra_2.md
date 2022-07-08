# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Libra.md
* **Milestone Number:** 2
* **Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/atscaletech/libra/blob/main/LICENSE| Apache License 2.0 |
| 0b. | Documentation | https://github.com/atscaletech/libra/tree/main/pallets/identities#identities https://github.com/atscaletech/libra/tree/main/pallets/resolvers#resolvers-network  https://github.com/atscaletech/libra/tree/main/pallets/dispute-resolution#dispute-resolution | The documentation of identities, resolvers network and dispute resolution pallets. |
| 0c. | Testing |https://github.com/atscaletech/libra/blob/main/pallets/identities/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/resolvers/src/tests.rs https://github.com/atscaletech/libra/blob/main/pallets/dispute-resolution/src/tests.rs | The test cases of identities, resolvers network and dispute resolution pallets.|
| 0d. | Live testnet | wss://rpc.libra.atscale.xyz | Deployed testnet of the libra network| 
| 1. | Substrate module: Identities | https://github.com/atscaletech/libra/blob/main/pallets/identities | Identities pallet implementation. | 
| 2.  | Substrate module: Resolvers Network | https://github.com/atscaletech/libra/blob/main/pallets/resolvers | Resolver's application and nomination logic. |
| 3.  | Substrate module: Dispute Resolution | https://github.com/atscaletech/libra/blob/main/pallets/dispute-resolution | Dispute resolution implementation. | 
| 4.  | Substrate based chain | https://github.com/atscaletech/libra/blob/main/runtime/src/lib.rs | Integrate identity pallet, resolvers pallet and dispute resolution pallet with current chain.  |
