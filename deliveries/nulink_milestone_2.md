# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**


* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/NuLink.md
* **Milestone Number:** 2



| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/NuLink-network/nulink-chain/blob/main/LICENSE | Apache License |
| 0b. | Documentation |https://github.com/NuLink-network/nulink-chain/blob/main/README.md| documentation |
| 0c. | Testing |https://github.com/NuLink-network/nulink-chain/blob/main/pallets/policy/src/tests.rs| all tests |
| 1. | policy pallet | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/policy/src/lib.rs| The policy management pallet will manage the policy fees and distribute. |
| 2. | CreatePolicy | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/policy/src/lib.rs#L123| This function would lock the fee for a specific policy for a locking period. |
| 3. | RevokePolicy | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/policy/src/lib.rs#L134| This function would revoke a specific policy and refund the unconsumed policy fee depending on the locking period. |
| 4. | Mint | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L183 https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L188| This function would computes and transfers the policy fee to the staker’s account. |
| 5. | Withdraw | https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L201  https://github.com/NuLink-network/nulink-chain/blob/main/pallets/nuproxy/src/lib.rs#L211| The staker could call this function to claim the reward fee. |
