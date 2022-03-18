# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/new_bls12_hash_function.md
- **Milestone:** 1
- **Kusama Identity:** N/A
- **Previously successfully merged evaluation:** N/A

| -----: | ----------- | ------------- |
| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [GPL 3](https://github.com/w3f-community/Indifferentiable-hashing-to-ordinary-elliptic-curves-of-j-0-with-the-cost-of-one-exponentiation/blob/main/LICENSE)|
| 0b. | Documentation |  <ul><li> [ ] </li></ul> | In line | In line comments are very sparse. Ideally every block of code should refer to the part/lemma/theorem from the paper that it is implementing| 
| 0c. | Testing Guide | <ul><li> [ ] </li></ul> | | There is no unit test or doc test, need doc test for constant test vectors and at unit test to demonstrate covering almost the whole curve for a small field (see comment) | 
| 0e. | Article | <ul><li> [ ] </li></ul>|  [Section 1.1](https://eprint.iacr.org/2021/1082) | I would give more weight to the cited implantation "We have provided a reference implementation ..." instead of "Incidentally". Perhaps also acknowledging W3F Grant in the acknowledgement section   |
| 1 |  Implementation | <ul><li> [ ] </li></ul> | [Implementation](https://github.com/w3f-community/dishport/Indifferentiable-hashing-to-ordinary-elliptic-curves-of-j-0-with-the-cost-of-one-exponentiation) | Please provide a a unified (one) implementation of the hash function which depends on the bls12 parameter |

## General Notes

Thank you very much for submitting the deliverables:

There are few points that we would like to see in sage implementation, in order to make it most beneficial for other researchers and implementors.

1. Implementation

Currently there are two (almost identical implementation) for hashing to bls12-381 and bls12-377. It would be most beneficial if you could merge them and implement the algorithm for hashing to bls curves as a single class or at least single set of functions which only depend on the defining bls parameter(s), the parameter then minimally changes the behaviour of the function instead of having two copy of each functions.

0b. Documentation

It would be helpful if you could add more comment to the code so it is clear that which lemma/case/equation in the paper, each step of implementation is related to.

0c. Testing Guide

We would like that if you could follow the Sagemath doctesting convention and add examples with expected output to all of your functions:

 https://doc.sagemath.org/html/en/developer/doctesting.html#chapter-doctesting

This could for example be output of pseudorandomly generated but hard-coded input which can later plays as reference for future developers to easily port the code to other languages and frameworks.

It is very helpful that your code is testing that a random hashed point is actually resides on the target curve but if we could have some constant result in the test suite which similarly confirming the resulting points reside on the curve included in the doctests that would helpful.

It is also helpful to add a test with constant value testing that result of phi is actually on the expected 3 fold. 

Similarly, Having the defining equations of T from previous test, you could symbolically (perhaps as a scheme) test that T/F is an elliptic curve.

Finally if you could set the parameters of hashing class for a relatively small field (of few thousands elements) then if you can write a unittest which validate the result of Theorem 5. Namely map all values of the field to the curve and observe the size of the range of the resulting hash function for that curve. This is important because it demonstrate the advantage of the proposed hashed in practice.

