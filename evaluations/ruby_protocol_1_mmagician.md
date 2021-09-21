# Evaluation

* **Status:** In progress
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RubyProtocol.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician


| Number | Deliverable                                                                  | Accepted               | Link                                                                                                                                                                                     | Evaluation Notes                                                                                                                                                                                                                                                                            |
|--------|------------------------------------------------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                                                      | <ul><li>[x] </li></ul> | [Functional encryption repo](https://github.com/Ruby-Protocol/Functional_encryption_rust/blob/main/LICENSE), [private ml](https://github.com/Ruby-Protocol/private_ml/blob/main/LICENSE) |                                                                                                                                                                                                                                                                                             |
|    0b. | Testing Guide                                                                | <ul><li>[x] </li></ul> | https://github.com/rubyprotocol/documents/blob/main/unit_test_guide.md                                                                                                                   | As pointed out by Michael, this [doc](https://github.com/rubyprotocol/documents/blob/main/unit_test_guide.md) isn't very helpful as it's not clear which repo it refers to. However, the private_ml repo has the same instructions: https://github.com/Ruby-Protocol/private_ml#run-tests-1 |
|    0c. | Article/Tutorial                                                             | <ul><li>[ ] </li></ul> | https://github.com/rubyprotocol/documents/blob/main/Functionality_Tutorial.md                                                                                                            | Not a tutorial, it's basically a copy of the delivery documentation                                                                                                                                                                                                                         |
|      1 | Rust implementation of cryptographic libraries                               |                        | https://github.com/Ruby-Protocol/Functional_encryption_rust                                                                                                                              |                                                                                                                                                                                                                                                                                             |
|      2 | Private machine learning based on functional encryption and substrate pallet |                        | https://github.com/Ruby-Protocol/private_ml                                                                                                                                              |                                                                                                                                                                                                                                                                                             |
|      3 | Benchmark results                                                            |                        | https://github.com/rubyprotocol/documents/blob/main/Benchmark_result.md                                                                                                                  |                                                                                                                                                                                                                                                                                             |
|      4 | Docker                                                                       |                        | https://github.com/rubyprotocol/documents/blob/main/Docker_demo_tutorial.md                                                                                                              |                                                                                                                                                                                                                                                                                             |

## General notes

### Using code without attribution
In the current state, this delivery would be terminated for plagarising code. Two instances were found:
1. The use of code from https://github.com/miracl/core in both of the repositories. There is no mentiond that I could find which states the original authors of the code and no proper attributions.
2. The use of code from https://github.com/zeropoolnetwork/zeropool-substrate. Again, there is no proper attribution.

Using code without attribution is a very serious offense and would normally lead to immediate termination, as per our [guidelines](https://github.com/w3f/Grants-Program#guidelines). In this case I do want to give the team a chance to correct this mistake, especially that usage of zeropool's code was discussed and included in milestone deliverables - which tells me it's probably the case of omission.

### Modules usage

Regardless of inclunding attribution or not, probably neither of the above mentioned repos should actually be placed explicitly in the code itself. Why aren't you simply referencing these as Rust modules in your Cargo.toml, and pulling from github/crates.io?

Also, where is zeropool even used? I coulnd't find any references to it in your code.

### Code structure

There is a lot of code duplication between the two repositories. Please restructure the codebase and re-use the code as much as possible to avoid duplication. At the moment it's confusing to evaluate the technical details of the implementation without knowing exactly which files to look at and in which repo.

### Tutorial / instructions

Lacking for both repos.

In addition, it's not clear what is the function of each repository.

### Documentation

Almost none of the public items have documentation. This makes the codebase very hard to read for anyone who hasn't developed it.

### Clippy

Multiple clippy warnings for both repos. Please fix.
