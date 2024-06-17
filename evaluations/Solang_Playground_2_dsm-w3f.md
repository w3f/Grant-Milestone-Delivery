# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_Playground.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| *0a.* | License | <ul><li>[x] </li></ul>| | |
| *0b.* | Documentation | <ul><li>[ ] </li></ul>|  | Missing some instructions |
| *0c.* | Testing and Testing Guide | <ul><li>[x] </li></ul>|  | |
| *0d.* | Docker | <ul><li>[ ] </li></ul>|  | Missing instructions to run the container, couldn't run sucessfully |
| 1. | Initial skeleton | <ul><li>[x] </li></ul>| -Repo: https://github.com/hyperledger-labs/solang-playground <br> -Demo: https://drive.google.com/file/d/1NmuBdEieE54ojBB_axXifcLNctv-KSWW/view <br> -amd64 docker image: https://hub.docker.com/repository/docker/tareknaser360/solang-playground-amd64/general .<br> hosted editor (for easier testing purposes): http://labs.hyperledger.org/solang-playground/ |  |

## Evaluation V2

### Documentation

The documentation was improved but the instructions to run the docker container are missing.

### Docker

We installed the Sysbox following [these instructions](https://github.com/nestybox/sysbox/blob/master/docs/user-guide/install-package.md#installing-sysbox). The documentation is still missing the command to run the container. We tried to run it without success using the command `docker run --runtime=sysbox-runc solang-playground` after building the image. See the logs below, it runs but gets frozen with these logs.

```
user@localhost:~/Documents/w3f/solang-playground$ docker run --runtime=sysbox-runc solang-playground
latest: Pulling from hyperledger/solang
c83baea2d576: Pulling fs layer
650bb573ec30: Pulling fs layer
c83baea2d576: Verifying Checksum
c83baea2d576: Download complete
c83baea2d576: Pull complete
650bb573ec30: Verifying Checksum
650bb573ec30: Download complete
650bb573ec30: Pull complete
Digest: sha256:7131eb2cd1572e8852a3ce6290828655d4256a34880096c76746dd16722d7731
Status: Downloaded newer image for ghcr.io/hyperledger/solang:latest
ghcr.io/hyperledger/solang:latest
```

### Testing

The instructions to run the tests were added. Before, we ran using the command `npm test` but now we run using the command `cargo make test`. It runs one more test.

```
[cargo-make] INFO - Running Task: test-backend

     Running tests/server_tests.rs (target/debug/deps/server_tests-431164c904b3e777)

running 1 test
test tests::language_server_workflow ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

[cargo-make] INFO - Running Task: test-app

> monaco-lsp-streams@0.0.0 test
> jest

 PASS  tests/api.test.ts (9.872 s)
  Ensuring the server serves the built frontend
    ✓ Verifying a successful response upon making a request (32 ms)
  Ensuring the server’s compile endpoint is operational
    ✓ Verifying a successful compile request (8226 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        9.932 s
Ran all test suites.
[cargo-make] INFO - Build Done in 11.40 seconds.
```

## Evaluation V1

### Documentation

The Deliverables 0a to 0d are missing on the pull request, and the Repository link is not pointing to a repository but to the Hosted Editor of the application. Please change the file to fix it. 

We are assuming it is the same repository from milestone 1. We tested it on the main branch. 

Is missing on the [readme](https://github.com/hyperledger-labs/solang-playground/blob/b1fa5c4e10e9313348c8731f9fee1c6a2d912d18/README.md) the instructions to run the tests, to use the docker, and the port that the application uses by default. Please add them.

### Testing

We ran the application successfully using the command `cargo make run`. We could connect to the `localhost:9000` without a problem.

```
user@localhost:~/Documents/w3f/solang-playground$ cargo make run
[cargo-make] INFO - cargo make 0.37.12
[cargo-make] INFO - Calling cargo metadata to extract project info
[cargo-make] INFO - Cargo metadata done
[cargo-make] INFO - Build File: Makefile.toml
[cargo-make] INFO - Task: run
[cargo-make] INFO - Profile: development
[cargo-make] INFO - Running Task: run
```

We tested it manually by doing the same thing on the [demo video](https://drive.google.com/file/d/1NmuBdEieE54ojBB_axXifcLNctv-KSWW/view). 

![image (59)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/985117fa-d26d-451e-801e-8a8853044524)


After adding the `flip( )` on line 18 it returned the compilation error on the message trace.

![image (60)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/7a1eeef6-e9f4-43e0-9f3b-9f1449b61931)

We have done some other small examples. It worked as expected.

We also ran the automated test using the command `npm test` and the tests were successful.

```
user@localhost:~/Documents/w3f/solang-playground$ npm test
> test
> npm run test --workspaces
> monaco-lsp-streams@0.0.0 test
> jest
 PASS  tests/api.test.ts (15.193 s)
  Ensuring the server serves the built frontend
	✓ Verifying a successful response upon making a request (45 ms)
  Ensuring the server’s compile endpoint is operational
	✓ Verifying a successful compile request (12480 ms)
Test Suites: 1 passed, 1 total
Tests:   	2 passed, 2 total
Snapshots:   0 total
Time:    	15.278 s
Ran all test suites.
```

### Docker

We tried to use the docker but we had some problems. We tried to pull the image from the [docker hub](https://hub.docker.com/r/tareknaser360/solang-playground-amd64) and run it. We received an error related to the docker daemon not running.

```
user@localhost:~/Documents/w3f/solang-playground$ docker run tareknaser360/solang-playground-amd64
Cannot connect to the Docker daemon at unix:///var/run/docker.sock. Is the docker daemon running?
```

By default, it should be running on the computer at the start. So we checked running another container, and the docker daemon was running fine. We also tested on another machine and had the same problem.

We tried to use `docker compose up` on the directory but we received another error.

```
user@localhost:~/Documents/w3f/solang-playground$ docker compose up
[+] Running 0/0
 ⠋ Container playground  Creating                                                                                                                                        0.0s 
Error response from daemon: unknown or invalid runtime name: sysbox-runc
```

Do we need to do something different or some configuration?
