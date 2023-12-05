# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Plutonication.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link | Notes |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [PlutonicationServer](https://github.com/RostislavLitovkin/PlutonicationServer/blob/main/LICENSE) | MIT |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | Docs for running all codes is in the [Readme](https://github.com/RostislavLitovkin/PlutonicationServer/#readme). [Guide for deploying to Cloud](https://plutonication-acnha.ondigitalocean.app/deploy) is here. I have also included [Low-level docs](https://plutonication-acnha.ondigitalocean.app/docs) for tinkerers. | Ok. |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | Guide for running tests is in the [Readme](https://github.com/RostislavLitovkin/PlutonicationServer/#readme) | Ok. |
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/RostislavLitovkin/PlutonicationServer/blob/milestone-delivery/Dockerfile) | Ok. |
| 1a. | create_room | <ul><li>[x] </li></ul> | [create_room](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L39) | Ok. |
| 1b. | pubkey | <ul><li>[x] </li></ul> | [pubkey](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L51) | Ok. |
| 1c. | sign_payload | <ul><li>[x] </li></ul> | [sign_payload](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L65) | Ok. |
| 1d. | sign_raw | <ul><li>[x] </li></ul> | [sign_raw](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L77) | Ok. |
| 1e. | payload_signature | <ul><li>[x] </li></ul> | [payload_signature](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L89) | Ok. |
| 1f. | raw_signature | <ul><li>[x] </li></ul> | [raw_signature](https://github.com/RostislavLitovkin/PlutonicationServer/blob/c848a88cf5f28d47542f1be0d7cc2bdee927558f/plutonication/events.py#L109C1-L109C1) | Ok. |

# General Notes

Overall, great documentation and everything works as expected. Looking forward to seeing the next milestone where everything should come together.

## Evaluation v2

Issues have been resolved, all unit and e2e tests pass now:

```js
npx playwright test

Running 8 tests using 1 worker
[chromium] › events.spec.js:77:7 › events › create_room and pubkey
dApp connected
Wallet connected
[chromium] › stresstest.spec.js:6:7 › stress tests › limit_socketio
Connected
pong: 0
pong: 1
pong: 2
pong: 3
pong: 4
pong: 5
pong: 6
pong: 7
pong: 8
pong: 9
pong: 10
pong: 11
pong: 12
pong: 13
pong: 14
pong: 15
pong: 16
pong: 17
pong: 18
pong: 19
pong: 20
pong: 21
pong: 22
pong: 23
pong: 24
pong: 25
pong: 26
pong: 27
pong: 28
  8 passed (8.0s)
```
Events tests pass:

```js
  npx playwright test events.spec.js

Running 7 tests using 1 worker
[chromium] › events.spec.js:77:7 › events › create_room and pubkey
dApp connected
Wallet connected
  7 passed (7.4s)
```

## Evaluation v1

Docker builds successfully:

```sh
docker build --tag plutonication .

[+] Building 28.8s (10/10) FINISHED
 => [internal] load .dockerignore                                                                                    0.0s
 => => transferring context: 2B                                                                                      0.0s
 => [internal] load build definition from Dockerfile                                                                 0.0s
 => => transferring dockerfile: 213B                                                                                 0.0s
 => [internal] load metadata for docker.io/library/python:3.11                                                       1.6s
 => [1/5] FROM docker.io/library/python:3.11@sha256:eb79d3fc1b3d3991133634f12cb58c13e27a1abfe51f1c7ee03f6911bca5d4  20.6s
 => => resolve docker.io/library/python:3.11@sha256:eb79d3fc1b3d3991133634f12cb58c13e27a1abfe51f1c7ee03f6911bca5d41  0.0s
 => => sha256:1444f25b8cb0d573358dc90b9cc4844791f6d006fa0d01611c36212653b5999f 2.01kB / 2.01kB                       0.0s
 => => sha256:df2021ddb7d686bdbb125598b2a6163d63035f080356b3014595f354ea0b40d6 49.61MB / 49.61MB                     5.0s
 => => sha256:8d647f1dd7e741209a8a75083ccc889e39cb3e94c17f45441eae96e1a679d971 23.58MB / 23.58MB                     2.3s
 => => sha256:5cdd9a70365f741a6b9f7a4e32cdb7d4aa29ac73da0b78ca0a83e937f285fdd5 63.99MB / 63.99MB                     8.6s
 => => sha256:eb79d3fc1b3d3991133634f12cb58c13e27a1abfe51f1c7ee03f6911bca5d412 2.14kB / 2.14kB                       0.0s
 => => sha256:38771d50ca44f9c2bcf4e0cc4dc84b6cbb8a3be4a0490b9b4f4e57aa07195710 7.54kB / 7.54kB                       0.0s
 => => sha256:95089c600b361807380090316c250b0b8eaf4fa2175b11ac8f49bb7581c61125 202.45MB / 202.45MB                  15.0s
 => => sha256:45be536bb9e879fb192bfb15f431b02ec652da4ffc4c6de13cbe39ae887ffb42 6.47MB / 6.47MB                       5.9s
 => => extracting sha256:df2021ddb7d686bdbb125598b2a6163d63035f080356b3014595f354ea0b40d6                            2.2s
 => => sha256:68d92c2043a0adf9ee66b0897ff193e7a71039d9b16bd3f9cc558fc69c3b3677 19.44MB / 19.44MB                     8.6s
 => => extracting sha256:8d647f1dd7e741209a8a75083ccc889e39cb3e94c17f45441eae96e1a679d971                            0.4s
 => => extracting sha256:5cdd9a70365f741a6b9f7a4e32cdb7d4aa29ac73da0b78ca0a83e937f285fdd5                            2.0s
 => => sha256:2735ee5c975ede760a65f361c6fe135e858fa4b3f33b4179eb31d143514848db 3.11MB / 3.11MB                       9.1s
 => => sha256:fa081e3e96e0c2d9f8fdcad4b7ca92c8027c12805607b609b48adf26e867aa0c 244B / 244B                           8.9s
 => => extracting sha256:95089c600b361807380090316c250b0b8eaf4fa2175b11ac8f49bb7581c61125                            4.4s
 => => extracting sha256:45be536bb9e879fb192bfb15f431b02ec652da4ffc4c6de13cbe39ae887ffb42                            0.2s
 => => extracting sha256:68d92c2043a0adf9ee66b0897ff193e7a71039d9b16bd3f9cc558fc69c3b3677                            0.4s
 => => extracting sha256:fa081e3e96e0c2d9f8fdcad4b7ca92c8027c12805607b609b48adf26e867aa0c                            0.0s
 => => extracting sha256:2735ee5c975ede760a65f361c6fe135e858fa4b3f33b4179eb31d143514848db                            0.2s
 => [internal] load build context                                                                                    0.2s
 => => transferring context: 22.20MB                                                                                 0.2s
 => [2/5] WORKDIR /python-docker                                                                                     1.8s
 => [3/5] COPY requirements.txt requirements.txt                                                                     0.0s
 => [4/5] RUN pip3 install -r requirements.txt                                                                       4.5s
 => [5/5] COPY . .                                                                                                   0.1s
 => exporting to image                                                                                               0.1s
 => => exporting layers                                                                                              0.1s
 => => writing image sha256:f6d77bf969686ff9b500c55791045ecbdba5c7963bf0bc3543adbe67010f00d3                         0.0s
 => => naming to docker.io/library/plutonication:latest 
 ```

 Docker boots but can't see it on local host:

 ```sh
 docker run plutonication
[2023-11-27 23:23:45 +0000] [7] [INFO] Starting gunicorn 20.1.0
[2023-11-27 23:23:45 +0000] [7] [INFO] Listening at: http://127.0.0.1:8000 (7)
[2023-11-27 23:23:45 +0000] [7] [INFO] Using worker: gthread
[2023-11-27 23:23:45 +0000] [8] [INFO] Booting worker with pid: 8
```
App boots up:

```
gunicorn -w 1 --threads 100 main:app
[2023-11-27 18:28:39 -0500] [6597] [INFO] Starting gunicorn 20.1.0
[2023-11-27 18:28:39 -0500] [6597] [INFO] Listening at: http://127.0.0.1:8000 (6597)
[2023-11-27 18:28:39 -0500] [6597] [INFO] Using worker: gthread
[2023-11-27 18:28:39 -0500] [6598] [INFO] Booting worker with pid: 6598
```

Unit tests successful:
```
npx playwright test

Running 8 tests using 1 worker
[chromium] › events.spec.js:77:7 › events › create_room and pubkey
dApp connected
Wallet connected
[chromium] › stresstest.spec.js:6:7 › stress tests › limit_socketio
Connected
pong: 0
pong: 1
pong: 2
pong: 3
pong: 4
pong: 5
pong: 6
pong: 7
pong: 8
pong: 9
pong: 10
pong: 11
pong: 12
pong: 13
pong: 14
pong: 15
pong: 16
pong: 17
pong: 18
pong: 19
pong: 20
pong: 21
pong: 22
pong: 23
pong: 24
pong: 25
pong: 26
pong: 27
pong: 28
  8 passed (8.0s)
  ```

  Events tests pass:

  ```js
  npx playwright test events.spec.js

Running 7 tests using 1 worker
[chromium] › events.spec.js:77:7 › events › create_room and pubkey
dApp connected
Wallet connected
  7 passed (7.4s)
  ```
