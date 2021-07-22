# Evaluation

- **Status:** In progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/356
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/ChainBridgeNetworkTeam/Doter/blob/master/) | Correct |
| 0b. | Polkadot Support | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Works |
| 0c. | Integration Tests, Unit Test + Release | <ul><li>[ ] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Test fail, see below |
| 1a. | Create and import wallets on Kusama | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter)  | Works |
| 1b. | Transfer and receive on Kusama | <ul><li>[ ] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Doesn't work for me at the moment |
| 1c. | Backup wallet on Kusama | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Same as on polkadot |
| 1d. | Query transaction records on Kusama | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Transaction Record works |
| 1e. | Referendum on the chain on Kusama | <ul><li>[ ] </li></ul> | []() |  |
| 1f. | Switch multiple wallets on Kusama | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Works |
| 1g. | Manage address book on Kusama | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | address book works |
| 1h. | Switch language on Kusama | <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Support for chinese and english |
| 1i. | Wallet injection and signature on Kusama| <ul><li>[x] </li></ul> | [Doter repo](https://github.com/ChainBridgeNetworkTeam/Doter) | Works |

## General Notes

- When I tried to transfer a small amount to another account on kusama, I wasn’t able to confirm the transaction. It constantly showed a loading animation instead of the confirm button.  

**snyk test**

<pre>snyk test

<font color="#D0CFCC"><b>Testing /home/david/source/web3/evaluation/Doter...</b></font>

Tested 540 dependencies for known issues, <font color="#C01C28"><b>found 1 issue, 1 vulnerable path.</b></font>


<font color="#D0CFCC"><b>Issues with no direct upgrade or patch:</b></font>
<font color="#E9AD0C">  ✗ </font><font color="#E9AD0C"><b>Denial of Service</b></font><font color="#E9AD0C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-NODEFETCH-674311] in <b>node-fetch@1.7.3</b>
    introduced by umi-request@1.3.9 &gt; isomorphic-fetch@2.2.1 &gt; node-fetch@1.7.3
  This issue was fixed in versions: <b>2.6.1, 3.0.0-beta.9</b>
</pre>

**yarn test**

<pre>
<span style="background-color:#C01C28"><font color="#300A24"><b> FAIL </b></font></span> <font color="#AAAAAA">project/entry/page/createAccount/</font><b>index.test.tsx</b> (<span style="background-color:#C01C28"><b>21.903 s</b></span>)
  Create Account
    Phase 1
      <font color="#26A269">✓</font> see mnemonic mask (264 ms)
      <font color="#26A269">✓</font> find wraper (75 ms)
      <font color="#26A269">✓</font> check secret input for length (152 ms)
      <font color="#26A269">✓</font> check secret input for repeat not stay same with secret input (158 ms)
      <font color="#26A269">✓</font> check for user agreement check (96 ms)
      <font color="#C01C28">✕</font> enter next stage (469 ms)

<font color="#C01C28"><b>  ● Create Account › Phase 1 › enter next stage</b></font>

    TypeError: Cannot read property &apos;createStage&apos; of undefined

<font color="#AAAAAA">     </font><font color="#5E5C64"> 56 |</font>     <font color="#2AA1B3">const</font> [stateObj<font color="#A2734C">,</font> setState] <font color="#A2734C">=</font> useReducer(stateReducer<font color="#A2734C">,</font> { words<font color="#A2734C">:</font> []<font color="#A2734C">,</font> pickWords<font color="#A2734C">:</font> []<font color="#A2734C">,</font> showLoading<font color="#A2734C">:</font> <font color="#2AA1B3">false</font> } <font color="#2AA1B3">as</font> mnemonicStateObj)<font color="#A2734C">;</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 57 |</font>     <font color="#5E5C64">//  是否第一阶段</font>
<font color="#AAAAAA">    </font><font color="#C01C28"><b>&gt;</b></font><font color="#3E3D42"> 58 |</font><font color="#AAAAAA">     </font><font color="#1C6B77">const</font><font color="#AAAAAA"> isStepOne </font><font color="#6C4C32">=</font><font color="#AAAAAA"> createStore</font><font color="#6C4C32">.</font><font color="#AAAAAA">createStage </font><font color="#6C4C32">===</font><font color="#AAAAAA"> </font><font color="#6C4C32">CREAT_STAGE.MNEMONIC_MASK;</font>
<font color="#AAAAAA">     </font><font color="#5E5C64">    |</font>                                   <font color="#C01C28"><b>^</b></font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 59 |</font>     <font color="#5E5C64">//  是否正确恢复的顺序</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 60 |</font>     <font color="#2AA1B3">const</font> isRightOrder <font color="#A2734C">=</font> useMemo(() <font color="#A2734C">=&gt;</font> {
<font color="#AAAAAA">     </font><font color="#5E5C64"> 61 |</font>         <font color="#2AA1B3">const</font> { words<font color="#A2734C">,</font> pickWords } <font color="#A2734C">=</font> stateObj<font color="#A2734C">;</font>
</pre>

<pre><span style="background-color:#C01C28"><font color="#300A24"><b> FAIL </b></font></span> <font color="#AAAAAA">project/entry/page/retriveWallet/mnemonic/</font><b>index.test.tsx</b> (<span style="background-color:#C01C28"><b>23.092 s</b></span>)
  Retrive wallet with mnemonic
    header render test
      <font color="#26A269">✓</font> go through progress of mnemonic retrieve wallet, without userAgreement (412 ms)
      <font color="#26A269">✓</font> go through progress of mnemonic retrieve wallet, password too short (162 ms)
      <font color="#26A269">✓</font> go through progress of mnemonic retrieve wallet, password without consistency (119 ms)
      <font color="#C01C28">✕</font> go through progress of mnemonic retrieve wallet, success (964 ms)

<font color="#C01C28"><b>  ● Retrive wallet with mnemonic › header render test › go through progress of mnemonic retrieve wallet, success</b></font>

    TypeError: Cannot read property &apos;storage&apos; of null

<font color="#AAAAAA">     </font><font color="#5E5C64"> 117 |</font> <font color="#2AA1B3">export</font> <font color="#2AA1B3">async</font> <font color="#2AA1B3">function</font> chromeLocalSet(obj<font color="#A2734C">:</font> <font color="#A2734C">Record&lt;string,</font> any<font color="#A2734C">&gt;</font>) {
<font color="#AAAAAA">     </font><font color="#5E5C64"> 118 |</font>     <font color="#2AA1B3">return</font> <font color="#2AA1B3">await</font> <font color="#2AA1B3">new</font> <font color="#A2734C">Promise</font>((res) <font color="#A2734C">=&gt;</font> {
<font color="#AAAAAA">    </font><font color="#C01C28"><b>&gt;</b></font><font color="#3E3D42"> 119 |</font><font color="#AAAAAA">         chrome</font><font color="#6C4C32">.</font><font color="#AAAAAA">storage</font><font color="#6C4C32">.</font><font color="#AAAAAA">local</font><font color="#6C4C32">.</font><font color="#1C6B77">set</font><font color="#AAAAAA">(obj</font><font color="#6C4C32">,</font><font color="#AAAAAA"> () </font><font color="#6C4C32">=&gt;</font><font color="#AAAAAA"> {</font>
<font color="#AAAAAA">     </font><font color="#5E5C64">     |</font>                <font color="#C01C28"><b>^</b></font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 120 |</font>             res(<font color="#A347BA">1</font>)<font color="#A2734C">;</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 121 |</font>         })<font color="#A2734C">;</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 122 |</font>     })<font color="#A2734C">;</font>
</pre>

<pre><b>Test Suites: </b><font color="#C01C28"><b>2 failed</b></font>, <font color="#26A269"><b>10 passed</b></font>, 12 total
<b>Tests:       </b><font color="#C01C28"><b>2 failed</b></font>, <font color="#26A269"><b>27 passed</b></font>, 29 total
</pre>