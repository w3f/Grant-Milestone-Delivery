# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/bright_treasury.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/bright/bright-tresury/blob/master/LICENSE.md)  | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Readme](https://github.com/bright/bright-tresury/blob/milestone1/README.md) |  Repo is well documented |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Readme](https://github.com/bright/bright-tresury/blob/milestone1/README.md) | Front-end has 90 tests	|
|	1.	|	User story 14	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/?networkId=development-2)  |  Let's you easily switch networks, ui changes	|
|	2.	|	User story 15	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/ideas/new?networkId=development-2)  |  Works	|
|	3.	|	User story 16	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/ideas?filter=mine)  |  It showed me "No injected accounts", even though my account was connected, after reloading it worked	|
|	4.	|	User story 17	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/ideas?filter=mine)  |  Works	|
|	5.	|	User story 18	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/stats?networkId=polkadot)  | Looks good and clean |
|	6.	|	User story 19	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/?networkId=development-2)  | Looks nice and works|
|	7.	|	User story 20	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/)  |  Works	|
|	8.	|	User story 21	|	<ul><li>[x] </li></ul> | [app](https://testing.treasury.brightinventions.pl/)  |  Works | 

## General Notes

Milestone 2 branch: https://github.com/bright/bright-tresury/tree/milestone2. Very good delivery. Everything immediately worked and the app is well tested and documented. Also the design looks very clean. Snyk complained about a few things (see below), but that’s not a big problem at this stage. 

**snky test**

<pre>snyk test

<font color="#D0CFCC"><b>Testing /home/david/source/web3/evaluation/bright/bright-tresury/www...</b></font>

Tested 1769 dependencies for known issues, <font color="#C01C28"><b>found 10 issues, 17 vulnerable paths.</b></font>


<font color="#26A269"><b>Issues to fix by upgrading:</b></font>

  Upgrade <font color="#FFFFFF"><b>@testing-library/jest-dom@4.2.4</b></font> to <font color="#FFFFFF"><b>@testing-library/jest-dom@5.1.0</b></font> to fix
<font color="#C01C28">  ✗ </font><font color="#C01C28"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#C01C28"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-ANSIREGEX-1583908] in <b>ansi-regex@3.0.0</b>
    introduced by @polkadot/ui-keyring@0.85.4 &gt; @polkadot/hw-ledger@7.4.1 &gt; @polkadot/hw-ledger-transports@7.4.1 &gt; @ledgerhq/hw-transport-node-hid-singleton@6.7.0 &gt; @ledgerhq/hw-transport-node-hid-noevents@6.7.0 &gt; node-hid@2.1.1 &gt; prebuild-install@6.1.4 &gt; npmlog@4.1.2 &gt; gauge@2.7.4 &gt; wide-align@1.1.3 &gt; string-width@2.1.1 &gt; strip-ansi@4.0.0 &gt; ansi-regex@3.0.0 and <font color="#33C7DE">4</font> other path(s)

  Upgrade <font color="#FFFFFF"><b>@testing-library/react@9.5.0</b></font> to <font color="#FFFFFF"><b>@testing-library/react@10.0.0</b></font> to fix
<font color="#C01C28">  ✗ </font><font color="#C01C28"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#C01C28"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-ANSIREGEX-1583908] in <b>ansi-regex@3.0.0</b>
    introduced by @polkadot/ui-keyring@0.85.4 &gt; @polkadot/hw-ledger@7.4.1 &gt; @polkadot/hw-ledger-transports@7.4.1 &gt; @ledgerhq/hw-transport-node-hid-singleton@6.7.0 &gt; @ledgerhq/hw-transport-node-hid-noevents@6.7.0 &gt; node-hid@2.1.1 &gt; prebuild-install@6.1.4 &gt; npmlog@4.1.2 &gt; gauge@2.7.4 &gt; wide-align@1.1.3 &gt; string-width@2.1.1 &gt; strip-ansi@4.0.0 &gt; ansi-regex@3.0.0 and <font color="#33C7DE">4</font> other path(s)

  Upgrade <font color="#FFFFFF"><b>@types/jest@24.9.1</b></font> to <font color="#FFFFFF"><b>@types/jest@25.1.0</b></font> to fix
<font color="#C01C28">  ✗ </font><font color="#C01C28"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#C01C28"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-ANSIREGEX-1583908] in <b>ansi-regex@3.0.0</b>
    introduced by @polkadot/ui-keyring@0.85.4 &gt; @polkadot/hw-ledger@7.4.1 &gt; @polkadot/hw-ledger-transports@7.4.1 &gt; @ledgerhq/hw-transport-node-hid-singleton@6.7.0 &gt; @ledgerhq/hw-transport-node-hid-noevents@6.7.0 &gt; node-hid@2.1.1 &gt; prebuild-install@6.1.4 &gt; npmlog@4.1.2 &gt; gauge@2.7.4 &gt; wide-align@1.1.3 &gt; string-width@2.1.1 &gt; strip-ansi@4.0.0 &gt; ansi-regex@3.0.0 and <font color="#33C7DE">4</font> other path(s)


<font color="#D0CFCC"><b>Issues with no direct upgrade or patch:</b></font>
<font color="#C01C28">  ✗ </font><font color="#C01C28"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#C01C28"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-ANSIHTML-1296849] in <b>ansi-html@0.0.7</b>
    introduced by react-scripts@4.0.3 &gt; @pmmmwh/react-refresh-webpack-plugin@0.4.3 &gt; ansi-html@0.0.7 and <font color="#33C7DE">1</font> other path(s)
  No upgrade or patch available
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-BROWSERSLIST-1090194] in <b>browserslist@4.14.2</b>
    introduced by react-scripts@4.0.3 &gt; react-dev-utils@11.0.4 &gt; browserslist@4.14.2
  This issue was fixed in versions: <b>4.16.5</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-CSSWHAT-1298035] in <b>css-what@3.4.2</b>
    introduced by react-scripts@4.0.3 &gt; @svgr/webpack@5.5.0 &gt; @svgr/plugin-svgo@5.5.0 &gt; svgo@1.3.2 &gt; css-select@2.1.0 &gt; css-what@3.4.2
  This issue was fixed in versions: <b>5.0.1</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Arbitrary Code Injection</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-EJS-1049328] in <b>ejs@2.7.4</b>
    introduced by react-scripts@4.0.3 &gt; workbox-webpack-plugin@5.1.4 &gt; workbox-build@5.1.4 &gt; @surma/rollup-plugin-off-main-thread@1.4.2 &gt; ejs@2.7.4
  This issue was fixed in versions: <b>3.1.6</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-GLOBPARENT-1016905] in <b>glob-parent@3.1.0</b>
    introduced by react-scripts@4.0.3 &gt; webpack@4.44.2 &gt; watchpack@1.7.5 &gt; watchpack-chokidar2@2.0.1 &gt; chokidar@2.1.8 &gt; glob-parent@3.1.0
  This issue was fixed in versions: <b>5.1.2</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Prototype Pollution</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-IMMER-1540542] in <b>immer@8.0.1</b>
    introduced by react-scripts@4.0.3 &gt; react-dev-utils@11.0.4 &gt; immer@8.0.1
  This issue was fixed in versions: <b>9.0.6</b>
<font color="#C01C28">  ✗ </font><font color="#C01C28"><b>Command Injection</b></font><font color="#C01C28"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-LODASHTEMPLATE-1088054] in <b>lodash.template@4.5.0</b>
    introduced by react-scripts@4.0.3 &gt; workbox-webpack-plugin@5.1.4 &gt; workbox-build@5.1.4 &gt; lodash.template@4.5.0
  No upgrade or patch available
<font color="#C01C28">  ✗ </font><font color="#C01C28"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#C01C28"> [High Severity]</font>[https://snyk.io/vuln/SNYK-JS-NTHCHECK-1586032] in <b>nth-check@1.0.2</b>
    introduced by react-scripts@4.0.3 &gt; @svgr/webpack@5.5.0 &gt; @svgr/plugin-svgo@5.5.0 &gt; svgo@1.3.2 &gt; css-select@2.1.0 &gt; nth-check@1.0.2
  This issue was fixed in versions: <b>2.0.1</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-PROMPTS-1729737] in <b>prompts@2.4.0</b>
    introduced by react-scripts@4.0.3 &gt; jest@26.6.0 &gt; jest-cli@26.6.3 &gt; prompts@2.4.1 and <font color="#33C7DE">2</font> other path(s)
  This issue was fixed in versions: <b>2.4.2</b>
</pre>