# Evaluation

- **Status:** Accepted
- **Application Document:** [link](https://github.com/w3f/Grants-Program/blob/master/applications/uke-protocol.md)
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable                        | Link | Notes |
| ------ | ---------------------------------- | ---- | ----- |
| 0a.    | License                            | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/LICENSE.md  | Registered under the Apache 2.0 license.  |
| 0b.    | Documentation |  https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md | Good docs and inline comments. See notes below.   | 
| 0c.    | Testing Guide                      | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md#testing--building | Benchmarking and unit tests pass successfully.  |
| 0d.    | Docker                             | https://github.com/Uke-Messaging/uke-pallet/blob/m1-delivery/README.md#running-tests-via-docker   | Successful. |
| 1.     | Uke Pallet                         | https://github.com/Uke-Messaging/uke-pallet/tree/m1-delivery  | Builds locally on `substrate-node-template` and with `uke-node`|
| 1a.    | Uke Pallet - Conversation Storage  | Refer to 1. Uke Pallet  | `storeMessage` function works. See notes below. |
| 1b.    | Uke Pallet - Basic Identity Scheme | Refer to 1. Uke Pallet | `register` function works. See notes below. |

**Additional Information**

This was implemented slightly different from the original proposal. However, the end goal functionality is the same.  I plan to amend the original proposal in due time as this milestone pans out. 

**UPDATE:** The [amendment PR](https://github.com/w3f/Grants-Program/pull/1202) was submitted and merged.

# General Notes

Nice app! I can already see the PoC coming together here. Great delivery overall, and I think that p2p messaging systems like this are very necessary. I can't wait to see what the front end looks like. 

## Documentation & Testing

Great documentation and code comments. You might consider adding some scenario examples as well. Manually testing worked for all modules, as well as producing errors. I could successfully query the chain state with `activeConversations`, `conversations()`, `isActiveConversation()`, `palletVersion()`, `usernames()`.

**Uke Pallet - Conversation Storage**

I'm able to successfully use `storeMessage(message, time, convoId, recipient)` to store a message and create a conversation. I can also create new conversations, manage them, mark them as active, and add new messages.

**Uke Pallet - Basic Identiy Scheme**

I'm able to successfully `register` a username to an `AccountId` and query it from chain state. Correctly maps active convos to `StorageMap` for both participants.

**Please Note:** No security audit(s) have been conducted as a part of this evaluation.
