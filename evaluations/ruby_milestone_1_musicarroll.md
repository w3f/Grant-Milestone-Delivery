# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/RubyProtocol.md
- **Milestone:** 1
- **Kusama Identity:** TBD
- **Author:** Michael L. Carroll @musicarroll
- **Previously successfully merged evaluation:** None yet

| Number | Deliverable                                                                  | Accepted               | Link                                                                                                                                                                                     | Evaluation Notes                                                                                                                                                                                                                                                                            |
|--------|------------------------------------------------------------------------------|------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    0a. | License                                                                      | <ul><li>[ ] </li></ul> | [Functional encryption repo](https://github.com/Ruby-Protocol/Functional_encryption_rust/blob/main/LICENSE), [private ml](https://github.com/Ruby-Protocol/private_ml/blob/main/LICENSE) |                                                                                                                                                                                                                                                                                             |
|    0b. | Testing Guide                                                                | <ul><li>[ ] </li></ul> | https://github.com/rubyprotocol/documents/blob/main/unit_test_guide.md                                                                                                                   |  |
|    0c. | Article/Tutorial                                                             | <ul><li>[ ] </li></ul> | https://github.com/rubyprotocol/documents/blob/main/Functionality_Tutorial.md                                                                                                            |                                                                                                                                                                                                                         |
|      1 | Rust implementation of cryptographic libraries                               | <ul><li>[ ] </li></ul> | https://github.com/Ruby-Protocol/Functional_encryption_rust                                                                                                                              |                                                                                                                                                                                                                                                                                             |
|      2 | Private machine learning based on functional encryption and substrate pallet | <ul><li>[ ] </li></ul> | https://github.com/Ruby-Protocol/private_ml                                                                                                                                              |                                                                                                                                                                                                                                                                                             |
|      3 | Benchmark results                                                            | <ul><li>[ ] </li></ul> | https://github.com/rubyprotocol/documents/blob/main/Benchmark_result.md                                                                                                                  |                                                                                                                                                                                                                                                                                             |
|      4 | Docker                                                                       | <ul><li>[ ] </li></ul> | https://github.com/rubyprotocol/documents/blob/main/Docker_demo_tutorial.md                                                                                                              |                                                                                                                                                                                                                                                                                             |

## General Notes

## Technical evaluation
Summarizes the overall performance plus additional feedback/comments

1. Running the prescribed Milestone 1 tests from a clone of the Functional_encryption project as follows: 
    ```
    cargo test test_sip -- --show-output
    cargo test test_sgp -- --show-output
    cargo test test_disease_prediction -- --show-output
    cargo test test_neural_network -- --show-output
    ```
    yields 0 results.
    Running the same from the private_ml project yields some results, but minimal.

    Recommendations:
    - Update the relevant tutorials and unit test guide to specifically point out the correct project where te tests reside.
E.g., the following could be inserted into the unit test guide to clone the correct project:
  Clone the project:
`  git clone https://github.com/Ruby-Protocol/private_ml.git; 
  cd private_ml
`
    - Eliminate duplicate code bases and superfluous tests, if any.
    - Add more tests, specifically, add corner cases where inputs are on the borderline of acceptable inputs (min/max values, e.g.) and cases with invalid inputs to show adequate fault tolerance / error handling.  The latter may be postponed until such error handling is implemented (in standard Rust Result type fashion) in a later milestone.  The current lack of error handling in the encryption components is probably acceptable for milestone 1 which is of course not production code, but panics may occur in the call tree to that code, panics that will need to be handled in later production code.
2. Since the FE components are basically a rewrite in Rust of the previous C implementations, it would make sense to re-use / rewrite some of the same validation tests that were used to test the original C implementation to ensure that the same results are obtained.
3. The benchmarks report lists three Schemes but does not indicate which tests these schemes correspond to. The first two are probably the inner product and quadratic encryption schemes, but the third scheme may be either disease prediction or neural network or something else entirely. Please document which schemes are meant by each of the three benchmark runs.
4. Compare the benchmark results compare with those previously run for the original C implementations. The computation times seem to scale almost linearly with the vector size, but I would expect this to ultimately have an asymptote.
5. Apropos Bencmarks:  Please indicate what size vectors are expecyted for various Ruby data monetization use cases?

### Non-Technical Evaluation
1. Use Cases
    - Machine Learning:  There is no indication in the tutorials as to what kind of neural nets we are working with.  Is this an application to the standard MNIST digit recognition problem or some other?  What are the characteristics of the NN?  How many layers, nodes, etc.?  Perhaps this is indicated in the code itself and I apologize if it is.  I have run out of time to dive into that code.  BTW, this sort of ML application has very broad potential as a NN is essentially function approximation which goes hand in hand with your use of functional encryption.  Perserving privacy while doing machine learning ought to be of major interest to big tech (and big government) players. 
2. Ruby Token:  The rationale for minting a unique token for this project seem weak.  It seems that all of the desred token utility can be achieved using the DOT token without inventing a new token.  Moreover, there is already known value and marketplace for DOT which can be leveraged to entice would be use cases (such as data monetizers).  The Ruby token has to start from scratch.
