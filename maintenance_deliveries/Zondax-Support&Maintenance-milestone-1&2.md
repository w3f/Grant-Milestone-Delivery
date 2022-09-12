
# Maintenance Delivery :mailbox:

# Zondax - Submission Milestone 1 & 2
![](https://i.imgur.com/dNlNRtv.png)

[TOC]

--------------------------------

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this delivery**  

* **Application Document:** [Open Grant Proposal](https://github.com/Zondax/Open-Grants-Program/blob/6e257aabeef6b14ea3217fbd10da9d7c3bb89b2b/applications/Zondax-Support.md#open-grant-proposal)

**Deliverables**

## Milestone 1

**Reference:** [Open Grants Link / Milestone 1](https://github.com/Zondax/Open-Grants-Program/blob/6e257aabeef6b14ea3217fbd10da9d7c3bb89b2b/applications/Zondax-Support.md#milestone-1--support)

| Item     | Deliverable |
| -------- | --------    |
| 0a.      | License     |

Apache 2.0 - https://github.com/zondax/ledger-kusama/blob/master/LICENSE
Apache 2.0 - https://github.com/zondax/ledger-polkadot/blob/master/LICENSE
Apache 2.0 - https://github.com/zondax/ledger-substrate-rs/blob/master/LICENSE
Apache 2.0 - https://github.com/zondax/ledger-polkadot-js/blob/master/LICENSE

| Item     | Deliverable    |
| -------- | --------       |
| 0b.      | Documentation  |

https://github.com/Zondax/ledger-polkadot/blob/main/docs/APDUSPEC.md

| Item     | Deliverable    |
| -------- | --------       |
| 0c.      | Testing Guide  |

While we recommend using the published apps in Ledger Live to test, the following instructions indicate how to build and run unit and integration tests:

https://github.com/Zondax/ledger-kusama/blob/master/docs/build.md
https://github.com/Zondax/ledger-polkadot/blob/master/docs/build.md

Moreover, you can find full integration tests (CircleCI) here:
https://github.com/Zondax/ledger-kusama/blob/master/.circleci/config.yml
https://github.com/Zondax/ledger-polkadot/blob/master/.circleci/config.yml

Last but not least, we recommend the articles described in the following section.

| Item     | Deliverable       |
| -------- | --------          |
| 0d.      | Article/Tutorial  |

The following articles as videos describe in detail how the recovery extension mode can be used to recover coins sent to an incorrect address. We cover both Polkadot and Kusama networks:
 
https://zondax.ch/blog/recover-blocked-ksm
https://zondax.ch/blog/ksm-dot-recovery
https://zondax.ch/blog/dot-recovery-mode

| Item     | Deliverable                      |
| -------- | --------                         |
| 1.       | Polkadot App Recovery Extension  |

The recovery mode for Polkadot was published as part of the following release:
https://github.com/Zondax/ledger-polkadot/releases/tag/v6.28.0
For more information about this mode, please refer to articles in the previous section (item 0d).

| Item     | Deliverable                      |
| -------- | --------                         |
| 2.       | Kusama App Recovery Extension    |

The recovery mode for Kusama was published as part of the following release:
https://github.com/Zondax/ledger-kusama/releases/tag/v4.28.1

For more information about this mode, please refer to articles in the previous section (item 0d).

| Item     | Deliverable                      |
| -------- | --------                         |
| 3.       | Ledger-Substrate-js Derivation   |

https://github.com/Zondax/ledger-substrate-js/pull/34

And example derivations can be found here:
https://github.com/Zondax/ledger-substrate-js/blob/master/tests/basic.spec.js

To avoid security risks, we have avoided publishing this feature, however we are planning to write an article about this in the near future.

| Item     | Deliverable                             |
| -------- | --------                                |
| 4.       | Polkadot App - Runtime Support Updates  |

https://github.com/Zondax/ledger-polkadot/releases/tag/v5.26.2
https://github.com/Zondax/ledger-polkadot/releases/tag/v6.28.0
https://github.com/Zondax/ledger-polkadot/releases/tag/v6.28.1

| Item     | Deliverable                             |
| -------- | --------                                |
| 5.       | Kusama App - Runtime Support Updates    |

https://github.com/Zondax/ledger-kusama/releases/tag/v3.26.1
https://github.com/Zondax/ledger-kusama/releases/tag/v4.28.0
https://github.com/Zondax/ledger-kusama/releases/tag/v4.28.1
https://github.com/Zondax/ledger-kusama/releases/tag/v4.28.2
https://github.com/Zondax/ledger-kusama/releases/tag/v4.28.3
https://github.com/Zondax/ledger-kusama/releases/tag/v5.30.0
https://github.com/Zondax/ledger-kusama/releases/tag/v5.30.1

| Item     | Deliverable        |
| -------- | --------           |
| 6.       | Community Support  |

We have not only provided support via direct communication channels (direct emails), but also coordinated support efforts with both Ledger and Anja Schuetz (anja@web3.foundation).

---

## Milestone 2

**Reference:** [Open Grants Link / Milestone 2](https://github.com/Zondax/Open-Grants-Program/blob/6e257aabeef6b14ea3217fbd10da9d7c3bb89b2b/applications/Zondax-Support.md#milestone-2--support)

| Item     | Deliverable    |
| -------- | --------       |
| 0a.      | License        |

Apache 2.0 - https://github.com/zondax/ledger-kusama/blob/master/LICENSE
Apache 2.0 - https://github.com/zondax/ledger-polkadot/blob/master/LICENSE
Apache 2.0 - https://github.com/zondax/ledger-substrate-rs/blob/master/LICENSE
Apache 2.0 - https://github.com/zondax/ledger-polkadot-js/blob/master/LICENSE

| Item     | Deliverable    |
| -------- | --------       |
| 0b.      | Documentation  |

The following document describes the pallets and extrinsics that are supported at this moment:
https://github.com/Zondax/ledger-kusama#kusama--59030x
https://github.com/Zondax/ledger-polkadot#polkadot--79030x

APDU specs	https://github.com/Zondax/ledger-kusama/blob/master/docs/APDUSPEC.md
https://github.com/Zondax/ledger-polkadot/blob/master/docs/APDUSPEC.md

Build instructions (we recommend using the published apps in Ledger Live instead):
https://github.com/Zondax/ledger-kusama/blob/master/docs/build.md
https://github.com/Zondax/ledger-polkadot/blob/master/docs/build.md

| Item     | Deliverable    |
| -------- | --------       |
| 0c.      | Testing Guide  |

While we recommend using the published apps in Ledger Live to test, the following instructions indicate how to build and run unit and integration tests:
https://github.com/Zondax/ledger-kusama/blob/master/docs/build.md
https://github.com/Zondax/ledger-polkadot/blob/master/docs/build.md

Last but not least, you can find full integration tests (CircleCI) here:
https://github.com/Zondax/ledger-kusama/blob/master/.circleci/config.yml
https://github.com/Zondax/ledger-polkadot/blob/master/.circleci/config.yml

| Item     | Deliverable       |
| -------- | --------          |
| 0d.      | Article/Tutorial  |

https://zondax.ch/news/polkadot-kusama-update

| Item     | Deliverable                             |
| -------- | --------                                |
| 1.       | Polkadot App - Runtime Support Updates  |

During this period the following upgrades were published: 
https://github.com/Zondax/ledger-polkadot/releases/tag/v7.30.0
https://github.com/Zondax/ledger-polkadot/releases/tag/v7.9020.1
https://github.com/Zondax/ledger-polkadot/releases/tag/v7.9030.1

| Item     | Deliverable                             |
| -------- | --------                                |
| 2.       | Kusama App - Runtime Support Updates    |

https://github.com/Zondax/ledger-kusama/releases/tag/v5.9020.0
https://github.com/Zondax/ledger-kusama/releases/tag/v5.9040.0

| Item     | Deliverable       |
| -------- | --------          |
| 3.       | Community Support |

We have not only provided support via direct communication channels (direct emails),     but also coordinated support efforts with both Ledger and Anja Schuetz (anja@web3.foundation).


