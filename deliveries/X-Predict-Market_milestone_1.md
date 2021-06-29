# Milestone Delivery :mailbox:

> Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. Don't remove any of the mandatory parts presented in bold letters or as headlines!

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/313
* **Milestone Number:** Milestone 1

Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which should be used for testing.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License Apache 2.0 |https://github.com/XPredictMarket/NodePredict/blob/master/LICENSE|... | 
| 0b.  | Documentation |[doc](https://github.com/XPredictMarket/NodePredict),[Whitepaper](https://x-predict.com/X_Predict_market_Whitepaper_en.pdf?v=1.0)| Project overview document and white paper|
| 0c.  | Testing Guide | https://github.com/XPredictMarket/NodePredict#test-guide |Test guidelines for nodes and project modules. It can be tested as a whole, as well as in modules, or customized| 
| 1.  | xpmrl-autonomy pallet | [xpmrl-autonomy's Documentation](https://rustdoc.x-predict.com/xpmrl_autonomy),<br>https://github.com/XPredictMarket/NodePredict/blob/master/pallets/autonomy/src/lib.rs#L281 | This module allows users to pledge governance tokens to become governance nodes, and can upload or merge proposal resultsOnly the data provided by the officially signed node is valid.  |
| 2.  | xpmrl-couple pallet | [xpmrl-couple's Documentation](https://rustdoc.x-predict.com/xpmrl_couple),<br>https://github.com/XPredictMarket/NodePredict/tree/master/pallets/couple | Operation related to asset settlement, asset option, liquidity asset read and write. Among which are functions including : adding liquidity, removing liquidity, buying & selling asset, liquidation and setting proposal results.  |
| 3.  | xpmrl-proposals pallet | [xpmrl-proposals's Documentation](https://rustdoc.x-predict.com/xpmrl_proposals),<br>https://github.com/XPredictMarket/NodePredict/tree/master/pallets/proposals |Operation related to proposal initiation, storage, status changing. Including functions : proposal creation, proposal status setting.   | 
| 4.  | xpmrl-tokens pallet | [xpmrl-tokens's Documentation](https://rustdoc.x-predict.com/xpmrl_tokens),<br>https://github.com/XPredictMarket/NodePredict/tree/master/pallets/tokens | Asset creation and management module. Including functions : create new asset, issue additional asset, burn asset, authorize asset operation, the authorized trade the asset of the licensor, the authorized burn the asset of licensor| 
| 5.  | xpmrl-traits pallet | [xpmrl-traits's Documentation](https://rustdoc.x-predict.com/xpmrl_traits),<br>https://github.com/XPredictMarket/NodePredict/tree/master/pallets/traits |module interface constraint characteristics.  Including the trait of tokens and pool, the interface characteristics are also stipulated. | 
| 6.  | xpmrl-utils pallet | [xpmrl-utils's Documentation](https://rustdoc.x-predict.com/xpmrl_utils),<br>https://github.com/XPredictMarket/NodePredict/tree/master/pallets/utils | The customized macro in the project. Covering macro with different function of different pallet.| 
| 7.  | Articles/Tutorials | https://docs.google.com/document/d/1lW0NzIf45IKt3Z1Ggx-ZsKVRKI_4sSpmcDEuloACSig/edit?usp=sharing | X predict market DAPP Test Guideline | 
