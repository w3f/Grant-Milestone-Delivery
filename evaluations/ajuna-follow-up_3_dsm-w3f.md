# Evaluation

- **Status:** Approved
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ajuna_network_follow_up.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License             |<ul><li>[x] </li></ul>| [Apache 2.0 / MIT / Unlicense](https://github.com/ajuna-network/Open-Grants-Program/issues/43)                                 |  |
| 0b.    | Documentation       |<ul><li>[x] </li></ul>| [Ducumentation](https://github.com/ajuna-network/Open-Grants-Program/issues/44)                                                |   |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [Implement testing code coverage min 70%](https://github.com/ajuna-network/Open-Grants-Program/issues/45) |  |
| 0d. | Article/Tutorial |<ul><li>[x] </li></ul>| [Article/Tutorial: Write article about the work in this grant](https://github.com/ajuna-network/Open-Grants-Program/issues/46) |  |
| 1. | Unity |<ul><li>[x] </li></ul> |  |
| 1a. | Video Tutorial |<ul><li>[x] </li></ul>| [Template Wallet](https://github.com/ajuna-network/Open-Grants-Program/issues/47) |  |
| 1b. | Video Tutorial |<ul><li>[x] </li></ul>| [Template GameEvent and Matchmaker](https://github.com/ajuna-network/Open-Grants-Program/issues/48) |  |
| 1c. | Video Tutorial |<ul><li>[x] </li></ul>| [Event, Balance and sending Extrinsics](https://github.com/ajuna-network/Open-Grants-Program/issues/49) |  |
| 2. | Unity |<ul><li>[x] </li></ul>| Tutorial for [Building and connecting with Unity](https://github.com/ajuna-network/Open-Grants-Program/issues/50) |  |
| 3. | Asset |<ul><li>[x] </li></ul>| [Asset Documentation](https://github.com/ajuna-network/Open-Grants-Program/issues/51) |  |
| 3a. | Asset |<ul><li>[x] </li></ul>| [Implementing a new chain and accessing it with unity](https://github.com/ajuna-network/Open-Grants-Program/issues/52) |  |
| 3b. | Asset |<ul><li>[x] </li></ul>| [Adding a custom pallet and accessing it in unity](https://github.com/ajuna-network/Open-Grants-Program/issues/53) |  |
| 3c. | Asset |<ul><li>[x] </li></ul>| [Integration Guide](https://github.com/ajuna-network/Open-Grants-Program/issues/54) |  |                                             

**General  Notes**

I followed and ran locally the video tutorials and all of them worked well. Just the asset documentation that we should double-check after being accepted by Unity (maybe in the next delivery). As there is a proof-of-submission it is enough for now. 

Some suggestions for improvement:
* Improve the error handling in the Wallet Demo since if you try to log in with the wrong password there is only a log in the console without any reason for the error. This also occurs when you try to create a new wallet with a weak password. 
* Explain in the video for adding a new extrinsic that you need to go back and generate again the DLLs. This is explained in another place but for who only see the videos will not know about that.
* Put the link for the source code branch in the video description in the videos which do not use the main branch. It take me a while to realize that I should use another branch to see the final solution implemented. 

