# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/inkscope-fuzzer.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/inkscopexyz/inkscope-fuzzer/blob/7f93f7a37ee220106a1c69874e59f248c9cdaf25/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/inkscopexyz/inkscope-fuzzer/blob/7f93f7a37ee220106a1c69874e59f248c9cdaf25/README.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/inkscopexyz/inkscope-fuzzer/blob/7f93f7a37ee220106a1c69874e59f248c9cdaf25/README.md#%EF%B8%8F-test) | Not comprehensive. "Exhaustive testing" promised for M2. |
| 1. | Mocked Environment | <ul><li>[x] </li></ul> | [pull/3](https://github.com/inkscopexyz/inkscope-fuzzer/pull/3) | See also example in README |


## General Notes

### Example output

```sh
$ ./target/release/inkscope-fuzzer ./test-contracts/ityfuzz/target/ink/ityfuzz.contract 
Elapsed time: 3.668415547s
Property check failed ❌
  Deploy: default()
  Message0:   Deploy: incr(UInt(0))
  Message1:   Deploy: buggy()
  Message2:   Deploy: buggy()
  Message3:   Deploy: incr(UInt(0))
  Message4:   Deploy: incr(UInt(0))
  Message5:   Deploy: buggy()
  Message6:   Deploy: buggy()
  Message7:   Deploy: incr(UInt(1))
  Message8:   Deploy: incr(UInt(1))
  Message9:   Deploy: incr(UInt(2))
  Message10:   Deploy: incr(UInt(0))
  Message11:   Deploy: buggy()
  Message12:   Deploy: decr(UInt(340282366920938463463374607431768211455))
  Message13:   Deploy: buggy()
  Message14:   Deploy: buggy()
  Message15:   Deploy: buggy()
  Message16:   Deploy: buggy()
  Message17:   Deploy: buggy()
  Message18:   Deploy: buggy()
  Message19:   Deploy: incr(UInt(2))
  Message20:   Deploy: incr(UInt(0))
  Message21:   Deploy: incr(UInt(0))
  Message22:   Deploy: incr(UInt(1))
  Message23:   Deploy: buggy()
  Message24:   Deploy: buggy()
  Message25:   Deploy: buggy()
  Message26:   Deploy: buggy()
  Message27:   Deploy: buggy()
  Message28:   Deploy: incr(UInt(2))
  Message29:   Deploy: incr(UInt(0))
  Message30:   Deploy: incr(UInt(1))
  Message31:   Deploy: incr(UInt(1))
  Message32:   Deploy: incr(UInt(1))
  Message33:   Deploy: buggy()
  Property: inkscope_bug()
```

### `cargo test` output

```sh
$ cargo test
[lots of warnings]

running 6 tests
test fuzzer::tests::test_fuzz_bool ... ok
test generator::tests::test_generate_u8 ... ok
test fuzzer::tests::test_fuzz_length ... ok
test fuzzer::tests::test_fuzz_str ... ok
test engine::tests::test_hash_trace ... ok
test tests::ityfuzz::fuzz_ityfuzz ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 46.78s
```