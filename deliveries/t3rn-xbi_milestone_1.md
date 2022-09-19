# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Link to the merged contract for the grant delivery for PSP-33 of XBI](https://github.com/w3f/Grants-Program/blob/master/applications/xbi-format-psp-t3rn.md)
* **Milestone Number:** 1

**Context** 

The first milestone of works on XBI Format as a standard for Polkadot's XCM Transact has been concluded with proposing PSP-33.

XBI Format is an XCM-based high-level interface that each Parachain can optionally implement and enable others to use while defining the error and result handling using an asynchronous, promise-like solution. XBI specifically focuses on setting the standards for cross-chain smart contract execution.

**Deliverables**

| Number | Deliverable | Link | Notes                                                                                                                                    |
| ------------- | ------------- |------|------------------------------------------------------------------------------------------------------------------------------------------|
| 1. | PSP-33 | https://github.com/w3f/PSPs/pull/53 | Milestone 1 of works on XBI resulted in producing PSP-33 in collaboration with Selected partners which sets requirements for XBI Format. | 

**Additional Information**
The work on XBI implementation, documentation, and testing continue as a set of crates, precompiles for EVM, and pallets - different means of enabling Parachains to exchange the cross-chain messages aligned with the XBI Format. This enriches XCM Transact primarily by notifications on execution status on remote Parachain as well as an extensible set of XBI Orders. We will likely submit further grant proposals to support the works on implementation as well as the adoption of XBI as a standard.