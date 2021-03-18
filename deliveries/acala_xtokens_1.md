# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/316
* **Milestone Number:** #1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License Apache 2.0 |https://github.com/open-web3-stack/open-runtime-module-library/blob/master/LICENSE| ...| 
| 0b.  | Documentation |https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens| Inline docs and readme available|
| 0c.  | Unit test | [unit test](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens#integration-tests) | `xcm-support` tests are included, use `check-tests` to see. `xtokens` would require XCM simulator to test cumulus, so we can only include it once [this](https://github.com/paritytech/polkadot/issues/2544) is done. However we have included integration tests guide [here](https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens#integration-tests)| 
| 1.  | xtokens pallet | https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xtokens | these pallets already work on the latest Rococo testnet |
| 2.  | xcm-support pallet | https://github.com/open-web3-stack/open-runtime-module-library/tree/master/xcm-support | | 
| 3.  | Articles/Tutorials | https://github.com/open-web3-stack/open-runtime-module-library/wiki/xtokens | This wiki guide has documented how to integrate xtokens for fungible asset transfer, configure parachain assets to work with one another, and also launch HRMP Channel on Rococo for testing. The parachain teams listed [here](https://wiki.acala.network/build/development-guide/composable-chains#composablewith) have either integrated and tested with Acala such as Laminar (used as example), [Plasm](https://medium.com/acalanetwork/the-first-successful-cross-chain-messaging-passing-xcmp-transaction-on-polkadot-testnet-eb36af2ad8c3) and [HydraDX](https://twitter.com/AcalaNetwork/status/1367311232903110656?s=20), or are work-in-processing integrating xtokens | 
