# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/188
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Apache License 2.0 |  <ul><li>[x] </li></ul> | [Unlicense node](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/LICENSE), [Unlicense front-end](https://github.com/DNFT-Team/dnft-substrate-front/blob/master/LICENSE)  | Unlicense instead of apache which is fine  | 
| 0b.        | Documentation   | <ul><li>[ ] </li></ul> | [README](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/README.md) | Readme, but no introduction video |
| 0c.        | Testing Guide   | <ul><li>[ ] </li></ul> | []() | No unit-test coverage (min. 70%) to ensure functionality and robustness |
| 0d. | Article/Tutorial | <ul><li>[ ] </li></ul> | | Only readme, no additional article or tutorial |
| 1a.        | Node Repo       | <ul><li>[ ] </li></ul> | [dnft-node](https://github.com/DNFT-Team/dnft-substrate-node) | Separate repo would be nice, I’m unable to compile it (see error below)  |
| 2a.        | Pallet_nft      | <ul><li>[ ] </li></ul> | [nft1155](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft1155), [nft2006](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft2006), [nft721](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/nft721) | No unit tests, very little inline documentation, I never heard of 2006 before, see https://github.com/ethereum/EIPs/pull/2006  |
| 2b.        | Pallet_tax      | <ul><li>[x] </li></ul> | [tax](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/tax/src/lib.rs) | Very basic POC, no test no inline documentation. Let's you only mint nfts with tax, no option to add a tax later.  |
| 2c.        | Pallet_swap     | <ul><li>[x] </li></ul> | [swap_amm](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/swap_amm/src/lib.rs), [swap_auction](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/swap_auction/src/lib.rs), [swap_orderbook](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/pallets/swap_orderbook/src/lib.rs) | swap mechanism is implemented, but very basic |
| 2d.        | Pallet_dao      | <ul><li>[x] </li></ul> | [dao](https://github.com/DNFT-Team/dnft-substrate-node/tree/master/pallets/dao) | Very basic POC, no test no inline documentation |
| 3.         | Front End       | <ul><li>[ ] </li></ul> | [dnft-substrate-front](https://github.com/DNFT-Team/dnft-substrate-front), http://mvp.dnft.world/#/home | The UI compiles, but the extension doesn’t seem to connect to it, nor can I do anything with it.  |
| 4.         | Docker Image    | <ul><li>[ ] </li></ul> | [docker](https://github.com/DNFT-Team/dnft-substrate-node/blob/master/docker-compose.yml) | No UI integration |


## General Notes

In general the delivery has a lot of issues, but given the grant size and the amount of pallets/UI, I don’t think it needs to be perfect. However, the delivery needs to at least fulfill the contract or an amendment needs to be signed. 

**Make Build error:**

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