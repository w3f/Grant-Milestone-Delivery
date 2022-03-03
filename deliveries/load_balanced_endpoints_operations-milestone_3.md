# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

This milestone is submitted from a different github organization than it originated.  Grant committee has been notified and an amendment is being drafted to account for this. Invoice will be sent after.  

* **Application Document:** Please, provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory).

[Original Application Link](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md)

* **Milestone Number:** e.g. 1

[Milestone 3](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables)

**Context** (optional)

This is the third and last deliverable out of three focusing on operating the endpoints on AWS.  Budget was built before the change in focus in the grants program to move funding operations to treasury. 

**Deliverables**

| Number | Deliverable | Link | Notes | Engineering Time |
|---|---|---|---|---|
| [M1 D1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | 99% up time for publicly accessible load balanced and quick sync endpoints. Cost optimizations based on resource utilization. | [Status page](https://status.substrate.geometry.io/) + [Resource utilization report](https://docs.google.com/document/d/17k1m8H7mp-lZToNvut9JLnWuSIJ93qMU__e_FxiM4QM/edit?usp=sharing) | See below for details. | 9 days original estimate / 9 days actual | 

**Additional Information**

A major downtime incident happened over the christmas that is summarized in [polkadot-js/apps/pull/6897](https://github.com/polkadot-js/apps/pull/6897). Part of the reason for this downtime was that although our initial load tests on these nodes passed, when experiencing real world load from the polkadot-js application our servers weren't able to keep up with the load of up to 5k requests per second per region. We then decided to increase the instance size as we found that we simply needed more CPU per instance which brought us to run c5d.9xlarges which then had their drives fill and were rolled over to c5d.12xlarges before creating any downtime. These changes in instance sizes led to significent cost overruns from the lean operations budget.  
