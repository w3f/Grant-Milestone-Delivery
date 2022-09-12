# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate_client_java.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/strategyobject/substrate-client-java/blob/v0.2.0/LICENSE) | Apache 2.0 |
| 1. | Documentation | <ul><li>[x] </li></ul> | [HowTo](https://github.com/strategyobject/substrate-client-java/wiki/HowTo-Examples#listen-to-events) | mostly javadocs, team doesn't use other comments
| 2. | Testing | <ul><li>[x] </li></ul> | [Tests](https://github.com/strategyobject/substrate-client-java/tree/v0.2.0/api/src/test/java/com/strategyobject/substrateclient/api/pallet) | Good test coverage, CI and integration tests |
| 3. | Wiki | <ul><li>[x] </li></ul> | [Wiki](https://github.com/strategyobject/substrate-client-java/wiki/Pallet#event) | Still looks rather sparse rather than "explaining the details of the implementation" as described |
| 4. | Events support | <ul><li>[x] </li></ul> | [Events deserialization](https://github.com/strategyobject/substrate-client-java/tree/v0.2.0/pallet/src/main/java/com/strategyobject/substrateclient/pallet/events) [Events definitions](https://github.com/strategyobject/substrate-client-java/tree/v0.2.0/api/src/main/java/com/strategyobject/substrateclient/api/pallet) | | 

## General Notes

The project is advancing at a good pace and the team made several sensible structural changes to the project outside the strict scope of this milestone.

The documentation is rather concise, but the code is well-readable and thorough Javadocs are provided at least for the public-facing API.

Events have to be manually implemented for now, but the team might implement generating from metadata with the next milestone (which otherwise would be milestone 5).
