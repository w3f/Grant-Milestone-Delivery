# Evaluation

* **Status:** Accepted
* **PR Link:** [PR #20](https://github.com/w3f/Open-Grants-Program/pull/20/)
* **Milestone:** 1,2,3
* **Kusama Identity:** [CuLw7oYDGTVwnHBidEfuB8eSUujWL9Sb8AqY3khJ352JyfR](https://polkascan.io/kusama/account/CuLw7oYDGTVwnHBidEfuB8eSUujWL9Sb8AqY3khJ352JyfR)
* **Previously successfully merged evaluation:** None yet

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Correct License |<ul><li>[x] </li></ul>|[Apache 2.0](https://github.com/luniehq/lunie/blob/develop/app/LICENSE)| License meets standard requirements.| 
| 1. | Proposals are readable in Lunie |<ul><li>[x] </li></ul>|[GitHub](https://github.com/luniehq/lunie/blob/develop/api/lib/reducers/polkadotV0-reducers.js#L539-L615)| Reviewed relevant section in `polkadotV0-reducers.js` and verified functionality in both the Browser extension and mobile application.| 
| 2. | Voting, Deposits, Time Locking |<ul><li>[x] </li></ul>|[GitHub](https://github.com/luniehq/lunie/blob/develop/app/src/ActionModal/components/ModalVotePolkadot.vue)| Also seems to work as expected.  | 
| 3. | Notifications, Council, Treasury |<ul><li>[x] </li></ul>|[GitHub](https://github.com/luniehq/lunie/blob/36768cfd5ac7acaf29b05e10770fce49ef347450/api/lib/reducers/polkadotV0-reducers.js#L706)| Tested by signing in with my email, received notifications when expected.| 

## General Notes

Misleadingly, the milestone seems to have been overlapped with the deliverable IDs so has been described as `1,2,3`, which I have mirrored. In total,
for all milestones there are three formal deliverables and the standard license requirements. This should be made clearer next time in order to assist 
the evaluation process (particularly for external evaluations). I have simply treated this as if it were one milestone, even though it was described as three.

Based on my testing, the milestones and the associated deliverables have been achieved.

This is my first evaluation, so feedback is definitely appreciated - I am not very familiar with the process.
