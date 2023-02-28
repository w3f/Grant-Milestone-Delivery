# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/solidity-trie-verifier.md](https://github.com/w3f/Grants-Program/blob/master/applications/solidity-trie-verifier.md) 
* 
* **Milestone Number:** 1

**Context**
> This milestone presents the completion of the Solidity Trie library, enabling gas efficient Verification of Substrate style merkle patricia tries.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [https://github.com/polytope-labs/solidity-merkle-trees/blob/merkle-patricia-trie/LICENSE](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/LICENSE) | Apache 2.0 | 
| 0b.  | Documentation |[https://github.com/polytope-labs/solidity-merkle-trees#merkle-patricia-trie](https://github.com/polytope-labs/solidity-merkle-trees#merkle-patricia-trie)| |
| 0c | Testing and Testing Guide | Test coverage include; [unit test](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/forge/src/merkle_patricia.rs), [Solidity](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/test/MerklePatricia.t.sol) and [Fuzz Test](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/forge/fuzz/src/lib.rs) | |
| 0d | Article |  [https://docs.google.com/document/d/1ZWzVbbYk4Yal4t_cBmoyPfDjSmS8egV9nnrOJq7DOII/edit](https://docs.google.com/document/d/1ZWzVbbYk4Yal4t_cBmoyPfDjSmS8egV9nnrOJq7DOII/edit) | |
| 1 | Solidity Scale Codec | [https://github.com/polytope-labs/solidity-merkle-trees/blob/main/src/trie/substrate/ScaleCodec.sol](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/src/trie/substrate/ScaleCodec.sol) | This includes functionality to decode the [`Nodekind`](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/trie/Node.sol#L9) enums using [`decodeNodeKind`](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/trie/substrate/SubstrateTrieDB.sol#L25), the [`ByteSlice`](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/trie/Bytes.sol#L7) can be utilized for decoding `Vec<Vec<u8>>` as earlier [discussed](https://github.com/w3f/Grants-Program/pull/1481#issuecomment-1409013021). |
| 2 | Trie Verifier | [`VerifySubstrateProof`](https://github.com/polytope-labs/solidity-merkle-trees/blob/82698e828b883eeb1ee0f658956c0c0ad26f5f49/src/MerklePatricia.sol#L31) | Along with it's sub-implementations(i.e [Node](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/src/trie/Node.sol), [NibbleSlice](https://github.com/polytope-labs/solidity-merkle-trees/blob/main/src/trie/NibbleSlice.sol) etc.)|

**Additional Information**

The sub implementations highlighted as separate deliverables in the application provided contextual information of the scope of work needed to implement the verifier.
