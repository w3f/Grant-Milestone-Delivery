# Evaluation

- **Status:** in progress
- **Application Document:** [polkadot-runtime-releaser](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-runtime-releaser.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [GPL-3.0](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/LICENSE) and [GPL-3.0](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/blob/main/LICENSE)         |       |
|    0b. | Documentation          | <ul><li>[x] </li></ul>| [README.md](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/README.md) and [README.md](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/blob/main/README.md) |  nice examples, overall good inline docs    |
|    0c. | Testing guide          |<ul><li>[x] </li></ul>|                                                                                                       |  good workshop     |
|     1. | Docker image           |<ul><li>[x] </li></ul>| [Source](https://github.com/hack-ink/polkadot-runtime-releaser/tree/main/docker) and [pre-built](https://ghcr.io/hack-ink/polkadot-runtime-releaser)                                       |  builds     |
|     2. | Try-Runtime CI         |<ul><li>[x] </li></ul>| [GitHub Action](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/action/try-runtime)                                                                                        |  also see [here](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/pull/3#issuecomment-2563893012)      |
|     3. | Release CI             |<ul><li>[x] </li></ul>| [GitHub Action](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/blob/main/.github/workflows/release.yml)                                                                    |  nice   |
|     4. | WASM override tool     |<ul><li>[x] </li></ul>| [Source](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/cli/src/cli/build.rs)                                     |   ok   |
|     5. | WASM override CI       |<ul><li>[x] </li></ul>| [GitHub Action](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/action/override)                                                                                           |   [successfully executed here](https://github.com/hack-ink/polkadot-runtime-releaser-workshop/actions/runs/12518574791)   |
|     6. | WASM info inspect tool |<ul><li>[x] </li></ul>| [Source](https://github.com/hack-ink/polkadot-runtime-releaser/blob/main/cli/src/cli/inspect.rs)                                    |   ok    |
|     7. | Releases               |<ul><li>[x] </li></ul>| [GitHub](https://github.com/hack-ink/polkadot-runtime-releaser/releases) and [crates.io](https://crates.io/crates/polkadot-runtime-releaser-cli)                                           |   ok  |
|     8. | Workshop               |<ul><li>[x] </li></ul>| [GitHub repository](https://github.com/hack-ink/polkadot-runtime-releaser-workshop)                                                                                                        |    nice   |


## General Notes
Thanks for submitting your delivery. I appreciate you setting up the workshop in order to see this working in action. 

The inline documentation is very helpful. 

Even though you are already doing it, I think it would be helpful to extend the documentation about the motives on why to override the runtime in the first place.

So if at all I think this [section](https://github.com/hack-ink/polkadot-runtime-releaser-workshop?tab=readme-ov-file#override) could be more explicit.

Solid delivery!



## Tests

````
running 1 test
test util::ser_should_work ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running unittests src/lib.rs (target/debug/deps/polkadot_runtime_releaser_lib-097e234643976933)

running 5 tests
test docker::to_cli_args_should_work ... ok
test runtime::load_should_work ... ok
test rust::toolchain_config_of_should_work ... ok
test hasher::hasher_should_work ... ok
test wasmer::test::wasmer_should_work ... ok

test result: ok. 5 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 20.52s
````

docker image builds successfully
````
polkadot-runtime-releaser/docker$ sudo docker build .
[+] Building 49.7s (10/10) FINISHED             
````







