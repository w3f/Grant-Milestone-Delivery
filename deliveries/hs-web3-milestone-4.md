# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone.**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/15
* **Milestone Number:** 4

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Extrinsic abstractions | https://github.com/airalab/hs-web3/blob/master/packages/polkadot/src/Network/Polkadot/Extrinsic.hs, https://github.com/airalab/hs-web3/tree/master/packages/polkadot/src/Network/Polkadot/Extrinsic | Extrinsic in Haskell Web3 is a high-level abstraction over substrate unchecked extrinsics and signing extensions. Implemented standard structures and polkadot related staff. | 
| 2. | Extrinsic signers | https://github.com/airalab/hs-web3/blob/master/packages/polkadot/src/Network/Polkadot/Account.hs, https://github.com/airalab/hs-web3/blob/master/packages/polkadot/src/Network/Polkadot/Crypto.hs | The account abstraction and cryptography primitives for Ed25519 and Ecdsa signers implemented. Also supported Ss58Codec and MultiAddress approach used in Polkadot. | 
| 3. | Transactions | https://github.com/airalab/hs-web3/blob/master/packages/polkadot/src/Network/Polkadot/Extrinsic.hs, https://github.com/airalab/hs-web3/blob/master/packages/polkadot/src/Network/Polkadot/Call.hs | Added `new_call` function that uses runtime metadata to build valid serializable Call structure and `sign_and_send` function to sign it with required extensions and pack into serializable Extrinsic structure. | 
| 4. | API `tx` documentation | https://hs-web3.readthedocs.io/en/latest/polkadot_extrinsic.html | Added documentation section. |
| 5. | Runtime transaction examples | https://github.com/airalab/hs-web3/tree/master/examples/polkadot | Added example application that send `transfer` extrinsic. | 
| 6. | Docker image | https://hub.docker.com/repository/docker/akru/hs-web3 | Packed docker image with latest polkadot and hs-web3 to try on. | 
