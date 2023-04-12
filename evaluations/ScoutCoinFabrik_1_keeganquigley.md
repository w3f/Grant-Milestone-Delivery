# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | https://github.com/CoinFabrik/web3-grant/blob/main/LICENSE | MIT | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | https://github.com/CoinFabrik/web3-grant/blob/main/assets/scout-vulnerabilities-report.pdf | Ok. | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul> | - | - |
| 0d. | Docker | <ul><li>[x] </li></ul> | - | - |
| 0e. | Article | <ul><li>[x] </li></ul> | https://blog.coinfabrik.com/vulnerability-detection-in-ink-programming-language | Ok. |
| **1** | Research | <ul><li>[x] </li></ul> | https://github.com/CoinFabrik/web3-grant/tree/main/curated-list-of-vulnerabilities | Ok. |
| **2** | Development | <ul><li>[x] </li></ul> | https://github.com/CoinFabrik/web3-grant/tree/main/vulnerabilities | Ok. |
| **3** | Development |  <ul><li>[x] </li></ul> | https://github.com/CoinFabrik/web3-grant/tree/main/detectors| Ok. |

# General Notes

I'm no security expert, but as far as I can tell this is some excellent research and I'm super impressed with the quality of the material produced, and I hope the report and repo will be very helpful for ink! devs. The curated list should come in handy for other security researchers as well.

## Detectors

Regarding the detectors, a minor correction for `cargo-fuzz` I believe Step 3 has a typo: `cargo fuzz run fuzz_add_overflows`. The correct command is with dashes instead of underscores `cargo fuzz run fuzz-add-overflows`

[Semgrep](https://github.com/CoinFabrik/web3-grant/tree/main/detectors/semgrep) is pretty cool, especially the fact that the rules are written into yaml files. I was able to run the examples.

Overall this is very useful work! 

Please note: No security audits have been performed as part of this evaluation.
