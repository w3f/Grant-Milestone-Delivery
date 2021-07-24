# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account, which is responsible for the pull request of the accepted application is allowed to submit milestones. 
> 
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Standard_Protocol.md 
* **Milestone Number:** 1

> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable            | Link                                                                                                           | Note                                                                                                              |
|--------|------------------------|----------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------|
| 0a.    | License                | https://github.com/digitalnativeinc/standard-substrate/blob/open-grants-milestone1/LICENSE                     | Apache License 2.0                                                                                                |
| 0b.    | Documentation          | https://docs.standard.tech/runtime-modules/oracle  https://app.gitbook.com/@standard-protocol-1/s/standard-protocol-validator-guide/provider-setup/oracle-binary                                                                                     | Documentation will give high level overview of the oracle module and how to install oracle and validate                         |
| 1.     | Oracle Client          | https://github.com/digitalnativeinc/lumen                                                                      | Oracle client to receive information from external sources then submit information regularly to substrate runtime |
| 2.     | Modified Oracle Module | https://github.com/digitalnativeinc/standard-substrate/tree/open-grants-milestone1/pallets/oracle              | Oracle module to register operators and batch                                                                     |
| 3.     | Unit test codes        | https://github.com/digitalnativeinc/standard-substrate/blob/open-grants-milestone1/pallets/oracle/src/tests.rs | Unit test codes in `tests.rs` in each runtime module                                                              |
| 4.     | Npm binary             | https://www.npmjs.com/package/@digitalnative/lumen                                                             | We will provide a npm binary for oracle providers to install and run an oracle client                             |
| 5.     | Dockerfile             | https://hub.docker.com/repository/docker/standardprotocol/opportunity-standalone                               | Dockerfile for running Standard protocol binary will be provided                                                  |
