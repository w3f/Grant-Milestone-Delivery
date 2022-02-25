# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/php-rpc-lib.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [sr25519-bindings](https://github.com/gmajor-encrypt/sr25519-bindings/blob/main/LICENSE), [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api/blob/master/LICENSE) | MIT, GPLv3 |
| 0b. | Documentation | <ul><li>[x] </li></ul> | READMEs, inline documenation | Documentation vastly improved in response to feedback, API usage is now clearly presented and the code is thoroughly documented
| 1. | HTTP RPC support | <ul><li>[x] </li></ul> | [docs](https://github.com/gmajor-encrypt/php-substrate-api#rpc) | https/WS
| 2. | sr25519 | <ul><li>[x] </li></ul> | [repo](https://github.com/gmajor-encrypt/sr25519-bindings) | Instructions on how to set up the necessary extensions and config options would be appreciated. Not sure how this applies to integrating in another project.
| 3. | Unit test | <ul><li>[x] </li></ul> | [sr25519-bindings](https://github.com/gmajor-encrypt/sr25519-bindings/tree/main/test/Crypto/Test), [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api/tree/master/test/Rpc) | Minimal, but improved. Added more to php-substrate-api in response to feedback.
| 4. | Packagist | <ul><li>[x] </li></ul> | [link](https://packagist.org/packages/gmajor/php-substrate-api) | 

## General Notes

Some tests in the `php-substrate-api` repo failed: (addressed)

```
Runtime:       PHP 8.1.3
Configuration: /home/aleixo/php-substrate-api/phpunit.xml.dist

...EE..                                                             7 / 7 (100%)

Time: 00:00.966, Memory: 40.01 MB

There were 2 errors:

1) Rpc\Test\HashTest::testHasher
FFI\Exception: Failed loading '/home/aleixo/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.so'

/home/aleixo/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.php:29
/home/aleixo/php-substrate-api/src/Rpc/Hasher/Hasher.php:20
/home/aleixo/php-substrate-api/test/Rpc/HashTest.php:17

2) Rpc\Test\StorageKeyTest::testStorageKeyEncode
FFI\Exception: Failed loading '/home/aleixo/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.so'

/home/aleixo/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.php:29
/home/aleixo/php-substrate-api/src/Rpc/Hasher/Hasher.php:20
/home/aleixo/php-substrate-api/src/Rpc/StorageKey.php:104
/home/aleixo/php-substrate-api/test/Rpc/StorageKeyTest.php:35

ERRORS!
Tests: 7, Assertions: 22, Errors: 2.
```
