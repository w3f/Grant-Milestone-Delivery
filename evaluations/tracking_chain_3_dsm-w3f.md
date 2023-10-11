# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tracking_chain.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License |<ul><li>[X] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/blob/main/LICENSE) |  |
| **0b.** | Documentation |<ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-3-Guide-to-Demo)  |  |
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Unit-Test)  [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/main/test/TrackingChain.UnitTest) | |
| **0d.** | Docker |<ul><li>[x] </li></ul>| [Docker-Compose](https://github.com/TrackingChains/TrackingChain/wiki/Docker-Compose) | |
| 0e. | Article |<ul><li>[x] </li></ul>| [LINK](https://github.com/TrackingChains/TrackingChain/wiki/Milestone-3-Guide-to-Demo)  | |
| 1. | Tx Generator/Watcher Worker |<ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) |  |
| 2. | Tx Recovery/Monitor Worker |<ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | |
| 3. | Tx Cleaner Worker |<ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) |  |
| 4. | Tx Unlocker Worker |<ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TransactionMonitor.Worker) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | |
| 5. | Frontend Admin Tools |<ul><li>[x] </li></ul>| [SOURCE](https://github.com/TrackingChains/TrackingChain/tree/v0.3.0-alpha/src/TrackingChain.WebApp) [BINARY](https://github.com/TrackingChains/TrackingChain/releases/tag/v0.3.0-alpha) | |

## Evaluation V4

The grantee answered the doubt asked. 

## Evaluation V3

### Testing

Thanks again for the explanation. This time, I received the email:

![image (50)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/22a538a0-60ba-496e-8c62-683e4aa079b4)


I check the Pendings, Pools, and Triages in the SQL server. The data was deleted after I started the Monitor. I manually added some transactions, and it only deleted again when I restarted the Monitor. Shouldn't It constantly remove the data from these tables?


![pasted image 0 (17)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/722861ea-4b16-421d-a3de-5ad3579e0136)

![pasted image 0 (18)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/6d1190c9-8774-4bb5-be10-600234d9847f)



I could observe deliverable 4 described in this [comment](https://github.com/w3f/Grant-Milestone-Delivery/pull/1024#issuecomment-1753885074).

## Evaluation V2

### Testing

Thanks for the explanation. I was able to run the Docker and check the Deliverables 1, 2, and 5. For these three, I didn't receive the email. Correct me if I'm wrong, but the configuration should be:

```
"ReportSettings": {
  "ReportOutput": "All"
}
```

```
  "MailSettings": {
    "Mail": "My_Email",
    "DisplayName": "Email_Name",
    "Password": "My_app_password",
    "Host": "smtp.gmail.com",
    "Port": 587
  }
```

Do I need to do something else to get this email? I couldn't understand how to test the Deliverables 3 and 4. Do I need to run some command, or should it activate after some event? Could you explain the `Configure Monitor Alert` in `Admin Tools`?


## Evaluation V1

### Docker

I had some problems with the Docker. I ran `docker compose up` in the root. After that, the terminal spammed me with these two log messages.

<details>

```
trackingchain-transaction-generator-1  | [15:43:18.007  ERR][]: Child Pool Dequeuer Guid:2f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker 
trackingchain-transaction-generator-1  | System.InvalidOperationException: Sequence contains no elements.
trackingchain-transaction-generator-1  |    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
trackingchain-transaction-generator-1  |    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
trackingchain-transaction-generator-1  |    at TrackingChain.TransactionGeneratorCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionGenerator.Core/Services/AccountService.cs:line 37
trackingchain-transaction-generator-1  |    at TrackingChain.TransactionGeneratorCore.UseCases.PoolDequeuerUseCase.DequeueTransactionAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionGenerator.Core/UseCases/PoolDequeuerUseCase.cs:line 134
trackingchain-transaction-generator-1  |    at TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionGenerator.Worker/PoolDequeuerWorker.cs:line 87


trackingchain-transaction-watcher-1    | [15:43:18.009  ERR][]: Child Checker Guid:8f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TransactionWatcherWorker.PendingTransactionCheckerWorker 
trackingchain-transaction-watcher-1    | System.InvalidOperationException: Account not found
trackingchain-transaction-watcher-1    |    at TrackingChain.TransactionWatcherCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionWatcher.Core/Services/AccountService.cs:line 41
trackingchain-transaction-watcher-1    |    at TrackingChain.TransactionWatcherCore.UseCases.PendingTransactionWatcherUseCase.CheckTransactionStatusAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionWatcher.Core/UseCases/PendingTransactionWatcherUseCase.cs:line 149
trackingchain-transaction-watcher-1    |    at TransactionWatcherWorker.PendingTransactionCheckerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionWatcher.Worker/PendingTransactionCheckerWorker.cs:line 84
trackingchain-transaction-watcher-1    | [15:43:18.010  ERR][]: Child Checker Guid:4f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TransactionWatcherWorker.PendingTransactionCheckerWorker 
trackingchain-transaction-watcher-1    | System.InvalidOperationException: Account not found
trackingchain-transaction-watcher-1    |    at TrackingChain.TransactionWatcherCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionWatcher.Core/Services/AccountService.cs:line 41
trackingchain-transaction-watcher-1    |    at TrackingChain.TransactionWatcherCore.UseCases.PendingTransactionWatcherUseCase.CheckTransactionStatusAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionWatcher.Core/UseCases/PendingTransactionWatcherUseCase.cs:line 149
trackingchain-transaction-watcher-1    |    at TransactionWatcherWorker.PendingTransactionCheckerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionWatcher.Worker/PendingTransactionCheckerWorker.cs:line 84
trackingchain-transaction-watcher-1    | [15:43:18.149  ERR][]: Child Checker Guid:2f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TransactionWatcherWorker.PendingTransactionCheckerWorker 
trackingchain-transaction-watcher-1    | System.InvalidOperationException: Account not found
trackingchain-transaction-watcher-1    |    at TrackingChain.TransactionWatcherCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionWatcher.Core/Services/AccountService.cs:line 41
trackingchain-transaction-watcher-1    |    at TrackingChain.TransactionWatcherCore.UseCases.PendingTransactionWatcherUseCase.CheckTransactionStatusAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionWatcher.Core/UseCases/PendingTransactionWatcherUseCase.cs:line 149
trackingchain-transaction-watcher-1    |    at TransactionWatcherWorker.PendingTransactionCheckerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionWatcher.Worker/PendingTransactionCheckerWorker.cs:line 84
```

</details>

I checked the container using `docker ps -a`. I noticed the container `trackingchain-aggregator-pool-1` didn't start successfully.

```
user@localhost:~/Documents/trackingChain$ docker ps -a
CONTAINER ID   IMAGE                                        COMMAND                  CREATED          STATUS                     PORTS                                                            NAMES
78dab4392033   monitor                                      "dotnet TransactionM…"   16 seconds ago   Up 13 seconds                                                                               trackingchain-monitor-1
01751000ec7d   transactionwatcherworker                     "dotnet TransactionW…"   16 seconds ago   Up 13 seconds                                                                               trackingchain-transaction-watcher-1
930dfb7039af   transactiongeneratorworker                   "dotnet TransactionG…"   16 seconds ago   Up 14 seconds                                                                               trackingchain-transaction-generator-1
014fa559613a   aggregatorpoolworker                         "dotnet AggregatorPo…"   16 seconds ago   Exited (0) 9 seconds ago                                                                    trackingchain-aggregator-pool-1
a91b7be84728   trackingchainwebapp                          "dotnet TrackingChai…"   16 seconds ago   Up 14 seconds              80/tcp, 443/tcp, 0.0.0.0:12345->12345/tcp, :::12345->12345/tcp   trackingchain-webapp-1
0a30cee811ad   triageapi                                    "dotnet Triage.API.d…"   16 seconds ago   Up 15 seconds              443/tcp, 0.0.0.0:5000->80/tcp, :::5000->80/tcp                   trackingchain-triage-1
e98fd0985978   mcr.microsoft.com/mssql/server:2022-latest   "/opt/mssql/bin/perm…"   16 seconds ago   Up 15 seconds              0.0.0.0:5532->1433/tcp, :::5532->1433/tcp    
```

After a minute, the container `trackingchain-triage-1` stopped working too.

```
user@localhost:~/Documents/trackingChain$ docker ps -a
CONTAINER ID   IMAGE                                        COMMAND                  CREATED              STATUS                          PORTS                                                            NAMES
78dab4392033   monitor                                      "dotnet TransactionM…"   About a minute ago   Up About a minute                                                                                trackingchain-monitor-1
01751000ec7d   transactionwatcherworker                     "dotnet TransactionW…"   About a minute ago   Up About a minute                                                                                trackingchain-transaction-watcher-1
930dfb7039af   transactiongeneratorworker                   "dotnet TransactionG…"   About a minute ago   Up About a minute                                                                                trackingchain-transaction-generator-1
014fa559613a   aggregatorpoolworker                         "dotnet AggregatorPo…"   About a minute ago   Exited (0) About a minute ago                                                                    trackingchain-aggregator-pool-1
a91b7be84728   trackingchainwebapp                          "dotnet TrackingChai…"   About a minute ago   Up About a minute               80/tcp, 443/tcp, 0.0.0.0:12345->12345/tcp, :::12345->12345/tcp   trackingchain-webapp-1
0a30cee811ad   triageapi                                    "dotnet Triage.API.d…"   About a minute ago   Exited (139) 10 seconds ago                                                                      trackingchain-triage-1
e98fd0985978   mcr.microsoft.com/mssql/server:2022-latest   "/opt/mssql/bin/perm…"   About a minute ago   Up About a minute               0.0.0.0:5532->1433/tcp, :::5532->1433/tcp                        trackingchain-trackingdb-1
```

I ran `docker restart trackingchain-aggregator-pool-1 trackingchain-triage-1`.

```
user@localhost:~/Documents/trackingChain$ docker restart trackingchain-aggregator-pool-1 trackingchain-triage-1 
trackingchain-aggregator-pool-1
trackingchain-triage-1
```

But only the `trackingchain-triage-1` returned to work.

```
user@localhost:~/Documents/trackingChain$ docker ps -a
CONTAINER ID   IMAGE                                        COMMAND                  CREATED         STATUS                     PORTS                                                            NAMES
78dab4392033   monitor                                      "dotnet TransactionM…"   5 minutes ago   Up 5 minutes                                                                                trackingchain-monitor-1
01751000ec7d   transactionwatcherworker                     "dotnet TransactionW…"   5 minutes ago   Up 5 minutes                                                                                trackingchain-transaction-watcher-1
930dfb7039af   transactiongeneratorworker                   "dotnet TransactionG…"   5 minutes ago   Up 5 minutes                                                                                trackingchain-transaction-generator-1
014fa559613a   aggregatorpoolworker                         "dotnet AggregatorPo…"   5 minutes ago   Exited (0) 2 minutes ago                                                                    trackingchain-aggregator-pool-1
a91b7be84728   trackingchainwebapp                          "dotnet TrackingChai…"   5 minutes ago   Up 5 minutes               80/tcp, 443/tcp, 0.0.0.0:12345->12345/tcp, :::12345->12345/tcp   trackingchain-webapp-1
0a30cee811ad   triageapi                                    "dotnet Triage.API.d…"   5 minutes ago   Up 2 minutes               443/tcp, 0.0.0.0:5000->80/tcp, :::5000->80/tcp                   trackingchain-triage-1
e98fd0985978   mcr.microsoft.com/mssql/server:2022-latest   "/opt/mssql/bin/perm…"   5 minutes ago   Up 5 minutes               0.0.0.0:5532->1433/tcp, :::5532->1433/tcp                        trackingchain-trackingdb-1
```

I checked the logs of the containers. I hope these logs help to solve this problem.

<details>

- trackingchain-trackingdb-1

    <details>

    ```
    2023-10-06 15:15:46.11 spid42s     Database 'model_msdb' running the upgrade step from version 940 to version 941.
    2023-10-06 15:15:46.12 spid42s     Database 'model_msdb' running the upgrade step from version 941 to version 942.
    2023-10-06 15:15:46.13 spid42s     Database 'model_msdb' running the upgrade step from version 942 to version 943.
    2023-10-06 15:15:46.17 spid42s     Database 'model_msdb' running the upgrade step from version 943 to version 944.
    2023-10-06 15:15:46.17 spid42s     Database 'model_msdb' running the upgrade step from version 944 to version 945.
    2023-10-06 15:15:46.18 Logon       Error: 18456, Severity: 14, State: 7.
    2023-10-06 15:15:46.18 Logon       Login failed for user 'sa'. Reason: An error occurred while evaluating the password. [CLIENT: 172.21.0.5]
    2023-10-06 15:15:46.19 Logon       Error: 18456, Severity: 14, State: 7.
    2023-10-06 15:15:46.19 Logon       Login failed for user 'sa'. Reason: An error occurred while evaluating the password. [CLIENT: 172.21.0.8]
    2023-10-06 15:15:46.20 spid42s     Database 'model_msdb' running the upgrade step from version 945 to version 946.
    2023-10-06 15:15:46.21 spid42s     Database 'model_msdb' running the upgrade step from version 946 to version 947.
    2023-10-06 15:15:46.22 spid42s     Database 'model_msdb' running the upgrade step from version 947 to version 948.
    2023-10-06 15:15:46.23 spid42s     Database 'model_msdb' running the upgrade step from version 948 to version 949.
    2023-10-06 15:15:46.25 spid42s     Database 'model_msdb' running the upgrade step from version 949 to version 950.
    2023-10-06 15:15:46.26 spid42s     Database 'model_msdb' running the upgrade step from version 950 to version 951.
    2023-10-06 15:15:46.28 spid42s     Database 'model_msdb' running the upgrade step from version 951 to version 952.
    2023-10-06 15:15:46.29 spid42s     Database 'model_msdb' running the upgrade step from version 952 to version 953.
    2023-10-06 15:15:46.30 spid42s     Database 'model_msdb' running the upgrade step from version 953 to version 954.
    2023-10-06 15:15:46.30 spid42s     Database 'model_msdb' running the upgrade step from version 954 to version 955.
    2023-10-06 15:15:46.31 spid42s     Database 'model_msdb' running the upgrade step from version 955 to version 956.
    2023-10-06 15:15:46.34 spid42s     Database 'model_msdb' running the upgrade step from version 956 to version 957.
    2023-10-06 15:15:46.38 spid42s     Resource governor reconfiguration succeeded.
    2023-10-06 15:15:46.38 spid55s     Attribute synchronization initialized
    2023-10-06 15:15:46.38 spid42s     SQL Server Audit is starting the audits. This is an informational message. No user action is required.
    2023-10-06 15:15:46.38 spid55s     Attribute synchronization manager initialized
    2023-10-06 15:15:46.38 spid42s     SQL Server Audit has started the audits. This is an informational message. No user action is required.
    2023-10-06 15:15:46.39 spid42s     XE session 'system_health' started.
    2023-10-06 15:15:46.40 spid42s     SQL Trace ID 1 was started by login "sa".
    2023-10-06 15:15:46.41 spid42s     Server name is 'e98fd0985978'. This is an informational message only. No user action is required.
    2023-10-06 15:15:46.43 spid45s     Clearing tempdb database.
    2023-10-06 15:15:46.43 spid62s     Always On: The availability replica manager is starting. This is an informational message only. No user action is required.
    2023-10-06 15:15:46.43 spid64s     [4]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
    2023-10-06 15:15:46.44 spid62s     Always On: The availability replica manager is waiting for the instance of SQL Server to allow client connections. This is an informational message only. No user action is required.
    2023-10-06 15:15:46.44 spid64s     Starting up database 'msdb'.
    2023-10-06 15:15:46.49 Logon       Error: 18456, Severity: 14, State: 38.
    2023-10-06 15:15:46.49 Logon       Login failed for user 'sa'. Reason: Failed to open the explicitly specified database 'TrackingChain'. [CLIENT: 172.21.0.3]
    2023-10-06 15:15:46.49 Logon       Error: 18456, Severity: 14, State: 38.
    2023-10-06 15:15:46.49 Logon       Login failed for user 'sa'. Reason: Failed to open the explicitly specified database 'TrackingChain'. [CLIENT: 172.21.0.6]
    2023-10-06 15:15:46.51 spid64s     Converting database 'msdb' from version 927 to the current version 957.
    2023-10-06 15:15:46.51 spid64s     Database 'msdb' running the upgrade step from version 927 to version 928.
    2023-10-06 15:15:46.54 spid64s     Database 'msdb' running the upgrade step from version 928 to version 929.
    2023-10-06 15:15:46.80 spid45s     [2]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
    2023-10-06 15:15:46.81 spid45s     Starting up database 'tempdb'.
    2023-10-06 15:15:46.82 spid64s     Database 'msdb' running the upgrade step from version 929 to version 930.
    2023-10-06 15:15:47.00 spid64s     Database 'msdb' running the upgrade step from version 930 to version 931.
    2023-10-06 15:15:47.00 spid45s     The tempdb database has 1 data file(s).
    2023-10-06 15:15:47.05 spid68s     The Service Broker endpoint is in disabled or stopped state.
    2023-10-06 15:15:47.05 spid68s     The Database Mirroring endpoint is in disabled or stopped state.
    2023-10-06 15:15:47.05 spid64s     Database 'msdb' running the upgrade step from version 931 to version 932.
    2023-10-06 15:15:47.49 spid64s     Database 'msdb' running the upgrade step from version 932 to version 933.
    2023-10-06 15:15:47.49 spid68s     Service Broker manager has started.
    2023-10-06 15:15:47.58 spid64s     Database 'msdb' running the upgrade step from version 933 to version 934.
    2023-10-06 15:15:47.59 spid64s     Database 'msdb' running the upgrade step from version 934 to version 935.
    2023-10-06 15:15:47.69 spid64s     Database 'msdb' running the upgrade step from version 935 to version 936.
    2023-10-06 15:15:47.70 spid62      [5]. Feature Status: PVS: 0. CTR: 0. ConcurrentPFSUpdate: 1. ConcurrentGAMUpdate: 1. ConcurrentSGAMUpdate: 1, CleanupUnderUserTransaction: 0. TranLevelPVS: 0
    2023-10-06 15:15:47.70 spid62      Starting up database 'TrackingChain'.
    2023-10-06 15:15:47.70 spid62      RemoveStaleDbEntries: Cleanup of stale DB entries called for database ID: [5]
    2023-10-06 15:15:47.70 spid62      RemoveStaleDbEntries: Cleanup of stale DB entries skipped because master db is not memory optimized. DbId: 5.
    2023-10-06 15:15:47.70 spid64s     Database 'msdb' running the upgrade step from version 936 to version 937.
    2023-10-06 15:15:47.70 spid64s     Database 'msdb' running the upgrade step from version 937 to version 938.
    2023-10-06 15:15:47.72 spid64s     Database 'msdb' running the upgrade step from version 938 to version 939.
    2023-10-06 15:15:47.73 spid64s     Database 'msdb' running the upgrade step from version 939 to version 940.
    2023-10-06 15:15:47.73 spid62      Parallel redo is started for database 'TrackingChain' with worker pool size [8].
    2023-10-06 15:15:47.74 spid64s     Database 'msdb' running the upgrade step from version 940 to version 941.
    2023-10-06 15:15:47.74 spid62      Parallel redo is shutdown for database 'TrackingChain' with worker pool size [8].
    2023-10-06 15:15:47.75 spid64s     Database 'msdb' running the upgrade step from version 941 to version 942.
    2023-10-06 15:15:47.75 spid64s     Database 'msdb' running the upgrade step from version 942 to version 943.
    2023-10-06 15:15:47.79 spid64s     Database 'msdb' running the upgrade step from version 943 to version 944.
    2023-10-06 15:15:47.80 spid64s     Database 'msdb' running the upgrade step from version 944 to version 945.
    2023-10-06 15:15:47.82 spid64s     Database 'msdb' running the upgrade step from version 945 to version 946.
    2023-10-06 15:15:47.83 spid64s     Database 'msdb' running the upgrade step from version 946 to version 947.
    2023-10-06 15:15:47.84 spid64s     Database 'msdb' running the upgrade step from version 947 to version 948.
    2023-10-06 15:15:47.85 spid64s     Database 'msdb' running the upgrade step from version 948 to version 949.
    2023-10-06 15:15:47.86 spid64s     Database 'msdb' running the upgrade step from version 949 to version 950.
    2023-10-06 15:15:47.87 spid64s     Database 'msdb' running the upgrade step from version 950 to version 951.
    2023-10-06 15:15:47.88 spid64s     Database 'msdb' running the upgrade step from version 951 to version 952.
    2023-10-06 15:15:47.89 spid64s     Database 'msdb' running the upgrade step from version 952 to version 953.
    2023-10-06 15:15:47.90 spid64s     Database 'msdb' running the upgrade step from version 953 to version 954.
    2023-10-06 15:15:47.91 spid64s     Database 'msdb' running the upgrade step from version 954 to version 955.
    2023-10-06 15:15:47.92 spid64s     Database 'msdb' running the upgrade step from version 955 to version 956.
    2023-10-06 15:15:47.93 spid64s     Database 'msdb' running the upgrade step from version 956 to version 957.
    2023-10-06 15:15:48.00 spid42s     Recovery is complete. This is an informational message only. No user action is required.
    2023-10-06 15:15:48.01 spid51s     The default language (LCID 0) has been set for engine and full-text services.
    2023-10-06 15:15:48.31 spid51s     The tempdb database has 8 data file(s).
    2023-10-06 15:15:49.83 spid43s     Using 'dbghelp.dll' version '4.0.5'
    [GhostCleanup][DbId:5]. Skipping GhostCleanup as Db is enlisted for Exclusive lock2023-10-06 15:20:46.78 spid81      XE session 'telemetry_xevents' started.
    2023-10-06 15:22:39.00 spid81      Attempting to load library 'xplog70.dll' into memory. This is an informational message only. No user action is required.
    2023-10-06 15:22:39.02 spid81      Using 'xplog70.dll' version '2022.160.4075' to execute extended stored procedure 'xp_msver'. This is an informational message only; no user action is required.
    ```

    </details>

- trackingchain-triage-1

    <details>

    ```
    user@localhost:~/Documents/trackingChain$ docker logs  trackingchain-triage-1 
    [15:15:41.220  INF][]: Migration Db Worker running.  TrackingChain.TriageAPI.HostedService.MigratorDBHostedService 
    [15:16:47.835  ERR][]: Failed executing DbCommand (60,008ms) [Parameters=[], CommandType='Text', CommandTimeout='60']
    IF SERVERPROPERTY('EngineEdition') <> 5
    BEGIN
        ALTER DATABASE [TrackingChain] SET READ_COMMITTED_SNAPSHOT ON;
    END;  Microsoft.EntityFrameworkCore.Database.Command 
    Unhandled exception. Microsoft.Data.SqlClient.SqlException (0x80131904): Execution Timeout Expired.  The timeout period elapsed prior to completion of the operation or the server is not responding.
    ---> System.ComponentModel.Win32Exception (258): Unknown error 258
    at Microsoft.Data.SqlClient.SqlConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
    at Microsoft.Data.SqlClient.SqlInternalConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
    at Microsoft.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)
    at Microsoft.Data.SqlClient.TdsParserStateObject.ThrowExceptionAndWarning(Boolean callerHasConnectionLock, Boolean asyncClose)
    at Microsoft.Data.SqlClient.TdsParserStateObject.CheckThrowSNIException()
    at Microsoft.Data.SqlClient.SqlCommand.CheckThrowSNIException()
    at Microsoft.Data.SqlClient.SqlCommand.InternalEndExecuteNonQuery(IAsyncResult asyncResult, Boolean isInternal, String endMethod)
    at Microsoft.Data.SqlClient.SqlCommand.EndExecuteNonQueryInternal(IAsyncResult asyncResult)
    at Microsoft.Data.SqlClient.SqlCommand.EndExecuteNonQueryAsync(IAsyncResult asyncResult)
    at System.Threading.Tasks.TaskFactory`1.FromAsyncCoreLogic(IAsyncResult iar, Func`2 endFunction, Action`1 endAction, Task`1 promise, Boolean requiresSynchronization)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteNonQueryAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteNonQueryAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteNonQueryAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Migrations.Internal.MigrationCommandExecutor.ExecuteNonQueryAsync(IEnumerable`1 migrationCommands, IRelationalConnection connection, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Migrations.Internal.MigrationCommandExecutor.ExecuteNonQueryAsync(IEnumerable`1 migrationCommands, IRelationalConnection connection, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Migrations.Internal.MigrationCommandExecutor.ExecuteNonQueryAsync(IEnumerable`1 migrationCommands, IRelationalConnection connection, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Migrations.Internal.MigrationCommandExecutor.ExecuteNonQueryAsync(IEnumerable`1 migrationCommands, IRelationalConnection connection, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerDatabaseCreator.CreateAsync(CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerDatabaseCreator.CreateAsync(CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Migrations.Internal.Migrator.MigrateAsync(String targetMigration, CancellationToken cancellationToken)
    at TrackingChain.TriageAPI.HostedService.MigratorDBHostedService.StartAsync(CancellationToken cancellationToken) in /src/src/Triage.API/HostedService/MigratorDBHostedService.cs:line 45
    at Microsoft.Extensions.Hosting.Internal.Host.StartAsync(CancellationToken cancellationToken)
    at Microsoft.Extensions.Hosting.HostingAbstractionsHostExtensions.RunAsync(IHost host, CancellationToken token)
    at Microsoft.Extensions.Hosting.HostingAbstractionsHostExtensions.RunAsync(IHost host, CancellationToken token)
    at Microsoft.Extensions.Hosting.HostingAbstractionsHostExtensions.Run(IHost host)
    at Program.<Main>$(String[] args) in /src/src/Triage.API/Program.cs:line 86
    ClientConnectionId:f8fc9e01-b1f8-4791-a693-9f0ee6c6f05d
    Error Number:-2,State:0,Class:11
    [15:18:43.624  INF][]: Migration Db Worker running.  TrackingChain.TriageAPI.HostedService.MigratorDBHostedService 
    [15:18:45.795  INF][]: Migration Db END.  TrackingChain.TriageAPI.HostedService.MigratorDBHostedService 
    [15:18:45.816  WRN][]: Overriding address(es) 'http://+:80'. Binding to endpoints defined via IConfiguration and/or UseKestrel() instead.  Microsoft.AspNetCore.Server.Kestrel 
    [15:18:45.823  INF][]: Now listening on: http://0.0.0.0:80  Microsoft.Hosting.Lifetime 
    [15:18:45.823  INF][]: Application started. Press Ctrl+C to shut down.  Microsoft.Hosting.Lifetime 
    [15:18:45.823  INF][]: Hosting environment: Production  Microsoft.Hosting.Lifetime 
    [15:18:45.823  INF][]: Content root path: /app  Microsoft.Hosting.Lifetime 
    ```

    </details>

- trackingchain-aggregator-pool-1

    <details>

    ```
    user@localhost:~/Documents/trackingChain$ docker logs  trackingchain-aggregator-pool-1 
    [15:15:41.888  INF][]: Pool Enqueuer Worker running.  TrackingChain.AggregatorPoolWorker.PoolEnqueuerWorker 
    [15:15:43.076  WRN][]: The query uses a row limiting operator ('Skip'/'Take') without an 'OrderBy' operator. This may lead to unpredictable results. If the 'Distinct' operator is used after 'OrderBy', then make sure to use the 'OrderBy' operator after 'Distinct' as the ordering would otherwise get erased.  Microsoft.EntityFrameworkCore.Query 
    [15:15:43.453  INF][]: Application started. Press Ctrl+C to shut down.  Microsoft.Hosting.Lifetime 
    [15:15:43.454  INF][]: Hosting environment: Production  Microsoft.Hosting.Lifetime 
    [15:15:43.455  INF][]: Content root path: /app  Microsoft.Hosting.Lifetime 
    [15:15:46.205  ERR][]: An error occurred using the connection to database 'TrackingChain' on server 'trackingdb,1433'.  Microsoft.EntityFrameworkCore.Database.Connection 
    [15:15:46.227  ERR][]: An exception occurred while iterating over the results of a query for context type 'TrackingChain.TrackingChainCore.EntityFramework.Context.ApplicationDbContext'.
    Microsoft.Data.SqlClient.SqlException (0x80131904): Login failed for user 'sa'.
    at Microsoft.Data.SqlClient.SqlInternalConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
    at Microsoft.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)
    at Microsoft.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)
    at Microsoft.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.CompleteLogin(Boolean enlistOK)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.AttemptOneLogin(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean ignoreSniOpenTimeout, TimeoutTimer timeout, Boolean withFailover)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.LoginNoFailover(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString connectionOptions, SqlCredential credential, TimeoutTimer timeout)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.OpenLoginEnlist(TimeoutTimer timeout, SqlConnectionString connectionOptions, SqlCredential credential, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds..ctor(DbConnectionPoolIdentity identity, SqlConnectionString connectionOptions, SqlCredential credential, Object providerInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString userConnectionOptions, SessionData reconnectSessionData, Boolean applyTransientFaultHandling, String accessToken, DbConnectionPool pool)
    at Microsoft.Data.SqlClient.SqlConnectionFactory.CreateConnection(DbConnectionOptions options, DbConnectionPoolKey poolKey, Object poolGroupProviderInfo, DbConnectionPool pool, DbConnection owningConnection, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionFactory.CreatePooledConnection(DbConnectionPool pool, DbConnection owningObject, DbConnectionOptions options, DbConnectionPoolKey poolKey, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionPool.CreateObject(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.UserCreateRequest(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.TryGetConnection(DbConnection owningObject, UInt32 waitForMultipleObjectsTimeout, Boolean allowCreate, Boolean onlyOneCheckConnection, DbConnectionOptions userOptions, DbConnectionInternal& connection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.WaitForPendingOpen()
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenAsync(CancellationToken cancellationToken, Boolean errorsExpected)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:6b366a3b-fd13-4cb9-9064-e93b761ee896
    Error Number:18456,State:1,Class:14  Microsoft.EntityFrameworkCore.Query 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Login failed for user 'sa'.
    at Microsoft.Data.SqlClient.SqlInternalConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
    at Microsoft.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)
    at Microsoft.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)
    at Microsoft.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.CompleteLogin(Boolean enlistOK)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.AttemptOneLogin(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean ignoreSniOpenTimeout, TimeoutTimer timeout, Boolean withFailover)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.LoginNoFailover(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString connectionOptions, SqlCredential credential, TimeoutTimer timeout)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.OpenLoginEnlist(TimeoutTimer timeout, SqlConnectionString connectionOptions, SqlCredential credential, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds..ctor(DbConnectionPoolIdentity identity, SqlConnectionString connectionOptions, SqlCredential credential, Object providerInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString userConnectionOptions, SessionData reconnectSessionData, Boolean applyTransientFaultHandling, String accessToken, DbConnectionPool pool)
    at Microsoft.Data.SqlClient.SqlConnectionFactory.CreateConnection(DbConnectionOptions options, DbConnectionPoolKey poolKey, Object poolGroupProviderInfo, DbConnectionPool pool, DbConnection owningConnection, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionFactory.CreatePooledConnection(DbConnectionPool pool, DbConnection owningObject, DbConnectionOptions options, DbConnectionPoolKey poolKey, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionPool.CreateObject(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.UserCreateRequest(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.TryGetConnection(DbConnection owningObject, UInt32 waitForMultipleObjectsTimeout, Boolean allowCreate, Boolean onlyOneCheckConnection, DbConnectionOptions userOptions, DbConnectionInternal& connection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.WaitForPendingOpen()
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenAsync(CancellationToken cancellationToken, Boolean errorsExpected)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:6b366a3b-fd13-4cb9-9064-e93b761ee896
    Error Number:18456,State:1,Class:14
    [15:15:46.246  ERR][]: BackgroundService failed  Microsoft.Extensions.Hosting.Internal.Host 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Login failed for user 'sa'.
    at Microsoft.Data.SqlClient.SqlInternalConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
    at Microsoft.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)
    at Microsoft.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)
    at Microsoft.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.CompleteLogin(Boolean enlistOK)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.AttemptOneLogin(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean ignoreSniOpenTimeout, TimeoutTimer timeout, Boolean withFailover)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.LoginNoFailover(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString connectionOptions, SqlCredential credential, TimeoutTimer timeout)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.OpenLoginEnlist(TimeoutTimer timeout, SqlConnectionString connectionOptions, SqlCredential credential, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds..ctor(DbConnectionPoolIdentity identity, SqlConnectionString connectionOptions, SqlCredential credential, Object providerInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString userConnectionOptions, SessionData reconnectSessionData, Boolean applyTransientFaultHandling, String accessToken, DbConnectionPool pool)
    at Microsoft.Data.SqlClient.SqlConnectionFactory.CreateConnection(DbConnectionOptions options, DbConnectionPoolKey poolKey, Object poolGroupProviderInfo, DbConnectionPool pool, DbConnection owningConnection, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionFactory.CreatePooledConnection(DbConnectionPool pool, DbConnection owningObject, DbConnectionOptions options, DbConnectionPoolKey poolKey, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionPool.CreateObject(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.UserCreateRequest(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.TryGetConnection(DbConnection owningObject, UInt32 waitForMultipleObjectsTimeout, Boolean allowCreate, Boolean onlyOneCheckConnection, DbConnectionOptions userOptions, DbConnectionInternal& connection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.WaitForPendingOpen()
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenAsync(CancellationToken cancellationToken, Boolean errorsExpected)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at TrackingChain.AggregatorPoolCore.Services.AggregatorService.GetTransactionToEnqueueAsync(Int32 max, IEnumerable`1 profileIds) in /src/src/AggregatorPool.Core/Services/AggregatorService.cs:line 81
    at TrackingChain.AggregatorPoolCore.UseCases.EnqueuerPoolUseCase.EnqueueTransactionAsync(Int32 max) in /src/src/AggregatorPool.Core/UseCases/EnqueuerPoolUseCase.cs:line 32
    at TrackingChain.AggregatorPoolWorker.PoolEnqueuerWorker.ExecuteAsync(CancellationToken stoppingToken) in /src/src/AggregatorPool.Worker/PoolEnqueuerWorker.cs:line 35
    at Microsoft.Extensions.Hosting.Internal.Host.TryExecuteBackgroundServiceAsync(BackgroundService backgroundService)
    ClientConnectionId:6b366a3b-fd13-4cb9-9064-e93b761ee896
    Error Number:18456,State:1,Class:14
    [15:15:46.256  FTL][]: The HostOptions.BackgroundServiceExceptionBehavior is configured to StopHost. A BackgroundService has thrown an unhandled exception, and the IHost instance is stopping. To avoid this behavior, configure this to Ignore; however the BackgroundService will not be restarted.  Microsoft.Extensions.Hosting.Internal.Host 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Login failed for user 'sa'.
    at Microsoft.Data.SqlClient.SqlInternalConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
    at Microsoft.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)
    at Microsoft.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)
    at Microsoft.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.CompleteLogin(Boolean enlistOK)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.AttemptOneLogin(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean ignoreSniOpenTimeout, TimeoutTimer timeout, Boolean withFailover)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.LoginNoFailover(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString connectionOptions, SqlCredential credential, TimeoutTimer timeout)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds.OpenLoginEnlist(TimeoutTimer timeout, SqlConnectionString connectionOptions, SqlCredential credential, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance)
    at Microsoft.Data.SqlClient.SqlInternalConnectionTds..ctor(DbConnectionPoolIdentity identity, SqlConnectionString connectionOptions, SqlCredential credential, Object providerInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString userConnectionOptions, SessionData reconnectSessionData, Boolean applyTransientFaultHandling, String accessToken, DbConnectionPool pool)
    at Microsoft.Data.SqlClient.SqlConnectionFactory.CreateConnection(DbConnectionOptions options, DbConnectionPoolKey poolKey, Object poolGroupProviderInfo, DbConnectionPool pool, DbConnection owningConnection, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionFactory.CreatePooledConnection(DbConnectionPool pool, DbConnection owningObject, DbConnectionOptions options, DbConnectionPoolKey poolKey, DbConnectionOptions userOptions)
    at Microsoft.Data.ProviderBase.DbConnectionPool.CreateObject(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.UserCreateRequest(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.TryGetConnection(DbConnection owningObject, UInt32 waitForMultipleObjectsTimeout, Boolean allowCreate, Boolean onlyOneCheckConnection, DbConnectionOptions userOptions, DbConnectionInternal& connection)
    at Microsoft.Data.ProviderBase.DbConnectionPool.WaitForPendingOpen()
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenInternalAsync(Boolean errorsExpected, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalConnection.OpenAsync(CancellationToken cancellationToken, Boolean errorsExpected)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at TrackingChain.AggregatorPoolCore.Services.AggregatorService.GetTransactionToEnqueueAsync(Int32 max, IEnumerable`1 profileIds) in /src/src/AggregatorPool.Core/Services/AggregatorService.cs:line 81
    at TrackingChain.AggregatorPoolCore.UseCases.EnqueuerPoolUseCase.EnqueueTransactionAsync(Int32 max) in /src/src/AggregatorPool.Core/UseCases/EnqueuerPoolUseCase.cs:line 32
    at TrackingChain.AggregatorPoolWorker.PoolEnqueuerWorker.ExecuteAsync(CancellationToken stoppingToken) in /src/src/AggregatorPool.Worker/PoolEnqueuerWorker.cs:line 35
    at Microsoft.Extensions.Hosting.Internal.Host.TryExecuteBackgroundServiceAsync(BackgroundService backgroundService)
    ClientConnectionId:6b366a3b-fd13-4cb9-9064-e93b761ee896
    Error Number:18456,State:1,Class:14
    [15:15:46.262  INF][]: Application is shutting down...  Microsoft.Hosting.Lifetime 
    [15:18:43.151  INF][]: Pool Enqueuer Worker running.  TrackingChain.AggregatorPoolWorker.PoolEnqueuerWorker 
    [15:18:43.999  WRN][]: The query uses a row limiting operator ('Skip'/'Take') without an 'OrderBy' operator. This may lead to unpredictable results. If the 'Distinct' operator is used after 'OrderBy', then make sure to use the 'OrderBy' operator after 'Distinct' as the ordering would otherwise get erased.  Microsoft.EntityFrameworkCore.Query 
    [15:18:44.231  INF][]: Application started. Press Ctrl+C to shut down.  Microsoft.Hosting.Lifetime 
    [15:18:44.231  INF][]: Hosting environment: Production  Microsoft.Hosting.Lifetime 
    [15:18:44.233  INF][]: Content root path: /app  Microsoft.Hosting.Lifetime 
    [15:18:44.416  ERR][]: Failed executing DbCommand (40ms) [Parameters=[@__p_0='?' (DbType = Int32)], CommandType='Text', CommandTimeout='30']
    SELECT [t].[Id], [t].[ChainNumberId], [t].[ChainType], [t].[Code], [t].[Completed], [t].[DataValue], [t].[IsInPool], [t].[ProfileGroupId], [t].[ReceivedDate], [t].[SmartContractAddress], [t].[SmartContractExtraInfo], [t].[SmartContractId], [t].[TrackingIdentify]
    FROM [TransactionTriages] AS [t]
    INNER JOIN (
        SELECT TOP(@__p_0) MIN([t1].[Id]) AS [c], [t1].[Code], [t1].[SmartContractId]
        FROM [TransactionTriages] AS [t1]
        WHERE [t1].[Completed] = CAST(0 AS bit)
        GROUP BY [t1].[Code], [t1].[SmartContractId]
        HAVING MAX(CASE
            WHEN [t1].[IsInPool] = CAST(1 AS bit) THEN 1
            ELSE 0
        END) = 0
    ) AS [t0] ON [t].[Id] = [t0].[c]  Microsoft.EntityFrameworkCore.Database.Command 
    [15:18:44.434  ERR][]: An exception occurred while iterating over the results of a query for context type 'TrackingChain.TrackingChainCore.EntityFramework.Context.ApplicationDbContext'.
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionTriages'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:85c4cc9c-c344-4361-bb86-4f135b7ac18e
    Error Number:208,State:1,Class:16  Microsoft.EntityFrameworkCore.Query 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionTriages'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:85c4cc9c-c344-4361-bb86-4f135b7ac18e
    Error Number:208,State:1,Class:16
    [15:18:44.440  ERR][]: BackgroundService failed  Microsoft.Extensions.Hosting.Internal.Host 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionTriages'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at TrackingChain.AggregatorPoolCore.Services.AggregatorService.GetTransactionToEnqueueAsync(Int32 max, IEnumerable`1 profileIds) in /src/src/AggregatorPool.Core/Services/AggregatorService.cs:line 81
    at TrackingChain.AggregatorPoolCore.UseCases.EnqueuerPoolUseCase.EnqueueTransactionAsync(Int32 max) in /src/src/AggregatorPool.Core/UseCases/EnqueuerPoolUseCase.cs:line 32
    at TrackingChain.AggregatorPoolWorker.PoolEnqueuerWorker.ExecuteAsync(CancellationToken stoppingToken) in /src/src/AggregatorPool.Worker/PoolEnqueuerWorker.cs:line 35
    at Microsoft.Extensions.Hosting.Internal.Host.TryExecuteBackgroundServiceAsync(BackgroundService backgroundService)
    ClientConnectionId:85c4cc9c-c344-4361-bb86-4f135b7ac18e
    Error Number:208,State:1,Class:16
    [15:18:44.493  FTL][]: The HostOptions.BackgroundServiceExceptionBehavior is configured to StopHost. A BackgroundService has thrown an unhandled exception, and the IHost instance is stopping. To avoid this behavior, configure this to Ignore; however the BackgroundService will not be restarted.  Microsoft.Extensions.Hosting.Internal.Host 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionTriages'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at TrackingChain.AggregatorPoolCore.Services.AggregatorService.GetTransactionToEnqueueAsync(Int32 max, IEnumerable`1 profileIds) in /src/src/AggregatorPool.Core/Services/AggregatorService.cs:line 81
    at TrackingChain.AggregatorPoolCore.UseCases.EnqueuerPoolUseCase.EnqueueTransactionAsync(Int32 max) in /src/src/AggregatorPool.Core/UseCases/EnqueuerPoolUseCase.cs:line 32
    at TrackingChain.AggregatorPoolWorker.PoolEnqueuerWorker.ExecuteAsync(CancellationToken stoppingToken) in /src/src/AggregatorPool.Worker/PoolEnqueuerWorker.cs:line 35
    at Microsoft.Extensions.Hosting.Internal.Host.TryExecuteBackgroundServiceAsync(BackgroundService backgroundService)
    ClientConnectionId:85c4cc9c-c344-4361-bb86-4f135b7ac18e
    Error Number:208,State:1,Class:16
    [15:18:44.497  INF][]: Application is shutting down...  Microsoft.Hosting.Lifetime 
    ```

    </details>

- trackingchain-transaction-generator-1

    <details>

    ```
    [15:21:55.823  ERR][]: Child Pool Dequeuer Guid:4f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker 
    System.InvalidOperationException: Sequence contains no elements.
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at TrackingChain.TransactionGeneratorCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionGenerator.Core/Services/AccountService.cs:line 37
    at TrackingChain.TransactionGeneratorCore.UseCases.PoolDequeuerUseCase.DequeueTransactionAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionGenerator.Core/UseCases/PoolDequeuerUseCase.cs:line 134
    at TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionGenerator.Worker/PoolDequeuerWorker.cs:line 87
    [15:21:55.823  ERR][]: Child Pool Dequeuer Guid:9f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker 
    System.InvalidOperationException: Sequence contains no elements.
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at TrackingChain.TransactionGeneratorCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionGenerator.Core/Services/AccountService.cs:line 37
    at TrackingChain.TransactionGeneratorCore.UseCases.PoolDequeuerUseCase.DequeueTransactionAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionGenerator.Core/UseCases/PoolDequeuerUseCase.cs:line 134
    at TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionGenerator.Worker/PoolDequeuerWorker.cs:line 87
    [15:21:55.823  ERR][]: Child Pool Dequeuer Guid:5f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker 
    System.InvalidOperationException: Sequence contains no elements.
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at TrackingChain.TransactionGeneratorCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionGenerator.Core/Services/AccountService.cs:line 37
    at TrackingChain.TransactionGeneratorCore.UseCases.PoolDequeuerUseCase.DequeueTransactionAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionGenerator.Core/UseCases/PoolDequeuerUseCase.cs:line 134
    at TrackingChain.TransactionGeneratorWorker.PoolDequeuerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionGenerator.Worker/PoolDequeuerWorker.cs:line 87
    ```

    </details>

- trackingchain-transaction-watcher-1

    <details>

    ```
    [15:18:06.940  ERR][]: Child Checker Guid:2f8e591b-6a9c-486e-ab2b-2b42abbf5b23  TransactionWatcherWorker.PendingTransactionCheckerWorker 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'Accounts'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleOrDefaultAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.ShapedQueryCompilingExpressionVisitor.SingleOrDefaultAsync[TSource](IAsyncEnumerable`1 asyncEnumerable, CancellationToken cancellationToken)
    at TrackingChain.TransactionWatcherCore.Services.AccountService.GetAccountAsync(Guid accountId) in /src/src/TransactionWatcher.Core/Services/AccountService.cs:line 41
    at TrackingChain.TransactionWatcherCore.UseCases.PendingTransactionWatcherUseCase.CheckTransactionStatusAsync(Int32 max, Guid accountId, Int32 reTryAfterSeconds, Int32 errorAfterReTry) in /src/src/TransactionWatcher.Core/UseCases/PendingTransactionWatcherUseCase.cs:line 149
    at TransactionWatcherWorker.PendingTransactionCheckerWorker.RunSingleAccountAsync(Guid taskId, CancellationToken stoppingToken) in /src/src/TransactionWatcher.Worker/PendingTransactionCheckerWorker.cs:line 84
    ClientConnectionId:6ea5cd4f-1234-473a-b3a6-faa964284f8d
    Error Number:208,State:1,Class:16
    [15:18:06.941  ERR][]: An exception occurred while iterating over the results of a query for context type 'TrackingChain.TrackingChainCore.EntityFramework.Context.ApplicationDbContext'.
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'Accounts'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:fcdb99ba-ebad-4f7a-8ccd-433a771d8236
    Error Number:208,State:1,Class:16  Microsoft.EntityFrameworkCore.Query 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'Accounts'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:fcdb99ba-ebad-4f7a-8ccd-433a771d8236
    Error Number:208,State:1,Class:16
    ```

    </details>

- trackingchain-monitor-1

    <details>

    ```
    [15:17:46.420  ERR][]: An exception occurred while iterating over the results of a query for context type 'TrackingChain.TrackingChainCore.EntityFramework.Context.ApplicationDbContext'.
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionPendings'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:9ff32153-cc27-4c38-926b-260547bb274b
    Error Number:208,State:1,Class:16  Microsoft.EntityFrameworkCore.Query 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionPendings'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    ClientConnectionId:9ff32153-cc27-4c38-926b-260547bb274b
    Error Number:208,State:1,Class:16
    [15:17:46.421  ERR][]: Transaction Failed Worker Error  TrackingChain.TransactionMonitorWorker.TransactionFailedWorker 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionRegistries'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at TrackingChain.TransactionMonitorCore.Services.TransactionMonitorService.GetTransactionWaitingToReProcessAsync(Int32 max) in /src/src/TransactionMonitor.Core/Services/TransactionMonitorService.cs:line 88
    at TrackingChain.TransactionMonitorCore.UseCases.TransactionFailedUseCase.ManageAsync(Int32 max, Int32 failedReTryTimes) in /src/src/TransactionMonitor.Core/UseCases/TransactionFailedUseCase.cs:line 42
    at TrackingChain.TransactionMonitorWorker.TransactionFailedWorker.ExecuteAsync(CancellationToken stoppingToken) in /src/src/TransactionMonitor.Worker/TransactionFailedWorker.cs:line 45
    ClientConnectionId:5c250af2-79e1-4823-bf37-80ce2923ed64
    Error Number:208,State:1,Class:16
    [15:17:46.421  ERR][]: Transaction Locked Worker Error  TrackingChain.TransactionMonitorWorker.TransactionLockedWorker 
    Microsoft.Data.SqlClient.SqlException (0x80131904): Invalid object name 'TransactionPendings'.
    at Microsoft.Data.SqlClient.SqlCommand.<>c.<ExecuteDbDataReaderAsync>b__208_0(Task`1 result)
    at System.Threading.Tasks.ContinuationResultTaskFromResultTask`2.InnerInvoke()
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    --- End of stack trace from previous location ---
    at System.Threading.ExecutionContext.RunInternal(ExecutionContext executionContext, ContextCallback callback, Object state)
    at System.Threading.Tasks.Task.ExecuteWithThreadLocal(Task& currentTaskSlot, Thread threadPoolThread)
    --- End of stack trace from previous location ---
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Storage.RelationalCommand.ExecuteReaderAsync(RelationalCommandParameterObject parameterObject, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.InitializeReaderAsync(AsyncEnumerator enumerator, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.SqlServer.Storage.Internal.SqlServerExecutionStrategy.ExecuteAsync[TState,TResult](TState state, Func`4 operation, Func`4 verifySucceeded, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.Query.Internal.SingleQueryingEnumerable`1.AsyncEnumerator.MoveNextAsync()
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at Microsoft.EntityFrameworkCore.EntityFrameworkQueryableExtensions.ToListAsync[TSource](IQueryable`1 source, CancellationToken cancellationToken)
    at TrackingChain.TransactionMonitorCore.Services.TransactionMonitorService.GetPendingLockedInTimeoutAsync(Int32 max, Int32 timeoutSeconds) in /src/src/TransactionMonitor.Core/Services/TransactionMonitorService.cs:line 62
    at TrackingChain.TransactionMonitorCore.UseCases.TransactionLockedUseCase.ReProcessAsync(Int32 max, Int32 unlockUncompletedGeneratorAfterSeconds, Int32 unlockUncompletedWatcherAfterSeconds) in /src/src/TransactionMonitor.Core/UseCases/TransactionLockedUseCase.cs:line 41
    at TrackingChain.TransactionMonitorWorker.TransactionLockedWorker.ExecuteAsync(CancellationToken stoppingToken) in /src/src/TransactionMonitor.Worker/TransactionLockedWorker.cs:line 45
    ClientConnectionId:9ff32153-cc27-4c38-926b-260547bb274b
    Error Number:208,State:1,Class:16
    ```

    </details>

</details>

### Manual Setup

I tried without Docker, and I noticed these commands aren't updated. It is trying to get the release `v0.2.0` and not `v0.3.0`. I changed the version, but when I tried to run the `Triage.API`, I got permission denied.

<details>

```
user@localhost:~/Documents/trackingChain/TrackingChain$ docker pull mcr.microsoft.com/mssql/server:2022-latest
docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=YourStrong@Passw0rd" -p 5533:1433 --name sql1 --hostname sql1 -d mcr.microsoft.com/mssql/server:2022-latest
2022-latest: Pulling from mssql/server
Digest: sha256:d00c97dedf4f5c785bbbd5894f490d50124ff409d7751fbba2d53eb7de9965da
Status: Image is up to date for mcr.microsoft.com/mssql/server:2022-latest
mcr.microsoft.com/mssql/server:2022-latest
a8c16ba3bc937fe991f9d68014665f3d1dfc819b92ce61000644871ff824690f

user@localhost:~/Documents/trackingChain/TrackingChain/triage-api-v0.3.0-alpha-linuxselfcontained$ ./Triage.API 
[12:54:48.052  INF][]: Migration Db Worker running.  TrackingChain.TriageAPI.HostedService.MigratorDBHostedService 
[12:54:49.289  INF][]: Migration Db END.  TrackingChain.TriageAPI.HostedService.MigratorDBHostedService 
Unhandled exception. System.Net.Sockets.SocketException (13): Permission denied
   at System.Net.Sockets.Socket.DoBind(EndPoint endPointSnapshot, SocketAddress socketAddress)
   at System.Net.Sockets.Socket.Bind(EndPoint localEP)
   at Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets.SocketTransportOptions.CreateDefaultBoundListenSocket(EndPoint endpoint)
   at Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets.SocketConnectionListener.Bind()
   at Microsoft.AspNetCore.Server.Kestrel.Transport.Sockets.SocketTransportFactory.BindAsync(EndPoint endpoint, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.Infrastructure.TransportManager.BindAsync(EndPoint endPoint, ConnectionDelegate connectionDelegate, EndpointConfig endpointConfig, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServerImpl.<>c__DisplayClass30_0`1.<<StartAsync>g__OnBind|0>d.MoveNext()
--- End of stack trace from previous location ---
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.BindEndpointAsync(ListenOptions endpoint, AddressBindContext context, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.ListenOptions.BindAsync(AddressBindContext context, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.EndpointsStrategy.BindAsync(AddressBindContext context, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.Internal.AddressBinder.BindAsync(IEnumerable`1 listenOptions, AddressBindContext context, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServerImpl.BindAsync(CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Server.Kestrel.Core.KestrelServerImpl.StartAsync[TContext](IHttpApplication`1 application, CancellationToken cancellationToken)
   at Microsoft.AspNetCore.Hosting.GenericWebHostService.StartAsync(CancellationToken cancellationToken)
   at Microsoft.Extensions.Hosting.Internal.Host.StartAsync(CancellationToken cancellationToken)
   at Microsoft.Extensions.Hosting.HostingAbstractionsHostExtensions.RunAsync(IHost host, CancellationToken token)
   at Microsoft.Extensions.Hosting.HostingAbstractionsHostExtensions.RunAsync(IHost host, CancellationToken token)
   at Microsoft.Extensions.Hosting.HostingAbstractionsHostExtensions.Run(IHost host)
   at Program.<Main>$(String[] args) in /home/runner/work/TrackingChain/TrackingChain/src/Triage.API/Program.cs:line 86
Abortado
```

</details>

### Test

All tests passed.

```
Test Run Successful.
Total tests: 118
 	Passed: 118
 Total time: 5,4467 Seconds
 	1>Done Building Project "/home/user/Documents/trackingChain/TrackingChain/test/TrackingChain.UnitTest/TrackingChain.UnitTest.csproj" (VSTest target(s)).

Build succeeded.
	0 Warning(s)
	0 Error(s)

Time Elapsed 00:00:13.42
```
