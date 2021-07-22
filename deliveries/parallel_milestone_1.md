# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/329
* **Milestone Number:** 1


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0 | License |   | Apache 2.0 |
| 1a. | Substrate module: Loans pallet | [Code](https://github.com/parallel-finance/parallel/tree/master/pallets/loans), [Design](https://docs.parallel.fi/white-paper#lending-protocol)(Ⅲ-1, Ⅲ-2) | |
| 1b. | Substrate module: Liquidation pallet | [Code](https://github.com/parallel-finance/parallel/tree/master/pallets/liquidation), [Design](https://docs.parallel.fi/white-paper#4-1-auto-liquidation-algorithm) (Ⅲ-4.1) | |
| 1c. | Substrate module: Price aggregation oracle | [Code](https://github.com/parallel-finance/parallel/tree/feature-oracle/pallets/ocw-oracle), [Design](https://docs.parallel.fi/white-paper#5-oracle-and-price-feed) (Ⅲ-5) |  |
| 2a. | Integration with front-end | https://gist.github.com/yz89/34bb2954f0682b9837733f21a199c7ed | We're not going to open the entire front-end code right now, so we'll use the gist to display the integration code. The live demo: https://testnet.parallel.fi/ |
| 2b. | Article/Tutorial | [Article](https://parallelfinance.medium.com/major-product-experience-and-ui-update-537de029c17f), [Video](https://www.loom.com/share/0d24207ffdbb4dc284a19c2d95291a3a) | |
| 3.  | Docker | [Docker Compose](https://github.com/parallel-finance/parallel/blob/master/docker-compose.yml), [Docker Hub](https://hub.docker.com/repository/docker/parallelfinance/parallel) |  |
| 4.  | Testing and Documentation | [Test Guide](https://github.com/parallel-finance/parallel/wiki/Test-guide), [API Docs](https://api-docs.parallel.fi) | |
| 5.  | User Testing | https://www.notion.so/parallelfinance/UX-Improvement-b4ba94374a5a41ff96c5f549f54dd810 | |

## Notes
Regarding the work `1c`, we have done the price oracle powered by an off-chain-worker. However, the development complexity of OCW caused us to reevaluate this module, so it may not be used in production in the future.