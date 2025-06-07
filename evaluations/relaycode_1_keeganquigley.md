# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/relaycode.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**

| Number | Deliverable | Accepted | Link | Notes |
|--------|-------------|------|-------| ------ |
| 0a.    | License     | <ul><li>[x] </li></ul> | [License](https://github.com/itsyogesh/relaycode/blob/master/LICENSE.md) | Apache 2.0 |
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/itsyogesh/relaycode/tree/master/docs) | Docs are outdated |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/itsyogesh/relaycode/blob/master/__tests__/) | No guide, just one test file. |
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/itsyogesh/relaycode/blob/master/Dockerfile) | Works |
| 1.     | Basic UI Implementation | <ul><li>[x] </li></ul> | [UI Code](https://github.com/itsyogesh/relaycode/tree/master/app/) [Demo]([Demo Site](https://relaycode.org/builder) | Good |
| 2.     | Pallet and Function Selection | <ul><li>[x] </li></ul> | [Pallets Dropdown](https://github.com/itsyogesh/relaycode/blob/master/components/builder/combobox.tsx) | Good |
| 3.     | Parameter Input Fields | <ul><li>[x] </li></ul> | [Parameter Inputs](https://github.com/itsyogesh/relaycode/blob/master/components/params) | Good |
| 4.     | Encoding and Decoding | <ul><li>[x] </li></ul> | [Encoding/Decoding Logic](https://github.com/itsyogesh/relaycode/blob/master/builder/page.tsx) | ~~404 error~~ Fixed. |
| 5.     | Information Pane | <ul><li>[x] </li></ul> | [Information Display](https://github.com/itsyogesh/relaycode/blob/master/components/information-pane.tsx) | ~~404 error~~ Fixed. |
| 6.     | Demo Deployment | <ul><li>[x] </li></ul> | [Demo Site](https://relaycode.org/) | Works as expected |

# General Notes

App works nicely. For next milestone, would be great to see more extensive documentation and test coverage. Right now the docs still point to the old hackathon ones.

Website runs successfully:

```ts
@keeganquigley ➜ /workspaces/relaycode (master) $ npm run dev

> relaycode@0.1.0 dev
> next dev

  ▲ Next.js 14.2.16
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Starting...
Attention: Next.js now collects completely anonymous telemetry regarding usage.
This information is used to shape Next.js' roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://nextjs.org/telemetry

 ✓ Ready in 1619ms
```
<img width="1367" alt="relaycode" src="https://github.com/user-attachments/assets/6c681976-d488-438f-b663-7483d030dec3" />


## Testing

Three unit tests pass successfully:

```ts
npm test

> relaycode@0.1.0 test
> jest

(node:4372) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
 PASS  __tests__/input-map.test.ts
  findComponent
    ✓ should return the correct component for exact type matches (4 ms)
    ✓ should return the number component for known type categories (1 ms)
    ✓ should default to the text component for unknown types (1 ms)

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.821 s
Ran all test suites.
```

~~Docker is currently failing:~~

Docker now builds and runs successfully:

```ts
docker build -t relaycode .

[+] Building 143.2s (22/22) FINISHED                                                                        docker:default
 => [internal] load build definition from Dockerfile                                                                  0.0s
 => => transferring dockerfile: 2.24kB                                                                                0.0s
 => resolve image config for docker-image://docker.io/docker/dockerfile:1                                             1.2s
 => docker-image://docker.io/docker/dockerfile:1@sha256:93bfd3b68c109427185cd78b4779fc82b484b0b7618e36d0f104d4d801e6  0.8s
 => => resolve docker.io/docker/dockerfile:1@sha256:93bfd3b68c109427185cd78b4779fc82b484b0b7618e36d0f104d4d801e66d25  0.0s
 => => sha256:93bfd3b68c109427185cd78b4779fc82b484b0b7618e36d0f104d4d801e66d25 8.40kB / 8.40kB                        0.0s
 => => sha256:6427b0634e7650a14afc322b71a37b4654b4471539d1f9a19cb16525a2fb2e56 850B / 850B                            0.0s
 => => sha256:6e15488ac914a453a6e13f419cde418c67927d93d6b0a0f23b5c70c8ecda3fc6 1.26kB / 1.26kB                        0.0s
 => => sha256:8a2af9a64344571e7f712dde5e52bb25729d3ea0f3208ec86dd5af836b4ef1b9 12.78MB / 12.78MB                      0.4s
 => => extracting sha256:8a2af9a64344571e7f712dde5e52bb25729d3ea0f3208ec86dd5af836b4ef1b9                             0.2s
 => [internal] load build definition from Dockerfile                                                                  0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                     1.3s
 => [internal] load .dockerignore                                                                                     0.0s
 => => transferring context: 126B                                                                                     0.0s
 => [base 1/1] FROM docker.io/library/node:18-alpine@sha256:974afb6cbc0314dc6502b14243b8a39fbb2d04d975e9059dd066be3e  2.9s
 => => resolve docker.io/library/node:18-alpine@sha256:974afb6cbc0314dc6502b14243b8a39fbb2d04d975e9059dd066be3e274fb  0.0s
 => => sha256:1f3e46996e2966e4faa5846e56e76e3748b7315e2ded61476c24403d592134f0 3.64MB / 3.64MB                        0.3s
 => => sha256:37892ffbfcaa871a10f813803949d18c3015a482051d51b7e0da02525e63167c 40.01MB / 40.01MB                      0.7s
 => => sha256:5650d6de56fd0bb419872b876ac1df28f577b39573c3b72fb0d15bf426d01bc1 1.26MB / 1.26MB                        0.4s
 => => sha256:974afb6cbc0314dc6502b14243b8a39fbb2d04d975e9059dd066be3e274fbb25 7.67kB / 7.67kB                        0.0s
 => => sha256:6e804119c3884fc5782795bf0d2adc89201c63105aece8647b17a7bcebbc385e 1.72kB / 1.72kB                        0.0s
 => => sha256:dcbf7b337595be6f4d214e4eed84f230eefe0e4ac03a50380d573e289b9e5e40 6.18kB / 6.18kB                        0.0s
 => => extracting sha256:1f3e46996e2966e4faa5846e56e76e3748b7315e2ded61476c24403d592134f0                             0.2s
 => => sha256:6504e29600c8d5213b52cda800370abb3d12639802d06b46b6fce368990ca771 444B / 444B                            0.6s
 => => extracting sha256:37892ffbfcaa871a10f813803949d18c3015a482051d51b7e0da02525e63167c                             1.9s
 => => extracting sha256:5650d6de56fd0bb419872b876ac1df28f577b39573c3b72fb0d15bf426d01bc1                             0.1s
 => => extracting sha256:6504e29600c8d5213b52cda800370abb3d12639802d06b46b6fce368990ca771                             0.0s
 => [internal] load build context                                                                                     0.0s
 => => transferring context: 569.99kB                                                                                 0.0s
 => [deps 1/4] RUN apk add --no-cache libc6-compat                                                                    1.1s
 => [builder 1/4] WORKDIR /app                                                                                        0.2s
 => [runner 2/6] RUN addgroup --system --gid 1001 nodejs                                                              0.4s
 => [runner 3/6] RUN adduser --system --uid 1001 nextjs                                                               0.3s
 => [deps 2/4] WORKDIR /app                                                                                           0.0s 
 => [deps 3/4] COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./                             0.1s 
 => [deps 4/4] RUN     if [ -f yarn.lock ]; then yarn --frozen-lockfile;     elif [ -f package-lock.json ]; then np  53.3s
 => [builder 2/4] COPY --from=deps /app/node_modules ./node_modules                                                   9.2s 
 => [builder 3/4] COPY . .                                                                                            0.1s 
 => [builder 4/4] RUN     if [ -f yarn.lock ]; then yarn run build;     elif [ -f package-lock.json ]; then npm run  65.8s 
 => [runner 4/6] COPY --from=builder /app/public ./public                                                             0.2s 
 => [runner 5/6] COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./                                   0.3s 
 => [runner 6/6] COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static                           0.1s 
 => exporting to image                                                                                                0.3s 
 => => exporting layers                                                                                               0.3s
 => => writing image sha256:a8dfdebea81af5caefbf12c78e3d1191212b893011a3357e678196a668686ade                          0.0s
 => => naming to docker.io/library/relaycode  
```
```sh
docker run -p 3000:3000 relaycode
  ▲ Next.js 14.2.7
  - Local:        http://localhost:3000
  - Network:      http://0.0.0.0:3000

 ✓ Starting...
 ✓ Ready in 94ms
```
