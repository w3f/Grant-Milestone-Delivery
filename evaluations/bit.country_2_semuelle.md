# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/bit_country_m2.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [bit-country/Metaverse-Network](https://github.com/bit-country/Metaverse-Network/blob/6b43c6790cf5a51305d453d2f500a30e805c4d00/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gitbook.io](https://metaversenw.gitbook.io/bit-country/), [bit-country/Metaverse-Network](https://github.com/bit-country/Metaverse-Network/blob/6b43c6790cf5a51305d453d2f500a30e805c4d00/README.md) | — |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [hackmd.io](https://hackmd.io/PmWDfHrNRD-zRZGoOpvCLg), [bit-country/Metaverse-Network](https://github.com/bit-country/Metaverse-Network/blob/9932efc9e09c1a0377e9acc11fdabd1612ecb6dc/README.md#2-build) | Run `make test`. |
| 1. | Substrate module: Continuum | <ul><li>[x] </li></ul> | [pallets/continuum](https://github.com/bit-country/Metaverse-Network/tree/9932efc9e09c1a0377e9acc11fdabd1612ecb6dc/pallets/continuum) | — |
| 1a. | Spot Good Neighbor (Auction) Protocol | <ul><li>[x] </li></ul> | [pallets/continuum](https://github.com/bit-country/Metaverse-Network/blob/3e85705f8a2382d028a9bdb157aa2481052da280/pallets/continuum/src/lib.rs#L577-L587) | Allows "neighbors" to block others from buying land |
| 1b. | Spot with fixed price | <ul><li>[x] </li></ul> | [pallets/auction](https://github.com/bit-country/Metaverse-Network/blob/32850607625688d20050d1b7aa583c62013828bc/pallets/auction/src/lib.rs#L309-L513) | Buy-now function for auctions |
| 1c. | Spot Good Neighbor (Governance) Protocol | <ul><li>[x] </li></ul> | [pallets/governance](https://github.com/bit-country/Metaverse-Network/blob/eaa05d83387b233fad86e5ecbad4f496933e442b/pallets/governance/src/lib.rs#L184) | Blocks non-members from proposing and voting |
| 2. | Substrate module: NftPromotion | <ul><li>[x] </li></ul> | [pallets/nft](https://github.com/bit-country/Metaverse-Network/blob/9932efc9e09c1a0377e9acc11fdabd1612ecb6dc/pallets/nft/src/lib.rs#L600-L607) | — |
| 3. | Substrate: NFT Minting - Extended | <ul><li>[x] </li></ul> | [commit/0998e0a](https://github.com/bit-country/Metaverse-Network/commit/0998e0a40b67ab0de7dc2b9c17755dfb16d92120) | TimeCapsule logic for executable NFTs moved on-chain on request |
| 4. | Substrate: NFT Sign Support - Extended | <ul><li>[x] </li></ul> | [pallets/nft](https://github.com/bit-country/Metaverse-Network/blob/9932efc9e09c1a0377e9acc11fdabd1612ecb6dc/pallets/nft/src/lib.rs#L561-L597) | — |
| 5. | Substrate: NFT Benchmarking | <ul><li>[x] </li></ul> | [commit/0ecd131](https://github.com/bit-country/Metaverse-Network/commit/0ecd131886ef5ccd872808ee0e11865d3df5dd56#diff-9340a89ab12e3b4b5b5e36714cb73d3c82979532d77c70c143ab488ef416154b) | — |
| 6. | Substrate: Auction Benchmarking | <ul><li>[x] </li></ul> | [commit/a00b26b](https://github.com/bit-country/Metaverse-Network/commit/a00b26bb08f9e927f2e952424fdde62e560a6f3c#diff-8e8c0cf481010b2028d5602d98fed256b970e43c00033a24858fea89d9b91c2b) | — |
| 7. | Connected to Rococo | <ul><li>[x] </li></ul> |  | Rococo revamp got in the way, Westend now targeted. |
| 8. | Local NFT Market | <ul><li>[x] </li></ul> | [commit/863cca8](https://github.com/bit-country/Metaverse-Network/commit/863cca868bc29ac6333792140df48cf81ce09bbc#diff-8e8c0cf481010b2028d5602d98fed256b970e43c00033a24858fea89d9b91c2b) | — |
| 9. | Multi token in local NFT Market | <ul><li>[x] </li></ul> | [commit/863cca8](https://github.com/bit-country/Metaverse-Network/commit/863cca868bc29ac6333792140df48cf81ce09bbc) | — |
| 10. | Docker / UAT | <ul><li>[x] </li></ul> | [UAT](https://dev.bit.country/home) (see submission for access credentials), [Docker](https://github.com/bit-country/Metaverse-Network/tree/9932efc9e09c1a0377e9acc11fdabd1612ecb6dc/scripts)  | —

## General Notes

Nice touch with the UAT UI.
