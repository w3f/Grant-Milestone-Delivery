# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subalfred.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/hack-ink/subalfred/blob/main/LICENSE) | GPLv3 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> || Documentation not accessible under docs.rs ("subalfred-0.9.0-rc19 is not a library.") as provided in the delivery. Minimal user documentation.
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
