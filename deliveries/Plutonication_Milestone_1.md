# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
* **Milestone Number:** 1

**Context** PlutonicationServer

An integral part of Plutonication, used for:
- Establishing reliable connection.
- Passing payloads and messages between Wallets and dApps.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [PlutonicationServer](https://github.com/RostislavLitovkin/PlutonicationServer/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | Docs for running all codes is in the [Readme](https://github.com/RostislavLitovkin/PlutonicationServer/#readme). [Guide for deploying to Cloud](https://plutonication-acnha.ondigitalocean.app/deploy) is here. I have also included [Low-level docs](https://plutonication-acnha.ondigitalocean.app/docs) for tinkerers. |  |
| **0c.** | Testing and Testing Guide | Guide for running tests is in the [Readme](https://github.com/RostislavLitovkin/PlutonicationServer/#readme) | I have realised that I am unable to end to end test this milestone before I complete milestones 2 and 3. I have included unit tests instead, to showcase all fuctions work properly. I still plan to end to end test all of the functionalities as mentioned, when working on other milestones. |
| **0d.** | Docker | [Dockerfile](https://github.com/RostislavLitovkin/PlutonicationServer/blob/milestone-delivery/Dockerfile) |  |
| 1a. | create_room | [create_room](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L39) |  |
| 1b. | pubkey | [pubkey](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L51) |  |
| 1c. | sign_payload | [sign_payload](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L65) |  |
| 1d. | sign_raw | [sign_raw](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L77) |  |
| 1e. | payload_signature | [payload_signature](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L89) |  |
| 1f. | raw_signature | [raw_signature](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L109C1-L109C1) |  |

**Additional Information**
