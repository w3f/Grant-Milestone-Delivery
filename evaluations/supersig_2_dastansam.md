# Evaluation

- **Status:** Accepted
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/supersig_fellowship.md)
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/supersig_1_dsm-w3f.md)

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ---------- | 
| 0a. | License | Apache 2.0  |  | Correct license. |
| 0b. | Documentation | https://github.com/decentration/supersig-ui#supersig-ui, https://decentration.medium.com/supersig-ui-simply-manage-your-orgs-250769f5367  | Article link returns 404 error. README files are present and provide good coverage of the repositories. |
| 0c. | e2e workflow tester |  https://github.com/decentration/supersig-ui | Tests are provided and they pass on remote chain. Screenshot attached below. |
| 0d. | Docker  | https://github.com/decentration/supersig-ui#docker | Docker image is provided and it runs successfully. |
| 0e. | Article and Video  | https://decentration.medium.com/supersig-ui-simply-manage-your-orgs-250769f53679, https://www.loom.com/share/6c96b98b437e439ca1bd251ec0c2b937?sid=5854ef8b-a579-45a0-9702-6cf60f5277f8 | Article and video is provided. It helps a lot to review the deliverables. |
| 1. | **Supersig UI** |  https://github.com/decentration/supersig-ui  | UI looks smooth and easy to navigate. I was able to run it both natively and with Docker image. Screenshots attached below. |
| 2. | Substrate Chain | https://github.com/decentration/substrate-supersig-template/tree/v0.9.37-fix-unbounded | Node compiles and runs. However, e2e workflow tests are not passing when connected to the local node. | 
| 3. | Polkadot JS Apps UI Fork | https://github.com/decentration/apps/tree/main-fellowship-1 | Explorer app is forked and deployed at https://apps.decentration.org |

## Evaluation v1

In general, it's well documented, easy to follow and UI looks smooth. One minor issue is the invalid link in the documentation, but the valid one is provided below, so it's not a big deal. The only thing to address is the failing e2e workflow tests when connected to the local node. It fails with the following error:
```bash 
⚪️ ProposalCreated
Proposal was not successfully created)api.tx.supersig.submitCall is not a function 
```

I suspect this might be because I didn't add chain definitions to the `apps`, but it's marked as `optional` in the README, so I thought it should work without it.

## Screenshots

### Supersig UI

<img width="1692" alt="Connection to remote node" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/ed3db436-d153-4c62-96ef-adf385d79fcb">

### Supersig UI with local node

 <img width="1692" alt="Connection to local node" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/40b4752e-463d-45c9-a78c-3daa62666346">


### e2e workflow tester remote chain

<img width="1607" alt="Remote chain tests" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/37321a47-54e5-4bac-ac67-dabc536c36e9">

### e2e workflow tester local chain

<img width="1692" alt="Local chain tests" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/c39c1020-bea1-401a-801c-6c13e0472763">

## Evaluation v2

Running `cargo update` before compiling the node fixes failing tests on a local chain.
