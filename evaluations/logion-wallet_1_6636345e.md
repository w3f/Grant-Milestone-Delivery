# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/logion_wallet.md 
- **Milestone:** 1
- **Kusama Identity:** [Ds3GQU8yEHEzA4QEs6omYZ3rPwJLdU83yJNLj3uKDi29o4k](https://polkascan.io/kusama/account/Ds3GQU8yEHEzA4QEs6omYZ3rPwJLdU83yJNLj3uKDi29o4k)
- **Previously successfully merged evaluation:** First evaluation by 6636345e

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [logion-node](https://github.com/logion-network/logion-node/blob/9a20a66266b064e171ed8072fa0bfac02f12b00a/LICENSE), [logion-backend-ts](https://github.com/logion-network/logion-backend-ts/blob/6f7310fc03df59cc87d8cb5d331e36762bdb026e/LICENSE), [logion-wallet](https://github.com/logion-network/logion-wallet/blob/2eb4c833ce45941c44258db396dfe3e8d4ef8815/LICENSE)| Recommended & correct license |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [logion-node](https://github.com/logion-network/logion-node/blob/43aa09b9de49cfc772d06425a7d0782479027999/README.md), [logion-backend-ts](https://github.com/logion-network/logion-backend-ts/blob/6d7b8e7100895265c485af4268e3f98e27526d7c/README.md), [logion-wallet](https://github.com/logion-network/logion-wallet/blob/7ad7f340889117405b9efe8d752feb5c9a5bb5d1/README.md) | Simple and concise, well-written documentation in each repository |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Logion Test README](https://github.com/logion-network/logion-test/tree/grant1-milestone1#logion-test) | Well-written testing guide/unit-test coverage, great! |
| 0d. | Docker | <ul><li>[x] </li></ul> |[Logion Test docker-compose file](https://github.com/logion-network/logion-test/blob/grant1-milestone1/docker-compose.yml) | — |
| 1. | Logion node |<ul><li>[x] </li></ul> | [GitHub repository @ branch grant1-milestone1](https://github.com/logion-network/logion-node/tree/grant1-milestone1) | Compiles and Runs well according to specifications |
| 2. | Off-chain service | <ul><li>[x] </li></ul>| [GitHub repository @ branch grant1-milestone1](https://github.com/logion-network/logion-backend-ts/tree/grant1-milestone1) | — |
| 3. | Web application |<ul><li>[x] </li></ul> | [GitHub repository @ branch grant1-milestone1](https://github.com/logion-network/logion-wallet/tree/grant1-milestone1) | Runs well |

## General Notes

- All links for each part required to complete the logion wallet can be included.
- In the **Logion node**, just as a note on the latest M1 Mac there might be error `librocksdb-sys`[see here](https://stackoverflow.com/questions/66583720/some-error-failed-to-run-custom-build-command-for-librocksdb-sys-v6-11-4), and suggested command to fix `cargo update -p librocksdb-sys` but everything works on the latest branch.
- In the Web application, on the left bar menu text options e.g. recovery buttion text can be adjusted to be visible fully but looks decent.
