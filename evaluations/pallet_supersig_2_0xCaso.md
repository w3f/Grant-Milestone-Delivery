# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/pallet_supersig.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/kabocha-network/pallet_supersig/blob/4b1e349e9d76750d7fd025056cdb5ef5fef85996/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Medium tutorial](https://decentration.medium.com/setup-for-testing-supersig-ui-m2-fac2f7ab20a3), [docs](https://wiki.kabocha.network/docs/Supersig/introduction) |  |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [`pallet_supersig/README#test`](https://github.com/kabocha-network/pallet_supersig/blob/f3b4842b971df00287f1ec6e2dcc41c431bce799/README.md#test),<br/>[`pallet_supersig/src/tests`](https://github.com/kabocha-network/pallet_supersig/tree/polkadot-v0.9.28/src/tests) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker guide](https://github.com/decentration/substrate-supersig-template/tree/6fbce881471ef6b5730bb8bf4b68f2ee20f58025#run-in-docker) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Medium article](https://decentration.medium.com/supersig-like-multisig-but-with-superpowers-86b9ce0412f6), [Supersig video tutorial](https://www.loom.com/share/dbcaa6319b1a4644aacb709aa0e38783) |  |
| 1. | Substrate module: pallet_supersig | <ul><li>[ ] </li></ul> | [`pallet_supersig/src/lib.rs`](https://github.com/kabocha-network/pallet_supersig/blob/f3b4842b971df00287f1ec6e2dcc41c431bce799/src/lib.rs) | See **General Notes** |
| 2. | Substrate-supersig template Chain | <ul><li>[x] </li></ul> | [`substrate-supersig-template`](https://github.com/decentration/substrate-supersig-template/tree/6fbce881471ef6b5730bb8bf4b68f2ee20f58025) |  |
| 3. | Polkadot JS Apps UI Fork | <ul><li>[x] </li></ul> | [`apps`](https://github.com/decentration/apps/blob/492fd2e01e5c34f046a2fc71433d29779f4b2f57/README.md) |  |
<br/>

## General Notes v1 - Feb 6, 2023
The delivery is really good. The team made a pallet and also edited the PolkadotJS UI to make the interaction easier (it shows the Supersigs created, how many members they have, ...).

The tutorial is straightforward and easy to follow. The team also made a video tutorial, and described its steps with screenshots in the docs, which are very helpful.

I note the following things:

### 0c. Testing Guide
- In the Medium tutorial, there is a misformatting in the code snippets: sometimes there is only a "-" instead of "--", like in the `docker run ...` command or in `cargo build - release`. Finally, the command `/target/release/node-template - dev` should have a `.` as first character (other than the `-` issue).
This is really minor but it would be perfect to fix it.
- Also, I've seen that `pallet_supersig/rpc/src/lib.rs` is not tested, so you could add tests for that (if you believe they're useful).
- May you add some super-quick example of how to test the functions that you didn't mention in the tutorial (like `deleteSupersig` and `leaveSupersig`)?

### 1. Substrate module: pallet_supersig
The functionalities should work, I just noted one thing: if I try to perform a tx with a Supersig through a member, and it's not funded, after the proposal passes the tx fails, but there is no way to see the failure. This because the last voting, which makes the proposal pass, gets through (and it's visible from the UI), but then the tx itself fails and the UI won't show it (neither in the **Network** page). Is there a way to let this see to the user?
