# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tokenomics-survey-2022.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number   | Deliverable                          | Accepted                     | Link          | Evaluation Notes |
| -------  | -----------                          | --------                     | -------------| ------ |
| **0a.**  | Copyright and Licenses               | <ul><li>[ ] </li></ul>       | [Creative Commons Attribution 4.0 International License](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/LICENSE) | Not officially supported by our program, seee our [Guidelines](https://github.com/w3f/Grants-Program/tree/570e3e4f01ab3e68c0a4d23ca8fb9ffdc9da07f5#guidelines). Ideally you'd change it to a supported license. Alternatively, I can check with legal if this license can be supported. |
| **0b.**  | Documentation/Tutorial               | <ul><li>[ ] </li></ul>       | [Tutorial for building PDF using Overleaf](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/README.md#build-pdf) | The tutorial relies on [Overleaf](https://www.overleaf.com/learn/how-to/Using_Git_and_GitHub#Creating_a_new_Overleaf_project_from_a_GitHub_repository), a SaaS for editing LaTeX projects. It's not open-source and to use the import feature, you'd have to subscribe to a paid plan. The artifacts and compiled PDF are both part of the repo, so that part seems fine. |
| **0c.**  | Methodology                          | <ul><li>[x] </li></ul>       | [Methodology chapter](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/main.tex#L626) | The base for the research were the 10 top articles on blockchain tokenomics taken from commercial research databases. The process consisted of five stages: preparation, retrieval, screening, selection, and write-up. Filters like language, journal type, and subject area were applied. They were ranked by journal impact factor. It's described how the results can be reproduced.  |
| **0d.**  | Infrastructure                       | <ul><li>[ ] </li></ul>       | [Github (166e619)](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e619/README.md#build-pdf) | Should be possible using open source tools, see Evaluation Notes on 0b. |
| **0e.**  | Article                              | <ul><li>[x] </li></ul>       | [Draft Article (PDF)](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/milestone_1.pdf) | - |
| **0e.1** |  - Appendix: Methodology             | <ul><li>[x] </li></ul>       | [Methodology chapter](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/main.tex#L626) | See *0.c Methodology* |
| **0e.2** |  - Section: Polkadot Parachains      | <ul><li>[ ] </li></ul>       | [Github (166e619)](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e619/main.tex#L228) | See [Polkadot Parachains Section Feedback](#polkadot-parachains-section-feedback) |
| 1.       | List of academic papers              | <ul><li>[x] </li></ul>       | [Bibliography](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/annotated_bibliography.bib) and [footnotes](https://github.com/taqtiqa-mark/tokenomics-survey-2022/blob/166e61943e552f3183e44f5b2668f19e1e505657/main.tex#L60) | -|


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- in general, there a quite some typos in the paper, see also [Polkadot Parachains Section Feedback](#polkadot-parachains-section-feedback)
- 3 Notation is currently an empty chapter

### Polkadot Parachains Section Feedback

- in my personal opinion this chapter could use some more ccounter-checking as there are some typos and sentences that don't make sense, for example:
    - "Initial proposal flow-chart/decision-tree development that will help developers place their
token in the following contexts." => this seems incomplete
    - "Types under the following topics" => I think there should be a colon after it
    - "Parachain" => Parachains
    - "slow to emerge," => there is a verb missing
  - Note that these are just some examples in the first 2 paragraphs, it's not a complete list.
