# Evaluation

- **Status:** in progress
- **Application Document:** [w3f/Grants-Program#2437](https://github.com/w3f/Grants-Program/pull/2437)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [license file](https://github.com/Zondax/polkadot-web-migration?tab=Apache-2.0-1-ov-file#readme) | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [Readme](https://github.com/Zondax/polkadot-web-migration?tab=readme-ov-file)| solid documentation | 
| 0c.  | Tests & Testing guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/Zondax/polkadot-web-migration?tab=readme-ov-file), [Tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [e2e](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [Tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__)   | | 
| 0d.  | Docker | <ul><li>[ ] </li></ul> | [Docker](https://github.com/Zondax/polkadot-web-migration/blob/main/dockerfile) | builds| 
| 0e.  | Article | <ul><li>[x] </li></ul> | [Article](https://zondax.ch/blog/the-polkadot-ledger-migration-assistant) | ok | 
| 1 | PoC code |<ul><li>[ ] </li></ul> | [General Structure](https://github.com/Zondax/polkadot-web-migration) |  | 
| 2 | Code |<ul><li>[ ] </li></ul> | [Connect to Ledger](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/lib/ledger/ledgerService.ts#L108) |  |
| 2 | Code |<ul><li>[ ] </li></ul> | [Scan and View Accounts](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L493) |  |
| 2 | Code |<ul><li>[ ] </li></ul> | [Balance Overview](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L563) |  |
| 2 | Code |<ul><li>[ ] </li></ul> | [Transfer and Account Management](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L746) |  |



## General Notes



## Feedback


## Docker


## Tests
all tests passing

```
 Test Files  11 passed (11)
      Tests  136 passed | 4 skipped (140)
   Start at  11:27:43
   Duration  6.27s (transform 780ms, setup 1.56s, collect 13.20s, tests 516ms, environment 7.18s, prepare 1.49s)
```

e2e test: 10 passed (19.8s)