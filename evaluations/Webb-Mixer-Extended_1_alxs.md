# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/MIXERv2.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [anon](https://github.com/webb-tools/anon/blob/master/LICENSE), [arkworks-gadgets](https://github.com/webb-tools/arkworks-gadgets/blob/master/LICENSE) | Apache 2.0
| 0b. | Documentation | <ul><li>[x] </li></ul> | [anon README](https://github.com/webb-tools/anon/#readme), [anon pallets](https://github.com/webb-tools/anon/tree/master/pallets#pallet-overview), [arkworks-gadgets README](https://github.com/webb-tools/arkworks-gadgets#readme) | Added docs to arkworks-gadgets in responso to feedback, the code itself is largely undocumented with only a few inline comments. anon has more elaborate rustdocs (some of them great) and more documentation was added after delivery
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [README](https://github.com/webb-tools/anon#test-) | Addressed issue where some tests failed when run without the release flag. Testing in `arkworks-gadgets` not comprehensive on combinations of curves and hash functions
| 0d. | Article/Tutorial | <ul><li>[x] </li></ul> | [Article](https://www.notion.so/hicommonwealth/Blog-post-268628ee32ac4f21b9b8531385b00458) | +1 on the rearchitecturing ideas and the reasoning behind
| 1. | Substrate module: Multi-Asset support for mixer | <ul><li>[x] </li></ul> |  | As already discussed the choice of multi-asset implementation (ORML/pallet-assets) could be parametrized in order to avoid code duplication since the two pallets below are currently to 99% equal. However I agree that if projects are likely to integrate either one or the other the abstraction would become unnecessary boilerplate
| 1a. | Substrate module: ORML support | <ul><li>[x] </li></ul> | [pallet-mixer](https://github.com/webb-tools/anon/tree/master/pallets/mixer) | 
| 1b. | Substrate module: Pallet asset support | <ul><li>[x] </li></ul> | [pallet-assets-mixer](https://github.com/webb-tools/anon/tree/master/pallets/assets-mixer) |
| 2. | Substrate module: New ZKP backend support | <ul><li>[x] </li></ul> | [implementation](https://github.com/webb-tools/anon/blob/master/pallets/merkle/src/utils/setup.rs) | Not immediately obvious that only certain combinations of hash function/backend/curves work. A lot of code in the gadgets repo and this one implements each combination of hash function and curve separately (which also leads to a fair amount of code duplication). The Snark enum seems like a misnomer and likely shouldn't be exposed if Marlin is only used for testing. This project was immediately superseded by https://github.com/webb-tools/darkwebb-substrate, which should contain the same functionality and will be used for the next delivery, and is unlikely to be maintained
| 2a. | Groth16 style proofs using BLS381, BN254 | <ul><li>[x] </li></ul> | |
| 2b. | Bulletproof style proofs using Curve25519 | <ul><li>[x] </li></ul> | |
| 2c. | More Poseidon configurations, MIMC | <ul><li>[x] </li></ul> | |
| 3. | Zero-knowledge circuits | <ul><li>[x] </li></ul> | [arkworks-gadgets](https://github.com/webb-tools/arkworks-gadgets) | Worth noting that these aren't actually circuits, but rather modules containing logic around a series of circuits. A lot of code duplication between bridge and mixer modules - though maybe this cannot be easily solved more elegantly and it's not part of the delivery anyway.
| 3. | Docker | <ul><li>[x] </li></ul> | [Instructions](https://github.com/webb-tools/anon#using-docker-) | Fixed


## General Notes

The arkworks gadgets library had already been developed prior to the application.

Great work on the abstraction and an interesting project, though parts of it still seem unpolished and feel more like a playground than a library meant to be used by the wider community (e.g. through the project being superseded by the repo mentioned above, intial lack of documentation or patchy testing).

Some feedback left unaddressed.

All in all the project already has an impressive scope and a sneak peek into the team's future plans revealed plenty of interesting ideas.
