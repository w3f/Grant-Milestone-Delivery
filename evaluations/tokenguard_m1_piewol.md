# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Tokenguard.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All evaluations by PieWol

**Milestone Number:** 1

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License |<ul><li>[x] </li></ul>| https://github.com/tokenguardio/dashboard-creator-client/blob/dev/LICENSE | ok |
| 0b  | Documentation |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-client/blob/dev/README.md | please extend the readme. see notes.|
| 0c | Testing and Testing Guide |<ul><li>[ ] </li></ul>|https://github.com/tokenguardio/dashboard-creator-client/tree/dev/src/tests| There is no explicit testing guide. Unit tests are passing.|
| 0d | Dockerfile |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-client/blob/dev/Dockerfile | Why is this not mentioned in the readme? |
| 1 | Metrics Visualization |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-client | please fix the link. |
| 2 | Dashboard Layout |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-client | please fix the link. |
| 3 | Metric Catalogue |<ul><li>[ ] </li></ul>| https://github.com/tokenguardio/dashboard-creator-client | Please fix the link to point at the actual deliverable. E.g. a directory of your repo with the relevant code. Or a relevant section of the documentation.|


## General notes
The dockerfile is completely unmentioned in the readme. Please include a guide to use your project with docker in your readme. Why is almost always the repo root link given for the deliverables? Please use a link as specific to the deliverables as possible.

Please provide an explicit testing guide that gives a tutorial on how to test both the frontend and backend together as this seems to be necessary to save dashboards aswell as even creating visualizations. This testing guide should focus on how to setup backend and frontend locally.

# Visuals
the "delete" and "edit" button from the button settings are overshadowed by the arrow to resize the button itself. In certain sizes of the button these overlap which seems annoying. It would be good if the settings for the button would be on top of the resizing arrow.

# UX
Whenever I am in the settings and have modified anything, I want to go back to designing my dashboard. Yet when I click back into the dashboard to the right of the settings, the settings are not closing. I would expect to see the settings being closed in this case. Same holds true for clicking the "plus" button for adding another element to the dashboard.
