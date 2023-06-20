# Evaluation

- **Status:** In Progress
- **Application Document:** [Application](https://github.com/Szegoo/Grants-Program/blob/42b031052c16670685c65a409d91779d0069903a/applications/Dotflow.md)
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/LICENSE) [Frontend](https://github.com/TheDotflow/dotflow-ui/blob/main/LICENSE) | Correct licenses | 
| 0b.  | Documentation | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/README.md) | Well documented and easy to follow. There are only some minor improvements that I suggest below | 
| 0c.  | Testing and Testing Guide | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/identity/tests.rs) [Guide](https://github.com/TheDotflow/dotflow-ink#build--test-locally) [Identity Key](https://github.com/TheDotflow/dotflow-ui/blob/main/__tests__/identityKey.test.ts) [Guide](https://github.com/TheDotflow/dotflow-ui#set-up-development-environment) | All unit tests are passing and there is a minor issue with `e2e-tests`. Output and additional notes below |
| 0d.  | Docker | [Contract]() [Frontend](https://github.com/TheDotflow/dotflow-ui#run-with-docker) | Was able to build the image and run it successfully. Output attached below |
| 1.  | Identity Contract | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/identity/lib.rs) | Well structured code. Contract compiles fine. I only have some non-critical code suggestions below. |
| 2.  | My Identity page | [Frontend code](https://github.com/TheDotflow/dotflow-ui/tree/main/src) [Identity Key](https://github.com/TheDotflow/dotflow-ui/pull/15) [Address Encryption](https://github.com/TheDotflow/dotflow-ui/pull/21) | Was able to build and run both Docker and native version of the frontend. Everything looks smooth, intuitive and user-friendly. |

## General Notes

In general, it's very well done. I haven't found any critical issues and was able to complete all the instructions successfully. Code coverage reports `93.37%` and all tests are passing. I only have some minor improvements I can suggest, which are listed below.

### Missing documentation for contract deployment

I see that you have deployed the contract to `Astar Shibuya` at this address `Yib3XD3rkKWstaCB6P3FYCuWu2gZ4nwLoi6x9w8e9UoLNjh`, which is great. Maybe you can also highlight this somewhere in your documentation and mention that someone can test the DotFlow UI provided that they have `Astar Shibuya` testnet funds?

I think it would also be nice to have the process of deploying the contract on the local testnet documented in your main README file. Or at least leave a link to some other resource that explains it. Especially, since we need `CONTRACT_IDENTITY` env variable for frontend. This will ease testing it since local testnet has development accounts.

### No `e2e-tests`

There is a [section](https://github.com/TheDotflow/dotflow-ink/blob/3ec6be1712b8074352277ee2f23e0d3c6faa0196/README.md#L47-L48) in documentation about running `e2e-tests` but there are [no](https://github.com/TheDotflow/dotflow-ink/blob/3ec6be1712b8074352277ee2f23e0d3c6faa0196/contracts/identity/lib.rs#L518-L519) tests defined under `e2e-tests` feature, so it simply runs the same tests as `cargo test`.

I assume, you are going to be adding end-to-end tests when you complete the second milestone, and when you have all the pieces of the project together, so this is not a critical issue.

### Code suggestions

#### Avoid `unwrap` and `assert`:

Try to avoid using `unwrap` and `assert` in the non-test environment, although it is not that critical in the contract execution environment, it still makes it easier to debug and find out more about the error when the contract execution panics. 

Opt for using `unwrap_err`, `unwrap_or_default`, `map_err`, etc. methods which softly handle the case when `unwrap` panics. You can define `Error` variants for each possible panic case and propogate it from the top level (you already have most of them covered). And in a similar fashion, use `ensure!` instead of `assert!` when validating something in the non-test environment. You are already using it in most of the places, so it just needs to be consistent.

Here are some examples of using `unwrap` and `assert` in your contract code: [1](https://github.com/TheDotflow/dotflow-ink/blob/3ec6be1712b8074352277ee2f23e0d3c6faa0196/contracts/identity/lib.rs#L203-L204), [2](https://github.com/TheDotflow/dotflow-ink/blob/3ec6be1712b8074352277ee2f23e0d3c6faa0196/contracts/identity/lib.rs#L256-L257), [3](https://github.com/TheDotflow/dotflow-ink/blob/3ec6be1712b8074352277ee2f23e0d3c6faa0196/contracts/identity/lib.rs#L328)

#### Clippy

Running `cargo clippy --no-deps --all-targets --workspace` on the project suggests some fixes, mostly related to unnecessary usage of `clone()`:

```sh
warning: using `clone` on type `u32` which implements the `Copy` trait
   --> contracts/identity/tests.rs:637:35
    |
637 |         IdentityInfo { addresses: vec![(polkadot_id.clone(), encoded_address.clone())] }
    |                                         ^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `polkadot_id`
```

### Outputs

<details>

  <summary>Docker outputs</summary>

  ```sh
 => [2/3] WORKDIR /app                                                                                                                                                               0.3s
 => [3/3] COPY . .                                                                                                                                                                  12.6s
 => exporting to image                                                                                                                                                               9.8s
 => => exporting layers                                                                                                                                                              9.8s
 => => writing image sha256:af791be5603993712f6d271193d4124e150d121b6528f1f53fa56374200810fc                                                                                         0.0s
 => => naming to docker.io/library/dotflow-ink   
  ```
</details>

<details>
  
  <summary>Docker frontend outputs</summary>
  ```sh
   => exporting to image                                                                                                                                                        4.1s
 => => exporting layers                                                                                                                                                       4.1s
 => => writing image sha256:e511287bc4938167e369582af397819c6ac8d954e615f1c3a5fca53a17625a2f                                                                                  0.0s
 => => naming to docker.io/library/dotflow-ui  
```
</details>

<details>

  <summary>Test outputs</summary>
  
```sh
running 17 tests
test tests::add_network_works ... ok
test tests::address_size_limit_works ... ok
test tests::constructor_works ... ok
test tests::add_address_to_identity_works ... ok
test tests::create_identity_works ... ok
test tests::create_identity_already_exist ... ok
test tests::init_with_networks_fail - should panic ... ok
test tests::getting_transaction_destination_works ... ok
test tests::init_with_networks_works ... ok
test tests::remove_address_works ... ok
test tests::remove_network_works ... ok
test tests::set_recovery_account_works ... ok
test tests::transfer_ownership_fails_when_new_owner_has_an_identity ... ok
test tests::remove_identity_works ... ok
test tests::update_network_works ... ok
test tests::transfer_ownership_works ... ok
test tests::update_address_works ... ok

test result: ok. 17 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

   Doc-tests identity

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```
</details>

<details>

  <summary>Code coverage</summary>

  ```sh
|| Uncovered Lines:
|| lib.rs: 175-176, 223-225, 384, 411, 415, 422, 425, 444, 488-489
|| Tested/Total Lines:
|| lib.rs: 162/175
|| types.rs: 21/21
|| 
93.37% coverage, 183/196 lines covered
```
</details>
