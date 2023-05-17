# Milestone Delivery :mailbox:



**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  


* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-smart-contract-wizard.md

* **Milestone Number:**  1

* **Code repository:**

 - https://github.com/avirajkhare00/ink-wizard
 - https://github.com/avirajkhare00/homebrew-ink-wizard
 - PyPi: https://pypi.org/project/ink-wizard/


**Deliverables**


### Milestone - 1


| Number | Deliverable | Specification |
| ------------- | ------------- | ------------- |
| 0a. | Apache License 2.0 | All code will be published under Apache 2.0 https://github.com/avirajkhare00/ink-wizard/blob/main/LICENSE |
| 0b. | Documentation | We will provide both inline documentation of the code. https://github.com/avirajkhare00/ink-wizard/blob/main/README.md |
| 0c. | Testing and it's Guide | Core functions will be fully covered by comprehensive unit tests written in unittest in python which is a great test runner to ensure functionality and robustness. In the guide, we will describe how to run these tests. https://github.com/avirajkhare00/ink-wizard/tree/main/tests/template_generators |
| 0d. | Docker | We will provide a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. https://github.com/avirajkhare00/ink-wizard/blob/main/Dockerfile |
| 0. | Conversion of OpenBrush smart contracts written in Ink to it's templates and sub-templates. | We will be using this code repo: https://github.com/Supercolony-net/openbrush-contracts and will convert them into basic templates and it's sub templates. We will be converting PSP-22, PSP-34, PSP-37 contracts. https://github.com/avirajkhare00/ink-wizard/tree/main/ink_wizard/templates |
| 1. | Creation of code generation logic for Ink smart contracts. | We will be building our own code generator in Python. We will have templatized code and code convertor will output the rendered code with user's selected options. https://github.com/avirajkhare00/ink-wizard/tree/main/ink_wizard/template_generators |
