# Evaluation

- **Status:** Accepted
- **Application Document:** [w3f/Grants-Program#1917](https://github.com/w3f/Grants-Program/blob/master/applications/xcm-tools.md)
- **Milestone:** 2
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.**| License |<ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE ) | |
| **0b.** | Documentation |<ul><li>[x] </li></ul>|[Link](https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md)  | The documentations are easy to read, which explain the working of the application.|
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>| <ul> <li>[Testing guide](https://github.com/gmajor-encrypt/xcm-tools#test)</li> </ul> | |
| **0d.** | Docker |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile) | Work as expected |
| 1 | Send UMP message |<ul><li>[x] </li></ul>| </li> <li> [Source code](https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/ump.go) </li> </ul> | Work as expected|
| 2 | Send DMP message |<ul><li>[x] </li></ul>| </li> <li> [Source code](https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/dmp.go) </li> </ul> | Work as expected |
| 3 | Send HRMP message |<ul><li>[x] </li></ul>| </li> <li> [Source code](https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/hrmp.go) </li> </ul> | Work as expected |

## General Notes

Overall, this is a solid project, well documented and scripts, and all promised features work as expected.

Implemented both Teleport and ReserveTransfer for asset transfer in XCM, which is meaningful for xcm ecosystem.

## Logs

- Test hash: 23a9c6024eb229ba594734ea3dff48196995ed61

### Unit Tests && Integration Tests

<details>

<summary> ut && it </summary>

```bash
?   	github.com/gmajor-encrypt/xcm-tools/cli	[no test files]
?   	github.com/gmajor-encrypt/xcm-tools/cmd	[no test files]
?   	github.com/gmajor-encrypt/xcm-tools/example	[no test files]
?   	github.com/gmajor-encrypt/xcm-tools/tracker	[no test files]
=== RUN   Test_Dmp_func
=== RUN   Test_Dmp_func/LimitedReserveTransferAssets
=== RUN   Test_Dmp_func/ReserveTransferAssets
=== RUN   Test_Dmp_func/LimitedTeleportAssets
=== RUN   Test_Dmp_func/TeleportAssets
=== RUN   Test_Dmp_func/Send
--- PASS: Test_Dmp_func (0.00s)
    --- PASS: Test_Dmp_func/LimitedReserveTransferAssets (0.00s)
    --- PASS: Test_Dmp_func/ReserveTransferAssets (0.00s)
    --- PASS: Test_Dmp_func/LimitedTeleportAssets (0.00s)
    --- PASS: Test_Dmp_func/TeleportAssets (0.00s)
    --- PASS: Test_Dmp_func/Send (0.00s)
=== RUN   Test_HRMP_func
=== RUN   Test_HRMP_func/LimitedReserveTransferAssets
=== RUN   Test_HRMP_func/ReserveTransferAssets
=== RUN   Test_HRMP_func/LimitedTeleportAssets
=== RUN   Test_HRMP_func/TeleportAssets
=== RUN   Test_HRMP_func/Send
--- PASS: Test_HRMP_func (0.00s)
    --- PASS: Test_HRMP_func/LimitedReserveTransferAssets (0.00s)
    --- PASS: Test_HRMP_func/ReserveTransferAssets (0.00s)
    --- PASS: Test_HRMP_func/LimitedTeleportAssets (0.00s)
    --- PASS: Test_HRMP_func/TeleportAssets (0.00s)
    --- PASS: Test_HRMP_func/Send (0.00s)
=== RUN   Test_ConvertMultiLocationAccountId32
--- PASS: Test_ConvertMultiLocationAccountId32 (0.00s)
=== RUN   Test_SimplifyMultiLocationParaId
--- PASS: Test_SimplifyMultiLocationParaId (0.00s)
=== RUN   Test_SimplifyMultiLocationRelayChain
--- PASS: Test_SimplifyMultiLocationRelayChain (0.00s)
=== RUN   Test_SimplifyMultiAssets
--- PASS: Test_SimplifyMultiAssets (0.00s)
=== RUN   Test_Client
--- PASS: Test_Client (24.24s)
=== RUN   TestXcmTransfer
=== RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
=== RUN   TestXcmTransfer/Test_XCM_HRMP_Send
--- PASS: TestXcmTransfer (20.09s)
    --- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (4.97s)
    --- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (4.96s)
=== RUN   TestDmpTransfer
=== RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
--- PASS: TestDmpTransfer (16.24s)
    --- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (1.63s)
=== RUN   Test_Ump_func
=== RUN   Test_Ump_func/LimitedReserveTransferAssets
=== RUN   Test_Ump_func/ReserveTransferAssets
=== RUN   Test_Ump_func/LimitedTeleportAssets
=== RUN   Test_Ump_func/TeleportAssets
=== RUN   Test_Ump_func/Send
--- PASS: Test_Ump_func (0.00s)
    --- PASS: Test_Ump_func/LimitedReserveTransferAssets (0.00s)
    --- PASS: Test_Ump_func/ReserveTransferAssets (0.00s)
    --- PASS: Test_Ump_func/LimitedTeleportAssets (0.00s)
    --- PASS: Test_Ump_func/TeleportAssets (0.00s)
    --- PASS: Test_Ump_func/Send (0.00s)
=== RUN   TestXcmSend
=== RUN   TestXcmSend/Test_XCM_Ump_Send
=== RUN   TestXcmSend/Test_XCM_HRMP_Send
--- PASS: TestXcmSend (53.15s)
    --- PASS: TestXcmSend/Test_XCM_Ump_Send (15.79s)
    --- PASS: TestXcmSend/Test_XCM_HRMP_Send (23.96s)
=== RUN   Test_XCM_Dmp_Send
--- PASS: Test_XCM_Dmp_Send (18.06s)
PASS
ok  	github.com/gmajor-encrypt/xcm-tools/tx	131.826s
=== RUN   Test_ToInt
--- PASS: Test_ToInt (0.00s)
PASS
ok  	github.com/gmajor-encrypt/xcm-tools/util	0.002s

```

</details>
