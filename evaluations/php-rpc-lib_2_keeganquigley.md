# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/php-rpc-lib.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** Alxs, Keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [sr25519-bindings](https://github.com/gmajor-encrypt/sr25519-bindings/blob/main/LICENSE), [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api/blob/master/LICENSE) | MIT, GPLv3 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | READMEs, inline documenation | Documentation vastly improved in response to feedback, API usage is now clearly presented and the code is thoroughly documented
| 1. | HTTP RPC support | <ul><li>[x] </li></ul> | [docs](https://github.com/gmajor-encrypt/php-substrate-api#rpc) | https/WS
| 2. | sr25519 | <ul><li>[x] </li></ul> | [repo](https://github.com/gmajor-encrypt/sr25519-bindings) | Instructions on how to set up the necessary extensions and config options would be appreciated. Not sure how this applies to integrating in another project.
| 3. | Unit test | <ul><li>[x] </li></ul> | [sr25519-bindings](https://github.com/gmajor-encrypt/sr25519-bindings/tree/main/test/Crypto/Test), [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api/tree/master/test/Rpc) | Minimal, but improved. Added more to php-substrate-api in response to feedback.
| 4. | Packagist | <ul><li>[x] </li></ul> | [link](https://packagist.org/packages/gmajor/php-substrate-api) | 

## General Notes

Some tests in the `php-substrate-api` repo failed:
