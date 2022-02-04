# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/prosopo.md
* **Milestone Number:** 1

**Context**

This Milestone contains the very first version of the Prosopo human verification service. Currently, it exists as a command line and API tool only with the frontend UI to be delivered as part of the next Milestone. The purpose of this Milestone has been to implement the backend design, as described in the Grant Application. The `Protocol` smart contract is the backbone of the Prosopo service, making payments between actors and storing data that can be used to resolve disputes. The nodeJS `Provider` service is designed to allow people to offer human verification services, currently in form of captchas, branching out into other formats in the future.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |https://github.com/prosopo-io/provider/blob/master/LICENSE https://github.com/prosopo-io/protocol/blob/master/LICENSE https://github.com/prosopo-io/dapp-example/blob/master/LICENSE| The links are to the main license files. The individual source files also have license headers.| 
| 0b.  | Documentation | https://github.com/prosopo-io/provider/blob/master/README.md https://github.com/prosopo-io/protocol/blob/master/README.md https://github.com/prosopo-io/integration/blob/main/README.md | The README files explain how to use each repository. However, the repos are best used together in the integration repository. | 
| 0c.  | Testing Guide	 | https://github.com/prosopo-io/provider/blob/master/README.md https://github.com/prosopo-io/protocol/blob/master/README.md https://github.com/prosopo-io/integration/blob/main/README.md | The README files contain details of how to run the tests.| 
| 0d.  | Docker |https://github.com/prosopo-io/provider/blob/master/dev.dockerfile https://github.com/prosopo-io/integration/blob/main/docker-compose.yml| A dockerfile exists for the Provider repo. The various repos are pulled together in the `integration` repository, in which a docker compose file spins up 3 containers  - `Provider`, `Substrate`, and `MongoDB`| 
| 0e.  | Article |https://github.com/prosopo-io/prosopo-website| Website is not live. Clone this repo and then open the file prosopo-web3-foundation.html to view | 
| 1.  | Prosopo Contract Development |https://github.com/prosopo-io/protocol/| The repo containing the smart contract | 
| 2.  | Prosopo Provider Service |https://github.com/prosopo-io/provider| The repo containing the Provider software | 
| 3.  | External Contract |https://github.com/prosopo-io/dapp-example| An external example contract which demonstrates how to call our contract | 

**Additional Information**

- Our `Provider` node is currently architected as a series of TypeScript files that will be broken into sensible packages as part of Milestone 2. This is to allow re-use of components.

- We recognise the `Protocol` contract is very long, and we will be migrating it to use [OpenBrush's contract library](https://github.com/Supercolony-net/openbrush-contracts/tree/c71097ff10ef6d187bf9c86f0248bfbc6ec40a3c/docs/docs/smart-contracts) as part of Milestone 2.

- Our original contract design involves checking captcha solutions for users within a timeframe. It has not been possible to unit test this as `block_timestamp` does not exist in the experimental `ink!` unit test engine. We are exploring alternatives for this feature as part of Milestone 2.

As part of this Milestone we contributed PRs and comments to various Polkadot ecosystem projects.

- https://github.com/paritytech/substrate-contracts-node/pull/24
- https://github.com/paritytech/ink/pull/1080 (Not yet merged but required to run our contract)
- https://github.com/paritytech/ink/pull/1116 (WIP)
- https://github.com/patractlabs/redspot/pull/169
- https://github.com/patractlabs/redspot/pull/166
- https://github.com/patractlabs/redspot/pull/164
- https://github.com/patractlabs/redspot/pull/154
- https://github.com/patractlabs/redspot/pull/153
- https://github.com/patractlabs/redspot/pull/153

