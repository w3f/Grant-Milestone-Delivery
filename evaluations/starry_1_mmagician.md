# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/Starry_Network.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable   | Accepted               | Link                                                                                                                                                                   | Evaluation Notes                                                                                      |
|--------|---------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------|
| 0a.    | License       | <ul><li>[x] </li></ul> | [Apache License](https://github.com/Starry-Network/starry_node/blob/master/LICENSE)                                                                                    |                                                                                                       |
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node#pallets-documentation](https://github.com/Starry-Network/starry_node#pallets-documentation)                             |                                                                                                       |
| 0c.    | Testing Guide | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node#test](https://github.com/Starry-Network/starry_node#test)                                                               |                                                                                                       |
| 0d.    | Article       | <ul><li>[x] </li></ul> | [Introducing the Starry Protocol](https://starry.substack.com/p/introducing-the-starry-protocol)                                                                       |                                                                                                       |
| 0e.    | Tutorial      | <ul><li>[x] </li></ul> | [Starry's Documentation](https://github.com/Starry-Network/starry_node#starrys-documentation)                                                                          |                                                                                                       |
| 1a.    | Node Repo     | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node](https://github.com/Starry-Network/starry_node)                                                                         |                                                                                                       |
| 2a.    | Pallet_SubNFT | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node/blob/master/pallets/pallet-sub](https://github.com/Starry-Network/starry_node/blob/master/pallets/pallet-sub)           |                                                                                                       |
| 2b.    | Pallet_NFTDAO | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node/tree/master/pallets/pallet-nftdao](https://github.com/Starry-Network/starry_node/tree/master/pallets/pallet-nftdao)     |                                                                                                       |
| 2c.    | Pallet_EX     | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node/tree/master/pallets/pallet-exchange](https://github.com/Starry-Network/starry_node/tree/master/pallets/pallet-exchange) |                                                                                                       |
| 3.     | Front End     | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/app](https://github.com/Starry-Network/app)                                                                                         | The UX is not the best. Further design work is needed to make the portal more appealing to the users. |
| 4.     | Docker        | <ul><li>[x] </li></ul> | [https://github.com/Starry-Network/starry_node#run-in-docker](https://github.com/Starry-Network/starry_node#run-in-docker)                                             |                                                                                                       |
| 5.     | PSP           | <ul><li>[x] </li></ul> | [https://github.com/w3f/PSPs/pull/16](https://github.com/w3f/PSPs/pull/16)                                                                                             | While the PSP was indeed created, there was no follow-up from the author                              |

## General Notes

Overall the delivery was problematic.
There seem to have been issues with displaying the tokens when the setup is running locally. This was experienced by two evaluators with their local setup.

Normally, this would not have been accepted, however the team has gone out of their way to provision a node in the cloud and gave us access to test it. I was able to confirm that the tokens created there indeed show up in the **locally running front-end**. Thus, it is likely not the issue of the react app itself.
