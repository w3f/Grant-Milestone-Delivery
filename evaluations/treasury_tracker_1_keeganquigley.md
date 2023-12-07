# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/TreasuryTracker.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Link |
| -----: | ----------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | Apache 2.0 (https://github.com/stake-plus/treasury-tracker/blob/main/LICENSE) |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | https://github.com/stake-plus/treasury-tracker/blob/main/README.md |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | https://github.com/stake-plus/treasury-tracker/blob/main/README.md#testing-guide |
| **0d.** | Docker | <ul><li>[x] </li></ul> | https://github.com/stake-plus/treasury-tracker/tree/main |
| **0e.** | Article | <ul><li>[x] </li></ul> | https://docs.google.com/document/d/1TgUOFUv69fm3vopuTu7VlYLkRxnsMqUT8-BFa2LPG8I/edit?usp=sharing |
| **1.** | Backend Development | <ul><li>[x] </li></ul> | https://github.com/stake-plus/polkadotjs-proxy |
| **2.** | Frontend Development | <ul><li>[x] </li></ul> | https://github.com/stake-plus/treasury-tracker |
| **3.** | Integration and Testing | <ul><li>[x] </li></ul> |  |

# General Notes

Overall very nice app! The UI is sleek and easy to use. Docs are good but could be more robust. Nice work!

<details>

  <summary>Output</summary>

  ```sh
 => => exporting layers                                                                                              0.3s
 => => writing image sha256:ad33c5925c926da90a5160681f786f7a343d6c430dbca59f972f047e7fa806d9                         0.0s
 => => naming to docker.io/library/treasury-tracker-web                                                              0.0s
[+] Running 6/6
 ✔ Network treasury-tracker_default          Created                                                                 0.0s
 ✔ Volume "treasury-tracker_db_data"         Created                                                                 0.0s
 ✔ Volume "treasury-tracker_nodeapp_volume"  Created                                                                 0.0s
 ✔ Container treasury-tracker-db-1           Started                                                                 0.0s
 ✔ Container treasury-tracker-proxy-1        Started                                                                 0.6s
 ✔ Container treasury-tracker-web-1          Started 
 ```
</details>

# UI

~~There seems to be a UI glitch on the live site, on both Brave and Chrome when at 100%. I have to zoom out to 75% to display it normally. But when I run it locally, I don't have this problem for some reason.~~

~~This happens on both the Referenda and Analytics tabs.~~

**UPDATE:** Above issues have been resolved.

There is also a small issue when trying to click on the "Latest Proposals" sidebar. Every link results in a 404 errror at `https://treasurytracker.io/null`

![null](https://github.com/w3f/Grant-Milestone-Delivery/assets/35080151/8604fb5b-036b-4973-a91e-23c39535f94d)

However clicking on "View All" is successful. Please take a look to see if this can be fixed.

# Tests

**Evaluation v3**

Docker command in instructions fails because the container doesn't exist:
```sh
docker exec -it docker-test_web_1 /bin/bash .
Error: No such container: docker-test_web_1
```
However it works with `docker exec -it treasury-tracker-web-1 /bin/bash`.

**Evaluation v2** 

<details>

  <summary>No more failures but still some errors</summary>

  ./vendor/bin/phpunit --verbose tests
PHPUnit 9.6.13 by Sebastian Bergmann and contributors.

Runtime:       PHP 8.2.9

....EEEEEEE                                                       11 / 11 (100%)

Time: 00:00.507, Memory: 10.00 MB

There were 7 errors:

1) App\Test\TestCase\Model\Table\NetworksTableTest::testColumnsExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/NetworksTableTest.php:26

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/NetworksTableTest.php:26

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/NetworksTableTest.php:26

2) App\Test\TestCase\Model\Table\ReferendaTableTest::testColumnsExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/ReferendaTableTest.php:26

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/ReferendaTableTest.php:26

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/ReferendaTableTest.php:26

3) App\Test\TestCase\Model\Table\ReferendaTableTest::testReferencesExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/ReferendaTableTest.php:45

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/ReferendaTableTest.php:45

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/ReferendaTableTest.php:45

4) App\Test\TestCase\Model\Table\RolesTableTest::testColumnsExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/RolesTableTest.php:26

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/RolesTableTest.php:26

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/RolesTableTest.php:26

5) App\Test\TestCase\Model\Table\SessionsTableTest::testColumnsExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/SessionsTableTest.php:26

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/SessionsTableTest.php:26

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/SessionsTableTest.php:26

6) App\Test\TestCase\Model\Table\UsersTableTest::testColumnsExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/UsersTableTest.php:26

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/UsersTableTest.php:26

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/UsersTableTest.php:26

7) App\Test\TestCase\Model\Table\W3fClassificationTableTest::testColumnsExistence
Cake\Database\Exception\MissingConnectionException: Connection to Mysql could not be established: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:133
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/W3fClassificationTableTest.php:26

Caused by
PDOException: SQLSTATE[HY000] [2002] php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/W3fClassificationTableTest.php:26

Caused by
PDOException: PDO::__construct(): php_network_getaddresses: getaddrinfo for db failed: nodename nor servname provided, or not known

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:121
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/Retry/CommandRetry.php:70
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver.php:131
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:164
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/SchemaDialect.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Driver/Mysql.php:216
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Schema/Collection.php:53
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Database/Connection.php:418
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/ORM/Table.php:520
/Users/keeganquigley/treasury-tracker/tests/TestCase/Model/Table/W3fClassificationTableTest.php:26

ERRORS!
Tests: 11, Assertions: 8, Errors: 7.
</details>

**Evaluation v1**
<details>

  <summary>Running `./vendor/bin/phpunit --verbose tests` results in 12 errors & 1 failure:</summary>

  ```php
 PHPUnit 9.6.13 by Sebastian Bergmann and contributors.

F..EEEEEEEEEEEE                                                   15 / 15 (100%)

Time: 00:00.012, Memory: 8.00 MB

There were 12 errors:

1) App\Test\TestCase\ApplicationTest::testMiddleware
InvalidArgumentException: $errorHandler argument must be a config array or ExceptionTrap instance. Got `NULL` instead.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Error/Middleware/ErrorHandlerMiddleware.php:115
/Users/keeganquigley/treasury-tracker/src/Application.php:81
/Users/keeganquigley/treasury-tracker/tests/TestCase/ApplicationTest.php:98

2) App\Test\TestCase\Controller\PagesControllerTest::testDisplay
LogicException: Cannot load `\Application` for use in integration testing.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/TestSuite/ContainerStubTrait.php:87
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:502
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:473
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:364
/Users/keeganquigley/treasury-tracker/tests/TestCase/Controller/PagesControllerTest.php:41

3) App\Test\TestCase\Controller\PagesControllerTest::testMissingTemplate
LogicException: Cannot load `\Application` for use in integration testing.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/TestSuite/ContainerStubTrait.php:87
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:502
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:473
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:364
/Users/keeganquigley/treasury-tracker/tests/TestCase/Controller/PagesControllerTest.php:55

4) App\Test\TestCase\Controller\PagesControllerTest::testMissingTemplateInDebug
LogicException: Cannot load `\Application` for use in integration testing.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/TestSuite/ContainerStubTrait.php:87
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:502
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:473
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:364
/Users/keeganquigley/treasury-tracker/tests/TestCase/Controller/PagesControllerTest.php:69

5) App\Test\TestCase\Controller\PagesControllerTest::testDirectoryTraversalProtection
LogicException: Cannot load `\Application` for use in integration testing.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/TestSuite/ContainerStubTrait.php:87
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:502
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:473
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:364
/Users/keeganquigley/treasury-tracker/tests/TestCase/Controller/PagesControllerTest.php:84

6) App\Test\TestCase\Controller\PagesControllerTest::testCsrfAppliedError
LogicException: Cannot load `\Application` for use in integration testing.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/TestSuite/ContainerStubTrait.php:87
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:502
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:473
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:380
/Users/keeganquigley/treasury-tracker/tests/TestCase/Controller/PagesControllerTest.php:96

7) App\Test\TestCase\Controller\PagesControllerTest::testCsrfAppliedOk
LogicException: Cannot load `\Application` for use in integration testing.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/Core/TestSuite/ContainerStubTrait.php:87
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:502
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:473
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/IntegrationTestTrait.php:380
/Users/keeganquigley/treasury-tracker/tests/TestCase/Controller/PagesControllerTest.php:110

8) App\Test\TestCase\Controller\UsersControllerTest::testIndex
UnexpectedValueException: Could not find fixture `app.Users`.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/FixtureHelper.php:90
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/TruncateStrategy.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:301
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:249

9) App\Test\TestCase\Controller\UsersControllerTest::testView
UnexpectedValueException: Could not find fixture `app.Users`.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/FixtureHelper.php:90
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/TruncateStrategy.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:301
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:249

10) App\Test\TestCase\Controller\UsersControllerTest::testAdd
UnexpectedValueException: Could not find fixture `app.Users`.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/FixtureHelper.php:90
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/TruncateStrategy.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:301
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:249

11) App\Test\TestCase\Controller\UsersControllerTest::testEdit
UnexpectedValueException: Could not find fixture `app.Users`.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/FixtureHelper.php:90
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/TruncateStrategy.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:301
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:249

12) App\Test\TestCase\Controller\UsersControllerTest::testDelete
UnexpectedValueException: Could not find fixture `app.Users`.

/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/FixtureHelper.php:90
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/Fixture/TruncateStrategy.php:51
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:301
/Users/keeganquigley/treasury-tracker/vendor/cakephp/cakephp/src/TestSuite/TestCase.php:249

--

There was 1 failure:

1) App\Test\TestCase\ApplicationTest::testBootstrap
plugins has DebugKit?
Failed asserting that true is false.

/Users/keeganquigley/treasury-tracker/tests/TestCase/ApplicationTest.php:49

ERRORS!
Tests: 15, Assertions: 4, Errors: 12, Failures: 1.
```
</details>
