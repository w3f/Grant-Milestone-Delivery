# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/solidity-trie-verifier.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/LICENSE) | - |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Docs](https://github.com/polytope-labs/solidity-merkle-trees/tree/ca8940f328c2fffdb720367e467e096e291dee32#merkle-patricia-trie) | Very brief - contains merely npm install instructions and a code sample for each merkle tree. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [unit tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/src/merkle_patricia.rs), [patricia tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/test/MerklePatricia.t.sol), [fuzz tests](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/fuzz/src/lib.rs) | Currently, the testing instructions are missing. Also, is there a reason to allow dead code in the tests, see [here](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/fuzz/src/lib.rs#L1) and [here](https://github.com/polytope-labs/solidity-merkle-trees/blob/ca8940f328c2fffdb720367e467e096e291dee32/forge/src/merkle_patricia.rs#L2)? |
| **0d.** | Docker | <ul><li>[ ] </li></ul> | ? | Currently missing. |
| 0e. | Article | <ul><li>[x] </li></ul> | [Article](https://docs.google.com/document/d/1ZWzVbbYk4Yal4t_cBmoyPfDjSmS8egV9nnrOJq7DOII/edit) | - |
| 1 | Solidity SCALE Codec | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | This will include support for `enum{option/result}`, `Vec<Vec<u8>>` decoding and other types required for verifying state proofs as current implementations([Darwinia](https://github.com/darwinia-network/darwinia-messages-sol/blob/master/contracts/utils/contracts/ScaleCodec.sol), [Snowfork](https://github.com/Snowfork/snowbridge/blob/main/core/packages/contracts/contracts/ScaleCodec.sol)) don't support.
| 2. | KeyspacedDB | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L426). |
| 3. | MemoryDB | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/lib.rs#L163). |
| 4. |  NodeCodec | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_codec.rs#L81). |
| 5. | Node | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L184). |
| 6. | NodePlan | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) |   Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L507). |
| 7. | NodeHeader | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26](https://github.com/paritytech/substrate/blob/129fee774a6d185d117a57fd1e81b3d0d05ad747/primitives/trie/src/node_header.rs#L26). |
| 8. | NibbleSlicePlan | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/node.rs#L454). |
| 9. | NibbleSlice | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/nibble/mod.rs#L180). |
| 10. | Layoutv0 | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the Solidity implementation of following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L60). |  
| 11. | Layoutv1 | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the Solidity implementation of the following; [https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63](https://github.com/paritytech/substrate/blob/ece32a72e934f6fe6705a7d418bbf3e71b4931ad/primitives/trie/src/lib.rs#L63) . |
| 12. | Trie Verifier | <ul><li>[ ] </li></ul> | (will evaluate after 0c., 0d. are fixed) | Provide the Solidity implementation of the following; [https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233](https://github.com/paritytech/trie/blob/42f086bc8748f25e978da10a9cefdb396a72b158/trie-db/src/triedb.rs#L233). |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments
