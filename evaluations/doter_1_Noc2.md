# Evaluation

- **Status:** In Progress 
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/356
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/ChainBridgeNetworkTeam/Doter/blob/master/LICENSE) | Looks good |
| 0b. | Wallet injection | <ul><li>[x] </li></ul> | [injectScript.ts](https://github.com/ChainBridgeNetworkTeam/Doter/blob/master/project/pluginFile/injectScript.ts) | Works with the version on Github. Doesn't work with the version in the chrome store |
| 0c. | Google Extended Market | <ul><li>[x] </li></ul> | [chrome web store](https://chrome.google.com/webstore/detail/doter/abamjefkidngfegdjbmffdmbgjgpaobf) |  |
| 0d. | Unit test | <ul><li>[x] </li></ul> | [entry](https://github.com/ChainBridgeNetworkTeam/Doter/tree/master/project/entry) | 29 tests  |
| 1. | Wallet injection on Polkadot with the following [following features](https://github.com/w3f/Open-Grants-Program/blob/master/applications/Doter.md#ui-prototype) | <ul><li>[ ] </li></ul> | [repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Updating the metadata with polkadot.js/apps doesn't seem to work (entering the password doesn't work) |
| 2. | Transaction signature on Polkadot | <ul><li>[x] </li></ul> | [repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Works (See [example transfer](https://polkadot.subscan.io/block/5243934)) |
| 3. | Optimize account creation, transfer, account management and other functions to improve user experience | <ul><li>[x] </li></ul> | [repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Account creation works and regular transfers work in the UI. The user experience is still far from perfect, but it's only the first milestone  |

## General Notes

Extra demo videos: [General module](https://www.youtube.com/watch?v=pKK5rHJgxVw), [Injection and signature](https://youtu.be/FP9yrLoOQ8k)

- I had issues because I tried to open polkadot.js/apps with doter as well as the polkadot.js extension installed.
- Updating the metadata with polkadot.js/apps doesn't seem to work (entering the password doesn't work)
- The google chrome store version (v1.0.0) as well as the github version (1.0.2) currently don't work with chromium on Ubuntu (extremely small image). 
- Passwords are marked as strong even if I only use letters and numbers.  
- But when I tried to transfer all of my funds inside the wallet back to another address. It told me “success”, but it actually didn't send any of my funds ([see](https://polkadot.subscan.io/block/5244101))
- [Snyk](https://snyk.io/) test see below

<pre>snyk test

<font color="#D0CFCC"><b>Testing /home/david/source/web3/evaluation/Doter...</b></font>

Tested 961 dependencies for known issues, <font color="#C01C28"><b>found 4 issues, 10 vulnerable paths.</b></font>


<font color="#26A269"><b>Issues to fix by upgrading:</b></font>

  Upgrade <font color="#FFFFFF"><b>ejs@2.7.4</b></font> to <font color="#FFFFFF"><b>ejs@3.1.6</b></font> to fix
<font color="#E9AD0C">  ✗ </font><font color="#E9AD0C"><b>Arbitrary Code Injection</b></font><font color="#E9AD0C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-EJS-1049328] in <b>ejs@2.7.4</b>
    introduced by ejs@2.7.4


<font color="#D0CFCC"><b>Issues with no direct upgrade or patch:</b></font>
<font color="#E9AD0C">  ✗ </font><font color="#E9AD0C"><b>Denial of Service</b></font><font color="#E9AD0C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-NODEFETCH-674311] in <b>node-fetch@1.7.3</b>
    introduced by umi-request@1.3.5 &gt; isomorphic-fetch@2.2.1 &gt; node-fetch@1.7.3
  This issue was fixed in versions: <b>2.6.1, 3.0.0-beta.9</b>
<font color="#F66151">  ✗ </font><font color="#F66151"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#F66151"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-NORMALIZEURL-1296539] in <b>normalize-url@4.5.0</b>
    introduced by snyk@1.616.0 &gt; snyk-nodejs-lockfile-parser@1.35.0 &gt; got@11.8.2 &gt; cacheable-request@7.0.1 &gt; normalize-url@4.5.0 and <font color="#33C7DE">4</font> other path(s)
  This issue was fixed in versions: <b>6.0.1, 5.3.1, 4.5.1</b>
<font color="#E9AD0C">  ✗ </font><font color="#E9AD0C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#E9AD0C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-PATHPARSE-1077067] in <b>path-parse@1.0.6</b>
    introduced by @babel/preset-env@7.13.15 &gt; babel-plugin-polyfill-corejs2@0.2.0 &gt; @babel/helper-define-polyfill-provider@0.2.0 &gt; resolve@1.20.0 &gt; path-parse@1.0.6 and <font color="#33C7DE">2</font> other path(s)
  This issue was fixed in versions: <b>1.0.7</b>
</pre>