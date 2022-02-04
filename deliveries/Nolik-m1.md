# Milestone Delivery :mailbox:

* **Application Document: [Nolik](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md)**
* **Milestone Number: 1**

## Context

Initially, Nolik was designed to be an [independent product](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#ecosystem-fit) without an intention to fit the Polkadot ecosystem.
However, it turned out that the best way to achieve application goals was to make a FRAME pallet that handles messages validation and delivery.
With that, every Substrate based Chain will be able to embed a Nolik pallet which will allow chain users to communicate with each other.


## Deliverables
It turned out that Substrate provides a lot of powerful features out of the box.
Features like origin validation, storing data on-chain, and handling extrinsics saved a lot of effort and simplified the way messages are processed with the network.
Now, instead of attaching the [full set of message metadata](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#the-transaction-metadata), it is enough to send the minimum information which saves a lot of storage keeping the level of security and reliability.
Deliverables #1 and #2 are merged into the same pallet.

As planned, right now the pallet logic validates the sender and the recipient and allows the creation of custom rules like a white list or a black list of senders.
The message itself will be composed, encrypted, and then sent to the node from the client side.
Those are the deliverables of the [second milestone](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md#milestone-2--develop-cli-tools) of this application.


| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | License       | https://github.com/chainify/pallet-nolik/blob/main/LICENCE | | 
|    |                | https://github.com/chainify/substrate-nolik-dev/blob/main/LICENSE | |
| 0b. | Documentstion | https://github.com/chainify/pallet-nolik/blob/main/README.md | | 
|     |               | https://github.com/chainify/substrate-nolik-dev/blob/main/README.md | |
| 0c. | Testing Guide | https://github.com/chainify/pallet-nolik#testing | |
|     |               | https://github.com/chainify/pallet-nolik/blob/main/src/lib.rs | UI testing guide |
| 0d. | Docker        | https://hub.docker.com/r/chainify/substrate-nolik-dev | Docker image |
|     |               | https://hub.docker.com/r/chainify/substrate-nolik-dev | Instructions |
| 1.  | Substrate module: Account Rules | https://github.com/chainify/pallet-nolik/blob/main/src/lib.rs | |
| 2.  | Substrate module: Message Validation | https://github.com/chainify/pallet-nolik/blob/main/src/lib.rs#L180 | |
| 3.  | Substrate chain | https://github.com/chainify/substrate-nolik-dev | |

## Additional Information
It was really fun to work with Substrate.
It turned out, that the framework allows creating much more complicated logic for receiving messages.
For example, the recipient can require to transfer tokens with the message, set a range of blocks to receive the message, or provide a one-time right to send the message.
Looking forward to testing these concepts in future iterations.
