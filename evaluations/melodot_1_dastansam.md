# Evaluation

- **Status:** In Progress
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/pull/1804)
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number  | Deliverable               | Link                                                         | Notes                                                        |
| ------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                   | [Apache](https://github.com/ZeroDAO/melodot/blob/w3f/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation             | [Link](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/README.md) | Extensive and comprehensive documentation. |
| **0c.** | Testing and Testing Guide | [Tests](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/src/tests.rs) [Link](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/README.md#testing) | Good test coverage and can be run both natively and with docker. Logs below. |
| **0d.** | Docker                    | [Link](https://github.com/ZeroDAO/melodot/blob/w3f/crates/melo-erasure-coding/README.md#docker) | Unit test run with Docker. Building the crate returns some error, though. Logs below. |
| 1.      | melo_erasure_coding       | [Crate](https://github.com/ZeroDAO/melodot/tree/w3f/crates/melo-erasure-coding) [Primitives](https://github.com/ZeroDAO/melodot/tree/w3f/primitives) | Core functionalities are provided with `primitives` and `melo-erasure-coding` crates. |

## General Notes

Well documented, good quality of code and good test coverage. The code is well commented and references are provided where needed. 

I saw that you included references to projects you took inspiration from, specifically `kzg` and `subspace`. It's good that you included `subspace` as they are working on something similar and I also noticed some similar patterns in the code. As long as the license is compatible, I think it's fine to do that, but it would be nice to explicitly mention what exactly was inspired or borrowed from `subspace` (like you already do with `kzg`), if there is anything, of course. Just adding `subspace` repository in references is a bit vague, I think.

## Logs

<details>

<summary>Unit tests</summary>

```bash
running 18 tests
test tests::test_bytes_vec_to_blobs ... ok
test tests::test_bytes_vec_to_blobs_returns_err ... ok
test tests::test_order_segments_col ... ok
test tests::test_blob_bytes_conversion ... ok
test tests::test_extend_fs_g1 ... ok
test tests::test_extend_poly ... ok
test tests::test_bytes_to_segments_round_trip ... ok
test tests::test_order_segments_row ... ok
test tests::test_segment_datas_to_row ... ok
test tests::test_recover_poly ... ok
test tests::test_extend_and_commit_multi ... ok
test tests::test_poly_to_segment_vec ... ok
test tests::test_extend_segments_col ... ok
test tests::test_extend_returns_err ... ok
test tests::test_recovery_row_from_segments ... ok
test tests::test_proof_multi ... ok
test tests::test_blob_verify_batch ... ok
test tests::test_blob_proof ... ok

test result: ok. 18 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1.10s

   Doc-tests melo-erasure-coding

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

</details>

<details>

<summary>Docker unit tests</summary>

```bash
./scripts/docker_run.sh test melo-erasure-coding

*** Melodot ***
Removing network melodot_default
Creating network "melodot_default" with the default driver
Creating melodot_dev_run ... done

running 18 tests
test tests::test_bytes_vec_to_blobs ... ok
test tests::test_bytes_vec_to_blobs_returns_err ... ok
test tests::test_order_segments_col ... ok
test tests::test_blob_bytes_conversion ... ok
test tests::test_extend_fs_g1 ... ok
test tests::test_extend_poly ... ok
test tests::test_recover_poly ... ok
test tests::test_order_segments_row ... ok
test tests::test_segment_datas_to_row ... ok
test tests::test_bytes_to_segments_round_trip ... ok
test tests::test_extend_and_commit_multi ... ok
test tests::test_poly_to_segment_vec ... ok
test tests::test_proof_multi ... ok
test tests::test_extend_returns_err ... ok
test tests::test_recovery_row_from_segments ... ok
test tests::test_extend_segments_col ... ok
test tests::test_blob_verify_batch ... ok
test tests::test_blob_proof ... ok
```

</details>

<details>

<summary>Docker build</summary>

```bash
*** Melodot ***
Removing network melodot_default
Creating network "melodot_default" with the default driver
Creating melodot_dev_run ... done
Error response from daemon: failed to create shim task: OCI runtime create failed: runc create failed: unable to start container process: exec: "build": executable file not found in $PATH: unknown
ERROR: 1
```
