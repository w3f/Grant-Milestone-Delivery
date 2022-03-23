# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/stable-asset.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | License |<ul><li>[ ] </li></ul> | | Apache 2.0 |
| 1 | Documentation |<ul><li>[ ] </li></ul> | [README](https://github.com/nutsfinance/stable-asset/blob/master/demo/README.md) | Inline comments/rustdocs are sparse and were only added in reponse to feedback
| 2 | Substrate module: Stable Asset Substrate module |<ul><li>[x] </li></ul> | |[collect yield code](https://github.com/nutsfinance/stable-asset/blob/master/lib/stable-asset/src/lib.rs#L1152-L1191), [update balance](https://github.com/nutsfinance/stable-asset/blob/master/lib/stable-asset/src/lib.rs#L1131-L1150) |
| 3 | Testing |<ul><li>[x] </li></ul> | [unit tests](https://github.com/nutsfinance/stable-asset/blob/master/lib/stable-asset/src/tests.rs), [integration tests](https://github.com/AcalaNetwork/Acala/blob/master/runtime/integration-tests/src/stable_asset.rs)| Extensive test coverage
| 4 | Docker |<ul><li>[x] </li></ul> | [Dockerfile](https://github.com/nutsfinance/stable-asset/blob/master/Dockerfile) | Fixed in response to feedback

## General Notes

Team addressed compilation issues and improved documentation after delivery.