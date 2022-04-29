# Evaluation

- **Status:** Accepted
- **Application Link:** https://github.com/w3f/Grants-Program/blob/master/applications/Fennel_Protocol.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [The Unlicense](https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [wiki](https://github.com/fennelLabs/Fennel-Protocol/wiki), [rust doc](https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html) |  | 
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Milestone 1](https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-1), [Testing Guide](https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Guide) | Including inline documentation | 
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile) |  | 
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://github.com/fennelLabs/Fennel-Protocol/blob/main/articles/fennel-protocol-milestone-1.md) | - | 
| 1. | Identity Creation | <ul><li>[x] </li></ul> | [Identity](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L113) | Implemented | 
| 2. | Identity Mutation | <ul><li>[x] </li></ul> | [Identity](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L152) | Implemented | 
| 3. | Identity Revocation | <ul><li>[x] </li></ul> | [Identity](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L132) | Implemented | 
| 4. | Identity Signature | <ul><li>[x] </li></ul> | [Identity](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L197) | Implemented | 
| 5. | Trust Issuance | <ul><li>[x] </li></ul> | [trust](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/trust/src/lib.rs#L90) | Implemented | 
| 6. | Trust Request | <ul><li>[x] </li></ul> | [trust](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/trust/src/lib.rs#L122) | Implemented | 
| 7. | Trust Revocation | <ul><li>[x] </li></ul> | [trust](https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/trust/src/lib.rs#L154) | Implemented | 

## General Notes

Their identity pallet is different from the [identity module](https://github.com/paritytech/substrate/blob/master/frame/identity/src/lib.rs), which is nice. No copy paste. All unit test compile. Everything immediately worked and is according to the contract. It would be nice if the readme also explains the purpose of the project a little bit. 


**Additional notes:** 

Their entire code is published under the unlicense, which is nice: https://github.com/fennelLabs 