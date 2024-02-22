# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
* **Milestone Number:** 4
 
**Context**


This milestone was focused on allowing any developer using Dart and/or Flutter to be able to use sr25519 and ecdsa to create a wallet, sign extrinsics or messages, and send them to the chain. We have also add support for multisig, custom RPC calls and custom signed extensions.

**Little example**

You can create a new Dart project running `dart create demo` and load the following dependencies on `pubspec.yaml`
```yaml
  convert: ^3.1.1
  polkadart: ^0.4.0
  polkadart_cli: ^0.2.2
  polkadart_keyring: ^0.4.0
  polkadart_scale_codec: ^1.2.0
  ss58: ^1.1.2
  substrate_bip39: ^0.3.0
  substrate_metadata: ^1.2.0
```

Run `dart pub get` to fetch the dependencies and at the end of the file, you may add the RPC endpoint that you want to connect like the following:
```yaml
polkadart:
  output_dir: lib/generated
  chains:
    astar: wss://rpc.astar.network
    westend: wss://westend-rpc.polkadot.io
    assethub: wss://westend-asset-hub-rpc.polkadot.io
```

Now you can use our generator to fetch the metadata, parse it, and generate all typed classes with the following command:
`dart run polkadart_cli:generate -v`

After that, you can play with most of the stuff made on this milestone with the following snippet that can be placed under `bin/demo.dart` and running `dart run bin/demo.dart`
```dart
CODE WILL COME HERE
```


**Deliverables**

|Number|Deliverable|Link|Notes|
|:---: |  ---      | -- |---  |
| 0a.  | License       | [Apache 2.0](https://github.com/leonardocustodio/polkadart/blob/main/packages/sr25519/LICENSE) |
| 0c.  | Testing Guide | [Example](https://github.com/leonardocustodio/polkadart/tree/main/examples) |
| 0d.  | Docker        | [Docker](https://github.com/leonardocustodio/polkadart/blob/main/docker-compose.yml) |
| 4a.  | sr25519 | [sr25519](https://github.com/leonardocustodio/polkadart/tree/main/packages/sr25519) |
| 4b.  | Ecdsa/Secp256k1  | [ecdsa](https://github.com/leonardocustodio/polkadart/tree/main/packages/secp256k1_ecdsa) |
| 4c.  | Sign & Verify    | [Sign&Verify](https://github.com/leonardocustodio/polkadart/blob/main/packages/sr25519/example/example.dart) |
| 4e.  | Custom RPC | [RPC](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/lib/provider.dart) |
| 4f.  | Custom Signed Extensions | [SignedExtension](https://github.com/leonardocustodio/polkadart/blob/main/examples/bin/extrinsic_demo.dart) |
| 4g.  | Multisig Account | [MultiSig](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/example/multisig_example.dart) |
| 4h.  | Tests            | [Tests](https://github.com/leonardocustodio/polkadart/tree/main/packages/sr25519/test) |
| 4i.  | Pub.dev          | [Pub](https://pub.dev/publishers/polkadart.dev/packages) |


**Additional Information**

Documentation & guides & examples are spread through each package readme, you can find the link for each one here:

https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart
https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_cli
https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_keyring
https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_scale_codec
https://github.com/leonardocustodio/polkadart/tree/main/packages/secp256k1_ecdsa
https://github.com/leonardocustodio/polkadart/tree/main/packages/sr25519
https://github.com/leonardocustodio/polkadart/tree/main/packages/ss58
https://github.com/leonardocustodio/polkadart/tree/main/packages/substrate_bip39
https://github.com/leonardocustodio/polkadart/tree/main/packages/substrate_metadata
