# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate_core_polywrapper.md
* **Milestone Number:** 1

**Context**

Polywrap is the technology behind the Substrate wrapper. Polywrap wrappers are decentralized SDKs that dApps can seamlessly integrate in order to interact with web3 protocols. This effort includes the Substrate core wrapper and accompanying technical documentation.

**Deliverables**

Bootstrap polywrapper project using w3/cli
Write graphql schemas:
* Substrate-signer-provider - Low-level interface for accessing the application's configurable signer / provider.
* Substrate-core - Higher-level interface for interacting with a substrate based chain. This depends upon on an implementation of the substrate-signer-provider interface above.
`substrate-signer-provider` Typescript Plugin for signing messages. Example: Near plugin 
Implement graphql schema methods in Rust using Polywrap http plugin
Deploy polywrapper to ipfs

> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Link](https://github.com/ChainSafe/integrations/blob/substrate-integration/protocol/substrate/LICENSE.md) | |
| 0b. | Documentation | [Link](https://github.com/ChainSafe/integrations/blob/substrate-integration/protocol/substrate/rpc-wrapper/README.md) | |
| 0c. | Testing | [Link](https://github.com/ChainSafe/integrations/blob/substrate-integration/protocol/substrate/rpc-wrapper/tests/e2e.spec.ts) | Note one test case is commented out with an explanation for when it can be re-included |
| 1. | Bootstrap polywrapper project using w3/cli | [Link](https://github.com/ChainSafe/integrations/tree/substrate-integration/protocol/substrate/rpc-wrapper) | Wrapper project was initialized and follows best practices as set up by the CLI | 
| 2. | Graphql schemas for substrate-signer-provider  | [Link](https://github.com/ChainSafe/integrations/blob/substrate-integration/protocol/substrate/signer-provider-js/src/schema.graphql) | The API is kept small and almost identical to the API exposed by the polkadot-js plugin. Allows signing raw and transaction payloads. |
| 3. | Graphql schemas for substrate-core  | [Link](https://github.com/ChainSafe/integrations/blob/substrate-integration/protocol/substrate/rpc-wrapper/schema.graphql) | Allows querying all relevant data about the connected chain as well as the ability to sign (via the wrapper) and submit transactions. There is still some API refinement to be done in the future. |
| 4. | `substrate-signer-provider` Typescript Plugin  | [Link](https://github.com/ChainSafe/integrations/tree/substrate-integration/protocol/substrate/signer-provider-js) | Currently supports wrappers running in the browser context only. Allows wrappers to request signing via the polkadot-js browser extension |
| 5. | graphql schema methods in Rust using Polywrap http plugin | [Link](https://github.com/ChainSafe/integrations/blob/substrate-integration/protocol/substrate/rpc-wrapper/src/lib.rs) | Implementions of all functionality defined in the graphQL API. Uses the signer-provider plugin for signing and the http plugin for requesting from the node RPC. |
| 6. | Deploy polywrapper to ipfs | N/A | Wrapper is not yet ready for deployment |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
