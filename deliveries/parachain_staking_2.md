# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**  

* **PR Link:** https://github.com/w3f/Grants-Program/pull/389
* **Milestone Number:** 2

| Number | Deliverable | Link |
| ------------- | ------------- | ------------- |
| 0a. | License Apache 2.0 | [License](https://github.com/polkadot-js/apps/blob/master/LICENSE) |
| 1. | Custom Polkadot-JS UI similar to the `pallet-staking` UI | [PR](https://github.com/polkadot-js/apps/pull/6430) |
| 2. | Make a pull request to polkadot-js apps with output | [PR](https://github.com/polkadot-js/apps/pull/6430) |

To review, the [PR to `polkadot-js/apps`](https://github.com/polkadot-js/apps/pull/6430) may be run locally.
1. Clone the PureStake `apps` fork
```
$ git clone https://github.com/PureStake/apps.git
```
2. Check out the branch `jlm-add-parachain-staking-panel`
```
$ git checkout jlm-add-parachain-staking-panel
```
3. Install yarn dependencies
```
$ yarn
```
4. Run locally
```
$ yarn start
```
5. Change the network to `Kusama & Parachains > Moonriver`
6. Go to `Network > Staking`

The `parachain-staking` UI dashboard is modeled after the [`pallet-staking` dashboard](https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fpolkadot.api.onfinality.io%2Fpublic-ws#/staking). Similarly, it displays:
* `collators`: ratio of current active candidates to total selected candidates
* `waiting`: total waiting collator candidates which are not active (and therefore cannot author blocks this round)
* `active / nominators`: ratio of counted (active) nominations to all nominations
* `inflation`: annual inflation rate set in storage

It also contains additional information specific to the `parachain-staking` implementation:
* `% of inflation for parachain rent`: the percent of inflation rewards set aside for future parachain rent
* `% collator commission`: the percent of collator rewards that is taken off the top for the collator before the remaining reward is distributed in proportion to relative stake (for the self bond and all nominations)
* `round`: the time remaining in the current round before the next round starts

The list of collators shows statistics useful for nominators that are choosing and/or reviewing their nominations. For example, `min_contribution` is the minimum nomination a new nominator can make to ensure their stake is counted and rewarded.
