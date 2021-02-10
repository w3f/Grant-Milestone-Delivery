# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** [PR Link](https://github.com/w3f/Open-Grants-Program/pull/145). 
* **Milestone Number:** 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0. | License |https://github.com/ShadowsNetwork/shadows/blob/develop/LICENSE| Done | 
| 1. | Documentation |https://shadows-blockchain.gitbook.io| Done | 
| 2.  | Testing Guide |https://github.com/ShadowsNetwork/shadows/blob/develop/README.md| Done| 
| 3.  | Substrate module: MintX |https://github.com/ShadowsNetwork/shadows/tree/develop/modules/mintx| The Mintx module is used to lock the collateral to issue xUSD stablecoins, which can be used to exchange their synthetic assets| 
| 4.  | Substrate module: Ingester |https://github.com/ShadowsNetwork/shadows/tree/develop/modules/ingester| The Ingester module relies on orml oracle, while doing some extensions, such as locking the price| 
| 5.  | Tutorial |https://shadows-blockchain.gitbook.io/shadows/getting-started/tutorial| Done| 
| 6.  | Testing |https://github.com/ShadowsNetwork/shadows/blob/develop/modules/mintx/src/tests.rs & https://github.com/ShadowsNetwork/shadows/blob/develop/modules/ingester/src/tests.rs| There are test cases under each module| 
| 7.  | Docker |https://shadows-blockchain.gitbook.io/shadows/getting-started/setting-up-a-node-use-docker-image & https://shadows-blockchain.gitbook.io/shadows/getting-started/setting-up-polkadot-app-use-docker| Done| 