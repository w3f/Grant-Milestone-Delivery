# Evaluation

- **Status:** In Progress
- **Application Document:** [w3f/Grants-Program#1726](https://github.com/w3f/Grants-Program/blob/master/applications/Security_Marketplace.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**


| Number | Deliverable | Link | Notes |
| -----: | ----------- | ----- | ------- |
| **0a.** | License | Unlicense | Unlicensed |
| **0b.** | Documentation | >[Escrow Contract Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Smartcontract/blob/main/escrow/Escrow%20Doc.pdf) >[Reward Token Contract Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Smartcontract/blob/main/reward_token/Reward%20Token.pdf) >[Node Services Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Backend/blob/main/AuditBazaarBackendArchitecture.docx) | The documentations are meant to explain the working of the application till this milestone. |
| **0c.** | Testing and Testing Guide | - | The respective Test files can be found alongside the project repositories with guidelines in readme files. |
| **0d.** | Docker | - | The dockerfiles can be found alongside the project repositories.  |
| 1 | UI/UX | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | The link leads to the repository of the front end of the application, the guidelines to operate it can be found in readme file. |
| 2 | Reputation Token Contract | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | This link leads to the reputation token's smart contract.  |
| 3 | Escrow Contract| [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | This link leads to the Escrow Contract's smart contract. |
| 4 | Audit Directory Contract | - | This contract is not in the planned ecosystem anymore and it's functionality has been shifted in to that of escrow contract's |
| 5 | Arbiters Contract | - | This contract is not in the planned ecosystem anymore either with it's functionality shifted in the back end to make it cost efficient for Arbiters. |
| 6 | Node Services | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Backend) | The link leads to the repository of the front end of the application, the guidelines to operate it can be found in readme file. |

## General Notes

todo

## Issues

1. Backend integration test fail.
   1. I run `npm start` and then run `npx jest`.
2. Backend swagger test fail. (probably needs authorization?)
3. Frontend bugs (see Frontend screenshots)
   1. can't leave from changing password.
   2. can't connect wallet, After I have authorized polkadot.js and Talisman, this prompt appears, and I cannot connect to the extension of Subwallet.

## Logs

### Smart contracts

<details>

<summary> Reward token contract Unit tests </summary>

```bash

warning: function `random_acoount_id` is never used
  --> lib.rs:83:8
   |
83 |     fn random_acoount_id() -> AccountId {
   |        ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: module `testCases` should have a snake case name
  --> lib.rs:77:5
   |
77 | mod testCases {
   |     ^^^^^^^^^ help: convert the identifier to snake case: `test_cases`
   |
   = note: `#[warn(non_snake_case)]` on by default

warning: unused `std::result::Result` that must be used
  --> lib.rs:94:9
   |
94 |         contract.mint(accounts.alice,1);
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled
   = note: `#[warn(unused_must_use)]` on by default

warning: unused `std::result::Result` that must be used
   --> lib.rs:107:9
    |
107 |         contract.mint(accounts.alice,1);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled

warning: unused `std::result::Result` that must be used
   --> lib.rs:120:9
    |
120 |         contract.mint(accounts.alice,1);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled

warning: variable `Error1` should have a snake case name
   --> lib.rs:134:13
    |
134 |         let Error1 = contract.mint(accounts.charlie, 1000);
    |             ^^^^^^ help: convert the identifier to snake case: `error1`

warning: `reward_token` (lib test) generated 6 warnings
    Finished test [unoptimized + debuginfo] target(s) in 1m 39s
     Running unittests lib.rs (target/debug/deps/reward_token-7de3b7d8c4071858)

running 4 tests
test testCases::test_case_4 ... ok
test testCases::test_case_1 ... ok
test testCases::test_case_3 ... ok
test testCases::test_case_2 ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

</details>

### Backend

<details>

<summary> Backend integration tests </summary>

```bash

➜  Backend git:(main) npx jest
 FAIL  src/test/userController.test.ts (70.965 s)
  user Controller
    ✕ register with new email: Pass (5002 ms)
    ✓ register with empty email: Fail (8 ms)
    ✓ register with empty password: Fail (3 ms)
    ✓ register with mismatched passwords: Fail (2 ms)
    ✕ re-register with same email: Fail (5001 ms)
    ✕ login with registered email: Pass (5001 ms)
    ✓ login with empty email: Fail (6 ms)
    ✓ login with empty password: Fail (4 ms)
    ✕ login with registered email and wrong password: Fail (5000 ms)
    ✕ login with unregistered email: Fail (5001 ms)
    ✕ update profile  with registered email after login: Pass (5001 ms)
    ✕ getUser  with registered email after login: Pass (5001 ms)
    ✕ Register audit (5002 ms)
    ✕ Get details of all audit PUBLIC (5001 ms)
    ✕ Get details of all audit (5001 ms)
    ✕ change password  with registered email after login: Pass (5002 ms)
    ✕ Update Audit Status (5001 ms)
    ✕ Update Auditor ID (5002 ms)
    ✕ Get Details of Audit (5002 ms)

  ● user Controller › register with new email: Pass

    listen EADDRINUSE: address already in use :::9000

      36 |
      37 |   public listen(port: number) {
    > 38 |     this.app.listen(port, () => {
         |              ^
      39 |       console.log(`Server is running on port ${port}`);
      40 |     });
      41 |   }

      at Function.listen (node_modules/express/lib/application.js:635:24)
      at ExpressServer.listen (src/server.ts:38:14)
      at Object.listen (src/test/userController.test.ts:6:8)

  ● user Controller › register with new email: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

       7 |
       8 | describe('user Controller', () => {
    >  9 |   it('register with new email: Pass', async () => {
         |   ^
      10 |     let response = await request(Server.app)
      11 |       .post('/api/v1/register')
      12 |       .send(config.REGISTER_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:9:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › re-register with same email: Fail

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      51 |   })
      52 |
    > 53 |   it('re-register with same email: Fail', async () => {
         |   ^
      54 |     let response = await request(Server.app)
      55 |       .post('/api/v1/register')
      56 |       .send(config.REGISTER_PAYLOAD_CASE_5)

      at it (src/test/userController.test.ts:53:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › login with registered email: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      58 |   })
      59 |
    > 60 |   it('login with registered email: Pass', async () => {
         |   ^
      61 |     let response = await request(Server.app)
      62 |       .post('/api/v1/login')
      63 |       .send(config.LOGIN_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:60:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › login with registered email and wrong password: Fail

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      85 |   })
      86 |
    > 87 |   it('login with registered email and wrong password: Fail', async () => {
         |   ^
      88 |     let response = await request(Server.app)
      89 |       .post('/api/v1/login')
      90 |       .send(config.LOGIN_PAYLOAD_CASE_4)

      at it (src/test/userController.test.ts:87:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › login with unregistered email: Fail

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      93 |     // console.log("response.message",response.body.data)
      94 |   })
    > 95 |   it('login with unregistered email: Fail', async () => {
         |   ^
      96 |     let response = await request(Server.app)
      97 |       .post('/api/v1/login')
      98 |       .send(config.LOGIN_PAYLOAD_CASE_5)

      at it (src/test/userController.test.ts:95:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › update profile  with registered email after login: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      101 |   })
      102 |
    > 103 |   it('update profile  with registered email after login: Pass', async () => {
          |   ^
      104 |     let response = await request(Server.app)
      105 |       .post('/api/v1/login')
      106 |       .send(config.LOGIN_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:103:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › getUser  with registered email after login: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      119 |
      120 |
    > 121 |   it('getUser  with registered email after login: Pass', async () => {
          |   ^
      122 |     let response = await request(Server.app)
      123 |       .post('/api/v1/login')
      124 |       .send(config.LOGIN_PAYLOAD_CASE_6)

      at it (src/test/userController.test.ts:121:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › Register audit

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      131 |   })
      132 |
    > 133 |   it('Register audit', async () => {
          |   ^
      134 |     let response = await request(Server.app)
      135 |       .post('/api/v1/login')
      136 |       .send(config.LOGIN_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:133:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › Get details of all audit PUBLIC

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      147 |   })
      148 |
    > 149 |   it('Get details of all audit PUBLIC', async () => {
          |   ^
      150 |     let obj = {
      151 |       emailAddress: "áweraaty@yopmail.com"
      152 |     }

      at it (src/test/userController.test.ts:149:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › Get details of all audit

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      167 |   })
      168 |
    > 169 |   it('Get details of all audit', async () => {
          |   ^
      170 |     let obj = {
      171 |       emailAddress: "áweraaty@yopmail.com"
      172 |     }

      at it (src/test/userController.test.ts:169:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › change password  with registered email after login: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      187 |   })
      188 |
    > 189 |   it('change password  with registered email after login: Pass', async () => {
          |   ^
      190 |     let response = await request(Server.app)
      191 |       .post('/api/v1/login')
      192 |       .send(config.LOGIN_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:189:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › Update Audit Status

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      199 |   })
      200 |
    > 201 |   it('Update Audit Status', async () => {
          |   ^
      202 |     let response = await request(Server.app)
      203 |       .post('/api/v1/login')
      204 |       .send(config.NEW_LOGIN_CRED_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:201:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › Update Auditor ID

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      223 |   })
      224 |
    > 225 |   it('Update Auditor ID', async () => {
          |   ^
      226 |     let response = await request(Server.app)
      227 |       .post('/api/v1/login')
      228 |       .send(config.NEW_LOGIN_CRED_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:225:3)
      at Object.describe (src/test/userController.test.ts:8:1)

  ● user Controller › Get Details of Audit

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      246 |
      247 |
    > 248 |   it('Get Details of Audit', async () => {
          |   ^
      249 |     let response = await request(Server.app)
      250 |     .post('/api/v1/login')
      251 |     .send(config.NEW_LOGIN_CRED_PAYLOAD_CASE_1)

      at it (src/test/userController.test.ts:248:3)
      at Object.describe (src/test/userController.test.ts:8:1)

Test Suites: 1 failed, 1 total
Tests:       14 failed, 5 passed, 19 total
Snapshots:   0 total
Time:        70.995 s, estimated 72 s
Ran all test suites.
Jest did not exit one second after the test run has completed.

'This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.


```

</details>

#### Screenshots

![swagger register test](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/4068bd94-9ca2-4d16-9b10-d7b041e1d1ab)

### Frontend

<details>

<summary> docker build </summary>

```bash

[+] Building 8.2s (10/10) FINISHED                               docker:default
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 199B                                       0.0s
 => [internal] load metadata for docker.io/library/node:16                 8.1s
 => [1/5] FROM docker.io/library/node:16@sha256:6cd6581a9ae814ebbc8077afd  0.0s
 => [internal] load build context                                          0.0s
 => => transferring context: 5.01kB                                        0.0s
 => CACHED [2/5] WORKDIR /app                                              0.0s
 => CACHED [3/5] COPY package.json .                                       0.0s
 => CACHED [4/5] RUN npm install --force                                   0.0s
 => CACHED [5/5] COPY . .                                                  0.0s
 => exporting to image                                                     0.0s
 => => exporting layers                                                    0.0s
 => => writing image sha256:270be7647a1c9b3a80383fa26755345afc7355ea4b08d  0.0s
 => => naming to docker.io/library/my-audit-bazaar-img                     0.0s

```

</details>

#### Screenshots

- Main page

![main page](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/a33d47d3-15a9-46c9-8e34-f9f06ec65dcf)

- Connect wallet

![connect wallet](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/430d1c9d-3770-41a5-be8d-1ea37811aebe)

- Change password

![change password](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/434fab41-f9f0-44bf-a348-52be3ec0de16)