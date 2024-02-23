
# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/WeTEE_Network.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [Apache 2.0](https://github.com/wetee-dao/worker/blob/main/LICENSE) | Apache License 2.0 |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| [Milestone 2 Documentation](https://github.com/wetee-dao/chain/blob/patch/docs/grants/milestone-2-documentation.md)  | Have some problems with the instructions. |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| [Test guide link](https://github.com/wetee-dao/chain/blob/patch/docs/grants/milestone-2-test.md) | Have some problems with the instructions. |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [DockerFile](https://github.com/wetee-dao/worker/blob/main/Dockerfile)<br/>[Docker build and run](https://github.com/wetee-dao/worker/blob/main/docs/build.md) |  |
| 01. | TEE Image build guide | <ul><li>[ ] </li></ul>| [TEE Image guide](https://github.com/wetee-dao/examples/blob/main/README.md) | Have some problems with the instructions. |
| 02. | App Example | <ul><li>[ ] </li></ul>| [Ego Example](https://github.com/wetee-dao/examples/tree/main/ego-http-server)<br/>[C nginx Example](https://github.com/wetee-dao/examples/tree/main/gramine-nginx)<br/>[Rust Example](https://github.com/wetee-dao/examples/tree/main/gramine-rust) | Have a problem with the instructions and I need some explanation. |
| 03. | Worker K8S Operator | <ul><li>[x] </li></ul>| https://github.com/wetee-dao/worker/tree/main/graph |  |
| 04. | Worker App Deploy | <ul><li>[x] </li></ul>| https://github.com/wetee-dao/worker/blob/main/mint/app.go |  |
| 05. | Worker Task Deploy | <ul><li>[x] </li></ul>| https://github.com/wetee-dao/worker/blob/main/mint/task.go |  |

## Evaluation V1

### TEE Image Build Guide

The examples for [Wetee TEE Image build guide](https://github.com/wetee-dao/examples/blob/main/README.md) have some problems. 

*   The [command](https://github.com/wetee-dao/examples/blob/main/README.md#12-add-golang-maingo) to build the `main.go` should be `ego-go build main.go`. 

*   I needed to change the version to 1.23 on the `go.mod` to build successfully.

    ```
    azureuser@weteevm:~/examples/my-ego-app$ ego-go build main.go
    go: errors parsing go.mod:
    /home/azureuser/examples/my-ego-app/go.mod:3: invalid go version '1.22.0': must match format 1.23
    ```

*   The `enclave.json` is searching for the executable hello. I needed to change this JSON to use the executable main.

    ```
    azureuser@weteevm:~/examples/my-ego-app$ ego sign
    EGo v1.4.1 (8b99356398dd3bcb5f74e5194d20ce421f607404)
    ERROR: open hello: no such file or directory
    ```

*   [This Dockerfile in step 2.4](https://github.com/wetee-dao/examples/blob/main/README.md#12-add-golang-maingo) try to add the app.manifest and the [script/build_docker.sh](https://github.com/wetee-dao/examples/blob/main/gramine-template/script/build_docker.sh#L11) deletes this file. I needed to remove the `ADD app.manifest` from the Dockerfile.

    ```
    azureuser@weteevm:~/examples/my-gramine-app$ sh script/build_docker.sh
    rm: cannot remove 'app.manifest': No such file or directory
    rm: cannot remove 'app.manifest.sgx': No such file or directory
    rm: cannot remove 'app.sig': No such file or directory
    script/build_docker.sh: 15: gramine-manifest: not found
    DEPRECATED: The legacy builder is deprecated and will be removed in a future release.
                Install the buildx component to build images with BuildKit:
                https://docs.docker.com/go/buildx/

    Sending build context to Docker daemon  3.944MB
    Step 1/6 : FROM wetee/gramine-ubuntu:20.04
    ---> c8112cf922d4
    Step 2/6 : ADD target/debug/my-gramine-app /opt/rust/
    ---> b1ea2b49a2d9
    Step 3/6 : ADD app.manifest /
    ADD failed: file not found in build context or excluded by .dockerignore: stat app.manifest: file does not exist
    ```

### Manual Tests

I followed [this guide](https://github.com/wetee-dao/chain/blob/patch/docs/grants/milestone-2-documentation.md) to test. The test didn't have any problem. One doubt, is it expected to finalize the task a few blocks after [its creation](https://github.com/wetee-dao/chain/blob/patch/docs/grants/milestone-2-documentation.md)?

![image (56)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/8fd70d53-58cc-48a8-8e25-36e2d528a4ff)

If this is expected, would be nice to have a task example that takes longer to finalize.

### Atomated Tests

I'm in doubt about why the command in the instructions clones the `integritee-network/worker`. Could you explain how the two projects are related?

```
git clone  https://github.com/integritee-network/worker && cd worker
go test ./...
```

Anyway, I ran the tests on the [wetee-dao/worker repository](https://github.com/wetee-dao/worker) because I think it should be the correct repository. All tests passed but the coverage could be better. Improve the coverage it isn't mandatory.

```
azureuser@weteevm:~/worker$ go test ./... -coverprofile=c.out
    wetee.app/worker   	 coverage: 0.0% of statements
    wetee.app/worker/api/v1   	 coverage: 0.0% of statements
    wetee.app/worker/cmd   	 coverage: 0.0% of statements
ok 	wetee.app/worker/dao    0.091s    coverage: 51.9% of statements
    wetee.app/worker/graph/model   	 coverage: 0.0% of statements
ok 	wetee.app/worker/graph    0.030s    coverage: 0.8% of statements
ok 	wetee.app/worker/internal/controller    0.022s    coverage: 2.2% of statements
    wetee.app/worker/test   	 coverage: 0.0% of statements
    wetee.app/worker/test/t1   	 coverage: 0.0% of statements
ok 	wetee.app/worker/mint    0.047s    coverage: 6.3% of statements
ok 	wetee.app/worker/util    0.010s    coverage: 60.0% of statements
```

### App example

The examples work, but the [ego-http-server](https://github.com/wetee-dao/examples/tree/main/ego-http-server) needs instructions to build the hello.go. 

The examples could have a better explanation about them on the Readme.md. 

Can you explain where are the C, C++ and Python examples?
