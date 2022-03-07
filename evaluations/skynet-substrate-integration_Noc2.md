# Evaluation

- **Status:** In Progress 
- **Application:** https://github.com/w3f/Grants-Program/blob/master/applications/skynet-substrate-integration.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/SkynetLabs/skynet-substrate/blob/main/LICENSE) | Correct License |
| 0b.    | Documentation |  <ul><li>[ ] </li></ul> | [rust docs](https://skynetlabs.github.io/skynet-substrate/skynet_substrate/) | Rust docs plus some inline documentation.  Documentation that explains how a user can use the SDK in a pallet for basic off-chain functionality is missing  |
| 0c.    | Testing Guide |  <ul><li>[x] </li></ul> | [testing](https://github.com/SkynetLabs/skynet-substrate#testing) | Works, only one warning, see below  |
| 0d.    | Sample Node with OCW Pallet & Read-Only Frontend |  <ul><li>[x] </li></ul> | [skynet-substrate-offchain-worker-node](https://github.com/SkynetLabs/skynet-substrate-offchain-worker-node), [skynet-substrate-front-end-example](https://github.com/SkynetLabs/skynet-substrate-front-end-example) | separate node and front-end |
| 1.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Skyfiles) |  <ul><li>[x] </li></ul> | [download.rs](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/download.rs), [upload.rs](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/upload.rs), [skylink.rs](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/skylink.rs) | **Mar 3, 2022:** Rust implementation, but not actually implemented into a pallet **Mar 7, 2022:** Clarified that the pallet implementation isn't necessary |  
| 2.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Registry Entries) |  <ul><li>[x] </li></ul> | [registry.rs](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/registry.rs) | see above |
| 3.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Skylink V2) |  <ul><li>[x] </li></ul> | [skylink.rs](https://github.com/SkynetLabs/skynet-substrate/blob/d7734195ff425e1aca808fac97f21eef4f4593af/src/skylink.rs#L47) | see above |
| 4.     | Skynet Substrate SDK for Off-Chain Worker Pallet (Repin) |  <ul><li>[x] </li></ul> | [pin.rs](https://github.com/SkynetLabs/skynet-substrate/blob/main/src/pin.rs) |  see above  |


## General Notes

**Mar 7, 2022:** The following version works: https://000a09kgtkertvla0vdksg42rihmgg1armrfa245krprc67nrap5pm0.fileportal.org/#/

**Mar 3, 2022:** The deployed version doesn't load for me: https://000a09kgtkertvla0vdksg42rihmgg1armrfa245krprc67nrap5pm0.siasky.net/ (502 Bad Gateway)

**Warnings**

<pre><font color="#26A269"><b>Compiling</b></font> skynet-substrate v0.1.0 (/home/david/source/web3/evaluation/skynet/skynet-substrate)
<font color="#A2734C"><b>warning</b></font><b>: use of deprecated associated function `ed25519_dalek::Signature::new`: use ed25519::Signature::from_bytes instead</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>src/registry.rs:323:75
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>323</b></font> <font color="#2A7BDE"><b>| </b></font>    ed25519_public_key.verify_strict(&amp;message, &amp;ed25519_dalek::Signature::new(signature))?;
    <font color="#2A7BDE"><b>| </b></font>                                                                          <font color="#A2734C"><b>^^^</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(deprecated)]` on by default

<font color="#A2734C"><b>warning</b></font><b>:</b> `skynet-substrate` (lib) generated 1 warning
<font color="#A2734C"><b>warning</b></font><b>:</b> `skynet-substrate` (lib test) generated 1 warning (1 duplicate)
</pre>