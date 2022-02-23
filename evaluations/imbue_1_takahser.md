# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/b6d9f58b475e270b472e1b680994061d2d7d1e24/applications/imbue_network.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [Apache](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/LICENSE) | Apache License |
| 0b. | Dapp |<ul><li>[x] </li></ul>| [dapp repo](https://github.com/ImbueNetwork/dapp/tree/e74de870dca4f6cc73015648db13a1a4151e47b0) | See [dapp feedback](#dapp-feedback) |
| 0c. | Documentation |<ul><li>[x] </li></ul>| [dapp documentation](https://github.com/ImbueNetwork/dapp/blob/e74de870dca4f6cc73015648db13a1a4151e47b0/README.md), [collator documentation](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/README.md) | See [documentation feedback](#documentation-feedback) |
| 0d. | Docker |<ul><li>[x] </li></ul>| [collator docker-compose.yml](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/scripts/docker-compose.yml), [dapp docker-compose.yml](https://github.com/ImbueNetwork/dapp/blob/e74de870dca4f6cc73015648db13a1a4151e47b0/docker-compose.yml) | Docker compose files to run the collator and the dapp (frontend, api and db). |
| 1 | Substrate module: Grants pallet |<ul><li>[x] </li></ul>| [proposal pallet](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/pallets/proposals/src/lib.rs) | The proposal pallet allows for onchain adding of proposals, starting of funding rounds, contributing of funds to a proposal while the funding round is active, voting on milestones by the contributors and the withdrawal of the funds for any completed milestones in accordance to their weights. I tested all this functionality on https://polkadot.js.org/apps/ using their deployed `testnet.imbue.network` node.  |
| 0a (milestone 2) | CI/CD |<ul><li>[x] </li></ul>| [Config file for GitHub actions](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/.github/workflows/collator_actions.yml) | This delivery was planned for milestone 2 but implemented early. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Documentation feedback

- Documentation for running the dapp and the collator exist.
- Inline documentation is sufficient.
- For me, when checking the [frontend logs](https://github.com/ImbueNetwork/imbue/blob/b3c8926f45fc0f89841430cf8d193b5125bf8d77/README.md?plain=1#L50) rather than the url, nothing was displayed in the terminal. Nevertheless, the (polkadotjs wallet) frontend was accessible.
- In the (polkadotjs wallet) frontend the _Extrinsics_ link was missing in the _Developer_ menu. I'm not sure why that is. You might want to double-check if all parameters are set correctly since it works on your `testnet.imbue.network` test node.

### Dapp Feedback

- Unfortunately I was not able to start the dapp on my Macbook running on an M1 chip due to [python/docker incompatability issues](https://github.com/w3f/Grant-Milestone-Delivery/pull/348#issuecomment-1027779753) that can't be blamed on the grantee. However, I can confirm that I managed to run it on a legacy 2012 Macbook.
- The dapp itself allows for the submission of proposals using the polkadotjs browser extension.

