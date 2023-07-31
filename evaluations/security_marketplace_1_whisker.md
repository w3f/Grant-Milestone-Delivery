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

## Logs

<details>

<summary>Build image </summary>

```bash


```

</details>

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

### Frontend

<details>

<summary> Reward token contract Unit tests </summary>

```bash


```

</details>