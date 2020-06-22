# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/23
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>| [license](https://github.com/TerenceGe/sr25519-donna/blob/master/LICENSE) | Correct license  | 
| 1. | keypair creation |<ul><li>[ ] </li></ul>| [code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L121) |  | 
| 2. | keypair derivation |<ul><li>[ ] </li></ul>|[derive keypair hard code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L138), [derive keypair hard example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L118), [derive keypair soft code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L155), [derive keypair soft example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L77), [derive public soft code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L187), [derive public soft example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L100) |  | 
| 3. | sign/verify message |<ul><li>[ ] </li></ul>|[sign code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L211), [sign example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L45), [verify code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/sr25519.c#L281), [verify example](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/example/src/main.c#L64)|  | 
| 4. | random number generator |<ul><li>[x] </li></ul>|[code](https://github.com/TerenceGe/sr25519-donna/blob/master/src/sr25519-randombytes.h), [build option](https://github.com/TerenceGe/sr25519-donna#random-options)| build-in random number generator | 
| 5. | curve operation |<ul><li>[x] </li></ul>|[code](https://github.com/TerenceGe/sr25519-donna/blob/dc5ead4ea72ecfe86dc588b55bdaeb621b735bb0/src/ristretto255.c#L7), [build option](https://github.com/TerenceGe/sr25519-donna#curve-operation-options)| supports both 32bit and 64bit curve operations | 
| 6. | add documentation |<ul><li>[x] </li></ul>|[readme](https://github.com/TerenceGe/sr25519-donna)| sufficient documentation | 

## General Notes

Very good delivery documentation. The code is clean (except some small comments), well tested and has a lot of examples.  