# Evaluation


- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-playground-ide-improvements.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** all by PieWol

**Milestone Number:** 1

**Context**
Implement Ink's Dependency versioning

**Deliverables**

| Number | Deliverable | Accepted | Link |  Evaluation Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0.a. | License | <ul><li>[x] </li></ul> | https://github.com/Zeeve-App/ink-playground/blob/version_play/LICENSE | Apache-2.0 |
| 0.b. | Documentation | <ul><li>[] </li></ul> |https://github.com/Zeeve-App/ink-playground/blob/version_play/README.md | See notes  |
| 1.  | On demand version specific compilation | <ul><li>[x] </li></ul> | https://github.com/paritytech/ink-playground/pull/815 | We will add the ability to build the compiler environment if a compiler environment is not present with a specific version of Ink! |
| 2. | Dependency Version support | <ul><li>[x] </li></ul> |https://github.com/paritytech/ink-playground/pull/815, https://github.com/paritytech/ink-playground/pull/817 | We will upgrade and maintain Ink! and cargo-contract dependencies versions up to date and have provision to have older version support |
| 3. | Ink! Upgrades | <ul><li>[] </li></ul> | https://github.com/paritytech/ink-playground/pull/815 | We will add the ability to add Playground's Ink! version support to latest version as soon as new version of Ink! is released without manual intervention |
| 4. | Select Ink! version from UI | <ul><li>[x] </li></ul> |https://github.com/paritytech/ink-playground/pull/817 | We will add ability to select Ink!'s version from the IDE to compile |

## General Notes

## Documentation
A simple tutorial for saving and opening files is missing, otherwise it's fine to just use the unchanged documentation and readme of the ink!-playground project that was built upon. It would make sense to remove the dead link about the hosted version of the ink!-playground at the very top of the readme as this is no longer maintained and unavailable.

## Ink! version upgrade via Github-action
The action seems to be delivered and in place but somehow no runs are recorded yet in the main repository.
Even if no new version of ink! has been released and no PR should be created there should be artifacts for this Github-action as it's scheduled for 6am GMT every day.

## Ink! version selection in playground + url
The selection of the versions works and is also displayed in the url as requested in the issues you completed.
Especially referencing issues https://github.com/paritytech/ink-playground/issues/460
and https://github.com/paritytech/ink-playground/issues/427

## Summary
With the listed need for clarification by the grantee this evaluation is still in process.