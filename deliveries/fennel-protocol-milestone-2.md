# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Fennel_Protocol.md
* **Milestone Number:** 2

**Context**
Milestone 2 included a new off-chain component of Fennel Protocol as well as on-chain storage and extrinsics for the off-chain components to interface with. This initial wave is comprised of a Rust library that supports both interactions with the chain and with other systems implementing Fennel Protocol's off-chain decentralized features.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE | Unlicense. | 
| 0b. | Documentation | https://github.com/fennelLabs/Fennel-Protocol/wiki, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://fennellabs.com/fennel-lib/fennel_lib/index.html | Documentation is provided both as generated inline documentation and a wiki. | 
| 0c.  | Testing Guide | https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-1| Both automated testing and extrinsics calls are outlined. | 
| 0d. | Docker | https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile, https://github.com/fennelLabs/fennel-lib/blob/master/Dockerfile | Docker Compose is used to run tests, benchmarks, and documentation. | 
| 0e. | Article | https://fennellabs.com/FennelBlog/Milestone-Two/ | Self-hosted announcement article describing the purpose of the material included in this milestone. | 
| 1. | Keypair Creation | https://github.com/fennelLabs/fennel-lib/blob/master/src/rsa_tools/mod.rs, https://github.com/fennelLabs/fennel-lib/tree/master/src/aes_tools, https://github.com/fennelLabs/fennel-lib/blob/master/src/dh_tools/mod.rs | Wrappers for RSA, AES, and Diffie-Hellman cryptographic functions. |
| 2. | Public Key Transmission | https://github.com/fennelLabs/Fennel-Protocol/blob/6a93b9abab9f643b001756597323f4882012714b/pallets/keystore/src/lib.rs#L67 | RSA keys are handled through most of the Keystore module's extrinsics. |
| 3. | Public Key Retrieval | https://github.com/fennelLabs/fennel-lib/blob/master/src/fennel/mod.rs#L153 | Rather than relying on an extrinsic, we offloaded compute for this task to a function provided by our fennel-lib. The given link points to our file containing subxt functions to interact with our RPC. |
| 4. | Encrypted Communciation Channel Negotiation | https://github.com/fennelLabs/fennel-lib/blob/master/src/dh_tools/mod.rs, https://github.com/fennelLabs/Fennel-Protocol/blob/6a93b9abab9f643b001756597323f4882012714b/pallets/keystore/src/lib.rs#L95 | This is split up between the issue_encryption_key extrinsic, storage handlers, and off-chain functions to handle key generation and encryption. |

**Additional Information**
The full repositories for this milestone is hosted at https://github.com/fennelLabs/Fennel-Protocol and https://github.com/fennelLabs/Fennel-Protocol.

We also added a brief discussion of what Fennel Protocol is about in our README, per a suggestion from our last eval.
