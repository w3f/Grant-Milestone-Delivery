# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/gmajor-encrypt/Grants-Program/blob/master/applications/xcm-tools-follow-up.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All evaluations by PieWol

* **Milestone Number:** 1

| Number |  Deliverable   | Accepted | Link                                                                        | Evaluation Notes                   |
|--------|---------|--------|-----------------------------------------------------------------------------|-------------------------|
| 0a.    | License                   | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE               | Apache 2.0              |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md             |                         |
| 0c.    | Testing and Testing Guide |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools#test                            |                         |
| 0d.    | Docker                    |<ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile            | Docker file builds. Not all tests are passing. See further notes.                      |
| 1.     | Xcm V3 support            |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/VersionedXcm.go#L5 | same fields as in the [rust docs](https://docs.rs/staging-xcm/latest/staging_xcm/v3/enum.Instruction.html) |
| 2.     | Bridge Tracing support    |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tracker/ethereum.go   |                         |
| 3.     | Send bridge message       |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/tx.go#L145         |                         |
| 4.     | Cli support               |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/cmd/main.go           |                         |

## General Notes
Thanks for improving the documentation.

## Testing
Local testing now also covers all tests and all are passing. Nice changes.

## Dockerfile
The dockerfile builds. The tests are still not all passing. The output regarding failed tests are in the details below. Please fix the docker testing.

<details>
    
    root@ip:~/xcm-tools# docker run -it --rm xcm-tools-test
=== RUN   Test_Cli
--- PASS: Test_Cli (0.00s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/cmd 0.024s
?       github.com/gmajor-encrypt/xcm-tools/example     [no test files]
=== RUN   TestParseXcmMessageInstruction
--- PASS: TestParseXcmMessageInstruction (11.31s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/parse       11.333s
=== RUN   Test_getEventsFromChain
--- PASS: Test_getEventsFromChain (11.64s)
=== RUN   Test_getEvents
--- PASS: Test_getEvents (11.84s)
=== RUN   Test_findEventByEventId
--- PASS: Test_findEventByEventId (0.00s)
=== RUN   Test_getExtrinsics
--- PASS: Test_getExtrinsics (11.74s)
=== RUN   Test_getExtrinsicByIndex
--- PASS: Test_getExtrinsicByIndex (11.18s)
=== RUN   Test_Enum
--- PASS: Test_Enum (0.00s)
=== RUN   TestHRMPWatermark
--- PASS: TestHRMPWatermark (11.10s)
=== RUN   Test_TrackTx
2024/04/02 16:38:29 Start track xcm message with ExtrinsicIndex: 4310901-13 Protocol: UMP OriginEndpoint: wss://moonbeam-rpc.dwellir.com DestEndpoint: wss://polkadot-rpc.dwellir.com RelayEndpoint: 
2024/04/02 16:38:51 Find messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902
2024/04/02 16:38:51 Find messageRaw 0x0310000400000000079e2d3d47280a1300000000079e2d3d4728010300286bee020010000d010204000101003628971d6b91628910aceeed80f922a1c539fa6bb201733d464b883acdd81b33
2024/04/02 16:38:51 Find messageId 
2024/04/02 16:38:51 Find nextBlock Hash 0xebaa16b5cc4c53595acb541ea46fdf9d6625f00ea335e91c53391d13cb599f36
2024/04/02 16:38:51 Find relayChainBlockNum 17040495
2024/04/02 16:39:02 Find relaychain blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2024/04/02 16:39:04 Get relaychain events with blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2024/04/02 16:39:04 Get relaychain events with blockHash 0xbb2fccd25e9377f00387f67f68c4ef42d2b343f2596b2077659acf66090110a2
2024/04/02 16:39:04 Find UMP messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902, result true
2024/04/02 16:39:04 Start track xcm message with ExtrinsicIndex: 17053966-2 Protocol: DMP OriginEndpoint: wss://polkadot-rpc.dwellir.com DestEndpoint: wss://moonbeam-rpc.dwellir.com RelayEndpoint: 
2024/04/02 16:39:26 Find destParaId 2004
2024/04/02 16:39:26 Find messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4
2024/04/02 16:39:26 Find nextBlockHash,start fetch PendingAvailability 0x408b3ed597e1f031377173550dfed5f011871e6cb7fcc90f704d8d017ba5e394
2024/04/02 16:39:26 Find nextBlockHash,start fetch PendingAvailability 0x36883a138cdfa7d5fe54c39bd20c37da07dec760c0b2d7d9c7017a9b517f280a
2024/04/02 16:39:26 Get para block hash 0x51fdbefe8935a94153f14487b392d13d3b084a5059c0123263bc81c3ffa5ac72
2024/04/02 16:39:39 Find DMP messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4, process true
2024/04/02 16:39:39 Start track xcm message with ExtrinsicIndex: 4325642-7 Protocol: HRMP OriginEndpoint: wss://astar-rpc.dwellir.com DestEndpoint: wss://rpc.hydradx.cloud RelayEndpoint: wss://polkadot-rpc.dwellir.com
--- FAIL: Test_TrackTx (92.03s)
panic: Not find Event Lookup 0000, please check metadata info [recovered]
        panic: Not find Event Lookup 0000, please check metadata info

goroutine 69 [running]:
testing.tRunner.func1.2({0x81d9e0, 0xc0007a7240})
        /usr/local/go/src/testing/testing.go:1389 +0x24e
testing.tRunner.func1()
        /usr/local/go/src/testing/testing.go:1392 +0x39f
panic({0x81d9e0, 0xc0007a7240})
        /usr/local/go/src/runtime/panic.go:838 +0x207
github.com/itering/scale%2ego.(*EventRecord).Process(0xc000c0b6f8)
        /go/pkg/mod/github.com/itering/scale.go@v1.8.1/event.go:77 +0xaf4
github.com/itering/scale%2ego.(*EventsDecoder).Process(0xc000c0b978)
        /go/pkg/mod/github.com/itering/scale.go@v1.8.1/event.go:40 +0x12c
github.com/gmajor-encrypt/xcm-tools/tracker.getEvents({0x97f690?, 0xc0000b0000?}, 0xc000c3bab8?, {0xc00019a3c0?, 0x47d9b0?}, 0xc0002ca5b0)
        /go/app/tracker/event.go:52 +0xf2
github.com/gmajor-encrypt/xcm-tools/tracker.(*Hrmp).Track(0xc000c0bd98, {0x97f690, 0xc0000b0000})
        /go/app/tracker/hrmp.go:38 +0x17d
github.com/gmajor-encrypt/xcm-tools/tracker.TrackXcmMessage({0x8a831d, 0x9}, {0x8a6b32, 0x4}, {0x8b23be, 0x1b}, {0x8afde7, 0x17}, {0x8b427a, 0x1e})
        /go/app/tracker/tracker.go:109 +0x7ce
github.com/gmajor-encrypt/xcm-tools/tracker.Test_TrackTx(0x0?)
        /go/app/tracker/tracker_test.go:26 +0x21e
testing.tRunner(0xc000461380, 0x903818)
        /usr/local/go/src/testing/testing.go:1439 +0x102
created by testing.(*T).Run
        /usr/local/go/src/testing/testing.go:1486 +0x35f
FAIL    github.com/gmajor-encrypt/xcm-tools/tracker     149.556s
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
--- PASS: Test_Client (11.58s)
=== RUN   TestXcmTransfer
=== RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
=== RUN   TestXcmTransfer/Test_XCM_HRMP_Send
--- PASS: TestXcmTransfer (11.07s)
    --- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (0.06s)
    --- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (0.05s)
=== RUN   TestDmpTransfer
=== RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
--- PASS: TestDmpTransfer (11.28s)
    --- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (0.06s)
=== RUN   TestPolkadotToEthereum
=== RUN   TestPolkadotToEthereum/Test_XCM_To_Ethereum
--- PASS: TestPolkadotToEthereum (10.91s)
    --- PASS: TestPolkadotToEthereum/Test_XCM_To_Ethereum (0.05s)
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
--- PASS: TestXcmSend (19.49s)
    --- PASS: TestXcmSend/Test_XCM_Ump_Send (2.68s)
    --- PASS: TestXcmSend/Test_XCM_HRMP_Send (5.96s)
=== RUN   Test_XCM_Dmp_Send
--- PASS: Test_XCM_Dmp_Send (11.94s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/tx  76.285s
=== RUN   Test_EthGetTransactionByHash
--- PASS: Test_EthGetTransactionByHash (0.40s)
=== RUN   Test_EthGetTransactionReceipt
--- PASS: Test_EthGetTransactionReceipt (0.25s)
=== RUN   Test_EthGetBlockByNum
--- PASS: Test_EthGetBlockByNum (2.26s)
=== RUN   TestEtherscanGetLogs
--- PASS: TestEtherscanGetLogs (0.13s)
=== RUN   Test_SubscanGetBlockByTime
--- PASS: Test_SubscanGetBlockByTime (3.08s)
=== RUN   TestSubscanGetEvents
--- PASS: TestSubscanGetEvents (4.96s)
=== RUN   Test_ToInt
--- PASS: Test_ToInt (0.00s)
=== RUN   Test_HexToUint64
--- PASS: Test_HexToUint64 (0.00s)
=== RUN   Test_ToUint
--- PASS: Test_ToUint (0.00s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/util        11.094s
FAIL
```    
</details>

