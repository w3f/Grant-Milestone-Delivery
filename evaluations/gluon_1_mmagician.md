# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/182 
- **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | Gluon Website and Web Portal Framework | <ul><li>[x] </li></ul> | [web portal](http://www.gluonwallet.com website), [repo](https://github.com/tearust/gluon-website) | |
| 1 | Milestone1 feature list and test instruction | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/tearust/gluon-app/blob/milestone1/readme.md) | |
| 2 | Test docker-compose | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/tearust/gluon-app/blob/main/docker-compose.yml) | |
| 3 | Source code on GitHub | <ul><li>[x] </li></ul> | [gluon-app](https://github.com/tearust/gluon-app/tree/milestone1), [gluon-pallet](https://github.com/tearust/gluon-pallet/tree/milestone-1), [node](https://github.com/tearust/tea-layer1/tree/milestone-1) | |

## General Notes

This review builds on top of [felixniemeyer](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/gluon-1-felixniemeyer.md)'s evaluation, and as such it omits most of the points already mentioned there.

### Unit tests

No meaningful unit tests provided. Although it's not part of the contract, it still shows committment to code quality

### Code duplication

There's still significant code duplication between mobile & webapp apps. This should probably be refactored into a common module. This should be addressed before M2.

### Code quality

The codebase looks solid. The design choice for having two maps for BrowserAppPair & AppBrowserPair seemed a bit strange in the beginning (why not use a double map, for example?), but I think it makes sense, as you want to ensure each webapp account and each mobile account are paired exactly once - which would be inefficient to verify with a double map.

`cargo clippy` produces multiple warnings - should be addressed before M2

### Communication

Very responsive developer: updated the docs and provided fixes rather quickly.

