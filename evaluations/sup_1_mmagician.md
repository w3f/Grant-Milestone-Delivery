# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/65
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul> | [License](https://github.com/clearloop/sup/blob/master/LICENSE)| - |
| 1. | sup new <node-template> | <ul><li>[x] </li></ul> | https://github.com/clearloop/sup/blob/master/src/cmd/new.rs | |
| 2. | sup update | <ul><li>[x] </li></ul> | https://github.com/clearloop/sup/blob/master/src/cmd/update.rs | |
| 3. | sup source --query <pattern> | <ul><li>[x] </li></ul> | https://github.com/clearloop/sup/blob/master/src/cmd/source.rs | |
| 4. | sup tag --limit <n> | <ul><li>[x] </li></ul> | https://github.com/clearloop/sup/blob/master/src/cmd/tag.rs | |

## General Notes

Multiple things not working in the initial delivery. Bug fixing introducing new bugs, see the discussion [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/48). The functionality changing almost with every version update. 

No tests provided.

I couldn't find a good use case for switching repositories, but only tags for within one repository. Even then, when you switch to an older tag, the only thing that updates is `Cargo.toml`. Thus, the user should not expect the node template to compile, since the codebase might still be using features from newer/older substrate versions which are incompatible. 