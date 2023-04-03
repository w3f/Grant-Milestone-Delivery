# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DistributedKeyManagement.md
* **Milestone Number:** 2

**Context:**
The primary purpose of this milestone was to develop a reference implementation for the SWORD key management scheme.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- |------------- |
| 0a. | License | https://github.com/KryptikApp/swordExample/blob/main/LICENSE.md ||
| 0b. | Documentation ||Inline documentation is included throughout the repository.||
| 0c. | Testing and Testing Guide | https://github.com/KryptikApp/swordExample/blob/main/tests/features.test.ts||
| 0d. | Docker | |We decided not to include a docker file. The functionality of the application can be verified by the demo itself and our continous integration tests.|
| 0e. | Article |  https://sword.kryptik.app/guide   ||
| 1. | Vault Module | https://github.com/KryptikApp/swordExample/blob/main/src/handlers/wallet/vaultHandler.ts | |
| 2. | Encryption Module | https://github.com/KryptikApp/swordExample/blob/main/components/wallet/LockWalletCard.tsx#L30 | This link references code that enables encryption via user generated passwords. The rest of the encryption module is included within the vault interface.|
| 3. | Share Module | https://github.com/KryptikApp/swordExample/blob/7626b1c049480ea6fdf74acb58e3b58ef4e761b7/src/helpers/wallet/index.ts#L52 ||
| 4. | Sync Module | https://github.com/KryptikApp/swordExample/blob/main/src/handlers/sync/index.ts |This modeule allows anyone to share a wallet between devices in under 60 seconds. A demo video is included in the 'additional information' section below.|
| 5. | Web Deployment | https://sword.kryptik.app/ | |

**Additional Information**
Thank you for the opportunity to work on this grant. I would encourage you to try the [web deployment](https://sword.kryptik.app/) to understand how SWORD works from a user's perspective. 

I also filmed a [sync demo](https://vimeo.com/802871414/c2cd6980c1), which shows the sync feature in action.

