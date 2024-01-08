# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LiisaPortfolioTracker.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/e4ca40a0a29c60654ca9a755a33215ae2ae8acab/LICENSE.md) | Apache 2.0 |
| 0b.    | Documentation             | <ul><li>[ ] </li></ul> | link | Documentation includes Inline Code Documentation, Configuration Documentation, Readme file. Documentation on the modular design of Subsquid API calls is included. |
| 0c.    | Testing Guide             | <ul><li>[ ] </li></ul> | link | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d.    | Docker                    | <ul><li>[ ] </li></ul> | link | Provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1a.    | Modular Subsquid API calls | <ul><li>[ ] </li></ul> | link | Design and implement API queries to extract event data from the Subsquid API for the supported protocols and the respective token standards and/or pallets: Astar (ERC721, ERC1155, PSP34, PSP37), Basilisk (Uniques pallet), Efinity (ERC-721, ERC-1155), Moonbeam (ERC-721, ERC-1155) and Moonriver (ERC-721, ERC-1155). The design will be modular to allow easy replacement with different APIs. This will be developed using Node.js. |
| 1b.    | Timed-Triggers            | <ul><li>[ ] </li></ul> | link | Establish timed triggers to initiate queries to the Subsquid API at predetermined intervals, subsequently refreshing the associated events database with the most recent data. This will be developed using Node.js on the main code and will use cronjobs on the cloud to set the triggers. |
| 1c.    | User-initiated Triggers   | <ul><li>[ ] </li></ul> | link | Implement event-driven triggers that are activated upon user interactions with the application, specifically upon insertion of a wallet address. This will initiate Subsquid API queries and subsequently update the associated events database with the retrieved data. This will be developed using Node.js. |
| 2a.    | Open-sourced Computational algorithms | <ul><li>[ ] </li></ul> | link | Design and implement computational algorithms that, upon activation of either event-driven or timed triggers and the consequent receipt of new event data, will produce key performance indicators (KPIs) and metrics for both user wallets and NFT collections. The calculated metrics will subsequently be stored persistently in the database for subsequent analysis and retrieval. This code will be open-sourced and developed using Node.js. |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
