# Evaluation

- **Status:** Accepted
- **Application Document:**  https://github.com/w3f/Grants-Program/blob/master/applications/Diffy_chat.md 
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.| License | <ul><li>[x] </li></ul>| [LICENSE](https://github.com/Belsoft-rs/diffychat-pallet/blob/main/LICENSE) |  |
| 0b.| Documentation |<ul><li>[x] </li></ul>| [Readme.md](https://github.com/Belsoft-rs/diffychat-pallet#readme) |   |
| 0c.| Testing Guide |<ul><li>[x] </li></ul>| [DOTRTC usage](https://github.com/Belsoft-rs/diffychat-dotrtc#usage); [Substrate pallet](https://github.com/Belsoft-rs/diffychat-pallet#getting-started) |  |
| 1.| Diffy chat pallet |<ul><li>[x] </li></ul>| [See here](https://github.com/Belsoft-rs/diffychat-pallet) |   | 
| 2.| DOTRTC library |<ul><li>[x] </li></ul>| [See here](https://github.com/Belsoft-rs/diffychat-dotrtc) |   | 
| 3.| HTML test page |<ul><li>[x] </li></ul>| [See here](https://belsoft-rs.github.io/diffychat/index.html) | | 

## Evaluation V3

### License and Documentation

DOTRTC Library now has a License. The documentation has instructions to run the unit test in the DOTRTC Library but doesn't mention `cargo test` in the Diffy Chat Pallet. Please update the documentation. 

### Manual Testing

I tested again and the application now runs fine in Firefox.

### Unit Test

I ran `npm test` and got an error. I tested the application and it's working fine. Please fix this error.

```
user@localhost:~/Documents/diffychat/diffychat-dotrtc$ npm test

> test
> jest

 FAIL  __tests__/tests.js
  ● Test suite failed to run

    Jest encountered an unexpected token

    Jest failed to parse a file. This happens e.g. when your code or its dependencies use non-standard JavaScript syntax, or when Jest is not configured to support such syntax.

    Out of the box Jest supports Babel, which will be used to transform your files into valid JS based on your Babel configuration.

    By default "node_modules" folder is ignored by transformers.

    Here's what you can do:
     • If you are trying to use ECMAScript Modules, see https://jestjs.io/docs/ecmascript-modules for how to enable it.
     • If you are trying to use TypeScript, see https://jestjs.io/docs/getting-started#using-typescript
     • To have some of your "node_modules" files transformed, you can specify a custom "transformIgnorePatterns" in your config.
     • If you need a custom transformation specify a "transform" option in your config.
     • If you simply want to mock your non-JS modules (e.g. binary assets) you can stub them out with the "moduleNameMapper" config option.

    You'll find more details and examples of these config options in the docs:
    https://jestjs.io/docs/configuration
    For information about custom transformations, see:
    https://jestjs.io/docs/code-transformation

    Details:

    /home/user/Documents/diffychat/diffychat-dotrtc/__tests__/tests.js:1
    ({"Object.<anonymous>":function(module,exports,require,__dirname,__filename,jest){import BinData from "../src/BinData.js";
                                                                                      ^^^^^^

    SyntaxError: Cannot use import statement outside a module

      at Runtime.createScriptFromCode (node_modules/jest-runtime/build/index.js:1495:14)

Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        0.204 s
Ran all test suites.
```

## Evaluation V2

### License and Documentation

Are missing the instructions to run the unit tests and the License for DOTRTC Library.

### Building

I tried to run `rollup -c ./rollup.config.js` and got this error:

```
user@localhost:~/Documents/diffychat/diffychat-dotrtc/demo$ rollup -c ./rollup.config.js

./index.js → ./build/index.js...
[!] RollupError: Could not resolve "./blockchain.js" from "../src/DOTRTC.js"
../src/DOTRTC.js
	at error (/home/user/.nvm/versions/node/v18.16.0/lib/node_modules/rollup/dist/shared/rollup.js:279:30)
	at ModuleLoader.handleInvalidResolvedId (/home/user/.nvm/versions/node/v18.16.0/lib/node_modules/rollup/dist/shared/rollup.js:24433:24)
	at /home/user/.nvm/versions/node/v18.16.0/lib/node_modules/rollup/dist/shared/rollup.js:24395:26
```

After changing the import `./blockchain.js` to `./Blockchain.js` in DOTRTC, it builds without problems.

```
user@localhost:~/Documents/diffychat/diffychat-dotrtc/demo$ rollup -c ./rollup.config.js

./index.js → ./build/index.js...
(!) Unresolved dependencies
https://rollupjs.org/troubleshooting/#warning-treating-module-as-external-dependency
abab (imported by "../src/Peer.js")
wrtc (imported by "../src/Peer.js")
created ./build/index.js in 5.1s
```

Please change the import or the file name.

### Manual Testing

I tested using Firefox and got the same problem. Alice send a message to Bob, but Bob didn't get any message, but Alice received the message from Bob.

![image (18)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/097f9f3a-063c-4d44-b03a-b976afb42780)

I checked the developer tool and got this error:


Using the index.html:
```
Uncaught RangeError: source array is too long
    frameSet file:///home/user/Documents/diffychat/diffychat-dotrtc/demo/build/index.js:56671
    onmessage file:///home/user/Documents/diffychat/diffychat-dotrtc/demo/build/index.js:56593
index.js:56671:17
    frameSet file:///home/user/Documents/diffychat/diffychat-dotrtc/demo/build/index.js:56671
    onmessage file:///home/user/Documents/diffychat/diffychat-dotrtc/demo/build/index.js:56593
```

Using the external application:
```
Uncaught RangeError: source array is too long
    frameSet https://belsoft-rs.github.io/diffychat/index.html:1857
    onmessage https://belsoft-rs.github.io/diffychat/index.html:1857
    PeerChannel https://belsoft-rs.github.io/diffychat/index.html:1857
    channelCreate https://belsoft-rs.github.io/diffychat/index.html:1859
    channelCreate https://belsoft-rs.github.io/diffychat/index.html:1859
    <anonymous> https://belsoft-rs.github.io/diffychat/index.html:1859
index.html:1857:1619
    frameSet https://belsoft-rs.github.io/diffychat/index.html:1857
    onmessage https://belsoft-rs.github.io/diffychat/index.html:1857
    (assíncrono: EventHandlerNonNull)
    PeerChannel https://belsoft-rs.github.io/diffychat/index.html:1857
    channelCreate https://belsoft-rs.github.io/diffychat/index.html:1859
    channelCreate https://belsoft-rs.github.io/diffychat/index.html:1859
    <anonymous> https://belsoft-rs.github.io/diffychat/index.html:1859
    dispatchEvent resource://gre/modules/media/PeerConnection.jsm:819
    dispatchEvent resource://gre/modules/media/PeerConnection.jsm:1760
    notifyDataChannel resource://gre/modules/media/PeerConnection.jsm:1902
```

I tested using Chrome and didn't get this error. All parts worked well in Chrome.

Please either fix the error for Firefox or add instructions for the user to know that the example only works in Chrome.

## Evaluation V1

### License and Documentation

The documentation misses instructions to run the unit tests, instructions to start the chat locally, and the License for DOTRTC Library.

### Unit Test

I ran `cargo test` for running the tests and `cargo tarpaulin` to check the coverage of the tests.

All tests passed:
```
running 6 tests
test mock::__construct_runtime_integrity_test::runtime_integrity_tests ... ok
test tests::test_register ... ok
test tests::test_register_nickname_is_already_registered ... ok
test tests::test_register_account_id_is_already_registered ... ok
test tests::answer_chat_with_static_values ... ok
test tests::offer_chat_with_static_values ... ok

test result: ok. 6 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.02s

Apr 18 08:32:46.263  INFO cargo_tarpaulin::process_handling::linux: Launching test
Apr 18 08:32:46.263  INFO cargo_tarpaulin::process_handling: running /home/user/Documents/Diffy_messenger/diffychat-pallet/target/debug/deps/node_template_runtime-c62c772ee13c4c48

running 2 tests
test tests::check_whitelist ... ok
test __construct_runtime_integrity_test::runtime_integrity_tests ... ok
```

Tarpaulin returned a low coverage:

```
Apr 18 08:32:51.827  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/template/src/lib.rs: 10/21
|| runtime/src/lib.rs: 2/5
|| 
36.36% coverage, 12/33 lines covered
```

### Manual Testing

I tried to use the chat using the external link that you provided. In chrome the chat doesn't work, and I couldn't login using Chrome. Using Firefox, I could login and connect, but Bob didn't receive the messages from Alice. Alice received messages from Bob.


I tried to search for the application of this chat and found [this repository](https://github.com/Belsoft-rs/belsoft-rs.github.io) and [this demo in DOTRTC](https://github.com/Belsoft-rs/diffychat-dotrtc/tree/main/demo) which only have one commit on git, I tested using firefox and got the same results. Could you explain me if this chat is using the substrate?
