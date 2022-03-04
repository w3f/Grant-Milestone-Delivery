# Milestone Delivery :mailbox:


**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

This milestone is submitted from a different github organization than it originated.  Grant committee has been notified and an amendment is being drafted to account for this. Invoice will be sent after.  

* **Application Document:** Please, provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory).

[Original Application Link](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md)

* **Milestone Number:** e.g. 1

[Milestone 1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables)

**Context** (optional)

This grant is based off of work we did in a [prior grant](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) where the focus is on operations over design.  While the work from the prior grant provided a strong foundation to build on, much of the code had to be reorganized to both work within our current stack and make them deployable by the community. Instead of many opinionated modules that needed to be deployed together, our current design uses two core modules with options to deploy any type of polkadot node (validator, API, source of truth, telemetry) in a variety of different network topologies. 

Alongside the above development, attention was put into enhancing the observability suite to collect metrics and logs from all aspects of the stack. A high level status page has been deployed with links down to grafana, kibana, and telemetry dashboards where alarms are built on the underlying data feeds to drive incident response routines. 

**Deliverables**

| Number | Deliverable | Link | Notes | Engineering Time |
| --- | --- | --- | ---------- | --- |
| 1. [D1](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | Extend to include Kusama and Operations | All code can be found at [substrate-meta](https://github.com/geometry-labs/substrate-meta). See note above about testing. | Efforts were made to make the deployment simpler for new users consolidating several prior modules into two single modules, one for a single node run as a validator, API, or telemetry node and one for autoscaling API nodes. Additional information about the stack was written and waiting to be published. | 5 days original estimate / 25 days actual |
| 2. [D2](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | Monitoring a logging | [Grafana US](https://grafana.substrate.us-west-2.aws.geometry.io/) [Grafana EU](https://grafana.substrate.eu-west-1.aws.geometry.io/) [Kibana](https://kibana.us-west-2.aws.geometry.io/) [Telemetry](http://telemetry.substrate.geometry.io/#/0x91b171bb158e2d3848fa23a9f1c25182fb8e20313b2c1eb49219da7a70ce90c3) | Monitoring and logging data streams have been piped into dashboarding tools and alarms configured internally to support on-call rotation schedules via pagerduty. Websockets needed special handling for logging so [log interceptor](https://github.com/geometry-labs/websocket-logger) was built for this project. | 13 days original estimate / 16 days actual |
| 2. [D3](https://github.com/w3f/General-Grants-Program/blob/master/grants/speculative/load_balanced_endpoints_operations.md#milestones-and-deliverables) | Monitoring a logging | [status.substrate.geometry.io](https://status.substrate.geometry.io/) | Initially we were planning on using [Cachet](https://github.com/CachetHQ/Cachet) for a status page, a popular self hosted open source solution. After not being able to get it to support the exact feature set we were looking for, attention was moved to a newer github hosted solution called [Upptime](https://github.com/upptime/upptime) which we plan on supporting long term. Links to all dashboards above can be navigated to via the status page serving as the central hub for all monitoring. | 5 days original estimate / 15 days actual |

#### **Explanations of Deviations from Original Scope** 

- Deliverable 1 
    - The most significant deviation came from re-writing the core terraform modules used in this project into consolidated modules that we felt would be able to be adopted by the community more easily. 

    - A new configuration object was built to support multiple parachains. This object had to be configured from terraform and flow into the ansible playbooks used to deploy images with packer and VMs directly. 

    - To have georouting work with the global load balancer and have the ability to issue certificates with letsencrypt, a new networking pattern had to be implemented. Certificates were issued at both the apex and in zones for each individual cluster. 

    - To allow the deployment to better integrate into our existing infrastructure, work was done to add the deployment to a service mesh powered by Envoy, which required changes to almost every module. For the autoscaling API nodes, this required a lot of complex templating but was needed to integrate with the rest of our services. 

- Deliverable 2
    - To aggregate the logs from multiple regions required an enterprise elasticsearch license so we opted to setup individual elasticsearch DBs in each region. 
    
    - Troubleshooting and diagnosis was required for the middleware to determine why websocket connections were unexpectedly being dropped. It was determined to be an issue with a third-party package that was being used. A patch was applied, which solved the issue.

    - Extra prometheus exporter for cloudwatch metrics was built and deployed with rules to collect data on autoscaling groups and billing.

- Deliverable 3
    - The decision to ditch cachet did not come without significant developer hours being invested into that solution but ditching it for upptime ultimately was the right choice. The current status page is simpler to setup and runs entirely on github actions. 

    - Monitoring the websockets through upptime was not supported so we made a custom upptime plugin to be able to do this.  This plugin was [contributed back](https://github.com/upptime/uptime-monitor/pull/164) to upptime so that others can benefit. 

    - Metrics were originally being built into cachet but because upptime had its own metrics representation, links to telemetry / kibana were instead included in the upptime status page.


**Additional Information**

This grant was initially proposed by [Insight Data Science](https://insightfellows.com/data-science) though shortly after it was submitted the team underwent a restructuring which had a significant impact on the delivery of this project. As part of the restructuring, the team pivoted our focus to off-chain indexers and APIs, which meant that time to be put towards work for the grant was being shared with other projects. 

While we felt strongly that we should continue the work on the grant, it was necessary to find a way to better integrate the endpoints with the rest of our stack. This includes an API gateway and service mesh based on envoy, not only to better allow us to operate the infrastructure for the endpoints in a sustainable manner, but also that would better prepare us for further grant work that is better aligned with our new entity’s focus. However, as we soon found out, this decision was a double-edged sword.

We did not realize how much preparatory work was required to build and prepare the infrastructure for the API gateway and service mesh, and that such a radical shift would cause such significant delays in delivery. We also were bound by a few decisions that were made at the start of the grant, namely to build out the core components on VMs, which caused other significant integration headaches. Looking back over the decisions we have made, we probably would have done things a lot differently, but we were still able to make things work. If we had done things differently, we probably would have not gone down the path of VMs and developed components strictly to be deployed in a Kubernetes cluster as that would provide a bit more flexibility and ease of deployment.

As unfortunate as these delays were, we are still proud of what we have built and the potential these components have to aid the community. In particular, our endpoints are currently deployed to support Polkadot and Kusama, however, everything is easily extended to support any parachain that has similar requirements. We are still hopeful that other developers and users find utility with what we have created and are grateful for the support we have received in its development.
