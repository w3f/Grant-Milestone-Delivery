# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Unified collator node deployment](https://github.com/w3f/Grants-Program/blob/master/applications/unified_collator_node_deployment.md)
* **Milestone Number:** 1

**Context** (optional)


**Deliverables**
| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| **0a.** | License | https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/LICENSE | Apache 2.0 |
| **0b.** | Documentation | [Project introduction](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/README.md); [AWS Deployment](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/AWS/README.MD); [GCP Deployment](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/GCP/README.MD) | Project introduction contains general information about purpose and navigation; AWS\GCP Deployment provides specific instructions to deploy collator to the specific cloud |
| **0c.** | Testing and Testing Guide |	[AWS Examples](https://github.com/for-parity-with-love/unified-collator-node-deployment/tree/master/AWS/examples); [GCP Examples](https://github.com/for-parity-with-love/unified-collator-node-deployment/tree/master/GCP/examples) | Guides how to run and test collators for several parachains |
| **0d.** | Article | WIP | **ETA end Feb** |
| 1a. | Terraform scripts for setting up Collator infrastructure | [AWS](https://github.com/for-parity-with-love/unified-collator-node-deployment/tree/master/AWS); [GCP](https://github.com/for-parity-with-love/unified-collator-node-deployment/tree/master/GCP) | Infrastructure deployment |
| 1b. | Ansible scripts for spinning up Collator node | [AWS Deployemt config](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/AWS/terraform.tfvars); [AWS Deployment script](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/AWS/collator.tf); [GCP Deployemt config](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/GCP/terraform.tfvars); [GCP Deployment script](https://github.com/for-parity-with-love/unified-collator-node-deployment/blob/master/GCP/collator.tf) | **Terraform** deployment to AWS and GCP |

**Additional Information**

We have changed Ansible deployment to Terraform deployment because it fully suits deployment needs and minimizes the tools required to interact with the project.