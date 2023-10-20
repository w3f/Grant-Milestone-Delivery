# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [RV KMIR](https://github.com/w3f/Grants-Program/blob/master/applications/rv-kmir.md)

* **Milestone Number:** 3

**Deliverables**
Specify the semantics of MIR programs in K.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | [BSD-3](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/LICENSE) |
| **0b.** | Documentation | [kmir CLI instructions](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/README.md) |
| **0c.** | Testing and Testing Guide | [Testing Instructions with Docker](https://github.com/runtimeverification/mir-semantics/tree/milestone3-deliverable#running-integration-tests-with-docker) |
| **0d.** | Docker | [Dockerfile](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/Dockerfile |
| 1. | KMIR semantics | [mir.md](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/k-src/mir.md)) |
| 2. | **kmir** executable extension | [**kmir run** implementation](https://github.com/runtimeverification/mir-semantics/blob/e5060a191fabe20799317ad4bd1ed50b4bf1adb9/kmir/src/kmir/__main__.py#L59), [** kmir run ** command](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/README.md#kmir-commands) |

**Additional Information**

KMIR currently passes 275 of the rustc ui tests that we use as our benchmark. We aim to continue updating the syntax and semantics of KMIR until to handle more tests.