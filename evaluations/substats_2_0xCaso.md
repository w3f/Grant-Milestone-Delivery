# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substats.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                | <ul><li>[x] </li></ul> | [License](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/LICENSE) |  |
| 0b.    | Documentation          | <ul><li>[x] </li></ul> | [README.md](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/README.md), [component-introduction.md](https://github.com/CESSProject/substats/blob/master/documents/component-introduction.md) |  |
| 0c.    | Testing Guide          | <ul><li>[x] </li></ul> | [testing-guide.md](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/documents/testing-guide.md) |  |
| 1a.    | Data Reading Module    | <ul><li>[x] </li></ul> | [data-reading-module](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/documents/milestone2-deliverable.md#1a-data-reading-module) |  |
| 1b.    | Data Processing Module | <ul><li>[x] </li></ul> | [data-processing-module](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/documents/milestone2-deliverable.md#1b-data-processing-module) |  |
| 1c.    | The API Module         | <ul><li>[x] </li></ul> | [api-module.md](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/documents/milestone2-deliverable.md#1c-the-api-module) |  |
| 2a.    | API Documentation      | <ul><li>[x] </li></ul> | [api-docs.md](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/documents/api-docs.md) |  |
| 2b.    | Operation Manual       | <ul><li>[x] </li></ul> | [Operation Manual](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/README.md), [About the project](https://github.com/CESSProject/substats/blob/abdc23588be01179688e4d80867eb7dbd980c055/documents/about-framework.md) |  |
<br/>

## General Notes v1 - Feb 1, 2023
The delivery is very good. The documentation and guide is well written. In fact, thanks to it, I managed to test the backend through the developed API. Both the setups with docker and without docker are straightforward.

During the tests, I found an issue: the rows in the database were duplicated (see [my comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/716#pullrequestreview-1277499859) in the pull request). The team fixed immediately the issue, and I didn't find any other problem.

If there are any other bugs, probably they'll be more visible with the frontend, which will be delivered in the next milestone.