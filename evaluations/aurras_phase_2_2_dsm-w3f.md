# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_aurras_mvp_phase_2.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/HugoByte/aurras/blob/master/LICENSE | |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/tree/next/workflow/workflow_macro | Need better instructions how to run and how to test. |
| 0c. | Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/tree/next/workflow/workflow_macro#testing | Need better instructions how to run and how to test. |
| 0d. | Docker File |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/Dockerfile | Need better instructions how to run and how to test. |
| 1a. | Workflow Composer: Flow Macro |<ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/workflow_macro/src/lib.rs | Not fully evaluated yet |
| 1b. | staking and payout features for scs/substrate-api-client |<ul><li>[ ] </li></ul>| https://github.com/scs/substrate-api-client/pull/294 | Not fully evaluated yet |

## Evaluation V2

### Documentation, Testing Guide and Docker File

Need better instructions how to run and how to test.

### Code Quality 

The application fail to build with some warnings and errors:

```
user@localhost:~/Documents/aurras$ cargo build --release
   Compiling actix-multipart v0.4.0
warning: unused import: `std::any::Any`
 --> primitives/src/types/execute.rs:2:5
  |
2 | use std::any::Any;
  |     ^^^^^^^^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

   Compiling actix-web-httpauth v0.8.0
...
warning: unused import: `Path`
  --> workflow/composer-v2/src/./types/echo.rs:10:17
   |
10 | use std::path::{Path, PathBuf};
   |                 ^^^^

warning: unused import: `crate::types::Result`
 --> workflow/composer-v2/src/./errors/io.rs:3:5
  |
3 | use crate::types::Result;
  |     ^^^^^^^^^^^^^^^^^^^^

error[E0308]: mismatched types
  --> workflow/composer-v2/src/./types/echo.rs:41:13
   |
41 |         for (_, load) in ast.loads() {
   |             ^^^^^^^^^    ----------- this is an iterator with items of type `AstLoad<'_>`
   |             |
   |             expected struct `AstLoad`, found tuple
   |
   = note: expected struct `AstLoad<'_>`
               found tuple `(_, _)`

   Compiling actix_extract_multipart v1.2.0
For more information about this error, try `rustc --explain E0308`.
warning: `composer` (lib) generated 13 warnings
error: could not compile `composer` due to previous error; 13 warnings emitted
warning: build failed, waiting for other jobs to finish...
```
I ran `cargo clippy` in workflow_marco and got these warnings

```
user@localhost:~/Documents/aurras/workflow/workflow_macro$ cargo clippy
warning: redundant clone
  --> workflow/workflow_macro/src/lib.rs:15:29
   |
15 |     let workflow = ast.ident.clone();
   |                             ^^^^^^^^ help: remove this
   |
note: this value is dropped without further use
  --> workflow/workflow_macro/src/lib.rs:15:20
   |
15 |     let workflow = ast.ident.clone();
   |                    ^^^^^^^^^
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#redundant_clone
   = note: `#[warn(clippy::redundant_clone)]` on by default

warning: `workflow_macro` (lib) generated 1 warning
    Finished dev [unoptimized + debuginfo] target(s) in 0.10s

```
