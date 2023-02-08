# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkadotjs-hardware.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Cargo.toml](https://github.com/AstarNetwork/astar-frame/blob/polkadot-v0.9.24/frame/custom-signatures/Cargo.toml), [UI LICENSE](https://github.com/hoonsubin/apps/blob/page/custom-signature/LICENSE) | Apache 2.0 |
| 1. | Ledger API ECDSA signer | <ul><li>[x] </li></ul> | [pallet](https://github.com/AstarNetwork/astar-frame/tree/polkadot-v0.9.24/frame/custom-signatures), [UI](https://github.com/polkadot-js/apps/pull/5903/files) | Implemented using the [Metamask API](https://docs.metamask.io/guide/signing-data.html#signing-data-with-metamask) instead of the Ledger API as specified in the application
| 2. | Improve documentation | <ul><li>[x] </li></ul> | [repo](https://github.com/gluneau/polkadotjs-ecdsa-hardware) | Walkthrough with screenshots. Also published on [Notion](https://astarnetwork.notion.site/Backup-MetaMask-Support-ed399d80c11e4202a056776c20c64370) | Not integrated into Polkadot-js documentation as per the application, only exists separately. Complete walkthrough provided instead of just one paragraph.
| 3. | Demo video | <ul><li>[x] </li></ul> | Attached to polkadot-js [PR](https://github.com/polkadot-js/apps/pull/5903) |

## General Notes

The grant initially comprised support for both Ledger and Trezor, but the team submitted an amendment to limit the scope to Ledger during the evaluation.

This delivery suffered from unusually long delays, both on our and the team's end and took almost 2 years to be accepted from the date it was initially delivered.
Furthermore, it took a long back and forth for the team to acknowledge and address some of the issues raised during the evaluation.
For the full discussion, see the [delivery PR](https://github.com/w3f/Grant-Milestone-Delivery/pull/83).

Although not explicitly mentioned in the application, unit tests are available for the `custom-signatures` pallet, as well as helpful inline documentation in both repos.
The walkthrough guides users step-by-step through signinig a transaction using a Ledger device and submitting it via the delivered polkadot-js apps page.

The feature is available on Astar (though not via the apps portal, as the PR hasn't been merged yet), though as noted in the documentation "users should not use this as their daily driver account".
