# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  


* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/QSTN.md
* **Milestone Number:** 1

**Context** (optional)
QSTN is a Web3 survey marketplace where businesses fund surveys, reward participants, and uphold user privacy through our data wallet-driven profiles.

We built a revolutionary data collection platform that harnesses the power of blockchain, gamification, and AI to transform the way surveys are conducted. Our platform enables businesses to create funded surveys, incentivizing users to participate by offering financial rewards and engaging experiences. We prioritize data privacy and security, empowering users to own and authorize their data through our innovative data wallet, Cubby. 

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

Hello Polkadot,

Thanks for your patience. Below are the deliverables plus a demo link to test yourselves. Thanks and looking forward to hearing from you!

Summary - 
QSTN is a Web3 survey marketplace where businesses fund surveys, reward participants, and uphold user privacy through our data wallet-driven profiles.

0b. Documentation - 
* Here is a folder with tutorials = https://drive.google.com/drive/folders/1L9gckB-mpGmIxtoU1dUhaGa7XwmoKoq9?usp=drive_link 
* Here is the GitHub repository = https://github.com/QSTN-US/Polkadot-QSTN-v1 
    * ReadMe file = https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/README.md 
    * Start file = https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/QUICK-START.md
    * Step by step manual = https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/STEP-BY-STEP-MILESTONE.md
    * Testing guide = https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/TESTING-GUIDE.md 

0d. Docker - 
* Here is a link to the Docker file = https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node/docker 

0e. Article - 
* Here is the Medium article = https://medium.com/@qstnus/qstns-next-frontier-a-bold-leap-into-the-polkadot-ecosystem-9de5b7afbf4e
    * We will publish as soon as we get grant approval 

2. Survey pallet 
* This is the main pallet and its interface = http://pallet-demo.qstnus.com/ 
    * This is the interface which we open sourced since the other is related to our production application 
    * This is the code related to the pallet: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-pallet/survey 
* This is the production version and its interface =  https://polkadot.qstnus.com/ 
    * The data wallet and ZKP mechanism is abstracted so there is no visual indication but it is in the background and codebase 
        * There are some buttons (e.g. leaderboards, non-essential functions) which do not work but core pallet functionality exists in production version 
    * Within the business experience, we allow businesses to fund surveys with DOT which survey respondents receive in their connected Polkadot.JS wallet 
    * Within the business experience, we allow businesses to invite users to complete the survey, add and remove questions plus access gate

3. Survey pallet UI 
* Here is a link to the UI for the pallet = https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end 

4. Substrate Chain
* Here is the substrate node = https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=wss%3A%2F%2Fdotnode.qstnus.com#/explorer 
    * This is the code related to the substrate node: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node 
* Here is the NFT pallet = https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet

5. ZKP Proof Generation
Here is the data wallet API = https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api

6. Data Wallet
Here is the data wallet API = https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api
Here is the data wallet UI = https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api/BACKEND-ZKP

### Overview
https://github.com/qstnus/Grant-Milestone-Delivery/tree/master
- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  6 employees (2 developers, 3 designers, 1 blockchain architect [Orrin])
- **Total Costs:** 10,000 USD

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 2.5 months
- **FTE:**  6 employees
- **Costs:** 10,000 USD

| Number | Deliverable | Link |
| -----: | ----------- | ------------- |
| 0a. | License | LINK: https://github.com/QSTN-US/qstn-polkadot-marketplace-v021/blob/main/LICENSE |
| 0b. | Documentation	| LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/STEP-BY-STEP-MILESTONE.md & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/QUICK-START.md	& LINK 3: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/README.md  | 
| 0c. | Testing Guide	| LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/blob/main/docs/TESTING-GUIDE.md 	| 
| 0d. | Docker |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node/docker	|
| 0e. | Article |	LINK: https://medium.com/@qstnus/qstns-next-frontier-a-bold-leap-into-the-polkadot-ecosystem-9de5b7afbf4e | 
| 1. | Survey pallet |	LINK 1: http://pallet-demo.qstnus.com/ & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-pallet/survey  |	
| 2. | Survey pallet UI|	LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet
| 3. | Substrate chain |	LINK 1:	https://cloudflare-ipfs.com/ipns/dotapps.io/?rpc=wss%3A%2F%2Fdotnode.qstnus.com#/explorer  & LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/substrate-node & LINK 3: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/nfts-pallet |
| 4. | Substrate chain UI |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/qstn-substrate-node/front-end 	|
| 5. | ZKP Proof Generation |	LINK: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api	|
| 6. | Data Wallet |	LINK 1: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api	& LINK 2: https://github.com/QSTN-US/Polkadot-QSTN-v1/tree/main/zkp-datawallet-api/BACKEND-ZKP |

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Open Source | We will open source the survey pallet since the other implementations are publicly available 
| 0b. | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can generate a Polkadot.JS wallet during on boarding, connect this wallet to our web application, mint and/or transfer NFTs from our marketplace to their specified DOT wallet and save their "survey ID" on a local substrate chain as immutable proof of completion | 
| 0c. | Testing Guide | Core functions will be fully covered by unit tests to ensure functionality and robustness. In the guide, we will describe how to run these tests. |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e. | Article | We will publish a Medium article that documents our transition to Polkadot and details how users of QSTN can connect their DOT wallet to our application, mint & transfer purchased media onto the DOT blockchain as well as save their survey ID on-chain on a local substrate chain. 
| 1. | Survey pallet | We will create a Substrate module that will allow users to create a survey, invite other users to create a survey for their business, add questions (metadata), remove questions (metadata), give permission as to who can answer and list created surveys.  
| 2. | Survey pallet UI | We will create a new UI for DOT users to be able to ask questions, receive credit and screenshot their response on-chain; these design assets will include landing pages and layouts which we will open source to the DOT community 
| 3. | Substrate chain | The survey pallet of our custom chain will interact in such a way to allow users to connect their DOT wallet to our application, mint media on a local substrate chain as well as create surveys, invite businesses to create their own surveys, and give permissions as to who can answer a survey [1.] and then save the completed survey ID on-chain as proof of completion [1.] these transactions take place within our new UI [2.]
| 4. | Substrate chain | The survey pallet of our custom chain will interact in such a way to allow users to connect their DOT wallet to our application, withdraw DOT and then mint media on a local substrate chain [1.] and these transactions take place within our new UI [3.] with proof recorded by our ZKP [5] after being funded by the business [2] and recorded in the data wallet [6]
| 5. | ZKP Proof Generation | We will create an API for the Cubby data wallet to generate zero knowledge proofs upon survey completion on the Substrate chain - this ZKP will be the "receipt" to verify users are eligible to connect their wallet and withdraw rewards from a particular survey contract.
| 6. |Data Wallet	| We will open source our data wallet which is an authorizathion layer within QSTN allowing users to interact and generate zero knowledge proofs upon survey completion on DOT - this wallet interacts with the pallets deployed by our local substrate node through our API.

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
