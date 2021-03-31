# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/182 
- **Milestone:** 1
- **Kusama Identity:** None
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | Gluon Website and Web Portal Framework | <ul><li>[x] </li></ul> | website: http://www.gluonwallet.com website <br>website repo: [github](https://github.com/tearust/gluon-website) | The website works OK. <br/>I have some subjective feedback about the website aesthetics: <ul><li>Some of the images could be scaled down a bit so that the font size is closer to the text font-size (e.g. the wallet comparison table)</li><li>The image that instructs how to use blog links in the document tab is more confusing than helpful</li><li>in the mobile view, the line-height of usual text is so low, that the letters almost touch. A css `line-height: normal` would be more comfortable.</li></ul> The readme is blank. I think it should at least explain that the website can be built and started with `docker-compose up` and will be accessible at `127.0.0.1:91`. |
| 1 | Milestone1 feature list and test instruction | <ul><li>[x] </li></ul> | Instructions: [github](https://github.com/tearust/gluon-app/blob/milestone1/readme.md)  <br>Video demo: [youtube video](https://www.youtube.com/watch?v=wV4Q1-wTvFE) | The walkthrough video is concise and clear. <br/>There is no list of features anywhere but a step by step walkthrough that covers all features of this milestone. |
| 2 | Test docker-compose | <ul><li>[x] </li></ul> | [docker&#x2011;compose.yml](https://github.com/tearust/gluon-app/blob/milestone1/docker-compose.yml)<br/>Instructions: [readme](https://github.com/tearust/gluon-app/blob/milestone1/readme.md)| `docker-compose up` from `gluon-app/` will start the webapp along with a temporary local gluon-layer1 substrate dev node.<br/><br/>In order to run the android app on my physical device, I do <br/>`cd gluon-app/mobile` and run <br/>`npm start` and <br/>`npm run android` after pointing JAVA_HOME to java&#x2011;11&#x2011;openjdk and setting my machine's LAN ip in `layer1/index.js`<br/><br/>Pairing my phone with the webwallet as well as unparing works fine in this local setup. |
| 3 | Source code on GitHub | <ul><li>[x] </li></ul> | gluon-app: [github](https://github.com/tearust/gluon-app/tree/milestone1) <br>gluon-pallet: [github](https://github.com/tearust/gluon-pallet/tree/milestone-1) <br>tea-layer1: [github](https://github.com/tearust/tea-layer1/tree/milestone-1) | The sources are there. All repos have an open-source license.|

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## Tasks 
| ID | Module name | Description | Evaluation Notes |
| ------ | ----------- | ---- | ----------- |
| 0.1 | Add faucet page | users can add free test tokens to accounts to start testing | works | 
| 1.1 | User portal web page | Search user public profiles by users' Polkadot address. All information is open public from the blockchain. Users can see pairing mobile app id. This is the feature in milestone 1 | I haven't seen any UI for searching by polkatod addresses. I am not sure what a profile encompasses. | 
| 1.2 | Pairing web UI | This is the web UI to start mobile app pairing | works | 
| 2.0 | Mobile app framework | Gluon mobile app framework. We will add features one by one | works | 
| 2.1 | Pairing mobile UI, scan QR code to start | After the mobile app is installed, scan web pairing page to start pairing | works | 
| 2.2 | Mobile user profile page | After pairing, show user profile. This is the same as the WebUI user profile content | I am not sure what the user profile page should encompass. On mobile, after pairing, I can see the mobile account's address, seedphrase and balance and the pair address. | 
| 3.0 | Gluon substrate pallet: Pairing/Unpairing API | Add mobile app pub id to existing Gluon account. Pair the mobile to this user | pallet functions: <ul><li>send_registration_application and </li><li> unpair_app_browser </li></ul>|
| 3.1 | Gluon substrate pallet: Search API | Search user public information | Maybe I am misunderstanding something but I did not find this API | 

## General Notes

### Minor requests
- The LICENSE files in gluon-website, gluon-app, gluon-pallet are missing copyright year and owner (line 189 each). Fill it in. 
- Rename any "p**e**llet" typo into "p**a**llet" in the grant application. 
    
### Other notes 
- It seems to me, that you can remove the template pallet in gluon-layer1. 
- There is a lot of code duplication in `gluon-app/mobile/layer1/[gluon, rpc, ...].js` and `gluon-app/webapp/src/tea/[gluon, rpc, ...].js`.  
- Prefer ES native functions over lodash. E.g. in `gluon.js`, line 41 ff I can see no reason for using lodash: 
    ```
    ERRORS = _.map(ERRORS.split(','), (v)=>{
      return _.trim(v);
    })
    ```
    This can be done in ECMAScript:
    ```
    ERRORS = ERRORS.split(',').map(v => v.trim())
    ```
    which is even faster ([e.g. trim() benchmark](https://www.measurethat.net/Benchmarks/Show/5328/0/trim-loadsh-vs-native-trim)).

### Info
When I was building gluon-layer1, it failed with most recent nightly (2021-03-30) version of rust. \
I found out nightly-2020-10-05 to be working. 




