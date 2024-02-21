
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence | <ul><li>[x] </li></ul>| [Plutonication](https://github.com/cisar2218/Plutonication/blob/grant-delivery/LICENSE) | | 
| 0b.  | Documentation | <ul><li>[x] </li></ul>| Docs for running all codes is in the [Readme](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md). [Package usage guide](https://plutonication-acnha.ondigitalocean.app/docs/csharp). |  |
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul>| Guide for running tests is in the [Readme](https://github.com/cisar2218/Plutonication/blob/grant-delivery/README.md). |  |
| 0d. | Docker | <ul><li>[x] </li></ul>| [Console dApp Sample Dockerfile](https://github.com/cisar2218/Plutonication/blob/grant-delivery/PlutonicationConsoleSample/Dockerfile) |  |
| 1. | PlutonicationDAppClient | <ul><li>[x] </li></ul>| [PlutonicationDAppClient.cs](https://github.com/cisar2218/Plutonication/blob/grant-delivery/Plutonication/PlutonicationDAppClient.cs) |  |
| 1a. | InitializeAsync | <ul><li>[x] </li></ul>| [InitializeAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationDAppClient.cs#L15) |  |
| 1b. | onReceivePublicKey | <ul><li>[x] </li></ul>| [onReceivePublicKey](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationDAppClient.cs#L17C28-L17C46) |  |
| 1c. | SignPayloadAsync | <ul><li>[x] </li></ul>| [SignPayloadAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationAccount.cs#L91C44-L91C60) |  |
| 1d. | SignAsync | <ul><li>[x] </li></ul>| [SignAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationAccount.cs#L66C44-L66C53) |  |
| 2. | PlutonicationWalletClient | <ul><li>[x] </li></ul>| [PlutonicationWalletClient](https://github.com/cisar2218/Plutonication/blob/grant-delivery/Plutonication/PlutonicationWalletClient.cs) |  |
| 2a. | InitializeAsync | <ul><li>[x] </li></ul>| [InitializeAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L31C28-L31C43) |  |
| 2b. | SendPublicKeyAsync | <ul><li>[x] </li></ul>| [SendPublicKeyAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L131C35-L131C53) |  |
| 2c. | SendPayloadSignatureAsync | <ul><li>[x] </li></ul>| [SendPayloadSignatureAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L149C34-L149C59) |  |
| 2d. | SendRawSignatureAsync | <ul><li>[x] </li></ul>| [SendRawSignatureAsync](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/Plutonication/PlutonicationWalletClient.cs#L167C34-L167C55) | |
| 3. | NuGet package | <ul><li>[x] </li></ul>| [NuGet package](https://www.nuget.org/packages/Plutonication/) |  |
| 4. | Sample Console dApp | <ul><li>[x] </li></ul>| [Sample Console dApp](https://github.com/cisar2218/Plutonication/tree/grant-delivery/PlutonicationConsoleSample) |  |
| 5. | Testing moved from milestone 1 | <ul><li>[x] </li></ul>| All of the functions end-to-end tested with a sample dApp written in typescript (with Plutonication and Polkadot.js api) and a sample Wallet (PlutoWallet). Showcase video: https://youtu.be/lVVcgNs7KRk?si=r-oOhd8Nvb1m0ysQ. Guide for running: https://github.com/RostislavLitovkin/Plutonication?tab=readme-ov-file#e2e-testing-with-pluto-wallet |  |

## Evaluation V3

### Sample Console dApp

I was able to scan the QR code, confirm the transaction using the PlutoWallet, and sign it.

```
Hello, Plutonication!
plutonication:?url=wss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F&key=4597479609750316565&name=CSharp Plutonication console test&icon=https%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite

The following link opens you a QR code image that can be scanned by PlutoWallet:
https://api.qrserver.com/v1/create-qr-code/?size=400x400&margin=40&data=plutonication%3A%3Furl%3Dwss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F%26key%3D4597479609750316565%26name%3DCSharp%2520Plutonication%2520console%2520test%26icon%3Dhttps%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite
Account connected: 5HN5u9bY7KE8CAvbBt1ivF54CbC33ANmtmR5TRpfBtVEteAH
Received public key: 5HN5u9bY7KE8CAvbBt1ivF54CbC33ANmtmR5TRpfBtVEteAH
Extrinsic submitted
Message signed
Signature: 0xE4893BD96A37E51A35161B145878257EF1DEE9DB2D1B2DB89A2D83CE91724958FB3D5CC3E6D33A4CFED66B1B0F4CF54FBE38D5E0153DA081A7A8418324B02685
```

However, when I ran with Docker, the sample got an error in the [line 94](https://github.com/cisar2218/Plutonication/blob/grant-delivery/PlutonicationConsoleSample/Program.cs#L94). This doesn't impact the functionality of the sample, because this line only waits for an input, so no problem to aprove the milestone but would be nice to fix for the docker version.

```
Extrinsic submitted
Message signed
Signature: 0x3A14549389DD746D12A9B9B252C15E9F450C88AB94EBC1905E453DA3F575B9292D69D85D1E6ADB2B5F833119866DFCC1D15098A2B02B35D09025FC4DDFC3B284
Unhandled exception. System.InvalidOperationException: Cannot read keys when either application does not have a console or when console input has been redirected. Try Console.Read.
   at System.ConsolePal.ReadKey(Boolean intercept)
   at Program.<Main>$(String[] args) in /app/Program.cs:line 94
   at Program.<Main>(String[] args)
```


## Evaluation V2

### Sample Console dApp

I ran the sample code, and I received the console log below.

```
Hello, Plutonication!
plutonication:?url=wss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F&key=638439343593245975&name=CSharp Plutonication console test&icon=https%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite

The following link opens you a QR code image that can be scanned by PlutoWallet: 
https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=plutonication:?url=wss%3A%2F%2Fplutonication-acnha.ondigitalocean.app%2F&key=638439343593245975&name=CSharp Plutonication console test&icon=https%3A%2F%2Frostislavlitovkin.pythonanywhere.com%2Fplutowalleticonwhite
```

I tried again to scan the QR code using the PlutoWallet app, but nothing happened. The 1.9 update corrected the bug reported in Evaluation V1, but using the default QR code scan of the cellphone only opened the app. So the sample code appears to be stuck in the [Line 36](https://github.com/cisar2218/Plutonication/blob/00c231cfa2fed8c8b436d7e41c8c2901f412300c/PlutonicationConsoleSample/Program.cs#L36). 

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


