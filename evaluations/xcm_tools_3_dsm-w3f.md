
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-tools.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE     |            |
| 0b.    | Documentation             | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md   |            |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools#test                  |            |
| 0d.    | Docker                    | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile  |            |
| 1.     | Parse xcm instructions    | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/parse.go |            |
| 2.     | Tracing transaction       | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/tree/main/tracker     |            |
| 3.     | Cli support               | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/cmd/cli.go  |            |

## Evaluation V2

### Test

I was able to install using the command `go install github.com/gmajor-encrypt/xcm-tools/cmd@latest` and with the binary built using docker and without docker.

This time, I was able to use the send command without problems. I noticed this [line](https://github.com/gmajor-encrypt/xcm-tools/blob/main/cmd/main.go#L66) is printing "xxx" for the UMP, and I think it shouldn't be printed. This don't prevent the acceptance of the milestone but would be nice to fix. 

```
user@localhost:~/Documents/xcm-tools/xcm-tools/cmd$ go run . send UMP --dest 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d --amount 10 --keyring 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a --endpoint wss://rococo-asset-hub-rpc.polkadot.io
xxx
2023/09/26 07:07:57 send UMP message success, tx hash: 0x9701df59591303e01fbfb2c75dbfbbcef23d0b89e1f57fd2503c0c4fd8746bb0
```

## Evaluation V1

### Test

All tests passed.

<details>

```
user@localhost:~/Documents/xcm-tools/xcm-tools$ docker run -it --rm xcm-tools
=== RUN   Test_Cli
--- PASS: Test_Cli (0.00s)
PASS
ok 	 github.com/gmajor-encrypt/xcm-tools/cmd    0.016s
?  	 github.com/gmajor-encrypt/xcm-tools/example    [no test files]
=== RUN   Test_getEventsFromChain
--- PASS: Test_getEventsFromChain (13.54s)
=== RUN   Test_getEvents
--- PASS: Test_getEvents (14.64s)
=== RUN   Test_findEventByEventId
--- PASS: Test_findEventByEventId (0.00s)
=== RUN   Test_getExtrinsics
--- PASS: Test_getExtrinsics (16.03s)
=== RUN   Test_getExtrinsicByIndex
--- PASS: Test_getExtrinsicByIndex (14.49s)
=== RUN   Test_Enum
--- PASS: Test_Enum (0.00s)
=== RUN   TestHRMPWatermark
--- PASS: TestHRMPWatermark (13.58s)
=== RUN   Test_TrackTx
2023/09/25 10:26:25 messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902
2023/09/25 10:26:25 nextBlockHash 0xebaa16b5cc4c53595acb541ea46fdf9d6625f00ea335e91c53391d13cb599f36
2023/09/25 10:26:25 relayChainBlockNum 17040495
2023/09/25 10:26:41 relaychain blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2023/09/25 10:26:44 get relaychain events with blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2023/09/25 10:26:46 get relaychain events with blockHash 0xbb2fccd25e9377f00387f67f68c4ef42d2b343f2596b2077659acf66090110a2
2023/09/25 10:26:46 find UMP messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902, result true
2023/09/25 10:27:19 destParaId 2004
2023/09/25 10:27:19 messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4
2023/09/25 10:27:20 nextBlockHash 0x36883a138cdfa7d5fe54c39bd20c37da07dec760c0b2d7d9c7017a9b517f280a
2023/09/25 10:27:20 get para block hash 0x51fdbefe8935a94153f14487b392d13d3b084a5059c0123263bc81c3ffa5ac72
2023/09/25 10:27:36 find DMP messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4, result true
2023/09/25 10:28:05 messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181
2023/09/25 10:28:06 nextBlockHash 0x6af502c85ce4ffe3ab209236f1aeb6a80412380c6c60bab75165814eee58455a
2023/09/25 10:28:07 relayChainBlockNum 17053838
2023/09/25 10:28:27 relaychain blockHash 0x1fd50a5d1c1e3364b68cdedf8553aa9783da6fb18f824f8e5f820653dc0aafaa
2023/09/25 10:28:33 nextBlockHash 0xd832025ae75194503537c9ec570e8972b249ed70fba238d6a2949e819c0586e7
2023/09/25 10:28:33 get para block hash 0x145889077928c1078ac2a3e0be7b7c88d1bb1547d513ec5e3773d56a4d3516ca
2023/09/25 10:28:48 find HRMP messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181, result Success
--- PASS: Test_TrackTx (169.54s)
PASS
ok 	 github.com/gmajor-encrypt/xcm-tools/tracker    241.845s
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
=== RUN   TestParseXcmMessageInstruction
--- PASS: TestParseXcmMessageInstruction (12.98s)
=== RUN   Test_ConvertMultiLocationAccountId32
--- PASS: Test_ConvertMultiLocationAccountId32 (0.00s)
=== RUN   Test_SimplifyMultiLocationParaId
--- PASS: Test_SimplifyMultiLocationParaId (0.00s)
=== RUN   Test_SimplifyMultiLocationRelayChain
--- PASS: Test_SimplifyMultiLocationRelayChain (0.00s)
=== RUN   Test_SimplifyMultiAssets
--- PASS: Test_SimplifyMultiAssets (0.00s)
=== RUN   Test_Client
--- PASS: Test_Client (24.95s)
=== RUN   TestXcmTransfer
=== RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
=== RUN   TestXcmTransfer/Test_XCM_HRMP_Send
--- PASS: TestXcmTransfer (8.35s)
	--- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (0.85s)
	--- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (0.86s)
=== RUN   TestDmpTransfer
=== RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
--- PASS: TestDmpTransfer (13.10s)
	--- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (0.84s)
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
--- PASS: TestXcmSend (62.13s)
	--- PASS: TestXcmSend/Test_XCM_Ump_Send (26.29s)
	--- PASS: TestXcmSend/Test_XCM_HRMP_Send (23.97s)
=== RUN   Test_XCM_Dmp_Send
--- PASS: Test_XCM_Dmp_Send (18.12s)
PASS
ok 	 github.com/gmajor-encrypt/xcm-tools/tx    139.657s
=== RUN   Test_ToInt
--- PASS: Test_ToInt (0.00s)
PASS
ok 	 github.com/gmajor-encrypt/xcm-tools/util    0.018s
```

</details>

I tried to install the CLI, using the command `go get -u github.com/gmajor-encrypt/xcm-tools`, but I received this: 

```
user@localhost:~/Documents/xcm-tools/xcm-tools$ go get -u github.com/gmajor-encrypt/xcm-tools  
go: github.com/gmajor-encrypt/xcm-tools: invalid github.com import path "github.com/gmajor-encrypt"
```

I was not able to install the xcm-tools, but I could use it inside the folder `cmd`. 

```
user@localhost:~/Documents/xcm-tools/xcm-tools/cmd$ go run . -h
NAME:
   Xcm tools - Xcm tools

USAGE:
   cmd [global options] command [command options] [arguments...]

COMMANDS:
   send     send xcm message
   parse    parse xcm message
   tracker  tracker xcm message transaction
   help, h  Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h  show help
```

The application was able to parse the Xcm message and track the Xcm message transaction but I had some problems with sending a Xcm message:

```
user@localhost:~/Documents/xcm-tools/xcm-tools/cmd$ go run . send UMP --dest 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d --amount 10 --keyring 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a --endpoint wss://rococo-asset-hub-rpc.polkadot.io
NAME:
   Xcm tools send - send xcm message

USAGE:
   Xcm tools send command [command options] [arguments...]

COMMANDS:
   UMP   send ump message
   HRMP  send hrmp message
   DMP   send dmp message

OPTIONS:
   --dest value  	dest address (default: 0)
   --amount value	send xcm transfer amount
   --keyring value   Set sr25519 secret key [$SK]
   --endpoint value  Set substrate endpoint, only support websocket protocol, like ws:// or wss:// [$ENDPOINT]
   --help, -h    	show help
   
2023/09/25 10:24:57 Required flags "dest, amount, keyring, endpoint" not set
exit status 1
```

Could you check the installation in the documentation and help me with the command? Can I use the CLI wih Docker?
