# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/epirus_substrate_phase_2.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/web3labs/epirus-substrate/blob/0c79496b75cd2c50996a067dfd9353c375362506/LICENSE) |  | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Tutorial for verifying source code or uploading metadata](https://github.com/web3labs/ink-verifier-server/blob/77241445a8be0405ce2b5e708e42882c330a9599/docs/TUTORIAL.md), [Project README](https://github.com/web3labs/epirus-substrate/blob/0c79496b75cd2c50996a067dfd9353c375362506/README.md), [Video demo](https://www.loom.com/share/bdf245a8bc56409dafff1342e920927d) |  |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Processor unit tests](https://github.com/web3labs/epirus-substrate/tree/0c79496b75cd2c50996a067dfd9353c375362506/squid-ink#testing), [UI unit tests](https://github.com/web3labs/epirus-substrate/blob/0c79496b75cd2c50996a067dfd9353c375362506/explorer-ui/README.md#testing) |  | 
| 0d. | Docker | <ul><li>[x] </li></ul> | [Processor Docker image](https://github.com/web3labs/epirus-substrate/pkgs/container/squid-ink-epirus/69340555?tag=latest), [UI Docker image](https://github.com/web3labs/epirus-substrate/pkgs/container/epirus-substrate-ui/69340776?tag=latest), [Docker compose for running all explorer components locally](https://github.com/web3labs/epirus-substrate/tree/0c79496b75cd2c50996a067dfd9353c375362506/local-testnet) |  |
| 1. | Updated Squid Ink processor | <ul><li>[x] </li></ul> | [`/squid-ink`](https://github.com/web3labs/epirus-substrate/tree/0c79496b75cd2c50996a067dfd9353c375362506/squid-ink) |  |
| 2. | Updated Explorer UI | <ul><li>[x] </li></ul> | [`/explorer-ui`](https://github.com/web3labs/epirus-substrate/tree/0c79496b75cd2c50996a067dfd9353c375362506/explorer-ui) |  |
| 3. | Public explorer instance | <ul><li>[x] </li></ul> | https://substrate.sirato.xyz |  |

<br/>

## General Notes v1 - Feb 24, 2023
With the milestone, the team introduced smart contract's data decodification in the explorer. It works well, and the UI is already intuitive. The setup is straightforward thanks to the well written tutorial and the docker images. The tests coverage is high. The verification is easy to do, but it will take a bit of time.