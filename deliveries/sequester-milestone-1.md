# Sequester Milestone 1 Delivery

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Sequester Application](<https://github.com/w3f/Grants-Program/blob/master/applications/sequester.md>)
* **Milestone Number:** 1

**Context**

Sequester is launching a suite of tools that will reduce friction for Polkadot/Kusama blockchains wishing to allocate a portion of their transaction fees to purchase carbon credits.

The Sequester toolkit will consist of a common good chain and a pallet, called the “donations” pallet, that anyone can add to their chain locally with minimal effort. This pallet will sum the transaction fees on a Substrate chain over a period of blocks and send a percentage of them to the Sequester Common Good chain, where they will be used to purchase carbon credits. These carbon credits will then be permanently retired and removed from circulation.

**Deliverables**

[Sequester Donations Pallet](https://github.com/SequesterChain/pallets/tree/main/donations) - The Sequester donations pallet, which aggregates transaction fees over a period of time and sends a percentage of them to the Sequester Common Good chain.

[Sequester Example Node](https://github.com/SequesterChain/sequester-example-node) - An example Substrate chain that integrates with the Sequester donations pallet

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [License Link](https://github.com/SequesterChain/pallets/blob/main/donations/LICENSE)| Apache 2.0 |
| 0b.  | Documentation |[Documentation Link](https://github.com/SequesterChain/pallets/tree/main/donations#documentationconfiguration-options)| We've provided inline documentation of the code, a README file with documentation on our configuration options, and an in depth Medium article (Number 3 below) describing our approach and instructions for integration. |
| 0c.  | Testing |[Testing Link](https://github.com/SequesterChain/pallets/tree/main/donations#testing)| Our core functionalities are unit tested.  These tests can be run as described in the Readme file linked.|
| 0d.  | Docker |[Docker Link](https://github.com/SequesterChain/sequester-example-node#run-in-docker)| We've included Dockerfiles in our example node to ensure consistent versioning and dependencies. |
| 1.  | Calculate Transaction Fees |[Calculate Txn Fees Link](https://github.com/SequesterChain/pallets/blob/w3f_milestone_1_submission/donations/src/lib.rs#L192-L211)| Each block, an offchain worker will sum the fees for that block, multiply that sum * the percentage of fees we are sending to Sequester, and store those fees in an offchain variable. Every `OnChainUpdateInterval` blocks, an unsigned transaction will be submitted on-chain, to queue those funds to be sent to Sequester.|
| 2.  | Send to Sequester |[Send To Sequester Link](https://github.com/SequesterChain/pallets/blob/w3f_milestone_1_submission/donations/src/lib.rs#L327-L362)| Every `SpendPeriod` blocks (a variable passed into `pallet_treasury`), the treasury will will the `SpendFunds` hook, which will check the on-chain storage for queued txn fees. If there are valid txn fees, they will be subsumed into a special Sequester account, and an XCM will be constructed which sends the queued funds to the Sequester chain. Please note that the XCM call will remain mocked until the final architecture of the Sequester Common Good Chain is finalized.|
| 3.  | Article/Tutorial | [Article Link](https://medium.com/@sequester.chain/introducing-sequesters-donations-pallet-3e55f54cdfd1) | We've posted a Medium article with an overview, general approach, integration tutorial, testing details, and next steps.|
| 4.  | Weight estimation |[Weights Estimation Link](https://github.com/SequesterChain/pallets/blob/main/donations/src/weights.rs)| We've provided weights for our pallet generated through benchmarking.|

## Additional Information

While we considered using signed transactions to enhance security of the donations pallet, we observed that the [Elections pallet](https://github.com/paritytech/substrate/blob/master/frame/election-provider-multi-phase/src/lib.rs#L1133-L1136) in Polkadot uses unsigned transactions. We used a similar model for our pallet and will verify with core Substrate devs that unsigned transactions will provide sufficient security for our implementation before going live.
