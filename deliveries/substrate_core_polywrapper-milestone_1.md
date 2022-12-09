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

* `rpc-wrapper` Wasm Wrapper - Higher-level interface for interacting with a substrate based chain. This depends upon on an implementation of the `signer-provider` plugin below.
* `signer-provider` Plugin - Low-level interface for accessing the application's configurable signer / provider.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/LICENSE.md) | |
| 0b. | Documentation | [Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/README.md) | |
| 0c. | Testing | [Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/src/__tests__/e2e.spec.ts) | Note one test case is commented out with an explanation for when it can be re-included |
| 0d. | Article | [Link](https://docs.google.com/document/d/1G7l0sgyEI_X9ucnEkJMUcD_bYo-FeCm9Ot_ETR7giiM/edit#heading=h.uzkbekb348bf) | |
| 1. | Schema Definitions  | [Signer-Provider Plugin Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/signer-provider-js/src/schema.graphql), [RPC Wrapper Link](https://github.com/polywrap/integrations/blob/main/protocol/substrate/rpc-wrapper/schema.graphql) | The plugin's schema is kept small and almost identical to the API exposed by the polkadot-js plugin. Allows signing raw and transaction payloads. The RPC wrapper's schema allows the querying of all relevant data about the connected chain as well as the ability to sign (via the wrapper) and submit transactions. There is still some API refinement to be done in the future. |
| 2. | `signer-provider` TypeScript Plugin  | [Link](https://github.com/polywrap/integrations/tree/main/protocol/substrate/signer-provider-js) | |
| 3. | `rpc-wrapper` Wasm Wrapper | [Link](https://github.com/polywrap/integrations/tree/main/protocol/substrate/rpc-wrapper) | Implementions of all functionality defined in the graphQL API. Uses the signer-provider plugin for signing and the http plugin for requesting from the node RPC. |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
