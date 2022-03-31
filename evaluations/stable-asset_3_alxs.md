# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/stable-asset.md
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | License |<ul><li>[x] </li></ul> | [LICENSE](https://github.com/nutsfinance/stable-asset/blob/2f6619b15d04879127586f791a33d40f86360ab8/LICENSE) | Apache 2.0 |
| 1 | Documentation |<ul><li>[x] </li></ul> | [README](https://github.com/nutsfinance/stable-asset/tree/2f6619b15d04879127586f791a33d40f86360ab8#nuts-stable-asset-pallet), [user documentation](https://github.com/nutsfinance/stable-asset-docs), [live](https://nutsfinance.gitbook.io/stable-asset/) | Inline comments/rustdocs are sparse and were only added in reponse to feedback
| 2 | Substrate module: Stable Asset Substrate module |<ul><li>[x] </li></ul> | [collect yield code](https://github.com/nutsfinance/stable-asset/blob/2f6619b15d04879127586f791a33d40f86360ab8/lib/stable-asset/src/lib.rs#L1168-L1207), [update balance](https://github.com/nutsfinance/stable-asset/blob/2f6619b15d04879127586f791a33d40f86360ab8/lib/stable-asset/src/lib.rs#L1139-L1158) |
| 3 | Testing |<ul><li>[x] </li></ul> | [unit tests](https://github.com/nutsfinance/stable-asset/blob/2f6619b15d04879127586f791a33d40f86360ab8/lib/stable-asset/src/tests.rs), [integration tests](https://github.com/AcalaNetwork/Acala/blob/969878303c90f9a019df32b017e87c76c6b5d73e/runtime/integration-tests/src/stable_asset.rs) | Extensive test coverage
| 4 | Docker |<ul><li>[x] </li></ul> | [Dockerfile](https://github.com/nutsfinance/stable-asset/blob/2f6619b15d04879127586f791a33d40f86360ab8/Dockerfile) | Fixed in response to feedback

## General Notes

Team addressed compilation issues both using docker and cargo and improved documentation after delivery.

The deliverables weren't submitted as described by the team, even though an amendment had been accepted just a few weeks ago that significantly reduced the scope.
Overall it felt a bit as if they just wanted to move on but squeeze in one more milestone.

That being said, the team was happy to make improvements and very quick to reply, and the extent of testing is commendable and IMO justifies the price.
