# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/daos.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [LICENSE](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/LICENSE-APACHE2) | See **General Notes** | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md#docs](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/README.md#docs), [documents](https://github.com/daos-org/daos/tree/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/document) | - | 
| 0c. | Testing | <ul><li>[x] </li></ul> | [README.md#test](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/README.md#test), [dico-chain/docs/emergency-module.md](https://github.com/DICO-TEAM/dico-chain/blob/aba75877e0bc6828e2d347d25c9d198e964b9cd4/docs/emergency%20module.md) | - |
| 0d. | Benchmarking | <ul><li>[x] </li></ul> | [README.md#benchmarking](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/README.md#benchmarking) | - |
| 1. | Substrate Module: Emergency | <ul><li>[ ] </li></ul> | [/emergency/src/lib.rs](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/emergency/src/lib.rs) | See **General Notes** |
| 2. | DAO Template Development Manual | <ul><li>[x] </li></ul> | [/document/create-your-DAO-template.md](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/document/create%20your%20DAO%20template.md) | - |
<br/>

## General Notes v1 - Dec 7, 2022

I managed to test the emergency module, setting up a local testnet following the README in this [repo](https://github.com/DICO-TEAM/dico-chain), and then following the guide [here](https://github.com/DICO-TEAM/dico-chain/blob/aba75877e0bc6828e2d347d25c9d198e964b9cd4/docs/emergency%20module.md). 

I was able to try almost all the module's functionalities, and also the template is highly customizable (the test was made on a DAO based on the template).

If you run the tests with the coverage, at first it seems to be low, but if you go to inspect the specific file (in this case [`/emergency/src/lib.rs`](https://github.com/daos-org/daos/blob/6aceca275d8dd1a2b2c7ae9ac42c7048a4f78bf9/emergency/src/lib.rs)) you can see it's pretty covered.

I just request minor changes/clarifications about the following deliverables:

### 0a. License
Actually here the problem is really minor, just change the name of the license file from `LICENSE-APACHE2` to `LICENSE` or `LICENSE.md`, for consistency;

### 1. Substrate Module: Emergency
As I said, I was able to use almost all the functionalities shown in the guide, but I can't understand if the function `set_pledge` is working or not. Also, from the guide, seems like it didn't edit the value (the query for `pledgeOf` returns 0, shouldn't it return the value put with `set_pledge`?).

### Other notes
This is optional since it's not part of the deliverables, but I'd add inside the `dico-chain` repo ([here](https://github.com/DICO-TEAM/dico-chain#run-testnet)) the right endpoint for the polkadot.js app connection to the local testnet (`ws://localhost:9946`).