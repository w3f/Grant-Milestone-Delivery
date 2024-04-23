# Hyperfridge Milestone 2 - Banking API Integration  :mailbox:

Project Hyperfridge: [PR 2096](https://github.com/w3f/Grants-Program/pull/2096). 
The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).
* **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
  
* **Milestone Number:** 2

# Context

Hyperfridge allows to create
and consume TradFi-Events (e.g. a payment) based on cryptographical primitives, not on trusted oracles. 
Milestone 1 was about generating the STARKs proof in an MPC (Multi-Party-Computing) Setup. 
This milestone (nr 2) is about "intercepting" the communication with banking backends, in order
to create and provide the proof via an API. The proof will be processed by Off-Chain-Worker in Milestone 3. 

IMPORTANT NOTE: We would like to change the content of Milestone 4 and 5. Instead of minting and burning 
our own tokens, we would like to integrate with [Polkadot asset hub](https://wiki.polkadot.network/docs/learn-assets). 
How shall we prepare that?  Time and efforts would be the same, but the use-cases are more compelling if we are able to 
provide trustless fiat rails to Polkadot asset hub. 

# Overview of Milestone deliveries

## Milestone 2 - Banking API Integration

- **Estimated duration:** 1 month
- **FTE:**  1.2
- **Costs:** 5,000 USD

| Number | Deliverable | Specification | Assets |
| ----- | ----------- | ------------- | ------ |
| 0a. | License | Apache 2.0  | [Link to Licence](https://github.com/element36-io/ebics-java-client?tab=LGPL-2.1-1-ov-file) |
| 0b. | Documentation | We will provide both inline documentation of the code and a basic tutorial that explains how a user can start the backend and send test transactions, which will show how the new functionality works.| [Link to Documentation Root](https://github.com/element36-io/ebics-java-service?tab=readme-ov-file) |
| 0c. | Testing Guide | Adapt unit tests of core functions and test data to ensure functionality and robustness of the overall system (bridge and proofs). In the guide, we will describe how to run these tests.  | See [Testing Guide](TEST.md#clone-repo-and-run-unit-tests).|
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |[Testing Guide: "Run with Docker"](TEST.md#run-and-test-with-docker), got to "Run and test with Docker". |
| 1. | Generate Receipt | Retrieve data form backend and generate receipt (proof) using the proving system.  | [Testing Guide](TEST.md#test-api-and-download-zk-proof), go to Test API and download ZK Proof.|
| 2. | Provide API | We will provide an application based on Spring-Boot that will contain `getBankstatements():Statement[]` (which includes account balance),  `createOrder (OutgoingPayment)` and `simulatePayment(Payment)`  as a REST interface as [described](#b-bank-account-rest-api). The recipe data is added in the [backend API](http://w.e36.io:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) `/ebics/api-v1/bankstatements`` with two new fields in the top level of the JSON-response: `recipeiUrl` so that clients can use a public verifier to check the proof. | [Testing Guide](TEST.md#test-api-manually-with-swagger), go to "Test API manually with Swagger" and follow instructions of screenshots. |
| 3. | Provide Banking-UI | Show a UI to see the status of banking backend (show accounts, transactions etc). We will use [LibEuFin](https://github.com/element36-io/ebics-java-service/blob/main/docs/SANDBOX.md) - same as in our first grant. | [Testing Guide](TEST.md#login-to-simulated-banking-backend-ui), go to "Login to simulated banking backend UI" on [localhost:3000](localhost:3000),  foo/superpassword |
| 4. | Unit Tests | We will adapt unit tests and test data to cover creating and validating proofs.  | [Testing Guide](TEST.md), go to "Run unit tests" on top of the document.|
| 5. | Repository | Repository will be the existing repo [ebics-java-service](https://github.com/element36-io/ebics-java-service)  | [ebics-java-service](https://github.com/element36-io/ebics-java-service)  |
| 6. | Backend-Docker | Provide docker-compose images for setting up banking API wrapper, LibEuFin proxy for banking-API. Set up test data in the backend via script and run tests which include the proving system.  | [Testing Guide](TEST.md) - when starting services with docker compose. For data and scripts see [here](../scripts/), especially init_libeufin_sandbox.sh |
| 7. | Swagger | Provide Swagger docu for the backend. |  [localhost:8093](http://localhost:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) |
