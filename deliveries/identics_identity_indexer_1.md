# Milestone Delivery :mailbox:

**The delivery is according to the official
[milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**

- **Application Document:** [multichain_identity_indexer.md](https://github.com/w3f/Grants-Program/blob/master/applications/multichain_identity_indexer.md)
- **Milestone Number:** 1

**Context** (optional)

The milestone 1 of KodaLabs's Identity indexer for identities on People chain and Polkadot contains
and delivers the following:

- Schema for all the entities that are going to be indexed by the indexer.
- The indexer is able to index the following entities:
  - Identity
  - Registrar
  - Authority
  - Sub
  - Username
  - Event
- The indexer is able to index the following pallets:
  - Identity


**Deliverables**

| Number | Deliverable | Link | Notes |
|----------|-------------|-------------|-------------|
| 0a. | Licensing | [LICENSE](https://github.com/vikiival/identics/blob/main/LICENSE)  | MIT |
| 0b. | Documentation | [an explicit README file to guide the project setup and execution](https://github.com/vikiival/identics/blob/feat/identics-m1/README.md) | - |
| 0c. | Testing Guidelines | [Testing](https://github.com/vikiival/identics/tree/feat/identics-m1/tests) | used vitest + API test are running only if server is running |
| 0d. | Docker Integration | [Docker Compose](https://github.com/vikiival/identics/blob/feat/identics-m1/docker-compose.yml) | needs to run as docker compose |
| 0e. | Github Wiki queries | [WIKI](https://github.com/vikiival/identics/wiki/Querying-data-via-GraphQL) | - |
| 1a. | Identity Registration Schema | [GraphQL schema Identity](https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L1)  | - |
| 1b. | Identity Management Handlers | [identity handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/identities) | - |
| 1c. | Identity Events Processing | [identity handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/identities) | - |
| 2a. | Registrar System Schema | [GraphQL schema Registrar](https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L30)  | - |
| 2b. | Registrar Management Handlers | [registrar handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/registrars) | - |
| 2c. | Judgment System Implementation | [judgements handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/judgements) |- |
| 3a. | Sub-Identity Schema Development | [GraphQL schema SubIdentity](https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L51)  | Used `Sub` instead of `SubIdentity` |
| 3b. | Sub-Identity Management Handlers | [sub handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/subs) | - |
| 3c. | Sub-Identity Events Processing | [sub handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/subs)  | - |
| 4a. | Username System Schema | [GraphQL schema Username](https://github.com/vikiival/identics/blob/feat/identics-m1/schema.graphql#L63)  | - |
| 4b. | Username Authority Handlers | [username handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/usernames) | - |
| 4c. | Username Management Handlers | [username handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/usernames) | - |
| 4d. | Username Cleanup Handlers | [username handlers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/mapping/usernames) | - |
| 5a. | Query Interface Development | [resolvers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/server-extension) | - |
| 5b. | Data Views Implementation | [resolvers](https://github.com/vikiival/identics/tree/feat/identics-m1/src/server-extension) | - |
| 6a. | API Implementation: identityByAccount | [/identities/:id](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L99) | - |
| 6b. | API Implementation: identityListByJudgement | [/identities/judgement/:status](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L187) | - |
| 6c. | API Implementation: identityListByRegistrar | [/identities/registrar/:registrarId](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L240) | - |
| 6d. | API Implementation: subsByAccount | [/subs/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L291) | - |
| 6e. | API Implementation: subsListByName | [/subs/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L333) | - |
| 6g. | API Implementation: registrarList | [/registrars](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L375) | - |
| 6h. | API Implementation: usernameByAccount | [/username/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L414) | - |
| 6i. | API Implementation: accountByUsername | [/account/username/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L455) | - |
| 6j. | API Implementation: usernameListByAuthority | [/usernames/authority/:authority](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L498) | - |
| 6k. | API Implementation: usernameListBySuffix | [/usernames/suffix/:suffix](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L558) | - |
| 6l. | API Implementation: pendingUsernamesByAccount | [/usernames/pending/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L600) | - |
| 6m. | API Implementation: identityListByField | [/identities/field/:field](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L645) | - |
| 6n. | API Implementation: superAccountBySubAccount | [/super/:subAccount](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L710) | - |
| 6o. | API Implementation: identityEventsByAccount | [/events/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L753) | - |
| 6p. | API Implementation: judgementRequestsByRegistrar |  [/judgement-requests/registrar/:registrarId](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L802) | - |
| 6q. | API Implementation: authorityListByAllocation | [/authorities/allocation](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L854) | - |
| 6r. | API Implementation: identityListByVerificationStatus | [/identities/verification/:status](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L884) | - |
| 6s. | API Implementation: identityHistoryByAccount | [/history/:account](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L970)| - |
| 6t. | API Implementation: registrarStatistics | [/registrars/statistics](https://github.com/vikiival/identics/blob/feat/identics-m1/src/api.ts#L1014) | - |


**Additional Information**
> Any further comments on the milestone that you would like to share with us.
The API has been written using the most common stack: Hono and Typescript.
Unit tests were written to ensure the correctness of the code.


The delivery was delayed from the original delivery date, mainly by:
- Adam went to Erasmus and had less time than he originally expected
- There were some data mismatches in the original Polkadot implementation
  - We had to use storage; therefore, the performance of Polkadot indexing was decreased
- We found out that some Events/calls that we have promised to implement do not contain the data that we need
  - We replaced it with effective calls/events
  - The promised calls/events are implemented; however, they are unused
- Various nuances
  - There was a new version of the identity pallet on the people chain - we support it
  - usernames are not connected to identity - we had to figure this out

We apologise for the delay. We believe that future deliveries will be as smooth as before ^_^

We have found deviations from the "original" chain state of the People chain.
Known deviations are:
- `Some registrars are missing` - this could be caused by the fact that some registrars could be loaded "by default"
- `.dot username authority is missing` - this could be caused by the fact that authority was in the pallet from day 1 - therefore, it needs to be read from storage

As a runner setup, we highly recommend using [casey/just](https://github.com/casey/just) to run the indexer.
