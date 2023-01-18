# Milestone Delivery :mailbox:

* The [invoice form :pencil:] has been sent in  

* **Application Document:** [https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md](https://github.com/w3f/Grants-Program/blob/master/applications/liberland.md).
* **Milestone Number:** 1    


**Context** 
> Liberland's chain has done a lot of work with on-chain assets, The on-chain asset LLM has been implemented for voting
> Several features are locked behind a KYC process using a modified identity pallet.
> Legislation for Liberland can be passed and repealed on-chain through liberlands democratic process implemented through code itself.

**Deliverables:**


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
|   0a.            |   License MIT   |  [LICENSE-MIT](https://github.com/liberland/liberland_substrate/blob/main/LICENSE-MIT)   |  All contributed code is MIT  |
|    0b.          | Documentation  | [liberland/liberland.github.io](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers)  | Documentation	Inline code documentation can be found in our main node repo: https://github.com/liberland/liberland_substrate , Other documentation and guides can be found here: https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers  |
|   0c.            |     Testing Guide  | [https://github.com/liberland/liberland.github.io/blob/main/docs/testing_guide.md](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers/testing_guide)    |  Testing guide in the docs   |
|   0d.          |     Docker     |        [https://hub.docker.com/r/laissezfaire/liberland-node](https://hub.docker.com/r/liberland/blockchain-node)       |    https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain/for-developers-and-testers/docker |
|   0e.         |  Article            |    [Google docs link](https://docs.google.com/document/d/1ww8PTRofszO2jLbIS0GfavKeOuSILayIKY9KvakIUAc/edit)   |  Article was asked to be provided in google docs link            |
| 1. | LLM Pallet | https://github.com/liberland/liberland_substrate/tree/main/frame/llm | Manage distribution, voting and custom logic with the on-chain asset LLM | 
| 2.  | Congress Pallet | [democracy](https://github.com/liberland/liberland_substrate/tree/main/frame/democracy) and [elections-phragmen](https://github.com/liberland/liberland_substrate/tree/main/frame/elections-phragmen) | Liberland modification of democracy and election-phragmen to allow voting with on-chain assets to active citizens only | 
| 3. | Voting with on-chain assets | Pallet [democracy](https://github.com/liberland/liberland_substrate/tree/main/frame/democracy)) and [elections-phragmen](https://github.com/liberland/liberland_substrate/tree/main/frame/elections-phragmen) | Pallet democracy and elections have been modified to support voting with LLM on-chain asset and limit usage to active citizens only |
| 4. | Liberland Identity Pallet | [Pallet identity](https://github.com/liberland/liberland_substrate/tree/main/frame/identity)  | elections-phragmen, llm, democracy and other pallets check and verify that a user has a minister of interior judged liberland citizen role in order to interact with voting functionality |

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
#### Main repo: https://github.com/liberland/liberland_substrate/     
#### A live testnet can be accessed here:    
[Testnet](https://polkadot.js.org/apps/?rpc=wss%253A%252F%252Ftestchain.liberland.org%252F#)
#### Docker file: [Docker file](https://hub.docker.com/r/liberland/blockchain-node)   
#### Documentation:  Further documentation can be find in the liberland_substrate repo, as in-line code comments and on [gitbook](https://liberland-1.gitbook.io/wiki/v/public-documents/blockchain)
