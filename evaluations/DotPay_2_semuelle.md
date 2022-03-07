# Evaluation

- **Status:** In Progress
- **Application Document:**  https://raw.githubusercontent.com/w3f/Grants-Program/master/applications/DotPay.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [bytepayment/bytepay](https://github.com/bytepayment/bytepay/blob/main/LICENSE), [bytepayment/bytepaytest](https://github.com/bytepayment/bytepaytest/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | link | We will provide docs about how to create a task, how to tigger the payment, and how to withdraw |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | link | We will provide uni test for task,transfer,informal,withdraw modules(70% cover), and UI test report |
| 0d. | Docker | <ul><li>[ ] </li></ul> | link | We will provide Dockerfile and docker image to run the website in one command line, and you can to test those modules |
| 1. | Task management | <ul><li>[ ] </li></ul> | link | Create a paid task by comment an issue, it will trigger the create task event though the webhook, and webhook server will save the task and show it on our page, when developer complete the task, will tigger transfer module to pay the developer |
| 2. | Transfer module | <ul><li>[ ] </li></ul> | link | Trigger a payment by comment an issue, like `/pay Bob 10DOT`, the DOT will transfer to developer platform account |
| 3. | Withdraw module | <ul><li>[ ] </li></ul> | link | Withdraw the DOT from our platform to developer own wallet, if developer bind it own address, payment will transfer to the account directly |
| 4. | Informal | <ul><li>[ ] </li></ul> | link | Developer will receive the event, tell him how to withdraw DOT in our platform, robot will send Bob email and comment the issue |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
