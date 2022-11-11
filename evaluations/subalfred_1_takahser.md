# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subalfred.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPL-3.0](https://github.com/hack-ink/subalfred/blob/d759748377716c287c109323ab93690fb45f807a/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [CLI docs](https://docs.rs/crate/subalfred/), [Core lib docs](https://docs.rs/subalfred-core), [Util lib docs](https://docs.rs/subalfred-util), [Substrate Seminar #26, ft. Subalfred](https://www.crowdcast.io/e/substrate-seminar-2/26), [User Guide](https://subalfred.hack.ink/) | Very clean, well-documented code. The substrate seminar #26 containes an extensive demo on the Subalfred CLI tool. |
| 0c. | Testing guide | <ul><li>[x] </li></ul> | [Testing instructions](https://github.com/w3f/Grant-Milestone-Delivery/pull/615/files#diff-cbf1c2750707bc6c21c24803492ce2a959862696d77815a45ec393d6ec0964f0R26) | See [Testing guide feedback](#testing-guide-feedback) |
|  1. | Core: check features | <ul><li>[x] </li></ul> | [`check` command](https://github.com/hack-ink/subalfred/tree/09f14e1099379a7d3327de55328642e26f1a007a/bin/subalfred/src/command/check) | See [CLI Testruns](#test-logs) |
|  2. | Core: use paritytech/ss58-registry | <ul><li>[x] </li></ul> | [merged PR on ss58-registry repo](https://github.com/paritytech/ss58-registry/pull/106) | - |
|  3. | Core, CLI: override runtime | <ul><li>[x] </li></ul> | [merged PR](https://github.com/hack-ink/subalfred/pull/262) | - |
|  3. | Core, CLI: rpc | <ul><li>[x] </li></ul> | [`rpc` command](https://github.com/hack-ink/subalfred/blob/09f14e1099379a7d3327de55328642e26f1a007a/bin/subalfred/src/command/rpc.rs) | See [CLI Testruns](#test-logs) |
|  4. | CLI: JSON output | <ul><li>[x] </li></ul> | [`key` command](https://github.com/hack-ink/subalfred/blob/09f14e1099379a7d3327de55328642e26f1a007a/bin/subalfred/src/command/key.rs) | See [CLI Testruns](#test-logs) |
|  5. | CLI: stable Rust toolchain | <ul><li>[x] </li></ul> | [merged PR](https://github.com/hack-ink/subalfred/pull/195) | - |
|  6. | CLI: `--at` accept block number | <ul><li>[ ] </li></ul> | [merged PR](https://github.com/hack-ink/subalfred/pull/259) | Not sure how to test this, I didn't find instructions. Original description from grantee: _I'll make the `--at` arg accept block number input, instead of a block hash only. Any command with `--at` arg will be updated._ |
|  7. | Releases | <ul><li>[x] </li></ul> | [v0.9.0-rc14 GitHub release](https://github.com/hack-ink/subalfred/releases/tag/v0.9.0-rc14), [crate](https://crates.io/crates/subalfred) | - |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing guide feedback

- the `subalfred´ crate is still in RC, but it can be installed by specifying the version:

    ```bash
    cargo install subalfred --version 0.9.0-rc16
    ```

- unit tests pass:

    ```bash
    % cargo test
    info: syncing channel updates for 'nightly-2022-09-19-aarch64-apple-darwin'
    info: latest update on 2022-09-19, rust version 1.66.0-nightly (a37499ae6 2022-09-18)

    (...)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/main.rs (target/debug/deps/subalfred-1382d21ddf8eeafb)

    running 2 tests
    test command::key::key_cmd_should_work ... ok
    test command::rpc::rpc_cmd_should_work ... ok

    test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.34s

        Running unittests src/lib.rs (target/debug/deps/subalfred_core-da88527ddb17fa5d)

    running 12 tests
    test cargo::test::align_version_should_work ... ok
    test ss58::test::recover_public_key_should_work ... ok
    test ss58::test::all_should_work ... ok
    test ss58::test::of_should_fail ... ok
    test ss58::test::of_should_work ... ok
    test ss58::test::recover_public_key_should_fail ... ok
    test system::test::swap_file_path_should_work ... ok
    test state::test::state_insert_should_work ... ok
    test check::features::test::check_mock_runtime_should_work ... ok
    test jsonrpc::http::test::send_jsonrpc_should_work ... ok
    test cargo::test::members_manifests_should_work ... ok
    test node::test::runtime_version_should_work ... ok

    test result: ok. 12 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.58s

        Running unittests src/lib.rs (target/debug/deps/subalfred_util-95175ac05a820221)

    running 1 test
    test execution_timer_should_work ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

        Running unittests src/lib.rs (target/debug/deps/subcryptor-78e9aa328087f8ea)

    running 4 tests
    test test::public_key_of_should_work ... ok
    test test::ss58_address_of_should_fail ... ok
    test test::public_key_of_should_fail ... ok
    test test::ss58_address_of_should_work ... ok

    test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subgrandpa-446907ed5e950240)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subhasher-1f53588afba658a9)

    running 11 tests
    test test::blake2_256_should_work ... ok
    test test::blake2_128_concat_should_work ... ok
    test test::twox128_should_work ... ok
    test test::keccak256_should_work ... ok
    test test::blake2_128_should_work ... ok
    test test::keccak512_should_work ... ok
    test test::blake2_512_should_work ... ok
    test test::sha2_256_should_work ... ok
    test test::twox256_should_work ... ok
    test test::twox64_concat_should_work ... ok
    test test::twox64_should_work ... ok

    test result: ok. 11 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/submetadatan-af87f017e2031c97)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subrpcer-0ddf1d5d1e87b2c0)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subruntimer-93fe18ff0ce5be1f)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/substorager-519981546040d2ef)

    running 1 test
    test test::storage_key_should_work ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running unittests src/lib.rs (target/debug/deps/subversioner-d0fdda82f6308d19)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests cmd-impl

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subalfred-core

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subalfred-util

    running 1 test
    test src/lib.rs - ExecutionTimer (line 23) ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.31s

    Doc-tests subcryptor

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subgrandpa

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subhasher

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests submetadatan

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subrpcer

    running 1 test
    test src/lib.rs - impl_apis (line 15) ... ignored

    test result: ok. 0 passed; 0 failed; 1 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subruntimer

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests substorager

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    Doc-tests subversioner

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```

### CLI Testruns

In the following you'll find the commands I've run, including the results.

- `check features` works:

    ```bash
    ~/repos/polkadot$ subalfred check features runtime/polkadot -lsubalfred
    checking: runtime/polkadot/Cargo.toml
    2022-11-11T09:29:50.689087Z TRACE subalfred_core::check::features: check::features::runtime-benchmarks takes 0.000113354 secs
    2022-11-11T09:29:50.689248Z TRACE subalfred_core::check::features: check::features::std takes 0.000145425 secs
    2022-11-11T09:29:50.689310Z TRACE subalfred_core::check::features: check::features::try-runtime takes 0.00005828 secs
    incomplete `runtime-benchmarks` of `primitives`
    incomplete `runtime-benchmarks` of `sp-staking`
    incomplete `runtime-benchmarks` of `xcm-executor`
    incomplete `std` of `frame-benchmarking`
    incomplete `std` of `frame-system-benchmarking`
    incomplete `std` of `pallet-election-provider-support-benchmarking`
    incomplete `std` of `pallet-nomination-pools-benchmarking`
    incomplete `std` of `pallet-offences-benchmarking`
    incomplete `std` of `pallet-session-benchmarking`
    incomplete `std` of `runtime-parachains`
    incomplete `std` of `sp-io`
    incomplete `try-runtime` of `frame-support`
    incomplete `try-runtime` of `runtime-parachains`
    ```

- `rpc` works:

    ```bash
    $ subalfred rpc https://rpc.polkadot.io --method chain_getBlockHash --params '[[0,1,2]]' | jq
    {
        "id": 0,
        "jsonrpc": "2.0",
        "result": [
            "0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3",
            "0xc0096358534ec8d21d01d34b836eed476a1c343f8724fa2153dc0725ad797a90",
            "0x409d0bfe677594d7558101d574633d5808a6fc373cbd964ef236f00941f290ee"
        ]
    }
    ```

- `key` works:

    ```bash
    $ # Calculate pub key from ss58 address
    $ subalfred key 0xb4f7f03bebc56ebe96bc52ea5ed3159d45a0ce3a8d7f082983c33ef133274747
    sub-seed 
    public-key 0xb4f7f03bebc56ebe96bc52ea5ed3159d45a0ce3a8d7f082983c33ef133274747
    Substrate 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    $
    $ # Calculate ss58 address from pub key 
    $ subalfred key 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    sub-seed 
    public-key 0xb4f7f03bebc56ebe96bc52ea5ed3159d45a0ce3a8d7f082983c33ef133274747
    Substrate 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    $
    $ # Calculate pallet address
    $ subalfred key --type pallet "py/trsry"
    sub-seed PalletId(py/trsry)
    public-key 0x6d6f646c70792f74727372790000000000000000000000000000000000000000
    Substrate 5EYCAe5ijiYfyeZ2JJCGq56LmPyNRAKzpG4QkoQkkQNB5e6Z
    $
    $ # Calculate sovereign address on relaychain ()
    $ subalfred key --type parachain 2000
    sub-seed ParaId(2000)
    public-key 0x70617261d0070000000000000000000000000000000000000000000000000000
    Substrate 5Ec4AhPUwPeyTFyuhGuBbD224mY85LKLMSqSSo33JYWCazU4
    $
    $ # Calculate sovereign address on sibling chain
    $ subalfred key --type sibling 2000
    sub-seed SiblId(2000)
    public-key 0x7369626cd0070000000000000000000000000000000000000000000000000000
    Substrate 5Eg2fntJ27qsari4FGrGhrMqKFDRnkNSR6UshkZYBGXmSuC8
    $
    $ # calculate ss58 addresses for all chains for same public key
    $ subalfred key --list-all 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    sub-seed 
    public-key 0xb4f7f03bebc56ebe96bc52ea5ed3159d45a0ce3a8d7f082983c33ef133274747
    BareEd25519 NTG3mn5om1nwD45xx8aUTR3pefA8zEVwfES4dAcw1JMjNgm
    BareSecp256k1 5MwePTSDBPzsBZEeCFKXaW43g4NvLKRKVHPgfxtfTD5rzTug
    BareSr25519 AswXnhH3BGLd6FA9tNXietCXgNa2cyTZn8AqFt21J7PAnpZ
    DICO 6MpEyNrF2Jk8k9HHFa7mMWiJ8uort9iXNgvzpoKg5m2jonV1
    ICE npQjXEEdK3EkZyJp4gUC4jqKg4gdQeHYizXNk6bsFevGx1Dos
    KICO 6G2aiPJqe1sQb5spM3EjycSsVRfZpy61BkNsD7gNcuSFXSgN
    SNOW ni2MJgjyWScn3yYvNiPtYaAJUhdUb8ZFQvKvLirhz2CDjzTtu
    Turing cU8jCBoMnvw9xNB3HoVoB4bPFwaLQTjVSBxarreqv8m5UubMC
    acala 24xsriZuVo8t2ctLJgHk7mH2M3fDXGe9GF7MNQfjAzTmhcR3
    ajuna aUtUKdw182tzTyNnVgZijvnDTU9An54EGKajDGD3AM9JHr8Ci
    (...)
    xxnetwork 6ZPZVMw3ntVb4G6D4dsp7KF9Rt6SzWyZka3G4AcH1UDiNL2o
    zeitgeist dE37RvKbC2wym613QKksdD6QEK5FncNYTBpLdZPpPrzi2jYtt
    zero 3Tz7Uc9YssP4DSYpz8c5QNzyPqfLHqTRuQsByyfwexnbeM1M
    zero-alphaville 3ZmmjbgxGAFnNVxHtfV6nHGQ3KodM25x6MRKbfKF7pP5vUpv
    $
    $ # network param
    $ subalfred key --network polkadot 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    sub-seed 
    public-key 0xb4f7f03bebc56ebe96bc52ea5ed3159d45a0ce3a8d7f082983c33ef133274747
    polkadot 156HGo9setPcU2qhFMVWLkcmtCEGySLwNqa3DaEiYSWtte4Y
    $
    $ # display prefix
    $ subalfred key --show-prefix 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    sub-seed 
    public-key 0xb4f7f03bebc56ebe96bc52ea5ed3159d45a0ce3a8d7f082983c33ef133274747
    Substrate    42 5G9z8Ttoo7892VqBHiSWCbnd2aEdH8noJLqZ4HFMzMVNhvgP
    ```


