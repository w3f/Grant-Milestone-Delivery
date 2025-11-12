# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/DecentralizedThresholdSigningService.md
- **Milestone:** 1

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
