# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ISO20022.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Original Notes | Links |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | Apache 2.0 | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | Design documents with details on what it takes for Polkadot/Substrate to support ISO20022 messages, gaps and solution recommendations | [Document](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit?usp=sharing) |
| 1. | Design the use case | <ul><li>[x] </li></ul> | Design an ISO20022 cross border payment use case with persona, end-to-end flow | [Use case](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.jbusns55fqv8) |
| 2. | Identify ISO20022 message types and examples for X-border payment | <ul><li>[x] </li></ul> | Specify all ISO20022 message types with examples for cross border payment, including reference data fields | [Messages](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.3bizhqqfqokf) |
| 3. | Map ISO20022 <> XCM messages | <ul><li>[x] </li></ul> | Map ISO20022 cross-border payment message types to a set of XCM messages with processing logic, including identifying data type incompatibilities between IS20022 and XCM, replacement data types and necessary XML transformations | [XCM](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.edn1td52fpla) [Mappings](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.vcikuv2j31oe) |
| 4. | Map ISO20022 <> XCMP | <ul><li>[x] </li></ul> | Map ISO20022 cross-border payment messageing to XCMP for cross parachains transport| [Asset Transfer XCMs](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.y5pbl1ktt009) |
| 5. | Specify off chain data storage | <ul><li>[x] </li></ul> | Specify off chain data structure, storage and indexes for ISO20022 messages, payments, events, stats| [Storage](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.61lo4pidrxdc) |
| 6. | Specify off chain worker logic | <ul><li>[x] </li></ul> | Specify OCW logic for ISO20022 message processing, payment flow, error handling| [OCW](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.ju6ykbwdfekp) |
| 7. | Specify Substrate pallets | <ul><li>[x] </li></ul> | Specify custom pallet(s) to implement X-border payments and OCW integrations| [pallets](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.8b80onxdand3) |
| 8. | Recommend blockchain gas fees handling in ISO20022 framework | <ul><li>[x] </li></ul> | Recommend solution how to fulfill blockchain gas fees in ISO20022 framework | [Fees and charges](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.2b7eq0ofq9wv) |
| 8. | Recommend how to implement ISO20022 cross-border charges & fees | <ul><li>[x] </li></ul> | Recommend solution how to implement ISO20022 cross-border payment inter-bank / X-border payment charges and fees | [Fee recommendations](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.2b7eq0ofq9wv) |
| 9. | Specify query of ISO20022 messages and transactions | <ul><li>[x] </li></ul> | Specify query interface to retrieve selected ISO20022 messages and transactions| [Queries](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/edit#heading=h.ykoxriwep1ug) |  
| 10. | Publication to share with the broader community and get additional feedback | <ul><li>[x] </li></ul> | Medium article covering: 1) feasibility and comparative advantages of Substrate based ISO20022 compliant cross-border payments on Dotsama chain; 2) benefits of such a solution in contrast to traditional centralized cross-border payments; 3) recommendation of future works towards a scalable, performant and cost effective solution supporting ISO20022 on Polkadot/Kusama chains and beyond. | Draft and publish [Medium article](https://medium.com/@0xrwas/cross-border-payment-proof-of-concept-supporting-iso20022-messages-on-the-polkadot-blockchain-3846910fc8de) |

# General Notes

I did learn some things from this [report](https://docs.google.com/document/d/1pMY0D-vTBEVq65Ro4PW3LzXrT1ZVl9l4r7jIMHmfBqs/), though I'm not quite sure which audience this piece is geared to. I do understand that even for a technical audience, it is still necessary to re-explain some beginner concepts. But a lot of the early pages were copied almost verbatim from the wiki, almost as if to fill space.

The team did heed my suggestions and resolved all my review comments on the document. There is also a lot of good information, especially in pages 15 - 22. 
