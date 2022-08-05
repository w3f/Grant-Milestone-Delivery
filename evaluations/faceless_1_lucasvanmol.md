# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/faceless.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License  |<ul><li>[ ] </li></ul> | LICENSE file missing | Apache License 2.0  |
| 0b.| Documentation |<ul><li>[ ] </li></ul>|  https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/README.md |  Setup documentation is good. However, see general notes for my gripes about documentation in code. |
| 0c.| Testing Guide |<ul><li>[x] </li></ul>|  https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/README.md#build-and-run-instruction |  Tests pass and have good coverage. |
| 0d.| Tutorial |<ul><li>[x] </li></ul>|  https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/README.md#tutorial | Usage of the modules and substrate pallet is explained. The application mentioned an article in addition, which isn't present, but in my opinion it wouldn't make much sense anyway for this delivery. |
| 1. | Cryptographic modules |<ul><li>[x] </li></ul>| https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/aibe, https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/bn, https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/bulletproofs, https://github.com/HeisenbergLin22/Faceless_milestone1/tree/main/faceless-substrate-node/pallets | The `bn` and `bulletproof` folders are (unofficial) forks of other projects - it would be cleaner to use the fork feature in github instead. |
| 2. | Benchmark |<ul><li>[x] </li></ul>| https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/aibe/src/bin/burn_example.rs | This works, but note that it's usually common to use tools like [criterion](https://bheisler.github.io/criterion.rs/book/) to run benchmarks, instead of just having binaries that measure timings. |
| 3. | Docker |<ul><li>[x] </li></ul>| https://github.com/HeisenbergLin22/Faceless_milestone1/blob/main/Dockerfile | Pretty basic dockerfile which sets up the needed environment for running cargo commands. |


## General Notes

### Documentation

I think the documentation in the README is great; it's clear and I had no issues executing the commands outlined in it. However, I have some issues with the documentation inside the code. 
- Firstly, because most documentation code was `ignore`'d, running `cargo test` failed to catch some mistakes that were present in the documentation. I've gone ahead and took the liberty of fixing this myself in this [pull request](https://github.com/HeisenbergLin22/Faceless_milestone1/pull/1), which you can go ahead and merge if you agree with my changes.
- The documentation inside `faceless-substrate-node/pallets`:  the comments in the code here, for `faceless` and `proof-of-existance` are just generic example comments from the `template` pallet, you should update them to reflect what the pallet is doing. 

### Github best practices

Since it seems like the repository was uploaded to github especially for this milestone delivery, this may not be a problem if the files are also hosted privately elsewhere, but if development is going to continue on the github repo then I would suggest the following changes:

- Add a `.gitignore` file to ignore build artifacts
- If the `bn` and `bulletproof` only have small tweaks to the original repo, I would suggest creating a seperate repo for them, where they have been forked from their original repo. If needed, they can be included in the original module using submodules

