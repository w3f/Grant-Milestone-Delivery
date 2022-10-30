# Milestone Delivery :mailbox:

> ⚡ Only the GitHub account that submitted the application is allowed to submit milestones.
>
> Don't remove any of the mandatory parts presented in bold letters or as headlines! Lines starting with `>`, such as this one, can be removed.

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [daos.md](https://github.com/w3f/Grants-Program/blob/master/applications/daos.md)
* **PR Link:** [daos](https://github.com/w3f/Grants-Program/pull/1050)
* **Milestone Number:** 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work.
>
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link                                                                                                                                                                             | Notes |
|--------|------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------- |
| 0a.    | License           | [LICENSE](https://github.com/daos-org/daos#license)                                                                                                                              | APACHE2.0| 
| 0b.    | Documentation        | [https://github.com/daos-org/daos#docs](https://github.com/daos-org/daos#docs)  [https://github.com/daos-org/daos/tree/main/document](https://github.com/daos-org/daos/tree/main/document)                                                                                             | Write Document for each module| 
|0c.| Testing | [https://github.com/daos-org/daos#test](https://github.com/daos-org/daos#test)                                                                                                   | Write test code for each module|
|0d. | Example | [VC DAO template](https://github.com/DICO-TEAM/dico-chain/tree/main/pallets/vc), [use daos for VC DAO](https://github.com/DICO-TEAM/dico-chain/blob/main/runtime/tico/src/vc.rs) |Provides code for examples of using DAOS on substrate projects|
|0e. | Comment |                                                                                                                                                                                  | Provide detailed comments for each module|
|0f.| Benchmarking| [https://github.com/DICO-TEAM/dico-chain/blob/main/scripts/daos_benchmarkall.sh](https://github.com/DICO-TEAM/dico-chain/blob/main/scripts/daos_benchmarkall.sh)                 | Write Benchmarking code for each module|
|1. | create-dao pallet | [create dao](https://github.com/daos-org/daos/tree/main/create-dao)                                                                                                              | Developers can quickly create a behavior template that works with daos, and users can create DAOs based on behavior templates in this module.|
|2. | agency pallet | [agency](https://github.com/daos-org/daos/tree/main/agency)                                                                                                                      |A power agent in DAO can solve some things in DAO more quickly. The module can set the difficulty level of transactions that can be executed by power agent, namely Origin. Has its own voting system|
|3. | doas pallet| [doas](https://github.com/daos-org/daos/tree/main/doas)                                                                                                                          | Through this module, the agency can obtain a dao-account, which is the identity of an ordinary user to perform external transactions|
|4. | square pallet| [square](https://github.com/daos-org/daos/tree/main/square)                                                                                                                      |The highest authority in dao, can execute all transactions in dao. And the execution difficulty of each transaction can be set in this modlue, namely vote weight. Has its own voting system|
|5. | sudo pallet| [sudo](https://github.com/daos-org/daos/tree/main/sudo)                                                                                                                          |Giving someone root privileges can execute all executable methods in dao. It should be remove when the DAO is necessary for decentralization.|


**Additional Information**
> Any further comments on the milestone that you would like to share with us.