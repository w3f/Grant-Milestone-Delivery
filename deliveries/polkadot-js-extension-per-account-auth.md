# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [polkadot-js-extension-per-account-auth.md](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-js-extension-per-account-auth.md)
* **Milestone Number:** 1

**Context** (optional)

**Deliverables**
A pull request with the deliverable has been submitted, reviewed, approved and merged in the `master` branch of the [polkadot-js extension repo](https://github.com/polkadot-js/extension). The PR can be found [here](https://github.com/polkadot-js/extension/pull/1068).

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0b. | Documentation | [PR](https://github.com/polkadot-js/extension/pull/1068) | Inline documentation was provided along with the code for reviewer to understand any non ovious decision |
| 0e. | Article | <ul><li>[ ] </li></ul>| | Article is WIP, expected to be published next week (hopefully)|
| 1. | new approval screen |[PR](https://github.com/polkadot-js/extension/pull/1068)| Users can see all their accounts, check which one they want to share with the website, and optionnaly select all accounts at once.| 
| 2. | new approval back-end |[PR](https://github.com/polkadot-js/extension/pull/1068)| The old system of whitelist was removed and a new system of authorization per website per account was implemented. Note that the account visibility feature (with the eye) was kept untouched as previously discussed.| 
| 3. | website approval enhancement | [PR](https://github.com/polkadot-js/extension/pull/1068) | The parameter screen "Manage Website Access" wasenhanced and users can select per website what accounts are shared with each website. The account selection component was re-used here so as to reduce maintenance hurdle. |
| 4. | Test implementation | [PR](https://github.com/polkadot-js/extension/pull/1068) | A suite of test has been implemented so as to verify that only the selected accounts are passed to Dapps, and that the invisible accounts aren't displayed in the selection |

**Additional Information**

A video présentation was provided in the first post of the pull request to demo the new authorization flow as well as the flow to amend the list of shared accounts per website.
