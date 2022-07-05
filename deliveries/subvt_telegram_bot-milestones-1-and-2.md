# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform)
has been filled out correctly for this milestone and the delivery is according to the official
[milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/subvt-telegram-bot.md)
* **Milestone Number:** 1 and 2

## Context

**SubVT (Substrate Validator Toolkit) Telegram Bot** is a feature-rich rewrite of the widely-adopted
[1KV Telegram Bot](https://github.com/helikon-labs/polkadot-kusama-1kv-telegram-bot) in Rust to support
all validators of Kusama, Polkadot and possibly more Substrate networks in the future, and is a part of a
larger project, the [SubVT Backend](https://github.com/helikon-labs/subvt-backend/tree/development).

Development has been completed as an over-delivery (please see the amended initial
[proposal](https://github.com/w3f/Grants-Program/blob/master/applications/subvt-telegram-bot.md)) and the bot has been
**live since the 19th of May 2022**, and is available for Kusama at [https://t.me/subvt_kusama_bot](https://t.me/subvt_kusama_bot)
and for Polkadot at [https://t.me/subvt_polkadot_bot](https://t.me/subvt_polkadot_bot).

As of the 30th of June 2022, there are 224 unique validators registered with the Kusama bot, and 99 with the Polkadot bot.
The older 1KV bot was deprecated fully on the 24th of May 2022.

Users of the older 1KV Bot were provided with a `/migrate` command that made possible a smooth migration
from the 1KV Bot to the SubVT Telegram Bot.

Please view the bot's [readme](https://github.com/helikon-labs/subvt-backend/blob/development/subvt-telegram-bot/README.md)
for a complete list of commands notifications.

## Deliverables

ℹ️ All SubVT executables are available as Docker container images in the Helikon Docker
[repositories](https://hub.docker.com/u/helikon). You may skip the building as described in
[BUILD.md](https://github.com/helikon-labs/subvt-backend/blob/development/BUILD.md) and run the system directly
as described in [RUN.md](https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/RUN.md).

| Number | Deliverable                       | Link                                                                                                                                 | Notes                                                                                           |
|--------|-----------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------|
| 0.     | License                           | [GNU GPL v3.0](https://github.com/helikon-labs/subvt-backend/blob/main/LICENSE)                                                      |                                                                                                 |
| 1.     | SubVT Kusama Bot                  | [https://t.me/subvt_kusama_bot](https://t.me/subvt_kusama_bot)                                                                       | Live Kusama bot.                                                                                |
| 2.     | SubVT Polkadot Bot                | [https://t.me/subvt_polkadot_bot](https://t.me/subvt_polkadot_bot)                                                                   | Live Polkadot bot.                                                                              |
| 3.     | Source Code                       | [GitHub](https://github.com/helikon-labs/subvt-backend/tree/development/subvt-telegram-bot)                                          | Bot source code, part of the [SubVT repository](https://github.com/helikon-labs/subvt-backend). |
| 4.     | System Architecture Documentation | [01-subvt_system_architecture.md](https://github.com/helikon-labs/subvt/blob/main/document/software/01-subvt_system_architecture.md) | SubVT backend architecture diagram and explanation of components.                               |
| 5.     | Building Guide                    | [BUILD.md](https://github.com/helikon-labs/subvt-backend/blob/development/BUILD.md)                                                  | Document that explains the build process.                                                       |
| 6.     | Running Guide                     | [RUN.md](https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/RUN.md)                                          | Explains how to run the SubVT Telegram Bot along with the complete SubVT backend.               |
| 7.     | Testing Guide                     | [TEST.md](https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/TEST.md)                                        | Explains how to run the software tests for the bot.                                             |
| 8.     | End-User Testing Guide            | [END_USER_TEST.md](https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/END_USER_TEST.md)                      | Explains how to do the end-user tests for the bot.                                              |
| 9.     | Development Report (Article)      | [DEV_REPORT.md](https://github.com/helikon-labs/subvt-backend/blob/main/subvt-telegram-bot/DEV_REPORT.md)                            | Development retrospective.                                                                      |
