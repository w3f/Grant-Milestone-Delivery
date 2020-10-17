# Evaluation

* **Acceptance:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/20
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0 | Apache | <ul><li>[x] </li></ul>| [app](https://github.com/luniehq/lunie/blob/develop/app/LICENSE), [extension](https://github.com/luniehq/lunie/blob/develop/extension/LICENSE), [api](https://github.com/luniehq/lunie/blob/develop/api/LICENSE) | The extension and api folder initially had no license, but it was added. 
| 1. | Proposals are readable in Lunie | <ul><li>[x] </li></ul>|  [(API) Polkadot + Kusama Democracy, Referendum, Treasury](https://github.com/luniehq/lunie/blob/develop/api/lib/reducers/polkadotV0-reducers.js#L539-L615), [Kusama Governance UI](https://app.lunie.io/kusama/proposals), [Polkadot Governance UI](https://app.lunie.io/polkadot/proposals) | Browser: show list of proposals, but there is no way to create a proposal. Although it says "There are currently no governance proposals to display. Click the 'Create Proposal' button to submit the first network proposal!" 
| 2. | Voting, Deposits, Time Locking | <ul><li>[x] </li></ul>| [Polkadot + Kusama Voting](https://github.com/luniehq/lunie/blob/develop/app/src/ActionModal/components/ModalVotePolkadot.vue)|  Voting works and users have the ability to use time lock voting. For Time Locking on polkadot, the UI shows a black number on a black background for the selected parameter 
| 3. | Notifications, Council, Treasury | <ul><li>[x] </li></ul>| [Council Members](https://github.com/luniehq/lunie/blob/36768cfd5ac7acaf29b05e10770fce49ef347450/api/lib/reducers/polkadotV0-reducers.js#L706) |  When you use not your default browser to sign up for notifications, you get an error message when you just click the magic link. 

## General Notes

The requirements of the grant are fulfilled. Snyk didn’t find any security issues. However, I think there is still room to improve the overall user experience inside the browser as well as on mobile devices. 