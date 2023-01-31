# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/pallet-drand-client.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/random-meat/drand-substrate-client/blob/50563fe914660cd61af61509492118d93737b488/LICENSE) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/random-meat/drand-substrate-client/blob/50563fe914660cd61af61509492118d93737b488/README.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | - | See **General Notes** |
| 1. | drand substrate client | <ul><li>[x] </li></ul> | [drand-substrate-client](https://github.com/random-meat/drand-substrate-client) | See **General Notes** |
<br/>

## General Notes v2 - Jan 27, 2023
About the previous evaluation, I have the following comments:
- For the building error, it was because of a misconfiguration in our test machine.
- The coverage is actually ~80%, they added some tests but also it was higher at the moment of the first evaluation (so that 64% value was wrong).
- The described testing environment will be part of the next milestone, so I think it's fair to have just the automatic tests for this delivery.

For other comments, you can read the discussion in the [PR conversation](https://github.com/w3f/Grant-Milestone-Delivery/pull/692).

## General Notes v1 - Jan 17, 2023

For the delivery, I have the following comments/questions (note: I didn't test the functionality in a runtime yet):
- To compile the code, I had to add `#![feature(format_args_capture)]` on top of the source, is it normal?
- The coverage is 57/89 = 64%, is it improvable?
- It would be nice to provide a minimal setup (`substrate-contract-node`) with a pallet that uses the library, so testing it in runtime would be super straightforward (it would be enough to just have the callable function to get the random number); if this is too much, then something like a tutorial to test and integrate it (like provided code to copy/paste in the project, ecc.).