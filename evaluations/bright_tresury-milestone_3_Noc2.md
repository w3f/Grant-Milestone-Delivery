# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/bright_treasury.md
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [License](https://github.com/bright/bright-tresury/blob/milestone3/LICENSE.md)  | Apache 2.0 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Readme](https://github.com/bright/bright-tresury/blob/milestone3/LICENSE.md) |  Repo is well documented |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Readme](https://github.com/bright/bright-tresury/blob/milestone3/LICENSE.md), [test version](https://testing.treasury.bright.dev/stats?networkId=development-2) | Very well tested, but some of the test currently fail, see below |
|	1.	|	User story 22	|	<ul><li>[x] </li></ul> | [create a bounty](https://testing.treasury.bright.dev/bounties/new?networkId=development-2) |  Works |
|	2.	|	User story 23	|	<ul><li>[x] </li></ul> | [e.g. bounties on kusama](https://testing.treasury.bright.dev/bounties?networkId=kusama) | Works for kusama |
|	3.	|	User story 24	|	<ul><li>[x] </li></ul> | [bounties with curator voting on kusama](https://testing.treasury.bright.dev/bounties/4/info?networkId=kusama) | Works	|
|	4.	|	User story 25	|	<ul><li>[ ] </li></ul> | [Bounties overview](https://testing.treasury.bright.dev/bounties?networkId=development-2) | 	|
|	5.	|	User story 26	|	<ul><li>[ ] </li></ul> | [Bounties overview](https://testing.treasury.bright.dev/bounties?networkId=development-2) | 	|
|	6.	|	User story 27	|	<ul><li>[ ] </li></ul> | [Bounties overview](https://testing.treasury.bright.dev/bounties?networkId=development-2) | 	|
|	7.	|	User story 28	|	<ul><li>[ ] </li></ul> | [Bounties overview](https://testing.treasury.bright.dev/bounties?networkId=development-2) | 	|
|	8.	|	User story 29	|	<ul><li>[ ] </li></ul> | [Bounties overview](https://testing.treasury.bright.dev/bounties?networkId=development-2) | 	|
|	9.	|	User story 30	|	<ul><li>[ ] </li></ul> | [ ]() | 	|
|	10.	|	User story 31	|	<ul><li>[ ] </li></ul> | [ ]() | 	|
|	11.	|	User story 32	|	<ul><li>[ ] </li></ul> | [ ]() | 	|
|	12.	|	User story 33	|	<ul><li>[ ] </li></ul> | [ ]() | 	|
|	13.	|	User story 34	|	<ul><li>[ ] </li></ul> | [ ]() | 	|
|	14.	|	User story 35	|	<ul><li>[ ] </li></ul> | [ ]() | 	|
|	15.	|	User story 36	|	<ul><li>[ ] </li></ul> | [Live version](https://treasury.bright.dev/) | Polkadot and Kusama versions are live
|	16.	|	User story 37	|	<ul><li>[ ] </li></ul> | [ ]() | 	|

## General Notes

They already have a live version for polkadot as well as kusama. 

**Failing tests:** 

<pre><span style="background-color:#C01C28"><font color="#300A24"><b> FAIL </b></font></span> <font color="#AAAAAA">src/ideas/list/</font><b>filterIdeas.spec.ts</b> (<span style="background-color:#C01C28"><b>6.102 s</b></span>)
<font color="#C01C28"><b>  ● filter ideas › filter by mine › should return ideas owned by the given user</b></font>

    TypeError: Cannot read property &apos;userId&apos; of undefined

<font color="#AAAAAA">     </font><font color="#5E5C64"> 4 |</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 5 |</font> <font color="#2AA1B3">export</font> <font color="#2AA1B3">function</font> doesIdeaBelongToUser(idea<font color="#A2734C">:</font> <font color="#A2734C">IdeaDto,</font> user<font color="#A2734C">?:</font> <font color="#A2734C">AuthContextUser</font>) {
<font color="#AAAAAA">    </font><font color="#C01C28"><b>&gt;</b></font><font color="#3E3D42"> 6 |</font><font color="#AAAAAA">     </font><font color="#1C6B77">return</font><font color="#AAAAAA"> idea</font><font color="#6C4C32">.</font><font color="#AAAAAA">owner</font><font color="#6C4C32">.</font><font color="#AAAAAA">userId </font><font color="#6C4C32">===</font><font color="#AAAAAA"> user</font><font color="#6C4C32">?.</font><font color="#AAAAAA">id</font>
<font color="#AAAAAA">     </font><font color="#5E5C64">   |</font>                       <font color="#C01C28"><b>^</b></font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 7 |</font> }
<font color="#AAAAAA">     </font><font color="#5E5C64"> 8 |</font>

<font color="#AAAAAA">      at doesIdeaBelongToUser (src/ideas/utils/ideas.utils.ts:6:23)</font>
<font color="#AAAAAA">      at filter (src/ideas/list/filterIdeas.ts:11:43)</font>
<font color="#AAAAAA">          at Array.filter (&lt;anonymous&gt;)</font>
<font color="#AAAAAA">      at filterIdeas (src/ideas/list/filterIdeas.ts:11:26)</font>
<font color="#AAAAAA">      at Object.&lt;anonymous&gt; (</font><font color="#2AA1B3">src/ideas/list/filterIdeas.spec.ts</font><font color="#AAAAAA">:57:20)</font>

<font color="#C01C28"><b>  ● filter ideas › filter by mine › should not return ideas owned by other users</b></font>

    TypeError: Cannot read property &apos;userId&apos; of undefined

<font color="#AAAAAA">     </font><font color="#5E5C64"> 4 |</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 5 |</font> <font color="#2AA1B3">export</font> <font color="#2AA1B3">function</font> doesIdeaBelongToUser(idea<font color="#A2734C">:</font> <font color="#A2734C">IdeaDto,</font> user<font color="#A2734C">?:</font> <font color="#A2734C">AuthContextUser</font>) {
<font color="#AAAAAA">    </font><font color="#C01C28"><b>&gt;</b></font><font color="#3E3D42"> 6 |</font><font color="#AAAAAA">     </font><font color="#1C6B77">return</font><font color="#AAAAAA"> idea</font><font color="#6C4C32">.</font><font color="#AAAAAA">owner</font><font color="#6C4C32">.</font><font color="#AAAAAA">userId </font><font color="#6C4C32">===</font><font color="#AAAAAA"> user</font><font color="#6C4C32">?.</font><font color="#AAAAAA">id</font>
<font color="#AAAAAA">     </font><font color="#5E5C64">   |</font>                       <font color="#C01C28"><b>^</b></font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 7 |</font> }
<font color="#AAAAAA">     </font><font color="#5E5C64"> 8 |</font>

<font color="#AAAAAA">      at doesIdeaBelongToUser (src/ideas/utils/ideas.utils.ts:6:23)</font>
<font color="#AAAAAA">      at filter (src/ideas/list/filterIdeas.ts:11:43)</font>
<font color="#AAAAAA">          at Array.filter (&lt;anonymous&gt;)</font>
<font color="#AAAAAA">      at filterIdeas (src/ideas/list/filterIdeas.ts:11:26)</font>
<font color="#AAAAAA">      at Object.&lt;anonymous&gt; (</font><font color="#2AA1B3">src/ideas/list/filterIdeas.spec.ts</font><font color="#AAAAAA">:69:20)</font>

<font color="#C01C28"><b>  ● filter ideas › filter by mine › should not return ideas when user is undefined</b></font>

    TypeError: Cannot read property &apos;userId&apos; of undefined

<font color="#AAAAAA">     </font><font color="#5E5C64"> 4 |</font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 5 |</font> <font color="#2AA1B3">export</font> <font color="#2AA1B3">function</font> doesIdeaBelongToUser(idea<font color="#A2734C">:</font> <font color="#A2734C">IdeaDto,</font> user<font color="#A2734C">?:</font> <font color="#A2734C">AuthContextUser</font>) {
<font color="#AAAAAA">    </font><font color="#C01C28"><b>&gt;</b></font><font color="#3E3D42"> 6 |</font><font color="#AAAAAA">     </font><font color="#1C6B77">return</font><font color="#AAAAAA"> idea</font><font color="#6C4C32">.</font><font color="#AAAAAA">owner</font><font color="#6C4C32">.</font><font color="#AAAAAA">userId </font><font color="#6C4C32">===</font><font color="#AAAAAA"> user</font><font color="#6C4C32">?.</font><font color="#AAAAAA">id</font>
<font color="#AAAAAA">     </font><font color="#5E5C64">   |</font>                       <font color="#C01C28"><b>^</b></font>
<font color="#AAAAAA">     </font><font color="#5E5C64"> 7 |</font> }
<font color="#AAAAAA">     </font><font color="#5E5C64"> 8 |</font>

<font color="#AAAAAA">      at doesIdeaBelongToUser (src/ideas/utils/ideas.utils.ts:6:23)</font>
<font color="#AAAAAA">      at filter (src/ideas/list/filterIdeas.ts:11:43)</font>
<font color="#AAAAAA">          at Array.filter (&lt;anonymous&gt;)</font>
<font color="#AAAAAA">      at filterIdeas (src/ideas/list/filterIdeas.ts:11:26)</font>
<font color="#AAAAAA">      at Object.&lt;anonymous&gt; (</font><font color="#2AA1B3">src/ideas/list/filterIdeas.spec.ts</font><font color="#AAAAAA">:81:20)</font>

<span style="background-color:#26A269"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/ideas/idea/milestones/</font><b>useIdeaMilestone.spec.ts</b> (<span style="background-color:#C01C28"><b>6.804 s</b></span>)
<span style="background-color:#26A269"><font color="#300A24"><b> PASS </b></font></span> <font color="#AAAAAA">src/bounties/list/</font><b>filterBounties.spec.tsx</b> (<span style="background-color:#C01C28"><b>6.9 s</b></span>)

<b>Test Suites: </b><font color="#C01C28"><b>1 failed</b></font>, <font color="#26A269"><b>14 passed</b></font>, 15 total
<b>Tests:       </b><font color="#C01C28"><b>3 failed</b></font>, <font color="#26A269"><b>150 passed</b></font>, 153 total
</pre>
