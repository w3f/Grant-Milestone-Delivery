# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [Signet](https://github.com/w3f/Grants-Program/blob/master/applications/signet.md)
* **Milestone Number:** 1

**Context**

The purpose of this milestone is to create a documented, integratable Sign in with Substrate (SIWS) reusable component

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | GPLv3 [commit](https://github.com/TalismanSociety/siws/commit/86c6e921df2af1cfe8000fb76f3f3917f1ad0d19) | We decided to use a more permissive license (MIT) as that should encourage the widest adoption. |
| **0b.** | Documentation | We will provide both **inline documentation** of the code and a basic **tutorial** that explains how a user can spin up a SIWS service and authenticate wallets, which will show how the new functionality works. [code](https://github.com/TalismanSociety/siws), [landing](https://siws.xyz/), [docs](https://docs.siws.xyz/) | The landing page serves as the sample app and is built out of the same repo as where you can find SIWS. The docs walk you through a quickstart tutorial. |
| **0c.** | Testing and Testing Guide | We will include documentation on verifying your SIWS integration is performing correctly. [docs](https://docs.siws.xyz/getstarted/guide/connect/) | The quickstart guide walks you through how to integrate and verify it is performing correctly. |
| **0d.** | Docker | This component will need to be integrated into a dapp before being deployed, so Docker is not applicable. [repo](https://github.com/TalismanSociety/siws) | As mentioned, Docker is not applicable, as the library needs to be integrated into an existing or new app. |
| 0e. | Article | We will publish an article that explains how the service works, the work done for this grant, and direction on how to integrate SIWS into other apps [link](https://docs.google.com/document/d/1Px3RAxQnBMDzZLuw5okXZmCL1VP6gfhxEVvOBaFPiqQ/edit?usp=sharing) | The draft article has been shared, and we will coordinate publishing with W3F |
| 1. | JS Package: Sign in with Substrate | We will extract our Substrate sign-in service into an independent javascript package that is hostable and easily integratable into other projects [commit](https://github.com/TalismanSociety/siws/commit/2b823166430c8f7c32e13c907c5fc4ccde97e3e9) | Also available from [npm](https://www.npmjs.com/package/@talismn/siws) |
| 2. | Feature: Custom message | We will add the ability to specify a custom message with the payload that can, for example, function as a welcome message from the dapp or specify the terms of service for the dapp [commit](https://github.com/TalismanSociety/siws/commit/2b823166430c8f7c32e13c907c5fc4ccde97e3e9)  | See the file "SiwsMessage.ts" |
| 3. | Feature: Expiration | We will add the ability for the front end to specify an expiration time for the signed message [commit](https://github.com/TalismanSociety/siws/commit/2b823166430c8f7c32e13c907c5fc4ccde97e3e9) | See the file "SiwsMessage.ts" |
| 4. | Feature: Message Formats | We will add the ability to create the message payload both as a human-readable string, in addition to the existing JSON format [commit](https://github.com/TalismanSociety/siws/commit/2b823166430c8f7c32e13c907c5fc4ccde97e3e9)  | See the file "SiwsMessage.ts" |
| 5. | Feature: Message Verification | We will add the ability to verify the signed message payload in either string or JSON format [commit](https://github.com/TalismanSociety/siws/commit/2b823166430c8f7c32e13c907c5fc4ccde97e3e9) | See the file "parseMessage.ts" |
| 6. | Public Docs: Sign in with Substrate | We will create a public documentation site/landing page for Sign in with Substrate, in order to catalyze adoption by other projects, as well as eventual standardization. [landing](https://siws.xyz/), [docs](https://docs.siws.xyz/) | |

**Additional Information**
