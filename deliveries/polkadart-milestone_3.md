# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
* **Milestone Number:** 3
 
**Context**

This milestone was focused on allowing any developer using Dart and/or Flutter to create a wallet, create extrinsics, sign extrinsics, send the extrinsic to the chain as well as listen to the events it generates.

**Deliverables**

|Number|Deliverable|Link|Notes|
|:---: |  ---      | -- |---  |
| 0a.  | License          | [Apache 2.0](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart_keyring/LICENSE) |   |
| 0b.  | Documentation    | -- |  |
| 0c.  | Testing Guide    | -- |  |
| 0d.  | Docker           | [Docker](https://github.com/leonardocustodio/polkadart/blob/main/docker-compose.yml) |  |
| 0e.  | Article/Workshop | --  |  |
| 3a.  | Substrate Uri    | [Substrate URI](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/substrate_bip39/lib/crypto_scheme.dart#L109-L143)  |  |
| 3b.  | Encrypt/Decrypt  | [Encrypt](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/substrate_bip39/lib/crypto_scheme.dart#L60-L77)  |  |
| 3c.  | Ed25519          | [Ed25519](https://github.com/leonardocustodio/polkadart/tree/main/packages/substrate_bip39)  |   |
| 3e.  | Sign & Verify    | [Sign](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart_keyring/lib/src/keypair.dart#L54-L76) |  |
| 3f.  | Substrate Signed Extensions | [Signed Extensions](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/lib/extrinsic/signed_extensions/substrate.dart) |  |
| 3g.  | AssetHub Signed Extensions | [AssetHub](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/lib/extrinsic/signed_extensions/asset_hub.dart)  |  |
| 3h.  | Transaction Subscriptions     | [Transactions](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart/lib/apis/author.dart#L25-L41) |   |
| 3i.  | Event Subscriptions           | [Events]( https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart/lib/apis/state.dart#L176-L189) |   |
| 3j.  | Keyring          | [Keyring](https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_keyring/lib)  |   |
| 3k.  | Crypto           | [Crypto](https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart/lib/substrate) |   |
| 3l.  | Tests            | [Tests](https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_keyring/test)  |   |
| 3m.  | Pub.dev          | [Pub](https://pub.dev/publishers/polkadart.dev/packages)  |   |

**Additional Information**
