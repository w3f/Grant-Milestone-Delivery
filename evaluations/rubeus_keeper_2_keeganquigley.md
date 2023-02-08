# Evaluation

- **Status:** Accepted
- **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/RubeusKeeper.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Accepted | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/bsn-si/rubeus-client/blob/main/license) | Apache 2.0 license |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Readme.md](https://github.com/bsn-si/rubeus-client/blob/main/README.md) | Looks good. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Readme.md](https://github.com/bsn-si/rubeus-client/blob/main/README.md#build--run) | Testing guide works perfectly. I am not finding any tests for the UI. |
| 0d. | Article | <ul><li>[x] </li></ul> | [Article on Medium](https://medium.com/@bela-supernova/rubeus-keeper-a-decentralized-password-manager-that-stores-data-in-a-blockchain-4a08bef6b144) | Looks good. |
| 1.  | Browser extension | <ul><li>[x] </li></ul> | [dApp (extension)](https://github.com/bsn-si/rubeus-client) | Extension works nicely. |

## General Notes

Extension has nice functionality. I was able to follow the guide to install and test it with no problems. 

### Documentation and Testing

There are no UI unit tests provided, which would be nice to have for core functionalities. However, seeing as not all the functionalities have been built yet, I think it's okay to wait for the follow-up grant to include some tests in Jest or Cypress or something similar, once the app is in more of a "ready" state.

### Other Suggestions

- add the ability to hide the password instead of displaying in plain text.
- add the ability to recover passwords
