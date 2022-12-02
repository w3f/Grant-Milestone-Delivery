# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/c%2B%2Bpolkadot-light-client.md
* **Milestone Number:** 1/1

**Context:** A detailed specification for the C++ implementation of a Polkadot Light Client

**Deliverables**

| Number | Deliverable   | Specification | Link | Notes |
| -----: | ------------- | ------------------------------ | --- | --- |
|    0a. | License       | Apache 2.0 / MIT                                      |-|-| 
|    0b. | Format        | Markdown (mdBook)                                     |-|-| 
|    0c. | Published     | GitHub, GitHub Pages                                  |[https://github.com/eqlabs/polkadot-light-client-spec](https://github.com/eqlabs/polkadot-light-client-spec)|-|
|    1. | Cryptography | security advantages over connecting to 3rd-party node, limitations compared to full client  | See ["What is a light client?"]( https://www.parity.io/blog/what-is-a-light-client/) at Parity.io|-
|    2. | Runtime environment requirements | for browser and Node.js |[Requirements](https://github.com/eqlabs/polkadot-light-client-spec/blob/master/src/requirements.md#user-experience)|-
|    3. | Multichain support | use cases for cross-chain communication |[Requirements](https://github.com/eqlabs/polkadot-light-client-spec/blob/master/src/requirements.md#functionality)|-
|    4. | JSON-RPC APIs | minimal run-time access interface |[Requirements](https://github.com/eqlabs/polkadot-light-client-spec/blob/master/src/requirements.md#functionality)|-
|    5. | Dependencies | libraries for cryptography, networking, build | [Implementation](https://github.com/eqlabs/polkadot-light-client-spec/blob/master/src/implementation.md) and [Stages](https://github.com/eqlabs/polkadot-light-client-spec/blob/master/src/stages.md)|-
|    6. | Implementation repos | implemented: grandpa and light2 protocols, reading chain spec, json-rpc server; currently ongoing: block events, /dot/sync/2, host and runtime API implementation | [polkadot-light-client](https://github.com/eqlabs/polkadot-light-client), [cpp-libp2p](https://github.com/eqlabs/cpp-libp2p), [scale-codec-cpp](https://github.com/eqlabs/scale-codec-cpp), [soralog](https://github.com/eqlabs/soralog), [libp2p-sqlite-modern-cpp](https://github.com/eqlabs/libp2p-sqlite-modern-cpp) |

**Additional Information**
We will submit the application for phase 1 (implementation of this spec) the soonest.
