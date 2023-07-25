# Evaluation

- **Status:** Accepted
- **Application Document:** [w3f/Grants-Program#1750](https://github.com/w3f/Grants-Program/blob/master/applications/contracts-tool.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| **0a.** | License | [GPLv3](https://github.com/paritytech/smart-bench/blob/master/LICENSE) ||
| **0b.** | Documentation | [README for tool](https://github.com/paritytech/smart-bench/blob/master/README.md), [README for docker](https://github.com/paritytech/smart-bench/blob/master/launch/README.md) ||
| **0c.** | Testing and Testing Guide | [README](https://github.com/paritytech/smart-bench/blob/master/README.md) |Integration tests are provided. Unit tests would require to mock node responses, which cause huge maintenance overhead|
| **0d.** | Docker | [Dockerfile](https://github.com/paritytech/smart-bench/blob/master/launch/smart_bench.Dockerfile) ||
| 1. | Updated evm contracts | [Evm support](https://github.com/paritytech/smart-bench/tree/master/src/evm) ||
| 2. | Support for solidity-wasm contracts | [Solidity-wasm](https://github.com/paritytech/smart-bench/tree/master/src/wasm) ||
| 3. | Launch scripts | [Launch scripts](https://github.com/paritytech/smart-bench/tree/master/launch) ||

## General Notes

Overall, this is a solid project, well documented and scripts, and all promised features work as expected. 

Currently only integration tests are available, Unit tests would require to mock node responses, which cause huge maintenance overhead, so no unit tests and code coverages are provided.

### Logs

<details>

<summary>Build image </summary>

```bash
[polkadot-parachain] already exists
[polkadot] already exists
[zombienet] already exists
[moonbeam] already exists
[+] Building 1.0s (17/17) FINISHED                                                                                                                                                                  docker:default
 => [internal] load build definition from smart_bench.Dockerfile                                                                                                                                              0.1s
 => => transferring dockerfile: 1.26kB                                                                                                                                                                        0.0s
 => [internal] load .dockerignore                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [internal] load metadata for docker.io/library/ubuntu:20.04                                                                                                                                               0.8s
 => [internal] load metadata for docker.io/paritytech/ci-linux:production                                                                                                                                     0.8s
 => [builder 1/4] FROM docker.io/paritytech/ci-linux:production@sha256:dc9abf9e877c5bad94828245406dac8a186530e1ad6a1b5f2072e5e19e1f64b4                                                                       0.0s
 => [internal] load build context                                                                                                                                                                             0.0s
 => => transferring context: 5.05kB                                                                                                                                                                           0.0s
 => [stage-1 1/7] FROM docker.io/library/ubuntu:20.04@sha256:c9820a44b950956a790c354700c1166a7ec648bc0d215fa438d3a339812f1d01                                                                                 0.0s
 => CACHED [stage-1 2/7] RUN apt-get update         && DEBIAN_FRONTEND=noninteractive apt-get install --no-install-recommends -y    libssl1.1=1.1.1f-1ubuntu2.19    netcat=1.206-1ubuntu1         && apt-get  0.0s
 => CACHED [builder 2/4] COPY . /smart-bench                                                                                                                                                                  0.0s
 => CACHED [builder 3/4] WORKDIR /smart-bench                                                                                                                                                                 0.0s
 => CACHED [builder 4/4] RUN cargo install --root /usr/local/ --locked --path .  && cargo clean  && rm -rf /usr/local/cargo/registry  && rm -rf /usr/local/cargo/git                                          0.0s
 => CACHED [stage-1 3/7] COPY --from=builder /usr/local/bin/smart-bench /usr/local/bin                                                                                                                        0.0s
 => CACHED [stage-1 4/7] COPY launch/bin/* /usr/local/smart-bench/bin/                                                                                                                                        0.0s
 => CACHED [stage-1 5/7] COPY launch/../contracts /usr/local/smart-bench/contracts                                                                                                                            0.0s
 => CACHED [stage-1 6/7] COPY launch/configs/* /usr/local/smart-bench/config/                                                                                                                                 0.0s
 => CACHED [stage-1 7/7] COPY launch/entrypoint.sh /entrypoint.sh                                                                                                                                             0.0s
 => exporting to image                                                                                                                                                                                        0.0s
 => => exporting layers                                                                                                                                                                                       0.0s
 => => writing image sha256:3e650fbed8c435a70e4225fdc90c5b781b47bf4c6d8385af00980e5532047836                                                                                                                  0.0s
 => => naming to docker.io/library/smart-bench:latest                                                                                                                                                         0.0s

```

</details>

<details>

<summary>Integration tests 1 - evm contracts support</summary>

```bash

+ docker run --rm -it --init smart-bench:latest evm erc20 --instance-count 1 --call-count 10
(node:14) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `zombienet --trace-warnings ...` to show where the warning was created)
Preparing BenchERC20...5KiB
Instantiated 1 BenchERC20 contracts
Submitted 10 total contract calls

0001: PoV Size=0015KiB(000%) Weight RefTime=0000033ms(006%) Weight ProofSize=0109KiB(002%) Witness=0006KiB Block=0009KiB NumExtrinsics=0005
0002: PoV Size=0020KiB(000%) Weight RefTime=0000006ms(001%) Weight ProofSize=0109KiB(002%) Witness=0017KiB Block=0003KiB NumExtrinsics=0004
0003: PoV Size=0023KiB(000%) Weight RefTime=0000015ms(003%) Weight ProofSize=0109KiB(002%) Witness=0016KiB Block=0006KiB NumExtrinsics=0014

```

</details>

<details>

<summary>Integration tests 2 - Running smart-bench with overriding binaries to prove solidity-wasm contracts support</summary>

```bash

(node:16) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `zombienet --trace-warnings ...` to show where the warning was created)
Preparing BenchERC20...70KiB
Instantiated 1 BenchERC20 contracts
Submitted 10 total contract calls

0001: PoV Size=0072KiB(002%) Weight RefTime=0000018ms(003%) Weight ProofSize=0020KiB(000%) Witness=0003KiB Block=0069KiB NumExtrinsics=0003
0002: PoV Size=0008KiB(000%) Weight RefTime=0000008ms(001%) Weight ProofSize=0003KiB(000%) Witness=0005KiB Block=0003KiB NumExtrinsics=0002
0003: PoV Size=0080KiB(003%) Weight RefTime=0000051ms(010%) Weight ProofSize=0847KiB(016%) Witness=0075KiB Block=0005KiB NumExtrinsics=0012

```

</details>


<details>

<summary>Integration tests 3 - Running smart-bench with overriding contracts to prove solidity-wasm contracts support</summary>

```bash

+ docker run --rm -it --init -v /root/w3f/smart-bench/contracts:/usr/local/smart-bench/contracts smart-bench:latest sol-wasm erc20 --instance-count 1 --call-count 10
(node:18) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `zombienet --trace-warnings ...` to show where the warning was created)
Preparing BenchERC20...70KiB
Instantiated 1 BenchERC20 contracts
Submitted 10 total contract calls

0001: PoV Size=0072KiB(002%) Weight RefTime=0000018ms(003%) Weight ProofSize=0020KiB(000%) Witness=0003KiB Block=0069KiB NumExtrinsics=0003
0002: PoV Size=0008KiB(000%) Weight RefTime=0000008ms(001%) Weight ProofSize=0003KiB(000%) Witness=0005KiB Block=0003KiB NumExtrinsics=0002
0003: PoV Size=0080KiB(003%) Weight RefTime=0000051ms(010%) Weight ProofSize=0847KiB(016%) Witness=0075KiB Block=0005KiB NumExtrinsics=0012

```

</details>

<details>


<summary>Integration tests 4 - Running smart-bench with overriding configurations to prove solidity-wasm contracts support</summary>

```bash

+ docker run --rm -it --init -v /root/w3f/smart-bench/launch/configs:/usr/local/smart-bench/config smart-bench:latest sol-wasm erc20 --instance-count 1 --call-count 10
(node:16) ExperimentalWarning: The Fetch API is an experimental feature. This feature could change at any time
(Use `zombienet --trace-warnings ...` to show where the warning was created)
Preparing BenchERC20...70KiB
Instantiated 1 BenchERC20 contracts
Submitted 10 total contract calls

0001: PoV Size=0072KiB(002%) Weight RefTime=0000018ms(003%) Weight ProofSize=0020KiB(000%) Witness=0003KiB Block=0069KiB NumExtrinsics=0003
0002: PoV Size=0008KiB(000%) Weight RefTime=0000008ms(001%) Weight ProofSize=0003KiB(000%) Witness=0005KiB Block=0003KiB NumExtrinsics=0002
0003: PoV Size=0080KiB(003%) Weight RefTime=0000051ms(010%) Weight ProofSize=0847KiB(016%) Witness=0074KiB Block=0005KiB NumExtrinsics=0012

```

</details>

<details>