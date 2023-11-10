# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
* **Milestone Number:** 3
 
**Context**

This milestone was focused on allowing any developer using Dart and/or Flutter to create a wallet, create extrinsics, sign extrinsics, send the extrinsic to the chain as well as listen to the events it generates.

**Little example**

You can create a new Dart project running `dart create demo` and load the following dependencies on `pubspec.yaml`
```yaml
  convert: ^3.1.1
  polkadart: ^0.2.1
  polkadart_cli: ^0.2.2
  polkadart_keyring: ^0.2.1
  polkadart_scale_codec: ^1.1.2
  ss58: ^1.1.2
  substrate_bip39: ^0.2.0
  substrate_metadata: ^1.1.0
```

Run `dart pub get` to fetch the dependencies and at the end of the file, you may add the RPC endpoint that you want to connect like the following:
```yaml
polkadart:
  output_dir: lib/generated
  chains:
    polkadot: wss://rpc.polkadot.io
```

Now you can use our generator to fetch the metadata, parse it, and generate all typed classes with the following command:
`dart run polkadart_cli:generate -v`

After that, you can play with most of the stuff made on this milestone with the following snippet that can be placed under `bin/demo.dart` and running `dart run bin/demo.dart`
```dart
import 'package:convert/convert.dart';
import 'package:demo/generated/polkadot/polkadot.dart';
import 'package:demo/generated/polkadot/types/sp_runtime/multiaddress/multi_address.dart';
import 'package:polkadart/polkadart.dart'
    show AuthorApi, Extrinsic, Provider, SigningPayload, StateApi;
import 'package:polkadart_keyring/polkadart_keyring.dart';

Future<void> main(List<String> arguments) async {
  final provider = Provider.fromUri(Uri.parse('wss://rpc.polkadot.io'));
  final api = Polkadot(provider);

  final stateApi = StateApi(provider);
  final runtimeVersion = await stateApi.getRuntimeVersion();
  final specVersion = runtimeVersion.specVersion;
  final transactionVersion = runtimeVersion.transactionVersion;

  final block = await provider.send('chain_getBlock', []);
  final blockNumber = int.parse(block.result['block']['header']['number']);
  final blockHash = (await provider.send('chain_getBlockHash', []))
      .result
      .replaceAll('0x', '');
  final genesisHash = (await provider.send('chain_getBlockHash', [0]))
      .result
      .replaceAll('0x', '');

  final keyring = await KeyPair.fromMnemonic(
      "resource mirror lecture smooth midnight muffin position cup pepper fruit vanish also//0"); // This is a random key
  final publicKey = hex.encode(keyring.publicKey.bytes);
  print('Public Key: $publicKey');

  final dest = $MultiAddress().id(hex.decode(publicKey));
  final runtimeCall = api.tx.balances.transferAll(dest: dest, keepAlive: true);
  final encodedCall = hex.encode(runtimeCall.encode());
  print('Encoded call: $encodedCall');

  final payloadToSign = SigningPayload(
    method: encodedCall,
    specVersion: specVersion,
    transactionVersion: transactionVersion,
    genesisHash: genesisHash,
    blockHash: blockHash,
    blockNumber: blockNumber,
    eraPeriod: 64,
    nonce: 0, // Supposing it is this wallet first transaction
    tip: 0,
  );

  final payload = payloadToSign.encode(api.registry);
  print('Payload: ${hex.encode(payload)}');

  final signature = keyring.sign(payload);
  final hexSignature = hex.encode(signature);
  print('Signature: $hexSignature');

  final extrinsic = Extrinsic(
    signer: publicKey,
    method: encodedCall,
    signature: hexSignature,
    eraPeriod: 64,
    blockNumber: blockNumber,
    nonce: 0,
    tip: 0,
  ).encode(api.registry);

  final hexExtrinsic = hex.encode(extrinsic);
  print('Extrinsic: $hexExtrinsic');

  final author = AuthorApi(provider);

  author.submitAndWatchExtrinsic(
      extrinsic, (p0) => print("Extrinsic result: ${p0.type} - {${p0.value}}"));
}
```


**Deliverables**

|Number|Deliverable|Link|Notes|
|:---: |  ---      | -- |---  |
| 0a.  | License          | [Apache 2.0](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart_keyring/LICENSE) |   |
| 0d.  | Docker           | [Docker](https://github.com/leonardocustodio/polkadart/blob/main/docker-compose.yml) |  |
| 0e.  | Example          | [Example project](https://github.com/leonardocustodio/polkadart/tree/main/examples) |  |
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

Documentation & guides & examples are spread through each package readme, you can find the link for each one here:

https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart
https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_cli
https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_keyring
https://github.com/leonardocustodio/polkadart/tree/main/packages/polkadart_scale_codec
https://github.com/leonardocustodio/polkadart/tree/main/packages/ss58
https://github.com/leonardocustodio/polkadart/tree/main/packages/substrate_bip39
https://github.com/leonardocustodio/polkadart/tree/main/packages/substrate_metadata
