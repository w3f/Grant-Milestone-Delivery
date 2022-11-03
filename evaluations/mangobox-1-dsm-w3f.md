# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MangoBOX-Protocol.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                  |<ul><li>[x] </li></ul>|[License](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/LICENSE) | Apache 2.0 |
| 0b.    | Documentation            |<ul><li>[ ] </li></ul>|[Documentation](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md)| Not fully evaluated yet.  |
| 0c.    | Testing Guide            |<ul><li>[ ] </li></ul>|[Testing Guide](https://github.com/Mangoboxlabs/Mangoboxink/blob/main/contract/README.md#testing)| Need a complete example. |
| 0d.    | Docker         |<ul><li>[ ] </li></ul>| [Docker](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/docker) | Run Failed. |
| 1.     | Ink! Contract 1           |<ul><li>[ ] </li></ul>|[MBProjects](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBProjects) | Some tests are failing. |
| 2.     | Ink! Contract 2           |<ul><li>[ ] </li></ul>|[MBFundingCycleStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBFundingCycleStore) | Tests passing. Not fully evaluated yet. |
| 3.     | Ink! Contract 3           |<ul><li>[ ] </li></ul>|[MBToken](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBToken) | Compilation Error. |
| 4.     | Ink! Contract 4           |<ul><li>[ ] </li></ul>| [MBTokenStore](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBTokenStore) | Compilation Error. |
| 5.     | Ink! Contract 5           |<ul><li>[ ] </li></ul>|[MBERC20PaymentTerminal](https://github.com/Mangoboxlabs/Mangoboxink/tree/main/contract/MBERC20PaymentTerminal) | Compilation Error. |

## General Notes

### Docker

Docker run fails with the following result:

```
diogo@testbox:~/workspace/mangobox/Mangoboxink/docker$ docker run -p8080:80 mangobox/ui1:v1
Unable to find image 'mangobox/ui1:v1' locally
docker: Error response from daemon: pull access denied for mangobox/ui1, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
See 'docker run --help'.
```

### Testing guide

Please provide a complete example to support the testing of the application behavior. This example can be performed using the front-end integrated with the back-end of the application.


### Automated Tests


First, let's make all tests pass then I'll check the coverage of the tests.


#### MBProjects:


Some tests are failing:
```
diogo@testbox:~/workspace/mangobox/Mangoboxink/contract/MBProjects$ cargo +nightly test
    Finished test [unoptimized + debuginfo] target(s) in 0.05s
     Running unittests lib.rs (target/debug/deps/mb_projects-c6965b7f472623b4)

running 10 tests
test mb_projects::tests::burn_fails_token_not_found ... ok
test mb_projects::tests::burn_fails_not_owner ... ok
test mb_projects::tests::transfer_works ... FAILED
test mb_projects::tests::approved_for_all_works ... FAILED
test mb_projects::tests::burn_works ... FAILED
test mb_projects::tests::invalid_transfer_should_fail ... FAILED
test mb_projects::tests::not_approved_transfer_should_fail ... FAILED
test mb_projects::tests::mint_works ... FAILED
test mb_projects::tests::mint_existing_should_fail ... FAILED
test mb_projects::tests::approved_transfer_works ... FAILED

failures:

---- mb_projects::tests::transfer_works stdout ----
thread 'mb_projects::tests::transfer_works' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:533:13

---- mb_projects::tests::approved_for_all_works stdout ----
thread 'mb_projects::tests::approved_for_all_works' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `2`', lib.rs:637:13

---- mb_projects::tests::burn_works stdout ----
thread 'mb_projects::tests::burn_works' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:736:13

---- mb_projects::tests::invalid_transfer_should_fail stdout ----
thread 'mb_projects::tests::invalid_transfer_should_fail' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:560:13
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- mb_projects::tests::not_approved_transfer_should_fail stdout ----
thread 'mb_projects::tests::not_approved_transfer_should_fail' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:693:13

---- mb_projects::tests::mint_works stdout ----
thread 'mb_projects::tests::mint_works' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:500:13

---- mb_projects::tests::mint_existing_should_fail stdout ----
thread 'mb_projects::tests::mint_existing_should_fail' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:515:13

---- mb_projects::tests::approved_transfer_works stdout ----
thread 'mb_projects::tests::approved_transfer_works' panicked at 'assertion failed: `(left == right)`
  left: `0`,
 right: `1`', lib.rs:622:13


failures:
    mb_projects::tests::approved_for_all_works
    mb_projects::tests::approved_transfer_works
    mb_projects::tests::burn_works
    mb_projects::tests::invalid_transfer_should_fail
    mb_projects::tests::mint_existing_should_fail
    mb_projects::tests::mint_works
    mb_projects::tests::not_approved_transfer_should_fail
    mb_projects::tests::transfer_works

test result: FAILED. 2 passed; 8 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

error: test failed, to rerun pass `--lib`
```


#### MBFundingCycleStore

Testing passing:

```
running 6 tests
test mb_fundingcyclestore::tests::currentOf_works ... ok
test mb_fundingcyclestore::tests::latestConfiguredOf_works ... ok
test mb_fundingcyclestore::tests::configureFor_works ... ok
test mb_fundingcyclestore::tests::currentBallotStateOf_works ... ok
test mb_fundingcyclestore::tests::queuedOf_works ... ok
test mb_fundingcyclestore::tests::get_works ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

   Doc-tests mb_fundingcyclestore

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
```


#### MBToken

I had some compilation errors:

```
error[E0061]: this function takes 2 arguments but 5 arguments were supplied
   --> lib.rs:487:26
    |
487 |             let _erc20 = MBToken::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
    |                          ^^^^^^^^^^^^ ---                                           - --------------------------- argument of type `ink_env::AccountId` unexpected                                                                                                      
    |                                       |                                             |
    |                                       argument of type `{integer}` unexpected       argument of type `{integer}` unexpected
    |
note: associated function defined here
   --> lib.rs:127:16
    |
127 |         pub fn new(name:String,symbol:String) -> Self {
    |                ^^^ ----------- -------------
help: remove the extra arguments
    |
487 |             let _erc20 = MBToken::new(String::from("test"), String::from("test"));
    |                                      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 5 arguments were supplied
   --> lib.rs:505:25
    |
505 |             let erc20 = MBToken::new(
    |                         ^^^^^^^^^^^^
506 |                 100,
    |                 --- argument of type `{integer}` unexpected
...
509 |                 8,
    |                 - argument of type `{integer}` unexpected
510 |                 AccountId::from([0x01; 32]),
    |                 --------------------------- argument of type `ink_env::AccountId` unexpected
    |
note: associated function defined here
   --> lib.rs:127:16
    |
127 |         pub fn new(name:String,symbol:String) -> Self {
    |                ^^^ ----------- -------------
help: remove the extra arguments
    |
505 |             let erc20 = MBToken::new(String::from("test"), String::from("test"));
    |                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 5 arguments were supplied
   --> lib.rs:532:29
    |
532 |             let mut erc20 = MBToken::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
    |                             ^^^^^^^^^^^^ ---                                           - --------------------------- argument of type `ink_env::AccountId` unexpected                                                                                                   
    |                                          |                                             |
    |                                          argument of type `{integer}` unexpected       argument of type `{integer}` unexpected
    |
note: associated function defined here
   --> lib.rs:127:16
    |
127 |         pub fn new(name:String,symbol:String) -> Self {
    |                ^^^ ----------- -------------
help: remove the extra arguments
    |
532 |             let mut erc20 = MBToken::new(String::from("test"), String::from("test"));
    |                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 5 arguments were supplied
   --> lib.rs:565:29
    |
565 |             let mut erc20 = MBToken::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
    |                             ^^^^^^^^^^^^ ---                                           - --------------------------- argument of type `ink_env::AccountId` unexpected                                                                                                   
    |                                          |                                             |
    |                                          argument of type `{integer}` unexpected       argument of type `{integer}` unexpected
    |
note: associated function defined here
   --> lib.rs:127:16
    |
127 |         pub fn new(name:String,symbol:String) -> Self {
    |                ^^^ ----------- -------------
help: remove the extra arguments
    |
565 |             let mut erc20 = MBToken::new(String::from("test"), String::from("test"));
    |                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 5 arguments were supplied
   --> lib.rs:611:29
    |
611 |             let mut erc20 = MBToken::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
    |                             ^^^^^^^^^^^^ ---                                           - --------------------------- argument of type `ink_env::AccountId` unexpected                                                                                                   
    |                                          |                                             |
    |                                          argument of type `{integer}` unexpected       argument of type `{integer}` unexpected
    |
note: associated function defined here
   --> lib.rs:127:16
    |
127 |         pub fn new(name:String,symbol:String) -> Self {
    |                ^^^ ----------- -------------
help: remove the extra arguments
    |
611 |             let mut erc20 = MBToken::new(String::from("test"), String::from("test"));
    |                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 5 arguments were supplied
   --> lib.rs:672:29
    |
672 |             let mut erc20 = MBToken::new(100,String::from("test"),String::from("test"),8,AccountId::from([0x01; 32]));
    |                             ^^^^^^^^^^^^ ---                                           - --------------------------- argument of type `ink_env::AccountId` unexpected                                                                                                   
    |                                          |                                             |
    |                                          argument of type `{integer}` unexpected       argument of type `{integer}` unexpected
    |
note: associated function defined here
   --> lib.rs:127:16
    |
127 |         pub fn new(name:String,symbol:String) -> Self {
    |                ^^^ ----------- -------------
help: remove the extra arguments
    |
672 |             let mut erc20 = MBToken::new(String::from("test"), String::from("test"));
    |                                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For more information about this error, try `rustc --explain E0061`.
error: could not compile `mbtoken` due to 6 previous errors
warning: build failed, waiting for other jobs to finish...

```

#### MBTokenStore

```
error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:276:23
    |
276 |             let  ms = MBTokenStore::new();
    |                       ^^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::Hash` are missing
    |
note: associated function defined here
   --> lib.rs:45:16
    |
45  |         pub fn new(
    |                ^^^
46  |             _projects:AccountId,
    |             -------------------
47  |             _tokenHash:Hash,
    |             ---------------
help: provide the arguments
    |
276 |             let  ms = MBTokenStore::new(/* ink_env::AccountId */, /* ink_env::Hash */);
    |                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:281:23
    |
281 |             let  ms = MBTokenStore::new();
    |                       ^^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::Hash` are missing
    |
note: associated function defined here
   --> lib.rs:45:16
    |
45  |         pub fn new(
    |                ^^^
46  |             _projects:AccountId,
    |             -------------------
47  |             _tokenHash:Hash,
    |             ---------------
help: provide the arguments
    |
281 |             let  ms = MBTokenStore::new(/* ink_env::AccountId */, /* ink_env::Hash */);
    |                                        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:286:26
    |
286 |             let mut ms = MBTokenStore::new();
    |                          ^^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::Hash` are missing
    |
note: associated function defined here
   --> lib.rs:45:16
    |
45  |         pub fn new(
    |                ^^^
46  |             _projects:AccountId,
    |             -------------------
47  |             _tokenHash:Hash,
    |             ---------------
help: provide the arguments
    |
286 |             let mut ms = MBTokenStore::new(/* ink_env::AccountId */, /* ink_env::Hash */);
    |                                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:291:26
    |
291 |             let mut ms = MBTokenStore::new();
    |                          ^^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::Hash` are missing
    |
note: associated function defined here
   --> lib.rs:45:16
    |
45  |         pub fn new(
    |                ^^^
46  |             _projects:AccountId,
    |             -------------------
47  |             _tokenHash:Hash,
    |             ---------------
help: provide the arguments
    |
291 |             let mut ms = MBTokenStore::new(/* ink_env::AccountId */, /* ink_env::Hash */);
    |                                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

error[E0061]: this function takes 2 arguments but 0 arguments were supplied
   --> lib.rs:297:26
    |
297 |             let mut ms = MBTokenStore::new();
    |                          ^^^^^^^^^^^^^^^^^-- two arguments of type `ink_env::AccountId` and `ink_env::Hash` are missing
    |
note: associated function defined here
   --> lib.rs:45:16
    |
45  |         pub fn new(
    |                ^^^
46  |             _projects:AccountId,
    |             -------------------
47  |             _tokenHash:Hash,
    |             ---------------
help: provide the arguments
    |
297 |             let mut ms = MBTokenStore::new(/* ink_env::AccountId */, /* ink_env::Hash */);
    |                                           ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

For more information about this error, try `rustc --explain E0061`.

```


#### MBERC20PaymentTerminal

Some compilation problems:

```
error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:578:22
    |
578 |             let  MT= MBERC20PaymentTerminal::new();
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
578 |             let  MT= MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                 
    |                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                  

error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:583:22
    |
583 |             let MT = MBERC20PaymentTerminal::new();
    |                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
583 |             let MT = MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                                 
    |                                                 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                                  

error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:589:26
    |
589 |             let mut MT = MBERC20PaymentTerminal::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
589 |             let mut MT = MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                             
    |                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                              

error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:595:25
    |
595 |            let mut MT = MBERC20PaymentTerminal::new();
    |                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
595 |            let mut MT = MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                              
    |                                                    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                               

error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:601:26
    |
601 |             let mut MT = MBERC20PaymentTerminal::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
601 |             let mut MT = MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                             
    |                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                              

error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:607:26
    |
607 |             let mut MT = MBERC20PaymentTerminal::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
607 |             let mut MT = MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                             
    |                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                              

error[E0061]: this function takes 7 arguments but 0 arguments were supplied
   --> lib.rs:613:26
    |
613 |             let mut MT = MBERC20PaymentTerminal::new();
    |                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^-- multiple arguments are missing
    |
note: associated function defined here
   --> lib.rs:98:16
    |
98  |         pub fn new(
    |                ^^^
99  |             _projects:AccountId,
    |             -------------------
100 |             _directory:AccountId,
    |             --------------------
101 |             _splitsStore:AccountId,
    |             ----------------------
102 |             _prices:AccountId,
    |             -----------------
103 |             _store:AccountId,
    |             ----------------
104 |             _token:AccountId,
    |             ----------------
105 |             _tokenStore:AccountId,
    |             ---------------------
help: provide the arguments
    |
613 |             let mut MT = MBERC20PaymentTerminal::new(/* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */, /* ink_env::AccountId */);                             
    |                                                     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~                              

For more information about this error, try `rustc --explain E0061`.
error: could not compile `mberc20_paymentterminal` due to 7 previous errors
warning: build failed, waiting for other jobs to finish...

```

