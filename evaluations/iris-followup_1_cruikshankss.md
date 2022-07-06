# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/iris_followup.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | [x] |  Apache 2.0 and GPL3, see [iris node repo](https://github.com/ideal-lab5/iris/tree/milestone_1) and [contracts repo](https://github.com/ideal-lab5/contracts/tree/iris_milestone_1) | |
| 0b. | Documentation | [x] |  https://ideal-lab5.github.io/ | Great job evolving your wiki by including a disclaimer about rapid changes but still including a very clear [roadmap](https://ideal-lab5.github.io/quickstart/development_status.html). You may want to add the link to your second w3f grant in your wiki intro asap, but I trust your timing. Overall, great combo of docs including the whitepaper and an aesthetic & clear [website](https://www.idealabs.network/) too. |
| 0c. | Testing Guide | [x] |  https://docs.google.com/document/d/1XhBUSWp1lGhZbBVmFmre5ojEPlNCMccmFz-pvV2VypM/edit?usp=sharing | Extremely well-organized & clear docs that seem to be created with w3f evaluators in mind. Helps me understand the complexity of the project in many different ways.  |
| 0d. | Docker | [x] |  Iris: Iris-UI: | Thank you for following best-practices by providing docker images for the Iris node and Iris UI. |
| 0e. | Article | [x] |  https://medium.com/ideal-labs/iris-milestone-1-update-fe9411ca6704 | This is where I started my evaluation and thank you for the conceptual overview. |
| 1. | Separate Iris node from substrate runtime fork | [x] |  https://github.com/driemworks/iris/tree/0752a546e315b47e80f96d3885398404130be1bd | Simplified their tech stack away from the complexity of maintaining rust-ipfs since it's neither feature-complete or maintained enough to evolve rapidly. Now they are more easily able to be in sync with substrate main branch. |
| 2. | Substrate Module: Data spaces | [x] |  https://github.com/ideal-lab5/iris/blob/milestone_1/pallets/data-spaces/src/lib.rs | Thank you for the new pallet! This is the first pallet I've ever fully read through, since it's taken me some time to understand the complexity of the substrate eco. While I don't yet understand full details and complexity, I thank you for the well-commented code and clear demo of how it manifests on the front-end! |
| 3. | Substrate module: Iris-Assets | [x] |  https://github.com/ideal-lab5/iris/blob/milestone_1/pallets/iris-assets/src/lib.rs | Removed rust-ipfs functionality (breaks storage functionality till m2 go-ipfs upgrade) and added data spaces functionality. |
| 4. | Contracts | [x] |  https://github.com/ideal-lab5/contracts/tree/iris_milestone_1/composable_access_rules | Seems like a very practical use-case for smart contracts. Thank you for developing with ink! and providing the .contract and .wasm files as well as demoing how to import them into a locally-running chain via the polkadot.js ui! |
| 5. | Substrate Module: Iris-Ejection | [x] |  pallet: https://github.com/ideal-lab5/iris/tree/milestone_1/pallets/iris-ejection and chain extension: https://github.com/ideal-lab5/iris/blob/9931ae51c4ecfdb972e65f4dce2698a3be028b75/runtime/src/lib.rs#L974| Thank you very much for building a pallet with which to integrate ink! smart contracts. |
| 6. | Substrate Module: Iris-Session | [x] |  https://github.com/ideal-lab5/iris/tree/milestone_1/pallets/iris-session | Handles data for requests related to the IrisEjection pallet. Also made updates regarding their storage evolution from rust-ipfs to go-ipfs. |
| 7. | User Interface | https://github.com/ideal-lab5/ui | [x] |  Excellent demo videos, thank you very much. The accurate and detailed front-end makes understanding the backend much easier. Thanks for adding so much data/metadata to the frontend in general. |

# Additional Notes

Congratulations on getting multiple smart contracts deployed locally to add "data space" functionality. It's great to see the extrinsics in the polkadot.js explorer of the locally-running chain. I think this project is very ideal for those wishing to learn how a substrate chain runs, how pallets and smart contracts work as well as ipfs & OCWs. 

Interesting innovations in this milestone:
- a pallet that enables ink! smart contract deployment
- minting assets to control initial ownership and access rights
- a locking function to allow downloadable access to the data
- rule executor smart contract for controlling the number of times an asset is accessible 

It's no small feat to build a useful & highly-ideal full-stack substrate-based React dapp! I'm glad to see you've added functionality to your dapp since your last grant with this grant's "data spaces". The UI and notifications are highly responsive, showing data for ownership asset minting, etc. And I think it makes sense to build a minimally functional UI at this stage and I can see how you're looking ahead to the SDK (rather than UI) for providing access to Iris nodes. I can see how it makes sense that the ideal UI will be the 'portals' to the smart contracts, since that's what non-technical users will ideally be interacting with. There are so many layers of complexity and it's fascinating to watch this project evolve!

Nice progress with your pallets since your last grant. I like how your substrate-based Iris node contains the pallets required for basic functionality and how you envision the future of users interacting with Iris mainly through smart contracts (via the irisEjection chain-extension pallet). Nice job adjusting the pallets for the future regarding storage. I'm looking forward to your `go-ipfs` storage implementation in subsequent milestone(s) because it seems this will help you evolve more rapidly. Thanks for pursuing so many ideals with your technology and I'm glad to see your committment to this Iris project and its evolution. 