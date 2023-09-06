# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md 
* **Milestone Number:** 2

**Context**  
In this milestone we have developed the “project” panel and implemented the Polkadot js library.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE]( https://github.com/sandoxio/sandox/blob/main/LICENSE) | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) | Explaining basic features. |
| 0c. :heavy_check_mark: | Testing Guide | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) | A guide explaining how to build the app. |
| 1. :heavy_check_mark: | “Project” panel | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/panels/projectInfo/projectInfo.js) | The Project panel displays [hierarchical project tree](https://github.com/sandoxio/sandox/blob/main/src/components/ui/tree/tree.js) and can [add](https://github.com/sandoxio/sandox/blob/main/src/components/modal/project/createFile/createFile.js)/[delete](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L256) files and [add](https://github.com/sandoxio/sandox/blob/main/src/components/modal/project/createDirectory/createDirectory.js)/[delete](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L286) folders. | 
| 2. :heavy_check_mark: | Polkadot js implementation | [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L399) | The Polkadot js library for interaction with parachains. | 
| 3. :heavy_check_mark: | Project compiling feature | [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) | We have developed a code [compiling](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L48) and [run](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L79) feature from all files of a project. | 

**Additional Information**  

Here's a short demo video of the results of this milestone:  
[![Demo video](https://img.youtube.com/vi/jkzKwSGnxCg/hqdefault.jpg)](https://youtu.be/jkzKwSGnxCg)
