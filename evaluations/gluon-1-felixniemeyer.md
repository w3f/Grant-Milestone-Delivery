# Evaluation

- **Status:** In Progress/Accepted/Rejected
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/182 
- **Milestone:** 1
- **Kusama Identity:** None
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | Gluon Website and Web Portal Framework | <ul><li>[x] </li></ul> | website: http://www.gluonwallet.com website <br>website repo: [github](https://github.com/tearust/gluon-website) | Website looks ok. Some subjective feedback about the appearence: <ul><li>first picture looks trashy and the big bitcoins don't match the context as we're in the polkadot ecosystem.</li><li>Some of the images could be scaled down a bit so that the font size is closer to the text font-size (e.g. the wallet comparison table)</li><li>The image that instructs how to use blog links in the document tab is more confusing than helpful</li></ul> The readme is blank. Building from the repo (by running `./build_docker.sh`) fails on my system for two reasons: <br/>`Error: Cannot find module '@vue/cli-plugin-babel'` and <br/>`Building wheel for cryptography (PEP 517): finished with status 'error'`|
| 1 | Milestone1 feature list and test instruction | <ul><li>[x] </li></ul> | Instructions: [github](https://github.com/tearust/gluon-app/blob/milestone1/readme.md)  <br>Video demo: [youtube video](https://www.youtube.com/watch?v=wV4Q1-wTvFE) | The walkthrough video is concise and clear. <br/>There is no list of features anywhere but a step by step walkthrough that covers all current features. |
| 2 | Test docker-compose | <ul><li>[ ] </li></ul> | gluon-app [docker-compose.yml](https://github.com/tearust/gluon-app/blob/main/docker-compose.yml)<br/>[Instructions](https://github.com/tearust/gluon-app/blob/main/readme.md)| Starting `.../gluon-app/webapp` will make gluon-wallet available on localhost:3000. It will connect to a remote gluon-layer1. When executing `docker-compose up -d` from `.../gluon-app` will be started along with a local gluon-layer1. <br/>I can not test building the mobile app because it only works on iOS devices or emulators at the moment. |
| 3 | Source code on GitHub | <ul><li>[ ] </li></ul> | gluon-app: [github](https://github.com/tearust/gluon-app/tree/milestone1) <br>gluon-pellet: [github](https://github.com/tearust/gluon-pallet/tree/milestone-1) <br>tea-layer1: [github](https://github.com/tearust/tea-layer1/tree/milestone-1) | sources are there |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

| Task ID | Module name | Description | Evaluation Notes |
| ------ | ----------- | ---- | ----------- |
| 0.1 | Add faucet page | users can add free test tokens to accounts to start testing | works | 
| 1.1 | User portal web page | Search user public profiles by users' Polkadot address. All information is open public from the blockchain. Users can see pairing mobile app id. This is the feature in milestone 1 | can confirm partially* | 
| 1.2 | Pairing web UI | This is the web UI to start mobile app pairing | * | 
| 2.0 | Mobile app framework | Gluon mobile app framework. We will add features one by one | * | 
| 2.1 | Pairing mobile UI, scan QR code to start | After the mobile app is installed, scan web pairing page to start pairing | * | 
| 2.2 | Mobile user profile page | After pairing, show user profile. This is the same as the WebUI user profile content | * | 
| 3.0 | Gluon substrate pellet: Pairing/Unpairing API | Add mobile app pub id to existing Gluon account. Pair the mobile to this user | | 
| 3.1 | Gluon substrate pellet: Search API | Search user public information | | 

*My ability to test is restricted due to lack of iOS hardware.

## General Notes

The LICENSE files in gluon-website, gluon-app, gluon-pallet are missing copyright year and owner (line 189 each). 

The readme files could use some love in general.