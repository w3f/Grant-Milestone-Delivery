# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

* The [invoice form :pencil:] has been sent in  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md](https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md).
* **Milestone Number:** 1    


**Context** 
> Liberland's chain has done a lot of work with on-chain assets, The on-chain asset LLM has been implemented for voting and several other customized features that the current functionality of on-chain assets do not have.

**Deliverables:**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
|   0a.            |   License MIT   |  [LICENSE-MIT](https://github.com/liberland/liberland_substrate/blob/main/LICENSE-MIT)   |  All contributed code is MIT  |
|    0b.          | Documentation  | [liberland/liberland.github.io](https://github.com/liberland/liberland.github.io/tree/main/docs)  | Documentation	Inline code documentation can be found in our main node repo: https://github.com/liberland/liberland_substrate , Documentation and guides can be found here: https://github.com/liberland/liberland_substrate  |
|   0c.            |     Testing Guide  | ttps://github.com/liberland/liberland.github.io/blob/main/docs/testing_guide.md    |  Testing guide in the docs   |
|   0d.          |     Docker     |        https://hub.docker.com/r/laissezfaire/liberland-node       |    docker pull laissezfaire/liberland-node |
|   0e.         |  Article            |    TODO   |  TODO            |
| 1. | LLM Pallet | [https://github.com/liberland/liberland_substrate/blob/main/frame/llm/Readme.md](https://github.com/liberland/liberland_substrate/blob/main/frame/llm/Readme.md) | Manage distribution, voting and custom logic with the on-chain asset LLM | 
| 2.  | Congress Pallet | [elections phragment](https://github.com/liberland/liberland_substrate/tree/main/frame/elections-phragmen) | We allow voting with on-chain assets | 
| 3. | Voting with on-chain assets | Pallet [democracy](https://github.com/liberland/liberland_substrate/blob/main/frame/democracy/README.md) and [elections phragment](https://github.com/liberland/liberland_substrate/tree/main/frame/elections-phragmen) | Pallet democracy and elections have been modified to support voting with LLM on-chain asset |
| 4. | Liberland Identity Pallet | [Pallet identity](https://github.com/liberland/liberland_substrate/tree/main/frame/identity/src)  | elections-phragmen and democracy both checks and verifies that a user has a judged liberland citizen role in order to interact with voting functionality |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
#### Main repo: https://github.com/liberland/liberland_substrate/     
#### A live testnet can be accessed here:    
https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fl2.laissez-faire.trade#/extrinsics
#### Docker file: `$ docker pull laissezfaire/liberland-node`    
#### Documentation:  Further documentation can be find in the liberland_substrate repo as well as in-line code comments
