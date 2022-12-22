# Evaluation


- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/slonigiraf.md
- **Milestone:** 1
- **Kusama Identity:** -
- **Previously successfully merged evaluation:** -

| Number | Deliverable      | Accepted | Link                                                             | Evaluation Notes                                                                        |
|--------|------------------| -------- |------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| 0a.    | License          |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter/LICENSE](https://github.com/slonigiraf/recommendation-letter/blob/9bfc5ead6213b99568b21cbce25cba2a04f50d57/LICENSE) |  The Unlicense                                                                             |
| 0b.    | Documentation    |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter](https://github.com/slonigiraf/recommendation-letter/tree/9bfc5ead6213b99568b21cbce25cba2a04f50d57)  | Code level documentation is provided inline. |
| 0c.    | Test Guide       |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter-example-ui/README.md](https://github.com/slonigiraf/recommendation-letter-example-ui/blob/8d7e3a19cd5656051530c7370887a7f97a4fc7cb/README.md) | The main use-case via the provided example UI.                                                                                      |
| 0d.    | Docker           |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter-example-node/docker-compose.yml](https://github.com/slonigiraf/recommendation-letter-example-node/blob/258139bf1e9077e725674d6520472fe0df173b71/docker-compose.yml)                                                              | Compilation issue, requested a fix.                                                                                     | 
| 0e.    | Article          |<ul><li>[x] </li></ul>| [SLON - digital reputation for responsible recommendation creation](https://github.com/slonigiraf/slon-whitepaper/blob/c684e0fc8b656a082cbae6f505472b2c010a1c05/ENG.md)                                                              | The whitepaper on the concept behind Slonigiraf                                                                 |
| 1.     | Substrate pallet |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter](https://github.com/slonigiraf/recommendation-letter/commit/9bfc5ead6213b99568b21cbce25cba2a04f50d57) | see General Notes                                                                                     |
| 2a.    | Example node     |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter-example-node](https://github.com/slonigiraf/recommendation-letter-example-node/blob/a5558a158e2cec1f88f606767f0cc245d09af6ca/docker-compose.yml) | see General Notes                                                                                      |
| 2b.    | Example UI       |<ul><li>[x] </li></ul>| [/slonigiraf/recommendation-letter-example-ui](https://github.com/slonigiraf/recommendation-letter-example-ui/commit/8d7e3a19cd5656051530c7370887a7f97a4fc7cb) | see General Notes                                                                                   |


## General Notes

- The main use-case has been tested manually using the provided test guide. Success.

- Provided pallet test code passed with 3 warnings: 


		warning: unused import: `frame_support::pallet_prelude::*`
		  --> src/lib.rs:38:6
		   |
		38 |     use frame_support::pallet_prelude::*;
		   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		   |
		   = note: `#[warn(unused_imports)]` on by default
		
		warning: unused import: `frame_system::pallet_prelude::*`
		  --> src/lib.rs:39:6
		   |
		39 |     use frame_system::pallet_prelude::*;
		   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
		
		warning: unused import: `scale_info::TypeInfo`
		  --> src/lib.rs:40:6
		   |
		40 |     use scale_info::TypeInfo;
		   |         ^^^^^^^^^^^^^^^^^^^^
		
		warning: `pallet-letters` (lib) generated 3 warnings on unused imports
		
		   Compiling pallet-balances v4.0.0-dev (https://github.com/paritytech/substrate.git?branch=polkadot-v0.9.18#fc3fd073)
		warning: `pallet-letters` (lib test) generated 3 warnings (3 duplicates)
		    Finished test [unoptimized + debuginfo] target(s) in 1m 07s
		     Running unittests (target/debug/deps/pallet_letters-a129fcf6b7549343)


- Provided UI test code passed:

		recommendation-letter-example-ui % yarn test
		PASS src/__tests__/App.js
		PASS src/__tests__/Helpers.js
		
		Test Suites: 2 passed, 2 total
		Tests:       5 passed, 5 total
		Snapshots:   0 total
		Time:        1.034 s
		Ran all test suites.

- Provided docker-compose.yaml stopped due to an issue:

		error: could not compile `regex-syntax`
		
- There's some room for improvement on the example-UI regarding how it reponds to profile changes (i.e. switching from Alice to Bob etc.)	


