# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/171
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/oxydev/SubsCrypt-ink/blob/main/LICENSE | |
| 1. | Contract Implementation | <ul><li>[x] </li></ul> | [PR with suggestions & fixes](https://github.com/oxydev/SubsCrypt-ink/pull/13) |
| 1.1 | Contract code | <ul><li>[x] </li></ul> | https://github.com/oxydev/SubsCrypt-ink/blob/main/src/lib.rs | |
| 1.2 | High-level API | <ul><li>[x] </li></ul> | https://oxydev.github.io/SubsCrypt-docs/#/Tech/Contract/Api | |
| 1.3 | Documentation | <ul><li>[x] </li></ul> | https://oxydev.github.io/SubsCrypt-docs/#/ | [PR with typo fixes](https://github.com/oxydev/SubsCrypt-docs/pull/1) |
| 1.4 | Testing Guide | <ul><li>[x] </li></ul> | https://oxydev.github.io/SubsCrypt-docs/#/Tech/Contract/test | |
| 2. | Article | <ul><li>[x] </li></ul> | The documentation ^ works fine for now | | 
| 3. | Design Front-End component | <ul><li>[x] </li></ul> | https://oxydev.github.io/SubsCrypt-docs/#/Tech/Front_end/design | | 
| 4. | white-paper | <ul><li>[x] </li></ul> | https://github.com/oxydev/SubsCrypt-docs/blob/master/SubsCrypt-White-Paper.pdf | |
| 5. | Polkadot Standards Proposals (PSPs) | <ul><li>[x] </li></ul> | https://github.com/w3f/PSPs/pull/12 | |

## General Notes

Initially contracts were not building and seems that the dev team didn't take the proper steps to reproduce the setup from scratch (e.g. cloning the repo into a clean dir, running the builds & tests). See [the conversation here](https://github.com/w3f/Grant-Milestone-Delivery/pull/99#issuecomment-782056583). 

After that was fixed, tests were failing. The fixes were minor and quickly addressed, but it shows lack of diligence. That's also shown in the later evolution of the project.

[Multiple issues](https://github.com/w3f/Grant-Milestone-Delivery/pull/99#issuecomment-792893509) were found demonstating not following good coding practices and in general lack of research into the technology. It's understandable that teams coming from different programming background (e.g. scripting languages) won't be immediate Rust experts. Nevertheless, comments such as "but due to the clippy warning about mutable and immutable borrow, we had no other choice" prove slopiness, as it seems that the error messages weren't understood properly.

Following another complaint regarding code quality, the team took some time to re-work the smart contract. The end result, while not perfect (see the PR mentioned in deliverable 1), was a significant improvement over the initial version.

Lastly, statements such as "code coverage of 100%" should be avoided in the future, as it's a near-impossible feat to cover every single execution path of all functions. That was not achieved in this milestone, although there are plenty of unit tests covering the contract's functionality and given the motivation of the team (demonstrated by the major refactor of the contract), the tests can be accepted in the current state.

