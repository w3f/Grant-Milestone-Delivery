# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-desktop-app.md)
* **Milestone Number:** 3

| Number | Deliverable                   | Link          | Notes |
| --- | -------------------------------- | ------------- |------ |
| 1.  | Accounts list redesign           | [Figma designs][figma-designs] | Also includes proposed design for network multi-selection per account in extension and apps (see [#5439][apps-5439]) |
| 2.  | Accounts list implementation     | New designs are applied to [Accounts][app-accounts] and [Address book][app-address-book]. <br/> Source code changes mainly in [App Accounts][code-accounts] - consult PRs for details.<br/>Automated tests - primarily in [App Accounts][code-accounts-tests], applied also to Address Book  - consult PRs for details. | <ol><li>[Summary bar][pr-summary-bar] + [styles][pr-summary-bar-styles] (still open)</li><li>[Tag styles][pr-tag-styles]</li><li>[Account collapsible details row][pr-row-details]</li><li>[Style address balances][pr-style-address-balances]</li><li>[Add accounts sorting][pr-accounts-sorting]</li><li>[Replace SUI popup with custom one][pr-replace-sui-popup]</li><li>[Display parent above account name][pr-display-parent]</li><li>[Account actions popup redesign][pr-accounts-popup]</li><li>[Explorer links placement][pr-accounts-buttons]</li><li>[Add hover to expand button][pr-expand-hover]</li><li>[Account filter placement][pr-move-filter-input]</li><li>[Style sort input][pr-sort-style]</li><li>[Apply table style to Address Book][pr-row-details-addresses]</li><li>[Apply button and filter styles to Address Book][pr-filter-addresses]</li><li>[Correct row coloring when filtering][pr-filtering-bugfix]</li><li>[Style account badges][pr-badges]</li><li>[Style table headers][pr-table-headers] (still open)</li><li>[Style redeemable balances in expanded view][pr-redeemable]</li><ol> |
| 3.  | Accounts sidebar implementation  | Click on any account in [apps][app].<br/>Source code changes mainly in [Sidebar][code-sidebar] - consult PRs for details.<br />Automated tests in [Sidebar.spec][code-sidebar-tests] | <ol><li>[Split judgements per registrar][pr-registrars] (closes long outstanding [issue][apps-2297-registrars])</li><li>[Accounts flags placement][pr-flags-width]</li><li>[Icons for explorer links][pr-sidebar-links]</li><li>[Style flags][pr-sidebar-flags]</li><li>[Edit name and tags][pr-sidebar-edit]</li><li>[Style identity and balances sections][pr-sidebar-identity]</li><li>[Increase width][pr-sidebar-width]</li><li>[Style upper part][pr-sidebar-style-upper]</li></ol> | 
| 4.  | Accounts App modals improvements | Try interacting with "Create account" modal on [Accounts page][app-accounts] with `Esc` and `Enter`. Other changes are mostly low-level in code, consult PRs for details.| <ol><li>[Create/derive - remove code duplication][pr-modals-duplication]</li><li>[Replace SUI modals with custom ones][pr-replace-sui-modal]</li><li>[Support keyboard in modals][pr-keyboard-in-modal]</li></ol> |
| 5.  | Documentation updates            | Updates in [Multisig section][doc-multisig] of the wiki | [PR #2724][pr-doc-multisig] in wiki repo. |

Most of the PRs listed include automated tests.

[app]: https://polkadot.js.org/apps
[app-accounts]: https://polkadot.js.org/apps/#/accounts 
[app-address-book]: https://polkadot.js.org/apps/#/addresses 
[figma-designs]: https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2839%3A8075
[code-accounts]: https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/Accounts/index.tsx
[code-accounts-tests]: https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/Accounts/index.spec.ts
[code-sidebar-tests]: https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/Sidebar/Sidebar.spec.tsx
[pr-summary-bar]: https://github.com/polkadot-js/apps/pull/5876
[pr-summary-bar-styles]: https://github.com/polkadot-js/apps/pull/5891
[pr-tag-styles]: https://github.com/polkadot-js/apps/pull/5893
[pr-row-details]: https://github.com/polkadot-js/apps/pull/5975
[pr-modals-duplication]: https://github.com/polkadot-js/apps/pull/5895
[apps-5439]: https://github.com/polkadot-js/apps/issues/5439
[pr-style-address-balances]: https://github.com/polkadot-js/apps/pull/5897
[pr-replace-sui-modal]: https://github.com/polkadot-js/apps/pull/5914
[pr-accounts-sorting]: https://github.com/polkadot-js/apps/pull/5923
[pr-replace-sui-popup]: https://github.com/polkadot-js/apps/pull/5924
[pr-display-parent]: https://github.com/polkadot-js/apps/pull/5947
[pr-keyboard-in-modal]: https://github.com/polkadot-js/apps/pull/5968
[code-sidebar]: https://github.com/polkadot-js/apps/tree/master/packages/page-accounts/src/Sidebar
[pr-flags-width]: https://github.com/polkadot-js/apps/pull/5957
[pr-sidebar-links]: https://github.com/polkadot-js/apps/pull/5999
[pr-sidebar-flags]: https://github.com/polkadot-js/apps/pull/6003
[pr-accounts-popup]: https://github.com/polkadot-js/apps/pull/6007
[pr-accounts-buttons]: https://github.com/polkadot-js/apps/pull/6012
[pr-sidebar-edit]: https://github.com/polkadot-js/apps/pull/6049
[pr-expand-hover]: https://github.com/polkadot-js/apps/pull/6052
[pr-move-filter-input]: https://github.com/polkadot-js/apps/pull/6089
[pr-sidebar-identity]: https://github.com/polkadot-js/apps/pull/6096
[pr-sort-style]: https://github.com/polkadot-js/apps/pull/6099
[pr-sidebar-width]: https://github.com/polkadot-js/apps/pull/6104
[pr-sidebar-style-upper]: https://github.com/polkadot-js/apps/pull/6115
[pr-row-details-addresses]: https://github.com/polkadot-js/apps/pull/6122
[pr-filter-addresses]: https://github.com/polkadot-js/apps/pull/6155
[pr-tests-output]: https://github.com/polkadot-js/apps/pull/6132
[pr-filtering-bugfix]: https://github.com/polkadot-js/apps/pull/6166
[pr-registrars]: https://github.com/polkadot-js/apps/pull/6157
[apps-2297-registrars]: https://github.com/polkadot-js/apps/issues/2297
[pr-badges]: https://github.com/polkadot-js/apps/pull/6208
[pr-table-headers]: https://github.com/polkadot-js/apps/pull/6180
[pr-redeemable]: https://github.com/polkadot-js/apps/pull/6220
[doc-multisig]: https://wiki.polkadot.network/docs/learn-accounts#example-with-polkadotjs
[pr-doc-multisig]: https://github.com/w3f/polkadot-wiki/pull/2724
