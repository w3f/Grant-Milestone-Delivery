# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
* **Milestone Number:** 3
* 
**Context** (optional)

This milestone was focused on allowing any developer using Dart and/or Flutter to create a wallet, create extrinsics, sign extrinsics, send the extrinsic to the chain as well as listen to the events it generates.

**Deliverables**

|Number|Deliverable|  Link |  Notes                   |
|:---: |  ---      |    --     |     ---                    |
| 0a.  | License          | https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart_keyring/LICENSE | Apache 2.0                         |
| 0b.  | Documentation    |  | We will provide markdown documentation of how to install and use the API. |
| 0c.  | Testing Guide    |  | We will provide sample scripts on how to use it. |
| 0d.  | Docker           | https://github.com/leonardocustodio/polkadart/blob/main/docker-compose.yml | We will provide a Dockerfile(s) that can be used to test the PoC. |
| 0e.  | Article/Workshop |   | We will publish an example flutter project using the library to explain what was done and how to use it. |
| 3a.  | Substrate Uri    | https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/substrate_bip39/lib/crypto_scheme.dart#L109-L143  | Implement Substrate's standard derivation format that applies to seeds and mnemonics. |
| 3b.  | Encrypt/Decrypt  | https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/substrate_bip39/lib/crypto_scheme.dart#L60-L77  | Use Substrate's Bip39 password to encrypt/decrypt seeds and mnemonics. |
| 3c.  | Ed25519          | https://github.com/leonardocustodio/polkadart/tree/main/packages/substrate_bip39  | Support Ed25519 signatures and key derivation |
| 3e.  | Sign & Verify    |  https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart_keyring/lib/src/keypair.dart#L54-L76 | Sign and verify messages using ed25519 keypairs |
| 3f.  | Substrate Signed Extensions   | https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/lib/extrinsic/signed_extensions/substrate.dart | Support substrate's signed extensions |
| 3g.  | AssetHub Signed Extensions |  https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/lib/extrinsic/signed_extensions/asset_hub.dart  | Support AssetHub's signed extensions |
| 3h.  | Transaction Subscriptions     | https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart/lib/apis/author.dart#L25-L41 | Support transaction subscription |
| 3i.  | Event Subscriptions           |  https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart/lib/apis/state.dart#L176-L189 | Support runtime event subscription |
| 3j.  | Keyring          | https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_keyring/lib  | Create a package that manage a set of keys in a consistent environment |
| 3k.  | Crypto           | https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart/lib/substrate |  Utilities needed for signing, hash and encode/decode messages |
| 3l.  | Tests            | https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_keyring/test  | Unit tests for deliverables above  |
| 3m.  | Pub.dev          | https://pub.dev/publishers/polkadart.dev/packages  | Publish to pub.dev                 |

**Additional Information**
