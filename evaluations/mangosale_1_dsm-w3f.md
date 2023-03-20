# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoSale_Protocol.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                  | <ul><li>[x] </li></ul>|             [License](https://github.com/Mangoboxlabs/MangoSale/blob/main/LICENSE)              | Apache 2.0                                                        |
| 0b.    | Documentation            | <ul><li>[x] </li></ul>|     [Documentation](https://github.com/Mangoboxlabs/MangoSale/blob/main/contract/README.md)     |                                                    |
| 0c.    | Testing Guide            | <ul><li>[x] </li></ul>| [Testing Guide](https://github.com/Mangoboxlabs/MangoSale/blob/main/contract/README.md#testing) |  |
| 0d.    | Docker         | <ul><li>[x] </li></ul>|              [Docker](https://github.com/Mangoboxlabs/MangoSale/tree/main/docker)               |                                                     |
| 0e.    | Article         | <ul><li>[x] </li></ul>|              [Article](https://medium.com/@mangoboxlabs/encryption-project-based-on-polkadot-ecology-mangosale-503fcb5d7913)               | |
| 1.     | Ink! Contract 1           | <ul><li>[x] </li></ul>|   [mango_airdrop](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract/mango_airdrop)   |  |
| 2.     | Ink! Contract 2           | <ul><li>[x] </li></ul>|      [mango_lock](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract/mango_lock)      |  |
| 3.     | Ink! Contract 3           | <ul><li>[x] </li></ul>|   [token_factory](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract/token_factory)   |  |
| 4.     | Front-end UI	         | <ul><li>[x] </li></ul>|          [Front-end UI](https://github.com/Mangoboxlabs/MangoSale/tree/main/frontend)           |                      |
| 5.     | Front-end integration (e2e) test	         | <ul><li>[x] </li></ul>|      [e2e](https://github.com/Mangoboxlabs/MangoSale/tree/main/frontend#cypress-e2e-test)       |                       |

## Evaluation V4

The remainder improvements and fixes in the documentation were performed.

## Evaluation V3

### Documentation

The documentation can be improved. 

In the [building](https://github.com/Mangoboxlabs/MangoSale/tree/main/contract#building) part, you can have a troubleshooting part to indicate the use of `--optimization-passes=0` parameter when building to fix the error CodeRejected from deploying the contracts. 

In the [Frontend instructions to set up the Local Node Test](https://github.com/Mangoboxlabs/MangoSale/tree/main/frontend#way-2-local-node-test) needs to explain to copy the abi of the compiled contracts to frontend/src/abi since they are not updated in the frontend repository.

In the [application document](https://github.com/w3f/Grants-Program/blob/master/applications/MangoSale_Protocol.md), there are some prototype images missing. Please restore them since they are under your github account and are part of the software specification. 

### Test

All tests from e2e passed, but sometimes the CreatToken fails with this error:

![image (10)](https://user-images.githubusercontent.com/112647953/225697207-ba522564-0def-45bd-b6ea-e3dc78e9c43e.png)



### Code Quality

The warnings from Eslint have been fixed and the test coverage in ERC20 was improved but wasn't improved in the other tests.

from ERC20
```
running 7 tests
test erc20::tests::allowance_must_not_change_on_failed_transfer ... ok
test erc20::tests::balance_of_works ... ok
test erc20::tests::new_works ... ok
test erc20::tests::invalid_transfer_should_fail ... ok
test erc20::tests::total_supply_works ... ok
test erc20::tests::transfer_works ... ok
test erc20::tests::transfer_from_works ... ok

test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

Mar 16 10:38:45.202  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| lib.rs: 156, 158-162, 167, 175-179, 184-185, 290, 293-296, 299-302, 308, 346-354, 356, 367-372, 374-379, 385-389, 391-392, 394-395
|| Tested/Total Lines:
|| lib.rs: 78/133 +0.00%
|| 
58.65% coverage, 78/133 lines covered, +0.00% change in coverage
```
These tests still have low coverage, but it is something that isn't mandatory to be improved.

## Evaluation V2

### Contract Testing

The erc20 contract has been fixed.

### Contract Deploy

When I use `cargo +nightly contract build` I got the same error, and in the terminal running the node this line:

```
2023-03-08 10:35:44.975 DEBUG tokio-runtime-worker runtime::contracts: CodeRejected: Can't decode wasm code    
```

If I use ` cargo +nightly contract build --optimization-passes=0` The compilation succeeds and the deployment works fine. If this is a good solution for this problem, please improve the documentation to inform that.

### Frontend

I tried to create a token using the web application and local node and got this error:

![pasted image 0 (1)](https://user-images.githubusercontent.com/112647953/224018897-e2d81974-c9c8-49b8-a57e-a65b79edaf65.png)

![pasted image 0 (2)](https://user-images.githubusercontent.com/112647953/224019556-16353b11-8d1a-461b-bb44-9a5eea2c34be.png)


And I tried again, this time using the Mangobox node, and got this error:

![unnamed](https://user-images.githubusercontent.com/112647953/224019750-b3dd8b9f-b88f-4577-8f2e-2f24bf261273.png)


Please explains how to get the APIKey, APISecret, and JWT for the `src/utils/ipfsApi.js` `pinataConfig`. I was able to do it but there is no explanation at all for the user. 

I'm still getting the same warnings using `npm install`.

### Code Quality

All warnings from `cargo +nightly clippy` have been fixed. I ran `cargo tarpaulin` in the erc20:

```
Mar 08 10:46:23.580  INFO cargo_tarpaulin::process_handling::linux: Launching test
Mar 08 10:46:23.581  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/MangoSale/contract/erc20/target/debug/deps/erc20-a90fdf17bf81539c
running 7 tests
test erc20::tests::allowance_must_not_change_on_failed_transfer ... ok
test erc20::tests::invalid_transfer_should_fail ... ok
test erc20::tests::transfer_works ... ok
test erc20::tests::new_works ... ok
test erc20::tests::transfer_from_works ... ok
test erc20::tests::balance_of_works ... ok
test erc20::tests::total_supply_works ... ok
test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
Mar 08 10:46:24.326  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| lib.rs: 156, 158-162, 167, 175-179, 184-185, 290, 293-296, 299-302, 308, 346-349, 352-357, 359-361, 364-366, 368-376, 378, 381-382, 385-393, 395, 406-411, 413-418, 424-428, 430-431, 433-434
|| Tested/Total Lines:
|| lib.rs: 78/161
||
48.45% coverage, 78/161 lines covered
```

The tests have low coverage. The warnings from EsLint haven't been fixed.

## Evaluation V1

### Contract Testing

The erc20 contract is presenting some compiling errors:

```
126 |     	pub fn new(initial_supply: Balance,name:String,symbol:String,decimals:u8,owner:AccountId) -> Self {
	|            	^^^ ----------------------- ----------- ------------- ----------- ---------------
help: remove the extra arguments
	|
643 -         	let mut erc20 = Erc20::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]),AccountId::from([0x01; 32]),AccountId::from([0x01; 32]));
643 +         	let mut erc20 = Erc20::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
	|
error[E0061]: this function takes 5 arguments but 7 arguments were supplied
   --> lib.rs:704:29
	|
704 |         	let mut erc20 = Erc20::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]),AccountId::from([0x01; 32]),AccountId::from([0x01; 32]));
	|                         	^^^^^^^^^^                                                                         	--------------------------- --------------------------- unexpected argument of type `ink_env::AccountId`
	|                                                                                                                	|
	|                                                                                                                	unexpected argument of type `ink_env::AccountId`
	|
note: associated function defined here
   --> lib.rs:126:16
	|
126 |     	pub fn new(initial_supply: Balance,name:String,symbol:String,decimals:u8,owner:AccountId) -> Self {
	|            	^^^ ----------------------- ----------- ------------- ----------- ---------------
help: remove the extra arguments
	|
704 -         	let mut erc20 = Erc20::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]),AccountId::from([0x01; 32]),AccountId::from([0x01; 32]));
704 +         	let mut erc20 = Erc20::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
	|
Some errors have detailed explanations: E0061, E0599.
For more information about an error, try `rustc --explain E0061`.
error: could not compile `erc20` due to 8 previous errors
```
All other tests in other contracts passed.

### Contract Deploy

The ideal would be running a local node, not connecting to an external one. The guide needs a better explanation, with some examples of the input for the deployment and expected outputs. I tried to deploy the contracts and got the error below for the erc20, mango_airdrop, and token_factory contracts.

![pasted image 0](https://user-images.githubusercontent.com/112647953/223540965-c2640507-7323-4b1c-8e5b-6c9332447dbc.png)

### Frontend

`npm install` returned some warnings and vulnerabilities.

```
...
npm WARN deprecated multibase@0.6.1: This module has been superseded by the multiformats module
npm WARN deprecated multibase@0.6.1: This module has been superseded by the multiformats module
npm WARN deprecated cids@0.7.5: This module has been superseded by the multiformats module
npm WARN deprecated libp2p-crypto-secp256k1@0.3.1: Included in libp2p-crypto, use it instead. https://github.com/libp2p/js-libp2p-crypto
added 1517 packages, and audited 1518 packages in 1m
158 packages are looking for funding
  run `npm fund` for details
8 vulnerabilities (4 low, 1 moderate, 2 high, 1 critical)
To address issues that do not require attention, run:
  npm audit fix
To address all issues (including breaking changes), run:
  npm audit fix --force
Run `npm audit` for details.
```
pnpm is a requirement to run the frontend and should be included a instructions to install that for running this part of the software.

Docker and run server work fine. For the cypress e2e Test, I need a better explanation of how to import the plug-in into the test browser.

### Code Quality

I ran `cargo +nightly clippy` for all contracts and got some warnings, for example, in token_factory:

```
user@localhost:~/Documents/MangoSale/contract/token_factory$ cargo +nightly clippy
warning: you should consider adding a `Default` implementation for `TokenFactory`
  --> lib.rs:28:9
   |
28 | /     	pub fn new() -> Self {
29 | |         	Self {
30 | |             	user_tokens:StorageHashMap::new(),
31 | |         	}
32 | |     	}
   | |_________^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#new_without_default
   = note: `#[warn(clippy::new_without_default)]` on by default
help: try adding this
   |
26 ~ 	impl Default for TokenFactory {
27 +     	fn default() -> Self {
28 +         	Self::new()
29 +     	}
30 + 	}
31 +
32 ~ 	impl TokenFactory {
   |
warning: this function has too many arguments (13/7)
  --> lib.rs:34:9
   |
34 | /     	pub fn new_erc20(
35 | |         	&mut self,
36 | |         	erc20_code_hash:Hash,
37 | |         	version:u8,
...  |
47 | |         	wallet_limit:u128,
48 | |     	) -> AccountId {
   | |______________________^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#too_many_arguments
   = note: `#[warn(clippy::too_many_arguments)]` on by default
warning: using `clone` on type `AccountId` which implements the `Copy` trait
  --> lib.rs:60:82
   |
60 |         	let mut erc20: Erc20 = ink_env::call::FromAccountId::from_account_id(contract_addr.clone());
   |                                                                              	^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `contract_addr`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy
   = note: `#[warn(clippy::clone_on_copy)]` on by default
warning: `token_factory` (lib) generated 3 warnings (run `cargo clippy --fix --lib -p token_factory` to apply 1 suggestion)
	Finished dev [unoptimized + debuginfo] target(s) in 0.11s
```

And I ran `cargo tarpaulin` too, except in erc20 because of the error in the test. 

mango_airdrop
```
	Finished test [unoptimized + debuginfo] target(s) in 28.24s
Mar 06 10:58:54.932  INFO cargo_tarpaulin::process_handling::linux: Launching test
Mar 06 10:58:54.932  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/MangoSale/contract/mango_airdrop/target/debug/deps/mango_airdrop-a71e6d20e796247d
running 6 tests
test mango_airdrop::tests::get_all_airdrops_works ... ok
test mango_airdrop::tests::get_user_airdrops_works ... ok
test mango_airdrop::tests::get_user_collect_works ... ok
test mango_airdrop::tests::new_airdrop_works ... ok
test mango_airdrop::tests::distribution_works ... ok
test mango_airdrop::tests::collect_works ... ok
test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
Mar 06 10:58:55.685  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| lib.rs: 62, 73, 107, 109-110, 118-124, 126-128, 130, 134, 136-137, 139, 143, 145-146, 148, 159-170, 172, 176, 187, 196, 199-200
|| Tested/Total Lines:
|| lib.rs: 35/77 +8.72%
||
45.45% coverage, 35/77 lines covered, +8.72% change in coverage
```

mango_lock

```
	Finished test [unoptimized + debuginfo] target(s) in 28.22s
Mar 06 11:00:23.016  INFO cargo_tarpaulin::process_handling::linux: Launching test
Mar 06 11:00:23.016  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/MangoSale/contract/mango_lock/target/debug/deps/mango_lock-dd20a9cd03496de8
running 5 tests
test mango_lock::tests::lock_works ... ok
test mango_lock::tests::withdraw_token_works ... ok
test mango_lock::tests::get_user_locks_works ... ok
test mango_lock::tests::additional_tokens_works ... ok
test mango_lock::tests::additional_time_works ... ok
test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
Mar 06 11:00:23.721  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| lib.rs: 53, 59-60, 69-70, 72, 78-82, 84, 98-101, 107, 109-110, 121-122, 128, 140-145, 147, 153, 155
|| Tested/Total Lines:
|| lib.rs: 24/55
||
43.64% coverage, 24/55 lines covered
```

token_factory

```
	Finished test [unoptimized + debuginfo] target(s) in 27.70s
Mar 06 11:03:18.240  INFO cargo_tarpaulin::process_handling::linux: Launching test
Mar 06 11:03:18.240  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/MangoSale/contract/token_factory/target/debug/deps/token_factory-af0b63fa9086b20f
running 1 test
test token_factory::tests::get_user_tokens_works ... ok
test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s
Mar 06 11:03:18.933  INFO cargo_tarpaulin::report: Coverage Results:
|| Uncovered Lines:
|| lib.rs: 6, 27, 34, 49-50, 52-53, 55-62, 64-66
|| Tested/Total Lines:
|| lib.rs: 5/23
||
21.74% coverage, 5/23 lines covered
```

For the frontend I ran `npm run lint` and got two problems.

```
user@localhost:~/Documents/MangoSale/frontend$ npm run  lint
> mangosale@0.1.0 lint
> vue-cli-service lint
/home/user/Documents/MangoSale/frontend/cypress.config.js
  5:21  error  'on' is defined but never used  	no-unused-vars
  5:25  error  'config' is defined but never used  no-unused-vars
✖ 2 problems (2 errors, 0 warnings)
```
