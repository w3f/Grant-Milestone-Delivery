# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/316
* **Milestone Number:** #2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License Apache 2.0| https://github.com/open-web3-stack/open-runtime-module-library/blob/master/LICENSE  | 
| 0b. | Documentation | https://github.com/open-web3-stack/open-runtime-module-library/wiki/xtokens  | Inline documentation of the code and a basic tutorial that explains how to use xtokens |
| 0c. | Testing Guide | https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens | The code has proper unit-test coverage to ensure functionality and robustness. In the guide we describe how to run these tests | 
| 1. | Substrate module: `xtokens` | https://github.com/open-web3-stack/open-runtime-module-library/tree/57af18a0a035c919e20eeed02bebba5dbd15114a/xtokens | We extended `xtokens` to include parachain fungible asset, multi location mapping with parachainId as the namespace (in PoC it's just string identifiers) |  
| 2. | Substrate module: `xcm-support` | https://github.com/open-web3-stack/open-runtime-module-library/tree/57af18a0a035c919e20eeed02bebba5dbd15114a/xcm-support | We extended `xcm-support` to support traits, types and implementations, to support cross-chain message(XCM) integration with ORML modules, Asset Transactor to handle fungible asset balances and operations, Location Conversion to map multi-location and accountId |  
| 3. | Article/Tutorial |  https://wiki.acala.network/build/development-guide/composable-chains | A tutorial that explains the work done as part of the grant. |

Note: we have completed the xtokens implementation as planned. However this would not be the end of it. As Statemint and XCM continue to be developed, we expect further refactor and extension of xtokens. 