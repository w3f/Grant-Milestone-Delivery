# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/blackprint-js.md
* **Milestone Number:** 3

**Context**
This milestone delivers modules supports for Node.js and Deno, improved nodes documentation and can be seen inside the editor by hovering the nodes or the ports.

**Deliverables**
| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/LICENSE) | MIT License |
| 0b. | Documentation | 1. [Documentation for Blackprint](https://blackprint.github.io/#page/sketch/1#;bpdocs:Home)<br>2. [Documentation for the module](https://github.com/Blackprint/nodes-polkadot.js/blob/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/README.md) | Please see additional information |
| 0c. | Testing Guide | 1. [Test file](https://github.com/Blackprint/nodes-polkadot.js/blob/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/tests/node.test.js)<br>2. [Guide to run the test](https://github.com/Blackprint/nodes-polkadot.js/blob/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/README.md#running-test) | The unit test is similar with the browser version but it's configured for Node.js environment using Jest |
| 0d. | Docker | 1. [Docker file](https://github.com/Blackprint/nodes-polkadot.js/tree/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/.github/docker) | There's one docker file to clone the repository and run the unit tests, one as an example for Node.js and one for Deno |
| 1. | Nodes | 1. [Source files](https://github.com/Blackprint/nodes-polkadot.js/tree/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/src)<br>2. [Guide for export schema from editor to Node.js/Deno](https://github.com/Blackprint/nodes-polkadot.js/blob/189ebaf5d3b3b4cd325e2a0d3ff46aaba4862d15/README.md#run-in-different-environment) | The source files is mostly similar with the previous milestone, but with some tweak to make it work for Node.js and Deno. The major improvement is on Blackprint side (engine, editor, docs, etc). |
| 2. | Package | [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js) | Published v0.5 |

**Additional Information**
As Blackprint almost finish the planned roadmap (for JavaScript), I have started working on documentation for Blackprint to help developers and users understand on how to use Blackprint for their project. I also put some [tutorial](https://blackprint.github.io/#;bpdocs:Editor/Tutorial) to help users learn on how to do something inside the editor.

About the documentation for the nodes, I have created a searchable dropdown menu that also show information about the nodes. Users can also view some information about the nodes by hovering the node's header and the ports. I think this is the effective way to explain the nodes and developers can easily document their nodes by writing documentation right in their code (when registering the nodes).

Using search feature:

![fCjIB5JrKU](https://user-images.githubusercontent.com/11073373/187021112-d37e9aee-8a73-4d02-b56a-0e8bb3e06217.jpg)

Hovering the node's header:

![k0Ln7bF2oH](https://user-images.githubusercontent.com/11073373/186894430-4c8862f6-f7a6-43ce-b599-033fbe9f079c.jpg)

Hovering the node's port:

![fCTnO6f5wO](https://user-images.githubusercontent.com/11073373/186894515-4a0d0225-8802-49b0-9d58-3ddc334cdfb5.jpg)

---

Because this was the last milestone, I also want to let you know on what I'm going to do next:
1. Improving the editor. Because previously I was focused for finishing the engine and the libraries, it caused the UI/UX for the editor left behind.
2. Check if everything work properly before publishing article about Blackprint on dev.to or Medium. After reaching larger community, some developer may start contributing module/nodes (hopefully when Hacktoberfest) that can help Blackprint ecosystem became more larger and easier to use.

I also working on other modules like for Telegram and Discord to expand the functionality. Currently these modules still in WIP and haven't cover all the features, but for the quick preview I have recorded a small example for Telegram:

https://user-images.githubusercontent.com/11073373/187060396-f7d66d23-f69d-4237-9393-9c7e26874ef2.mp4

---

Known issues for the unit test:
1. Sometime when you run the unit test with Jest it may immediately exit without even starting any unit test, but after you wait for another minute it may work properly. This happen because Jest need to use experimental VM modules for creating sandboxed browser context, and as far as I know it's due to VM cache and the bug still haven't fixed from Node.js side yet. Some other project from other developer also have this issue.
2. The unit test usually finish not more than 5 minutes, and can fail if the network is unstable as it has some test that connect to Westend test network.