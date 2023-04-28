# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
* **Milestone Number:** 2

## Context

This milestone focuses on the implementation on the network layer and communication between Polkadart's Client and Substrate's Node.

### Packages
We published a pre-release version of all packages on [pub.dev](https://pub.dev/publishers/cryptize.co/packages),
Polkadart is composed of 5 packages:

- [https://pub.dev/packages/polkadart](https://pub.dev/packages/polkadart/versions/0.1.0-pre.2)
- [https://pub.dev/packages/polkadart_cli](https://pub.dev/packages/polkadart_cli/versions/0.1.0-pre.1)
- [https://pub.dev/packages/polkadart_scale_codec](https://pub.dev/packages/polkadart_scale_codec/versions/1.1.0-pre.2)
- [https://pub.dev/packages/ss58](https://pub.dev/packages/ss58/versions/1.1.0-pre.1)
- [https://pub.dev/packages/substrate_metadata](https://pub.dev/packages/substrate_metadata/versions/1.1.0-pre.1)

## Quickstart

1 - Create a new project 
```bash
dart create -t console polkadart-milestone-2
cd polkadart-milestone-2
```
2 - Add [polkadart](https://pub.dev/packages/polkadart/versions/0.1.0-pre.2), [ss58](https://pub.dev/packages/ss58/versions/1.1.0-pre.1) and [polkadart_cli](https://pub.dev/packages/polkadart_cli/versions/0.1.0-pre.1) dependencies to `pubspec.yaml`
```yaml
# ...
dependencies:
  polkadart: ^0.1.0-pre.2
  ss58: ^1.1.0-pre.1

dev_dependencies:
  polkadart_cli: ^0.1.0-pre.1

polkadart:
  output_dir: bin/generated
  chains:
    polkadot: wss://rpc.polkadot.io
```
3 - Install dependencies
```bash
dart pub get
```
4 - Download polkadot metadata and generate static dart types:
```bash
dart run polkadart_cli:generate -v
```
4 - Replace the contents of `bin/polkadart_milestone_2.dart` with following sample code:
```dart
import 'package:ss58/ss58.dart' show Address;
import './generated/polkadot/polkadot.dart' show Polkadot;

void main(List<String> arguments) async {
  final Polkadot polkadot = Polkadot.url(Uri.parse('wss://rpc.polkadot.io'));

  // Account from SS58 address
  final account = Address.decode('19t9Q2ay58hMDaeg6eeBhqmHsRnc2jDMV3cYYw9zbc59HLj');

  // Retrieve Account Balance
  final accountInfo = await polkadot.query.system.account(account.pubkey);
  print('Balance: ${accountInfo.data.free}');

  // Retrieve Runtime Version
  final runtimeVersion = await polkadot.rpc.state.getRuntimeVersion();
  print('Runtime Version: ${runtimeVersion.specVersion}');

  await polkadot.disconnect();
}
```
5 - For execute the code above, just run:
```bash
dart run
```

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence  |  APACHE 2.0 [LICENSE](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/LICENSE) |
| 0b. | Documentation  |  [polkadart-scale-codec](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart_scale_codec/README.md) / [ss58](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/ss58/README.md) / [substrate-metadata](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/substrate_metadata) |
| 0c. | Testing Guide | [README.md](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/README.md) | ...|
| 0d. | Docker | [polkadart/docker/Dockerfile](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/docker/Dockerfile) | for running all tests, simply clone the repo then run `docker compose up`| 
| 1a. | RPC | [packages/polkadart/lib/provider.dart#L62-L110](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/lib/provider.dart#L62-L110) | ...| 
| 1b. | Websockets | [packages/polkadart/lib/provider.dart#L112-L299](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/lib/provider.dart#L112-L299) | ...| 
| 1c. | Tests | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart_scale_codec/test) / [ss58](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/ss58/test) / [substrate-metadata](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/substrate_metadata/test) / [polkadart](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/test) / [polkadart_cli](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart_cli/test/typegen) |  | 
