# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
* **Milestone Number:** 2

**Context** (optional)
The Infimum project is intended to provide a private, receipt-free, and verifiable voting apparatus which disincentivizes collusion between participants. The current goal is to produce a proof-of-concept and not something that should be immediately used in production (however, in the future, we would like for that to be the case). 

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Specification |
| --- | --- | --- |
| 0a. | License | MIT |
| 0b. | Documentation | Inline documentation. [Amendment to the original guide](https://github.com/rhysbalevicius/infimum/tree/main?tab=readme-ov-file#interacting-with-the-pallet) explaining the requirements for satisfying the verification logic. |
| 0c. | Testing | [Unit tests](https://github.com/rhysbalevicius/infimum/tree/main/pallet/src/tests) for methods added. Updated unit tests for amended methods. |
| 1a. | Pallet: verification methods | Private methods for [verifying proofs](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L784-L827) which have been generated off-chain by the CLI delivered in Milestone 3. Relies on the verification logic provided by [arkworks](https://github.com/arkworks-rs/groth16). |
| 1b. | Pallet: method modifications | Modifications to methods [1.ii.f](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L470-L552) and [1.ii.g](https://github.com/rhysbalevicius/infimum/blob/main/pallet/src/lib.rs#L554-L634) (listed under deliverables in the project overview) to call the private verification methods defined in Milestone 2.1.a — these modifications will guard against storage updates in the case that verification fails, and publish the final poll outcome in the case of success. |
| 2. | Circom circuits  | [Fork of MACI circuits](), amended as necessary for consumption within our off-chain proof generation pipeline. |


**Additional Information**
> Any further comments on the milestone that you would like to share with us.

Due to the complexity and highly sensitive nature of the types of the extrinsic parameters interacting with the pallet without the CLI (to be provided in the following milestone) is non-trivial. In order to help aid in the evaluation of this milestone, we have included some of the cursory work on the following milestone (under the [cli](https://github.com/rhysbalevicius/infimum/tree/main/cli) directory) in the form of an end-to-end test. The provision of this test is primarily intended to serve as documentation for the end-to-end flow of interactions and verification of results, and actually running it is an *optional* secondary aid in reviewing the functionality of the milestone.

NB the dependencies in this milestone have deviated slightly from the original proposal and an amendment to the application has been submitted to reflect this. In particular, we have opted for the usage of [ark_groth16](https://github.com/arkworks-rs/groth16) in lieu of [bellman](https://github.com/zkcrypto/bellman).
