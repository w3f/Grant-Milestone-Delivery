# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
* **Milestone Number:** 3

**Context** Plutonication C# version

NuGet package that easily allows developers to implement Plutonication into their dApps / Wallets in C#.

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0a. | Licence | [Plutonication](https://github.com/cisar2218/Plutonication/blob/grant-delivery/LICENSE) | MIT | 
| 0b.  | Documentation | Docs for running all codes is in the [Readme](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md). [Package usage guide](https://plutonication-acnha.ondigitalocean.app/docs/csharp). | |
| 0c. | Testing and Testing Guide | Guide for running tests is in the [Readme](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md). | I have added extra Unit tests that have not been promissed in the Grant proposal. |
| 0d. | Docker | [Console dApp Sample Dockerfile](https://github.com/cisar2218/Plutonication/blob/grant-delivery/PlutonicationConsoleSample/Dockerfile) |  |
| 1. | PlutonicationDAppClient | [PlutonicationDAppClient.cs](https://github.com/cisar2218/Plutonication/blob/grant-delivery/Plutonication/PlutonicationDAppClient.cs) |  |
| 1a. | InitializeAsync | [InitializeAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationDAppClient.cs#L15) |  |
| 1b. | onReceivePublicKey | [onReceivePublicKey](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationDAppClient.cs#L17C28-L17C46) |  |
| 1c. | SignPayloadAsync | [SignPayloadAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationAccount.cs#L91C44-L91C60) | It is part of the `PlutonicationAccount` class |
| 1d. | SignAsync | [SignAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationAccount.cs#L66C44-L66C53) | It is part of the `PlutonicationAccount` class |
| 2. | PlutonicationWalletClient | [PlutonicationWalletClient](https://github.com/cisar2218/Plutonication/blob/grant-delivery/Plutonication/PlutonicationWalletClient.cs) |  |
| 2a. | InitializeAsync | [InitializeAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L31C28-L31C43) |  |
| 2b. | SendPublicKeyAsync | [SendPublicKeyAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L131C35-L131C53) | It is sent automatically when calling the `InitializeAsync` method |
| 2c. | SendPayloadSignatureAsync | [SendPayloadSignatureAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L149C34-L149C59) |  |
| 2d. | SendRawSignatureAsync | [SendRawSignatureAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L167C34-L167C55) |  |
| 3. | NuGet package | [NuGet package](https://www.nuget.org/packages/Plutonication/) |  |
| 4. | Sample Console dApp | [Sample Console dApp](https://github.com/cisar2218/Plutonication/tree/grant-delivery/PlutonicationConsoleSample) |  |
| 5. | Testing moved from milestone 1 | All of the functions end-to-end tested with a sample dApp written in typescript (with Plutonication and Polkadot.js api) and a sample Wallet (PlutoWallet). Showcase video: https://youtu.be/lVVcgNs7KRk?si=r-oOhd8Nvb1m0ysQ. Guide for running: https://github.com/RostislavLitovkin/Plutonication?tab=readme-ov-file#e2e-testing-with-pluto-wallet |  |

**Additional Information**
