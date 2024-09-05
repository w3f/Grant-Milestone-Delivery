# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-tools-follow-up-2.md
- **Milestone:** 1

| Number |  Deliverable   | Accepted | Link                                                                        | Evaluation Notes                   |
|--------|---------|--------|-----------------------------------------------------------------------------|-------------------------|
| 0a.    | License                   | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE               | Apache 2.0              |
| 0b.    | Documentation             | <ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md             |                         |
| 0c.    | Testing and Testing Guide |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools#test                            | Unit tests all pass.                        |
| 0d.    | Docker                    |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile            | Docker tests are passing.                    |
| 1.     | Polkadot Kusama Message Send            |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/tx.go#L167 | Good |
| 2.     | Message Tracking    |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tracker/s2s.go   | Good                        |
| 3.     | Ethereum Bridge update       |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/tracker/ethereum.go#L53-L55         | Good                        |
| 4.     | Cli support               |<ul><li>[x] </li></ul> | https://github.com/gmajor-encrypt/xcm-tools/blob/main/cmd/main.go           | Good                        |

# General Notes

Thanks for the nice work as usual. Everything works as expected and the CLI tool is easy to use.

~~The CLI commands all work and I am able to run the examples, but the success message isn't matching the send type in some instances.~~

EDIT: Issue is resolved and success messages are all correct now:

```go
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ # UMP
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ go run . send UMP --dest 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d --amount 10 --keyring 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a --endpoint wss://rococo-asset-hub-rpc.polkadot.io

2024/09/05 22:08:22 send UMP message success, tx hash: 0xb29b244f0de3dc8e34cff6174bcd29dfe78785abfe0dd24d2c4beff404dbdc09
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ # DMP
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ go run . send DMP --dest 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d --amount 10 --keyring 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a --endpoint wss://rococo-rpc.polkadot.io --paraId 1000
2024/09/05 22:08:33 send DMP message success, tx hash: 0x374db4e34f2ce1f3fe6545e78b76827356f7d99951f7bace31a86160a9214671
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ # HRMP
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ go run . send HRMP --dest 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d --amount 10 --keyring 0xe5be9a5092b81bca64be81d212e7f2f9eba183bb7a90954f7b76361f6edb5c0a --endpoint wss://rococo-asset-hub-rpc.polkadot.io --paraId 2087
2024/09/05 22:08:45 send HRMP message success, tx hash: 0xfa8a598eb99a339132d83d61b545c74e68df08d986593da5abb6fd4fc6c8a14c
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ # Send bridge message(polkadot to ethereum)
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ go run . send EthBridge --dest 0x6EB228b7ab726b8B44892e8e273ACF3dcC9C0492 --amount 10  --keyring 0xc0417c253312107d808921fb1dd3b740b64e99794dca74bcc550179f7c42a255 --endpoint wss://rococo-asset-hub-rpc.polkadot.io --contract 0xfff9976782d46cc05630d1f6ebab18b2324d6b14 --chainId 11155111
2024/09/05 22:08:56 send EthBridge message success, tx hash: 0x5d02ea5a6dd897675133028f9927d723016ee871e80fdca8e3f15efb0a14b322
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ # Send S2S message(polkadot to kusama)
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ go run . send S2SBridge --paraId 1000 --destChain westend --dest 0xd43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d --amount 10 --keyring 0xc0417c253312107d808921fb1dd3b740b64e99794dca74bcc550179f7c42a255 --endpoint wss://rococo-asset-hub-rpc.polkadot.io
2024/09/05 22:09:07 send S2SBridge message success, tx hash: 0x4df506aa3f85208855fceb910e83758b6e62d450457c96b703d1d245bc95ef8d
```

Help screen works:

```go
ubuntu@ip-172-31-22-192:~/xcm-tools/cmd$ go run . -h
NAME:
   Xcm tools - Xcm tools

USAGE:
   cmd [global options] command [command options] [arguments...]

COMMANDS:
   send              send xcm message
   parse             parse xcm message
   tracker           tracker xcm message transaction
   trackerEthBridge  tracker snowBridge message transaction
   trackerS2SBridge  tracker polkadot bridge message transaction
   help, h           Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h  show help
```
Go build works:

```go
ubuntu@ip-172-31-28-63:~$ go install github.com/gmajor-encrypt/xcm-tools/cmd@latest 
go: downloading github.com/gmajor-encrypt/xcm-tools v0.1.0
go: downloading github.com/itering/scale.go v1.7.2
go: downloading github.com/shopspring/decimal v1.3.1
go: downloading github.com/urfave/cli v1.22.14
go: downloading github.com/itering/substrate-api-rpc v0.6.1
go: downloading github.com/cpuguy83/go-md2man/v2 v2.0.2
go: downloading golang.org/x/crypto v0.12.0
go: downloading github.com/huandu/xstrings v1.4.0
go: downloading github.com/gorilla/websocket v1.4.2
go: downloading github.com/jpillora/backoff v1.0.0
go: downloading github.com/ChainSafe/go-schnorrkel v1.0.0
go: downloading github.com/russross/blackfriday/v2 v2.1.0
go: downloading golang.org/x/sys v0.11.0
go: downloading github.com/pierrec/xxHash v0.1.5
go: downloading github.com/cosmos/go-bip39 v0.0.0-20180819234021-555e2067c45d
go: downloading github.com/gtank/merlin v0.1.1-0.20191105220539-8318aed1a79f
go: downloading github.com/gtank/ristretto255 v0.1.2
go: downloading github.com/mimoo/StrobeGo v0.0.0-20181016162300-f8f6d4d2b643
```
Docker build works:

<details>
  <summary>Output</summary>

```go
ubuntu@ip-172-31-22-192:~/xcm-tools$ docker build -f Dockerfile-build -t xcm-tools .
[+] Building 33.3s (10/10) FINISHED                                                                                                       docker:default
 => [internal] load build definition from Dockerfile-build                                                                                          0.0s
 => => transferring dockerfile: 174B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/golang:1.21                                                                                      1.2s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [1/5] FROM docker.io/library/golang:1.21@sha256:4746d26432a9117a5f58e95cb9f954ddf0de128e9d5816886514199316e4a2fb                               12.5s
 => => resolve docker.io/library/golang:1.21@sha256:4746d26432a9117a5f58e95cb9f954ddf0de128e9d5816886514199316e4a2fb                                0.0s
 => => sha256:246ea1ed9cdb1164bb5cb7e1f45d7914b98c6d9418c8e1cc443105e820bbd9d1 2.82kB / 2.82kB                                                      0.0s
 => => sha256:4746d26432a9117a5f58e95cb9f954ddf0de128e9d5816886514199316e4a2fb 9.75kB / 9.75kB                                                      0.0s
 => => sha256:e6ba96dde4af9f4e06caba475fa65e94e4c54fe4aa3e9f4f504c02178eb8934e 2.32kB / 2.32kB                                                      0.0s
 => => sha256:6ed93aa58a52c9abc1ee472f1ac74b73d3adcccc2c30744498fd5f14f3f5d22c 64.14MB / 64.14MB                                                    2.5s
 => => sha256:903681d87777d28dc56866a07a2774c3fd5bf65fd734b24c9d0ecd9a13c9f636 49.55MB / 49.55MB                                                    1.3s
 => => sha256:3cbbe86a28c2f6b3c3e0e8c6dcfba369e1ea656cf8daf69be789e0fe2105982b 24.05MB / 24.05MB                                                    0.8s
 => => sha256:1f46bd02dde39f0741d70614fc607bf03c1a0cd60d52e7dd06c44f8fb9358709 92.23MB / 92.23MB                                                    2.6s
 => => sha256:54bf7053e2d96c2c7f4637ad7580bd64345b3c9fabb163e1fdb8894aea8a9af0 67.01MB / 67.01MB                                                    3.1s
 => => extracting sha256:903681d87777d28dc56866a07a2774c3fd5bf65fd734b24c9d0ecd9a13c9f636                                                           2.1s
 => => sha256:532d43a0bc41875119c835fd75616e87d5df2a3714ddea3a0b5a68c7c5982649 126B / 126B                                                          2.8s
 => => sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1 32B / 32B                                                            2.8s
 => => extracting sha256:3cbbe86a28c2f6b3c3e0e8c6dcfba369e1ea656cf8daf69be789e0fe2105982b                                                           0.5s
 => => extracting sha256:6ed93aa58a52c9abc1ee472f1ac74b73d3adcccc2c30744498fd5f14f3f5d22c                                                           2.0s
 => => extracting sha256:1f46bd02dde39f0741d70614fc607bf03c1a0cd60d52e7dd06c44f8fb9358709                                                           2.0s
 => => extracting sha256:54bf7053e2d96c2c7f4637ad7580bd64345b3c9fabb163e1fdb8894aea8a9af0                                                           3.6s
 => => extracting sha256:532d43a0bc41875119c835fd75616e87d5df2a3714ddea3a0b5a68c7c5982649                                                           0.0s
 => => extracting sha256:4f4fb700ef54461cfa02571ae0db9a0dc1e0cdb5577484a6d75e68dc38e8acc1                                                           0.0s
 => [internal] load build context                                                                                                                   0.1s
 => => transferring context: 401.68kB                                                                                                               0.0s
 => [2/5] WORKDIR app                                                                                                                               6.1s
 => [3/5] COPY . .                                                                                                                                  0.1s
 => [4/5] RUN go mod download                                                                                                                       1.1s
 => [5/5] RUN cd cmd && go build -o xcm-tools .                                                                                                    11.5s
 => exporting to image                                                                                                                              0.7s
 => => exporting layers                                                                                                                             0.6s
 => => writing image sha256:9a9b41326e4e0b5ffc4a9b065e23bacbb1848fc35e29a8c73dfc72f6aac66979                                                        0.0s
 => => naming to docker.io/library/xcm-tools                                                                                                        0.0s

 1 warning found (use docker --debug to expand):
 - WorkdirRelativePath: Relative workdir "app" can have unexpected results if the base image changes (line 3)
ubuntu@ip-172-31-22-192:~/xcm-tools$ docker run -it xcm-tools -h
NAME:
   Xcm tools - Xcm tools

USAGE:
   xcm-tools [global options] command [command options] [arguments...]

COMMANDS:
   send              send xcm message
   parse             parse xcm message
   tracker           tracker xcm message transaction
   trackerEthBridge  tracker snowBridge message transaction
   trackerS2SBridge  tracker polkadot bridge message transaction
   help, h           Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --help, -h  show help
ubuntu@ip-172-31-22-192:~/xcm-tools$ 
```
</details>

## Testing

Unit tests all pass:

<details>
  <summary>Output</summary>

```go
ubuntu@ip-172-31-22-192:~/xcm-tools$ go test -v ./...
go: downloading github.com/itering/scale.go v1.9.4
go: downloading github.com/itering/substrate-api-rpc v0.7.2
go: downloading github.com/stretchr/testify v1.8.4
go: downloading github.com/shopspring/decimal v1.4.0
go: downloading golang.org/x/crypto v0.26.0
go: downloading github.com/huandu/xstrings v1.5.0
go: downloading github.com/davecgh/go-spew v1.1.1
go: downloading github.com/pmezard/go-difflib v1.0.0
go: downloading gopkg.in/yaml.v3 v3.0.1
go: downloading golang.org/x/sys v0.24.0
=== RUN   Test_Cli
--- PASS: Test_Cli (0.00s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/cmd 0.018s
?       github.com/gmajor-encrypt/xcm-tools/example     [no test files]
=== RUN   TestParseXcmMessageInstruction
--- PASS: TestParseXcmMessageInstruction (11.03s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/parse       11.051s
=== RUN   Test_getEventsFromChain
--- PASS: Test_getEventsFromChain (11.05s)
=== RUN   Test_getEvents
--- PASS: Test_getEvents (10.85s)
=== RUN   Test_findEventByEventId
--- PASS: Test_findEventByEventId (0.00s)
=== RUN   Test_getExtrinsics
--- PASS: Test_getExtrinsics (10.88s)
=== RUN   Test_getExtrinsicByIndex
--- PASS: Test_getExtrinsicByIndex (10.81s)
=== RUN   Test_Enum
--- PASS: Test_Enum (0.00s)
=== RUN   TestHRMPWatermark
--- PASS: TestHRMPWatermark (10.83s)
=== RUN   TestParasInfo
--- PASS: TestParasInfo (10.54s)
=== RUN   Test_TrackTx
2024/09/04 20:38:13 Start track xcm message with ExtrinsicIndex: 4310901-13 Protocol: UMP OriginEndpoint: wss://moonbeam-rpc.dwellir.com DestEndpoint: wss://polkadot-rpc.dwellir.com RelayEndpoint: 
2024/09/04 20:38:28 Find messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902
2024/09/04 20:38:28 Find messageRaw 0x0310000400000000079e2d3d47280a1300000000079e2d3d4728010300286bee020010000d010204000101003628971d6b91628910aceeed80f922a1c539fa6bb201733d464b883acdd81b33
2024/09/04 20:38:28 Find messageId 
2024/09/04 20:38:28 Find nextBlock Hash 0xebaa16b5cc4c53595acb541ea46fdf9d6625f00ea335e91c53391d13cb599f36
2024/09/04 20:38:28 Find relayChainBlockNum 17040495
2024/09/04 20:38:34 Find relaychain blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2024/09/04 20:38:41 Get relaychain events with blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2024/09/04 20:38:41 Get relaychain events with blockHash 0xbb2fccd25e9377f00387f67f68c4ef42d2b343f2596b2077659acf66090110a2
2024/09/04 20:38:41 Find UMP messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902, result true
2024/09/04 20:38:41 Start track xcm message with ExtrinsicIndex: 17053966-2 Protocol: DMP OriginEndpoint: wss://polkadot-rpc.dwellir.com DestEndpoint: wss://moonbeam-rpc.dwellir.com RelayEndpoint: 
2024/09/04 20:38:57 Find destParaId 2004
2024/09/04 20:38:57 Find messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4
2024/09/04 20:38:57 Find 17053967 nextBlockHash,start fetch PendingAvailability 0x408b3ed597e1f031377173550dfed5f011871e6cb7fcc90f704d8d017ba5e394 
2024/09/04 20:38:57 Find 17053968 nextBlockHash,start fetch PendingAvailability 0x36883a138cdfa7d5fe54c39bd20c37da07dec760c0b2d7d9c7017a9b517f280a 
2024/09/04 20:38:57 Get para block hash 0x51fdbefe8935a94153f14487b392d13d3b084a5059c0123263bc81c3ffa5ac72
2024/09/04 20:39:08 Find DMP messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4, process true
2024/09/04 20:39:08 Start track xcm message with ExtrinsicIndex: 4325642-7 Protocol: HRMP OriginEndpoint: wss://astar-rpc.dwellir.com DestEndpoint: wss://rpc.hydradx.cloud RelayEndpoint: wss://polkadot-rpc.dwellir.com
2024/09/04 20:39:27 Find messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181
2024/09/04 20:39:27 Find messageRaw 0310010400010100591f001700004c7809ca2f266c0a1300010100591f001700004c7809ca2f266c010300286bee020010000d01020400010100ceba54427482d5deaf3d4e2560d37d90c8b5ffc0210ea29591c153f1d0c90b0d
2024/09/04 20:39:27 Get NextBlockHash 0x6af502c85ce4ffe3ab209236f1aeb6a80412380c6c60bab75165814eee58455a
2024/09/04 20:39:27 Get RelayChainBlockNum 17053838
2024/09/04 20:39:38 Get NextBlockHash 0x4d0cb9bad6e0a0df33d13ae766bbe81d270b98e08f084a5f4f9b6896e94025f7
2024/09/04 20:39:38 Find nextBlockHash 0xd832025ae75194503537c9ec570e8972b249ed70fba238d6a2949e819c0586e7, block num 17053840,start fetch PendingAvailability 
2024/09/04 20:39:38 Get para block hash 0x145889077928c1078ac2a3e0be7b7c88d1bb1547d513ec5e3773d56a4d3516ca
2024/09/04 20:39:49 start check block 0x145889077928c1078ac2a3e0be7b7c88d1bb1547d513ec5e3773d56a4d3516ca
2024/09/04 20:39:49 Find HRMP messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181, result Success
--- PASS: Test_TrackTx (96.51s)
=== RUN   TestTrackBridgeMessage
2024/09/04 20:39:49 Get ethereum message Id 0xc2e41ff7cfa5d7dff27d12965462da470c1dbb1b955da7a68e29e83f092d1d22 timestamp 1708654032 blockNum 5344483
2024/09/04 20:39:50 Start crawl block num 2540323
2024/09/04 20:39:51 Find bridge message has process in extrinsic index 2542078-2,event index 2542078-7 
2024/09/04 20:40:05 Find messageHash 0x91f9e0859a42e75dd6af502c082e2ede7731a55b7250cc62f82e2093be6a8ce2
2024/09/04 20:40:05 Find messageRaw 03140004000100000b2037c77c800213000100000b2037c77c80020016040d010204010100a10f26079edaa802001400040000010300fff9976782d46cc05630d1f6ebab18b2324d6b14000300286bee0a130000010300fff9976782d46cc05630d1f6ebab18b2324d6b14000300286bee000d0102040001030010408b64fcd163439eb015650916a43d23b95b5d2c82c1df72f95ee1a2f939e3663a5eed261c1a5918a5b20ff3700ad5e9fdb9300a2c5b207fd02a588372f7d1e170c1bedf031eb58a118dc12d9917143fc76efd7f3c
2024/09/04 20:40:05 Get NextBlockHash 0x40c2a31cb3bcbafa89a5cd70f87e7339cbe901e086eab9d7152651547d8336f6
2024/09/04 20:40:05 Get RelayChainBlockNum 9339562
2024/09/04 20:40:20 Get NextBlockHash 0x6010ab32c653c7cbd7ba95de54f813aab6aa18b7bbcca9b2dd2deaf8e9c2f187
2024/09/04 20:40:20 Find nextBlockHash 0xcfb13b2405a7e777550888442aa0220bec0af4349dd0980b5a01396d55036c74, block num 9339564,start fetch PendingAvailability 
2024/09/04 20:40:20 Find nextBlockHash 0x3f622605891bfed0a0218c9e5a5531e7ffa3618123b3219b13c2245ab82a05fd, block num 9339565,start fetch PendingAvailability 
2024/09/04 20:40:21 Get para block hash 0xd09f3ec7e029dc3ca5b8309a295952e8aec5a59ba178b9c01ce055e9c7f48b60
2024/09/04 20:40:34 start check block 0xd09f3ec7e029dc3ca5b8309a295952e8aec5a59ba178b9c01ce055e9c7f48b60
2024/09/04 20:40:34 start check block 0xddb9cf29f11185677b155e70a1e1bd151ae9c55d8e8b1691cd428dcbcfa4d605
2024/09/04 20:40:34 Find Message messageid 0x82c1df72f95ee1a2f939e3663a5eed261c1a5918a5b20ff3700ad5e9fdb9300a
2024/09/04 20:40:34 Get etherStartBlockNum 0
2024/09/04 20:40:34 Find bridge message have process in 5364918 0x1435866e5c320adac9fed7827934ce6c34f28bf6cc2b5fae1ab3f5512fd0db76
--- PASS: TestTrackBridgeMessage (45.70s)
=== RUN   TestTrackS2sBridgeMessage
2024/09/04 20:40:45 Find messageHash 0x56c6f4450b3b0c14adb7727d51ca61067a99b7b1c8ef993fd037039d61ac056c
2024/09/04 20:40:45 Find messageRaw 031400040001000007521e91f615130001000007521e91f6150016040d010204010100a10f26040100a10f140104000201090500040a1300020109050004000d01020400010100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d2c11e1c09b4f6aece0bfa6c1678faf192b6808540c97a6855230f8af3e2eb835282c9cda4757a21cf60d57b4108946d3e0a961d4026cb29ab248b51858cfbe59e386
2024/09/04 20:40:45 Get NextBlockHash 0x85a95c0c03515dc542147334e448147612fdfe9c08f6386609eb1921e1d04b64
2024/09/04 20:40:45 Get RelayChainBlockNum 11726101
2024/09/04 20:40:56 Get NextBlockHash 0x0b3fd48217f4198cf239e4027db7cabc65236d0fe4ef8999913fc7670bf3d11b
2024/09/04 20:40:56 Find nextBlockHash 0x4817f512a83f7aa57bcc888808eef3fe0e88c218c720d21ed95057b470a3043c, block num 11726103,start fetch PendingAvailability 
2024/09/04 20:40:56 Get para block hash 0xc7ce137d3cef8368373fc7e2580d520b95b6386cc65e3a9faf40e773e2b4bff0
2024/09/04 20:41:07 start check block 0xc7ce137d3cef8368373fc7e2580d520b95b6386cc65e3a9faf40e773e2b4bff0
2024/09/04 20:41:07 start check block 0x580183c711beee0ea6088294c78b42ba7471208019371cbbe4087f145f39b54e
2024/09/04 20:41:07 start check block 0x332184c37060ffaa3986cd142354bc8c34dc06146ee65608d4533169b389e37d
2024/09/04 20:41:12 found destBridgeHeaderHash 0x315c4f176ead8620140d90af90991092fd401644509a899290fdd240d08cfd54
nextHash 0xa9bb3eb51ca25537898025f689fa5c575e09c7c55589404128509107f78cda46
2024/09/04 20:41:23 start check block 0 0x315c4f176ead8620140d90af90991092fd401644509a899290fdd240d08cfd54
2024/09/04 20:41:23 start check block 4856648 0x545a74794a445a0d6be151e43b7b0479a82d274866782bd27d30ce030e124efd
2024/09/04 20:41:23 start check block 4856649 0xf8bb9a8bafc9f51faa2841478ea30f1d01d15889082e6327f748a6005d9dc3cd
2024/09/04 20:41:23 start check block 4856650 0x2fb3d3e7e8aaf1e3bd1b0eb922e995188bd10d5145d66ff1b986666acf44e826
2024/09/04 20:41:23 start check block 4856651 0x1dc2b26c52a9c16ea2c5f0791f818a2518455d4004bd60165053076f0189c3ce
2024/09/04 20:41:23 start check block 4856652 0xf684e584e43d064efc3a03f7eb5e7f7ead56e4352f0f73c5b90849cf32a3ec29
2024/09/04 20:41:23 start check block 4856653 0x1999638d06151e4841627ad13323102601c75f338f243fdd68b234fc448dc8e2
2024/09/04 20:41:23 start check block 4856654 0x2d7cbc504978ad1bb7117de4a291fc1d307de70ac60a55219eeb4ff708b6afcc
2024/09/04 20:41:23 start check block 4856655 0xffd538bb336c9ae81e01e0f991e45c1d6b79a58ea6c3d251e4a3fe6f21d71817
2024/09/04 20:41:23 start check block 4856656 0x64105cef05b0902e81f39a24c9b8ecdad90f5b7af8bf2f7bd07168866cde20dc
2024/09/04 20:41:23 start check block 4856657 0xdb5e5c33101b200faa0c7d0a4e071276eae91cb4d7ac15740a6c5795d27f8b56
2024/09/04 20:41:23 start check block 4856658 0xfab0bd1245b8b8d520723abed4e1423f50b1aa1be6e8ccd067170c131e1666e5
2024/09/04 20:41:24 start check block 4856659 0x23404a5736da0f35d27b4e2df8f9bcad5158a5759fb2b941c8cba56b1f8d73bd
2024/09/04 20:41:24 start check block 4856660 0x3deddd67f289a613b7e9248acaeb6630e42e8acc54b4d62fbf838e5d728acf26
2024/09/04 20:41:24 start check block 4856661 0x0666fd3ab1773e167469e9752d3f221b13c10db2b9a3615082486886b19b269a
2024/09/04 20:41:24 start check block 4856662 0xb9d5a2682172b6cf2ae9655a69a4923b15c214b04fcdc14867bae1b573dcaf3c
2024/09/04 20:41:24 start check block 4856663 0xf4fae271ffd733097baa05dd34bc842c2ce2bda938e98eecec89b8e8359db71f
2024/09/04 20:41:24 start check block 4856664 0x445110d15476548ecf6a0a3337953a82f1c4adbe1131b59dd541a6ba0d83878b
2024/09/04 20:41:24 start check block 4856665 0x0b577c3bfa64d0b228b69fed566bfceccafc6f38be9129c382f4ef0b1c9e2e44
2024/09/04 20:41:24 start check block 4856666 0xdfdcf77a95a6d215167b2e2fd798489a2f6817566b7a9cc95598e9c73ad2d180
2024/09/04 20:41:24 found destChainExtrinsicIndex: 4856666-2
2024/09/04 20:41:35 Find messageHash 0x15f220e89ffad54c7e07a1f6e22f441679da3d6516a10995c50f82bb0fef426a
2024/09/04 20:41:35 Find messageRaw 03200b01042c2509050b0100a10f0104000201090500040a1300020109050004000d01020400010100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d2c11e1c09b4f6aece0bfa6c1678faf192b6808540c97a6855230f8af3e2eb83528
2024/09/04 20:41:35 Get NextBlockHash 0x643aa1426b7052b42ea2e407a9774a3eba0dbc5310ddf46e1742ff5256ce072e
2024/09/04 20:41:35 Get RelayChainBlockNum 22099307
2024/09/04 20:41:46 Get NextBlockHash 0x6ed50b2530e5a24b3a7fcb151f3ff80562ff7de7f3e4a323e87d3c515d6e4516
2024/09/04 20:41:46 Find nextBlockHash 0x9e6f11c092aecd67266c59c6d69469bf3faf3764128d74df5d3e860401bb24ab, block num 22099309,start fetch PendingAvailability 
2024/09/04 20:41:46 Get para block hash 0x3b9832e69b55ed337791f7300853f1ff839a01eb71ad9c4cabbbb47ed0710e32
2024/09/04 20:41:57 start check block 0x3b9832e69b55ed337791f7300853f1ff839a01eb71ad9c4cabbbb47ed0710e32
2024/09/04 20:41:57 start check block 0x08bddd944d9020d45d6fa705e08f029da990761399a861a85e17fdb57b53c580
2024/09/04 20:41:57 start check block 0xa55431ad7c77a0ffce2ed88096d4c4b9dc68bf56f54b6af958cdfd775fa4de95
2024/09/04 20:41:57 Find HRMP messageHash 0x15f220e89ffad54c7e07a1f6e22f441679da3d6516a10995c50f82bb0fef426a,messageId 0x11e1c09b4f6aece0bfa6c1678faf192b6808540c97a6855230f8af3e2eb83528 result false
--- PASS: TestTrackS2sBridgeMessage (82.06s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/tracker     289.248s
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
=== RUN   Test_HRMP_func/ReserveTransfer
--- PASS: Test_HRMP_func (0.00s)
    --- PASS: Test_HRMP_func/LimitedReserveTransferAssets (0.00s)
    --- PASS: Test_HRMP_func/ReserveTransferAssets (0.00s)
    --- PASS: Test_HRMP_func/LimitedTeleportAssets (0.00s)
    --- PASS: Test_HRMP_func/TeleportAssets (0.00s)
    --- PASS: Test_HRMP_func/Send (0.00s)
    --- PASS: Test_HRMP_func/ReserveTransfer (0.00s)
=== RUN   Test_ConvertMultiLocationAccountId32
--- PASS: Test_ConvertMultiLocationAccountId32 (0.00s)
=== RUN   Test_SimplifyMultiLocationParaId
--- PASS: Test_SimplifyMultiLocationParaId (0.00s)
=== RUN   Test_SimplifyMultiLocationRelayChain
--- PASS: Test_SimplifyMultiLocationRelayChain (0.00s)
=== RUN   Test_SimplifyMultiAssets
--- PASS: Test_SimplifyMultiAssets (0.00s)
=== RUN   Test_Client
--- PASS: Test_Client (10.93s)
=== RUN   TestXcmTransfer
=== RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
=== RUN   TestXcmTransfer/Test_XCM_HRMP_Send
--- PASS: TestXcmTransfer (10.85s)
    --- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (0.09s)
    --- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (0.09s)
=== RUN   TestDmpTransfer
=== RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
--- PASS: TestDmpTransfer (10.92s)
    --- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (0.08s)
=== RUN   TestPolkadotToEthereum
=== RUN   TestPolkadotToEthereum/Test_XCM_To_Ethereum
--- PASS: TestPolkadotToEthereum (10.72s)
    --- PASS: TestPolkadotToEthereum/Test_XCM_To_Ethereum (0.09s)
=== RUN   TestRococoToWestend
=== RUN   TestRococoToWestend/TestRococoToWestend
--- PASS: TestRococoToWestend (10.66s)
    --- PASS: TestRococoToWestend/TestRococoToWestend (0.06s)
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
--- PASS: TestXcmSend (22.03s)
    --- PASS: TestXcmSend/Test_XCM_Ump_Send (5.38s)
    --- PASS: TestXcmSend/Test_XCM_HRMP_Send (6.02s)
=== RUN   Test_XCM_Dmp_Send
--- PASS: Test_XCM_Dmp_Send (11.96s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/tx  88.092s
=== RUN   Test_EtherApi
=== RUN   Test_EtherApi/Test_EthGetTransactionByHash
=== RUN   Test_EtherApi/Test_EthGetTransactionReceipt
=== RUN   Test_EtherApi/Test_EthGetBlockByNum
=== RUN   Test_EtherApi/TestEtherscanGetLogs
--- PASS: Test_EtherApi (6.01s)
    --- PASS: Test_EtherApi/Test_EthGetTransactionByHash (0.32s)
    --- PASS: Test_EtherApi/Test_EthGetTransactionReceipt (0.26s)
    --- PASS: Test_EtherApi/Test_EthGetBlockByNum (2.30s)
    --- PASS: Test_EtherApi/TestEtherscanGetLogs (0.13s)
=== RUN   Test_SubscanGetBlockByTime
--- PASS: Test_SubscanGetBlockByTime (1.58s)
=== RUN   TestSubscanGetEvents
--- PASS: TestSubscanGetEvents (1.19s)
=== RUN   Test_ToInt
--- PASS: Test_ToInt (0.00s)
=== RUN   Test_HexToUint64
--- PASS: Test_HexToUint64 (0.00s)
=== RUN   Test_ToUint
--- PASS: Test_ToUint (0.00s)
=== RUN   Test_InSlice
--- PASS: Test_InSlice (0.00s)
=== RUN   Test_AnyToInt
--- PASS: Test_AnyToInt (0.00s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/util        8.779s
```
</details>

Docker unit tests also build and pass:

<details>
  <summary>Output</summary>

```go
ubuntu@ip-172-31-22-192:~/xcm-tools$ docker build -t xcm-tools-test .
[+] Building 1.0s (9/9) FINISHED                                                                                                          docker:default
 => [internal] load build definition from Dockerfile                                                                                                0.0s
 => => transferring dockerfile: 119B                                                                                                                0.0s
 => [internal] load metadata for docker.io/library/golang:1.21                                                                                      0.7s
 => [internal] load .dockerignore                                                                                                                   0.0s
 => => transferring context: 2B                                                                                                                     0.0s
 => [1/4] FROM docker.io/library/golang:1.21@sha256:4746d26432a9117a5f58e95cb9f954ddf0de128e9d5816886514199316e4a2fb                                0.0s
 => [internal] load build context                                                                                                                   0.1s
 => => transferring context: 3.96kB                                                                                                                 0.0s
 => CACHED [2/4] WORKDIR app                                                                                                                        0.0s
 => CACHED [3/4] COPY . .                                                                                                                           0.0s
 => CACHED [4/4] RUN go mod download                                                                                                                0.0s
 => exporting to image                                                                                                                              0.0s
 => => exporting layers                                                                                                                             0.0s
 => => writing image sha256:b8c224d391cdf8cca16e2c8b17178f4409c5ecc101f717edfb4a3238bb8e3db5                                                        0.0s
 => => naming to docker.io/library/xcm-tools-test                                                                                                   0.0s

 2 warnings found (use docker --debug to expand):
 - WorkdirRelativePath: Relative workdir "app" can have unexpected results if the base image changes (line 3)
 - JSONArgsRecommended: JSON arguments recommended for CMD to prevent unintended behavior related to OS signals (line 9)
ubuntu@ip-172-31-22-192:~/xcm-tools$ docker run -it --rm xcm-tools-test
?       github.com/gmajor-encrypt/xcm-tools/example     [no test files]
=== RUN   Test_Cli
--- PASS: Test_Cli (0.01s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/cmd 0.038s
=== RUN   TestParseXcmMessageInstruction
--- PASS: TestParseXcmMessageInstruction (10.93s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/parse       10.973s
=== RUN   Test_getEventsFromChain
--- PASS: Test_getEventsFromChain (10.93s)
=== RUN   Test_getEvents
--- PASS: Test_getEvents (10.84s)
=== RUN   Test_findEventByEventId
--- PASS: Test_findEventByEventId (0.00s)
=== RUN   Test_getExtrinsics
--- PASS: Test_getExtrinsics (10.83s)
=== RUN   Test_getExtrinsicByIndex
--- PASS: Test_getExtrinsicByIndex (10.77s)
=== RUN   Test_Enum
--- PASS: Test_Enum (0.00s)
=== RUN   TestHRMPWatermark
--- PASS: TestHRMPWatermark (10.80s)
=== RUN   TestParasInfo
--- PASS: TestParasInfo (10.54s)
=== RUN   Test_TrackTx
2024/09/04 20:51:37 Start track xcm message with ExtrinsicIndex: 4310901-13 Protocol: UMP OriginEndpoint: wss://moonbeam-rpc.dwellir.com DestEndpoint: wss://polkadot-rpc.dwellir.com RelayEndpoint: 
2024/09/04 20:51:53 Find messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902
2024/09/04 20:51:53 Find messageRaw 0x0310000400000000079e2d3d47280a1300000000079e2d3d4728010300286bee020010000d010204000101003628971d6b91628910aceeed80f922a1c539fa6bb201733d464b883acdd81b33
2024/09/04 20:51:53 Find messageId 
2024/09/04 20:51:53 Find nextBlock Hash 0xebaa16b5cc4c53595acb541ea46fdf9d6625f00ea335e91c53391d13cb599f36
2024/09/04 20:51:53 Find relayChainBlockNum 17040495
2024/09/04 20:51:58 Find relaychain blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2024/09/04 20:52:05 Get relaychain events with blockHash 0xa3da6bce0cdd659254c9e476e17e7ffbe31f5dd537d255e5bd1bf7625ab194c7
2024/09/04 20:52:05 Get relaychain events with blockHash 0xbb2fccd25e9377f00387f67f68c4ef42d2b343f2596b2077659acf66090110a2
2024/09/04 20:52:05 Find UMP messageHash 0xf053b9f150fbff79347bb6ed438e9cdf20083b7dbfa203078e9648b5bbfaa902, result true
2024/09/04 20:52:05 Start track xcm message with ExtrinsicIndex: 17053966-2 Protocol: DMP OriginEndpoint: wss://polkadot-rpc.dwellir.com DestEndpoint: wss://moonbeam-rpc.dwellir.com RelayEndpoint: 
2024/09/04 20:52:21 Find destParaId 2004
2024/09/04 20:52:21 Find messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4
2024/09/04 20:52:21 Find 17053967 nextBlockHash,start fetch PendingAvailability 0x408b3ed597e1f031377173550dfed5f011871e6cb7fcc90f704d8d017ba5e394 
2024/09/04 20:52:21 Find 17053968 nextBlockHash,start fetch PendingAvailability 0x36883a138cdfa7d5fe54c39bd20c37da07dec760c0b2d7d9c7017a9b517f280a 
2024/09/04 20:52:21 Get para block hash 0x51fdbefe8935a94153f14487b392d13d3b084a5059c0123263bc81c3ffa5ac72
2024/09/04 20:52:32 Find DMP messageHash 0x99f8179f1a3ca331998e7369ced93ac187036f287dcd3d015f3bcc585df92fa4, process true
2024/09/04 20:52:32 Start track xcm message with ExtrinsicIndex: 4325642-7 Protocol: HRMP OriginEndpoint: wss://astar-rpc.dwellir.com DestEndpoint: wss://rpc.hydradx.cloud RelayEndpoint: wss://polkadot-rpc.dwellir.com
2024/09/04 20:52:50 Find messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181
2024/09/04 20:52:50 Find messageRaw 0310010400010100591f001700004c7809ca2f266c0a1300010100591f001700004c7809ca2f266c010300286bee020010000d01020400010100ceba54427482d5deaf3d4e2560d37d90c8b5ffc0210ea29591c153f1d0c90b0d
2024/09/04 20:52:50 Get NextBlockHash 0x6af502c85ce4ffe3ab209236f1aeb6a80412380c6c60bab75165814eee58455a
2024/09/04 20:52:50 Get RelayChainBlockNum 17053838
2024/09/04 20:53:01 Get NextBlockHash 0x4d0cb9bad6e0a0df33d13ae766bbe81d270b98e08f084a5f4f9b6896e94025f7
2024/09/04 20:53:01 Find nextBlockHash 0xd832025ae75194503537c9ec570e8972b249ed70fba238d6a2949e819c0586e7, block num 17053840,start fetch PendingAvailability 
2024/09/04 20:53:01 Get para block hash 0x145889077928c1078ac2a3e0be7b7c88d1bb1547d513ec5e3773d56a4d3516ca
2024/09/04 20:53:13 start check block 0x145889077928c1078ac2a3e0be7b7c88d1bb1547d513ec5e3773d56a4d3516ca
2024/09/04 20:53:13 Find HRMP messageHash 0x5d81466ae4b2d9fb1fd140cd690bb25276b0bfafabecd62840c67e0b062c8181, result Success
--- PASS: Test_TrackTx (95.97s)
=== RUN   TestTrackBridgeMessage
2024/09/04 20:53:13 Get ethereum message Id 0xc2e41ff7cfa5d7dff27d12965462da470c1dbb1b955da7a68e29e83f092d1d22 timestamp 1708654032 blockNum 5344483
2024/09/04 20:53:14 Start crawl block num 2540323
2024/09/04 20:53:15 Find bridge message has process in extrinsic index 2542078-2,event index 2542078-7 
2024/09/04 20:53:26 Find messageHash 0x91f9e0859a42e75dd6af502c082e2ede7731a55b7250cc62f82e2093be6a8ce2
2024/09/04 20:53:26 Find messageRaw 03140004000100000b2037c77c800213000100000b2037c77c80020016040d010204010100a10f26079edaa802001400040000010300fff9976782d46cc05630d1f6ebab18b2324d6b14000300286bee0a130000010300fff9976782d46cc05630d1f6ebab18b2324d6b14000300286bee000d0102040001030010408b64fcd163439eb015650916a43d23b95b5d2c82c1df72f95ee1a2f939e3663a5eed261c1a5918a5b20ff3700ad5e9fdb9300a2c5b207fd02a588372f7d1e170c1bedf031eb58a118dc12d9917143fc76efd7f3c
2024/09/04 20:53:26 Get NextBlockHash 0x40c2a31cb3bcbafa89a5cd70f87e7339cbe901e086eab9d7152651547d8336f6
2024/09/04 20:53:26 Get RelayChainBlockNum 9339562
2024/09/04 20:53:36 Get NextBlockHash 0x6010ab32c653c7cbd7ba95de54f813aab6aa18b7bbcca9b2dd2deaf8e9c2f187
2024/09/04 20:53:36 Find nextBlockHash 0xcfb13b2405a7e777550888442aa0220bec0af4349dd0980b5a01396d55036c74, block num 9339564,start fetch PendingAvailability 
2024/09/04 20:53:37 Find nextBlockHash 0x3f622605891bfed0a0218c9e5a5531e7ffa3618123b3219b13c2245ab82a05fd, block num 9339565,start fetch PendingAvailability 
2024/09/04 20:53:37 Get para block hash 0xd09f3ec7e029dc3ca5b8309a295952e8aec5a59ba178b9c01ce055e9c7f48b60
2024/09/04 20:53:47 start check block 0xd09f3ec7e029dc3ca5b8309a295952e8aec5a59ba178b9c01ce055e9c7f48b60
2024/09/04 20:53:47 start check block 0xddb9cf29f11185677b155e70a1e1bd151ae9c55d8e8b1691cd428dcbcfa4d605
2024/09/04 20:53:47 Find Message messageid 0x82c1df72f95ee1a2f939e3663a5eed261c1a5918a5b20ff3700ad5e9fdb9300a
2024/09/04 20:53:47 Get etherStartBlockNum 0
2024/09/04 20:53:48 Find bridge message have process in 5364918 0x1435866e5c320adac9fed7827934ce6c34f28bf6cc2b5fae1ab3f5512fd0db76
--- PASS: TestTrackBridgeMessage (35.20s)
=== RUN   TestTrackS2sBridgeMessage
2024/09/04 20:53:59 Find messageHash 0x56c6f4450b3b0c14adb7727d51ca61067a99b7b1c8ef993fd037039d61ac056c
2024/09/04 20:53:59 Find messageRaw 031400040001000007521e91f615130001000007521e91f6150016040d010204010100a10f26040100a10f140104000201090500040a1300020109050004000d01020400010100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d2c11e1c09b4f6aece0bfa6c1678faf192b6808540c97a6855230f8af3e2eb835282c9cda4757a21cf60d57b4108946d3e0a961d4026cb29ab248b51858cfbe59e386
2024/09/04 20:53:59 Get NextBlockHash 0x85a95c0c03515dc542147334e448147612fdfe9c08f6386609eb1921e1d04b64
2024/09/04 20:53:59 Get RelayChainBlockNum 11726101
2024/09/04 20:54:09 Get NextBlockHash 0x0b3fd48217f4198cf239e4027db7cabc65236d0fe4ef8999913fc7670bf3d11b
2024/09/04 20:54:09 Find nextBlockHash 0x4817f512a83f7aa57bcc888808eef3fe0e88c218c720d21ed95057b470a3043c, block num 11726103,start fetch PendingAvailability 
2024/09/04 20:54:09 Get para block hash 0xc7ce137d3cef8368373fc7e2580d520b95b6386cc65e3a9faf40e773e2b4bff0
2024/09/04 20:54:20 start check block 0xc7ce137d3cef8368373fc7e2580d520b95b6386cc65e3a9faf40e773e2b4bff0
2024/09/04 20:54:20 start check block 0x580183c711beee0ea6088294c78b42ba7471208019371cbbe4087f145f39b54e
2024/09/04 20:54:20 start check block 0x332184c37060ffaa3986cd142354bc8c34dc06146ee65608d4533169b389e37d
2024/09/04 20:54:25 found destBridgeHeaderHash 0x315c4f176ead8620140d90af90991092fd401644509a899290fdd240d08cfd54
nextHash 0xa9bb3eb51ca25537898025f689fa5c575e09c7c55589404128509107f78cda46
2024/09/04 20:54:36 start check block 0 0x315c4f176ead8620140d90af90991092fd401644509a899290fdd240d08cfd54
2024/09/04 20:54:36 start check block 4856648 0x545a74794a445a0d6be151e43b7b0479a82d274866782bd27d30ce030e124efd
2024/09/04 20:54:36 start check block 4856649 0xf8bb9a8bafc9f51faa2841478ea30f1d01d15889082e6327f748a6005d9dc3cd
2024/09/04 20:54:36 start check block 4856650 0x2fb3d3e7e8aaf1e3bd1b0eb922e995188bd10d5145d66ff1b986666acf44e826
2024/09/04 20:54:36 start check block 4856651 0x1dc2b26c52a9c16ea2c5f0791f818a2518455d4004bd60165053076f0189c3ce
2024/09/04 20:54:36 start check block 4856652 0xf684e584e43d064efc3a03f7eb5e7f7ead56e4352f0f73c5b90849cf32a3ec29
2024/09/04 20:54:36 start check block 4856653 0x1999638d06151e4841627ad13323102601c75f338f243fdd68b234fc448dc8e2
2024/09/04 20:54:36 start check block 4856654 0x2d7cbc504978ad1bb7117de4a291fc1d307de70ac60a55219eeb4ff708b6afcc
2024/09/04 20:54:36 start check block 4856655 0xffd538bb336c9ae81e01e0f991e45c1d6b79a58ea6c3d251e4a3fe6f21d71817
2024/09/04 20:54:36 start check block 4856656 0x64105cef05b0902e81f39a24c9b8ecdad90f5b7af8bf2f7bd07168866cde20dc
2024/09/04 20:54:36 start check block 4856657 0xdb5e5c33101b200faa0c7d0a4e071276eae91cb4d7ac15740a6c5795d27f8b56
2024/09/04 20:54:37 start check block 4856658 0xfab0bd1245b8b8d520723abed4e1423f50b1aa1be6e8ccd067170c131e1666e5
2024/09/04 20:54:37 start check block 4856659 0x23404a5736da0f35d27b4e2df8f9bcad5158a5759fb2b941c8cba56b1f8d73bd
2024/09/04 20:54:37 start check block 4856660 0x3deddd67f289a613b7e9248acaeb6630e42e8acc54b4d62fbf838e5d728acf26
2024/09/04 20:54:37 start check block 4856661 0x0666fd3ab1773e167469e9752d3f221b13c10db2b9a3615082486886b19b269a
2024/09/04 20:54:37 start check block 4856662 0xb9d5a2682172b6cf2ae9655a69a4923b15c214b04fcdc14867bae1b573dcaf3c
2024/09/04 20:54:37 start check block 4856663 0xf4fae271ffd733097baa05dd34bc842c2ce2bda938e98eecec89b8e8359db71f
2024/09/04 20:54:37 start check block 4856664 0x445110d15476548ecf6a0a3337953a82f1c4adbe1131b59dd541a6ba0d83878b
2024/09/04 20:54:37 start check block 4856665 0x0b577c3bfa64d0b228b69fed566bfceccafc6f38be9129c382f4ef0b1c9e2e44
2024/09/04 20:54:37 start check block 4856666 0xdfdcf77a95a6d215167b2e2fd798489a2f6817566b7a9cc95598e9c73ad2d180
2024/09/04 20:54:37 found destChainExtrinsicIndex: 4856666-2
2024/09/04 20:54:48 Find messageHash 0x15f220e89ffad54c7e07a1f6e22f441679da3d6516a10995c50f82bb0fef426a
2024/09/04 20:54:48 Find messageRaw 03200b01042c2509050b0100a10f0104000201090500040a1300020109050004000d01020400010100d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d2c11e1c09b4f6aece0bfa6c1678faf192b6808540c97a6855230f8af3e2eb83528
2024/09/04 20:54:48 Get NextBlockHash 0x643aa1426b7052b42ea2e407a9774a3eba0dbc5310ddf46e1742ff5256ce072e
2024/09/04 20:54:48 Get RelayChainBlockNum 22099307
2024/09/04 20:54:59 Get NextBlockHash 0x6ed50b2530e5a24b3a7fcb151f3ff80562ff7de7f3e4a323e87d3c515d6e4516
2024/09/04 20:54:59 Find nextBlockHash 0x9e6f11c092aecd67266c59c6d69469bf3faf3764128d74df5d3e860401bb24ab, block num 22099309,start fetch PendingAvailability 
2024/09/04 20:54:59 Get para block hash 0x3b9832e69b55ed337791f7300853f1ff839a01eb71ad9c4cabbbb47ed0710e32
2024/09/04 20:55:09 start check block 0x3b9832e69b55ed337791f7300853f1ff839a01eb71ad9c4cabbbb47ed0710e32
2024/09/04 20:55:10 start check block 0x08bddd944d9020d45d6fa705e08f029da990761399a861a85e17fdb57b53c580
2024/09/04 20:55:10 start check block 0xa55431ad7c77a0ffce2ed88096d4c4b9dc68bf56f54b6af958cdfd775fa4de95
2024/09/04 20:55:10 Find HRMP messageHash 0x15f220e89ffad54c7e07a1f6e22f441679da3d6516a10995c50f82bb0fef426a,messageId 0x11e1c09b4f6aece0bfa6c1678faf192b6808540c97a6855230f8af3e2eb83528 result false
--- PASS: TestTrackS2sBridgeMessage (81.78s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/tracker     277.674s
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
=== RUN   Test_HRMP_func/ReserveTransfer
--- PASS: Test_HRMP_func (0.00s)
    --- PASS: Test_HRMP_func/LimitedReserveTransferAssets (0.00s)
    --- PASS: Test_HRMP_func/ReserveTransferAssets (0.00s)
    --- PASS: Test_HRMP_func/LimitedTeleportAssets (0.00s)
    --- PASS: Test_HRMP_func/TeleportAssets (0.00s)
    --- PASS: Test_HRMP_func/Send (0.00s)
    --- PASS: Test_HRMP_func/ReserveTransfer (0.00s)
=== RUN   Test_ConvertMultiLocationAccountId32
--- PASS: Test_ConvertMultiLocationAccountId32 (0.00s)
=== RUN   Test_SimplifyMultiLocationParaId
--- PASS: Test_SimplifyMultiLocationParaId (0.00s)
=== RUN   Test_SimplifyMultiLocationRelayChain
--- PASS: Test_SimplifyMultiLocationRelayChain (0.00s)
=== RUN   Test_SimplifyMultiAssets
--- PASS: Test_SimplifyMultiAssets (0.00s)
=== RUN   Test_Client
--- PASS: Test_Client (10.81s)
=== RUN   TestXcmTransfer
=== RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
=== RUN   TestXcmTransfer/Test_XCM_HRMP_Send
--- PASS: TestXcmTransfer (10.81s)
    --- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (0.07s)
    --- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (0.10s)
=== RUN   TestDmpTransfer
=== RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
--- PASS: TestDmpTransfer (10.88s)
    --- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (0.09s)
=== RUN   TestPolkadotToEthereum
=== RUN   TestPolkadotToEthereum/Test_XCM_To_Ethereum
--- PASS: TestPolkadotToEthereum (10.72s)
    --- PASS: TestPolkadotToEthereum/Test_XCM_To_Ethereum (0.08s)
=== RUN   TestRococoToWestend
=== RUN   TestRococoToWestend/TestRococoToWestend
--- PASS: TestRococoToWestend (10.70s)
    --- PASS: TestRococoToWestend/TestRococoToWestend (0.08s)
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
--- PASS: TestXcmSend (21.38s)
    --- PASS: TestXcmSend/Test_XCM_Ump_Send (4.66s)
    --- PASS: TestXcmSend/Test_XCM_HRMP_Send (6.10s)
=== RUN   Test_XCM_Dmp_Send
--- PASS: Test_XCM_Dmp_Send (11.91s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/tx  87.227s
=== RUN   Test_EtherApi
=== RUN   Test_EtherApi/Test_EthGetTransactionByHash
=== RUN   Test_EtherApi/Test_EthGetTransactionReceipt
=== RUN   Test_EtherApi/Test_EthGetBlockByNum
=== RUN   Test_EtherApi/TestEtherscanGetLogs
--- PASS: Test_EtherApi (6.08s)
    --- PASS: Test_EtherApi/Test_EthGetTransactionByHash (0.42s)
    --- PASS: Test_EtherApi/Test_EthGetTransactionReceipt (0.26s)
    --- PASS: Test_EtherApi/Test_EthGetBlockByNum (2.27s)
    --- PASS: Test_EtherApi/TestEtherscanGetLogs (0.13s)
=== RUN   Test_SubscanGetBlockByTime
--- PASS: Test_SubscanGetBlockByTime (1.49s)
=== RUN   TestSubscanGetEvents
--- PASS: TestSubscanGetEvents (1.08s)
=== RUN   Test_ToInt
--- PASS: Test_ToInt (0.00s)
=== RUN   Test_HexToUint64
--- PASS: Test_HexToUint64 (0.00s)
=== RUN   Test_ToUint
--- PASS: Test_ToUint (0.00s)
=== RUN   Test_InSlice
--- PASS: Test_InSlice (0.00s)
=== RUN   Test_AnyToInt
--- PASS: Test_AnyToInt (0.00s)
PASS
ok      github.com/gmajor-encrypt/xcm-tools/util        8.654s
```
</details>
