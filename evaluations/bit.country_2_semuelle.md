# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/bit_country_m2.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [bit-country/Metaverse-Network](https://github.com/bit-country/Metaverse-Network/blob/6b43c6790cf5a51305d453d2f500a30e805c4d00/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [gitbook.io](https://metaversenw.gitbook.io/bit-country/), [bit-country/Metaverse-Network](https://github.com/bit-country/Metaverse-Network/blob/6b43c6790cf5a51305d453d2f500a30e805c4d00/README.md) | We will provide inline documentation, video, medium articles & creating more content in the lightpaper of the project. |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | link | The code will have proper unit-test coverage for pallets. |
| 1. | Substrate module: Continuum | <ul><li>[ ] </li></ul> | link | This pallet handles the Continuum protocols for shaping the map of the bit countries. |
| 1a. | Spot Good Neighbor (Auction) Protocol | <ul><li>[ ] </li></ul> | link | Controls which users are able to participate in auctions for spots, allows existing neighboring spots to have their say on a potential occupier of the new spot. |
| 1b. | Spot with fixed price | <ul><li>[ ] </li></ul> | link | Creating more flexibility for the Continuum Slot by allowing governance to enable buy now option for Continuum Spot which allows Metaverse to occupy Continuum Spot through buying with fixed price instead of Auction. |
| 1c. | Spot Good Neighbor (Governance) Protocol | <ul><li>[ ] </li></ul> | link | Governance voting only enabled when bit countries secured the spot on Continuum, once local governance enabled, residents in the local governance has the ability to raise disputes, change their local economic model which can be voted on and actioned. Designed to improve neighborhood quality. |
| 2. | Substrate module: NftPromotion | <ul><li>[ ] </li></ul> | link | Our network is designed to support NFT and its promotion. This pallet manages NFT campaigns that we will create to incentivize NFT creators, traders and minters. (e.g. subsidies on costs or other incentive) |
| 3. | Substrate: NFT Minting - Extended | <ul><li>[ ] </li></ul> | link | While using ORML trait as a base, we will be implementing co-creator, origin details, NFT-Future-Event (e.g. time capsule), Smart Contract Enabled NFT (e.g. give NFTs programmability). |
| 4. | Substrate: NFT Sign Support - Extended | <ul><li>[ ] </li></ul> | link | This will allow NFT get supported by their supporters who willing to sign with their signatures to show supports. |
| 5. | Substrate: NFT Benchmarking | <ul><li>[ ] </li></ul> | link | This will ensure appropriate weights will apply based on number of NFTs minting and extrinsics. |
| 6. | Substrate: Auction Benchmarking | <ul><li>[ ] </li></ul> | link | This will ensure appropriate weights will apply to auction extrinsics. |
| 7. | Connected to Rococo | <ul><li>[ ] </li></ul> | link | Become a parachain on Rococo, requires frequent migrations to the newest version of pallets and reapplication for the parachain. Aim to be included as soon as possible. |
| 8. | Local NFT Market | <ul><li>[ ] </li></ul> | link | Develop the local bit country marketplace (like a subset of the platform-wide marketplace) for local market and value creation. Some items will only be able within the local NFT market, encouraging users to belong to quality bit countries. Included functionality: listing items, searching, auctions, purchases, rentals |
| 9. | Multi token in local NFT Market | <ul><li>[ ] </li></ul> | link | Allow local bit country NFT market accepts their own token or using network token when listing, bidding, auctioning or interact with local Marketplace. |
| 10. | Docker / UAT | <ul><li>[x] </li></ul> | [UAT (private)](https://dev.bit.country/home) | We will demonstrate the full functionality of our chain and our dapp on UAT / a dockerfile.
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
- Nice touch with the UAT setup!
