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

## Logs

### Run RedDSA compatible Substrate Node

- Test hash: 6cffe044b746eb729538cf1e8107e6d858117b75

<details>

<summary> Reward token contract Unit tests </summary>

```bash



```

</details>

### Wallet cli

- Test hash: 7a88f7ccf0f0abd709dd96ed9dfe4e2376840c17

<details>

<summary> Backend integration tests </summary>

```bash


```

</details>
