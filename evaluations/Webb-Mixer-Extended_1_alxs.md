# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [anon](https://github.com/webb-tools/anon/blob/master/LICENSE), [arkworks-gadgets](https://github.com/webb-tools/arkworks-gadgets/blob/master/LICENSE) | Unlicense/Apache 2.0 | The license in anon should be changed to Apache 2.0 as it reuses some files from Substrate
| 0b. | Documentation | <ul><li>[ ] </li></ul> |  | arkworks-gadgets is largely undocumented with only a few inline comments while The README provides vague instructions. anon has more elaborate rustdocs (some of them really nice as I think I already mentioned) but nevertheless a tutorial or an overview of available pallets would be very useful.
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [README](https://github.com/webb-tools/anon#test-) | Some tests currently fail when run without the release flag. Any idea as to what the reason for this is? I'd also still like to check if the tests cover the new hash functions and curves since I had the impression most were simply implemented using poseidon+bls381. Ideally these would be abstracted to test all backends?
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | https://www.notion.so/hicommonwealth/Blog-post-268628ee32ac4f21b9b8531385b00458 | +1 on the rearchitecturing ideas and the reasoning behind
| 1. | Substrate module: Multi-Asset support for mixer | <ul><li>[x] </li></ul> |  | As already discussed the choice of multi-asset implementation (ORML/pallet-assets) could be parametrized in order to avoid code duplication since the two pallets below are currently to 99% equal. However I agree that if projects are likely to integrate either one or the other the abstraction would become unnecessary boilerplate
| 1a. | Substrate module: ORML support | <ul><li>[x] </li></ul> | [pallet-mixer](https://github.com/webb-tools/anon/tree/master/pallets/mixer | 
| 1b. | Substrate module: Pallet asset support | <ul><li>[x] </li></ul> | [pallet-assets-mixer](https://github.com/webb-tools/anon/tree/master/pallets/assets-mixer |
| 2. | Substrate module: New ZKP backend support | <ul><li>[x] </li></ul> | (https://github.com/webb-tools/anon/blob/master/pallets/merkle/src/utils/setup.rs | It's not immediately obvious here that only certain combinations of hash function/backend/curves work. A lot of code in the gadgets repo and this one implements each combination of hash function and curve separately (which also leads to a fair amount of code duplication, I assume there's a good reason you chose this approach?) which are then wrapped in the Backend enum giving the impression that these are composable, which is not really the case (but you may be planning ahead here). The Snark enum seems like a misnomer and likely shouldn't be exposed if Marlin is only used for testing.
| 2a. | Groth16 style proofs using BLS381, BN254 | <ul><li>[ ] </li></ul> | | Would like to give these a final look
| 2b. | Bulletproof style proofs using Curve25519 | <ul><li>[ ] </li></ul> | |
| 2c. | More Poseidon configurations, MIMC | <ul><li>[ ] </li></ul> | |
| 3. | Zero-knowledge circuits | <ul><li>[ ] </li></ul> | https://github.com/webb-tools/arkworks-gadgets | A lot of code duplication here between bridge and mixer modules - can this not be solved more elegantly and besides, why do these high-level applications reach down to the individual gadgets? Wouldn't the gadgets (ideally) be built in a way that they only provides the functionality and can then be combined/adapted to form a bridge/mixer/etc?
| 3. | Docker | <ul><li>[ ] </li></ul> | [Instructions](https://github.com/webb-tools/anon#using-docker-) | Trying to run the node following the README outputs ``webb-node: /lib/x86_64-linux-gnu/libm.so.6: version `GLIBC_2.29' not found (required by webb-node)``


## General Notes

The arkworks gadgets library had already been developed prior to the application.
