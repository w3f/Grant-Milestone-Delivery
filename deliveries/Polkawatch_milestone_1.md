# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Polkawatch](https://github.com/w3f/Grants-Program/blob/master/applications/Polkawatch.md) 
* **Milestone Number:** 1

**Context**

This milestone delivers the data management modules of Polkawatch: Indexer and Live Query Server. 

**Deliverables**


| Number | Deliverable       | Link                                                         | Notes                                                        |
| ------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License           | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_1/LICENSE) | Apache 2.0                                                   |
| 0b.    | Documentation     | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_1/Readme.md) [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_1/deploy/Readme.md) | Multiple Readme.md files across the repository context-linked. In-line code Documentation. |
| 0c.    | Testing Guide     | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_1#testing-guide) | Included as part of Documentation covers unit testing, integration (e2e) testing, and test deployment of the system. |
| 0d.    | Docker            | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_1/docker-compose.yml) [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_1/deploy/docker-compose.yml) | Docker Compose for development and testing (with multiple profiles) and Docker Compose for deployment using Gitlab Pipeline deliverables. |
| 1.     | Indexer Extension | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/main/packages/indexer) | The Indexer extends the archive (subquery) engine by means of a 2nd-pass indexing that builds the inverted index (elasticsearch). Builds the traces and logs/labels data quality issues. |
| 2.     | Live Query Server | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/main/packages/lqs) [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/main/packages/lqs/src/queries/Readme.md) | LQS Node Module that provides a programatic interface to the indexer. Adding new queries has been simplified as much as possible, Documentation on extending with additional queries is provided. Multiple instances of queries are also provided. |
| 3.     | Gitlab Pipelines  | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/main/.gitlab-ci.yml) [Link](https://hub.docker.com/search?q=polkawatch&type=image) [Link](https://gitlab.com/polkawatch/polkawatch/-/pipelines/480330716) | A Gitlab pipeline runs Unit tests on every commit or PR. Additionally a docker image release can be triggered, conversioning and upload to docker hub is automated too. |

**Additional Information**

Milestone 2 is also underway, we have done some of the UI development to assure end-to-end viability of chosen stack. We expect delivery 2 in 4 weeks.
