# Evaluation

- **Status:** Accepted
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md)
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a.| License | [LICENSE]() | Correct license |
| 0b.| Documentation | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) | Well documented  generally, missing some minor details, as explained below. Tutorial video is also posted, which helps a lot. |
| 0c.| Testing Guide | [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) | A guide explaining how to build the app. |
| 1.| IDE app skeleton | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/app/app.js) | Skeleton of the app is completed and works as expected | 
| 2.| Project class | [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) | Can create projects and files inside them. | 
| 3.| “Panels” feature | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/ui/panelspace/panelspace.js) | Panels content display is present and drag and drop feature is also enabled. | 
| 4.| Code editor | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/tabContents/code/code.js) | Code editor is implemented, it is possible to create new file, syntax highlighting works | 
| 5.| Code compiling feature | [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L11) | File compilation and running works | 
| 6.| “Console” panel | [See here](https://github.com/sandoxio/sandox/blob/main/src/components/panels/console/console.js) | Console panel is present and works as expected | 

## General Notes

Overall, it's a solid project, well documented and all the promised features work as expected. Looking forward to new features in the future milestones.

### Minor issues

- There are minor issues that can be avoided by documenting necessary pre-requisites for running the app. For example, it requires `rollup` and `build.sh` should be given executable permissions.
- `dist` file should be added to `.gitignore`

### Tests

There are no tests for the project. Maybe you can consider adding end-to-end/UI tests in the future milestones using Cypress or similar tools.

## Logs and screenshots

<img width="1721" alt="Drag'n'drop" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/c85e02ee-5100-4a51-9e45-cd836c19ccda">

<img width="1721" alt="General features" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/a7d184dc-5a8b-415e-9bf9-4b47c72d2fdf">

<img width="1721" alt="Other features" src="https://github.com/dastansam/Grant-Milestone-Delivery/assets/88332432/f2c27c90-5b47-497e-9fea-ebaf1c1cfcf6">

