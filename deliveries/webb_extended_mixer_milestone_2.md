# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md
* **Milestone Number:** 2

**Context**
We are delivering the: **Toolchain: implement relayer and WASM bindings for zero-knowledge gadgets, types API, dApp integration** milestone from the Webb extended mixer deliverable.

This delivery includes the webb-dapp w/ designs, the webb.js SDK, the webb private transaction relayer, and the protocol-substrate pallets from milestone 1.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/webb-tools/webb-dapp/blob/master/LICENSE |...| 
| 0b.  | Documentation for running | https://github.com/webb-tools/webb-dapp/blob/master/README.md | Inside the readme |
| 1. | Relayer | https://github.com/webb-tools/relayer | ... |
| 2. | CLI | Amended in future milestone | ... |
| 3. | WASM bindings | https://github.com/webb-tools/webb.js/tree/master/packages/wasm-utils | Core rust tools compiling to WASM with wasm_bindgen |
| 3a. | WASM bindings: Web Worker Support | https://github.com/webb-tools/webb.js/tree/master/packages/sdk-core/src/proving | Uses `Worker` within that can be injected from a web application. |
| 4. | UI Support: Multi-assets support | https://github.com/webb-tools/webb-dapp/tree/master/packages/react-environment/src/webb-context/currency, https://github.com/webb-tools/webb-dapp/tree/master/packages/react-environment/src/api-providers/polkadot | In the polkadot deposit class, it supports multi-assets from ORML. |
| 4a. | UI Support: Multi-asset design | https://github.com/webb-tools/webb-dapp/tree/master/packages/mixer/src/components/Deposit | The UI component |
| 5. | UI Support: Proof generation | https://github.com/webb-tools/webb-dapp/blob/master/packages/react-environment/src/api-providers/polkadot/polkadot-mixer-withdraw.ts#L173 | In the withdraw method, we do proof generation against `webb.js` SDK |
| 6. | API Support: Types | https://github.com/webb-tools/webb.js/tree/master/packages/types | ... |
| 6a. | API Support: Usage | https://github.com/webb-tools/webb.js/tree/master/examples/sdk-mixer | Example of creating note, proving, setting up tree for proofs |
