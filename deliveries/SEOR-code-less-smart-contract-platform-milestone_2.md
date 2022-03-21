# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/SEOR-code-less-smart-contract-platform.md
* **Milestone Number:** 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | License |[Apache 2.0](https://github.com/SealSC/multi-chain-js/blob/main/LICENSE)| | 
| 2.  | SDK code repository | [RepoRoot](https://github.com/SealSC/multi-chain-js) . <br> | Our SDK support four chains: Polkadot, EVM compatible chain, Solana and Tron. Due to the huge differences between these heterogeneous chains, we now only support basic wallet links, transfers and other operations, and support a unified interactive interface for smart contracts on some chains. | 
| 3.  | Testing Guide | [polkadot-wrapper](https://github.com/SealSC/multi-chain-js/tree/main/polkadot-wrapper#testing) , [web3-wrapper](https://github.com/SealSC/multi-chain-js/tree/main/web3-wrapper#testing), [solana-wrapper](https://github.com/SealSC/multi-chain-js/tree/main/solana-wrapper#testing) , [tronweb-wrapper](https://github.com/SealSC/multi-chain-js/tree/main/tronweb-wrapper#testing) | Our testing covers as many cases as possible, but due to the different feature of wallets of different chains, the situation is complicated, so the SDK coverage is not able to reach more than 80%  in every chains. | 
| 4. | Documentation |[multi-chain-js documents](https://multi-chain-js-doc.seor.io/) .<br>| We are not provide pdf version of the documents  for now because the interface of these contracts may changed frequently in this stage.  | 

