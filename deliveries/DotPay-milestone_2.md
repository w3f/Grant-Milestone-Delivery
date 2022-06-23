# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DotPay.md
* **PR Link:** https://github.com/w3f/Grants-Program/pull/715
* **Milestone Number:** 2

| Number | Deliverable| link | Specification |
| ------------- |---------| ------------- | ------------- |
| 0a. | License |[Link](https://github.com/bytepayment/bytepay/blob/main/LICENSE)|Apache 2.0 |
| 0b. | Documentation|[User Guide](https://bytepay.online/docs/bytepay-userguide) | We will provide docs about how to create a task, how to tigger the payment, and how to withdraw |
| 0c. | Testing Guide|[test guide](https://github.com/bytepayment/bytepay#how-to-run-test) | We will provide uni test for task,transfer,informal,withdraw modules(70% cover), and UI test report |
| 0d. | Docker | [Docker](https://github.com/bytepayment/bytepay#1-run-docker-command) [docker compose](https://github.com/bytepayment/bytepay/blob/main/docker-compose.yml)|We will provide Dockerfile and docker image to run the website in one command line, and you can to test those modules |
| 1. | Task management|[Example](https://github.com/bytepayment/bytepaytest/issues/22#issuecomment-1041463886) [source code](https://github.com/bytepayment/bytepay/blob/main/cloudfuncs/webhooks/index.ts#L71) | Create a paid task by comment an issue, it will trigger the create task event though the webhook, and webhook server will save the task and show it on our page, when developer complete the task, will tigger transfer module to pay the developer |
| 2. | Tansfer module|[example](https://github.com/bytepayment/bytepaytest/issues/22#issuecomment-1041464025) [source code](https://github.com/bytepayment/bytepay/blob/main/cloudfuncs/polka_dot_transfer/index.ts) | Trigger a payment by comment an issue, like `/pay Bob 10DOT`, the DOT will transfer to developer platform account |
| 3. | Withdraw module|[link](https://bytepay.online/settings/withdraw) [source code](https://github.com/bytepayment/bytepay/tree/main/cloudfuncs/withdraw_polkadot) | Withdraw the DOT from our platform to developer own wallet, if developer bind it own address, payment will transfer to the account directly |
| 4. | Informal|[issue informal examples](https://github.com/bytepayment/bytepaytest/issues/22) | Developer will receive the event, tell him how to withdraw DOT in our platform, robot will send Bob email and comment the issue |

# Additional Information

You can try all the workflow on [bytepay.online](https://bytepay.online) now.
Many developer dose not have email, so we only informal through issue comment now.
