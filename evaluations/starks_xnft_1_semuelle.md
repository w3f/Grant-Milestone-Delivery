# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xNFT.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/antiers-solutions/xnft/blob/fa3d77f156f2c3129fb0b661b2b1f856cf46fea3/LICENSE) | License issues fixed on request |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/antiers-solutions/xnft/blob/8b990bcfbe7d6c6ef04b0a39ee27d57eed722075/pallet-xnft/README.md), [user_guide.md](https://github.com/antiers-solutions/xnft/blob/fa3d77f156f2c3129fb0b661b2b1f856cf46fea3/pallet-xnft/docs/user_guide.md) | Documentation fixed on request |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [link](https://github.com/antiers-solutions/xnft/blob/8b990bcfbe7d6c6ef04b0a39ee27d57eed722075/pallet-xnft/README.md#testing-guide) | Testing setup fixed on request |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [antiers-solutions/xnft](https://github.com/antiers-solutions/xnft/tree/1beaa8a55030256630d136b92cd783fdf93be07c) | Trappist fork |
| 0e. | Article | <ul><li>[x] </li></ul> | [docs.google.com](https://docs.google.com/document/d/1QylVQG5RoYjy5LMyZF4_IqyKjc4_fgZsZAPnSkGMdVM/edit#heading=h.hbbk21k8b8my) | Basic overview of pallet contents. |
| 1. | xNFT | <ul><li>[x] </li></ul> | [antiers-solutions/xnft](https://github.com/antiers-solutions/xnft/tree/fa3d77f156f2c3129fb0b661b2b1f856cf46fea3) | — |


## General Notes

Functioning after several rounds of feedback. A fully working Dockerfile with trappist and relay- and parachain setup would be useful for testing.

### `cargo tarpaulin` output

```sh
2024-02-29T10:31:13.743097Z  INFO cargo_tarpaulin::process_handling::linux: Launching test
2024-02-29T10:31:13.743340Z  INFO cargo_tarpaulin::process_handling: running /home/sebastian/work/w3f/code/grants/deliverables/xnft/xNFT/pallet-xnft/target/debug/deps/pallet_xnft-634c9b62c40433a8

running 21 tests
test mock::para::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test mock::relay::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test test::collection_ownership_transfer_fails_no_collection_id ... ok
test test::collection_ownership_transfer_fails_ownermismatch ... ok
test test::collection_ownership_transfer_works ... ok
test test::collection_transfer_fails_for_nonexistent_collection ... ok
test test::collection_transfer_owner_mismatch ... ok
test test::collection_transfer_works ... ok
test test::multinft_transfer_fails_for_nonexistent_collection_id ... ok
test test::multinft_transfer_fails_for_nonexistent_item_id ... ok
test test::multinft_transfer_fails_owner_mismatch ... ok
test test::multinft_transfer_works ... ok
test test::nft_transfer_fails_for_nonexistent_collection_id ... ok
test test::nft_transfer_fails_for_nonexistent_item_id ... ok
test test::nft_transfer_fails_owner_mismatch ... ok
test test::nft_transfer_works ... ok
test test::transfer_nft_metadata_fails_limit_exceeds ... ok
test test::transfer_nft_metadata_fails_ownermismatch ... ok
test test::transfer_nft_metadata_works ... ok
test test::transfer_nfts_ownership_fails_limit_exceeds ... ok
test test::transfer_nfts_ownership_works ... ok

test result: ok. 21 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.84s

2024-02-29T10:32:00.011049Z  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| src/lib.rs: 28, 32, 60-61, 68-69, 75, 83-84, 91-92, 94-95, 102, 109-110, 205, 221, 242, 247, 252, 259, 282, 306, 309, 314, 326, 339, 341, 359, 378, 397, 433, 442, 451, 474, 497, 505, 522, 543, 545-546, 551, 556, 558-559, 562, 570, 583-587, 594, 600-601, 612, 617-619, 621, 623-624, 627, 632, 634, 645, 651, 655-656, 659, 664-666, 683-685, 687, 691, 695, 700-702, 714, 719-723, 726-727, 730, 735-736, 748, 753-755, 768-769
|| Tested/Total Lines:
|| src/lib.rs: 220/320
|| 
68.75% coverage, 220/320 lines covered
```
