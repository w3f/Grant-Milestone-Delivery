# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://forms.gle/8Wx7nxtq8fKrsuEz8) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/General-Grants-Program/blob/master/grants/milestone-deliverables-guidelines.md).**

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/17
* **Milestone Number:** 2

In this Milestone, we worked on improvements in the following areas:
* Account creation flow
* General look and feel of the application
* Maintaining the Desktop app

During development, we pivoted from the initial plan outlined in the [original spec](https://github.com/w3f/Open-Grants-Program/pull/17). Part of the work we've done was originally planned to be included in Milestone 3. On the other hand, some parts of Milestone 2 deliverables are not yet there, so we propose to move them to updated Milestone 3.

### Deliverables

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 1. | Accounts design | <ol><li> [List](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2782%3A4), [version with light buttons](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=1722%3A9099) </li><li> [Modals](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2782%3A5) </ol>|
| 2. | Updated UX flows for Account creation actions | https://polkadot.js.org/apps/#/accounts ➡ Add account<br/>Source code changes mainly in [Create.tsx](https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/modals/Create.tsx), but consult PRs for details. Automated tests in [CreateAccount.slow.spec.tsx](https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/CreateAccount.slow.spec.tsx). | As a result of discussions alongside PR [~~#3711~~](https://github.com/polkadot-js/apps/pull/3711), we reached consensus that we keep only the new account flow, and will update design components one by one across whole app. <ol><li> Automated UI tests: [#3371](https://github.com/polkadot-js/apps/pull/3371) [#3934](https://github.com/polkadot-js/apps/pull/3934) </li><li>New create account flow and design [~~#3711~~](https://github.com/polkadot-js/apps/pull/3711) </li><li>New create account flow: [#3380](https://github.com/polkadot-js/apps/pull/3880) </li></ol>
| 3. | Style Guide | <ol><li> [Components design](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2781%3A0) </li><li> [Navigation ver 1](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2782%3A0), [ver 2](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2782%3A1) </li><li> [Updated fonts](https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2268%3A9175) </ol> | | 
| 4. | Implement new style | https://polkadot.js.org/apps <br/> Source changes are quite scattered across the [repo](https://github.com/polkadot-js/apps/), consult individual PRs for details.| <ol><li>Fonts [#3882](https://github.com/polkadot-js/apps/pull/3882) [#4038](https://github.com/polkadot-js/apps/pull/4038) </li><li> Menu [~~#3399~~](https://github.com/polkadot-js/apps/pull/3399) [~~#3810~~](https://github.com/polkadot-js/apps/pull/3810) [#4317](https://github.com/polkadot-js/apps/pull/4317) </li><li> Layout main container on wider screens [~~#3881~~](https://github.com/polkadot-js/apps/pull/3881) [#4170](https://github.com/polkadot-js/apps/pull/4170) [#4184](https://github.com/polkadot-js/apps/pull/4184) </li><li> Minor improvements [#4583](https://github.com/polkadot-js/apps/pull/4583)

[~~#1234~~](https://github.com/polkadot-js/apps) indicates a PR that was not merged. Usually contains valuable discussions and drives the direction of development.


### Other activities

Additionally, the changes introduced in Milestone 1 (Polkadot JS as a Desktop app) are being constantly maintained by our team. Below are PRs made in response to desktop-specific issues and to keep Electron dependencies updated:

* [Show icon in dock on linux](https://github.com/polkadot-js/apps/pull/3365)
* [Fix IPC communication in Electron account store](https://github.com/polkadot-js/apps/pull/3952)
* [Electron app housekeeping](https://github.com/polkadot-js/apps/pull/3958)
* [Remove colon from win path](https://github.com/polkadot-js/apps/pull/4361)

### New proposed scope of Milestone 3

#### Improve User Experience in Accounts app

In this Milestone we'll tackle usability issues with [Accounts](https://polkadot.js.org/apps/#/accounts).

Currently, users face following difficulties:
* cannot see at a glance the totals of their balances across all accounts
* account names cannot be edited
* accounts list default sort is not intuitive and cannot be changed by the user
* unlock is not next to the locked balance, but in the drop down menu
* some information provided in the accounts list gives little value to users (eg. type, tags, transactions count) and could be hidden in some detail view
* expanding balances messes up the table layout

For sure coming up with an effective design will require some iterating over wireframes/prototypes, and possibly also with implementations.

Additionally, we'll remove dependencies on SUI library components where possible.

For a more detailed preliminary backlog, consult [this list](https://workflowy.com/s/accounts-backlog/9ppyPN0DpdNL3vG5).

| Number | Deliverable | Specification |
| -------| ----------- | ------------- |
| 1.     | Accounts list redesign | Figma design that solve all usability issues mentioned above |
| 2.     | Accounts list implementation | Implementing the designs in Polkadot-JS apps |
| 3.     | Accounts sidebar implementation | Implementing the sidebar that pops up after clicking on an account |
| 3.     | Documentation updates | We'll add or update the relevant documentation where needed |
