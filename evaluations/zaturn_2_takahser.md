# Evaluation

- **Status:** In Progress
- **Application Document:** (private application)
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [acurast kotlin sdk license (MIT)](https://github.com/Acurast/acurast-kotlin-sdk/blob/main/LICENSE) | The [acurast-processor repo](https://github.com/Acurast/acurast-processor) is missing the LICENSE file |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [README](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/README.md) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Tests | <ul><li>[ ] </li></ul> | [Blockchaintest.kt](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/test/java/com/acurast/attested/executor/BlockchainTest.kt), [EncodingTest.kt](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/test/java/com/acurast/attested/executor/EncodingTest.kt) | See [Tests Feedback](#tests-feedback) |
| 0d. | Gradle Scripts | <ul><li>[x] </li></ul> | [gradle script](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/gradlew) | - |
| 1. | Kotlin Parachain RPC Module | <ul><li>[x] </li></ul> | [RPC Module](https://github.com/Acurast/acurast-kotlin-sdk/blob/d08a53b451990026ae1f176bca19ac2807befe42/rpc/src/main/kotlin/acurast/rpc/rpc.kt) | Module to craft messages that can be communicated to the parachain. |
| 2. | Kotlin Transaction Crafter | <ul><li>[x] </li></ul> | [TX Crafting module](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/utils/Acurast.kt) | Module used to create signable transactions that can be broadcasted and included on the parachain. |
| 3. | Kotlin HSM signing Module | <ul><li>[x] </li></ul> | [HSM Signing Module](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/V8Executor.kt) | Module used to sign messages crafted by the previous module. These messages are signed directly using the Secure Enclave (HSM) on the device which is secured and attested by the Google Key Attestation. |
| 4. | Kotlin Key Attestation Module | <ul><li>[x] </li></ul> | [`submitAttestation` function](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/utils/Acurast.kt#L134) | Module used to create a validatable attestation linked to the key used for signing. |
| 5. | Kotlin Trusted Execution Engine/Virtual Machine | <ul><li>[x] </li></ul> | [`execute` function](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/V8Executor.kt#L185) | Module used to execute arbitrary code in a trusted execution environment. This environment will accept scripts supported by the V8 engine and has the property that the resulting output is verifiable by any third-party. |
| 6. | Kotlin Secure Networking Modules | <ul><li>[x] </li></ul> | [`Networking Module`](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/utils/Networking.kt) | Module used to enable the trusted execution environment to perform HTTPS calls that can be verifiably certificate pinned. |
| 7. | Kotlin Job Scheduler | <ul><li>[x] </li></ul> | [Scheduler](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/MainActivity.kt) | Module used to fetch a job from the parachain and schedule it for execution in the background. |
| 8. | Kotlin Identity | <ul><li>[x] </li></ul> | [Acurast Module](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/utils/Acurast.kt) | Module used to display the identity of the data transmitter. |
| 9. | Kotlin IPFS | <ul><li>[x] </li></ul> | [IPFS Module](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/app/src/main/java/com/acurast/attested/executor/utils/IPFS.kt) | Module used to fetch the scheduled script from IPFS |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- The [README](https://github.com/Acurast/acurast-processor/blob/58eaa57c0f9fababc094533e7a1421fd0942a76e/README.md) is sparse but contains the most basic instructions required to build, test and use the android-based processor app

- Inline comments within the Kotlin files are currently almost non-existent. I understand that clean code can document itself to a certain extent, but I think it would be helpful to add some basic inline comments to the core logic at least.

- Android APK can be built successfully, however, there are quite a few warnings:

    ```bash
    % ./gradlew assemble 

    Starting a Gradle Daemon, 1 incompatible Daemon could not be reused, use --status for details

    > Task :app:processMainnetDebugMainManifest
    /Users/xxx/repos/acurast-processor/app/src/main/AndroidManifest.xml:10:5-79 Warning:
            Element uses-permission#android.permission.SCHEDULE_EXACT_ALARM at AndroidManifest.xml:10:5-79 duplicated with element declared at AndroidManifest.xml:7:5-79

    > Task :app:stripMainnetDebugDebugSymbols
    Unable to strip the following libraries, packaging them as they are: libj2v8.so.

    > Task :app:process_testnetDebugMainManifest
    /Users/xxx/repos/acurast-processor/app/src/main/AndroidManifest.xml:10:5-79 Warning:
            Element uses-permission#android.permission.SCHEDULE_EXACT_ALARM at AndroidManifest.xml:10:5-79 duplicated with element declared at AndroidManifest.xml:7:5-79

    > Task :app:processMainnetReleaseMainManifest
    /Users/xxx/repos/acurast-processor/app/src/main/AndroidManifest.xml:10:5-79 Warning:
            Element uses-permission#android.permission.SCHEDULE_EXACT_ALARM at AndroidManifest.xml:10:5-79 duplicated with element declared at AndroidManifest.xml:7:5-79

    > Task :app:stripMainnetReleaseDebugSymbols
    Unable to strip the following libraries, packaging them as they are: libj2v8.so.

    > Task :app:extractMainnetReleaseNativeSymbolTables
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/mainnetRelease/out/lib/armeabi-v7a/libj2v8.so because unable to locate the objcopy executable for the armeabi-v7a ABI.
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/mainnetRelease/out/lib/x86/libj2v8.so because unable to locate the objcopy executable for the x86 ABI.
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/mainnetRelease/out/lib/arm64-v8a/libj2v8.so because unable to locate the objcopy executable for the arm64-v8a ABI.
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/mainnetRelease/out/lib/x86_64/libj2v8.so because unable to locate the objcopy executable for the x86_64 ABI.

    > Task :app:process_testnetReleaseMainManifest
    /Users/xxx/repos/acurast-processor/app/src/main/AndroidManifest.xml:10:5-79 Warning:
            Element uses-permission#android.permission.SCHEDULE_EXACT_ALARM at AndroidManifest.xml:10:5-79 duplicated with element declared at AndroidManifest.xml:7:5-79

    > Task :app:strip_testnetReleaseDebugSymbols
    Unable to strip the following libraries, packaging them as they are: libj2v8.so.

    > Task :app:extract_testnetReleaseNativeSymbolTables
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/_testnetRelease/out/lib/armeabi-v7a/libj2v8.so because unable to locate the objcopy executable for the armeabi-v7a ABI.
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/_testnetRelease/out/lib/x86/libj2v8.so because unable to locate the objcopy executable for the x86 ABI.
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/_testnetRelease/out/lib/arm64-v8a/libj2v8.so because unable to locate the objcopy executable for the arm64-v8a ABI.
    Unable to extract native debug metadata from /Users/xxx/repos/acurast-processor/app/build/intermediates/merged_native_libs/_testnetRelease/out/lib/x86_64/libj2v8.so because unable to locate the objcopy executable for the x86_64 ABI.

    > Task :app:compileMainnetDebugKotlin
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Package.kt: (24, 17): Variable 'c' initializer is redundant
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (132, 13): Parameter 'nonce' is never used
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (133, 13): Parameter 'successCallback' is never used
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (137, 17): Name shadowed: nonce
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/lockdown/Lockdown.kt: (42, 37): 'getInstalledApplications(Int): (Mutable)List<ApplicationInfo!>' is deprecated. Deprecated in Java

    > Task :app:compileMainnetReleaseKotlin
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Package.kt: (24, 17): Variable 'c' initializer is redundant
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (132, 13): Parameter 'nonce' is never used
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (133, 13): Parameter 'successCallback' is never used
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (137, 17): Name shadowed: nonce
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/lockdown/Lockdown.kt: (42, 37): 'getInstalledApplications(Int): (Mutable)List<ApplicationInfo!>' is deprecated. Deprecated in Java

    > Task :app:compile_testnetReleaseKotlin
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Package.kt: (24, 17): Variable 'c' initializer is redundant
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (132, 13): Parameter 'nonce' is never used
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (133, 13): Parameter 'successCallback' is never used
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/attested/executor/utils/Scheduler.kt: (137, 17): Name shadowed: nonce
    w: /Users/xxx/repos/acurast-processor/app/src/main/java/com/acurast/lockdown/Lockdown.kt: (42, 37): 'getInstalledApplications(Int): (Mutable)List<ApplicationInfo!>' is deprecated. Deprecated in Java

    BUILD SUCCESSFUL in 3m 18s
    156 actionable tasks: 128 executed, 28 up-to-date
    ```

### Tests Feedback

- All the functionality was successfully smoke-tested

- Currently, there are very few tests available: 3 within `BlockchainTest.kt` and 8 within `EncodingTest.kt`

- According to the spec, the core logic should be completely covered by tests. Examples of core logic that is currently not covered by automated tests include, but are not limited to:

    - `V8Executor.kt`
    - `Acurast.kt`
    - `App.kt`
    - `IPFS.kt`
    - `Package.kt`
    - `Lockdown.kt`

- The tests pass but it would be nice if the output was more detailed (e.g. showing, which tests were run):

    ```bash
    % ./gradlew test

    BUILD SUCCESSFUL in 2s
    89 actionable tasks: 89 up-to-date   
    ```
