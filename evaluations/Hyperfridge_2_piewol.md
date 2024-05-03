# Evaluation


- **Status:** in progress
- **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ----- | ----------- | ------ | ------------- | ------ |
| 0a. | License | <ul><li>[] </li></ul> | Apache 2.0  | [Link to Licence](https://github.com/element36-io/ebics-java-client?tab=LGPL-2.1-1-ov-file) | Apache 2.0 was specified but LGPL-2.1 is used. 
| 0b. | Documentation | <ul><li>[x] </li></ul> | We will provide both inline documentation of the code and a basic tutorial that explains how a user can start the backend and send test transactions, which will show how the new functionality works.| [Link to Documentation Root](https://github.com/element36-io/ebics-java-service?tab=readme-ov-file) |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | Adapt unit tests of core functions and test data to ensure functionality and robustness of the overall system (bridge and proofs). In the guide, we will describe how to run these tests.  | See [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#clone-repo-and-run-unit-tests)|
| 0d. | Docker | <ul><li>[] </li></ul> | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |[Testing Guide: "Run with Docker"](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#run-and-test-with-docker), got to "Run and test with Docker". |
| 1. | Generate Receipt | <ul><li>[] </li></ul> | Retrieve data form backend and generate receipt (proof) using the proving system.  | [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#test-api-and-download-zk-proof), go to Test API and download ZK Proof.|
| 2. | Provide API | <ul><li>[] </li></ul> | We will provide an application based on Spring-Boot that will contain `getBankstatements():Statement[]` (which includes account balance),  `createOrder (OutgoingPayment)` and `simulatePayment(Payment)`  as a REST interface. The recipe data is added in the backend API `/ebics/api-v1/bankstatements` with one new field in the top level of the JSON-response: `receiptUrl` so that clients can use a public verifier to check the proof.  |  [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#test-api-manually-with-swagger), go to "Test API manually with Swagger" and follow instructions of screenshots. |
| 3. | Provide Banking-UI | <ul><li>[] </li></ul> | Show a UI to see the status of banking backend (show accounts, transactions etc). We will use [LibEuFin](https://github.com/element36-io/ebics-java-service/blob/main/docs/SANDBOX.md) - same as in our first grant. | [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#login-to-simulated-banking-backend-ui), go to "Login to simulated banking backend UI" on [localhost:3000](localhost:3000),  foo/superpassword |
| 4. | Unit Tests | <ul><li>[] </li></ul> | We will adapt unit tests and test data to cover creating and validating proofs.  | [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md), go to "Clone repo and run unit tests" on top of the document.|
| 5. | Repository | <ul><li>[] </li></ul> | Repository will be the existing repo [ebics-java-service](https://github.com/element36-io/ebics-java-service)  | [ebics-java-service](https://github.com/element36-io/ebics-java-service)    |
| 6. | Backend-Docker | <ul><li>[] </li></ul> | Provide docker-compose images for setting up banking API wrapper, LibEuFin proxy for banking-API. Set up test data in the backend via script and run tests which include the proving system.  |[Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md) - when starting services with docker compose. For data and scripts see [here](https://github.com/element36-io/ebics-java-service/tree/hyperfridge/scripts), especially init_libeufin_sandbox.sh |
| 7. | Swagger | <ul><li>[] </li></ul> | Provide Swagger docu for the backend. |  With backend started, use [localhost:8093](http://localhost:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) |

## General Notes
The Apache license is not currently in use even though it was specified.



<details>
<summary> unit test output (ebics) </summary>
// todo: get output
May 3, 2024, 1:49:39 PM , all passing
</details>
