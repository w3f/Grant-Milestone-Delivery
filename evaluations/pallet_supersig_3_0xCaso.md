# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/pallet_supersig.md
- **Milestone:** 3
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/kabocha-network/pallet_supersig/blob/5d190de6c59f17836c1dfe6954ffdf703cdccaf7/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Medium profile](https://decentration.medium.com/), [docs](https://wiki.kabocha.network/docs/Supersig/introduction/) |  |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [pallet_supersig/src/tests](https://github.com/kabocha-network/pallet_supersig/tree/5d190de6c59f17836c1dfe6954ffdf703cdccaf7/src/tests), [setup guide](https://decentration.medium.com/setup-for-running-and-testing-supersig-m3-bc1ddfc25f43) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> |  [page-supersig-new-apps#docker](https://github.com/decentration/apps/blob/dff724004b699125938b2aac0680e34c341574ce/README.md#docker) | |
| 0e. | Article  | <ul><li>[x] </li></ul> | [Medium article](https://decentration.medium.com/supersig-like-multisig-but-with-superpowers-86b9ce0412f6), [Loom video](https://www.loom.com/share/55502a7ef152466c95c6d183916d4227) |  |
| 1. | Substrate module: pallet_supersig | <ul><li>[x] </li></ul> | [pallet_supersig](https://github.com/kabocha-network/pallet_supersig/blob/5d190de6c59f17836c1dfe6954ffdf703cdccaf7/src/lib.rs) | |
| 2. | Substrate-supersig template Chain | <ul><li>[x] </li></ul> | [substrate-supersig-template](https://github.com/decentration/substrate-supersig-template/tree/6fbce881471ef6b5730bb8bf4b68f2ee20) | |
| 3. | Polkadot JS Apps UI Fork | <ul><li>[x] </li></ul> | [page-supersig-new-apps](https://github.com/decentration/apps/tree/dff724004b699125938b2aac0680e34c341574ce) | |
<br/>

## General Notes v2 - Feb 27, 2023
The delivery is good! It's an improvement over the previous two milestones. The video was really good to see the actual changes. I had two minor problems with the setup and the tests, but the developer helped me very quickly. 

I only suggest to fix the setup guide on Medium (if it will be useful for other people), just fixing the command from 
```
git checkout page-supersig-new-apps
``` 
to 
```
git checkout page-supersig-apps-new
```
and maybe mentioning the fact (if needed) that it could be useful to run `cargo update` to pull the latest updates from the pallet.