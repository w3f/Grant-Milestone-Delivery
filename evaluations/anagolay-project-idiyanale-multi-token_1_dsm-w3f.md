# Evaluation

- **Status:** Approved.
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/anagolay-project-idiyanale-multi-token-community-contributions-for-verified-creators.md
- **Milestone:** 1
- **Kusama Identity:** N/A
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable                      | Accepted               | Link                                                                                                                              | Evaluation Notes                                     |
| ------ | -------------------------------- | ---------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| 0a.    | License                          | <ul><li>[x] </li></ul> | [License file](https://github.com/anagolay/anagolay-chain/blob/main/pallets/verification/LICENSE)                                 |                                                      |
| 0b.    | Documentation                    | <ul><li>[x] </li></ul> | [Rust docs](https://bafybeifhfhy7qnqz2ew6klndwcdhi3spgbkkhhzwpct4mrlsn2l3stujxi.ipfs.anagolay.network/anagolay/)                  |                                                      |
| 0c.    | Testing and Testing Guide        | <ul><li>[x] </li></ul> | In root of the repo run `makers ci-flow-light`                                                                                    |  |
| 0d.    | Docker                           | <ul><li>[x] </li></ul> | registry.gitlab.com/anagolay/anagolay/idiyanale:3b7f3e2a                                                                          |                                           |
| 0e.    | Demo video tutorial              | <ul><li>[x] </li></ul> | https://www.youtube.com/watch?v=j5__j3Km8ho                                                                                       |                                                      |
| 1.     | Substrate module: verification   | <ul><li>[x] </li></ul> | [Pallet source code](https://github.com/anagolay/anagolay-chain/tree/main/pallets/verification)                                   | Possible code quality improvements                   |
| 2.     | Statement pallet update          | <ul><li>[x] </li></ul> | [Commit id where this is implemented](https://github.com/anagolay/anagolay-chain/commit/3bfaa83146555ffe6e4203b4d21d80b73ae0a0d8) | Possible code quality improvements                   |
| 3.     | UI for claiming domain ownership | <ul><li>[x] </li></ul> | [Anagolay App](https://bafybeiexksyj76zmsnsm6ew4eumidi75sigc2vchqqoeh2d3edxmorslxu.ipfs.anagolay.network/verify-your-domain/)     | Possible code quality improvements     |

# General Notes



## Front-end and application testing

Worked well as in the video tutorial. 

## Code Quality and Tests

Update: The possible code quality improvements could be handled in the next milestone delivery.

### Security

[cargo audit](https://github.com/RustSec/cargo-audit) result: (consider review dependencies of the project) 

```
error: 3 vulnerabilities found!
warning: 5 allowed warnings found
```

### Code documentation

Good code documentation. Some warnings generated during the html docs generation:

```
warning: unresolved link to `VerificationIndexData`
  --> pallets/verification/src/offchain.rs:13:29
   |
13 |   /// Offchain process of [`VerificationIndexData`]. Runs only for `Pending` requests and
   |                             ^^^^^^^^^^^^^^^^^^^^^ no item named `VerificationIndexData` in scope
   |
   = note: `#[warn(rustdoc::broken_intra_doc_links)]` on by default
   = help: to escape `[` and `]` characters, add '\' before them like `\[` or `\]`

warning: unresolved link to `BTreeMap::insert`
  --> pallets/anagolay-support/src/types/maps/serializable.rs:63:39
   |
63 |   /// Exactly the same semantics as [`BTreeMap::insert`], but returns an `Err` (and is a noop) if
   |                                       ^^^^^^^^^^^^^^^^ no item named `BTreeMap` in scope
   |
   = note: `#[warn(rustdoc::broken_intra_doc_links)]` on by default

warning: this URL is not a hyperlink
  --> pallets/verification/src/types.rs:86:26
   |
86 |   /// URL, Domain - e.g: https://anagolay.network
   |                          ^^^^^^^^^^^^^^^^^^^^^^^^ help: use an automatic link instead: `<https://anagolay.network>`
   |
   = note: `#[warn(rustdoc::bare_urls)]` on by default
   = note: bare URLs are not automatically turned into clickable links

warning: this URL is not a hyperlink
  --> pallets/verification/src/types.rs:88:36
   |
88 |   /// URL, Domain, Username - e.g: https://github.com/anagolay/
   |                                    ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: use an automatic link instead: `<https://github.com/anagolay/>`
   |
   = note: bare URLs are not automatically turned into clickable links

warning: this URL is not a hyperlink
  --> pallets/verification/src/types.rs:90:37
   |
90 |   /// URL, Domain, Subdomain - e.g: https://app.anagolay.network
   |                                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: use an automatic link instead: `<https://app.anagolay.network>`
   |
   = note: bare URLs are not automatically turned into clickable links

warning: this URL is not a hyperlink
  --> pallets/verification/src/types.rs:92:48
   |
92 |   /// URL, Domain, Username, Repository - e.g: https://github.com/anagolay/anagolay-chain
   |                                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ help: use an automatic link instead: `<https://github.com/anagolay/anagolay-chain>`
   |
   = note: bare URLs are not automatically turned into clickable links
```

### Verification pallet

#### Test coverage:

Coverage on lib.rs	61 / 96 (63.54%) - some paths and full methods not covered.

Coverage on offchain.rs	10 / 18 (55.56%) - some paths not covered.

Coverage on strategies/domain.rs	66 / 85 (77.65%) - some paths not covered.


#### Static analysis

One warning generated by cargo clippy:

```
warning: the borrowed expression implements the required traits
   --> pallets/verification/src/types.rs:153:31
    |
153 |       .map(|byte| hex::encode(&[byte]).as_bytes().to_vec())
    |                               ^^^^^^^ help: change this to: `[byte]`
    |
    = note: `#[warn(clippy::needless_borrow)]` on by default
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `verification` (lib) generated 1 warning
```

### Statement pallet

#### Test coverage:

Coverage on lib.rs lib.rs	58 / 66 (87.88%) - Good coverage.


#### Static analysis

Some warnings generated by cargo clippy:
```
warning: the borrowed expression implements the required traits
  --> pallets/statements/src/functions.rs:70:71
   |
70 |     match StatementByStatementIdAndAccountId::<T>::get(&statement_id, &account_id) {
   |                                                                       ^^^^^^^^^^^ help: change this to: `account_id`
   |
   = note: `#[warn(clippy::needless_borrow)]` on by default
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
  --> pallets/statements/src/functions.rs:76:72
   |
76 |         StatementByStatementIdAndAccountId::<T>::remove(&statement_id, &account_id);
   |                                                                        ^^^^^^^^^^^ help: change this to: `account_id`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: the borrowed expression implements the required traits
  --> pallets/statements/src/functions.rs:92:72
   |
92 |     StatementByStatementIdAndAccountId::<T>::insert(&record.record.id, &account_id, record.clone());
   |                                                                        ^^^^^^^^^^^ help: change this to: `account_id`
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_borrow

warning: `statements` (lib) generated 3 warnings

```

### Front-end

There are no automated tests.

Some static analysis alerts from eslint.
25 problems (0 errors, 25 warnings)

Good code documentation.


