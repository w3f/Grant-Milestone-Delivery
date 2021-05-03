# Evaluation
- **Status:** In Progress
- **PR Link:** [EverlastingCash Web3 Grant Application #277](https://github.com/w3f/Open-Grants-Program/pull/277)
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [GNU General Public License v3.0](https://github.com/CycanTech/ELC/blob/main/LICENSE)| Correct license |
| 0b. | Documentation |<ul><li>[x] </li></ul>|ELC-0.1.0/Documentation_Milestone_1.md| Ok|
| 0c. | Testing Guide |<ul><li>[x] </li></ul>|ELC-0.1.0/Testing Guide.md| I suggest to add the testing environment into a Docker Machine|
| 1. | ELC contracts |<ul><li>[x] </li></ul>|[ELC-0.1.0](https://github.com/CycanTech/ELC/releases/tag/v0.1.0)| There are some warnings in compilation time that can be solved|
| 1a. | Anti-Inflation Factor K & On-Chain Governance |<ul><li>[x] </li></ul>|ELC-0.1.0/contracts/pool/lib.rs| Line 445 - 467. The function looks correct compared to the function explained in page 9. Please remove the code that you have commented|
| 1b. | Liability Ratio |<ul><li>[x] </li></ul>|ELC-0.1.0/contracts/pool/lib.rs| Line 471 - 483. The function looks correct|
| 1c. | ELC Supply Expansion mechanism |<ul><li>[x] </li></ul>|ELC-0.1.0/contracts/pool/lib.rs| Line 277 - 364. I saw some repeated code in this function with the contraction function. It would be great to encapsulate that repeated part. Some unit tests should be added to this part  |
| 1d. | ELC Supply Contraction |<ul><li>[x] </li></ul>|ELC-0.1.0/contracts/pool/lib.rs|Line 368 - 440. Same as ELC Supply Expansion Mechanism |
| 1e. | Oracle Price acquirement |<ul><li>[x] </li></ul>|ELC-0.1.0/contracts/oracle/lib.rs|  (Line 43-46) Correct|
| 2.  | ELC Whitepaper |<ul><li>[x] </li></ul>|[ELC whitepaper](https://github.com/CycanTech/ELC/blob/main/ELC_Whitepaper.pdf)| The PDF cannot be seen properly (check page 5). There are some format errors. It would be great to add some diagrams in the explanation of the ELC protocol|

## General Notes

Overall the implementation is easy to understand and clean. The code has some comments that can be removed and the testing coverage should be improved. Specially I suggest to add tests for the ELC Supply Expansion mechanism and the ELC Supply Contraction.

I am having problems running the ELP-Runtime-Node, so I couldn't deploy and run the tests. I suggest to set all the environment into a Docker machine to be sure that we can run the tests easily.

The whitepaper is well explained but there is some space for improvement adding some diagrams explaining the ELC protocol and adding a "References" section. Also there are some minor mistakes with the format PDF format.

Ont the other hand the authors are using the Exchange smart contract from [Patractlabs/store-contracts](https://github.com/patractlabs/store-contracts) at [contracts/pool/Cargo.toml](https://github.com/CycanTech/ELC/blob/main/contracts/pool/Cargo.toml) line 21 without any attribution to the original authors.
