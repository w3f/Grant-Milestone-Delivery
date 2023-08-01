# Evaluation

- **Status:** Accepted
- **Application Document:** [Application](https://github.com/w3f/Grants-Program/blob/master/applications/DINFRA.md)
- **Milestone:** 1
- **Kusama Identity:** [Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP](https://sub.id/Fd1SvYZnE3dZ3mEaq5QG1HEWhzNrDyMPJ41C4fQqiMirtTP)
- **Previously successfully merged evaluation:** N/A

**Deliverables**

| Number | Deliverable | Link | Notes |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | Link | Apache 2.0 |
| **0b.** | Documentation | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#about-dinfra) [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/acs-reactor#reference-implementation-chain-reactor) | Extensive and comprehensive documentation is provided. |
| **0c.** | Testing and Testing Guide | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#testing-guide) [Link](https://gitlab.com/dinfra/dinfra/-/pipelines/951071017) | Unit tests and CI/CD checks are passing. |
| **0d.** | Docker | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#test-run-of-the-system) [Link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE1/docker-compose.yml) | Dockerfiles are provided, unit tests can be run via Docker and whole infrastracture can be spawn using docker-compose. |
| 1. | Chain Reactor API | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1#available-playgrounds) [API UI](http://localhost:7300/dinfra)| API is provided and works as expected. Screenshots below. |
| 2. | Chain Reactor RI | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/acs-reactor#reference-implementation-chain-reactor) | Chain Reactor Reference Implementation based on Apache CloudStack is provided and is working as expected. |
| 3. | Chain Reactor RI Test Suite | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/acs-reactor#test-toolkit) | We will released a set of unit tests and a SIMULATOR that can run tests scripts against the Chain Reactor |
| 4. | CD/CI Chain Reactor RI | [Link](https://gitlab.com/dinfra/dinfra/-/jobs/4774377657) [Link](https://gitlab.com/dinfra/dinfra/-/blob/MILESTONE1/.gitlab-ci.yml?ref_type=tags) | Gitlab Pipelines were created for Chain Reactor, based on the SIMULATOR |
| 5. | SSH Key Derivation | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/packages/keytool?ref_type=tags#wip-dinfra-keytool) | Research on viability of key portability between Substrate and SSH with ed25519 and a report on findings is provided. |
| 6. | Substrate Deployment Descriptors | [Link](https://gitlab.com/dinfra/dinfra/-/tree/MILESTONE1/descriptors?ref_type=tags#deployment-descriptors) | A comprehensive guide to deployment descriptors is provided. |

## General Notes

Project is well documented, all the deliverables are in place and everything is working as expected. Local setup is easy and straightforward with Docker. The project is well structured and easy to follow. Looking forward to the next milestone.

## Logs

<details>

<summary>Unit tests</summary>

```bash
 PASS  src/jwt.service.spec.ts (5.337 s)
 PASS  src/queue.service.spec.ts (8.194 s)
A worker process has failed to exit gracefully and has been force exited. This is likely caused by tests leaking due to improper teardown. Try running with --detectOpenHandles to find leaks. Active timers can also cause this, ensure that .unref() was called on them.

Test Suites: 6 passed, 6 total
Tests:       18 passed, 18 total
Snapshots:   0 total
Time:        8.88 s

configfile: pytest.ini
collected 8 items / 3 deselected / 5 selected                                                                                                                                              

test/test_ansible.py ..                                                                                                                                                              [ 40%]
test/test_jwt.py ...
```
</details>

<details>

<summary>Docker build</summary>

```bash
 => [internal] load build context                                                                                                                                                      5.2s
 => => transferring context: 425.31MB                                                                                                                                                  5.2s
 => [2/4] WORKDIR /app                                                                                                                                                                 0.4s
 => [3/4] COPY . /app                                                                                                                                                                  2.5s
 => [4/4] RUN pip install --no-cache-dir -r requirements.txt                                                                                                                          28.5s
 => exporting to image                                                                                                                                                                 2.0s
 => => exporting layers                                                                                                                                                                2.0s
 => => writing image sha256:0c2685ef6e691dace8b78bdcb038ea6e2d89c7e18538d3479c1bb76210a17a17                                                                                           0.0s
 => => naming to docker.io/library/dinfra_acs-reactor                                                                                                                                  0.0s

Use 'docker scan' to run Snyk tests against images to find vulnerabilities and learn how to fix them
✨  Done in 160.42s.
```
</details>

<details>

<summary>E2e tests</summary>

```bash
yarn run v1.22.19
$ jest --config ./test/jest-e2e.json
 PASS  test/app.e2e-spec.ts
 PASS  test/openapi-validation.e2e-spec.ts

Test Suites: 2 passed, 2 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        2.281 s
Ran all test suites.
```

</details>

### Screenshots
