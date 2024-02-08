# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Hyperdot.md
- **Milestone:** 1
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License                   | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Infra3-Network/hyperdot-node/blob/ef7ee82d333da7377eb0bb1740b240104a62bee1/LICENSE) | Apache 2.0                                                   |
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-node/blob/ef7ee82d333da7377eb0bb1740b240104a62bee1/README.md), [README.zh-cn](https://github.com/Infra3-Network/hyperdot-node/blob/ef7ee82d333da7377eb0bb1740b240104a62bee1/README.zh-cn.md) | Inline documentation improved on request. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-node/tree/d3e7ac7d3d7fa29bf774f24847041d91556229d9#testing) | Tested using provided gcloud credentials. Inline docs incomplete. |
| **0d.** | Docker                    | <ul><li>[x] </li></ul> | [README](https://github.com/Infra3-Network/hyperdot-node/tree/d3e7ac7d3d7fa29bf774f24847041d91556229d9#docker-installation-guide) | — |
| **0e.** | Article                   | <ul><li>[x] </li></ul> | [link](https://medium.com/@jackson.libc.rs/the-data-analysis-powerhouse-for-the-polkadot-ecosystem-hyperdot-has-arrived-c44c16cc3539) | Good overview and walkthrough. |
|  **1.** | SQL Query API             | <ul><li>[x] </li></ul> | [apis/service/query](https://github.com/Infra3-Network/hyperdot-node/tree/d3e7ac7d3d7fa29bf774f24847041d91556229d9/internal/apis/service/query) | — |
|  **2.** | Dashboard Editor          | <ul><li>[x] </li></ul> | [apis/service/dashboard](https://github.com/Infra3-Network/hyperdot-node/tree/d3e7ac7d3d7fa29bf774f24847041d91556229d9/internal/apis/service/dashboard) | — |
|  **3.** | Discovery                 | <ul><li>[x] </li></ul> | [apis/service/query](https://github.com/Infra3-Network/hyperdot-node/blob/d3e7ac7d3d7fa29bf774f24847041d91556229d9/internal/apis/service/query/query.go) | — |


## General Notes

- —

### `make tests` output

```sh
> make tests
Makefile:21: warning: overriding recipe for target 'build/docker'
Makefile:12: warning: ignoring old recipe for target 'build/docker'
go test -v ./tests/ --count=1
2023/11/28 11:54:15 initDB
2023/11/28 11:54:15 initDB: [{"name":"Bigquery","datasets":{"Bigquery":{"id":"raw","title":"Raw","description":"Raw blockchain crypto data"}}}]
2023/11/28 11:54:21 SetBigQueryChainData: &{0xc00131c3c0}
[GIN-debug] [WARNING] Creating an Engine instance with the Logger and Recovery middleware already attached.

[GIN-debug] [WARNING] Running in "debug" mode. Switch to "release" mode in production.
 - using env:	export GIN_MODE=release
 - using code:	gin.SetMode(gin.ReleaseMode)

[GIN-debug] GET    /apis/v1/system/engines   --> infra-3.xyz/hyperdot-node/internal/apis/service/system.(*Service).RouteTables.(*Service).ListEnginesHandler.func1 (4 handlers)
[GIN-debug] GET    /apis/v1/system/engines/:engineId --> infra-3.xyz/hyperdot-node/internal/apis/service/system.(*Service).RouteTables.(*Service).GetQueryEngineDatasetHandle.func2 (4 handlers)
[GIN-debug] POST   /apis/v1/query/run        --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).RunHandler.func1 (4 handlers)
[GIN-debug] GET    /apis/v1/query/:id        --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).GetQueryHandler.func2 (4 handlers)
[GIN-debug] GET    /apis/v1/query            --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).ListQueryHandler.func3 (4 handlers)
[GIN-debug] POST   /apis/v1/query            --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).CreateQueryHandler.func4 (4 handlers)
[GIN-debug] PUT    /apis/v1/query            --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).UpdateQueryHandler.func5 (4 handlers)
[GIN-debug] DELETE /apis/v1/query/:id        --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).DeleteQueryHandler.func6 (4 handlers)
[GIN-debug] GET    /apis/v1/query/favorite   --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).ListFavoriteQueryHandler.func7 (4 handlers)
[GIN-debug] GET    /apis/v1/query/browse     --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).ListBrowseQueryHandler.func8 (4 handlers)
[GIN-debug] GET    /apis/v1/query/charts     --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).ListCurrentUserQueryChartHandler.func9 (4 handlers)
[GIN-debug] GET    /apis/v1/query/charts/user/:userId --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).ListUserQueryChartHandler.func10 (4 handlers)
[GIN-debug] GET    /apis/v1/query/chart/:id  --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).GetCurrentUserQueryChartHandler.func11 (4 handlers)
[GIN-debug] GET    /apis/v1/query/chart/:id/user/:userId --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).GetUserQueryChartHandler.func12 (4 handlers)
[GIN-debug] DELETE /apis/v1/query/chart/:id/ --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).DeleteQueryChartHandler.func13 (4 handlers)
[GIN-debug] PUT    /apis/v1/query/favorite   --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).QueryFavoriteHandler.func14 (4 handlers)
[GIN-debug] PUT    /apis/v1/query/unfavorite --> infra-3.xyz/hyperdot-node/internal/apis/service/query.(*Service).RouteTables.(*Service).QueryUnfavoriteHandler.func15 (4 handlers)
[GIN-debug] GET    /apis/v1/dashboard/:id    --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).GetDashboardHandler.func1 (4 handlers)
[GIN-debug] GET    /apis/v1/dashboard        --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).ListDashboardHandler.func2 (4 handlers)
[GIN-debug] POST   /apis/v1/dashboard        --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).CreateDashboardHandler.func3 (4 handlers)
[GIN-debug] PUT    /apis/v1/dashboard        --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).UpdateDashboardHandler.func4 (4 handlers)
[GIN-debug] DELETE /apis/v1/dashboard/:id    --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).DeleteDashboardHandler.func5 (4 handlers)
[GIN-debug] GET    /apis/v1/dashboard/favorite --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).ListFavoriteDashboardHandler.func6 (4 handlers)
[GIN-debug] GET    /apis/v1/dashboard/browse --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).ListBrowseUserDashboardHandler.func7 (4 handlers)
[GIN-debug] GET    /apis/v1/dashboard/tag/populars --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).ListPopularDashboardTags.func8 (4 handlers)
[GIN-debug] PUT    /apis/v1/dashboard/favorite --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).DashboardFavoriteHandler.func9 (4 handlers)
[GIN-debug] PUT    /apis/v1/dashboard/unfavorite --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).DashboardUnfavoriteHandler.func10 (4 handlers)
[GIN-debug] DELETE /apis/v1/dashboard/panel/:panelId --> infra-3.xyz/hyperdot-node/internal/apis/service/dashboard.(*Service).RouteTables.(*Service).RemoveDashboardPanelHandler.func11 (4 handlers)
[GIN-debug] GET    /apis/v1/user             --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).GetCurrentUserHandler.func1 (4 handlers)
[GIN-debug] GET    /apis/v1/user/:id         --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).GetUserHandler.func2 (4 handlers)
[GIN-debug] PUT    /apis/v1/user             --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).UpdateUserHandler.func3 (4 handlers)
[GIN-debug] PUT    /apis/v1/user/email       --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).UpdateEmailHandler.func4 (4 handlers)
[GIN-debug] PUT    /apis/v1/user/password    --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).UpdatePasswordHandler.func5 (4 handlers)
[GIN-debug] POST   /apis/v1/user/avatar/upload --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).UploadAvatarHandler.func6 (4 handlers)
[GIN-debug] GET    /apis/v1/user/avatar      --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).GetAvatarHandler.func7 (4 handlers)
[GIN-debug] POST   /apis/v1/user/auth/createAccount --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).CreateAccountHandler.func8 (4 handlers)
[GIN-debug] POST   /apis/v1/user/auth/login  --> infra-3.xyz/hyperdot-node/internal/apis/service/user.(*Service).RouteTables.(*Service).LoginHandle.func9 (4 handlers)
[GIN-debug] GET    /apis/v1/file             --> infra-3.xyz/hyperdot-node/internal/apis/service/file.(*Service).RouteTables.(*Service).GetFileHandler.func1 (4 handlers)
[GIN-debug] GET    /apis/v1/swager/*any      --> github.com/swaggo/gin-swagger.CustomWrapHandler.func1 (4 handlers)
=== RUN   TestDashboardCreate
[GIN] 2023/11/28 - 11:54:21 | 200 |     1.37953ms |                 | POST     "/apis/v1/dashboard"
--- PASS: TestDashboardCreate (0.07s)
=== RUN   TestQueryRun
2023/11/28 11:54:22 Start BuildBigQueryEngine Job
[GIN] 2023/11/28 - 11:54:24 | 200 |  2.060044546s |                 | POST     "/apis/v1/query/run"
--- PASS: TestQueryRun (2.12s)
=== RUN   TestCRUDQuery
[GIN] 2023/11/28 - 11:54:24 | 200 |    9.403502ms |                 | POST     "/apis/v1/query"
[GIN] 2023/11/28 - 11:54:24 | 200 |    1.303269ms |                 | GET      "/apis/v1/query/3"
[GIN] 2023/11/28 - 11:54:24 | 200 |   16.824092ms |                 | PUT      "/apis/v1/query"
[GIN] 2023/11/28 - 11:54:24 | 200 |     906.584µs |                 | GET      "/apis/v1/query/3"
[GIN] 2023/11/28 - 11:54:24 | 200 |    9.084341ms |                 | DELETE   "/apis/v1/query/3"

2023/11/28 11:54:24 /home/sebastian/work/w3f/code/grants/deliverables/hyperdot/hyperdot-node/internal/apis/service/query/query.go:248 record not found
[0.460ms] [rows:0] SELECT * FROM "hyperdot_queries" WHERE "hyperdot_queries"."id" = '3' ORDER BY "hyperdot_queries"."id" LIMIT 1
[GIN] 2023/11/28 - 11:54:24 | 404 |     540.973µs |                 | GET      "/apis/v1/query/3"
--- PASS: TestCRUDQuery (0.40s)
=== RUN   TestUserCreateAccount
[GIN] 2023/11/28 - 11:54:24 | 400 |     832.505µs |                 | POST     "/apis/v1/user/auth/createAccount"
--- PASS: TestUserCreateAccount (0.06s)
=== RUN   TestUserLogin
[GIN] 2023/11/28 - 11:54:24 | 200 |   58.788743ms |                 | POST     "/apis/v1/user/auth/login"
--- PASS: TestUserLogin (0.12s)
=== RUN   TestUserGetCurrent
[GIN] 2023/11/28 - 11:54:24 | 200 |    1.156744ms |                 | GET      "/apis/v1/user"
--- PASS: TestUserGetCurrent (0.06s)
=== RUN   TestUserGet
[GIN] 2023/11/28 - 11:54:24 | 200 |     601.101µs |                 | GET      "/apis/v1/user/1"
--- PASS: TestUserGet (0.07s)
=== RUN   TestUserUpdate
[GIN] 2023/11/28 - 11:54:24 | 200 |    1.923897ms |                 | PUT      "/apis/v1/user"
--- PASS: TestUserUpdate (0.06s)
PASS
ok  	infra-3.xyz/hyperdot-node/tests	9.225s
```