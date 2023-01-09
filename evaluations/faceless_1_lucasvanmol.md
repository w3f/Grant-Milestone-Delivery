# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faceless.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License  |<ul><li>[x] </li></ul> | https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/Apache%20License%202.0 | Apache License 2.0  |
| 0b.| Documentation |<ul><li>[x] </li></ul>|  https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/README.md |  Setup documentation is good. There were some gripes about documention in code that were largely fixed. |
| 0c.| Testing Guide |<ul><li>[x] </li></ul>|  https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/README.md#build-and-run-instruction |  Tests pass and have good coverage. |
| 0d.| Tutorial |<ul><li>[x] </li></ul>|  https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/README.md#tutorial | Usage of the modules and substrate pallet is explained. The application mentioned an article in addition, which isn't present, but in my opinion it wouldn't make much sense anyway for this delivery. |
| 1. | Cryptographic modules |<ul><li>[x] </li></ul>| https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/aibe, https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/bn, https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/bulletproofs, https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/faceless-substrate-node/pallets | The `bn` and `bulletproof` folders are (unofficial) forks of other projects with minor changes - it would be cleaner to use the fork feature in github instead. `aibe` is the main deliverable. |
| 2. | Benchmark |<ul><li>[x] </li></ul>| https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/aibe/src/bin/burn_example.rs | This works, but note that it's usually common to use tools like [criterion](https://bheisler.github.io/criterion.rs/book/) to run benchmarks, instead of just having binaries that measure timings. |
| 3. | Docker |<ul><li>[x] </li></ul>| https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/Dockerfile | Basic Dockerfile which sets up the needed environment for running cargo commands. |


## General Notes

Some improvements needed to be made to documentation & formatting. The main deliverable in terms of cryptography modules is the `aibe` module; `bn` and `bulletproof` are existing crates that were modified slightly here.
