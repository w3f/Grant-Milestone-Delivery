# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [DelightfulDOT](https://github.com/w3f/Grants-Program/blob/master/applications/delightfuldot.md)
* **Milestone Number:** e.g. 1

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Apache 2.0](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/LICENSE) |  |
| **0b.** | Documentation | - [README](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1) <br/> - [Playground Sandbox](https://codesandbox.io/p/devbox/trydedot-th96cm?file=%2Fmain.ts%3A24%2C26) |  |
| **0c.** | Testing and Testing Guide | [How to install & run the library](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1?tab=readme-ov-file#have-a-quick-taste)  | Run tests instructions: <br/> 1. Clone the [project](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1) <br/> 2. Run `yarn install` <br/> 3. Run `yarn test` |
| 1. | Core functionalities | - Chain types & APIs ([codegen](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1/packages/codegen), [chaintypes](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1/packages/chaintypes), [codecs](https://github.com/CoongCrafts/delightfuldot/tree/w3f-delivery/m1/packages/codecs)) <br/> - [Metadata v14 parser](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/codecs/src/metadata/v14.ts) <br/> - [RPC APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/RpcExecutor.ts) <br/> - [Constant APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/ConstantExecutor.ts) <br/> - [Query Storage APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/StorageQueryExecutor.ts) <br/> - [Event APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/EventExecutor.ts) <br/> - [Error APIs](https://github.com/CoongCrafts/delightfuldot/blob/w3f-delivery/m1/packages/api/src/executor/ErrorExecutor.ts) |  |
| 2. | Publish to npm |  - [delightfuldot](https://www.npmjs.com/package/delightfuldot) <br/> - [7 other packages](https://www.npmjs.com/search?q=%40delightfuldot) |  |

**Additional Information**
- Regarding the `ability to add custom RPC APIs` as stated in Deliverable 01
  - We can now call arbitrary RPC methods to a blockchain node ([docs](https://github.com/CoongCrafts/delightfuldot?tab=readme-ov-file#execute-rpc-methods)), but the ability to define custom specs & generate types for those specs are not yet supported for now in M1, since this feature is tied & related to the feature to generate chain types & APIs for custom chain (codegen), so we plan to ship this feature in M2 along with custom runtime APIs.
