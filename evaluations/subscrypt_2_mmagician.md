# Evaluation

* **Status:** Accepted
* **Application:** https://github.com/w3f/Grants-Program/blob/master/applications/SubsCrypt.md
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All evaluations by mmagician

|        Number | Deliverable                                 | Accepted               | Link                                                                                                                                                                                       | Evaluation Notes                                               |
| ------------- | -------------                               | -------------          | -------------                                                                                                                                                                              | -------------                                                  |
|           0a. | License                                     | <ul><li>[x] </li></ul> | [SubsCrypt-front/LICENSE](https://github.com/oxydev/SubsCrypt-front/blob/main/LICENSE), [SubsCrypt-npm-library/LICENSE](https://github.com/oxydev/SubsCrypt-npm-library/blob/main/LICENSE) | Correct License                                                |
|            1. | UI Dashboard                                | <ul><li>[x] </li></ul> | [SubsCrypt-front](https://github.com/oxydev/SubsCrypt-front)                                                                                                                               |                                                                |
|           1.1 | UI Dashboard for users                      | <ul><li>[x] </li></ul> | [SubsCrypt-front](https://github.com/oxydev/SubsCrypt-front)                                                                                                                               |                                                                |
|           1.2 | UI Dashboard for admins                     | <ul><li>[x] </li></ul> | [SubsCrypt-front](https://github.com/oxydev/SubsCrypt-front)                                                                                                                               |                                                                |
|            2. | ES6 Module for developers                   | <ul><li>[x] </li></ul> | [npm package](https://www.npmjs.com/package/@oxydev/subscrypt)                                                                                                                             |                                                                |
|           2.1 | Implementation of ES6 Module for developers | <ul><li>[x] </li></ul> | [SubsCrypt-npm-library](https://github.com/oxydev/SubsCrypt-npm-library)                                                                                                                   |                                                                |
|           2.2 | Documentation of ES6 Module                 | <ul><li>[x] </li></ul> | [Readme](https://github.com/oxydev/SubsCrypt-npm-library/blob/main/README.md)                                                                                                              |                                                                |
|            3. | Unit Test                                   | <ul><li>[x] </li></ul> | [here](https://github.com/oxydev/SubsCrypt-npm-library/blob/main/src/index.test.js)                                                                                                        | Extensive unit tests, yet the portal is still very fragile when interacting with it |

## General Notes

This evaluation is a follow up to @Noc2's [evaluation](https://github.com/mmagician/Grant-Milestone-Delivery/blob/subscrypt-evaluation/evaluations/subscrypt_2_Noc2.md).

The usability of the portal has been greatly improved since the initial delivery was submitted.

### UI

- Critical: no possibility to edit the plan once it's created, nor to even view the details as the provider. **Update: fixed**

- Critical: the account selection process is still very user-unfriendly. I've never seen any design that asks the user to enter a number. Also the account names are not displayed, and the accounts are not even in the same order as in the extension. This was already pointed out before and should be fixed before this milestone is accepted, since it's a major hurdle to usability. **Update: fixed**

---
- Major: There are two options "Login as a Provider" and "Sign Up as a Provider" and it seems they are doing exactly the same thing.

- Major: Why is there a password option at all? Shouldn't all interactions be done via the browser wallet (in this case the polkadot-js extension)? It is quite confusing as to why these two options even exist. **Update: issue addressed**

---
- Minor: sometimes I still see the template/sponsored plans when logged in as provider. I guess it's OK to see them as user, I don't see why a provider would ever want to see these?

- Minor: the plans on the provider's homescreen look as if they are clickable (including the price in bottom right corner), but nothing happens when I click either the plan nor the price. This is confusing. **Update: fixed, plans are now editable**

- Minor: if the polkadot-js extension is not enabled for the current tab, there home screen is empty and doesn't even show the options. Ideally, you would display a prompt/message to enable the extension. **Update: displays a message "Can not connect to wallet"**

---
