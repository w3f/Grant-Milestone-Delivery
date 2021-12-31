# Milestone Delivery :RainbowDAO Protocol ink! Phase 1



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RainbowDAO%20Protocol%20ink!%20%20Phase%201.md

* **Milestone Number:**  1

| Number | Deliverable              | Link                                                         | Notes                                                        |
| ------ | :----------------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
| 0a.    | License                  | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/main/LICENSE | Apache 2.0 |
| 0b.    | Documentation            | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/blob/main/README.md | Documentation . |
| 0c.    | Testing Guide            | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1 | All test instructions are in the contract code document. |
| 0d.    | Docker         | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/blob/main/docs/docker.md | Dockerfile. |
| 0e-1. | Article/News   | https://medium.com/rainbowcity/what-is-the-rainbowdao-protocol-d17eb866ce43 | Medium, an introduction to the basic articles of the project. |
| 0e-2.  | Article/News | https://medium.com/rainbowcity/in-which-chains-will-the-rainbowdao-protocol-be-deployed-in-the-future-2d9b0380590d | Medium, an introduction to the basic articles of the project. |
| 0e-3.  | Article/News | https://medium.com/rainbowcity/what-is-the-rainbowcity-foundation-4f5ac119c29a | Medium, an introduction to the basic articles of the project. |
| 0e-4.  | Article/News | https://u.today/press-releases/rainbowcity-foundation-announces-the-official-launch-of-dao-infrastructure-project | U.today, a very famous encrypted media. |
| 0e-5.  | Article/News | https://cryptopotato.com/rainbowcity-foundation-launches-rainbowdao-protocol-in-gitcoin-grant-12/ | Cryptopotato, a very famous encrypted media. |
| 0e-6.  | Article/News | https://ambcrypto.com/rainbowcity-foundation-announces-official-launch-of-dao-infrastructure-project/ | Ambcrypto, a very famous encrypted media. |
| 0e-7.  | Article/News | https://apnews.com/press-release/kisspr/technology-philanthropy-singapore-baae13a7c821e4e7bcf0dc6c62de0b91 | Apnews, one of the four largest news agencies in the world. |
| 0e-8.  |          Article/News          | https://finance.yahoo.com/news/2021-dao-global-hackathon-ended-174200673.html?.tsrc=fin-srch | Yahoo Finance, one of the world’s largest portals |
| 0e-9.  | Article/News | https://www.benzinga.com/pressreleases/21/12/g24775427/the-2021-dao-global-hackathon-ended-and-the-rainbowdao-team-won-three-awards | benzinga, a well-known American financial media |
| 0e-10. | Article/News | https://www.htv10.tv/story/45537652/the-2021-dao-global-hackathon-ended-and-the-rainbowdao-team-won-three-awards | America's 10th TV station, well-known broadcasting media |
| 1.     | ink! Contract: GovnanceDAO            | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/govnance_dao | This contract is the overall governance DAO contract of the RainbowDao protocol. The holder of the RBD controls this contract, adjusts the parameters of the entire protocol through voting, and realizes the upgrade of the protocol. |
| 2.     | ink! Contract: erc20Factory           | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/erc20_factory | This contract is an ERC20 factory contract. Even people who do not understand the code can issue their own ERC20 tokens through this factory contract. The smart contract has the function of token issuance and block statistics, which facilitates the calculation of voting weight and the implementation of voting delegation. |
| 3.     | ink! Contract: multiSign                | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/multisig_factory                                                               https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/multisig | This contract is a multi-signature  management contract. Anyone or any DAO can build a multisig system for the management of funds. |
| 4.     | ink! Contract: userManage      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/users_manage | This contract is a multi-signature  management contract. Anyone or any DAO can build a multisig system for the management of funds. |
| 5.     | ink! Contract: incomeCategory      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/income_category | This contract is an income category management contract. Mainly used to calculate the income category and income ratio of the protocol. |
| 6.     | ink! Contract: roleManage      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/role_manage | This contract belongs to the role management contract and is mainly used to manage the role of the protocol. |
| 7.     | ink! Contract: authorityManage      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/authority_management | This contract belongs to the authority management contract and is mainly used to manage the authority of the protocol. |
| 8.     | ink! Contract: routeManage      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/route_manage | This contract belongs to the routing management contract and is mainly used to manage and replace the contract address of the protocol. |
| 9.     | ink! Contract: rainbowcore      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-milestone_1/tree/main/kernel | The Rainbowcore contract is the entry management of these three contracts,roleManage ,authorityManage and routeManage ,overall planning and coordination. |
| 10.     | protocol Front-end file | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1 | Front-end file. |
| 11.     | protocol UI      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/main/pic/core | Rainbow core design ui picture. |
| 12.     | protocol UI      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/main/pic/erc20factory | Erc20factory design ui picture. |
| 13.     | protocol UI      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/main/pic/income | Income design ui picture. |
| 14.     | protocol UI      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/main/pic/manage | Manage design ui picture. |
| 15.     | protocol UI      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/main/pic/multisign | Multisign design ui picture. |
| 16.     | protocol UI      | https://github.com/RainbowcityFoundation/RainbowDAO-Protocol-Ink-UI-milestone_1/tree/main/pic/proposal | Proposal design ui picture. |
| 17.     | Demo video 01 | https://youtu.be/sE-_izYZ3vM | RainbowDAO-Management Demo |
| 18.     | Demo video 02 | https://youtu.be/CCio4TV3STk | RainbowDAO-multiSignDemo |
| 19.     | Demo video 02 | https://youtu.be/xF3ym0MudRE | RainbowDAO -TokenFactoryDemo |
| 20.     | Functional Testnet URL | http://www.rainbowdao.io/polkadot | Functional Testnet URL |



