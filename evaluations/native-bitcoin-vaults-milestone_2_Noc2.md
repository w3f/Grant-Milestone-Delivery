# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/native-bitcoin-vaults.md
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [hashed-substrate](https://github.com/hashed-io/hashed-substrate/blob/main/LICENSE), [bdk-services](https://github.com/hashed-io/bdk-services/blob/master/LICENSE), [hashed-network-portal-ui](https://github.com/hashed-io/hashed-network-portal-ui)  | Correct Licenses, however the hashed-network-portal-ui has no license |
 0b. | Documentation | <ul><li>[x] </li></ul> | [readme](https://github.com/hashed-io/hashed-substrate/tree/main/pallets/bitcoin-vaults), [inline doc](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/bitcoin-vaults/src/lib.rs) | According to the contract |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Tutorial](https://github.com/hashed-io/hashed-network-portal-ui/blob/dev/docs/tutorials/native_bitcoin_vault_user_guide.md), [mod.rs](https://github.com/hashed-io/bdk-services/blob/14df7b1c2b87ba0ba0c0cedb4f4c7d80dd68dd06/src/hbdk/mod.rs#L623), [tests.rs](https://github.com/hashed-io/hashed-substrate/blob/main/pallets/bitcoin-vaults/src/tests.rs)  | Very detailed tutorial. The readme doesn't explain how to run the tests, but this isn't a big problem, since it is well tested. However 2 of the bitcoin-vault test fail see below  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/hashed-io/bdk-services/blob/master/Dockerfile)  | Correct |
| 0e. | Video & Article | <ul><li>[x] </li></ul> | Videos in [Spanish](https://drive.google.com/file/d/1Tg0Bz09Zfoo8yhQP88bG5yepjtlyh_be/view) and [English](https://us02web.zoom.us/rec/share/E4aqWkYK7n_f9tbmf5BNTqGMPW7NECOmkcY18iK5ZttHfWNLZeZ0JlAN3S-zpFOB.0QgU4C_WrzCEUS9Z?startTime=1665605589000) and the articles in [Spanish](https://docs.google.com/document/d/1bJhRX4NXBJSH4MnMUBkkhlMQn8CKtsukLMCL4Zx1XUk/edit?usp=sharing) and [English](https://docs.google.com/document/d/1rAPWY7Mz015UUJhgYCdQ2F5pZPXJLnY0ZPgap9Q4Oqs/edit?usp=sharing)  | It was published in English and Spanish as promised.  |
| 1. | PSBT Signing | <ul><li>[ ] </li></ul> | [bdk-services](https://github.com/hashed-io/bdk-services)  | | 
| 2. | Transaction Broadcast | <ul><li>[ ] </li></ul> | [FinalizeProposal](https://github.com/hashed-io/hashed-network-portal-ui/blob/dev/docs/tutorials/native_bitcoin_vault_user_guide.md#refFinalizeProposal)  | |
| 4. | Hosted Instances | <ul><li>[x] </li></ul> | [Website](https://hashed-portal-dev.hashed.systems/)  | Works | 
| 6. | Support & Maintenance | <ul><li>[ ] </li></ul> | [ ]()  | Can not really be evaluated at this stage |

## General Notes


**bitcoin-vaults/src/tests.rs results: **

```

failures:

---- tests::finalize_psbt_should_work stdout ----
thread 'tests::finalize_psbt_should_work' panicked at 'Expected Ok(_). Got Err(
    Module(
        ModuleError {
            index: 1,
            error: [
                21,
                0,
                0,
                0,
            ],
            message: Some(
                "PendingProposalRequired",
            ),
        },
    ),
)', pallets/bitcoin-vaults/src/tests.rs:495:9
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- tests::finalize_psbt_twice_shouldnt_work stdout ----
thread 'tests::finalize_psbt_twice_shouldnt_work' panicked at 'Expected Ok(_). Got Err(
    Module(
        ModuleError {
            index: 1,
            error: [
                21,
                0,
                0,
                0,
            ],
            message: Some(
                "PendingProposalRequired",
            ),
        },
    ),
)', pallets/bitcoin-vaults/src/tests.rs:518:9


failures:
    tests::finalize_psbt_should_work
    tests::finalize_psbt_twice_shouldnt_work

test result: FAILED. 28 passed; 2 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

```
