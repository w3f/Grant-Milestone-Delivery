# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
- **Milestone:** 3
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.  | License          | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/LICENSE) | Apache 2.0                         |
| 0b.  | Documentation    | <ul><li>[x] </li></ul> | [packages/polkadart](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart/README.md), [packages/polkadart_keyring](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart_keyring/README.md), [packages/substrate_bip39](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/substrate_bip39/README.md) | See also READMEs in other packages |
| 0c.  | Testing Guide    | <ul><li>[x] </li></ul> | [README](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/README.md#documentation-and-tests) | — |
| 0d.  | Docker           | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/docker/Dockerfile) | — |
| 0e.  | Article/Workshop | <ul><li>[x] </li></ul> | [/examples](https://github.com/leonardocustodio/polkadart/tree/8b9122d01d6aab515e2279f68697161c32df1f0f/examples) | Added on request |
| 3a.  | Substrate Uri    | <ul><li>[x] </li></ul> | [packages/substrate_bip39](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/substrate_bip39/lib/crypto_scheme.dart#L109-L143) | — |
| 3b.  | Encrypt/Decrypt  | <ul><li>[x] </li></ul> | [packages/substrate_bip39](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/substrate_bip39/lib/crypto_scheme.dart#L60-L77) | — |
| 3c.  | Ed25519          | <ul><li>[x] </li></ul> | [packages/substrate_bip39](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/substrate_bip39/lib/schemes/ed25519.dart) | — |
| 3e.  | Sign & Verify    | <ul><li>[x] </li></ul> | [packages/polkadart_keyring](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart_keyring/lib/src/keypair.dart#L54-L76) | — |
| 3f.  | Substrate Signed Extensions | <ul><li>[x] </li></ul> | [packages/polkadart](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart/lib/extrinsic/signed_extensions/substrate.dart) | — |
| 3g.  | AssetHub Signed Extensions | <ul><li>[x] </li></ul> | [packages/polkadart](https://github.com/leonardocustodio/polkadart/blob/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart/lib/extrinsic/signed_extensions/asset_hub.dart) | — |
| 3h.  | Transaction Subscriptions   | <ul><li>[x] </li></ul> | [packages/polkadart](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart/lib/apis/author.dart#L25-L41) | — |
| 3i.  | Event Subscriptions         | <ul><li>[x] </li></ul> | [packages/polkadart](https://github.com/leonardocustodio/polkadart/blob/57aee026a5356461a4fbb4cb701c72ad032223b8/packages/polkadart/lib/apis/state.dart#L176-L189) | — |
| 3j.  | Keyring          | <ul><li>[x] </li></ul> | [packages/polkadart_keyring](https://github.com/leonardocustodio/polkadart/tree/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart_keyring) | — |
| 3k.  | Crypto           | <ul><li>[x] </li></ul> | [packages/polkadart](https://github.com/leonardocustodio/polkadart/tree/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart/lib/substrate) | — |
| 3l.  | Tests            | <ul><li>[x] </li></ul> | [packages/polkadart_keyring](https://github.com/leonardocustodio/polkadart/tree/9b7ec8ef2e48b5d629a49c0f4276e4904b30f69e/packages/polkadart_keyring/test) | — |
| 3m.  | Pub.dev          | <ul><li>[x] </li></ul> | [pub.dev](https://pub.dev/publishers/polkadart.dev/packages) | — |


## General Notes

- Good inline docs
- Thorough tests
- Everything worked out of the box