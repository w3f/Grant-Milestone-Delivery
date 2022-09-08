# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/wasm-opt-for-rust.md
* **Milestone Number:** 1

**Context**

The goal of this milestone was to prove that we could deliver a Rust `wasm-opt` binary and library in milestone 2.
We promised to have a working `wasm-opt` binary and a mostly-complete API, and we have done that and more.
We encountered only minor unexpected obstacles, discussed below, and expect the project to be completed as originally proposed.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3 | |
| 0b. | Documentation | https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3 | |
| 0c. | Testing Guide | https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3/components/wasm-opt/tests <br> | Integration tests. |
| 0d. | Docker | Docker is not required for this project. | |
| 1. | `wasm-opt` binary | https://github.com/brson/wasm-opt-rs/tree/v0.0.1-preview.3#installing-the-binary | |
| 2. | APIs | https://docs.rs/wasm-opt/0.0.1-preview.3/wasm_opt <br> https://docs.rs/wasm-opt-cxx-sys/0.0.1-preview.3/wasm_opt_cxx_sys <br> https://docs.rs/wasm-opt-sys/0.0.1-preview.3/wasm_opt_sys | |

**Additional Information**

The current implementation is published at the links above.
It is mostly complete, functional and suitable for cursory testing. 

We have an idiomatic Rust API that is mostly-completely documented,
and we welcome review.

We have added CI for most configurations,
with the exception of ARM,
for which GitHub does not offer out-of-the box runners.

In the proposal process we did not consider the matter of minimum compiler versions.
As of now it appears that Rust 1.48 (from November 2020) will be required, and a C++17 compiler.
Supporting earlier compilers is probably not feasible.
C++17 compilers were available in Ubuntu 18.04 and Visual Studio 2019.
Our CI is set up to verify against compilers as old as clang-3.9 and gcc-7, from 2016-2017, on Ubuntu 18.04.
We do not know the minimum Rust version required by `cargo-contract`, the project we hope to integrate with.

As of now there are two major bugs that we expect to resolve:

- [Some error cases cause the process to exit](https://github.com/brson/wasm-opt-rs/issues/43).
  This is a result of Binaryen being console oriented and will require some upstream work.
- [Non-ascii paths on Windows don't work](https://github.com/brson/wasm-opt-rs/issues/40).
  Not clear yet where the error is, but we suspect it may be that Binaryen does not support Windows's
  wide character encoding. If so it could require significant upstream work, and if not a regression
  we will consider punting it until a future maintenance contract.

For M2 we intend to quickly post an issue to `cargo-contract`'s issue tracker soliciting feedback
about how best to integrate the `wasm-opt` crate, and have that discussion drive our efforts.

We are considering adding an API that translates `wasm-opt` command line arguments
into our own builder API, for conveneince in porting code that uses the `wasm-opt` CLI
to using the API. `wasm-pack` for example allows arbitrary arguments to be passed to `wasm-opt`,
and integrating the API would require some backward-compatibility solution.
Along with this we are considering how to make it easy for integrators to quickly disable
the integrated `wasm-opt` API and Binaryen C++ build, and fall back to the CLI,
in the case of unforseen problems.

As of now we believe that `wasm-opt`'s fuzzing capabilities are not important for our use cases,
and intend to not include them in the API. Feedback welcome.

We are maintaining issues for the remaining work: https://github.com/brson/wasm-opt-rs/issues
