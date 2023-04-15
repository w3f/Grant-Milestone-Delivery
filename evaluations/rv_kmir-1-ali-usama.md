# Evaluation

- **Status:** Accepted
- **Application Document:** [RV KMIR](https://github.com/w3f/Grants-Program/blob/master/applications/rv-kmir.md)
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** [Coong Wallet](https://github.com/w3f/Grant-Milestone-Delivery/pull/804)

| Number | Deliverable                 | Accepted               | Link                                                                                                                                                                                                                                                                       | Evaluation Notes                                                                              |
|--------|-----------------------------|------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| 0a.    | Licence                     | <ul><li>[x] </li></ul> | [BSD-3](https://github.com/runtimeverification/mir-semantics/blob/master/LICENSE)                                                                                                                                                                                          | Valid Licence                                                                                 |
| 0b.    | Documentation               | <ul><li>[x] </li></ul> | [README](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/README.md)                                                                                                                                                                          | The README could be improved but it's fine considering the project is still in initial phases |
| 0c.    | Testing/Testing Guide       | <ul><li>[x] </li></ul> | [Makefile](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/kmir/Makefile), [README](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/kmir/README.md)                                                            | All test cases passed successfully.                                                           |
| 0d.    | Docker                      | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/Dockerfile)                                                                                                                                                                     | Docker file built and executed without any errors.                                            |
| 1.     | MIR Code snippets           | <ul><li>[x] </li></ul> | [Parsing](https://github.com/runtimeverification/mir-semantics/tree/milestone1-delivery/kmir/src/tests/integration/test-data/parsing), [Compiletest-ui](https://github.com/runtimeverification/mir-semantics-compiletest/tree/9251b00e38504a6f1279b0ca9f81b90b4964080d/ui) | Good Work with `.mir` tests in Parsing.                                                       |
| 2.     | Generate output from `miri` | <ul><li>[x] </li></ul> | [Compiletest-ui](https://github.com/runtimeverification/mir-semantics-compiletest/tree/9251b00e38504a6f1279b0ca9f81b90b4964080d/ui)                                                                                                                                        | Output generation successful.                                                                 |
| 2.     | `kmir` executable stub      | <ul><li>[x] </li></ul> | [kmir.py](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/kmir/src/kmir/kmir.py)                                                                                                                                                             | Working as expected after the recent PR.                                                      |



## General Notes
The test cases and docker images are being executed successfully after the recent PR. However, it might be possible to reduce the size of the docker image, by using a smaller base-image perhaps and removing unnecessary packages. 

I'm also expecting that the documentation would be improved in the future deliverables, and there are some `shadow variables` in some places in the codebase. I expect that to be fixed too.


