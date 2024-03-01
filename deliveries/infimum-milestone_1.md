# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
* **Milestone Number:** 1

**Context** (optional)
The Infimum project is intended to provide a private, receipt-free, and verifiable voting apparatus which disincentivizes collusion between participants. The current goal is to produce a proof-of-concept and not something that should be immediately used in production (however, in the future, we would like for that to be the case). 

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link |
| --- | --- | --- |
| 0a. | License | [MIT](https://github.com/rhysbalevicius/infimum/blob/main/LICENSE) |
| 0b. | Documentation | Inline documentation. [Basic guide](https://github.com/rhysbalevicius/infimum/tree/m0#usage) explaining how to interact with the pallet will be provided in the README.  |
| 0c. | Testing | [Unit tests](https://github.com/rhysbalevicius/infimum/blob/m0/pallet/src/tests.rs), [GitHub actions CI workflow](https://github.com/rhysbalevicius/infimum/blob/m0/.github/workflows/ci.yml), and [brief guide for running tests locally](https://github.com/rhysbalevicius/infimum/tree/m0#running-unit-tests) |
| 0d. | Docker | [Dockerfiles](https://github.com/rhysbalevicius/infimum/tree/m0/.dev) and [docker-compose.yml](https://github.com/rhysbalevicius/infimum/blob/m0/docker-compose.yml) for running a development environment which locally spins up a node and frontend template for observing events, calling pallet extrinsics, and performing state queries. |
| 1. | Substrate pallet | [Methods](https://github.com/rhysbalevicius/infimum/blob/m0/pallet/src/types.rs) [1.ii.a to 1.ii.i](https://github.com/rhysbalevicius/infimum/blob/m0/pallet/src/lib.rs) (listed under deliverables in the project overview) without verification functionality provided by Groth16 proving system.  |


**Additional Information**
> Any further comments on the milestone that you would like to share with us.

There is an effort currently beginning to help provide a more generic interface to the pallet, e.g. with respect to things such as extrinsics and the data layout, which differs slightly from the one explicitly laid out in the original proposal. This however does not deviate from the goals state therein, and instead is intended to provide developers a richer surface area with which they are able to customize their integration of the pallet.