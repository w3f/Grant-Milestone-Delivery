# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/dao-entrance-phase-1.md
- **Milestone:** 2
- **Kusama Identity:** [ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA](https://polkascan.io/pre/kusama/account/ESxS4A7GHMLzve4Mbc9t27RpXtVTnV3LtcMTtcnD26jcUHA)
- **Previously successfully merged evaluation:** All by semuelle

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/dao-entrance/app/blob/9fa3851aa76fea26cd297bb5afecabb5557b1ce3/LICENSE) | Apache 2.0 |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [docs/install_and_run.md](https://github.com/WeteeDAO/app/blob/20cf30512ed8982f70b8b743fff90d40cad27c3f/docs/install_and_run.md) | - |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [/test](https://github.com/WeteeDAO/app/blob/b6f0f36bf4c75dd8e728c3898b76f477c1d252b0/test) | Unit tests provided on request. Run with `flutter test`. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | - | No Docker necessary. |
| 1. | DAO desktop and app | <ul><li>[x] </li></ul> | - | see [General Notes](#general-notes) |
| 2. | Tests | <ul><li>[x] </li></ul> | [install_and_run.md](https://github.com/WeteeDAO/app/blob/20cf30512ed8982f70b8b743fff90d40cad27c3f/docs/install_and_run.md#run-e2e-%E6%B5%8B%E8%AF%95) | Tests fixed on request. |


## General Notes

Frontend works. For completeness' sake, here is a list of issues found:

- No calls possible
- I got the following error message when trying to add an organization:

```sh
flutter: [Matrix] Initialization failed - HiveError: Box has already been closed.
#0      BoxBaseImpl.checkOpen (package:hive/src/box/box_base_impl.dart:76:7)
#1      BoxImpl.get (package:hive/src/box/box_impl.dart:40:5)
#2      CollectionBox.get (package:hive/src/box_collection/box_collection.dart:175:25)
<asynchronous suspension>
#3      HiveCollectionsDatabase.open (package:matrix/src/database/hive_collections_database.dart:228:41)
<asynchronous suspension>
#4      IMProvider.connect.<anonymous closure> (package:asyou_app/store/im.dart:87:9)
<asynchronous suspension>
#5      Client.init.<anonymous closure> (package:matrix/src/client.dart:1414:23)
<asynchronous suspension>
#6      Client.init (package:matrix/src/client.dart:1412:23)
<asynchronous suspension>
#7      IMProvider.connect (package:asyou_app/store/im.dart:93:5)
<asynchronous suspension>
#8      _SelectOrgPageState.gotoOrg.<anonymous closure> (package:asyou_app/pages/select_org.dart:62:11)
<asynchronous suspension>
#9      _LoadingDialogState.initState.<anonymous closure> (package:asyou_app/components/loading.dart:61:11)
<asynchronous suspension>

```

- Got this error message when logging out:

```sh
flutter: [Matrix] Logout failed - Null check operator used on a null value
#0      Api.logout (package:matrix_api_lite/src/generated/api.dart:1654:44)
#1      Client.logout (package:matrix/src/client.dart:554:19)
#2      Client.init (package:matrix/src/client.dart:1534:13)
<asynchronous suspension>
#3      IMProvider.connect (package:asyou_app/store/im.dart:93:5)
<asynchronous suspension>
#4      _SelectOrgPageState.gotoOrg.<anonymous closure> (package:asyou_app/pages/select_org.dart:62:11)
<asynchronous suspension>
#5      _LoadingDialogState.initState.<anonymous closure> (package:asyou_app/components/loading.dart:61:11)
<asynchronous suspension>
```

- Got a toast message that I couldn't read (and nothing else) when trying to import an account using a mnemonic.
- After encrypting a private chat, I couldn't decrypt it on the receiving end. Also, after logging out and in again, the message I wrote couldn't be decrypted anymore.
