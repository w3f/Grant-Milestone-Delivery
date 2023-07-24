# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md 
* **Milestone Number:** 1

**Context** (optional)
In this milestone we have developed the SanDOx IDE app skeleton with some basic features.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE]() | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) | Explaining basic features. |
| 0c. :heavy_check_mark: | Testing Guide | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) | A guide explaining how to build the app. |
| 1. :heavy_check_mark: | IDE app skeleton | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/app/app.js) | The SanDOx IDE [core](https://github.com/sandoxio/sandox/blob/main/src/components/app/app.js#L1), layout, [main menu](https://github.com/sandoxio/sandox/blob/main/src/components/ui/menu/menu.js#L1) of the IDE, [IDE settings menu](https://github.com/sandoxio/sandox/blob/main/src/components/tabContents/settings/settings.js#L1). | 
| 2. :heavy_check_mark: | Project class | [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) | A class with methods for working with projects: [files creation](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L86), [local storage](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L16), [retrieving/changing](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L101) structure and file contents. | 
| 3. :heavy_check_mark: | “Panels” feature | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/ui/panelspace/panelspace.js) | We have developed [panels content display](https://github.com/sandoxio/sandox/blob/main/src/components/ui/panels/panels.js) and panels [drag’n’drop feature](https://github.com/sandoxio/sandox/blob/main/src/components/ui/panelspace/panelspace.js#L105). | 
| 4. :heavy_check_mark: | Code editor | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/tabContents/code/code.js) | We have implemented a code editor (based on the Ace editor) with code highlighting and multiple files opening in panels. | 
| 5. :heavy_check_mark: | Code compiling feature | [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L11) | Compiles and runs code from a single file. | 
| 6. :heavy_check_mark: | “Console” panel | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/panels/console/console.js) | A “console” panel to display results of a user's code. | 

**Additional Information**
Here's a short demo video of the results of this milestone:
[![ms1 preview](https://github-production-user-asset-6210df.s3.amazonaws.com/130372146/252937788-b9df91d2-b65d-4b62-b988-39c2d12b704f.jpg)](https://youtu.be/42MsyZh1HRg)
