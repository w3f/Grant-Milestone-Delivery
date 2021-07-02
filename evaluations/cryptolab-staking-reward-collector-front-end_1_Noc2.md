# Evaluation

- **Status:** In Progress
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/440
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | GPLv3 |  <ul><li>[x] </li></ul> | [chain-data-collector](https://github.com/cryptolab-network/chain-data-collector/blob/main/LICENSE), [cryptolab-web-server](https://github.com/cryptolab-network/cryptolab-web-server/blob/main/LICENSE)  | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README.md web-server](https://github.com/cryptolab-network/cryptolab-web-server/blob/staking-rewards-collector/README.md), [README.md staking rewards collector](https://github.com/cryptolab-network/polkadot-staking-site/blob/staking-rewards-collector/README.md)   | Very little documentation, only readmes, Almost no inline documentation or even rust doc support  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Readme](https://github.com/cryptolab-network/cryptolab-web-server/blob/staking-rewards-collector/README.md)  |  |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Docker files](https://1drv.ms/u/s!AiJ0e-NXMtnGg2S6fXOq4Fm4aKaa?e=WRWmdZ)  |  |
| 1.  | Integrate Staking Rewards Collector to CryptoLab | <ul><li>[ ] </li></ul> | [backend](https://github.com/cryptolab-network/cryptolab-web-server/blob/staking-rewards-collector) | unused imports: `NaiveDate`, 4 test fail |
| 2.  | Integrate Staking Rewards Collector to CryptoLab/RESTful APIs | <ul><li>[ ] </li></ul> | [](https://github.com/cryptolab-network/polkadot-staking-site)  | It’s integrated into the main page: https://www.cryptolab.network/tools, 24 vulnerabilities! A lot of DEPRECATION WARNING |
| 3.  | UI for filter | <ul><li>[x] </li></ul> | [Filter](https://github.com/cryptolab-network/polkadot-staking-site/commit/b4b0498c09fff2f89394d2fe0baf07137aed558b) |  |
| 4.  | UI for data visualizer  | <ul><li>[ ] </li></ul> | [visualizer](https://github.com/cryptolab-network/polkadot-staking-site/commit/b4b0498c09fff2f89394d2fe0baf07137aed558b)  | Doesn’t show weekly rewards for: 16iNp8A8EU6naBzvDmJR2i4hgP5EQnZHeGQ6omKeK9C4NTkp |
| 5.  | Drop-down List for download report  | <ul><li>[x] </li></ul> | [Help](https://github.com/cryptolab-network/polkadot-staking-site/commit/9ca81c793612c35bbc163d22b7a0dcfe00e87855)  | Implement |
| 7.  | Deployment | <ul><li>[x] </li></ul> | [website](https://www.cryptolab.network/tools/dotSR) | Deployed |
| 8.  | Test live environment | <ul><li>[x] </li></ul> | [Test doc](https://github.com/cryptolab-network/cryptolab-package/blob/main/compatibility_test_report.md)  | Only tested on three browsers, but according to contract |
| 9.  | Polishing | <ul><li>[ ] </li></ul> | []()  | Didn’t reach out to grants teams so far. Probably part of the milestone delivery itself.   |

## General Notes

**NPM issues:**

<pre>up to date, audited 1711 packages in 2s

<font color="#C01C28"><b>24</b></font> vulnerabilities (14 <font color="#A2734C"><b>moderate</b></font>, 10 <font color="#C01C28"><b>high</b></font>)

To address issues that do not require attention, run:
  npm audit fix

To address all issues (including breaking changes), run:
  npm audit fix --force

Run `npm audit` for details.
</pre>

**snyk test**

<pre><font color="#D0CFCC"><b>Testing /home/david/source/web3/evaluation/cryptolab/polkadot-staking-site...</b></font>

Tested 186 dependencies for known issues, <font color="#C01C28"><b>found 2 issues, 3 vulnerable paths.</b></font>


<font color="#D0CFCC"><b>Issues with no direct upgrade or patch:</b></font>
<font color="#E9AD0C">  ✗ </font><font color="#E9AD0C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#E9AD0C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-COLORSTRING-1082939] in <b>color-string@1.5.4</b>
    introduced by @polkadot/vue-identicon@0.70.1 &gt; @polkadot/ui-shared@0.70.1 &gt; color@3.1.3 &gt; color-string@1.5.4
  This issue was fixed in versions: <b>1.5.5</b>
<font color="#E9AD0C">  ✗ </font><font color="#E9AD0C"><b>Regular Expression Denial of Service (ReDoS)</b></font><font color="#E9AD0C"> [Medium Severity]</font>[https://snyk.io/vuln/SNYK-JS-PATHPARSE-1077067] in <b>path-parse@1.0.6</b>
    introduced by vue-meta-info@0.1.7 &gt; rollup-plugin-commonjs@8.4.1 &gt; resolve@1.20.0 &gt; path-parse@1.0.6 and <font color="#33C7DE">1</font> other path(s)
  This issue was fixed in versions: <b>1.0.7</b>
</pre>

**Cargo test:**

<pre><font color="#A2734C"><b>warning</b></font><b>: unused import: `NaiveDate`</b>
 <font color="#2A7BDE"><b>--&gt; </b></font>src/staking_rewards_collector.rs:3:24
  <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>3</b></font> <font color="#2A7BDE"><b>| </b></font>use chrono::{DateTime, NaiveDate, NaiveDateTime, Utc};
  <font color="#2A7BDE"><b>| </b></font>                       <font color="#A2734C"><b>^^^^^^^^^</b></font>
  <font color="#2A7BDE"><b>|</b></font>
  <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(unused_imports)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: 1 warning emitted</b>

<font color="#26A269"><b>    Finished</b></font> test [unoptimized + debuginfo] target(s) in 57.10s
<font color="#26A269"><b>     Running</b></font> unittests (target/debug/deps/cryptolab_backend-f2adf01c70796e3b)

running 8 tests
test staking_rewards_collector::test_incorrect_date_format ... <font color="#26A269">ok</font>
test staking_rewards_collector::test_call_exe_stale_date ... <font color="#26A269">ok</font>
test staking_rewards_collector::test_call_exe_end_date_earlier_than_start ... <font color="#26A269">ok</font>
test staking_rewards_collector::test_call_exe_future_date ... <font color="#26A269">ok</font>
test staking_rewards_collector::test_call_exe_good ... <font color="#C01C28">FAILED</font>
test staking_rewards_collector::test_call_exe_no_rewards_found ... <font color="#C01C28">FAILED</font>
test staking_rewards_collector::test_unsupported_currency ... <font color="#C01C28">FAILED</font>
test staking_rewards_collector::test_call_exe_incorrect_address ... <font color="#C01C28">FAILED</font>

failures:

---- staking_rewards_collector::test_call_exe_good stdout ----
thread &apos;staking_rewards_collector::test_call_exe_good&apos; panicked at &apos;called `Result::unwrap()` on an `Err` value: Os { code: 2, kind: NotFound, message: &quot;No such file or directory&quot; }&apos;, src/config.rs:27:70
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- staking_rewards_collector::test_call_exe_no_rewards_found stdout ----
thread &apos;staking_rewards_collector::test_call_exe_no_rewards_found&apos; panicked at &apos;called `Result::unwrap()` on an `Err` value: Os { code: 2, kind: NotFound, message: &quot;No such file or directory&quot; }&apos;, src/config.rs:27:70

---- staking_rewards_collector::test_unsupported_currency stdout ----
thread &apos;staking_rewards_collector::test_unsupported_currency&apos; panicked at &apos;called `Result::unwrap()` on an `Err` value: Os { code: 2, kind: NotFound, message: &quot;No such file or directory&quot; }&apos;, src/config.rs:27:70

---- staking_rewards_collector::test_call_exe_incorrect_address stdout ----
thread &apos;staking_rewards_collector::test_call_exe_incorrect_address&apos; panicked at &apos;called `Result::unwrap()` on an `Err` value: Os { code: 2, kind: NotFound, message: &quot;No such file or directory&quot; }&apos;, src/config.rs:27:70


failures:
    staking_rewards_collector::test_call_exe_good
    staking_rewards_collector::test_call_exe_incorrect_address
    staking_rewards_collector::test_call_exe_no_rewards_found
    staking_rewards_collector::test_unsupported_currency

test result: <font color="#C01C28">FAILED</font>. 4 passed; 4 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

<font color="#C01C28"><b>error</b></font><b>:</b> test failed, to rerun pass &apos;--bin cryptolab-backend&apos;
</pre>

**General recommendations/feedback:**
- Not clear if it's for polkadot or kusama or for both networks
- Doesn’t show weekly rewards for: 16iNp8A8EU6naBzvDmJR2i4hgP5EQnZHeGQ6omKeK9C4NTkp 
- Input field doesn't remove spaces
- Changing the currency causes the UI to reload everything
- Sometime the data didn't load
- It would be nice if the UI would show different images for the different tools: https://www.cryptolab.network/tools 





