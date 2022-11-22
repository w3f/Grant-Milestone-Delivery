# Evaluation

- **Status:** In progress.
- **Application Document:** [Green Lemon Protocol](https://github.com/w3f/Grants-Program/blob/master/applications/GreenLemon.md) 
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/LICENSE)|  |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)| Looks good. |
| 0c. | Testing Guide  |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)| All steps were eventually successful. See notes below. |
| 0d. | Article  |<ul><li>[x] </li></ul>|[Article](https://medium.com/@wuyahuang/green-lemon-protocol-ii-an-anonymous-nft-solution-917046a8f1ef), [Video](https://www.youtube.com/watch?v=2cP22UEVMF0)| Looks good. |
| 1. | (ink!)Smart contracts: Anonymous NFT  |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/ink/blob/main/contracts/erc721/lib.rs)| Successfully deployed `ERC721` and `verifier` contracts. See notes below.|
| 2. | (Node.js)Relayer service |<ul><li>[x] </li></ul>| [Link](https://github.com/GreenLemonProtocol/ink/blob/main/http/index.js) | Successfully deployed `relayer` contract. See notes below.|
## General Notes

### Documentation

Docs were somewhat improved upon request. Great job on inline comments.

### Testing Guide

1. Ran into issue with `substrate-greenlemon-node` where my mac wouldn't recognize the unix executable file. 
<br>UPDATE: release was fixed by adding new .zip file.

2. Ran into Zokrates compatibility issue:
```rust
sh ./circuits/build.sh
Compiling withdraw.zok

Compilation failed:

withdraw.zok:7:35
	Visibility modifiers on arguments are only allowed on the entrypoint function

withdraw.zok:7:55
	Visibility modifiers on arguments are only allowed on the entrypoint function

withdraw.zok:7:94
	Visibility modifiers on arguments are only allowed on the entrypoint function
mv: abi.json: No such file or directory
mv: rename out to ../build/out: No such file or directory
```
UPDATE: Issue fixed.

3. Every time there is a system change (such as a reboot) I have to re-add Zokrates to my path with `export PATH=$PATH:/Users/keeganquigley/.zokrates/bin`; I would suggest adding this to the testing instructions, otherwise the scripts will fail.

4. Unit tests are successful for all functions, however I noticed that there isn't one for `transfer_from` in the `ERC721` contract. Consider adding it if it makes sense.

5. Minor improvement suggestion for Step 2: take out "baseUri" so that it's clear that just the string needs to be entered:
```rust
https://raw.githubusercontent.com/GreenLemonProtocol/assets/main/nft
```
### Scripts

All js scripts run successfully. Index service starts successfully.

## Contracts

`cargo +nightly clippy` generates quite a few warnings for each of the contracts. Please take a look at these to see which ones make sense to fix. You can also use the command below to attempt to fix them automatically:

`cargo doc --open` works to generate all HTML docs.

`cargo +nightly clippy –fix`

### Relayer

`Deposit`, `RegisterPublicKeys`, `Withdrawal`, `Execute` functions all work manually and with automated tests.

### Verifier

`verify` function works manually and with automated tests.

### ERC721

`mint`, `burn`, `transfer`, `approve` functions all work manually and with automated tests.

**Please note:** No security audits have been conducted as part of this evaluation.
