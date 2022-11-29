# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-boxes.md
- **Milestone:** 1
- **Kusama Identity:** [HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu](https://kusama.subscan.io/account/HC8pZ53SejB9YALHn2qXea6XMFFNgxpdXhVvtF7uU5dTSqu)
- **Previously successfully merged evaluation:** All by 0xCaso

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [/erc20/README.md](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc20/README.md), [/erc721/README.md](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc721/README.md), [/flipper/README.md](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/flipper/README.md) | - |
| 0c. | Testing and its Guide | <ul><li>[ ] </li></ul> | [/erc20/ui/tests](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc20/ui/tests), [/erc721/ui/tests](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc721/ui/tests), [/flipper/ui/tests](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/flipper/ui/tests) | See **General Notes** |
| 0d. | Docker | <ul><li>[x] </li></ul> | [/erc20/ui/Dockerfile](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc20/ui/Dockerfile), [/erc721/ui/Dockerfile](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc721/ui/Dockerfile), [/flipper/ui/Dockerfile](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/flipper/ui/Dockerfile) | - |
| 0e. | Articles | <ul><li>[x] </li></ul> | [Medium article](https://medium.com/@avirajkhare00/introducing-ink-boxes-277b54ed23c9) | - |
| 0. | Creation of Boxes | <ul><li>[ ] </li></ul> | [/erc20](https://github.com/avirajkhare00/ink-boxes/tree/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc20), [/erc721](https://github.com/avirajkhare00/ink-boxes/tree/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc721), [/flipper](https://github.com/avirajkhare00/ink-boxes/tree/0d66758fcd3f71f44a46cdedae839b19282cd0bf/flipper) | See **General Notes** |
<br/>

## General Notes v2 - Nov 29, 2022
The repository has changed from [/nerdsince98/ink-boxes](https://github.com/nerdsince98/ink-boxes) to [/avirajkhare00/ink-boxes](https://github.com/avirajkhare00/ink-boxes), [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/621#issuecomment-1328050579) is the explanation.

### Improvements
Here there are the **improvements** since the last evaluation:
- the documentation has been improved with the suggested additions;
- an article has been written;
- little change of style for the UI, also if it's always super minimal and just an interface;
- tests added for the UI, but they actually don't test the functionalities, example from [ERC20 UI test](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc20/ui/tests/index.test.tsx#L38):
```
it("should click Enter Smart Contract submit Button", async () => {
    const submitAddress = jest.fn();
    render(<Button color='primary' onClick={submitAddress}>Submit</Button>);
    await userEvent.click(screen.getByText("Submit"));
    expect(submitAddress).toHaveBeenCalled();
});
```
Instead, for this specific example, I'd check if the state variable [addressSubmitted](https://github.com/avirajkhare00/ink-boxes/blob/0d66758fcd3f71f44a46cdedae839b19282cd0bf/erc20/ui/pages/index.tsx#L24) gets correctly updated with the new value. This methodology applies to the other tests too, otherwise you cannot prove the UI correctly works (the function submitAddress gets called, but what is the effect?).

### What's missing
Here there is what has **not been fixed** since the last evaluation:
- as already mentioned, I'd write some more meaningful tests;
- basically all the UI issues cited in the last evaluation, in the section **0. Creation of boxes** (with tests that actually prove functionalities work, you can check if these issues are there or not).

I'd add also add an "output" field for the "Enter Smart Contract Address" action, so one knows if something went wrong or not. Also, it is not clear what's the address that is interacting with the contract (thanks to Substrate Contracts UI this is visible, but I think this should be also visible in the boxes as they should be a replacement for that UI, at least for the interacting part).

<br/>

## General Notes v1 - Nov 21, 2022
Taking into consideration that the project aims to be something similar to [Truffle Boxes](https://trufflesuite.com/boxes/), I think, overall, this milestone submission could slightly improve. This is because the most challenging thing of this specific milestone should have been the writing of smart contracts, which actually are foundable [here](https://github.com/paritytech/ink/tree/master/examples) (Parity Ink examples), as the UI features are really, really basic here. It would have been better if there was some particular box, like the ones you mentioned in the [Grant application document](https://github.com/w3f/Grants-Program/blob/master/applications/ink-boxes.md) (NFT marketplace, Decentralized Ecommerce platform... let us know if they're work-in-progress or not), but for now, I'd focus on the following issues:

### 0b. Documentation
Actually, it's pretty clear. I've had just a minor issue because I was not using `cargo-contract` at version `alpha 2.0.0`. 
- I'd mention inside the docs to use this specific `cargo-contract` version;
- I'd add also to use `rustup` at the `stable` version (not `nightly`);
- I'd add minimal docs for building and starting the docker containers:
```
docker build -t name-you-want .
docker run -dp 3000:3000 name-you-want
```

### 0c. Testing and its guide
Smart Contracts tests are good enough, as they were already part of the examples. 

The UI tests, unluckily, are not as defined in the [Grant application document](https://github.com/w3f/Grants-Program/blob/master/applications/ink-boxes.md), i.e. "Core functions will be fully covered by comprehensive unit tests written in Jest and UI tests in Cypress to ensure functionality and robustness. In the guide, we will describe how to run these tests.". I'd focus to develop the UI tests at least slightly better: here unit tests are almost non-existent and e2e (or UI tests with Cypress) are non-existent. Maybe you could try to test the main functionalities of the provided boxes ("Does the UI work if I press the X button?").

The guide is clear.

A minor issue: test names for `ERC721` are the same as `ERC20` ones (you can see it [here](https://github.com/nerdsince98/ink-boxes/blob/a31e714b6fd04e60b04c66189360d77d64108029/erc721/ui/tests/index.test.tsx#L5)).

### 0e. Articles
A minimum draft of at least one article, if it's not too much, would be nice to have.

### 0. Creation of Boxes
Using the UI, I've noticed these issues:

#### `ERC20`
- `transfer` button: it works, but the first time gives the error `insufficient balance` (the tx works though);

#### `ERC721`
- `transfer`: I get the error `{"err":"NotApproved"}` but it actually works (if I try `balance of` I can notice it);
- `approve`: I get the same error of `transfer` and have no feedback about the outcome of this operation;

#### General
- I'd improve a bit the UIs (if it's not too difficult, maybe make a "connection wallet" feature to test the contracts, but it's up to you);
- I'd add feedback about the outcome of the operations;
- I'd delete error messages if a new button is pressed and the operation works (e.g., minting a token with an already existent `tokenId`);
- If I press too many times some buttons the UI gets stuck (happens with flipper but also with the other UIs), try to see if you can fix it;

Finally, if I deploy the contracts through the Substrate Contracts UI, I get these errors in the `substrate-contracts-node` instance:
```
2022-11-21 10:49:35.075 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: panicked at 'dispatching ink! constructor failed: could not read input', /Users/.../ink-boxes/erc20/erc20/lib.rs:7:5

2022-11-21 11:09:42.514 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: panicked at 'dispatching ink! constructor failed: could not read input', /Users/.../ink-boxes/erc721/erc721/lib.rs:66:5

2022-11-21 11:43:07.621 DEBUG tokio-runtime-worker runtime::contracts: Execution finished with debug buffer: panicked at 'dispatching ink! constructor failed: could not read input', /Users/.../ink-boxes/flipper/flipper/lib.rs:6:5
```
Maybe it's not a problem from your end, I just wanted to point it out. That shouldn't be important.

### Conclusion
I think the most "urgent" things you should fix, in order, should be:

1. UI/UX little issues mentioned in **0. Creation of Boxes**;
2. Add some unit tests and (eventually) E2E with Cypress (for E2E judge if it's not too much for this milestone);
3. Little article draft;
4. Add the mentioned things in **0b. Documentation**;
5. Maybe add another box (judge if it's doable for this milestone, focus on the above things).