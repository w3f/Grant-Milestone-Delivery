# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[ ] </li></ul>| [relayer](https://github.com/webb-tools/relayer/blob/main/LICENSE), [webb-dapp](https://github.com/webb-tools/webb-dapp/blob/master/LICENSE), [webb.js](https://github.com/webb-tools/webb.js/blob/master/LICENSE) | GPLv3, Apache 2.0. Multiple infringements.
| 0b. | Documentation |<ul><li>[ ] </li></ul>|  | Only READMEs with minimal running instructions. No external documentation. Inline documentation is a requirement as per the application and doesn't exist in any of the deliverables with a few exceptions.
| 1. | Relayer in Rust |<ul><li>[ ] </li></ul>| [repo](https://github.com/webb-tools/relayer) | No information about what it does or links to external documentation. Running it requires creating a file and filling in values that aren't explained. Instructions unclear on how to use the default configurations provided. `cargo test` only runs 4 tests. There seem to be some integration tests but no instructions to run them. |
| 3. | WASM bindings |<ul><li>[ ] </li></ul>| [package](https://github.com/webb-tools/webb.js/tree/master/packages/wasm-utils) | Fails to run. Also no description of what it does.
| 3a. | WASM bindings: Web Worker Support |<ul><li>[ ] </li></ul>| [code](https://github.com/webb-tools/webb.js/tree/master/packages/sdk-core/src/proving) | not checked yet
| 4. | UI Support: Multi-Asset support |<ul><li>[ ] </li></ul>| [link1](https://github.com/webb-tools/webb-dapp/tree/master/packages/react-environment/src/webb-context/currency), [link2](https://github.com/webb-tools/webb-dapp/tree/master/packages/react-environment/src/api-providers/polkadot) | The project requires node 14.x, [should](https://nodejs.org/en/about/releases/) probably be using 16 instead. No instructions to test it.
| 4a. | UI Support: Multi-Asset designs |<ul><li>[x] </li></ul>| [component](https://github.com/webb-tools/webb-dapp/tree/master/packages/mixer/src/components/Deposit) |
| 5. | UI Support: Proof generation |<ul><li>[x] </li></ul>| [code](https://github.com/webb-tools/webb-dapp/blob/master/packages/react-environment/src/api-providers/polkadot/polkadot-mixer-withdraw.ts#L173) | 
| 6. | API Support: Types |<ul><li>[ ] </li></ul>| [package](https://github.com/webb-tools/webb.js/tree/master/packages/types) | contains copied code, see below
| 6a. | API Support: Usage examples |<ul><li>[ ] </li></ul>| [code](https://github.com/webb-tools/webb.js/tree/master/examples/sdk-mixer) | These aren't examples, more of a test case. In the application, these are described as "examples for connecting to chains with these pallets / types and provide examples for interacting with them."

## General Notes

Wasn't able to run the relayer due to unclear instructions (see above).

The `wasm-utils` package failed to run with: 

```
✖ ｢wdm｣: Error: Rust compilation.
    at ChildProcess.<anonymous> (/home/aleixo/webb.js/packages/wasm-utils/node_modules/@wasm-tool/wasm-pack-plugin/plugin.js:236:24)
    at ChildProcess.emit (node:events:520:28)
    at maybeClose (node:internal/child_process:1090:16)
    at Socket.<anonymous> (node:internal/child_process:449:11)
    at Socket.emit (node:events:520:28)
    at Pipe.<anonymous> (node:net:687:12)
```

This package, and the repository in which it is, contain almost no documentation. The main README links to the wiki for "more documentation and examples", which however seems to be empty.

The repository also contains a fair amount of code which was copied from Acala to the extent of authors simply having been replaced e.g. [Acala](https://github.com/AcalaNetwork/acala.js/blob/master/packages/sdk-core/package.json) vs [Webb](https://github.com/webb-tools/webb.js/blob/master/packages/sdk-core/package.json).
Some instances of this are also directly in code delivered for this milestone like in the case of deliverables 6.

The instructions to UI locally seem to produce a website with no working functionality.
The following section describing a setup with two local substrate nodes and a relayer are outdated and also limit themselves to running it - there is no documentation on what one can do with this setup or why it is offered.
There's no option to choose what node the interface connects to.
Lastly for me it failed to work at all until I pulled changes today.
