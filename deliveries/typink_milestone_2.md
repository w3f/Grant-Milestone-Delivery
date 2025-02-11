# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Typink](https://github.com/w3f/Grants-Program/blob/master/applications/typink.md)
* **Milestone Number:** 2

**Deliverables**

| Number | Deliverable | Links | Notes |
| -----: | ----------- | ----- | ------ | 
| **0a.** | License | [MIT](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/LICENSE) | |
| **0b.** | Documentation | - [README](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/README.md) <br />- [Demo](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/examples/demo) (https://typink-demo.netlify.app/) <br />- [Demo SubConnect](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/examples/demo-subconnect) (https://typink-subconnect.netlify.app/) | |
| **0c.** | Testing and Testing Guide | [Install & setup typink project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2?tab=readme-ov-file#getting-started) | Run unit tests instructions: <br/> 1. Clone the [project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2) <br/> 2. Run `yarn install && yarn test` |
| **0d.** | Article | [Introducing Typink](https://docs.dedot.dev/typink/introducing-typink) | |
| 1. | Helpers & Utilities | Delivered [Helpers & Utilities](https://grants.web3.foundation/applications/typink#helpers--utilities) including: <br/> - [formatBalance](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/typink/src/utils/formatBalance.ts) <br /> - [Human-readable error messages](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/typink/src/utils/errors.ts) <br /> - [List of ink!-contracts supported networks](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/typink/src/networks) <br /> - [txToaster](https://github.com/dedotdev/typink/blob/w3f-delivery-m2/packages/create-typink/src/templates/default/ui/src/utils/txToaster.tsx): Transaction notification & progress updates  |  |
| 2. | CLI & boilerplate template project | Delivered [CLI & template project](https://grants.web3.foundation/applications/typink#cli--boilerplatestarter-project-template) including: <br/> - [create-typink](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/create-typink) cli package ([npm package](https://www.npmjs.com/package/create-typink)) <br /> - [Template project](https://github.com/dedotdev/typink/tree/w3f-delivery-m2/packages/create-typink/src/templates/default) | Try it out now: `npx create-typink@latest` |
| 3. | Example dapp | - Tutorial: [Develop ink! dApp using Typink](https://docs.dedot.dev/help-and-faq/tutorials/develop-ink-dapp-using-typink) <br /> - [Sample dapp - PSP22 Transfer](https://psp22-transfer.netlify.app/) ([Github Repo](https://github.com/sinzii/psp22-transfer))  |   |

