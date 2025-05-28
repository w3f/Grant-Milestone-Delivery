# Evaluation

- **Status:** accepted
- **Application Document:** [w3f/Grants-Program#2437](https://github.com/w3f/Grants-Program/pull/2437)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by PieWol

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | [license file](https://github.com/Zondax/polkadot-web-migration?tab=Apache-2.0-1-ov-file#readme) | Apache 2.0 | 
| 0b.  | Documentation |<ul><li>[x] </li></ul> | [Readme](https://github.com/Zondax/polkadot-web-migration?tab=readme-ov-file)| solid documentation | 
| 0c.  | Tests & Testing guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/Zondax/polkadot-web-migration?tab=readme-ov-file), [Tests](https://github.com/Zondax/polkadot-web-migration/tree/main/state/__tests__), [e2e](https://github.com/Zondax/polkadot-web-migration/tree/main/e2e), [Tests](https://github.com/Zondax/polkadot-web-migration/tree/main/lib/__tests__)   | | 
| 0d.  | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/Zondax/polkadot-web-migration/blob/main/dockerfile) | builds and runs | 
| 0e.  | Article | <ul><li>[x] </li></ul> | [Article](https://zondax.ch/blog/the-polkadot-ledger-migration-assistant) | ok | 
| 1 | PoC code |<ul><li>[x] </li></ul> | [General Structure](https://github.com/Zondax/polkadot-web-migration) | looks good  | 
| 2 | Code |<ul><li>[x] </li></ul> | [Connect to Ledger](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/lib/ledger/ledgerService.ts#L108) | works |
| 2 | Code |<ul><li>[x] </li></ul> | [Scan and View Accounts](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L493) | works |
| 2 | Code |<ul><li>[x] </li></ul> | [Balance Overview](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L563) | works |
| 2 | Code |<ul><li>[x] </li></ul> | [Transfer and Account Management](https://github.com/Zondax/polkadot-web-migration/blob/dd6538974904f7825f6c009acbffb106e160e839/state/ledger.ts#L746) | ok  |



## General Notes
Everything was smooth. Migration app available in LedgerLive also fits on the old gen of nano s. 
Thanks for the demo call to show off all current features.

I still think it would be nice to include an option to display all addresses that have been checked during the process. This would allow the user to better understand what's going on. E.g. a custom derivation path would result in the account not being found even though the user might expect it. 

This way a user can easily check for such a discrepancy. Probably reduces the support workload in the future.


## Docker

builds and runs

````
> polkadot-migration@0.0.1 start /app
> next start

   ▲ Next.js 15.2.4
   - Local:        http://localhost:3000
   - Network:      http://172.17.0.2:3000

 ✓ Starting...
 ✓ Ready in 637ms
````


## Tests
all tests passing

```
 Test Files  11 passed (11)
      Tests  136 passed | 4 skipped (140)
   Start at  11:27:43
   Duration  6.27s (transform 780ms, setup 1.56s, collect 13.20s, tests 516ms, environment 7.18s, prepare 1.49s)
```

e2e test: 10 passed (19.8s)