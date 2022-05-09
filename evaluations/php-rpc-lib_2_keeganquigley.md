# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/php-rpc-lib.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** Alxs, Keeganquigley

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[ ] </li></ul> | [sr25519-bindings](https://github.com/gmajor-encrypt/sr25519-bindings/blob/main/LICENSE), [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api/blob/master/LICENSE) | MIT, GPLv3 |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | READMEs | README could be more thorough.
| 1. | HTTP RPC support | <ul><li>[ ] </li></ul> | [docs](https://github.com/gmajor-encrypt/php-substrate-api#rpc) |
| 2. | sr25519 | <ul><li>[ ] </li></ul> | [repo](https://github.com/gmajor-encrypt/sr25519-bindings) |
| 3. | Unit test | <ul><li>[ ] </li></ul> | [sr25519-bindings](https://github.com/gmajor-encrypt/sr25519-bindings/tree/main/test/Crypto/Test), [php-substrate-api](https://github.com/gmajor-encrypt/php-substrate-api/tree/master/test/Rpc) |
| 4. | Packagist | <ul><li>[ ] </li></ul> | [link](https://packagist.org/packages/gmajor/php-substrate-api) |

## General Notes

1 test in the `php-substrate-api` repo failed: (addressed)

```
4) Rpc\Test\HashTest::testEd25519
FFI\Exception: Failed loading '/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.so'

/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.php:29
/Users/keeganquigley/php-substrate-api/src/Rpc/Hasher/Hasher.php:20
/Users/keeganquigley/php-substrate-api/test/Rpc/HashTest.php:18

5) Rpc\Test\HashTest::testKeyring
FFI\Exception: Failed loading '/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.so'

/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.php:29
/Users/keeganquigley/php-substrate-api/src/Rpc/Hasher/Hasher.php:20
/Users/keeganquigley/php-substrate-api/test/Rpc/HashTest.php:18

6) Rpc\Test\StorageKeyTest::testStorageKeyEncode
FFI\Exception: Failed loading '/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.so'

/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.php:29
/Users/keeganquigley/php-substrate-api/src/Rpc/Hasher/Hasher.php:20
/Users/keeganquigley/php-substrate-api/src/Rpc/StorageKey.php:104
/Users/keeganquigley/php-substrate-api/test/Rpc/StorageKeyTest.php:35

--

There was 1 failure:

1) Rpc\Test\ClientTest::testHttpClientShouldReceiveData
Failed asserting that exception of type "FFI\Exception" matches expected exception "InvalidArgumentException". Message was: "Failed loading '/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.so'" at
/Users/keeganquigley/php-substrate-api/vendor/gmajor/sr25519-bindings/src/Crypto/sr25519.php:29
/Users/keeganquigley/php-substrate-api/src/Rpc/Hasher/Hasher.php:20
/Users/keeganquigley/php-substrate-api/src/Rpc/SubstrateRpc.php:40
/Users/keeganquigley/php-substrate-api/test/Rpc/ClientTest.php:59
.

ERRORS!
Tests: 11, Assertions: 18, Errors: 6, Failures: 1.
```
