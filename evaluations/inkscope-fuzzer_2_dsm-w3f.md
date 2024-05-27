# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/inkscope-fuzzer.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| *0a.* | License | <ul><li>[x] </li></ul>| https://github.com/inkscopexyz/inkscope-fuzzer/blob/v0.0.1/LICENSE | |
| *0b.* | Documentation | <ul><li>[x] </li></ul>| https://github.com/inkscopexyz/inkscope-fuzzer/blob/v0.0.1/README.md / https://inkscopexyz.github.io/inkscope-fuzzer/ |  |
| *0c.* | Testing and Testing Guide | <ul><li>[x] </li></ul>| https://github.com/inkscopexyz/inkscope-fuzzer/tree/v0.0.1/src/tests / https://github.com/inkscopexyz/inkscope-fuzzer/blob/v0.0.1/README.md#%EF%B8%8F-testing | |
| *0d.* | Docker | <ul><li>[x] </li></ul>| https://github.com/inkscopexyz/inkscope-fuzzer/tree/v0.0.1/.docker / https://github.com/inkscopexyz/inkscope-fuzzer/blob/v0.0.1/book/src/installation.md#using-inkscope-fuzzer-with-docker |  |
| *0e.* | Article | <ul><li>[x] </li></ul>| https://blog.inkscope.xyz/inkscope-ink-fuzzer | |
| 1. | Mutation Engine | <ul><li>[x] </li></ul>| https://github.com/inkscopexyz/inkscope-fuzzer/tree/v0.0.1 |  |
| 2. | Fuzzer | <ul><li>[x] </li></ul>| https://github.com/inkscopexyz/inkscope-fuzzer/tree/v0.0.1 |  |

## Evaluation V3

### Documentation

The instructions on [inkscopexyz.github.io](https://inkscopexyz.github.io/inkscope-fuzzer/overview.html) need to be updated to reflect the command changes.

### Output File

Now the output file can generate more readable text when fuzzing a contract. Here are two examples and the example on the [readme](https://github.com/inkscopexyz/inkscope-fuzzer/blob/9d4a388d5c021251556fa7344cf4e6e948c3c0ac/README.md)

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/zero-or-test-address/vulnerable-example$ inkscope-fuzzer ./target/ink/zerocheck.contract execute ./results/my_failed_traces.json
Executing contract: "./target/ink/zerocheck.contract"
Using input: "./results/my_failed_traces.json"
Executing failed trace 0
  Message0: new()
  Message1: modify_admin(Literal("5C4hrfjw9DjXZTzV3MwzrrAr9P1MJhSrvWGWqi1eSuyUpnhM"))
  Property: inkscope_zero_check()



user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/constructor-panics$  inkscope-fuzzer ./target/ink/constructor_panics.contract execute ./results/my_failed_traces.json
Executing contract: "./target/ink/constructor_panics.contract"
Using input: "./results/my_failed_traces.json"
Executing failed trace 0
  Message0: default()
Last message in trace has Trapped

Executing failed trace 1
  Message0: new(Bool(false))
Last message in trace has Trapped


user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/ityfuzz$ inkscope-fuzzer  ./target/ink/ityfuzz.contract execute ./results/my_failed_traces.json 
Executing contract: "./target/ink/ityfuzz.contract"
Using input: "./results/my_failed_traces.json"
Executing failed trace 0
  Message0: default()
  Message1: incr(UInt(0))
  Message2: incr(UInt(0))
  Message3: decr(UInt(340282366920938463463374607431768211455))
  Message4: incr(UInt(1))
  Message5: incr(UInt(2))
  Message6: incr(UInt(1))
  Message7: incr(UInt(2))
  Message8: incr(UInt(0))
  Message9: incr(UInt(0))
  Message10: incr(UInt(1))
  Message11: incr(UInt(0))
  Message12: incr(UInt(1))
  Message13: incr(UInt(1))
  Message14: incr(UInt(2))
  Message15: incr(UInt(0))
  Message16: incr(UInt(1))
  Message17: incr(UInt(1))
  Message18: buggy()
  Property: inkscope_bug()
```

### Manual Test

This time, I could fuzz the `assert-violation` and `iterators-over-indexing` contracts. However, they don't find a property because the contracts don't have any.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/iterators-over-indexing/vulnerable-example$ inkscope-fuzzer ./target/ink/iterators_over_indexing.contract  fuzz --config ./../../../../example-config.yaml
Starting campaign...
Seed: 0
Properties found: 0
Max iterations: 1000
Fail fast: false
❗️....................................................................................................
Campaign status: Optimizing
Campaign finished
Elapsed time: 29.633505404s
```

## Evaluation V2

### Output file

I was able to generate the output fine. However, I didn't fully understand the file. I think it could be more human-readable or have a tutorial teaching how to debug and reproduce the error using the output file. The output generated was similar to the [example](https://github.com/inkscopexyz/inkscope-fuzzer/tree/da5f097e151e64cdc4b00ce652016225b1241389?tab=readme-ov-file#-how-to-run-the-fuzzer) on the readme.

### Manual Test

The changes fixed the building problem. However, I'm having trouble running the inkscope-fuzzer on the coinfabrik contracts from the `assert-violation` and `iterators-over-indexing` cases. In both examples, I received the error below.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/assert-violation/remediated-example$ inkscope-fuzzer target/ink/assert_violation.contract
Starting campaign...
Seed: 0
Properties found: 0
Max iterations: 1000
Fail fast: false
thread 'main' panicked at src/engine.rs:1025:66:
called `Option::unwrap()` on a `None` value
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

## Evaluation V1

### Automated Tests

All tests passed successfully.

<details>
<summary>Test Results</summary>

```
user@localhost:~/Documents/w3f/inkscope-fuzzer$ 	docker run inkscope-fuzzer-testing
   Compiling inkscope-fuzzer v0.1.0 (/inkscope-fuzzer)
	Finished test [unoptimized + debuginfo] target(s) in 11.91s
 	Running unittests src/main.rs (target/debug/deps/inkscope_fuzzer-cdafa1370f37b574)

running 27 tests
test engine::tests::test_method_info ... ok
test fuzzer::tests::test_fuzz_bool ... ok
test fuzzer::tests::test_fuzz_length ... ok
test fuzzer::tests::test_with_seed ... ok
test fuzzer::tests::test_fuzz_str ... ok
test engine::tests::test_hash_trace ... ok
test fuzzer::tests::test_with_constants ... ok
test generator::tests::test_compact ... ok
test generator::tests::test_array_of_u32 ... ok
test generator::tests::test_enum ... ok
test generator::tests::test_generate_u8 ... ok
test generator::tests::test_tuple ... ok
test generator::tests::test_vector_of_u32 ... ok
test config::tests::test_config ... ok
test tests::testing::fuzz_constructor_panics ... ok
test tests::testing::fuzz_message_panics ... ok
test tests::testing::fuzz_integer_overflow_or_underflow_1_vulnerable ... ok
test tests::testing::fuzz_integer_overflow_or_underflow_2_vulnerable ... ok
test tests::testing::fuzz_iterators_over_indexing_vulnerable ... ok
test tests::testing::fuzz_assert_violation_vulnerable ... ok
test tests::testing::fuzz_zero_or_test_address_vulnerable ... ok
test tests::testing::fuzz_zero_or_test_address_remediated ... ok
test tests::testing::fuzz_assert_violation_remediated ... ok
test tests::testing::fuzz_integer_overflow_or_underflow_1_remediated has been running for over 60 seconds
test tests::testing::fuzz_integer_overflow_or_underflow_2_remediated has been running for over 60 seconds
test tests::testing::fuzz_iterators_over_indexing_remediated has been running for over 60 seconds
test tests::testing::fuzz_ityfuzz has been running for over 60 seconds
test tests::testing::fuzz_iterators_over_indexing_remediated ... ok
test tests::testing::fuzz_integer_overflow_or_underflow_2_remediated ... ok
test tests::testing::fuzz_ityfuzz ... ok
test tests::testing::fuzz_integer_overflow_or_underflow_1_remediated ... ok

test result: ok. 27 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 97.38s
```

</details>

### Manual Test

I updated the cargo contract to the last version to be able to use the ink 5.0 to build the contracts.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts$ cargo contract --version
cargo-contract-contract 4.1.1-unknown-x86_64-unknown-linux-gnu
```

When I tried to build, I received this warning indicating to change the version on the `Cargo.toml`.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/ityfuzz$ cargo contract build --features fuzz-testing
warning: This version of cargo-contract is not compatible with the contract's ink! version. Please use cargo-contract in version '4.0.0-rc.2' or change the ink! version of your contract to '>=5.0.0-rc.2', '^5.0.0'
 [==] Checking clippy linting rules
	Finished dev [unoptimized + debuginfo] target(s) in 0.08s
 [==] Building cargo project
	Finished release [optimized] target(s) in 0.05s

The contract was built in DEBUG mode.

Your contract artifacts are ready. You can find them in:
/home/user/Documents/w3f/inkscope-fuzzer/test-contracts/ityfuzz/target/ink

  - ityfuzz.contract (code + metadata)
  - ityfuzz.wasm (the contract's code)
  - ityfuzz.json (the contract's metadata)
```

I tried to run without changing the version and got this error:

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/ityfuzz$ docker run -v ".:/contract" inkscope-fuzzer target/ink/ityfuzz.contract
Error: Failed to parse metadata from the contract file:
Error("invalid type: string \"4\", expected u64", line: 0, column: 0)
```

I changed the version, and after that, I could successfully build the contract and run it without error.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/ityfuzz$ inkscope-fuzzer target/ink/ityfuzz.contract
Starting campaign...
Seed: 0
Properties found: 4
Max iterations: 1000
Fail fast: false
..❌..................................................................................................
Campaign status: Optimizing
Property buggy passed ✅
Property incr passed ✅
Property decr passed ✅
Property inkscope_bug failed ❌
  Message0: default()
  Message1: incr(UInt(0))
  Message2: incr(UInt(0))
  Message3: incr(UInt(0))
  Message4: incr(UInt(0))
  Message5: incr(UInt(2))
  Message6: incr(UInt(2))
  Message7: incr(UInt(0))
  Message8: incr(UInt(0))
  Message9: decr(UInt(340282366920938463463374607431768211455))
  Message10: incr(UInt(1))
  Message11: incr(UInt(1))
  Message12: incr(UInt(2))
  Message13: incr(UInt(2))
  Message14: incr(UInt(1))
  Message15: incr(UInt(2))
  Message16: incr(UInt(1))
  Message17: incr(UInt(2))
  Message18: buggy()
  Property: inkscope_bug()
Campaign finished
Elapsed time: 36.910255522s

The command bellow show the information via Interface on the terminal.
```

I was able to see the interface on the terminal using the parameter `-t`

![image](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/c8b3f2d9-52c8-40d6-958c-f5947c328b96)

![image](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/eb9a880b-476b-4264-8530-19756677936a)


I tried to run the other examples from Coinfabrik. For these examples, I changed the version too.

For `assert-violation`, I received the error below on both examples.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/assert-violation/remediated-example$ inkscope-fuzzer target/ink/assert_violation.contract
Starting campaign...
Seed: 0
Properties found: 0
Max iterations: 1000
Fail fast: false
thread 'main' panicked at src/engine.rs:1025:66:
called `Option::unwrap()` on a `None` value
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

For `integer-overflow-or-underflow-1`, I received the error below when building the vulnerable example.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/integer-overflow-or-underflow-1/vulnerable-example$ cargo contract build --features fuzz-testing
 [==] Checking clippy linting rules
	Checking integer-overflow-or-underflow v0.1.0 (/home/user/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/integer-overflow-or-underflow-1/vulnerable-example)
error: arithmetic operation that can potentially result in unexpected side-effects
  --> lib.rs:22:13
   |
22 |         	self.value += value;
   |         	^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#arithmetic_side_effects
   = note: requested on the command line with `-D clippy::arithmetic-side-effects`

error: arithmetic operation that can potentially result in unexpected side-effects
  --> lib.rs:28:13
   |
28 |         	self.value -= value;
   |         	^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#arithmetic_side_effects

error: could not compile `integer-overflow-or-underflow` (lib) due to 2 previous errors
ERROR:
```

For `integer-overflow-or-underflow-2`, I received the error below when building the vulnerable example.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/integer-overflow-or-underflow-2/vulnerable-example$ cargo contract build --features fuzz-testing
 [==] Checking clippy linting rules
	Checking integer-overflow-or-underflow v0.1.0 (/home/user/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/integer-overflow-or-underflow-2/vulnerable-example)
error: arithmetic operation that can potentially result in unexpected side-effects
  --> lib.rs:23:13
   |
23 |         	self.value *= value;
   |         	^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#arithmetic_side_effects
   = note: requested on the command line with `-D clippy::arithmetic-side-effects`

error: could not compile `integer-overflow-or-underflow` (lib) due to 1 previous error
ERROR:
```

For `iterators-over-indexing`, I received the error below on both examples.

```
user@localhost:~/Documents/w3f/inkscope-fuzzer/test-contracts/coinfabrik-test-contracts/iterators-over-indexing/remediated-example$ inkscope-fuzzer target/ink/iterators_over_indexing.contract
Starting campaign...
Seed: 0
Properties found: 0
Max iterations: 1000
Fail fast: false
thread 'main' panicked at src/engine.rs:1025:66:
called `Option::unwrap()` on a `None` value
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

```

All Other examples seem to be working fine. However, I have one Question, shouldn't this program create a file with the results? I read the deliverable 2 (Fuzzer) and I understood that but I couldn't find any generated file.
