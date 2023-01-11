# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subalfred.md
- **Milestone:** 2
- **Evaluation by:** Alxs, Keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/hack-ink/subalfred/blob/main/LICENSE) | GPLv3 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> || Minimal user documentation.
| 0c. | Testing guide | <ul><li>[ ] </li></ul> || One test (`github::test::track_update_should_work`) doesn't work, probably because it depends on the `GITHUB_TOKEN` local variable.
| 1. | License | <ul><li>[x] </li></ul> | 
| 2. | Core, CLI: track-updates | <ul><li>[ ] </li></ul> | [code](https://github.com/hack-ink/subalfred/blob/main/bin/subalfred/src/command/track_update.rs) | See comments below
| 3. | Core, CLI: update-subdeps | <ul><li>[ ] </li></ul> | [code](https://github.com/hack-ink/subalfred/blob/main/bin/subalfred/src/command/workspace/update_deps.rs) | See comments below
| 4. | Releases | <ul><li>[x] </li></ul> | [GH](https://github.com/hack-ink/subalfred/releases), [crates.io](https://crates.io/crates/subalfred)

## General Notes

Installing with `cargo install subalfred` fails with

```
error: could not find `subalfred` in registry `crates-io` with version `*`
```
which is probably due to no non-RC version having been released yet.

Unclear how the `track-updates` command "lists the companions that you need to do from substrate/cumulus/frontier/parity-bridges-substrate" as described in the application.

Documentation is very sparse, for example in the case of the `workspace` command only the tool's CLI help is replicaded in the user guide.
Mismatched section [headers](https://subalfred.hack.ink/user/cli/workspace.html#command-workspace-update-1), no explanation of what the different options are (what options can I provide to the `--targets` flag) or the concepts used in the tool (what exactly is a workspace? what are workspace "members"?).

### General Notes v2

`cargo install subalfred` still fails, but the team noted that they will fix the rc version for the next milestone.

I am able to run commands such as `subalfred check`. One unit test still fails due to the `GITHUB_TOKEN` variable. Some docs were updated. I agree with my colleague that the documentation could improve. The "episodes" help, but it would be nice to see an introductory paragraph as well for each page. 

**Tests**

One unit test still fails:

```
running 15 tests
test ss58::test::all_should_work ... ok
test system::test::swap_file_path_should_work ... ok
test ss58::test::recover_public_key_should_fail ... ok
test cargo::test::align_version_should_work ... ok
test ss58::test::recover_public_key_should_work ... ok
test ss58::test::of_should_fail ... ok
test ss58::test::of_should_work ... ok
test state::test::state_insert_should_work ... ok
test cargo::test::replace_member_versions_should_work ... ok
test cargo::test::replace_target_versions_should_work ... ok
test github::test::track_updates_should_work ... FAILED
test check::features::test::check_mock_runtime_should_work ... ok
test cargo::test::members_manifests_should_work ... ok
test jsonrpc::http::test::send_jsonrpc_should_work ... ok
test node::test::runtime_version_should_work ... ok

failures:

---- github::test::track_updates_should_work stdout ----
thread 'github::test::track_updates_should_work' panicked at 'called `Result::unwrap()` on an `Err` value: Github(NoTokenFound(NotPresent))', lib/core/src/github/test.rs:7:94
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    github::test::track_updates_should_work

test result: FAILED. 14 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.75s

error: test failed, to rerun pass `-p subalfred-core --lib`
```
