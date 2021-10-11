# Evaluation

- **Status:** In progress
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/SubGame_Network_m2.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/SubGame-Network/SubGameModule/blob/master/LICENSE) | Correct License  |
| 0b. | Documentation | <ul><li>[ ] </li></ul> |  |  The documentation seems to be missing. They currently simply link to the application  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets) | Real test cases and no unit tests, but according to contract  |
| 1a. | pallet-lease | <ul><li>[x] </li></ul> | [pallet-lease](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/lease) | **7.10.21:** unit test fail, see error below **11.10.21:** Unit test compile now  |
| 1b. | pallet-stake-nft | <ul><li>[x] </li></ul> | [pallet-stake-nft](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/stake-nft) |   |
| 1c. | pallet-nft | <ul><li>[x] </li></ul> | [pallet-nft](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/nft) | Simply reused https://github.com/danforbes/pallet-nft, would be nice if they mention this  |
| 1d. | pallet-gameA | <ul><li>[ ] </li></ul> | [pallet-demogame](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/demogame) |  No explanation about the purpose of this module. |
| 2a. | Front End | <ul><li>[x] </li></ul> | [Front End](https://github.com/SubGame-Network/SubGameModule/tree/master/frontend) | **7.10.21:** See error below **11.10.21:** Front-end compiles now |
| 2b. | UI mock-ups | <ul><li>[x] </li></ul> | [Mockup](https://www.figma.com/file/7ZUQSuAfNrrmq5s3LSIFik/SubGame?node-id=3649%3A62086) | **7.10.21:** File not found, **11.10.21:** Designs are public   |
| 2c. | Tutorial | <ul><li>[ ] </li></ul> | [readme](https://github.com/SubGame-Network/SubGameModule/blob/master/README.md) | Image with lorem ipsum  |
| 2d. | Docker | <ul><li>[ ] </li></ul> | [docker compose](https://github.com/SubGame-Network/SubGameModule/blob/master/docker-compose.yml) | **7.10.21:**  Starts, but doesn't work, see errors below **11.10.21:** Still doesn't work, see below |

## General Notes

General:
- Pallets could be better tested and documented inline

**Docker error, 11.10.21**
<pre><font color="#2AA1B3">subgame-backend     |</font> go: downloading github.com/go-stack/stack v1.8.0
<font color="#2AA1B3">subgame-backend     |</font> go: downloading github.com/jmespath/go-jmespath v0.4.0
<font color="#26A269">subgame-frontend    |</font> npm WARN acorn-jsx@5.3.2 requires a peer of acorn@^6.0.0 || ^7.0.0 || ^8.0.0 but none is installed. You must install peer dependencies yourself.
<font color="#26A269">subgame-frontend    |</font> npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/watchpack-chokidar2/node_modules/fsevents):
<font color="#26A269">subgame-frontend    |</font> npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {&quot;os&quot;:&quot;darwin&quot;,&quot;arch&quot;:&quot;any&quot;} (current: {&quot;os&quot;:&quot;linux&quot;,&quot;arch&quot;:&quot;x64&quot;})
<font color="#26A269">subgame-frontend    |</font> npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.3.2 (node_modules/fsevents):
<font color="#26A269">subgame-frontend    |</font> npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.3.2: wanted {&quot;os&quot;:&quot;darwin&quot;,&quot;arch&quot;:&quot;any&quot;} (current: {&quot;os&quot;:&quot;linux&quot;,&quot;arch&quot;:&quot;x64&quot;})
<font color="#26A269">subgame-frontend    |</font> npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules/webpack-dev-server/node_modules/fsevents):
<font color="#26A269">subgame-frontend    |</font> npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {&quot;os&quot;:&quot;darwin&quot;,&quot;arch&quot;:&quot;any&quot;} (current: {&quot;os&quot;:&quot;linux&quot;,&quot;arch&quot;:&quot;x64&quot;})
<font color="#26A269">subgame-frontend    |</font> 
<font color="#26A269">subgame-frontend    |</font> removed 30 packages and audited 2562 packages in 11.606s
<font color="#26A269">subgame-frontend    |</font> 
<font color="#26A269">subgame-frontend    |</font> 240 packages are looking for funding
<font color="#26A269">subgame-frontend    |</font>   run `npm fund` for details
<font color="#26A269">subgame-frontend    |</font> 
<font color="#26A269">subgame-frontend    |</font> found 24 vulnerabilities (8 moderate, 15 high, 1 critical)
<font color="#26A269">subgame-frontend    |</font>   run `npm audit fix` to fix them, or `npm audit` for details
<font color="#26A269">subgame-frontend    |</font> frontend install finish.
<font color="#26A269">subgame-frontend    |</font> cp: cannot stat &apos;src/config/config.prod.json&apos;: No such file or directory
<font color="#26A269">subgame-frontend exited with code 1</font>
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:09 read config
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:09 read config success
<font color="#A2734C">subgame-db          |</font> 2021-10-11T09:04:09.543057Z 3 [Note] Aborted connection 3 to db: &apos;SubGameModuleService&apos; user: &apos;root&apos; host: &apos;172.27.0.5&apos; (Got an error reading communication packets)
<font color="#A2734C">subgame-db          |</font> 2021-10-11T09:04:09.543092Z 2 [Note] Aborted connection 2 to db: &apos;unconnected&apos; user: &apos;root&apos; host: &apos;172.27.0.5&apos; (Got an error reading communication packets)
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:10 success
<font color="#A2734C">subgame-db          |</font> 2021-10-11T09:04:10.396676Z 4 [Note] Aborted connection 4 to db: &apos;SubGameModuleService&apos; user: &apos;root&apos; host: &apos;172.27.0.5&apos; (Got an error reading communication packets)
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:10 read config
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:10 read config success
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:10 connect db
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:10 connect db success
<font color="#2AA1B3">subgame-backend     |</font> 2021/10/11 17:04:15 Connecting to wss://mainnet.subgame.org...
<font color="#2AA1B3">subgame-backend     |</font> === SubGame Event Fix Start ===
<font color="#2AA1B3">subgame-backend     |</font> === 監聽區塊落後 Start ===
<font color="#2AA1B3">subgame-backend     |</font> === 監聽提領交易上鏈逾時 Start ===
<font color="#2AA1B3">subgame-backend     |</font> === SubGame Event Listen Start ===
<font color="#A347BA">subgame-nginx       |</font> 2021/10/11 09:05:24 [error] 7#7: *1 directory index of &quot;/var/www/html/microService/&quot; is forbidden, client: 172.27.0.1, server: localhost, request: &quot;GET / HTTP/1.1&quot;, host: &quot;localhost&quot;
<font color="#A347BA">subgame-nginx       |</font> 172.27.0.1 - - [11/Oct/2021:09:05:24 +0000] &quot;GET / HTTP/1.1&quot; 403 555 &quot;-&quot; &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36&quot; &quot;-&quot;
<font color="#A347BA">subgame-nginx       |</font> 2021/10/11 09:05:38 [error] 7#7: *1 directory index of &quot;/var/www/html/microService/&quot; is forbidden, client: 172.27.0.1, server: localhost, request: &quot;GET / HTTP/1.1&quot;, host: &quot;localhost&quot;
<font color="#A347BA">subgame-nginx       |</font> 172.27.0.1 - - [11/Oct/2021:09:05:38 +0000] &quot;GET / HTTP/1.1&quot; 403 555 &quot;-&quot; &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36&quot; &quot;-&quot;
</pre>

### Previous comments, 07.10.21

**Lease unit tests error**

<pre>   <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/.cargo/registry/src/github.com-1ecc6299db9ec823/pallet-timestamp-3.0.0/src/lib.rs:290:5
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>290</b></font> <font color="#2A7BDE"><b>| </b></font>                debug::error!(
    <font color="#2A7BDE"><b>| </b></font>                <font color="#F66151"><b>^^^^^</b></font> <font color="#F66151"><b>use of undeclared crate or module `debug`</b></font>

<font color="#F66151"><b>error</b></font><b>: aborting due to previous error</b>

<b>For more information about this error, try `rustc --explain E0433`.</b>
<font color="#C01C28"><b>error</b></font><b>:</b> could not compile `pallet-timestamp`

To learn more, run the command again with --verbose.
<font color="#A2734C"><b>warning</b></font><b>:</b> build failed, waiting for other jobs to finish...
<font color="#C01C28"><b>error</b></font><b>:</b> build failed
</pre>

**Front-end error, 07.10.21**

<pre><font color="#12488B"><b>SubGameModule/frontend</b></font>$ yarn start
<b>yarn run v1.22.5</b>
<font color="#AAAAAA">$ react-app-rewired start</font>
/bin/sh: 1: react-app-rewired: not found
<font color="#C01C28">error</font> Command failed with exit code 127.
<font color="#12488B">info</font> Visit <b>https://yarnpkg.com/en/docs/cli/run</b> for documentation about this command.
</pre>

**Docker error, 07.10.21**
<pre><font color="#A347BA">subgame-nginx       |</font> 2021/10/07 07:48:09 [error] 7#7: *1 directory index of &quot;/var/www/html/microService/&quot; is forbidden, client: 172.27.32.1, server: localhost, request: &quot;GET / HTTP/1.1&quot;, host: &quot;localhost&quot;
<font color="#A347BA">subgame-nginx       |</font> 172.27.32.1 - - [07/Oct/2021:07:48:09 +0000] &quot;GET / HTTP/1.1&quot; 403 555 &quot;-&quot; &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36&quot; &quot;-&quot;
<font color="#A347BA">subgame-nginx       |</font> 2021/10/07 07:48:09 [error] 7#7: *1 open() &quot;/var/www/html/microService/favicon.ico&quot; failed (2: No such file or directory), client: 172.27.32.1, server: localhost, request: &quot;GET /favicon.ico HTTP/1.1&quot;, host: &quot;localhost&quot;, referrer: &quot;http://localhost/&quot;
<font color="#A347BA">subgame-nginx       |</font> 172.27.32.1 - - [07/Oct/2021:07:48:09 +0000] &quot;GET /favicon.ico HTTP/1.1&quot; 404 555 &quot;http://localhost/&quot; &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36&quot; &quot;-&quot;
<font color="#A347BA">subgame-nginx       |</font> 2021/10/07 07:48:36 [error] 7#7: *1 directory index of &quot;/var/www/html/microService/&quot; is forbidden, client: 172.27.32.1, server: localhost, request: &quot;GET / HTTP/1.1&quot;, host: &quot;localhost&quot;
<font color="#A347BA">subgame-nginx       |</font> 172.27.32.1 - - [07/Oct/2021:07:48:36 +0000] &quot;GET / HTTP/1.1&quot; 403 555 &quot;-&quot; &quot;Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.106 Safari/537.36&quot; &quot;-&quot;
</pre>

