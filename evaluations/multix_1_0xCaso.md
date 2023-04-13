# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Multix-a-simple-UI-for-complex-multisig.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [`LICENSE`](https://github.com/ChainSafe/Multix/blob/9a01c287773010a38ea8c0a8aae52a4367356d45/LICENSE) |  | 
| 0b. | Documentation | <ul><li>[x] </li></ul> | [`/squid`](https://github.com/ChainSafe/Multix/tree/9a01c287773010a38ea8c0a8aae52a4367356d45/squid), [`/ui`](https://github.com/ChainSafe/Multix/tree/9a01c287773010a38ea8c0a8aae52a4367356d45/ui) |  | 
| 0d.  | Docker | <ul><li>[x] </li></ul> | [`Dockerfile`](https://github.com/ChainSafe/Multix/blob/9a01c287773010a38ea8c0a8aae52a4367356d45/squid/Dockerfile), [`docker-compose.yml`](https://github.com/ChainSafe/Multix/blob/9a01c287773010a38ea8c0a8aae52a4367356d45/squid/Dockerfile) |  | 
| 0e.  | Article | <ul><li>[x] </li></ul> | [Medium article](https://blog.chainsafe.io/multix-a-simple-interface-to-manage-complex-multisigs-on-polkadot-97328be26f9d) |  | 
| 1. | creation screen | <ul><li>[x] </li></ul> | [`/ui/src/pages/Creation/index.tsx`](https://github.com/ChainSafe/Multix/blob/9a01c287773010a38ea8c0a8aae52a4367356d45/ui/src/pages/Creation/index.tsx) |  | 
| 2. | indexer | <ul><li>[x] </li></ul> | [`/squid`](https://github.com/ChainSafe/Multix/tree/9a01c287773010a38ea8c0a8aae52a4367356d45/squid) |  | 
| 3. | home screen | <ul><li>[x] </li></ul> | [`/ui/src/pages/Home.tsx`](https://github.com/ChainSafe/Multix/blob/9a01c287773010a38ea8c0a8aae52a4367356d45/ui/src/pages/Home.tsx) |  | 
| 4. | request approval | <ul><li>[x] </li></ul> | [Home page](https://github.com/ChainSafe/Multix/blob/9a01c287773010a38ea8c0a8aae52a4367356d45/ui/src/pages/Home.tsx) |  | 
| 5. | pallet support | <ul><li>[x] </li></ul> | [`/ui`](https://github.com/ChainSafe/Multix/tree/9a01c287773010a38ea8c0a8aae52a4367356d45/ui) |  | 
| 6. | stack | <ul><li>[x] </li></ul> | [Multix repo](https://github.com/ChainSafe/Multix/tree/9a01c287773010a38ea8c0a8aae52a4367356d45) |  | 
<br/>

## General Notes v1 - Feb 9, 2023
The delivery is very good: the setup is straightforward and the UI is already easy to use and intuitive.

I asked the grantee to add a minor thing in the README, and I had problems with testing because of a misconfiguration of the variables in the `.env.example` file, which has been fixed.

I didn't notice other issues, but I have a few suggestions to improve the dApp:
- it would be nice to see the balance of the multisig/proxy account;
- when the UI displays messages like "Tx finalized", it would be nice to have a link to the transaction on a block explorer (e.g. subscan);
- if possible, it would be nice to have an auto-refreshing UI;
- sometimes the UI stucks to "Connecting to the node at wss://rococo-rpc.polkadot.io” (maybe it can be a connection error with the RPC);
- when I want to propose a transfer, and I put an amount such as 0.5 ROC, in the proposal there is written 500 ROC (but maybe you already fixed this in the commit [`9a01c28`](https://github.com/ChainSafe/Multix/commit/9a01c287773010a38ea8c0a8aae52a4367356d45))