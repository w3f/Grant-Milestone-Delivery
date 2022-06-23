# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/9f7b7d042b9af9bf2bf9e3c24f2ed05fceaf8276/applications/lip_payments.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Documentation |<ul><li>[x] </li></ul> | [Main README](https://github.com/virto-network/virto-node/tree/a4d33b46ea972693a6f0e861525395b5b6933f68), [Payments Pallet README](https://github.com/virto-network/virto-node/blob/a4d33b46ea972693a6f0e861525395b5b6933f68/pallets/payment/README.md) | The Main README contains all neccessary instructions to build, run and test the code. The Payments Pallet README contains information specific to the pallet. |
| 0b. | Article |<ul><li>[x] </li></ul> | [Article](https://github.com/virto-network/website/pull/13) | - |
| 1. | Stand-alone |<ul><li>[x] </li></ul> | [ORML PR](https://github.com/open-web3-stack/open-runtime-module-library/pull/691) | The PR to [ORML](https://github.com/open-web3-stack/open-runtime-module-library) is still open and there were a few minor issues that appears to have been fixed but not reviewed, hence the PR is still open. This is sufficient for the approval of this delivery. |
| 2. | Fee processing |<ul><li>[x] </li></ul> | [FeeHandler implementation](https://github.com/virto-network/virto-node/blob/a4d33b46ea972693a6f0e861525395b5b6933f68/runtime/src/lib.rs#L475-L487), [FeeHandler PR](https://github.com/virto-network/virto-node/pull/161) | The `FeeHandler` allows merchants to charge extra fees. | 
| 3. | Remarks system |<ul><li>[x] </li></ul> | [`create_payment` function with optional `remark` arg](https://github.com/virto-network/virto-node/blob/a4d33b46ea972693a6f0e861525395b5b6933f68/pallets/payment/src/lib.rs#L500), [Pay with remark PR](https://github.com/virto-network/virto-node/pull/163) | Allows for payments with metadata attached. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

When I ran `make dev=yes` initially, it failed:

```bash
$ make dev=yes
rustup target add wasm32-unknown-unknown --toolchain `cat rust-toolchain`
error: toolchain 'nightly-2021-11-07-x86_64-unknown-linux-gnu' is not installed
make: *** [Makefile:27: init] Error 1
```

I was able to fix this issue by installing the `nightly-2021-11-07-x86_64-unknown-linux-gnu` toolchain:

```bash
$ rustup install nightly-2021-11-07-x86_64-unknown-linux-gnu
info: syncing channel updates for 'nightly-2021-11-07-x86_64-unknown-linux-gnu'
info: latest update on 2021-11-07, rust version 1.58.0-nightly (072799443 2021-11-06)
info: downloading component 'cargo'
info: downloading component 'clippy'
info: downloading component 'rust-docs'
 18.8 MiB /  18.8 MiB (100 %)   2.4 MiB/s in  2s ETA:  0s
info: downloading component 'rust-std'
info: downloading component 'rustc'
info: downloading component 'rustfmt'
info: installing component 'cargo'
info: installing component 'clippy'
info: installing component 'rust-docs'
 18.8 MiB /  18.8 MiB (100 %)  15.7 MiB/s in  1s ETA:  0s
info: installing component 'rust-std'
 25.0 MiB /  25.0 MiB (100 %)  19.8 MiB/s in  1s ETA:  0s
info: installing component 'rustc'
 54.4 MiB /  54.4 MiB (100 %)  23.5 MiB/s in  2s ETA:  0s
info: installing component 'rustfmt'
```

