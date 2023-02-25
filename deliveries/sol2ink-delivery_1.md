# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sol2ink.md
* **Milestone Number:** 1

**Context** (optional)

First Milestone for Sol2Ink includes Sol2Ink transpiler MVP, which is able to parse simple Solidity contracts to ink! (meaning inheritance is not supported,
parsing of multi-file applications is not supported and in some cases parser may not parse an expresison correctly). All of the known issues will be fixed
in future updates.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a | License | https://github.com/Supercolony-net/sol2ink/blob/main/LICENSE | MIT License |
| 0b | Documentation | https://www.sol2ink.com | Code is documented with inline docs |
| 1 | Sol2Ink CLI	 | https://github.com/Supercolony-net/sol2ink | Instructions with how to run Sol2Ink are in the repository README file |
| 2 | Integrate OpenBrush	 | https://github.com/Supercolony-net/sol2ink | Sol2Ink is using OpenBrush macros when creating the ink! smart contract |
| 3 | Website with guides | https://www.sol2ink.com |  |

**Additional Information**

Sol2Ink is able to parse compilable contracts. It was tested on few OpenZeppelin solidity smart contracts (namely ERC-20, ERC-721, ERC-1155, AccessControl).
These are considered 'simple' smart contracts. More complicated contracts may contain some issues. These will be fixed in upcoming updates, and you can see
check out the known issues in the documentaion.
