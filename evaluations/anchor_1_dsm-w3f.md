# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Anchor.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |     
| 0a. | License | <ul><li>[x] </li></ul>| [https://github.com/ff13dfly/Anchor/blob/main/LICENSE-APACHE2](https://github.com/ff13dfly/Anchor/blob/main/LICENSE-APACHE2) [https://github.com/ff13dfly/Anchor/blob/main/LICENSE-GPL3](https://github.com/ff13dfly/Anchor/blob/main/LICENSE-GPL3) |  |
| 0b. | Documentation | <ul><li>[x] </li></ul>| [https://github.com/ff13dfly/Anchor/blob/main/README.md](https://github.com/ff13dfly/Anchor/blob/main/README.md) [https://github.com/ff13dfly/Anchor/blob/main/js/README.md](https://github.com/ff13dfly/Anchor/blob/main/js/README.md) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul>| [https://github.com/ff13dfly/Anchor/blob/main/frame/anchor/README.md](https://github.com/ff13dfly/Anchor/blob/main/frame/anchor/README.md) [https://github.com/ff13dfly/Anchor/blob/main/js/playground/README.md](https://github.com/ff13dfly/Anchor/blob/main/js/playground/README.md) |  |  |
| 0d. | Docker | <ul><li>[x] </li></ul>|[https://github.com/ff13dfly/Anchor/tree/main/docker](https://github.com/ff13dfly/Anchor/tree/main/docker)|  |
| 0e. | Anchor pallet | <ul><li>[x] </li></ul>|[https://github.com/ff13dfly/Anchor](https://github.com/ff13dfly/Anchor)| |
| 0f. | Anchor.js | <ul><li>[x] </li></ul>| [https://github.com/ff13dfly/Anchor/tree/main/js/playground](https://github.com/ff13dfly/Anchor/tree/main/js/playground)|  | |

## Evaluation V2

### License

Now have only the Apache2 license.

### Documentation

The documentation has been improved.

### Docker

Docker now works fine following the guide.

### System Test

Some automated system test was provided, and they work fine.

### Code Quality

The warnings from cargo clippy were fixed.

## Evaluation V1

### License

Please inform me which is the license of the software Apache2 or GPL3 and delete the other file.

### Documentation

The Documentation needs some improvements, in [Integration to Substrate](https://github.com/ff13dfly/Anchor#integration-to-substrate) the instruction could be more precise, for example, you need to copy the Anchor/frame/anchor to Substrate/frame. In [Issues about Rust & Substrate](https://github.com/ff13dfly/Anchor#issues-about-rust--substrate) the command `target/substrate --dev --state-pruning archive` to run the substrate need to be `target/release/substrate --dev --state-pruning archive` because the instructions to build uses `--release`. The substrate node could be provided already with anchor integrated.

### Unit Testing

All tests passed.

### Docker

I wasn't able to run the docker following the instructions. I ran `sh build.sh` to create the docker image and I got this error `build.sh: 4: pushd: not found`.

### System Test

I tested the features with node and Anchor.js, and it seems to be working fine. But the guide needs examples with input and expected outputs to be sure the tests are correct. For testing the SDK please provide complete examples which do not require programming for us to run it. The expected outputs also need to be provided. 

### Code Quality

I ran `cargo clippy` and got a logical expression error which I simplified and let to this error:

```
error: this comparison involving the minimum or maximum element for this type contains a case that is always true or always false
   --> frame/anchor/src/lib.rs:260:12
    |
260 |             ensure!(price >= 0, Error::<T>::CostValueLimited);     //1.2.check cost, >0
    |                     ^^^^^^^^^^
    |
    = help: because `0` is the minimum value for this type, this comparison is always true
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#absurd_extreme_comparisons
    = note: `-D clippy::absurd-extreme-comparisons` implied by `-D clippy::correctness`
```

Fixing this error, I got some warnings from anchor, for example:

```
warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
  --> frame/anchor/src/weights.rs:45:28
   |
45 |             .saturating_add(Weight::from_ref_time(1_000_000_000 as u64).saturating_mul(x as u64))
   |                                     ^^^^^^^^^^^^^
warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
  --> frame/anchor/src/weights.rs:49:11
   |
49 |         Weight::from_ref_time(1_000_000_000 as u64)
   |                 ^^^^^^^^^^^^^
warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
  --> frame/anchor/src/weights.rs:54:11
   |
54 |         Weight::from_ref_time(1_000_000_000 as u64)
   |                 ^^^^^^^^^^^^^
warning: use of deprecated associated function `frame_support::dispatch::Weight::from_ref_time`: Will be removed soon; use `from_parts` instead.
  --> frame/anchor/src/weights.rs:59:11
   |
59 |         Weight::from_ref_time(1_000_000_000 as u64)
   |                 ^^^^^^^^^^^^^
warning: `pallet-anchor` (lib) generated 11 warnings
    Finished release [optimized] target(s) in 21.43s
```

I ran `cargo tarpaulin`. The lib.rs from template/anchor/src has good coverage.

![image (9)](https://user-images.githubusercontent.com/112647953/225634234-7c9dc9df-3c42-46e9-b182-5c64c57ea273.png)



