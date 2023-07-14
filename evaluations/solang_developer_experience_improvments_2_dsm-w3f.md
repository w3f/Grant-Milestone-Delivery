# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_developer_experience_improvements.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/blob/main/LICENSE | Apache-2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://solang.readthedocs.io/en/latest/running.html#compiler-usage https://solang.readthedocs.io/en/latest/running.html#starting-a-new-project| |
| 0c. | Testing | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/blob/main/src/bin/cli/test.rs https://github.com/hyperledger/solang/blob/main/tests/cli.rs|  |
| **0d.** | Docker | <ul><li>[x] </li></ul> | There will be no independent DockerFiler for this milestone, because Solang has its own DockerFile, which can be used to test the mentioned functionalities.|
|     0e. | Article | <ul><li>[x] </li></ul> | https://forum.polkadot.network/t/introducing-solang-improvements/3361 |
|      1. | Implement [Solang projects](https://github.com/hyperledger/solang/milestone/6) | <ul><li>[x] </li></ul> | https://github.com/hyperledger/solang/pull/1316 https://github.com/hyperledger/solang/pull/1347 https://github.com/hyperledger/solang/pull/1392 |  |

## Evaluation V2

### Configuration file

The PR fixed the `verbose` flag issue in the `solang.toml` file. 

## Testing

All tests are passing during the `cargo test` execution. Testing is ok.

## Evaluation V1

## License

Apache License 2.0 ok

## Documentation

### Installation and compiler usage

I followed the installation and compiler usage documentation, I achieved the expected results installing through "Download from a Docker container" as well as "Build using Dockerfile" docs. In the usage section running Solang using a container also worked as expected. 

In the Solang README.md, maybe the compile command for docker should include the "/examples/polkadot" path as follows:

```sh
docker run --rm -it --volume $(pwd)/examples/polkadot:/sources ghcr.io/hyperledger/solang compile -v -o /sources --target polkadot /sources/flipper.sol
```

After installing the LLVM pre-built libraries, build Solang using `cargo build --release` worked as expected. Then, running `target/release/solang compile -v --target solana examples/solana/flipper.sol` also worked. For the other possible values (`[possible values: solana, polkadot, evm]`) it was ok as well.

I've also tried to install it by Downloading the binaries, after downloading the Linux x86-64 release and adding it to `$PATH`, when executing `solang-linux-x86-64` I get the following error:

```sh
chmod +x solang-linux-x86-64
solang-linux-x86-64

solang-linux-x86-64: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.30' not found (required by solang-linux-x86-64)
solang-linux-x86-64: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `GLIBCXX_3.4.29' not found (required by solang-linux-x86-64)
solang-linux-x86-64: /usr/lib/x86_64-linux-gnu/libstdc++.so.6: version `CXXABI_1.3.13' not found (required by solang-linux-x86-64)
solang-linux-x86-64: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.34' not found (required by solang-linux-x86-64)
solang-linux-x86-64: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.32' not found (required by solang-linux-x86-64)
solang-linux-x86-64: /lib/x86_64-linux-gnu/libc.so.6: version `GLIBC_2.33' not found (required by solang-linux-x86-64)
```

I've executed `sudo apt install libstdc++6 libc6 -y` but it didn't solve the issue. Since I could build Solang from source, it wasn't a big concern and just continued using the built CLI. That error using the `solang-linux-x86-64` binary may be just some local issue. The installation, compiler usage, and starting a new project with `solang.toml` configuration are ok.

### Starting a new project

Executing `target/release/solang new --target solana my_project` creates the solang project as expected, by creating a `solang.toml` configuration file correctly and `flipper.sol` contract in my_project directory. After that, running `target/release/solang compile` works and uses the `solang.toml` configuration as expected, it logs "info: reading default config from toml file" in the console. Passing `polkadot` as the target it's also creating a project and compiling it correctly. Changing `verbose = true` under `[compiler-output]` seems not to be taking any effect, it is compiling as if it was configured as false.

## Testing

- Running `cargo test` showed that one test case failed in the ethereum_solidity_tests test. All the remaining tests have passed ok, including the `cli.rs` tests. See the test result:

     ```sh
     ...
     test basic_compilation_from_toml ... ok
     test create_output_dir ... ok
     ...
     test polkadot_specific ... ok
     test polkadot_general ... ok

     test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 2.09s

     Running tests/evm.rs (target/debug/deps/evm-fcd79123e1e1cf77)

     running 5 tests
     test eth_builtins ... ok
     test selfdestruct ... ok
     test try_catch ... ok
     test address ... ok
     test ethereum_solidity_tests ... FAILED

     failures:

     ---- ethereum_solidity_tests stdout ----
     thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: Error { depth: 0, inner: Io { path: Some("/home/user/w3f/solang/testdata/solidity/test/libsolidity/semanticTests"), err: Os { code: 2, kind: NotFound, message: "No such file or directory" } } }', tests/evm.rs:193:27
     note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
     thread '<unnamed>' panicked at 'called `Result::unwrap()` on an `Err` value: Error { depth: 0, inner: Io { path: Some("/home/user/w3f/solang/testdata/solidity/test/libsolidity/syntaxTests"), err: Os { code: 2, kind: NotFound, message: "No such file or directory" } } }', tests/evm.rs:193:27


     failures:
     ethereum_solidity_tests

     test result: FAILED. 4 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

     error: test failed, to rerun pass `--test evm`
     ``` 

- Got an error running `cargo tarpaulin` to get tests coverage:

     ```sh
     ...
     Compiling secp256k1 v0.27.0
     Compiling ink_engine v4.2.1
     Compiling ink_env v4.2.1
     Compiling wasm-opt v0.112.0
     error: Broken pipe (os error 32)
     warning: build failed, waiting for other jobs to finish...
     error: could not compile `solang` (test "builtins") due to 2 previous errors
     error: could not compile `solang` (test "undefined_variable_detection") due to 2 previous errors
     error: could not compile `solang` (lib test) due to 2 previous errors
     error: could not compile `solang` (test "solana") due to 2 previous errors
     Jul 12 12:20:37.706 ERROR cargo_tarpaulin: Failed to compile tests!
     error: linking with `cc` failed: exit status: 1
     ```

## Docker

Ok, both either using ghcr.io/hyperledger/solang:latest or building Solang using Dockerfile is working as expected.

## Article

The article "Introducing Solang Improvements" describes the CLI usability improvements with the `solang.toml` ok, the CLI it's working with the configuration as expected.

## Implement Solang projects

Ok, the substrate target configuration issue solved at https://github.com/hyperledger/solang/issues/1084

## Code quality

Running `cargo clippy` showed a result without any suggestions or warnings, result ok:

```sh
...
Checking ink_storage_traits v4.2.1
Checking ink_engine v4.2.1
Checking ink_env v4.2.1
Checking tower-lsp v0.19.0
Checking wasm-opt v0.112.0
Finished dev [unoptimized + debuginfo] target(s) in 2m 41s
```
