# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate-tutorials.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** Link

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/blob/main/LICENSE | Apache 2.0 |
| 0b. | Documentation |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials | |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials | |
| 0d. | Docker |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/blob/main/run_one_exercise_tests.sh | The bash script was not working for me (see general notes). In any case, I found it easier to just run `cargo test` in the directory of each exercise's `Cargo.toml`, but I would still like to see this working. |
| 0e. | Article |<ul><li>[x] </li></ul>| https://medium.com/@timothedelabrouille/10efa2896ed2 | |
| 1. | Create `exercise` branch |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials | |  
| 2. | Exercise `pallet testing` |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex00-writing-tests | The difficulty spike is pretty large for this first exercise. While there are useful links in the README, it's quite a lot to go through, and it's very difficult to figure out how implement the tests without looking at examples or solutions. Some of the other exercices do a better job of first giving an example of how a certain implementation may work. |
| 3. | Exercise `fungible token` |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex01-fungible-token | |  
| 4. | Exercise `nft` |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex03-nft | |
| 5. | Exercise `marketplace` |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex04-marketplace | |  
| 6. | Exercise `runtime` |<ul><li>[ ] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/tree/main/exercises/ex02-runtime | |
| 7. | Branch `solutions` |<ul><li>[x] </li></ul>| https://github.com/rusty-crewmates/substrate-tutorials/tree/solutions | |

<!-- Ideally all links inside the above table should include the commit hash, which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license. -->

## General Notes

In general, there are quite a bit of spelling & grammatical errors throughout the exercises. The code itself is good overall, but the comments and READMEs could use some proof reading (you could consider using tools like Grammarly, which has a decent free version).

It would also be useful to include a section in the introduction talking about who this tutorial is aimed at (notably that a solid grasp of Rust is required).

Overall though, the pacing of the exercices after the initial difficuly is very good and approachable. 

### Docker 

I get the following error trying to run `./run_one_exercise_tests.sh` - is the `substrate-test-exercise` container public?

```
failed to solve with frontend dockerfile.v0: failed to create LLB definition: unexpected status code [manifests latest]: 401 Unauthorized
Unable to find image 'substrate-test-exercise:latest' locally
docker: Error response from daemon: pull access denied for substrate-test-exercise, repository does not exist or may require 'docker login': denied: requested access to the resource is denied.
```

### ex00-writing-tests

Ideally, there should be no compilation errors running `cargo test` the first time (only the tests should fail). This way the user can implement tests one at a time.

This section in the `tests` directory was causing issues.
```rust
todo!(
	"Make another test to check the behaviour in the case where an error occured in the flip_function()."
);
```

This exercise could also use more explanation as to what the pallet actually does, and what the tests should actually be testing for. Also see my comment in the table above.

### ex01-fungible-token

`Error::<T>::Unknown` sounds kind of like an unknown error occured, rather than the asset id being unknown, so you might want to change it to something like `UnknownAssetID`.

There is also a typo in `set_metadata`, the function should deposit a `MetaDataSet` event, not a `Created` event - by the way, is it possible to actually test that these events are actually deposited?

Overall the pace of this exercice was much better, giving examples before asking the user to implement their own functions.

### ex03-nft

Some `burn` (burn::ok_saturating, burn::must_exist) tests depend on `transfer` being implemented, which can be confusing, since the burn function comes before the transfer function.

There's also the same issue as before with `Error::<T>Unknown`.

### ex04-marketplace

The README includes mention of `runtime/src/lib.rs`. It should be specified that this is part of `substrate-node-template`. Additionally, the README seems outdated: users need to implement `Sellable` in `marketplace-nfts/lib.rs` first, and `support/lib.rs` does not exist. It should also specify that `marketplace-nfts` is the pallet being coupled to.

It's also a bit unclear what the trait function `transfer` in `Sellable` should return, you shouldn't need to guess that it refers to the amount transfered (although it isn't tested so the user could just pass an `u128`).

"Ressource" is spelt incorrectly in the code, it should be Resource.

In `loosely-coupled-marketplace`, the `buy` function: there's no `todo!` saying that currency (as well as assets) should also be transferred.

