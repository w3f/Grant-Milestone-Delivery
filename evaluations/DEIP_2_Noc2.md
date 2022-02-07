# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Grant-Milestone-Delivery/pull/167
- **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2



| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/vedai-org/polkadot-grant-delivery/blob/master/LICENSE)| Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [user-stories.md](https://github.com/vedai-org/polkadot-grant-delivery/blob/master/docs/user-stories.md)| — |
| 0c. | Testing guide | <ul><li>[x] </li></ul> | [testing-guide.md](https://github.com/vedai-org/polkadot-grant-delivery/blob/master/docs/testing-guide.md)| — |
| 0d. | Docker | <ul><li>[x] </li></ul> | [docker-compose.yml](https://github.com/vedai-org/polkadot-grant-delivery/blob/master/docker-compose.yml)| — |
| 0e. | Article | <ul><li>[ ] </li></ul> | [ ]()| Not yet published |
| 1. | Web-based UI | <ul><li>[ ] </li></ul> | [src](https://github.com/vedai-org/polkadot-grant-delivery/tree/master/src)| The sign-up doesn't work for me. "Failed to load resource: net::ERR_SOCKET_NOT_CONNECTED". No MongoDb for web-based app backend open source. The delivery looks different from: "Manage working groups (DAOs), project management", see [mockups of the application](https://github.com/w3f/Grants-Program/blob/master/applications/deip.md)  |


## General Notes

Published as part of a separate repo, which makes it difficult to find for others 

<pre><font color="#12488B"><b>polkadot-grant-delivery</b></font>$ snyk test

<font color="#D0CFCC"><b>Testing /home/david/source/web3/evaluation/deip/polkadot-grant-delivery...</b></font>

Tested 225 dependencies for known issues, <font color="#C01C28"><b>found 3 issues, 3 vulnerable paths.</b></font>


<font color="#D0CFCC"><b>Issues with no direct upgrade or patch:</b></font>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Information Exposure</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-NODEFETCH-2342118] in <b>node-fetch@1.7.3</b>
    introduced by @deip/chain-service@1.360.0 &gt; @deip/rpc-client@1.360.0 &gt; cross-fetch@1.1.1 &gt; node-fetch@1.7.3
  This issue was fixed in versions: <b>2.6.7, 3.1.1</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Denial of Service</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-NODEFETCH-674311] in <b>node-fetch@1.7.3</b>
    introduced by @deip/chain-service@1.360.0 &gt; @deip/rpc-client@1.360.0 &gt; cross-fetch@1.1.1 &gt; node-fetch@1.7.3
  This issue was fixed in versions: <b>2.6.1, 3.0.0-beta.9</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-WS-1296835] in <b>ws@3.3.3</b>
    introduced by @deip/chain-service@1.360.0 &gt; @deip/rpc-client@1.360.0 &gt; ws@3.3.3
  This issue was fixed in versions: <b>7.4.6, 6.2.2, 5.2.3</b>
</pre>
