# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RainbowDAO%20Protocol%20ink!%20%20Phase%201.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser


| Number | Deliverable              | Accepted | Link                                                         | Evaluation Notes                                                        |
| ------ | :----------------------: | :------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| 0a.    | License                  |<ul><li>[x] </li></ul>| [License](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/0cd838fdaacaafc0e55f0ade0e2364c332d94569/LICENSE) | Correct License (Apache 2.0) |
| 0b.    | Documentation            |<ul><li>[ ] </li></ul>| [Documentation](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/0cd838fdaacaafc0e55f0ade0e2364c332d94569/README.md) | <ul><li>Inline comments are missing, see the contract: [“We will provide both inline documentation of the code”](https://github.com/w3f/Grants-Program/blob/master/applications/RainbowDAO%20Protocol%20ink!%20%20Phase%201.md#milestone-1) </li><li>It would be nice, if code symbols were formatted properly for better readability, e.g. `route_manage`</li><li>A quick intro on what the project is about would be nice</li></ul> |
| 0c.    | Testing Guide            |<ul><li>[x] </li></ul>| [Documentation](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/0cd838fdaacaafc0e55f0ade0e2364c332d94569/README.md) | All tests pass. However, it's currently not possible to run all tests with a single command. This is not a must but it would be nice. |
| 0d.    | Docker         |<ul><li>[ ] </li></ul>| [Docker Setup](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/blob/1d9e568e06084c88add30c919de3a5d0b06c2c36/docs/docker.md) | <ul><li>Docker image can be built properly.</li><li>Instructions on how to run it are missing.</li></ul> |
| 0e. | Article/News   |<ul><li>[x] </li></ul>| <p>Medium articles</p><ul><li>[Medium Article 1](https://medium.com/rainbowcity/what-is-the-rainbowdao-protocol-d17eb866ce43)</li><li>[Medium Article 2](https://medium.com/rainbowcity/in-which-chains-will-the-rainbowdao-protocol-be-deployed-in-the-future-2d9b0380590d)</li><li>[Medium Article 3](https://medium.com/rainbowcity/what-is-the-rainbowcity-foundation-4f5ac119c29a)</li></ul>  | Medium articles were published. Additionally, more articles on other platforms (see 'notes' section). |
| 1.     | ink! Contract: GovnanceDAO            |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/govnance_dao | Build works but has warnings. Tests pass. |
| 2.     | ink! Contract: erc20Factory           |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/erc20_factory | Build works but has warnings. Tests pass. |
| 3.     | ink! Contract: multiSign                |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/multisig_factory                                                               https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/multisig | Build works but has warnings. Tests pass. |
| 4.     | ink! Contract: userManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/users_manage | Build works but has warnings. Tests pass.
| 5.     | ink! Contract: incomeCategory      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/income_category | Build works but has warnings. Tests pass. |
| 6.     | ink! Contract: roleManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/role_manage | Build works but has warnings. Tests pass. |
| 7.     | ink! Contract: authorityManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/authority_management | Build works but has warnings. Tests pass. |
| 8.     | ink! Contract: routeManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/route_manage | Build works but has warnings. Tests pass. |
| 9.     | ink! Contract: rainbowcore      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/0cd838fdaacaafc0e55f0ade0e2364c332d94569/kernel | Build works but has warnings. Tests pass. |
| 10.     | protocol Front-end file |<ul><li>[] </li></ul>| [Frontend Source Code](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/1d9e568e06084c88add30c919de3a5d0b06c2c36) | <ul><li>Code can be compiled and served to the local browser</li><li>App contains webpage and UI for:</li><ul><li>Token minting (tx fails)</li><li>Multisign wallet (tx fails)</li><li>Protocol management (tx fails)</li><li>DAO factory (doesn't load)</li></ul></ul> |
| 11.     | Functional Testnet URL |<ul><li>[ ] </li></ul>| [Testnet](http://www.rainbowdao.io/polkadot) | Same as with frontend, txs fail. |

## General Notes

- [Ink! contracts](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1)
  - Currently there are a lot of warnings when building and testing the contracts. It would be good if the code could be cleaned up a little.
  - Description for the "userManage" contract is wrong (copy-paste error; matches description of the "multiSign" contract)
- [contract UI](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1)
  - When trying to test the protocol using the UI (Token minting and Protocol management) unfortunately the transactions fails with the following errors
    - RPC-CORE: submitAndWatchExtrinsic(extrinsic: Extrinsic): ExtrinsicStatus:: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
    - DRR: 1010: Invalid Transaction: Inability to pay some fees , e.g. account balance too low
  - Just as a side note: The `/dist` files were commited although they are in the `.gitignore` file which unneccessarily bloats up the repo.
  - [ ] The UI hasn't been tested yet since the instructions on how to run a node are incomplete.
- There is another grant from Gitcoin. However, it's not specific to the Ink! implementation which is why there is no violation of the 'multiple grants' rule: https://gitcoin.co/grants/4019/rainbowdao-protocol

### Additional deliverables

In addition to the artefacts defined in the contract, the team delivered the following:

- Various screenshots of the UI for interacting with the contracts
- Youtube videos that demonstrate the functionality of the UI
- Articles on several platforms:
  - Crypto news outlet articles
    - [U.Today](https://u.today/press-releases/rainbowcity-foundation-announces-the-official-launch-of-dao-infrastructure-project)
    - [Crypto Potato](https://cryptopotato.com/rainbowcity-foundation-launches-rainbowdao-protocol-in-gitcoin-grant-12/)
    - [Ambcrypto](https://ambcrypto.com/rainbowcity-foundation-announces-official-launch-of-dao-infrastructure-project/)
  - Traditional news outlet articles
    - [Yahoo Finance](https://finance.yahoo.com/news/2021-dao-global-hackathon-ended-174200673.html?.tsrc=fin-srch)
    - [Benzinga](https://www.benzinga.com/pressreleases/21/12/g24775427/the-2021-dao-global-hackathon-ended-and-the-rainbowdao-team-won-three-awards)
    - [HTV10 (local TV station in Houma, Louisiana, USA)](https://www.htv10.tv/story/45537652/the-2021-dao-global-hackathon-ended-and-the-rainbowdao-team-won-three-awards)
    - [Associated Press (paid content)](https://apnews.com/press-release/kisspr/technology-philanthropy-singapore-baae13a7c821e4e7bcf0dc6c62de0b91)