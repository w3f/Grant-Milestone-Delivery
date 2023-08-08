# Evaluation

- **Status:** In Progress
- **Application Document:** [w3f/Grants-Program#1788](https://github.com/w3f/Grants-Program/blob/master/applications/zkwasm-rollups-transfer.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.**| License |<ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/KogarashiNetwork/Kogarashi/blob/master/LICENSE) | |
| **0b.** | Documentation |<ul><li>[x] </li></ul>|[RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/) | The documentations are easy to read, which explain the working of the application.|
| **0c.** | Testing Guide |<ul><li>[x] </li></ul>|...| [RedDSA Tutorial](https://kogarashinetwork.github.io/Kogarashi/tutorial/reddsa_wallet/)|
| **0d.** | Docker |<ul><li>[x] </li></ul>|[docker-compose](https://github.com/KogarashiNetwork/Kogarashi/blob/master/docker-compose.yml) [base image](https://github.com/KogarashiNetwork/Kogarashi/tree/master/docker)| This docker compose works as expected|
| **0e.** | Article |<ul><li>[x] </li></ul>|[RedDSA Signature](https://kogarashinetwork.github.io/Kogarashi/technical/reddsa_signature/)| Would be better if there is a indpendent article explaining the working of the application. |
| 1 | `RedDSA` implementation |<ul><li>[x] </li></ul>|[Making Substrate RedDSA Compatible](https://github.com/KogarashiNetwork/zksubstrate/compare/49a4103...95f493c) [RedDSA Library](https://github.com/KogarashiNetwork/Kogarashi/tree/master/primitive/redjubjub)| Work as expected|
| 2 | `Jubjub` curve optimization |<ul><li>[x] </li></ul>|[field square](https://github.com/KogarashiNetwork/Kogarashi/pull/64) [field double](https://github.com/KogarashiNetwork/Kogarashi/pull/63) [jubjub NAF](https://github.com/KogarashiNetwork/Kogarashi/pull/60) [Twisted Edwards Revisit](https://github.com/KogarashiNetwork/Kogarashi/pull/68) | Awesome optimization|
| 3 | Client wallet implementation |<ul><li>[x] </li></ul>|[Wallet Cli Example](https://github.com/KogarashiNetwork/Kogarashi/tree/master/node/client)| Work as expected|

## General Notes

Todo

## Issues

- Funding wallet doesn't success. 

## Logs

### Run RedDSA compatible Substrate Node

- Test hash: 039c49e90924f4af224961d4e2429b64fea3a7ff

<details>

<summary> Compile client wallet </summary>

```bash

    Finished dev [unoptimized + debuginfo] target(s) in 1.16s
     Running `/root/w3f/Kogarashi/node/target/debug/kogarashi-cli list`
Alice: 688aaf1bcc667d5d638ca77a043b840070d06c1a1debf62506aae982ba89916f (5ERn2yka...)
Bob: 5f663a5e6bf28e4662fdf1337ce7b97ac7ca882562f3232f4c42d3bfb8c8bf4a (5EDnmrtY...)
Charlie: fb095e55959f78cfb828b7a4a7cb5d457f5d7af9df2fa5c5d3d1c0dd24c3a3d4 (5HjrfBxH...)
Dave: 5db5aa498ce1a3464a77d2f53edbc0e8a10fae101274b9b4719e5fb532deac6b (5EBaGydF...)
Eve: a1b4b10611e8b0827f5a3391e5616745fb19f34ea4fac72c31f94c79df908139 (5FijF4Kw...)
Ferdie: a00cafbb660c4b8a61699287412d5c59aee6f5d29963f58c5531a6374bae4770 (5FgZHczL...)
One: 5a3c858ff53552c49fd2215c9c7b97c9b5364629d1d10d1756631a072426f380 (5E729Pgx...)
Two: f9941ccd9e52d051f50aa1dbb898fd0b8e3bb2c6505a1463c894d9693dfb6b56 (5Hhwn91H...)

```

</details>

<details>

<summary> Generate wallet </summary>

```bash

    Finished dev [unoptimized + debuginfo] target(s) in 0.44s
     Running `/root/w3f/Kogarashi/node/target/debug/kogarashi-cli init`
Start Wallet Generation...
SS58 Address: "5C6D8BcTQGrhiAh7LDv3tKeLYLLtMmKvZGgk3yM2TodESc65"
Wallet ID: 0125c4c280b8c51505d3a3f9354ad271067abddaa9487698523855287f5e4310 (5C6D8BcT...)
Wallet Seed: [5, 247, 249, 231, 0, 215, 194, 10, 104, 86, 121, 216, 233, 206, 48, 55, 45, 198, 195, 143, 90, 162, 51, 204, 31, 22, 105, 87, 45, 103, 61, 7]

```

</details>

<details>

<summary> Check balance </summary>

```bash

root@whisker:~/w3f/Kogarashi/node/client# cargo run balance
    Finished dev [unoptimized + debuginfo] target(s) in 0.47s
     Running `/root/w3f/Kogarashi/node/target/debug/kogarashi-cli balance`
0 Balance
root@whisker:~/w3f/Kogarashi/node/client# cargo run balance Bob
    Finished dev [unoptimized + debuginfo] target(s) in 0.47s
     Running `/root/w3f/Kogarashi/node/target/debug/kogarashi-cli balance Bob`
1152921504606846976 Balance

```

</details>

<details>

<summary> Fund wallet </summary>

```bash

root@whisker:~/w3f/Kogarashi/node/client# cargo run fund
    Finished dev [unoptimized + debuginfo] target(s) in 0.58s
     Running `/root/w3f/Kogarashi/node/target/debug/kogarashi-cli fund`
Transaction Success: Null
root@whisker:~/w3f/Kogarashi/node/client# cargo run balance
    Finished dev [unoptimized + debuginfo] target(s) in 0.58s
     Running `/root/w3f/Kogarashi/node/target/debug/kogarashi-cli balance`
0 Balance

```

</details>

