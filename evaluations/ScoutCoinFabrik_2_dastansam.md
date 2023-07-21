# Evaluation

- **Status:** Accepted
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/pull/1666)
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/ScoutCoinFabrik_1_keeganquigley.md)

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| 0a. | License | https://github.com/CoinFabrik/scout/blob/web3-v2/LICENSE | Correct license |
| 0b. | Documentation | https://coinfabrik.github.io/scout/docs/intro | Extensive documentation |
| 0c. | Testing | https://github.com/CoinFabrik/scout/tree/web3-v2/apps/cargo-scout-audit/tests | Test cases are passing, but only after I fixed a small typo. Details below. |
| 0d. | Docker | - | Does not apply at this stage.  |
| 0e. | Article | https://blog.coinfabrik.com/bigger-better-and-faster-vulnerability-detection-in-ink | Article is posted, explains well what the project does and why there is a need for it. |
| 1.a | Research and Development | https://coinfabrik.github.io/scout/docs/vulnerabilities | More vulnerability examples are provided, as per the application milestone delivery checklist. |
| 1.b | Research and Development | https://github.com/CoinFabrik/scout/tree/web3-v2/test-cases | `integer-overflow-underflow` and `unused-return-enum` example vulnerabilities are added to the test cases and documentation. |
| 2.a | Development | https://github.com/CoinFabrik/scout/tree/web3-v2 | More detectors are added, tool is improved from the previous milestone. |
| 2.b | Development | https://github.com/CoinFabrik/scout/tree/web3-v2/apps/cargo-scout-audit | CLI tool is deployed and works as expected. Integration tests are run using this CLI tool. Logs attached below. |
| 2.c | Development | https://marketplace.visualstudio.com/items?itemName=CoinFabrik.scout-audit | VSCode extension is deployed and can be installed. However, using it wasn't possible for me, maybe due to the `rust-analyzer` issue described below? |
| 3 | Evaluation | https://github.com/CoinFabrik/scout/blob/web3-v2/assets/false-positives-report.md | Prototype validation was performed and evaluation report is provided. |


## General Notes

In general, I think the project is well documented and the code is well written. I tried to run the integration tests, but I had to fix a small typo in the code for it to pass. I think the tool is already very helpful, but there are a few things that can be improved.

### `rust-analyzer` error

As far as I understand, `rust-analyzer` is an integral part of `scout-audit`, however, when I open the `scout` repository, `rust-analyzer` extension fails to load with this log:

```log
rust-analyzer failed to load workspace: Failed to read Cargo metadata from Cargo.toml file ~/scout/detectors/Cargo.toml, cargo 1.67.0 (8ecd4f20a 2023-01-10): Failed to run `"cargo" "metadata" "--format-version" "1" "--manifest-path" "~/scout/detectors/Cargo.toml" "--filter-platform" "aarch64-apple-darwin"`: `cargo metadata` exited with an error: error: manifest path `~/scout/detectors/Cargo.toml` does not exist
```

I wanted to see how the extension behaves when opening vulnerable code examples in `test-cases`, but it wasn't possible. I think this might be the reason why.

### Typos in integration tests

In the `integration_test.rs` file, there are two typos that prevent the tests from passing. First one is in [line 32](https://github.com/CoinFabrik/scout/blob/3dcde6d88ddbb551e4a11c64842c0beae09a968a/apps/cargo-scout-audit/tests/integration_test.rs#L32-L33), second one is in [line 124](https://github.com/CoinFabrik/scout/blob/3dcde6d88ddbb551e4a11c64842c0beae09a968a/apps/cargo-scout-audit/tests/integration_test.rs#L124). In both of them, `scout` should be renamed to `scout-audit`, since this is the name of the CLI tool.

### `unused-return-enum`

In the documentation of the [`unused-return-enum`](https://coinfabrik.github.io/scout/docs/detectors/unused-return-enum) vulnerability, the following pieces of code are provided as `example` and `remediated` vulnerable code, respectively:

```rust
// --- snip ---
// vulnerable code
let sum = value1 + value2;
let percentage_difference = match 100u128.checked_mul(absolute_difference / sum) {
    Some(result) => result,
    None => Err(TradingPairErrors::Overflow),
}
// --- snip ---
// remediation
let sum = value1 + value2;
let percentage_difference = match 100u128.checked_mul(absolute_difference / sum) {
    Some(result) => Ok(result),
    None => panic!("overflow!"),
};

return Err(TradingPairErrors::Overflow);
// --- snip ---
```
I think this directly contradicts to [`panic-error`](https://coinfabrik.github.io/scout/docs/detectors/panic-error) and [`arithmetic-overflow-underflow`](https://coinfabrik.github.io/scout/docs/detectors/integer-overflow-or-underflow) vulnerabilities, since usage of `panic!` and unsafe arithmetic operations should be discouraged in any production environment. I think the remediation should be something like this:

```rust
// --- snip ---
let sum = value1.checked_add(value2).ok_or(TradingPairErrors::Overflow)?;
let coeff = absolute_difference.checked_div(sum).ok_or(TradingPairErrors::DivisionByZero)?;
let percentage_difference = 100_u128.checked_mul().ok_or(TradingPairErrors::Overflow)?;

Ok(percentage_difference)
```

## Logs

<details>

<summary>Run on custom pseudo code</summary>

```rust
let test = 2 + 2;
let stuff = {
    if test == 3 {
        Some(1)
    } else {
        None
    }
};

let unsafe_unwrap = stuff.unwrap();
let unsafe_expect = stuff.expect("stuff is none");

self.env().terminate_contract(self.env().caller());
```

Result:

```log 
warning: Unsafe usage of `expect`
  --> lib.rs:33:33
   |
33 |             let unsafe_expect = stuff.expect("stuff is none");
   |                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: Please, use a custom error instead of `expect`
   = note: `#[warn(unsafe_expect)]` on by default

warning: Unsafe usage of `unwrap`
  --> lib.rs:32:33
   |
32 |             let unsafe_unwrap = stuff.unwrap();
   |                                 ^^^^^^^^^^^^^^
   |
   = help: Please, use a custom error instead of `unwrap`
   = note: `#[warn(unsafe_unwrap)]` on by default

warning: Potential for integer arithmetic overflow/underflow in operation '+'. Consider checked, wrapping or saturating arithmetic.
  --> lib.rs:23:24
   |
23 |             let test = 2 + 2;
   |                        ^^^^^
   |
   = note: `#[warn(integer_overflow_underflow)]` on by default
```
</details>


<details>

<summary>Integration tests</summary>

This is also a bit slow, is there any specific reason for that?

```log
Running detector: dos-unbounded-operation
Running example: ../../test-cases/dos-unbounded-operation/dos-unbounded-operation-1/vulnerable-example/Cargo.toml - Elapsed time: 40.562 secs.
Running example: ../../test-cases/dos-unbounded-operation/dos-unbounded-operation-1/remediated-example/Cargo.tomltest test has been running for over 60 seconds
 - Elapsed time: 39.727 secs.

Running detector: unsafe-expect
Running example: ../../test-cases/unsafe-expect/unsafe-expect-1/vulnerable-example/Cargo.toml - Elapsed time: 38.375 secs.
Running example: ../../test-cases/unsafe-expect/unsafe-expect-1/remediated-example/Cargo.toml - Elapsed time: 38.742 secs.

Running detector: panic-error
Running example: ../../test-cases/panic-error/panic-error-1/vulnerable-example/Cargo.toml - Elapsed time: 38.372 secs.
Running example: ../../test-cases/panic-error/panic-error-1/remediated-example/Cargo.toml - Elapsed time: 38.342 secs.

Running detector: integer-overflow-or-underflow
Running example: ../../test-cases/integer-overflow-or-underflow/integer-overflow-or-underflow-1/vulnerable-example/Cargo.toml - Elapsed time: 38.514 secs.
Running example: ../../test-cases/integer-overflow-or-underflow/integer-overflow-or-underflow-1/remediated-example/Cargo.toml - Elapsed time: 39.103 secs.

Running detector: dos-unexpected-revert-with-vector
Running example: ../../test-cases/dos-unexpected-revert-with-vector/dos-unexpected-revert-with-vector-1/vulnerable-example/Cargo.toml - Elapsed time: 39.92 secs.
Running example: ../../test-cases/dos-unexpected-revert-with-vector/dos-unexpected-revert-with-vector-1/remediated-example/Cargo.toml - Elapsed time: 39.965 secs.

Running detector: divide-before-multiply
Running example: ../../test-cases/divide-before-multiply/divide-before-multiply-1/vulnerable-example/Cargo.toml - Elapsed time: 38.366 secs.
Running example: ../../test-cases/divide-before-multiply/divide-before-multiply-1/remediated-example/Cargo.toml - Elapsed time: 39.306 secs.

Running detector: zero-or-test-address
Running example: ../../test-cases/zero-or-test-address/zero-or-test-address-1/vulnerable-example/Cargo.toml - Elapsed time: 39.709 secs.
Running example: ../../test-cases/zero-or-test-address/zero-or-test-address-1/remediated-example/Cargo.toml - Elapsed time: 38.618 secs.

Running detector: reentrancy
Running example: ../../test-cases/reentrancy/reentrancy-1/vulnerable-example/vault/Cargo.toml - Elapsed time: 38.8 secs.
Running example: ../../test-cases/reentrancy/reentrancy-1/remediated-example/vault/Cargo.toml - Elapsed time: 38.883 secs.
Running example: ../../test-cases/reentrancy/reentrancy-2/vulnerable-example/vault/Cargo.toml - Elapsed time: 40.892 secs.
Running example: ../../test-cases/reentrancy/reentrancy-2/remediated-example/vault/Cargo.toml - Elapsed time: 4.492 secs.

Running detector: unsafe-unwrap
Running example: ../../test-cases/unsafe-unwrap/unsafe-unwrap-1/vulnerable-example/Cargo.toml - Elapsed time: 38.258 secs.
Running example: ../../test-cases/unsafe-unwrap/unsafe-unwrap-1/remediated-example/Cargo.toml - Elapsed time: 40.645 secs.

Running detector: set-contract-storage
Running example: ../../test-cases/set-contract-storage/set-contract-storage-1/vulnerable-example/Cargo.toml - Elapsed time: 41.287 secs.
Running example: ../../test-cases/set-contract-storage/set-contract-storage-1/remediated-example/Cargo.toml - Elapsed time: 39.901 secs.

Running detector: delegate-call
Running example: ../../test-cases/delegate-call/delegate-call-1/vulnerable-example/Cargo.toml - Elapsed time: 38.415 secs.
Running example: ../../test-cases/delegate-call/delegate-call-1/remediated-example/Cargo.toml - Elapsed time: 39.308 secs.

Running detector: unused-return-enum
Running example: ../../test-cases/unused-return-enum/unused-return-enum-1/vulnerable-example/Cargo.toml - Elapsed time: 40.63 secs.
Running example: ../../test-cases/unused-return-enum/unused-return-enum-1/remediated-example/Cargo.toml - Elapsed time: 40.311 secs.
Running example: ../../test-cases/unused-return-enum/unused-return-enum-2/vulnerable-example/Cargo.toml - Elapsed time: 43.796 secs.
Running example: ../../test-cases/unused-return-enum/unused-return-enum-2/remediated-example/Cargo.toml - Elapsed time: 37.999 secs.
test test ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 1071.30s
```

</details>
