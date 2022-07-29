# Evaluation

- **Status:** In Progress
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/Supercolony-net/typechain-polkadot/blob/6702732b4e89d80d46aececb933bb0379b2ac8b7/LICENSE) | MIT |
| 0b | Documentation | <ul><li>[ ] </li></ul> | [/docs](https://github.com/Supercolony-net/typechain-polkadot/tree/6702732b4e89d80d46aececb933bb0379b2ac8b7/docs) | Spec, usage, examples, etc. No inline docs. |
| 1 | TS types | <ul><li>[ ] </li></ul> | link | We will research & match types from ABI to TypeScript, compatible with [polkadot{.js} v8](https://polkadot.js.org) library. Separately, for methods' arguments and return values. Files with types definition will be generated. |
| 2 | Runtime code | <ul><li>[ ] </li></ul> | link | Prepare output(its draft can be seen in [technical specification](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#generated-code-draft)) of runtime code with contracts' methods implementation. At this point we have minimal viable coverage of the ABI types, original methods' names, and general types for methods' options, without specifics for contract's [namespaces](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#namespaces). |
| 3 | Testing | <ul><li>[ ] </li></ul> | link | Minimal coverage of PSP22 contract with integration tests. We will be testing correctness of the derived types of the arguments and return values. |
| 4 | NPM Packaging | <ul><li>[x] </li></ul> | link | Prepare the repository to work through CLI as a package. In TypeScript, as is, without translation to JavaScript. We will publish the package to [NPM repository](https://npmjs.com) and provide set-up instructions (i.e. for [installation](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#set-up), [input](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#input) & [output](https://github.com/Supercolony-net/typechain-polkadot/blob/master/docs/tech-specs.md#output)). |
| X. | ... | <ul><li>[ ] </li></ul> | link | see [General Notes](#general-notes) |


## General Notes

- —
