# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/7e34710aff6c941d2a3e65302fbcdbb1c43c466f/applications/on-chain-cash.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License file](https://github.com/bsn-si/ocex-smartcontract/blob/f9d3dc4ec01c713f35df9e4af410c722b9344f64/LICENSE) | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#how-to) | Inline docs are sufficient, base logic is covered. The build succeeds now, see [Building Feedback](#building-feedback) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing instructions](https://github.com/bsn-si/ocex-smartcontract/tree/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b#compile--run-tests) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 1. | Liquidity pool management methods | <ul><li>[x] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L219) | - | 
| 2. | Coupon data storage | <ul><li>[x] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L60) | - | 
| 3. | Coupon registration | <ul><li>[x] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L97) | - |
| 4. | Coupon validation | <ul><li>[x] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/f9d3dc4ec01c713f35df9e4af410c722b9344f64/lib.rs#L263) | - | 
| 5. | Coupon liquidation | <ul><li>[x] </li></ul> | [See contract](https://github.com/bsn-si/ocex-smartcontract/blob/7946707a23ab9a7c95baeb9d3d9f8c34baee9b6b/lib.rs#L236)  | - | 


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- "4. Coupon validation" is currently missing in the milestone delivery
- Build currently fails

### Testing Guide Feedback

- While the test for `transfer_ownership` was missing at first, it was added in the most recents commits. Hence, the core logic is now fully covered by tests.

- Tests pass. The previously existing warning has been fixed.
    ```bash
    $ cargo +nightly test --features=test
    Compiling proc-macro2 v1.0.37

    (...)

    Compiling sp-core v6.0.0 (https://github.com/paritytech/substrate.git?branch=master#1b57cff6)
    Compiling ink_lang v3.0.1
    Compiling ocex v0.1.0 (/home/xxx/repos/ocex-smartcontract)
        Finished test [unoptimized + debuginfo] target(s) in 19.39s
        Running unittests lib.rs (target/debug/deps/ocex-118ac0d3c1060c34)

    running 3 tests
    test ocex::tests::check_transfer_ownership ... ok
    test ocex::tests::insert_coupons ... ok
    test ocex::tests::insert_coupon_activation ... ok

    test result: ok. 3 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s
    ```

### Building Feedback

- Although initially the build didn't work, it does after following the [install instructions](https://github.com/w3f/Grant-Milestone-Delivery/pull/418#issuecomment-1147976925)

    ```bash
    sudo apt install build-essential pkg-config libssl-dev curl git binaryen
    curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs/ | sh # nightly version complete bundle
    source $HOME/.cargo/env
    cargo install cargo-dylint dylint-link cargo-contract
    git clone https://github.com/bsn-si/ocex-smartcontract
    cd ocex-smartcontract/
    cargo contract build
    ```

- Build output:

    ```bash
    $ cargo contract build
    [1/5] Building cargo project
        Updating crates.io index
        Updating git repository `https://github.com/paritytech/substrate.git`
    Downloaded compiler_builtins v0.1.49
    Downloaded hashbrown v0.11.0

        Finished release [optimized] target(s) in 13.19s
        Running `target/ink/release/metadata-gen ''`
    [5/5] Generating bundle

    Original wasm size: 118.3K, Optimized: 78.6K

    The contract was built in DEBUG mode.

    Your contract artifacts are ready. You can find them in:
    /home/xxx/repos/ocex-smartcontract/target/ink

    - ocex.contract (code + metadata)
    - ocex.wasm (the contract's code)
    - metadata.json (the contract's metadata)
    ```

- Docker build works as well:

    ```bash
    $ docker build -t ocex-contract .
        Sending build context to Docker daemon  309.8kB
    Step 1/4 : FROM paritytech/contracts-ci-linux:latest
    latest: Pulling from paritytech/contracts-ci-linux
    d7bfe07ed847: Pull complete 
    2e43357312c2: Pull complete 
    24bd3e0f3bc5: Pull complete 
    Digest: sha256:3a603c9a596fef5d2fa05d728f4220c26082dfac3e4d9a005eb5535f371c4b19
    Status: Downloaded newer image for paritytech/contracts-ci-linux:latest
    ---> c29c318da494
    Step 2/4 : WORKDIR /contract
    ---> Running in 7711f5658c1b
    Removing intermediate container 7711f5658c1b
    ---> 603b652c5409
    Step 3/4 : COPY . .
    ---> 004a8bc00d0e
    Step 4/4 : RUN cargo contract build --release
    ---> Running in 741179a1bda5
    [1/5] Checking ink! linting rules
    Building driver for toolchain `nightly-2022-03-14-x86_64-unknown-linux-gnu`
        Updating crates.io index
    Downloading crates ...
    (...)
    Downloaded camino v1.0.9
    Compiling proc-macro2 v1.0.39
    (...)
    Compiling dylint_driver-nightly-2022-03-14-x86_64-unknown-linux-gnu v0.1.0 (/tmp/.tmpIqnmoN)
        Finished dev [unoptimized + debuginfo] target(s) in 9.76s
    Checking with toolchain `nightly-2022-03-14-x86_64-unknown-linux-gnu`
    (...)
    Downloaded rustc-demangle v0.1.21
    Compiling compiler_builtins v0.1.71
    Compiling core v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core)
    Compiling libc v0.2.121
    Compiling cc v1.0.69
    Compiling dlmalloc v0.2.3
    Compiling std v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/std)
    (...)
    Compiling unwind v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/unwind)
    Compiling quote v1.0.18
    (...)
    Compiling ink_primitives v3.2.0
    Compiling rustc-std-workspace-core v1.99.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/rustc-std-workspace-core)
    Compiling ink_lang_macro v3.2.0
    Compiling alloc v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/alloc)
    Compiling cfg-if v0.1.10
    Compiling rustc-demangle v0.1.21
    Compiling rustc-std-workspace-alloc v1.99.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/rustc-std-workspace-alloc)
    Compiling panic_abort v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/panic_abort)
    Compiling panic_unwind v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/panic_unwind)
    Compiling hashbrown v0.12.0
    Compiling std_detect v0.1.5 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/stdarch/crates/std_detect)
    Compiling proc_macro v0.0.0 (/usr/local/rustup/toolchains/nightly-2022-05-05-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/proc_macro)
    Compiling arrayref v0.3.6
    (...)
    Compiling ocex v0.1.0 (/tmp/cargo-contract_zieJEi)
        Finished release [optimized] target(s) in 22.16s
    [3/5] Post processing wasm file
    [4/5] Optimizing wasm file
    [4/5] Generating metadata
        Updating crates.io index
        Updating git repository `https://github.com/paritytech/substrate.git`
    Downloading crates ...
    (...)
    Downloaded secp256k1-sys v0.5.2
    Compiling proc-macro2 v1.0.39
    (...)
    Compiling ocex v0.1.0 (/tmp/cargo-contract_xJURiB)
    Compiling metadata-gen v0.1.0 (/tmp/cargo-contract_xJURiB/.ink/metadata_gen)
        Finished release [optimized] target(s) in 17.87s
        Running `target/ink/release/metadata-gen ''`
    [5/5] Generating bundle

    Original wasm size: 76.3K, Optimized: 45.0K

    The contract was built in RELEASE mode.

    Your contract artifacts are ready. You can find them in:
    /contract/target/ink

    - ocex.contract (code + metadata)
    - ocex.wasm (the contract's code)
    - metadata.json (the contract's metadata)
    Removing intermediate container 741179a1bda5
    ---> c55699d5ca25
    Successfully built c55699d5ca25
    Successfully tagged ocex-contract:latest
    
    $ docker create -ti --name ocex ocex-contract bash # create image
    77e29af8272af8a1af071a77b9c24eaa3cd0cf8f8d7eefd9af735b65da52b185
    
    $ docker cp ocex:/contract/target/ink/ocex.contract ~/ocex.contract

    $ docker image ls
    REPOSITORY      TAG         IMAGE ID        CREATED         SIZE
    ocex-contract   latest      c55699d5ca25    7 minutes ago   6.54GB
    ```
