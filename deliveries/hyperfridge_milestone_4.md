# Milestone Delivery :mailbox: Hyperfridge, MS4

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
  
* **Milestone Number:** 4

**Context** 

This milestone converts Hyperfridge solo chain to parachain and integrates pEURO stable coin to Asset Hub.

**Deliverables**

| Number | Deliverable | Link | Notes/Specification |
| -----: | ----------- | ------ | ------------- |
| 0a. | License | [Licence](https://github.com/element36-io/ocw-ebics/blob/main/LICENSE) |  |
| 0b. | Documentation | [Documentation Root](https://github.com/element36-io/ocw-ebics/blob/main/README.md) |  |
| 0c. | Testing Guide | [Testing Guide](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md) | Use this as starting point to test the whole system.  |
| 0d. | Docker |  | [Docker](https://hub.docker.com/r/e36io/ebics-ocw/tags), see main README how to use |
| 1. | Stablecoin Parachain | [Parachain](https://github.com/element36-io/ocw-ebics/tree/main) | Convert the current solochain into parachain. Client, runtime and pallet was adjusted so that it could be integrated with Asset Hub. `polkadot-sdk` dependency upgrade was also performed.|
| 2. | AssetHub Connection | [Config](https://github.com/element36-io/ocw-ebics/blob/main/runtime/src/xcm_config.rs) | XCM configuration is provided and fiat ramps pallet is adjusted to be integrated with Asset Hub. Now users can teleport their stable coin to Asset Hub and back. |
| 3. | Zombienet | [Config](https://github.com/element36-io/ocw-ebics/blob/main/zombienet.toml) | Zombienet configuration that will launch a parachain with a local relay chain is provided. |
| 4. | E2e Tests | [e2e-tests](https://github.com/element36-io/ocw-ebics/tree/main/runtime/src/e2e_tests) | End-to-end tests with `xcm-simulator` is provided which tests the new features of this milestone with a simulated version of Asset Hub. |
| 5. | Whitepaper| | There were no significant changes or findings to be reflected in the whitepaper. |

**Additional Information**

Not included in the deliverables:

- upgraded `substrate` dependencies
- code refactoring of the pallets

One idea of integrating Asset Hub was directly minting and burning while processing statements. But due to asynchronous nature of XCM messages and lack of possibilities to query the result of it, we went with a more "lazy" approach where minting and burning of stable coin into Asset Hub is manually controlled by the user. Moreover, in Hyperfridge parachain, stable coin is now isolated to its own `Balances` pallet instance.
