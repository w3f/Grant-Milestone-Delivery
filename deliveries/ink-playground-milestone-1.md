# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Ink Playground IDE Improvements Grant](https://github.com/w3f/Grants-Program/blob/master/applications/ink-playground-ide-improvements.md).
* **Milestone Number:** 1

**Context**
Implement Ink's Dependency versioning

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0.a. | License | https://github.com/Zeeve-App/ink-playground/blob/version_play/LICENSE | Apache-2.0 |
| 0.b. | Documentation | https://github.com/Zeeve-App/ink-playground/blob/version_play/README.md | We will provide both inline documentation of the code and a basic tutorial that explains how a user can open and save a file |
| 1.  | On demand version specific compilation | https://github.com/paritytech/ink-playground/pull/815 | We will add the ability to build the compiler environment if a compiler environment is not present with a specific version of Ink! |
| 2. | Dependency Version support | https://github.com/paritytech/ink-playground/pull/815, https://github.com/paritytech/ink-playground/pull/817 | We will upgrade and maintain Ink! and cargo-contract dependencies versions up to date and have provision to have older version support |
| 3. | Dependency Version support | https://github.com/paritytech/ink-playground/pull/815 | We will add the ability to add Playground's Ink! version support to latest version as soon as new version of Ink! is released without manual intervention |
| 4. | Select Ink! version from UI | https://github.com/paritytech/ink-playground/pull/817 | We will add ability to select Ink!'s version from the IDE to compile |

## **Additional Information**

### Issues resolved in this milestone
- [Support supplying ink! version in URL · Issue #427 · paritytech/ink-playground](https://github.com/paritytech/ink-playground/issues/427)
- [Update playground automatically upon new ink! release · Issue #197 · paritytech/ink-playground · GitHub](https://github.com/paritytech/ink-playground/issues/197)
- [Implement versioning for ink! playground · Issue #460 · paritytech/ink-playground · GitHub](https://github.com/paritytech/ink-playground/issues/460)

### MR
- [ Add new Ink Version update support by radhe-zeeve · Pull Request #815 · paritytech/ink-playground · GitHub ](https://github.com/paritytech/ink-playground/pull/815)
- [Add version support by radhe-zeeve · Pull Request #817 · paritytech/ink-playground · GitHub](https://github.com/paritytech/ink-playground/pull/817)
