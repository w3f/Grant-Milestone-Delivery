# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md 
* **Milestone Number:** 3

**Context**  
In this milestone we have delivered a settings and projects local storage and some minor features like hotkeys and themes support.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. :heavy_check_mark: | License | [LICENSE]( https://github.com/sandoxio/sandox/blob/main/LICENSE) | Apache 2.0 license |
| 0b. :heavy_check_mark: | Documentation | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) | Explaining basic features. |
| 0c. :heavy_check_mark: | Testing Guide | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) | A guide explaining how to build the app. |
| 0e. | Article | [SanDOx.io on Medium](https://medium.com/@sandox) | Article [Empowering Polkadot Developers with SanDOx.io](https://medium.com/@sandox/empowering-polkadot-developers-with-sandox-io-f7ec179b4e65). |
| 1. :heavy_check_mark: | File search | [Searchbox](https://github.com/sandoxio/sandox/blob/main/src/components/ui/aceEditor/ace/ext-searchbox.js) | We have implemented a search feature in an opened file. |
| 2. :heavy_check_mark: | Hotkeys feature | See [keymap.js](https://github.com/sandoxio/sandox/blob/main/src/components/app/keymap/keymap.js) | We have implemented “events binding hotkeys” to preferences. |
| 3. :heavy_check_mark: | Themes support | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/app/appearance/appearance.js) | We have implemented support for IDE themes and switching functionality. Two default themes are delivered: [light](https://github.com/sandoxio/sandox/blob/main/src/components/app/appearance/themes/light/theme.js) & [dark](https://github.com/sandoxio/sandox/blob/main/src/components/app/appearance/themes/darcula/theme.js). | 
| 4. :heavy_check_mark: | Settings and projects storage | See [projectmanager.js](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) | We have developed a [local storage](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L37) of projects and IDE settings. The project [can be downloaded](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L220) in a ZIP archive. | 

**Additional deliverables**  

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 5. :heavy_check_mark: | Column number | See [code.js](https://github.com/sandoxio/sandox/blob/main/src/components/tabContents/code/code.js) | According to MS2 evaluation report we have added a feature [displaying the column number](https://github.com/sandoxio/sandox/blob/main/src/components/tabContents/code/code.js#L60) of the cursor. | 

**Additional Information**  

Here's a short demo video of the results of this milestone:

[![Demo video](https://i9.ytimg.com/vi_webp/feuukkLKpY0/mq2.webp?sqp=CJCDyakG-oaymwEmCMACELQB8quKqQMa8AEB-AH-CYACtgWKAgwIABABGE4gUihlMA8=&rs=AOn4CLA-u2Ux-x7bVe9JS7INYrVPcPfTTw)](https://youtu.be/feuukkLKpY0)
