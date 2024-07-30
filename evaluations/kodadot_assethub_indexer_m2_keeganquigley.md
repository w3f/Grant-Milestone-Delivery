# Evaluation


- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/kodadot_assethub_nft_m2.md
- **Milestone:** 2

| Number | Deliverable                                   | Accepted | Link                                                                                                                                | Notes                          |
| ------ | --------------------------------------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| 0a.    | Licensing                                     | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/kodadot/stick/blob/main/LICENSE)                                                                       | MIT                            |
| 0b.    | Documentation                                 | <ul><li>[x] </li></ul> | [an explicit README file to guide the project setup and execution](https://github.com/kodadot/stick/blob/feat/swap-it-up/README.md) | -                              |
| 0c.    | Test Guidelines                               | <ul><li>[x] </li></ul> | [Testing](https://github.com/kodadot/stick/tree/feat/swap-it-up/tests)                                                              | -                              |
| 0d.    | Docker Integration                            | <ul><li>[x] </li></ul> | [Docker Compose](https://github.com/kodadot/stick/blob/feat/swap-it-up/docker-compose.yml)                                          | -                              |
| 1a.    | Atomic Swaps Schema Development               | <ul><li>[x] </li></ul> | [GraphQL schema swap.](https://github.com/kodadot/stick/blob/feat/swap-it-up/schema.graphql#L198)                                   | -                              |
| 1b.    | Atomic Swaps CREATE Handler                   | <ul><li>[x] </li></ul> | [Create Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/createSwap.ts)                             | -                              |
| 1c.    | Atomic Swaps CANCEL Event                     | <ul><li>[x] </li></ul> | [Cancel Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/cancelSwap.ts)                             | -                              |
| 1d.    | Atomic Swaps CLAIM Event                      | <ul><li>[x] </li></ul> | [Claim Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/claim.ts)                                   | -                              |
| 1e.    | Atomic Swaps with Surcharge Handler           | <ul><li>[x] </li></ul> | [Create Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/createSwap.ts#L48)                         | -                              |
| 2a.    | Offers Schema Development                     | <ul><li>[x] </li></ul> | [GraphQL schema offer.](https://github.com/kodadot/stick/blob/feat/swap-it-up/schema.graphql#L173)                                  | -                              |
| 2b.    | Offers CREATE Handler                         | <ul><li>[x] </li></ul> | [Create Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/createSwap.ts#L25)                         | -                              |
| 2c.    | Offers CANCEL Event                           | <ul><li>[x] </li></ul> | [Cancel Handler](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/nfts/cancelSwap.ts#L23)                         | -                              |
| 3a.    | Token Schema Development                      | <ul><li>[x] </li></ul> | [GraphQL schema token.](https://github.com/kodadot/stick/blob/feat/swap-it-up/schema.graphql#L40)                                   | -                              |
| 3b.    | Token CRUD Handler                            | <ul><li>[x] </li></ul> | [Handling Token](https://github.com/kodadot/stick/blob/feat/swap-it-up/src/mappings/shared/token/tokenAPI.ts)                       | -                              |
| 4a.    | API Implementation: collectionById            | <ul><li>[x] </li></ul> | [collectionById](https://github.com/vikiival/kodaquery/blob/main/main.ts#L36)                                                       | -                              |
| 4b.    | API Implementation: collectionListByIssuer    | <ul><li>[x] </li></ul> | [collectionListByIssuer](https://github.com/vikiival/kodaquery/blob/main/main.ts#L44)                                               | -                              |
| 4c.    | API Implementation: collectionListByName      | <ul><li>[x] </li></ul> | [collectionListByName](https://github.com/vikiival/kodaquery/blob/main/main.ts#L53)                                                 | -                              |
| 4d.    | API Implementation: collectionListByOwner     | <ul><li>[x] </li></ul> | [collectionListByOwner](https://github.com/vikiival/kodaquery/blob/main/main.ts#L62)                                                | -                              |
| 4e.    | API Implementation: eventList                 | <ul><li>[x] </li></ul> | [eventList](https://github.com/vikiival/kodaquery/blob/main/main.ts#L72)                                                            | -                              |
| 4f.    | API Implementation: eventListByAddress        | <ul><li>[x] </li></ul> | [eventListByAddress](https://github.com/vikiival/kodaquery/blob/main/main.ts#L80)                                                   | -                              |
| 4g.    | API Implementation: eventListByCollectionId   | <ul><li>[x] </li></ul> | [eventListByCollectionId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L89)                                              | -                              |
| 4h.    | API Implementation: eventListByInteraction    | <ul><li>[x] </li></ul> | [eventListByInteraction](https://github.com/vikiival/kodaquery/blob/main/main.ts#L98)                                               | -                              |
| 4i.    | API Implementation: eventListByItemId         | <ul><li>[x] </li></ul> | [eventListByItemId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L107)                                                   | -                              |
| 4j.    | API Implementation: itemById                  | <ul><li>[x] </li></ul> | [itemById](https://github.com/vikiival/kodaquery/blob/main/main.ts#L117)                                                            | -                              |
| 4k.    | API Implementation: itemListByCollectionId    | <ul><li>[x] </li></ul> | [itemListByCollectionId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L125)                                              | -                              |
| 4l.    | API Implement: itemListByCollectionIdAndOwner | <ul><li>[x] </li></ul> | [itemListByCollectionIdAndOwner](https://github.com/vikiival/kodaquery/blob/main/main.ts#L134)                                      | -                              |
| 4m.    | API Implement: itemListByCollectionIdList     | <ul><li>[x] </li></ul> | [itemListByCollectionIdList](https://github.com/vikiival/kodaquery/blob/main/main.ts#L144)                                          | -                              |
| 4n.    | API Implementation: itemListByIssuer          | <ul><li>[x] </li></ul> | [itemListByIssuer](https://github.com/vikiival/kodaquery/blob/main/main.ts#L153)                                                    | -                              |
| 4o.    | API Implementation: itemListByName            | <ul><li>[x] </li></ul> | [itemListByName](https://github.com/vikiival/kodaquery/blob/main/main.ts#L162)                                                      | -                              |
| 4p.    | API Implementation: itemListByMetadataId      | <ul><li>[x] </li></ul> | [itemListByMetadataId](https://github.com/vikiival/kodaquery/blob/main/main.ts#L171)                                                | -                              |
| 4r.    | API Implement: itemListByMetadataIdMatch      | <ul><li>[x] </li></ul> | [itemListByMetadataIdMatch](https://github.com/vikiival/kodaquery/blob/main/main.ts#L190)                                           | -                              |
| 4s.    | API Implementation: itemListByOwner           | <ul><li>[x] </li></ul> | [itemListByOwner](https://github.com/vikiival/kodaquery/blob/main/main.ts#L189)                                                     | -                              |

# General Notes

Sample processor works and displays correctly in browser:

<details>
  <summary>Output</summary>

```ts
                           "timestamp": "2021-09-24T16:38:06.509Z",
                           "collectionId": "u-1",
                           "sn": "491",
                           "to": "G22JL5wM6MDvku8jYiKShL2N8c6HfVgcWaR3GmpajtgR9Fc"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-1-491 from DFi8qw43wy5ihCJKpnRYHAkv7ppgWZJL4fYrnbCHU9W4pcp to G22JL5wM6MDvku8jYiKShL2N8c6HfVgcWaR3GmpajtgR9Fc
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824023
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "Hxz9CRinkTf5JEQ7bkAeUw55TGGxkuRpPDhSrxSbFAY5y7X",
                           "blockNumber": "824023",
                           "timestamp": "2021-09-24T16:38:18.583Z",
                           "collectionId": "u-2",
                           "sn": "2429",
                           "to": "Gecf3Bn2cF2buiESKSNrhimEHdwLwpFmSkQy4fvRbXbBZAh"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-2429 from Hxz9CRinkTf5JEQ7bkAeUw55TGGxkuRpPDhSrxSbFAY5y7X to Gecf3Bn2cF2buiESKSNrhimEHdwLwpFmSkQy4fvRbXbBZAh
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824023
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "GkAtAEia2c2zQUrzwey8EqnegoEkGiKbw6m5emXL1CgXrtr",
                           "blockNumber": "824023",
                           "timestamp": "2021-09-24T16:38:18.583Z",
                           "collectionId": "u-2",
                           "sn": "108",
                           "to": "EGV3Qmrq1qMxeXW5uPXXWTHwXZDQ6384vv9pKAUFwxYw9rw"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-108 from GkAtAEia2c2zQUrzwey8EqnegoEkGiKbw6m5emXL1CgXrtr to EGV3Qmrq1qMxeXW5uPXXWTHwXZDQ6384vv9pKAUFwxYw9rw
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824024
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "Cx52PDPSGvkTQqYb2LdNn3xnuo4JRUnmTaKTRzrSk6gXB2j",
                           "blockNumber": "824024",
                           "timestamp": "2021-09-24T16:38:30.444Z",
                           "collectionId": "u-2",
                           "sn": "2312",
                           "to": "CpX6D7sxvZKUeaJUpS6Eb8Y2g79F7DEZXU1QucUX5o2HyfK"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-2312 from Cx52PDPSGvkTQqYb2LdNn3xnuo4JRUnmTaKTRzrSk6gXB2j to CpX6D7sxvZKUeaJUpS6Eb8Y2g79F7DEZXU1QucUX5o2HyfK
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824024
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "Er7RXEYWjdtvSoQBE6GGjYyoBRuky5nMu4NFcXfRqjojnUT",
                           "blockNumber": "824024",
                           "timestamp": "2021-09-24T16:38:30.444Z",
                           "collectionId": "u-2",
                           "sn": "2719",
                           "to": "GSHkVxCvovrZ8EZSpAijazEE5ivHR1FFpN5qev73MZzqRpZ"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-2719 from Er7RXEYWjdtvSoQBE6GGjYyoBRuky5nMu4NFcXfRqjojnUT to GSHkVxCvovrZ8EZSpAijazEE5ivHR1FFpN5qev73MZzqRpZ
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824025
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "DY8iuSt31L8oZv5VHz45RZieAAjwqgji43MctGGBdMmyE1A",
                           "blockNumber": "824025",
                           "timestamp": "2021-09-24T16:38:42.780Z",
                           "collectionId": "u-0",
                           "sn": "2469",
                           "to": "ED45ZRS573WZs1AoB6WbvD26v2uc7johtNT77sfEbvuZnuj"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-0-2469 from DY8iuSt31L8oZv5VHz45RZieAAjwqgji43MctGGBdMmyE1A to ED45ZRS573WZs1AoB6WbvD26v2uc7johtNT77sfEbvuZnuj
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824025
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "H28baDH1YU8QCxLh6qhjJEUuTZoWZkhjx5PKNvTMWWiCJqh",
                           "blockNumber": "824025",
                           "timestamp": "2021-09-24T16:38:42.780Z",
                           "collectionId": "u-2",
                           "sn": "1351",
                           "to": "DgC4XNwFU99g9NPkT37khhHJYokPSDMDGAE3bdyjHhHzzNx"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-1351 from H28baDH1YU8QCxLh6qhjJEUuTZoWZkhjx5PKNvTMWWiCJqh to DgC4XNwFU99g9NPkT37khhHJYokPSDMDGAE3bdyjHhHzzNx
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824026
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "H2Zq7v3BULdN4zTMnJ2R2jp589ezQLUWPVgzRaBLiqka3wX",
                           "blockNumber": "824026",
                           "timestamp": "2021-09-24T16:38:54.829Z",
                           "collectionId": "u-1",
                           "sn": "2431",
                           "to": "GcbjT6XsjsidC7F18ghTTeGzdagSQDfxye5WEUWfCehTaqf"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-1-2431 from H2Zq7v3BULdN4zTMnJ2R2jp589ezQLUWPVgzRaBLiqka3wX to GcbjT6XsjsidC7F18ghTTeGzdagSQDfxye5WEUWfCehTaqf
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824027
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "Cgqsm4NcT9k4odAwrz7zG4hcnzMwwAQf91tyg5FoCKUXPSA",
                           "blockNumber": "824027",
                           "timestamp": "2021-09-24T16:39:06.545Z",
                           "collectionId": "u-2",
                           "sn": "3043",
                           "to": "F2GoUh286UrgrzkEuK77THDnGSo4ugzwgp4B15F5fdcUVpX"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-3043 from Cgqsm4NcT9k4odAwrz7zG4hcnzMwwAQf91tyg5FoCKUXPSA to F2GoUh286UrgrzkEuK77THDnGSo4ugzwgp4B15F5fdcUVpX
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824028
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "GZeemkrSLctPAwHDpXnq3NPJFMKCkgPFeLrRwapDm5zohqw",
                           "blockNumber": "824028",
                           "timestamp": "2021-09-24T16:39:18.294Z",
                           "collectionId": "u-0",
                           "sn": "2192",
                           "to": "EPXKWpDZcxJaL9Vn29Vv95NYYgmb9ncAqpfhK8rdVKETE4j"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-0-2192 from GZeemkrSLctPAwHDpXnq3NPJFMKCkgPFeLrRwapDm5zohqw to EPXKWpDZcxJaL9Vn29Vv95NYYgmb9ncAqpfhK8rdVKETE4j
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824028
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "HHPeD1USSLFXoXXxktPzCzPEJCgpjtfxny1jfcWSFEbpEev",
                           "blockNumber": "824028",
                           "timestamp": "2021-09-24T16:39:18.294Z",
                           "collectionId": "u-1",
                           "sn": "240",
                           "to": "EE2X7VUZtBMekM3tyy1xEAGWMvUHT1YTtoGht25qxfRtUd4"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-1-240 from HHPeD1USSLFXoXXxktPzCzPEJCgpjtfxny1jfcWSFEbpEev to EE2X7VUZtBMekM3tyy1xEAGWMvUHT1YTtoGht25qxfRtUd4
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824029
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "FtYLatWSsvvkaVrRLPWSbuvsWFpxD39gEw6h98LU7czShrp",
                           "blockNumber": "824029",
                           "timestamp": "2021-09-24T16:39:30.660Z",
                           "collectionId": "u-1",
                           "sn": "511",
                           "to": "H2Dvi5iiBhXL8m2jEdE5YMpBxp52fGJDnQbpewV5RoVsfYo"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-1-511 from FtYLatWSsvvkaVrRLPWSbuvsWFpxD39gEw6h98LU7czShrp to H2Dvi5iiBhXL8m2jEdE5YMpBxp52fGJDnQbpewV5RoVsfYo
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824029
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "DrZZnynDaTYqyv1M54qavkTbkn6iszZgMh2R2p5kC77UMve",
                           "blockNumber": "824029",
                           "timestamp": "2021-09-24T16:39:30.660Z",
                           "collectionId": "u-2",
                           "sn": "1375",
                           "to": "GHbnrGrFHX6jMWRtDLjC7HeRk4yLfhfUenu6maq7VdntzyW"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-1375 from DrZZnynDaTYqyv1M54qavkTbkn6iszZgMh2R2p5kC77UMve to GHbnrGrFHX6jMWRtDLjC7HeRk4yLfhfUenu6maq7VdntzyW
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824029
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "DwANEv486UGDzWHe6iS2NhDeZD4GL78aTv1fy38MpTSwS8p",
                           "blockNumber": "824029",
                           "timestamp": "2021-09-24T16:39:30.660Z",
                           "collectionId": "u-0",
                           "sn": "1871",
                           "to": "Cr9d8GgrpFAp5f9oLysChnHUNdAHvGi8WuFsyQRGzFnszYW"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-0-1871 from DwANEv486UGDzWHe6iS2NhDeZD4GL78aTv1fy38MpTSwS8p to Cr9d8GgrpFAp5f9oLysChnHUNdAHvGi8WuFsyQRGzFnszYW
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824029
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "CgR1ksYHvxiKdCdTCC2ZhyuDU4w7TDzQUGGi9y5jNFDvQ8P",
                           "blockNumber": "824029",
                           "timestamp": "2021-09-24T16:39:30.660Z",
                           "collectionId": "u-2",
                           "sn": "801",
                           "to": "JHVGHUsT9fYqkG6yYW2uqYGzBZR1dvnL7KNYgJkv8fKu5R4"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-2-801 from CgR1ksYHvxiKdCdTCC2ZhyuDU4w7TDzQUGGi9y5jNFDvQ8P to JHVGHUsT9fYqkG6yYW2uqYGzBZR1dvnL7KNYgJkv8fKu5R4
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824029
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "H2BmBRqpKqHP1YirAgWERGTAQvMiDpkvkm5iVQYqY1E5qMw",
                           "blockNumber": "824029",
                           "timestamp": "2021-09-24T16:39:30.660Z",
                           "collectionId": "u-1",
                           "sn": "1641",
                           "to": "CjSNNe37YFEd9DYxix9tvVVaRBjTd6ruRWT3UFiwUGi7Cf7"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-1-1641 from H2BmBRqpKqHP1YirAgWERGTAQvMiDpkvkm5iVQYqY1E5qMw to CjSNNe37YFEd9DYxix9tvVVaRBjTd6ruRWT3UFiwUGi7Cf7
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824030
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "HZaYDzTAEXQSyazQC83szHEPRnZSeLi961LQDpcVKiAsHkU",
                           "blockNumber": "824030",
                           "timestamp": "2021-09-24T16:39:42.752Z",
                           "collectionId": "u-1",
                           "sn": "305",
                           "to": "E8gv3RjJEcvyZmiE7BJ8MRsX17qRzYqBENCBZdPKtBhcmH6"
                         }
16:14:28 INFO  squid:log 💚 [SEND] u-1-305 from HZaYDzTAEXQSyazQC83szHEPRnZSeLi961LQDpcVKiAsHkU to E8gv3RjJEcvyZmiE7BJ8MRsX17qRzYqBENCBZdPKtBhcmH6
16:14:28 DEBUG squid:log Processing Uniques.Transferred
16:14:28 INFO  squid:log ⏳ [SEND] 824030
16:14:28 DEBUG squid:log [SEND] {
                           "caller": "FF6LZGUvB7qcKphZ8Z7V1tJEEcxLZRtpZyobwGZ78Mzagvr",
                           "blockNumber": "824030",
                           "timestamp": "2021-09-24T16:39:42.752Z",
                           "collectionId": "u-2",
                           "sn": "1331",
                           "to": "HUeY9ac58v8yZcqYaFhZRu7xTHpjS8zMFyYiegrAwrL1hXJ"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-2-1331 from FF6LZGUvB7qcKphZ8Z7V1tJEEcxLZRtpZyobwGZ78Mzagvr to HUeY9ac58v8yZcqYaFhZRu7xTHpjS8zMFyYiegrAwrL1hXJ
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824031
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "DViNPtE47fxhSJDEspMZ8erdUw49Se2KeJ6NCmbayJLeUVB",
                           "blockNumber": "824031",
                           "timestamp": "2021-09-24T16:39:54.480Z",
                           "collectionId": "u-1",
                           "sn": "2535",
                           "to": "GsytPWTndtba6TkfeYcRWpqp3h15Wp4p8nk3VsZMQmCq2CH"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-1-2535 from DViNPtE47fxhSJDEspMZ8erdUw49Se2KeJ6NCmbayJLeUVB to GsytPWTndtba6TkfeYcRWpqp3h15Wp4p8nk3VsZMQmCq2CH
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824031
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "FChV1RftMPpFcgzR3PwRMFEwvnZaipkzoPbVoZwpgtZqyrh",
                           "blockNumber": "824031",
                           "timestamp": "2021-09-24T16:39:54.480Z",
                           "collectionId": "u-1",
                           "sn": "121",
                           "to": "EfAQrzthcADWWecbHEEX6dZAtGa9srrUAK4es5NC8xfdnLT"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-1-121 from FChV1RftMPpFcgzR3PwRMFEwvnZaipkzoPbVoZwpgtZqyrh to EfAQrzthcADWWecbHEEX6dZAtGa9srrUAK4es5NC8xfdnLT
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824031
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "GhBt5U9r7yQ6dmYgaS8SxKvmzCLqKsr14XgsjuMZdx815qy",
                           "blockNumber": "824031",
                           "timestamp": "2021-09-24T16:39:54.480Z",
                           "collectionId": "u-2",
                           "sn": "3206",
                           "to": "GefnjhSm2kU2F1RcKFMvqoJXjQWTTXE6MquAptF9osWZk73"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-2-3206 from GhBt5U9r7yQ6dmYgaS8SxKvmzCLqKsr14XgsjuMZdx815qy to GefnjhSm2kU2F1RcKFMvqoJXjQWTTXE6MquAptF9osWZk73
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824031
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "FPfazdrXpU8qe4kyvDQsJH8dJTxKp7ypbtNoNdV4WJzkA9e",
                           "blockNumber": "824031",
                           "timestamp": "2021-09-24T16:39:54.480Z",
                           "collectionId": "u-0",
                           "sn": "25",
                           "to": "D6CPLK6wtJUpEMv9ghgx3wb85D6U9zLTfPgSdMvyfufeG9f"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-0-25 from FPfazdrXpU8qe4kyvDQsJH8dJTxKp7ypbtNoNdV4WJzkA9e to D6CPLK6wtJUpEMv9ghgx3wb85D6U9zLTfPgSdMvyfufeG9f
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824032
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "HYwJGv3YPZw5yUtADciYgBvVXW2joPvvgSonGUQK3efCBEk",
                           "blockNumber": "824032",
                           "timestamp": "2021-09-24T16:40:06.492Z",
                           "collectionId": "u-1",
                           "sn": "3007",
                           "to": "JGvvtThfaSAP3vfuPC3qrRgCzSAdpZcCXveofdpPmq51ZqJ"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-1-3007 from HYwJGv3YPZw5yUtADciYgBvVXW2joPvvgSonGUQK3efCBEk to JGvvtThfaSAP3vfuPC3qrRgCzSAdpZcCXveofdpPmq51ZqJ
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824032
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "EMDiJVH88dbTt55Seda2hjWh1LJ2TxTHVUjvq1DWSWLp3pQ",
                           "blockNumber": "824032",
                           "timestamp": "2021-09-24T16:40:06.492Z",
                           "collectionId": "u-0",
                           "sn": "2182",
                           "to": "CjCZ82R4m6ScgW2y8NkPxwzfJWnVK2yVrUnQHJS8ia5F8yg"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-0-2182 from EMDiJVH88dbTt55Seda2hjWh1LJ2TxTHVUjvq1DWSWLp3pQ to CjCZ82R4m6ScgW2y8NkPxwzfJWnVK2yVrUnQHJS8ia5F8yg
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824032
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "CrdYGcufhngvK3VUPhwPe6K7PBG6JwrRebaMJkGqcUVvR8Z",
                           "blockNumber": "824032",
                           "timestamp": "2021-09-24T16:40:06.492Z",
                           "collectionId": "u-1",
                           "sn": "1336",
                           "to": "EZzLLbrjLsnyVh7p1QPw4FKU8E5fa4ia8kAtQXt9jHBkUyB"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-1-1336 from CrdYGcufhngvK3VUPhwPe6K7PBG6JwrRebaMJkGqcUVvR8Z to EZzLLbrjLsnyVh7p1QPw4FKU8E5fa4ia8kAtQXt9jHBkUyB
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824032
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "H4ejywW39e8xx2ZxMzTR7rGsvwhqBoZ2SADcKicz8ACH1G1",
                           "blockNumber": "824032",
                           "timestamp": "2021-09-24T16:40:06.492Z",
                           "collectionId": "u-1",
                           "sn": "2874",
                           "to": "FSG47orCZ5fjwWshvyELTnSEzQEC6Hymd7H17Dr561GLtUE"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-1-2874 from H4ejywW39e8xx2ZxMzTR7rGsvwhqBoZ2SADcKicz8ACH1G1 to FSG47orCZ5fjwWshvyELTnSEzQEC6Hymd7H17Dr561GLtUE
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824032
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "DBSbCw7UEsRo5E73aYvVYjp1DHTd4xiW5HEag8FAFCFCNwg",
                           "blockNumber": "824032",
                           "timestamp": "2021-09-24T16:40:06.492Z",
                           "collectionId": "u-1",
                           "sn": "2529",
                           "to": "Dig8buRuwT1RHH2RAWiLW4mDpU4wpv6GWAbsYEmbXtt4Qsy"
                         }
16:14:29 INFO  squid:log 💚 [SEND] u-1-2529 from DBSbCw7UEsRo5E73aYvVYjp1DHTd4xiW5HEag8FAFCFCNwg to Dig8buRuwT1RHH2RAWiLW4mDpU4wpv6GWAbsYEmbXtt4Qsy
16:14:29 DEBUG squid:log Processing Uniques.Transferred
16:14:29 INFO  squid:log ⏳ [SEND] 824032
16:14:29 DEBUG squid:log [SEND] {
                           "caller": "CgasYz6n7Cer4XbC1pkFNN5mpq3SqNwjn2sU2ZNSqFiohvU",
                           "blockNumber": "824032",
```
</details>

Grantee kept a detailed log here https://github.com/kodadot/stick/pull/294

Hosted version works as well https://squid.subsquid.io/speck/graphql

## Testing

6 unit tests passing:

```ts
 RUN  v1.4.0 /home/ubuntu/stick

stdout | final (node:internal/console/constructor:513:34)
┌────────────────┬───────────────────────────────────────────────────────────┐
│ (index)        │ Values                                                    │
├────────────────┼───────────────────────────────────────────────────────────┤
│ CHAIN          │ 'kusama'                                                  │
│ ARCHIVE_URL    │ 'https://v2.archive.subsquid.io/network/asset-hub-kusama' │
│ NODE_URL       │ 'wss://kusama-asset-hub-rpc.polkadot.io'                  │
│ STARTING_BLOCK │ 323750                                                    │
│ disabledRPC    │ false                                                     │
│ environment    │ 'production'                                              │
└────────────────┴───────────────────────────────────────────────────────────┘

 ✓ tests/index.test.ts (6)
   ✓ Helpers (6)
     ✓ onlyValue (2)
       ✓ should return a value
       ✓ should not return a value
     ✓ addressOf (2)
       ✓ should return a value
       ✓ should throw on invalid
     ✓ unHex (2)
       ✓ should return a value
       ✓ should throw on invalid

 Test Files  1 passed (1)
      Tests  6 passed (6)
   Start at  20:17:05
   Duration  909ms (transform 59ms, setup 0ms, collect 670ms, tests 14ms, environment 0ms, prepare 68ms)
```
