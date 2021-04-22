# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** [Quadratic Funding Module and Dapp Application #268
](https://github.com/w3f/Open-Grants-Program/pull/268)
* **Milestone Number:** Milestone 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

The UI interface is under development for milestone 2. So far, the best way for testing is to run the [quadratic-funding-pallet](https://github.com/OAK-Foundation/quadratic-funding-pallet) either locally or with Docker, and then run all 73 test cases in [quadratic-funding-test](https://github.com/OAK-Foundation/quadratic-funding-test) against the chain. 

The whole test suite will run for a couple of hours due to the block number gap in tests. If you are interested in a particular test scenario, feel free to dive into the test code in Javascript. 


| Number | Deliverable | Specification | Link | Notes |
| ------------- | ------------- | ------------- |------------- |------------- |
| 0a. | License | Apache 2.0 | [Apache 2.0 License](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/LICENSE) | |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains the usage of the API. | [Developer Documentation](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/doc/pallet-doc.md) | structs and functions explanation |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests | [E2E tests with polkadot-js](https://github.com/OAK-Foundation/quadratic-funding-test) | 73 test cases, unit and functional.
| 0d. | Tutorial | We will write tutorials on Medium that explains the work done as part of the grant. | __Link here__ |
| 1. | Substrate module: CLR | We will create a Substrate module that have below functionalities.<br />1. Project: create<br />2. Round: fund, schedule, cancel, finalize<br />3. Grant: contribute, cancel<br />4. Funding: approve, withdraw<br />5. Require on-chain identity during project creation|  [quadratic-funding-pallet repo](https://github.com/OAK-Foundation/quadratic-funding-pallet)  | The specs grew larger compared to the proposal
| 2. | Substrate chain | Module CLR of our custom chain will be interacted with above defined functions through API |  [quadratic-funding-pallet repo](https://github.com/OAK-Foundation/quadratic-funding-pallet)  |
| 3. | Docker | We will provide a dockerfile to demonstrate the full functionality of our chain |  [Docker instruction in README.md](https://github.com/OAK-Foundation/quadratic-funding-pallet/blob/master/README.md)  |