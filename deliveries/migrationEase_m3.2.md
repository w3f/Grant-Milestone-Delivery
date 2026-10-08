# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [MigrationEase.md](https://github.com/w3f/Grants-Program/blob/master/applications/MigrationEase.md)
* **Milestone Number:** 3.2

**Context**

**Maintenance Summary**
We continued operating and maintaining the application throughout the 12-month support period. This reporting update covers activities carried out between March and May.
During this period, several improvements were implemented to enhance the stability, reliability, and overall user experience of Ledger device interactions and the migration process.

[v1.10.0 — Released June 5, 2026](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.10.0)

**Improved Ledger Connection Stability and User Experience:**
- Prevents spurious disconnects by distinguishing between genuine Ledger unplugs and device app-switches.
- Introduces anisConnectingstate, which disables interaction and provides clearer feedback during connection and synchronization.
- Ensures consistent propagation of Ledger connection status across UI components, fixing issues where disconnects were not always reflected.
- Adds re-entry guards to prevent multiple concurrent Ledger operations from causing connection errors.

**Enhanced Migration Logic and Transaction Reliability:**
- Resolves an issue with transaction nonce retrieval by reading the nonce as a number directly from the Polkadot API codec, preventing parsing errors from formatted strings.
- Utilizes runtime-derived weights for multisig transactions, improving transaction success rates and falling back to estimates if runtime data is unavailable.
- Corrects the calculation of conviction voting unlock periods by referencing the appropriate chain constant.
- Ensures robust API disconnection and status cleanup during transaction submission, especially upon failures.
- Prevents "Select All" from picking multisig accounts that are blocked from migration due to pending calls lacking internal signers.

**Refined UI State Management and Reactivity:**
- Implements "edge-triggered" effects for automatic tab navigation in the migration flow, ensuring smooth transitions between connection, synchronization, and other stages.
- Resets migration verification statuses and progress dialogs more consistently across sessions and batch items.
- Updates destination address reconciliation logic to preserve existing verification statuses when the list of addresses changes.

**General Improvements:**
- Updates various dependencies to their latest versions, ensuring better compatibility and security.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [License file](https://github.com/Zondax/polkadot-web-migration?tab=Apache-2.0-1-ov-file#readme)  |
| **0b.** | Documentation | [Docs](docs.zondax.ch/polkadot-migration-app) | 
| **0c.** | Testing and Testing Guide | [e3e tests](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__ )|
| **0d.** | Docker | [Docker file](https://github.com/Zondax/polkadot-web-migration/blob/main/dockerfile) |
| 1. |  code| [Application source code](https://github.com/Zondax/polkadot-web-migration)  | [v1.10.0](https://github.com/Zondax/polkadot-web-migration/releases/tag/v1.10.0)
