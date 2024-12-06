# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ThresholdSignature.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Fiono11/cli/blob/0a8be19bb0b0a519dde7e66e5dde500b2dd9eef4/LICENSE) | GPLv3 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [link](https://github.com/Fiono11/cli/blob/0a8be19bb0b0a519dde7e66e5dde500b2dd9eef4/README.md) | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a group of users can generate a shared public key and use the corresponding secret key to sign threshold signatures multiple times without revealing it, which will show how the new functionality works. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/Fiono11/cli/blob/0a8be19bb0b0a519dde7e66e5dde500b2dd9eef4/README.md#tutorial) | No new tests since [M1](https://github.com/w3f/schnorrkel/pull/110) |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Fiono11/cli/blob/0a8be19bb0b0a519dde7e66e5dde500b2dd9eef4/Dockerfile) | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| **0e.** | Article | <ul><li>[x] </li></ul> | [docs.google.com](https://docs.google.com/document/d/1FSytmhBTpTCfM6HUZ3fK-ERXsvgdgwJAyN5dl8013oc/edit?tab=t.0) | We will publish an **article**/workshop that explains how the Proof of Concept works under the hood and how it can be used from a user perspective. |
| **1.a** | CLI Proof of Concept Threshold Signature Implementation for Polkadot/Kusama | <ul><li>[x] </li></ul> | [Fiono11/cli](https://github.com/Fiono11/cli/tree/0a8be19bb0b0a519dde7e66e5dde500b2dd9eef4) | We will develop a CLI application in Rust that uses the previous libraries as a Proof of Concept Threshold Signature implementation with out-of-band communication between participants, being the end goal to broadcast a valid extrinsic to a Polkadot/Kusama testnet from a shared group key. |


## General Notes

- —
