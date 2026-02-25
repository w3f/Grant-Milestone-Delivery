# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/relaycode.md
* **Milestone Number:** 2

**Context**

Milestone 2 builds on the MVP extrinsic builder from M1 by adding wallet integration, comprehensive input validation, 21 specialized type-aware input components, 1:1 hex pane decomposition, and production-quality UI refinements. The application now supports the full lifecycle of extrinsic building - from selecting a pallet and method, to filling typed parameter fields with real-time validation, to signing and submitting transactions via wallet extensions. The codebase has been upgraded to use LunoKit for wallet connectivity and Dedot v1 for type-safe chain interactions.

**Deliverables**

| Number | Deliverable | Link | Notes |
|--------|-------------|------|-------|
| 0a. | License | [LICENSE.md](https://github.com/itsyogesh/relaycode/blob/master/LICENSE.md) | Apache 2.0 license, unchanged from M1. |
| 0b. | Documentation | [Documentation](https://github.com/itsyogesh/relaycode/tree/master/docs) | Comprehensive documentation including: [API docs](https://github.com/itsyogesh/relaycode/tree/master/docs/api) (codec, input-map, parser, validation), [component docs](https://github.com/itsyogesh/relaycode/tree/master/docs/components) (all 21 input components), [getting started tutorial](https://github.com/itsyogesh/relaycode/blob/master/docs/tutorial/getting-started.md), and [advanced tutorial](https://github.com/itsyogesh/relaycode/blob/master/docs/tutorial/advanced.md). |
| 0c. | Testing and Testing Guide | [Testing Guide](https://github.com/itsyogesh/relaycode/blob/master/docs/testing-guide.md) / [Tests](https://github.com/itsyogesh/relaycode/tree/master/__tests__) | Expanded test suite with 174 tests across 8 test files covering: input type resolution, codec decomposition, denominations, validation, parser, custom hooks (chain token, recent addresses, SS58). Run with `yarn test`. |
| 0d. | Docker | [Dockerfile](https://github.com/itsyogesh/relaycode/blob/master/Dockerfile) | Production-ready multi-stage Dockerfile with standalone Next.js output for optimized image size. |
| 0e. | Article | [Medium Article Draft](https://github.com/itsyogesh/relaycode/blob/master/docs/medium-article.md) | Article explaining Relaycode's features and benefits for the Polkadot ecosystem. |
| 1. | UI Refinement | [Builder](https://github.com/itsyogesh/relaycode/tree/master/components/builder) / [Site Pages](https://github.com/itsyogesh/relaycode/tree/master/app) / [Demo](https://relaycode.org/builder) | Enhanced UI with responsive design, theming, 1:1 hex pane mirroring that decomposes encoded data per-field, improved layout, and site pages (about, docs, tools, tutorials, templates, security, privacy, terms). |
| 2. | Wallet Integration | [Wallet Config](https://github.com/itsyogesh/relaycode/blob/master/config/wallet.ts) / [Wallet Provider](https://github.com/itsyogesh/relaycode/blob/master/context/wallet-provider.tsx) | LunoKit-based wallet integration supporting Polkadot.js, Talisman, SubWallet, and other extensions. Includes account selection, chain switching (Polkadot, Kusama, Westend, Paseo + parachains), and transaction signing/submission directly from the builder. |
| 3. | Error Handling and Validation | [Validation](https://github.com/itsyogesh/relaycode/blob/master/lib/validation.ts) / [Input Components](https://github.com/itsyogesh/relaycode/tree/master/components/params/inputs) | 21 specialized input components with type-aware validation: Account, Balance, Amount, Hash, Bytes, Vector, BTreeMap, BTreeSet, Enum, Struct, Option, Vote, Call, Tuple, Moment, Boolean, VoteThreshold, KeyValue, VectorFixed. Real-time per-field encoding feedback in the hex pane. |
| 4. | Performance Optimization | [Input Map](https://github.com/itsyogesh/relaycode/blob/master/lib/input-map.ts) / [Codec](https://github.com/itsyogesh/relaycode/blob/master/lib/codec.ts) | Priority-based input type resolution, efficient codec pipeline with recursive value coercion, Dedot v1 with optimized metadata handling. Production build fully optimized with Next.js standalone output. |
| 5. | Production Deployment | [Demo](https://relaycode.org/) | Full production deployment at [relaycode.org](https://relaycode.org) with Vercel hosting, HTTPS, and the complete builder at [relaycode.org/builder](https://relaycode.org/builder). |

**Additional Information**

> The M2 milestone significantly expanded the extrinsic builder from the M1 foundation. Key highlights:
>
> - **21 specialized input components** covering all major Substrate types (Account, Balance, Amount, Boolean, Hash, Bytes, Vec, BTreeMap, BTreeSet, Option, Enum, Struct, Tuple, Call, Vote, VoteThreshold, Moment, KeyValue, VectorFixed, and Text as fallback)
> - **LunoKit wallet integration** supporting all major Polkadot wallet extensions with multi-chain switching
> - **1:1 hex pane mirroring** that decomposes encoded call data into a tree matching the form structure, showing per-field hex with real-time updates
> - **Bi-directional editing** — paste hex-encoded extrinsic data to decode back into form fields
> - **174 automated tests** ensuring reliability of the type resolution, codec, validation, and hook layers
>
> Repository: https://github.com/itsyogesh/relaycode
> Live Demo: https://relaycode.org/builder
