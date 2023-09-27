# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/orochi-network-orosign-part1.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License     | <ul><li>[x] </li></ul> | [CC0 1.0](https://github.com/orochi-network/orochi-network.github.io/blob/b907b68bad61bab4df4f120f6c56bdd3ea8fddba/LICENSE) |
| 0b.    | Research    | <ul><li>[x] </li></ul> | [Threshold Signature chapter](https://github.com/orochi-network/orochi-network.github.io/blob/b907b68bad61bab4df4f120f6c56bdd3ea8fddba/src/threshold-ecdsa/chapter.md) | Research delivered for secp256k1, missing for ed25519 and sr25519 |
| 0c.    | Research    | <ul><li>[x] </li></ul> | [Threshold Signature chapter](https://github.com/orochi-network/orochi-network.github.io/blob/b907b68bad61bab4df4f120f6c56bdd3ea8fddba/src/threshold-ecdsa/chapter.md) | Public technical reports not provided |
| 1.     | Research    | <ul><li>[x] </li></ul> | [Threshold Signature chapter](https://github.com/orochi-network/orochi-network.github.io/blob/b907b68bad61bab4df4f120f6c56bdd3ea8fddba/src/threshold-ecdsa/chapter.md) | Research on secp256k1 threshold ECDSA provided |
| 2.     | Research    | <ul><li>[x] </li></ul> | [MPC Research for `secp256k1`](https://github.com/orochi-network/orochi-network.github.io/blob/b907b68bad61bab4df4f120f6c56bdd3ea8fddba/src/threshold-ecdsa/threshold-ecdsa-construction/introduction.md) | - |
| 3.     | Research    | <ul><li>[ ] </li></ul> | - | Sr25519 uses Schnorr, not ECDSA. Hence, the Canneti's Construction that relies on ECDSA doesn't seem suitable. |
| 4.     | Research    | <ul><li>[ ] </li></ul> | - | Ed25519 uses EdDSA, not ECDSA. Hence, the Canneti's Construction that relies on ECDSA doesn't seem suitable. |

## General Notes

-