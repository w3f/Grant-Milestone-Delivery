# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Whiteflag-on-Fennel.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/471 

**Context**
This milestone finishes the initial version of our Rust port of the Whiteflag protocol, and creates complete application integrations for Whiteflag and IPFS. At this point, the platform is essentially in an early-alpha release state.

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE | Unlicense - Ok | 
| 0b. | Documentation | <ul><li>[ ] </li></ul>  | https://fennel-labs.notion.site/Grant-2-d6f134a5b65f4556823ae648e3b68e68, https://github.com/fennelLabs/Fennel-Protocol/wiki, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://fennellabs.com/fennel-lib/fennel_lib/index.html, https://fennellabs.com/fennel-cli/fennel_cli/, https://fennellabs.com/fennel-server/fennel_server/ | Needs improvement. | 
| 0c.  | Testing Guide | <ul><li>[ ] </li></ul>  | https://fennel-labs.notion.site/Grant-2-Milestone-2-Testing-Guide-7c92ba9123c04f0cac7d00cbffc04a3b, https://fennel-labs.notion.site/Grant-2-Milestone-1-Testing-Guide-76b12a5e6e1149c2998d3e723cbaeb09, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-3 | Needs improvement. | 
| 0d. | Docker | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile, https://github.com/fennelLabs/fennel-lib/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-cli/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-server/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile | Fennel-Protocol and CLI containers run tests instead of the application. | 
| 0e. | Article | <ul><li>[x] </li></ul>  | https://fennel-labs.notion.site/Whiteflag-on-Fennel-Protocol-f051965e700049fea452a3a5c1ed0f02 | Ok |
| 1. | Implementation of Whiteflag Protocol | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/whiteflag-rust | Minor improvements. Upate: Some question not answered yet. |
| 2. | Whiteflag Integration - fennel-cli | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/fennel-cli/blob/60128a34a3a1a68cc4ba2f541e8f5d75fdc2eda9/src/fennel_rpc/mod.rs#L143 | Needs an example for testing. App failing. |
| 3. | IPFS Support | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/fennel-lib/blob/master/src/ipfs/mod.rs, https://github.com/fennelLabs/fennel-app/commit/37cc301f03ebd7eef83b589385fe566bfa777aa2#diff-299b25d6371add360dcaf87c6a21570765a9f5af351dfd10bb9ccaba5d5c8b6a |  Needs an example for testing. App failing. |

**Additional Information**
Work from our last grant is included in the links provided in this submission. This is for full reference on all cooperating features, as most of our repositories were modified in some way to adjust for new architecture decisions.

## General Notes

### White-Flag Rust

The instructions for running the tests are not correct in Readme.md file:
Those files do not exists:
```
$ ./scripts/setup.sh
$ ./scripts/build-test.sh
```


Please fix. Update: Ok.

In the grant application, the specification of the Implementation of Whiteflag Protocol deliverable says: “This deliverable encompasses achieving full testing parity with github.com/WhiteflagProtocol/whiteflag-java and will therefore be a large portion of the time taken by this grant project.”.

Whiteflag-java has 83 automated test cases while whiteflag-rust has 91 test cases. Regarding testing coverage, whiteflag-java has 79% of the source code line covered while whiteflag-rust has 85.60%. This is good.

Sum of test cases of modules for whiteflag-rust
21 + 1 + 3 + 9 + 12 + 26 + 4 + 15 = 91 test cases.

In wf_account module no test ran, although it seems to have a test_impl.rs file. There is some special way of running those tests? Update: File renamed. 

Regarding coverage:
 In the file whiteflag-rust/wf_field/src/types.rs, there are some types not covered by automated tests, they were implemented and tested? Update: Not answered yet.

In the file whiteflag-rust/wf_crypto/src/encryption_method.rs, there are some encryption methods not covered by automated tests, they were tested? Update: Not answered yet.

Most of the modules are with good coverage. Only wf_validation and wf_account are with less than 70% of coverage. Update: is still the same. 

Assuming that wf-java and wf-rust are equivalent, did you consider using wf-java as a test oracle for wf-rust? When we have equivalent implementations is possible to use automated (or semi-automated) input generation and comparison of results for more robust testing. Any effort in this sense was performed?

Update: It was answered in the PR that were done.


cargo clipply (static analysis)


```
warning: `wf_common` (lib) generated 15 warnings
warning: `wf_codec` (lib) generated 3 warnings
warning: `wf_field` (lib) generated 26 warnings (7 duplicates)
warning: `wf_buffer` (lib) generated 8 warnings
warning: `wf_crypto` (lib) generated 10 warnings
warning: `wf_parser` (lib) generated 1 warning
warning: `wf_auth` (lib) generated 1 warning
warning: `wf_account` (lib) generated 2 warnings
warning: `fennel-whiteflag` (lib) generated 12 warnings
```

Please review. Update: all fixed.

Code documentation:

There are some undocumented methods, parameters, and return values. Please improve documentation coverage.

Update: Improved. 


### Whiteflag Integration – fennel-cli

The testing guide for M2 is unclear on how to run the system (all parts of it) (https://fennel-labs.notion.site/Grant-2-Milestone-2-Testing-Guide-7c92ba9123c04f0cac7d00cbffc04a3b).

As this link was also provided (https://fennel-labs.notion.site/Grant-2-Milestone-1-Testing-Guide-76b12a5e6e1149c2998d3e723cbaeb09), I supposed that was the instructions to run the node and other parts of the system to be able to test it. However, when trying to run Fenel-Protocol the following error was presented (with and without docker):

```
Compiling trust-dns-resolver v0.20.4
error[E0433]: failed to resolve: could not find `parse_quote_spanned` in `syn`
--> /usr/local/cargo/registry/src/github.com-1ecc6299db9ec823/wasm-bindgen-macro-support-0.2.83/src/parser.rs:110:38
|
110 | syn::parse_quote_spanned!(*span => $name)
| ^^^^^^^^^^^^^^^^^^^ could not find `parse_quote_spanned` in `syn`
...
215 | attrgen!(methods);
| ----------------- in this macro invocation
|
= note: this error originates in the macro `methods` which comes from the expansion of the macro `attrgen` (in Nightly builds, run with -Z macro-backtrace for more info)

Compiling mio-extras v2.0.6
For more information about this error, try `rustc --explain E0433`.
```

This error prevented me continue testing the system. Please provide a proper fix and clear instructions for running it. 

Update: The testing guide don't seem to have been updated. 

In the testing guide (milestone 1, which is needed for running milestone 2), for the first two projects there are missing the names or links for the repositories that should be used for run the commands. I assumed that the first one was Fennel-Protocol and the second fennel-api.

Update: The system was updated and the new results of testing are presented bellow:

### Fennel Protocol

Runs ok without docker. With docker we have the same error as before:

![image](https://user-images.githubusercontent.com/112647953/192286190-f3f54aa3-ea74-4b2b-a44d-3fff8d969e4a.png)

Update: The error was fixed. Howerver the container does not actually run the system but instead run the tests of it. The expected behavior of that should run the system, expose ports, etc. This is also the behavior for the containers of fennel-cli project.

### Fennel API

Runs ok with docker. 

### Fennel CLI

Runs ok with docker the first time I ran only. These two warnings were presented and seem to be easy to fix:

 ```
warning: unused variable: `sender_identity`
dev_1  |    --> src/client/mod.rs:225:13
dev_1  |     |
dev_1  | 225 |         let sender_identity = retrieve_identity(Arc::clone(&identity_db), message.sender_id);
dev_1  |     |             ^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_sender_identity`
dev_1  |     |
dev_1  |     = note: `#[warn(unused_variables)]` on by default
dev_1  | 
dev_1  | warning: `fennel-cli` (bin "fennel-cli") generated 1 warning
dev_1  |     Finished dev [unoptimized + debuginfo] target(s) in 0.31s
dev_1  |     Finished dev [unoptimized + debuginfo] target(s) in 0.30s
dev_1  | warning: unused variable: `sender_identity`
dev_1  |    --> src/client/mod.rs:225:13
dev_1  |     |
dev_1  | 225 |         let sender_identity = retrieve_identity(Arc::clone(&identity_db), message.sender_id);
dev_1  |     |             ^^^^^^^^^^^^^^^ help: if this is intentional, prefix it with an underscore: `_sender_identity`
dev_1  |     |
dev_1  |     = note: `#[warn(unused_variables)]` on by default
dev_1  | 
dev_1  | warning: `fennel-cli` (bin "fennel-cli" test) generated 1 warning
dev_1  |     Finished test [unoptimized + debuginfo] target(s) in 0.27s
dev_1  |      Running unittests src/main.rs (target/debug/deps/fennel_cli-4facbf9502bf5d33)
 ```

The second time I ran and after the errors bellow were presented:

```
running 7 tests
dev_1  | test client::tests::test_diffie_hellman ... ok
dev_1  | test client::tests::test_handle_backlog_decrypt ... FAILED
dev_1  | test client::tests::test_handle_backlog_decrypt_with_dh ... FAILED
dev_1  | test client::tests::test_handle_encrypt_and_decrypt ... ok
dev_1  | test client::tests::test_handle_sign_and_verify ... ok
dev_1  | test client::tests::test_pack_message ... ok
dev_1  | test client::tests::test_unpack_message ... ok
dev_1  | 
dev_1  | failures:
dev_1  | 
dev_1  | ---- client::tests::test_handle_backlog_decrypt stdout ----
dev_1  | thread 'main' panicked at 'assertion failed: `(left == right)`
dev_1  |   left: `[49, 136, 216, 58, 230, 135, 240, 41, 190, 206, 222, 13, 242, 145, 72, 46, 225, 82, 37, 134, 247, 146, 66, 84, 204, 155, 180, 58, 91, 189, 170, 69, 175, 41, 94, 235, 122, 92, 19, 77, 8, 40, 125, 83, 193, 21, 103, 97, 101, 136, 28, 199, 174, 30, 56, 87, 41, 192, 254, 30, 76, 224, 68, 156, 45, 58, 98, 178, 172, 150, 248, 58, 191, 75, 137, 249, 254, 167, 208, 183, 91, 22, 138, 179, 163, 167, 225, 33, 55, 44, 110, 181, 220, 179, 43, 7, 156, 72, 196, 196, 98, 113, 172, 68, 228, 182, 72, 141, 190, 232, 34, 136, 73, 99, 40, 86, 42, 132, 250, 238, 50, 107, 194, 171, 67, 147, 195, 168, 182, 22, 207, 140, 210, 110, 68, 106, 172, 200, 26, 61, 91, 78, 211, 188, 173, 148, 225, 100, 221, 162, 150, 68, 236, 75, 53, 85, 48, 22, 161, 89, 19, 0, 22, 4, 190, 237, 214, 45, 40, 230, 4, 176, 137, 140, 112, 205, 171, 32, 59, 94, 19, 7, 119, 59, 3, 227, 187, 164, 216, 215, 28, 125, 148, 66, 150, 182, 32, 4, 36, 49, 133, 137, 82, 15, 181, 98, 36, 9, 49, 79, 121, 232, 107, 177, 7, 63, 202, 191, 7, 207, 254, 177, 153, 183, 107, 30, 127, 83, 217, 235, 55, 197, 124, 188, 112, 238, 155, 64, 40, 79, 20, 179, 203, 25, 110, 24, 251, 144, 234, 95, 240, 81, 51, 148, 67, 158, 101, 219, 0, 64, 64, 169, 68, 125, 171, 113, 189, 225, 252, 224, 57, 9, 233, 93, 137, 192, 130, 65, 50, 5, 54, 172, 217, 107, 92, 57, 220, 2, 161, 195, 186, 38, 44, 19, 42, 230, 34, 157, 92, 203, 86, 210, 233, 120, 137, 234, 12, 102, 181, 81, 210, 143, 244, 84, 221, 177, 57, 132, 203, 10, 217, 133, 14, 226, 242, 151, 127, 241, 155, 113, 111, 166, 253, 43, 241, 182, 10, 5, 19, 236, 240, 185, 172, 20, 72, 32, 168, 150, 179, 230, 119, 178, 20, 190, 225, 7, 9, 75, 165, 215, 194, 178, 93, 133, 109, 194, 117, 3, 99, 14, 38, 250, 129, 128, 176, 204, 131, 157, 250, 25, 176, 230, 152, 107, 9, 237, 156, 138, 89, 172, 13, 113, 2, 34, 226, 144, 130, 139, 220, 168, 169, 78, 210, 32, 76, 66, 187, 68, 28, 34, 93, 34, 111, 221, 185, 37, 67, 35, 35, 88, 205, 112, 92, 101, 184, 148, 136, 191, 185, 8, 15, 139, 99, 96, 137, 145, 206, 171, 139, 128, 62, 254, 224, 80, 176, 112, 197, 141, 150, 41, 234, 109, 190, 63, 92, 192, 115, 162, 150, 121, 97, 28, 106, 157, 230, 62, 203, 35, 11, 120, 31, 32, 200, 144, 236, 204, 31, 214, 200, 40, 93, 151, 75, 66, 181, 37, 135, 119, 50, 179, 138, 76, 197, 192, 122, 27, 123, 187, 37, 241, 64, 6, 67, 248, 231, 102, 8, 254, 123, 121, 50, 75]`,
dev_1  |  right: `[90, 81, 248, 0, 53, 39, 208, 251, 81, 50, 40, 83, 45, 14, 19, 180, 194, 178, 41, 101, 61, 204, 148, 197, 234, 254, 45, 195, 245, 40, 106, 65, 115, 122, 115, 124, 94, 225, 165, 225, 206, 115, 11, 97, 166, 24, 222, 0, 157, 204, 161, 241, 161, 154, 25, 201, 177, 38, 95, 213, 75, 151, 23, 125, 139, 66, 65, 104, 224, 75, 162, 71, 32, 78, 227, 132, 33, 154, 171, 70, 240, 152, 129, 214, 109, 105, 6, 228, 178, 8, 81, 93, 4, 200, 59, 15, 156, 95, 56, 19, 69, 26, 118, 210, 173, 209, 169, 39, 245, 141, 202, 23, 92, 109, 162, 90, 79, 42, 168, 164, 134, 229, 173, 135, 135, 121, 175, 114, 163, 138, 44, 28, 146, 116, 121, 170, 225, 230, 53, 125, 15, 173, 113, 113, 231, 170, 18, 133, 62, 6, 129, 226, 15, 192, 234, 252, 63, 191, 237, 17, 101, 167, 159, 90, 98, 253, 101, 238, 36, 37, 239, 214, 156, 137, 10, 87, 65, 17, 73, 11, 107, 104, 213, 140, 184, 36, 206, 209, 240, 192, 137, 46, 238, 180, 156, 37, 210, 39, 154, 157, 214, 24, 188, 33, 103, 127, 67, 189, 212, 230, 83, 129, 102, 125, 64, 173, 99, 185, 255, 149, 227, 153, 255, 7, 141, 32, 152, 16, 126, 87, 143, 217, 189, 107, 68, 46, 230, 118, 67, 50, 52, 98, 121, 219, 233, 239, 98, 212, 126, 173, 63, 20, 186, 220, 211, 240, 224, 20, 140, 179, 14, 141, 179, 39, 104, 184, 42, 124, 179, 207, 169, 21, 135, 246, 77, 51, 49, 103, 146, 5, 43, 219, 81, 84, 217, 1, 93, 132, 26, 187, 103, 236, 96, 13, 139, 10, 157, 231, 250, 196, 11, 142, 7, 92, 120, 187, 52, 92, 63, 206, 34, 245, 51, 42, 117, 88, 212, 138, 117, 40, 47, 252, 180, 179, 191, 143, 94, 17, 23, 227, 225, 16, 24, 70, 212, 36, 95, 201, 41, 25, 206, 146, 154, 167, 65, 67, 107, 133, 252, 175, 80, 254, 183, 12, 77, 228, 201, 188, 112, 14, 99, 124, 29, 103, 206, 98, 232, 185, 230, 61, 64, 189, 206, 133, 141, 153, 215, 176, 77, 105, 177, 39, 213, 11, 227, 184, 12, 231, 161, 88, 199, 178, 114, 185, 176, 82, 17, 247, 17, 90, 32, 150, 126, 18, 42, 79, 223, 192, 68, 108, 201, 105, 132, 191, 42, 249, 64, 130, 64, 60, 170, 227, 40, 4, 11, 240, 230, 152, 58, 195, 232, 216, 104, 210, 8, 166, 185, 145, 212, 112, 0, 174, 136, 20, 251, 180, 204, 133, 100, 42, 82, 234, 252, 89, 57, 190, 247, 93, 186, 159, 44, 82, 28, 160, 128, 56, 141, 177, 170, 110, 61, 247, 139, 228, 56, 238, 247, 51, 33, 40, 63, 82, 35, 135, 118, 230, 30, 213, 253, 144, 245, 255, 203, 60, 214, 232, 212, 137, 87, 52, 149, 233, 220, 182, 174, 58, 147, 206, 0, 42, 86, 69]`', src/client/tests.rs:127:5
dev_1  | note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
dev_1  | 
dev_1  | ---- client::tests::test_handle_backlog_decrypt_with_dh stdout ----
dev_1  | 512
dev_1  | thread 'main' panicked at 'assertion failed: `(left == right)`
dev_1  |   left: `[48, 0, 0, 0, 0, 0, 0, 0, 183, 150, 79, 50, 119, 190, 106, 168, 146, 253, 168, 75, 120, 57, 19, 18, 42, 164, 98, 81, 249, 29, 44, 143, 31, 93, 180, 41, 125, 22, 133, 13, 32, 60, 231, 233, 94, 145, 60, 230, 11, 237, 200, 86, 46, 212, 137, 80, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`,
dev_1  |  right: `[48, 0, 0, 0, 0, 0, 0, 0, 78, 4, 87, 241, 153, 128, 163, 170, 162, 44, 76, 183, 10, 169, 246, 66, 217, 179, 97, 225, 34, 252, 196, 185, 110, 57, 88, 95, 223, 84, 199, 120, 6, 139, 20, 61, 240, 234, 222, 114, 11, 27, 246, 65, 187, 213, 151, 141, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]`', src/client/tests.rs:234:5
```

update: It worked now.

### Fennel App

The error bellow was presented with and without docker. This error is preventing me to move forward with the evaluation.

```
 Server running at http://localhost:3000
dev_1   | Building...
dev_1   | console:
dev_1   | console: %s 🌼 daisyUI components 2.24.0  https://github.com/saadeghi/daisyui
dev_1   | console: %s ✔︎ Including:  base, components, themes[29], utilities
dev_1   | console:
dev_1   | 🚨 Build failed.
dev_1   | 
dev_1   | @parcel/core: Failed to resolve './views/pages/NewFeedMessage' from 
dev_1   | './src/FennelAppRouter.jsx'
dev_1   | 
dev_1   |   /app/src/FennelAppRouter.jsx:15:28
dev_1   |     14 | import BackupKey from './views/pages/BackupKey';
dev_1   |   > 15 | import NewFeedMessage from './views/pages/NewFeedMessage';
dev_1   |   >    |                            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
dev_1   |     16 | import GenerateWallet from './views/pages/GenerateWallet';
dev_1   |     17 | import RestoreWallet from './views/pages/RestoreWallet';
dev_1   | 
dev_1   | @parcel/resolver-default: Cannot load file './views/pages/NewFeedMessage' in 
dev_1   | './src'.
dev_1   | 💡 Did you mean './views/pages/NewFeedMessage'?
dev_1   | 💡 Did you mean './views/pages/NewMessage'?
```
update: I was able to run it, however I needed to run the command bellow in order to it works:

`npm install --save-dev @parcel/css`

Please fix the package.json and package-lock.json to include this missing dependency. 

### Running the application

I was able to run the application. However, it cannot connect to the wallet and the error bellow was presented by clicking in the Open RPC button. The rpc server was runnning locally when this error was presented. 

Furthermore, can you provide a complete example for testing the Milestone 2 using the App?

![image](https://user-images.githubusercontent.com/112647953/192579909-16310163-812b-4fc1-a06e-461a99079fd8.png)


![image](https://user-images.githubusercontent.com/112647953/192579539-7b9d4deb-86f5-42f8-a524-87b9a45b9e45.png)

![image](https://user-images.githubusercontent.com/112647953/192579639-721d1114-ed26-49ea-b9d2-f30b386ab91c.png)


