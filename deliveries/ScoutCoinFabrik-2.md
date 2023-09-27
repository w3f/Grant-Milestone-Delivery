# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik_2.md
* **Milestone Number:** 1

**Context** (optional)

In this delivery we provide a prototype of an extensible open-source tool intended to assist ink! smart contract developers and auditors detect common security issues and deviations from best practices. This prototype includes:
* A Command Line Interface.
* A VSCode extension.
* An extended list of detectors, test-cases and vulnerability classes.
* A [web page](https://coinfabrik.github.io/scout/) for the tool, providing further documentation.

We also include, as part of this delivery, a blog post and an evaluation report of the tool against a selection of projects deployed on testnet or mainnet.

This [Prototype](https://github.com/CoinFabrik/scout/tree/web3-v2) builds on our [Proof of Concept](https://github.com/CoinFabrik/web3-grant), performed as a previous [project](https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md).


**Deliverables**

Please note that all relevant links associated with the deliverables of this milestone make references to the branch [`web3-v2`](https://github.com/CoinFabrik/scout/tree/web3-v2) of our [repository](https://github.com/CoinFabrik/scout).


| Number | Deliverable | Link | Notes |
| ------ | ----------- | ---- | ----- |
| 0a. | License | https://github.com/CoinFabrik/scout/blob/web3-v2/LICENSE | MIT |
| 0b. | Documentation | https://coinfabrik.github.io/scout/docs/intro | We provide documentation hosted on a [separate webpage](https://coinfabrik.github.io/scout) from [Scout's repository](https://github.com/CoinFabrik/scout/tree/web3-v2). The main [README.md](https://github.com/CoinFabrik/scout/blob/web3-v2/README.md) in our repository also provides links to this webpage. |
| 0c. | Testing | https://github.com/CoinFabrik/scout/tree/web3-v2/apps/cargo-scout-audit/tests | We provide [integration testing](https://github.com/CoinFabrik/scout/tree/web3-v2/apps/cargo-scout-audit/tests). Specific tests for every linting detector based on [code examples and snippets of smart contracts](https://github.com/CoinFabrik/scout/tree/web3-v2/test-cases).  |
| 0d. | Docker | - | Does not apply at this stage.  |
| 0e. | Article | https://blog.coinfabrik.com/bigger-better-and-faster-vulnerability-detection-in-ink | We uploaded to our blog a report summary. |
| 1.a | Research and Development | https://coinfabrik.github.io/scout/docs/vulnerabilities | Vulnerability examples. In addition to the [examples developed in the previous project of ScoutCoinFabrik PoC](https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md#milestone-1-proof-of-concept), we  developed more code examples and snippets of vulnerabilities, best practices, and enhancements related to smart contracts written in ink!. |
| 1.b | Research and Development | https://github.com/CoinFabrik/scout/tree/web3-v2/test-cases | We developed further example versions of [vulnerabilities developed in the previous project of ScoutCoinFabrik PoC](https://github.com/CoinFabrik/web3-grant/tree/main/vulnerabilities). These example versions are the new test-cases developed for the vulnerability classes [integer-overflow-or-underflow](https://github.com/CoinFabrik/scout/tree/web3-v2/test-cases/integer-overflow-or-underflow), [reentrancy](https://github.com/CoinFabrik/scout/tree/web3-v2/test-cases/reentrancy) and [unused-return-enum](https://github.com/CoinFabrik/scout/tree/web3-v2/test-cases/unused-return-enum). |
| 2.a | Development | https://github.com/CoinFabrik/scout/tree/web3-v2 | We built a prototype that improves over the [development of the previous project of ScoutCoinFabrik PoC](https://github.com/w3f/Grants-Program/blob/master/applications/ScoutCoinFabrik.md#milestone-1-proof-of-concept), detecting more [classes of vulnerabilities](https://coinfabrik.github.io/scout/docs/vulnerabilities#vulnerability-classes) and improving in precision on existing detectors. This prototype can analyze Rust code to detect vulnerabilities in ink! smart contracts and possibly in pallets and other pieces of code. This builds over [this proof-of-concept tool](https://github.com/CoinFabrik/web3-grant) we've built and [delivered as part of a grant for the web3 foundation](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/deliveries/ScoutCoinFabrik-1.md) by: <br> a) Moving from a proof-of-concept (PoC) tool to a robust tool that integrates with a popular IDE (VSCode), includes a CLI, etc, <br> b) We improved on the precision of the detectors we included in the PoC reducing the rate of false positives, and  <br> c) We [added more detectors](https://github.com/CoinFabrik/scout/tree/web3-v2/detectors) in order to have a reasonable coverage of the relevant security vulnerabilities that happen in smart contracts. |
| 2.b | Development | https://github.com/CoinFabrik/scout/tree/web3-v2/apps/cargo-scout-audit | We built a command line interface for the prototype. We developed a simple command line interface like the one used in other static analyzers from other blockchains (eg: [Slither](https://github.com/crytic/slither), [Rustle](https://github.com/blocksecteam/rustle)). <br> In particular, we developed the possibility to run the prototype on smart contract files or directories. <br> The base command is: `cargo scout-audit` <br> We also [included options](https://coinfabrik.github.io/scout/docs/intro#usage) for running subsets of detectors. | |
| 2.c | Development | https://marketplace.visualstudio.com/items?itemName=CoinFabrik.scout-audit | We provide VSCode integration for the prototype. Our VSCode development lists security issues, highlights issues with squiggles and hover-over descriptions. This development is compatible with other relevant ink! extensions such as [Ink! Analyzer](https://w3f.github.io/Grants-Program/applications/ink-analyzer#future-plans).  |
| 3 | Evaluation | https://github.com/CoinFabrik/scout/blob/web3-v2/assets/false-positives-report.md | We performed prototype validation against a selection of projects deployed on testnet or mainnet in order to evaluate detector precision. We provide an evaluation report and detector improvement. |
 

**Additional Information**

Our original plan was to apply for a 3 milestones grant, to reach a public release of the tool. But we were advised to apply for a shorter objective. After completing the PoC in our first stage, we have now completed this second stage to reach a tool prototype. We envison a third stage together with a public release. Our mission is to continue to work on improving automated and assisted tools for finding security vulnerabilities and writing more secure code. Our objective is to help the Polkadot / Kusama community produce better and more secure code with these tools.

Richard Casey from Parity brought this program to our attention. Our inquiries were addressed by David Hawig and Bhargav Bhatt, who also kindly advised us on this presentation.

Find our project's repo at: https://github.com/CoinFabrik/scout
