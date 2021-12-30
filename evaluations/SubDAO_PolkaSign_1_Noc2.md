# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/SubDAO_PolkaSign.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/SubDAO-Network/polkasign-contract/blob/main/LICENSE), [MIT Client](https://github.com/SubDAO-Network/subdao-polkasign/blob/main/LICENSE) | **27.12.21:** Correct License, but a lot of it is cloned from [apron](https://github.com/Apron-Network/apron-contracts) which has an apache license, **30.12.21** Readme was updated and it seems https://github.com/sharkygg works for both companies, which is why the code is similar.   |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [polkasign-docs](https://github.com/SubDAO-Network/polkasign-docs) | Good documentation |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Usage](https://github.com/SubDAO-Network/polkasign-docs/blob/main/Usage.md) |  |
| 0d. | Article | <ul><li>[x] </li></ul> | [medium article](https://subdao.medium.com/subdao-launched-polkasign-beta-which-will-be-embedded-in-ventures-dao-7fde5037c278) | Nice article, but it's already published |
| 1a. | PolkaSign Client | <ul><li>[x] </li></ul> | [subdao-polkasign](https://github.com/SubDAO-Network/subdao-polkasign) | Also has a backend, a lot of warnings see below. The UI has no option to select different accounts   |
| 1b. | PolkaSign Smart Contract | <ul><li>[x] </li></ul> | [contract](https://github.com/SubDAO-Network/polkasign-contract) | Compiles, but a lot of warnings |
| 2. | Build instruction | <ul><li>[x] </li></ul> | [Deploy.md](https://github.com/SubDAO-Network/polkasign-docs/blob/main/Deploy.md) |  |

## General Notes

The delivery is according to the contract. But it is clearly still in an early stage. For example the code shows a lot of warnings and there is now way to switch between different polkadot.js accounts. 

Lots of warnings for the contracts:

<pre><font color="#A2734C"><b>warning</b></font><b>: unused import: `ink_prelude::vec::Vec`</b>
 <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:6:5
  <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>6</b></font> <font color="#2A7BDE"><b>| </b></font>use ink_prelude::vec::Vec;
  <font color="#2A7BDE"><b>| </b></font>    <font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^</b></font>
  <font color="#2A7BDE"><b>|</b></font>
  <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(unused_imports)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: unused import: `crate::CryptoExtensionErr`</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:66:9
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>66</b></font> <font color="#2A7BDE"><b>| </b></font>    use crate::CryptoExtensionErr;
   <font color="#2A7BDE"><b>| </b></font>        <font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: unused import: `std::convert::TryFrom`</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:446:13
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>446</b></font> <font color="#2A7BDE"><b>| </b></font>        use std::convert::TryFrom;
    <font color="#2A7BDE"><b>| </b></font>            <font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: unused variable: `storage_hash`</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:256:17
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>256</b></font> <font color="#2A7BDE"><b>| </b></font>            let storage_hash = info.hash;
    <font color="#2A7BDE"><b>| </b></font>                <font color="#A2734C"><b>^^^^^^^^^^^^</b></font> <font color="#A2734C"><b>help: if this is intentional, prefix it with an underscore: `_storage_hash`</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(unused_variables)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: variable `pageParams` should have a snake case name</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:336:74
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>336</b></font> <font color="#2A7BDE"><b>| </b></font>        pub fn query_agreement_by_creator(&amp;mut self, creator: AccountId, pageParams: PageParams) -&gt; PageResult&lt;AgreementInfoDisplay&gt; {
    <font color="#2A7BDE"><b>| </b></font>                                                                         <font color="#A2734C"><b>^^^^^^^^^^</b></font> <font color="#A2734C"><b>help: convert the identifier to snake case: `page_params`</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(non_snake_case)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: variable `pageParams` should have a snake case name</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:407:84
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>407</b></font> <font color="#2A7BDE"><b>| ...</b></font>t self, collaborator: AccountId, pageParams: PageParams) -&gt; PageResult&lt;AgreementInfoDisplay&gt; {
    <font color="#2A7BDE"><b>| </b></font>                                    <font color="#A2734C"><b>^^^^^^^^^^</b></font> <font color="#A2734C"><b>help: convert the identifier to snake case: `page_params`</b></font>

<font color="#A2734C"><b>warning</b></font><b>: associated constant `bytes_pre` should have an upper case name</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:310:15
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>310</b></font> <font color="#2A7BDE"><b>| </b></font>        const bytes_pre: [char; 7] = [&apos;&lt;&apos;, &apos;B&apos;, &apos;y&apos;, &apos;t&apos;, &apos;e&apos;, &apos;s&apos;, &apos;&gt;&apos;];
    <font color="#2A7BDE"><b>| </b></font>              <font color="#A2734C"><b>^^^^^^^^^</b></font> <font color="#A2734C"><b>help: convert the identifier to upper case: `BYTES_PRE`</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: `#[warn(non_upper_case_globals)]` on by default

<font color="#A2734C"><b>warning</b></font><b>: associated constant `bytes_sub` should have an upper case name</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:311:15
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>311</b></font> <font color="#2A7BDE"><b>| </b></font>        const bytes_sub: [char; 8] = [&apos;&lt;&apos;, &apos;/&apos;, &apos;B&apos;, &apos;y&apos;, &apos;t&apos;, &apos;e&apos;, &apos;s&apos;, &apos;&gt;&apos;];
    <font color="#2A7BDE"><b>| </b></font>              <font color="#A2734C"><b>^^^^^^^^^</b></font> <font color="#A2734C"><b>help: convert the identifier to upper case: `BYTES_SUB`</b></font>

<font color="#A2734C"><b>warning</b></font><b>: method `convAgreement2Display` should have a snake case name</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>lib.rs:383:12
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>383</b></font> <font color="#2A7BDE"><b>| </b></font>        fn convAgreement2Display(a: &amp;AgreementInfo) -&gt; AgreementInfoDisplay {
    <font color="#2A7BDE"><b>| </b></font>           <font color="#A2734C"><b>^^^^^^^^^^^^^^^^^^^^^</b></font> <font color="#A2734C"><b>help: convert the identifier to snake case: `conv_agreement2_display`</b></font>

<font color="#A2734C"><b>warning</b></font><b>:</b> `polkasign` (lib test) generated 9 warnings (8 duplicates)
<font color="#A2734C"><b>warning</b></font><b>:</b> `polkasign` (lib) generated 8 warnings
</pre>

Lots of warnings for the backend:


<pre>yarn build
<b>yarn run v1.22.5</b>
<font color="#AAAAAA">$ next build &amp;&amp; next export</font>
<font color="#2AA1B3">info</font>  - Loaded env from /home/david/source/web3/evaluation/SubDAO-Network/subdao-polkasign/.env
<font color="#2AA1B3">info</font>  - Using webpack 5. Reason: Enabled by default https://nextjs.org/docs/messages/webpack5
<font color="#2AA1B3">info</font>  - Checking validity of types  
<font color="#A2734C">warn</font>  - The Next.js plugin was not detected in your ESLint configuration. See https://nextjs.org/docs/basic-features/eslint#migrating-existing-config

<font color="#2AA1B3">./src/pages/index.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>
<font color="#A2734C">1</font>:<font color="#A2734C">28</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;useState&apos; is defined but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>

<font color="#2AA1B3">./src/components/account/ConnectWallet.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>
<font color="#A2734C">6</font>:<font color="#A2734C">3</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;className&apos; is defined but never used. Allowed unused args must match /^_/u.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>
<font color="#A2734C">9</font>:<font color="#A2734C">16</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;setAccountStore&apos; is assigned a value but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>
<font color="#A2734C">19</font>:<font color="#A2734C">13</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;allInjected&apos; is assigned a value but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>
<font color="#A2734C">20</font>:<font color="#A2734C">13</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;allAccounts&apos; is assigned a value but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>

<font color="#2AA1B3">./src/components/add-signer/index.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/contracts-list/ContractItem.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/contracts-list/ContractsList.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>
<font color="#A2734C">10</font>:<font color="#A2734C">10</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;isDeposit&apos; is assigned a value but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>

<font color="#2AA1B3">./src/components/header/index.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/main/MainLeft.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/main/MainRight.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/my-contracts/MyContracts.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>
<font color="#A2734C">2</font>:<font color="#A2734C">44</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;Input&apos; is defined but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>

<font color="#2AA1B3">./src/components/new-contract/ReviewSend.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/new-contract/ReviewSendTip.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/new-contract/SignPdf.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>
<font color="#A2734C">13</font>:<font color="#A2734C">9</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;pageInfo&apos; is assigned a value but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>

<font color="#2AA1B3">./src/components/new-contract/ViewPdf.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>

<font color="#2AA1B3">./src/components/new-contract/index.tsx</font>
<font color="#A2734C">1</font>:<font color="#A2734C">1</font>  <font color="#A2734C"><b>Warning</b></font>: Run autofix to sort these imports!  <font color="#5E5C64"><b>simple-import-sort/imports</b></font>
<font color="#A2734C">14</font>:<font color="#A2734C">10</font>  <font color="#A2734C"><b>Warning</b></font>: &apos;client&apos; is defined but never used.  <font color="#5E5C64"><b>@typescript-eslint/no-unused-vars</b></font>
</pre>

Extra work: 

- https://github.com/SubDAO-Network/subDAO-frontend
- https://github.com/SubDAO-Network/polkasign-backend
