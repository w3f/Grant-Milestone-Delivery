# Evaluation

- **Status:** Accepted
- **Application Document:** (private application)
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [acurast kotlin sdk license (MIT)](https://github.com/Acurast/acurast-kotlin-sdk/blob/main/LICENSE), [acurast-processor (GPLv3)](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/LICENSE) | ~~The [acurast-processor repo](https://github.com/Acurast/data-processor) is missing the LICENSE file~~ |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/README.md) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Tests | <ul><li>[x] </li></ul> | [Blockchaintest.kt](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/test/java/com/acurast/attested/executor/protocol/tezos/TezosTest.kt), [EncodingTest.kt](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/test/java/com/acurast/attested/executor/protocol/tezos/MichelineTest.kt) | See [Tests Feedback](#tests-feedback) |
| 0d. | Gradle Scripts | <ul><li>[x] </li></ul> | [gradle script](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/gradlew) | - |
| 1. | Kotlin Parachain RPC Module | <ul><li>[x] </li></ul> | [RPC Module](https://github.com/Acurast/acurast-kotlin-sdk/blob/d08a53b451990026ae1f176bca19ac2807befe42/rpc/src/main/kotlin/acurast/rpc/rpc.kt) | Module to craft messages that can be communicated to the parachain. |
| 2. | Kotlin Transaction Crafter | <ul><li>[x] </li></ul> | [TX Crafting module](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/protocol/acurast/AcurastRPC.kt) | Module used to create signable transactions that can be broadcasted and included on the parachain. |
| 3. | Kotlin HSM signing Module | <ul><li>[x] </li></ul> | [HSM Signing Module](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/crypto/curves/P256.kt) | Module used to sign messages crafted by the previous module. These messages are signed directly using the Secure Enclave (HSM) on the device which is secured and attested by the Google Key Attestation. |
| 4. | Kotlin Key Attestation Module | <ul><li>[x] </li></ul> | [`submitAttestation` function](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/protocol/acurast/AcurastRPC.kt#L242) | Module used to create a validatable attestation linked to the key used for signing. |
| 5. | Kotlin Trusted Execution Engine/Virtual Machine | <ul><li>[x] </li></ul> | [`execute` function](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/v8/V8Executor.kt#L209) | Module used to execute arbitrary code in a trusted execution environment. This environment will accept scripts supported by the V8 engine and has the property that the resulting output is verifiable by any third-party. |
| 6. | Kotlin Secure Networking Modules | <ul><li>[x] </li></ul> | [`Networking Module`](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/utils/Networking.kt) | Module used to enable the trusted execution environment to perform HTTPS calls that can be verifiably certificate pinned. |
| 7. | Kotlin Job Scheduler | <ul><li>[x] </li></ul> | [Scheduler](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/ui/MainActivity.kt) | Module used to fetch a job from the parachain and schedule it for execution in the background. |
| 8. | Kotlin Identity | <ul><li>[x] </li></ul> | [Acurast Module](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/protocol/acurast) | Module used to display the identity of the data transmitter. |
| 9. | Kotlin IPFS | <ul><li>[x] </li></ul> | [IPFS Module](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/app/src/main/java/com/acurast/attested/executor/utils/IPFS.kt) | Module used to fetch the scheduled script from IPFS |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- The [README](https://github.com/Acurast/data-processor/blob/228cd3204c9903b87e9e6faad3249e1870e47719/README.md) is sparse but contains the most basic instructions required to build, test and use the android-based processor app

- ~~Inline comments within the Kotlin files are currently almost non-existent. I understand that clean code can document itself to a certain extent, but I think it would be helpful to add some basic inline comments to the core logic at least.~~ => Inline comments have [been added](https://github.com/Acurast/data-processor/commit/ef39a4d061831862ffe53aafb6a0805f9be47a44)

- ~~Android APK can be built successfully, however, there are quite a few warnings~~ => fixed

    ```bash
    acurast-processor % ./gradlew assemble 
    
    BUILD SUCCESSFUL in 6s
    160 actionable tasks: 2 executed, 158 up-to-date
    ```

### Tests Feedback

- All the functionality was successfully smoke-tested

- ~~Currently, there are very few tests available: 3 within `BlockchainTest.kt` and 8 within `EncodingTest.kt`~~ 

- According to the spec, the core logic should be completely covered by tests. Examples of core logic that is currently not covered by automated tests include, but are not limited to:

    - `V8Executor.kt` => tests added 
    - `Acurast.kt` => tests added (AcurastTest.kt)
    - `App.kt` => tests added
    - `IPFS.kt` => tests added (IPFSTest.kt)
    - `Package.kt` => tests won't be added, because manual interaction is required
    - `Lockdown.kt` => tests won't be added, because manual interaction is required

- The tests pass but it would be nice if the output was more detailed (e.g. showing, which tests were run):

    ```bash
    % ./gradlew test

    BUILD SUCCESSFUL in 2s
    89 actionable tasks: 89 up-to-date   
    ```
