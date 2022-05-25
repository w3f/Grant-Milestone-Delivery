# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkawatch.md
- **Milestone:** 2
- **Kusama Identity:** -
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/378

| Number | Deliverable      | Accepted | Link                                                             | Evaluation Notes                                                                        |
|--------|------------------| -------- |------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| 0a.    | License          |<ul><li>[x] </li></ul>| [/polkawatch/LICENSE](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/LICENSE) |  Apache 2.0                                                                            |
| 0b.    | Documentation    |<ul><li>[x] </li></ul>| [/polkawatch/Readme.md](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/Readme.md) [/polkawatch/deploy/Readme.md](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/deploy/Readme.md)  | Well written documentation provided. |
| 0c.    | Test Guide       |<ul><li>[x] </li></ul>| [/polkawatch/#testing-guide](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2#testing-guide) | Unit, end-to-end, and GUI tests, plus test deployment.                                                                                      |
| 0d.    | Docker           |<ul><li>[x] </li></ul>| [/polkawatch/docker-compose.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/docker-compose.yml) [/polkawatch/deploy/docker-compose.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/deploy/docker-compose.yml)                                                              | DevTest & Prod deployments.                                                                                     | 
| 0e.    | Article          |<ul><li>[x] </li></ul>| [/polkawatch/blog/Polkawatch%20Blog%20Post%20w3f%20milestone%202.pdf](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/blog/Polkawatch%20Blog%20Post%20w3f%20milestone%202.pdf)  [/polkawatch/blog/Polkawatch%20Blog%20Post%20w3f%20milestone%202.odt](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/blog/Polkawatch%20Blog%20Post%20w3f%20milestone%202.odt)                                                              | Blog post with an accompanying video                                                                 |
| 1.     | Distributed Data Pack   |<ul><li>[x] </li></ul>| [/polkawatch/packages/ddp](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2/packages/ddp) | Please see evaluation notes below |
 2.     | Dapp |<ul><li>[x] </li></ul>| [/polkawatch/packages/dapp](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2/packages/dapp) | Please see evaluation notes below |
 3.     | CI/CD pipelines for Gitlab  |<ul><li>[x] </li></ul>| [/polkawatch/.gitlab-ci.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/.gitlab-ci.yml) <br />[/polkawatch/deploy/daily-datapack-generation.gitlabci.yml](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/deploy/daily-datapack-generation.gitlabci.yml) <br />[https://hub.docker.com/search?q=polkawatch&type=image](https://hub.docker.com/search?q=polkawatch&type=image) <br />[/polkawatch/polkawatch/-/pipelines/480330716](https://gitlab.com/polkawatch/polkawatch/-/pipelines/480330716) | Please see evaluation notes below|

## General Notes

- Provided tests were very valuable and thorough.

- The Distributed Data Pack (DDP) builder node works as expected.

- The Dapp works as expected.

- The Gitlab pipeline for Daily DDP publishing is practical, we appreciate all CI/CD work.

- Useful note if testing on a cloud instance: allow tcp:3000,5432,5601,7000,7200,9200,9300.

