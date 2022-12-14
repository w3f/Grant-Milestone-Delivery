# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE-MIT](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/LICENSE-MIT) | The code that was contributed by the grantee is MIT licensed, see file. They reused code from Parity which is why there are also GPL3 and APACHE2 license files. |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Testing Guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [Testing Guide](https://docs.google.com/document/d/1ntrT6bafTD2LfXUG9QLxOieogXELn9icN1y__EGfZ98/edit#), [identity tests](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/identity/src/lib.rs#L80), [LLM tests (empty)](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/llm/src/tests.rs), [elections tests](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/elections-phragmen/src/lib.rs#L1149), [democracy tests](https://github.com/liberland/liberland_substrate/tree/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/democracy/src/tests) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | Docker | <ul><li>[ ] </li></ul> | [published Docker img](https://hub.docker.com/r/laissezfaire/liberland-node) | Currently there are no instructions on how to run and use it. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://docs.google.com/document/d/1ww8PTRofszO2jLbIS0GfavKeOuSILayIKY9KvakIUAc/edit) | - |
| 1. | LLM Pallet | <ul><li>[ ] </li></ul> | XXXX | LLM is a pallet customized to serve custom functionality for onchain Assets managed by the treasury |  
| 2. | Congress Pallet | <ul><li>[ ] </li></ul> | XXXX | We are building a substrate pallet handling a tokenized direct democracy; we test it in limited conditions and then deploy it in the production environment |  
| 3. | Voting with on-chain assets | <ul><li>[ ] </li></ul> | XXXX | We will create a pallet that will be tailored to serve the voting and approval logic for governance for Nation States using on-chain assets to vote.   |  
| 4. | Liberland Identity Pallet | <ul><li>[ ] </li></ul> | XXXX | We set up a substrate pallet that will allow accounts to have different roles. Liberland's on-chain governance is tailored to serve a nation state, therefore we need functionality for users to be citizens, e-residence, assembly members, ministers, and so on. In order to implement user role checks and adopt our chain after <https://github.com/liberland/liberland_substrate/blob/main/docs/liberland/identity.md> |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- There is room for improvement regarding inline comments, both qualitative and quantitative. For example, there are a lot of `TODO`, `FIXME` and `change me` comments and commented legacy code. Also, lots of fields and functions have only sparse or even no comments at all. Feel free to add more comments here. The parity pallets that you're using as part of the same repo are a good starting point, if you're looking for inspiration on how much and comprehensive the documentation should be.
- Keep in mind that good code should document itself as well. This includes appropriate naming of the concepts, a piece of code encapsulates. For example, I was confused to see two separate methods `createllm` and `create_llm` in the llm pallet's code, where the first internally calles the latter:

    ```rust
    /// Create LLM manually plus mint it to the treasury
    #[pallet::weight(10_000)] // change me
    pub fn createllm(origin: OriginFor<T>) -> DispatchResult {
        //	T::AddOrigin::ensure_origin(origin)?;
        ensure_signed(origin.clone())?;
        Self::create_llm(origin)?;

        Ok(())
    }
    ```
- The [docs](https://liberland.github.io/) deployment seems to be broken (Tuesday, 13 December 2022, 23:50 UTC).

### Testing Guide Feedback

- I didn't identify any automated tests in the [LLM pallet](https://github.com/liberland/liberland_substrate/blob/fdcc7b7e2bf27a82420487fcf264ad85a7f0952a/frame/llm/src/tests.rs)
- Instructions for running the automated tests are missing.
- I tried running `cargo test` from the root directory but it failed:

    ```bash
    $ cargo test

    warning: associated function `project_ref` is never used
    --> client/telemetry/src/transport.rs:74:1
    |
    74 | #[pin_project::pin_project]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: `sc-telemetry` (lib) generated 1 warning
    warning: unnecessary lifetime parameter `'a`
    --> primitives/runtime/src/curve.rs:28:28
    |
    28 | pub struct PiecewiseLinear<'a> {
    |                            ^^
    |
    = help: you can use the `'static` lifetime directly, in place of `'a`

    warning: `sp-runtime` (lib) generated 1 warning
    warning: unnecessary lifetime parameter `'a`
    --> frame/support/src/storage/bounded_vec.rs:49:25
    |
    49 | pub struct BoundedSlice<'a, T, S>(&'a [T], PhantomData<S>);
    |                         ^^
    |
    = help: you can use the `'static` lifetime directly, in place of `'a`

    warning: `frame-support` (lib) generated 1 warning
    Compiling sp-npos-elections-solution-type v4.0.0-dev (/home/xxx/repos/liberland_substrate/primitives/npos-elections/solution-type)
    warning: associated function `project_ref` is never used
    --> client/network/src/protocol/notifications/upgrade/collec.rs:87:1
    |
    87 | #[pin_project::pin_project]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: associated function `project_ref` is never used
    --> client/network/src/protocol/notifications/upgrade/notifications.rs:83:1
    |
    83 | #[pin_project::pin_project]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: associated function `project_ref` is never used
    --> client/network/src/protocol/notifications/upgrade/notifications.rs:107:1
        |
    107 | #[pin_project::pin_project]
        | ^^^^^^^^^^^^^^^^^^^^^^^^^^^

    warning: `sc-network` (lib) generated 3 warnings
    warning: associated function `project_ref` is never used
    --> client/service/src/task_manager/prometheus_future.rs:40:1
    |
    40 | #[pin_project::pin_project]
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` on by default

    warning: `sc-service` (lib) generated 1 warning
    warning: use of deprecated associated function `clap::CommandFactory::into_app`: Replaced with `CommandFactory::command
    --> client/cli/src/lib.rs:123:32
        |
    123 |         let app = <Self as IntoApp>::into_app();
        |                                      ^^^^^^^^
        |
        = note: `#[warn(deprecated)]` on by default

    warning: use of deprecated unit variant `clap::AppSettings::PropagateVersion`: Replaced with `Command::propagate_version` and `Command::is_propagate_version_set`
    --> client/cli/src/lib.rs:137:18
        |
    137 |                 AppSettings::PropagateVersion |
        |                              ^^^^^^^^^^^^^^^^

    warning: use of deprecated unit variant `clap::AppSettings::ArgsNegateSubcommands`: Replaced with `Command::args_conflicts_with_subcommands` and `Command::is_args_conflicts_with_subcommands_set`
    --> client/cli/src/lib.rs:138:19
        |
    138 |                     AppSettings::ArgsNegateSubcommands |
        |                                  ^^^^^^^^^^^^^^^^^^^^^

    warning: use of deprecated unit variant `clap::AppSettings::SubcommandsNegateReqs`: Replaced with `Command::subcommand_negates_reqs` and `Command::is_subcommand_negates_reqs_set`
    --> client/cli/src/lib.rs:139:19
        |
    139 |                     AppSettings::SubcommandsNegateReqs,
        |                                  ^^^^^^^^^^^^^^^^^^^^^

    warning: use of deprecated associated function `clap::CommandFactory::into_app`: Replaced with `CommandFactory::command
    --> client/cli/src/lib.rs:168:32
        |
    168 |         let app = <Self as IntoApp>::into_app();
        |                                      ^^^^^^^^

    warning: `sc-cli` (lib) generated 5 warnings
    warning: use of deprecated associated function `clap::Arg::<'help>::require_delimiter`: Replaced with `Arg::require_value_delimiter`
    --> utils/frame/try-runtime/cli/src/lib.rs:461:23
        |
    461 |         #[clap(short, long, require_delimiter = true)]
        |                             ^^^^^^^^^^^^^^^^^
        |
        = note: `#[warn(deprecated)]` on by default

    warning: use of deprecated associated function `clap::Arg::<'help>::require_delimiter`: Replaced with `Arg::require_value_delimiter`
    --> utils/frame/try-runtime/cli/src/lib.rs:469:16
        |
    469 |         #[clap(long, require_delimiter = true)]
        |                      ^^^^^^^^^^^^^^^^^

    warning: `try-runtime-cli` (lib) generated 2 warnings
    warning: use of deprecated associated function `clap::Arg::<'help>::use_delimiter`: Replaced with `Arg::use_value_delimiter`
    --> utils/frame/benchmarking-cli/src/lib.rs:49:23
    |
    49 |     #[clap(long = "low", use_delimiter = true)]
    |                          ^^^^^^^^^^^^^
    |
    = note: `#[warn(deprecated)]` on by default

    warning: use of deprecated associated function `clap::Arg::<'help>::use_delimiter`: Replaced with `Arg::use_value_delimiter`
    --> utils/frame/benchmarking-cli/src/lib.rs:53:24
    |
    53 |     #[clap(long = "high", use_delimiter = true)]
    |                           ^^^^^^^^^^^^^

    warning: `frame-benchmarking-cli` (lib) generated 2 warnings
    warning: use of deprecated associated function `clap::CommandFactory::into_app`: Replaced with `CommandFactory::command
    --> bin/node/cli/build.rs:64:41
    |
    64 |         let _ = generate_to(*shell, &mut Cli::into_app(), "substrate-node", &path);
    |                                               ^^^^^^^^
    |
    = note: `#[warn(deprecated)]` on by default

    warning: `node-cli` (build script) generated 1 warning
    Compiling node-cli v3.0.0-dev (/home/xxx/repos/liberland_substrate/bin/node/cli)
    error: failed to run custom build command for `node-cli v3.0.0-dev (/home/xxx/repos/liberland_substrate/bin/node/cli)`

    Caused by:
    process didn't exit successfully: `/home/xxx/repos/liberland_substrate/target/debug/build/node-cli-ba17a9d0e6dc259a/build-script-build` (exit status: 101)
    --- stderr
    thread 'main' panicked at 'Argument `wasm-method`'s default_value=compiled doesn't match possible values', /home/xxx/.cargo/registry/src/github.com-1ecc6299db9ec823/clap-3.1.18/src/build/debug_asserts.rs:763:21
    note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
    warning: build failed, waiting for other jobs to finish...
    ```