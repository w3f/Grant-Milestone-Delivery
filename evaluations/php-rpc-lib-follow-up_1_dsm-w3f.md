# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/php-rpc-lib-follow-up.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable    | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License        |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/LICENSE                      | MIT   |
| 0b.    | Documentation  |<ul><li>[ ] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/README.md                    | Need improvements in the installation steps.      |
| 0c.    | source code 1  |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api                                          |        |
| 0d.    | source code 2  |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-scale-codec/tree/master/src/Codec/interfaces/contracts |        |
| 1.     | ABI            |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/tree/master/src/Rpc/Contract/Abi         |        |
| 2.     | Deploy         |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/src/Rpc/Contract.php         |        |
| 3.     | Read contract  |<ul><li>[x] </li></ul>|https://github.com/gmajor-encrypt/php-substrate-api/blob/master/src/Rpc/Contract/State.php    |        |
| 4.     | Write contract |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/src/Rpc/Contract/Call.php    |        |
| 5.     | Example        |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api#contract                                 |        |
| 6.     | Test           |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/blob/master/test/Rpc/ContractTest.php    |   |
| 7.     | Packagist      |<ul><li>[x] </li></ul>| https://packagist.org/packages/gmajor/php-substrate-api                                      |        |
| 8.     | Github action  |<ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/php-substrate-api/tree/master/.github                      |        |

## Evaluation V3

### Documentation

Some extensions installation instructions were added. However, I still need to install dom and mbstring for running the system and there is no instruction in the tutorial for that. Please notice that dom is not a default extension in all operational systems and mbstring is not a default extension. Please see and add those links to the tutorial:

https://www.php.net/manual/en/dom.installation.php


https://www.php.net/manual/en/mbstring.installation.php


### Testing

The remainder of the problems and improvement requests from Evaluation V2 were properly addressed.

## Evaluation V2

### Documentation

I tried again with php 8.1, and the extensions gmp, dom, curl and mbstring weren't installed by default.

```
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ composer require gmajor/php-substrate-api
Info from https://repo.packagist.org: #StandWithUkraine
Cannot use gmajor/php-substrate-api's latest version 9999999-dev as it requires ext-curl * which is missing from your platform.
In PackageDiscoveryTrait.php line 317:
                                                                                                                         	 
  Package gmajor/php-substrate-api has requirements incompatible with your PHP version, PHP extensions and Composer version:  
	- gmajor/php-substrate-api dev-master requires ext-curl * but it is not present.                                     	 
	- gmajor/php-substrate-api dev-master requires ext-gmp * but it is not present.                                      	 
                                                                                                                         	 
require [--dev] [--dry-run] [--prefer-source] [--prefer-dist] [--prefer-install PREFER-INSTALL] [--fixed] [--no-suggest] [--no-progress] [--no-update] [--no-install] [--no-audit] [--audit-format AUDIT-FORMAT] [--update-no-dev] [-w|--update-with-dependencies] [-W|--update-with-all-dependencies] [--with-dependencies] [--with-all-dependencies] [--ignore-platform-req IGNORE-PLATFORM-REQ] [--ignore-platform-reqs] [--prefer-stable] [--prefer-lowest] [--sort-packages] [-o|--optimize-autoloader] [-a|--classmap-authoritative] [--apcu-autoloader] [--apcu-autoloader-prefix APCU-AUTOLOADER-PREFIX] [--] [<packages>...]
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ php -v
PHP 8.1.16 (cli) (built: Feb 14 2023 18:28:06) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.16, Copyright (c) Zend Technologies
	with Zend OPcache v8.1.16, Copyright (c), by Zend Technologies
```
The documentation needs instructions to install these extensions. The ideal scenario is to provide a fully automated script for installation. 

I needed to change the name `gmajor/php-substrate-api` to other for the installation works. That needs to be fixed.

```
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ composer require gmajor/php-substrate-api
Root package 'gmajor/php-substrate-api' cannot require itself in its composer.json
```



### Testing

The test error was fixed and the automated tests have good coverage. However, there are some improvements needed in it. I notice that the flipper contract was used during the tests. This makes some important cases not being covered such as calls and state queries with arguments. Another improvement is to make better assertions that not only check if the call succeeds but also the expected result of the function calls.


```
user@localhost:~/Documents/php-rcp-lib flow up/php-substrate-api$ phpunit --coverage-text --coverage-filter ./src
PHPUnit 9.5.2 by Sebastian Bergmann and contributors.
.....................                                         	21 / 21 (100%)
Time: 01:56.761, Memory: 104.01 MB
OK (21 tests, 146 assertions)
Code Coverage Report: 	 
  2023-03-02 14:06:33 	 
                      	 
 Summary:             	 
  Classes: 27.66% (13/47)  
  Methods: 43.68% (76/174)
  Lines:   67.94% (498/733)
```

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
