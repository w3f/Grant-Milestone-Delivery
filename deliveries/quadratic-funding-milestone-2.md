# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** Please, provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/blob/master/applications/quadratic-funding.md) directory). 
* **Milestone Number:** Milestone 2

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | License | Apache 2.0 |
| 0b. | Documentation | The folder structure and running instructions are in [README.md](https://github.com/OAK-Foundation/quadratic-funding-webapp/blob/main/README.md); The on-chain logic of quadratic funding is explained in the [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/quadratic-funding-milestone-1.md), as well as in this [Medium article](https://medium.com/oak-blockchain/tutorial-developer-walk-through-for-polkadot-quadratic-funding-pallet-649927aa1e63). |
| 0c. | Testing Guide | Please follow the intructions in below user tutorial to make a contribution, leave a comment, or like a project. | 
| 0d. | Tutorial | We have published a [Medium article](https://medium.com/oak-blockchain/user-tutorial-of-oaks-hackathon-winning-quadratic-funding-dapp-f484fe6a506f) for user tutorial.
| 1. | UI Design | We designed the UI from the ground up for this web app. |
| 2. | Javascript Library | We used the existing polkadot.js library to communicate with OAK Testnet, and it turned out that the library worked perfect. |  
| 3. | Application Implementation | We built a web app using ReactJs and NextJs and integrated polkadot.js for the interaction with OAK Testnet, a substrate blockchain. For features like user comments and likes, we used Tencent Cloud Serverless (similar to AWS Lambda) for data read/write. |  
| 4. | Deployment Instructions | The deployment of the web app is quite simple described in [README.md](https://github.com/OAK-Foundation/quadratic-funding-webapp/blob/main/README.md) |


