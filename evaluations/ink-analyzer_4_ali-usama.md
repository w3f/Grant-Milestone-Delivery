# Evaluation

- **Status:** Accepted
- **Application Document:** [ink! Analyzer](https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer.md) 
- **Milestone:** 4
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable             | Accepted               | Link                                                                                                                                                                              | Evaluation Notes                                |
|--------|-------------------------|------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| 0a.    | Licence                 | <ul><li>[x] </li></ul> | [GPL-v3](https://github.com/ink-analyzer/ink-vscode/blob/master/LICENSE)                                                                                                          | Correct Licence                                 |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | [README](https://github.com/ink-analyzer/ink-vscode/blob/master/README.md)<br/>[Dev/Testing Guide](https://github.com/ink-analyzer/ink-vscode/blob/master/DEVELOPMENT.md)         | Well-written and perfectly explained docs       |
| 0c.    | Testing & Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/ink-analyzer/ink-vscode/blob/master/DEVELOPMENT.md#testing)<br/>[tests](https://github.com/ink-analyzer/ink-vscode/tree/master/src/test/suite) | All test cases passed. Output attached below.   |
| 0d.    | Docker                  | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/ink-analyzer/ink-vscode/blob/master/.devcontainer/devcontainer.json)                                                                              | Dev container building and running successfully |
| 0e.    | Article                 | <ul><li>[x] </li></ul> | [Article](https://analyze.ink/blog/introducing-ink-analyzer)                                                                                                                      | Well-explained article                          |
| 1.     | VS code Extension       | <ul><li>[x] </li></ul> | [Repository](https://github.com/ink-analyzer/ink-vscode)                                                                                                                          | Working as per application                      |


## General Notes

The delivery is well-structured and well-documented, covering all the features in the application. It also contains comprehensive test cases and no issues were found in docker containers as well.
## `yarn test` output
```commandline
Code Actions
    erc20
      ✔ (env=$1|keep_attr="$1") <- #[ink::contract] (156ms)
      ✔ #[ink::contract] (84ms)
      ✔ #[ink(storage)] (111ms)
      ✔ #[ink::storage_item]|#[ink(anonymous|event|storage)] <- pub struct Erc20 (67ms)
      ✔ anonymous <- #[ink(event)] (53ms)
      ✔ #[ink::storage_item]|#[ink(anonymous|event|storage)] <- pub struct Transfer (63ms)
      ✔ default|payable|selector=$1 <- #[ink(constructor)] (78ms)
      ✔ #[ink::test]|#[ink(constructor|default|message|payable|selector=${1:1})] <- pub fn new(total_supply: Balance) (73ms)
      ✔ default|payable|selector=${1:1} <- #[ink(message)] (71ms)
      ✔ #[ink::test]|#[ink(constructor|default|message|payable|selector=${1:1})] <- pub fn total_supply(&self) (65ms)
      ✔ #[ink::test] (46ms)
    trait-flipper
      ✔ (keep_attr="$1"|namespace="${1:my_namespace}") <- #[ink::trait_definition]
      ✔ #[ink::chain_extension]|#[ink::trait_definition] <- pub trait BaseErc20
    psp22-extension
      ✔ #[ink::chain_extension] (87ms)
      ✔ #[ink::chain_extension]|#[ink::trait_definition] <- pub trait Psp22Extension (94ms)
      ✔ default|payable|selector=$1 <- #[ink(extension = 0x3d26)] (67ms)
      ✔ #[ink::test]|#[ink(extension=${1:1}|handle_status=${1:true})] <- fn token_name(asset_id: u32) (92ms)
    non-packed-tuple-struct
      ✔ (derive=${1:true}) <- #[ink::storage_item]
      ✔ #[ink::storage_item]|#[ink(anonymous|event|storage)] <- struct Contract(
  Completions
    erc20
      ✔ ink::contract (59ms)
      ✔ env=|keep_attr= (96ms)
      ✔ storage (86ms)
      ✔ anonymous (77ms)
      ✔ constructor (66ms)
      ✔ constructor -> default|payable|selector= (76ms)
      ✔ message (59ms)
      ✔ message -> default|payable|selector= (63ms)
      ✔ test (68ms)
    trait-flipper
      ✔ trait_definition (63ms)
      ✔ keep_attr=|namespace=
    psp22-extension
      ✔ ink::chain_extension|ink::trait_definition (108ms)
      ✔ #[ink::chain_extension()] (61ms)
      ✔ extension=|handle_status= (63ms)
      ✔ handle_status= (66ms)
    non-packed-tuple-struct
      ✔ ink::storage_item (63ms)
      ✔ derive=
  Diagnostics
    erc20
      ✔ well defined contract (501ms)
      ✔ missing `#[ink::contract]` (526ms)
      ✔ missing `#[ink(storage)]` (505ms)
      ✔ no ink! constructor(s) (522ms)
      ✔ no ink! message(s) (522ms)
    flipper
      ✔ well defined contract (500ms)
      ✔ missing `#[ink::contract]` (528ms)
      ✔ missing `#[ink(storage)]` (505ms)
      ✔ no ink! constructor(s) (525ms)
      ✔ no ink! message(s) (530ms)
    trait-flipper
      ✔ well defined trait definition (501ms)
      ✔ missing `#[ink::trait_definition]` (534ms)
      ✔ no ink! message(s) (531ms)
    psp22-extension
      ✔ well defined chain extension (501ms)
      ✔ missing `#[ink::chain_extension]` (526ms)
      ✔ missing `ErrorCode` type (526ms)
    non-packed-tuple-struct
      ✔ well defined storage item (501ms)
  Hover
    erc20
      ✔ #[ink::contract] (62ms)
      ✔ #[ink::contract(env = E: impl Environment)] (53ms)
      ✔ #[ink::contract(keep_attr = N: string)] (79ms)
      ✔ #[ink(storage)] (74ms)
      ✔ #[ink(event)] (72ms)
      ✔ #[ink(anonymous)] (53ms)
      ✔ #[ink(constructor)] (49ms)
      ✔ #[ink(default)] (67ms)
      ✔ #[ink(message)] (52ms)
      ✔ #[ink(selector = S: u32 | _)] <- #[ink(message, selector=_)] (58ms)
      ✔ #[ink(selector = S: u32 | _)] <- #[ink(message, selector=1)] (68ms)
      ✔ #[ink(selector = S: u32 | _)] <- #[ink(message, selector=0xA)] (93ms)
      ✔ #[ink::test] (60ms)
    trait-flipper
      ✔ #[ink::trait_definition] (47ms)
      ✔ #[ink::trait_definition(keep_attr = N: string)]
      ✔ #[ink::trait_definition(namespace = N: string)]
    psp22-extension
      ✔ #[ink::chain_extension] (53ms)
      ✔ #[ink(extension = N: u32)] (61ms)
      ✔ #[ink(handle_status = flag: bool)] (53ms)
    non-packed-tuple-struct
      ✔ #[ink::storage_item] (53ms)
      ✔ #[ink::storage_item(derive = flag: bool)]
  74 passing (22s)
[main 2023-08-05T05:12:25.122Z] Extension host with pid 135950 exited with code: 0, signal: unknown.
Exit code:   0
Done
```

## docker container logs
```commandline
...
[4/4] Building fresh packages...
[1/2] ⠁ keytar
[683817 ms] [05:34:00] Extracted extension to file:///home/node/.vscode-server/extensions/esbenp.prettier-vscode-10.1.0: esbenp.prettier-vscode
[683834 ms] [05:34:00] Renamed to /home/node/.vscode-server/extensions/esbenp.prettier-vscode-10.1.0
[1/2] ⠂ keytar
[683848 ms] [05:34:00] Extension installed successfully: esbenp.prettier-vscode
Done in 50.70s.
[685184 ms] Start: Run in container: # Test for /home/node/.gitconfig and git
[685190 ms] 
[685190 ms] 
[685191 ms] Start: Run in container: # Copy /home/rustacean/.gitconfig to /home/node/.gitconfig
[685198 ms] 
[685199 ms] 
[685200 ms] Start: Run in container: # Cleaning up git config
[685213 ms] 
[685213 ms] 
[685214 ms] Start: Run in container: command -v git >/dev/null 2>&1 && git config --global --replace-all credential.helper '!f() { /home/node/.vscode-server/bin/6445d93c81ebe42c4cbd7a60712e0b17d9463e97/node /tmp/vscode-remote-containers-04643f06-1c66-4506-8f9f-ddcfb021dd62.js git-credential-helper $*; }; f' || true
[685220 ms] 
[685221 ms] 
[685221 ms] Start: Run: docker rm -f af0f0e7a580d3dc8cbcd2da6eed1daf79f8bbf01b3e6b6b6fdf7a86bf65c231c
[685514 ms] Container server terminated (code: 137, signal: null).
[689527 ms] [05:34:06] Extracted extension to file:///home/node/.vscode-server/extensions/rust-lang.rust-analyzer-0.3.1607-linux-x64: rust-lang.rust-analyzer
[689584 ms] [05:34:06] Renamed to /home/node/.vscode-server/extensions/rust-lang.rust-analyzer-0.3.1607-linux-x64
[689610 ms] [05:34:06] Extracting extension completed. rust-lang.rust-analyzer
[689656 ms] [05:34:06] Extension installed successfully: rust-lang.rust-analyzer
[689667 ms] [05:34:06] Extension 'rust-lang.rust-analyzer' v0.3.1607 was successfully installed.
[700883 ms] Start: Run in container: mkdir -p '/vscode/vscode-server/extensionsCache' && cd '/home/node/.vscode-server/extensionsCache' && cp 'dbaeumer.vscode-eslint-2.4.2' 'esbenp.prettier-vscode-10.1.0' 'mutantdino.resourcemonitor-1.0.7' 'rust-lang.rust-analyzer-0.3.1607-linux-x64' 'serayuzgur.crates-0.6.0' 'tamasfe.even-better-toml-0.19.2' 'vadimcn.vscode-lldb-1.9.2' '/vscode/vscode-server/extensionsCache'
[700922 ms] 
[700922 ms] 
[700922 ms] Start: Run in container: cd '/vscode/vscode-server/extensionsCache' && ls -t | tail -n +50 | xargs rm -f
[700929 ms] 
[700930 ms] 
```