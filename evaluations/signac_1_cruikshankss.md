# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/signac.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by cruikshankss

# Deliverables Table

| Number | Deliverable | Specification |
| -----: | ----------- | ------------- |
| 0a. | License | Apache 2.0  |
| 0b. | Documentation | At least I left [README](https://github.com/digitalnativeinc/signac/tree/main/packages/nxink#readme) for brief description.|
| 0c. | Testing Guide | Build first with `yarn build` then run E2E test code `yarn e2e`, run this then temporary build `tmp` folder will appear in the root project directory  |
| 0d. | Docker | This is a javascript library that does not need docker. |
| 1. | Nx Plugin Repo | [repo](https://github.com/digitalnativeinc/signac/tree/main/packages/nxink)  |

## Additional Notes

Congratulations on completing a successful milestone 1! Thanks for focusing so much on the build toolchain and getting projects into prod. It's awesome to see your dev experience in prod is helping push this technology along. Great job figuring out the `cargo` build system issues/complexities (and upgrading the build tools from `truffle` and `hardhat`). Seems like your experience with `nxcw` cloud build tool has greatly benefited `signac`. I'm only familiar with `webpack` and `parcel` for web2 and I think `signac` is the first web3 build toolchain I've learned about! Also, I hadn't studied [`paritytech/substrate-connect`](https://github.com/paritytech/substrate-connect) yet, so thanks for teaching me about this `wasm` light client. Your monorepo structure makes sense, since last year when I was writing some open-source frontend code, the VSCode monorepo seemed like the best structure/tooling. Like I mentioned, I'm glad you're focused on `npm` and `npx` and looking towards the gradual & careful evolution towards `deno` and more `cargo` for frontend. Actually, `yarn` could possibly help along that roadmap too. Unsure. Thanks for teaching me about `canvas-ui`. I spent a lot of time trying to figure out CSS architecture and react CSS-in-JS libraries. `fela` was really cool but not evolved enough to support a large frontend team. I wish react-core/meta/facebook would open-souce/release `stylex` but I can understand why they haven't. They've released a lot of open-source so far. I think `next.js` is really state-of-the-art regarding coming close to being a Progressive Web App (PWA) and I'm glad you're working with it. I'd recommend looking further into `vercel`, like for example this: https://swr.vercel.app/. And finally, thank you for building tools in this m1 for the build, lint and test!

I've recently left some open-source comments that might benefit you. I think you'd be a great complement to the openbrush project because it seems like your main dev foci are different and adjacent in the tech stack. Please check both the w3f grants program and grants milestone deliveries github repos for more info. Here are some of the main places to start looking:
- [my eval/review of openbrush project](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/openbrush-follow-up-2_6_cruikshankss.md)
- [my comment including frontend architecture in the sol2ink m1 convo](https://github.com/w3f/Grant-Milestone-Delivery/pull/533#issuecomment-1218499971)
- [my comment about web3 frontend/next.js tutorials i wish existed in the typechain app convo](https://github.com/w3f/Grants-Program/pull/1105#pullrequestreview-1071881270)
- [my eval of anagolay and their work towards a deterministic dependency/build system](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/anagolay-project-idiyanale_2_cruikshankss.md)
- [my eval of polkadot.js plus wallet/browser extension which achieves a high level of PWA](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/polkadot-js-plus-extension_2_cruikshankss.md)

Wishing you continued success with the cli in your next milestone!

P.S. I love the pointillism metaphor in your name, signac, and the xkcd comic you linked! ;-)