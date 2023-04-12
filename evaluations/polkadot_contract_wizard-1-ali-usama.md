# Evaluation

- **Status:** Accepted
- **Application Document:** [Polkadot Contract Wizard](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-contract-wizard.md)
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** [RV-KMIR](https://github.com/w3f/Grant-Milestone-Delivery/pull/820)

| Number | Deliverable                                                  | Accepted               | Link                                                                                              | Evaluation Notes                                                                                                                           |
|--------|--------------------------------------------------------------|------------------------|---------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | Licence                                                      | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/LICENSE)      | Correct Licence, but please put your copyright [here](https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/LICENSE#L189) |
| 0b.    | Documentation                                                | <ul><li>[x] </li></ul> | [Documentation](https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/README.md) | Documentation is well-written and to-the-point.                                                                                            |
| 0c.    | Tests & Testing Guide                                        | <ul><li>[x] </li></ul> | [Testing](https://github.com/protofire/polkadot-contract-wizard/blob/milestone-1/tests/Readme.md) | Need to change the import paths in `utils.test.ts` and `formatString.test.ts`.                                                             |
| 0d.    | Docker                                                       | <ul><li>[x] </li></ul> | [Docker](https://github.com/protofire/polkadot-contract-wizard#a-with-docker)                     | Working fine after the recent fixes                                                                                                        |
| 1.     | Redesign frontend interface                                  | <ul><li>[x] </li></ul> | [Repo link](https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1)               | Working as per application.                                                                                                                |
| 2.     | Develop the interface based on the previous task result      | <ul><li>[x] </li></ul> | [Repo link](https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1)               | Working as per application                                                                                                                 |
| 3.     | Compose the contract based on the selection                  | <ul><li>[x] </li></ul> | [Repo link](https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1)               | Working as per application                                                                                                                 |
| 4.     | Add syntax highlighting to the displayed smart contract code | <ul><li>[x] </li></ul> | [Repo link](https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1)               | Working as per application                                                                                                                 |

## General Notes

The code and repo are well-structured and documented. However, there are some minor issues that I must point out:

- It should be mentioned in the
  documentation's [requirement](https://github.com/protofire/polkadot-contract-wizard/tree/milestone-1#b-local-stack)
  section that it's also required to run a local substrate node for the app to function properly.
- The import paths should be fixed in the `utils.test.ts` and `formatting.test.ts`, otherwise the 2 of the tests are
  going to fail.

