# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Application](https://github.com/Szegoo/Grants-Program/blob/42b031052c16670685c65a409d91779d0069903a/applications/Dotflow.md)
* **Milestone Number:** 1

**Context**

We are submitting the delivery of all the functionality specified in the grant application for the first milestone.
The list of things we implemented in this milestone:
- Identity contract with all the functionality we promised to do in the grant application.
- Tests for identity contract. We covered every part of the contract code with ink! integration tests to ensure everything works as supposed.
- Contract documentation. We have added a lot of comments in the code, as well as in the test to make sure everything is easy to understand.
- My Identity UI with all the functionality we promised to do in the grant application.
- Address encryption. As promised in the grant application we encrypt addresses before storing them in the identity contract to ensure privacy.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/LICENSE) [Frontend](https://github.com/TheDotflow/dotflow-ui/blob/main/LICENSE) | MIT license | 
| 0b.  | Documentation | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/README.md) |  | 
| 0c.  | Testing and Testing Guide | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/identity/tests.rs) [Guide](https://github.com/TheDotflow/dotflow-ink#build--test-locally) [Identity Key](https://github.com/TheDotflow/dotflow-ui/blob/main/__tests__/identityKey.test.ts) [Guide](https://github.com/TheDotflow/dotflow-ui#set-up-development-environment) | Tests for the identity contract and the Identity Key |
| 0d.  | Docker | [Contract]() [Frontend](https://github.com/TheDotflow/dotflow-ui#run-with-docker) |  |
| 1.  | Identity Contract | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/identity/lib.rs) | The Identity contract code |
| 2.  | My Identity page | [Frontend code](https://github.com/TheDotflow/dotflow-ui/tree/main/src) [Identity Key](https://github.com/TheDotflow/dotflow-ui/pull/15) [Address Encryption](https://github.com/TheDotflow/dotflow-ui/pull/21) | The frontend code |
