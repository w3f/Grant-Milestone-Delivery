# Evaluation

> Don't remove any of the mandatory parts presented in bold letters or as headlines!
> Lines starting with `>`, such as this one, can be removed.

- **Status:** Accepted
- **Application Document:** [Nolik](https://github.com/w3f/Grants-Program/blob/master/applications/Nolik.md)
- **Milestone:** 2
- **Kusama Identity:** [Cd44TCpSe1BVdKzNRG5YrZ9Vd5EwYNzcAn8G9CJKNh1zGxq](https://explorer.polkascan.io/kusama/account/Cd44TCpSe1BVdKzNRG5YrZ9Vd5EwYNzcAn8G9CJKNh1zGxq)
- **Previously successfully merged evaluation:** (https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/nolik_eval_1_takahser.md)

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>|[License](https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/LICENSE.md) | Apache License 2.0 |
| 0b.  | Documentation |<ul><li>[x] </li></ul>|[Documentation](https://github.com/chainify/nolik-cli/blob/79d3ba5ba0ea1702d4aaf72488789b77349ba5bf/README.md)| Documentation is provided for every stage, just a little fix needed in the GetMessages functionality|
| 0c.  | Testing Guide |<ul><li>[x] </li></ul>|[Testing](https://github.com/chainify/nolik-cli/tree/main/tests)| Tests work smoothly|
| 0d.  | Docker |<ul><li>[] </li></ul>|[Docker](https://hub.docker.com/r/chainify/substrate-nolik-dev)| DockerFile is included into deliverables' list, but it's not related to the milestone, as it was part of Milestone #1|
| 0e.  | Article |<ul><li>[] </li></ul>|[Article]| Article not provided|
| 1 | CLI-Compose |<ul><li>[x] </li></ul>|[MessageComposition](https://github.com/chainify/nolik-cli)| The composition of the message works as expected, the message and the attached file are saved on IPFS and the corresponding hash is successfully returned|
| 2 | CLI-Send |<ul><li>[x] </li></ul>|[MessageSent](https://github.com/chainify/nolik-cli)| Message is sent to the recipient, and the correspondent ID is returned|
| 3 | CLI-Get |<ul><li>[x] </li></ul>|[GetMessages](https://github.com/chainify/nolik-cli)| Messages are correctly gathered and saved into the proper file|
| 4 | CLI |<ul><li>[x] </li></ul>|[WalletAccountCreation](https://github.com/chainify/nolik-cli)| Wallet and accounts are correctly created.Connection with nodes work|

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

## Workflow

Using the CLI was smooth and easy, everything worked as expected.
The creation of a wallet, association of an account, and all the messaging cycle worked as described.

## Fixes/Updates

The README.md has a slight issue, when describing how to get messages.The correct command is:
cargo run -- get messages -a YOUR_ACCOUNT
At this stage of development, with a PoC already working, an article on a media such as Medium could be extremely useful.

## Personal consideration
The idea of creating a successful messaging service via blockchain is extremely interesting, and deserves further development; the implementation is easy-to-use, and clearly has potential to be built into a user-friendly application.
Some concerns may involve the use of IPFS, as it publicly exposes the database used to save messages (even though they are encrypted), and gives a certain latency to the service, which is not directly peer-to-peer, but rather needs to get the message successfully saved on IPFS before being able to send it to the recipient(s).
Moreover, even if it's possible, it's not 100% sure to delete saved files from IPFS, and as they may include personal data from the user, this won't be GDPR compliant within EU.

