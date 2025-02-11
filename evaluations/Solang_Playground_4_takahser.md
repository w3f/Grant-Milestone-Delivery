# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_Playground.md
- **Milestone:** 4
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| _0a._ | License | <ul><li>[x] </li></ul> | [Apache](https://github.com/hyperledger-labs/solang-playground/blob/4949ca3cf75e59e65dc74f71821c60b9b435eace/LICENSE) | - |
| _0b._ | Documentation | <ul><li>[x] </li></ul> | [Docs](https://github.com/hyperledger-labs/solang-playground/blob/4949ca3cf75e59e65dc74f71821c60b9b435eace/docs/interact_with_contracts_on_chain.md) | - |
| _0c._ | Testing and Testing Guide | <ul><li>[ ] </li></ul> | [Testing Guide](https://github.com/hyperledger-labs/solang-playground/blob/4949ca3cf75e59e65dc74f71821c60b9b435eace/README.md#testing) | There are currently failing tests, see [Testing Feedback](#testing-feedback) |
| _0d._ | Docker | <ul><li>[] </li></ul> | [Docker instructions](https://github.com/hyperledger-labs/solang-playground/blob/4949ca3cf75e59e65dc74f71821c60b9b435eace/README.md#docker), [docker-compose file](https://github.com/hyperledger-labs/solang-playground/blob/4949ca3cf75e59e65dc74f71821c60b9b435eace/docker-compose.yml), [amd64-based Docker image](https://hub.docker.com/r/salaheldin18/solang-playground) | Can't run, see [Docker Feedback](#docker-feedback) |
| 1. | Solang Playground with enhanced `UI` | <ul><li>[x] </li></ul> | [Repo](https://github.com/hyperledger-labs/solang-playground) | The compiler seems to work well, allowing for Solidity code to be written in the in-browser editor and to be compiled to ink. The compiler is able to detect incorrect code and gives useful debugging messages (see also [demo video](https://drive.google.com/file/d/1_T4W0BBAEICQ_0jk_087ei_4MrraILsh/view)). |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Feedback

- [x] Building: works, there is a minor deprecation warning regarding the config.toml file
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo make build

    warning: `/Users/xxx/repos/solang-playground/.cargo/config` is deprecated in favor of `config.toml`
    note: if you need to support cargo 1.38 or earlier, you can symlink `config` to `config.toml`
    [cargo-make] INFO - cargo make 0.37.23
    [cargo-make] INFO - 
    [cargo-make] INFO - Build File: Makefile.toml
    [cargo-make] INFO - Task: build
    [cargo-make] INFO - Profile: development
    [cargo-make] INFO - Running Task: build-server
    warning: `/Users/xxx/repos/solang-playground/.cargo/config` is deprecated in favor of `config.toml`
    note: if you need to support cargo 1.38 or earlier, you can symlink `config` to `config.toml`
      Compiling proc-macro2 v1.0.89
      Compiling unicode-ident v1.0.13
      
      (...)

      Compiling actix-web v4.9.0
      Compiling backend v0.1.0 (/Users/xxx/repos/solang-playground/crates/backend)
      Compiling generate-bindings v0.1.0 (/Users/xxx/repos/solang-playground/crates/generate-bindings)
        Finished `dev` profile [unoptimized + debuginfo] target(s) in 17.40s
        Running `target/debug/generate-bindings --target /Users/xxx/repos/solang-playground/packages/_generated/commontypes/src`
    /Users/xxx/repos/solang-playground/packages/_generated/commontypes/src/index.d.ts
    [cargo-make] INFO - Running Task: build-app

    > monaco-lsp-streams@0.0.0 build
    > webpack

    assets by status 7.6 MiB [big]
      asset 47dac392f5c0ccde04e9.wasm 4.44 MiB [emitted] [immutable] [from: assets/wasm/demo_lsp_browser_bg.wasm] [big] (auxiliary name: app)
      asset app.bundle.js 3.16 MiB [emitted] [minimized] [big] (name: app) 1 related asset
    asset editor.worker.bundle.js 197 KiB [emitted] [minimized] (name: editor.worker)
    asset tree-sitter.wasm 173 KiB [emitted] [from: ../../node_modules/web-tree-sitter/tree-sitter.wasm] [copied]
    asset ade705761eb7e702770d.ttf 69.1 KiB [emitted] [immutable] [from: ../../node_modules/monaco-editor-core/esm/vs/base/browser/ui/codicons/codicon/codicon.ttf] (auxiliary name: app)
    asset index.html 2.74 KiB [emitted]
    orphan modules 6.41 MiB [orphan] 665 modules
    runtime modules 2.81 KiB 10 modules
    cacheable modules 8.38 MiB (javascript) 4.5 MiB (asset)
      modules by path ../../node_modules/ 1.97 MiB (javascript) 69.1 KiB (asset) 252 modules
      modules by path ./ 6.41 MiB (javascript) 4.44 MiB (asset)
        ./src/index.ts + 665 modules 6.41 MiB [built] [code generated]
        ../../node_modules/css-loader/dist/cjs.js!./assets/index.module.css 3.51 KiB [built] [code generated]
        ./assets/wasm/demo_lsp_browser_bg.wasm 4.44 MiB (asset) 42 bytes (javascript) [built] [code generated]
      modules by mime type image/svg+xml 3.17 KiB
        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0i.. 1.59 KiB [built] [code generated]
        data:image/svg+xml;base64,PHN2ZyB3aWR0aD0i.. 1.59 KiB [built] [code generated]
      data:image/png;base64,iVBORw0KGgoAAAAN.. 268 bytes [built] [code generated]
    webpack 5.96.1 compiled successfully in 12809 ms
    [cargo-make] INFO - Running Task: build-backend
    warning: `/Users/xxx/repos/solang-playground/.cargo/config` is deprecated in favor of `config.toml`
    note: if you need to support cargo 1.38 or earlier, you can symlink `config` to `config.toml`
      Compiling proc-macro2 v1.0.89
      Compiling unicode-ident v1.0.13
      
      (...)

      Compiling actix-files v0.6.6
      Compiling backend v0.1.0 (/Users/xxx/repos/solang-playground/crates/backend)
        Finished `release` profile [optimized] target(s) in 43.32s
    [cargo-make] INFO - Build Done in 130.55 seconds.
    ```
  </details>

- [x] Running: works, there is a minor deprecation warning regarding the config.toml file. The servise running on `http://localhost:9000` was tested successfully as well.
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo make run

    warning: `/Users/xxx/repos/solang-playground/.cargo/config` is deprecated in favor of `config.toml`
    note: if you need to support cargo 1.38 or earlier, you can symlink `config` to `config.toml`
    [cargo-make] INFO - cargo make 0.37.23
    [cargo-make] INFO - 
    [cargo-make] INFO - Build File: Makefile.toml
    [cargo-make] INFO - Task: run
    [cargo-make] INFO - Profile: development
    [cargo-make] INFO - Running Task: run
    ```
  </details>

- [x] Tests: ~~currently there are failing tests~~ => fixed and demonstrated via video call, output [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/1215#issuecomment-2595020883)
  
  <details>
    <summary>Output</summary>

    ```zsh
    % cargo make test

    warning: `/Users/xxx/repos/solang-playground/.cargo/config` is deprecated in favor of `config.toml`
    note: if you need to support cargo 1.38 or earlier, you can symlink `config` to `config.toml`
    [cargo-make] INFO - cargo make 0.37.23
    [cargo-make] INFO - 
    [cargo-make] INFO - Build File: Makefile.toml
    [cargo-make] INFO - Task: test
    [cargo-make] INFO - Profile: development
    [cargo-make] INFO - Running Task: test-backend
    warning: `/Users/xxx/repos/solang-playground/.cargo/config` is deprecated in favor of `config.toml`
    note: if you need to support cargo 1.38 or earlier, you can symlink `config` to `config.toml`
      Compiling unicode-ident v1.0.13

      (...)

      Compiling solang v0.3.3 (/Users/xxx/repos/solang-playground/crates/solang)
      Compiling demo-lsp-browser v0.0.0 (/Users/xxx/repos/solang-playground/crates/browser)
        Finished `test` profile [unoptimized + debuginfo] target(s) in 31.03s
        Running unittests src/lib.rs (target/debug/deps/demo_lsp_browser-416d6ecd276daaa2)

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

        Running tests/server_tests.rs (target/debug/deps/server_tests-a36a964e00636c53)

    running 1 test
    test tests::language_server_workflow ... ok

    test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

      Doc-tests demo-lsp-browser

    running 0 tests

    test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

    [cargo-make] INFO - Running Task: test-app

    > monaco-lsp-streams@0.0.0 test
    > jest

    FAIL  tests/api.test.ts
      Ensuring the server serves the built frontend
        ✕ Verifying a successful response upon making a request (50 ms)
      Ensuring the server’s compile endpoint is operational
        ✕ Verifying a successful compile request (6 ms)

      ● Ensuring the server serves the built frontend › Verifying a successful response upon making a request

        expect(received).resolves.toHaveProperty()

        Received promise rejected instead of resolved
        Rejected to value: [AggregateError]

          9 | describe('Ensuring the server serves the built frontend', () => {
          10 |   test('Verifying a successful response upon making a request', async () => {
        > 11 |     await expect(axios.get(`${BACKEND_URL}/`)).resolves.toHaveProperty('status', 200);
            |           ^
          12 |   });
          13 | });
          14 |

          at expect (../../node_modules/expect/build/index.js:113:15)
          at Object.<anonymous> (tests/api.test.ts:11:11)

      ● Ensuring the server’s compile endpoint is operational › Verifying a successful compile request

        expect(received).resolves.toMatchObject()

        Received promise rejected instead of resolved
        Rejected to value: [AggregateError]

          19 |       .toString();
          20 |
        > 21 |     await expect(
            |           ^
          22 |       axios.post(`${BACKEND_URL}/compile`, {
          23 |         source,
          24 |       })

          at expect (../../node_modules/expect/build/index.js:113:15)
          at Object.<anonymous> (tests/api.test.ts:21:11)

    Test Suites: 1 failed, 1 total
    Tests:       2 failed, 2 total
    Snapshots:   0 total
    Time:        1.825 s
    Ran all test suites.
    npm ERR! Lifecycle script `test` failed with error: 
    npm ERR! Error: command failed 
    npm ERR!   in workspace: monaco-lsp-streams@0.0.0 
    npm ERR!   at location: /Users/xxx/repos/solang-playground/packages/app 
    Error while executing command, exit code: 1
    ```
  </details>

### Docker Feedback

- [x] Docker: Build
  
  <details>
    <summary>Output</summary>

    ```zsh
    % docker build -t solang-playground .

    [+] Building 377.8s (29/29) FINISHED                                                                                           docker:desktop-linux
    => [internal] load build definition from Dockerfile                                                                                           0.0s
    => => transferring dockerfile: 1.50kB                                                                                                         0.0s
    => WARN: FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 2)                                                                 0.0s
    => WARN: FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 11)                                                                0.0s
    => [internal] load metadata for docker.io/nestybox/ubuntu-jammy-systemd-docker:latest                                                         3.7s
    => [internal] load metadata for docker.io/library/rust:1.76.0                                                                                 3.5s
    => [internal] load .dockerignore                                                                                                              0.0s
    => => transferring context: 108B                                                                                                              0.0s
    => [base 1/3] FROM docker.io/library/rust:1.76.0@sha256:d36f9d8a9a4c76da74c8d983d0d4cb146dd2d19bb9bd60b704cdcf70ef868d3a                     17.6s
    => => resolve docker.io/library/rust:1.76.0@sha256:d36f9d8a9a4c76da74c8d983d0d4cb146dd2d19bb9bd60b704cdcf70ef868d3a                           0.0s
    => => sha256:992a857ef57584af4efb4c62d68456f1e8513c95d6248fd796a9ea7f45da4d79 23.58MB / 23.58MB                                               2.4s
    => => sha256:3861a6536e4e911503e7d2fc8f93228491ba45d1e5def0d2f3723e32e03d7466 63.99MB / 63.99MB                                               3.8s
    => => sha256:d36f9d8a9a4c76da74c8d983d0d4cb146dd2d19bb9bd60b704cdcf70ef868d3a 6.22kB / 6.22kB                                                 0.0s
    => => sha256:36c29e17220fac1cc622e9a7f194449b810281cd066489207f0ff6d8954c43df 1.94kB / 1.94kB                                                 0.0s
    => => sha256:ee95a1a43dfd46771e7821bcbc436f1911d1255fcc4f2fc6990d63cacaa489f1 3.94kB / 3.94kB                                                 0.0s
    => => sha256:6ee0baa58a3d368515336c1b5c1cade29c975e1b49a832f19e22f4c46f4a23a7 49.59MB / 49.59MB                                               2.9s
    => => sha256:e5e6faea05ead1ac9cd3244827816e2385b0d62299f7937a4574fc5a9651624c 202.54MB / 202.54MB                                            10.1s
    => => extracting sha256:6ee0baa58a3d368515336c1b5c1cade29c975e1b49a832f19e22f4c46f4a23a7                                                      1.3s
    => => sha256:6a4969aa4e1d11ffa1a27e09adad82b181809c860865062e1e6aa6642c2165c3 249.63MB / 249.63MB                                            12.2s
    => => extracting sha256:992a857ef57584af4efb4c62d68456f1e8513c95d6248fd796a9ea7f45da4d79                                                      0.3s
    => => extracting sha256:3861a6536e4e911503e7d2fc8f93228491ba45d1e5def0d2f3723e32e03d7466                                                      1.7s
    => => extracting sha256:e5e6faea05ead1ac9cd3244827816e2385b0d62299f7937a4574fc5a9651624c                                                      4.0s
    => => extracting sha256:6a4969aa4e1d11ffa1a27e09adad82b181809c860865062e1e6aa6642c2165c3                                                      3.1s
    => [internal] load build context                                                                                                              0.1s
    => => transferring context: 21.82MB                                                                                                           0.1s
    => [stage-2 1/5] FROM docker.io/nestybox/ubuntu-jammy-systemd-docker:latest@sha256:332b4b7b89d3c308e0f9ceb4a9886b210b1dcb1665bdaa52ef30c486  16.7s
    => => resolve docker.io/nestybox/ubuntu-jammy-systemd-docker:latest@sha256:332b4b7b89d3c308e0f9ceb4a9886b210b1dcb1665bdaa52ef30c486d4e4139e   0.0s
    => => sha256:332b4b7b89d3c308e0f9ceb4a9886b210b1dcb1665bdaa52ef30c486d4e4139e 743B / 743B                                                     0.0s
    => => sha256:a8acd8cdcd5619b77b8fb0ddfc7b3b22bed777bb30548fb71ae6e41ef52ab708 1.58kB / 1.58kB                                                 0.0s
    => => sha256:4d4fa97abf094ce779f424951689895ee7af21d94ed4530ec6390df615d43650 5.46kB / 5.46kB                                                 0.0s
    => => sha256:4a3049d340b7d3651a954fd25a32c42feb1086889d6287e2f15468aef865c5c4 28.38MB / 28.38MB                                               6.3s
    => => extracting sha256:4a3049d340b7d3651a954fd25a32c42feb1086889d6287e2f15468aef865c5c4                                                      0.7s
    => => sha256:fb97e5a24d5368f230229cba2c1cc58e03fd42ae4ce476913f74ef79906553c0 18.61MB / 18.61MB                                               8.1s
    => => extracting sha256:fb97e5a24d5368f230229cba2c1cc58e03fd42ae4ce476913f74ef79906553c0                                                      0.5s
    => => sha256:da3d238a8e49bd337cdb997a75929ff608c04710afff727390f12d4cb08d7c11 293B / 293B                                                     8.9s
    => => extracting sha256:da3d238a8e49bd337cdb997a75929ff608c04710afff727390f12d4cb08d7c11                                                      0.0s
    => => sha256:08b1f020a1e144320d332dfc42d31e690e8479ef046c7ee4bbc87e55da0fc3b9 165.85MB / 165.85MB                                            14.1s
    => => sha256:9968af680a043c0b8f9c7c1e04f1db06beb4832086f5c934f6a8147ff6f46e2c 20.69kB / 20.69kB                                              11.5s
    => => sha256:df8cf6e572a4f204453de352bab3d673b437ffb4f33bbcd1b381dc5bc273d797 2.17MB / 2.17MB                                                12.6s
    => => extracting sha256:08b1f020a1e144320d332dfc42d31e690e8479ef046c7ee4bbc87e55da0fc3b9                                                      2.1s
    => => extracting sha256:9968af680a043c0b8f9c7c1e04f1db06beb4832086f5c934f6a8147ff6f46e2c                                                      0.0s
    => => extracting sha256:df8cf6e572a4f204453de352bab3d673b437ffb4f33bbcd1b381dc5bc273d797                                                      0.1s
    => [base 2/3] WORKDIR /app                                                                                                                    0.2s
    => [base 3/3] COPY . .                                                                                                                        0.1s
    => [builder  1/15] RUN rustup toolchain install stable                                                                                       49.8s
    => [builder  2/15] RUN rustup toolchain install nightly-2024-02-04                                                                           44.3s
    => [builder  3/15] RUN rustup target add wasm32-unknown-unknown                                                                               6.6s
    => [builder  4/15] RUN cargo install cargo-make                                                                                              44.1s
    => [builder  5/15] RUN apt-get --yes update                                                                                                   1.6s
    => [builder  6/15] RUN apt-get --yes upgrade                                                                                                 13.0s
    => [builder  7/15] RUN mkdir -p /usr/local/nvm && apt-get update && echo "y" | apt-get install curl                                           1.0s
    => [builder  8/15] RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash                                        9.1s
    => [builder  9/15] RUN /bin/bash -c "source /usr/local/nvm/nvm.sh && nvm install v18.16.1 && nvm use --delete-prefix v18.16.1"                1.3s
    => [builder 10/15] RUN cargo make deps-wasm                                                                                                  39.9s
    => [builder 11/15] RUN cargo make deps-npm                                                                                                    8.8s
    => [builder 12/15] RUN cargo make build-server                                                                                               56.7s
    => [builder 13/15] RUN cargo make build-bindings                                                                                             18.4s
    => [builder 14/15] RUN cargo make build-app                                                                                                  15.3s
    => [builder 15/15] RUN cargo make build-backend                                                                                              45.8s
    => [stage-2 2/5] COPY --from=builder /app/packages/app/dist /app/packages/app/dist                                                            0.0s
    => [stage-2 3/5] COPY --from=builder /app/target/release/backend /app/target/release/backend                                                  0.0s
    => [stage-2 4/5] COPY sysbox/on-start.sh /usr/bin                                                                                             0.0s
    => [stage-2 5/5] RUN chmod +x /usr/bin/on-start.sh                                                                                            0.1s
    => exporting to image                                                                                                                         0.0s
    => => exporting layers                                                                                                                        0.0s
    => => writing image sha256:72bb0cff721585aab5522e03e0669519b85005ef11b64953bad73ebc22fe6fc2                                                   0.0s
    => => naming to docker.io/library/solang-playground                                                                                           0.0s

    6 warnings found (use docker --debug to expand):
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 27)
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 28)
    - FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 2)
    - FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 11)
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 22)
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 23)

    What's next:
        View a summary of image vulnerabilities and recommendations → docker scout quickview
    ```
  </details>


- [x] Docker: ~~Run fails~~ => fixed and demonstrated via video call, output [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/1215#issuecomment-2595020883)
  
  <details>
    <summary>Output</summary>

    ```zsh
    % docker build -t solang-playground .

    [+] Building 377.8s (29/29) FINISHED                                                                                           docker:desktop-linux
    => [internal] load build definition from Dockerfile                                                                                           0.0s
    => => transferring dockerfile: 1.50kB                                                                                                         0.0s
    => WARN: FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 2)                                                                 0.0s
    => WARN: FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 11)                                                                0.0s
    => [internal] load metadata for docker.io/nestybox/ubuntu-jammy-systemd-docker:latest                                                         3.7s
    => [internal] load metadata for docker.io/library/rust:1.76.0                                                                                 3.5s
    => [internal] load .dockerignore                                                                                                              0.0s
    => => transferring context: 108B                                                                                                              0.0s
    => [base 1/3] FROM docker.io/library/rust:1.76.0@sha256:d36f9d8a9a4c76da74c8d983d0d4cb146dd2d19bb9bd60b704cdcf70ef868d3a                     17.6s
    => => resolve docker.io/library/rust:1.76.0@sha256:d36f9d8a9a4c76da74c8d983d0d4cb146dd2d19bb9bd60b704cdcf70ef868d3a                           0.0s
    => => sha256:992a857ef57584af4efb4c62d68456f1e8513c95d6248fd796a9ea7f45da4d79 23.58MB / 23.58MB                                               2.4s
    => => sha256:3861a6536e4e911503e7d2fc8f93228491ba45d1e5def0d2f3723e32e03d7466 63.99MB / 63.99MB                                               3.8s
    => => sha256:d36f9d8a9a4c76da74c8d983d0d4cb146dd2d19bb9bd60b704cdcf70ef868d3a 6.22kB / 6.22kB                                                 0.0s
    => => sha256:36c29e17220fac1cc622e9a7f194449b810281cd066489207f0ff6d8954c43df 1.94kB / 1.94kB                                                 0.0s
    => => sha256:ee95a1a43dfd46771e7821bcbc436f1911d1255fcc4f2fc6990d63cacaa489f1 3.94kB / 3.94kB                                                 0.0s
    => => sha256:6ee0baa58a3d368515336c1b5c1cade29c975e1b49a832f19e22f4c46f4a23a7 49.59MB / 49.59MB                                               2.9s
    => => sha256:e5e6faea05ead1ac9cd3244827816e2385b0d62299f7937a4574fc5a9651624c 202.54MB / 202.54MB                                            10.1s
    => => extracting sha256:6ee0baa58a3d368515336c1b5c1cade29c975e1b49a832f19e22f4c46f4a23a7                                                      1.3s
    => => sha256:6a4969aa4e1d11ffa1a27e09adad82b181809c860865062e1e6aa6642c2165c3 249.63MB / 249.63MB                                            12.2s
    => => extracting sha256:992a857ef57584af4efb4c62d68456f1e8513c95d6248fd796a9ea7f45da4d79                                                      0.3s
    => => extracting sha256:3861a6536e4e911503e7d2fc8f93228491ba45d1e5def0d2f3723e32e03d7466                                                      1.7s
    => => extracting sha256:e5e6faea05ead1ac9cd3244827816e2385b0d62299f7937a4574fc5a9651624c                                                      4.0s
    => => extracting sha256:6a4969aa4e1d11ffa1a27e09adad82b181809c860865062e1e6aa6642c2165c3                                                      3.1s
    => [internal] load build context                                                                                                              0.1s
    => => transferring context: 21.82MB                                                                                                           0.1s
    => [stage-2 1/5] FROM docker.io/nestybox/ubuntu-jammy-systemd-docker:latest@sha256:332b4b7b89d3c308e0f9ceb4a9886b210b1dcb1665bdaa52ef30c486  16.7s
    => => resolve docker.io/nestybox/ubuntu-jammy-systemd-docker:latest@sha256:332b4b7b89d3c308e0f9ceb4a9886b210b1dcb1665bdaa52ef30c486d4e4139e   0.0s
    => => sha256:332b4b7b89d3c308e0f9ceb4a9886b210b1dcb1665bdaa52ef30c486d4e4139e 743B / 743B                                                     0.0s
    => => sha256:a8acd8cdcd5619b77b8fb0ddfc7b3b22bed777bb30548fb71ae6e41ef52ab708 1.58kB / 1.58kB                                                 0.0s
    => => sha256:4d4fa97abf094ce779f424951689895ee7af21d94ed4530ec6390df615d43650 5.46kB / 5.46kB                                                 0.0s
    => => sha256:4a3049d340b7d3651a954fd25a32c42feb1086889d6287e2f15468aef865c5c4 28.38MB / 28.38MB                                               6.3s
    => => extracting sha256:4a3049d340b7d3651a954fd25a32c42feb1086889d6287e2f15468aef865c5c4                                                      0.7s
    => => sha256:fb97e5a24d5368f230229cba2c1cc58e03fd42ae4ce476913f74ef79906553c0 18.61MB / 18.61MB                                               8.1s
    => => extracting sha256:fb97e5a24d5368f230229cba2c1cc58e03fd42ae4ce476913f74ef79906553c0                                                      0.5s
    => => sha256:da3d238a8e49bd337cdb997a75929ff608c04710afff727390f12d4cb08d7c11 293B / 293B                                                     8.9s
    => => extracting sha256:da3d238a8e49bd337cdb997a75929ff608c04710afff727390f12d4cb08d7c11                                                      0.0s
    => => sha256:08b1f020a1e144320d332dfc42d31e690e8479ef046c7ee4bbc87e55da0fc3b9 165.85MB / 165.85MB                                            14.1s
    => => sha256:9968af680a043c0b8f9c7c1e04f1db06beb4832086f5c934f6a8147ff6f46e2c 20.69kB / 20.69kB                                              11.5s
    => => sha256:df8cf6e572a4f204453de352bab3d673b437ffb4f33bbcd1b381dc5bc273d797 2.17MB / 2.17MB                                                12.6s
    => => extracting sha256:08b1f020a1e144320d332dfc42d31e690e8479ef046c7ee4bbc87e55da0fc3b9                                                      2.1s
    => => extracting sha256:9968af680a043c0b8f9c7c1e04f1db06beb4832086f5c934f6a8147ff6f46e2c                                                      0.0s
    => => extracting sha256:df8cf6e572a4f204453de352bab3d673b437ffb4f33bbcd1b381dc5bc273d797                                                      0.1s
    => [base 2/3] WORKDIR /app                                                                                                                    0.2s
    => [base 3/3] COPY . .                                                                                                                        0.1s
    => [builder  1/15] RUN rustup toolchain install stable                                                                                       49.8s
    => [builder  2/15] RUN rustup toolchain install nightly-2024-02-04                                                                           44.3s
    => [builder  3/15] RUN rustup target add wasm32-unknown-unknown                                                                               6.6s
    => [builder  4/15] RUN cargo install cargo-make                                                                                              44.1s
    => [builder  5/15] RUN apt-get --yes update                                                                                                   1.6s
    => [builder  6/15] RUN apt-get --yes upgrade                                                                                                 13.0s
    => [builder  7/15] RUN mkdir -p /usr/local/nvm && apt-get update && echo "y" | apt-get install curl                                           1.0s
    => [builder  8/15] RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash                                        9.1s
    => [builder  9/15] RUN /bin/bash -c "source /usr/local/nvm/nvm.sh && nvm install v18.16.1 && nvm use --delete-prefix v18.16.1"                1.3s
    => [builder 10/15] RUN cargo make deps-wasm                                                                                                  39.9s
    => [builder 11/15] RUN cargo make deps-npm                                                                                                    8.8s
    => [builder 12/15] RUN cargo make build-server                                                                                               56.7s
    => [builder 13/15] RUN cargo make build-bindings                                                                                             18.4s
    => [builder 14/15] RUN cargo make build-app                                                                                                  15.3s
    => [builder 15/15] RUN cargo make build-backend                                                                                              45.8s
    => [stage-2 2/5] COPY --from=builder /app/packages/app/dist /app/packages/app/dist                                                            0.0s
    => [stage-2 3/5] COPY --from=builder /app/target/release/backend /app/target/release/backend                                                  0.0s
    => [stage-2 4/5] COPY sysbox/on-start.sh /usr/bin                                                                                             0.0s
    => [stage-2 5/5] RUN chmod +x /usr/bin/on-start.sh                                                                                            0.1s
    => exporting to image                                                                                                                         0.0s
    => => exporting layers                                                                                                                        0.0s
    => => writing image sha256:72bb0cff721585aab5522e03e0669519b85005ef11b64953bad73ebc22fe6fc2                                                   0.0s
    => => naming to docker.io/library/solang-playground                                                                                           0.0s

    6 warnings found (use docker --debug to expand):
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 27)
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 28)
    - FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 2)
    - FromAsCasing: 'as' and 'FROM' keywords' casing do not match (line 11)
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 22)
    - LegacyKeyValueFormat: "ENV key=value" should be used instead of legacy "ENV key value" format (line 23)

    What's next:
        View a summary of image vulnerabilities and recommendations → docker scout quickview
    ```
  </details>
