# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.**    | Copyright and Licenses                   | <ul><li>[x] </li></ul> | [Creative Commons Attribution 4.0 International License](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/LICENSE)                | - |
| **0b.**    | Documentation/Tutorial                   | <ul><li>[x] </li></ul> | [Build Instructions](https://github.com/taqtiqa-mark/tokenomics-survey-2022/tree/55f19fe4fd1c9816b360b7419ce85d621b7ac12e#build-pdf)              | - |
| **0c.**    | Methodology                              | <ul><li>[x] </li></ul> | [*Methodology* Section](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/main.tex#L855)          | - |
| **0d.**    | Infrastructure                           | <ul><li>[ ] </li></ul> | [Build Instructions](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/README.md#build-pdf)    | The "Docker files for software execution" are missing, but I think they're not relevant for this delivery. I suggest to amend the proposal to remove this part. |
| **0e.**    | Article                                  | <ul><li>[x] </li></ul> | [Draft Article](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/milestones/milestone_3.pdf) | - |
| **0e.1**   | Article                                  | <ul><li>[ ] </li></ul> | [Draft Article](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/milestones/milestone_3.pdf) | Not published yet. |
| **0e.2**   |  - Section: Published models             | <ul><li>[x] </li></ul> | [*Annotated Bibliography* Chapter](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/annotated_bibliography.bib)          | - |
| **0e.3**   |  - Section: Polkadot Parachain Economies | <ul><li>[x] </li></ul> | [*Native Token Functions* Chapter](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/main.tex#L783)          | - |
| **0e.4**   |  - Appendix: Methodology                 | <ul><li>[x] </li></ul> | [*Methodology* Chapter](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/main.tex#L856)          | Personally, I found the pseudocode at step 2 in the flowchart in Figure 1 somehow difficult to understand. |
| **0e.5**   |  - Section: Summary                      | <ul><li>[x] </li></ul> | [*Summary* Chapter](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/main.tex#L837)          | - |
| 1          |  Feedback                                | <ul><li>[x] </li></ul> | [Github (55f19fe)](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/55f19fe4fd1c9816b360b7419ce85d621b7ac12e/main.tex)       | - |
| 2          |  Publish                                 | <ul><li>[ ] </li></ul> | **Penultimate step after all reviewer changes are complete.** [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [Arxiv (q-fin.GN)](https://arxiv.org/list/q-fin.GN/recent)          | The working paper will be posted to [SSRN (e.g. FEN - Cryptocurrency Research eJournal)](https://papers.ssrn.com/sol3/JELJOUR_Results.cfm?form_name=journalBrowse&journal_id=3839004), [IDEAS](https://ideas.repec.org/), [Arxiv (q-fin.GN)](https://arxiv.org/list/q-fin.GN/recent) |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- Only a brief high-level summary of Polkadot parachain attributes is provided, not the more detailed summary analysis proposed. According to the grantee the reason for that is that none of the Parachains (with the exception of equilibrium) tokens were designed with an explicit [equilibrium](https://www.investopedia.com/terms/e/economic-equilibrium.asp) objective in mind. Quote from chapter *2 Token-Economy*:
  > None of the reviewed Polkadot parachain tokens were designed with an explicit equilibrium objective, nor using a rational expectations framework (with the possible exception of the Equilibrium parachain, see Table 2 ).
- Instead of the detailed summary of parachain token attributes a series of flowcharts/decision trees has been provided that aim to identify the scope of any token design w.r.t. the following attributes: Economy/Model/Equilibrium/Sector/Production/Monetary Type.
- In the initial delivery there were a [few things](https://github.com/w3f/Grant-Milestone-Delivery/pull/925#pullrequestreview-1550254076) unclear in the paper but they were [addressed and fixed](https://github.com/w3f/Grant-Milestone-Delivery/pull/925#issuecomment-1655020762) very quickly by the grantee.
- The only open points are:
  - [ ] publish the paper
  - [ ] amend the contract to remove Docker from the requirements (or implement it)

### Pre-Notes
