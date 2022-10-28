# Evaluation

- **Status:** In progress
- **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/uke-protocol.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable                        | Link | Notes |
| ------ | ---------------------------------- | ---- | ----- |
| 0a.    | License                            | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/LICENSE.md  | Registered under the Apache 2.0 license.  |
| 0b.    | Documentation |  https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md |    |
| 0c.    | Testing Guide                      | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md#testing--building |   |
| 0d.    | Docker                             | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md#running-tests-via-docker   | Successful. |
| 1.     | Uke Pallet                         | https://github.com/Uke-Messaging/uke-pallet/tree/m1-delivery  |  |
| 1a.    | Uke Pallet - Conversation Storage  | Refer to 1. Uke Pallet  |  Included in the pallet, handles creating new conversations, managing them, marking them as active, and adding new messages to them. |
| 1b.    | Uke Pallet - Basic Identity Scheme | Refer to 1. Uke Pallet | Included in the pallet, handles assigning basic string usernames to account Ids (partially inspired by the [nicks pallet](https://github.com/paritytech/substrate/tree/master/frame/nicks)).  |

**Additional Information**

This was implemented slightly different from the original proposal. However, the end goal functionality is the same.  I plan to amend the original proposal in due time as this milestone pans out. 

**UPDATE:** The [amendment PR](https://github.com/w3f/Grants-Program/pull/1202) was submitted and merged.
