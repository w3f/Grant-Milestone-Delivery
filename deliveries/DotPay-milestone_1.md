# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DotPay.md
* **PR Link:** https://github.com/w3f/Grants-Program/pull/715
* **Milestone Number:** 1

| Number | Deliverable              | Link                                                         | Notes                                                        |
| ------ | ------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License                  |  [Link](https://github.com/bytepayment/bytepay/blob/main/LICENSE)  |  Apache 2.0                                                            |
| 0b.    | Documentation            | [Link1](https://bytepay.online/docs/bytepay-overview) [Link2](https://bytepay.online/docs/bytepay-userguide) | Dotpay user guide, workflow, and what is dotpay.                                  |
| 0c.    | Testing Guide            | [Link](https://github.com/bytepayment/bytepay#how-to-run-test) |    	We will provide uni test for user management and recharge management modules(70% cover), the two module UI test report                                                          |
| 0d.    | Docker        | [Link](https://github.com/bytepayment/bytepay#how-to-run-this-project-dev-mode) |   We will provide Dockerfile and docker image to run the website in one command line                                                           |
| 1.     | User management, create an polkadot account for each developer            | [Link](https://bytepay.online/login)               | We will provide login function, you can login our website using github, and we will create an polkadot account for each user by default |
| 2.     | Repo & webhook management          | [Link](https://bytepay.online/bind)    | We will fetch your github repo list, so you can active the repo you want integrate with polkadot, the webhook module will listen the pay event and tigger transform module to pay developer DOT |
| 3.     | 	Address binding               | [Link](https://bytepay.online/settings/address)  | Develop using github issue comment to bind their polkadot address. /dotpay bind [address] |
| 4.     | Recharge management    |  [Link](https://bytepay.online/property)| Recharge DOT to your platform account                                   |
| 5.     | Transfer ink! contract      |  [Link](https://github.com/bytepayment/bytepay/tree/main/smart-contract) [how to test and know issue](https://github.com/bytepayment/bytepay#ink-transfer-contract)| We will provide an tested ink! contract on Substrate Smart Contracts Node, provide transfer limit, whitelist and transfer function. The platform will integrate the contract when the Polkadot mainnet contract para chain is available. |



