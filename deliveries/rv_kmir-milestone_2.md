# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [RV KMIR](https://github.com/w3f/Grants-Program/blob/master/applications/rv-kmir.md)

* **Milestone Number:** 2

**Deliverables**
Specify the syntax of MIR programs in K.

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| **0a.** | License | [BSD-3](https://github.com/runtimeverification/mir-semantics/blob/master/LICENSE)  |
| **0b.** | Documentation | [kmir CLI instructions](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/kmir/README.md) |
| **0c.** | Testing and Testing Guide | [Testing Instructions with Docker](https://github.com/runtimeverification/mir-semantics/tree/milestone2-deliverable#running-integration-tests-with-docker) |
| **0d.** | Docker | [Dockerfile](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/Dockerfile) |
| 1. | KMIR syntax | [mir-syntax.k](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/kmir/k-src/mir-syntax.k) |
| 2. | **kmir** executable extension | [**kmir parse** implementation](https://github.com/runtimeverification/mir-semantics/blob/bd09e9d1716904afbbab2c0e27735202689d788e/kmir/src/kmir/__main__.py#L23), [**kmir parse** examples](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/kmir/README.md#examples) |

**Additional Information**

So far, we are able to pass ~3000 test cases in the conformance test cases, leaving 85 test cases not passes successfully. The unsuccessful test cases are due to tricky syntax rules or the lack of support in our K tool.

We consider these tricky cases lower priority for the moment and will tackle it later while/ after we developping the execution semantics.