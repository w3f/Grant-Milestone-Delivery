# Evaluation

- **Status:** Accepted.
- **Application Document:** [ParaSpell Application](https://github.com/w3f/Grants-Program/blob/master/applications/ParaSpell.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License |[License](https://github.com/dudo50/ParaSpell/blob/main/LICENCE)| MIT| 
| 0b.  | Documentation | <ul><li>[x] </li></ul> |[Readme.md](https://github.com/dudo50/ParaSpell/blob/main/README.md) <br >[Inline documentation commit](https://github.com/dudo50/ParaSpell/commit/2fb7b9c2a4bf6bf9602abced3f5662be96f2bc65)| Good inline documentation.| 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> |[SDK UNIT TESTS Commit](https://github.com/paraspell/sdk/commit/b4fd9b609c6f299309a4b27450f69cd2445fb1db), [Readme.md](https://github.com/dudo50/ParaSpell/blob/main/README.md)| Unit tests cover sdk core functionalities. Was able to spin up both `dev` and `prod` versions on Ubuntu.| 
| 0d.  | Docker | <ul><li>[x] </li></ul> |[Dockerfile](https://github.com/dudo50/ParaSpell/blob/main/Dockerfile) [Docker commit](https://github.com/dudo50/ParaSpell/commit/cbb8a0a50a38825dd844336d24fd74ad8b223501)| `paraspell-network-config.yml` file spins up all necessary nodes.| 
| 0e.  | Article | <ul><li>[x] </li></ul> |[Medium article sketch](https://medium.com/@dudo50/66f32b6fe9eb)| Looks good.| 
| 1.  | Wallet login | <ul><li>[x] </li></ul> |[Wallet login commit](https://github.com/dudo50/ParaSpell/commit/116e0eef5a64d904d6224eb1e49eff72040faf4e)| Was able to connect to Polkadot-JS ext. wallet as well as test accounts.| 
| 2.a  | Full working fund transfer scenario 1 | <ul><li>[x] </li></ul> |[Transfer scenario commit](https://github.com/dudo50/ParaSpell/commit/7d254b1b6d052f71d55450c51ca2a2b01668a12b)| Scenario 1 - Relay chain to Parachains - works manually and in unit test.| 
| 2.b  | Full working fund transfer scenario 2 | <ul><li>[x] </li></ul> |[Transfer scenario commit](https://github.com/dudo50/ParaSpell/commit/7d254b1b6d052f71d55450c51ca2a2b01668a12b)| Scenario 2 - Parachains to Relay chain - works manually and in unit test.| 
| 2.c  | Full working fund transfer scenario 3 | <ul><li>[x] </li></ul> |[Transfer scenario commit](https://github.com/dudo50/ParaSpell/commit/7d254b1b6d052f71d55450c51ca2a2b01668a12b)| Scenario 3 - Parachain to Parachain - works manually and in unit test.| 
| 3.a  | Callback support 1 | <ul><li>[x] </li></ul> |[Callback support 1 commit](https://github.com/dudo50/ParaSpell/commit/6b8fa74ff06268356674e634e34bb03090a0c9c7)| Looks good.| 
| 3.b  | Callback support 2 | <ul><li>[x] </li></ul> |[Callback support 2 commit](https://github.com/dudo50/ParaSpell/commit/e5d9652db32f1ab5e720b93492fc7b3387917948)| Looks good.| 
| 4.  | ParaSpell SDK | <ul><li>[x] </li></ul> |[ParaSpell SDK](https://github.com/ParaSpell/sdk)| Looks good.| 
| 5.  | Guide to add new nodes to application and network | <ul><li>[x] </li></ul> |[ParaSpell Wiki](https://github.com/dudo50/ParaSpell/wiki)| Comprehensive guide.| 

# General Notes

This is a very decent delivery. Team put a lot of effort into the project and the UI looks great. Unit tests were added upon recommendation. Works out of the box for `Rococo`, `BiFrost`, `Pichiu`, `Karura` networks. This tool is very needed and will be handy for developers and users alike. Team is very communicative.

## UI

Minor note: After connecting to a wallet the button still says "Log in with:". 

Team also noted that they are planning to add conversions so that users can choose to enter in other units than just plancks.

## Docs & Testing

Wiki guide is well written and covers:
- Adding assets to XCM calls
- Registering new assets on node
- Adding a new node into the network
- Understanding calls used in ParaSpell

One recommendation for the [Adding Nodes](https://github.com/paraspell/ui/wiki/Adding-new-node-into-the-network#2-adding-a-node-to-the-application) section would be to include the `.vue` applicable filenames above the screenshots, which will make them easier to search for.

Project has no unit tests. Please consider adding some. UPDATE: Unit tests were added for core functionalites.

Project has issues running on ARM64 (Apple M1) architecture but works fine on x86/64 Ubuntu.
