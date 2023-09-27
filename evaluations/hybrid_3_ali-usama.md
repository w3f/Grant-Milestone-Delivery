# Evaluation

- **Status:** Accepted
- **Application Document:** [hybrid](https://github.com/w3f/Grants-Program/blob/master/applications/hybrid.md) 
- **Milestone:** 3
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable             | Accepted               | Link                                                                                                                                                                        | Evaluation Notes                                                 |
|--------|-------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------|
| 0a.    | Licence                 | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/LICENSE)                                                                                           | Correct Licence                                                  |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/tutorial.md)<br/>[README](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/README.md) | Detailed documentation                                           |
| 0c.    | Testing & Testing Guide | <ul><li>[x] </li></ul> | [Testing-Guide](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/testing-guide.md)                                                                           | All test cases pass. Output attached below.                      |
| 0d.    | Docker                  | <ul><li>[x] </li></ul> | [Docker ReadMe](https://github.com/hybrid-explorer/polkadot-indexer/blob/main/README.md#docker)                                                                             | Images building and running successfully. Output attached below. |
| 0e.    | Blog post               | <ul><li>[x] </li></ul> | [Launch-Announcement](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/doc/launch-announcement.md)                                                               | Well-writen article                                              |
| 1.     | Hybrid indexer library  | <ul><li>[x] </li></ul> | [substrate-pallet](https://github.com/hybrid-explorer/hybrid-indexer/blob/main/src/substrate_pallets.rs)                                                                    | Working as per application                                       |
| 2.     | Polkadot Indexer        | <ul><li>[x] </li></ul> | [polkadot-indexer](https://github.com/hybrid-explorer/polkadot-indexer)                                                                                                     | Working as per application                                       |
| 3.     | Chain Select            | <ul><li>[x] </li></ul> | [hybrid-dapp](https://github.com/hybrid-explorer/hybrid-dapp)                                                                                                               | Working as per application                                       |


## General Notes

## Updated Notes Aug 9th, 2023
The docker build issues are fixed in the recent commits. No further issues were found

-----

All three repositories included in the milestone are well-structured and well-documented. Except the docker build issues in the 'polkadot-indexer', no major issues were found in the delivery. 

### `cargo test` output
```commandline
Running unittests src/lib.rs (target/debug/deps/hybrid_indexer-ce6bf8f9bfcc9c20)

running 45 tests
test tests::test_candidate_hash_key ... ok
test tests::test_account_id_key ... ok
test tests::test_index_event_era_index ... ok
test tests::test_index_event_para_id ... ok
test tests::test_index_event_auction_index ... ok
test tests::test_index_event_bounty_index ... ok
test tests::test_index_event_account_id ... ok
test tests::test_index_event_message_id ... ok
test tests::test_index_event_account_index ... ok
test tests::test_index_event_candidate_hash ... ok
test tests::test_index_event_session_index ... ok
test tests::test_index_event_proposal_index ... ok
test tests::test_index_event_preimage_hash ... ok
test tests::test_message_id_key ... ok
test tests::test_preimage_hash_key ... ok
test tests::test_index_event_pool_id ... ok
test tests::test_index_event_registrar_index ... ok
test tests::test_index_event_ref_index ... ok
test tests::test_index_event_tip_hash ... ok
test tests::test_index_event_proposal_hash ... ok
test tests::test_process_msg_account_index ... ok
test tests::test_process_msg_account_id ... ok
test tests::test_index_event_variant ... ok
test tests::test_process_msg_auction_index ... ok
test tests::test_process_msg_message_id ... ok
test tests::test_process_msg_era_index ... ok
test tests::test_process_msg_para_id ... ok
test tests::test_process_msg_candidate_hash ... ok
test tests::test_process_msg_bounty_index ... ok
test tests::test_process_msg_proposal_hash ... ok
test tests::test_process_msg_pool_id ... ok
test tests::test_process_msg_ref_index ... ok
test tests::test_proposal_hash_key ... ok
test tests::test_tip_hash_key ... ok
test tests::test_u32_key ... ok
test tests::test_variant_key ... ok
test tests::test_vector_as_u8_32_array ... ok
test tests::test_vector_as_u8_4_array ... ok
test tests::test_process_msg_status ... ok
test tests::test_process_msg_session_index ... ok
test tests::test_process_msg_tip_hash ... ok
test tests::test_process_msg_preimage_hash ... ok
test tests::test_process_msg_registrar_index ... ok
test tests::test_process_msg_variant ... ok
test tests::test_process_msg_proposal_index ... ok

test result: ok. 45 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.21s

   Doc-tests hybrid-indexer

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```

### Docker Build Output
1. [hybrid-indexer](https://github.com/hybrid-explorer/hybrid-indexer/tree/main)
```commandline
docker build .
[+] Building 2012.4s (9/9) FINISHED                                                                                                               
 => [internal] load build definition from Dockerfile                                                                                         0.0s
 => => transferring dockerfile: 189B                                                                                                         0.0s
 => [internal] load .dockerignore                                                                                                            0.0s
 => => transferring context: 52B                                                                                                             0.0s
 => [internal] load metadata for docker.io/library/rust:slim                                                                                 4.2s
 => [1/4] FROM docker.io/library/rust:slim@sha256:ec0d77d4f1abd42828514c313b7f196b5fed655bf61f5e4c9e04f892016c270f                        1653.5s
 => => resolve docker.io/library/rust:slim@sha256:ec0d77d4f1abd42828514c313b7f196b5fed655bf61f5e4c9e04f892016c270f                           0.0s
 => => sha256:1d5252f66ea9b661aceca1027b3d7ca259a50608261a25b51148119ecf086932 31.42MB / 31.42MB                                           299.4s
 => => sha256:b6a3e85cbf07885cd8c7ffa0d0804b5d6582137a2c227b23d6efa05706c7cebc 247.12MB / 247.12MB                                        1645.7s
 => => sha256:ec0d77d4f1abd42828514c313b7f196b5fed655bf61f5e4c9e04f892016c270f 984B / 984B                                                   0.0s
 => => sha256:7b9e70011dbfd71a3998fe30ea2a531b6da83630967da55bb2d4429e6f88b70a 742B / 742B                                                   0.0s
 => => sha256:a481afef44127ac10336f34d2bbb9137d116390cd4b29d35057d191468eb7532 4.85kB / 4.85kB                                               0.0s
 => => extracting sha256:1d5252f66ea9b661aceca1027b3d7ca259a50608261a25b51148119ecf086932                                                    2.0s
 => => extracting sha256:b6a3e85cbf07885cd8c7ffa0d0804b5d6582137a2c227b23d6efa05706c7cebc                                                    7.4s
 => [internal] load build context                                                                                                            0.0s
 => => transferring context: 3.01kB                                                                                                          0.0s
 => [2/4] WORKDIR /usr/src/hybrid-indexer                                                                                                    0.8s
 => [3/4] COPY . .                                                                                                                           0.0s
 => [4/4] RUN cargo build --release                                                                                                        345.8s
 => exporting to image                                                                                                                       8.0s
 => => exporting layers                                                                                                                      8.0s
 => => writing image sha256:4628da65b737ba9bfa83c2886fc6db373e2c71a1ca32a7b2d400adb1882c15af
```
2. [hybrid-dapp](https://github.com/hybrid-explorer/hybrid-dapp/blob/main/README.md#docker)
```commandline
docker build .
[+] Building 265.3s (10/10) FINISHED                                                                                                              
 => [internal] load .dockerignore                                                                                                            0.0s
 => => transferring context: 296B                                                                                                            0.0s
 => [internal] load build definition from Dockerfile                                                                                         0.0s
 => => transferring dockerfile: 188B                                                                                                         0.0s
 => [internal] load metadata for docker.io/gplane/pnpm:8                                                                                     8.5s
 => [1/5] FROM docker.io/gplane/pnpm:8@sha256:aa0d638af24764bdbaa56f0b31b3fc70462b512ca4fc9116fa4b647bd1360327                               0.0s
 => [internal] load build context                                                                                                            0.0s
 => => transferring context: 3.18kB                                                                                                          0.0s
 => CACHED [2/5] WORKDIR /usr/src/hybrid-dapp                                                                                                0.0s
 => [3/5] COPY . .                                                                                                                           0.0s
 => [4/5] RUN pnpm install                                                                                                                 239.1s
 => [5/5] RUN pnpm build                                                                                                                    13.6s
 => exporting to image                                                                                                                       4.0s 
 => => exporting layers                                                                                                                      4.0s 
 => => writing image sha256:ed805ef8aae1b98ac649f503ea1fc079b5d36cf9a4b56584aeac6d719a305a19
```
```commandline
docker run --rm -p 8272:8272 ed805ef8aae1b98ac649f503ea1fc079b5d36cf9a4b56584aeac6d719a305a19

> hybrid-app@0.0.0 preview /usr/src/hybrid-dapp
> vite preview "--host" "0.0.0.0" "--port" "8272"

  ➜  Local:   http://localhost:8272/
  ➜  Network: http://172.17.0.2:8272/

```
3. [polkadot-indexer](https://github.com/hybrid-explorer/polkadot-indexer#docker)

#### Output after the recent fixes
```commandline
docker build .
[+] Building 3537.3s (10/10) FINISHED                                                                                                                 
 => [internal] load build definition from Dockerfile                                                                                             0.0s
 => => transferring dockerfile: 261B                                                                                                             0.0s
 => [internal] load .dockerignore                                                                                                                0.0s
 => => transferring context: 48B                                                                                                                 0.0s
 => [internal] load metadata for docker.io/library/rust:slim                                                                                     9.6s
 => [internal] load build context                                                                                                                0.1s
 => => transferring context: 1.64MB                                                                                                              0.1s
 => [1/5] FROM docker.io/library/rust:slim@sha256:ec0d77d4f1abd42828514c313b7f196b5fed655bf61f5e4c9e04f892016c270f                               0.0s
 => CACHED [2/5] WORKDIR /usr/src/polkadot-indexer                                                                                               0.0s
 => [3/5] COPY . .                                                                                                                               0.9s
 => [4/5] RUN rustup default nightly                                                                                                           163.8s
 => [5/5] RUN cargo build --release -j 1                                                                                                      3352.3s
 => exporting to image                                                                                                                          10.5s 
 => => exporting layers                                                                                                                         10.5s 
 => => writing image sha256:0e01bebfc2258ef038c058615279fb771d783e86794d0974dff0b1981a999264 
```

---
The polkadot-indexer build errors were fixed after the recent commits. 