
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/LightSpell-proposal.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> |[MIT XCM API](https://github.com/paraspell/xcm-api/blob/main/LICENSE), [MIT DOCS](https://github.com/paraspell/docs/blob/main/LICENSE)| | 
| 0b.  | Documentation | <ul><li>[x] </li></ul> |[XCM API Readme.md](https://github.com/paraspell/xcm-api/blob/main/README.md), [Official LightSpell documentation](https://paraspell.github.io/docs/api/g-started.html)|  | 
| 0c.  | Testing guide | <ul><li>[x] </li></ul> |[Readme.md testing guide](https://github.com/paraspell/xcm-api/blob/main/README.md#tests), [XCM API Playground test tool PR](https://github.com/paraspell/xcm-api/pull/6), [XCM API Playground test tool commit](https://github.com/paraspell/xcm-api/commit/99fc787bc505dfdb82afe23f252498b30dc8d16d), [Core unit tests and Github CI Workflow PR](https://github.com/paraspell/xcm-api/pull/8), [Commit adding core unit tests an Github CI Workflow](https://github.com/paraspell/xcm-api/commit/4205c8339990f7eea343098bac28a8da8bf05171)|  | 
| 0d.  | Medium article about the development of LightSpell| <ul><li>[x] </li></ul>| [Medium article link](https://medium.com/@dudo50/the-first-xcm-api-in-the-polkadot-ecosystem-meant-to-boost-interoperability-integration-db59c75d0c9f) |  | 
| 1.a | Integrate API for XCM functionality | <ul><li>[x] </li></ul>|[PR adding XCM Functionality to API](https://github.com/paraspell/xcm-api/pull/2), [Commit adding XCM Functionality to API](https://github.com/paraspell/xcm-api/commit/c52ae0e0c8d853ac8f38909355d387e81fa91021) | | 
| 1.b | Integrate API for Asset functionality | <ul><li>[x] </li></ul>|[PR adding Asset Functionality to API](https://github.com/paraspell/xcm-api/pull/3), [Commit adding Asset Functionality to API](https://github.com/paraspell/xcm-api/commit/929fdbf49465beef798650424ea5c3fbf8795865)|  | 
| 1.c | Integrate API for XCM Pallets functionality | <ul><li>[x] </li></ul>|[PR adding XCM Pallets Functionality to API](https://github.com/paraspell/xcm-api/pull/5), [Commit adding XCM Pallets Functionality to API](https://github.com/paraspell/xcm-api/commit/8795bcd561469f26718cbbd82eacef81be0218a5)|  | 
| 1.d | Integrate API for HRMP functionality | <ul><li>[x] </li></ul>|[PR adding HRMP Functionality to API](https://github.com/paraspell/xcm-api/pull/4), [Commit adding HRMP Functionality to API](https://github.com/paraspell/xcm-api/commit/6a0553691cae4d994d250aa0c077a44e747e1101)|  | 
| 2. | Integrate token authentification | <ul><li>[x] </li></ul>|[PR adding rate limiting (token authentication)](https://github.com/paraspell/xcm-api/pull/13), [Commit adding rate limiting (token authentication)](https://github.com/paraspell/xcm-api/commit/22b71849114b2b634bf670be2f16ad77e71eec5c)|  | 
| 3.a | Add core Integration tests | <ul><li>[x] </li></ul>|[PR adding core Integration tests](https://github.com/paraspell/xcm-api/pull/8), [Commit adding core Integration tests](https://github.com/paraspell/xcm-api/commit/4205c8339990f7eea343098bac28a8da8bf05171) |  | 
| 3.b | Add core Endpoint (e2e) tests | <ul><li>[x] </li></ul>| [PR adding core end 2 end tests](https://github.com/paraspell/xcm-api/pull/10), [Commit adding core end 2 end tests](https://github.com/paraspell/xcm-api/commit/0b97d4bd5cb596110627266e0bba201686c4c926)| | 
| 4. | Integrate LightSpell into ParaSpell docs | <ul><li>[x] </li></ul>| [Commit redesigning Docs and adding comprehensive XCM API guides](https://github.com/paraspell/docs/commit/46ed983d55c3ff28405f26d0eae6ac47c3e3f41c) |  | 

## Evaluation V1

### Documentation

The documentation is fine.

### Unit & Integration Test

All tests passed, but `auth` could have better coverage.

```
---------------------------|---------|----------|---------|---------|-------------------
File                       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s 
---------------------------|---------|----------|---------|---------|-------------------
All files                  |   89.78 |     87.8 |   88.67 |    88.8 |                   
 src                       |   83.33 |       75 |      80 |   80.39 |                   
  app.controller.ts        |     100 |      100 |     100 |     100 |                   
  app.module.ts            |   88.88 |        0 |      50 |   88.23 | 28-29             
  main.ts                  |       0 |      100 |       0 |       0 | 1-11              
  utils.ts                 |     100 |      100 |     100 |     100 |                   
 src/assets                |     100 |      100 |     100 |     100 |                   
  assets.controller.ts     |     100 |      100 |     100 |     100 |                   
  assets.module.ts         |     100 |      100 |     100 |     100 |                   
  assets.service.ts        |     100 |      100 |     100 |     100 |                   
 src/assets/dto            |     100 |      100 |     100 |     100 |                   
  SymbolDto.ts             |     100 |      100 |     100 |     100 |                   
 src/auth                  |   56.81 |        0 |      50 |    52.5 |                   
  auth.controller.ts       |   85.71 |      100 |      50 |   83.33 | 11                
  auth.guard.ts            |   35.71 |        0 |      50 |   30.76 | 14-26             
  auth.module.ts           |     100 |      100 |     100 |     100 |                   
  auth.service.ts          |      40 |        0 |   33.33 |   35.71 | 14-38             
 src/channels              |     100 |      100 |     100 |     100 |                   
  channels.controller.ts   |     100 |      100 |     100 |     100 |                   
  channels.module.ts       |     100 |      100 |     100 |     100 |                   
  channels.service.ts      |     100 |      100 |     100 |     100 |                   
 src/channels/dto          |     100 |      100 |     100 |     100 |                   
  close-channel.dto.ts     |     100 |      100 |     100 |     100 |                   
  open-channel.dto.ts      |     100 |      100 |     100 |     100 |                   
 src/pallets               |     100 |      100 |     100 |     100 |                   
  pallets.controller.ts    |     100 |      100 |     100 |     100 |                   
  pallets.module.ts        |     100 |      100 |     100 |     100 |                   
  pallets.service.ts       |     100 |      100 |     100 |     100 |                   
 src/x-transfer            |     100 |      100 |     100 |     100 |                   
  x-transfer.controller.ts |     100 |      100 |     100 |     100 |                   
  x-transfer.module.ts     |     100 |      100 |     100 |     100 |                   
  x-transfer.service.ts    |     100 |      100 |     100 |     100 |                   
 src/x-transfer/dto        |     100 |      100 |     100 |     100 |                   
  XTransferDto.ts          |     100 |      100 |     100 |     100 |                   
---------------------------|---------|----------|---------|---------|-------------------

Test Suites: 11 passed, 11 total
Tests:       78 passed, 78 total
Snapshots:   0 total
Time:        13.31 s
Ran all test suites.
```

### e2e Test

All tests passed.

```
Test Suites: 1 passed, 1 total
Tests:       631 passed, 631 total
Snapshots:   0 total
Time:        25.569 s, estimated 26 s
Ran all test suites.
```

### Manual Test

I tested using the API playground, and the requests are working. The authentication is working fine too. I was able receive the response below.

```
{
    "statusCode": 429,
    "message": "ThrottlerException: Too Many Requests"
}
```

I could generate the API Key, and using it to increase the request limit.
