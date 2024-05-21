# Evaluation


- **Status:** in progress
- **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
- **Milestone:** 3
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ----- | ----------- | ------ | ------------- | ------ |
| 0a. | License | <ul><li>[x] </li></ul> |  [Link to License](https://github.com/element36-io/ocw-ebics/blob/main/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[] </li></ul> | [Link to Documentation Root](https://github.com/element36-io/ocw-ebics/blob/main/README.md) | See general notes |
| 0c. | Testing Guide | <ul><li>[] </li></ul> | See [Testing Guide](https://github.com/element36-io/ocw-ebics/blob/main/INSTRUCTIONS.md)| |
| 0d. | Docker | <ul><li>[] </li></ul> | [Docker](https://hub.docker.com/r/e36io/ebics-ocw/tags), see main README how to use | |
| 1. | Integrate Receipt | <ul><li>[] </li></ul> |  [Repo](https://github.com/element36-io/ocw-ebics/blob/main/pallets/fiat-ramps/src/lib.rs#L1041)| |
| 2. | fiat-ramp pallet | <ul><li>[] </li></ul> |  [Pallet](https://github.com/element36-io/ocw-ebics/tree/main/pallets/fiat-ramps) | |
| 3. | Unit Tests | <ul><li>[] </li></ul> | [Unit Tests](https://github.com/element36-io/ocw-ebics/blob/main/pallets/fiat-ramps/src/tests.rs)| |

## General Notes

In the documentation you are describing "You can run the development node with temporary storage:[...]" but the commands that follow are the exact same as in the previous code snippet. So I assume one snippet contains wrong commands for launching the node. Please give this a check. It would also be good if you were to split up the docker tutorial section to not alternate between mac and linux commands. Seperating those in individual code snippets would be helpful. 

## unit tests
<details>
<summary> unit test output </summary>
todo
```
</details>