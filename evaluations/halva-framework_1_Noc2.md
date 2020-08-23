# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/34
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | License |<ul><li>[x] </li></ul>| [MIT License](https://github.com/halva-suite/halva/blob/master/LICENSE), [The Unlicense](https://github.com/halva-suite/halva-test-example/blob/master/LICENSE) | MIT and The Unlicense instead of Apache, but that’s fine | 
| 1. | Network + keyring config and chain spec parser |<ul><li>[x] </li></ul>| [PR #3](https://github.com/halva-suite/halva/pull/3) | Integrated | 
| 2. | Core |<ul><li>[x] </li></ul>| [PR #11](https://github.com/halva-suite/halva/pull/11), [Halva](https://github.com/halva-suite/halva) | Basic core integrated | 
| 3. | Testing |<ul><li>[x] </li></ul>| [PR #4](https://github.com/halva-suite/halva/pull/4) | halva-cli test didn't work initially (globalThis error), but it's [fixed](https://github.com/halva-suite/halva/commit/dadda3d8e26c57c818ede188433a81e2c4d32096) now,   npm test -> 1 passing|
| 4. | Documentations |<ul><li>[x] </li></ul>| [Usage example](https://github.com/halva-suite/halva-test-example), [readme](https://github.com/halva-suite/halva/blob/master/README.md#) | Current readme a little bit confusing: mentions halva.js but it’s not part of the repo., halva-cli --help doesn't provide a lot of information ("If you need help, use halva-cli --help"), "All tests are in the /substrate/tests directory." There is no substrate folder.  | 

## General Notes

A very useful halva-test-example repository. The documentation and testing of the code could be a little bit better.  

Security issues: 
- Prototype Pollution [Medium Severity](https://snyk.io/vuln/SNYK-JS-FLAT-596927) in flat@4.1.0
- Prototype Pollution [High Severity](https://snyk.io/vuln/SNYK-JS-LODASH-590103) in lodash@4.17.19

