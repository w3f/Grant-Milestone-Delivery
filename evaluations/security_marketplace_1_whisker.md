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

1. There is no `cargo contract test` subcommand in smart contracts but your documentation mentions it.
2. There is no unit test for Escrow contract.
3. Backend integration test fail.
4. Backend swagger test fail. (probably needs authorization?)
5. Frontend docker build fail.

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

console.log
    Server is running on port 9000

      at Server.log (src/server.ts:39:15)

 FAIL  src/test/userController.test.ts (77.327 s)
  user Controller
    ✕ register with new email: Pass (5002 ms)
    ✕ register with empty email: Fail (10 ms)
    ✕ register with empty password: Fail (5 ms)
    ✕ register with mismatched passwords: Fail (3 ms)
    ✕ re-register with same email: Fail (5000 ms)
    ✕ login with registered email: Pass (5000 ms)
    ✕ login with empty email: Fail (5 ms)
    ✕ login with empty password: Fail (4 ms)
    ✕ login with registered email and wrong password: Fail (5000 ms)
    ✕ login with unregistered email: Fail (5000 ms)
    ✕ update profile  with registered email after login: Pass (5001 ms)
    ✕ getUser  with registered email after login: Pass (5001 ms)
    ✕ Register audit (5000 ms)
    ✕ Get details of all audit PUBLIC (5001 ms)
    ✕ Get details of all audit (5001 ms)
    ✕ Update Audit Status (5001 ms)
    ✕ Update Auditor ID (5003 ms)
    ✕ Two Factor Authentication (5002 ms)
    ✕ Verify Two Factor Authentication (5002 ms)
    ✕ Get Details of Audit (5002 ms)
    ○ skipped change password  with registered email after login: Pass

  ● user Controller › register with new email: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

       6 |
       7 | describe('user Controller', () => {
    >  8 |   it('register with new email: Pass', async () => {
         |   ^
       9 |     let response = await request(Server.app)
      10 |       .post('/api/v1/register')
      11 |       .send({

      at it (src/test/userController.test.ts:8:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › register with empty email: Fail

    assert.strictEqual(received, expected)

    Expected value to strictly be equal to:
      "EmailAddress validation failed"
    Received:
      "Please enter a valid email"
    
    Message:
      expected 'Please enter a valid email' to equal 'EmailAddress validation failed'

    Difference:

    - Expected
    + Received

    - EmailAddress validation failed
    + Please enter a valid email

      31 |       })
      32 |     expect(response1.status).to.be.eq(500);
    > 33 |     expect(response1.body.message).to.be.equal('EmailAddress validation failed')
         |                                          ^
      34 |   })
      35 |
      36 |   it('register with empty password: Fail', async () => {

      at Object.equal (src/test/userController.test.ts:33:42)

  ● user Controller › register with empty password: Fail

    assert.strictEqual(received, expected)

    Expected value to strictly be equal to:
      "Password validation failed"
    Received:
      "Please enter a valid password"
    
    Message:
      expected 'Please enter a valid password' to equal 'Password validation failed'

    Difference:

    - Expected
    + Received

    - Password validation failed
    + Please enter a valid password

      47 |       })
      48 |     expect(response2.status).to.be.eq(500);
    > 49 |     expect(response2.body.message).to.be.equal('Password validation failed')
         |                                          ^
      50 |   })
      51 |
      52 |   it('register with mismatched passwords: Fail', async () => {

      at Object.equal (src/test/userController.test.ts:49:42)

  ● user Controller › register with mismatched passwords: Fail

    assert.strictEqual(received, expected)

    Expected value to strictly be equal to:
      "Password validation failed"
    Received:
      "Please enter a valid password"
    
    Message:
      expected 'Please enter a valid password' to equal 'Password validation failed'

    Difference:

    - Expected
    + Received

    - Password validation failed
    + Please enter a valid password

      63 |       })
      64 |     expect(response3.status).to.be.eq(500);
    > 65 |     expect(response3.body.message).to.be.equal('Password validation failed');
         |                                          ^
      66 |
      67 |   })
      68 |

      at Object.equal (src/test/userController.test.ts:65:42)

  ● user Controller › re-register with same email: Fail

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      67 |   })
      68 |
    > 69 |   it('re-register with same email: Fail', async () => {
         |   ^
      70 |     let response = await request(Server.app)
      71 |       .post('/api/v1/register')
      72 |       .send({

      at it (src/test/userController.test.ts:69:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › login with registered email: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      80 |   })
      81 |
    > 82 |   it('login with registered email: Pass', async () => {
         |   ^
      83 |     let response = await request(Server.app)
      84 |       .post('/api/v1/login')
      85 |       .send({

      at it (src/test/userController.test.ts:82:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › login with empty email: Fail

    assert.strictEqual(received, expected)

    Expected value to strictly be equal to:
      400
    Received:
      500
    
    Message:
      expected 500 to equal 400

      100 |         password: "Asdervf@12r"
      101 |       })
    > 102 |     expect(response1.status).to.be.eq(400);
          |                                    ^
      103 |     expect(response1.body.message).to.be.equal('Check Your Email And Password')
      104 |   })
      105 |

      at Object.eq (src/test/userController.test.ts:102:36)

  ● user Controller › login with empty password: Fail

    assert.strictEqual(received, expected)

    Expected value to strictly be equal to:
      400
    Received:
      500
    
    Message:
      expected 500 to equal 400

      112 |         password: ""
      113 |       })
    > 114 |     expect(response2.status).to.be.eq(400);
          |                                    ^
      115 |     expect(response2.body.message).to.be.equal('Wrong Password Entered')
      116 |   })
      117 |

      at Object.eq (src/test/userController.test.ts:114:36)

  ● user Controller › login with registered email and wrong password: Fail

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      116 |   })
      117 |
    > 118 |   it('login with registered email and wrong password: Fail', async () => {
          |   ^
      119 |     let response = await request(Server.app)
      120 |       .post('/api/v1/login')
      121 |       .send({

      at it (src/test/userController.test.ts:118:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › login with unregistered email: Fail

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      127 |     // console.log("response.message",response.body.data)
      128 |   })
    > 129 |   it('login with unregistered email: Fail', async () => {
          |   ^
      130 |     let response = await request(Server.app)
      131 |       .post('/api/v1/login')
      132 |       .send({

      at it (src/test/userController.test.ts:129:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › update profile  with registered email after login: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      138 |   })
      139 |
    > 140 |   it('update profile  with registered email after login: Pass', async () => {
          |   ^
      141 |     let response = await request(Server.app)
      142 |       .post('/api/v1/login')
      143 |       .send({

      at it (src/test/userController.test.ts:140:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › getUser  with registered email after login: Pass

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      188 |   })
      189 |
    > 190 |   it('getUser  with registered email after login: Pass', async () => {
          |   ^
      191 |     let response = await request(Server.app)
      192 |       .post('/api/v1/login')
      193 |       .send({

      at it (src/test/userController.test.ts:190:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Register audit

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      206 |   })
      207 |
    > 208 |   it('Register audit', async () => {
          |   ^
      209 |     let obj = {
      210 |       emailAddress: "áweraaty@yopmail.com",
      211 |       auditType: ["smartContractAudit", "DoublePenetration"],

      at it (src/test/userController.test.ts:208:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Get details of all audit PUBLIC

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      236 |   })
      237 |
    > 238 |   it('Get details of all audit PUBLIC', async () => {
          |   ^
      239 |     let obj = {
      240 |       emailAddress: "áweraaty@yopmail.com"
      241 |     }

      at it (src/test/userController.test.ts:238:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Get details of all audit

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      260 |   })
      261 |
    > 262 |   it('Get details of all audit', async () => {
          |   ^
      263 |     let obj = {
      264 |       emailAddress: "áweraaty@yopmail.com"
      265 |     }

      at it (src/test/userController.test.ts:262:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Update Audit Status

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      284 |   })
      285 |
    > 286 |   it('Update Audit Status', async () => {
          |   ^
      287 |     let obj = {
      288 |       emailAddress: "áweraaty@yopmail.com",
      289 |       postID: 86933,

      at it (src/test/userController.test.ts:286:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Update Auditor ID

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      310 |   })
      311 |
    > 312 |   it('Update Auditor ID', async () => {
          |   ^
      313 |     let obj = {
      314 |       emailAddress: "áweraaty@yopmail.com",
      315 |       postID: 67974,

      at it (src/test/userController.test.ts:312:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Two Factor Authentication

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      339 |
      340 |
    > 341 |   it('Two Factor Authentication', async () => {
          |   ^
      342 |     let obj = {
      343 |       emailAddress: "áweraaty@yopmail.com"
      344 |     }

      at it (src/test/userController.test.ts:341:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Verify Two Factor Authentication

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      363 |   })
      364 |
    > 365 |   it('Verify Two Factor Authentication', async () => {
          |   ^
      366 |
      367 |     let response = await request(Server.app)
      368 |       .post('/api/v1/login')

      at it (src/test/userController.test.ts:365:3)
      at Object.describe (src/test/userController.test.ts:7:1)

  ● user Controller › Get Details of Audit

    thrown: "Exceeded timeout of 5000 ms for a test.
    Add a timeout value to this test to increase the timeout, if this is a long-running test. See https://jestjs.io/docs/api#testname-fn-timeout."

      401 |
      402 |
    > 403 |   it('Get Details of Audit', async () => {
          |   ^
      404 |     let obj = {
      405 |       emailAddress: "áweraaty@yopmail.com",
      406 |       postID: 86933

      at it (src/test/userController.test.ts:403:3)
      at Object.describe (src/test/userController.test.ts:7:1)

Test Suites: 1 failed, 1 total
Tests:       20 failed, 1 skipped, 21 total
Snapshots:   0 total
Time:        77.369 s
Ran all test suites.
Jest did not exit one second after the test run has completed.

'This usually means that there are asynchronous operations that weren't stopped in your tests. Consider running Jest with `--detectOpenHandles` to troubleshoot this issue.



```

</details>

#### Screenshots

![swagger register test](https://ibb.co/xmhXBbc)

### Frontend

<details>

<summary> docker build </summary>

```bash

[+] Building 65.1s (8/9)                                                                                                                                                                            docker:default
 => [internal] load .dockerignore                                                                                                                                                                             0.1s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.1s
 => => transferring dockerfile: 139B                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/node:16                                                                                                                                                    9.7s
 => [1/5] FROM docker.io/library/node:16@sha256:6cd6581a9ae814ebbc8077afd63ecbf4d37f9b59ac9d9304a1b5a9e743ac13e0                                                                                             54.2s
 => => resolve docker.io/library/node:16@sha256:6cd6581a9ae814ebbc8077afd63ecbf4d37f9b59ac9d9304a1b5a9e743ac13e0                                                                                              0.0s
 => => sha256:6cd6581a9ae814ebbc8077afd63ecbf4d37f9b59ac9d9304a1b5a9e743ac13e0 776B / 776B                                                                                                                    0.0s
 => => sha256:a21a68db680698eb1a863e229f81f70975f7ff6231e4d3ae755cf82f77bbac67 7.24kB / 7.24kB                                                                                                                0.0s
 => => sha256:9918064ebccea7fc961fe71dad46105b217763b4b1b3a9dfa7bee2ab29d2039b 50.50MB / 50.50MB                                                                                                             40.3s
 => => sha256:2345e1e5f82d8963240db3c8e8ccfd431d0962d14219e24bbcc756ef217bba48 17.58MB / 17.58MB                                                                                                              5.4s
 => => sha256:947969e624beff93eed664f9f52a08712f3d1e12cadbdf929ff928f93d2c383c 51.87MB / 51.87MB                                                                                                             27.2s
 => => sha256:83e822fa0a8094738dcaed855466cccae8d6599d55409e2befaa2040e27ead15 2.00kB / 2.00kB                                                                                                                0.0s
 => => sha256:87da2254b9de06a71bc1828dec0a28f6a16af7cade75310533cf5cff9ac7e669 191.90MB / 191.90MB                                                                                                           48.3s
 => => sha256:24d744d599278585b9ad9ab702beb416d3f6eac9c4dee355921d3aee6045e706 4.21kB / 4.21kB                                                                                                               27.6s
 => => sha256:0ed2ac5774c00e61286b9bd72324a242b0352f6ed54157ad6ccf4969e41d2418 34.79MB / 34.79MB                                                                                                             41.3s
 => => extracting sha256:9918064ebccea7fc961fe71dad46105b217763b4b1b3a9dfa7bee2ab29d2039b                                                                                                                     1.4s
 => => sha256:c91e125a2c9469eb928e0a1507c0bbf008dd732affbe83742dc395c235ac8a08 2.27MB / 2.27MB                                                                                                               45.5s
 => => sha256:73ea6c88f52c01224892776f5f08b4ff2c56f0459b203497fedf117ffb99748b 451B / 451B                                                                                                                   44.4s
 => => extracting sha256:2345e1e5f82d8963240db3c8e8ccfd431d0962d14219e24bbcc756ef217bba48                                                                                                                     0.3s
 => => extracting sha256:947969e624beff93eed664f9f52a08712f3d1e12cadbdf929ff928f93d2c383c                                                                                                                     1.5s
 => => extracting sha256:87da2254b9de06a71bc1828dec0a28f6a16af7cade75310533cf5cff9ac7e669                                                                                                                     4.4s
 => => extracting sha256:24d744d599278585b9ad9ab702beb416d3f6eac9c4dee355921d3aee6045e706                                                                                                                     0.0s
 => => extracting sha256:0ed2ac5774c00e61286b9bd72324a242b0352f6ed54157ad6ccf4969e41d2418                                                                                                                     0.9s
 => => extracting sha256:c91e125a2c9469eb928e0a1507c0bbf008dd732affbe83742dc395c235ac8a08                                                                                                                     0.0s
 => => extracting sha256:73ea6c88f52c01224892776f5f08b4ff2c56f0459b203497fedf117ffb99748b                                                                                                                     0.0s
 => [internal] load build context                                                                                                                                                                             0.3s
 => => transferring context: 46.32MB                                                                                                                                                                          0.3s
 => [2/5] WORKDIR /app                                                                                                                                                                                        0.3s
 => [3/5] COPY ./package*.json ./                                                                                                                                                                             0.1s
 => ERROR [4/5] RUN npm install                                                                                                                                                                               0.6s
------
 > [4/5] RUN npm install:
0.599 npm ERR! code ENOENT
0.599 npm ERR! syscall open
0.599 npm ERR! path /app/package.json
0.599 npm ERR! errno -2
0.600 npm ERR! enoent ENOENT: no such file or directory, open '/app/package.json'
0.600 npm ERR! enoent This is related to npm not being able to find a file.
0.600 npm ERR! enoent 
0.601 
0.601 npm ERR! A complete log of this run can be found in:
0.601 npm ERR!     /root/.npm/_logs/2023-08-01T00_35_30_634Z-debug-0.log
------
Dockerfile:4
--------------------
   2 |     WORKDIR /app
   3 |     COPY ./package*.json ./
   4 | >>> RUN npm install
   5 |     COPY . . 
   6 |     CMD ["npm","run","start"] 
--------------------
ERROR: failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 254


```

</details>