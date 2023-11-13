# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [lastic.md](https://github.com/w3f/Grants-Program/blob/master/applications/Lastic.md)
* **Milestone Number:** 1

**Context** (optional)
Lastic's first milestone focuses on laying the foundational elements for the project. This includes the creation of essential documentation, designs, and frontend components. The deliverables in this milestone serve as the building blocks for the Lastic platform, ensuring that it aligns with the vision presented in the initial application. The articles, whitepaper, and designs provide insights into Lastic's objectives, while the frontend components showcase the practical implementation of these ideas.

**Deliverables**
Below is a list of all deliverables for this milestone, extracted from the initial application. Each deliverable is accompanied by a link to its location. If there are any specific details or notes about a deliverable, they are mentioned in the respective Notes column.


| Number | Deliverable | Link | Notes |
| ----- | ----------- | ------ | ------- |
| **0a.** | License | [LICENSE](https://github.com/LasticXYZ/LasticUI/blob/main/LICENSE) | Licensed under GPLv3 |
| **0b.** | Documentation | [README.md](https://github.com/LasticXYZ/LasticUI/blob/main/README.md) and [docs.lastic.xyz](https://docs.lastic.xyz/) | All documentation is in the READMEs of the coresponding folders. |
| **0c.** | Testing and Testing Guide | [lastic.xyz](https://www.lastic.xyz/) | See section [Testing guide]() |
| **0d.** | Error logging | [Lastic UI/issues](https://github.com/LasticXYZ/LasticUI/issues) | All possible errors will be exposed as issues and fixed over time. |
| **0e.** | Article Publishing | [Unlocking the Future of Blockspace](https://medium.com/lastic-marketplace/unlocking-the-future-of-blockspace-introducing-lastic-9036b9d6637) | | 
| **0e.** | Article Publishing | [The Genesis of Lastic](https://medium.com/lastic-marketplace/the-genesis-of-lastic-a-coretime-marketplace-for-polkadot-75130e40306c) | |
| **0e.** | Article Publishing | [Simplifying RFC-1: Understanding Agile Coretime for the Polkadot Network](https://medium.com/lastic-marketplace/the-genesis-of-lastic-a-coretime-marketplace-for-polkadot-75130e40306c) | |
| **0e.** | Article Publishing | [Polkadot 2.0: A New Era of Decentralization](https://medium.com/lastic-marketplace/polkadot-2-0-a-new-era-of-decentralization-d5626a6e63e5) | This article is currently marked as unlisted and will be officially published shortly.  |
| **0e.** | Article Publishing |  [Unraveling Agile Coretime: Polkadot’s Innovative Resource Allocation](https://medium.com/lastic-marketplace/unraveling-agile-coretime-polkadots-innovative-resource-allocation-2c025d0daa59)  | |
| 1. | Whitepaper creation | [Lastic Whitepaper v1](https://github.com/LasticXYZ/LasticUI/blob/main/W3FGrant_Lastic_Whitepaper.pdf) | Lastic whitepaper version 1. |
| 2a. | User Flow Diagram Design | [Link to Flow Chart](https://www.figma.com/file/aFn15lyvti5hqLJBNUDZlU/Lastic-Flow-Chart-%231?type=whiteboard&node-id=0%3A1&t=ZiWNv9gRsH68D5Km-1) | Extended version of Figma available in lasticUI/README.md |
| 2b. | UI Figma Design | [Link to Figma UI](https://www.figma.com/proto/druTS8m2bCDNgovAjb0sbH/Lastic-milestone?page-id=0%3A1&type=design&node-id=203-897&viewport=191%2C-177%2C0.06&t=OHMXONHfLogXX1M4-1&scaling=min-zoom&starting-point-node-id=203%3A897&mode=design) | Link also available in lasticUI/README.md |
| 3a. | Frontend Development - Broker Pallet Integration | [Substrate Interact Github Link](https://github.com/LasticXYZ/LasticUI/tree/main/substrate-interact) | Links for detailed instructions on [how to get started with the substrate interact](https://docs.lastic.xyz/substrate-interact/) and [interaction instructions](https://docs.lastic.xyz/substrate-interact/interact.html) |
| 3b. | Mockup-based Frontend Development | [deployment - test.lastic.xyz](https://test.lastic.xyz/) [Link to Frontend](https://github.com/LasticXYZ/LasticUI/tree/main/substrate_interact) | The deployed version of the `main` branch can be accessed on [test.lastic.xyz](https://test.lastic.xyz/). However you can also check out the `stable` branch that is the official Lastic website at [lastc.xyz](https://lastic.xyz/) |


#### Testing Guide

This section outlines the testing procedures and environments used for the Lastic platform, focusing on the deployment and responsiveness across various devices and browsers.

**Testing Environments:**
- The `main` branch deployment, visible at [test.lastic.xyz](https://test.lastic.xyz/), has not been extensively tested for responsiveness.
- The official [Lastic website](https://www.lastic.xyz/), deployed from the `stable` branch, has undergone comprehensive testing across multiple platforms.

**Testing Tools and Platforms:**
- The testing process utilized [BrowserStack Live](https://live.browserstack.com/) for cross-browser and cross-platform verification.
- A range of devices and operating systems were included in the testing to ensure broad compatibility.

**Tested Platforms and Browsers:**
- **MacOS:** Tested with Chrome, Firefox, Safari, Edge, and Brave (all latest versions).
- **iPad:** Tested with Safari and Chrome (all latest versions).
- **Android Phone:** Tested with Chrome and Firefox (all latest versions).
- **iPhone:** Tested with Safari and Chrome (all latest versions).

**Testing Focus:**
- Primary emphasis was on assessing mobile responsiveness and ensuring consistent user experience across different devices.
- Checks included verifying the absence of unintended behaviors or display issues.

**Current Priorities:**
- While mobile responsiveness is important, the current focus is on enhancing interactivity with the Coretime chain.
- Future updates will aim to improve responsiveness and overall user experience.

---

## Additional Information

Complementary instructions on how to run everything can be found in the [lasticUI/README.md](https://github.com/LasticXYZ/LasticUI).

**About the Milestone Deliverables:**
- All deliverables listed in this milestone are foundational components of the Lastic platform.
- These components will receive continuous enhancements based on feedback and evolving requirements.

**Key Components in LasticUI Repository:**
- `./static_frontend`: Contains the static front-end elements of the platform.
- `./substrate_interact`: Houses the functionalities for interacting with the Substrate-based Coretime chain.

For detailed insights and usage instructions for each component, please refer to the `README.md` files within the respective directories of the [LasticUI repository](https://github.com/LasticXYZ/LasticUI).
