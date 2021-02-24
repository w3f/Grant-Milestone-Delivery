# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone - BTC Address changed.**  

* **PR Link:** [PR LINK](https://github.com/w3f/Open-Grants-Program/pull/59)

* **Milestone Number:** 1


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |
| 0a. | License |https://github.com/Philasande-map/mapbridge/blob/master/LICENSE | Apache License |
| 0b. | Testing |https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/tests.rs | test mmr module method |
| 1. | MMR Trie Structure | https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/map.rs#L20 | customlized MMR node field,  merging method and MMR manager |
| 2. | Substrae MMR proof runtime module | https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/lib.rs#L86| MMR proof verification, generate and manage MMR Trie in substrate SRML runtime |
| 3. | AppendBlock |https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/lib.rs#L195 | Append current block as MMR leaf node  |
| 4. | RetrieveMMR |https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/lib.rs#L216 | Retrieve the MMR based on the root provide |
| 5. | GenerateProof | https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/lib.rs#L226| Generate the merkle branch proof in MMR |
| 6. | VerifyProofByRoot |https://github.com/Philasande-map/mapbridge/blob/master/pallets/map-mmr/src/lib.rs#L241 | Verify if the proof is consistent with root |

