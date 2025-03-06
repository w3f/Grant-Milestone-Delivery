# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/signet.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
|-|-|-|-|-|  
| 0a. | License | <ul><li>[x] </li></ul>| [GPL-v3](https://github.com/TalismanSociety/signet-web) | ok |
| 0b. | Documentation | <ul><li>[x] </li></ul>|  https://github.com/TalismanSociety/signet-web/blob/main/README.md | readme could be more expressive. |  
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul>| https://github.com/TalismanSociety/signet-web  | submitted private report |
| 0d. | Git Deployment | <ul><li>[ ] </li></ul>| https://github.com/TalismanSociety/signet-web/deployments | where are the instructions? |
| 0e. | Article | <ul><li>[x] </li></ul>| [Article](https://guide.polkadotmultisig.com/en/category/staking-related-actions/article/signing-into-a-dapp-using-polkadot-multisig-8ada0e9c) | Looks good. |
| 1. | Feature: Nom Pool Validator Selection | <ul><li>[x] </li></ul>| showcased in report  | ok |
| 2. | Feature: Staking Stash Validator Selection | <ul><li>[ ] </li></ul>| - | see general feedback  |
| 3. | Feature: Staking Pure Proxy Validator Selection | <ul><li>[x] </li></ul>| tested with multisig | ok |  
| 4. | extra feature: Identity Integration | <ul><li>[x] </li></ul>| | Integrating the new people chain | ok |


## General Notes
I don't understand the difference between deliverable 2 and 3. Reading the specification from the original grant agreement it sounds like the only difference would be a pure proxy in general on the one hand while the other one uses a multisig controlled pure proxy. I'm not sure how this works out since I thought that all operations in signet are targeting multisig controlled proxies. Would love some clarification here. Thanks.


## Feedback
Sharing a validator nomination call doesn't work for me. Even though I'm logged in with a multisig member account in another window, it only shows me the signet homepage when following the url. Have you tried this? 

First saving it as draft and sharing it afterwards works fine on the other hand.

