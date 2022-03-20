# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/f5b0717c241375da4716177a3b9f3e4631e0def1/applications/RainbowDAO%20Protocol%20ink!%20%20Phase%201.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser


| Number | Deliverable              | Accepted | Link                                                         | Evaluation Notes                                                        |
| ------ | :----------------------: | :------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| 0a.    | License                  |<ul><li>[x] </li></ul>| [License](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/LICENSE) | Correct License (Apache 2.0) |
| 0b.    | Documentation            |<ul><li>[x] </li></ul>| [Documentation](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/README.md) | <ul><li>Inline comments are present now</li><li>It would be nice, if code symbols in the README.md were formatted properly for better readability, e.g. `route_manage`</li><li>A quick intro on what the project is about would be nice</li></ul> |
| 0c.    | Testing Guide            |<ul><li>[x] </li></ul>| [Dev Setup](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/blob/3898c3526db94f40037909b3e141ed223f4a524d/rainbowDaoProtocolTest.md), [Running Tests](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/README.md#testing) | All tests pass. However, it's currently not possible to run all tests with a single command. This is not a must but it would be nice. |
| 0d.    | Dockerized UI         |<ul><li>[x] </li></ul>| [Dockerized UI Setup](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/blob/c0786b2d2a6e4290fe9abd0353f419a85894dbb2/docs/docker.md) | <ul><li>Docker image can be built properly.</li><li>Instructions on how to run it are present.</li></ul> |
| 0e. | Article/News   |<ul><li>[x] </li></ul>| <p>Medium articles</p><ul><li>[Medium Article 1](https://medium.com/rainbowcity/what-is-the-rainbowdao-protocol-d17eb866ce43)</li><li>[Medium Article 2](https://medium.com/rainbowcity/in-which-chains-will-the-rainbowdao-protocol-be-deployed-in-the-future-2d9b0380590d)</li><li>[Medium Article 3](https://medium.com/rainbowcity/what-is-the-rainbowcity-foundation-4f5ac119c29a)</li></ul>  | Medium articles were published. Additionally, more articles on other platforms (see 'notes' section). |
| 1.     | ink! Contract: GovnanceDAO            |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/govnance_dao | Build works but has warnings. Tests pass. |
| 2.     | ink! Contract: erc20Factory           |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/erc20_factory | Build works but has warnings. Tests pass. |
| 3.     | ink! Contract: multiSign                |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/multisig_factory                                                               https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/multisig | Build works but has warnings. Tests pass. |
| 4.     | ink! Contract: userManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/users_manage | Build works but has warnings. Tests pass.
| 5.     | ink! Contract: incomeCategory      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/income_category | Build works but has warnings. Tests pass. |
| 6.     | ink! Contract: roleManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/role_manage | Build works but has warnings. Tests pass. |
| 7.     | ink! Contract: authorityManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/authority_management | Build works but has warnings. Tests pass. |
| 8.     | ink! Contract: routeManage      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/route_manage | Build works but has warnings. Tests pass. |
| 9.     | ink! Contract: rainbowcore      |<ul><li>[x] </li></ul>| https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/kernel | Build works but has warnings. Tests pass. |
| 10.     | protocol Front-end file |<ul><li>[x] </li></ul>| [Frontend Source Code](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/c0786b2d2a6e4290fe9abd0353f419a85894dbb2) | <ul><li>Code can be compiled and served to the local browser. Some of the functionaly is missing or doesn't work.  I'm still going to accept it since it's not clearly defined in the contract what the UI has to implement.</li><li>App contains webpage and UI for:</li><ul><li>Token minting: works, but after creating the "Token Panel" screen doesn't show the created token</li><li>Multisign wallet (works)</li><li>Protocol management: "Authority Management" tab is empty, other than that it works</li><li>DAO factory: doesn't load</li></ul></ul> |
| 11.     | Functional Testnet URL |<ul><li>[x] </li></ul>| [Testnet](http://www.rainbowdao.io/polkadot) | Unable to test using the deployed config. However, since the local UI mostly worked I'm willing to accept this. |

## General Notes

- Documentation on how to setup and test the node, protocol and ui can be found in [this additional repo](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-docs/blob/3898c3526db94f40037909b3e141ed223f4a524d/rainbowDaoProtocolTest.md).
- [Ink! contracts](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034)
  - Currently there are a lot of warnings when building and testing the contracts. It would be good if the code could be cleaned up a little.
  - Also I found some legacy or confusing comments, for example [this one](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/a23014890e50dad5fdb2b1e46ffef5d2aa4cd034/govnance_dao/lib.rs#L90).
  - **While I'm willing to give it a pass for M1 please consider improving your code quality for M2**. 
- [contract UI](https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/c0786b2d2a6e4290fe9abd0353f419a85894dbb2)
  - Token Mint UI: After creating a token, the "Token Panel" screen doesn't show the token:
  ![image](https://user-images.githubusercontent.com/5393704/149517672-09455bfb-fb7f-4b19-a0b9-f252991f0f89.png)
  - Protocol UI: The "Authority Management" tab is empty: ![image](https://user-images.githubusercontent.com/5393704/149518041-eac84aa1-aed0-479b-af5d-a04a1569d6ac.png)
  - DAO Factory UI: When clicking, nothing happens
  - Just as a side note: The `/dist` files were commited although they are in the `.gitignore` file which unneccessarily bloats up the repo. Consider deleting these.
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