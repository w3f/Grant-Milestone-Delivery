# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Deep Account Analytics (Polkadot Data Alliance)](https://github.com/w3f/Grants-Program/blob/master/applications/DeepAccountAnalytics-PolkadotDataAlliance.md)
* **Milestone Number:** 2

**Context**

This Milestone 2 focussed on developing deep analytics datasets on Staking and OpenGov Democracy, and exposing this in Superset dashboards, targeting the ability to answer questions like:
* Staking: Who are the top 10 nominators with the highest APR, and which validators do they have in common?
* OpenGov2: Which accounts have delegated OpenGov votes to an account or to which accounts the account in question has delegated their votes to for each track?

**Deliverables**

The general strategy is to demonstrate the 3 tiered architecture of Deep Account Analytics: doing raw indexing, providing open datasets delivered in Google BigQuery/Analytics Hub, and providing usable front-ends without significant front-end engineering.  

| Number | Deliverable | Specification |  Notes |
| -----: | ----------- | ------------- | --- |
| 0a. | License | GNUv3 - polkaholic + substrate-etl repo  | [GNU GPL v3](https://github.com/colorfulnotion/polkaholic/blob/main/LICENSE) |
| 0b. | Documentation   | Provide README on construction of 1+2+3 | See section below
| 0c. | Manual Testing Guide | Manual testing guide with steps for using the application, with examples including expected inputs and outputs |  See Polkaholic screenshots and URLs
| 1.  | Raw Indexing       | substrate-etl:crypto_polkadot.stakings0   | Published at Analytic-Hub ([Schema](https://github.com/colorfulnotion/polkaholic/blob/main/substrate/schema/substrateetl/stakings.json)).
| 2.  | Deep Indexing      |  substrate-etl:polkadot_analytics.{validators0, nominators0, poolmembers0, nominationpools0} nominationPools and supporting datasets  | Published at Analytic-Hub ([TODO:Query](https://github.com/colorfulnotion/substrate-etl/blob/main/StakingAnalytics.md))
| 3.  | Dashboard Publication | Superset dashboards (Democracy, Staking, NominationPools)  | [Polkadot Staking Home ](https://analytics.polkaholic.io/superset/dashboard/80/) [Polkadot Democracy Home](https://analytics.polkaholic.io/superset/dashboard/75)|

**0b. Documentation**

***1. Raw Indexing***

For Milestone 2 delivery, we indexed additional state changes that can be found at the following pallet and storage:

| State  |  How it's being used |
| :----- | ------ |
| staking.erasTotalStake | Total amount staked at Era N  |   
| staking.erasValidatorReward | Total amount of rewards at Era N (7 Session Delay)  |   
| staking.erasRewardPoints | Return a list of Reward points earned by active validators at Era N (1 Era Delay) |
| staking.erasValidatorPrefs |  Commission Charged by Validator |
| staking.erasStakers | Active Validators -> Nominators Map |
| staking.nominators | Nominator -> Validator Map  |
| nominationPools.bondedPools | Pool Info  |
| nominationPools.rewardPools | Last payout info  |
| nominationPools.poolMembers | Member Staked Amount (aka points) + Unbonding Recs, if any  |
| nominationPools.reversePoolIdLookup | poolID -> stash_ss58 Map  |
| convictionVoting.votingFor | Referendum/Proposal voting behavior + Opengov account delegation |

***2. Deep Indexing: Staking***

An intermediate source table named `stakings0` has been created using the chain state from above.  This table is publicly accessible at [`bigquery-public-data.polkadot_analytics.stakings0`](https://console.cloud.google.com/bigquery?project=substrate-etl&ws=!1m5!1m4!4m3!1ssubstrate-etl!2spolkadot_analytics!3sstaking0).

Additionally, {nominators, validators, poolmembers, nominationpools} tables are publicly accessible in the same analytics-hub:

| Table  |
| :----- |
|[`bigquery-public-data.polkadot_analytics.nominators0`](https://console.cloud.google.com/bigquery?project=substrate-etl&ws=!1m5!1m4!4m3!1ssubstrate-etl!2spolkadot_analytics!3snominators0)   |
|[`bigquery-public-data.polkadot_analytics.validators0`](https://console.cloud.google.com/bigquery?project=substrate-etl&ws=!1m5!1m4!4m3!1ssubstrate-etl!2spolkadot_analytics!3svalidators0)   |
|[`bigquery-public-data.polkadot_analytics.poolmembers0`](https://console.cloud.google.com/bigquery?project=substrate-etl&ws=!1m5!1m4!4m3!1ssubstrate-etl!2spolkadot_analytics!3spoolmembers0)   |
|[`bigquery-public-data.polkadot_analytics.nominationpools0`](https://console.cloud.google.com/bigquery?project=substrate-etl&ws=!1m5!1m4!4m3!1ssubstrate-etl!2spolkadot_analytics!3snominationpools0)   |

The exact queries for deep indexing can be found in the [substrate-etl repository](https://github.com/colorfulnotion/substrate-etl/blob/main/StakingAnalytics.md).

Whereas staking data is quite sizable and demanded considerable effort and BigQuery scans, we found that OpenGov data data was too small to merit use of BigQuery and opted to use mysql instead.  Every hour, we fetch the storage of `convictionVoting.votingFor` and record in 2 tables `voting0` and `delegation0`.

**0c. Manual Testing Guide** & ***3. Dashboard Publication***

For Milestone 2, we have published a list of dashboards hosted at [https://analytics.polkaholic.io](https://analytics.polkaholic.io/dashboard/list/), which is an instance of Apache Superset connected to BigQuery and the Polkaholic mysql backend.


| Sample                                      | Required URL Params | Description                                                                                           |
|---------------------------------------------|---------------------|-------------------------------------------------------------------------------------------------------|
| 80 [Polkadot Staking Home](https://analytics.polkaholic.io/superset/dashboard/80/)                     | None         | Top level dashboard  - all the other dashboards link back to this one |
| 49 [Polkadot Staking Era](https://analytics.polkaholic.io/superset/dashboard/49/?era=1240)             | `era`        | Shows Era-specific info |       
| 67 [Polkadot Staking Validator](https://analytics.polkaholic.io/superset/dashboard/67/?account=12QnCQKZnT77gEoHA1uGqESsCHq4QmwPhuTHgUo4SygBnxbW) | `account`  | Shows validator specific info |
| 71 [Polkadot Staking Nominator](https://analytics.polkaholic.io/superset/dashboard/71/?account=12QnCQKZnT77gEoHA1uGqESsCHq4QmwPhuTHgUo4SygBnxbW) | `account`  | Shows nominator specific info |                                                                                                       |
| 67 [Polkadot Staking Nomination Pool](https://analytics.polkaholic.io/superset/dashboard/76/?nominationpools_id=12) | `nominationpools_id` | Shows nomination pools info  |
| 77 [Polkadot Staking Nomination Pool Member](https://analytics.polkaholic.io/superset/dashboard/77/?account=14d5vDVaq2CWEf1bKeEKgqVwsHgafCf1xrYXvgbrMpXKtj2H) | `account` | Shows nomination pool member info |
| 75 [Polkadot Democracy Home](https://analytics.polkaholic.io/superset/dashboard/75)                    | -                   | Showing summary of activity across OpenGov |
| 74 [Polkadot Democracy - Ref/Proposal](https://analytics.polkaholic.io/superset/dashboard/74/?pollid=219) | `pollid`            | Showing proposal-specific activity                        |
| 72 [Polkadot Democracy - Account](https://analytics.polkaholic.io/superset/dashboard/72/?account=1649c4indT6Dr3W2yVGZeEsTPpqgzAq67VMdQbsYRCTz8qyv) | `account` | Showing account-specific activity, including voting and delegation behavior  |

Users can start from one of the 2 home dashboards [Polkadot Staking Home](https://analytics.polkaholic.io/superset/dashboard/80/) or [Polkadot Democracy Home](https://analytics.polkaholic.io/superset/dashboard/75) and drill into top or recent activity:
* The Staking dashboards enables Polkadot stakers (Nominators, PoolMembers, Validators) to zoom in on different metrics and inspect their staking performance.   
* The Democracy dashboards enables analysis of Referendums/Proposals and voting/delegation activity. [screenshots](https://docs.google.com/document/d/1xQ8MKfgG8z8au5W7ME2sDwbjDy3zOzZndObaK-shyVA/edit)

Details:
* Each of the dashboards have a short description of key elements of the page.  Whereever possible, we integrated the above dashboards with Polkaholic.io, showing "Polkaholic" links within the Superset dashboard.  
* Every staking era and every hour, accounts are tagged with a small number of "labels" (`nominator0`, `validator0`, `poolmember0`, `voter0`), and are along side other tags (e.g. from Merkle Science) in BigTable.
* In addition, we linked Polkaholic.io back to Superset.  This enables users to search by account, and get to the above Superset dashboards without a “Home” page.   Searching for  `5DUV454VvfqeEhnmCNrGh5ciLfqQiUPFdQioXBohttefcUDU` on [polkaholic.io](https://polkaholic.io) takes the user to a url like https://polkaholic.io/account/5DUV454VvfqeEhnmCNrGh5ciLfqQiUPFdQioXBohttefcUDU where clicking on the button "Polkadot Nomination Pool Member" takes the user to the relevant dashboard (77) with the Required URL Params (e.g. `account`) filled in ie [https://analytics.polkaholic.io/superset/dashboard/77/?account=14d5vDVaq2CWEf1bKeEKgqVwsHgafCf1xrYXvgbrMpXKtj2H](https://analytics.polkaholic.io/superset/dashboard/77/?account=14d5vDVaq2CWEf1bKeEKgqVwsHgafCf1xrYXvgbrMpXKtj2H)

This url parameter technique can be used in [staking.polkadot.network](https://staking.polkadot.network), polkadot.js apps and others.

## Followup

Narrowly, for staking and democracy, useful enhancements could be to:
* Integrate with [staking.polkadot.network](https://staking.polkadot.network) using the url parameter scheme.
* Support Kusama as well as Polkadot and compare the 2 ecosystems at a high level for both Staking and Democracy.
* Fetch proposal/referendum metadata from Subsquare API eg https://polkadot.subsquare.io/api/gov2/referendums/187, link to polkassembly and subsquare  
* Fetch the precise snapshot of delegates at the time of confirmation, and show delegation power at that time
* Highlight voting changes (Aye=>Nay, Nay=>Aye) in a manner complementary to polkassembly and subsquare

More broadly, we believe old (ethereum) and new pallets (CoreTime/corejam, assetconversion, contracts, dex) can use the same approach.

We look forward to charting a long-term course with the Web3F and the Polkadot Data Alliance in 2024 to support the broader community.  

## Acknowledgements

Michalis Fragkiadakis of Web3F advised on many of the calculations and provided us with valuable feedback on how to improve, for which we are deeply grateful!
