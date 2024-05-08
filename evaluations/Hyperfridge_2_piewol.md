# Evaluation


- **Status:** accepted
- **Application Document:** [Hyperfridge](https://github.com/w3f/Grants-Program/blob/master/applications/hyperfridge.md)
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ----- | ----------- | ------ | ------------- | ------ |
| 0a. | License | <ul><li>[x] </li></ul> |  [Link to Licence](https://github.com/element36-io/ebics-java-service?tab=Apache-2.0-1-ov-file) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Link to Documentation Root](https://github.com/element36-io/ebics-java-service?tab=readme-ov-file) | |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | See [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#clone-repo-and-run-unit-tests)| The testing guide is well done and works straight up.|
| 0d. | Docker | <ul><li>[x] </li></ul> | [Testing Guide: "Run with Docker"](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#run-and-test-with-docker), got to "Run and test with Docker". | |
| 1. | Generate Receipt | <ul><li>[x] </li></ul> |  [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#test-api-and-download-zk-proof), go to Test API and download ZK Proof.| |
| 2. | Provide API | <ul><li>[x] </li></ul> |  [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#test-api-manually-with-swagger), go to "Test API manually with Swagger" and follow instructions of screenshots. | |
| 3. | Provide Banking-UI | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md#login-to-simulated-banking-backend-ui), go to "Login to simulated banking backend UI" on [localhost:3000](localhost:3000),  foo/superpassword | |
| 4. | Unit Tests | <ul><li>[x] </li></ul>  | [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md), go to "Clone repo and run unit tests" on top of the document.| |
| 5. | Repository | <ul><li>[x] </li></ul>  | [ebics-java-service](https://github.com/element36-io/ebics-java-service)    | |
| 6. | Backend-Docker | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/element36-io/ebics-java-service/blob/hyperfridge/docs/TEST.md) - when starting services with docker compose. For data and scripts see [here](https://github.com/element36-io/ebics-java-service/tree/hyperfridge/scripts), especially init_libeufin_sandbox.sh | |
| 7. | Swagger | <ul><li>[x] </li></ul>  |  With backend started, use [localhost:8093](http://localhost:8093/ebics/swagger-ui/?url=/ebics/v2/api-docs/#/) | |

## General Notes
Everything works directly following the testing guide. Well done!

Login to simulated banking backend UI worked.


## unit tests
<details>
<summary> unit test output (ebics) </summary>
html style output kills mdx compatibility so only shortened output is displayed here.

```
11
tests

0
failures

0
ignored

1.042s
duration

100%
successful



May 3, 2024, 1:49:39 PM , all passing 
```
</details>

## unit tests
<details>
<summary> API test via docker </summary>

```
[+] Copying 1/0
 ✔ fridge copy receipt.json to fridge:/app/receipt.json Copied             0.0s 
verify dcaba464d4909890d6638dd14e7a25853a8dd2cad14639d0d310987b32a43957 Some("/app/receipt.json")
Ok(Commitment { hostinfo: "host:main", iban: "CH4308307000289537312", stmts: [] })
```

</details>

