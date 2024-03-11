# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [DelightfulDOT](https://github.com/w3f/Grants-Program/blob/master/applications/delightfuldot.md)
* **Milestone Number:** 2

We've rebranded the project from `DelightfulDOT` to `dedot`, and the project repo is moving to [this repo](https://github.com/dedotdev/dedot). All of the [npm packages](https://www.npmjs.com/search?q=dedot) are also renamed accordingly as well with the new name.

Delivery branch: https://github.com/dedotdev/dedot/tree/w3f-delivery/m2

**Deliverables**
| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [Apache 2.0](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/LICENSE) |  |
| **0b.** | Documentation | - [README](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2) <br/> - [Playground Sandbox](https://codesandbox.io/p/devbox/trydedot-th96cm?file=%2Fmain.ts%3A24%2C26) |  |
| **0c.** | Testing and Testing Guide | - [How to install & run the library](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2?tab=readme-ov-file#have-a-quick-taste) <br/> - [Zombienet Tests](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/zombienet-tests/src), [GH Action](https://github.com/dedotdev/dedot/actions/workflows/zombienet-tests.yml)  | Run tests instructions: <br/> 1. Clone the [project](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2) <br/> 2. Run `yarn install` <br/> 3. Run `yarn test` |
| 1. | More core functionalities | - Transaction Apis ([TxExecutor](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/executor/TxExecutor.ts), [Extrinsic Codec](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/codecs/src/codecs/extrinsic/Extrinsic.ts), [Signed Extensions](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/packages/api/src/extrinsic/extensions)) <br/> - Runtime Apis ([Executor](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/executor/RuntimeApiExecutor.ts), [Runtime Api Specs](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/specs/src/runtime/all.ts)) <br/> |  |

**Additional Information**

In addition to the deliverables of M2, we've also completed the following things:
- Add a CLI ([`@dedot/cli`](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/packages/cli)) to help users generate `ChainApi` interfaces that for chains that they want to interact with in case the [`@dedot/chaintypes`](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/chaintypes/src/index.ts) does not support it yet. Instruction on how to install and generate chaintypes using `@dedot/cli` can be found [here](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/README.md#chain-types--apis).
- Support Metadata V15, [`Dedot`](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/packages/api/src/client/Dedot.ts) client can now utilize type information for Runtime Apis bundled inside Metadata V15 to encode & decode calls. For chains that only supports Metadata V14, we still support a fallback mechanism to declare Runtime Api definitions/specs in order to call runtime apis in such case. More on this can be found [here](https://github.com/dedotdev/dedot/blob/w3f-delivery/m2/README.md#runtime-apis).
- Integrate [zombienet](https://github.com/paritytech/zombienet) to do e2e testing for the apis. It's great to test and see how the apis is performing in a mock/testing live network. More on the test can be found [here](https://github.com/dedotdev/dedot/tree/w3f-delivery/m2/zombienet-tests/src).
