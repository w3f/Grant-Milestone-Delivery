# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-verifier-for-accountable-light-client.md
- **Milestone Number:** 1

**Context**

This milestone contains two EIP compatibale elliptic curve precompile implementations. They have been merged into [paritytech/frontier](https://github.com/paritytech/frontier) through this [PR](https://github.com/paritytech/frontier/pull/1049/).

**Deliverables**

| Number  | Deliverable               | Link                                                                                                                                                                                                               | Notes                                                                          |
| ------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| **0a.** | License                   | Apache-2.0                                                                                                                                                                                                         | follow [paritytech/frontier](https://github.com/paritytech/frontier)'s license |
| **0b.** | Documentation             | [BLS12-377](https://paritytech.github.io/frontier/rustdocs/pallet_evm_precompile_bls12377/index.html), [BW6-761](https://paritytech.github.io/frontier/rustdocs/pallet_evm_precompile_bw6761/index.html)           |                                                                                |
| **0c.** | Testing and Testing Guide | [BLS12-377](https://github.com/paritytech/frontier/blob/master/frame/evm/precompile/bls12377/src/tests.rs), [BW6-761](https://github.com/paritytech/frontier/blob/master/frame/evm/precompile/bw6761/src/tests.rs) |                                                                                |
| 1.      | BLS12-377 precompile      | [code](https://github.com/paritytech/frontier/blob/master/frame/evm/precompile/bls12377/src/lib.rs)                                                                                                                |                                                                                |
| 2.      | BW6-761 precompile        | [code](https://github.com/paritytech/frontier/blob/master/frame/evm/precompile/bw6761/src/lib.rs)                                                                                                                  |                                                                                |

**Additional Information**

1. Update EIP-3026: Gas meter
   https://github.com/ethereum/EIPs/pull/7006

2. Celo's EIP-2539 implmentation has a problem about Multiexponentiation.
   https://github.com/celo-org/celo-blockchain/issues/2059
