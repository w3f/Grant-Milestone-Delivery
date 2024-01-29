# Evaluation


- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/eda237b52eed97ec9c24b38022cb971db2c49584/applications/dauth_network.md
- **Milestone:** 2
- **Kusama Identity:** [HHEEgVzcqL3kCXgsxSfJMbsTy8dxoTctuXtpY94n4s8F4pS](https://kusama.subscan.io/account/HHEEgVzcqL3kCXgsxSfJMbsTy8dxoTctuXtpY94n4s8F4pS)
- **Previously successfully merged evaluation:** All evaluations by PieWol


**Milestone 2**
| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- |------------- | ------------- |
| 0a. | License | <ul><li>[] </li></ul> | https://github.com/DAuth-Network/instant-proof/blob/main/LICENSE | Apache License | 
| 0b.  | Documentation |<ul><li>[] </li></ul> | https://openid3.gitbook.io/openid3-docs/openid3/introduction | please clarify | 
| 0c.  | Testing Guide | <ul><li>[x] </li></ul> | https://docs.google.com/document/d/1DiI4KGjeBw3-y4H0ZQGd7YsnQ_XoweWkfbmV2lQD66Q/edit?usp=sharing | okay| 
| 0d.  | Docker | <ul><li>[x] </li></ul> | docker.io/ksdev2023/ip01 | The Docker image to run a server. Works and passes unit tests | 
| 1. | SDK | <ul><li>[] </li></ul> | [SDK usage](https://openid3.gitbook.io/openid3-docs/developers/decentralized-authentication-sdk) and [SDK code](https://github.com/DAuth-Network/dauth/blob/main/packages/core/README.MD) | nice walkthrough and examples. Where are the wallet integrations? | 
| 2.  |  Support mainstream authentication methods | <ul><li>[x] </li></ul> |  https://zk-demo.openid3.xyz/ | good, but google authorization doesn't work | 

## General Notes

- [x] unit tests

  <details>
    <summary>Output</summary>
        
    :~/incubator-teaclave-sgx-sdk/samplecode/instant-proof/bin# ./app test
    running ec_test
    
    
    start running tests    
    testing test_encode_hex ... ok!
    testing test_decode_hex ... ok!
    testing test_decode_hex_with_spaces ... ok!
    testing test_decode_hex_with_invalid_characters ... ok!  
    testing test_session_register ... ok!  
    testing test_session_register_invalid ... ok!  
    testing test_session_update ... ok!  
    testing test_session_close ... ok!  
    testing test_inner_account_default ... ok!  
    testing test_inner_account_build ... ok!  
    testing test_pub_k_from_user ... ok!  
    testing test_as_u32_be_with_valid_input ... ok!  
    testing test_as_u32_be_with_all_zero_input ... ok!  
    testing test_as_u32_be_with_all_one_input ... ok!  
    testing test_rand ... ok!  
    testing test_as_u32_le_with_valid_input ... ok!  
    testing test_as_u32_le_with_all_zero_input ... ok!  
    testing test_as_u32_le_with_all_one_input ... ok!  
    testing test_encrypt_decrypt ... ok!  
    testing test_encrypt_decrypt_invalid ... ok!  
    
    test result ok. 20 tested, 20 passed, 0 failed  
    execute tests in enclave done.
</details>

- [x] DAuth webapp test via https://zk-demo.openid3.xyz/

    <details>
    <summary>Output</summary>
    Provider: TWITTER

    Zero-Knowledge Prover Done!

    
    Step 1: Generate a client proof.
    
    Step 2: Aggregate a batch of client proof.
    
    Step 3: Snarkify(convert) the aggregated proof.


    Zero-Knowledge Prover Status
    {
    "isInDb":true
    "aggregationBatch":7
    "clientProven":true
    "sealedInBatch":true
    "aggregated":true
    "converted":true
    "receivedAt":Wed, Jan 24, 2024, 10:16 PM
    "proofReceivedAt":Wed, Jan 24, 2024, 10:17 PM
    "aggregationSealedAt":Wed, Jan 24, 2024, 10:18 PM
    "aggregatedAt":Wed, Jan 24, 2024, 10:18 PM
    "convertedAt":Wed, Jan 24, 2024, 10:21 PM
    "positionInBatch":1
    "publicInputs":"5fcb4ca8cb2b6e3810bab48c0ae72707dcc439e9dded059e43..."
    }

    Your JWT Proof
    {
    "batchId":7
    "numOfProofs":1
    "isSealed":true
    "isAggregated":true
    "isConverted":true
    "maxInclusionPriority":1
    "minInclusionPriority":1
    "sealedAt":Wed, Jan 24, 2024, 10:18 PM
    "aggregatedAt":Wed, Jan 24, 2024, 10:18 PM
    "convertedAt":Wed, Jan 24, 2024, 10:21 PM
    "merkleRoot":"0x1fcb4ca8cb2b6e3810bab48c0ae72707dcc439e9dded059e..."
    }

    Queue Status
    {
    "totalClientRequests":7
    "pendingClientProofRequests":0
    "lastClientProofTime":Wed, Jan 24, 2024, 10:17 PM
    "lastProcessedPriority":1
    "latestAggregationBatchIndex":8
    "lastBatchSealingTime":Wed, Jan 24, 2024, 10:18 PM
    "lastBatchAggregationTime":Wed, Jan 24, 2024, 10:18 PM
    "latestConvertedBatchIndex":7
    "lastConvertedTime":Wed, Jan 24, 2024, 10:21 PM
    }

    Merkle Proof
    {
    "root":"5fcb4ca8cb2b6e3810bab48c0ae72707dcc439e9dded059e43..."
    "proof":[]
    "index":0
    }

    The Aggregation Batch & Proofs
    {
    "aggregation_index":7
    "aggregated_proof":{
    "proof_with_public_inputs":"0x7b2270726f6f66223a7b2277697265735f636170223a5b22..."
    "verifier":"0x7b22636f6e7374616e74735f7369676d61735f636170223a..."
    }
    "converted_proof":{
    "input_hash":"0x1fcb4ca8cb2b6e3810bab48c0ae72707dcc439e9dded059e..."
    "verifier_digest":"0x2874851f7a094dc67dc4cc50e175d74f1a7289e56c98a3e1..."
    "proof":"0x1ed6116348e5181fa9aa21b2e47416351490035cbdc5e596..."
    }
    }
</details>

## Differences between delivery and application

# License
You stated that the grant deliveries will be released under Apache 2.0 license but for the SDK no license can be found. 

# Documentation
The regular documentation looks fine to me but in the application you stated that you will provide *inline* documentation aswell. Please provide a link in the delivery PR to the relevant code that you have created inline documentation for. 

# SDK wallet integrations

> Cooperation with multiple wallet providers, they will integrate DAuth in their authentication flow

Was written into the application. Can you please provide proof for the multiple integrations you achieved with wallet providers?


## SDK
I have not tested the SDK integration tutorials or SDK itself as I don't have a project to integrate it into but the docs look good and I'm convinced that with the explanations and examples devs will be able to integrate without problems.

## WebApp Demo
The web-app demo you provided has a good ui to display all elements and steps of this DAuth process. If you offer google authorization it would be good to have the appplication out of the development stage so arbitrary google accounts can be used to test it.

## Summary
Most of the deliverables match the requirements agreed upon in the application but a few details that I missed earlier still need clarification.





