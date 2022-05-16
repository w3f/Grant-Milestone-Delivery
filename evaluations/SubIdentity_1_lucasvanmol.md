# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/tree/master/applications/SubIdentity.md
- **Milestone:** 1
- **Kusama Identity:** Fa73LcKf9BMHUp9k6wv7LiHu2jd65UhWPn7JSRUPpt2XgAQ
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li><ul> | [subidentity-webapp](https://github.com/TDSoftware/subidentity-webapp/blob/4f1c3c6855ce76d2bc43f3aa17bb60b02798686a/LICENSE), [subidentitiy-package](https://github.com/TDSoftware/subidentity-package/blob/0169bddeac12de534b126198d6818feac8939da3/LICENSE) | Apache 2.0 for both repositeries|
| 0b. | Documentation | <ul><li>[x] </li><ul> | [subidentity-webapp](https://github.com/TDSoftware/subidentity-webapp/blob/4f1c3c6855ce76d2bc43f3aa17bb60b02798686a/README.md), [subidentity-package](https://github.com/TDSoftware/subidentity-package/blob/0169bddeac12de534b126198d6818feac8939da3/README.md), [tutorial](https://github.com/TDSoftware/subidentity-webapp/blob/4f1c3c6855ce76d2bc43f3aa17bb60b02798686a/docs/Tutorial.md) | Basic documentation on installing, running and testing the application are shown in the README and are working as expected. In addition, there is also reasonable inline documentation of code. The website itself is simple enough that the tutorial isn't needed at this stage except for giving an overview of functionality. |
| 0c.	| Testing |	 <ul><li>[x] </li><ul> |  | All components with logic are tested in `subidentity-webapp`. `subidentity-package` is also adequately unit tested but could use more coverage for unexpected inputs (see general notes below). |
| 1. | Concept and design | <ul><li>[x] </li><ul> |  | Intuitive design and good responsiveness overall for the search, list view and detailed identity view. |
| 2. | Implement logic for querying identities | <ul><li>[x] </li><ul> | [subidentity-package](https://github.com/TDSoftware/subidentity-package/tree/0169bddeac12de534b126198d6818feac8939da3) | Works correctly for normal inputs |
| 3. | Implement UI for search and list view | <ul><li>[x] </li><ul> | [subidentity-webapp](https://github.com/TDSoftware/subidentity-webapp/tree/4f1c3c6855ce76d2bc43f3aa17bb60b02798686a) | Overall UI design is intuitive, with some minor hiccups (see general notes).  |
| 4. | Implement UI for detailed identity view| <ul><li>[x] </li><ul> | [subidentity-webapp](https://github.com/TDSoftware/subidentity-webapp/tree/4f1c3c6855ce76d2bc43f3aa17bb60b02798686a) | See above. In addition, custom plugins can provide additional functionality as outlined in the README. |


## General Notes


Overall the deliverables are adequately met. The UI is responsive and intuitive, and works well in both desktop and mobile resolutions. 


Additional feedback:

* Search strings with more search results are slower to appear which may become problematic as more on-chain identities are registered. 
* Some (unexpected?) search strings e.g. "*" cause errors in the console and the spinner to spin continously, giving the impression that the website is hanging.
* The detailed identity view could perhaps use the space a bit better for desktop resolutions, and it would be nice to have additional data such as registrar information for judgements included with the default `BasicInfoPlugin.vue`.
