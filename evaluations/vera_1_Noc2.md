# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/vera_defi.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [Readme](https://github.com/veradefi/defi#license), [Ambrosia LICENSE](https://github.com/veradefi/ambrosia/blob/main/LICENSE), [veradefi LICENSE](https://github.com/veradefi/defi/blob/master/LICENSE) | Initially no license file, but it was added.  |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Docs](https://docs.vera.financial/) |   |
| 1. | NFT Lending |  <ul><li>[x] </li></ul> | [lendingmanager](https://github.com/veradefi/defi/tree/master/lendingmanager) | Compiles, unused variables. The functionality is implemented according to the contract. 
 | 
| 2. | ExchangeManager |  <ul><li>[x] </li></ul> | [exchangemanager](https://github.com/veradefi/defi/tree/master/exchangemanager) | Compiles, no unit tests, unused variable. The functionality is implemented according to the contract. 
  |
| 3. | UI/Design |  <ul><li>[x] </li></ul> | [figma 1](https://www.figma.com/file/oZOJk9ujxFZ4Ip1To7mWDP/Vera-web-app-UI_v1?node-id=0%3A1), [figma 2](https://www.figma.com/proto/ien0b4twQ5nygfCy7AYokO/Vera-Real-Estate?node-id=325%3A0&scaling=min-zoom&page-id=218%3A0), [video](https://drive.google.com/file/d/16sUVt-wvYdWAUsfupGVtnzWDOvYAbio6/view) | Most of the figma design pages seems to be unrelated to the wireframe https://balsamiq.cloud/sa6mpd1/pvn6rks/r5D27  (for example: https://www.figma.com/proto/ien0b4twQ5nygfCy7AYokO/Vera-Real-Estate?node-id=223%3A0&scaling=min-zoom&page-id=218%3A0) and none of them shows polkadot.js. However the UI is already live, so they finished the design work: http://beta.vera.financial/  |
| 4. | User Interface |  <ul><li>[x] </li></ul> | [UI](https://github.com/veradefi/ambrosia), [live version](http://beta.vera.financial) | Compiled with warnings. |
| 5. | Docker | <ul><li>[x] </li></ul> | [docker](https://github.com/veradefi/ambrosia/blob/main/docker-compose.yml) | Works |  
| 6. | Article |  <ul><li>[x] </li></ul> | [Docs](https://docs.vera.financial/) | Only a link to the docs, not an article, but it includes a tutorial according to the requirements of the contract. |

## General Notes

The delivery is according to the contract, but the code isn’t very clean and the documentation had some issues initially. Also it would be nice if the team integrates more unit tests. However, given the size of the milestone the UI looks quite good and is more than just an initial POC plus a design draft.  

**Notes 12.07.21:**

**exchangemanager$ cargo test**

<pre><font color="#F66151"><b>error[E0554]</b></font><b>: `#![feature]` may not be used on the stable release channel</b>
 <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/.cargo/registry/src/github.com-1ecc6299db9ec823/array-init-1.0.0/src/lib.rs:2:41
  <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>2</b></font> <font color="#2A7BDE"><b>| </b></font>#![cfg_attr(feature = &quot;const-generics&quot;, feature(const_generics))]
  <font color="#2A7BDE"><b>| </b></font>                                        <font color="#F66151"><b>^^^^^^^^^^^^^^^^^^^^^^^</b></font>

<font color="#F66151"><b>error</b></font><b>: aborting due to previous error</b>

<b>For more information about this error, try `rustc --explain E0554`.</b>
<font color="#C01C28"><b>error</b></font><b>:</b> could not compile `array-init`

To learn more, run the command again with --verbose.
<font color="#A2734C"><b>warning</b></font><b>:</b> build failed, waiting for other jobs to finish...
<font color="#C01C28"><b>error</b></font><b>:</b> build failed
</pre>

**lendingmanager$ cargo test**


<pre><font color="#F66151"><b>error[E0412]</b></font><b>: cannot find type `StorageHashMap` in this scope</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/source/web3/evaluation/vera/defi/erc721/lib.rs:375:20
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>375</b></font> <font color="#2A7BDE"><b>| </b></font>        hmap: &amp;mut StorageHashMap&lt;AccountId, u32&gt;,
    <font color="#2A7BDE"><b>| </b></font>                   <font color="#F66151"><b>^^^^^^^^^^^^^^</b></font> <font color="#F66151"><b>not found in this scope</b></font>

<font color="#F66151"><b>error[E0412]</b></font><b>: cannot find type `Entry` in this scope</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/source/web3/evaluation/vera/defi/erc721/lib.rs:384:35
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>384</b></font> <font color="#2A7BDE"><b>| </b></font>    fn increase_counter_of(entry: Entry&lt;AccountId, u32&gt;) {
    <font color="#2A7BDE"><b>| </b></font>                                  <font color="#F66151"><b>^^^^^</b></font> <font color="#F66151"><b>not found in this scope</b></font>
    <font color="#2A7BDE"><b>|</b></font>
<font color="#33C7DE"><b>help</b></font>: consider importing one of these items
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>26</b></font>  <font color="#2A7BDE"><b>| </b></font>    use ink_storage::collections::hashmap::Entry;
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>26</b></font>  <font color="#2A7BDE"><b>| </b></font>    use ink_storage::collections::stash::Entry;
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>26</b></font>  <font color="#2A7BDE"><b>| </b></font>    use ink_storage::lazy::lazy_hmap::Entry;
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>26</b></font>  <font color="#2A7BDE"><b>| </b></font>    use scale::alloc::collections::btree_map::Entry;
    <font color="#2A7BDE"><b>|</b></font>
      and 5 other candidates

<font color="#F66151"><b>error[E0599]</b></font><b>: the method `fire` exists for struct `CallBuilder&lt;DefaultEnvironment, Set&lt;ink_env::AccountId&gt;, Unset&lt;u64&gt;, Unset&lt;u128&gt;, Set&lt;ExecutionInput&lt;ArgumentList&lt;ink_env::call::utils::Argument&lt;u128&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ArgumentListEnd, ArgumentListEnd&gt;&gt;&gt;&gt;&gt;, Set&lt;ReturnType&lt;std::result::Result&lt;(), erc20::Error&gt;&gt;&gt;&gt;`, but its trait bounds were not satisfied</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/source/web3/evaluation/vera/defi/erc20/lib.rs:114:9
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>114</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>/</b></font>         /// Transfers `value` amount of tokens from the caller&apos;s account to account `to`.
<font color="#2A7BDE"><b>115</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         ///
<font color="#2A7BDE"><b>116</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         /// On success a `Transfer` event is emitted.
<font color="#2A7BDE"><b>117</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         ///
<font color="#2A7BDE"><b>...</b></font>   <font color="#F66151"><b>|</b></font>
<font color="#2A7BDE"><b>125</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>             self.transfer_from_to(from, to, value)
<font color="#2A7BDE"><b>126</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         }
    <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|_________^</b></font> <font color="#F66151"><b>method cannot be called on `CallBuilder&lt;DefaultEnvironment, Set&lt;ink_env::AccountId&gt;, Unset&lt;u64&gt;, Unset&lt;u128&gt;, Set&lt;ExecutionInput&lt;ArgumentList&lt;ink_env::call::utils::Argument&lt;u128&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ArgumentListEnd, ArgumentListEnd&gt;&gt;&gt;&gt;&gt;, Set&lt;ReturnType&lt;std::result::Result&lt;(), erc20::Error&gt;&gt;&gt;&gt;` due to unsatisfied trait bounds</b></font>
    <font color="#2A7BDE"><b>| </b></font>
   <font color="#2A7BDE"><b>::: </b></font>/home/david/.rustup/toolchains/nightly-2021-03-16-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/result.rs:241:1
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>241</b></font> <font color="#2A7BDE"><b>| </b></font>  pub enum Result&lt;T, E&gt; {
    <font color="#2A7BDE"><b>| </b></font>  <font color="#2A7BDE"><b>---------------------</b></font> <font color="#2A7BDE"><b>doesn&apos;t satisfy `_: erc20::_::_parity_scale_codec::Decode`</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: the following trait bounds were not satisfied:
            `std::result::Result&lt;(), erc20::Error&gt;: erc20::_::_parity_scale_codec::Decode`

<font color="#F66151"><b>error[E0599]</b></font><b>: the method `fire` exists for struct `CallBuilder&lt;DefaultEnvironment, Set&lt;ink_env::AccountId&gt;, Unset&lt;u64&gt;, Unset&lt;u128&gt;, Set&lt;ExecutionInput&lt;ArgumentList&lt;ink_env::call::utils::Argument&lt;u128&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ArgumentListEnd, ArgumentListEnd&gt;&gt;&gt;&gt;&gt;, Set&lt;ReturnType&lt;std::result::Result&lt;(), erc20::Error&gt;&gt;&gt;&gt;`, but its trait bounds were not satisfied</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/source/web3/evaluation/vera/defi/erc20/lib.rs:128:9
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>128</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>/</b></font>         /// Allows `spender` to withdraw from the caller&apos;s account multiple times, up to
<font color="#2A7BDE"><b>129</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         /// the `value` amount.
<font color="#2A7BDE"><b>130</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         ///
<font color="#2A7BDE"><b>131</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         /// If this function is called again it overwrites the current allowance with `value`.
<font color="#2A7BDE"><b>...</b></font>   <font color="#F66151"><b>|</b></font>
<font color="#2A7BDE"><b>143</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>             Ok(())
<font color="#2A7BDE"><b>144</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         }
    <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|_________^</b></font> <font color="#F66151"><b>method cannot be called on `CallBuilder&lt;DefaultEnvironment, Set&lt;ink_env::AccountId&gt;, Unset&lt;u64&gt;, Unset&lt;u128&gt;, Set&lt;ExecutionInput&lt;ArgumentList&lt;ink_env::call::utils::Argument&lt;u128&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ArgumentListEnd, ArgumentListEnd&gt;&gt;&gt;&gt;&gt;, Set&lt;ReturnType&lt;std::result::Result&lt;(), erc20::Error&gt;&gt;&gt;&gt;` due to unsatisfied trait bounds</b></font>
    <font color="#2A7BDE"><b>| </b></font>
   <font color="#2A7BDE"><b>::: </b></font>/home/david/.rustup/toolchains/nightly-2021-03-16-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/result.rs:241:1
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>241</b></font> <font color="#2A7BDE"><b>| </b></font>  pub enum Result&lt;T, E&gt; {
    <font color="#2A7BDE"><b>| </b></font>  <font color="#2A7BDE"><b>---------------------</b></font> <font color="#2A7BDE"><b>doesn&apos;t satisfy `_: erc20::_::_parity_scale_codec::Decode`</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: the following trait bounds were not satisfied:
            `std::result::Result&lt;(), erc20::Error&gt;: erc20::_::_parity_scale_codec::Decode`

<font color="#F66151"><b>error[E0599]</b></font><b>: the method `fire` exists for struct `CallBuilder&lt;DefaultEnvironment, Set&lt;ink_env::AccountId&gt;, Unset&lt;u64&gt;, Unset&lt;u128&gt;, Set&lt;ExecutionInput&lt;ArgumentList&lt;ink_env::call::utils::Argument&lt;u128&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ArgumentListEnd, ArgumentListEnd&gt;&gt;&gt;&gt;&gt;&gt;, Set&lt;ReturnType&lt;std::result::Result&lt;(), erc20::Error&gt;&gt;&gt;&gt;`, but its trait bounds were not satisfied</b>
   <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/source/web3/evaluation/vera/defi/erc20/lib.rs:146:9
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>146</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>/</b></font>         /// Transfers `value` tokens on the behalf of `from` to the account `to`.
<font color="#2A7BDE"><b>147</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         ///
<font color="#2A7BDE"><b>148</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         /// This can be used to allow a contract to transfer tokens on ones behalf and/or
<font color="#2A7BDE"><b>149</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         /// to charge fees in sub-currencies, for example.
<font color="#2A7BDE"><b>...</b></font>   <font color="#F66151"><b>|</b></font>
<font color="#2A7BDE"><b>174</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>             Ok(())
<font color="#2A7BDE"><b>175</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|</b></font>         }
    <font color="#2A7BDE"><b>| </b></font><font color="#F66151"><b>|_________^</b></font> <font color="#F66151"><b>method cannot be called on `CallBuilder&lt;DefaultEnvironment, Set&lt;ink_env::AccountId&gt;, Unset&lt;u64&gt;, Unset&lt;u128&gt;, Set&lt;ExecutionInput&lt;ArgumentList&lt;ink_env::call::utils::Argument&lt;u128&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ink_env::call::utils::Argument&lt;ink_env::AccountId&gt;, ArgumentList&lt;ArgumentListEnd, ArgumentListEnd&gt;&gt;&gt;&gt;&gt;&gt;, Set&lt;ReturnType&lt;std::result::Result&lt;(), erc20::Error&gt;&gt;&gt;&gt;` due to unsatisfied trait bounds</b></font>
    <font color="#2A7BDE"><b>| </b></font>
   <font color="#2A7BDE"><b>::: </b></font>/home/david/.rustup/toolchains/nightly-2021-03-16-x86_64-unknown-linux-gnu/lib/rustlib/src/rust/library/core/src/result.rs:241:1
    <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>241</b></font> <font color="#2A7BDE"><b>| </b></font>  pub enum Result&lt;T, E&gt; {
    <font color="#2A7BDE"><b>| </b></font>  <font color="#2A7BDE"><b>---------------------</b></font> <font color="#2A7BDE"><b>doesn&apos;t satisfy `_: erc20::_::_parity_scale_codec::Decode`</b></font>
    <font color="#2A7BDE"><b>|</b></font>
    <font color="#2A7BDE"><b>= </b></font><b>note</b>: the following trait bounds were not satisfied:
            `std::result::Result&lt;(), erc20::Error&gt;: erc20::_::_parity_scale_codec::Decode`

<font color="#F66151"><b>error</b></font><b>: aborting due to 3 previous errors</b>

<b>For more information about this error, try `rustc --explain E0599`.</b>
<font color="#C01C28"><b>error</b></font><b>:</b> could not compile `erc20`

To learn more, run the command again with --verbose.
<font color="#A2734C"><b>warning</b></font><b>:</b> build failed, waiting for other jobs to finish...
<font color="#F66151"><b>error</b></font><b>: aborting due to 2 previous errors</b>

<b>For more information about this error, try `rustc --explain E0412`.</b>
<font color="#C01C28"><b>error</b></font><b>:</b> build failed
</pre>