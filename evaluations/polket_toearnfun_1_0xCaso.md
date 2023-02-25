# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polket_toearnfun.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/polketio/polket-node/blob/8053f5a15c27784b7499bee88b8099d28eff8612/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gitbook](https://polketio.gitbook.io/toearnfun/) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Rust Unit Test](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612#testing), [ToEarnFun Demo Guide](https://polketio.gitbook.io/toearnfun/guides/how-to-run-toearnfun-app) |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockfile](https://github.com/polketio/polket-node/blob/8053f5a15c27784b7499bee88b8099d28eff8612/Dockerfile), [Run in docker](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612#run-full-node-on-testnet) |  |
| 1. | Substrate module: pallet-vfe | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612/pallets/vfe) |  |
| 2. | Substrate module: pallet-unique-id | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612/pallets/unique-id) |  |
| 3. | Substrate module: pallet-currencies | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612/pallets/currencies) |  |
| 4. | Substrate module: pallet-support | <ul><li>[x] </li></ul> | [Source code link](https://github.com/polketio/polket-node/tree/8053f5a15c27784b7499bee88b8099d28eff8612/pallets/support) |  |
| 5. | Flutter App: Smart Jump Rope supported | <ul><li>[x] </li></ul> | [simulated_device.dart](https://github.com/polketio/toearnfun_flutter_app/blob/97279a8096185422e880a8bbf07753f36f97f1bf/lib/plugins/ropes/simulated_device.dart) |  |
| 6. | Flutter App: Integrate polkawallet-sdk | <ul><li>[x] </li></ul> | [Imports](https://github.com/polketio/toearnfun_flutter_app/search?p=1&q=polkawallet) |  |
<br/>

## General Notes v1 - Jan 9, 2023
The delivery is very good:
- the developer provided a nice step-by-step guide to test the mobile app, which also already has a nice UI;
- the pallets have been tested well (expecially the `vfe`, which is the most complex one);
- for now [only Android is supported](https://github.com/w3f/Grant-Milestone-Delivery/pull/673#issuecomment-1372166017);
- the dev added in the guide how to setup the local testnet (create the `FUN` currency, fund an account, add the Smart Jump Rope device, ecc...);

### Minor issues:
- add `npm i` inside the webapp README;
- add `mkdir .local` inside the Dockerfile (already solved - apparently [useless](https://github.com/w3f/Grant-Milestone-Delivery/pull/673#issuecomment-1375236338));
- I didn't manage to run the docker, but it's not a big problem as the local setup is really easy (basically just run the local node); I guess it's a problem on my end as the build works on [GitHub actions](https://github.com/w3f/Grant-Milestone-Delivery/pull/673#issuecomment-1373815866) and locally for the dev;
- for the next time, if the chain has to be initialized for local testing, it would be better to do it with a script and not manually.