# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [relayer](https://github.com/webb-tools/relayer/blob/main/LICENSE), [webb-dapp](https://github.com/webb-tools/webb-dapp/blob/master/LICENSE), [webb.js](https://github.com/webb-tools/webb.js/blob/master/LICENSE) | GPLv3, Apache 2.0. Infringements [addressed](https://github.com/webb-tools/webb.js/commit/bdf41fd0ab07fdab077500cdc2638a110fbc7588).
| 0b. | Documentation |<ul><li>[x] </li></ul>| [docs repo](https://github.com/webb-tools/webb-docs), [hosted](https://docs.webb.tools/), [relayer rustdocs](https://webb-tools.github.io/relayer/webb_relayer/index.html), [protocol-substrate rustdocs](https://webb-tools.github.io/protocol-substrate/), READMEs  | Documentation vastly improved in reponse to feedback, with external docs, more verbose readmes and more code documentation
| 1. | Relayer in Rust |<ul><li>[x] </li></ul>| [repo](https://github.com/webb-tools/relayer) | Documentation greatly improved, tarpaulin fails but test coverage seems to be on the low side
| 3. | WASM bindings |<ul><li>[x] </li></ul>| [package](https://github.com/webb-tools/webb.js/tree/master/packages/wasm-utils), API in [sdk-core](https://github.com/webb-tools/webb.js/tree/master/packages/sdk-core) | no documentation for the bindings themselves, API in sdk-core wrapper well documented
| 3a. | WASM bindings: Web Worker Support |<ul><li>[x] </li></ul>| [code](https://github.com/webb-tools/webb.js/tree/master/packages/sdk-core/src/proving) |
| 4. | UI Support: Multi-Asset support |<ul><li>[x] </li></ul>| [link1](https://github.com/webb-tools/webb-dapp/tree/master/packages/react-environment/src/webb-context/currency), [link2](https://github.com/webb-tools/webb-dapp/tree/master/packages/react-environment/src/api-providers/polkadot) | node updated to 16.x, UI and stability improvements. Code is not easy to read.
| 4a. | UI Support: Multi-Asset designs |<ul><li>[x] </li></ul>| [component](https://github.com/webb-tools/webb-dapp/tree/master/packages/mixer/src/components/Deposit) |
| 5. | UI Support: Proof generation |<ul><li>[x] </li></ul>| [code](https://github.com/webb-tools/webb-dapp/blob/master/packages/react-environment/src/api-providers/polkadot/polkadot-mixer-withdraw.ts#L173) | 
| 6. | API Support: Types |<ul><li>[x] </li></ul>| [package](https://github.com/webb-tools/webb.js/tree/master/packages/types) | copied code attributed
| 6a. | API Support: Usage examples |<ul><li>[x] </li></ul>| [instructions](https://github.com/webb-tools/webb.js#usage-examples), [examples](https://github.com/webb-tools/webb.js/tree/master/examples), [fixtures](https://github.com/webb-tools/protocol-substrate-fixtures) | Examples to connect to an [anchor](https://docs.webb.tools/v1/anchor-protocol/overview/) and a mixer. Anchor example hadn't finished in 20min

## General Notes

Wasn't able to run the relayer due to unclear instructions (see above) [addressed].

The `wasm-utils` package failed to run with [addressed, added [instructions](https://github.com/webb-tools/webb.js#prerequisites) to install wasm-pack]: 

```
✖ ｢wdm｣: Error: Rust compilation.
    at ChildProcess.<anonymous> (/home/aleixo/webb.js/packages/wasm-utils/node_modules/@wasm-tool/wasm-pack-plugin/plugin.js:236:24)
    at ChildProcess.emit (node:events:520:28)
    at maybeClose (node:internal/child_process:1090:16)
    at Socket.<anonymous> (node:internal/child_process:449:11)
    at Socket.emit (node:events:520:28)
    at Pipe.<anonymous> (node:net:687:12)
```

This package, and the repository in which it is, contain almost no documentation. The main README links to the wiki for "more documentation and examples", which however seems to be empty. [expanded, external documentation]

The repository also contains a fair amount of code which was copied from Acala to the extent of authors simply having been replaced e.g. [Acala](https://github.com/AcalaNetwork/acala.js/blob/master/packages/sdk-core/package.json) vs [Webb](https://github.com/webb-tools/webb.js/blob/master/packages/sdk-core/package.json).
Some instances of this are also directly in code delivered for this milestone like in the case of deliverables 6. [attributed]

The instructions to UI locally seem to produce a website with no working functionality [improved version in staging branch, no issues].
The following section describing a setup with two local substrate nodes and a relayer are outdated and also limit themselves to running it - there is no documentation on what one can do with this setup or why it is offered.
There's no option to choose what node the interface connects to.

---

The delivery was initially very bare-bones mostly with minimal instructions to run the different projects, but no conceptual documentation and little code documentation. Most things also failed to run and some code had been adapted without attribution.

In response to feedback, the team fixed most issues and vastly expanded on documentation, with clear READMEs, lengthy external docs and thorough rustdocs.
