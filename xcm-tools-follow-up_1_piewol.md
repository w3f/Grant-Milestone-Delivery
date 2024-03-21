# Evaluation

- **Status:** in progress
- **Application Document:** https://github.com/gmajor-encrypt/Grants-Program/blob/master/applications/xcm-tools-follow-up.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All evaluations by PieWol

* **Milestone Number:** 1

| Number |  Deliverable   | Accepted | Link                                                                        | Evaluation Notes                   |
|--------|---------|--------|-----------------------------------------------------------------------------|-------------------------|
| 0a.    | License                   | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE               | Apache 2.0              |
| 0b.    | Documentation             | <ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md             |                         |
| 0c.    | Testing and Testing Guide |<ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools#test                            |  See additional notes.                       |
| 0d.    | Docker                    |<ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile            | Docker file builds. Not all tests are passing. See further notes.                      |
| 1.     | Xcm V3 support            |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/VersionedXcm.go#L5 | same fields as in the [rust docs](https://docs.rs/staging-xcm/latest/staging_xcm/v3/enum.Instruction.html) |
| 2.     | Bridge Tracing support    |<ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tracker/ethereum.go   |                         |
| 3.     | Send bridge message       |<ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/tx.go#L145         |                         |
| 4.     | Cli support               |<ul><li>[] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/cmd/main.go           |                         |

## Readme
In the table of the readme ``Describe`` should be changed to ``Description``-
## Testing
It seems like the testing is not consistent between trying to run tests via the given command natively and the testing inside the dockerfile. The dockerfile seems to run a lot more tests. Why is there such a difference? The testing guide section within the readme could use some additional description and explaining. Simply listing commands works for experienced developers, still very general information e.g. in which directory to run the commands would be helpful.

## Dockerfile
The dockerfile builds. The tests are not all passing. The output regarding failed tests are in the details below.

<details>
    
    === RUN   Test_getEventsFromChain
    --- PASS: Test_getEventsFromChain (11.62s)
    === RUN   Test_getEvents
    --- PASS: Test_getEvents (11.33s)
    === RUN   Test_findEventByEventId
    --- PASS: Test_findEventByEventId (0.00s)
    === RUN   Test_getExtrinsics
    --- PASS: Test_getExtrinsics (11.34s)
    === RUN   Test_getExtrinsicByIndex
    --- PASS: Test_getExtrinsicByIndex (11.35s)
    === RUN   Test_Enum
    --- PASS: Test_Enum (0.00s)
    === RUN   TestHRMPWatermark
    --- PASS: TestHRMPWatermark (11.33s)
    === RUN   Test_TrackTx
    2024/03/21 00:07:45 Start track xcm message with ExtrinsicIndex: 4310901-13 Protocol: UMP OriginEndpoint: wss://moonbeam-rpc.dwellir.com DestEndpoint: wss://polkadot-rpc.dwellir.com RelayEndpoint: 
    2024/03/21 00:08:08 Find messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902
    2024/03/21 00:08:08 Find messageRaw 0x0310000400000000079e2d3d47280a1300000000079e2d3d4728010300286bee020010000d010204000101003628971d6b91628910aceeed80f922a1c539fa6bb201733d464b883acdd81b33
    2024/03/21 00:08:08 Find messageId 
    2024/03/21 00:08:08 Find nextBlock Hash 0xebaa16b5cc4c53595acb541ea46fdf9d6625f00ea335e91c53391d13cb599f36
    2024/03/21 00:08:08 Find relayChainBlockNum 17040495
    2024/03/21 00:08:19 Find relaychain blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
    2024/03/21 00:08:20 Get relaychain events with blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
    2024/03/21 00:08:20 Get relaychain events with blockHash 0xbb2fccd25e9377f00387f67f68c4ef42d2b343f2596b2077659acf66090110a2
    2024/03/21 00:08:20 Find UMP messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902, result true
    2024/03/21 00:08:20 Start track xcm message with ExtrinsicIndex: 17053966-2 Protocol: DMP OriginEndpoint: wss://polkadot-rpc.dwellir.com DestEndpoint: wss://moonbeam-rpc.dwellir.com RelayEndpoint: 
    2024/03/21 00:08:42 Find destParaId 2004
    2024/03/21 00:08:42 Find messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4
    2024/03/21 00:08:42 Find nextBlockHash,start fetch PendingAvailability 0x408b3ed597e1f031377173550dfed5f011871e6cb7fcc90f704d8d017ba5e394
    2024/03/21 00:08:43 Find nextBlockHash,start fetch PendingAvailability 0x36883a138cdfa7d5fe54c39bd20c37da07dec760c0b2d7d9c7017a9b517f280a
    2024/03/21 00:08:43 Get para block hash 0x51fdbefe8935a94153f14487b392d13d3b084a5059c0123263bc81c3ffa5ac72
    2024/03/21 00:08:55 Find DMP messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4, process true
    2024/03/21 00:08:55 Start track xcm message with ExtrinsicIndex: 4325642-7 Protocol: HRMP OriginEndpoint: wss://astar-rpc.dwellir.com DestEndpoint: wss://rpc.hydradx.cloud RelayEndpoint: wss://polkadot-rpc.dwellir.com
    --- FAIL: Test_TrackTx (91.64s)
    panic: Not find Event Lookup 0000, please check metadata info [recovered]
            panic: Not find Event Lookup 0000, please check metadata info```
    
```
    goroutine 43 [running]:
    testing.tRunner.func1.2({0x81d9e0, 0xc00024bd90})
            /usr/local/go/src/testing/testing.go:1389 +0x24e
    testing.tRunner.func1()
            /usr/local/go/src/testing/testing.go:1392 +0x39f
    panic({0x81d9e0, 0xc00024bd90})
            /usr/local/go/src/runtime/panic.go:838 +0x207
    github.com/itering/scale%2ego.(*EventRecord).Process(0xc0006696f8)
            /go/pkg/mod/github.com/itering/scale.go@v1.8.1/event.go:77 +0xaf4
    github.com/itering/scale%2ego.(*EventsDecoder).Process(0xc000669978)
            /go/pkg/mod/github.com/itering/scale.go@v1.8.1/event.go:40 +0x12c
    github.com/gmajor-encrypt/xcm-tools/tracker.getEvents({0x97f690?, 0xc0000b0000?}, 0xc00098dab8?, {0xc000334000?, 0x47d9b0?}, 0xc000452000)
            /go/app/tracker/event.go:52 +0xf2
    github.com/gmajor-encrypt/xcm-tools/tracker.(*Hrmp).Track(0xc000669d98, {0x97f690, 0xc0000b0000})
            /go/app/tracker/hrmp.go:38 +0x17d
    github.com/gmajor-encrypt/xcm-tools/tracker.TrackXcmMessage({0x8a831d, 0x9}, {0x8a6b32, 0x4}, {0x8b23be, 0x1b}, {0x8afde7, 0x17}, {0x8b427a, 0x1e})
            /go/app/tracker/tracker.go:109 +0x7ce
    github.com/gmajor-encrypt/xcm-tools/tracker.Test_TrackTx(0x1?)
            /go/app/tracker/tracker_test.go:26 +0x21e
    testing.tRunner(0xc000459860, 0x903818)
            /usr/local/go/src/testing/testing.go:1439 +0x102
    created by testing.(*T).Run
            /usr/local/go/src/testing/testing.go:1486 +0x35f
    FAIL    github.com/gmajor-encrypt/xcm-tools/tracker     148.632s
```    
</details>

## XCM v3 support
why is the implementation of the [XCM v3 struct](https://github.com/gmajor-encrypt/xcm-tools/blob/61ee07eb4833a15062193033331321a80685f53f/tx/VersionedXcm.go#L78) not as strictly typed as the [rust implementation](https://docs.rs/staging-xcm/latest/staging_xcm/v3/enum.Instruction.html)?

## error messages
``"This Extrinsic has success send with hash %s"`` should probably be ``"This Extrinsic was successfully sent with hash %s",``


