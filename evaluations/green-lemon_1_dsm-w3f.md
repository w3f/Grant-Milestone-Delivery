# Evaluation

- **Status:** In Progress
- **Application Document:** [Green Lemon Protocol](https://github.com/w3f/Grants-Program/blob/master/applications/GreenLemon.md) 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/LICENSE)| ok |
| 0b  | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)| Minor improvements. See General Notes. |
| 0c | Testing Guide  |<ul><li>[x] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/README.md)| Minor improvements. See General Notes. |
| 0d | Article  |<ul><li>[x] </li></ul>|[Article](https://medium.com/@wuyahuang/green-lemon-protocol-an-anonymous-nft-solution-2fad91cc8f48), [Video](https://www.youtube.com/watch?v=etVIPgOjFNg)| ok |
| 1 | (ink!)Smart contracts: Anonymous NFT  |<ul><li>[ ] </li></ul>|[Link](https://github.com/GreenLemonProtocol/dksap-polkadot/blob/main/erc721/lib.rs)| Possible missing requirement, also minor improvements. See General Notes. |

## General Notes

### 1. License
Ok.

### 2. User Documentation / Testing guide:
In the build contract step, I needed to add nightly builds to my runtime env. Maybe this should be warned to the user because is not the default runtime env:

`rustup component add rust-src --toolchain nightly-x86_64-unknown-linux-gnu`

I also got a problem with the version of binaryen since with the command suggested “apt-get install binaryen” the version installed was 91 and the required is 99. I needed to install it manually, so it would be better to suggest this way of installing in the manual, download from the link below and add wasm-opt executable path to the PATH variable:

`https://github.com/WebAssembly/binaryen/releases`


### 3. Automated Testing:

```running 5 tests
test erc721::tests::base_uri_works ... ok
test erc721::tests::mint ... ok
test erc721::tests::burn ... ok
test erc721::tests::approve_and_transfer ... ok
test erc721::tests::register_public_keys ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.05s
```

Comments about testing coverage:

94.96% coverage, 264/278 lines covered.

total_supply function not covered.

Error handling paths not covered.

### 4. Static Analysis
`cargo +nightly clippy`

`warning: erc721 (lib) generated 46 warnings`

Please look into the warnings and decide which makes sense to fix. You can also use the command below to fix them automatically:

`cargo +nightly clippy –fix`

### 5. Scripts

All ran ok.

### 6. Code documentation.
It has a file header documentation and a single comment for each method. Would be better if it has method parameters and also return values documentation. I was not able to generate methods documentation with cargo doc. 

### 7. Other.

 The M1 specification mentions those methods: Approval, ApprovalForAll, clear_approval, and set_approval_for_all. However the methods ApprovalForAll and set_approval_for_all don’t seem to be present in the code. Could you please explain the reason for that?

Just one doubt, the solution proposed relies on a relayer to send transactions. How this could affect the overall solution proposed? In practice, would be a single centralized relayer or a decentralized (or multiple) one?



