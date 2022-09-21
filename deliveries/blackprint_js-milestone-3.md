# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/blackprint-js.md
* **Milestone Number:** 3

**Context**

This milestone delivers modules supports for Node.js and Deno, improved nodes documentation and can be seen inside the editor by hovering the nodes or the ports.

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- |------------- |
| 0a. | License | [LICENSE](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/LICENSE) | MIT License |
| 0b. | Documentation | 1. [Documentation for Blackprint](https://blackprint.github.io/#page/sketch/1#;bpdocs:Home)<br>2. [Documentation for the module](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/README.md) | Please see additional information |
| 0c. | Testing Guide | 1. [Test file](https://github.com/Blackprint/nodes-polkadot.js/blob/6b4acb307ae29b8cfab890ca5d2f767bde0c0866/tests/node.test.js)<br>2. [Guide to run the test](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/README.md#running-test) | The unit test is similar with the browser version but it's configured for Node.js environment using Jest |
| 0d. | Docker | 1. [Docker file](https://github.com/Blackprint/nodes-polkadot.js/tree/1fececa0d17821fa11165f76cb86a5014129eea2/.github/docker) | There's one docker file to clone the repository and run the unit tests, one as an example for Node.js and one for Deno |
| 1. | Nodes | 1. [Source files](https://github.com/Blackprint/nodes-polkadot.js/tree/f2f8ace63d00adc34e59be0c140855e42512495b/src)<br>2. [Guide for export schema from editor to Node.js/Deno](https://github.com/Blackprint/nodes-polkadot.js/blob/1fececa0d17821fa11165f76cb86a5014129eea2/README.md#run-in-different-environment) | The source files is mostly similar with the previous milestone, but with some tweak to make it work for Node.js and Deno. The major improvement is on Blackprint side (engine, editor, docs, etc). |
| 2. | Package | 1. [NPM Registry](https://www.npmjs.com/package/@blackprint/nodes-polkadot.js)<br>2. [GitHub Release](https://github.com/Blackprint/nodes-polkadot.js/releases/tag/v0.5.2) | Published v0.5.2 |

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

Known issues for the unit test:
1. Sometime when you run the unit test with Jest it may immediately exit without even starting any unit test, but after you wait for another minute it may work properly. This happen because Jest need to use experimental VM modules for creating sandboxed browser context, and as far as I know it's due to VM cache and the bug still haven't fixed from Node.js side yet. Some other project from other developer also have this issue.
2. The unit test usually finish not more than 5 minutes, and can fail if the network is unstable as it has some test that connect to Westend test network.