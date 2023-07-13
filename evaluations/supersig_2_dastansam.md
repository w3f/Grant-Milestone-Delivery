# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/supersig_fellowship.md
- **Milestone:** 2
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** [Milestone 1]

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ---------- | 
| 0a. | License | Apache 2.0  |  | Correct license. |
| 0b. | Documentation | https://github.com/decentration/supersig-ui#supersig-ui, https://decentration.medium.com/supersig-ui-simply-manage-your-orgs-250769f5367  | Article link returns 404 error. README files are present and provide good coverage of the repositories. |
| 0c. | e2e workflow tester |  https://github.com/decentration/supersig-ui | Test is provided and they pass. Screenshot attached below. |
| 0d. | Docker  | https://github.com/decentration/supersig-ui#docker | Docker image is provided and it runs successfully. |
| 0e. | Article and Video  | https://decentration.medium.com/supersig-ui-simply-manage-your-orgs-250769f53679, https://www.loom.com/share/6c96b98b437e439ca1bd251ec0c2b937?sid=5854ef8b-a579-45a0-9702-6cf60f5277f8 | Article and video is provided. It helps a lot to review the deliverables. |
| 1. | **Supersig UI** |  https://github.com/decentration/supersig-ui  | UI looks smooth and easy to navigate. I was able to run it both natively and with Docker image. Screenshots attached below. |
| 2. | Substrate Chain | https://github.com/decentration/substrate-supersig-template/tree/v0.9.37-fix-unbounded | Node compiles and runs. However, e2e workflow tests are not passing when connected to the local node. | 
| 3. | Polkadot JS Apps UI Fork | https://github.com/decentration/apps/tree/main-fellowship-1 | Explorer app is forked and deployed at https://apps.decentration.org |

## General Notes

In general, it's well documented, easy to follow and UI looks smooth. One minor issue is the invalid link in the documentation, but the valid one is provided below, so it's not a big deal. The only thing to address is the failing e2e workflow tests when connected to the local node.

## Screenshots

### Supersig UI

### Supersig UI with local node

### e2e workflow tester remote chain

### e2e workflow tester local chain
