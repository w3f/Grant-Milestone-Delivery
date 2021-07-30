# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/parachain-staking.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/PureStake/moonbeam/blob/master/LICENSE) | GPL3, which is according to the contract |
| 0d. | Documentation | <ul><li>[x] </li></ul> | [User-Level Documentation](https://meta5.world/parachain-staking-docs/), [Milestone 1 Documentation](https://meta5.world/parachain-staking-docs/m1.html) | Good documentation, including rust doc support. They explain every delivery very detailed  |
| 1. | Benchmark | <ul><li>[x] </li></ul> | [Benchmarking PR](https://github.com/PureStake/moonbeam/pull/525), [Transaction Weights File](https://github.com/PureStake/moonbeam/blob/master/pallets/parachain-staking/src/weights.rs) | 63 test pass, in general well tested | 
| 2. | Patch SR-Labs Critical Vulnerabilities | <ul><li>[x] </li></ul> | [Patch (1) underflow bug](https://github.com/PureStake/moonbeam/pull/502), [Patch (2) nomination DOS attack vector](https://github.com/PureStake/moonbeam/pull/505) | Fixed |
| 3. | Configurable Inflation | <ul><li>[x] </li></ul> | [PR adding MonetaryGovernanceOrigin to configure Inflation](https://github.com/PureStake/moonbeam/pull/571) | Looks good | 
| 4. | Configurable Parachain Bond Reservation | <ul><li>[x] </li></ul> | [PR adding Configurable Parachain Bond Account + Percent](https://github.com/PureStake/moonbeam/pull/484) | Looks good |

## General Notes

Very good delivery. Clear documentation and well tested.  

**Rust doc warning:**

<pre><font color="#A2734C"><b>warning</b></font><b>: could not parse code block as Rust code</b>
  <font color="#2A7BDE"><b>--&gt; </b></font>/home/david/.cargo/registry/src/github.com-1ecc6299db9ec823/nalgebra-0.21.1/src/base/storage.rs:61:9
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>61</b></font> <font color="#2A7BDE"><b>| </b></font>      /// ```.ignore
   <font color="#2A7BDE"><b>| </b></font> <font color="#A2734C"><b>_________^</b></font>
<font color="#2A7BDE"><b>62</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#A2734C"><b>|</b></font>     /// let lindex = self.linear_index(irow, icol);
<font color="#2A7BDE"><b>63</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#A2734C"><b>|</b></font>     /// assert!(*self.get_unchecked(irow, icol) == *self.get_unchecked_linear(lindex)
<font color="#2A7BDE"><b>64</b></font> <font color="#2A7BDE"><b>| </b></font><font color="#A2734C"><b>|</b></font>     /// ```
   <font color="#2A7BDE"><b>| </b></font><font color="#A2734C"><b>|___________^</b></font>
   <font color="#2A7BDE"><b>|</b></font>
   <font color="#2A7BDE"><b>= </b></font><b>note</b>: error from rustc: this file contains an unclosed delimiter
<font color="#33C7DE"><b>help</b></font>: `ignore` code blocks require valid Rust code for syntax highlighting. Mark blocks that do not contain Rust code as text
   <font color="#2A7BDE"><b>|</b></font>
<font color="#2A7BDE"><b>61</b></font> <font color="#2A7BDE"><b>| </b></font>    /// ```text,.ignore
   <font color="#2A7BDE"><b>| </b></font>        <font color="#33C7DE"><b>^^^^^^^^</b></font>

<font color="#A2734C"><b>warning</b></font><b>: 1 warning emitted</b>
</pre>