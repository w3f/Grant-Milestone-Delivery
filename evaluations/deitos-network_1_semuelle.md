# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Deitos_Network.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [deitos-node](https://github.com/Deitos-Network/deitos-node/blob/a3437731fff2adbeb314d2d89bb9a2cb109bf140/LICENSE), [deitos-ip](https://github.com/Deitos-Network/deitos-ip/blob/39488fdc2fc831d63dceb5eebcd6165247d5ae6b/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Deitos-Network/deitos-node](https://github.com/Deitos-Network/deitos-node/blob/a3437731fff2adbeb314d2d89bb9a2cb109bf140/pallets/deitos/README.md), [Deitos-Network/deitos-ip](https://github.com/Deitos-Network/deitos-ip/blob/39488fdc2fc831d63dceb5eebcd6165247d5ae6b/README.md) | Very good docs overall. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Deitos-Network/deitos-node](https://github.com/Deitos-Network/deitos-node/tree/a3437731fff2adbeb314d2d89bb9a2cb109bf140/pallets/deitos/src/tests), [Deitos-Network/deitos-ip](https://github.com/Deitos-Network/deitos-ip/blob/39488fdc2fc831d63dceb5eebcd6165247d5ae6b/README.md) | Thorough documentation and automation. Everything worked out of the box. |
| **0d.** | Docker file | <ul><li>[x] </li></ul> | [Deitos-Network/deitos-ip](https://github.com/Deitos-Network/deitos-ip/blob/w3f-grant-m1-delivery/docker-compose-ip.yml) | — |
| 1. | Substrate Node with BABE consensus | <ul><li>[x] </li></ul> | [Deitos-Network/deitos-node](https://github.com/Deitos-Network/deitos-node/commit/0def0d8a0ca026ecb95e782f5aae4aba4b71b102) | — |
| 2. | Pallet Deitos foundation (pallet-deitos) | <ul><li>[x] </li></ul> | [Deitos-Network/deitos-node](https://github.com/Deitos-Network/deitos-node/tree/a3437731fff2adbeb314d2d89bb9a2cb109bf140/pallets/deitos) | — |
| 3. | Registration of Infrastructure Provider (pallet-deitos) | <ul><li>[x] </li></ul> | [Deitos-Network/deitos-node](https://github.com/Deitos-Network/deitos-node/blob/cb5fb49e310c105869c2eba8de29e0ca6e0d15c2/pallets/deitos/src/lib.rs#L386) | — |
| 4. | Agreements Module (pallet-deitos) | <ul><li>[x] </li></ul> | [link](https://github.com/Deitos-Network/deitos-node/blob/cb5fb49e310c105869c2eba8de29e0ca6e0d15c2/pallets/deitos/src/impls.rs) | — |
| 5. | Agreements termination and on-chain reputation (pallet-deitos) | <ul><li>[x] </li></ul> | [eitos-Network/deitos-node](https://github.com/Deitos-Network/deitos-node/blob/cb5fb49e310c105869c2eba8de29e0ca6e0d15c2/pallets/deitos/src/types.rs#L92) | — |


## General Notes

Tested locally following the [`deitos-ip` README](https://github.com/Deitos-Network/deitos-ip/blob/39488fdc2fc831d63dceb5eebcd6165247d5ae6b/README.md) and [`deitos-pallet` user guide](https://github.com/Deitos-Network/deitos-node/blob/cb5fb49e310c105869c2eba8de29e0ca6e0d15c2/docs/pallet-deitos-user-guide.md). The documents provide an easy-to-follow testing guide for all components. 
