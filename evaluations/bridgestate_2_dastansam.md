# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/DIA_Bridge_Attestation_Oracle.md
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** Milestone 1

**Deliverables**

| Number | Deliverable | Link | Notes
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/LICENSE) | Correct license |
| **0b.** | Documentation | [Link](https://github.com/diadata-org/bridgestate-ocw#readme) | Documentation is provided, it is missing instructions on running tests |
| **0c.** | Testing and Testing Guide | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/tests.rs) | Tests do not pass. |
| **0d.** | Docker | [Link](https://github.com/diadata-org/bridgestate-ocw#using-docker) | Docker build is failing. |
| 1. | Bridge Integration: Multichain | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/multichain.rs) | Lack of clear testing intstructions. |
| 2. | Bridge Integration: Interlay | [Link](https://github.com/diadata-org/bridgestate-ocw/blob/main/src/interlay.rs) | Lack of clear testing intstructions. |

## General Notes

In general, the code needs another round of refactoring and cleaning. It is not very readable due to many formatting issues, inconsistencies and also lack of in-code documentation.

The code assumes that this pallet is inside `substrate` repository, which is not documented or mentioned anywhere. It also assumes that this pallet is integrated into specific fork of [`substrate`](https://github.com/nnn-gif/substrate-node.git) but it is not part of the deliverables.

### Pallet organization

Since pallet is in its own repository, it makes it hard to run any `cargo` command on it. Unit tests, clippy and rustfmt are failing, for example. Dependencies are also pointing to local paths that do not exist. I assume you did it this way so that anyone can integrate the pallet to their `substrate` runtime, however it seems like this pallet assumes that its inside a `substrate` repository, which contradicts the idea of having it in its own repository.

I suggest to either fork `substrate-node-template` and add this pallet to it (this is usually a standard practice), or update your dependencies to point to remote repositories (`https://github.com/nnn-gif/substrate-node.git`, for example).

### Unit tests

- Unit tests are failing.
- Some unit tests are not testing anything, they don't have any `assert` statements (`test_total_user_vault_collateral`, `test_fetch_data`, etc.)

For example, 

```rust
#[test]
fn test_fetch_data() {
	let hex = "70ce0360818118000000000000000000";

	let big_endian_value: u128 = u128::from_str_radix(hex, 16).unwrap();

	// Convert the value to little endian
	// let little_endian_value = big_endian_value.to_le();
	let little_endian_value = big_endian_value.swap_bytes();

	println!("The little endian u128 value is: {}", little_endian_value);
}
```

This test's name and content does not match.

### Code suggestions

I would suggest introducing some code formatter and linter to your workflow. It will help you to keep your code consistent and readable. I would suggest using `rustfmt` and `clippy`.

Some other suggestions:

- With a few exceptions, the `get_`` prefix is not used for getters in Rust code.
- `unwrap` is used a lot, which is not recommended. It is better to explicitly handle errors.
- Documentation is lacking, it was also mentioned in the previous milestone's evaluation and it was not addressed.
- Commented out code needs to be removed.

## Logs

<details>

<summary>Unit tests</summary>

```bash
Caused by:
  failed to load source for dependency `frame-support`

Caused by:
  Unable to update /support

Caused by:
  failed to read `/support/Cargo.toml`

Caused by:
  No such file or directory (os error 2)
```

</details>

<details>

<summary>Docker build</summary>

```bash
sh: ./docker/build.sh: No such file or directory
```

</details>
