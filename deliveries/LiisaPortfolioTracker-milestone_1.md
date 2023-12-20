# Milestone Delivery :mailbox:

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LiisaPortfolioTracker.md
* **Milestone Number:** 1

**Context** (optional)

Liisa operates as a multi-chain NFT data analytics platform, engineered to empower collectors and investors in making proficient, data-driven decisions.

This project consists of the development of a custom-built portfolio tracker, explicitly devised for NFTs within the Polkadot blockchain network, catering to the specificities of NFT investment strategies.

Within the Substrate/Kusama/Polkadot/Web 3 ecosystem, Liisa intends to emerge as a central supplier of granular NFT analytics, distinguishing itself with a user interface tailored to meet the specific requirements of NFT investors.

The portfolio tracker is designed to accommodate the diverse needs of a broad user base, ranging from active traders to long-term investors and collectors. It pioneers innovative metrics that drive the NFT infrastructure forward, thereby promoting a robust and data-enriched investment environment.

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/LICENSE.md | Apache License 2.0 |
| 0b. | Documentation | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/README.md <br> https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/main/multichain-indexer/src | Documentation includes Inline Code Documentation, Configuration Documentation, Readme file. Documentation on the modular design of Subsquid API calls is included. |
| 0c. | Testing Guide | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/README.md | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide, we will describe how to run these tests |
| 0d. | Docker | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/multichain-indexer/Dockerfile | Dockerfile |
| 1a. | Modular Subsquid API calls | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/main/multichain-indexer/src | Inside the folders with the name you can see the code for squids on each chain |
| 1b. | Timed-Triggers | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/multichain-indexer/functions/dataQueries.js  | In here you can see the functions that we are going to use to produce the stats to be used. |
| 1c. | User-initiated Triggers	 | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/main/multichain-indexer/src https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/multichain-indexer/functions/dataQueries. | In here we have both the squids that will be hosted and running live, tracking data in real time, as well as functions to be used related to user interactions with the application. |
| 2a. | Open-sourced Computational algorithms | https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/main/multichain-indexer/functions/dataQueries. | This file contains the functions to be used to generate stats on collection's data.| 



**Additional Information**

We will create more extensive and polished documentation as we continue delivering the Milestones.
