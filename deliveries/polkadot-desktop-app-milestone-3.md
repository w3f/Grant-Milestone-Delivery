# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/polkadot-desktop-app.md)
* **Milestone Number:** 3

| Number | Deliverable                   | Link          | Notes |
| --- | -------------------------------- | ------------- |------ |
| 1.  | Accounts list redesign           | [Figma designs][figma-designs] | Also includes proposed design for network multi-selection per account in extension and apps (see [#5439][apps-5439]) |
| 2.  | Accounts list implementation     | https://polkadot.js.org/apps/#/accounts <br/> Source code changes mainly in [Accounts][code-accounts] - consult PRs for details.<br/>Automated tests - primarily in [Accounts][code-accounts-tests] - consult PRs for details |<ol><li>[Summary bar][pr-summary-bar] + [styles][pr-summary-bar-styles]</li><li>[Tag styles][pr-tag-styles]</li><li>[Account collapsible details row][pr-row-details]</li><ol> |
| 3.  | Accounts sidebar implementation  | TODO | Figma designs: work-in-progress | 
| 4.  | Accounts App modals improvements | <ol><li>[Create/derive - remove code duplication][pr-modals-duplication]</li></ol> | development in progress |
| 5.  | Documentation updates            | TODO | |

Almost every PR listed includes automated tests.

[figma-designs]: https://www.figma.com/file/5NAICV06SHNbbIoYhrUS3u/PolkaDot?node-id=2839%3A8075
[code-accounts]: https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/Accounts/index.tsx
[code-accounts-tests]: https://github.com/polkadot-js/apps/blob/master/packages/page-accounts/src/Accounts/index.spec.ts
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
[pr-flags-width]: https://github.com/polkadot-js/apps/pull/5957
[pr-sidebar-links]: https://github.com/polkadot-js/apps/pull/5999
[pr-sidebar-flags]: https://github.com/polkadot-js/apps/pull/6003
[pr-replace-sui-popup]: https://github.com/polkadot-js/apps/pull/6007
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
