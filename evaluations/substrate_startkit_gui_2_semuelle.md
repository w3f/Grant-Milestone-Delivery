# Evaluation

* **Status:** In Progress
* **PR Link:** [original](https://github.com/w3f/Open-Grants-Program/pull/32), [amendment](https://github.com/w3f/Open-Grants-Program/pull/44)
* **Milestone:** 2
* **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
* **Previously successfully merged evaluation:** All by @semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | GUI web application |<ul><li>[x] </li></ul>| [github](https://github.com/MVPWorkshop/substrate-startkit-gui-app/tree/ecfadab77ddddc0a04e1d89b817a59acfcddfa1d), [demo](https://substrate-starterkit.mvpworkshop.co/) |  good setup instructions, tested locally |
| 2.  | Github Integration |<ul><li>[x] </li></ul>| [code ref](https://github.com/MVPWorkshop/substrate-startkit-gui-api/blob/8ff3fb769882c7d8210d2d52b71473808bdef814/src/api/v1/index.ts#L19) | — |
| 3. | Backend |<ul><li>[x] </li></ul>| [github](https://github.com/MVPWorkshop/substrate-startkit-gui-api/tree/cdfeac1a55ca5ebc29437f944973c89f2dce594f) |  see [General Notes](#general-notes) |
| 4. | Demo video |<ul><li>[x] </li></ul>| [Video link](https://drive.google.com/file/d/1glABSdwSpvP6PRfT4-nl8LKQUmjIOhLr/view) |  — |
| 5. | Documentation |<ul><li>[x] </li></ul>| [Product Specification](https://docs.google.com/document/d/1gZSNviJ1wiWDO7MtCEHFPWFfCxMs2ENefA-HhfQn4zw/edit#), [Frontend Installation Guide](https://github.com/MVPWorkshop/substrate-startkit-gui-api/blob/b3d9b3234353c78f0a0d0fc4953f00d5c62862ba/README.md), [Backend installation guide](https://github.com/MVPWorkshop/substrate-startkit-gui-app/blob/ecfadab77ddddc0a04e1d89b817a59acfcddfa1d/README.md) | Please add installation prerequisites with version numbers (postgres, node, etc.) |
| 6. | Continuous Integration environment |<ul><li>[x] </li></ul>| [FE](https://github.com/MVPWorkshop/substrate-startkit-gui-app/tree/c7220cd6921189a1e56769a40454b1266ea209b9/.github/workflows), [BE](https://github.com/MVPWorkshop/substrate-startkit-gui-api/tree/3d36052a85f032b413f53eebcc9f058bb6aad712/.github/workflows) | — |
| 7. | Automated tests |<ul><li>[ ] </li></ul>| [FE](https://github.com/MVPWorkshop/substrate-startkit-gui-app/tree/c7220cd6921189a1e56769a40454b1266ea209b9/src/tests), [BE](https://github.com/MVPWorkshop/substrate-startkit-gui-api/tree/cdfeac1a55ca5ebc29437f944973c89f2dce594f/src/tests) | six rather trivial integration tests |


## General Notes

Frontend, backend, tests and Github integration tested locally.

Documentation (installation guides, specs, video) solid.

I had some issues running the tests because of a permissions issue that wasn't caught. Also, a `node` v12 dependency is written in the CI scripts, but not in the manual installation documentation. Overall, the tests are few and far between and largely just confirming the happy path works. I would strongly recommend improving the test suites, especially integration tests.

