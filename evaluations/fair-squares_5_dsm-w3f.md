# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/fair_squares.md
- **Milestone:** 5
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/fair-squares_4_alxs.md

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |                                           
| 0a. | License: Apache 2.0 | <ul><li>[x] </li></ul> |[Link](https://github.com/Fair-Squares/fair-squares/blob/main/LICENSE)| | 
| 0b.  | Documentation & Guide | <ul><li>[x] </li></ul> |[Link](https://docs.google.com/document/d/1M98KXcTvXFI75U4JnqlHuoa03x_YZQ0ZKLWWYDGAUl8/edit?usp=sharing)| | 
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> |[Link](https://github.com/Fair-Squares/fair-squares#run-all-tests) | Testing guide for the frontend is missing| 
| 0d. | Dockerfile | <ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/blob/main/Dockerfile) | | 
| 0e.  | Article |<ul><li>[x] </li></ul>|[Link](https://docs.google.com/document/d/1DQeoj0VDqoFjVu3lGxe--iD6OmyWnh6cO4lbiHhZXQ4/edit?usp=sharing)| The article will be published once the milestone is approved. | 
| 1.  | tenancy-pallet |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/tenancy)| **tag**: v0.1-m5 </br> **commit**:`3f59df53b51183622aa34b9d4ee767a1ab4563b1`|
| 2.  | payment-pallet |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/payment)| **tag**: v0.1-m5 </br> **commit**:`3f59df53b51183622aa34b9d4ee767a1ab4563b1`|
| 3.  | asset_management-pallet | <ul><li>[x] </li></ul> |[Link](https://github.com/Fair-Squares/fair-squares/tree/main/pallets/asset_management)| **tag**: v0.1-m5 </br> **commit**:`3f59df53b51183622aa34b9d4ee767a1ab4563b1`|
| 4.  | fs-app | <ul><li>[ ] </li></ul> |[Link](https://github.com/Fair-Squares/fs-dapp)| Testing guide for the frontend is missing|
| 4.  | fs-node M5 |<ul><li>[x] </li></ul>|[Link](https://github.com/Fair-Squares/fair-squares)| **tag**: v0.1-m5 </br> **commit**:`3f59df53b51183622aa34b9d4ee767a1ab4563b1`|

## Evaluation V2

The testing guide for testing the application using the frontend is still missing.

### Code Quality

Most of the warnings where fixed. The testing coverage was improved where it was asked for.

## Evaluation V1

### Documentation

Following the guide, I start the node, with and without docker, and the frontend without problems.

### Frontend

The frontend misses a Testing Guide to test its functionality.

### Guide M5 for Fair Squares node software

I followed [this guide](https://docs.google.com/document/d/1M98KXcTvXFI75U4JnqlHuoa03x_YZQ0ZKLWWYDGAUl8/edit#). The node is working fine.

### Unit Testing

All Unit tests passed.

### Code Quality

I ran `cargo clippy --release` in fair-squares root and got some warnings, for example:

```
warning: redundant clone
   --> pallets/tenancy/src/lib.rs:141:33
	|
141 |         	ensure!(!tenant.asset_account.clone().is_none(), Error::<T>::TenantAssetNotLinked);
	|                                      	^^^^^^^^ help: remove this
	|
note: cloned value is neither consumed nor mutated
   --> pallets/tenancy/src/lib.rs:141:13
	|
141 |         	ensure!(!tenant.asset_account.clone().is_none(), Error::<T>::TenantAssetNotLinked);
	|                  	^^^^^^^^^^^^^^^^^^^^^^^^^^^^
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone

warning: using `clone` on type `u8` which implements the `Copy` trait
   --> pallets/tenancy/src/lib.rs:143:12
	|
143 |         	ensure!(tenant.remaining_payments.clone() > 0, Error::<T>::NoRentToPay);
	|                 	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: try removing the `clone` call: `tenant.remaining_payments`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#clone_on_copy

warning: `pallet-tenancy` (lib) generated 14 warnings
warning: very complex type used. Consider factoring parts into `type` definitions
  --> node/src/service.rs:41:6
   |
41 |   ) -> Result<
   |  ______^
42 | | 	sc_service::PartialComponents<
43 | |     	FullClient,
44 | |     	FullBackend,
...  |
59 | | 	ServiceError,
60 | | > {
   | |_^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#type_complexity
   = note: `#[warn(clippy::type_complexity)]` on by default

warning: writing `&String` instead of `&str` involves a new object where a slice will do
   --> node/src/service.rs:152:26
	|
152 | fn remote_keystore(_url: &String) -> Result<Arc<LocalKeystore>, &'static str> {
	|                      	^^^^^^^ help: change this to: `&str`
	|
	= help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#ptr_arg
	= note: `#[warn(clippy::ptr_arg)]` on by default

warning: `fs-node` (lib) generated 2 warnings
warning: `fs-node` (bin "fs-node") generated 2 warnings (2 duplicates)
	Finished release [optimized] target(s) in 0.87s
warning: the following packages contain code that will be rejected by a future version of Rust: fs_extra v1.2.0, nalgebra v0.27.1
note: to see what the problems were, use the option `--future-incompat-report`, or run `cargo report future-incompatibilities --id 10`
```

I ran `cargo tarpaulin` and the testing coverage on the pallets is good in almost all parts besides Asset Management functions. 

Tenancy pallet:

```
|| src/functions.rs: 44/49
|| src/lib.rs: 50/62
|| src/mock.rs: 22/24
|| src/tests.rs: 371/371
|| src/types.rs: 9/9
|| src/weights.rs: 0/6

```

Payment pallet:

```
|| src/functions.rs: 65/85
|| src/lib.rs: 106/125
|| src/mock.rs: 23/23
|| src/tests.rs: 624/627
|| src/weights.rs: 8/72

```

Assets Management pallet:

```
|| src/functions.rs: 132/235
|| src/lib.rs: 173/228
|| src/mock.rs: 24/27
|| src/tests.rs: 340/341
|| src/types.rs: 26/27

```


I ran `yarn lint` and got some warnings:

```
user@localhost:~/Documents/fs-dapp$ yarn lint
yarn run v1.22.19
$ eslint ./src --fix && npx prettier --write ./src

/home/user/Documents/fs-dapp/src/contexts/Assets/defaults.ts
  6:29  warning  '_collId' is defined but never used  @typescript-eslint/no-unused-vars
  6:46  warning  '_itemId' is defined but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/contexts/Balances/index.tsx
   31:38  warning  'addExternalAccount' is assigned a value but never used  @typescript-eslint/no-unused-vars
  171:9   warning  'freeAfterReserve' is assigned a value but never used	@typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/contexts/Democracy/defaults.ts
  4:31  warning  'index' is defined but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/contexts/Roles/defaults.ts
  8:38  warning  '_address' is defined but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/contexts/ShareDistributor/defaults.ts
  5:33  warning  '_collId' is defined but never used      	@typescript-eslint/no-unused-vars
  5:50  warning  '_itemId' is defined but never used      	@typescript-eslint/no-unused-vars
  6:28  warning  '_virtualAccount' is defined but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/contexts/TransferOptions/index.tsx
  23:42  warning  'getLedgerForStash' is assigned a value but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/contexts/Voting/defaults.ts
  4:26  warning  'hash' is defined but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/library/NetworkBar/index.tsx
  15:11  warning  'plugins' is assigned a value but never used  @typescript-eslint/no-unused-vars
  17:9   warning  'prices' is assigned a value but never used   @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/library/SideMenu/index.tsx
  39:11  warning  'openHelpWith' is assigned a value but never used  @typescript-eslint/no-unused-vars

/home/user/Documents/fs-dapp/src/modals/ConnectAccounts/Accounts.tsx
  23:5   warning  'getLedgerForController' is assigned a value but never used  @typescript-eslint/no-unused-vars
  24:15  warning  'balanceAccounts' is assigned a value but never used     	@typescript-eslint/no-unused-vars
  25:5   warning  'ledgers' is assigned a value but never used             	@typescript-eslint/no-unused-vars
  27:11  warning  'connectToAccount' is assigned a value but never used    	@typescript-eslint/no-unused-vars
  28:11  warning  'setStatus' is assigned a value but never used           	@typescript-eslint/no-unused-vars
  32:9   warning  '_controllers' is assigned a value but never used        	@typescript-eslint/no-unused-vars
  33:9   warning  '_stashes' is assigned a value but never used            	@typescript-eslint/no-unused-vars

✖ 21 problems (0 errors, 21 warnings)
```
