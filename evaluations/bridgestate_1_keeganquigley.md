# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/LICENSE) | Apache 2.0 license |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw#readme) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/tests.rs) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw#using-docker) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/Article.md) |  |
| 1. | Attestation oracle core: Off-chain worker | <ul><li>[x] </li></ul> |  |
| 2. | Attestation oracle core: Pallet | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/tree/main#add-the-collateral-reader-pallet-to-your-runtime) |  |
| 3. | Attestation oracle core: RPCs | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/impls.rs) |  |
| 4. | Attestation oracle core: Collateral ratio calculation | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/tree/main#about-the-collateral-reader-pallet) |  |

# General Notes

## Tests

Docker fails with the following:
```rust
sh ./docker/build.sh
~/substrate-node ~/substrate-node
Building parity/substrate:latest docker image, hang on!
[+] Building 245.4s (10/15)
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 99B                                                                                      0.0s
 => [internal] load build definition from substrate_builder.Dockerfile                                                0.0s
 => => transferring dockerfile: 1.82kB                                                                                0.0s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                             1.5s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                       1.5s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:555bea4b712590ee08bf5ad2d9c4aa76fd5663291c7  174.6s
 => => resolve docker.io/paritytech/ci-linux:production@sha256:555bea4b712590ee08bf5ad2d9c4aa76fd5663291c71d5180722b  0.0s
 => => sha256:555bea4b712590ee08bf5ad2d9c4aa76fd5663291c71d5180722b98b1d6a7e0b 761B / 761B                            0.0s
 => => sha256:7e12b5224551127862490c6ef3d1b8bb7684fff8ddd2994737200f8053e0c4cb 9.91kB / 9.91kB                        0.0s
 => => sha256:9e3ea8720c6de96cc9ad544dddc695a3ab73f5581c5d954e0504cc4f80fb5e5c 31.40MB / 31.40MB                      8.9s
 => => sha256:3b4d18f7247ab0517742ad602f79deae16533e766e110ee5ebd8978620033443 570.02MB / 570.02MB                  160.5s
 => => sha256:5d2ff4126beaf07b2eca0c5df928087cac191766af27ba554fd928c7c67e5cad 361.19MB / 361.19MB                  120.2s
 => => extracting sha256:9e3ea8720c6de96cc9ad544dddc695a3ab73f5581c5d954e0504cc4f80fb5e5c                             0.5s
 => => extracting sha256:3b4d18f7247ab0517742ad602f79deae16533e766e110ee5ebd8978620033443                             7.7s
 => => extracting sha256:5d2ff4126beaf07b2eca0c5df928087cac191766af27ba554fd928c7c67e5cad                             4.8s
 => [internal] load build context                                                                                     0.5s
 => => transferring context: 41.15MB                                                                                  0.4s
 => CACHED [stage-1 1/6] FROM docker.io/library/ubuntu:20.04@sha256:db8bf6f4fb351aa7a26e27ba2686cf35a6a409f65603e59d  0.0s
 => [builder 2/4] WORKDIR /substrate                                                                                  1.0s
 => [builder 3/4] COPY . /substrate                                                                                   0.3s
 => ERROR [builder 4/4] RUN cargo build --locked --release                                                           68.0s
------
 > [builder 4/4] RUN cargo build --locked --release:
#10 2.177     Updating crates.io index
#10 67.94 Killed
------
process "/bin/sh -c cargo build --locked --release" did not complete successfully: exit code: 137
```

Unit tests all pass, however there are some warnings about unused variables:

```rust
warning: unused variable: `expected_token`
  --> frame/collateral-reader/src/tests.rs:41:7
   |
41 |         let expected_token = token.clone();
   |             ^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_expected_token`
   |
   = note: `#[warn(unused_variables)]` on by default

warning: unused `Result` that must be used
  --> frame/collateral-reader/src/tests.rs:38:3
   |
38 |         TemplateModule::save_asset_stats(origin.into(), token_clone);
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled
   = note: `#[warn(unused_must_use)]` on by default

warning: unused `Result` that must be used
  --> frame/collateral-reader/src/tests.rs:60:4
   |
60 |          TemplateModule::save_asset_stats(origin.into(), token.clone());
   |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled

warning: `pallet-collateral-reader` (lib test) generated 3 warnings (run `cargo fix --lib -p pallet-collateral-reader --tests` to apply 1 suggestion)
    Finished test [unoptimized + debuginfo] target(s) in 7m 33s
     Running unittests src/lib.rs (/home/ubuntu/substrate-node/target/debug/deps/pallet_collateral_reader-dcda7472ee4c65a4)

running 4 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::save_asset_stats_works ... ok
test tests::test_save_asset_event ... ok
test tests::signed_transaction_on_chain ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.41s

   Doc-tests pallet-collateral-reader

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
## Cargo Clippy

Comes back clean.
