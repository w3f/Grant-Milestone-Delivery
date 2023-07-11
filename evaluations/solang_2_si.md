# Evaluation Solang


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/pull/1334
- **Milestone:** 2
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** https://github.com/w3f/Grant-Milestone-Delivery/pull/883

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[Link](https://github.com/hyperledger/solang/blob/main/LICENSE)| License is Acceptable. Please write year and owner of cpyright on line 189 of the license. |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Link](https://solang.readthedocs.io/en/latest/running.html#starting-a-new-project)|Good |
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>|[Link](https://github.com/hyperledger/solang/blob/main/src/bin/cli/test.rs)|Refer to Item 1 in General Notes regarding Testing Guide.|
| 0d.  | Docker |<ul><li>[] </li></ul>|| No docker image provided. Refer to item 2 in General Notes. |
| 0e. | Article |<ul><li>[x] </li></ul>|[Link](https://forum.polkadot.network/t/introducing-solang-improvements/3361)| Link provided.|
| 1.  | Implement Solang projects |<ul><li>[x] </li></ul>|[Link](https://github.com/hyperledger/solang/pull/1392)| See Item 4 in General Notes. |



## General Notes

1. You have not provided a testing guide for running the tests. See the existing documentation about how tests are run: https://github.com/hyperledger/solang/blob/main/docs/testing.rst

2. There is an existing docker image for hyperledger already. The implemented soltution exists within that container.

```
docker run --rm -it -v $(pwd):/sources ghcr.io/hyperledger/solang compile -v -o /sources --target polkadot /sources/flipper.sol

```

3. Installation was successful.

```
You have 26 outdated formulae installed.
==> Downloading https://formulae.brew.sh/api/cask_tap_migrations.jws.json
################################################################################################################################# 100.0%

==> Tapping hyperledger/solang
Cloning into '/opt/homebrew/Library/Taps/hyperledger/homebrew-solang'...
remote: Enumerating objects: 56, done.
remote: Counting objects: 100% (56/56), done.
remote: Compressing objects: 100% (28/28), done.
remote: Total 56 (delta 19), reused 49 (delta 17), pack-reused 0
Receiving objects: 100% (56/56), 14.14 KiB | 7.07 MiB/s, done.
Resolving deltas: 100% (19/19), done.
Tapped 1 cask (17 files, 33.4KB).
==> Downloading https://github.com/hyperledger/solang/releases/download/v0.3.1/solang-mac-arm
==> Downloading from https://objects.githubusercontent.com/github-production-release-asset-2e65be/163517929/021a1e14-702f-4cce-9d18-5da3
################################################################################################################################# 100.0%
==> Installing Cask solang
==> Linking Binary 'solang-mac-arm' to '/opt/homebrew/bin/solang'
🍺  solang was successfully installed!
```
Some of the documentaiton seems to be outdated. For example, the following command fails: 

```
solang compile --target polkadot examples/polkadot/flipper.sol
```

because there is no ***polkadot*** target, but rather ***substrate***. 

```
error: invalid value 'polkadot' for '--target <TARGET>'
  [possible values: solana, substrate, evm]

For more information, try '--help'.
```

4. Tested the solang new command and it runs successfully locally. 

```
solang new --target substrate
```