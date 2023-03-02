# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/php-rpc-lib-follow-up.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable    | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License        |<ul><li>[x] </li></ul>| MIT license                                                                                  | MIT or GNU? Link please.   |
| 0b.    | Documentation  |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/README.md                    | Need improvements in the installation steps.      |
| 0c.    | source code 1  |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api                                          |  Not fully evaluated yet      |
| 0d.    | source code 2  |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-scale-codec/tree/master/src/Codec/interfaces/contracts | Not fully evaluated yet       |
| 1.     | ABI            |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/tree/master/src/Rpc/Contract/Abi         |  Not fully evaluated yet      |
| 2.     | Deploy         |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/src/Rpc/Contract.php         |  Not fully evaluated yet      |
| 3.     | Read contract  |<ul><li>[ ] </li></ul>|https://github.com/gmajor-encrypt/php-substrate-api/blob/master/src/Rpc/Contract/State.php    | Not fully evaluated yet       |
| 4.     | Write contract |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/src/Rpc/Contract/Call.php    |  Not fully evaluated yet      |
| 5.     | Example        |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api#contract                                 | Not fully evaluated yet       |
| 6.     | Test           |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/test/Rpc/ContractTest.php    | Not fully evaluated yet       |
| 7.     | Packagist      |<ul><li>[ ] </li></ul>| https://packagist.org/packages/gmajor/php-substrate-api                                      | Not fully evaluated yet       |
| 8.     | Github action  |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/tree/master/.github                      |  Not fully evaluated yet      |

## Evaluation V1

### License

The delivery says that the license is MIT but the license in the root of the repository is GNU. Both are acceptable. Please check which is the correct license for your project and provide the link for it.

Current: https://github.com/gmajor-encrypt/php-substrate-api/blob/master/LICENSE

### Documentation

When I tried to install with `composer require gmajor/php-substrate-api` I got this error:

```
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ composer require gmajor/php-substrate-api
Root package 'gmajor/php-substrate-api' cannot require itself in its composer.json
```

I needed to change the name `gmajor/php-substrate-api` to other for the installation works. The documentation needs instructions to install the PHP extensions gmp, dom, and curl. The ideal scenario is to provide a fully automated script for installation.

In `storage key` example, line 14 `print_r(StorageKey::encode($hasher,"Timestamp", "now", $metadata, [])));` there is a syntax error. The line has one more `)`.


### Testing

All tests passed.
```
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ make test
vendor/bin/phpunit --verbose
PHPUnit 9.6.4 by Sebastian Bergmann and contributors.

Runtime:   	PHP 8.0.28
Configuration: /home/user/Documents/php-rcp-lib flow up/php-substrate-api/phpunit.xml.dist

.....................                                         	21 / 21 (100%)

Time: 01:09.405, Memory: 106.01 MB

OK (21 tests, 146 assertions)
```
But sometimes the tests fail like:

```
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ make test
vendor/bin/phpunit --verbose
PHPUnit 9.6.4 by Sebastian Bergmann and contributors.

Runtime:   	PHP 8.0.28
Configuration: /home/user/Documents/php-rcp-lib flow up/php-substrate-api/phpunit.xml.dist

...E.....EE.E........                                         	21 / 21 (100%)

Time: 01:53.536, Memory: 106.01 MB

There were 4 errors:

1) Rpc\Test\ClientTest::testSendTransaction
InvalidArgumentException: call rpc get error Invalid Transaction

/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/WSClient.php:68
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/JsonRpc/Author.php:101
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:84
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:70
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/test/Rpc/ClientTest.php:113

2) Rpc\Test\ContractTest::testSampleDeployContract
InvalidArgumentException: call rpc get error Invalid Transaction

/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/WSClient.php:68
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/JsonRpc/Author.php:101
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:84
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:70
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Contract.php:114
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/test/Rpc/ContractTest.php:172

3) Rpc\Test\ContractTest::testErc20DeployContract
InvalidArgumentException: call rpc get error Invalid Transaction

/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/WSClient.php:68
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/JsonRpc/Author.php:101
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:84
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:70
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Contract.php:114
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/test/Rpc/ContractTest.php:185

4) Rpc\Test\ContractTest::testContractSendTx
InvalidArgumentException: call rpc get error Invalid Transaction

/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/WSClient.php:68
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/JsonRpc/Author.php:101
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:84
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Pallet/Pallet.php:70
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/src/Rpc/Contract/Call.php:127
/home/user/Documents/php-rcp-lib flow up/php-substrate-api/test/Rpc/ContractTest.php:229

ERRORS!
Tests: 21, Assertions: 139, Errors: 4.
make: *** [Makefile:7: test] Erro 2
```

Please either explain why this occurs or fix the tests. 

Since sometimes some tests fail the testing coverage was not evaluated yet.
