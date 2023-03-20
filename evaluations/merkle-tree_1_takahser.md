# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/binary_merkle_tree.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License                    | <ul><li>[x] </li></ul> | [MIT](https://github.com/frisitano/merkle-tree-db/blob/84ee5bfecb64d95ae4750032e840495c08cdc6d8/LICENSE.md) | - |
| 0b. | Documentation              | <ul><li>[ ] </li></ul> | [README](https://github.com/frisitano/merkle-tree-db/blob/84ee5bfecb64d95ae4750032e840495c08cdc6d8/README.md), [published `merkle_tree_db` crate](https://docs.rs/merkle-tree-db/0.0.1/merkle_tree_db/), [examples](https://github.com/frisitano/merkle-tree-db/tree/84ee5bfecb64d95ae4750032e840495c08cdc6d8/examples) | see [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing and Testing Guide  | <ul><li>[ ] </li></ul> | [tests](https://github.com/frisitano/merkle-tree-db/blob/master/src/tests.rs) | see [Testing Feedback](#testing-feedback) |
| 0d. | Docker                     | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/frisitano/merkle-tree-db/blob/master/Dockerfile) | - |
| 1. | Binary Mekrle Tree Library | <ul><li>[ ] </li></ul> | [repo](https://github.com/frisitano/merkle-tree-db/tree/84ee5bfecb64d95ae4750032e840495c08cdc6d8), [published crate](https://crates.io/crates/merkle-tree-db) | Note: Will review more in-depth after 0b., 0c. are fixed;  Spec: *We will create a binary merkle tree library that operates over a HashDB backend and is generic over the hasher.  It will implement the interfaces as described above in this note.*                                                            |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- inline comments: very appropriate, not too many, not too few
- there are 3 examples with run instructions, however, none of them compile:

    ```bash
    examples % cargo run --example keyed_tree --features executable

    Compiling merkle-tree-db v0.0.1 (/Users/xxx/repos/merkle-tree-db)
    error[E0432]: unresolved import `binary_merkle_tree`
    --> examples/keyed_tree.rs:1:5
    |
    1 | use binary_merkle_tree::{Hasher, KeyedTree, KeyedTreeMut, TreeDBBuilder, TreeDBMutBuilder};
    |     ^^^^^^^^^^^^^^^^^^ use of undeclared crate or module `binary_merkle_tree`

    For more information about this error, try `rustc --explain E0432`.
    error: could not compile `merkle-tree-db` due to previous error
    examples % cargo run --example index_tree --features executable

    Compiling merkle-tree-db v0.0.1 (/Users/xxx/repos/merkle-tree-db)
    error[E0432]: unresolved import `binary_merkle_tree`
    --> examples/index_tree.rs:1:5
    |
    1 | use binary_merkle_tree::{
    |     ^^^^^^^^^^^^^^^^^^ use of undeclared crate or module `binary_merkle_tree`

    For more information about this error, try `rustc --explain E0432`.
    error: could not compile `merkle-tree-db` due to previous error
    examples % cargo run --example recorder --features executable

    Compiling merkle-tree-db v0.0.1 (/Users/xxx/repos/merkle-tree-db)
    error[E0432]: unresolved import `binary_merkle_tree`
    --> examples/recorder.rs:1:5
    |
    1 | use binary_merkle_tree::{
    |     ^^^^^^^^^^^^^^^^^^ use of undeclared crate or module `binary_merkle_tree`

    For more information about this error, try `rustc --explain E0432`.
    error: could not compile `merkle-tree-db` due to previous error
    ```

### Testing Feedback

- it would be helpful if the tests followed the [AAA (Arrange, Act, Assert)](https://docs.telerik.com/devtools/justmock/basic-usage/arrange-act-assert) pattern, especially since the code being tested is highly technical
- test coverage: sufficient
- all tests succeed:

    ```bash
    % cargo test
        Finished test [unoptimized + debuginfo] target(s) in 0.21s
        Running unittests src/lib.rs (target/debug/deps/merkle_tree_db-a932718d9babca0f)

    running 28 tests
    test tests::test_depth_tree_db ... ok
    test tests::test_depth_index_db_mut ... ok
    test tests::test_insert_index_db_mut ... ok
    test tests::test_depth_tree_db_mut ... ok
    test tests::test_depth_index_db ... ok
    test tests::test_leaf_index_db_mut ... ok
    test tests::test_leaf_index_db ... ok
    test tests::test_leaf_tree_db_mut ... ok
    test tests::test_insert_tree_db_mut ... ok
    test tests::test_leaf_tree_db ... ok
    test tests::test_remove_index_db_mut ... ok
    test tests::test_proof_index_db ... ok
    test tests::test_proof_index_db_mut ... ok
    test tests::test_recorder_and_storage_proof_index_db_mut ... ok
    test tests::test_recorder_and_storage_proof_index_db ... ok
    test tests::test_proof_tree_db ... ok
    test tests::test_proof_tree_db_mut ... ok
    test tests::test_root_index_db ... ok
    test tests::test_recorder_and_storage_proof_tree_db ... ok
    test tests::test_root_tree_db ... ok
    test tests::test_remove_tree_db_mut ... ok
    test tests::test_recorder_and_storage_proof_tree_db_mut ... ok
    test tests::test_root_tree_db_mut ... ok
    test tests::test_root_index_db_mut ... ok
    test tests::test_value_index_db ... ok
    test tests::test_value_index_db_mut ... ok
    test tests::test_value_tree_db ... ok
    test tests::test_value_tree_db_mut ... ok

    test result: ok. 28 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

    Doc-tests merkle-tree-db

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```