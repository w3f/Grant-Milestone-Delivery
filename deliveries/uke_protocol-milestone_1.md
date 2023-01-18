# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/uke-protocol.md
- **Milestone Number:** 1

**Context**

The purpose of this milestone was to create a proof of concept pallet for messaging, and a simple identity scheme for doing so. It is not meant to be used in production, and is merely a PoC pallet with plans to expand in the future.

In the next milestone, it will be used as the backend of an Ionic frontend to create a messaging app.

**Deliverables**

> For this delivery, the milestone content is placed under branch `m1-delivery`.

| Number | Deliverable                        | Link | Notes |
| ------ | ---------------------------------- | ---- | ----- |
| 0a.    | License                            | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/LICENSE.md  | Registered under the Apache 2.0 license.  |
| 0b.    | Documentation |  https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md | README the repository contains all necessary documentation for testing, building, and deploying the pallet.   |
| 0c.    | Testing Guide                      | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md#testing--building | Testing and building section for the pallet.  |
| 0d.    | Docker                             | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md#running-tests-via-docker   |  Instructions for running the included `Dockerfile` to test the pallet. For now, it merely just runs the tests + benchmark. |
| 1.     | Uke Pallet                         | https://github.com/Uke-Messaging/uke-pallet/tree/m1-delivery  | The pallet source code, as specified within the Grant Application. |
| 1a.    | Uke Pallet - Conversation Storage  | Refer to 1. Uke Pallet  |  Included in the pallet, handles creating new conversations, managing them, marking them as active, and adding new messages to them. |
| 1b.    | Uke Pallet - Basic Identity Scheme | Refer to 1. Uke Pallet | Included in the pallet, handles assigning basic string usernames to account Ids (partially inspired by the [nicks pallet](https://github.com/paritytech/substrate/tree/master/frame/nicks)).  |

**Additional Information**

This was implemented slightly different from the original proposal. However, the end goal functionality is the same.  I plan to amend the original proposal in due time as this milestone pans out.
