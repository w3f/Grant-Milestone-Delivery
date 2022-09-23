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
| 0d. | Docker | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile, https://github.com/fennelLabs/fennel-lib/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-cli/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-server/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile, https://github.com/fennelLabs/fennel-api/blob/master/Dockerfile | Fennel-Protocol failed. Other not evaluated yet. | 
| 0e. | Article | <ul><li>[x] </li></ul>  | https://fennel-labs.notion.site/Whiteflag-on-Fennel-Protocol-f051965e700049fea452a3a5c1ed0f02 | Ok |
| 1. | Implementation of Whiteflag Protocol | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/whiteflag-rust | Minor improvements. |
| 2. | Whiteflag Integration - fennel-cli | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/fennel-cli/blob/60128a34a3a1a68cc4ba2f541e8f5d75fdc2eda9/src/fennel_rpc/mod.rs#L143 | Fennel-Protocol build fail. Not evaluated yet. |
| 3. | IPFS Support | <ul><li>[ ] </li></ul>  | https://github.com/fennelLabs/fennel-lib/blob/master/src/ipfs/mod.rs, https://github.com/fennelLabs/fennel-app/commit/37cc301f03ebd7eef83b589385fe566bfa777aa2#diff-299b25d6371add360dcaf87c6a21570765a9f5af351dfd10bb9ccaba5d5c8b6a | Fennel-Protocol build fail. Not evaluated yet. |

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


Please fix.

In the grant application, the specification of the Implementation of Whiteflag Protocol deliverable says: “This deliverable encompasses achieving full testing parity with github.com/WhiteflagProtocol/whiteflag-java and will therefore be a large portion of the time taken by this grant project.”.

Whiteflag-java has 83 automated test cases while whiteflag-rust has 91 test cases. Regarding testing coverage, whiteflag-java has 79% of the source code line covered while whiteflag-rust has 85.60%. This is good.

Sum of test cases of modules for whiteflag-rust
21 + 1 + 3 + 9 + 12 + 26 + 4 + 15 = 91 test cases.

In wf_account module no test ran, although it seems to have a test_impl.rs file. There is some special way of running those tests?

Regarding coverage:
 In the file whiteflag-rust/wf_field/src/types.rs, there are some types not covered by automated tests, they were implemented and tested?

In the file whiteflag-rust/wf_crypto/src/encryption_method.rs, there are some encryption methods not covered by automated tests, they were tested?

Most of the modules are with good coverage. Only wf_validation and wf_account are with less than 70% of coverage.

Assuming that wf-java and wf-rust are equivalent, did you consider using wf-java as a test oracle for wf-rust? When we have equivalent implementations is possible to use automated (or semi-automated) input generation and comparison of results for more robust testing. Any effort in this sense was performed?

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


Please review.

Code documentation:

There are some undocumented methods, parameters, and return values. Please improve documentation coverage.


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
