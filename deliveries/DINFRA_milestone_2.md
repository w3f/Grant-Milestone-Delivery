# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [DINFRA](https://github.com/w3f/Grants-Program/blob/master/applications/DINFRA.md) 
* **Milestone Number:** 2

**Context**
The second DINFRA milestone provides the Substrate deliverables, the DINFRA parachain.

**Deliverables**

| Number  | Deliverable                | Link                                                         | Notes                                                        |
| ------- | -------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| **0a.** | License                    | [link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE2/LICENSE?ref_type=tags) | Apache 2.0                                                   |
| **0b.** | Documentation              | [link](https://gitlab.com/dinfra/dinfra/-/blob/main/README.md?ref_type=heads) | Self documented code and Markdown file tree                  |
| **0c.** | Testing and Testing Guide  | [link](https://gitlab.com/dinfra/dinfra/-/blob/main/README.md?ref_type=heads#testing-guide) | Unit tests, integration tests, basic zombienet test. Run by Gitlab Pipelines. Manual test script for first DINFRA run. |
| **0d.** | Docker                     | [link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE2/docker-compose.yml?ref_type=tags) | Docker compose stack runs: parachain network, apache cloudstack, ipfs service, sidecars (ogate + chain reactor) |
| 1.      | DINFRA Provider Pallet     | [link](https://gitlab.com/dinfra/substrate-parachain/-/tree/MILESTONE2/pallets/dinfra-provider?ref_type=tags) | Allows for Accounts to register as providers, Providers can declare supported Deployment types, capacity and pricing. Awards subscriptions to Providers by load balanced preference. |
| 2.      | DINFRA Subscription Pallet | [link](https://gitlab.com/dinfra/substrate-parachain/-/tree/MILESTONE2/pallets/dinfra-subscription?ref_type=tags) | Represents a Subscription to request infrastructure. Implemented rates are per block and free. Deployments are terminated when run out of funding. Subscribers can terminate the subscriptions at any time. |
| 3.      | Chain Reactor Interface    | [link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE2/packages/ogate?ref_type=tags) | The OGate (open-api gateway) Serves as interface between DINFRA and the ACS Chain Reactor. It follows a Sidecar Pattern. Massively simplifies the implementation of Chain Reactors. |

**Additional Information**

This project involves a significant amount of components: 2 relay nodes, 1 collator, 1 Apache CLoudstack Simulator, 1 IPFS server, 1 Ogate NodeJS sidecar, 1 ACS Reactor python sidecar, Ansible Stack. We develop on a 32GB linux ryzen laptop comfortably.  
