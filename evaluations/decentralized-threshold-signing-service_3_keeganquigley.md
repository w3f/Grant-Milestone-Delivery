# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/DecentralizedThresholdSigningService.md
- **Milestone:** 3

| Number | Deliverable | Accepted | Link | 
| ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | [License](https://github.com/Fiono11/decentralized_threshold_signing_service/blob/signing/LICENSE) |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/Fiono11/decentralized_threshold_signing_service/blob/signing/README.md) | Could be improved
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Test and Testing Guide](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/signing?tab=readme-ov-file#build-and-testing) | Tests all passing
| **0d.** | Docker | <ul><li>[x] </li></ul> | [Docker](https://github.com/Fiono11/decentralized_threshold_signing_service/blob/signing/Dockerfile) | Works
| **1.a** | Threshold Signature | <ul><li>[x] </li></ul> | [Milestone 3](https://github.com/Fiono11/decentralized_threshold_signing_service/tree/signing) | Works

# General Notes

Grantee added more unit tests and a cloud deployment upon request for easier testing. The instances are able to communicate with each other successfully. Also deployed to Paseo. All working as expected.

## Testing

Docker tests passing. All signing challenges successful.

```
npm run test:docker

> relay-server-and-client@1.0.0 test:docker
> docker compose run --no-deps test

[+] Creating 1/1
 ✔ Network decentralized_threshold_signing_service_libp2p-network  Created                                            0.1s 
Compose can now delegate builds to bake for better performance.
 To do so, set COMPOSE_BAKE=true.
[+] Building 203.5s (15/15) FINISHED                                                                        docker:default
 => [test internal] load build definition from Dockerfile                                                             0.0s
 => => transferring dockerfile: 2.13kB                                                                                0.0s
 => [test internal] load metadata for docker.io/library/node:22.2.0-bookworm-slim                                     1.4s
 => [test internal] load .dockerignore                                                                                0.0s
 => => transferring context: 938B                                                                                     0.0s
 => [test base 1/5] FROM docker.io/library/node:22.2.0-bookworm-slim@sha256:840079c08ec485123cf7ea506a13afea630db256  5.2s
 => => resolve docker.io/library/node:22.2.0-bookworm-slim@sha256:840079c08ec485123cf7ea506a13afea630db25606f71e6140  0.0s
 => => sha256:840079c08ec485123cf7ea506a13afea630db25606f71e6140cf8dbdf9bba552 1.21kB / 1.21kB                        0.0s
 => => sha256:54284c1aa369d17342e9b029339992695df9597829cc8313bd11008ec091699a 1.37kB / 1.37kB                        0.0s
 => => sha256:1085611e6ebe7290339ec397e0f55dd9cc422b0db965aba0a670ad06b3bb82cf 7.70kB / 7.70kB                        0.0s
 => => sha256:09f376ebb190216b0459f470e71bec7b5dfa611d66bf008492b40dcc5f1d8eae 29.15MB / 29.15MB                      1.1s
 => => sha256:44f5fe9df22b4c549ef3e662bd64e1e6edb8d3738224047ce56d83ab2f498943 3.35kB / 3.35kB                        0.4s
 => => sha256:07a4a62018e8350538c8a53e43d66942f7a0fa8984748bda3a1974e33d8636ae 44.69MB / 44.69MB                      1.2s
 => => sha256:0da19169e255ae8a7de93bec201d4db4314de8b33d7b32d21279e64818d1e42f 1.71MB / 1.71MB                        0.7s
 => => sha256:efc12b7aeef742f9da977b067a4a0a828adb48242e5be9b859d5e3969996d670 450B / 450B                            1.0s
 => => extracting sha256:09f376ebb190216b0459f470e71bec7b5dfa611d66bf008492b40dcc5f1d8eae                             1.7s
 => => extracting sha256:44f5fe9df22b4c549ef3e662bd64e1e6edb8d3738224047ce56d83ab2f498943                             0.0s
 => => extracting sha256:07a4a62018e8350538c8a53e43d66942f7a0fa8984748bda3a1974e33d8636ae                             1.9s
 => => extracting sha256:0da19169e255ae8a7de93bec201d4db4314de8b33d7b32d21279e64818d1e42f                             0.1s
 => => extracting sha256:efc12b7aeef742f9da977b067a4a0a828adb48242e5be9b859d5e3969996d670                             0.0s
 => [test internal] load build context                                                                                0.1s
 => => transferring context: 955.73kB                                                                                 0.0s
 => [test base 2/5] WORKDIR /app                                                                                      0.8s
 => [test base 3/5] RUN apt-get update && apt-get install -y     python3     make     g++     ca-certificates     &  27.3s
 => [test base 4/5] COPY package*.json ./                                                                             0.1s 
 => [test base 5/5] RUN npm ci --only=production &&     npm cache clean --force &&     rm -rf /tmp/*                 12.9s 
 => [test dev-deps 1/1] RUN npm ci &&     npm cache clean --force &&     rm -rf /tmp/*                               21.9s 
 => [test test 1/3] RUN apt-get update && apt-get install -y     wget     gnupg     ca-certificates     fonts-liber  42.2s 
 => [test test 2/3] RUN npx playwright install chromium --with-deps &&     rm -rf /tmp/*                             25.5s 
 => [test test 3/3] COPY . .                                                                                          0.2s 
 => [test] exporting to image                                                                                        65.9s 
 => => exporting layers                                                                                              65.8s 
 => => writing image sha256:ac583bde45e3b7828c257bc57f9ad3f8eba4f9500a8a0231bb5fb0ffa3fdb99d                          0.0s 
 => => naming to docker.io/library/decentralized_threshold_signing_service-test                                       0.0s 
 => [test] resolving provenance for metadata file                                                                     0.0s 

> relay-server-and-client@1.0.0 test
> npm run build && playwright test test


> relay-server-and-client@1.0.0 build
> vite build

You are using Node.js 22.2.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.
vite v7.3.1 building client environment for production...
node_modules/@polkadot/x-global/index.js (9:23): A comment

"/*#__PURE__*/"

in "node_modules/@polkadot/x-global/index.js" contains an annotation that Rollup cannot interpret due to the position of the comment. The comment will be removed to avoid issues.
✓ 1014 modules transformed.
dist/index.html                  8.38 kB │ gzip:   2.39 kB
dist/assets/index-CWPzpcI8.js  811.29 kB │ gzip: 345.84 kB

(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
[WebServer] You are using Node.js 22.2.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.
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
[WebServer] You are using Node.js 22.2.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.


Running 3 tests using 1 worker
…browser to browser example: › should connect to another browser peer and send a message via SS58 addresses with permission
Test relay listening on: /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWAyRuc7FXciESiysgkC7sYyTqr7eod55eCse1DwaoLRcf
Starting Vite servers...
Vite server on port 5173: 
> relay-server-and-client@1.0.0 start
> vite


Vite server on port 5173 error: You are using Node.js 22.2.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.

Vite server on port 5173: Port 5173 is in use, trying another one...

Vite server on port 5173: 
  VITE v7.3.1  ready in 246 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: http://172.18.0.2:5174/

Vite server on port 5174: 
> relay-server-and-client@1.0.0 start
> vite


Vite server on port 5174 error: You are using Node.js 22.2.0. Vite requires Node.js version 20.19+ or 22.12+. Please upgrade your Node.js version.

Vite server on port 5174: Port 5174 is in use, trying another one...

Vite server on port 5174: 
  VITE v7.3.1  ready in 244 ms


Client A URL: http://localhost:5173
Client B URL: http://localhost:5174
Vite server on port 5174:   ➜  Local:   http://localhost:5175/
  ➜  Network: http://172.18.0.2:5175/

Generated challenge for 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw: 4033b3f9e5c4c4a038a7cd0d471c339bce79ce91dedb4802553381f80117e53d
Stored with proof of possession: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWQa3QY3HuMZtUA95Qfm2afWNSKzErxrqjkqAwdZ3SeP9e (1 total)
Generated challenge for 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy: 3e4bf33b60e39fbbe7a5243d6867dc8d209dd14dd4817a360ae21f7050e4fd30
Stored with proof of possession: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWBNkfoBvMC3msMbdaXXWhac7mCVwgSzetftBNSzCkvZHi (2 total)
Permission request a76a8aa0-c813-436b-900a-da83ba493280: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy wants to connect to 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw
Permission request a76a8aa0-c813-436b-900a-da83ba493280: accepted
Query: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> found
….spec.js:192:3 › browser to browser example: › should perform mutual proof of possession during connection with permission
Generated challenge for 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw: b984657617bb21b0bab3877e53819c1a855c9b31287393271a23f49be70365c6
Stored with proof of possession: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWK6neXyV4JGWiqq8oDcYfRVzUQbjCkMt26eUyTQA4Rvtn (2 total)
Generated challenge for 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy: 9d8d3257b87e6c7806e6ffe910e3670727b1bac2b99979d10f023b34e8eb2c9c
Stored with proof of possession: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWEoeYQsnYTQvbG7dkKAEyhwsAmzP3rCu4FAHCvpcnXJLE (2 total)
Permission request a7aead13-fe10-417a-9049-156e3c827946: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy wants to connect to 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw
Permission request a7aead13-fe10-417a-9049-156e3c827946: accepted
Query: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> found
[chromium] › test/index.spec.js:243:3 › browser to browser example: › should handle permission rejection gracefully
Generated challenge for 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw: a657063e99c7fe1b493422fce545ee0a22a8f50da418b79a9815727f2573edab
Stored with proof of possession: 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWLURUyhDA6ScBfti9SBNgbWNTimzRdF1TQor4ZmHzNMm9 (2 total)
Generated challenge for 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy: 56dd55ffaf1354fcfc0a5feccf54757bf5b28ddc07b5dc27701adc61885083bc
Stored with proof of possession: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy -> /ip4/127.0.0.1/tcp/8080/ws/p2p/12D3KooWA1bysjrTACSWqf6q172inxvwKHUxAnBtVgaVDKMxpZtx/p2p-circuit/webrtc/p2p/12D3KooWPzbJxHp6aUVr15gXx6bZzPVDN2c3SH1C2bWaZzvgWSHN (2 total)
Permission request 6888c201-50ff-4734-87a2-ae756878c3ac: 5Gma8SNsn6rkQf9reAWFQ9WKq8bwwHtSzwMYtLTdhYsGPKiy wants to connect to 5CXkZyy4S5b3w16wvKA2hUwzp5q2y7UtRPkXnW97QGvDN8Jw
Permission request 6888c201-50ff-4734-87a2-ae756878c3ac: rejected
Stopping Vite servers...
  3 passed (1.1m)

To open last HTML report run:

  npx playwright show-report
```
## UI

<img width="1188" height="421" alt="threshold" src="https://github.com/user-attachments/assets/99a8bebf-4229-4c0a-befb-a2de8783073d" />

<img width="1183" height="286" alt="threshold2" src="https://github.com/user-attachments/assets/200f52a3-8245-4520-b9fa-cf06df1eb122" />
