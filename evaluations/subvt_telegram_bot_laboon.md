# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subvt-telegram-bot.md
- **Milestone:** 1 and 2
- **Kusama Identity:** N/A
- **Previously successfully merged evaluation:** N/A

## Milestone 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/helikon-labs/subvt-backend/blob/main/LICENSE | GNU GPL v3.0. This was specified in the initial application. | 
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/RUN.md | Straightforward, albeit minimal, documentation. |
| 0c. | Testing Guide	|<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/TEST.md  | Automated test suite covering all functionality. Ideally, I'd like to see more edge and failure cases covered, but this would be more of a nice-to-have. |
| 0d. | Article	|<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/DEV_REPORT.md | One article for both M1 and M2. |
| 1.  | SubVT Services Migration |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/subvt-telegram-bot | Works as expected (i.e., has functionality of previous service with new backend). |
| 2.  | Support for all Validators |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/subvt-telegram-bot | Works for non-1KV validators. |
| 3.  | Notification Fixes |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/subvt-telegram-bot | Variety of notifications work. Since this on a live network, I couldn't test them all, but I didn't see any that did not work. |

## Milestone 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|https://github.com/helikon-labs/subvt-backend/blob/main/LICENSE | GNU GPL v3.0. This was specified in the initial application. | 
| 0b. | Documentation |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/RUN.md | Documentation was straightforward albeit minimal. |
| 0c. | Testing Guide	|<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/TEST.md | Automated cargo tests. All pass on my machine. |
| 0d. | Docker	|<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/_docker | I was able to get it work with docker with only minor issues. These were updated and fixed. |
| 0e. | Article	|<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/DEV_REPORT.md | Development report with comparison of initial architecture and final. Rather short. |
| 1.  | Improve account age and optional 1KV Score data |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/subvt-telegram-bot | Shows all relevant information for 1KV validators, and known information for non-1KV validators. Works as expected. |
| 2.  | Implement new notifications |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/subvt-telegram-bot | Payout, validate, and lost nominations work. I could not check a on-chain identity change easily, but looking through the code, I do not see any reason why this would not work if the others do. |
| 3.  | Implement new commands |<ul><li>[x] </li></ul>| https://github.com/helikon-labs/subvt-backend/tree/main/subvt-telegram-bot | `/nominationdetails` and `/payouts` work as expected on both Polkadot and Kusama. |

## General Notes

Some minor compilation issues, but quickly fixed after discussion. Additionally, some features listed under "Future Plans", such as "/network-info" and "/referenda", were also implemented.