# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.
>
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Deep Account Analytics (Polkadot Data Alliance)](https://github.com/w3f/Grants-Program/blob/master/applications/DeepAccountAnalytics-PolkadotDataAlliance.md)
* **Milestone Number:** 1

**Context** (optional)

**Deliverables**

Milestone 1 is in response to the RFP [Data Analysis Tools for Substrate-based Blockchains](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/data_analysis_tools.md), which aims to address *deep account analytics* questions such as:

* Which transactions/accounts were responsible for the reserved balance in an account?
* What modules currently depend on consumers, providers, and sufficients reference counters for a specific account, and which transactions introduced/removed those references?
* What are the pallets responsible for reserves/holds and locks/freezes on an account?

These analytics questions are termed "deep" because they require significant "deep indexing," beyond the scope of "raw indexing" as indexers. Such an undertaking is not possible without an intricate understanding of Substrate.

Instead of generating a long list of feature requests for block explorers or specialized UIs, our approach is to factorizes the solutions into THREE TIERS within a genuinely collaborative Polkadot Data Alliance:

* Tier 1. raw indexing - raw indexing of decoded blocks (blocks, extrinsics/calls, events, traces)
* Tier 2. deep indexing - post-processing of raw indexed data
* Tier 3. dashboards - situating the above with BI tools -- which that does not require deep knowledge of the structure of the indexed data


| Number | Deliverable | Specification |  Notes |
| -----: | ----------- | ------------- | --- |
| 0a. | License | GNUv3 - polkaholic + substrate-etl repo  | [GNU GPL v3](https://github.com/colorfulnotion/polkaholic/blob/main/LICENSE) |
| 0b. | Documentation   | Provide README on construction of 1+2+3 | See section below
| 0c. | Manual Testing Guide | Manual testing guide with steps for using the application, with examples including expected inputs and outputs |  See Polkaholic screenshots and URLs
| 1.  | Raw Indexing       | substrate-etl:crypto_polkadot.traces0   | Published at Analytic-Hub ([Schema](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/schema/substrateetl/traces.json)).
| 2.  | Deep Indexing      |  substrate-etl:crypto_polkadot.tracerreference0 and supporting datasets  | Published at Analytic-Hub ([Query](https://github.com/colorfulnotion/substrate-etl/blob/main/AccountAnalytics.md))
| 3.  | Dashboard Publication | Superset dashboard tab: "Account Reference"	  | [Deep Account  Analytic Dashboard](https://analytics.polkaholic.io/superset/dashboard/6115defb-f3d1-4376-9ee6-0f6e37b5619e/) |

In summary, milestone1 has delivered raw T1 indexing on traces, T2 deep indexing on account references, and a T3 dashboard on Account References hosted at polkaholic analytics website.

**0b. Documentation**

***1. Raw Indexing for Traces***

Colorful Notion indexes [Polkadot](https://polkaholic.io/blocks/polkadot) through its Polkaholic.io block explorer. Specifically, the process involves:

  * **Step 0 - Acquiring Traces:** Raw traces are initially obtained via the `state_traceBlock` RPC call.
  * **Step 1 - Preliminary Indexing:** Preliminary indexing occurs in [`indexer.js`](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/indexer.js)'s `parse_trace_as_auto` method. This method auto-decodes raw traces' [key, value] pairs into human-readable traces.
  * **Step 2 - Decoration:** Building on the autoTrace from Step 1, [`indexer.js`](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/indexer.js)'s `parse_trace_from_auto` performs additional transformations by extracting and decorating traces with custom values.

Using System:Account trace as example,  At the end of step2, a raw trace of (k,v) `0x26aa394eea5630e07c48ae0c9558cef7b99d880ec681799c0cf30e8886371da91abff18703296e05d28e0acf4ad092a098dddc2627f6117cd1238850bda73c62aa1684b2497c5815f311dad23279b327, 0x01010000000400000001000000000000006a78393f6800000000000000000000000000000000000000000000000000000000e40b5402000000000000000000000000000000000000000000000000000080` has been "raw indexed" into:
```
{
  trace_id: '17751768-723',
  section: 'System',
  storage: 'Account',
  pk_extra: '["14TSBiABUeR8Z5zgEkErb46WGcUyvAjTGJGMsrCxJbPmUJuB"]',
  pv: '{"nonce":1,"consumers":4,"providers":1,"sufficients":0,"data":{"free":447737329770,"reserved":0,"frozen":10000000000,"flags":"0x80000000000000000000000000000000"}}',
  address_ss58: '14TSBiABUeR8Z5zgEkErb46WGcUyvAjTGJGMsrCxJbPmUJuB',
  address_pubkey: '0x98dddc2627f6117cd1238850bda73c62aa1684b2497c5815f311dad23279b327',
  flags: '170141183460469231731687303715884105728',
  price_usd: 3.798209823287249,
  free: 44.773732977,
  free_raw: '447737329770',
  free_usd: 170.06003241848165,
  reserved: 0,
  reserved_raw: '0',
  reserved_usd: 0,
  frozen: 1,
  frozen_raw: '10000000000',
  frozen_usd: 3.798209823287249,
  block_number: 17751768,
  ts: 1697487336,
  block_hash: '0xe84afd68f73fa9a03f37c8d3f2f3391260298a832f22311450824ed837d37f31',
  relay_chain: 'polkadot',
  para_id: '0',
  id: 'polkadot',
  chain_name: 'Polkadot',
  extrinsic_id: '17751768-2'
}
```

This data is then loaded into the `substrate-etl:crypto_polkadot.traces0` table in BigQuery. The entire dataset has been published to Google's Analytic-Hub [Link TODO](TODO) and has been publicly accessible since May 2023.

***2. Deep Indexing***

To address the deep account reference issues outlined in the [RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/data_analysis_tools.md), an intermediate source table named `tracereference0` has been created. This table is publicly accessible at [TODO: `bigquery-public-data.crypto_polkadot.tracereference0`](TODO).

For questions related to changes in {providers, consumers, sufficients}, the `accountreference0` table is provided and is publicly accessible at [TODO: `bigquery-public-data.crypto_polkadot.accountreference0`](TODO).

For questions concerning changes in {frozen, reserved}, the `reservereference0` table is provided and is publicly accessible at [TODO: `bigquery-public-data.crypto_polkadot.reservereference0`](TODO).

The exact queries for deep indexing can be found in the [substrate-etl repository](https://github.com/colorfulnotion/substrate-etl/blob/main/AccountAnalytics.md).

***3. Dashboard Publication***

For Milestone 1, we have built an [Account Reference Dashboard](https://analytics.polkaholic.io/superset/dashboard/6115defb-f3d1-4376-9ee6-0f6e37b5619e/) hosted on the Polkaholic Analytics website.

The dashboard enables developers to detect changes in account references and balance references. It offers additional filters, such as SS58, extrinsic section, and extrinsic method, to zoom in on specific changes.

![Dashboard UI](https://storage.googleapis.com/cdn.polkaholic.io/deepaccountanalytics-m1/dashboard_ui.png)

**0c. Manual Testing Guide**

To demonstrate how to use the dashboard, we'll answer the following questions with examples:

Q1: Which transactions/accounts were responsible for the reserved balance in an account?

**A:** Let's focus on the Balance Reference Chart. By selecting **Balance Reference Change Type** -> **reserved** -> **APPLY FILTER** on the left panel, we can see a list of extrinsics affecting the reserved balances. For instance, [17767377-2](https://polkaholic.io/tx/0x82fe6e0014c444b3c1a1554ec0368805184bb23d7fdf88d02516e418f2dc8f9a) and [17766629-2](https://polkaholic.io/tx/0xfcaf9c322c721e479b188ae93f69e0ba971ecdad030374448c97b259af20e1c6) show that reserved balances are affected by `identity:setIdentity` and `referenda:placeDecisionDeposit` extrinsic calls.

![Dashboard UI](https://storage.googleapis.com/cdn.polkaholic.io/deepaccountanalytics-m1/dashboard_reserved.png)

Q2: What modules currently depend on consumers, providers, and sufficients reference counters for a specific account, and which transactions introduced/removed those references?

**A:** Similarly, we can examine the Account Reference Chart. By selecting **Account Reference Change Type** on the left panel, we see that changes to providers are primarily introduced by the *balances* module, whereas changes to consumers are mainly affected by the *staking* module.

![Dashboard UI](https://storage.googleapis.com/cdn.polkaholic.io/deepaccountanalytics-m1/dashboard_consumer_change.png)

![Dashboard UI](https://storage.googleapis.com/cdn.polkaholic.io/deepaccountanalytics-m1/dashboard_provider_change.png)


Q3: What are the pallets responsible for reserves/holds and locks/freezes on an account?

**A:** One way to answer this question is by querying the deep indexing table `bigquery-public-data.crypto_polkadot.reservereference0`:
```
SELECT ext_section, ext_method, change_type, count(*) cnt  FROM `bigquery-public-data.crypto_polkadot.reservereference0` group by ext_section, ext_method, change_type order by cnt  desc LIMIT 1000
```
![Dashboard UI](https://storage.googleapis.com/cdn.polkaholic.io/deepaccountanalytics-m1/bq_deep_table.png)

This shows that the *staking* and *nominationPools* pallets are primarily responsible for reserves/holds, whereas the *proxy* and *multisig* pallets are mainly responsible for locks/freezes.

Similarly, we can derive similar observation from the `Balance Reference Change Tally` chart:

![Dashboard UI](https://storage.googleapis.com/cdn.polkaholic.io/deepaccountanalytics-m1/reference_change_tally.png)

**Additional Information**

Determining which modules or pallets are responsible for specific changes can be challenging, as trace records don't have a direct causal relationship. However, our deep analytics tool enables developers to narrow down issues to specific extrinsic IDs. Developers can then pinpoint the changes attributed to that extrinsic and investigate further.
