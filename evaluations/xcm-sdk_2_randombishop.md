# Evaluation

- **Status:** ACCEPTED
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-sdk.md
- **Milestone:** 2
- **Kusama Identity:** randombishop (https://sub.id/5Gnixfp6vnznRkr91JgwkxYnCJCyHr8EaBzYfFsUKcTMzVYF)
- **Previously successfully merged evaluation:** [Milestone 1](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/xcm-sdk_1_dsm-w3f.md)

| Number | Deliverable                  | Accepted | Link                                                                                                                      | Evaluation Notes                                              |
|--------|------------------------------|----------|---------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------|
| 0a.    | License                      | Yes      | https://github.com/blockcoders/xcm-sdk/blob/main/LICENSE                                                                  | MIT                                                           |
| 0b.    | Documentation                | Yes      | https://github.com/blockcoders/xcm-sdk/blob/main/README.md, https://github.com/blockcoders/xcm-sdk/blob/main/README-es.md | Good documentation                                            |
| 0c.    | Testing Guide                | Yes      | https://github.com/blockcoders/xcm-sdk#testing                                                                            | OK                                                            |
| 0d.    | Article                      | Yes      | https://docs.google.com/document/d/1W46rTJT4ROkhssXSUoWx8zHEXY6njA_akNs0ldPjgeY/edit?usp=sharing                          | Article is still a draft and not yet updated post milestone 2 |
| 1.     | CLI tool                     | Yes      | https://github.com/blockcoders/xcm-sdk#cli-usage                                                                          | OK                                                            |
| 2.     | Add support for new messages | Yes      | https://github.com/blockcoders/xcm-sdk#support-for-other-pallets-and-methods                                              | OK                                                            |
| 3.     | Testing                      | Yes      | https://coveralls.io/github/blockcoders/xcm-sdk?branch=main                                                               | 91% Coverage                                                  |

## Logs

- npm run test
```
> xcm-sdk@0.1.0-rc.2 test
> mocha -t 120000 --require ts-node/register src/**/*.spec.ts --exit



  Provider
    ✔ should instance
    ✔ should save inject signer
    limited teleport assets
      ✔ should send teleport asset from relaychain to parachain
      ✔ should send teleport asset from relaychain to parachain with injector
      ✔ should send teleport asset from parachain to relaychain
      ✔ should send teleport asset from parachain to relaychain account native format
      ✔ should show error after send tx
      ✔ should show error
    teleport assets
      ✔ should send asset from relaychain to parachain
      ✔ should show error
    limited reserve transfer assets
      ✔ should transfer asset from relaychain to parachain
      ✔ should show error
    reserve transfer assets
      ✔ should transfer asset from relaychain to parachain
      ✔ should show error
    generic extrinsic
      ✔ should call xcmPallet and reserveTransferAssets method
      ✔ should show error

  Utils
    getPallet
      ✔ should return xcmPallet
      ✔ should return polkadotXcm
      ✔ should return error
      ✔ should return custom pallet (xTokens)
      ✔ should return unsupported custom pallet (xTokens)
    parseBody
      ✔ should return object body as an array
      ✔ should return array body as an array


  23 passing (44ms)
```


- Installing CLI executable with npm: 0 vulnerabilities
```
added 89 packages, and audited 90 packages in 3s

6 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```



## General notes

- SDK works as expected and documentation and tests cover all the codebase pretty well.
- 
- Good delivery.