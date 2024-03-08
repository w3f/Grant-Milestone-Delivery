# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LiisaPortfolioTracker.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/e4ca40a0a29c60654ca9a755a33215ae2ae8acab/LICENSE.md) | Apache 2.0 |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | [README](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/README.md) | Inline documentation patchy |
| 0c.    | Testing Guide             | <ul><li>[x] </li></ul> | [README](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/19a8574c491af2a682226618a204a30dbd1f5497/README.md#getting-started) | 92% code coverage |
| 0d.    | Docker                    | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/Dockerfile) | — |
| 1a.    | Modular Subsquid API calls | <ul><li>[x] </li></ul> | [/multichain-indexer](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/src) | — |
| 1b.    | Timed-Triggers            | <ul><li>[x] </li></ul> | [/multichain-indexer](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/functions/dataQueries.js) | — |
| 1c.    | User-initiated Triggers   | <ul><li>[x] </li></ul> | [/multichain-indexer](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/tree/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/src), [/multichain-indexer](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/functions/dataQueries.js) | — |
| 2a.    | Open-sourced Computational algorithms | <ul><li>[x] </li></ul> | [/multichain-indexer](https://github.com/LiisaNFT/PolkadotNFTPortfolioTracker/blob/30be68d4894d9f09262296e2986f18eb11a6f2c4/multichain-indexer/functions/dataQueries.js) | — |

## General Notes

### `npm test` output

```sh
-----------------------------|---------|----------|---------|---------|-------------------
File                         | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
-----------------------------|---------|----------|---------|---------|-------------------
All files                    |   92.77 |    54.68 |     100 |   92.69 |                   
 fetchAllStats.js            |   93.75 |       50 |     100 |   93.75 | 20                
 fetchCollectionNfts.js      |   93.75 |       50 |     100 |   93.75 | 25                
 fetchCollectionSales.js     |   94.11 |       50 |     100 |   94.11 | 33                
 fetchFloorPrice.js          |      80 |        0 |     100 |      80 | 24-26             
 fetchFloorPriceChange.js    |   81.25 |        0 |     100 |   81.25 | 27-29             
 fetchLastTraitSale.js       |   93.75 |       50 |     100 |   93.75 | 26                
 fetchNftAcquisitionPrice.js |   94.11 |       50 |     100 |   94.11 | 24                
 fetchNftActivity.js         |   93.75 |       50 |     100 |   93.75 | 26                
 fetchNftMetadata.js         |   93.75 |       50 |     100 |   93.75 | 24                
 fetchNftUnrealizedPnL.js    |     100 |      100 |     100 |     100 |                   
 fetchWalletActivity.js      |   94.11 |       50 |     100 |   94.11 | 25                
 fetchWalletSpending.js      |   93.75 |       50 |     100 |   93.75 | 25                
 getLiquidity.js             |   89.47 |       50 |     100 |    87.5 | 10-11             
 index.js                    |     100 |      100 |     100 |     100 |                   
 nftEstimatedValue.js        |   94.73 |    85.71 |     100 |   94.73 | 33,61             
-----------------------------|---------|----------|---------|---------|-------------------

Test Suites: 14 passed, 14 total
Tests:       27 passed, 27 total
Snapshots:   0 total
Time:        2.424 s
Ran all test suites.
```
