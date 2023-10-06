# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-verifier-for-accountable-light-client.md
- **Milestone Number:** 2

**Context**

This milestone is to implement the solidity version of the two verifiers in [apk-proof](https://github.com/w3f/apk-proofs), which are the [simple (basic)](https://github.com/w3f/apk-proofs/blob/main/bw6/src/verifier.rs#L38) and [packed](https://github.com/w3f/apk-proofs/blob/main/bw6/src/verifier.rs#L69) verifiers. But The solidity verifiers implemented in this milestone has two differences from the original rust version.

1. Fiat-shamir transformation. 

   This is listed in the application document.

   We replace `Merlin::Transcript` with a more solidity friendly way. https://github.com/darwinia-network/apk-proofs/pull/4.
2. The hash-to-curve function.

   Changed to `map_to_curve_simple_swu`. https://github.com/darwinia-network/apk-proofs/pull/3/files.

   Switch to `map_to_curve_elligator_2` after arkworks finished this PR, https://github.com/arkworks-rs/algebra/pull/659.

**Deliverables**

| Number  | Deliverable               | Link                                                         | Notes                                                        |
| ------- | ------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                   | Apache-2.0                                                   |  |
| **0b.** | Documentation             | https://darwinia-network.github.io/apk-verifier/index.html   |                                                              |
| **0c.** | Testing and Testing Guide | https://github.com/darwinia-network/apk-verifier#run-test-in-docker |                                                              |
| 1.      | Libraries preparation     | 1. The solidity friendly fiat-shamir transformation. [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/common/transcript/Simple.sol)<br />2. Lagrange evaluation. [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/common/poly/evaluations/Lagrange.sol) <br />3. KZG verification. [code](https://github.com/darwinia-network/apk-verifier/blob/6b8bfd37e2c4142bf08d8c98f61a1d3e0c3df57d/src/common/pcs/kzg/KZG.sol) |                                                              |
| 2.      | Basic verifier     | [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/Basic.sol) |                                                              |
| 3.      | Packed verifier    | [code](https://github.com/darwinia-network/apk-verifier/blob/main/src/Packed.sol) |                                                              |

**Additional Information**

- https://github.com/paritytech/frontier/pull/1207
- https://github.com/ethereum/EIPs/pull/7642
- https://github.com/paritytech/frontier/pull/1173
- https://github.com/ethereum/EIPs/pull/7006
- https://github.com/paritytech/frontier/pull/1049
- https://github.com/darwinia-network/apk-proofs
