# Evaluation

- **Status:** Accepted
- **Contract Link:** https://github.com/w3f/Grants-Program/blob/master/applications/SubGame_Network_m2.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/SubGame-Network/SubGameModule/blob/master/LICENSE) | Correct License  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [readme](https://github.com/SubGame-Network/SubGameModule/blob/master/README.md) |  Only readme  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets) | Real test cases and no unit tests, but according to contract  |
| 1a. | pallet-lease | <ul><li>[x] </li></ul> | [pallet-lease](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/lease) | **7.10.21:** unit test fail, see error below **11.10.21:** Unit test compile now  |
| 1b. | pallet-stake-nft | <ul><li>[x] </li></ul> | [pallet-stake-nft](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/stake-nft) |   |
| 1c. | pallet-nft | <ul><li>[x] </li></ul> | [pallet-nft](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/nft) | Simply reused https://github.com/danforbes/pallet-nft, would be nice if they mention this  |
| 1d. | pallet-gameA | <ul><li>[x] </li></ul> | [pallet-demogame](https://github.com/SubGame-Network/subgame-network/tree/develop/pallets/demogame) |  Initially no explanation about the purpose of this module. |
| 2a. | Front End | <ul><li>[x] </li></ul> | [Front End](https://github.com/SubGame-Network/SubGameModule/tree/master/frontend) | **7.10.21:** See error below **11.10.21:** Front-end compiles now |
| 2b. | UI mock-ups | <ul><li>[x] </li></ul> | [Mockup](https://www.figma.com/file/7ZUQSuAfNrrmq5s3LSIFik/SubGame?node-id=3649%3A62086) | **7.10.21:** File not found, **11.10.21:** Designs are public   |
| 2c. | Tutorial | <ul><li>[x] </li></ul> | [readme](https://github.com/SubGame-Network/SubGameModule/blob/master/README.md) | Image with lorem ipsum, but that's fine  |
| 2d. | Docker | <ul><li>[x] </li></ul> | [docker compose](https://github.com/SubGame-Network/SubGameModule/blob/master/docker-compose.yml) | **7.10.21:**  Starts, but doesn't work, see errors below **13.10.21:** Works, previous issue was because of my setup |

## General Notes

In general, the pallets could be better tested and documented inline, but everything works according to the contract. 

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

