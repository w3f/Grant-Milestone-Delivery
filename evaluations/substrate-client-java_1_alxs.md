# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/substrate_client_java.md
- **Milestone:** 1

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/strategyobject/substrate-client-java/blob/v0.1.0/LICENSE) | Apache 2.0 | 
| 1. | Documentation | <ul><li>[x] </li></ul> | [how-to](https://github.com/strategyobject/substrate-client-java/wiki/HowTo-Examples), [Storage](https://github.com/strategyobject/substrate-client-java/wiki/Storage), [javadocs](https://strategyobject.github.io/substrate-client-java/) | Excellent javadocs, wiki, basic tutorial and [sample project](https://github.com/strategyobject/substrate-client-sample)
| 2. | Testing | <ul><li>[x] </li></ul> | [Tests](https://github.com/strategyobject/substrate-client-java/tree/v0.1.0/storage/src/test/java/com/strategyobject/substrateclient/storage) | unit tests, integration tests
| 3. | Wiki | <ul><li>[x] </li></ul> | [Wiki](https://github.com/strategyobject/substrate-client-java/wiki) | doesn't exactly explain the details of the implementation, but this level of details seems fine for now and the wiki will likely grow naturally |
| 4. | Query API | <ul><li>[x] </li></ul> | [storage](https://github.com/strategyobject/substrate-client-java/tree/v0.1.0/storage) | Only JSON-RPC exposed types implemented | 

## General Notes

Clean, nicely architected code and excellent Javadocs.
The project initially lacked a tutorial to get started without diving into the project itself, which the team promptly delivered.

Packages are provided under https://github.com/orgs/strategyobject/packages?visibility=public

Custom types have to be implemented manually, which can be done fairly easily [as an annotated interface](https://github.com/strategyobject/substrate-client-java/wiki/Pallet#define-a-pallet).
Perhaps this could be automated in the future.
