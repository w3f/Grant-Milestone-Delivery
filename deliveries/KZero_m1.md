# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [KZero Grant Application](https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md)
* **Milestone Number:** 1

## KZero zk circuit implementation

**Deliverables**
Number	Deliverable	Specification
| Number | Deliverable               | Specification                                                |
| ------ | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | GPLv3                                                        |
| 0b.    | Documentation             | We will provide technical documentation for the code, as well as deployment and testing guides, explaining key function calls and how users can start and test our ZKP-related server, which will demonstrate how it works. |
| 0c.    | Testing and Testing Guide | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1      | Kzero Circuit Code        | https://github.com/kzero-xyz/kzero-circuit|
| 2      | Kzero Circuit Guide        | https://github.com/kzero-xyz/kzero-circuit|
| 3      | Kzero Circuit Testing cases | https://github.com/kzero-xyz/kzero-circuit/tree/dev/test|
| 4      | ZKP Witness & Proof Generation Guide | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-zkp-service-guide.md  |
| 5      | All-in-One ZKP Witness & Proof Generation Service| https://github.com/kzero-xyz/kzero-service |
| 6      | ZKP Service Testing Doc| https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-common-package-test.md |

## Additional Information

### Technical Adjustment on the Scope of zkp Service Delivery
In the original proposal, we planned to deliver the zkp Witness Service and zkp Proof Service as separate components. However, after further technical refinement and internal discussions, we have decided to deliver a unified zkp Service that integrates both witness generation and proof generation. This adjustment is based on the following technical and architectural considerations:

##### Strong Coupling Between Witness and Proof Generation
In a zero-knowledge proof system, the witness is the private input required to prove a given statement. It is typically derived from user inputs, signatures, on-chain data, and other context-specific information. The proof is then generated based on this witness and public inputs, using a specific circuit (e.g., defined in Circom).
Since the witness structure is tightly coupled with the circuit logic and proving system (e.g., Groth16, PLONK), separating witness and proof generation into two independent services introduces risks such as version mismatch, data structure inconsistency, and circuit misalignment. Delivering them together as a unified zkp Service ensures compatibility, maintainability, and overall reliability.

##### Unified zkp Service Enables Better Performance and Simpler Interfaces
In practical scenarios—such as the zkLogin flow—users should be able to generate zero-knowledge proofs with minimal interaction and overhead. If witness and proof are handled by separate services, sensitive witness data must be persisted and transmitted between services or components, which adds security risks and performance costs.
A unified zkp Service can process both steps within the same memory context, reducing latency and simplifying the interface. This design also allows for more efficient error handling and streamlined integration.

##### zkLogin Targets the Polkadot Ecosystem (Relaychain and Parachains)
Our zkLogin module is designed to serve the broader Polkadot ecosystem, including both the relay chain and parachains. A complete zkp Service packaged as an SDK offers a consistent and reusable component that developers across the ecosystem can easily integrate. This also prepares us for future extensibility, such as supporting different proving systems (Groth16, PLONK, Marlin, etc.) or managing multiple circuits within a single framework.
Standardizing zkp generation into one cohesive service aligns better with the needs of ecosystem developers and simplifies cross-chain deployment and maintenance.

In summary, replacing separate witness and proof services with a unified zkp Service aligns more closely with engineering best practices in zero-knowledge systems. It improves developer experience, ensures security and compatibility, and enhances reusability across the ecosystem. This adjustment maintains—and even strengthens—the original proposal's value delivery.


### Techical Docs
1. Research doc on zkp proof generation: https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-zkp-approaches-analysis.md
2. Spec of zkLogin circuit: https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-circuit-spec.md
3. Why we choose this implementation: https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-why-adopting-this-architechture.md
