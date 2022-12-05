# Evaluation

- **Status:** Accepted
- **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/RubeusKeeper.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/bsn-si/rubeus-smartcontract/blob/main/LICENSE) | Ok |
| 0b. | Documentation | [Readme.md](https://github.com/bsn-si/rubeus-smartcontract/blob/main/README.md) | Looks good. |
| 0c. | Testing Guide | [Readme.md](https://github.com/bsn-si/rubeus-smartcontract/blob/main/README.md#how-to) | All steps work after requested changes. All tests pass. E2E automated test also passes now. See notes below. |
| 1.  | Ink! smart-contract | [See contract](https://github.com/bsn-si/rubeus-smartcontract/blob/main/lib.rs) | Successfully deployed `rubeus` contract to manually call functions. See notes below.| 
| 2.  | Testing page | [Test page URL](https://bsn-si.github.io/rubeus/) | Manual testing works on the front-end test page. |

# General Notes

Great overall delivery, I love this POC and think this is a great use case! There are a few outstanding issues, please see notes below.

## Documentation & Testing Guide

I was able to get all the way through the testing guide and manually test all contract functions.

1. Most of the contract functions are missing documentation:

![image](https://user-images.githubusercontent.com/35080151/205650614-f557c647-bc95-4cc1-9704-19f6c5023df5.png)

**UPDATE:** FIXED. Inline comments look a lot better now.

2. Much of the code is also missing documentation. For example it's hard to tell what the E2E tests are doing since most of the functions don't have any inline comments.

**UPDATE:** FIXED. Added comments to E2E test.

3. Videos now show full process of deploying the contract and using the front-end. Thank you, these were very helpful!

4. The contract only contains one unit test check_crud_credential that includes all functions. Typically the conventional method is to create a separate unit test for each function/method so the entire test doesn't crash.

**UPDATE:** FIXED. Tests now include `create_credential`, `transfer_ownership`, `delete_credential`, `update_credential`, `list_of_credentials`. All tests pass.

## Smart Contract

`addCredential`, `deleteCredential`, `transferOwnership`, `updateCredential`, functions all work manually and with automated E2E test.

`getCredentials`, `getCredentialsByGroup` queries work successfully.

1. After instantiating the contract, this error appears on the `substrate-contracts-node` itself:

```rust
2022-12-05 12:28:00.188 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: panicked at 'dispatching ink! constructor failed: could not read input', /Users/keeganquigley/rubeus-smartcontract/lib.rs:11:5
```
This happens both when using `new(owner: AccountId)` using Alice as the account, as well as the `default()` constructor.

The contract still instantiates successfully so I could get through the evaluation, but please take a look to see what is causing this `constructor` to fail.

2. In the testing guide, I would suggest mentioning that `substrate-contracts-node` needs to be running before changing into `example` directory and running the tests, just to make it clear that otherwise it will fail to connect to the node.

**Please note:** No security audits have been conducted as part of this evaluation.
