# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
- **Milestone:** 4
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.  | License       | <ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/leonardocustodio/polkadart/blob/main/packages/sr25519/LICENSE) | |
| 0c.  | Testing Guide | <ul><li>[ ] </li></ul>| [Example](https://github.com/leonardocustodio/polkadart/tree/main/examples) | Example isn't working. |
| 0d.  | Docker        | <ul><li>[ ] </li></ul>| [Docker](https://github.com/leonardocustodio/polkadart/blob/main/docker-compose.yml) | It seems to have a memory leak problem on the tests. |
| 4a.  | sr25519 | <ul><li>[ ] </li></ul>| [sr25519](https://github.com/leonardocustodio/polkadart/tree/main/packages/sr25519) | Could you provide the explanation and the conclusion of the research? |
| 4b.  | Ecdsa/Secp256k1  | <ul><li>[x] </li></ul>| [ecdsa](https://github.com/leonardocustodio/polkadart/tree/main/packages/secp256k1_ecdsa) | | 
| 4c.  | Sign & Verify    | <ul><li>[x] </li></ul>| [Sign&Verify](https://github.com/leonardocustodio/polkadart/blob/main/packages/sr25519/example/example.dart) |  |
| 4e.  | Custom RPC | <ul><li>[x] </li></ul>| [RPC](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/lib/provider.dart) | |
| 4f.  | Custom Signed Extensions | <ul><li>[ ] </li></ul>| [SignedExtension](https://github.com/leonardocustodio/polkadart/blob/main/examples/bin/extrinsic_demo.dart) | Example isn't working. |
| 4g.  | Multisig Account | <ul><li>[ ] </li></ul>| [MultiSig](https://github.com/leonardocustodio/polkadart/blob/main/packages/polkadart/example/multisig_example.dart) | Example isn't working. |
| 4h.  | Tests            | <ul><li>[ ] </li></ul>| [Tests](https://github.com/leonardocustodio/polkadart/tree/main/packages/sr25519/test) | It seems to have a memory leak problem on the tests. |
| 4i.  | Pub.dev          | <ul><li>[x] </li></ul>| [Pub](https://pub.dev/publishers/polkadart.dev/packages) | |

## Evaluation V1

### sr25519 and Sign & Verify 

The [application](https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md#milestone-4-) especify a research to decide the best way to support sr25519. Could you provide the explanation and the conclusion of this research? 

The example provided to sr25519 and Sign & Verify worked.

```dart
void main() {
 final msg = utf8.encode('hello friends');
 final signingCtx = utf8.encode('example');


 final merlin.Transcript signingTranscript =
     Sr25519.newSigningContext(signingCtx, msg);


 final merlin.Transcript verifyTranscript =
     Sr25519.newSigningContext(signingCtx, msg);


 final keypair = Sr25519.generateKeyPair();


 final (priv, pub) = (keypair.secretKey, keypair.publicKey);


 final Signature sig = priv.sign(signingTranscript);


 final (ok, _) = pub.verify(sig, verifyTranscript);


 assert(ok == true);


 print(ok);
}
```

```
user@localhost:~/Documents/test/demo$ dart run bin/demo.dart
true

```

### Custom Signed Extensions

I tried to run the example, but I received an error related to balance.

```
user@localhost:~/Documents/polkadart/examples$ dart run bin/extrinsic_demo.dart
Sr25519 Wallet: 5Cabw1zd5pK8CbuPFHQYX7Ac9BVSumfw5BkiNQajstFdYDJq
Ecdsa Wallet: 5Hft7aSusEA1vFX43VZFbKmxiiujRnP7RUk87B66VVzqbpyY
Destination: 5GP3LivcsffRZXZhJ6EMxe4kYXYdhs3aLjgHFz3Ap2iLxcSw
Block Number: 19775146
Payload: 040400beecf0681cf7e50992bdd7016c956c2b667fcd69d6143b0daec416501758623700a502000080610f0018000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423efc8ab83daa13ca693d71f69a02c229102986891fd16969f1e86a2e4dccef9e80
Signature: e8a5ed2ff482106a8bf83ad2451605f897816d7da163bf2dda3ca9f84014502526d3a11a377d63c69e1306a761d62bacaa2b28c47c7340b6e1511042999b6680
sr25519 wallet extrinsic: 2d02840016cd6ab0878d5078dd14fe714e87ea77e77583cec4cbb9d95f2f06db2a86df5f01e8a5ed2ff482106a8bf83ad2451605f897816d7da163bf2dda3ca9f84014502526d3a11a377d63c69e1306a761d62bacaa2b28c47c7340b6e1511042999b6680a5020000040400beecf0681cf7e50992bdd7016c956c2b667fcd69d6143b0daec416501758623700
Payload: 040400beecf0681cf7e50992bdd7016c956c2b667fcd69d6143b0daec416501758623700a502000080610f0018000000e143f23803ac50e8f6f8e62695d1ce9e4e1d68aa36c1cd2cfd15340213f3423efc8ab83daa13ca693d71f69a02c229102986891fd16969f1e86a2e4dccef9e80
Signature: 20537461a72984f03a574024ac3ce78fdeca101e3375bff5c9987c62b41526bb6507eaf0c639b5b1bbd2f51bf297e1c462729ae540630aca9344c66e364085e200
ecdsa wallet extrinsic: 31028400f80148e326bf3826758422b95c9806105ba5f82dbb210abafb1b2e8e249e620e0220537461a72984f03a574024ac3ce78fdeca101e3375bff5c9987c62b41526bb6507eaf0c639b5b1bbd2f51bf297e1c462729ae540630aca9344c66e364085e200a5020000040400beecf0681cf7e50992bdd7016c956c2b667fcd69d6143b0daec416501758623700
Unhandled exception:
Exception: {code: 1010, message: Invalid Transaction, data: Inability to pay some fees (e.g. account balance too low)}
#0  	AuthorApi.submitExtrinsic (package:polkadart/apis/author.dart:17:7)
<asynchronous suspension>
#1  	main (file:///home/user/Documents/polkadart/examples/bin/extrinsic_demo.dart:115:18)
<asynchronous suspension>
```

With balance, I received two different errors:

```
ecdsa wallet extrinsic: 31028400f80148e326bf3826758422b95c9806105ba5f82dbb210abafb1b2e8e249e620e02fa51cc85e9e75bd606ca8f3356a6689eafcea1151b69a9eafbf2b0200be650dc43b335c16dc4e58c6c5041cc58413d9c277d0828fc18c1e2beda1243bc85bd7800b5030000040400beecf0681cf7e50992bdd7016c956c2b667fcd69d6143b0daec416501758623700
Unhandled exception:
Exception: {code: 1010, message: Invalid Transaction, data: Transaction is outdated}
#0  	AuthorApi.submitExtrinsic (package:polkadart/apis/author.dart:17:7)
<asynchronous suspension>
#1  	main (file:///home/user/Documents/polkadart/examples/bin/extrinsic_demo.dart:115:18)
<asynchronous suspension>
```

```
ecdsa wallet extrinsic: 31028400f80148e326bf3826758422b95c9806105ba5f82dbb210abafb1b2e8e249e620e02c383f561a6f66f423623d1e764fe76cc4d9d14b23d4d81cd2a997ce6a59937403da7ee39a750ca80433cd11304a31d745574a78739ce705a1f924ed724a5b8240015000000040400beecf0681cf7e50992bdd7016c956c2b667fcd69d6143b0daec416501758623700
Unhandled exception:
Exception: {code: 1010, message: Invalid Transaction, data: Transaction has a bad signature}
#0  	AuthorApi.submitExtrinsic (package:polkadart/apis/author.dart:17:7)
<asynchronous suspension>
#1  	main (file:///home/user/Documents/polkadart/examples/bin/extrinsic_demo.dart:115:18)
<asynchronous suspension>
```

### Multisig Account

In this example, I needed to add the package `polkadart_cli`.

```
user@localhost:~/Documents/polkadart/packages/polkadart$ dart run polkadart_cli:generate -v
Could not find package `polkadart_cli` or file `polkadart_cli:generate`
```

After that, I needed to add the 'polkadart' section.

```
user@localhost:~/Documents/polkadart/packages/polkadart$ dart run polkadart_cli:generate -v
Building package executable... (11.2s)
Built polkadart_cli:generate.
Unhandled exception:
ConfigException: Failed to extract config from the 'pubspec.yaml' file.
Can't find 'polkadart' section.
#0  	new PubspecConfig.fromYAML (package:polkadart_cli/src/config/pubspec_config.dart:45:7)
#1  	new PubspecConfig.fromPubspecFile (package:polkadart_cli/src/config/pubspec_config.dart:30:26)
#2  	main (file:///home/user/.pub-cache/hosted/pub.dev/polkadart_cli-0.4.2/bin/generate.dart:52:32)
#3  	_delayEntrypointInvocation.<anonymous closure> (dart:isolate-patch/isolate_patch.dart:295:33)
#4  	_RawReceivePort._handleMessage (dart:isolate-patch/isolate_patch.dart:184:12) 
```

After that, I received an error related to balance. 

```
user@localhost:~/Documents/polkadart/packages/polkadart$ dart run example/multisig_example.dart
Unhandled exception:
Exception: {code: 1010, message: Invalid Transaction, data: Inability to pay some fees (e.g. account balance too low)}
#0  	AuthorApi.submitExtrinsic (package:polkadart/apis/author.dart:17:7)
<asynchronous suspension>
#1  	Multisig.submitExtrinsic (package:polkadart/multisig/multisig.dart:421:12)
<asynchronous suspension>
#2  	Multisig._createAndSubmitPayload (package:polkadart/multisig/multisig.dart:128:24)
<asynchronous suspension>
#3  	Multisig.createAndFundMultisig (package:polkadart/multisig/multisig.dart:26:7)
<asynchronous suspension>
#4  	main (file:///home/user/Documents/polkadart/packages/polkadart/example/multisig_example.dart:26:28)
<asynchronous suspension>
```

I couldn't find the seed or the address to give some balance. Could you help me with that?

### Tests

I tried to run the tests using Docker. All tests passed until the tests in the package substrate_metadata killed the program.

```
polkadart-tests-1  | substrate_metadata:
polkadart-tests-1  | Killed
polkadart-tests-1  |
polkadart-tests-1  |
02:06 +13583: test/chains/kusama/spec_version_test.dart: Spec Versions Test init spec version file                                                                                                 	--------------------------------------------------------------------------------
polkadart-tests-1  |
polkadart-tests-1  | $ melos exec
polkadart-tests-1  |   └> dart test --coverage="coverage"
polkadart-tests-1  |  	└> FAILED (in 1 packages)
polkadart-tests-1  |     	└> substrate_metadata (with exit code 137)
polkadart-tests-1  |
polkadart-tests-1  | melos run test
polkadart-tests-1  |   └> dart run melos exec --scope="${SCOPE:-*}" -c 1 --fail-fast -- 'dart test --coverage="coverage"'
polkadart-tests-1  |  	└> FAILED
polkadart-tests-1  | ScriptException: The script test failed to execute.
polkadart-tests-1 exited with code 1
```

I ran again, monitoring the resources. When the substrate_metadata tests started, memory usage increased until use all the memory. I stopped the test because it had frozen my computer before. It seems to be a memory leak problem or do I need more memory to run these tests?

![Captura de tela de 2024-03-01 08-59-04](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/4313a5cf-65c2-483e-be8a-2fc3692b15bd)

![Captura de tela de 2024-03-01 09-00-05](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/0928dce3-9bb6-4e48-96b1-bc8efbe56a36)


