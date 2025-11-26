# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!


**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/OfflineElectionTool.md
* **Milestone Number:** 1

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 



| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License |https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/LICENSE |Apache 2.0 / GPLv3 / MIT / Unlicense. |
| **0b.** | Documentation |https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/README.md |Inline code documentation and a tutorial explaining how to simulate an election with default or custom inputs via CLI. |
| **0c.** | Testing and Testing Guide |https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/tests/predict.rs | Unit tests for the election logic; guide on how to run and interpret the results. |
| **0d.** | Docker |https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/Dockerfile.README.md | Dockerfile to build and run the CLI simulator locally. |
| 1. | Core Election Engine	 | https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/src/commands/predict.rs| Updated version of the existing election script with support for accurate simulation of on-chain validator election logic using Phragmén and other supported algorithms. |
| 2. | Custom Inputs Support |https://github.com/antiers-solutions/polkadot-staking-miner/blob/feat/offline-election-prediction-tool/src/commands/predict.rs | Allows passing custom active set size, voters, candidates, and their stakes via JSON input. |
