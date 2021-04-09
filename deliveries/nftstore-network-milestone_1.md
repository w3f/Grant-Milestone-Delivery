# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/167 
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.



| **Number** | **Deliverable**        | **Link** | ** Notes **                                            |
| ---------- | ----------------------- |--- | ------------------------------------------------------------ |
| 0a.        | License                | https://github.com/NFTT-studio/nftmart/blob/beta/LICENSE-APACHE2 | Apache License 2.0                                           |
| 0b.        | Documentation          | https://github.com/NFTT-studio/nftmart/blob/beta/README.md | Documents containing the description of whole architecture  design for NFTStore. |
| 0c.        | Testing Guide          | https://github.com/NFTT-studio/nftmart/blob/beta/README.md#use-nodejs-to-access-nftmart-blockchain | We will provide a full test suite and guide.     |
| 1a.        | Node Repo              | https://github.com/NFTT-studio/nftmart | Substrate node source code, depend on Acala [ORML-nft](https://github.com/open-web3-stack/open-runtime-module-library/tree/8053ddb300eba954465d488161eee121475ed2e5/nft),[ORML-utilities](https://github.com/open-web3-stack/open-runtime-module-library/tree/8053ddb300eba954465d488161eee121475ed2e5/utilities),[ORML-traits](https://github.com/open-web3-stack/open-runtime-module-library/tree/8053ddb300eba954465d488161eee121475ed2e5/traits),[ORML-tokens](https://github.com/open-web3-stack/open-runtime-module-library/tree/8053ddb300eba954465d488161eee121475ed2e5/tokens),[ORML-currencies](https://github.com/open-web3-stack/open-runtime-module-library/tree/8053ddb300eba954465d488161eee121475ed2e5/currencies)  |
| 2a.        | Pallet_nft             | https://github.com/NFTT-studio/nftmart/tree/beta/pallets/nftmart-nft | Complete the development of pallet_nft and implement the ERC721 standard, include nft order and trade |
| 2b.        | Pallet_store           | https://github.com/NFTT-studio/nftmart/blob/7632f669bcf4b6ba35fd91f26ca9886eb20c4188/pallets/nftmart-nft/src/lib.rs#L433 | Complete the development of pallet_store in nftmart pallet |
| 3.         | Front End repo            | https://github.com/NFTT-studio/nftmart-fontend | Complete the development of the basic interactive page |
| 4.         | Docker Image           | https://github.com/NFTT-studio/nftmart/blob/beta/README.md#build-and-run-a-testing-docker-environment-locally | The NFTStore Network docker image contains the POC version running anywhere to verify the idea of the NFTStore. |
