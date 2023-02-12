# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/PrivaDEX_aggregator.md
* **Milestone Number:** 4

**Context**
Consolidated backend API and swap UI: This component is the web interface for the end user (retail DEX trader).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License | https://github.com/kapilsinha/privadex-swap-ui/blob/main/LICENSE |
| 0b. | Documentation | https://github.com/kapilsinha/privadex-swap-ui/blob/main/README.md | 
| 0c. | Testing and Testing Guide | https://github.com/kapilsinha/privadex-swap-ui/blob/main/README.md | The specified README indicates how to install the dependencies and start the UI.
| 0d. | Docker | N/A | Specified in the grant application that Docker is not applicable for this milestone and will be skipped
| 0e. | Article | Skip | I am reordering milestone 3 (not yet submitted) to be after milestone 4. I will publish the article alongside that submission.
| 1. | S3 API for executor | https://github.com/kapilsinha/privadex/blob/milestone_submission_1_2/dex_aggregator/common/src/utils/s3_api.rs |
| 2. | Executor module scheduler | https://github.com/kapilsinha/privadex-swap-ui/blob/phat-contract-driver/drive_privadex_phat_contract.js |
| 3. | QuoteGetter API | https://github.com/kapilsinha/privadex-swap-ui/blob/main/src/phat_api/privadex_phat_contract_api.js | See the `quote(...)` function in this file.
| 4. | SwapRequest API | https://github.com/kapilsinha/privadex-swap-ui/blob/main/src/phat_api/privadex_phat_contract_api.js | See the `startSwap(...)` function in this file.
| 5. | GetSupportedChainTokens API | https://github.com/kapilsinha/privadex-swap-ui/blob/main/src/components/Modal/token_list.json | This file is largely auto-generated from [this script](https://github.com/kapilsinha/privadex-swap-ui/blob/main/scripts/generate_token_list.py) but short names are manually modified for clarity (e.g. specify 'Wormhole' for external USDC).
| 6. | Swap UI | https://github.com/kapilsinha/privadex-swap-ui/tree/main/src | The app is live at https://app.privadex.xyz

**Additional Information**
The UI is live at https://app.privadex.xyz and a video demo is at https://www.youtube.com/watch?v=QA5429uEZbw .