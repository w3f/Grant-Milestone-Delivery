
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/cross-chain-wallet.md
- **Milestone:** 4
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/LICENSE | |
| 0b. | Documentation |<ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet/blob/main/README.md, https://github.com/blockcoders/kuma-wallet/blob/main/README-es.md |  |
| 0c. | Testing Guide |<ul><li>[x] </li></ul> | https://github.com/blockcoders/kuma-wallet#running-locally |  |
| 0e. | Article |<ul><li>[x] </li></ul> | https://twitter.com/blockcoders_/status/1690077065087754240 |  |
| 1. | Polish UX experience |<ul><li>[x] </li></ul> | https://github.com/kumawallet/extension/pull/30 |  |
| 2. | Landing page |<ul><li>[x] </li></ul> | https://kumawallet.io/ | |
| 3. | Video Tutorial |<ul><li>[x] </li></ul> | https://kumawallet.io/tutorials |  |
| 4. | End to End Testing |<ul><li>[x] </li></ul> | https://kumawallet.io/tutorials |   |
| 5. | QR code |<ul><li>[x] </li></ul> | https://github.com/kumawallet/extension/blob/main/src/pages/receive/Receive.tsx | |

## Evaluation V2

The XCM transfer using testnets worked well. The blur effect it still with problem, but this can be fixed later and don't prevent the approval.

![image](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/478628ca-cb08-4e51-84a1-29d94ef4038a)

![image](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/f36fd676-1ad1-4629-ba5c-a2b6538bbaa9)


## Evaluation V1

### Documentation 

The documentation is good, but I didn't find information about adding the testnets or new networking. I think this would be good to add this to the documentation.

### Test

I ran the tests, and one failed.
```
 FAIL  src/tests/utils/utils.test.ts > utils > should return formatted date
AssertionError: expected 'mar. 3 - 11:05' to contain 'Mar 3'
 ❯ src/tests/utils/utils.test.ts:8:28
      6| 
      7|     expect(result).that.is.a("string");
      8|     expect(result).to.have.string("Mar 3");
       |                            ^
      9|   });
     10| 
```

Changing [this line in utils.ts](https://github.com/kumawallet/extension/blob/main/src/utils/utils.ts#L6) the `default` to `en-US`, the test passed. In general, the tests have good coverage.

<details>

```
 Test Files  61 passed (61)
      Tests  418 passed (418)
   Start at  11:45:33
   Duration  25.64s (transform 7.06s, setup 53.49s, collect 116.77s, tests 13.16s, environment 84.11s, prepare 20.59s)

 % Coverage report from v8
----------------------------------------|---------|----------|---------|---------|-----------------------------------------------------------------------------------------------------
File                                    | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                                                   
----------------------------------------|---------|----------|---------|---------|-----------------------------------------------------------------------------------------------------
All files                               |   91.91 |    78.13 |    83.8 |   91.91 |                                                                                                     
 src                                    |   99.41 |    96.15 |   97.72 |   99.41 |                                                                                                     
  Extension.ts                          |   99.41 |    96.15 |   97.72 |   99.41 | 31-32                                                                                               
 src/accounts                           |   97.43 |    91.42 |    92.3 |   97.43 |                                                                                                     
  AccountManager.ts                     |   97.22 |    91.17 |    92.3 |   97.22 | 56-57,94-95                                                                                         
  types.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/hooks                              |     100 |      100 |     100 |     100 |                                                                                                     
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/hooks/common                       |   98.91 |     90.9 |     100 |   98.91 |                                                                                                     
  useCopyToClipboard.tsx                |   98.03 |       80 |     100 |   98.03 | 20                                                                                                  
  useLoading.tsx                        |     100 |      100 |     100 |     100 |                                                                                                     
  useToast.tsx                          |     100 |      100 |     100 |     100 |                                                                                                     
 src/i18n                               |     100 |      100 |     100 |     100 |                                                                                                     
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/pages/accountForm                  |   81.49 |    52.17 |   15.38 |   81.49 |                                                                                                     
  AccountForm.tsx                       |   81.49 |    52.17 |   15.38 |   81.49 | 90-91,95-98,102,117-123,129-130,144,152,186,211-212,221-257,288-289,316,347-348,354,383-384,397-409 
 src/pages/addAccount                   |   96.96 |       80 |      80 |   96.96 |                                                                                                     
  AddAccount.tsx                        |   95.74 |       75 |      75 |   95.74 | 25-26                                                                                               
  OptionButton.tsx                      |     100 |      100 |     100 |     100 |                                                                                                     
 src/pages/balance/components           |   93.66 |    57.54 |      70 |   93.66 |                                                                                                     
  AccountList.tsx                       |   91.53 |     62.5 |   33.33 |   91.53 | 33-34,53,100,103-105,108-111                                                                        
  AccountSelected.tsx                   |     100 |       50 |     100 |     100 | 15                                                                                                  
  Activity.tsx                          |   94.17 |    58.62 |     100 |   94.17 | 62-63,76-77,88,91,101,115,117,119,159-161                                                           
  Asset.tsx                             |   94.11 |       50 |      50 |   94.11 | 44-46                                                                                               
  Assets.tsx                            |   95.14 |    46.15 |   33.33 |   95.14 | 46-48,55-56                                                                                         
  ChainSelector.tsx                     |   94.47 |    68.18 |   77.77 |   94.47 | 55-56,83-85,88,108-109,190-192,211                                                                  
  ConfirmChainChangeModal.tsx           |   89.55 |    11.11 |      50 |   89.55 | 76,84,93-97,118-124                                                                                 
  NetworkIcon.tsx                       |   88.88 |       50 |     100 |   88.88 | 19-21                                                                                               
  TotalBalance.tsx                      |   95.83 |    73.68 |      75 |   95.83 | 45-47,56-57                                                                                         
 src/pages/manageAssets                 |   96.66 |    46.15 |      50 |   96.66 |                                                                                                     
  ManageAssets.tsx                      |   96.66 |    46.15 |      50 |   96.66 | 48,50-51,83-84                                                                                      
 src/pages/receive                      |     100 |    33.33 |      50 |     100 |                                                                                                     
  Receive.tsx                           |     100 |    33.33 |      50 |     100 | 21-42                                                                                               
 src/pages/send/components              |   90.61 |    70.37 |   72.72 |   90.61 |                                                                                                     
  ConfirmTx.tsx                         |     100 |    33.33 |      50 |     100 | 37-84                                                                                               
  Destination.tsx                       |   86.79 |    71.05 |    62.5 |   86.79 | 21,23-25,83-85,119-122,131-134,145-153,167-170                                                      
  EvmForm.tsx                           |    81.1 |    73.07 |     100 |    81.1 | 105-157,231-232,276-278                                                                             
  Fees.tsx                              |     100 |      100 |     100 |     100 |                                                                                                     
  SelectableAsset.tsx                   |   86.84 |       70 |     100 |   86.84 | 41-55                                                                                               
  SelectableChain.tsx                   |   95.83 |       80 |      50 |   95.83 | 27-29                                                                                               
  ShowBalance.tsx                       |     100 |      100 |     100 |     100 |                                                                                                     
  WasmForm.tsx                          |   94.39 |    58.97 |      75 |   94.39 | 110,203,228-231,242-244,265,278,289-291,309-313                                                     
 src/pages/settings                     |   91.38 |     71.6 |      40 |   91.38 |                                                                                                     
  AboutUs.tsx                           |     100 |      100 |      50 |     100 |                                                                                                     
  BugReport.tsx                         |     100 |      100 |      50 |     100 |                                                                                                     
  Contacts.tsx                          |   91.91 |       72 |   42.85 |   91.91 | 49-55,90-92,107-108,116-122,133,228-229                                                             
  General.tsx                           |    91.7 |       84 |   66.66 |    91.7 | 51-53,72-81,98-100                                                                                  
  Security.tsx                          |   88.02 |    57.14 |      25 |   88.02 | 52-54,57-59,62-63,66-67,70-80,91-92,99-100,103-105,108-111,119-120,127-133,175-176,199-201          
 src/pages/signIn                       |   89.69 |    66.66 |   57.14 |   89.69 |                                                                                                     
  SignIn.tsx                            |   89.69 |    66.66 |   57.14 |   89.69 | 27-28,38-40,43-45,72-73                                                                             
 src/pages/signMessage                  |   97.58 |    57.14 |     100 |   97.58 |                                                                                                     
  SignMessage.tsx                       |   97.58 |    57.14 |     100 |   97.58 | 78-80                                                                                               
 src/pages/welcome                      |     100 |      100 |     100 |     100 |                                                                                                     
  Welcome.tsx                           |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers                          |     100 |      100 |     100 |     100 |                                                                                                     
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers/accountProvider          |   91.33 |    72.41 |     100 |   91.33 |                                                                                                     
  AccountProvider.tsx                   |    91.3 |    72.41 |     100 |    91.3 | 81,93,126-129,142-144,157-161,181-183,206-208,231-232                                               
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers/assetProvider            |   83.85 |       70 |     100 |   83.85 |                                                                                                     
  AssetProvider.tsx                     |   83.82 |       70 |     100 |   83.82 | 114,160-163,214-231,249-251,260-281,286,313-338,362-364,371-372,424-425,494                         
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers/authProvider             |   97.74 |     91.3 |     100 |   97.74 |                                                                                                     
  AuthProvider.tsx                      |   97.72 |     91.3 |     100 |   97.72 | 31-33                                                                                               
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers/networkProvider          |   91.76 |    81.39 |    87.5 |   91.76 |                                                                                                     
  NetworkProvider.tsx                   |   91.73 |    81.39 |    87.5 |   91.73 | 134-137,183-184,194-196,200-210                                                                     
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers/themeProvider            |   38.98 |      100 |      50 |   38.98 |                                                                                                     
  ThemeProvider.tsx                     |   37.93 |      100 |      50 |   37.93 | 21-56                                                                                               
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/providers/txProvider               |   92.85 |       75 |    87.5 |   92.85 |                                                                                                     
  TxProvider.tsx                        |   92.79 |       75 |    87.5 |   92.79 | 52,102,113-114,138-139,177-186                                                                      
  index.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/storage                            |   95.65 |    84.44 |     100 |   95.65 |                                                                                                     
  Auth.ts                               |   94.59 |    82.85 |     100 |   94.59 | 50-51,54-56,70-72                                                                                   
  Storage.ts                            |    98.3 |       90 |     100 |    98.3 | 22                                                                                                  
 src/storage/entities                   |   95.48 |    93.54 |   89.47 |   95.48 |                                                                                                     
  Account.ts                            |     100 |      100 |     100 |     100 |                                                                                                     
  Accounts.ts                           |    90.9 |    95.65 |    87.5 |    90.9 | 43-46,49-52                                                                                         
  Assets.ts                             |    90.9 |    91.66 |   85.71 |    90.9 | 29-33                                                                                               
  BackUp.ts                             |     100 |      100 |     100 |     100 |                                                                                                     
  BaseEntity.ts                         |     100 |      100 |     100 |     100 |                                                                                                     
  CacheAuth.ts                          |   96.07 |      100 |    87.5 |   96.07 | 18-19                                                                                               
  Chains.ts                             |   98.26 |    93.54 |     100 |   98.26 | 111-112                                                                                             
  Network.ts                            |     100 |     90.9 |     100 |     100 | 33                                                                                                  
  SelectedAccount.ts                    |     100 |       60 |     100 |     100 | 20-22                                                                                               
  TrustedSites.ts                       |     100 |      100 |     100 |     100 |                                                                                                     
  Vault.ts                              |    92.1 |    90.62 |      70 |    92.1 | 130-131,134-135,138-139,142-143,146-147,150-151                                                     
 src/storage/entities/activity          |    97.5 |    79.31 |    87.5 |    97.5 |                                                                                                     
  Activity.ts                           |   95.71 |    77.77 |    87.5 |   95.71 | 17-18,36                                                                                            
  types.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/storage/entities/keyrings          |     100 |      100 |     100 |     100 |                                                                                                     
  Keyring.ts                            |     100 |      100 |     100 |     100 |                                                                                                     
 src/storage/entities/keyrings/hd       |     100 |      100 |     100 |     100 |                                                                                                     
  EVMKeyring.ts                         |     100 |      100 |     100 |     100 |                                                                                                     
  HDKeyring.ts                          |     100 |      100 |     100 |     100 |                                                                                                     
  WASMKeyring.ts                        |     100 |      100 |     100 |     100 |                                                                                                     
 src/storage/entities/keyrings/imported |     100 |    85.71 |     100 |     100 |                                                                                                     
  ImportedEVMKeyring.ts                 |     100 |       80 |     100 |     100 | 11                                                                                                  
  ImportedKeyring.ts                    |     100 |      100 |     100 |     100 |                                                                                                     
  ImportedWASMKeyring.ts                |     100 |       80 |     100 |     100 | 12                                                                                                  
 src/storage/entities/registry          |   96.15 |    77.14 |     100 |   96.15 |                                                                                                     
  Contact.ts                            |     100 |      100 |     100 |     100 |                                                                                                     
  Register.ts                           |     100 |      100 |     100 |     100 |                                                                                                     
  Registry.ts                           |   95.57 |    74.19 |     100 |   95.57 | 91-93,96-97                                                                                         
 src/storage/entities/settings          |     100 |    96.42 |     100 |     100 |                                                                                                     
  LanguageSetting.ts                    |     100 |      100 |     100 |     100 |                                                                                                     
  Setting.ts                            |     100 |      100 |     100 |     100 |                                                                                                     
  Settings.ts                           |     100 |    93.75 |     100 |     100 | 66                                                                                                  
  types.ts                              |     100 |      100 |     100 |     100 |                                                                                                     
 src/utils                              |   87.64 |    78.02 |     100 |   87.64 |                                                                                                     
  account-utils.ts                      |     100 |      100 |     100 |     100 |                                                                                                     
  assets.ts                             |   83.09 |    73.33 |     100 |   83.09 | 101-102,153-155,268-278,309-315,348-354,362-372,375-385,390,392,399-407,410-418                     
  constants.ts                          |     100 |      100 |     100 |     100 |                                                                                                     
  env.ts                                |     100 |    33.33 |     100 |     100 | 5,8                                                                                                 
  error-handling.ts                     |     100 |      100 |     100 |     100 |                                                                                                     
  i18n.ts                               |     100 |      100 |     100 |     100 |                                                                                                     
  utils.ts                              |      95 |    81.81 |     100 |      95 | 46-47,58                                                                                            
----------------------------------------|---------|----------|---------|---------|-----------------------------------------------------------------------------------------------------

=============================== Coverage summary ===============================
Statements   : 91.91% ( 7732/8412 )
Branches     : 78.13% ( 879/1125 )
Functions    : 83.8% ( 388/463 )
Lines        : 91.91% ( 7732/8412 )
================================================================================

```

</details>

### Manual Test

I tested the interface using Firefox and Chrome, the interface is good, but in Firefox, the blur for the private key isn't working.

![image (32)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/3168b840-39dc-4df0-ade1-6c4859410096)


I followed the e2e test video to test. I had no problem with the account creation, the import, and the transfer to the same chain. But I had some problems with the XCM transfer because this function isn't available for testnets. I tried to do the transfer from Astar to Acala. The wallet showed the transaction was successful.

![image (33)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/ff098379-7486-4b34-94f7-5baae09b2103)

But the ASTR wasn't transferred to Acala.

![image (34)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/d56d3ce2-3c98-4e1d-9d5e-5f84da4d8dfa)


I looked at the [transaction 1](https://astar.subscan.io/extrinsic/0x6c59940c9498c3fb2038a4b8e8610df63f798a883b5d2a64ae1b4ad1edaf22c9) and [transaction 2](https://astar.subscan.io/extrinsic/0xc596292e1d3831041457d00faf74ed23d5ed1dc49a26ae0929fbca51987180e7) and noticed the XCM transfer resulted in some error. Do I need to have some balance in Acala for this, or is it another problem?

I tested the QR code, and it is working.
