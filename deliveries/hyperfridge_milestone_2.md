# Hyperfridge Milestone 2 - Banking API Integration

Project Hyperfridge: [PR 2096](https://github.com/w3f/Grants-Program/pull/2096). 
The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).

# Context

Hyperfridge allows to create
and consume TradFi-Events (e.g. a payment) based on cryptographical primitives, not on trusted oracles. 
Milestone 1 was about generating the STARKs proof in an MPC (Multi-Party-Computing) Setup. 
This milestone (nr 2) is about "intercepting" the communication with banking backends, in order
to create and provide the proof via an API. The proof will be picket up by Off-Chain-Worker in Milestone 3. 

IMPORTANT NOTE: We would like to change the content of Milestone 4 and 5. Instead of minting and burning 
our own tokens, we would like to integrate with [Polkadot asset hub](https://wiki.polkadot.network/docs/learn-assets). 
How shall we prepare that?  Time and efforts would be the same, but the use-cases are more compelling if we are able to 
provide trustless fiat rails to Polkadot asset hub. Also note that we are currently looking into integrating
the APIs of Stripe and Revolut and UPI (Indias payment API standard) - we would be interested in scaling the system.


# Delivery 
- **Estimated duration:** 1 month
- **FTE:**  1.2
- **Costs:** 5,000 USD

| Number | Deliverable | Specification | Assets |
| ----- | ----------- | ------------- | ------ |
| 0a. | License | Apache 2.0  | [Link to Licence](https://github.com/element36-io/ebics-java-client?tab=LGPL-2.1-1-ov-file) |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can start the backend and send test transactions, which will show how the new functionality works.| [Link to Documentation Root](https://github.com/element36-io/ebics-java-service?tab=readme-ov-file) |
| 0c. | Testing Guide | Adapt unit tests of core functions and test data to ensure functionality and robustness of the overall system (bridge and proofs). In the guide, we will describe how to run these tests.  | [Testing Guide](TEST.md)|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |[Testing Guide: "Run with Docker"](TEST.md)|
| 1. | Generate Receipt | Retrieve data form backend and generate receipt (proof) using the proving system.  | [Testing Guide: Run with Docker](TEST.md)|
| 2. | Provide API | We will provide an application based on Spring-Boot that will contain `getBankstatements():Statement[]` (which includes account balance),  `createOrder (OutgoingPayment)` and `simulatePayment(Payment)`  as a REST interface as [described](#b-bank-account-rest-api). The recipe data is added in the [backend API](http://w.e36.io:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) `/ebics/api-v1/bankstatements`` with two new fields in the top level of the JSON-response: `recipeiUrl` so that clients can use a public verifier to check the proof. | [Testing Guide](TEST.md), go to "Test API manually with Swagger"|
| 3. | Provide Banking-UI | Show a UI to see the status of banking backend (show accounts, transactions etc). We will use [LibEuFin](https://github.com/element36-io/ebics-java-service/blob/main/docs/SANDBOX.md) - same as in our first grant. | [Testing Guide](TEST.md), got to "Login to simulated banking backend UI"|
| 4. | Unit Tests | We will adapt unit tests and test data to cover creating and validating proofs.  | [Testing Guide](TEST.md), go to "Run unit tests" on top of the document.|
| 5. | Repository | Repository will be the existing repo [ebics-java-service](https://github.com/element36-io/ebics-java-service)  | [ebics-java-service](https://github.com/element36-io/ebics-java-service)  |
| 6. | Backend-Docker | Provide docker-compose images for setting up banking API wrapper, LibEuFin proxy for banking-API. Set up test data in the backend via script and run tests which include the proving system.  | [Testing Guide](TEST.md) - when starting services with docker compose. Test data and scripts [here](../scripts/). |
| 7. | Swagger | Provide Swagger docu for the backend. |  [localhost:8093](http://localhost:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) |



# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project. 
* **Milestone Number:** e.g. 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | ... |...| ...| 
| 2.  | ... |...| ...| 

**Additional Information**
> Any further comments on the milestone that you would like to share with us.
