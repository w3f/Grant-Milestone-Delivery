# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Fennel_Protocol.md
* **Milestone Number:** 1

**Context**
This milestone creates the basis for mutable, trait-based identities and active creation of webs of trust between accounts. The resulting trait-based identity and trust actions can be used to build on top of existing identity infrastructure and leverage the decentralized nature of the protocol to generate more complex decision-making, authentication, sharing, and resource management logic at the application level.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/fennelLabs/Fennel-Protocol/blob/main/LICENSE | Unlicense. | 
| 0b. | Documentation | https://github.com/fennelLabs/Fennel-Protocol/wiki, https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html | Documentation is provided both as generated inline documentation and a wiki. | 
| 0c.  | Testing Guide | https://fennellabs.com/Fennel-Protocol/doc/fennel_protocol_runtime/index.html, https://github.com/fennelLabs/Fennel-Protocol/wiki/Testing-Milestone-1| Both automated testing and extrinsics calls are outlined. | 
| 0d. | Docker | https://github.com/fennelLabs/Fennel-Protocol/blob/main/Dockerfile | Docker Compose is used to run tests, benchmarks, and documentation. | 
| 0e. | Article | https://github.com/fennelLabs/Fennel-Protocol/blob/main/articles/fennel-protocol-milestone-1.md | Self-hosted announcement article describing the purpose of the material included in this milestone. This will be published after the milestone is accepted. | 
| 1. | Identity Creation | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L113 | This extrinsic interacts with storage to maintain a list of Fennel identities issued by accounts. Both the list and current number of active identities are designated as storage items. | 
| 2. | Identity Mutation | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L152 | Identity Mutation allows dynamically adding "traits" to existing identities. Currently this is implemented as a list of key-value pairs mapping to each identity. | 
| 3. | Identity Revocation | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L132 | Revocation of an identity causes the identity to be removed from on-chain storage. This allows known identities to be marked as "unused" or "untrusted" by their owners. | 
| 4. | Identity Signature | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/identity/src/lib.rs#L197 | The Identity Signature extrinsic allows for general statements to be mapped to an existing identity and signed by the owner of the mapped identity. | 
| 5. | Trust Issuance | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/trust/src/lib.rs#L90 | This will be used to create explicit trust from one account to another. The deliverable includes two extrinsics - one to create a trust connection, and one to remove the trust connection, therefore returning the accounts to a state of total disconnect. | 
| 6. | Trust Request | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/trust/src/lib.rs#L122 | Uses storage to add and remove requests for trust statements - for example, if a job applicant needs a recommendation, they might request a trust action from a previous employer, who can then accept the request and issue trust, or reject the request and either revoke trust or leave the requester non-connected. | 
| 7. | Trust Revocation | https://github.com/fennelLabs/Fennel-Protocol/blob/6cc7c956d7404e6b7bf08c0995c444038d7f564e/pallets/trust/src/lib.rs#L154 | Creates explicit non-trust from one account to another. This deliverable also includes an extrinsic to cancel an existing trust revocation action. | 

**Additional Information**
The full repository for this milestone is hosted at https://github.com/fennelLabs/Fennel-Protocol.
