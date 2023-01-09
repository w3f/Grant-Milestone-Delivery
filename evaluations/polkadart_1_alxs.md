# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadart.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/rankanizer/polkadart/blob/main/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/blob/main/packages/polkadart_scale_codec/README.md) / [ss58](https://github.com/rankanizer/polkadart/blob/main/packages/ss58/README.md) / [ss58-codec](https://github.com/rankanizer/polkadart/blob/main/packages/ss58_codec/README.md) / [substrate-metadata](https://github.com/rankanizer/polkadart/blob/main/packages/substrate_metadata/README.md) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [instructions](https://github.com/rankanizer/polkadart#documentation-and-tests) | |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/rankanizer/polkadart/blob/main/docker/Dockerfile) | Fixed in response to feedback
| 1a. | Scale Codec | <ul><li>[x] </li></ul> | [polkadart_scale_codec](https://github.com/rankanizer/polkadart/tree/main/packages/polkadart_scale_codec) | |
| 1b. | Metadata | <ul><li>[x] </li></ul> | [substrate_metadata](https://github.com/rankanizer/polkadart/tree/main/packages/substrate_metadata) | Ample functionality and tests added in response to feedback
| 1c. | Tests | <ul><li>[x] </li></ul> | [polkadart-scale-codec](https://github.com/rankanizer/polkadart/tree/main/packages/polkadart_scale_codec/test) / [ss58](https://github.com/rankanizer/polkadart/tree/main/packages/ss58/test) / [ss58_codec](https://github.com/rankanizer/polkadart/tree/main/packages/ss58_codec/test) / [substrate-metadata](https://github.com/rankanizer/polkadart/tree/main/packages/substrate_metadata/test/metadata) |

## General Notes

The team delivered more functionality than what was strictly required for this milestone by also providing an implementation for pre-v14 metadata.

The initial delivery was already of great quality, consisting of a well-structured codebase with good test coverage and documentation.
The amount of work carried out for this milestone was most certainly more than that planned in the application.

In reponse to feedback, the team:
- Addressed issues with the Dockerfile
- Added documentation to the README and expanded the previously delivered docs for the individual packages
- Implemented unit tests covering the encoding/decoding of metadata

See the [full conversation](https://github.com/w3f/Grant-Milestone-Delivery/pull/635) in the delivery PR for more details.