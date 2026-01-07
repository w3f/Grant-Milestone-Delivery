# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/DecentralizedThresholdSigningService.md
- **Milestone:** 1
- **Review by:** lederstrumpf, keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[License](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/8f735e2365364c0d2fd253c3127f755dc1d09ac1/LICENSE)| GPL3 |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[README](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/8f735e2365364c0d2fd253c3127f755dc1d09ac1/README.md)| Setup process sufficiently documented |
| 0c. | Testing and Testing Guide |<ul><li>[x] </li></ul>|[Testing Guide](https://github.com/Fiono11/decentralized_threshold_signing_service/blob/8f735e2365364c0d2fd253c3127f755dc1d09ac1/README.md#L185-L241)| Testing sufficiently documented|
| 0d. | Docker |<ul><li>[x] </li></ul>|[Dockerfile](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/8f735e2365364c0d2fd253c3127f755dc1d09ac1/Dockerfile), [docker-compose.yml](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/8f735e2365364c0d2fd253c3127f755dc1d09ac1/docker-compose.yml)| Works with podman |
| 1.a | Peer Discovery via Blockchain Address |<ul><li>[x] </li></ul>|[Peer](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/8f735e2365364c0d2fd253c3127f755dc1d09ac1/index.js), [Relay](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/8f735e2365364c0d2fd253c3127f755dc1d09ac1/relay.js)| See notes |

## General Notes

Focused & clean delivery, considering the PoC purpose of M1. Grantee responsive to feedback and handled it well.
Delivery initial lacked proof of possession for authenticated address registering with relayer & mutual authentication of peers, but grantee addressed this requested change quickly & satisfactorily.

Still had some reliability issues with the relayer connection, but delayed this to milestone 2, which grantee has already opened PR for.

Likewise, I reckon the [relay's peer id](https://github.com/Fiono11/decentralized_threshold_signing_service/blob/8f735e2365364c0d2fd253c3127f755dc1d09ac1/index.js#L591) should still be authenticated with a proof of possession, but likewise delaying this to milestone 2 - grantee already has created the plumbing for this, so it's a simple addition.

## Testing

Relay successfully starts:

```ts
npm run relay

> relay-server-and-client@1.0.0 relay
> node relay.js

Relay server started:
Peer ID: 12D3KooWAWN7MuqoNvFdoVKuSDG3HJvQA1txQzu5ujri49nhm2hn
Listening on: /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWAWN7MuqoNvFdoVKuSDG3HJvQA1txQzu5ujri49nhm2hn, /ip4/172.31.22.182/tcp/8080/ws/p2p/12D3KooWAWN7MuqoNvFdoVKuSDG3HJvQA1txQzu5ujri49nhm2hn, /ip6/::1/tcp/8080/ws/p2p/12D3KooWAWN7MuqoNvFdoVKuSDG3HJvQA1txQzu5ujri49nhm2hn
Protocols: KV storage, KV query, Proof of Possession, Connection Challenge, Connection Permission ready
```
Docker compose works:
```
WARN[0127] Found orphan containers ([decentralized_threshold_signing_service-test-run-0ed1f691a86f]) for this project. If you removed or renamed this service in your compose file, you can run this command with the --remove-orphans flag to clean it up. 
[+] Running 6/6
 ✔ client-a                Built                                                                                      0.0s 
 ✔ client-b                Built                                                                                      0.0s 
 ✔ relay-server            Built                                                                                      0.0s 
 ✔ Container relay-server  Started                                                                                    0.4s 
 ✔ Container client-b      Started                                                                                    0.7s 
 ✔ Container client-a      Started
```

All tests passing:

<details>
  <summary>Output</summary>

```js
@keeganquigley ➜ /workspaces/decentralized_threshold_signing_service (main) $ npm run test:docker

> relay-server-and-client@1.0.0 test:docker
> docker compose run --no-deps test

[+] Creating 1/1
 ✔ Network decentralized_threshold_signing_service_libp2p-network  Created                             0.1s 
[+] Building 186.9s (17/17) FINISHED                                                                        
 => [internal] load local bake definitions                                                             0.0s
 => => reading from stdin 635B                                                                         0.0s
 => [internal] load build definition from Dockerfile                                                   0.0s
 => => transferring dockerfile: 2.13kB                                                                 0.0s
 => [internal] load metadata for docker.io/library/node:22.2.0-bookworm-slim                           0.4s
 => [auth] library/node:pull token for registry-1.docker.io                                            0.0s
 => [internal] load .dockerignore                                                                      0.0s
 => => transferring context: 938B                                                                      0.0s
 => [base 1/5] FROM docker.io/library/node:22.2.0-bookworm-slim@sha256:840079c08ec485123cf7ea506a13af  7.6s
 => => resolve docker.io/library/node:22.2.0-bookworm-slim@sha256:840079c08ec485123cf7ea506a13afea630  0.0s
 => => sha256:840079c08ec485123cf7ea506a13afea630db25606f71e6140cf8dbdf9bba552 1.21kB / 1.21kB         0.0s
 => => sha256:54284c1aa369d17342e9b029339992695df9597829cc8313bd11008ec091699a 1.37kB / 1.37kB         0.0s
 => => sha256:1085611e6ebe7290339ec397e0f55dd9cc422b0db965aba0a670ad06b3bb82cf 7.70kB / 7.70kB         0.0s
 => => sha256:09f376ebb190216b0459f470e71bec7b5dfa611d66bf008492b40dcc5f1d8eae 29.15MB / 29.15MB       0.9s
 => => sha256:44f5fe9df22b4c549ef3e662bd64e1e6edb8d3738224047ce56d83ab2f498943 3.35kB / 3.35kB         0.1s
 => => sha256:07a4a62018e8350538c8a53e43d66942f7a0fa8984748bda3a1974e33d8636ae 44.69MB / 44.69MB       1.9s
 => => sha256:0da19169e255ae8a7de93bec201d4db4314de8b33d7b32d21279e64818d1e42f 1.71MB / 1.71MB         0.2s
 => => sha256:efc12b7aeef742f9da977b067a4a0a828adb48242e5be9b859d5e3969996d670 450B / 450B             0.2s
 => => extracting sha256:09f376ebb190216b0459f470e71bec7b5dfa611d66bf008492b40dcc5f1d8eae              1.6s
 => => extracting sha256:44f5fe9df22b4c549ef3e662bd64e1e6edb8d3738224047ce56d83ab2f498943              0.0s
 => => extracting sha256:07a4a62018e8350538c8a53e43d66942f7a0fa8984748bda3a1974e33d8636ae              1.6s
 => => extracting sha256:0da19169e255ae8a7de93bec201d4db4314de8b33d7b32d21279e64818d1e42f              0.1s
 => => extracting sha256:efc12b7aeef742f9da977b067a4a0a828adb48242e5be9b859d5e3969996d670              0.0s
 => [internal] load build context                                                                      0.1s
 => => transferring context: 961.42kB                                                                  0.0s
 => [base 2/5] WORKDIR /app                                                                            0.0s
 => [base 3/5] RUN apt-get update && apt-get install -y     python3     make     g++     ca-certific  25.8s
 => [base 4/5] COPY package*.json ./                                                                   0.1s
 => [base 5/5] RUN npm ci --only=production &&     npm cache clean --force &&     rm -rf /tmp/*       15.5s
 => [dev-deps 1/1] RUN npm ci &&     npm cache clean --force &&     rm -rf /tmp/*                     22.6s
 => [test 1/3] RUN apt-get update && apt-get install -y     wget     gnupg     ca-certificates     f  39.7s
 => [test 2/3] RUN npx playwright install chromium --with-deps &&     rm -rf /tmp/*                   31.9s
 => [test 3/3] COPY . .                                                                                0.2s
 => exporting to image                                                                                42.9s
 => => exporting layers                                                                               42.8s
 => => writing image sha256:e238aedaed4d640ee718fec6349ccef3060c50589db9754bc3664aa155ba2a1d           0.0s
 => => naming to docker.io/library/decentralized_threshold_signing_service-test                        0.0s
 => resolving provenance for metadata file                                                             0.0s

> relay-server-and-client@1.0.0 test
> npm run build && playwright test test


> relay-server-and-client@1.0.0 build
> vite build

vite v6.3.5 building for production...
node_modules/@polkadot/x-global/index.js (9:23): A comment

"/*#__PURE__*/"

in "node_modules/@polkadot/x-global/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 1014 modules transformed.
dist/index.html                  8.38 kB │ gzip:   2.39 kB
dist/assets/index-KR8s6BYb.js  815.19 kB │ gzip: 347.54 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
[WebServer] node_modules/@polkadot/x-global/index.js (9:23): A comment
[WebServer] 
[WebServer] "/*#__PURE__*/"
[WebServer] 
[WebServer] in "node_modules/@polkadot/x-global/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
[WebServer] 
[WebServer] (!) Some chunks are larger than 500 kB after minification. Consider:
[WebServer] - Using dynamic import() to code-split the application
[WebServer] - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
[WebServer] - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.


Running 3 tests using 1 worker
…ser example: › should connect to another browser peer and send a message via SS58 addresses with permission
Test relay listening on: /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWMUBCtwNu7NGmMidjaiQEBTDVnfYYK3ZWfgqqdpS3XoDN
Starting Vite servers...
Vite server on port 5173: 
> relay-server-and-client@1.0.0 start
> vite


Vite server on port 5173: Port 5173 is in use, trying another one...

Vite server on port 5173: 
  VITE v6.3.5  ready in 163 ms


Vite server on port 5173:   ➜  Local:   http://localhost:5174/
  ➜  Network: http://172.18.0.2:5174/

Vite server on port 5174: 
> relay-server-and-client@1.0.0 start
> vite


Vite server on port 5174: Port 5174 is in use, trying another one...

Vite server on port 5174: 
  VITE v6.3.5  ready in 158 ms


Client A URL: http://localhost:5173
Client B URL: http://localhost:5174
Vite server on port 5174:   ➜  Local:   http://localhost:5175/
  ➜  Network: http://172.18.0.2:5175/

Generated challenge for 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw: 2c839e27c707f1134c8cea7ec1d4913824167f6fd78304e05901babfb1984070
Stored with proof of possession: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWQ86skArFuw6PPPGi59huzEps1AMRwLfE8EHaJWceXWL6 (1 total)
Generated challenge for 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy: 7695900331bca0abf13c42940a18f900d8fc539ab05f08a6fe111b6329d03011
Stored with proof of possession: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWSPwqMgR27J33zBYvwUuZukrnUMWdzHYuAGx7J2yCp6Ws (2 total)
Permission request bcbd9329-e9e4-4772-bc3f-e59c091daafe: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy wants to connect to 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw
Permission request bcbd9329-e9e4-4772-bc3f-e59c091daafe: accepted
Query: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> found
…› browser to browser example: › should perform mutual proof of possession during connection with permission
Generated challenge for 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw: 29c2dcd05a27bb13c4c9a87ad4980f2513ba082c85a6352e17de647612428a5e
Stored with proof of possession: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWP1wUS7oxLqcBbiRCAaJEHxeJ8fPwVHoDjEfpbrDM7SBc (2 total)
Generated challenge for 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy: 39f7e96d369989225dbaaf5490d55aa66654b9009a93e5f4ed78057f8ecd6093
Stored with proof of possession: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWKDqjmY7beZDQghojmZJUzVVKN9xva9o4fhHjsJi99CD9 (2 total)
Permission request d709e81a-cc8d-4f58-aba2-b0b3f0a6e9d9: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy wants to connect to 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw
Permission request d709e81a-cc8d-4f58-aba2-b0b3f0a6e9d9: accepted
Query: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> found
…m] › test/index.spec.js:243:3 › browser to browser example: › should handle permission rejection gracefully
Generated challenge for 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw: 62a77fc1e9920590d6545c00a9d1a309b6ba202bbcc0fbba1ed741ada59cb285
Stored with proof of possession: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWCffbD2o1vBrDUrMZueZS5GW5re95FMqQ8A4KEyVKoKxb (2 total)
Generated challenge for 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy: 9635bf85f20863b8e3446373bdecb33f0f87ff99c34e8c14b93d45d48dd7b624
Stored with proof of possession: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWB93KmbTpyYTsE5CSaryyXLoQrpjEXF5e6d9NKnERXdxM (2 total)
Permission request 7349ce34-a317-4e4b-a38d-be20adb09fa1: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy wants to connect to 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw
Permission request 7349ce34-a317-4e4b-a38d-be20adb09fa1: rejected
Stopping Vite servers...
  3 passed (48.4s)
```
</details>
