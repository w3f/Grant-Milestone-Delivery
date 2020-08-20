# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/34
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | License |<ul><li>[x] </li></ul>| [MIT License](https://github.com/halva-suite/halva/blob/master/LICENSE), [The Unlicense](https://github.com/halva-suite/halva-test-example/blob/master/LICENSE) | MIT and The Unlicense instead of Apache, but that’s fine | 
| 1. | Network + keyring config and chain spec parser |<ul><li>[x] </li></ul>| [PR #3](https://github.com/halva-suite/halva/pull/3) | Integrated | 
| 2. | Core |<ul><li>[ ] </li></ul>| [PR #11](https://github.com/halva-suite/halva/pull/11), [Halva](https://github.com/halva-suite/halva) | ...| 
| 3. | Testing |<ul><li>[ ] </li></ul>| [PR #4](https://github.com/halva-suite/halva/pull/4) | halva-cli test didn't work,   npm test -> 1 passing|
| 4. | Documentations |<ul><li>[ ] </li></ul>| [Usage example](https://github.com/halva-suite/halva-test-example), [readme](https://github.com/halva-suite/halva/blob/master/README.md#) | Current readme a little bit confusing: mentions halva.js but it’s not part of the repo., halva-cli --help doesn't provide a lot of information ("If you need help, use halva-cli --help"), "All tests are in the /substrate/tests directory." There is no substrate folder.  | 

## General Notes

halva-cli test following the halva-test-example readme, results in the following:
```
*** 
*** You are using the node-template, depending on your config and age of the template, you may
*** have some unexpected results without applying the correct config for your node type:
*** 
*** - If you have trouble sending txs, apply https://polkadot.js.org/api/start/FAQ.html#i-cannot-send-transactions-from-my-node-template-based-chain
*** - If you have trouble parsing events, apply https://polkadot.js.org/api/start/FAQ.html#using-a-non-current-master-node-i-have-issues-parsing-events
*** 
(node:45863) UnhandledPromiseRejectionWarning: ReferenceError: globalThis is not defined
    at Object.exports.SetTestGlobal (/usr/local/lib/node_modules/halva-cli/build/main/TestRunner/Test.js:50:5)
    at Object.exports.HalvaRunTests (/usr/local/lib/node_modules/halva-cli/build/main/TestRunner/Test.js:40:13)
    at process._tickCallback (internal/process/next_tick.js:68:7)
(node:45863) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)
(node:45863) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

Security issues: 
- Prototype Pollution [Medium Severity](https://snyk.io/vuln/SNYK-JS-FLAT-596927) in flat@4.1.0
- Prototype Pollution [High Severity](https://snyk.io/vuln/SNYK-JS-LODASH-590103) in lodash@4.17.19

