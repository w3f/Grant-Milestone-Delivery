
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul>| [Plutonication](https://github.com/cisar2218/Plutonication/blob/grant-delivery/LICENSE) | | 
| 0b.  | Documentation | <ul><li>[ ] </li></ul>| Docs for running all codes is in the [Readme](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md). [Package usage guide](https://plutonication-acnha.ondigitalocean.app/docs/csharp). | Not fully evaluated yet. |
| 0c. | Testing and Testing Guide | <ul><li>[ ] </li></ul>| Guide for running tests is in the [Readme](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md). | Not fully evaluated yet. |
| 0d. | Docker | <ul><li>[x] </li></ul>| [Console dApp Sample Dockerfile](https://github.com/cisar2218/Plutonication/blob/grant-delivery/PlutonicationConsoleSample/Dockerfile) |  |
| 1. | PlutonicationDAppClient | <ul><li>[ ] </li></ul>| [PlutonicationDAppClient.cs](https://github.com/cisar2218/Plutonication/blob/grant-delivery/Plutonication/PlutonicationDAppClient.cs) | Not fully evaluated yet. |
| 1a. | InitializeAsync | <ul><li>[ ] </li></ul>| [InitializeAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationDAppClient.cs#L15) | Not fully evaluated yet. |
| 1b. | onReceivePublicKey | <ul><li>[ ] </li></ul>| [onReceivePublicKey](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationDAppClient.cs#L17C28-L17C46) | Not fully evaluated yet. |
| 1c. | SignPayloadAsync | <ul><li>[ ] </li></ul>| [SignPayloadAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationAccount.cs#L91C44-L91C60) | Not fully evaluated yet. |
| 1d. | SignAsync | <ul><li>[ ] </li></ul>| [SignAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationAccount.cs#L66C44-L66C53) | Not fully evaluated yet. |
| 2. | PlutonicationWalletClient | <ul><li>[ ] </li></ul>| [PlutonicationWalletClient](https://github.com/cisar2218/Plutonication/blob/grant-delivery/Plutonication/PlutonicationWalletClient.cs) | Not fully evaluated yet. |
| 2a. | InitializeAsync | <ul><li>[ ] </li></ul>| [InitializeAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L31C28-L31C43) | Not fully evaluated yet. |
| 2b. | SendPublicKeyAsync | <ul><li>[ ] </li></ul>| [SendPublicKeyAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L131C35-L131C53) | Not fully evaluated yet. |
| 2c. | SendPayloadSignatureAsync | <ul><li>[ ] </li></ul>| [SendPayloadSignatureAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L149C34-L149C59) | Not fully evaluated yet. |
| 2d. | SendRawSignatureAsync | <ul><li>[ ] </li></ul>| [SendRawSignatureAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L167C34-L167C55) | Not fully evaluated yet. |
| 3. | NuGet package | <ul><li>[ ] </li></ul>| [NuGet package](https://www.nuget.org/packages/Plutonication/) | Has a formatting error |
| 4. | Sample Console dApp | <ul><li>[ ] </li></ul>| [Sample Console dApp](https://github.com/cisar2218/Plutonication/tree/grant-delivery/PlutonicationConsoleSample) | Can't scan the QR code with success. |
| 5. | Testing moved from milestone 1 | <ul><li>[x] </li></ul>| All of the functions end-to-end tested with a sample dApp written in typescript (with Plutonication and Polkadot.js api) and a sample Wallet (PlutoWallet). Showcase video: https://youtu.be/lVVcgNs7KRk?si=r-oOhd8Nvb1m0ysQ. Guide for running: https://github.com/RostislavLitovkin/Plutonication?tab=readme-ov-file#e2e-testing-with-pluto-wallet |  |


## Evaluation V1

### Documentation

The [requeriments](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md#requirements) could specify the .NET version of the Sample and Tests because it is different than the Plutonication.

### Unit Test

All Tests passed.

```
(base) user@localhost:~/Documents/plutonication/Plutonication/PlutonicationTests$ dotnet test PlutonicationTests.csproj
  Determining projects to restore...
  All projects are up-to-date for restore.
  Plutonication -> /home/user/Documents/plutonication/Plutonication/Plutonication/bin/Debug/net6.0/Plutonication.dll
  PlutonicationConsoleSample -> /home/user/Documents/plutonication/Plutonication/PlutonicationConsoleSample/bin/Debug/net7.0/PlutonicationConsoleSample.dll
  PlutonicationTests -> /home/user/Documents/plutonication/Plutonication/PlutonicationTests/bin/Debug/net7.0/PlutonicationTests.dll
Test run for /home/user/Documents/plutonication/Plutonication/PlutonicationTests/bin/Debug/net7.0/PlutonicationTests.dll (.NETCoreApp,Version=v7.0)
Microsoft (R) Test Execution Command Line Tool Version 17.7.2 (x64)
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
A total of 1 test files matched the specified pattern.
plutonication:?url=wss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F&key=16629397843411200086&name=C%23 Plutonication automated test&icon=https%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite


Passed!  - Failed:  0, Passed:  2, Skipped:     0, Total:   2, Duration: 14 s - PlutonicationTests.dll (net7.0)
```

### E2E Test

I followed the [video](https://youtu.be/lVVcgNs7KRk?si=r-oOhd8Nvb1m0ysQ) and it worked as expected. I was able to connect the wallet, sign and submit the transaction and the message, and verify the console log and chain to validate these actions. 

### Sample Console dAPP

The example starts without problems with docker and without.

```
Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:04.01
Hello, Plutonication!
plutonication:?url=wss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F&key=622452766733437116&name=CSharp Plutonication console test&icon=https%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite

The following link opens you a QR code image that can be scanned by PlutoWallet:
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=plutonication:?url=wss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F&key=622452766733437116&name=CSharp Plutonication console test&icon=https%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite
```

I tried to scan the QR code using the PlutoWallet, but nothing happened. So I tried to scan using the default scan of my cellphone it identified the QR code, opened the PlutoWallet app, and showed this error. 

![image (55)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/50c36584-e053-412a-860f-6759d27272f3)


Could you explain how the example should work?

### NuGet Package

The page on NuGet has a formatting error.

![pasted image 0 (23)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/de80c141-ae88-4f56-8dd4-2a2fc35479bf)


