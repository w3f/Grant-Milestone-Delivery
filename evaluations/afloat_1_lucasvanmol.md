# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Afloat.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [hashed-substrate](https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE) <br> [marketplaces-ui](https://github.com/hashed-io/hashed-marketplaces-ui/blob/main/LICENSE) <br> [private-server](https://github.com/hashed-io/hashed-private-server/blob/main/LICENSE) <br> [private-client-api](https://github.com/hashed-io/hashed-private-client-api/blob/main/LICENSE) | MIT |
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/hashed-io/hashed-marketplaces-ui <br> https://github.com/hashed-io/hashed-substrate<br>  https://github.com/hashed-io/hashed-private-server <br> https://github.com/hashed-io/hashed-private-client-api | Documentation is generally great overall although additional instructions on running tests could be improved, e.g. having to run the `private-server` in order to test the `client-api`. |
| 0c. | Testing |<ul><li>[x] </li></ul>| https://github.com/hashed-io/hashed-substrate/blob/main/pallets/fruniques/src/tests.rs <br> https://github.com/hashed-io/hashed-substrate/blob/main/pallets/gated-marketplace/src/tests.rs | Tests pass for `gated-marketplace` pallet, but one fails for `fruniques` (but the issue is [known](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/fruniques/src/tests.rs#L71)). Good coverage. |
| 0d. | Video |<ul><li>[x] </li></ul>| [English](https://drive.google.com/file/d/1Gzz1scZt4LSBPrQ30XXZzclhAXjjdUHJ/view?usp=sharing) and [Spanish](https://drive.google.com/file/d/12HGvMEMDU5NMRXcEa8m3gkuqjwO3iONV/view?usp=sharing) versions | 14 minute video demonstrating the deliverables |
| 0e. | Article |<ul><li>[x] </li></ul>| [English](https://docs.google.com/document/d/1bDswb619nkdL0xt41GEJEtyLcCOc3LO-M-dB2RdDr9s/edit?usp=sharing) and [Spanish](https://docs.google.com/document/d/1DNHgONQrZfpG4f0f79n6pS9h9jUQQDW52OlWCw1TiJA/edit?usp=sharing) versions | Article describing general use case of gated Marketplaces and how Afloat uses them |
| 1. | Set Profile and Upload KYC Materials |<ul><li>[x] </li></ul>| https://github.com/hashed-io/hashed-private-server https://github.com/hashed-io/hashed-private-client-api  | Works |
| 2. | KYC Admin |<ul><li>[x] </li></ul>| https://github.com/hashed-io/hashed-marketplaces-ui https://github.com/hashed-io/hashed-substrate | Works|
| 3. | Slides |<ul><li>[x] </li></ul>| https://drive.google.com/file/d/1_YgnWkFoFXhjG1XdSFGa1F_Vbz1HkwA8/view?usp=sharing | | 

## General Notes

Overall, a very nice delivery and promising project.

**Repositories** 
(all MIT licensed)
| Component | Repo | Language |
| -----: | ----------- | ------- |
| Marketplace UI | https://github.com/hashed-io/hashed-marketplaces-ui | Quasar/Vue |
| Marketplace pallets | https://github.com/hashed-io/hashed-substrate | Rust |
| Confidential Documents Server | https://github.com/hashed-io/hashed-private-server | Javascript |
| Confidential Documents API | https://github.com/hashed-io/hashed-private-client-api | Javascript |