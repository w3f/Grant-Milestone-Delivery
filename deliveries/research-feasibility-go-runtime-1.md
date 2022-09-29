# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/research-feasibility-go-runtime.md
* **Milestone Number:** 1

**Context** (optional)

This milestone delivers a thorough research whether implementing a Runtime in Go is feasible.

**Deliverables**

The whole milestone deliverable can be found [here](https://github.com/limechain/gosemble). Feel free to use the default branch of the repository.

| Number | Deliverable   | Link                                                                                                                                                                                                                                                                                                                                                                    | Notes                                                             |
|-------:|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|
|    0a. | License       | https://github.com/LimeChain/gosemble/blob/master/LICENSE                                                                                                                                                                                                                                                                                                               |                                                                   |
|    0b. | Documentation | https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md                                                                                                                                                                                                                                                                                   |                                                                   |
|    0c. | Testing Guide | https://github.com/LimeChain/gosemble/tree/master#poc-of-a-polkadot-runtime-in-go                                                                                                                                                                                                                                                                                       | Includes all necessaary steps to build the PoC and execute tests. |
|    0d. | Docker        | [TinyGo Polkawasm Dockerfile](https://github.com/LimeChain/tinygo/blob/new-polkawasm-target/Dockerfile.polkawasm) <br/> [Makefile](https://github.com/LimeChain/gosemble/blob/master/Makefile) for the build and test.                                                                                                                                                  | We use Docker only for building `tinygo`.                         |
|     1. | Research      | [Go internals, runtime, memory allocation and garbage collection](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#24-go)                                                                                                                                                                                                          |                                                                   |
|     2. | Research      | [Polkadot's design decisions](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#21-the-design-decisions-behind-polkadots-architecture) <br/> [Translating Go to WebAssembly MVP](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#22-translating-gos-language-capabilities-to-webassembly-mvp) |                                                                   |
|     3. | Research      | [TinyGo](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#25-tinygo) <br/> [Technical challenges](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#3-technical-challenges)                                                                                                                    |                                                                   |
|     4. | Research      | [Solution](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md#4-solution)                                                                                                                                                                                                                                                            |                                                                   |
|     5. | Documentation | [Research](https://github.com/LimeChain/gosemble/blob/master/docs/2-go-based-polkadot-runtime.md), based on the steps above.                                                                                                                                                                                                                                            |                                                                   |

**Additional Information**

None.
