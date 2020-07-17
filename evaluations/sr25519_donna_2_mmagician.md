# Evaluation

* **Status:** Accepted
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/23
* **Milestone:** 2
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** 2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>| [license](https://github.com/TerenceGe/sr25519-donna/blob/master/LICENSE) | Correct license  |
| 1.  | vrf sign if less | <ul><li>[x] </li></ul>| [code1](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/src/sr25519.c#L408), [code2](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/src/vrf.c#L9), [example](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/example/src/main.c#L161)||
| 2.  | vrf verify | <ul><li>[x] </li></ul> |[code1](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/src/sr25519.c#L475), [code2](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/src/vrf.c#L206), [example](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/example/src/main.c#L175)||
| 3.  | unit test | <ul><li>[x] </li></ul> |[vrf verify](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/tests/test_check.c#L151), [vrf result not less](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/tests/test_check.c#L194), [vrf sign and check](https://github.com/TerenceGe/sr25519-donna/blob/51074a2a4123538b1b610f8138b00f3e0c7e182e/tests/test_check.c#L217)||
| 4.  | add documentation  | <ul><li>[x] </li></ul> |[vrf sign](https://github.com/TerenceGe/sr25519-donna#vrf-sign), [vrf verify](https://github.com/TerenceGe/sr25519-donna#vrf-verify), [vrf keypair](https://github.com/TerenceGe/sr25519-donna#vrf-keypair)|Only minimal level of documentation provided|

## General Notes

### Documentation
There are no comments throughout the code. While it's not necessarily a blocker, it hinders reading & understanding of the code.

After being asked to do so, the author documented the key methods & parameters, but only to a minimally required level. 

### Examples
The examples are illustrative
