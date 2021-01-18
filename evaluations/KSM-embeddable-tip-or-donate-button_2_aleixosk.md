# Evaluation


* **Status:** In Progress
* **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/64](https://github.com/w3f/Open-Grants-Program/pull/64)
* **Milestone:** 2
* **Kusama Identity:** [EdAnXzJGJcfNATWahgMgewkSA84nGHZwANpVzGVXtDYetsw](https://polkascan.io/kusama/account/EdAnXzJGJcfNATWahgMgewkSA84nGHZwANpVzGVXtDYetsw) (no identity yet)
* **Previously successfully merged evaluation:** none

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Propose tip |<ul><li>[ ] </li></ul>|[GitHub](https://github.com/Shard-Labs/kusama-tips-widget/tree/e2e1629ba77449c4141d5a7c1374cbd3874ba623)| Size of bond should be displayed to users |
| 2. | Donate directly |<ul><li>[x] </li></ul>|[GitHub](https://github.com/Shard-Labs/kusama-tips-widget/tree/e2e1629ba77449c4141d5a7c1374cbd3874ba623)| |
| 3. | Testing |<ul><li>[x] </li></ul>|- | | 
| 4. | Article on Medium |<ul><li>[x] </li></ul>|[Article](https://medium.com/shard-labs/tipping-websites-in-kusama-tokens-ksm-kusama-tipping-widget-c13360b42111)| Please remember to update article if changes suggested in milestone 1 evaluation are implemented |

## General Notes

Deliverables 1+2 function as intended. Wasn't able to test tipping as a Council member for obvious reasons. However, I see that the explanatory text regarding the bond and finder's fee is also displayed in this case, though both don't apply to tipper-initiated tips. Instead, only the currently first and last sentences should be displayed.

Apart from that, currently no information is displayed to the user as to how large the bond required to propose a tip is (not even on the Wiki, I will fix that later). This should be communicated to the user as stipulated in the original [application](https://github.com/w3f/Open-Grants-Program/blob/master/applications/KSM-embeddable-tip-or-donate-button.md). The bond is currently set to 166666666666 Planck deposit base plus 1666666666 Planck per byte in the reason string. This can be calculated and displayed analogously to the fee.

Lastly, a useful and easy to implement feature would be to disable the donate (and propose tip) button when the entered amount surpasses the available balance. However, this was not mentioned in the proposal, so it is just a suggestion from my side. Let me know if you can implement this. The button should also be disabled and the fee calculation hidden when previously entered input is erased, and in the tipper-initiated case, it should only become active when both fields have been filled.

Please also implement unit testing and document the code as mentioned in my comments to the pull request of this evaluation.