# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ventur.md
- **Milestone:** 2
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License | <ul><li>[ ] </li></ul> | [LICENSE](https://github.com/Popular-Coding/ventur/blob/4706eda57b4a73e405ff98df8ea903df680aecd0/LICENSE) | See **General Notes** |
| 0b.| Documentation | <ul><li>[x] </li></ul> | [README.md](https://github.com/Popular-Coding/ventur/blob/4706eda57b4a73e405ff98df8ea903df680aecd0/README.md) |  |
| 0c.| Testing Guide | <ul><li>[ ] </li></ul> | [ventur#run-tests](https://github.com/Popular-Coding/ventur/blob/4706eda57b4a73e405ff98df8ea903df680aecd0/README.md#run-tests) | See **General Notes** |
| 0d.| Docker | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/Popular-Coding/ventur/blob/4706eda57b4a73e405ff98df8ea903df680aecd0/Dockerfile) |  |
| 0e.| Article | <ul><li>[x] </li></ul> | [Google Docs](https://docs.google.com/document/d/1nsOrO7E-vR-4T_PvFiBMPn977d7tf1jdD2JIWGs3r-w/edit?usp=sharing) |  |
| 1. | Substrate module: rfp-process| <ul><li>[ ] </li></ul> | [/pallets/rfp](https://github.com/Popular-Coding/ventur/tree/4706eda57b4a73e405ff98df8ea903df680aecd0/pallets/rfp) | See **General Notes** |
| 2. | Substrate module: nt-nft | <ul><li>[x] </li></ul> | [/pallets/nt-nft](https://github.com/Popular-Coding/ventur/tree/4706eda57b4a73e405ff98df8ea903df680aecd0/pallets/nt-nft) |  |
| 3. | Substrate chain: Ventur | <ul><li>[x] </li></ul> | [ventur](https://github.com/Popular-Coding/ventur/tree/4706eda57b4a73e405ff98df8ea903df680aecd0) |  |
<br/>

## General Notes v1 - Jan 17, 2023
Generally, the deliverable is really good:
- The local setup, both with Docker and without, is well documented and works as expected;
- The functionalities are well documented;
- The code is enoughly tested, this is the coverage:
  - `rfp` pallet: 146/175 = 83%;
  - `nt-nft` pallet: 139/166 = 84%;

There are not important issues to report, I have just some questions about the following points:

### 0a. License
In the deliverable document, you wrote you've licensed the code under the MIT license, but everything looks under the GPL-3.0 license. If this is what you wanted, just confirm (it's not an issue);

### 0c. Testing Guide
In the `nt-nft` pallet manual guide, there is a [section](https://github.com/Popular-Coding/ventur/tree/4706eda57b4a73e405ff98df8ea903df680aecd0/pallets/nt-nft#8-test-rejecting-an-assigned-nt-nft) where it's shown how to reject an assignment: after that user A assigns an `nft` to user B, B can reject it. But actually, is A that can `cancel` the assignment, and not B that can `reject` it. If it's an error, you can redo the screenshot and fix that section or just delete it.
Other than that, the guide is perfect and shows well how to test everything.

### 1. Substrate module: rfp-process
Here I have some questions about the pallet functionings:

1. Is it ok if I managed to accept a `bid` without editing the payment details?
    - in this case, Alice bidded and payed to her self;
2. When you have to `bid`, why do you need to input all the `rfp` parameters when it should be needed just the id (and the other params could be obtained with a free query)?
3. What’s the purpose of `shortlisting` before being able to accept a bid?
4. The payment seems completely detached from the `rfp`, apart from the `rfpReferenceId` param (e.g., I can put payer X and payee Y, with X and Y ≠ from the `rfp`/`bids` actors). Is this ok? This way, an `rfp` owner can accept the `bid` without actually paying the bidder, or am I wrong?