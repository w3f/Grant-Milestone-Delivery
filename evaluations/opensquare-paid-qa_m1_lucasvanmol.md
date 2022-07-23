# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/OpenSquare_paid_qa_protocol.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| https://github.com/opensquare-network/paid-qa/blob/main/LICENSE | Apache 2.0 |
| 0b. | Code-1 |<ul><li>[x] </li></ul>| https://github.com/opensquare-network/paid-qa/tree/release-1.0.0 | Monorepo organized in yarn workspaces. The documentation about setting everything up is clear despite the complexity of the project and it's many moving parts. |
| 0c. | Code-2 |<ul><li>[x] </li></ul>| https://github.com/opensquare-network/paid-qa/tree/release-1.0.0/packages/scan | This package is used to scan the blockchain for qa-spec interactions. While it works for the purposes of this milestone delivery, it would be great if this could be improved - optimizing some of the [memory used](https://github.com/opensquare-network/paid-qa/blob/04bfe8bd3ef6e21130bc498d4b6f5535b160b0c6/packages/scan/src/scan/index.js#L30) in addition to fixing tests on the [npm package](https://github.com/opensquare-network/scan-common) in its dependencies (the npm package is also being used for earlier opensquare projects, and therefore not in the scope of this current grant). |
| 0d. | Code-3 |<ul><li>[x] </li></ul>| [Repo for IPFS client](https://github.com/opensquare-network/ipfs); [Script to pin file to IPFS](https://github.com/opensquare-network/paid-qa/blob/release-1.0.0/packages/server/src/scripts/pin-to-ipfs.js); [Scripts to fetch file from IPFS](https://github.com/opensquare-network/paid-qa/tree/release-1.0.0/packages/scan/src/ipfs) | |
| 0e. | Code-4 |<ul><li>[x] </li></ul>| [Script to pin topics/answers](https://github.com/opensquare-network/paid-qa/blob/release-1.0.0/packages/server/src/scripts/pin-to-ipfs.js); [Code which submits batch of answers](https://github.com/opensquare-network/paid-qa/blob/release-1.0.0/packages/node-api/src/features/remark/remark.controller.js#L163) | |
| 0f. | Documentation |<ul><li>[x] </li></ul>| [Discussion: how it works](https://github.com/opensquare-network/paid-qa/discussions/697), [spec repo](https://github.com/opensquare-network/qa-spec), [tutorial](https://hackmd.io/@WIq3uV0rRwS6W3GGj2pmyA/SJKC9ucjc), [Readme](https://github.com/opensquare-network/paid-qa/tree/release-1.0.0#readme)  | Initial issue in local setup documentation with MongoDB was resolved quickly. Overall, READMEs are clear, but inline documentation is a bit rarer. |
| 0g. | Test cases |<ul><li>[x] </li></ul>| https://github.com/opensquare-network/paid-qa/tree/release-1.0.0 | `yarn test` passes. Covers core functionality and most functions, but only ones that are mentioned in this delivery. It would be nice to have additional tests of the other packages in the monorepo such as `node-api`, and better coverage of `server`. |
| 1-14. | User stories |<ul><li>[x] </li></ul>| https://review-paid-qa.on.fleek.co | User stories are all working well. | 


## General Notes

In general the application is very responsive and very well fleshed out. Using the webapp and enacting the user stories felt intuitive, and all functionality is well integrated. I'm therefore accepting this delivery because the execution here is very well done.

However, I would like to mention that in terms of codebase, I feel like some improvements could be done to testing to cover more than just the core functions. Something to consider could be CI with end-to-end testing, using tools like [cypress](https://www.cypress.io), for example. You could also have the application connecting to a local node to test out all the functionality without having to use the testnet. I think this could be especially useful as your application grows in size, but of course I realize it's quite a bit of work to implement.

