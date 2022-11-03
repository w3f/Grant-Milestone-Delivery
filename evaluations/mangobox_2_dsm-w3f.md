# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoBOX-Protocol.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    |        License         |<ul><li>[x] </li></ul>|[License](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/LICENSE) | Apache 2.0                  |
| 0b-01.    |     Documentation01      |<ul><li>[ ] </li></ul>|[Documentation01](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md) | Not fully evaluated yet. |
| 0b-02.    |     Documentation02      |<ul><li>[ ] </li></ul>|[Documentation02](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/Frontend/README.md) | Not fully evaluated yet. |
| 0c.    |     Testing Guide      |<ul><li>[ ] </li></ul>|[ Testing Guide ](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md#testing) | Need a complete example. |
| 0d.    |         Docker         |<ul><li>[ ] </li></ul>| [Docker](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/docker) | Fail to run. |
| 0e.    |        Article         |<ul><li>[x] </li></ul>| [Article](https://medium.com/@mangoboxlabs/introduction-to-mongobox-5fab08bd1b57) |  |
| 1.     |     Front-end File     |<ul><li>[ ] </li></ul>| [Front-end File](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/Frontend) | Not fully evaluated yet. |
| 2.     |           UI           |<ul><li>[x] </li></ul>|  [UI](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/UIs)   |  |
| 3.     | Functional Testnet URL |<ul><li>[ ] </li></ul>|                  https://app.mangobox.xyz/                   | Not fully evaluated yet. |
| 4.     |     Ink! Contract 6     |<ul><li>[ ] </li></ul>| [MBSplitsStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBSplitsStore) | Compilation Error. |
| 5.     |     Ink! Contract 7     |<ul><li>[ ] </li></ul>| [MBOperatorStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBOperatorStore) | Compilation Error. |
| 6.     |     Ink! Contract 8    |<ul><li>[ ] </li></ul>| [MBDirectory](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBDirectory) | Compilation Error. |
| 7.     |     Ink! Contract 9     |<ul><li>[ ] </li></ul>|[MBController](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBController) | Compilation Error. |
| 8.     |     Ink! Contract 10     |<ul><li>[ ] </li></ul>| [MBSingleTokenPaymentTerminalStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBSingleTokenPaymentTerminalStore) | Compilation Error. |
| 9.     |     Ink! Contract 11    |<ul><li>[ ] </li></ul>| [MBPrices](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBPrices) | Tests passing. Not fully evaluated yet. |


## General Notes


### Testing guide

Please provide a complete example for testing the application behavior. This example can be performed using the front-end integrated with the back-end of the application.


### Docker

Docker run fails with the following result:

```
diogo@testbox:~/workspace/mangobox/Mangoboxink/docker$ docker run -p8080:80 mangobox/ui1:v1
Unable to find image 'mangobox/ui1:v1' locally
docker: Error response from daemon: pull access denied for mangobox/ui1, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
See 'docker run --help'.
```


### UI

As some contracts are with compilation errors I cannot continue testing the UI integrated with the contracts. 

When I tried to build the project I got some errors related to ABI missing. If there are some manual steps to move those ABI in order to the project work, please add those steps to the manual of the software. 

```
 ERROR  Failed to compile with 2 errors                                                                                      7:04:55 PM

 error  in ./src/api/apiMap.js

Module not found: Error: Can't resolve '../abi/MBDirectory.json' in '/home/diogo/workspace/mangobox/Mangoboxink/Frontend/src/api'

 error  in ./src/api/apiMap.js

Module not found: Error: Can't resolve '../abi/MBController.json' in '/home/diogo/workspace/mangobox/Mangoboxink/Frontend/src/api'

 ERROR  Error: Build failed with errors.
```

### Automated Tests

First, lets make all tests pass then I'll check the coverage of the tests.


#### MBSplitsStore


Some compilation problems.


```
error[E0061]: this function takes 1 argument but 0 arguments were supplied
   --> lib.rs:196:26
    |
196 |             let mut ms = MBSplitsStore::new();
    |                          ^^^^^^^^^^^^^^^^^^-- an argument of type `ink_env::AccountId` is missing
    |
note: associated function defined here
   --> lib.rs:74:16
    |
74  |         pub fn new(
    |                ^^^
75  |             _projects:AccountId
    |             -------------------
help: provide the argument
    |
196 |             let mut ms = MBSplitsStore::new(/* ink_env::AccountId */);
    |                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 1 argument but 0 arguments were supplied
   --> lib.rs:211:26
    |
211 |             let mut ms = MBSplitsStore::new();
    |                          ^^^^^^^^^^^^^^^^^^-- an argument of type `ink_env::AccountId` is missing
    |
note: associated function defined here
   --> lib.rs:74:16
    |
74  |         pub fn new(
    |                ^^^
75  |             _projects:AccountId
    |             -------------------
help: provide the argument
    |
211 |             let mut ms = MBSplitsStore::new(/* ink_env::AccountId */);
    |                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~

For more information about this error, try `rustc --explain E0061`.

```

#### MBOperatorStore


Some compilation problems:

```
running 1 test
test mb_operatorstore::tests::MBOperatorStore_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests mb_operatorstore

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

```

#### MBDirectory

```
error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:193:33
    |
193 |             let mut directory = MBDirectory::new();
    |                                 ^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::AccountId` are missing                                                                                                                                      
    |
note: associated function defined here
   --> lib.rs:41:16
    |
41  |         pub fn new(
    |                ^^^
42  |             _projects:AccountId,
    |             -------------------
43  |             _fundingCycleStore:AccountId,
    |             ----------------------------
help: provide the arguments
    |
193 |             let mut directory = MBDirectory::new(/* ink_env::AccountId */, /* ink_env::AccountId */);
    |                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:200:33
    |
200 |             let mut directory = MBDirectory::new();
    |                                 ^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::AccountId` are missing                                                                                                                                      
    |
note: associated function defined here
   --> lib.rs:41:16
    |
41  |         pub fn new(
    |                ^^^
42  |             _projects:AccountId,
    |             -------------------
43  |             _fundingCycleStore:AccountId,
    |             ----------------------------
help: provide the arguments
    |
200 |             let mut directory = MBDirectory::new(/* ink_env::AccountId */, /* ink_env::AccountId */);
    |                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:205:33
    |
205 |             let mut directory = MBDirectory::new();
    |                                 ^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::AccountId` are missing                                                                                                                                      
    |
note: associated function defined here
   --> lib.rs:41:16
    |
41  |         pub fn new(
    |                ^^^
42  |             _projects:AccountId,
    |             -------------------
43  |             _fundingCycleStore:AccountId,
    |             ----------------------------
help: provide the arguments
    |
205 |             let mut directory = MBDirectory::new(/* ink_env::AccountId */, /* ink_env::AccountId */);
    |                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:210:29
    |
210 |             let directory = MBDirectory::new();
    |                             ^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::AccountId` are missing
    |
note: associated function defined here
   --> lib.rs:41:16
    |
41  |         pub fn new(
    |                ^^^
42  |             _projects:AccountId,
    |             -------------------
43  |             _fundingCycleStore:AccountId,
    |             ----------------------------
help: provide the arguments
    |
210 |             let directory = MBDirectory::new(/* ink_env::AccountId */, /* ink_env::AccountId */);
    |                                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:215:29
    |
215 |             let directory = MBDirectory::new();
    |                             ^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::AccountId` are missing
    |
note: associated function defined here
   --> lib.rs:41:16
    |
41  |         pub fn new(
    |                ^^^
42  |             _projects:AccountId,
    |             -------------------
43  |             _fundingCycleStore:AccountId,
    |             ----------------------------
help: provide the arguments
    |
215 |             let directory = MBDirectory::new(/* ink_env::AccountId */, /* ink_env::AccountId */);
    |                                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:220:33
    |
220 |             let mut directory = MBDirectory::new();
    |                                 ^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::AccountId` are missing                                                                                                                                      
    |
note: associated function defined here
   --> lib.rs:41:16
    |
41  |         pub fn new(
    |                ^^^
42  |             _projects:AccountId,
    |             -------------------
43  |             _fundingCycleStore:AccountId,
    |             ----------------------------
help: provide the arguments
    |
220 |             let mut directory = MBDirectory::new(/* ink_env::AccountId */, /* ink_env::AccountId */);
    |                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For more information about this error, try `rustc --explain E0061`.

```


#### MBController


Compilation failed. 

```
diogo@testbox:~/workspace/mangobox/Mangoboxink/contract/MBController$ cargo +nightly test
error: failed to get `mbdirectory` as a dependency of package `mb_controller v0.1.0 (/home/diogo/workspace/mangobox/Mangoboxink/contract/MBController)`

Caused by:
  failed to load source for dependency `mbdirectory`

Caused by:
  Unable to update /home/diogo/workspace/mangobox/Mangoboxink/contract/mbdirectory

Caused by:
  failed to read `/home/diogo/workspace/mangobox/Mangoboxink/contract/mbdirectory/Cargo.toml`

Caused by:
  No such file or directory (os error 2)
```



#### MBSingleTokenPaymentTerminalStore


```
error[E0061]: this function takes 3 arguments but 0 arguments were supplied
   --> lib.rs:379:22
    |
379 |             let mp = MBSingleTokenPaymentTerminalStore::new();
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-- three arguments of type `ink_env::AccountId`, `ink_env::AccountId`, and `ink_env::AccountId` are missing                                                                                                  
    |
note: associated function defined here
   --> lib.rs:91:16
    |
91  |         pub fn new(
    |                ^^^
92  |             _prices:AccountId,
    |             -----------------
93  |             _directory:AccountId,
    |             --------------------
94  |             _fundingCycleStore:AccountId
    |             ----------------------------
help: provide the arguments
    |
379 |             let mp = MBSingleTokenPaymentTerminalStore::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                                                                                                              
    |                                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                                                               

error[E0061]: this function takes 3 arguments but 0 arguments were supplied
   --> lib.rs:384:26
    |
384 |             let mut mp = MBSingleTokenPaymentTerminalStore::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-- three arguments of type `ink_env::AccountId`, `ink_env::AccountId`, and `ink_env::AccountId` are missing                                                                                              
    |
note: associated function defined here
   --> lib.rs:91:16
    |
91  |         pub fn new(
    |                ^^^
92  |             _prices:AccountId,
    |             -----------------
93  |             _directory:AccountId,
    |             --------------------
94  |             _fundingCycleStore:AccountId
    |             ----------------------------
help: provide the arguments
    |
384 |             let mut mp = MBSingleTokenPaymentTerminalStore::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                                                                                                          
    |                                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                                                           

error[E0061]: this function takes 3 arguments but 0 arguments were supplied
   --> lib.rs:390:26
    |
390 |             let mut mp = MBSingleTokenPaymentTerminalStore::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-- three arguments of type `ink_env::AccountId`, `ink_env::AccountId`, and `ink_env::AccountId` are missing                                                                                              
    |
note: associated function defined here
   --> lib.rs:91:16
    |
91  |         pub fn new(
    |                ^^^
92  |             _prices:AccountId,
    |             -----------------
93  |             _directory:AccountId,
    |             --------------------
94  |             _fundingCycleStore:AccountId
    |             ----------------------------
help: provide the arguments
    |
390 |             let mut mp = MBSingleTokenPaymentTerminalStore::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                                                                                                          
    |                                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                                                           

error[E0061]: this function takes 3 arguments but 0 arguments were supplied
   --> lib.rs:396:26
    |
396 |             let mut mp = MBSingleTokenPaymentTerminalStore::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-- three arguments of type `ink_env::AccountId`, `ink_env::AccountId`, and `ink_env::AccountId` are missing                                                                                              
    |
note: associated function defined here
   --> lib.rs:91:16
    |
91  |         pub fn new(
    |                ^^^
92  |             _prices:AccountId,
    |             -----------------
93  |             _directory:AccountId,
    |             --------------------
94  |             _fundingCycleStore:AccountId
    |             ----------------------------
help: provide the arguments
    |
396 |             let mut mp = MBSingleTokenPaymentTerminalStore::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                                                                                                          
    |                                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                                                           

error[E0308]: mismatched types
   --> lib.rs:397:56
    |
397 |             assert!(mp.recordDistributionFor(1,1,1) == true);
    |                                                        ^^^^ expected `u128`, found `bool`

error[E0061]: this function takes 3 arguments but 0 arguments were supplied
   --> lib.rs:401:26
    |
401 |             let mut mp = MBSingleTokenPaymentTerminalStore::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-- three arguments of type `ink_env::AccountId`, `ink_env::AccountId`, and `ink_env::AccountId` are missing                                                                                              
    |
note: associated function defined here
   --> lib.rs:91:16
    |
91  |         pub fn new(
    |                ^^^
92  |             _prices:AccountId,
    |             -----------------
93  |             _directory:AccountId,
    |             --------------------
94  |             _fundingCycleStore:AccountId
    |             ----------------------------
help: provide the arguments
    |
401 |             let mut mp = MBSingleTokenPaymentTerminalStore::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                                                                                                          
    |                                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                                                                                                           

error[E0308]: mismatched types
   --> lib.rs:402:56
    |
402 |             assert!(mp.recordUsedAllowanceOf(1,1,1) == true);
    |                                                        ^^^^ expected `u128`, found `bool`

error[E0061]: this function takes 3 arguments but 0 arguments were supplied
   --> lib.rs:406:26
    |
406 |             let mut mp = MBSingleTokenPaymentTerminalStore::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^-- three arguments of type `ink_env::AccountId`, `ink_env::AccountId`, and `ink_env::AccountId` are missing                                                                                              
    |
note: associated function defined here
   --> lib.rs:91:16
    |
91  |         pub fn new(
    |                ^^^
92  |             _prices:AccountId,
    |             -----------------
93  |             _directory:AccountId,
    |             --------------------
94  |             _fundingCycleStore:AccountId
    |             ----------------------------
help: provide the arguments
    |
406 |             let mut mp = MBSingleTokenPaymentTerminalStore::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                                                                                                          
    |                                                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
```


#### MBPrices


Testing passing:

```

running 1 test
test mb_prices::tests::init_works ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests mb_prices

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

