# Evaluation

- **Status:** In Progress 
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/419
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
|      0 | License  | <ul><li>[x] </li></ul> | [Pallets](https://github.com/parallel-finance/parallel/blob/master/LICENSE)  | Correct License |
|    1.a | Substrate module: [Loans pallet](https://docs.parallel.fi/white-paper#i-lending-protocol) | <ul><li>[x] </li></ul> | [loan pallet](https://github.com/parallel-finance/parallel/tree/master/pallets/loans)  | Good inline documentation, weights |
|    1.b | Substrate module: [Liquidation pallet](https://docs.parallel.fi/white-paper#4-1-auto-liquidation-algorithm)  | <ul><li>[x] </li></ul> | [liquidate pallet](https://github.com/parallel-finance/parallel/blob/master/pallets/liquidation/src/lib.rs) | Looks good |
|    1.c | Substrate module: [Price aggregation oracle](https://docs.parallel.fi/white-paper#5-oracle-and-price-feed)   | <ul><li>[ ] </li></ul> | [Prices pallet](https://github.com/parallel-finance/parallel/blob/master/pallets/prices/src/lib.rs) | Simple uses the ORML-Oracle. They haven't delivered their own solution and it would have been nice to have an alternative |
|    2.a | Integration with front-end | <ul><li>[ ] </li></ul> | | The front-end integration isn’t open source.  |
|    2.b | Article/Tutorial  | <ul><li>[x] </li></ul> | [Medium article](https://parallelfinance.medium.com/major-product-experience-and-ui-update-537de029c17f), [Video](https://www.loom.com/share/0d24207ffdbb4dc284a19c2d95291a3a) | Looks good  |
|    3. | Docker  | <ul><li>[x] </li></ul> | [Docker Compose](https://github.com/parallel-finance/parallel/blob/master/docker-compose.yml), [Docker Hub](https://hub.docker.com/repository/docker/parallelfinance/parallel) | Looks good |
|    4. | Testing and Documentation  |  <ul><li>[x] </li></ul> | [Test Guide](https://github.com/parallel-finance/parallel/wiki/Test-guide), [API Docs](https://api-docs.parallel.fi) | Looks good |
|    5. | User Testing | <ul><li>[x] </li></ul> | [notion](https://www.notion.so/parallelfinance/UX-Improvement-b4ba94374a5a41ff96c5f549f54dd810), evolution of the dApp: [V1](https://www.youtube.com/watch?v=lgQX9rELpL8), [V2](https://www.youtube.com/watch?v=qyMdNYBgsq0), [V3](https://www.loom.com/share/0d24207ffdbb4dc284a19c2d95291a3a) | Hard to test, but this is sufficient proof


## General Notes

Good inline documentation. weights, etc.

They [explained why they reused a small part of the compound code](https://github.com/w3f/Grant-Milestone-Delivery/pull/186#issuecomment-864762595), which is reasonable. Also they now mention it directly in the readme. Since it was only a small part, the code was already changed quite a lot and not directly part of this delivery, I’m going to leave it at this.  

But the the front-end integration doesn't seem to be open source. Furthermore they didn’t develop their own oracle solution and simply used ORML. 
