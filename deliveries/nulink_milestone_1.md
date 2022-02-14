# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**


* **PR Link:** https://github.com/w3f/Grants-Program/pull/455
* **Milestone Number:** 1




| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/NuLink-network/nulink-chain/blob/main/LICENSE | Apache License |
| 0b. | Documentation |https://github.com/NuLink-network/nulink-chain/blob/main/README.md| documentation |
| 0c. | Testing |https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/tests.rs| all tests |
| 1. | nuproxy pallet | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs | The nuproxy pallet is mostly used for retrieving the information of stakers and bonding workers from NuCypher contracts in Ethereum to the Polkadot parachain. |
| 2. | register_watcher | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L159| This function would record the public key of the watcher nodes and would be executed when the mirror pallet first deployed. |
| 3. | ValidateWatchers | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L177| This function would check if the signature in updating request is come from the watchers. |
| 4. | UpdateStakers | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L175| This function would provide the functionality of updating the information of current stakers and bonding workers of Ursulas network. |
| 5. | GetActiveStakers | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L295| This function would return a list of active stakers by random sampling. |

