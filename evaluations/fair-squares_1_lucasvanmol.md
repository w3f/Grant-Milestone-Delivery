# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License: Apache 2.0 |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/blob/main/LICENSE)| | 
| 0b.  | Documentation & tutorial |<ul><li>[ ] </li></ul>|[Link](https://docs.google.com/document/d/186XCQliGloijWBnk4N5HivKt9TyXG3PUM1I6C1994CQ/edit#heading=h.wpxzjrnoi4x)| The inline documentation for the `Event` enum in the [roles pallet](https://github.com/Fair-Squares/fair-squares/blob/b3fdc318c5fc03f1974a34c8291658d45d6b79ff/pallets/roles/src/lib.rs#L135) could use `/// Doc comments`, in the same way as in the [housing-fund pallet](https://github.com/Fair-Squares/fair-squares/blob/b3fdc318c5fc03f1974a34c8291658d45d6b79ff/pallets/housing_fund/src/lib.rs#L109), because it shows up in the polkadot.js.org/apps UI, and in `cargo docs` documentation. | 
| 0c. | Testing Guide |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares#run-all-tests) | See notes re. coverage | 
| 0d. | Dockerfile |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/blob/main/Dockerfile) | | 
| 0e.  | Article |<ul><li>[x] </li></ul>|[Link](https://docs.google.com/document/d/1YT5tLNmcCsrmn4_2W9UHZb1QgTiRo0inVWUUvr8sr5M/edit?usp=sharing)| | 
| 1.  | pallet-roles |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/roles)| |
| 2.  | pallet-housing-fund |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/housing_fund)| |
| 3.  | role-verifier |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/blob/main/pallets/roles/src/lib.rs#L208-L251)| Integrated as a part of the roles pallet |
| 4.  | fs-node M1 |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares)| |

## General Notes

Overall, I think this is a great delivery - nice job! 

See also the comments in [@diogosmendonca's external evaluation](https://github.com/w3f/Grant-Milestone-Delivery/blob/2a9c8f87c012c250b903b4ec4e8a79a799dad40d/evaluations/fair-squares_1_diogosmendonca.md)

* The issue raised about code coverage percentage is, in my opinion, a bit misleading on tarpaulin's part because it includes files that are a part of the `substrate-node-template`, and also auto-generated files such as `weights.rs`. Having had a look at the tests for the two pallets included as part of this delivery, I would say all of the functionality is indeed properly tested and code coverage is good.

---

#### Commit hashes used for this evaluation

`github.com/Fair-Squares/fair-squares`: 5d76cb0445309b33b169a2e11d9e19355e1cb531
