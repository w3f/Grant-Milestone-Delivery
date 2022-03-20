# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Parallel.md 
* **Milestone Number:** 2

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0 | License |   | Apache 2.0 |
| 1.a | Substrate module: Staking DOT | [Code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L399), [Design](https://docs.parallel.fi/white-paper#iv.-staking-protocol) (IV-1, IV-3, IV-4) | |
| 1.b | Substrate module: Unstaking DOT | [Code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L462), [Design](https://docs.parallel.fi/white-paper#iv.-staking-protocol) (IV-1, IV-4) | | 
| 1.c | Substrate module: Exchange Rate | [Code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L514), [Design](https://docs.parallel.fi/white-paper#4.-delegated-staking) (IV-4, exchange rate part) | |
| 1.d | Substrate module: Slashing Scenario | [Code](https://github.com/parallel-finance/parallel/blob/0f8d47a1ec/pallets/liquid-staking/src/lib.rs#L614), [Design](https://docs.parallel.fi/white-paper#6.-slash-insurance) (IV-6) | |
| 1.e | Substrate module: KSM | We already implemented the staking/unstaking for KSM.
| 2   | Validator evaluation schema         | [Nominate client](https://github.com/parallel-finance/nominate-client), [Pallet](https://github.com/parallel-finance/parallel/tree/master/pallets/nominee-election), [Design](https://docs.parallel.fi/white-paper#2.-validator-choosing-strategy) (IV-2) | |
| 3. | Integration with front-end          | https://gist.github.com/yz89/34bb2954f0682b9837733f21a199c7ed | We're not going to open the entire front-end code right now, so we'll use the gist to display the integration code. The live demo: https://testnet.parallel.fi/ | |
| 4. | Article/Tutorial                    | https://docs.parallel.fi/a-guide-to-testnet/testnet-experience | |
| 5. | Testing and Documentation           | [Test Guide](https://github.com/parallel-finance/parallel/wiki/Test-guide), [API Docs](https://api-docs.parallel.fi) | |
| 6. | User Testing                        | https://parallelfinance.notion.site/Web3-Grant-Milestone-2-d98aed16ce0642348c2133f0b7d91ab2 | | 

## Notes
The design of [Instant Unstaking Pool](https://docs.parallel.fi/white-paper#4.-delegated-staking) (IV-4) has been changed. You can check the alternative design: [Matching pool](https://parallelfinance.notion.site/Matching-pool-mechanism2-e784bfc5f6dc4dfcb6c9dc62e37d5485).
