# Evaluation

- **Status:** Accepted
- **PR Link:** https://github.com/w3f/Grant-Milestone-Delivery/pull/167
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle



| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Apache](https://github.com/DEIPworld/deip-polkadot/blob/57e829e9d60c6f56f4d1a42e1b773e300cb437a2/LICENSE)| — |
| 0b.  | Documentation | <ul><li>[x] </li></ul> | Pallets ([github.io](https://deipworld.github.io/deip-polkadot/pallet_deip/index.html), [make](https://github.com/DEIPworld/deip-polkadot/blob/14cf5005a43f37ca686e346719fb43b85ef3a221/Makefile#L19)), node ([gh](https://github.com/DEIPworld/deip-polkadot/blob/14cf5005a43f37ca686e346719fb43b85ef3a221/README.md)) | Good setup guide, great inline documentation. |
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | [gh](https://github.com/DEIPworld/deip-polkadot/blob/57e829e9d60c6f56f4d1a42e1b773e300cb437a2/doc/testing-guide.md)| — |
| 1 | Basic working group management (DAO) | <ul><li>[x] </li></ul> | [Source code](https://github.com/DEIPworld/deip-polkadot/blob/polkadot-milestone-1/runtime/src/lib.rs#L291-L323)| `multisig` pallet |
| 2 | Project and IP management | <ul><li>[x] </li></ul> | [Source code](https://github.com/DEIPworld/deip-polkadot/blob/polkadot-milestone-1/pallets/deip/src/lib.rs#L348-L427)| Create & modify projects  |
| 3 | IP registration | <ul><li>[x] </li></ul> | [Source code](https://github.com/DEIPworld/deip-polkadot/blob/polkadot-milestone-1/pallets/deip/src/lib.rs#L429-L466)| Register IP via external ID & content hash |
| 4 | Access control | <ul><li>[x] </li></ul> | [Source code](https://github.com/DEIPworld/deip-polkadot/blob/polkadot-milestone-1/pallets/deip/src/lib.rs#L477-L648)| Create & modify projects & NDAs, create IP, fulfill & reject access request |
| 5 | Docker | <ul><li>[x] </li></ul> | [docker-compose](https://github.com/DEIPworld/deip-polkadot/blob/57e829e9d60c6f56f4d1a42e1b773e300cb437a2/docker-compose.yml)| — |



## General Notes

Testing guide easy to follow. No issues with setup (Docker & manual). Good error handling, too. 

UI postponed to M2.
