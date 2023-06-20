# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!
> When evaluating the last milestone of a grant, check if the finished grant refers to an [RFP](https://github.com/w3f/Grants-Program/blob/master/rfps/README.md) and move the corresponding RFP to [Closed](https://github.com/w3f/Grants-Program/tree/master/docs/RFPs/Closed).
> Lines starting with `>`, such as this one, can be removed.

- **Status:** In Progress
- **Application Document:** [Application](https://github.com/Szegoo/Grants-Program/blob/42b031052c16670685c65a409d91779d0069903a/applications/Dotflow.md)
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/LICENSE) [Frontend](https://github.com/TheDotflow/dotflow-ui/blob/main/LICENSE) | MIT license | 
| 0b.  | Documentation | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/README.md) |  | 
| 0c.  | Testing and Testing Guide | [Contract](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/identity/tests.rs) [Guide](https://github.com/TheDotflow/dotflow-ink#build--test-locally) [Identity Key](https://github.com/TheDotflow/dotflow-ui/blob/main/__tests__/identityKey.test.ts) [Guide](https://github.com/TheDotflow/dotflow-ui#set-up-development-environment) | Tests for the identity contract and the Identity Key |
| 0d.  | Docker | [Contract]() [Frontend](https://github.com/TheDotflow/dotflow-ui#run-with-docker) |  |
| 1.  | Identity Contract | [Link](https://github.com/TheDotflow/dotflow-ink/blob/main/contracts/identity/lib.rs) | The Identity contract code |
| 2.  | My Identity page | [Frontend code](https://github.com/TheDotflow/dotflow-ui/tree/main/src) [Identity Key](https://github.com/TheDotflow/dotflow-ui/pull/15) [Address Encryption](https://github.com/TheDotflow/dotflow-ui/pull/21) | The frontend code |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

### Basic Functionality

- Documentation: The documentation is detailed and easy to follow. 
- Testing: Unit tests are present and are passing.
