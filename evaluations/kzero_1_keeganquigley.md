# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/KZero.md
- **Milestone:** 1

| Number | Deliverable               | Accepted | Specification                                                | Notes |
| ------ | ------------------------- | ------------------------- | ------------------------- | ------------------------------------------------------------ |
| 0a.    | License                   | <ul><li>[x] </li></ul> | GPLv3                                                        |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | We will provide technical documentation for the code, as well as deployment and testing guides, explaining key function calls and how users can start and test our ZKP-related server, which will demonstrate how it works. |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | Core functions will be fully covered by comprehensive unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d.    | Docker                    | <ul><li>[x] </li></ul> | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1      | Kzero Circuit Code        | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-circuit|
| 2      | Kzero Circuit Guide        | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-circuit|
| 3      | Kzero Circuit Testing cases | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-circuit/tree/dev/test|
| 4      | ZKP Witness & Proof Generation Guide | <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-zkp-service-guide.md  |
| 5      | All-in-One ZKP Witness & Proof Generation Service| <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-service |
| 6      | ZKP Service Testing Doc| <ul><li>[x] </li></ul> | https://github.com/kzero-xyz/kzero-grant-docs/blob/main/kzero-common-package-test.md |

# General Notes

~~I'm able to compile the circuits w/ some warnings:~~

UPDATE: Team fixed warnings.

<details>
  <summary>Output</summary>

```ts
circom circuits/zkLogin.circom --r1cs --wasm --sym --c
template instances: 919
non-linear constraints: 1048569
linear constraints: 0
public inputs: 1
private inputs: 2082 (2061 belong to witness)
public outputs: 0
wires: 1020160
labels: 5677224
Written successfully: ./zkLogin.r1cs
Written successfully: ./zkLogin.sym
Written successfully: ./zkLogin_cpp/zkLogin.cpp and ./zkLogin_cpp/zkLogin.dat
Written successfully: ./zkLogin_cpp/main.cpp, circom.hpp, calcwit.hpp, calcwit.cpp, fr.hpp, fr.cpp, fr.asm and Makefile
Written successfully: ./zkLogin_js/zkLogin.wasm
Everything went okay
```
</details>
