# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/relaycode.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

**Deliverables**

| Number | Deliverable | Accepted | Link | Notes |
|--------|-------------|------|-------| ------ |
| 0a.    | License     | <ul><li>[x] </li></ul> | [License](https://github.com/itsyogesh/relaycode/blob/master/LICENSE.md) | Apache 2.0 |
| 0b.    | Documentation | <ul><li>[x] </li></ul> | [Documentation](https://github.com/itsyogesh/relaycode/tree/master/docs) | |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/itsyogesh/relaycode/blob/master/__tests__/) |  |
| 0d.    | Docker      | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/itsyogesh/relaycode/blob/master/Dockerfile) |  |
| 1.     | Basic UI Implementation | <ul><li>[x] </li></ul> | [UI Code](https://github.com/itsyogesh/relaycode/tree/master/app/) [Demo]([Demo Site](https://relaycode.org/builder) |  |
| 2.     | Pallet and Function Selection | <ul><li>[x] </li></ul> | [Pallets Dropdown](https://github.com/itsyogesh/relaycode/blob/master/components/builder/combobox.tsx) |  |
| 3.     | Parameter Input Fields | <ul><li>[x] </li></ul> | [Parameter Inputs](https://github.com/itsyogesh/relaycode/blob/master/components/params) | |
| 4.     | Encoding and Decoding | <ul><li>[x] </li></ul> | [Encoding/Decoding Logic](https://github.com/itsyogesh/relaycode/blob/master/builder/page.tsx) |  |
| 5.     | Information Pane | <ul><li>[x] </li></ul> | [Information Display](https://github.com/itsyogesh/relaycode/blob/master/components/information-pane.tsx) |  |
| 6.     | Demo Deployment | <ul><li>[x] </li></ul> | [Demo Site](https://relaycode.org/) |  |

# General Notes

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

Docker is currently failing:

```ts
44.47 info  - Need to disable some ESLint rules? Learn more here: https://nextjs.org/docs/basic-features/eslint#disabling-rules
56.11 Failed to compile.
56.11 
56.11 ./components/params/types.ts:5:30
56.11 Type error: Cannot find module '@polkadot/types/interfaces' or its corresponding type declarations.
56.11 
56.11   3 | import type { DedotClient } from "dedot";
56.11   4 | import { PolkadotApi } from "@dedot/chaintypes";
56.11 > 5 | import { PortableType } from "@polkadot/types/interfaces";
56.11     |                              ^
56.11   6 |
56.11   7 | export interface ParamInputProps {
56.11   8 |   name: string;
56.23 error Command failed with exit code 1.
56.23 info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
------
Dockerfile:32
--------------------
  31 |     
  32 | >>> RUN \
  33 | >>>     if [ -f yarn.lock ]; then yarn run build; \
  34 | >>>     elif [ -f package-lock.json ]; then npm run build; \
  35 | >>>     elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
  36 | >>>     else echo "Lockfile not found." && exit 1; \
  37 | >>>     fi
  38 |     
--------------------
ERROR: failed to solve: process "/bin/sh -c if [ -f yarn.lock ]; then yarn run build;     elif [ -f package-lock.json ]; then npm run build;     elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build;     else echo \"Lockfile not found.\" && exit 1;     fi" did not complete successfully: exit code: 1
```
