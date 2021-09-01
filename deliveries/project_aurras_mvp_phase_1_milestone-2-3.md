# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).** 

* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/163
* **Milestone Number:** [Milestone #2](https://github.com/w3f/Grants-Program/blob/master/applications/project_aurras_mvp_phase_1.md#milestone-2--event-manager---part-1)
https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[aurras-event-feed-substrate-js](https://github.com/HugoByte/aurras-event-feed-substrate-js/blob/master/LICENSE)<br/>[aurras](https://github.com/HugoByte/aurras/blob/master/LICENSE)<br/>[aurras-documentation](https://github.com/HugoByte/aurras-documentation/blob/master/LICENSE)<br/>[aurras-deployment-docker-compose](https://github.com/HugoByte/aurras-deployment-docker-compose/blob/master/LICENSE)<br/>[aurras-deployment-kubernetes](https://github.com/HugoByte/aurras-deployment-kubernetes/blob/master/LICENSE)| All the packages uses the Apache 2.0 license. |
| 0c. | Testing Guide | [aurras-event-feed-substrate](https://github.com/HugoByte/aurras-event-feed-substrate-js/tree/master#testing)<br/>[aurras](https://github.com/HugoByte/aurras#testing) <br/> [Integration Test](https://github.com/HugoByte/aurras-event-manager/blob/next/docs/integration-testing.md) | Unit Tests: <br/>[Aurras Actions](https://github.com/HugoByte/aurras/tree/next/actions) |
| 1a. | Kafka Provider: Fork | Fork Existing [openwhisk-package-kafka](https://github.com/apache/openwhisk-package-kafka/) | [kafka-provider-feed](https://github.com/HugoByte/aurras/tree/next/actions/kafka-provider-feed)<br/>[kafka-provider-web](https://github.com/HugoByte/aurras/tree/next/actions/kafka-provider-web)<br/>[event-producer](https://github.com/HugoByte/aurras/tree/next/actions/event-producer)<br/>[NOTICE](https://github.com/HugoByte/aurras/blob/next/NOTICE#L1) |
| 2. | Database Service | Implement DB Service, DB Integration, Connect DB provided through configuration variables | [Source](https://github.com/HugoByte/aurras/blob/next/actions/common/src/types/context.rs)|
| 3a. | Event Manager: Event Source Registration | Integrate with DB service - CouchDB, Register Source with Chain Name, Chain Specification, Create Unique topic for provided Section-Method, Return created topics - Section-Method Map | [event-receiver](https://github.com/HugoByte/aurras/tree/next/actions/event-receiver)<br/>[event-processor](https://github.com/HugoByte/aurras/tree/next/actions/substrate-event-processor)<br/>[event-registration](https://github.com/HugoByte/aurras/tree/next/actions/event-registration)<br/>[Registration Script](https://github.com/HugoByte/aurras/blob/next/register_event_source.sh) |
| 3b. | Event Manager: Kafka provider feed action | Integrate with DB service - CouchDB, Add CREATE, READ, UPDATE, DELETE lifecycle methods for trigger, Validate parameters (Section-Method, broker, isJSONData, isBinaryValue, isBinaryKey), Get unique topic from DB using Section-Method param,Record topic and related trigger to DB on CREATE lifecycle | [kafka-provider-feed](https://github.com/HugoByte/aurras/tree/next/actions/kafka-provider-feed)<br/>[event-registration](https://github.com/HugoByte/aurras/tree/next/actions/event-registration) |

* **Milestone Number:** [Milestone #3](https://github.com/w3f/Grants-Program/blob/master/applications/project_aurras_mvp_phase_1.md#milestone-3--event-manager---part-2)

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License |[aurras-event-feed-substrate-js](https://github.com/HugoByte/aurras-event-feed-substrate-js/blob/master/LICENSE)<br/>[aurras](https://github.com/HugoByte/aurras/blob/master/LICENSE)<br/>[aurras-documentation](https://github.com/HugoByte/aurras-documentation/blob/master/LICENSE)<br/>[aurras-deployment-docker-compose](https://github.com/HugoByte/aurras-deployment-docker-compose/blob/master/LICENSE)<br/>[aurras-deployment-kubernetes](https://github.com/HugoByte/aurras-deployment-kubernetes/blob/master/LICENSE)| All the packages uses the Apache 2.0 license. |
| 0c. | Testing Guide | The code will have unit-test coverage (min. 50%) to ensure functionality and robustness. In the guide we will describe how to run these tests | [Source](https://github.com/HugoByte/aurras-event-feed-substrate-js/tree/next/tests) |
| 0d. | Article | We will write a Medium article that explains the work done as part of the grant. | Article to be added to medium upon approval from grants team, [link](https://docs.google.com/document/d/1NQP6cO1A3k60JivtbYClxHjdu4j1qqSfwj-bCnaLAFg/edit?usp=sharing) |
| 1a. | Event Manager: Kafka Produce Action | Validate for parameters, Connect to provided brokers, Produce data to provided topic | [Source](https://github.com/HugoByte/aurras/tree/next/actions/event-producer) |
| 1b. | Event Manager: Kafka provider feed action | Integrate with DB service - CouchDB, Delete trigger from DB on DELETE lifecycle, Read trigger from DB on READ lifecycle, Update trigger from DB on UPDATE lifecycle | [Source](https://github.com/HugoByte/aurras/tree/next/actions/kafka-provider-feed) |
| 2a. | Substrate Event Feed: Configuration | Config for Sections of the chain to create unique topics | [Source](https://github.com/HugoByte/aurras-event-feed-substrate-js) |
| 2b. | Substrate Event Feed: Event Source Registration | Event Source Registration | [Source](https://github.com/HugoByte/aurras/blob/next/register_event_source.sh) |

**Note**  

* Considering the comments from first milestone delivery we have added below components that where not in scope inorder bring a utility for this delivery
    * Push Notification
    * Balance Filter
    * Minimal UI for Registering Balance Notification

* Below Components has been scoped out
    * Kafka and Zookeeper Deployment guide - As the deployment is done through Docker Compose and Helm Chart
    * wskdeploy , Event Manager: Intermediate Container as the rust action has to be pre compiled and existing runtime was not compatible we had to customise the runtime for our need. runtime used https://github.com/HugoByte/openwhisk-runtime-rust.
    * Kafka Provider: Helm Chart Configuration as openwhisk helm chart contains the Kafka Provider

**Known Issues**
* Actions might fail if the device has less than 8GB ram
* Connecting to live chain for a long time is not feasible as the Runtime need to be optimized for concurrency
* Push notifications will not be visible if the substrate-push-notification page is on focus. It should either be closed or should be in background after notification registration 
