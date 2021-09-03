# Evaluation

* **Status:** In progress
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/yatima.md
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable               | Accepted               | Link                                                                 | Evaluation Notes |
|--------|---------------------------|------------------------|----------------------------------------------------------------------|------------------|
| 0a.    | License                   | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/yatima-inc/sp-im/blob/main/LICENSE)     |                  |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | [README](https://github.com/yatima-inc/sp-im/blob/main/README.md)    |                  |
| 0c.    | Testing Guide             | <ul><li>[x] </li></ul> | [README](https://github.com/yatima-inc/sp-im/blob/main/README.md)    |                  |
| 0d.    | Nix                       | <ul><li>[x] </li></ul> | [flake.nix](https://github.com/yatima-inc/sp-im/blob/main/flake.nix) |                  |
| 1.     | Substrate module: `sp-im` | <ul><li>[x] </li></ul> | [sp-im](https://github.com/yatima-inc/sp-im)                         |                  |

### General notes

After diffing the relevant files against the repo they were forked from (& a specific tag for [conslist](https://github.com/bodil/im-rs/blob/10.2.0/src/conslist.rs)), I started to doubt the depth of the integration done for substrate compatibility, despite seemingly long commit history and numerous structural changes.

Specifically, the changes introduced are limited to:
- formatting fixes
- inclusion of the quickcheck mod for testing (covered by deliverable 0c.)
- file re-structure (e.g. [`src/vector`](https://github.com/yatima-inc/sp-im/blob/main/src/vector.rs) is just the [`mod.rs`](https://github.com/bodil/im-rs/blob/master/src/vector/mod.rs), reformatted)
- changes to docs
- replacing `std` with `sp_std`
- removing some lib components

See for example the attached diff of `conslist.rs` by running: `git checkout 10.2.0; git diff -w src/conslist.rs ../sp-im/src/conslist.rs` from within the [`im-rs`](https://github.com/bodil/im-rs/) repo: [diff](./support_docs/yatima_2_conslist.diff).

Nevertheless, I am accepting this milestone as it's mostly consistent with the discussion under [the original application PR](https://github.com/w3f/Grants-Program/pull/463#discussion_r660176761), although perhaps the deliverables should be more explicitly stated next time around for clarity.
