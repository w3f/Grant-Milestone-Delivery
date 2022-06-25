# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ces_data_store.md. 
* **PR Link:** https://github.com/w3f/Grants-Program/pull/855
* **Milestone Number:** 3

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable                     | Link                                                         | Notes                                                        |
| ------ | ------------------------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 0a.    | License                         | [GPLv3](https://github.com/CESSProject/data-store-sidecar/blob/main/LICENSE) |                                                              |
| 0b.    | Documentation                   | [https://github.com/CESSProject/data-store-sidecar/blob/main/docs/tutorial2.md](https://github.com/CESSProject/data-store-sidecar/blob/main/docs/tutorial2.md) | Basic tutorial that explains how to use data store sidecar to connect to the sample network and storage service of the CESS network. |
| 0c.    | Testing Guide                   | [https://github.com/CESSProject/data-store-sidecar#run-tests](https://github.com/CESSProject/data-store-sidecar#run-tests) | Core functions are covered by unit tests to ensure functionality and robustness. |
| 0d.    | Docker                          | [https://github.com/CESSProject/data-store-sidecar#docker](https://github.com/CESSProject/data-store-sidecar#docker) | Provided a Dockerfile(s) that can be used to test all the functionality delivered with this milestone. |
| 0e.    | Article                         | [https://medium.com/@swowk1/a-new-idea-for-storage-services-with-substrate-in-polkadot-ecosystem-4f96a2aa90f6](https://medium.com/@swowk1/a-new-idea-for-storage-services-with-substrate-in-polkadot-ecosystem-4f96a2aa90f6) | Published an article that explains our project's features, implementation, and user guidelines. |
| 1.     | Data Integrity Verification     | [Data Integrity Proof Design Scheme](https://github.com/CESSProject/CIPs/blob/main/CIP-2.md), [Implementation of Data Integrity Verification in CESS Network](https://github.com/CESSProject/cess/tree/main/c-pallets/segment-book) | Provided integrity verification for stored data to improve the quality of storage services. |
| 2.     | Data Store API                  | [store](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L449), [retrieve](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L481), [replace](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L505), [delete](https://github.com/CESSProject/data-store-sidecar/blob/main/src/services/store/Store.ts#L563) | Added data storage functionality to the data store API, which adapts to existing interactions with Data Store Pallet.       |
| 3.     | Endpoint Docs                   | [https://example-datastore.cess.cloud/docs/](https://example-datastore.cess.cloud/docs/) | Provided Endpoint Docs explaining the usage of the all implemented RESTful API.                           |
