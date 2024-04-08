# Evaluation

- **Status:** accepted
- **Application Document:** https://github.com/gmajor-encrypt/Grants-Program/blob/master/applications/xcm-tools-follow-up.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All evaluations by PieWol

* **Milestone Number:** 1

| Number |  Deliverable   | Accepted | Link                                                                        | Evaluation Notes                   |
|--------|---------|--------|-----------------------------------------------------------------------------|-------------------------|
| 0a.    | License                   | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE               | Apache 2.0              |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md             |                         |
| 0c.    | Testing and Testing Guide |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools#test                            |                         |
| 0d.    | Docker                    |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile            | Tests are passing.                    |
| 1.     | Xcm V3 support            |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/VersionedXcm.go#L5 | same fields as in the [rust docs](https://docs.rs/staging-xcm/latest/staging_xcm/v3/enum.Instruction.html) |
| 2.     | Bridge Tracing support    |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tracker/ethereum.go   |                         |
| 3.     | Send bridge message       |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/tx.go#L145         |                         |
| 4.     | Cli support               |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/cmd/main.go           |                         |

## General Notes
Thanks for improving the documentation.

## Testing
Local testing now also covers all tests and all are passing. Nice changes.

## Dockerfile
The dockerfile builds. The tests are passing.

<details>

        docker run -it --rm xcm-tools-test
        === RUN   Test_Cli
        --- PASS: Test_Cli (0.00s)
        PASS
        ok      github.com/gmajor-encrypt/xcm-tools/cmd 0.024s
        ?       github.com/gmajor-encrypt/xcm-tools/example     [no test files]
        === RUN   TestParseXcmMessageInstruction
        --- PASS: TestParseXcmMessageInstruction (11.26s)
        PASS
        ok      github.com/gmajor-encrypt/xcm-tools/parse       11.285s
        === RUN   Test_getEventsFromChain
        --- PASS: Test_getEventsFromChain (11.49s)
        === RUN   Test_getEvents
        --- PASS: Test_getEvents (11.70s)
        === RUN   Test_findEventByEventId
        --- PASS: Test_findEventByEventId (0.00s)
        === RUN   Test_getExtrinsics
        --- PASS: Test_getExtrinsics (11.50s)
        === RUN   Test_getExtrinsicByIndex
        --- PASS: Test_getExtrinsicByIndex (11.37s)
        === RUN   Test_Enum
        --- PASS: Test_Enum (0.00s)
        === RUN   TestHRMPWatermark
        --- PASS: TestHRMPWatermark (11.55s)
        === RUN   Test_TrackTx
        2024/04/08 15:36:01 Start track xcm message with ExtrinsicIndex: 4310901-13 Protocol: UMP OriginEndpoint: wss://moonbeam-rpc.dwellir.com DestEndpoint: wss://polkadot-rpc.dwellir.com RelayEndpoint: 
        2024/04/08 15:36:23 Find messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902
        2024/04/08 15:36:23 Find messageRaw 0x0310000400000000079e2d3d47280a1300000000079e2d3d4728010300286bee020010000d010204000101003628971d6b91628910aceeed80f922a1c539fa6bb201733d464b883acdd81b33
        2024/04/08 15:36:23 Find messageId 
        2024/04/08 15:36:23 Find nextBlock Hash 0xebaa16b5cc4c53595acb541ea46fdf9d6625f00ea335e91c53391d13cb599f36
        2024/04/08 15:36:23 Find relayChainBlockNum 17040495
        2024/04/08 15:36:34 Find relaychain blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
        2024/04/08 15:36:35 Get relaychain events with blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
        2024/04/08 15:36:36 Get relaychain events with blockHash 0xbb2fccd25e9377f00387f67f68c4ef42d2b343f2596b2077659acf66090110a2
        2024/04/08 15:36:36 Find UMP messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902, result true
        2024/04/08 15:36:36 Start track xcm message with ExtrinsicIndex: 17053966-2 Protocol: DMP OriginEndpoint: wss://polkadot-rpc.dwellir.com DestEndpoint: wss://moonbeam-rpc.dwellir.com RelayEndpoint: 
        2024/04/08 15:36:59 Find destParaId 2004
        2024/04/08 15:36:59 Find messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4
        2024/04/08 15:36:59 Find nextBlockHash,start fetch PendingAvailability 0x408b3ed597e1f031377173550dfed5f011871e6cb7fcc90f704d8d017ba5e394
        2024/04/08 15:36:59 Find nextBlockHash,start fetch PendingAvailability 0x36883a138cdfa7d5fe54c39bd20c37da07dec760c0b2d7d9c7017a9b517f280a
        2024/04/08 15:36:59 Get para block hash 0x51fdbefe8935a94153f14487b392d13d3b084a5059c0123263bc81c3ffa5ac72
        2024/04/08 15:37:11 Find DMP messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4, process true
        2024/04/08 15:37:11 Start track xcm message with ExtrinsicIndex: 4325642-7 Protocol: HRMP OriginEndpoint: wss://astar-rpc.dwellir.com DestEndpoint: wss://rpc.hydradx.cloud RelayEndpoint: wss://polkadot-rpc.dwellir.com
        2024/04/08 15:37:36 Find messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181
        2024/04/08 15:37:36 Find messageRaw 0310010400010100591f001700004c7809ca2f266c0a1300010100591f001700004c7809ca2f266c010300286bee020010000d01020400010100ceba54427482d5deaf3d4e2560d37d90c8b5ffc0210ea29591c153f1d0c90b0d
        2024/04/08 15:37:36 Get NextBlockHash 0x6af502c85ce4ffe3ab209236f1aeb6a80412380c6c60bab75165814eee58455a
        2024/04/08 15:37:36 Get RelayChainBlockNum 17053838
        2024/04/08 15:37:58 Get NextBlockHash 0x4d0cb9bad6e0a0df33d13ae766bbe81d270b98e08f084a5f4f9b6896e94025f7
        2024/04/08 15:37:58 Find nextBlockHash,start fetch PendingAvailability 0xd832025ae75194503537c9ec570e8972b249ed70fba238d6a2949e819c0586e7
        2024/04/08 15:37:58 Get para block hash 0x145889077928c1078ac2a3e0be7b7c88d1bb1547d513ec5e3773d56a4d3516ca
        2024/04/08 15:38:12 Find HRMP messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181, result Success
        --- PASS: Test_TrackTx (131.10s)
        === RUN   TestTrackBridgeMessage
        2024/04/08 15:38:12 Get ethereum message Id 0xc2e41ff7cfa5d7dff27d12965462da470c1dbb1b955da7a68e29e83f092d1d22 timestamp 1708654032 blockNum 5344483
        2024/04/08 15:38:13 Start crawl block num 2540323
        2024/04/08 15:38:14 Find bridge message has process in extrinsic index 2542078-2,event index 2542078-7 
        2024/04/08 15:38:30 Find messageHash 0x91f9e0859a42e75dd6af502c082e2ede7731a55b7250cc62f82e2093be6a8ce2
        2024/04/08 15:38:30 Find messageRaw 03140004000100000b2037c77c800213000100000b2037c77c80020016040d010204010100a10f26079edaa802001400040000010300fff9976782d46cc05630d1f6ebab18b2324d6b14000300286bee0a130000010300fff9976782d46cc05630d1f6ebab18b2324d6b14000300286bee000d0102040001030010408b64fcd163439eb015650916a43d23b95b5d2c82c1df72f95ee1a2f939e3663a5eed261c1a5918a5b20ff3700ad5e9fdb9300a2c5b207fd02a588372f7d1e170c1bedf031eb58a118dc12d9917143fc76efd7f3c
        2024/04/08 15:38:30 Get NextBlockHash 0x40c2a31cb3bcbafa89a5cd70f87e7339cbe901e086eab9d7152651547d8336f6
        2024/04/08 15:38:30 Get RelayChainBlockNum 9339562
        2024/04/08 15:38:42 Get NextBlockHash 0x6010ab32c653c7cbd7ba95de54f813aab6aa18b7bbcca9b2dd2deaf8e9c2f187
        2024/04/08 15:38:42 Find nextBlockHash,start fetch PendingAvailability 0xcfb13b2405a7e777550888442aa0220bec0af4349dd0980b5a01396d55036c74
        2024/04/08 15:38:42 Find nextBlockHash,start fetch PendingAvailability 0x3f622605891bfed0a0218c9e5a5531e7ffa3618123b3219b13c2245ab82a05fd
        2024/04/08 15:38:42 Get para block hash 0xd09f3ec7e029dc3ca5b8309a295952e8aec5a59ba178b9c01ce055e9c7f48b60
        2024/04/08 15:38:54 Find Message messageid 0x82c1df72f95ee1a2f939e3663a5eed261c1a5918a5b20ff3700ad5e9fdb9300a
        2024/04/08 15:38:54 Get etherStartBlockNum 0
        2024/04/08 15:38:54 Find bridge message have process in 5364918 0x1435866e5c320adac9fed7827934ce6c34f28bf6cc2b5fae1ab3f5512fd0db76
        --- PASS: TestTrackBridgeMessage (42.52s)
        PASS
        ok      github.com/gmajor-encrypt/xcm-tools/tracker     231.236s
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
        --- PASS: Test_Client (11.47s)
        === RUN   TestXcmTransfer
        === RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
        === RUN   TestXcmTransfer/Test_XCM_HRMP_Send
        --- PASS: TestXcmTransfer (11.32s)
        --- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (0.07s)
        --- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (0.08s)
        === RUN   TestDmpTransfer
        === RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
        --- PASS: TestDmpTransfer (11.43s)
        --- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (0.05s)
        === RUN   TestPolkadotToEthereum
        === RUN   TestPolkadotToEthereum/Test_XCM_To_Ethereum
        --- PASS: TestPolkadotToEthereum (11.21s)
        --- PASS: TestPolkadotToEthereum/Test_XCM_To_Ethereum (0.06s)
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
        --- PASS: TestXcmSend (17.33s)
        --- PASS: TestXcmSend/Test_XCM_Ump_Send (0.45s)
        --- PASS: TestXcmSend/Test_XCM_HRMP_Send (6.04s)
        === RUN   Test_XCM_Dmp_Send
        --- PASS: Test_XCM_Dmp_Send (11.89s)
        PASS
        ok      github.com/gmajor-encrypt/xcm-tools/tx  74.682s
        === RUN   Test_EthGetTransactionByHash
        --- PASS: Test_EthGetTransactionByHash (0.31s)
        === RUN   Test_EthGetTransactionReceipt
        --- PASS: Test_EthGetTransactionReceipt (0.26s)
        === RUN   Test_EthGetBlockByNum
        --- PASS: Test_EthGetBlockByNum (2.27s)
        === RUN   TestEtherscanGetLogs
        --- PASS: TestEtherscanGetLogs (0.13s)
        === RUN   Test_SubscanGetBlockByTime
        --- PASS: Test_SubscanGetBlockByTime (0.75s)
        === RUN   TestSubscanGetEvents
        --- PASS: TestSubscanGetEvents (1.40s)
        === RUN   Test_ToInt
        --- PASS: Test_ToInt (0.00s)
        === RUN   Test_HexToUint64
        --- PASS: Test_HexToUint64 (0.00s)
        === RUN   Test_ToUint
        --- PASS: Test_ToUint (0.00s)
        PASS
        ok      github.com/gmajor-encrypt/xcm-tools/util        5.131s 
</details>

