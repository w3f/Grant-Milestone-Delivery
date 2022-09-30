# Evaluation

- **Status:** Accepted
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/research-feasibility-go-runtime.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/LimeChain/gosemble/blob/master/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md) | Markdown document that explains the required steps |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [poc-of-a-polkadot-runtime-in-go](https://github.com/LimeChain/gosemble/tree/master#poc-of-a-polkadot-runtime-in-go) | Easy to follow. I'm having some issues on my arm mac, but otherwise it works |
| 0d. | Docker | <ul><li>[x] </li></ul> | [TinyGo Polkawasm Dockerfile](https://github.com/LimeChain/tinygo/blob/new-polkawasm-target/Dockerfile.polkawasm) | only for tinygo, but not really necessary to use docker at all here |
| 1. | Research | <ul><li>[x] </li></ul> | [Go internals, runtime, memory allocation and garbage collection](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#24-go) | Covers the relevant topics  |
| 2. | Research | <ul><li>[x] </li></ul> | [Polkadot's design decisions](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#21-the-design-decisions-behind-polkadots-architecture), [Translating Go to WebAssembly MVP](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#22-translating-gos-language-capabilities-to-webassembly-mvp) | Covers the relevant topics |
| 3. | Research | <ul><li>[x] </li></ul> | [TinyGo](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#25-tinygo), [Technical challenges](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#3-technical-challenges) | Covers the relevant topics |
| 4. | Research | <ul><li>[x] </li></ul> | [Solution](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#4-solution) | Good initial idea as far as I can judge it |
| 5. | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md) | see above |

## General Notes

Apart from the issues on my arm mac (see below), everything immediately worked. The research covered all relevant topics and I’m looking forward to the actual implementation. 

```
ld: warning: ignoring file ../../../go/pkg/mod/github.com/wasmerio/go-ext-wasm@v0.3.2-0.20200326095750-0a32be6068ec/wasmer/libwasmer.dylib, building for macOS-arm64 but attempting to link with file built for macOS-x86_64
```
