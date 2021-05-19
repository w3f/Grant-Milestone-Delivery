 Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/119
* **Milestone Number:** #2

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | SDK - bodhi.js: deployment tool |https://github.com/AcalaNetwork/bodhi.js| Integration bodhi.js SDK with waffle.js| 
| 2.  | SDK - bodhi.js: Address mapping |https://github.com/AcalaNetwork/bodhi.js| Using module-evm-accounts to handle address mapping between Substrate & EVM addresses; bodhi.js is supporting all the required Ethereum RPC | 
| 3.  | Substrate pallet: module-evm-accounts |https://github.com/AcalaNetwork/Acala/tree/master/modules/evm-accounts | Providing a two-way mapping between Substrate accounts and EVM accounts so the user only have to deal with one account / private key. EVM Account docs [here](https://wiki.acala.network/build/development-guide/smart-contracts/get-started-evm/evm-account) |
| 4.  | Substrate pallet: modules-evm |https://github.com/AcalaNetwork/Acala/tree/master/modules/evm | Drops the gas price mechanism from EVM in favor of the weights mechanism from Substrate| 
| 5.  | Integration | https://github.com/AcalaNetwork/evm-examples & [our demo at Ethdenver](https://www.crowdcast.io/e/acala-ethdenver-2021) | Examples with different level of complexity for using unique features of Acala from EVM smart contracts: like pre-deployed contracts, accessing Runtime modules as Oracle, Scheduler, native tokens, etc  |
| 6.  | Article/Tutorial | wiki: https://wiki.acala.network/learn/acala-evm & [guide to use evm](https://wiki.acala.network/build/development-guide/smart-contracts/get-started-evm) & [deploy a basic subscription contract](https://wiki.acala.network/build/development-guide/smart-contracts/advanced/use-on-chain-scheduler) using the scheduler feature | development guide for using Acala EVM  |