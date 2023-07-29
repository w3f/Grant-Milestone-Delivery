# Evaluation

- **Status:** In Progress
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

todo

### Logs

<details>

<summary>Build image </summary>

```bash

```

</details>
