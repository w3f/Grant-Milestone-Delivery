# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Nolik](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md)
* **Milestone Number:** 2

**Context**

This is the last milestone deliverable of a Nolik CLI app. 
The app fully covers the functionality described in the grant application.
It allows sending data from one client to another without a third party.
In addition to the text form of data, the app enables sending files like photos and videos.


**Deliverables**

During the first milestone, I developed the FRAME pallet, which allows managing a Whitelist and a Blocklist of recipients.
The CLI app has that functionality built-in.
It will enable us to have a decentralised media platform, which I [described as an example](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#use-case-example) in the grant application.

The app allows to:
* Generate Wallets and Accounts (addresses)
* Get free coins from Alice's Keyring account
* Compose messages with key-value text data and attached files
* Send a message to one or several recipients at the same time
* Manage Whitelist and Blacklist of addresses
* Receive encrypted messages and decrypt them on the client side

I also added an [extra validation](https://github.com/chainify/pallet-nolik/blob/5150d3d045e4b0ed33c636ff74a764fc42bed4eb/src/lib.rs#L235) for the Nolik-pallet that allows to validate the uniqueness of the message, and [covered](https://github.com/chainify/pallet-nolik/blob/5150d3d045e4b0ed33c636ff74a764fc42bed4eb/src/tests.rs#L464) it with unit-tests.


| Number | Deliverable   | Link                                                                                                                | Notes       |
|------|---------------|---------------------------------------------------------------------------------------------------------------------|-------------|
| 0a.  | License       | https://github.com/chainify/nolik/blob/da94d55a09ec6c9e4e0be1bf38d88240f1773334/LICENSE.md                          |             | 
|      |               | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/LICENSE.md                      |             |
|      |               | https://github.com/chainify/substrate-nolik-dev/blob/433383dfdc8f28795e9bc566a85849f2b0d13d4b/LICENSE               |             |
|      |               | https://github.com/chainify/pallet-nolik/blob/5150d3d045e4b0ed33c636ff74a764fc42bed4eb/LICENCE                      |             |
| 0b.  | Documentation | https://github.com/chainify/nolik/blob/da94d55a09ec6c9e4e0be1bf38d88240f1773334/README.md                           |             | 
|      |               | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md                       |             |
|      |               | https://github.com/chainify/substrate-nolik-dev/blob/433383dfdc8f28795e9bc566a85849f2b0d13d4b/README.md             |             |
|      |               | https://github.com/chainify/pallet-nolik/blob/5150d3d045e4b0ed33c636ff74a764fc42bed4eb/README.md                    |             |
| 0c.  | Testing Guide | https://github.com/chainify/nolik/blob/da94d55a09ec6c9e4e0be1bf38d88240f1773334/README.md#testing-in-dev-mode       |             |
|      |               | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md#testing               |             |
|      |               | https://github.com/chainify/pallet-nolik/tree/5150d3d045e4b0ed33c636ff74a764fc42bed4eb#testing                      |             |
| 0d.  | Docker        | https://hub.docker.com/r/chainify/substrate-nolik-dev                                                               |             |
|      |               | https://github.com/chainify/nolik/blob/da94d55a09ec6c9e4e0be1bf38d88240f1773334/README.md#setup                     |             |
| 0e.  | Article       |                                                                                                                     | In progress |
| 1.   | CLI: Compose  | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md#composing-the-message |             |
| 2.   | CLI: Send     | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md#send-the-message      |             |
| 3.   | CLI: Get      | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md#get-the-messages      |             |
| 4.   | CLI           | https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md#using-the-app         |             |


**Additional Information**

It took much more time to build the app, but it totally worth it.
During the grant I have significantly improved my Rust skills.
I also struggled with sending data through a Substrate node using the node APIs.
Fortunately, with the help of Substrate community I've found answers to my questions (
    [#1](https://substrate.stackexchange.com/questions/1393/getting-extrinsic-data-with-the-transaction-hash),
    [#2](https://substrate.stackexchange.com/questions/975/generating-an-extrinsic-call-for-a-custom-pallet),
    [#3](https://substrate.stackexchange.com/questions/903/generating-a-storage-key-when-making-an-rpc-request),
    [#4](https://substrate.stackexchange.com/questions/2656/decoding-events-with-rust)
).
That helped me understand much better how Substrate node works on a low level.

