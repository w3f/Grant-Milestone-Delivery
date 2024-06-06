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
| *0c.* | Testing and Testing Guide | <ul><li>[ ] </li></ul>|  | Missing instructions |
| *0d.* | Docker | <ul><li>[ ] </li></ul>|  | Missing instructions and couldn't run sucessfully |
| 1. | Initial skeleton | <ul><li>[x] </li></ul>| -Repo: https://labs.hyperledger.org/solang-playground/ .<br> -Demo:  https://drive.google.com/file/d/1NmuBdEieE54ojBB_axXifcLNctv-KSWW/view <br> -amd64 docker image: https://hub.docker.com/repository/docker/tareknaser360/solang-playground-amd64/general .<br> hosted editor (for easier testing purposes): http://labs.hyperledger.org/solang-playground/ |  |

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

image 1

After adding the `flip( )` on line 18 it returned the compilation error on the message trace.

image 2

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
