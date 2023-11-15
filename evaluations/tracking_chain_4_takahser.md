# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tracking_chain.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [MIT](https://github.com/TrackingChains/TrackingChain/blob/9571c983d3e9a74bfa192390ce3c3f391b7fcca3/LICENSE) | - |
| **0b.** | Documentation |<ul><li>[x] </li></ul>| [M4 Tutorial](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-4-Guide-to-Demo/6642a57429a57ad224c6e47fe10a71ebea7c2197) | See [Documentation Feedback](#documentation-feedback) |
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>| | See [Testing Feedback](#testing-feedback) |
| **0d.** | Docker |<ul><li>[x] </li></ul>| [docker-compose.yml](https://github.com/TrackingChains/TrackingChain/blob/9571c983d3e9a74bfa192390ce3c3f391b7fcca3/docker-compose.yml) | See [Docker Feedback](#docker-feedback) |
| 0e. | Article |<ul><li>[x] </li></ul>| [M4 guide](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-4-Guide-to-Demo) | The demo was difficult to follow, because there are quite some steps involved that were not particularly included in the article/tutorial. For users experienced with the tool these steps might appear logical, but for evaluators like me who are confronted with the project for the first time, this is an issue. However, the grantee offered a video call to walk through the app together, which was very helpful and is appreciated. |
| 1. | Tx Generator Worker |<ul><li>[x] </li></ul>| [Tx Generator Worker Module](https://github.com/TrackingChains/TrackingChain/tree/9571c983d3e9a74bfa192390ce3c3f391b7fcca3/src/TransactionGenerator.Worker) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- Unfortunately I wasn't able to access the db that is based on microsoft sql server from my host machine that runs macos. This might be an incopability issue. In any way, the grantee has proven the code to work during the code and application walkthrough that was conducted through a video call.

## Documentation Feedback

- [ ] clarify instructions: from reading the [current instructions](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-4-Guide-to-Demo/6642a57429a57ad224c6e47fe10a71ebea7c2197) it's currently not clear how to test the functionality of this milestone if the evaluator is not familiar with the tool yet as there seem to be some steps missing (this may not apply to experienced users of the tool, but that's not the case for me)

## Testing Feedback

- [x] tests pass:
    ```
    Run dotnet test test/TrackingChain.UnitTest/TrackingChain.UnitTest.csproj --no-build --verbosity normal
    Build started 10/26/2023 07:23:40.
    Test run for /home/runner/work/TrackingChain/TrackingChain/test/TrackingChain.UnitTest/bin/Debug/net7.0/TrackingChain.UnitTest.dll (.NETCoreApp,Version=v7.0)
    Microsoft (R) Test Execution Command Line Tool Version 17.7.2 (x64)
    Copyright (c) Microsoft Corporation.  All rights reserved.

    Starting test execution, please wait...
    A total of 1 test files matched the specified pattern.
    [xUnit.net 00:00:00.00] xUnit.net VSTest Adapter v2.5.0.1+5ebf84cd75 (64-bit .NET 7.0.13)
    [xUnit.net 00:00:00.11]   Discovering: TrackingChain.UnitTest
    [xUnit.net 00:00:00.20]   Discovered:  TrackingChain.UnitTest
    [xUnit.net 00:00:00.20]   Starting:    TrackingChain.UnitTest
    Passed TrackingChain.UnitTest.AggregatorPool.AggregatorServiceTest.SetToPoolShouldSetRegistryInPoolAsync [1 s]
    Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.EditTest.OnPostShoudleGet404WhenSmartContracNotFoundAsync [1 s]
    Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.EditTest.OnPostShoudleEditProfileGroupAsync [93 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Accounts.EditTest.OnPostShoudleGet404WhenAccountNotFoundAsync [15 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Accounts.EditTest.OnPostAsync [18 ms]
    Passed TrackingChain.UnitTest.AggregatorPool.AggregatorServiceTest.EnqueueShouldCreatePool [158 ms]
    Passed TrackingChain.UnitTest.AggregatorPool.AggregatorServiceTest.EnqueueShouldSetTriageInPool [1 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionDeleterUseCaseTest.TransactionDeleterShouldRemovePendingCompletedAsync [203 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionDeleterUseCaseTest.TransactionDeleterShouldRemoveTriageCompletedAsync [21 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionDeleterUseCaseTest.TransactionDeleterShouldRemovePoolCompletedAsync [11 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionDeleterUseCaseTest.TransactionDeleterShouldRemoveAllCompletedAsync [10 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.CreateTest.OnPostShoudleCreateProfileGroupAsync [14 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.CreateTest.OnPostShoudleGet404WhenSmartContracNotFoundAsync [2 ms]
    Passed TrackingChain.UnitTest.Domain.AccountTest.GetFirstRandomWriterAddress [1 ms]
    Passed TrackingChain.UnitTest.Domain.AccountTest.AccountShouldBePopulateCorrectly [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.AccountTest.GetFirstRandomWatcherAddress [3 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Accounts.DeleteTest.OnPostAsync [20 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingStatusShouldBeFindElementAsync [30 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingPoolsAsync [25 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingTriagesAsync [15 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingStatusShouldBeReturNullAsync [2 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingShouldBeReturNullAsync [3 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingPendingsAsync [14 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingSuccessfullyAsync [15 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingFailedsAsync [18 ms]
    Passed TrackingChain.UnitTest.Triage.AnalyticUseCaseTest.GetTrackingShouldBeFindElementAsync [2 ms]
    Passed TrackingChain.UnitTest.TransactionGenerator.TransactionGeneratorServiceTest.SetToPendinglShouldSetRegistryInPendingAsync [18 ms]
    Passed TrackingChain.UnitTest.TransactionGenerator.TransactionGeneratorServiceTest.ShouldGetOnlyUnlockedTransactionForProfileAsync [72 ms]
    Passed TrackingChain.UnitTest.TransactionGenerator.TransactionGeneratorServiceTest.ShouldBeCreateTransactionPendingAsync [10 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.DeleteTest.OnPostAsync [28 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldNotFoundContractByCategoryNameAsync [66 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldNotFoundContractByAuthorityNameAsync [6 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetProfileGroupForTransactionShouldFindContractByCategoryNullAsync [2 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldFindContractByAuthorityNameAsync [3 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageFirstInEvenWithMultipleCodeAndLockedCaseAsync [68 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageExcludeAllCoeInPoolAsync [3 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageFirstInAsync [3 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.AddTransactionAsync [15 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageFirstInEvenWithMultipleCodeAsync [4 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.ShouldGetTriageExcludeCompletedAsync [3 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetProfileGroupForTransactionShouldFindContractByAuthorityNullAsync [2 ms]
    Passed TrackingChain.UnitTest.Triage.TransactionTriageServiceTest.GetSmartContractForTransactionShouldFindContractByCategoryNameAsync [3 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.UnlockShouldBeNotIncreaseErrorTime [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.SetLockedShouldBeSetData [6 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.SetStatusErrorDoneShouldBe [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.TransactionPendingShouldBePopulateCorrectly [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.SetCompletedShouldBeSetTrue [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.UnlockShouldBeCleanData [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.UnlockFromErrorShouldBeIncreaseErrorTime [2 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.UnlockFromErrorShouldBeClearData [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPendingTest.UnlockFromErrorShouldBeDelayWatchingFrom [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionTriageTest.TransactionPendingShouldBePopulateCorrectly [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionTriageTest.SetInPoolShouldBeSetTrue [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionTriageTest.SetCompletedShouldBeSetTrue [< 1 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.DeleteTest.OnPostShoudleCreateProfileGroupAsync [63 ms]
    Passed TrackingChain.UnitTest.AggregatorPool.EnqueuerPoolUseCaseTest.EnqueueTransactionAsync [27 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.ProfileGroups.DeleteTest.OnPostAsync [13 ms]
    Passed TrackingChain.UnitTest.Triage.RegistryServiceTest.GetSmartContractAsync [16 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.GetOnlyUnlockedTransactionShouldFilterWatchingFromAsync [55 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.ShouldBeSetTransactionTriageCompletedAsync [12 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.SetToRegistryShouldPopolateDataReceiptAsync [7 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.ShouldGetOnlyUnlockedTransactionForProfileAsync [9 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.TransactionWatcherServiceTest.ShouldBeSetTransactionPoolCompletedAsync [13 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.CreateTest.OnPostShoudleGet404WhenProfileNotFoundAsync [3 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.CreateTest.OnPostShoudleGet404WhenAccountNotFoundAsync [2 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.CreateTest.OnPostShoudleCreateProfileGroupAsync [9 ms]
    Passed TrackingChain.UnitTest.Triage.TrackingEntryUseCaseTest.AddTransactionAsyncShouldGetGuidAsync [14 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistryUnuccessfulShouldSetInError [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.TransactionRegistryShouldBePopulateCorrectly [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistryReceptMissionShouldSetInSuccess [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.GetFirstRandomEndpointAddressShouldBeReturnEndpointWhenPopulated [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistryShouldBePopolateReceptData [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeGetExceptionSetWaitingToCancelWhenNotInError [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeSetToPending [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeSetWaitingToReTryWhenInError [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.GetFirstRandomEndpointAddressShouldBeReturnNullWhenEmpty [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeSetToPool [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.SetToRegistrySuccessfulShouldSetInSuccess [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeGetExceptionSetWaitingToReTryWhenNotInError [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionRegistryTest.ShouldBeSetWaitingToCancelWhenInError [< 1 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionLockedUseCaseTest.TransactionLockedShouldUnlockPoolsPendingsAsync [1 s]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionFailedShouldManageAsync [157 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionErrorShouldManageAgainInPoolAsync(transactionErrorReason: TransactionFinalizedInError) [70 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionErrorShouldManageAgainInPoolAsync(transactionErrorReason: TransactionNotFound) [12 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionFailedInPoolShouldManageReTryExpectionAsync(transactionErrorReason: UnableToSendTransactionOnChain) [17 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionFailedInPoolShouldManageReTryExpectionAsync(transactionErrorReason: InsertTransactionExpection) [9 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionFailedInPendingShouldManageReTryAsync(transactionErrorReason: GetTrasactionReceiptExpection) [14 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionFailedUseCaseTest.TransactionFailedInPendingShouldManageReTryAsync(transactionErrorReason: UnableToWatchTransactionOnChain) [9 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.EditTest.OnPostShoudleGet404WhenProfileNotFoundAsync [28 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.EditTest.OnPostShoudleEditProfileGroupAsync [5 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.AccountProfileGroups.EditTest.OnPostShoudleGet404WhenAccountNotFoundAsync [2 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.CreateTest.OnPostShoudleGetErrorForJsonInvalidAsync [4 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.CreateTest.OnPostShoudleCreateSmartContractAsync [10 ms]
    Passed TrackingChain.UnitTest.TransactionGenerator.PoolDequeuerUseCaseTest.DequeueTransactionFailedShouldSetInErrorWhenReachMaxLimitAsync [51 ms]
    Passed TrackingChain.UnitTest.TransactionGenerator.PoolDequeuerUseCaseTest.AddTransactionAsyncShouldGetGuidAsync [17 ms]
    Passed TrackingChain.UnitTest.TransactionGenerator.PoolDequeuerUseCaseTest.DequeueTransactionFailedShouldSetInWaitingForWorkerAsync [10 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Accounts.CreateTest.OnPostAsync [2 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.PendingTransactionWatcherUseCaseTest.DequeueTransactionFailedFailedShouldSetInErrorWhenReachMaxLimitAsync [43 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.PendingTransactionWatcherUseCaseTest.AddTransactionAsyncShouldGetGuidAsync [13 ms]
    Passed TrackingChain.UnitTest.TransactionWatcher.PendingTransactionWatcherUseCaseTest.CheckTransactionStatusFailedShouldSetInWaitingForWorkerAsync [8 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.EditTest.OnPostShoudleEditSmartContractAsync [17 ms]
    Passed TrackingChain.UnitTest.Pages.Admin.Smartcontracts.EditTest.OnPostShoudleGetErrorForJsonInvalidAsync [3 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.SetLokedShouldBeSetData [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.UnlockFromErrorShouldBeDelayGeneratingFrom [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.SetCompletedShouldBeSetTrue [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.UnlockFromErrorShouldBeClearData [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.SetStatusErrorDoneShouldBe [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.UnlockFromErrorShouldBeIncreaseErrorTime [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.UnlockShouldBeCleanData [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.UnlockShouldBeNotIncreaseErrorTime [< 1 ms]
    Passed TrackingChain.UnitTest.Domain.TransactionPoolTest.TransactionPoolShouldBePopulateCorrectly [< 1 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.AlertUseCaseTest.TransactionDeleterShouldRemoveTriageCompletedAsync [63 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.ReportGeneratorServiceTest.GenerateTxFailedReportShouldHaveAllItemsAsync [45 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.ReportGeneratorServiceTest.GenerateTxCancelReportShouldHaveAllItemsAsync [9 ms]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionLockedUseCaseTest.TransactionLockedShouldUnlockPendindsAsync [1 s]
    Passed TrackingChain.UnitTest.TransactionMonitor.TransactionLockedUseCaseTest.TransactionLockedShouldUnlockPoolsAsync [1 s]
    [xUnit.net 00:00:08.11]   Finished:    TrackingChain.UnitTest
    Passed TrackingChain.UnitTest.GetTrackTest.TestAsync [5 s]

    Test Run Successful.
    Total tests: 117
        Passed: 117
    Total time: 8.7989 Seconds

    Build succeeded.
        0 Warning(s)
        0 Error(s)

    Time Elapsed 00:00:09.85
    ```

## Docker Feedback

- I wouldn't recommend posting a copy of the docker compose file to the docs, since it may be difficult to keep it in sync with the actual file. Instead, linking to the file might be the better option.
- [x] currently there are ~~errors~~ warnings when starting the infrastructure using docker compose (host: MacOs running M2). However, the race condition issues have been resolved, so there is no longer any need to restart containers, if the db container ends up starting slower als a dependent container. This has been fixed by waiting for the db to start, before starting dependent containers which the logs correctly indicate:
    ```bash
    [15:09:39.448 WRN][]: Waiting for database TrackingChain.AggregatorPoolWorker.WaitingDBHostedService
    ```


