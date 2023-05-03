# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Tellor.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>|  https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/LICENSE |
| **0b.** | Documentation | <ul><li>[x] </li></ul>| We will provide both **inline documentation** of the code and a basic **tutorial**. [Link to basic tutorial](https://drive.google.com/file/d/1E8XVzq2C875fyBnht7MA58a2ix9RIv2b/view?usp=share_link) | Would be nice to have a text tutorial for the software usage. Could be delivered in the next milestone |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/README.md | Automated unit tests. Some problems to check the coverage. |
| **0d.** | Docker | <ul><li>[ ] </li></ul>| https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/Dockerfile | The tests fail |
| 1 | Develop Controller contracts | <ul><li>[ ] </li></ul>| [Staking](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/ParachainStaking.sol), [Governance](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/ParachainGovernance.sol)  | Not fully evaluated yet |
| 2 | Develop Parachain integration contract| <ul><li>[ ] </li></ul>| [ParachainRegistry](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/ParachainRegistry.sol), [Parachain](https://github.com/tellor-io/tellor-parachain-contracts/blob/7f8cf44f526d0c42fd35074024f2daa40c637579/src/Parachain.sol) | Not fully evaluated yet |



## Evaluation V1

### Testing

Running the tests without Docker, all tests passed:

```
Running 1 test for test/helpers/StubXcmTransactorV2.sol:StubXcmTransactorV2.0.8.3
[PASS] test() (gas: 198)
Test result: ok. 1 passed; 0 failed; finished in 415.42µs

Running 1 test for test/helpers/StubXcmTransactorV2.sol:StubXcmTransactorV2.0.8.19
[PASS] test() (gas: 186)
Test result: ok. 1 passed; 0 failed; finished in 490.29µs

Running 1 test for script/Counter.s.sol:CounterScript
[PASS] test() (gas: 142)
Test result: ok. 1 passed; 0 failed; finished in 1.04ms

Running 6 tests for test/testParachainRegistry.t.sol:ParachainRegistryTest
[PASS] testGetByAddress() (gas: 30968)
[PASS] testGetById() (gas: 28904)
[PASS] testPallet() (gas: 12806)
[PASS] testParachain() (gas: 13527)
[PASS] testRegister() (gas: 241350)
[PASS] testX2() (gas: 14951)
Test result: ok. 6 passed; 0 failed; finished in 5.27ms

Running 11 tests for test/testParachainGovernance.t.sol:ParachainGovernanceTest
[PASS] testBeginParachainDispute() (gas: 2086324)
[PASS] testConstructor() (gas: 29009)
[PASS] testDidVote() (gas: 1282413)
[PASS] testExecuteVote() (gas: 1957828)
[PASS] testGetDisputeInfo() (gas: 1221481)
[PASS] testGetVoteInfo() (gas: 1354039)
[PASS] testGetVoteRounds() (gas: 1212262)
[PASS] testInit() (gas: 2256806)
[PASS] testTallyVotes() (gas: 1626737)
[PASS] testVote() (gas: 1629013)
[PASS] testVoteParachain() (gas: 1721266)
Test result: ok. 11 passed; 0 failed; finished in 11.60ms

Running 11 tests for test/testParachain.t.sol:ParachainTest.0.8.19
[PASS] testConstructor() (gas: 9847)
[PASS] testConvertWeightToFee() (gas: 5789)
[PASS] testParachain() (gas: 370666)
[PASS] testRegistryAddress() (gas: 9765)
[PASS] testReportSlash() (gas: 403544)
[PASS] testReportStakeDeposited() (gas: 430996)
[PASS] testReportStakeWithdrawRequested() (gas: 431367)
[PASS] testReportStakeWithdrawn() (gas: 403587)
[PASS] testReverse() (gas: 20893)
[PASS] testTransactThroughSigned() (gas: 402089)
[PASS] testX1() (gas: 370483)
Test result: ok. 11 passed; 0 failed; finished in 12.35ms

Running 11 tests for test/testParachainStaking.t.sol:ParachainStakingTest
[PASS] testConfirmParachainStakeWithdrawRequest() (gas: 907480)
[PASS] testConstructor() (gas: 86128)
[PASS] testDepositParachainStake() (gas: 4162136)
[PASS] testGetGovernanceAddress() (gas: 7935)
[PASS] testGetParachainStakerDetails() (gas: 530083)
[PASS] testGetParachainStakerInfo() (gas: 523059)
[PASS] testGetTokenAddress() (gas: 9977)
[PASS] testInit() (gas: 2059644)
[PASS] testRequestParachainStakeWithdraw() (gas: 892250)
[PASS] testSlashParachainReporter() (gas: 876427)
[PASS] testWithdrawParachainStake() (gas: 1122650)
Test result: ok. 11 passed; 0 failed; finished in 12.27ms

Running 11 tests for test/testParachain.t.sol:ParachainTest.0.8.3
[PASS] testConstructor() (gas: 9975)
[PASS] testConvertWeightToFee() (gas: 5918)
[PASS] testParachain() (gas: 370670)
[PASS] testRegistryAddress() (gas: 9893)
[PASS] testReportSlash() (gas: 404319)
[PASS] testReportStakeDeposited() (gas: 431902)
[PASS] testReportStakeWithdrawRequested() (gas: 432262)
[PASS] testReportStakeWithdrawn() (gas: 404362)
[PASS] testReverse() (gas: 22873)
[PASS] testTransactThroughSigned() (gas: 402859)
[PASS] testX1() (gas: 370487)
Test result: ok. 11 passed; 0 failed; finished in 12.86ms

Running 8 tests for test/testE2E.t.sol:E2ETests
[PASS] testMultipleDisputesDifferentChains() (gas: 7162390)
[PASS] testMultipleDisputesSingleChain() (gas: 3446016)
[PASS] testMultipleStakeWithdrawRequestsDisputesOnMultipleChains() (gas: 4056031)
[PASS] testMultipleVoteRoundsOverturnResult() (gas: 3570835)
[PASS] testMultipleVotesOnDisputeAllPassing() (gas: 3592565)
[PASS] testNoVotesForDispute() (gas: 1738765)
[PASS] testRequestWithdrawStakeThenDispute() (gas: 1448334)
[PASS] testVotingTiesAndPartialParticipation() (gas: 1701517)
Test result: ok. 8 passed; 0 failed; finished in 13.78ms

Running 1 test for test/testE2eB.t.sol:E2ETestsB
[PASS] testExecuteVotesOnMultipleParachains() (gas: 7691368)
Test result: ok. 1 passed; 0 failed; finished in 13.88ms
```

I checked the coverage of the tests with `forge coverage`

```
| File                       	| % Lines       	| % Statements  	| % Branches   	| % Funcs     	|
|--------------------------------|-------------------|-------------------|------------------|-----------------|
| src/Parachain.sol          	| 50.00% (44/88)	| 50.00% (64/128)   | 100.00% (0/0)	| 50.00% (12/24)  |
| src/ParachainGovernance.sol	| 100.00% (114/114) | 100.00% (121/121) | 88.16% (67/76)   | 100.00% (10/10) |
| src/ParachainRegistry.sol  	| 0.00% (0/28)  	| 0.00% (0/30)  	| 0.00% (0/4)  	| 0.00% (0/12)	|
| src/ParachainStaking.sol   	| 100.00% (89/89)   | 100.00% (95/95)   | 90.00% (45/50)   | 100.00% (11/11) |
| test/helpers/StubXcmUtils.sol  | 0.00% (0/30)  	| 0.00% (0/38)  	| 100.00% (0/0)	| 0.00% (0/18)	|
| test/helpers/TestParachain.sol | 0.00% (0/14)  	| 0.00% (0/14)  	| 100.00% (0/0)	| 0.00% (0/14)	|
| test/helpers/TestToken.sol 	| 0.00% (0/2)   	| 0.00% (0/2)   	| 100.00% (0/0)	| 0.00% (0/2) 	|
| Total                      	| 67.67% (247/365)  | 65.42% (280/428)  | 86.15% (112/130) | 36.26% (33/91)  |
```

I noticed the `ParachainRegistry.sol` has some functions tested but returned 0.00% of coverage. Could you assist with that? How can we check the correct coverage of the tests?

Running the tests with Docker, most of the tests are failing, for example.

```
 > [5/5] RUN forge test:
#9 2.397 Encountered 1 failing test in test/testParachainGovernance.t.sol:ParachainGovernanceTest
#9 2.397 [FAIL. Reason: Setup failed: failed to read from "/app/out/StubXcmTransactorV2.sol/StubXcmTransactorV2.json": No such file or directory (os error 2)] setUp() (gas: 0)
#9 2.397
#9 2.397 Encountered 1 failing test in test/testParachainRegistry.t.sol:ParachainRegistryTest
#9 2.397 [FAIL. Reason: Setup failed: failed to read from "/app/out/StubXcmTransactorV2.sol/StubXcmTransactorV2.json": No such file or directory (os error 2)] setUp() (gas: 0)
#9 2.397
#9 2.397 Encountered 1 failing test in test/testParachainStaking.t.sol:ParachainStakingTest
#9 2.397 [FAIL. Reason: Setup failed: failed to read from "/app/out/StubXcmTransactorV2.sol/StubXcmTransactorV2.json": No such file or directory (os error 2)] setUp() (gas: 0)
#9 2.397
#9 2.397 Encountered a total of 7 failing tests, 3 tests succeeded
------
Dockerfile:11
--------------------
   9 | 	COPY . .
  10 | 	RUN forge build
  11 | >>> RUN forge test
  12 |	 
--------------------
ERROR: failed to solve: process "/bin/sh -c forge test" did not complete successfully: exit code: 1
```

### Code Quality

When running the tests, I received some warnings like:

```
warning[2519]: Warning: This declaration shadows an existing declaration.
  --> test/testParachainRegistry.t.sol:81:9:
   |
81 |     	ParachainRegistry.Parachain memory parachain = registry.getByAddress(paraOwner2);
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> test/testParachainRegistry.t.sol:20:5:
   |
20 | 	TestParachain public parachain;
   | 	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



warning[2519]: Warning: This declaration shadows an existing declaration.
  --> test/testParachainRegistry.t.sol:99:9:
   |
99 |     	ParachainRegistry.Parachain memory parachain = registry.getById(fakeParaId);
   |     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> test/testParachainRegistry.t.sol:20:5:
   |
20 | 	TestParachain public parachain;
   | 	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^



warning[2519]: Warning: This declaration shadows an existing declaration.
   --> test/testParachainRegistry.t.sol:106:9:
	|
106 |     	ParachainRegistry.Parachain memory parachain = registry.getByAddress(paraOwner);
	|     	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
Note: The shadowed declaration is here:
  --> test/testParachainRegistry.t.sol:20:5:
   |
20 | 	TestParachain public parachain;
   | 	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
```
