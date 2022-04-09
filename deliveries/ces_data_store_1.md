# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md. 
* **PR Link:** https://github.com/w3f/Grants-Program/pull/855
* **Milestone Number:** 1

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                     | Link                                                         | Notes                                                        |
| ------ | ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License                         | [Apache 2.0](https://github.com/CESSProject/data-store-pallet/blob/main/LICENSE) |                                                              |
| 0b.    | Documentation                   | [https://github.com/CESSProject/data-store-pallet/blob/main/docs/tutorial.md](https://github.com/CESSProject/data-store-pallet/blob/main/docs/tutorial.md) | Basic tutorial that explains how a user can spin up one of our Substrate nodes and send test transactions, which will show how the new functionality works. |
| 0c.    | Testing Guide                   | [https://github.com/CESSProject/data-store-pallet#run-tests](https://github.com/CESSProject/data-store-pallet#run-tests) | Core functions in pallets are covered by unit tests to ensure functionality and robustness. Tests can be run in the docker container also. |
| 0d.    | Docker                          | [https://github.com/CESSProject/data-store-pallet#run-in-docker](https://github.com/CESSProject/data-store-pallet#run-in-docker) | Provided a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 1a.    | Substrate module: data_store    | [https://github.com/CESSProject/data-store-pallet/tree/main/pallets/data-store](https://github.com/CESSProject/data-store-pallet/tree/main/pallets/data-store) | Created a Substrate module that will implement meta-info management of stored data, including functions such as store, retrieve, replace, delete, edit, query. |
| 1b.    | Benchmarking                    | [https://github.com/CESSProject/data-store-pallet#run-tests-with-benchmarks](https://github.com/CESSProject/data-store-pallet#run-tests-with-benchmarks) | The module on par with other pallets in FRAME, fully equipped with benchmarking, weights, tests.                           |
