# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dotnix.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/README.md) | — |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [/checks](https://github.com/sporyon/dotnix-core/tree/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/checks) | Testing guide see README. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [docker.nix](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/docker.nix) | — |
| **0e.** | Article | <ul><li>[x] </li></ul> | [dotnix.xyz](https://dotnix.xyz/) | Fixed on request |
| 1. | Package Polkadot binary | <ul><li>[x] </li></ul> | [flake.nix](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/flake.nix#L31) | — |
| 2. | NixOS Validator Module | <ul><li>[x] </li></ul> | [polkadot-validator.nix](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/nixosModules/polkadot-validator.nix) | — |
| 3. | Secret Management | <ul><li>[x] </li></ul> | [checks/polkadot-validator-secrets.nix](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/checks/polkadot-validator-secrets.nix) | — |
| 4. | Tests for secret maangement | <ul><li>[x] </li></ul> | [polkadot-validator.nix](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/nixosModules/polkadot-validator.nix) | — |
| 5. | Basic Security Hardening | <ul><li>[x] </li></ul> | [polkadot-validator.nix](https://github.com/sporyon/dotnix-core/blob/9a0cc3705e10da23fb2743b1a2f76fd8f2c4c3c4/nixosModules/polkadot-validator.nix#L112) | — |


## General Notes

Tested in Docker on Ubuntu 22.04.
