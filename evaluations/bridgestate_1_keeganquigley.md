# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DIA_Bridge_Attestation_Oracle.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes
| -----: | ----------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/LICENSE) | Apache 2.0 license |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw#readme) | Ok. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/tests.rs) | Ok. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw#using-docker) |  |
| 0e. | Article | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/Article.md) | Ok. |
| 1. | Attestation oracle core: Off-chain worker | <ul><li>[x] </li></ul> | Ok. |
| 2. | Attestation oracle core: Pallet | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/tree/main#add-the-collateral-reader-pallet-to-your-runtime) | Ok. |
| 3. | Attestation oracle core: RPCs | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/impls.rs) | Ok. |
| 4. | Attestation oracle core: Collateral ratio calculation | <ul><li>[x] </li></ul> | [Link](https://github.com/diadata-org/bridgestate-ocw/tree/main#about-the-collateral-reader-pallet) | Ok. |

# General Notes

When trying to compile and run the node I get the following:

```rust
error: linking with `cc` failed: exit status: 1
  |
  = note: LC_ALL="C" PATH="/home/ubuntu/.rustup/toolchains/stable-x86_64-unknown-linux-gnu/lib/rustlib/x86_64-unknown-linux-gnu/bin:/home/ubuntu/.nvm/versions/node/v18.13.0/bin:/home/ubuntu/.cargo/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin" VSLANG="1033" "cc" "-m64" "/tmp/rustcmlVVmV/symbols.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.106ynm17pgxcmi50.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.12784fs9hcon45ow.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.1kqejazt585xn42r.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.1yv6nwvxww7h97zp.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.218h7vafws7v7h7d.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.26mqtk4b6jgeh3un.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.28j15a6tkxwymlqc.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.2fg5zrsz70ae0k90.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.2pawq2utohb9bxdm.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.35pcqi7b5vh2z074.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.3atpb6avwn5vx1e1.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.3wq5rkjngfnks6kc.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.44d62mtspvfy4xxa.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.49x7shyjqqnt56ff.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.4rpps648edmcubdt.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.5am2rn332to1iw9c.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.5c57v5c6gvcji9is.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.5f5m179vbnefo777.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_script_build-6276b39b01213466.dqhd3q29xgel6sp.rcgu.o" "/home/ubuntu/substrate-node/target/debug/build/node-cli-6276b39b01213466/build_sc
```
This is supposedly a Mac problem but it happens on Linux too.

Switched toolchains but still getting this:
```rust
error: failed to run custom build command for `node-template-runtime v4.0.0-dev (/Users/keeganquigley/substrate-node/bin/node-template/runtime)`

Caused by:
  process didn't exit successfully: `/Users/keeganquigley/substrate-node/target/release/build/node-template-runtime-4236d63b597cd1e1/build-script-build` (exit status: 1)
  --- stderr
  Rust WASM toolchain not installed, please install it!

  Further error information:
  ------------------------------------------------------------
     Compiling wasm-test v1.0.0 (/var/folders/6_/b7tdvp0d6h779ktj0h92w5km0000gn/T/.tmpjZAv2N)
  error[E0463]: can't find crate for `std`
    |
    = note: the `wasm32-unknown-unknown` target may not be installed
    = help: consider downloading the target with `rustup target add wasm32-unknown-unknown`
    = help: consider building the standard library from source with `cargo build -Zbuild-std`

  error: cannot find macro `println` in this scope
   --> src/main.rs:3:5
    |
  3 |                 println!("{}", env!("RUSTC_VERSION"));
    |                 ^^^^^^^

  error: requires `sized` lang_item

  For more information about this error, try `rustc --explain E0463`.
  error: could not compile `wasm-test` (bin "wasm-test") due to 3 previous errors
  ------------------------------------------------------------
  ```
**UPDATE:** This error is happening on regular `substrate-node-template` and is not the fault of the team. 

Some pallet functions don't have comments. Consider improving them for next milestone.

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
