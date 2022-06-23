# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polk-auction.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [Apache License](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/LICENSE) | - |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [polk-auction-ui README](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/README.md) | - |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [polk-auction-ui README](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/README.md#test) | See [Test Feedback](#test-feedback) |
| 0d. | Docker |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/Dockerfile) | - |
| 1. | Current-Auction page |<ul><li>[x] </li></ul>| [Auction Page](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/auction) | See [Current Auction/Parachain/Crowdloan Pages Feedback](#current-auctionparachaincrowdloan-pages-feedback) |
| 2. | Current-Parachains page |<ul><li>[x] </li></ul>| [Parachain Page](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/parachain) | See [Current Auction/Parachain/Crowdloan Pages Feedback](#parachain-page-feedback) |
| 3. | Current-Crowdloan page |<ul><li>[x] </li></ul>| [Crowdloan Page](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/crowdloan) | See [Current Auction/Parachain/Crowdloan Pages Feedback](#crowdloan-page-feedback) |
| 4. | Others pages |<ul><li>[x] </li></ul>| [About Page](https://github.com/CrommVardek/polk-auction-ui/blob/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/about/AboutPage.tsx) | About page with basic information and FAQ section is present, although there is only 1 entry. |
| 4. | Header |<ul><li>[x] </li></ul>| [Header Component](https://github.com/CrommVardek/polk-auction-ui/tree/3286f5de70e87bd14e86fe43999897059d65aebb/src/components/header) | Header indicates active network (Kusama or Polkadot) and contains link to about page |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

In general, I was initially confused why the team uses the following IPs instead of 127.0.0.1 (localhost) in the docker configs located in your [polk-auction-core repo](https://github.com/CrommVardek/polk-auction-core):
- 127.0.33.1 for the DB container
- 127.0.0.10 for the sidecar container

This was their [explanation](https://github.com/w3f/Grant-Milestone-Delivery/pull/358#issuecomment-1066133063) on why they decided to do it that way:

> Since some ports (8080 and 30333) are used by multiple containers, I wanted different IP (because I prefer not to change default ports). But I guess I could use the same IP for each node and its sidecar. Same for the DB and polkauction-core. I'll probably change that. I'm not too familiar with network, infrastructure and operational best practice, in my mind it made sense to have different IP (because different services).

### Test Feedback

Frontent tests succeed:

```bash
$ yarn test
yarn run v1.22.17
$ jest
 PASS  test/utils/DisplayUtils.test.ts
  ✓ Number should be formatted as expected with commas (1 ms)
  ✓ Number with decimals should be formatted as expected with commas

 PASS  test/components/header/RelayChainsTab.test.tsx
  <RelayChainsTab />
    ✓ renders a button for each relaychain (44 ms)

 PASS  test/components/crowdloan/CrowdloanTable.test.tsx
  <CrowdloanTable />
    ✓ renders a table (5 ms)
    ✓ renders X <tr>, where X is the number of funds + 1 (2 ms)

 PASS  test/components/crowdloan/CrowdloanPage.test.tsx
  <CrowdloanPage />
    ✓ renders one spinner if loading crowdloan (132 ms)
    ✓ renders two tables (23 ms)

 PASS  test/components/parachain/ParachainsPage.test.tsx
  <ParachainsPage />
    ✓ renders one spinner if loading data (129 ms)
    ✓ renders one tables (8 ms)
    ✓ renders as much website link as there are parachain URL from data (23 ms)
    ✓ renders X <tr>, where X is the number of parachains with lifecycle Parachain + 1 (16 ms)

 PASS  test/App.test.tsx
  ✓ app name is in App (35 ms)
  <App />
    ✓ renders one footer element (33 ms)
    ✓ renders one header element (9 ms)

Test Suites: 6 passed, 6 total
Tests:       14 passed, 14 total
Snapshots:   0 total
Time:        3.768 s
Ran all test suites.
Done in 4.38s.
```

Server-side tests succeed:

```bash
polk-auction-core$ mvn test
(...)
[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.324 s - in polkauction.core.service.ParachainServiceTest
[INFO] Running polkauction.core.model.RuntimeSpecificationPropertiesTest
[INFO] Tests run: 2, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.029 s - in polkauction.core.model.RuntimeSpecificationPropertiesTest
[INFO] Running polkauction.core.model.mapper.SidecarDtoMapperTest
[INFO] Tests run: 12, Failures: 0, Errors: 0, Skipped: 0, Time elapsed: 0.015 s - in polkauction.core.model.mapper.SidecarDtoMapperTest
[INFO] 
[INFO] Results:
[INFO] 
[INFO] Tests run: 29, Failures: 0, Errors: 0, Skipped: 0
[INFO] 
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time:  12.940 s
[INFO] Finished at: 2022-03-22T11:35:32+01:00
[INFO] ------------------------------------------------------------------------
```

### Current Auction/Parachain/Crowdloan Pages Feedback

All 3 pages work for both networks (Kusama, Polkadot) and display useful data:

- Current Auction
- Parachain
- Crowdloan Pages Feedback

Note: Since I was using an external machine for the evaluation and relied on portforwarding to my local machine, I had to change the [`env.prod` file](https://github.com/CrommVardek/polk-auction-ui/blob/eef0c3b17662ebd80c86548e3f3b815744d1f8b5/.env.prod) in the polk-auction-ui, otherwise the requests would fail.