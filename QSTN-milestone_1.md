# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project. - https://github.com/w3f/Grants-Program/blob/master/applications/QSTN.md
* **Milestone Number:** 1

**Context** (optional)
QSTN is a Web3 survey marketplace where businesses fund surveys, reward participants, and uphold user privacy through our data wallet-driven profiles.

We built a revolutionary data collection platform that harnesses the power of blockchain, gamification, and AI to transform the way surveys are conducted. Our platform enables businesses to create funded surveys, incentivizing users to participate by offering financial rewards and engaging experiences. We prioritize data privacy and security, empowering users to own and authorize their data through our innovative data wallet, Cubby. 

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

Hello Polkadot,

Thanks for your patience. A lot has changed on our roadmap and it took us longer than expected to complete the grant. We are excited to finally announce that QSTN has been implemented on Polkadot via Moonbeam. Below are the deliverables plus a demo link to test yourselves. Thanks and looking forward to hearing from you!

Summary - 
QSTN is a Web3 survey marketplace where businesses fund surveys, reward participants, and uphold user privacy through our data wallet-driven profiles.

0b. Documentation - 
* Here is a link to access the demo = https://qstnus.com 
* Here is a folder with all relevant tutorials = https://drive.google.com/drive/folders/1sjohV-fc8JHzRMlfuYliI7MRQY1dmSRP?usp=sharing 
* Here is the GitHub repository for the contracts = https://github.com/QSTN-US/Moonbeam-QSTN-v1

Note: We removed option to generate a Polkadot.JS wallet during onboarding - instead we use their email during sign-up to generate a SAFE vault which holds their Moonbeam rewards due to the EVM compatibility

0d. Docker - 
* Here is a link to the Docker file = https://github.com/QSTN-US/Moonbeam-QSTN-v1/blob/main/qzard-moonbeam/Dockerfile 
* ReadMe file - https://github.com/QSTN-US/Moonbeam-QSTN-v1/blob/main/README.md

0e. Article - 
* Here is the Medium article = https://medium.com/@qstnus/qstns-next-frontier-a-bold-leap-into-the-polkadot-ecosystem-with-moonbeam-9de5b7afbf4e
* We will publish as soon as we get approval for the milestone + permission to use the Web3 Foundation logo 

Survey pallet 
* Here is a demo video the business survey pallet = https://drive.google.com/file/d/177IJQIiQcVC-EJhJb3pB0pna1SBl7XlE/view?usp=drive_link 
* Here is a demo video the user survey pallet = https://drive.google.com/file/d/1d47gOMqI_MEZ_eJ1sA1OowQ-AnNZrOSf/view?usp=drive_link 
* Within the business experience, we allow businesses to fund surveys with tokens and NFTs on Moonbeam which survey respondents receive in their vault via SAFE
* Within the business experience, we allow businesses to invite users to complete the survey, add and remove questions plus access gate

Survey pallet UI 
* Here are demos where the Moonbeam integration is shown in the business & user UI = https://drive.google.com/drive/folders/1sjohV-fc8JHzRMlfuYliI7MRQY1dmSRP?usp=drive_link 
* Within the business experience, we allow businesses to choose Moonbeam as a funding option within the Connect Network section
* Within the user experience, we allow users to create a vault within SAFE which is capable of storing Moonbeam tokens and NFTs issued from the survey 

Note: We removed option to screenshot on-chain - instead each profile in QSTN, is a data wallet, which generates a zero knowledge proof upon survey completion, this proof acts as verification when a user tries to request rewards from a survey contract or Stripe 

Substrate Chain
* Here is a demo video where the user claims NFT media on Moonbeam = https://drive.google.com/file/d/1d47gOMqI_MEZ_eJ1sA1OowQ-AnNZrOSf/view?usp=drive_link 
* Within the user experience, we allow users to mint NFTs as a survey reward onto Moonbeam in order to access secondary liquidity 

Note: We removed option to screenshot on-chain - instead each profile in QSTN, is a data wallet, which generates a zero knowledge proof upon survey completion, this proof acts as verification when a user tries to request rewards from a survey contract or Stripe 

### Overview
https://github.com/qstnus/Grant-Milestone-Delivery/tree/master
- **Total Estimated Duration:** 2.5 months
- **Full-Time Equivalent (FTE):**  6 employees (2 developers, 3 designers, 1 blockchain architect [Orrin])
- **Total Costs:** 10,000 USD

### Milestone 1 Example — Implement Substrate Modules

- **Estimated duration:** 2.5 months
- **FTE:**  6 employees
- **Costs:** 10,000 USD

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

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
