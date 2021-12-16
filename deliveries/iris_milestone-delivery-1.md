# Milestone Delivery :mailbox: 

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Iris](https://github.com/w3f/Grants-Program/tree/master/applications/iris.md)
* **Milestone Number:** 1

**Context**

The initial milestone delivers an upgrade of offchain::ipfs to the latest substrate branch as well as introduces a new pallet, the `iris` pallet, and an associated rpc endpoint (and runtime api), the iris runtime API. Additionally, Iris' authority nodes are capable of forming an IPFS network. 

Nodes can add data to Iris which results in the creation of a new asset class. The admin of the asset class can then mint assets from the class and distribute them to beneficiaries, which is synonymous with provisioning access to other addresses. Nodes that own an asset can then access the underlying data associated with the asset class. Access to the data is made possible by invoking the RPC endpoint. When data is requested from the network, a unique OCW will process the request and store the desired data offchain, which is then retrieved via the RPC runtime api when the endpoint is invoked. 

**Deliverables**

For testing and verification purposes, I would recommend working from the HEAD of the branch specified in the notes section. Some names (e.g. of extrinsics and events), structs, and functionality was changed between deliverables, so running from individual commit hashes may not provide an accurate depiction of the overall milestone deliverables.

**Pre-release**: https://github.com/iridium-labs/substrate/releases/tag/v0.0.1

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Apache 2](https://github.com/iridium-labs/substrate/blob/master/LICENSE-APACHE2) | No change to licenses used in Substrate |
| 0b. | Documentation | https://iridium-labs.github.io/ | The mdbook source is found at: https://github.com/iridium-labs/iris-docs |
| 0c. | Testing Guide | https://docs.google.com/document/d/1p_qy-Q2xbFa_rv394llIrTqRJIpRKn8RDRAdpjKTF2Y/edit?usp=sharing |  |
| 0d. | Docker |  https://hub.docker.com/repository/docker/iridiumlabs/iris https://hub.docker.com/repository/docker/iridiumlabs/iris-ui |  |
| 0e. | Article | https://medium.com/iridium/iris-a-next-gen-decentralized-storage-network-a53562c27de2 |  |
| 0f. | Update offchain::ipfs to substrate V3 | commit hash: c198a480f542f7d01903ed675df23f8d700bcaa7 | https://github.com/iridium-labs/substrate/tree/iris_milestone_1 |
| 1.  | Iris Pallet: Data Ingestion and Asset Class Creation | commit hash: e92945345e06251a5e36766495f1faeba2830cef | https://github.com/iridium-labs/substrate/tree/iris_milestone_1 |
| 2.  | Iris Pallet: Asset Creation and Data Ejection | commit hash: f4fe66be89528c0ff0945773a17f500797ad38b5 | https://github.com/iridium-labs/substrate/tree/iris_milestone_1 |
| 3.  | Iris Pallet: IPFS node connection between peers | commit hash: 7db6b3875748ce28edf457094d2be6dee0058027 | https://github.com/iridium-labs/substrate/tree/iris_milestone_1 |
| 4.  | RPC endpoint | commit hash: 03f63578342366bdcc3bf0c8c4343b31241f001f | https://github.com/iridium-labs/substrate/tree/iris_milestone_1 |
| 5.  | User Interface | https://github.com/iridium-labs/ui/tree/iris_milestone_1 | | 

**Additional Information**

