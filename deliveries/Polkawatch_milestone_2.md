# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Polkawatch](https://github.com/w3f/Grants-Program/blob/master/applications/Polkawatch.md) 
* **Milestone Number:** 2

**Context**

This milestone delivers the distributed data pack (DDP) and Distributed Application (DAPP) of Polkawatch.

**Deliverables**

| Number | Deliverable       | Link                                                         | Notes                                                        |
| ------ | ----------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License           | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/LICENSE) | Apache 2.0                                                   |
| 0b.    | Documentation     | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/Readme.md) [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/deploy/Readme.md) | Multiple Readme.md files across the repository context-linked. In-line code Documentation. |
| 0c.    | Testing Guide     | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2#testing-guide) | Included as part of Documentation covers unit testing, integration (e2e) testing, Visual UI testing, and test deployment of the system. |
| 0d.    | Docker            | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/docker-compose.yml) [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/deploy/docker-compose.yml) | Docker Compose for development and testing (with multiple profiles) and Docker Compose for deployment using Gitlab Pipeline deliverables. |
| 0e.    | Article           | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2/blog) | Article and Video have been produced, publishing to be coordinated with W3F and public infrastructure launch |
| 1.     | DDP               | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2/packages/ddp) | Distributed Data Pack builder node module, implemented in Typescript/Javascript. Uses the LQS to build IPFS friendly data to be consumed by the DAPP. Also serves as development endpoint during full-stack work on UI and Data. |
| 2.     | DAPP              | [Link](https://gitlab.com/polkawatch/polkawatch/-/tree/W3F_MILESTONE_2/packages/dapp) | Distributed Application Node/React module, implemented in Javascript+Typescript. React based DAPP, built with Material UI toolkit, Gatsby and Storybook for Visual and Isolated UI control testing. |
| 3.     | Gitlab Pipelines  | [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/.gitlab-ci.yml) [Link](https://gitlab.com/polkawatch/polkawatch/-/blob/W3F_MILESTONE_2/deploy/daily-datapack-generation.gitlabci.yml) [Link](https://hub.docker.com/search?q=polkawatch&type=image) [Link](https://gitlab.com/polkawatch/polkawatch/-/pipelines/480330716) | A Gitlab pipeline runs Unit tests on every commit or PR. A Gitlab pipeline for Daily DDP publishing is delivered. Additionally a docker image release can be triggered, versioning and upload to docker hub is automated too. |

**Additional Information**

A polkawatch cluster is in operation since delivery of milestone 1 at Valletech AB datacenter. Publishing daily Data Packages have been running since April 11th. 
We are now moving towards putting Polkawatch in public production. We will be getting additional dedicated, public facing infrastructure next.
We continue to engage validators with decentralization potential for cooperation.
