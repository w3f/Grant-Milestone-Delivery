# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md 
* **Milestone Number:** 2

**Context** Plutonication Typescript version

NPM package that easilly allows developers to implement Plutonication into their dApps / Wallets in javascript / typescript.

**Deliverables**
> Please provide a list of all deliverables of the milestone extracted from the initial application and a link to the deliverable itself. Ideally all links inside the below table should include a commit hash, which will be used for testing. If you don't provide a commit hash, we will work off the default branch of your repository. Thus, if you plan on continuing work after delivery, we suggest you create a separate branch for either the delivery or your continuing work. 
> 
> If there is anything particular about any of the deliverables we or a future reader should know, use the respective `Notes` column.

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | [Plutonication](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/LICENSE) | MIT |
| 0b. | Documentation | Docs for running all codes is in the [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/main/README.md). [Package usage guide](https://plutonication-acnha.ondigitalocean.app/docs/javascript). |  |
| 0c. | Testing and Testing guide | Guide for running tests is in the [Readme](https://github.com/RostislavLitovkin/Plutonication/blob/main/README.md). | I have added extra Unit tests that have not been promissed in the Grant proposal. |
| 0d. | Docker | [Sample React dApp Dockerfile](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/example_dapp/Dockerfile) |  |
| 1. | PlutonicationDAppClient | [PlutonicationDAppClient.ts](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/src/PlutonicationDAppClient.ts) |  |
| 1a. | initializePlutonicationDAppClient | [initializePlutonicationDAppClient](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L18C23-L18C56) |  |
| 1b. | onReceivePubkey | [onReceivePubkey](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L20C3-L20C3) |  |
| 1c. | signPayload | [signPayload](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L64C13-L64C24) | It is part of the `Injected` signer |
| 1d. | SendRawAsync | [SendRawAsync](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationDAppClient.ts#L77) | It is part of the `Injected` signer |
| 2. | PlutonicationWalletClient | [PlutonicationWalletClient](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/src/PlutonicationWalletClient.ts) |  |
| 2a. | SendAddress | [SendAddress](https://github.com/RostislavLitovkin/Plutonication/blob/b2dde7b8c0b387259a459163d436e83d3c7862c4/src/PlutonicationWalletClient.ts#L54) | It is sent automatically when calling the `initializePlutonicationWalletClient` method |
| 2b. | sendPayloadSignature | [sendPayloadSignature](https://github.com/RostislavLitovkin/Plutonication/blob/be67381fcb03f2afae20a150b1bcca2577a47e54/src/PlutonicationWalletClient.ts#L57C7-L57C7) |  |
| 2c. | sendRawSignature | [sendRawSignature](https://github.com/RostislavLitovkin/Plutonication/blob/be67381fcb03f2afae20a150b1bcca2577a47e54/src/PlutonicationWalletClient.ts#L60C5-L60C21) |  |
| 3. | PlutonicationModal | [PlutonicationModal](https://github.com/RostislavLitovkin/Plutonication/blob/Grant-delivery/src/components/PlutonicationModal.ts) |  |
| 4. | NPM package | [NPM package](https://www.npmjs.com/package/@plutonication/plutonication) |  |
| 5. | Sample React dApp | [Sample React dApp](https://github.com/RostislavLitovkin/Plutonication/tree/Grant-delivery/example_dapp) |  |

**Additional Information**
