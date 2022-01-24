# Evaluation

- **Status:** In Progress 
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/CESS.md
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [web-app](https://github.com/CESSProject/web-app), [cess-ui-js](https://github.com/CESSProject/cess-ui-js/blob/main/LICENSE), [cess-proving-system](https://github.com/CESSProject/cess-proving-system/blob/main/LICENSE-APACHE) | web-app has no license file |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [cess](https://github.com/CESSProject/cess) | Documentation via readme files. No inline documentation, but it’s also not a requirement of the grant.  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [cess](https://github.com/CESSProject/cess#run-tests) | Test all work |
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [medium](https://medium.com/@swowk1/cess-forw3f-grants-the-last-step-ui-design-8a51b348aec3) | The article is rather strange and seems to be more a combination of different readme files than a real article. |
| 1. | Cryptographic modules | <ul><li>[x] </li></ul> | [cess-proving-system](https://github.com/CESSProject/cess-proving-system) | This is mostly just a filecoin fork |
| 2. | UI Modules | <ul><li>[x] </li></ul> | [cess-ui-js](https://github.com/CESSProject/cess-ui-js) | The UI looks nice and they already have a live version |
| 3. | File processing | <ul><li>[ ] </li></ul> | [web-app](https://github.com/CESSProject/web-app) | I can not buy anything via the app, Upload seems to work, but it has no storage costs |
| 4. | Benchmark | <ul><li>[x] </li></ul> | [benchmarks](https://github.com/CESSProject/cess#run-tests-with-benchmarks) | Benchmarks for each pallet, not the individual algorithms |
| 5. | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/CESSProject/cess#run-in-docker) | - |

## General Notes

General comments: 
- The roadmap on their website is outdated. 

**19.01.2022 web-app:** 

<pre><font color="#C01C28"><b>77</b></font> vulnerabilities (2 <b>low</b>, 63 <font color="#A2734C"><b>moderate</b></font>, 12 <font color="#C01C28"><b>high</b></font>)
</pre>

<pre>snyk test

<font color="#D0CFCC"><b>Testing /home/david/source/web3/evaluation/cess/web-app...</b></font>

Tested 136 dependencies for known issues, <font color="#C01C28"><b>found 3 issues, 7 vulnerable paths.</b></font>


<font color="#D0CFCC"><b>Issues with no direct upgrade or patch:</b></font>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-ASYNCVALIDATOR-2311201] in <b>async-validator@1.8.5</b>
    introduced by element-ui@2.15.5 &gt; async-validator@1.8.5
  This issue was fixed in versions: <b>4.0.4</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Information Exposure</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-FOLLOWREDIRECTS-2332181] in <b>follow-redirects@1.14.5</b>
    introduced by axios@0.24.0 &gt; follow-redirects@1.14.5
  This issue was fixed in versions: <b>1.14.7</b>
<font color="#A2734C">  ✗ </font><font color="#A2734C"><b>Information Exposure</b></font><font color="#A2734C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-NODEFETCH-2342118] in <b>node-fetch@2.6.6</b>
    introduced by @polkadot/api@6.6.1 &gt; @polkadot/rpc-provider@6.6.1 &gt; @polkadot/x-fetch@7.9.1 &gt; node-fetch@2.6.6 and <font color="#33C7DE">4</font> other path(s)
  This issue was fixed in versions: <b>2.6.7, 3.1.1</b>
</pre>

<pre><span style="background-color:#A2734C"><font color="#171421"> WARNING </font></span> <font color="#A2734C">Compiled with 7 warnings</font>                                                                                                                                                                       <font color="#5E5C64">1:48:19 PM</font>

Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/components/customDropDown.vue</u>
  82:23  <font color="#C01C28">error</font>  Empty block statement  no-empty

<font color="#C01C28"><b>✖ 1 problem (1 error, 0 warnings)</b></font>


Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/store/modules/userInfo.js</u>
  124:7  <font color="#C01C28">error</font>  &apos;state&apos; is defined but never used  no-unused-vars

<font color="#C01C28"><b>✖ 1 problem (1 error, 0 warnings)</b></font>


Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/utils/network.js</u>
  7:3  <font color="#C01C28">error</font>  &apos;Message&apos; is defined but never used  no-unused-vars

<font color="#C01C28"><b>✖ 1 problem (1 error, 0 warnings)</b></font>


Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/utils/valid.js</u>
  2:25  <font color="#C01C28">error</font>  Unnecessary escape character: \[  no-useless-escape
  2:50  <font color="#C01C28">error</font>  Unnecessary escape character: \[  no-useless-escape

<font color="#C01C28"><b>✖ 2 problems (2 errors, 0 warnings)</b></font>


Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/views/mydata/FileDetail.vue</u>
  262:15  <font color="#C01C28">error</font>  &apos;_this&apos; is not defined                       no-undef
  330:51  <font color="#C01C28">error</font>  &apos;res&apos; is defined but never used              no-unused-vars
  504:11  <font color="#C01C28">error</font>  &apos;txhash&apos; is assigned a value but never used  no-unused-vars
  508:14  <font color="#C01C28">error</font>  &apos;events&apos; is assigned a value but never used  no-unused-vars

<font color="#C01C28"><b>✖ 4 problems (4 errors, 0 warnings)</b></font>


Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/views/mydata/MyCloud.vue</u>
   59:47  <font color="#C01C28">error</font>  &apos;slot&apos; is defined but never used  vue/no-unused-vars
   74:47  <font color="#C01C28">error</font>  &apos;slot&apos; is defined but never used  vue/no-unused-vars
  403:12  <font color="#C01C28">error</font>  &apos;e&apos; is defined but never used     no-unused-vars
  412:13  <font color="#C01C28">error</font>  &apos;e&apos; is defined but never used     no-unused-vars

<font color="#C01C28"><b>✖ 4 problems (4 errors, 0 warnings)</b></font>


Module Warning (from ./node_modules/eslint-loader/index.js):

<u style="text-decoration-style:single">/home/david/source/web3/evaluation/cess/web-app/src/views/mydata/UploadFile.vue</u>
  285:25  <font color="#C01C28">error</font>  Unnecessary escape character: \[             no-useless-escape
  285:50  <font color="#C01C28">error</font>  Unnecessary escape character: \[             no-useless-escape
  520:11  <font color="#C01C28">error</font>  &apos;txhash&apos; is assigned a value but never used  no-unused-vars
  524:20  <font color="#C01C28">error</font>  &apos;events&apos; is assigned a value but never used  no-unused-vars
  543:17  <font color="#C01C28">error</font>  &apos;error&apos; is defined but never used            no-unused-vars

<font color="#C01C28"><b>✖ 5 problems (5 errors, 0 warnings)</b></font>

</pre>