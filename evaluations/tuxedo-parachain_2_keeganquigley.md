# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo_parachain.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License     | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/LICENSE) | Apache 2.0 | 
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [off-narrative-labs.github.io](https://off-narrative-labs.github.io/Tuxedo), [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md) | Good documentation as usual | 
| 0c.    | Testing     | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/tree/939b44200241db29037f87bbf1c06cfe59975d21#testing-and-code-quality) | Good test coverage |
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md#docker), [Off-Narrative-Labs/packages](https://github.com/orgs/Off-Narrative-Labs/packages) | — |
| 1.     | Parachain Template Node | <ul><li>[ ] </li></ul> | [Node Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/parachain-node) [Runtime Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/tuxedo-parachain-runtime) [Docker Image](https://github.com/Off-Narrative-Labs/Tuxedo/pkgs/container/tuxedo-parachain) | A complete working parachain template node ready for hacking. Analogous to Cumulus's parachain template node. |
| 2. (bonus)     | `parachainify!` macro | <ul><li>[ ] </li></ul> | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_parachain_core/macro.parachainify.html), [Example Usage](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/tuxedo-parachain-runtime/src/lib.rs#L63-L64) | Analogous to `register_validate_block!`, but also configures all necessary parachain machinery. |
| 3. (bonus)    | Zombienet | <ul><li>[ ] </li></ul> | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#zombienet) [Config File](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/zombienet.toml) | To spin up a proper relay-para testnet, you can youse the provided zombienet config. |

# General Notes
