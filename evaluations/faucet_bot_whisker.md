# Evaluation

- **Status:** Accepted
- **Application Document:** [w3f/Grants-Program#1758](https://github.com/w3f/Grants-Program/pull/1758)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable                       | Link                                                                                                                                          | Notes                                                                                                                                                                                               |
| ------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                           | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/blob/main/LICENSE)                                 | Apache 2.0 license included                                                                                                                                                                         |
| 0b.    | Documentation                     | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/blob/main/README.md)                               | Documentation contains instructions for how to run, deploy and test one's own faucet.                                                                                                               |
| 0c.    | Testing Guide                     | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet#testing)                                           | Guide on how to run unit, integration and E2E tests.                                                                                                                                                |
| 0d.    | Article                           | [Google Docs link](https://docs.google.com/document/d/17ikkX6J_ENh__s3d35SdX-j7Us15g8MvW9CrHjTG22Y/edit?usp=sharing)                          |                                                                                                                                                                                                     |
| 1.     | Universal message interface (UMI) | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/blob/main/backend/internal/domain/service/umi.go)  | Implement golang interface (contract) to unify all chat providers to one standart, so we can easily use abstraction                                                                                 |
| 2.     | Discord                           | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/tree/main/backend/internal/service/umi/discord)    | Golang implementation of discord integration using open-source SDK, that support interface of UMI module                                                                                            |
| 3.     | Matrix                            | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/tree/main/backend/internal/service/umi/matrix)     | So same as discord, golang module                                                                                                                                                                   |
| 4.     | Wallet status                     | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/blob/main/backend/internal/domain/service/drip.go) | Golang module that control user/wallet faucet drip, so user will be able to receive only once in a certain period of time                                                                           |
| 5.     | Faucet drip                       | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/tree/main/backend/internal/service/drip)           | Golang module that can send token to user wallet address on substrate based chain, RPC library to substrate chain through open-source library https://github.com/centrifuge/go-substrate-rpc-client |
| 6.     | Substrate demo                    | [GitHub repo link](https://github.com/StringNick/sybil-resistant-chat-bot-substrate-faucet/blob/main/docker-compose.yaml)                     | Implement demo example on substrate template node                                                                                                                                                   |

## General Notes

Overall, this is a solid project, well docker-compose scripts, and all promised features work as expected. 

Currently only integration tests are available.

Hope the documentation will be better in the future.

## Logs

<details>

<summary>Build image </summary>

```bash

[+] Running 11/11
 ✔ substrate 3 layers [⣿⣿⣿]      0B/0B      Pulled                                                                                                                                    9.7s 
   ✔ eaead16dc43b Pull complete                                                                                                                                                       3.8s 
   ✔ ffdf3b28655f Pull complete                                                                                                                                                       6.7s 
   ✔ 4f4fb700ef54 Pull complete                                                                                                                                                       6.7s 
 ✔ redis 6 layers [⣿⣿⣿⣿⣿⣿]      0B/0B      Pulled                                                                                                                                     9.0s 
   ✔ 648e0aadf75a Pull complete                                                                                                                                                       3.9s 
   ✔ 3b637010cd4d Pull complete                                                                                                                                                       4.0s 
   ✔ af4cd59cb295 Pull complete                                                                                                                                                       4.1s 
   ✔ 5c4cdbac1c67 Pull complete                                                                                                                                                       5.3s 
   ✔ 70c6437ca3ab Pull complete                                                                                                                                                       5.3s 
   ✔ 3d38f0110a91 Pull complete                                                                                                                                                       5.3s 
[+] Building 84.0s (18/18) FINISHED                                                                                                                                                        
 => [bot internal] load build definition from Dockerfile                                                                                                                              0.0s
 => => transferring dockerfile: 607B                                                                                                                                                  0.0s
 => [bot internal] load .dockerignore                                                                                                                                                 0.0s
 => => transferring context: 2B                                                                                                                                                       0.0s
 => [bot internal] load metadata for docker.io/library/alpine:3.16                                                                                                                    2.8s
 => [bot internal] load metadata for docker.io/library/golang:1.20-alpine                                                                                                             2.8s
 => [bot builder 1/8] FROM docker.io/library/golang:1.20-alpine@sha256:7839c9f01b5502d7cb5198b2c032857023424470b3e31ae46a8261ffca72912a                                               6.8s
 => => resolve docker.io/library/golang:1.20-alpine@sha256:7839c9f01b5502d7cb5198b2c032857023424470b3e31ae46a8261ffca72912a                                                           0.0s
 => => sha256:bf7808b93c00e08aff649e1a9a8a5ec286823750b0065c95b96a4fd13f2b33c6 5.18kB / 5.18kB                                                                                        0.0s
 => => sha256:31e352740f534f9ad170f75378a84fe453d6156e40700b882d737a8f4a6988a3 3.40MB / 3.40MB                                                                                        0.3s
 => => sha256:7f9bcf943fa5571df036dca6da19434d38edf546ef8bb04ddbc803634cc9a3b8 284.71kB / 284.71kB                                                                                    0.3s
 => => sha256:9fd371fdf0be1f3f0149451e08183a8bb178e63b4360e6691f07dccf51f0dc7f 100.94MB / 100.94MB                                                                                    2.3s
 => => sha256:7839c9f01b5502d7cb5198b2c032857023424470b3e31ae46a8261ffca72912a 1.65kB / 1.65kB                                                                                        0.0s
 => => sha256:6f592e0689192b7e477313264bb190024d654ef0a08fb1732af4f4b498a2e8ad 1.16kB / 1.16kB                                                                                        0.0s
 => => sha256:add974993529c266bf715fdeb763bf86e7a45dc0405d68fbe483a4428c59b55d 155B / 155B                                                                                            0.6s
 => => extracting sha256:31e352740f534f9ad170f75378a84fe453d6156e40700b882d737a8f4a6988a3                                                                                             0.1s
 => => extracting sha256:7f9bcf943fa5571df036dca6da19434d38edf546ef8bb04ddbc803634cc9a3b8                                                                                             0.1s
 => => extracting sha256:9fd371fdf0be1f3f0149451e08183a8bb178e63b4360e6691f07dccf51f0dc7f                                                                                             4.4s
 => => extracting sha256:add974993529c266bf715fdeb763bf86e7a45dc0405d68fbe483a4428c59b55d                                                                                             0.0s
 => [bot stage-1 1/4] FROM docker.io/library/alpine:3.16@sha256:cbe5d5973103a2d03408d1689a6efde4ea4920bde9f4b51fe7872e60ce2d8e56                                                      0.8s
 => => resolve docker.io/library/alpine:3.16@sha256:cbe5d5973103a2d03408d1689a6efde4ea4920bde9f4b51fe7872e60ce2d8e56                                                                  0.0s
 => => sha256:cbe5d5973103a2d03408d1689a6efde4ea4920bde9f4b51fe7872e60ce2d8e56 1.64kB / 1.64kB                                                                                        0.0s
 => => sha256:5fefcf0a67bdce28447c74b2f4e7cdfc9b8f9ed39fc7d3567b09a8f7cbdab098 528B / 528B                                                                                            0.0s
 => => sha256:5cb2da5c2391f597316eafada2ec327caf3f0ce8df1022f39273d2e73d7d002c 1.47kB / 1.47kB                                                                                        0.0s
 => => sha256:c1d6d1b2d5a367259e6e51a7f4d1ccd66a28cc9940d6599d8a8ea9544dd4b4a8 2.81MB / 2.81MB                                                                                        0.6s
 => => extracting sha256:c1d6d1b2d5a367259e6e51a7f4d1ccd66a28cc9940d6599d8a8ea9544dd4b4a8                                                                                             0.1s
 => [bot internal] load build context                                                                                                                                                 0.0s
 => => transferring context: 47.57kB                                                                                                                                                  0.0s
 => [bot stage-1 2/4] RUN apk add --no-cache su-exec ca-certificates olm bash tzdata                                                                                                  4.4s 
 => [bot builder 2/8] RUN apk add --no-cache git ca-certificates build-base su-exec olm-dev                                                                                           5.0s 
 => [bot builder 3/8] WORKDIR /app                                                                                                                                                    0.1s 
 => [bot builder 4/8] COPY go.mod go.sum ./                                                                                                                                           0.1s 
 => [bot builder 5/8] RUN go mod download                                                                                                                                            13.8s 
 => [bot builder 6/8] COPY . .                                                                                                                                                        0.1s 
 => [bot builder 7/8] COPY config /usr/bin/config                                                                                                                                     0.0s 
 => [bot builder 8/8] RUN go build -o /usr/bin/bot                                                                                                                                   54.5s 
 => [bot stage-1 3/4] COPY --from=builder /usr/bin/bot /usr/bin/bot                                                                                                                   0.1s
 => [bot stage-1 4/4] COPY --from=builder /usr/bin/config config                                                                                                                      0.0s
 => [bot] exporting to image                                                                                                                                                          0.4s
 => => exporting layers                                                                                                                                                               0.4s
 => => writing image sha256:682e8586d685da5819dc6964bebf0f8b067a9bd9a77811483f63a3f0031402d2                                                                                          0.0s
 => => naming to docker.io/library/sybil-resistant-chat-bot-substrate-faucet-bot                                                                                                      0.0s
[+] Running 5/5
 ✔ Network sybil-resistant-chat-bot-substrate-faucet_default      Created                                                                                                             0.1s 
 ✔ Volume "sybil-resistant-chat-bot-substrate-faucet_redis-data"  Created                                                                                                             0.0s 
 ✔ Container substrate                                            Started                                                                                                             0.8s 
 ✔ Container sybil-resistant-chat-bot-substrate-faucet-redis-1    Started                                                                                                             0.9s 
 ✔ Container sybil-resistant-chat-bot-substrate-faucet-bot-1      Started                                                                                                             0.9s 


```

</details>


<details>

<summary> Unit tests </summary>

```bash

go: downloading github.com/centrifuge/go-substrate-rpc-client/v4 v4.1.0
go: downloading github.com/vedhavyas/go-subkey v1.0.4
go: downloading golang.org/x/crypto v0.9.0
go: downloading github.com/ethereum/go-ethereum v1.10.20
go: downloading github.com/decred/base58 v1.0.4
go: downloading github.com/cristalhq/aconfig v0.18.4
go: downloading github.com/cristalhq/aconfig/aconfigtoml v0.17.1
go: downloading github.com/ChainSafe/go-schnorrkel v1.0.0
go: downloading github.com/gtank/merlin v0.1.1
go: downloading golang.org/x/sys v0.8.0
go: downloading github.com/pierrec/xxHash v0.1.5
go: downloading github.com/go-stack/stack v1.8.1
go: downloading github.com/decred/dcrd/crypto/blake256 v1.0.0
go: downloading github.com/BurntSushi/toml v1.1.0
go: downloading github.com/deckarep/golang-set v1.8.0
go: downloading github.com/gorilla/websocket v1.5.0
go: downloading github.com/rs/cors v1.8.2
go: downloading github.com/cosmos/go-bip39 v1.0.0
go: downloading github.com/gtank/ristretto255 v0.1.2
go: downloading github.com/mimoo/StrobeGo v0.0.0-20220103164710-9a04d6ca976b
2023/07/30 02:10:08 Connecting to ws://localhost:9944...
PASS
ok  	substrate-faucet/internal/env/substrate	0.162s


```

</details>

### Faucet tests

#### Discord faucet

```bash
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:14:04.037Z	DEBUG	processor/handler.go:15	request: 	{"addr": "/request 13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:14:04.038Z	DEBUG	processor/handler.go:19	request for drip	{"addr": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:14:04.103Z	DEBUG	drip/service.go:54	substrate tx sent	{"address": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML", "hash": "0xed2ecd42b2c2a795d0e61adcffa28ff2df78dc5d1d3334cded204d152c85dd64"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:14:04.103Z	DEBUG	processor/handler.go:40	successfully updated last drip	{"address": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
```

![discord faucet test and delay test](https://ibb.co/dDZH4Pn)

#### Matrix faucet

- Encryption

```bash
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:57:15.055Z	DEBUG	processor/handler.go:15	request: 	{"addr": "/request 13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:57:15.055Z	DEBUG	processor/handler.go:19	request for drip	{"addr": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:57:15.120Z	DEBUG	drip/service.go:54	substrate tx sent	{"address": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML", "hash": "0x71ac09e39edc8fcfcf6bbe7335c154efa601c577b102dba24d4c97782ca2a413"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:57:15.120Z	DEBUG	processor/handler.go:40	successfully updated last drip	{"address": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:57:28.205Z	DEBUG	processor/handler.go:15	request: 	{"addr": "/request 13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T10:57:28.205Z	DEBUG	processor/handler.go:19	request for drip	{"addr": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}

```

![matrix faucet test and delay test](https://ibb.co/ZxfLC34)

- Non-encryption

```bash
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T11:17:00.193Z	DEBUG	processor/handler.go:15	request: 	{"addr": "/request 13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T11:17:00.193Z	DEBUG	processor/handler.go:19	request for drip	{"addr": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T11:17:00.254Z	DEBUG	drip/service.go:54	substrate tx sent	{"address": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML", "hash": "0x56c1dd5fbde22bb1620fa643b27a56171807e86a5a9c974ba3353490b8e41a0d"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T11:17:00.254Z	DEBUG	processor/handler.go:40	successfully updated last drip	{"address": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T11:17:19.673Z	DEBUG	processor/handler.go:15	request: 	{"addr": "/request 13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}
sybil-resistant-chat-bot-substrate-faucet-bot-1  | 2023-08-01T11:17:19.673Z	DEBUG	processor/handler.go:19	request for drip	{"addr": "13GRiCYZFJSu8kC6dwJFr2x9JVUGM2Mdjwu8JsXaRQwDctML"}

```

![matrix faucet test and delay test](https://ibb.co/5vtM9gk)