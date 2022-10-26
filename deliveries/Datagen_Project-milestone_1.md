# Maintenance Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Datagen_Project.md
* **Milestone Number:** 1
* **Delivery Date:** 21 October 2022

**Context**

The project is build on two blockchains (heavy_blockchain and fast_blockchain), so be careful to run tests in the correct folders.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0b | Inline Documentation | | Check the files| 
| 0c  | Testing Guide |[fast_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/fast_blockchain/README.md), [heavy_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/heavy_blockchain/README.md)| |
| 0d | Docker | [fast_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/heavy_blockchain/docker-compose.yml), [heavy_blockchain](https://github.com/Datagen-Project/Datagen-Substrate-Grant/blob/main/fast_blockchain/docker-compose.yml)| This delivery is only pallet, so docker file is not so necessary. | 
| 0e | Medium Article | [link](https://medium.com/@viacc/datagen-project-dev-blog-web3-fundation-milestone-1-b3ec2bdb1a95) |
| 1 | Pallet  | [random-node-selector](https://github.com/Datagen-Project/Datagen-Substrate-Grant/tree/main/heavy_blockchain/pallets/random_node_selector) | |
| 2 | Pallet | [computational-work](https://github.com/Datagen-Project/Datagen-Substrate-Grant/tree/main/fast_blockchain/pallets/computational-work) | |
| 3 | Pallet | [check-computational-work](https://github.com/Datagen-Project/Datagen-Substrate-Grant/tree/main/fast_blockchain/pallets/check-node-computational-work) | |

**Additional Information**

Some of this pallets could change a little when we will connect the two blockchain in the Milestone 2.
