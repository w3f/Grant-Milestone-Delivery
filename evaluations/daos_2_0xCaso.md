# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/daos.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/LICENSE-APACHE2) | See **General Notes** | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md#docs](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/README.md#docs), [documents](https://github.com/daos-org/daos/tree/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/document) | - | 
| 0c. | Testing | <ul><li>[x] </li></ul> | [README.md#test](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/README.md#test), [dico-chain/docs/emergency-module.md](https://github.com/DICO-TEAM/dico-chain/blob/75daadb61ab1e4562775e136e1b952d86979b228/docs/emergency%20module.md) | - |
| 0d. | Benchmarking | <ul><li>[x] </li></ul> | [README.md#benchmarking](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/README.md#benchmarking) | - |
| 1. | Substrate Module: Emergency | <ul><li>[x] </li></ul> | [/emergency/src/lib.rs](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/emergency/src/lib.rs) | See **General Notes** |
| 2. | DAO Template Development Manual | <ul><li>[x] </li></ul> | [/document/create-your-DAO-template.md](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/document/create%20your%20DAO%20template.md) | - |
<br/>

## General Notes v2 - Dec 9, 2020
The minor LICENSE issue was fixed, and the `set_pledge` function was always working, probably I had some problem in my end with the polkadot.js app (tests show the function works [here](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/emergency/src/tests.rs#L85)). They also updated the README in the `dico-chain` repo (that was optional). Great work!

<br/>

## General Notes v1 - Dec 7, 2022

I managed to test the emergency module, setting up a local testnet following the README in this [repo](https://github.com/DICO-TEAM/dico-chain), and then following the guide [here](https://github.com/DICO-TEAM/dico-chain/blob/aba75877e0bc6828e2d347d25c9d198e964b9cd4/docs/emergency%20module.md). 

I was able to try almost all the module's functionalities, and also the template is highly customizable (the test was made on a DAO based on the template).

If you run the tests with the coverage, at first it seems to be low, but if you go to inspect the specific file (in this case [`/emergency/src/lib.rs`](https://github.com/daos-org/daos/blob/0af568d526a161e66d4eb4b3e4b2f974ae4fd2f5/emergency/src/lib.rs)) you can see it's pretty covered.

I just request minor changes/clarifications about the following deliverables:

### 0a. License
Actually here the problem is really minor, just change the name of the license file from `LICENSE-APACHE2` to `LICENSE` or `LICENSE.md`, for consistency;

### 1. Substrate Module: Emergency
As I said, I was able to use almost all the functionalities shown in the guide, but I can't understand if the function `set_pledge` is working or not. Also, from the guide, seems like it didn't edit the value (the query for `pledgeOf` returns 0, shouldn't it return the value put with `set_pledge`?).

### Other notes
This is optional since it's not part of the deliverables, but I'd add inside the `dico-chain` repo ([here](https://github.com/DICO-TEAM/dico-chain#run-testnet)) the right endpoint for the polkadot.js app connection to the local testnet (`ws://localhost:9946`).