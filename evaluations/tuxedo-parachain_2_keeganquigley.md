# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/tuxedo_parachain.md
- **Milestone:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a.    | License     | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/LICENSE) | Apache 2.0 | 
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [off-narrative-labs.github.io](https://off-narrative-labs.github.io/Tuxedo), [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md) | Good documentation | 
| 0c.    | Testing     | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/tree/939b44200241db29037f87bbf1c06cfe59975d21#testing-and-code-quality) |  |
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [README](https://github.com/Off-Narrative-Labs/Tuxedo/blob/939b44200241db29037f87bbf1c06cfe59975d21/README.md#docker), [Off-Narrative-Labs/packages](https://github.com/orgs/Off-Narrative-Labs/packages) | — |
| 1.     | Parachain Template Node | <ul><li>[ ] </li></ul> | [Node Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/parachain-node) [Runtime Code](https://github.com/Off-Narrative-Labs/Tuxedo/tree/main/tuxedo-parachain-runtime) [Docker Image](https://github.com/Off-Narrative-Labs/Tuxedo/pkgs/container/tuxedo-parachain) |  |
| 2. (bonus)     | `parachainify!` macro | <ul><li>[ ] </li></ul> | [Rustdocs](https://off-narrative-labs.github.io/Tuxedo/tuxedo_parachain_core/macro.parachainify.html), [Example Usage](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/tuxedo-parachain-runtime/src/lib.rs#L63-L64) |  |
| 3. (bonus)    | Zombienet | <ul><li>[ ] </li></ul> | [Readme Section](https://github.com/Off-Narrative-Labs/Tuxedo#zombienet) [Config File](https://github.com/Off-Narrative-Labs/Tuxedo/blob/main/zombienet.toml) |  |

# General Notes

Dev chain runs successfully. Docker runs successfully:

```sh
CONTAINER ID   IMAGE                                    COMMAND                  CREATED          STATUS          PORTS     NAMES
a6ba56b959f5   ghcr.io/off-narrative-labs/tuxedo:main   "/usr/local/bin/node…"   21 seconds ago   Up 20 seconds             confident_almeida
```

CLI works.

<details>
  <summary>Output</summary>

```sh
A simple example / template wallet built for the tuxedo template runtime

Usage: tuxedo-template-wallet [OPTIONS] [COMMAND]

Commands:
  amoeba-demo       Demonstrate creating an amoeba and performing mitosis on it
  mint-coins        Mint coins , optionally amount and publicKey of owner can be passed
                        if amount is not passed , 100 coins are minted
                        If publickKey of owner is not passed , then by default SHAWN_PUB_KEY is used.
  verify-coin       Verify that a particular coin exists.
                        Show its value and owner from both chain storage and the local database.
  spend-coins       Spend some coins.
                        For now, all outputs in a single transaction go to the same recipient.
  insert-key        Insert a private key into the keystore to later use when signing transactions
  generate-key      Generate a private key using either some or no password and insert into the keystore
  show-keys         Show public information about all the keys in the keystore
  remove-key        Remove a specific key from the keystore.
                        WARNING! This will permanently delete the private key information.
                        Make sure your keys are backed up somewhere safe.
  show-balance      For each key tracked by the wallet, shows the sum of all UTXO values owned by that key.
                        This sum is sometimes known as the "balance".
  show-all-outputs  Show the complete list of UTXOs known to the wallet
  show-timestamp    Show the latest on-chain timestamp
  help              Print this message or the help of the given subcommand(s)

Options:
  -e, --endpoint <ENDPOINT>    RPC endpoint of the node that this wallet will connect to [default: http://localhost:9944]
  -d, --base-path <BASE_PATH>  Path where the wallet data is stored. Default value is platform specific
      --no-sync                Skip the initial sync that the wallet typically performs with the node.
                               The wallet will use the latest data it had previously synced.
      --tmp                    A temporary directory will be created to store the configuration and will be deleted at the end of the process. path will be ignored if this is set
      --dev                    Specify a development wallet instance, using a temporary directory (like --tmp).
                               The keystore will contain the development key Shawn.
  -h, --help                   Print help
  -V, --version                Print version
```
</details>

Balance comes back as 0 instead of 100, and warning about MacoOS:

<details>
  <summary>Output</summary>

```
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
[2024-05-09T15:19:59Z INFO  tuxedo_template_wallet::sync] Initializing fresh sync from genesis 0x3a16225d2acfce0a9524a029f139c1eb0d0377ddacc253efdba0e8074b151093
[2024-05-09T15:19:59Z INFO  tuxedo_template_wallet] Number of blocks in the db: 0
[2024-05-09T15:19:59Z INFO  tuxedo_template_wallet] Wallet database synchronized with node to height 102
Balance Summary
--------------------
total      : 0
```
</details>
