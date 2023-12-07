# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadot-Protocol-Conformance-Tests.md 
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0.a | License |<ul><li>[x] </li></ul>|[Included](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/LICENSE)| Apache License 2.0
| 0.b | Documentation |<ul><li>[x] </li></ul>| N/A | Documentation not applicable as it is a feasibility research grant.
| 0.c | Testing and Testing Guide |<ul><li>[x] </li></ul>| [Tests](https://github.com/LimeChain/polkadot-conformance/tree/7c89d26c7221324474f0b7ab8fddeea2ecea440f/tests)| Tests categorised for Kagome and Polkadot along with a script to run them. Snippets included in the research document where necessary. 
| 0.d | Docker File|<ul><li>[x] </li></ul>| Not Provided | Dockerfile not provided but also not a strict requirement.  
| 0.e | Article |<ul><li>[x] </li></ul>| [Notion Article](https://limechain.notion.site/Host-Conformance-Testing-Suite-using-Zombienet-Research-05eb42de213a40c8916d3d25735b9a58)| Article with plausible approaches and suggestions.
| 1. | Host API Research |<ul><li>[x] </li></ul>|[Host API](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/docs/host-conformance-using-zombienet-research.md#trie-host-api-research)| Delivered. Explained with test-snippets of state-root computation and hash functions as examples. 
| 2. | SCALE Research |<ul><li>[x] </li></ul>|[SCALE](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/docs/host-conformance-using-zombienet-research.md#scale-research)| Delivered. Suggestion to use RPCs as these are mostly unit tests of pure functions. 
| 3. | State Trie Research |<ul><li>[x] </li></ul>|[State Trie](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/docs/host-conformance-using-zombienet-research.md#state-trie-research)| Delivered. Leads to the pre-requisite of having a tool that can set a required state before running the tets across multiple host implementations. 
| 4. | BABE Research |<ul><li>[x] </li></ul>| [BABE](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/docs/host-conformance-using-zombienet-research.md#babe-research)| Delivered. Suggest using log-based approach on Zombienet; Illustrated with simple tests on completeness of secondary slot assignments.  
| 5. | GRANDPA Research |<ul><li>[x] </li></ul>|[GRANDPA](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/docs/host-conformance-using-zombienet-research.md#grandpa-research)| Delivered. Similar findings as BABE.  
| 6. | Overall Research Findings |<ul><li>[x] </li></ul>|[Overall Report](https://github.com/LimeChain/polkadot-conformance/blob/7c89d26c7221324474f0b7ab8fddeea2ecea440f/docs/host-conformance-using-zombienet-research.md)| Delivered.  


## General Remarks
The feasibility research has been performed in sufficient detail with clear findings and suggested approaches for each of the sub-components. The report is well structured and is a good starting point for teams to design a conformance test-suite. There are no surprising outcomes of the feasibility study. The suggestion of using conformance RPCs for Host API/ SCALE/ State-Trie and Zombienet based assertions and logs with the more involved properties for BABE/ GRANDPA is in line with intuition of Zombienet being useful for integration-tests. The grant also proposes pre-requisite tools for the test-suite, most notably, the tool for setting required state before running the tests. The design of this tool is outside the scope of this grant but a high-level set of requirements have been described. 
The team updated the progress of the project with the Spec Team (W3F) on a bi-weekly basis and has also incorporated suggestions/feedback both in their approach and documentation. Just for records, an earlier [draft](https://limechain.notion.site/Host-Conformance-Testing-Suite-using-Zombienet-Research-05eb42de213a40c8916d3d25735b9a58) of this deliverable was shared with the Spec team and feedback regarding a new section on implications for Host Implementers and more nuanced tests for BABE/GRANDPA have been addressed. 
Overall, milestones outlined in the application have been satisfactorily delivered.
