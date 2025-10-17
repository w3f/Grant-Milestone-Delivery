## Evaluation

- **Status:** Accepted
- **Application Document:** [nftaa.md](https://github.com/w3f/Grants-Program/blob/master/applications/nftaa.md)
- **Milestone:** 3
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/iso8583_1_igorstojanov.md

| Number | Deliverable                 | Accepted                           | Link | Evaluation Notes |
| ------ | --------------------------- | ---------------------------------- | ---- | ---------------- |
| 0a.    | License                     | <ul><li>[x]</li></ul>             | [pallet](https://github.com/decenzio/pallet-nftaa/blob/main/LICENSE), [indexer](https://github.com/decenzio/stick/blob/main/LICENSE), [Kodadot](https://github.com/decenzio/nft-gallery/blob/main/LICENSE), [Testing repo](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/LICENSE) | All components are licensed under **MIT**. Please update the copyright for for Kodadot (2023 Kodadot) and Testing repo (2024 Decenzio) |
| 0b.    | Documentation               | <ul><li>[x]</li></ul>             | [nftaa-website](https://nftaa.xyz/), [Pallet wiki](https://deepwiki.com/decenzio/pallet-nftaa), [Testing guide](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/README.md#how-to-run) | Documentation is comprehensive: landing site, technical wiki, and setup guide are provided. The landing site looks modern|
| 0c.    | Testing and Testing Guide   | <ul><li>[x]</li></ul>             | [Video showcase](https://drive.proton.me/urls/Y9TA9JGMYW#9hulGiaT2SYL), [Testing guide](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/README.md#testing), [Unit tests](https://github.com/decenzio/nftaa/blob/main/src/tests.rs), [Live devnet testing](https://koda.nftaa.xyz/) | Testing is clearly demonstrated: video, written guide, unit tests, and live environment are provided. |
| 0d.    | Docker                      | <ul><li>[x]</li></ul>             | [Dockerfile](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/Dockerfile), [Docker setup guide](https://github.com/decenzio/polkadot-nftaa-proposal/blob/main/README.md#docker) | Dockerized deployment is included with instructions. I had some issues with building the image, see General Comment for more information. |
| 0e.    | Article                     | <ul><li>[x]</li></ul>             | [Medium article](https://decenzio.medium.com/nft-as-an-account-on-polkadot-nftaa-bf03f4693d0d) | High-level overview article adds project visibility and context. |
| 3a.    | Web app integration         | <ul><li>[x]</li></ul>             | [Live devnet](https://koda.nftaa.xyz/), [Marketplace repo](https://github.com/decenzio/nft-gallery), [Indexer repo](https://github.com/decenzio/stick), [Node repo](https://github.com/decenzio/polkadot-sdk) | Functional live devnet with integration and repos is provided. |
| 3b.    | Marketplace app integration | <ul><li>[x]</li></ul>             | [Live devnet](https://koda.nftaa.xyz/) | Demonstrates asset creation and trading in live environment. |


## General Notes

The submission appears complete and well-documented, with a live devnet, unit tests, a clear testing guide, and Dockerized setup. Licensing across repos is MIT. Public materials (website + article) help context-setting. 

Building Docker Compose gave me some issues with deprecated npm packages, please consider upgrading to latest version. See output below:

```
 > [migrator deps 4/4] RUN npm ci --production:                                                                                                                          
0.215 npm warn config production Use `--omit=dev` instead.                                                                                                               
2.600 npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.                                                                                          
3.122 npm warn deprecated apollo-server-types@3.8.0: The `apollo-server-types` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.                                                                                                                              
3.226 npm warn deprecated apollo-server-plugin-response-cache@3.7.1: The `apollo-server-plugin-response-cache` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/server-plugin-response-cache` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
3.264 npm warn deprecated apollo-datasource@3.3.2: The `apollo-datasource` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023 and October 22nd 2024, respectively). See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
3.267 npm warn deprecated apollo-server-plugin-base@3.7.2: The `apollo-server-plugin-base` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
3.270 npm warn deprecated apollo-server-errors@3.3.1: The `apollo-server-errors` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/server` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
3.288 npm warn deprecated apollo-server-env@4.2.1: The `apollo-server-env` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023). This package's functionality is now found in the `@apollo/utils.fetcher` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
3.311 npm warn deprecated apollo-reporting-protobuf@3.4.0: The `apollo-reporting-protobuf` package is part of Apollo Server v2 and v3, which are now deprecated (end-of-life October 22nd 2023 and October 22nd 2024, respectively). This package's functionality is now found in the `@apollo/usage-reporting-protobuf` package. See https://www.apollographql.com/docs/apollo-server/previous-versions/ for more details.
6.245 npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
```
