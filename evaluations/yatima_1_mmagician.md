# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/yatima.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                      | Accepted               | Link                                                                   | Evaluation notes                                                                                                                                                                                           |
|--------|----------------------------------|------------------------|------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                          | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/yatima-inc/sp-ipld/blob/main/LICENSE)     |                                                                                                                                                                                                            |
| 0b.    | Documentation                    | <ul><li>[x] </li></ul> | [README](https://github.com/yatima-inc/sp-ipld/blob/main/README.md)    |                                                                                                                                                                                                            |
| 0c.    | Testing Guide                    | <ul><li>[x] </li></ul> | [README](https://github.com/yatima-inc/sp-ipld/blob/main/README.md)    |                                                                                                                                                                                                            |
| 0d.    | Nix                              | <ul><li>[x] </li></ul> | [flake.nix](https://github.com/yatima-inc/sp-ipld/blob/main/flake.nix) |                                                                                                                                                                                                            |
| 1a.    | Substrate module: `sp-ipld`      | <ul><li>[x] </li></ul> | [sp-ipld](https://github.com/yatima-inc/sp-ipld)                       | Not a substrate module, rather a primitive                                                                                                                                                                 |
| 1b.    | `dag-json` feature               | <ul><li>[x] </li></ul> | [sp-ipld/src](https://github.com/yatima-inc/sp-ipld/tree/main/src)     |                                                                                                                                                                                                            |
| 1c.    | Substrate module: `sp-cid`       | <ul><li>[x] </li></ul> | [sp-cid](https://github.com/yatima-inc/sp-cid)                         | As above                                                                                                                                                                                                   |
| 1d.    | Substrate module: `sp-multihash` | <ul><li>[x] </li></ul> | [sp-multihash](https://github.com/yatima-inc/sp-multihash)             | As above                                                                                                                                                                                                   |
| 1e.    | Substrate module: `bytecursor`   | <ul><li>[x] </li></ul> | [bytecursor](https://github.com/yatima-inc/bytecursor)                 | As above. In addition, the codebase has mostly the same functionality as [arkworks std](https://github.com/arkworks-rs/std/blob/master/src/io/mod.rs), it's a shame that arkworks code couldn't be re-used |

### General notes

The deliverables from 1st milestone are just building blocks for future developments.

There was some misunderstanding regarding the naming convention: substrate module isn't exactly the same as a Rust module. 
However, the team has provided an adaptation of the `pallet-template` which could easily have been submitted as a deliverable for 1a-1e, so that's ok. 

Also, most of the Rust modules delivered were "forks" of existing repositories (not marked as fork, but commit history preserved).
One could argue that it's better to properly fork and only then adapt the existing codebase, perhaps try to contribute upstream.
The Yatima team has taken a stance that their current approach fits their needs better - in the end it's subjective so I'm fine with going ahead with this Milestone.
For further details, see the [original thread](https://github.com/w3f/Grant-Milestone-Delivery/pull/239/#issuecomment-893694422).
