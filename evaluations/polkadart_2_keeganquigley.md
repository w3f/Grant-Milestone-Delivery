# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
- **Milestone:** 2
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/rankanizer/polkadart/blob/main/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/blob/main/packages/polkadart_scale_codec/README.md) / [ss58](https://github.com/rankanizer/polkadart/blob/main/packages/ss58/README.md) / [ss58-codec](https://github.com/rankanizer/polkadart/blob/main/packages/ss58_codec/README.md) / [substrate-metadata](https://github.com/rankanizer/polkadart/blob/main/packages/substrate_metadata/README.md) | Looks good. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [instructions](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/README.md) | Okay. |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/rankanizer/polkadart/blob/main/docker/Dockerfile) | Okay.
| 1a. | RPC | <ul><li>[x] </li></ul> | [source code](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/lib/provider.dart#L62-L110) | Okay. |
| 1b. | Websockets | <ul><li>[x] </li></ul> | [source code](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/lib/provider.dart#L112-L299) | Okay. |
| 1c. | Tests | <ul><li>[x] </li></ul> | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/tree/main/packages/polkadart_scale_codec/test) / [ss58](https://github.com/rankanizer/polkadart/tree/main/packages/ss58/test) / [substrate-metadata](https://github.com/rankanizer/polkadart/tree/main/packages/substrate_metadata/test/metadata) / [polkadart](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/test) / [polkadart_cli](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart_cli/test/typegen) | Tests all pass.

# General Notes

Source code is well documented. This will come in handy for Dart devs who want to dabble in Substrate!

Unit tests all pass. Running Dockerfile currently gives an error. **UPDATE:** Docker fixed and now successfully runs tests:

```dart
00:07 +2: All tests passed!                                                                                                                                                                            
polkadart-tests-1  | polkadart: SUCCESS
polkadart-tests-1  | --------------------------------------------------------------------------------
polkadart-tests-1  | polkadart_cli:
polkadart-tests-1  | Package coverage is currently active at version 1.6.3.
polkadart-tests-1  | Resolving dependencies...
polkadart-tests-1  | The package coverage is already activated at newest available version.
polkadart-tests-1  | To recompile executables, first run `dart pub global deactivate coverage`.
polkadart-tests-1  | Installed executables collect_coverage, format_coverage and test_with_coverage.
polkadart-tests-1  | Activated coverage 1.6.3.
polkadart-tests-1  | Warning: pubspec.yaml has overrides from /root/packages/polkadart_cli/pubspec_overrides.yaml
```
```dart
00:20 +4: All tests passed!                                                                                                                                                                            
polkadart-tests-1  | polkadart_cli: SUCCESS
polkadart-tests-1  | --------------------------------------------------------------------------------
polkadart-tests-1  | polkadart_scale_codec:
polkadart-tests-1  | Package coverage is currently active at version 1.6.3.
polkadart-tests-1  | Resolving dependencies...
polkadart-tests-1  | The package coverage is already activated at newest available version.
polkadart-tests-1  | To recompile executables, first run `dart pub global deactivate coverage`.
polkadart-tests-1  | Installed executables collect_coverage, format_coverage and test_with_coverage.
polkadart-tests-1  | Activated coverage 1.6.3.
```
```dart
00:55 +267: All tests passed!                                                                                                                                                                          
polkadart-tests-1  | polkadart_scale_codec: SUCCESS
polkadart-tests-1  | --------------------------------------------------------------------------------
polkadart-tests-1  | ss58:
polkadart-tests-1  | Package coverage is currently active at version 1.6.3.
polkadart-tests-1  | Resolving dependencies...
polkadart-tests-1  | The package coverage is already activated at newest available version.
polkadart-tests-1  | To recompile executables, first run `dart pub global deactivate coverage`.
polkadart-tests-1  | Installed executables collect_coverage, format_coverage and test_with_coverage.
polkadart-tests-1  | Activated coverage 1.6.3.
```
```dart
00:12 +45: All tests passed!                                                                                                                                                                           
polkadart-tests-1  | ss58: SUCCESS
polkadart-tests-1  | --------------------------------------------------------------------------------
polkadart-tests-1  | substrate_metadata:
polkadart-tests-1  | Package coverage is currently active at version 1.6.3.
polkadart-tests-1  | Resolving dependencies...
polkadart-tests-1  | The package coverage is already activated at newest available version.
polkadart-tests-1  | To recompile executables, first run `dart pub global deactivate coverage`.
polkadart-tests-1  | Installed executables collect_coverage, format_coverage and test_with_coverage.
polkadart-tests-1  | Activated coverage 1.6.3.
polkadart-tests-1  | Warning: pubspec.yaml has overrides from /root/packages/substrate_metadata/pubspec_overrides.yaml
```


