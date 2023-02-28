# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/runtimeverification/web3-grants-program/blob/rv-kmir-grant/applications/rv-kmir.md

* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [BSD-3](https://github.com/runtimeverification/mir-semantics/blob/master/LICENSE) | 
| **0b.** | Documentation | [README](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/README.md) |
| **0c.** | Testing and Testing Guide | [Makefile](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/kmir/Makefile), [README](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/kmir/README.md) | `miri` is replaced by `rustc`, the latter is more suitable.
| **0d.** | Docker | [Dockerfile](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/Dockerfile) |
| 1. | MIR code snippets | `.mir` tests in [Parsing](https://github.com/runtimeverification/mir-semantics/tree/milestone1-delivery/kmir/src/tests/integration/test-data/parsing), [Compiletest-ui](https://github.com/runtimeverification/mir-semantics-compiletest/tree/9251b00e38504a6f1279b0ca9f81b90b4964080d/ui) | 
| 2. | Generate output from **miri** |`.stderr` and `.stdout` files in [Compiletest-ui](https://github.com/runtimeverification/mir-semantics-compiletest/tree/9251b00e38504a6f1279b0ca9f81b90b4964080d/ui) | `miri` is replaced by `rustc`
| 3. | **kmir** executable stub | [`kmir.py`](https://github.com/runtimeverification/mir-semantics/blob/milestone1-delivery/kmir/src/kmir/kmir.py) |

**Additional Information**

- For item number 1, the initial goal was to write `.mir` test cases manually. However, we dicovered later that `rustc` provides a comprehensive test suits [`compiletest`](https://rustc-dev-guide.rust-lang.org/tests/compiletest.html), in particular the test cases in suite
`ui` best suits our purpose, of providing the best coverage of MIR syntax.

- For item number 0c, 2, 3, `rustc` fits our purpose better than `miri` (`miri` is integrated in `rustc`) by emitting MIR file in each steps. 

- In the repo provided, we have implemented part of the MIR syntax which belongs to milestone 2. The **kmir** executable stub could be used to parse actual MIR programs. 