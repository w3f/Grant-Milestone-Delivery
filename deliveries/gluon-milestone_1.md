# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/182
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- | ---------------|
| 0 | Gluon Website and Web Portal Framework | website: http://www.gluonwallet.com website <br>repo: https://github.com/tearust/gluon-website ||
| 1 | Milestone1 feature list and test instruction | Instruction https://github.com/tearust/gluon-app/blob/milestone1/readme.md  <br>Video demo: https://www.youtube.com/watch?v=wV4Q1-wTvFE | features: Users can create Gluon accounts and pair the Gluon mobile App with the web portal. |
| 2 | Test docker-compose | https://github.com/tearust/gluon-app/blob/main/docker-compose.yml | Please follow the instruction https://github.com/tearust/gluon-app/blob/main/readme.md to start local test server |
| 3 | Source code on GitHub | gluon app: https://github.com/tearust/gluon-app/tree/milestone1 <br>the pallet: https://github.com/tearust/gluon-pallet/tree/milestone-1 <br>tea-layer1: https://github.com/tearust/tea-layer1/tree/milestone-1| There are two projects inside gluon-app repo. The mobile app under /mobile folder, the webapp under /webapp folder. <br>TEA-layer1 is the blockchain, it uses gluon-pallet |

| Task ID | Module name | Description |
| ------ | ----------- | ---- |
| 0.1 | Add faucet page | users can add free test tokens to accounts to start testing |
| 1.1 | User portal web page | Search user public profiles by users' Polkadot address. All information is open public from the blockchain. Users can see pairing mobile app id. This is the feature in milestone 1 |
| 1.2 | Pairing web UI | This is the web UI to start mobile app pairing |
| 2.0 | Mobile app framework | Gluon mobile app framework. We will add features one by one |
| 2.1 | Pairing mobile UI, scan QR code to start | After the mobile app is installed, scan web pairing page to start pairing |
| 2.2 | Mobile user profile page | After pairing, show user profile. This is the same as the WebUI user profile content |
| 3.0 | Gluon substrate pallet: Pairing/Unpairing API | Add mobile app pub id to existing Gluon account. Pair the mobile to this user |
| 3.1 | Gluon substrate pallet: Search API | Search user public information |
