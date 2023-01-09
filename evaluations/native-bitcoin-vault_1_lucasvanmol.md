# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/native-bitcoin-vaults.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** N/A


| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence |<ul><li>[x] </li></ul>|[Hashed Substrate](https://github.com/hashed-io/hashed-substrate/tree/f4d9dcfa549cf95353168d78537db1a94991cd03/pallets/nbv-storage), [BDK Services](https://github.com/hashed-io/bdk-services/tree/f6c9d294b2cf0d598531fc25e96808c970e8601f), [Web App](https://github.com/hashed-io/native-bitcoin-vaults-ui/tree/78508f3ab7b0f9194765af5a891a1ef0bb68a1b2), [QR Encoding Package](https://github.com/hashed-io/nbv-ur-codec/tree/fac2b89cc3774593098f79c2dd657fbfadc46aa9) | All 4 repos are MIT Licensed |
| 0b. | Documentation |<ul><li>[x] </li></ul>| | Inline documentation & READMEs are clear, and extensive overall. |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| | |
| 0d. | Docker |<ul><li>[x] </li></ul>| | Dockerfiles available for `bdk-services`, but not for the UI. However, the UI runs fine locally and when deployed. |
| 0e. | Video |<ul><li>[x] </li></ul>| https://youtu.be/OYKvt-xir3E | Clear, succint explanation and demonstration of the deliverables. No Spanish video. |
| 1. | BDK Integration | <ul><li>[x] </li></ul>|[BDK Services](https://github.com/hashed-io/bdk-services/tree/f6c9d294b2cf0d598531fc25e96808c970e8601f) | Good, nice tests & documentation. `no_std` not yet implemented, so OCW was used, as outlined in delivery. |
| 2. | Identity `xpub` | <ul><li>[x] </li></ul>| [Web App](https://github.com/hashed-io/native-bitcoin-vaults-ui/tree/78508f3ab7b0f9194765af5a891a1ef0bb68a1b2), [nbv-storage pallet](https://github.com/hashed-io/hashed-substrate/tree/f4d9dcfa549cf95353168d78537db1a94991cd03/pallets/nbv-storage) | `xpub` no longer set on Identity, but rather using `nbv-storage` pallet. Some minor UI issues (asking for camera permissions, firefox support). |  
| 3. | Output Descriptors | <ul><li>[x] </li></ul>| [Web App](https://github.com/hashed-io/native-bitcoin-vaults-ui/tree/78508f3ab7b0f9194765af5a891a1ef0bb68a1b2) | Good integration with BlueWallet. |  
| 4. | Generate Receiving Addresses | <ul><li>[x] </li></ul>| [Web App](https://github.com/hashed-io/native-bitcoin-vaults-ui/tree/78508f3ab7b0f9194765af5a891a1ef0bb68a1b2) | |  
| 5. | List and View vaults | <ul><li>[x] </li></ul>| [Web App](https://github.com/hashed-io/native-bitcoin-vaults-ui/tree/78508f3ab7b0f9194765af5a891a1ef0bb68a1b2) | |
| 6. | Pass to Signer | <ul><li>[x] </li></ul>| [Web App](https://github.com/hashed-io/native-bitcoin-vaults-ui/tree/78508f3ab7b0f9194765af5a891a1ef0bb68a1b2), [QR Encoding Package](https://github.com/hashed-io/nbv-ur-codec/tree/fac2b89cc3774593098f79c2dd657fbfadc46aa9) | Signing is now done by BlueWallet, as outlined in delivery | 


## General Notes

Overall functionality is great and well documented. There are a few minor issues, outlined below, but I'm happy to accept the delivery if they will be addressed in the next milestone.


### Pallet

Examples are extensive and clear, although it could use more documentation/explanation in some areas, e.g. when errors occur: 

* For examaple when a cosigner does not have an xpub set, it's unclear that `"error": "3"` corresponds to `XPubNotFound`

```
$ polkadot-js-api tx.nbvStorage.createVault 1 "description" true '["5FHneW46xGXgs5mUiveU4sbTyGBzmstUspZC92UhjJM694ty"]' --seed "//Alice"
{
  "createVault": {
    "events": [],
    "status": "Ready"
  }
}
{
  "createVault": {
    "dispatchError": {
      "Module": {
        "index": "21",
        "error": "3"
      }
    },
  ...
}
```

* Additionally, proposing hangs when `vault_id` is invalid:

```
$ polkadot-js-api tx.nbvStorage.propose 0xdc08dcf7b4e6525bdd894433ffe45644262079dec2cdd8d5293e6b78c10edbcf Zpub75bKLk9fCjgfELzLr2XS5TEcCXXGrci4EDwAcppFNBDwpNy53JhJS8cbRjdv39noPDKSfzK7EPC1Ciyfb7jRwY7DmiuYJ6WDr2nEL6yTkHi 1000 "lorem ipsum" --seed "//Alice"
{
  "propose": {
    "events": [],
    "status": "Ready"
  }
}
{
  "propose": {
    "events": [],
    "status": "Invalid"
  }
}

^C
```

Finally, please address the issues raised by running `cargo clippy` on repos using Rust.