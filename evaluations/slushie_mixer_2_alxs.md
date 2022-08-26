# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Slushie%20Mixer.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License | <ul><li>[x] </li></ul>      | [LICENSE](https://github.com/4IRE-Labs/Slushie/blob/main/LICENSE)   | MPL-2.0      |
| 0b.    | Documentation | <ul><li>[x] </li></ul>          | https://github.com/4IRE-Labs/Slushie/blob/main/README.md, https://github.com/4IRE-Labs/Slushie/tree/main/plonk_prover_tool#the-plonk-prover-cli-tool, https://github.com/4IRE-Labs/Slushie/tree/main/plonk_prover#generating-proof-logic | Improved in reponse to feedback |
| 0c.    | Tests | <ul><li>[x] </li></ul>                  | https://github.com/4IRE-Labs/Slushie/blob/main/plonk_prover/src/lib.rs, https://github.com/4IRE-Labs/Slushie/blob/main/plonk_prover_tool/src/main.rs         | >80% test coverage      |
| 1.     | The CLI app | <ul><li>[x] </li></ul>           | https://github.com/4IRE-Labs/Slushie/tree/main/plonk_prover_tool           | Doesn't compile to WASM, but the library does.      |
| 2.     | Proof production logic | <ul><li>[x] </li></ul> | https://github.com/4IRE-Labs/Slushie/tree/main/plonk_prover           | Uses Dusk PLONK      |

## General Notes

The codebase is well maintained with clean code, good inline documentation and high test coverage.
Usage instrucctions were sparse at first, but the team addressed this and provided detailed documentation.
