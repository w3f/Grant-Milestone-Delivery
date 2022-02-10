# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**

* **Application Document:** [Nolik](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md)
* **Milestone Number:** 1

**Context**

Initially, Nolik was designed to be an [independent product](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#ecosystem-fit) without an intention to fit the Polkadot ecosystem.
However, it turned out that the best way to achieve application goals was to make a FRAME pallet that handles messages validation and delivery.
With that, every Substrate based Chain will be able to embed a Nolik pallet which will allow chain users to communicate with each other.

**Deliverables**

It turned out that Substrate provides a lot of powerful features out of the box.
Features like origin validation, storing data on-chain, and handling extrinsics saved a lot of effort and simplified the way messages are processed with the network.
Now, instead of attaching the [full set of message metadata](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#the-transaction-metadata), it is enough to send the minimum information which saves a lot of storage keeping the level of security and reliability.
Deliverables #1 and #2 are merged into the same pallet.

As planned, right now the pallet logic validates the sender and the recipient and allows the creation of custom rules like a whitelist or a blacklist of senders.
The message itself will be composed, encrypted, and then sent to the node from the client side.
Those are the deliverables of the [second milestone](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#milestone-2--develop-cli-tools) of this application.


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License       | https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/LICENCE | | 
|     |               | https://github.com/chainify/substrate-nolik-dev/blob/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2/LICENSE | |
| 0b. | Documentstion | https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/README.md | | 
|     |               | https://github.com/chainify/substrate-nolik-dev/blob/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2/README.md | |
| 0c. | Testing Guide | https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/README.md#testing | |
|     |               | https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/README.md#sample-scenario | UI testing guide scenario |
| 0d. | Docker        | https://hub.docker.com/r/chainify/substrate-nolik-dev | Docker image |
|     |               | https://github.com/chainify/substrate-nolik-dev/blob/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2/README.md#run-in-docker | Instructions |
| 1.  | Substrate module: Account Rules | https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs | |
| 2.  | Substrate module: Message Validation | https://github.com/chainify/pallet-nolik/blob/0a854fd94f8a205483804f5df63813222ed55cfc/src/lib.rs#L180 | |
| 3.  | Substrate chain | https://github.com/chainify/substrate-nolik-dev/tree/4f1f36e01f5fb22d745e2a3566e84c43f58ba3c2 | |

**Additional Information**

It was really fun to work with Substrate.
It turned out, that the framework allows creating much more complicated logic for receiving messages.
For example, the recipient can require to transfer tokens with the message, set a range of blocks to receive the message, or provide a one-time right to send the message.
Looking forward to testing these concepts in future iterations.
