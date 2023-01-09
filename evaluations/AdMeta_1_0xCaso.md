# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/AdMeta.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/AdMetaNetwork/admeta/blob/main/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Rust Docs](https://admetanetwork.github.io/admeta/), [AdMeta Documentation](https://docs.admeta.network/)|  | 
| 0c.  | Testing Guide	| <ul><li>[ ] </li></ul> | [Build and Test](https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4#getting-started), [Test Results in CI](https://github.com/AdMetaNetwork/admeta/actions/workflows/rust.yml), [WebApp Guide](https://docs.admeta.network/guides/how-to-use-admeta-webapp) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker Image](https://hub.docker.com/repository/docker/h4n00/admeta) | |
| 0e. | Article | <ul><li>[x] </li></ul> | [Introduce AdMeta](https://medium.com/@admeta/admeta-an-internet-advertising-revolution-cee26f3421e7) |  |
| 1. | Substrate module: ad	| <ul><li>[x] </li></ul> | [/pallets/ad](https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/pallets/ad) |  |
| 2. | Substrate module: user mock | <ul><li>[x] </li></ul> | [/pallets/user](https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/pallets/user) |  |
| 3. | Substrate solo chain	| <ul><li>[x] </li></ul> | [/node](https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/node), [/runtime](https://github.com/AdMetaNetwork/admeta/tree/d133bce5adaa41dc2acffa8f10b63928d22751b4/runtime) |  |
| 4. | AdMeta WebApp | <ul><li>[x] </li></ul> | [admeta-webapp](https://github.com/AdMetaNetwork/admeta-webapp/tree/84fe4da46ee8542624ee8a3441957779a9ebe206) |  |
<br/>

## General Notes v1 - Jan 9, 2023
Overall the delivery is really good. The main functionalities work and the UI is already more than decent.
- The node local setup is straightforward;
- I encountered some minor issues with the webapp local setup. In the [PR discussion](https://github.com/w3f/Grant-Milestone-Delivery/pull/667), the devs helped to fix them;
- The webapp lets you try all the most important functionalities;
- For now, users can claim rewards without doing any tasks, but the team [stated](https://github.com/w3f/Grant-Milestone-Delivery/pull/667#issuecomment-1375771236) that they plan to make this impossible (users should complete some tasks while watching ads to claim rewards);

As the main problem was the local testing, I ask the team to slightly improve the WebApp Guide:

### 0c. Testing Guide
I'd simply report the explanation the team gave me in the PR discussion inside the WebApp guide, so that other users can easily setup the webapp locally.

