# Evaluation

- **Status:** In Progress
- **Application Document:** [High Availability Validator Setup](https://github.com/w3f/Grants-Program/blob/master/applications/High_availability_validator_setup.md)
- **Milestone:** 3
- **Kusama Identity:** Eexv1mKLiCidz2gGh6vfowtXgSSc7mvD4xEb2ji998W4DPs
- **Previously successfully merged evaluation:** All evaluations by ali-usama

| Number | Deliverable                     | Accepted               | Link                                                                                                                                                                                     | Evaluation Notes                                                          |
|--------|---------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|
| 0a.    | Licence                         | <ul><li>[x] </li></ul> | [Unlicense](https://github.com/bright/substrate-raft-setup/blob/milestone-3/LICENSE)                                                                                                     | Correct Licence                                                           |
| 0b.    | Documentation                   | <ul><li>[x] </li></ul> | [Setup Docs](https://github.com/bright/substrate-raft-setup/blob/milestone-3/docs/rust-setup.md)<br/>[ReadMe](https://github.com/bright/substrate-raft-setup/blob/milestone-3/README.md) | Well-structured doc files and inline documentation is well-explained too. |
| 0c.    | Testing Guide                   | <ul><li>[x] </li></ul> | `cargo test`                                                                                                                                                                             | `cargo test` fails with the following output.                             |
| 0d.    | Docker                          | <ul><li>[x] </li></ul> | [Running locally](https://github.com/bright/substrate-raft-setup/blob/milestone-3/README.md#running-locally-1)                                                                           | Builds and runs successfully.                                             |
| 1.     | Run necessary Raft services     | <ul><li>[x] </li></ul> | [Running docker-compose](https://github.com/bright/substrate-raft-setup/blob/milestone-3/README.md#running-docker-compose-1)                                                             | Working as per the application                                            |
| 2.     | Integrate Raft client into Node | <ul><li>[x] </li></ul> | [Running docker-compose](https://github.com/bright/substrate-raft-setup/blob/milestone-3/README.md#running-docker-compose-1)                                                             | Working as per the application                                            |
| 3.     | Integration test                | <ul><li>[x] </li></ul> | `docker-compose up`                                                                                                                                                                      | Builds and runs successfully.                                             |


## General Notes

The delivery is well-structured and well-documented, however, the only issue I found is tha failing `cargo test` command in the root directory of the terminal. I tried with updated and older rustc versions too, but both failed with the same error mentioned below.

### `cargo test` output
```
CMake Warning:
    Manually-specified variables were not used by the project:

      CMAKE_ASM_COMPILER
      CMAKE_ASM_FLAGS


  gmake: warning: -j8 forced in submake: resetting jobserver mode.
  /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/grpcio-sys-0.8.1/grpc/third_party/abseil-cpp/absl/synchronization/internal/graphcycles.cc: In member function ‘void absl::lts_2020_09_23::synchronization_internal::GraphCycles::RemoveNode(void*)’:
  /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/grpcio-sys-0.8.1/grpc/third_party/abseil-cpp/absl/synchronization/internal/graphcycles.cc:451:26: error: ‘numeric_limits’ is not a member of ‘std’
    451 |   if (x->version == std::numeric_limits<uint32_t>::max()) {
        |                          ^~~~~~~~~~~~~~
  /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/grpcio-sys-0.8.1/grpc/third_party/abseil-cpp/absl/synchronization/internal/graphcycles.cc:451:49: error: expected primary-expression before ‘>’ token
    451 |   if (x->version == std::numeric_limits<uint32_t>::max()) {
        |                                                 ^
  /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/grpcio-sys-0.8.1/grpc/third_party/abseil-cpp/absl/synchronization/internal/graphcycles.cc:451:52: error: ‘::max’ has not been declared; did you mean ‘std::max’?
    451 |   if (x->version == std::numeric_limits<uint32_t>::max()) {
        |                                                    ^~~
        |                                                    std::max
  In file included from /usr/include/c++/11/algorithm:62,
                   from /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/grpcio-sys-0.8.1/grpc/third_party/abseil-cpp/absl/synchronization/internal/graphcycles.cc:38:
  /usr/include/c++/11/bits/stl_algo.h:3467:5: note: ‘std::max’ declared here
   3467 |     max(initializer_list<_Tp> __l, _Compare __comp)
        |     ^~~
  gmake[3]: *** [third_party/abseil-cpp/absl/synchronization/CMakeFiles/absl_graphcycles_internal.dir/build.make:76: third_party/abseil-cpp/absl/synchronization/CMakeFiles/absl_graphcycles_internal.dir/internal/graphcycles.cc.o] Error 1
  gmake[2]: *** [CMakeFiles/Makefile2:3153: third_party/abseil-cpp/absl/synchronization/CMakeFiles/absl_graphcycles_internal.dir/all] Error 2
  gmake[2]: *** Waiting for unfinished jobs....
  gmake[1]: *** [CMakeFiles/Makefile2:848: CMakeFiles/grpc.dir/rule] Error 2
  gmake: *** [Makefile:247: grpc] Error 2
  thread 'main' panicked at '
  command did not execute successfully, got: exit status: 2

  build script failed, must exit now', /home/user/.cargo/registry/src/index.crates.io-6f17d22bba15001f/cmake-0.1.48/src/lib.rs:975:5
  note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace
```

### `bash docker/build.sh` output
```
Building bright/substrate-raft-setup:latest docker image, hang on!
[+] Building 2676.3s (15/15) FINISHED                                                                                                                                                 
 => [internal] load .dockerignore                                                                                                                                                0.0s
 => => transferring context: 2B                                                                                                                                                  0.0s
 => [internal] load build definition from Dockerfile                                                                                                                             0.0s
 => => transferring dockerfile: 1.52kB                                                                                                                                           0.0s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                                                                                 15.2s
 => [internal] load metadata for docker.io/paritytech/ci-linux:1c0fde6a-20220811                                                                                                16.0s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:1c0fde6a-20220811@sha256:4e8c072ea12bc17d99cb531adb58dea5a4c7d4880a8a86525052d24d1454e89e                                   0.0s
 => [stage-1 1/5] FROM docker.io/library/ubuntu:20.04@sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01                                                    0.0s
 => [internal] load build context                                                                                                                                              168.8s
 => => transferring context: 9.24GB                                                                                                                                            167.7s
 => CACHED [builder 2/4] WORKDIR /node-template                                                                                                                                  0.0s
 => [builder 3/4] COPY . .                                                                                                                                                      35.0s
 => [builder 4/4] RUN cargo build --locked --release                                                                                                                          2454.9s
 => CACHED [stage-1 2/5] RUN apt-get update                                                                                                                                      0.0s 
 => CACHED [stage-1 3/5] RUN apt-get install -y openssl                                                                                                                          0.0s 
 => [stage-1 4/5] COPY --from=builder /node-template/target/release/node-template /usr/local/bin                                                                                 0.2s 
 => [stage-1 5/5] RUN useradd -m -u 1000 -U -s /bin/sh -d /node-dev node-dev &&   mkdir -p /chain-data /node-dev/.local/share &&   chown -R node-dev:node-dev /chain-data &&     0.4s 
 => exporting to image                                                                                                                                                           0.4s 
 => => exporting layers                                                                                                                                                          0.4s 
 => => writing image sha256:2e766c6e9b34a20c4f749762e5bbe9befda7ca6afa96f0ea05cf510448ab24ac                                                                                     0.0s
 => => naming to docker.io/bright/substrate-raft-setup:latest                                                                                                                    0.0s

real	44m37.150s
user	1m5.707s
sys	0m29.217s
Image is ready
bright/substrate-raft-setup   latest    2e766c6e9b34   1 second ago   202MB
bright/substrate-raft-setup   v4.0.0    2e766c6e9b34   1 second ago   202MB
```