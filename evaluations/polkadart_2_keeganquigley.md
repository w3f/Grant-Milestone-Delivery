# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
- **Milestone:** 2
- **Evaluation by:** keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/rankanizer/polkadart/blob/main/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/blob/main/packages/polkadart_scale_codec/README.md) / [ss58](https://github.com/rankanizer/polkadart/blob/main/packages/ss58/README.md) / [ss58-codec](https://github.com/rankanizer/polkadart/blob/main/packages/ss58_codec/README.md) / [substrate-metadata](https://github.com/rankanizer/polkadart/blob/main/packages/substrate_metadata/README.md) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [instructions](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/README.md) | |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/rankanizer/polkadart/blob/main/docker/Dockerfile) | 
| 1a. | RPC | <ul><li>[x] </li></ul> | [source code](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/lib/provider.dart#L62-L110) | |
| 1b. | Websockets | <ul><li>[x] </li></ul> | [source code](https://github.com/rankanizer/polkadart/blob/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/lib/provider.dart#L112-L299) | 
| 1c. | Tests | <ul><li>[x] </li></ul> | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/tree/main/packages/polkadart_scale_codec/test) / [ss58](https://github.com/rankanizer/polkadart/tree/main/packages/ss58/test) / [substrate-metadata](https://github.com/rankanizer/polkadart/tree/main/packages/substrate_metadata/test/metadata) / [polkadart](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart/test) / [polkadart_cli](https://github.com/rankanizer/polkadart/tree/d112181c8769a8e74d3eff57a46940a3dbf7370c/packages/polkadart_cli/test/typegen)

# General Notes

Unit tests all pass. Running Dockerfile currently gives an error.
