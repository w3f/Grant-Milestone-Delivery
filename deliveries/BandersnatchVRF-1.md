# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/BandersnatchVRF.md
* **Milestone Number:** 1

**Context** (optional)
1. @pbnj/bandersnatch: Foundational Elliptic Curve Package
2. @pbnj/bandersnatch-vrf: Core VRF Implementation Suite

**Deliverables**

| Number | Deliverable | Link | Notes |
|--------|-------------|------|-------|
| 0a. | License | [LICENSE](https://github.com/Esscrypt/bandersnatch/blob/main/LICENSE) | Apache 2.0 |
| 0b. | Documentation | [Usage](https://github.com/Esscrypt/bandersnatch/blob/main/README.md) [Reference](https://esscrypt.github.io/bandersnatch/) | Inline code documentation and method docs |
| 0c. | Tests | [Tests](https://github.com/Esscrypt/bandersnatch/blob/main/src/__tests__/curve.test.ts) | Comprehensive unit tests covering core functions |
| 1. | Bandersnatch Curve Implementation | [Implementation](https://github.com/Esscrypt/bandersnatch/blob/main/src/curve.ts) | Complete elliptic curve implementation with GLV endomorphism optimization, point arithmetic, field operations, key generation, and curve parameter validation |
| 2. | Elligator2 Hash-to-Curve | [Implementation](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/crypto/elligator2.ts) | RFC 9380 compliant Elligator2 implementation for Bandersnatch curve, supporting both random oracle (RO) and non-uniform (NU) variants |
| 3. | IETF VRF Implementation | [Implementation](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ietf.ts) | Full RFC 9381 ECVRF implementation with Bandersnatch_XMD:SHA-512_ELL2_RO_ suite, proper DST handling, and test vector validation |
| 4. | Pedersen VRF Implementation | [Implementation](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/pedersen.ts) | Complete Pedersen VRF implementation extending IETF patterns, optimized for Bandersnatch characteristics, with comprehensive test coverage |
| 5. | Ring VRF Implementation | [Implementation](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/prover/ring-kzg-wasm.ts) | Full W3F Ring Proof implementation with KZG polynomial commitments, ring signature generation/verification, and privacy-preserving validator selection |
| 6. | Cryptographic Infrastructure | [Utilities](https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/utils) | RFC 8032 nonce generation, point processing utilities, VRF output validation, and comprehensive error handling with edge case coverage |
| 7. | Core Package Distribution | [NPM Package](https://www.npmjs.com/package/@pbnjam/bandersnatch) | NPM package publication, TypeScript declarations, browser compatibility, and cross-platform testing |
**Additional Information**

**Usage instructions:**
- [README bandersnatch](https://github.com/Esscrypt/bandersnatch/tree/main)
- [README bandersnatch-vrf](https://github.com/Esscrypt/bandersnatch-vrf/tree/main)
1 `bun install @pbnjam/bandersnatch`
2.`bun install @pbnjam/bandersnatch-vrf`


