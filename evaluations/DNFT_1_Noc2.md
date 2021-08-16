# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/188
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Apache License 2.0 |  <ul><li>[x] </li></ul> | [Unlicense node](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/LICENSE), [Unlicense front-end](https://github.com/DNFT-Team/dnft-substrate-front/blob/master/LICENSE), [Unlicense node v2](https://github.com/DNFT-Team/dnft-chain/blob/master/LICENSE) | Unlicense instead of apache which is fine  | 
| 0b.        | Documentation   | <ul><li>[x] </li></ul> | [README](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/README.md), [DNFT Protocol Introduction Video](https://www.youtube.com/watch?v=HkQorjfe4Z8), [DNFT Substrate MVP](https://www.youtube.com/watch?v=_vHdjrVKNkg) | Readme, no mockups, but this isn't necessary since the UI is part of the delivery and the video contains some designs. Initially no introduction video  |
| 0c.        | Testing Guide   | <ul><li>[ ] </li></ul> | [Readme](https://github.com/DNFT-Team/dnft-chain#42test) | No unit-test coverage (min. 70%) to ensure functionality and robustness |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [gitbook](https://dnft.gitbook.io/dnft/) | **06.07.2021:** Only readme, no additional article or tutorial, **16.06.2021:** GitBook instead of article which is fine |
| 1a.        | Node Repo       | <ul><li>[x] </li></ul> | [dnft-node](https://github.com/DNFT-Team/dnft-substrate-node), [dnft-chain](https://github.com/DNFT-Team/dnft-chain) | **06.07.2021:** Separate repo would be nice, I’m unable to compile it (see error below), **16.06.2021:** New dnft-chain repo compiles  |
| 2a.        | Pallet_nft      | <ul><li>[x] </li></ul> | [nft1155](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft1155), [nft2006](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft2006), [nft721](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft721) | No unit tests, very little inline documentation, I never heard of 2006 before, see https://github.com/ethereum/EIPs/pull/2006  |
| 2b.        | Pallet_tax      | <ul><li>[x] </li></ul> | [tax](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/tax/src/lib.rs) | Very basic POC, no tests, no inline documentation. Let's you only mint nfts with tax, no option to add a tax later, no unit tests  |
| 2c.        | Pallet_swap     | <ul><li>[x] </li></ul> | [swap_amm](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/swap_amm/src/lib.rs), [swap_auction](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/swap_auction/src/lib.rs), [swap_orderbook](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/swap_orderbook/src/lib.rs) | swap mechanism is implemented, but very basic |
| 2d.        | Pallet_dao      | <ul><li>[x] </li></ul> | [dao](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/dao) | Very basic POC, no test no inline documentation |
| 3.         | Front End       | <ul><li>[x] </li></ul> | [dnft-app](https://github.com/DNFT-Team/dnft-app), [dnft-substrate-front](https://github.com/DNFT-Team/dnft-substrate-front), http://mvp.dnft.world/#/home | **06.07.2021:** The UI compiles, but the extension doesn’t seem to connect to it, nor can I do anything with it, **16.06.2021:** New repo, UI connects to extension.   |
| 4.         | Docker Image    | <ul><li>[x] </li></ul> | [docker](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/docker-compose.yml) | -|


## General Notes

In general the delivery had initially a lot of issues, but the team kept working on it. Overall it’s still far from perfect and the UI isn’t very user friendly, but it’s almost according to the contract. 

**Make Build error 06.07.21:**

<pre><font color="#C01C28"><b>error</b></font><b>:</b> failed to run custom build command for `node-template-runtime v3.0.0 (/home/david/source/web3/evaluation/dnft/dnft-substrate-node/runtime)`

Caused by:
  process didn&apos;t exit successfully: `/home/david/source/web3/evaluation/dnft/dnft-substrate-node/target/release/build/node-template-runtime-8efacb0940f00b3c/build-script-build` (exit status: 1)
  --- stdout
  <font color="#A2734C"><b>Information that should be included in a bug report.</b></font>
  <font color="#A2734C"><b>Executing build command:</b></font> &quot;rustup&quot; &quot;run&quot; &quot;nightly-2020-10-05&quot; &quot;cargo&quot; &quot;-Zfeatures=build_dep&quot; &quot;rustc&quot; &quot;--target=wasm32-unknown-unknown&quot; &quot;--manifest-path=/home/david/source/web3/evaluation/dnft/dnft-substrate-node/target/release/wbuild/node-template-runtime/Cargo.toml&quot; &quot;--color=always&quot; &quot;--release&quot;
  <font color="#A2734C"><b>Using rustc version:</b></font> rustc 1.49.0-nightly (beb5ae474 2020-10-04)


  --- stderr
  <font color="#C01C28"><b>error</b></font><b>:</b> failed to download `impl-codec v0.5.1`

  Caused by:
    unable to get packages from source

  Caused by:
    failed to parse manifest at `/home/david/.cargo/registry/src/github.com-1ecc6299db9ec823/impl-codec-0.5.1/Cargo.toml`

  Caused by:
    feature `resolver` is required

    consider adding `cargo-features = [&quot;resolver&quot;]` to the manifest
<font color="#A2734C"><b>warning</b></font><b>:</b> build failed, waiting for other jobs to finish...
<font color="#C01C28"><b>error</b></font><b>:</b> build failed
make: *** [Makefile:15: run] Error 101
</pre>
