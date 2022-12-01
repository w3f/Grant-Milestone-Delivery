# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Calamar.md
* **Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ---- | ------ |
| 0a. | License | [LICENSE](https://github.com/topmonks/calamar/blob/c6b96c2c940149a13f67272031af36aecf349e93/LICENSE.txt) | |
| 0b. | Documentation | [README](https://github.com/topmonks/calamar/blob/c6b96c2c940149a13f67272031af36aecf349e93/README.md), [Calamar docs](https://docs.calamar.app/) | |
| 0c. | Testing Guide | [README#Test](https://github.com/topmonks/calamar/blob/c6b96c2c940149a13f67272031af36aecf349e93/README.md#test), [E2E tests](https://github.com/topmonks/calamar/tree/c6b96c2c940149a13f67272031af36aecf349e93/test/e2e), [GitHub workflow](https://github.com/topmonks/calamar/blob/c6b96c2c940149a13f67272031af36aecf349e93/.github/workflows/test-and-deploy.yml#L27), [Test reports](https://github.com/topmonks/calamar/deployments?environment=test-report#activity-log), [Screenshots](https://app.argos-ci.com/topmonks/calamar) | |
| 0d. | Docker | [Dockerfile](https://github.com/topmonks/calamar/blob/c6b96c2c940149a13f67272031af36aecf349e93/Dockerfile), [README#Docker](https://github.com/topmonks/calamar/blob/c6b96c2c940149a13f67272031af36aecf349e93/README.md#docker) | |
| 0e. | Article | [Article](https://medium.com/topmonks/calamar-block-explorer-milestone-1-finished-93f683ddc486) | |
| 1. | Fix usage blockers | [PR#16](https://github.com/topmonks/calamar/pull/16), [PR#41](https://github.com/topmonks/calamar/pull/41) | |
| 2. | Add related items listings | [PR#66](https://github.com/topmonks/calamar/pull/66), [Example](https://7ffa6aa5.calamar.pages.dev/acala/block/0002408225-e923b) | |
| 3. | Add call detail page | [PR#47](https://github.com/topmonks/calamar/pull/47), [Example](https://7ffa6aa5.calamar.pages.dev/kusama/extrinsic/0015560843-000002-1563b) | |
| 4. | Add event detail page | [PR#47](https://github.com/topmonks/calamar/pull/47), [Example](https://7ffa6aa5.calamar.pages.dev/acala/event/0002408225-000008-e923b) | |
| 5. | Responsiveness | [PR#75](https://github.com/topmonks/calamar/pull/75) | |
| 6. | Extrinsics/event args displaying improvements | [PR#84](https://github.com/topmonks/calamar/pull/84), [PR#91](https://github.com/topmonks/calamar/pull/91), [Example](https://7ffa6aa5.calamar.pages.dev/kusama/extrinsic/0015560839-000001-ae6b8) | |
| 7. | Items count | [PR#65](https://github.com/topmonks/calamar/pull/65/files) | |
| 8. | Extrinsic/event fulltext search by name | [PR#89](https://github.com/topmonks/calamar/pull/89), [Example](https://7ffa6aa5.calamar.pages.dev/polkadot/search?query=balances.transfer) | After discussion with Subsquid fulltext search doesn't makes much sense so we implemented another logic, where you can search by name regadles of letter casing (matching against latest runtime's metadata) |
| 9. | Account address parsing in events args | [PR#84](https://github.com/topmonks/calamar/pull/84), [PR#91](https://github.com/topmonks/calamar/pull/91), [Example](https://7ffa6aa5.calamar.pages.dev/polkadot/extrinsic/0013158552-000003-d0367) | |
| 10. | Website polishing | [PR#86](https://github.com/topmonks/calamar/pull/86), [Homepage](https://calamar.app) | See footer |
| 11. | Polkadot.js integration | [pokadot-js/apps/PR#8452](https://github.com/polkadot-js/apps/pull/8452) | |

**Additional Information**

The code in the time of delivery: https://github.com/topmonks/calamar/tree/c6b96c2c940149a13f67272031af36aecf349e93

The deployed build in the time of delivery: https://7ffa6aa5.calamar.pages.dev

Production app: https://calamar.app
