# Evaluation

* **Status:** Accepted
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/yieldscan_phase_2.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                | Accepted               | Link                                                                                                                                                                                                                                                                                                                                                                                 |                                                                                                                                                               |
|--------|----------------------------|------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                    | <ul><li>[x] </li></ul> | <ul><li>[yieldscan-frontend](https://github.com/yieldscan/yieldscan-frontend/blob/master/LICENSE.md)</li><li>[yieldscan-backend-crawler](https://github.com/yieldscan/yieldscan-backend-crawler/blob/master/LICENSE.md)</li><li>[yieldscan-backend-api](https://github.com/yieldscan/yieldscan-backend-api/blob/master/LICENSE.md)</li></ul>                                         |                                                                                                                                                               |
|    0b. | Documentation              | <ul><li>[x] </li></ul> | <ul><li>[yieldscan-frontend documentation](https://github.com/yieldscan/yieldscan-frontend/tree/develop#codebase-overview)</li><li>[yieldscan-backend-crawler documentation](https://github.com/yieldscan/yieldscan-backend-crawler#codebase-overview)</li><li>[yieldscan-backend-api documentation](https://github.com/yieldscan/yieldscan-backend-api#codebase-overview)</li></ul> | Documentation regarding the key part of each repo could be expanded, e.g. for the crawler repo, describing in more detail what the crawlers are, what they do |
|    0c. | Testing Guide              | <ul><li>[x] </li></ul> | https://github.com/yieldscan/yieldscan-frontend/tree/develop#tests                                                                                                                                                                                                                                                                                                                   | Some helper commands that check the state of the db/sync would come in handy. Update: helpers added                                                           |
|    0d. | Article/Tutorial           | <ul><li>[x] </li></ul> | <ul><li>[YieldScan Help Center](https://intercom.help/yieldscan)</li></ul>                                                                                                                                                                                                                                                                                                           | Tutorial videos are helpful                                                                                                                                   |
|     1. | Controller Account Support | <ul><li>[x] </li></ul> | https://yieldscan.app/                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                               |
|     2. | Ledger Wallet Support      | <ul><li>[x] </li></ul> | https://yieldscan.app/                                                                                                                                                                                                                                                                                                                                                               |                                                                                                                                                               |
|     3. | Docker                     | <ul><li>[x] </li></ul> | <ul><li>[Docker file](https://hub.docker.com/r/sahilnanda/yieldscan-frontend)</li><li>[Docker command](https://github.com/yieldscan/yieldscan-frontend/tree/develop#docker)</li></ul>                                                                                                                                                                                                |                                                                                                                                                               |

## General notes

A lot of code duplication between the crawler and the api repos, probably everything under `src/models` & `src/interfaces` & large parts of other sub-directories. 
Update: addressed, was split out into submodules. 

### Frontend
Error, 1:

Cannot run the frontend with `yarn dev`. Getting the following errors:
```
SyntaxError: Unexpected token u in JSON at position 0
    at JSON.parse (<anonymous>)
    at eval (webpack-internal:///./yieldscan.config.js:23:21)
    at Module../yieldscan.config.js (/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/server/pages/index.js:72:1)
    at __webpack_require__ (/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/server/webpack-runtime.js:33:43)
    at eval (webpack-internal:///./lib/store.js:40:74)
    at Module../lib/store.js (/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/server/pages/index.js:52:1)
    at __webpack_require__ (/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/server/webpack-runtime.js:33:43)
    at eval (webpack-internal:///./components/common/layouts/base.js:9:68)
    at Module../components/common/layouts/base.js (/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/server/pages/index.js:22:1)
    at __webpack_require__ (/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/server/webpack-runtime.js:33:43)
<w> [webpack.cache.PackFileCacheStrategy] Caching failed for pack: Error: ENOENT: no such file or directory, rename '/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/cache/webpack/client-development/1.pack_' -> '/Users/marcin/dev/yieldscan/yieldscan-frontend/.next/cache/webpack/client-development/1.pack'
false
```

I believe I followed all the steps from the README's tutorial.
Update: fixed

Warning, 2:
```
Warning: Failed prop type: The prop `projectId` is marked as required in `m`, but its value is `undefined`.
    at m (/Users/marcin/dev/yieldscan/yieldscan-frontend/node_modules/@metomic/react/lib/index.cjs.js:1:3257)
    at YieldScanApp (webpack-internal:///./pages/_app.js:281:3)
    at AppContainer (/Users/marcin/dev/yieldscan/yieldscan-frontend/node_modules/next/dist/server/render.js:293:29)
```

## Controller Account Support

Derived accounts don't show up in the list in UI when selecting a controller.
