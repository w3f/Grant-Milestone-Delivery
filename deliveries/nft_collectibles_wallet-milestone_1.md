# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/341
* **PR Ammendment:** https://github.com/w3f/Open-Grants-Program/pull/418
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
## Milestone #1 Deliverables

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/GamePowerNetwork/gamepower-module-library/blob/main/LICENSE| All the packages uses the Apache 2.0 license.| 
| 0b.  | Documentation |[Wallet Pallet Documentation](https://gamepowernetwork.github.io/gamepower-module-library/doc/gamepower_wallet/) <br/> [Wallet Example Node Documentation](https://github.com/GamePowerNetwork/gamepower-wallet-template/blob/master/docs/testing-guide.md)| Documentation for the pallet's code is inline and can be built.| 
| 0c. | Testing Guide | [Pallet test instructions](https://github.com/GamePowerNetwork/gamepower-module-library/tree/main/wallet#test-pallet) <br/> [Wallet Example Node Test Guide](https://github.com/GamePowerNetwork/gamepower-wallet-template/blob/master/docs/testing-guide.md#interacting-on-polkadotjsorg)| Unit Tests: <br/> [Wallet Pallet](https://github.com/GamePowerNetwork/gamepower-module-library/blob/main/wallet/src/tests.rs)| 
| 1. | gamepower-wallet | [Gamepower Wallet Pallet Code](https://github.com/GamePowerNetwork/gamepower-module-library/blob/main/wallet/src/lib.rs) | The nft-wallet-pallet has been renamed to gamepower-wallet.| 
| 2. | Substrate Test Chain | [Gamepower Wallet Template](https://github.com/GamePowerNetwork/gamepower-wallet-template) | This template comes with a [Dockerfile](https://github.com/GamePowerNetwork/gamepower-wallet-template/blob/master/Dockerfile) to test the GamePower Wallet pallet.| 
