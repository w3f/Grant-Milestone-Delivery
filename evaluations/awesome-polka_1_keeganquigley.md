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

Site is built with Vercel and pretty straight forward to navigate. It is a good proof of concept but right now links to just our blogs and wiki pages. Not much information in any of the categories. I hope to see a lot more information added in the future. Hopefully this will change as people sign up to contribute posts.

## Tests

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
## General Notes V2
UPDATE: Unit tests were added for hooks:
```js
yarn test
yarn run v1.22.15
warning ../package.json: No license field
$ jest
 PASS  src/utils/validation/tests/faqValidation.test.ts
  validateFaq
    ✓ valid faq object passes validation (2 ms)
    ✓ faq object with missing required field fails validation (4 ms)
    ✓ faq object with invalid question length fails validation (1 ms)
    ✓ faq object with invalid answer length fails validation (1 ms)
    ✓ faq object with too few questions fails validation

 PASS  src/utils/validation/tests/jobsValidation.test.ts
  validateJobs
    ✓ valid jobs object passes validation (6 ms)
    ✓ jobs object with missing required field fails validation (18 ms)
    ✓ jobs object with invalid title length fails validation (3 ms)
    ✓ jobs object with invalid link fails validation (2 ms)
    ✓ jobs object with too few job postings fails validation

 PASS  src/utils/validation/tests/teamValidation.test.ts
  validateTeam
    ✓ valid team object passes validation (2 ms)
    ✓ team object with missing required field fails validation (7 ms)
    ✓ team object with invalid LinkedIn URL fails validation
    ✓ team object with too few members fails validation (1 ms)

 PASS  src/utils/validation/tests/descriptionValidation.test.ts
  Description validation
    ✓ should require bio (5 ms)
    ✓ should require bio to be at least 12 characters (1 ms)
    ✓ should require bio to be no longer than 50 characters (1 ms)
    ✓ should allow description to be empty (1 ms)
    ✓ should allow description to be most 1500 characters (3 ms)

 PASS  src/utils/validation/tests/profileValidation.test.ts
  validateProfile
    ✓ should validate a correct profile object (5 ms)
    ✓ should throw an error when bio is missing (12 ms)
    ✓ should throw an error when bio is too short (3 ms)
    ✓ should throw an error when bio is too long (1 ms)
    ✓ should throw an error when image is missing (1 ms)
    ✓ should throw an error when image URL is too short (1 ms)

 PASS  src/utils/validation/tests/githubRepoValidation.test.ts
  validateGithubRepo
    ✓ should validate a correct GitHub repository URL (4 ms)
    ✓ should not validate an incorrect GitHub repository URL (3 ms)
    ✓ should not validate a URL without a repository
    ✓ should not validate an empty URL
    ✓ should not validate a missing URL (1 ms)
    ✓ should return specific error messages

 PASS  src/utils/validation/tests/articleValidation.test.ts
  validateArticle
    ✓ should validate a correct article object (7 ms)
    ✓ should throw an error when title is missing (10 ms)

 PASS  src/utils/validation/tests/coingeckoTokenValidation.test.ts
  ✓ validates a valid CoinGecko URL (8 ms)
  ✓ does not validate an invalid CoinGecko URL (7 ms)
  ✓ requires a CoinGecko URL (1 ms)

 PASS  src/hooks/tests/useCheckProject.test.ts
  useCheckProject
    ✓ should set isLoading to false and not update project when there is no project (7 ms)
    ✓ should not call readProjectAttribute when project is already in the store (2 ms)
    ✓ should handle errors and set isLoading to false (1 ms)

 PASS  src/hooks/tests/useCheckUser.test.ts
  useCheckUser
    ✓ should set isLoading to false and not update user when there is no user (7 ms)

  console.log
    useCheckProject error

      at log (src/hooks/useCheckArticle.ts:17:15)

  console.log
    useCheckProject error

      at log (src/hooks/useCheckArticle.ts:17:15)

 PASS  src/hooks/tests/useCheckArticle.test.ts
  useCheckArticle
    ✓ should set isLoading to false and not update article when the article is not found (10 ms)
    ✓ should handle errors and set isLoading to false (14 ms)

Test Suites: 11 passed, 11 total
Tests:       42 passed, 42 total
Snapshots:   0 total
Time:        3.469 s
```

