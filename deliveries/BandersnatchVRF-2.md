# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/BandersnatchVRF.md
* **Milestone Number:** 2

**Context** (optional)
1. @pbnj/bandersnatch: Foundational Elliptic Curve Package
2. @pbnj/bandersnatch-vrf: Core VRF Implementation Suite

**Deliverables**

| Number | Deliverable | Link | Notes |
|--------|-------------|------------------------|
| **1.** | **Entropy VRF Implementation** | [Here](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/entropy-vrf.ts) | Complete implementation of Gray Paper 0.7.2 equation 6.17: `H_vrfsig ∈ bssignature{H_authorbskey}{Xentropy ∥ banderout{H_sealsig}}{[]}` for block entropy generation |
| **2.** | **Audit VRF Implementation** | [Here](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/audit-signature.ts) |Full audit signature generation for both tranche 0 and tranche N according to Gray Paper 0.7.2 equations 17.3 and 17.14, including work report hashing |
| **3.** | **Epoch Root Utilities** | [Here](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/entropy-vrf.ts) | Complete implementation of `getRingRoot` function for KZG polynomial commitments to validator sets, supporting ring VRF proofs |
| **4.** | **Gamma Processing Functions** | [Here](https://github.com/Esscrypt/bandersnatch-vrf/blob/main/src/utils/gamma.ts)| VRF output processing utilities including `getCommitmentFromGamma`, `getBanderoutFromGamma`, and RFC 9381 compliant point-to-hash conversion |
| **5.** | **JAM Integration Testing** | [Used in the fuzzer target](https://github.com/Esscrypt/pbnj-fuzzer-releases) | End-to-end test suites for all JAM protocol components, integration with PeanutButterAndJAM implementation, and real-world usage validation |
| **6.** | **Advanced Documentation** | [Here](https://github.com/Esscrypt/bandersnatch-vrf) and [Here](https://esscrypt.github.io/bandersnatch-vrf/)| Comprehensive tutorials for JAM protocol integration, specialized component usage guides, and Gray Paper compliance documentation |
| **7.** | **Performance Analysis** | [Here](https://github.com/Esscrypt/bandersnatch-vrf/tree/main/src/__tests__) | Specialized benchmarking for JAM protocol components, optimization analysis, and comparison with Rust reference implementations |
| **8.** | **Production Readiness** | [Here](https://www.npmjs.com/package/@pbnjam/bandersnatch-vrf) and [Here](https://www.npmjs.com/package/@pbnjam/bandersnatch) | Final package distribution, security hardening, edge case handling, and production deployment guidelines |
**Additional Information**

**Usage instructions:**
- [README bandersnatch](https://github.com/Esscrypt/bandersnatch/tree/main)
- [README bandersnatch-vrf](https://github.com/Esscrypt/bandersnatch-vrf/tree/main)
1 `bun install @pbnjam/bandersnatch@0.7.2-rc2`
2.`bun install @pbnjam/bandersnatch-vrf@0.7.2-rc5`

