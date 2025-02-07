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
