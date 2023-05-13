# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Awesome-Polka.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/tolgayayci/awesome-polka/blob/dev/LICENSE) | |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Awesome Polka Docs](https://docs.awesomepolka.org/docs/awesome-polka/getting-started) | |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Guide](https://docs.awesomepolka.org/docs/technical-details/testing) | |
| **0e.** | Article | <ul><li>[x] </li></ul> | [Documentation Includes](https://docs.awesomepolka.org/docs/awesome-polka/getting-started) | |
| **1.** | UI & UX Development | <ul><li>[x] </li></ul> | **Home Page:** [Link](https://awesomepolka.org) <br /><br /> **Projects Page:**  [Link](https://awesomepolka.org/projects)</br></br>**Project Detail Page:**  [Link](https://awesomepolka.org/projects/awesome-polka)<br /></br>**Articles Page:**  [Link](https://awesomepolka.org/articles)<br /></br>**Article Detail Page:**  [Link](https://awesomepolka.org/articles/09885b15-3a16-478f-aa2f-d6929d2f05c8)<br /></br>**Ranking Page:** [Link](https://awesomepolka.org/ranking)</br></br> **Learn Page:** [Link](https://awesomepolka.org/learn)</br></br> **UX Improvements & Testing:**  [Link](https://docs.awesomepolka.org/docs/technical-details/testing)|
| *2.* | Project Owner Dashboard  | <ul><li>[x] </li></ul> | [Dashboard Link](https://awesomepolka.org/dashboard/project) | |

# General Notes

8 unit tests pass (validation using Yup)
```js
yarn run v1.22.15
warning ../package.json: No license field
$ jest
 PASS  src/utils/validation/tests/articleValidation.test.ts
 PASS  src/utils/validation/tests/faqValidation.test.ts
 PASS  src/utils/validation/tests/teamValidation.test.ts
 PASS  src/utils/validation/tests/jobsValidation.test.ts
 PASS  src/utils/validation/tests/coingeckoTokenValidation.test.ts
 PASS  src/utils/validation/tests/githubRepoValidation.test.ts
 PASS  src/utils/validation/tests/profileValidation.test.ts
 PASS  src/utils/validation/tests/descriptionValidation.test.ts

Test Suites: 8 passed, 8 total
Tests:       36 passed, 36 total
Snapshots:   0 total
Time:        1.782 s
Ran all test suites.
✨  Done in 2.92s.
```
