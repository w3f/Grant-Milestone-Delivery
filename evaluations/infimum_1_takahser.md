# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/infimum.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/rhysbalevicius/infimum/blob/aed324e94084f734d8a6110b2a41ff905349edb1/LICENSE) | - |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | [Guide](https://github.com/rhysbalevicius/infimum/tree/aed324e94084f734d8a6110b2a41ff905349edb1#usage) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Testing | <ul><li>[ ] </li></ul> | | See [Testing Feedback](#testing-feedback) |
| 1a. | Substrate pallet | <ul><li>[ ] </li></ul> | (will evaluate once 0b., 0c. are fixed) | Spec: Methods 1.ii.a to 1.ii.i (listed under deliverables in the project overview) without verification functionality provided by Groth16 proving system. |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Note: The builds were ran on a MacBook Pro M2, MacOs 14.3

### Documentation Feedback

- [] Docker-based Build currently fails
  
  <details>
    <summary>Output</summary>

    ```zsh
    infimum % docker compose --profile dev up

    [+] Running 1/1
    ! pallet-base Warning                                                                                                             4.0s 
    [+] Building 30.8s (8/15)                                                                                          docker:desktop-linux
    => [pallet-base internal] load build definition from Dockerfile.base                                                              0.0s
    => => transferring dockerfile: 801B                                                                                               0.0s
    => [pallet-base internal] load .dockerignore                                                                                      0.0s
    => => transferring context: 2B                                                                                                    0.0s
    => [pallet-base internal] load metadata for docker.io/library/rust:latest                                                         0.9s
    => [pallet-base  1/11] FROM docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8  20.6s
    => => resolve docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2               0.0s
    => => sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2 5.26kB / 5.26kB                                     0.0s
    => => sha256:48e4d3984b3d5ba7b00f452541c7076dacffd19774426be61555b841944a09ed 1.63kB / 1.63kB                                     0.0s
    => => sha256:ddf3d03921975c190f70241530e658ba601a6e2981e5944e95a065d4d4f612fc 3.94kB / 3.94kB                                     0.0s
    => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6 23.58MB / 23.58MB                                   2.8s
    => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c 49.59MB / 49.59MB                                   3.9s
    => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641 63.99MB / 63.99MB                                   5.3s
    => => extracting sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c                                          1.6s
    => => extracting sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6                                          0.4s
    => => extracting sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641                                          1.8s
    => => sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2 202.50MB / 202.50MB                                11.5s
    => => sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e 247.93MB / 247.93MB                                14.0s
    => => extracting sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2                                          4.4s
    => => extracting sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e                                          3.9s
    => [pallet-base internal] load build context                                                                                      0.3s
    => => transferring context: 27.37MB                                                                                               0.2s
    => [pallet-base  2/11] RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && echo America/New_York > /etc/timezone   0.5s
    => [pallet-base  3/11] RUN rustup update     && rustup update nightly     && rustup target add wasm32-unknown-unknown            18.8s
    => ERROR [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libs  2.1s
    ------
    > [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler:
    0.764 Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
    1.590 Err:1 http://deb.debian.org/debian bookworm InRelease
    1.590   At least one invalid signature was encountered.
    1.682 Get:2 http://deb.debian.org/debian bookworm-updates InRelease [52.1 kB]
    1.756 Err:2 http://deb.debian.org/debian bookworm-updates InRelease
    1.756   At least one invalid signature was encountered.
    1.868 Get:3 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
    2.040 Err:3 http://deb.debian.org/debian-security bookworm-security InRelease
    2.040   At least one invalid signature was encountered.
    2.042 Reading package lists...
    2.048 W: GPG error: http://deb.debian.org/debian bookworm InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian bookworm-updates InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm-updates InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian-security bookworm-security InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian-security bookworm-security InRelease' is not signed.
    ------
    failed to solve: process "/bin/sh -c apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler" did not complete successfully: exit code: 100
    ```
  </details>

### Testing Feedback

- [x] Tests pass ~~, but there are a lot of warnings~~ => warnings got fixed in newest revision
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo +nightly test --manifest-path=./pallet/Cargo.toml
        Updating git repository `https://github.com/paritytech/polkadot-sdk.git`
      Compiling sp-std v14.0.0 (https://github.com/paritytech/polkadot-sdk.git#12e5e19c)
      Compiling pallet-infimum v4.0.0-dev (/Users/seraya/repos/infimum/pallet)
        Finished test [unoptimized + debuginfo] target(s) in 15m 11s
        Running unittests src/lib.rs (pallet/target/debug/deps/pallet_infimum-b22f4ccecc1cbfed)

    running 23 tests
    test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
    test tests::merge_poll_state ... ok
    test tests::coordinator_key_rotation_malformed ... ok
    test tests::coordinator_key_rotation_during_poll ... ok
    test tests::coordinator_registration_malformed ... ok
    test tests::coordinator_key_rotation ... ok
    test tests::coordinator_registration ... ok
    test tests::coordinator_registration_duplicated ... ok
    test tests::commit_outcome ... ok
    test tests::participant_interaction_outside_period ... ok
    test tests::participant_registration_no_poll ... ok
    test tests::poll_creation ... ok
    test tests::poll_nullify_during_extant ... ok
    test tests::poll_creation_by_non_coordinator ... ok
    test tests::poll_creation_during_extant ... ok
    test tests::poll_creation_malformed ... ok
    test tests::register_as_participant_outside_period ... ok
    test tests::poll_creation_beyond_limit ... ok
    test tests::register_as_participant ... ok
    test tests::participant_limit_reached ... ok
    test tests::participant_interaction ... ok
    test tests::poll_nullify_missing_outcome ... ok
    test tests::participant_interaction_limit ... ok

    test result: ok. 23 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.06s

      Doc-tests pallet-infimum

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s
    ```
  </details>

- [] Docker-based tests can't be run since the build fails:

  <details>
    <summary>Output</summary>

    ```zsh
    infimum % docker compose --profile test up

    [+] Running 1/1
    ! pallet-base Warning                                                                                                             4.5s 
    [+] Building 46.5s (8/15)                                                                                          docker:desktop-linux
    => [pallet-base internal] load build definition from Dockerfile.base                                                              0.0s
    => => transferring dockerfile: 801B                                                                                               0.0s
    => [pallet-base internal] load .dockerignore                                                                                      0.0s
    => => transferring context: 2B                                                                                                    0.0s
    => [pallet-base internal] load metadata for docker.io/library/rust:latest                                                         4.5s
    => [pallet-base internal] load build context                                                                                      0.0s
    => => transferring context: 185.52kB                                                                                              0.0s
    => [pallet-base  1/11] FROM docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8  20.6s
    => => resolve docker.io/library/rust:latest@sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2               0.0s
    => => sha256:e1730890f6646c5d896cc6867c064fc986b6160f362f3cac7fe425c94ccbd8f2 5.26kB / 5.26kB                                     0.0s
    => => sha256:48e4d3984b3d5ba7b00f452541c7076dacffd19774426be61555b841944a09ed 1.63kB / 1.63kB                                     0.0s
    => => sha256:ddf3d03921975c190f70241530e658ba601a6e2981e5944e95a065d4d4f612fc 3.94kB / 3.94kB                                     0.0s
    => => sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c 49.59MB / 49.59MB                                   3.9s
    => => sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6 23.58MB / 23.58MB                                   2.8s
    => => sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641 63.99MB / 63.99MB                                   5.3s
    => => sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2 202.50MB / 202.50MB                                11.5s
    => => extracting sha256:5665c1f9a9e17acd68ae05b2839df402eac34afdd095f8c115f09886d757840c                                          1.6s
    => => sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e 247.93MB / 247.93MB                                14.0s
    => => extracting sha256:f419b1a62fc83850ab3cb43274970bb20a18ae6e674535478a48f5bee11559b6                                          0.4s
    => => extracting sha256:76b4f1810f998c1f1580e2404b2e7fed8e264902d898bbe531443ea9789b7641                                          1.8s
    => => extracting sha256:1c176cbf649709b5d8a03720a6c53e18e33ad50feef33abe83c5ae95c5aabdb2                                          4.4s
    => => extracting sha256:6e5246d4f6ea6de0e6b0aa7c8e62640711bc918625b3e71c09c3cbcea9735e6e                                          3.9s
    => [pallet-base  2/11] RUN ln -snf /usr/share/zoneinfo/America/New_York /etc/localtime && echo America/New_York > /etc/timezone   0.5s
    => [pallet-base  3/11] RUN rustup update     && rustup update nightly     && rustup target add wasm32-unknown-unknown            18.8s
    => ERROR [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libs  2.1s
    ------
    > [pallet-base  4/11] RUN apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler:
    0.764 Get:1 http://deb.debian.org/debian bookworm InRelease [151 kB]
    1.590 Err:1 http://deb.debian.org/debian bookworm InRelease
    1.590   At least one invalid signature was encountered.
    1.682 Get:2 http://deb.debian.org/debian bookworm-updates InRelease [52.1 kB]
    1.756 Err:2 http://deb.debian.org/debian bookworm-updates InRelease
    1.756   At least one invalid signature was encountered.
    1.868 Get:3 http://deb.debian.org/debian-security bookworm-security InRelease [48.0 kB]
    2.040 Err:3 http://deb.debian.org/debian-security bookworm-security InRelease
    2.040   At least one invalid signature was encountered.
    2.042 Reading package lists...
    2.048 W: GPG error: http://deb.debian.org/debian bookworm InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian bookworm-updates InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian bookworm-updates InRelease' is not signed.
    2.048 W: GPG error: http://deb.debian.org/debian-security bookworm-security InRelease: At least one invalid signature was encountered.
    2.048 E: The repository 'http://deb.debian.org/debian-security bookworm-security InRelease' is not signed.
    ------
    failed to solve: process "/bin/sh -c apt-get update -y && apt-get install -y     build-essential     clang     curl     git     libssl-dev     protobuf-compiler" did not complete successfully: exit code: 100
    ```
  </details>
