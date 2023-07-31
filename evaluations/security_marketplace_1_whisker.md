# Evaluation

- **Status:** In Progress
- **Application Document:** [w3f/Grants-Program#1726](https://github.com/w3f/Grants-Program/blob/master/applications/Security_Marketplace.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**


| Number | Deliverable | Link | Notes |
| -----: | ----------- | ----- | ------- |
| **0a.** | License | Unlicense | Unlicensed |
| **0b.** | Documentation | >[Escrow Contract Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Smartcontract/blob/main/escrow/Escrow%20Doc.pdf) >[Reward Token Contract Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Smartcontract/blob/main/reward_token/Reward%20Token.pdf) >[Node Services Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Backend/blob/main/AuditBazaarBackendArchitecture.docx) | The documentations are meant to explain the working of the application till this milestone. |
| **0c.** | Testing and Testing Guide | - | The respective Test files can be found alongside the project repositories with guidelines in readme files. |
| **0d.** | Docker | - | The dockerfiles can be found alongside the project repositories.  |
| 1 | UI/UX | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | The link leads to the repository of the front end of the application, the guidelines to operate it can be found in readme file. |
| 2 | Reputation Token Contract | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | This link leads to the reputation token's smart contract.  |
| 3 | Escrow Contract| [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | This link leads to the Escrow Contract's smart contract. |
| 4 | Audit Directory Contract | - | This contract is not in the planned ecosystem anymore and it's functionality has been shifted in to that of escrow contract's |
| 5 | Arbiters Contract | - | This contract is not in the planned ecosystem anymore either with it's functionality shifted in the back end to make it cost efficient for Arbiters. |
| 6 | Node Services | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Backend) | The link leads to the repository of the front end of the application, the guidelines to operate it can be found in readme file. |

## General Notes

todo

### Logs

<details>

<summary>Build image </summary>

```bash


```

</details>


<details>

<summary> Reward token contract Unit tests </summary>

```bash

warning: function `random_acoount_id` is never used
  --> lib.rs:83:8
   |
83 |     fn random_acoount_id() -> AccountId {
   |        ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: module `testCases` should have a snake case name
  --> lib.rs:77:5
   |
77 | mod testCases {
   |     ^^^^^^^^^ help: convert the identifier to snake case: `test_cases`
   |
   = note: `#[warn(non_snake_case)]` on by default

warning: unused `std::result::Result` that must be used
  --> lib.rs:94:9
   |
94 |         contract.mint(accounts.alice,1);
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled
   = note: `#[warn(unused_must_use)]` on by default

warning: unused `std::result::Result` that must be used
   --> lib.rs:107:9
    |
107 |         contract.mint(accounts.alice,1);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled

warning: unused `std::result::Result` that must be used
   --> lib.rs:120:9
    |
120 |         contract.mint(accounts.alice,1);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled

warning: variable `Error1` should have a snake case name
   --> lib.rs:134:13
    |
134 |         let Error1 = contract.mint(accounts.charlie, 1000);
    |             ^^^^^^ help: convert the identifier to snake case: `error1`

warning: `reward_token` (lib test) generated 6 warnings
    Finished test [unoptimized + debuginfo] target(s) in 1m 39s
     Running unittests lib.rs (target/debug/deps/reward_token-7de3b7d8c4071858)

running 4 tests
test testCases::test_case_4 ... ok
test testCases::test_case_1 ... ok
test testCases::test_case_3 ... ok
test testCases::test_case_2 ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

</details>