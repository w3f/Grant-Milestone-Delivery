# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/php-scale-lib.md
- **Milestone:** 2
- **Previously successfully merged evaluation:** All by alxs

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [LICENSE](https://github.com/gmajor-encrypt/php-scale-codec/blob/master/LICENSE) | MIT |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [README](https://github.com/gmajor-encrypt/php-scale-codec#readme) | README expanded and inline documentation added in response to feedback
| 1. | Metadata decode | <ul><li>[x] </li></ul> | [Metadata.php](https://github.com/gmajor-encrypt/php-scale-codec/blob/master/src/Codec/Types/Metadata.php) | v12/13/14. v14 wasn't explicitely mentioned in the application but was reviewed with this milestone. Encoding was also implemented.
| 2. | Results encode/decode | <ul><li>[x] </li></ul> | [Results.php](https://github.com/gmajor-encrypt/php-scale-codec/blob/master/src/Codec/Types/Results.php) |  
| 3. | Event decode | <ul><li>[x] </li></ul> | [EventRecord.php](https://github.com/gmajor-encrypt/php-scale-codec/blob/master/src/Codec/Types/EventRecord.php) |  
| 4. | Extrinsic decode | <ul><li>[x] </li></ul> | [Extrinsic.php](https://github.com/gmajor-encrypt/php-scale-codec/blob/master/src/Codec/Types/Extrinsic.php)  |
| 5. | Custom Type reg | <ul><li>[x] </li></ul> |  [Impl](https://github.com/gmajor-encrypt/php-scale-codec/blob/master/src/Codec/Base.php#L151), [Instructions](https://github.com/gmajor-encrypt/php-scale-codec#custom-types) | Instructions + testing improved
| 6. | Unit test | <ul><li>[x] </li></ul> | [Tests folder](https://github.com/gmajor-encrypt/php-scale-codec/tree/master/test/Codec/Test) | Expanded in reponse to feedback, though still very minimal as with M1
| 7. | Packagist | <ul><li>[x] </li></ul> | [Package](https://packagist.org/packages/gmajor/substrate-codec-php) | 

## General Notes

No implementation errors in this milestone as far as I could tell; testing and documentation were both improved upon receiving feedback. Nevertheless, both were lacking upon delivery, took a while to address and testing in particular is still very minimal for the entire project.

See the delivery PR for a more comprehensive list of addressed points.