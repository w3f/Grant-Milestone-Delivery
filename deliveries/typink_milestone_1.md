# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Typink](https://github.com/w3f/Grants-Program/blob/master/applications/typink.md)
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Links | Notes |
| -----: | ----------- | ----- | ------ | 
| **0a.** | License | [MIT](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/LICENSE) | |
| **0b.** | Documentation | - [README](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/README.md) <br />- [Demo](https://github.com/dedotdev/typink/tree/w3f-delivery-m1/examples/demo) (https://typink-demo.netlify.app/) <br />- [Demo SubConnect](https://github.com/dedotdev/typink/tree/w3f-delivery-m1/examples/demo-subconnect) (https://typink-subconnect.netlify.app/) | |
| **0c.** | Testing and Testing Guide | [Install & setup typink project](https://github.com/dedotdev/typink/tree/w3f-delivery-m1?tab=readme-ov-file#getting-started) | Run unit tests instructions: <br/> 1. Clone the [project](https://github.com/dedotdev/typink/tree/w3f-delivery-m1) <br/> 2. Run `yarn install && yarn test` |
| 1. | Core providers | Delivered [General API Design / Providers](https://github.com/w3f/Grants-Program/blob/master/applications/typink.md#providers) including: <br/> - [TypinkProvider](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/providers/TypinkProvider.tsx) <br/> - [ClientProvider](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/providers/ClientProvider.tsx) <br/> - [WalletSetupProvider](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/providers/WalletSetupProvider.tsx) & [WalletProvider](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/providers/WalletProvider.tsx) |  |
| 2. | Core hooks | Delivered [General API Design / Hooks](https://github.com/w3f/Grants-Program/blob/master/applications/typink.md#hooks) including: <br/> - [useTypink](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useTypink.ts) <br/> - [useWallets](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useWallets.ts) <br/> - [useContract](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useContract.ts) <br/> - [useContractDeployer](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useDeployer.ts) <br/> - [useContractQuery](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useContractQuery.ts) <br/> - [useWatchContractQuery](https://github.com/dedotdev/typink/blob/28044e49e03d010cdcc264aa645c48fba24841ab/packages/typink/src/hooks/useContractQuery.ts#L147-L190) <br/> - [useContractTx](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useContractTx.ts) <br/> - [useContractDeployerTx](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useDeployerTx.ts) <br/> - [useWatchContractEvent](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useWatchContractEvent.ts) <br/> - [useBalance](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useBalance.ts) & [useBalances](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/useBalances.ts) <br/> - [usePSP22Balance](https://github.com/dedotdev/typink/blob/w3f-delivery-m1/packages/typink/src/hooks/psp22/usePSP22Balance.ts) <br/> <br/> For 2 hooks: `useConnectedAccount` & `useClient` , we decided to not implement these hooks, users can access information about `connectedAccount` & `client` and others via `useTypink` hook.  |  |
| 3. | Publish to npm | - [typink](https://www.npmjs.com/package/typink)  |   |

