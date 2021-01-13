# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:**  [integrate AssemblyScript to write substrate smart contract](https://github.com/w3f/Open-Grants-Program/pull/61)
* **Milestone Number:** 1



| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Apache 2.0 License |[License file](https://github.com/ascontract/subscript/blob/master/LICENSE)|  |
| 0b. | Testing |[unit-test dir](https://github.com/ascontract/subscript/tree/master/core/assembly/__tests__)| [run test notes](https://github.com/ascontract/subscript/blob/master/core/README.md) |
| 0c. | Documentation |[ repo readme](https://github.com/ascontract/subscript/blob/master/README.md)<br />[subscript/core](https://github.com/ascontract/subscript/blob/master/core/README.md)| Documents about contract examples <br />[Flipper example](https://github.com/ascontract/subscript/blob/master/examples/flipper/README.md)<br />[ERC20 example](https://github.com/ascontract/subscript/blob/master/examples/erc20/README.md) |
| 1. | contract runtime environment |[env module](https://github.com/ascontract/subscript/tree/master/core/assembly/env)| The env module provides low-lovel contract environment functions. |
| 2. | core types |[types defines](https://github.com/ascontract/subscript/blob/master/core/assembly/types.ts)| The module defines basic types. |
| 3. | storage access |[storage functions](https://github.com/ascontract/subscript/blob/master/core/assembly/env/storage.ts)| The state storage just provide low-level interface for sotrage access. The storage layout feature is out of current milestone. |
| 4. | object packing utilty |[scale-codec](https://github.com/ascontract/subscript/blob/master/core/assembly/util.ts)| For objects packing and unpacking, it's only need to implement the [`Codec`](https://github.com/ascontract/as-scale-codec/blob/master/assembly/interfaces/Codec.ts ) interface. There are examples for `Codec` implements such as [AccountId](https://github.com/ascontract/subscript/blob/master/core/assembly/types.ts#L5) |
| 5. | memory manipulation |Not needed for actual implementation.| As the AssemblyScript have builtin [runtime](https://www.assemblyscript.org/runtime.html) to takes care of memory management, there is no explicit memory manipulation function for the sdk lib. All the example build scripts use half runtime option. Most of the time we use `Uint8Array` for raw data buffer allocation. |
| 6. | contract event generation |[event method](https://github.com/ascontract/subscript/blob/master/core/assembly/env/contract.ts#L139)| Util function for event generation. |
| 7. | contract call method |[demos](https://github.com/ascontract/subscript/blob/master/examples/erc20/assembly/index.ts#L140)| The ERC20 and Flipper's exorted `deploy` and `call` function demostrates how substrate Contract module `instantiate` and `call` works. |
| 8. | hash utility |[crypto utils](https://github.com/ascontract/subscript/blob/master/core/assembly/crypto.ts)| |
| 9. | `SCALE` codec |[Implementation fork](https://github.com/ascontract/as-scale-codec/tree/149c634773a0544b4919aa3fb6f474c4f0f8a9ad)| The LimeChain's scale-codec implementation imports invalid instructction for the contract environment. We apply a patch for the fork. |
| 10. | example for demonstration |[Flipper contract](https://github.com/ascontract/subscript/tree/master/examples/flipper)<br />[ERC20 contract](https://github.com/ascontract/subscript/tree/master/examples/erc20)| The repo provide two examples: Flipper and ERC20. Both can works for the [canvas-node v0.1.4](https://github.com/paritytech/canvas-node/releases/tag/v0.1.4). We use [polkadotjs portal](https://polkadot.js.org/apps/?rpc=ws://127.0.0.1:9944) to deploy and make transaction under dev mode(`./canvas --dev`).<br />Note: demos are not fully compatible with the manually edited metadata json |

## Additional Information

In milestone 1, we provide basic contract library environment with essential core compoments implemented. The library is quite experimental and we keep on improving the api abstraction.  There are two contract example to demonstrate how subscript library works. The Flipper contract imports low-level api to interact with the contract node and ERC20 contract demonstrate more complex feature. The delivery is actually the milestone 1 of the [General-Grants-Program Application](https://github.com/w3f/General-Grants-Program/pull/336) and so metadata and storage layout are beyond the milestone's feature. Therefore both demos are not fully compatible with the manually edited metadata json. It needs more work to write general purpose contract and we are still working on the project to implement the future milestone.