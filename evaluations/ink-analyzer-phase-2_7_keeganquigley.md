# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-analyzer-phase-2.md
- **Milestone:** 7
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**

| Number  | Deliverable                                                                                                                                                                   | Accepted | Link                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------| -------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **0a.** | License                                                                                                                                                                       | <ul><li>[x] </li></ul> | [GPL-3.0](https://github.com/ink-analyzer/ink-vscode/blob/master/LICENSE).                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| **0b.** | Documentation                                                                                                                                                                 | <ul><li>[x] </li></ul> | [Visual Studio Code Extension README](https://github.com/ink-analyzer/ink-vscode/blob/master/README.md), [Development, Debugging and Automated Testing](https://github.com/ink-analyzer/ink-vscode/blob/master/DEVELOPMENT.md) and [Manual Feature Testing](https://github.com/ink-analyzer/ink-vscode/blob/master/TESTING.md) guides on GitHub, and extensive inline source documentation in the [Github repository](https://github.com/ink-analyzer/ink-vscode/). |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| **0c.** | Testing and Testing Guide                                                                                                                                                     | <ul><li>[x] </li></ul> | [Development, Debugging and Automated Testing](https://github.com/ink-analyzer/ink-vscode/blob/master/DEVELOPMENT.md) and [Manual Feature Testing](https://github.com/ink-analyzer/ink-vscode/blob/master/TESTING.md) guides.                                                                                                                                                                                                                                       |  |
| **0d.** | Docker                                                                                                                                                                        | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/ink-analyzer/ink-vscode/blob/master/.devcontainer/devcontainer.json).                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| **0e.** | Article                                                                                                                                                                       | <ul><li>[x] </li></ul> | [Article](https://analyze.ink/blog/ink-analyzer-updates).                                                                                                                                                                                                                                                                                                                                                                                                           |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 1.      | Visual Studio Code Extension: Update extension to support ink! language support features added to the semantic analyzer and language server in milestones 1, 2, 3, 4, 5 and 6 | <ul><li>[x] </li></ul> | [GitHub repository](https://github.com/ink-analyzer/ink-vscode).                                                                                                                                                                                                                                                                                                                                                                                                    |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

# General Notes

# Tests

<details>
  <summary>135 unit tests passing</summary>

```ts
Loading development extension at /Users/keeganquigley/ink-vscode

  Code Actions
    erc20
      ✔ (env=${1:crate::}|keep_attr="$1") <- #[ink::contract] (112ms)
      ✔ #[ink::contract]
      ✔ mod erc20 { (92ms)
      ✔ #[ink::contract]|#[ink(env=crate::Environment)] (120ms)
      ✔ root level empty line (97ms)
      ✔ #[ink(storage)] (89ms)
      ✔ #[ink::storage_item]|#[ink(anonymous|event|storage)] <- pub struct Erc20 (84ms)
      ✔ anonymous <- #[ink(event)] (81ms)
      ✔ #[ink::storage_item]|#[ink(anonymous|event|storage)] <- pub struct Transfer (72ms)
      ✔ #[ink(event)]|#[ink(anonymous)] (82ms)
      ✔ mod level empty line (84ms)
      ✔ impl Erc20 { (81ms)
      ✔ default|payable|selector=$1 <- #[ink(constructor)] (82ms)
      ✔ #[ink(constructor|default|message|payable|selector=${1:1})] <- pub fn new(total_supply: Balance) (115ms)
      ✔ default|payable|selector=${1:1} <- #[ink(message)] (85ms)
      ✔ #[ink(constructor|default|message|payable|selector=${1:1})] <- pub fn total_supply(&self) (78ms)
      ✔ impl level empty line (85ms)
      ✔ mod tests { (85ms)
      ✔ #[ink::test] (115ms)
      ✔ mod e2e_tests { (85ms)
      ✔ (additional_contracts="$1"|environment=${1:crate::}|keep_attr="$1") <- #[ink_e2e::test] (80ms)
    trait-flipper
      ✔ (keep_attr="$1"|namespace="${1:my_namespace}") <- #[ink::trait_definition] (51ms)
      ✔ #[ink::chain_extension]|#[ink::trait_definition] <- pub trait Flip
      ✔ pub trait Flip {
      ✔ impl Flip for Flipper {
      ✔ missing method
      ✔ undeclared method
      ✔ mismatching parameters
      ✔ mismatching return type
      ✔ mismatching attribute arguments
    psp22-extension
      ✔ #[ink::chain_extension] (288ms)
      ✔ #[ink::chain_extension]|#[ink::trait_definition] <- pub trait Psp22Extension (206ms)
      ✔ default|payable|selector=$1 <- #[ink(extension = 0x3d26)] (199ms)
      ✔ #[ink(extension=${1:1}|handle_status=${1:true})] <- fn token_name(asset_id: u32) (204ms)
      ✔ pub trait Psp22Extension { (204ms)
      ✔ crate::CustomEnvironment <- self::CustomEnvironment (206ms)
      ✔ impl ink::env::Environment (205ms)
      ✔ type ErrorCode = (); (199ms)
      ✔ Self::ErrorCode (207ms)
      ✔ SCALE codec traits (206ms)
    non-packed-tuple-struct
      ✔ (derive=${1:true}) <- #[ink::storage_item] (97ms)
      ✔ #[ink::storage_item]|#[ink(anonymous|event|storage)] <- struct Contract(
  Completions
    erc20
      ✔ ink::contract (88ms)
      ✔ env=crate::|keep_attr="" (46ms)
      ✔ storage (43ms)
      ✔ anonymous (46ms)
      ✔ constructor (41ms)
      ✔ constructor -> default|payable|selector=1 (54ms)
      ✔ message (42ms)
      ✔ message -> default|payable|selector=1 (45ms)
      ✔ ink::test (50ms)
      ✔ ink_e2e::test (47ms)
      ✔ additional_contracts=""|environment=crate::|keep_attr="" <- #[ink_e2e::test()] (47ms)
    trait-flipper
      ✔ trait_definition (48ms)
      ✔ keep_attr=""|namespace="my_namespace"
    psp22-extension
      ✔ ink::chain_extension|ink::trait_definition (200ms)
      ✔ #[ink::chain_extension()] (105ms)
      ✔ extension=1|handle_status=true (105ms)
      ✔ handle_status=true (104ms)
    non-packed-tuple-struct
      ✔ ink::storage_item (107ms)
      ✔ derive=true
  Diagnostics
    erc20
      ✔ well defined contract (1005ms)
      ✔ missing `#[ink::contract]` (1006ms)
      ✔ missing `#[ink(storage)]` (1004ms)
      ✔ no ink! constructor(s) (1006ms)
      ✔ no ink! message(s) (1015ms)
    flipper
      ✔ well defined contract (1006ms)
      ✔ missing `#[ink::contract]` (1018ms)
      ✔ missing `#[ink(storage)]` (1008ms)
      ✔ no ink! constructor(s) (1007ms)
      ✔ no ink! message(s) (1008ms)
    trait-flipper
      ✔ well defined trait definition (1005ms)
      ✔ missing `#[ink::trait_definition]` (1019ms)
      ✔ no ink! message(s) (1008ms)
    psp22-extension
      ✔ well defined chain extension (1005ms)
      ✔ missing `#[ink::chain_extension]` (1006ms)
      ✔ missing `ErrorCode` type (1007ms)
    non-packed-tuple-struct
      ✔ well defined storage item (1006ms)
  Hover
    erc20
      ✔ #[ink::contract] (62ms)
      ✔ #[ink::contract(env = E: impl Environment)] (50ms)
      ✔ #[ink::contract(keep_attr = N: string)] (44ms)
      ✔ #[ink(storage)] (43ms)
      ✔ #[ink(event)] (50ms)
      ✔ #[ink(anonymous)] (43ms)
      ✔ #[ink(constructor)] (47ms)
      ✔ #[ink(default)] (45ms)
      ✔ #[ink(message)] (43ms)
      ✔ #[ink(selector = S: u32 | _)] <- #[ink(message, selector=_)] (81ms)
      ✔ #[ink(selector = S: u32 | _)] <- #[ink(message, selector=1)] (49ms)
      ✔ #[ink(selector = S: u32 | _)] <- #[ink(message, selector=0xA)] (48ms)
      ✔ #[ink::test] (43ms)
      ✔ #[ink_e2e::test] (43ms)
      ✔ #[ink_e2e::test(additional_contracts = S: string)] (49ms)
      ✔ #[ink_e2e::test(environment = E: impl Environment)] (47ms)
      ✔ #[ink_e2e::test(keep_attr = N: string)] (50ms)
    trait-flipper
      ✔ #[ink::trait_definition] (49ms)
      ✔ #[ink::trait_definition(keep_attr = N: string)]
      ✔ #[ink::trait_definition(namespace = N: string)]
    psp22-extension
      ✔ #[ink::chain_extension] (104ms)
      ✔ #[ink(extension = N: u32)] (103ms)
      ✔ #[ink(handle_status = flag: bool)] (105ms)
    non-packed-tuple-struct
      ✔ #[ink::storage_item] (105ms)
      ✔ #[ink::storage_item(derive = flag: bool)]
  Inlay Hints
    erc20
      ✔ None (50ms)
      ✔ #[ink::contract(env: impl Environment = MyEnvironment, keep_attr: &str = "foo,bar")] (50ms)
      ✔ #[ink(message, selector: u32 | _ = _)] (63ms)
      ✔ #[ink_e2e::test(additional_contracts: &str = "adder/Cargo.toml flipper/Cargo.toml", environment: impl Environment = MyEnvironment, keep_attr: &str = "foo,bar")] (50ms)
    trait-flipper
      ✔ None (43ms)
      ✔ #[ink::trait_definition(namespace: &str = "my_namespace", keep_attr: &str = "foo,bar")]
    psp22-extension
      ✔ extension: u32 = ... | env: impl Environment =  = crate::CustomEnvironment | selector: u32 | _ = ... (106ms)
    non-packed-tuple-struct
      ✔ None (101ms)
      ✔ #[ink::storage_item(derive=false)]
  Signature Help
    erc20
      ✔ env: impl Environment, keep_attr: &str (103ms)
      ✔ storage (43ms)
      ✔ event, anonymous (44ms)
      ✔ constructor, default, payable, selector: u32 | _ (43ms)
      ✔ message, default, payable, selector: u32 | _ (54ms)
      ✔ [] <- test (45ms)
      ✔ additional_contracts: &str, environment: impl Environment, keep_attr: &str (48ms)
    trait-flipper
      ✔ keep_attr: &str, namespace: &str (53ms)
    psp22-extension
      ✔ #[ink::chain_extension()] (198ms)
      ✔ extension: u32, handle_status: bool (103ms)
    non-packed-tuple-struct
      ✔ derive: bool (103ms)
  Snippet Parser
    ✔ $1
    ✔ selector=${1:1}
    ✔ handle_status=${1:true}
    ✔ env=${1:crate::}
    ✔ keep_attr="$1"
    ✔ namespace="${1:my_namespace}"
    ✔ $1, $2
    ✔ extension=${1:1}, handle_status=${2:true}
    ✔ env=${1:crate::}, keep_attr="$2"
    ✔ namespace="${1:my_namespace}", keep_attr="$2"
    ✔ \n    #[ink(storage)]\n    pub struct ${1:Storage} {\n        $2\n    }\n\n
    ✔ \n    #[ink(constructor)]\n    pub fn ${1:new}() -> ${2:Self} {\n        ${3:todo!()}\n    }\n\n
  135 passing (38s)
[main 2024-02-06T22:20:29.793Z] Extension host with pid 54504 exited with code: 0, signal: unknown.
Exit code:   0
Done

✨  Done in 57.49s.
```
</details>
