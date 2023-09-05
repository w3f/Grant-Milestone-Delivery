# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tracking_chain.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/blob/main/LICENSE) |  |
| **0b.** | Documentation | <ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo)  |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Unit-Test)  [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/main/test/TrackingChain.UnitTest) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [LINK SQL Server under Docker](https://learn.microsoft.com/en-us/sql/linux/quickstart-install-connect-docker?view=sql-server-ver16&pivots=cs1-bash) |  |
| 0e. | Article | <ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo)  |  |
| 1. | Frontend Admin Tools | <ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.2.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.2.0-alpha) |  |
| 2. | Frontend Transaction Monitor | <ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.2.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.2.0-alpha) |  |
| 3. | Frontend Registry | <ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.2.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.2.0-alpha) |  |

## Evaluation V2

### Docker 

The [Docker Compose](https://github.com/TrackingChains/TrackingChain/wiki/Docker-Compose) is working fine.

### Documentation

The [documentation](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo) seems nice.

### Manual Test

The IDs for accounts and ProfileGroups are now showing in AdminTools.

## Evaluation V1

### Dockerhttps://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo

Would be possible to create a docker that configures and run all the application?

### Test

All tests passed

<details>

```
/home/user/Documents/trackingchain/TrackingChain/test/TrackingChain.UnitTest/bin/Debug/net7.0/TrackingChain.UnitTest.dll (.NETCoreApp,Version=v7.0)
Microsoft (R) Test Execution Command Line Tool Version 17.7.0-preview-23364-03+bc17bb9693cfc4778ded51aa0ab7f1065433f989 (x64)
Copyright (c) Microsoft Corporation.  All rights reserved.

Starting test execution, please wait...
A total of 1 test files matched the specified pattern.
[xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.4.5+1caef2f33e (64-bit .NET 7.0.10)
[xUnit.net 00:00:00.83]   Discovering: TrackingChain.UnitTest
[xUnit.net 00:00:00.87]   Discovered:  TrackingChain.UnitTest
[xUnit.net 00:00:00.87]   Starting:	TrackingChain.UnitTest
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistryUnuccessfulShouldSetInError [7 ms]
  Passed TrackingChain.UnitTest.Domain.AccountTest.GetFirstRandomWriterAddress [4 ms]
  Passed TrackingChain.UnitTest.Domain.AccountTest.AccountShouldBePopulateCorrectly [3 ms]
  Passed TrackingChain.UnitTest.Domain.AccountTest.GetFirstRandomWatcherAddress [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.TransactionRegistryShouldBePopulateCorrectly [9 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistryReceptMissionShouldSetInSuccess [2 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.GetFirstRandomEndpointAddressShouldBeReturnEndpointWhenPopulated [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistryShouldBePopolateReceptData [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeSetToPending [< 1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.GetFirstRandomEndpointAddressShouldBeReturnNullWhenEmpty [< 1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeSetToPool [< 1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistrySuccessfulShouldSetInSuccess [< 1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.SetLockedShouldBeSetData [56 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.TransactionPendingShouldBePopulateCorrectly [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.SetCompletedShouldBeSetTrue [< 1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.UnlockShouldBeCleanData [< 1 ms]
  Passed TrackingChain.UnitTest.Triage.TrackingEntryUseCaseTest.AddTransactionAsyncShouldGetGuidAsync [696 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.CreateTest.OnPostShoudleGetErrorForJsonInvalidAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.Accounts.CreateTest.OnPostAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.Accounts.EditTest.OnPostShoudleGet404WhenAccountNotFoundAsync [1 s]
  Passed TrackingChain.UnitTest.TransactionGenerator.TransactionGeneratorServiceTest.SetToPendinglShouldSetRegistryInPendingAsync [1 s]
  Passed TrackingChain.UnitTest.AggregatorPool.AggregatorServiceTest.SetToPoolShouldSetRegistryInPoolAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.CreateTest.OnPostShoudleCreateSmartContractAsync [25 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.EditTest.OnPostShoudleEditSmartContractAsync [1 s]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingStatusShouldBeFindElementAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.EditTest.OnPostShoudleGet404WhenProfileNotFoundAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.CreateTest.OnPostShoudleCreateProfileGroupAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.EditTest.OnPostShoudleGet404WhenSmartContracNotFoundAsync [534 ms]
  Passed TrackingChain.UnitTest.AggregatorPool.AggregatorServiceTest.EnqueueShouldCreatePool [24 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.EditTest.OnPostShoudleGetErrorForJsonInvalidAsync [20 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.CreateTest.OnPostShoudleGet404WhenSmartContracNotFoundAsync [7 ms]
  Passed TrackingChain.UnitTest.AggregatorPool.AggregatorServiceTest.EnqueueShouldSetTriageInPool [5 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.Accounts.EditTest.OnPostAsync [39 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.SetLokedShouldBeSetData [6 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.SetCompletedShouldBeSetTrue [3 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.UnlockShouldBeCleanData [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.TransactionPoolShouldBePopulateCorrectly [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionTriageTest.TransactionPendingShouldBePopulateCorrectly [2 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionTriageTest.SetInPoolShouldBeSetTrue [1 ms]
  Passed TrackingChain.UnitTest.Domain.TransactionTriageTest.SetCompletedShouldBeSetTrue [1 ms]
  Passed TrackingChain.UnitTest.Triage.RegistryServiceTest.GetSmartContractAsync [44 ms]
  Passed TrackingChain.UnitTest.AggregatorPool.EnqueuerPoolUseCaseTest.EnqueueTransactionAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.EditTest.OnPostShoudleEditProfileGroupAsync [34 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.EditTest.OnPostShoudleGet404WhenAccountNotFoundAsync [6 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.Accounts.DeleteTest.OnPostAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.DeleteTest.OnPostAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.EditTest.OnPostShoudleEditProfileGroupAsync [44 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.CreateTest.OnPostShoudleGet404WhenProfileNotFoundAsync [39 ms]
  Passed TrackingChain.UnitTest.TransactionWatcher.PendingTransactionWatcherUseCaseTest.AddTransactionAsyncShouldGetGuidAsync [1 s]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.CreateTest.OnPostShoudleGet404WhenAccountNotFoundAsync [4 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.DeleteTest.OnPostAsync [47 ms]
  Passed TrackingChain.UnitTest.TransactionGenerator.PoolDequeuerUseCaseTest.AddTransactionAsyncShouldGetGuidAsync [1 s]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingPoolsAsync [71 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.CreateTest.OnPostShoudleCreateProfileGroupAsync [6 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingTriagesAsync [14 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingStatusShouldBeReturNullAsync [2 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingShouldBeReturNullAsync [3 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingPendingsAsync [25 ms]
  Passed TrackingChain.UnitTest.TransactionGenerator.TransactionGeneratorServiceTest.ShouldGetOnlyUnlockedTransactionForProfileAsync [131 ms]
  Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.DeleteTest.OnPostShoudleCreateProfileGroupAsync [98 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingSuccessfullyAsync [13 ms]
  Passed TrackingChain.UnitTest.TransactionGenerator.TransactionGeneratorServiceTest.ShouldBeCreateTransactionPendingAsync [17 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldNotFoundContractByCategoryNameAsync [160 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldNotFoundContractByAuthorityNameAsync [4 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetProfileGroupForTransactionShouldFindContractByCategoryNullAsync [3 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingFailedsAsync [14 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldFindContractByAuthorityNameAsync [3 ms]
  Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingShouldBeFindElementAsync [2 ms]
  Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.GetOnlyUnlockedTransactionShouldFilterWatchingFromAsync [1 s]
  Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.ShouldBeSetTransactionTriageCompletedAsync [9 ms]
  Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.SetToRegistryShouldPopolateDataReceiptAsync [4 ms]
  Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.ShouldGetOnlyUnlockedTransactionForProfileAsync [9 ms]
  Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.ShouldBeSetTransactionPoolCompletedAsync [11 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageFirstInEvenWithMultipleCodeAndLockedCaseAsync [59 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageExcludeAllCoeInPoolAsync [3 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageFirstInAsync [3 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.AddTransactionAsync [9 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageFirstInEvenWithMultipleCodeAsync [3 ms]
[xUnit.net 00:00:02.42]   Finished:	TrackingChain.UnitTest
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageExcludeCompletedAsync [2 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetProfileGroupForTransactionShouldFindContractByAuthorityNullAsync [13 ms]
  Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldFindContractByCategoryNameAsync [3 ms]

Test Run Successful.
Total tests: 81
 	Passed: 81
 Total time: 2,9562 Seconds
 	1>Done Building Project "/home/user/Documents/trackingchain/TrackingChain/test/TrackingChain.UnitTest/TrackingChain.UnitTest.csproj" (VSTest target(s)).

Build succeeded.
	0 Warning(s)
	0 Error(s)

Time Elapsed 00:00:11.65
```

</details>

### Manual Test

I followed [these instructions to configure step by step](https://github.com/TrackingChains/TrackingChain/wiki/Configuration-Step-By-Step) and [the Milestone 2 Guide](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-2-Guide-to-Demo). The application worked without problems. I couldn't figure out how to get the `Account ID` and `ProfileGroup ID`. I was able to test the application using the IDs provided. 

It would be great if the Testing Guide covered how to use the Admin Tools, but I was able to create other configurations of the Rococo contract using the same info from the original, and it worked. I was able to edit the information to use another contract that I deployed. I was able to check the changes in the monitor and in the Tracking Viewer.


### Documentation and Testing Guide

Could you explain the `Account ID` and `ProfileGroup ID` and how to use the Admin tools?
