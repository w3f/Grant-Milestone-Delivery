# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-boxes.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Apache License 2.0 | <ul><li>[ ] </li></ul> | [LISENCE](https://github.com/avirajkhare00/ink-boxes-ui/blob/bd027e0c01b7f1e8013f90c72eeda7b8f044278c/LISENCE) | See **General Notes** |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | - | See **General Notes** |
| 0c. | Testing and it's Guide | <ul><li>[ ] </li></ul> | [/cypress/e2e/spec.cy.ts](https://github.com/avirajkhare00/ink-boxes-ui/blob/bd027e0c01b7f1e8013f90c72eeda7b8f044278c/cypress/e2e/spec.cy.ts), [README.md](https://github.com/avirajkhare00/ink-boxes-ui/blob/bd027e0c01b7f1e8013f90c72eeda7b8f044278c/README.md) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/avirajkhare00/ink-boxes-ui/blob/bd027e0c01b7f1e8013f90c72eeda7b8f044278c/Dockerfile) | - |
| 0e. | Articles | <ul><li>[ ] </li></ul> | - | See **General Notes** |
| 0. | Creation of website. | <ul><li>[ ] </li></ul> | [ink-boxes-ui](https://github.com/avirajkhare00/ink-boxes-ui/tree/bd027e0c01b7f1e8013f90c72eeda7b8f044278c), https://ink-boxes.netlify.app/ | See **General Notes** |
<br/>

## General Notes v1 - Dec 19, 2022
Overall, the delivery is a bit lacking. This is because, the main thing was developing a UI, but as for now it consists of 2 web pages (also not very nice from a UI perspective). Also there is no way to know how to contribute to the project.
To enhance the delivery, I suggest the following points:

### 0a. Apache License 2.0
The problem is minor, just change the name of the file to `LICENSE` (instead of `LISENCE`).

### 0b. Documentation
The documentation is missing. To improve both the delivery and the website, I suggest to add in the latter a section where you explain how to develop and add a new box (as you wrote in the deliverable specification). Otherwise, you can just add it to the README, but in my opinion it would be more cool in the website (so a user doesn't have to check both things in the same time).

### 0c. Testing and it's Guide
The tests are ok, there is just a minor problem in the guide: `npm test` doesn't work: add the script in the `package.json` file, or edit the line in the README to `npx cypress run`.

### 0e. Articles
I'd like to see at least a draft of the article you plan to publish.

### 0. Creation of website
It works, but I'd try to make it a little prettier at least (for example, the page where you can download the boxes could be a grid instead of a list, the "Download" text in the button is not readable, titles in both landing and boxes pages are huge, landing page is literally just text...).

