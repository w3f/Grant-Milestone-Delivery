# Evaluation

- **Status:** Accepted
- **Application Document:** [nft-infra](https://github.com/w3f/Grants-Program/blob/master/applications/walt-id_nft-infra.md)
- **Milestone:** 1
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** [Tuxedo Milestone-2](https://github.com/w3f/Grant-Milestone-Delivery/pull/825)

| Number | Deliverable             | Accepted               | Link                                                                                                                                                                                                                                  | Evaluation Notes                                |
|--------|-------------------------|------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------|
| 0a.    | Licence                 | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/walt-id/waltid-nftkit/blob/main/LICENSE)                                                                                                                                                              | Correct Licence                                 |
| 0b.    | Documentation           | <ul><li>[x] </li></ul> | [Public Docs](https://docs.walt.id/v/nft-kit/ecosystems/polkadot)                                                                                                                                                                     | Well-structured documentation                   |
| 0c.    | Testing & Testing Guide | <ul><li>[x] </li></ul> | [Unique Network](https://docs.walt.id/v/nft-kit/ecosystems/polkadot/query-nfts/unique-network),<br/>[Parachain Networks](https://docs.walt.id/v/nft-kit/ecosystems/polkadot/query-nfts/parachain-networks)                            | Good work.                                      |
| 0d.    | Docker                  | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/walt-id/waltid-nftkit/blob/main/Dockerfile),<br/>[Published Images](https://hub.docker.com/u/waltid)                                                                                                  | Successfully built and working fine.            |
| 0e.    | Article                 | <ul><li>[x] </li></ul> | -                                                                                                                                                                                                                                     | Shared via email                               |
| 1.     | Architecture            | <ul><li>[x] </li></ul> | [Architecture](https://docs.walt.id/v/nft-kit/ecosystems/polkadot/architecture)                                                                                                                                                       | Well-explained Architecture with diagrams.      |
| 2.     | Wallet Kit              | <ul><li>[x] </li></ul> | [src](https://github.com/walt-id/waltid-walletkit),<br/>[docs](https://docs.walt.id/v/nft-kit/ecosystems/polkadot/nft-or-wallet)                                                                                                      | No major issues. Output shared below.           |
| 3.     | NFT Kit                 | <ul><li>[x] </li></ul> | [src](https://github.com/walt-id/waltid-nftkit),<br/>[docs](https://docs.walt.id/v/nft-kit/ecosystems/polkadot/nft-or-ownership-verification#nft-ownership-verification),<br/>[api](https://nftkit.walt-test.cloud/v2/nftkit/swagger) | No issues found                                 |
| 4.     | IDP Kit                 | <ul><li>[x] </li></ul> | [src](https://github.com/walt-id/waltid-idpkit),<br/>[docs](https://docs.walt.id/v/idpkit/concepts/identity-provision-via-nfts-with-polkadot)                                                                                         | Tested IDP Kit with CLI, and it's working good. |

## General Notes

It's an overall great delivery and Good work with explaining and structuring the Documentation and Architecture using helpful diagrams. 
As, it was mentioned in the repo that the wallet-connection is not production ready, so I'd expect you'd be working on that because it also gets connected even on cancelling the connection request from wallet.

Besides, I'd also expect you to look into the following issue I mentioned. The rest of the features were working great. Good work 👍

On connecting the `Polkadot wallet` to wallet Kit, I get redirected to `http://localhost:3000/nfts/Unique` and get this error:
```
Cannot read properties of undefined (reading '$route')
An error occurred while rendering the page. Check developer tools console for details.
```

However, on redirecting to `http://localhost:3000`, the error goes away and the rest of the features work fine including `Generate DID:iota` and `Generate DID:key`

## Generate DID:iota output
```
{
  "assertionMethod": [
    {
      "controller": "",
      "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV#ce0f69b016a049608f88aedcca882ea2",
      "type": ""
    }
  ],
  "authentication": [
    {
      "controller": "",
      "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV#ce0f69b016a049608f88aedcca882ea2",
      "type": ""
    }
  ],
  "capabilityDelegation": [
    {
      "controller": "",
      "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV#ce0f69b016a049608f88aedcca882ea2",
      "type": ""
    }
  ],
  "capabilityInvocation": [
    {
      "controller": "",
      "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV#ce0f69b016a049608f88aedcca882ea2",
      "type": ""
    }
  ],
  "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV",
  "keyAgreement": [
    {
      "controller": "",
      "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV#ce0f69b016a049608f88aedcca882ea2",
      "type": ""
    }
  ],
  "verificationMethod": [
    {
      "controller": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV",
      "id": "did:iota:5CUonQs9xGwdCZGBtYFEnKm7tLVY6wE73iXVCFzfnVUV#ce0f69b016a049608f88aedcca882ea2",
      "publicKeyMultibase": "z4KUq5T23QXTLQbcLJ6mgLbuWb3XBNoJNBCn61fjrAXib",
      "type": "Ed25519VerificationKey2018"
    }
  ]
}
```
## Generate DID:key output
```
{
  "assertionMethod": [
    {
      "controller": "",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "type": ""
    }
  ],
  "authentication": [
    {
      "controller": "",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "type": ""
    }
  ],
  "capabilityDelegation": [
    {
      "controller": "",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "type": ""
    }
  ],
  "capabilityInvocation": [
    {
      "controller": "",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "type": ""
    }
  ],
  "@context": [
    "https://www.w3.org/ns/did/v1"
  ],
  "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
  "keyAgreement": [
    {
      "controller": "",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6LSnGoxh8Y7NNgBj39vsf4qbHHWDv2d2aHnW3oxNUwfXRjU",
      "type": ""
    }
  ],
  "verificationMethod": [
    {
      "controller": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "publicKeyBase58": "7u382TSPMDqcCB3bu4hB3dnY2TojAVfCEVVz5teoRnDd",
      "type": "Ed25519VerificationKey2019"
    },
    {
      "controller": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111",
      "id": "did:key:z6MkmMJAchgpgmL5JftJadf1tjLXr35aaNuYvWQuvAcpM111#z6LSnGoxh8Y7NNgBj39vsf4qbHHWDv2d2aHnW3oxNUwfXRjU",
      "publicKeyBase58": "BbdoApjFGuxSdenAM1YtGh52NmVWKy7dd56Gt2J8p3xi",
      "type": "X25519KeyAgreementKey2019"
    }
  ]
}
```