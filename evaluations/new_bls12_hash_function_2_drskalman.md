# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/new_bls12_hash_function.md
- **Milestone:** 2
- **Kusama Identity:** N/A
- **Previously successfully merged evaluation:** N/A


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/w3f-grants-archive/indifferentiable-hashing/blob/master/LICENSE| MIT|
| 0b. | Documentation |<ul><li>[x] </li></ul>|Inline||
| 0c. | Testing Guide | <ul><li>[x] </li></ul>|https://github.com/w3f-grants-archive/indifferentiable-hashing/blob/master/src/bls12_381.rs#L158 | cargo test passes and the value matches results from sage implementation|
| 1. | Implementation | <ul><li>[x] </li></ul> | https://github.com/w3f-grants-archive/indifferentiable-hashing/ | 

## General Notes

Congratulation on completing the deliverable! 

The rust implementation of the hash function produces matching results to the sage implementation. The hash function has also been implemented for Arkworks frameworks for both curves and Arkworks algebra and curve tests are passing for the fork.  as such I would consider milestone 1 to be successfully completed. 

