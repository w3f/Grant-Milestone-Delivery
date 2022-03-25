# Evaluation

- **Status:** In Progress 
- **Application:** https://github.com/w3f/Grants-Program/blob/master/applications/DICO.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | License | <ul><li>[x] </li></ul> | [LICENSE-APACHE](https://github.com/DICO-TEAM/dico-chain/blob/main/LICENSE-APACHE), [Front-end License](https://github.com/DICO-TEAM/dicolite/blob/main/LICENSE) | Correct License |
| 1.a | Substrate module: KYC pallet | <ul><li>[ ] </li></ul> | [kyc](https://github.com/DICO-TEAM/dico-chain/tree/main/pallets/kyc) | Generally seems to be according to the contract, but I get a lot of warnings (see below). Also some of the names seem strange, e.g. "sword_holder_provide_judgement"  |
| 1.b | Substrate module: ICO pallet | <ul><li>[ ] </li></ul> | [ico](https://github.com/DICO-TEAM/dico-chain/tree/main/pallets/ico) |  |
| 1.c | Substrate module: DAO pallet | <ul><li>[ ] </li></ul> | [dao](https://github.com/DICO-TEAM/dico-chain/tree/main/pallets/dao) |  |
| 2.a. | Integration with front-end(dapp) | <ul><li>[ ] </li></ul> | [dicolite](https://github.com/DICO-TEAM/dicolite) | **28.02.22:** Not open source? **15.03.22:** The team open sourced the delivery. But the readme doesn’t contain any information on how to compile it  |
| 2.b | Tutorial| <ul><li>[ ] </li></ul> | [DICO-Lite-user-manual](https://wiki.dico.io/docs/DICO-Lite-user-manual) | **28.02.22:** Screenshot tutorial, but no demo video **15.03.22:** They shared some videos (https://www.youtube.com/watch?v=gt1BfWZaVWs, https://www.youtube.com/watch?v=we9feIzIJW8, https://www.youtube.com/watch?v=qQuMZ87G2UU), but none seems to be demo video according to the contract |
| 3. | Testing Guide/Documentation	 | <ul><li>[ ] </li></ul> | [DEVELOPMENT.md](https://github.com/DICO-TEAM/dico-chain/blob/main/.github/DEVELOPMENT.md) | Inline documentation provided, the guide doesn’t describe how to run the unit tests  |
| 4. | Docker | <ul><li>[ ] </li></ul> | [dockerfiles](https://github.com/DICO-TEAM/dico-chain/blob/main/scripts/dockerfiles/dico/dico_builder.Dockerfile) |  |
| 5. | Docker-compose | <ul><li>[ ] </li></ul> | []() |  |
| 6.  | Lending module(research oriented)| <ul><li>[ ] </li></ul> | []() | Seems to be missing |

## General Notes

**15.03.22:**
They are working on fixing the warnings: https://github.com/DICO-TEAM/dico-chain/issues/127

For example, here are the warnings for the kyc module:
<pre><font color="#A2734C"><b>warning</b></font><b>: value assigned to `ias_list` is never read</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/lib.rs:898:12
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>898</b></font> <font color="#2A7BDE"><b>| </b></font>            let mut ias_list: Vec&lt;Option&lt;IASInfo&lt;BalanceOf&lt;T&gt;, T::AccountId&gt;&gt;&gt; = Vec::new();
    <font color="#2A7BDE"><b>| </b></font>                    <font color="#A2734C"><b>^^^^^^^^</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(unused_assignments)]` on by default
    <font color="#2A7BDE"><b>= </b></font><b>help</b>: maybe it is overwritten before being read?

<font color="#A2734C"><b>warning</b></font><b>: value assigned to `ias_list` is never read</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/lib.rs:944:12
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>944</b></font> <font color="#2A7BDE"><b>| </b></font>            let mut ias_list: Vec&lt;Option&lt;IASInfo&lt;BalanceOf&lt;T&gt;, T::AccountId&gt;&gt;&gt; = Vec::new();
    <font color="#2A7BDE"><b>| </b></font>                    <font color="#A2734C"><b>^^^^^^^^</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>help</b>: maybe it is overwritten before being read?

<font color="#A2734C"><b>warning</b></font><b>: value assigned to `ias_list` is never read</b>
    <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/lib.rs:1329:12
     <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>1329</b></font> <font color="#2A7BDE"><b>| </b></font>            let mut ias_list: Vec&lt;Option&lt;IASInfo&lt;BalanceOf&lt;T&gt;, T::AccountId&gt;&gt;&gt; = Vec::new();
     <font color="#2A7BDE"><b>| </b></font>                    <font color="#A2734C"><b>^^^^^^^^</b></font>
     <font color="#2A7BDE"><b>|</b></font>
     <font color="#2A7BDE"><b>= </b></font><b>help</b>: maybe it is overwritten before being read?

<font color="#A2734C"><b>warning</b></font><b>: value assigned to `ias_list` is never read</b>
    <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/lib.rs:1358:12
     <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>1358</b></font> <font color="#2A7BDE"><b>| </b></font>            let mut ias_list: Vec&lt;Option&lt;IASInfo&lt;BalanceOf&lt;T&gt;, T::AccountId&gt;&gt;&gt; = Vec::new();
     <font color="#2A7BDE"><b>| </b></font>                    <font color="#A2734C"><b>^^^^^^^^</b></font>
     <font color="#2A7BDE"><b>|</b></font>
     <font color="#2A7BDE"><b>= </b></font><b>help</b>: maybe it is overwritten before being read?

<font color="#A2734C"><b>warning</b></font><b>: associated function is never used: `has_deposit`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/types.rs:40:16
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>40</b></font> <font color="#2A7BDE"><b>| </b></font>    pub(crate) fn has_deposit(&amp;self) -&gt; bool {
   <font color="#2A7BDE"><b>| </b></font>                  <font color="#A2734C"><b>^^^^^^^^^^^</b></font>
   <font color="#2A7BDE"><b>|</b></font>
   <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(dead_code)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: associated function is never used: `is_sticky`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/types.rs:49:16
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>49</b></font> <font color="#2A7BDE"><b>| </b></font>    pub(crate) fn is_sticky(&amp;self) -&gt; bool {
   <font color="#2A7BDE"><b>| </b></font>                  <font color="#A2734C"><b>^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: associated function is never used: `has_success`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/types.rs:79:16
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>79</b></font> <font color="#2A7BDE"><b>| </b></font>    pub(crate) fn has_success(&amp;self) -&gt; bool {
   <font color="#2A7BDE"><b>| </b></font>                  <font color="#A2734C"><b>^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: associated function is never used: `is_cheat`</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/types.rs:115:16
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>115</b></font> <font color="#2A7BDE"><b>| </b></font>    pub(crate) fn is_cheat(&amp;self) -&gt; bool {
    <font color="#2A7BDE"><b>| </b></font>                  <font color="#A2734C"><b>^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>:</b> `pallet-kyc` (lib) generated 8 warnings
<font color="#A2734C"><b>warning</b></font><b>: function is never used: `bob_kyc`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/tests.rs:16:4
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>16</b></font> <font color="#2A7BDE"><b>| </b></font>fn bob_kyc() -&gt; KYCInfo {
   <font color="#2A7BDE"><b>| </b></font>   <font color="#A2734C"><b>^^^^^^^</b></font>
   <font color="#2A7BDE"><b>|</b></font>
   <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(dead_code)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: function is never used: `bob_ias_info`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/tests.rs:36:4
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>36</b></font> <font color="#2A7BDE"><b>| </b></font>fn bob_ias_info() -&gt; IASInfo&lt;AccountId, Balance&gt; {
   <font color="#2A7BDE"><b>| </b></font>   <font color="#A2734C"><b>^^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: function is never used: `bob_message`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/tests.rs:56:4
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>56</b></font> <font color="#2A7BDE"><b>| </b></font>fn bob_message() -&gt; [u8; 128] {
   <font color="#2A7BDE"><b>| </b></font>   <font color="#A2734C"><b>^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: associated function is never used: `has_deposit`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>pallets/kyc/src/types.rs:40:16
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>40</b></font> <font color="#2A7BDE"><b>| </b></font>    pub(crate) fn has_deposit(&amp;self) -&gt; bool {
   <font color="#2A7BDE"><b>| </b></font>                  <font color="#A2734C"><b>^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>:</b> `pallet-kyc` (lib test) generated 11 warnings (7 duplicates)
</pre>

**28.02.22:**
A lot of warnings by the compiler. Probably the most warnings I ever got.  