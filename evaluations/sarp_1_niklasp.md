# Evaluation

- **Status:** In Progress
- **Application Document:**
  https://github.com/w3f/Grants-Program/blob/master/applications/sarp-basic-functionality.md
- **Milestone:**
  [1](https://github.com/w3f/Grant-Milestone-Delivery/blob/70250f0f8d90c3143294e1ec7a25c0c89133a481/deliveries/sarp-basic-functionality-milestone-1.md)
- **Kusama Identity:**
  [DT7kRjGFvRKxGSx5CPUCA1pazj6gzJ6Db11xmkX4yYSNK7m](https://sub.id/5CwW67PPdZQQCcdWJVaRJCepSQSrtKUumDAGa7UZbBKwd9R2)
- **Previously successfully merged evaluation:** None yet

| Number | Deliverable               | Accepted               | Link                                                                                                                                                                                                                                                                                                                                                           | Evaluation Notes                                                                                                                                                                                                                                         |
| ------ | ------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul> | [MIRAI MIT License](https://github.com/scs/MIRAI/blob/8afab5db34fb7330789e3765c3adf460ed72ed05/LICENSE)                                                                                                                                                                                                                                                        | MIT license file for the MIRAI package is provided in a forked repo.                                                                                                                                                                                     |
| 0b.    | User Documentation        | <ul><li>[ ] </li></ul> | [Proof of Concept: Tag Analysis on Origin](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/pallet_template/README.md) -- [Proof of Concept: Tag Analysis for validation of unsigned transactions](https://github.com/scs/MIRAI/tree/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/offchain-worker) | See [User Documentation Feedback](#user-documentation-feedback). _Spec: "We will provide a basic tutorial that explains how to use the tool on a substrate pallet."_                                                                                     |
| 0c.    | Testing and Testing Guide | <ul><li>[ ] </li></ul> | see 0b.                                                                                                                                                                                                                                                                                                                                                        | The User Documentation contains incomplete guides to running the supplied Prototype Code. _Spec: "A first set of tests will be provided, together with a testing guide, that describes how to run them."_                                                |
| 1.     | Prototype Code            | <ul><li>[ ] </li></ul> | [origin](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/pallet_template/), [unsigned transaction](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/offchain-worker/)                                                                                               | Prototype code was submitted, that approaches the two stated vulnerabilty classes. See [Prototype Code Feedback](#prototype-code-feedback) for open issues / questions. _Spec: "Prototype code to approach the above two stated vulnerability classes."_ |
| 2.     | Documentation             | <ul><li>[ ] </li></ul> | [Tag Analysis on Substrate Pallets](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/README.md)                                                                                                                                                                                                                   | See [Documentation Feedback](#documentation-feedback). _Spec: "Technical documentation: a) describing the approach we plan to implement in milestone 2, incl. its limitations. b) with (interesting) examples of the vulnerability classes."_            |
| 3.     | Engagement                | <ul><li>[ ] </li></ul> | [Github Comment](https://github.com/w3f/Grants-Program/pull/1706#issuecomment-1564312572)                                                                                                                                                                                                                                                                      | See [Engagement Feedback](#engagement-feedback). _Spec: "Engage with teams at Web3 Foundation and Parity for prioritization._                                                                                                                            |

## General Notes

Two code prototype examples alongside its documentation were submitted by the
grantee that address the two vulnerability classes: _Incorrect Origin_ and
_Unsigned Transaction_. Also a brief research documentation was submitted.

Based on my evaluation, you can improve the submitted documentation and
engagement (see below). I would like to see more progress in solving the major
issues with MIRAI as stated in your
[Findings](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/README.md#findings)
and Open Issues
[1](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/pallet_template/README.md#open-issues),
[2](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/offchain-worker/README.md#open-issues)
before accepting the deliverable. As I understand your granted application, the
overall idea was to find if MIRAI is a suitable tool for statically analysing
substrate code. By providing more details (with code examples and error outputs)
it would be easier to evualuate your findings.

Thus I have to reject this delivery at its current state but will continue the
evaluation / accept the delivery when the points stated below are resolved /
commented on.

_Note that this evaluation is not binding since I do not currently work for the
Web3Foundation. The w3f grants team can still accept your delivery in its
current state._

## Prototype Code Feedback

The applicants [forked the MIRIA repository](https://github.com/scs/MIRAI). I am
evaluating the `Milestone1_Research` branch. The code has relevant comments and
is easy to understand. For existing comments / questions, see below.

### Running the Prototype Code

1. Install MIRAI as per
   [Instructions](https://github.com/facebookexperimental/MIRAI/blob/main/documentation/InstallationGuide.md) -
   _this is documented_
1. clone the forked repo (where the substrate-examples folder contains the
   pallet template) `git clone https://github.com/scs/MIRAI.git` - _not
   documented_
1. Checkout the correct branch (linked from the documentation)
   `git checkout Milestone1_Research` - _this step is not documented. At the
   time of evaluation there is an
   [open PR to `main`](https://github.com/scs/MIRAI/pull/1) that would merge the
   `pallet_template`/ Tag Analysis part of the example._
1. Then I tested both supplied static analysis examples:

### Origin Check

- `cd substrate-examples/pallet_template` and then run `cargo mirai`
- Altering the two lines of code works as described in the documentation and
  outputs a warning when the `ensure_signed` is used instead of the
  `sarp_ensure_signed`.

➡️ The supplied example is adding the tags in a correct way, as far as I can
tell, but differs from the vulnarability class raised in the RFP. The provided
code is testing
[`ensure_signed`](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/pallet_template/src/lib.rs#L135)
instead of additionally testing
[`ensure_origin`](https://github.com/bhargavbh/MIRAI/blob/5646e7e2775f1b59bed74285ab1c0a8397218fc5/substrate_examples/incorrect-origin/wrong-origin.rs#L49)
is called correctly. I understand, that tag analysis is also verified to work in
the code submitted, but is there a reason why you are testing `ensure_signed` is
called instead? Does it have to do with your Finding #1 that states: "Certain
pieces of substrate code lead to crashes of MIRAI."

➡️ The output from running `cargo mirai` is not very descriptive,
[a descriptive message can be added to the `precondition!` macro](https://github.com/facebookexperimental/MIRAI/blob/957af25ce6cc109093cec369c70fe90a1e2544f9/annotations/src/lib.rs#L625).

### Offchain Worker / Unsigned Transaction Validation

- `cd substrate-examples/offchain_worker` and then run `cargo mirai`
- Running the above results in the same warning as
  [shown in the documentation](https://github.com/scs/MIRAI/raw/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/offchain-worker/mirai-warning.png).
- [Uncommenting the lines in `lib.rs` as stated](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/offchain-worker/src/lib.rs#L355)
  omits the warning
- In `substrate-examples/offchain-worker/src/lib.rs` you have the following
  lines.

  ```rust
  // For some reason MIRAI crashes with this code
  /*let avg_price = Self::average_price()
      .map(|price| if &price > new_price { price - new_price } else { new_price - price })
      .unwrap_or(0);*/
  let avg_price = 0;
  ```

  I tried uncommenting the commented `avg_price` definition and `cargo mirai`
  did not "crash" but did not output the expected warning. Before moving on it
  would be fundamental to understand why that happens and I would not
  [postpone it to the next grant](https://github.com/scs/MIRAI/tree/Milestone1_Research/substrate-examples#next-steps).
  You picked two vulnerability classes to demonstrate the possibilities to move
  on with MIRAI. I would then expect that the research goes as deep as needed to
  answer the above (at least for the classes you picked).

### Repository Structure

- It would be more clear for me if the work was in its own repository to follow
  the development easier and separate concerns of the testing tool from the
  development of MIRAI (at least at the current stage until maintainers give
  their go to merge to MIRAI).

- In MIRAI as well as
  [@bhargavbh fork](https://github.com/bhargavbh/MIRAI/tree/main/substrate_examples),
  example folders are named by functionality / vulnarability class. In the
  milestone 1 fork, your naming convention differs. It would be clearer to stick
  the the former in my opinion.

## User Documentation Feedback

- The instructions on running the code are missing some parts, see
  [Running the Prototype Code](#running-the-prototype-code)

- The documentation is repetitve in both files in the Beginning ('##Running')
  submitted as "User Documentation". An ideal solution would have a
  documentation in one file, stating how to run the examples step by step.

## Documentation Feedback

The documentation is short of detail but covers the aspects stated in the
application.

### Research / Findings

- [@bhargavbh mentioned](https://github.com/w3f/Grants-Program/pull/1706#issuecomment-1535936716)
  that it would be relevant to "document interesting vulnarability classes
  (which you may find in research phase)". The Documentation Delivery
  specification is: "b) with (interesting) examples of the vulnerability
  classes." I cannot find that in the M1 delivery, where the focus is only on
  the "incorrect origin" and "unsigned transaction" vulnerability classes. The
  [RFP](https://github.com/w3f/Grants-Program/blob/master/docs/RFPs/Open/Static-Analysis-for-Runtime-Pallets.md#project-description-page_facing_up)
  mentions 3 more classes, the RFP repo has a
  [description and example for the "arithmetic-overflow" vulnarability class](https://github.com/bhargavbh/MIRAI/tree/main/substrate_examples/arithmetic-overflow)
  and I assume more could be found in engaging with pallet developers. I see
  that in your application you also mentioned the two classes, but is there a
  reason why you focused only on two in your research?

- You
  [identified several **major** issues with MIRAI + substrate](https://github.com/scs/MIRAI/tree/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples#findings)):
  1. crashes and timeouts
  2. invasiveness on code (=> adoption is hard)
  3. [problem with nesting `precondition!` and `verify!`](https://github.com/scs/MIRAI/blob/db8104d6bba5224ad445502ec46166288349e60c/substrate-examples/pallet_template/README.md#open-issues)
     To me, those issues sound severe. Are you confident that you will be able
     to fix them in a next step? What is your approach?

In general, I would welcome a more detailed description of the errors / crashes
you got with MIRAI, so others can evaluate on their systems and build upon your
work and findings with MIRAI.

## Engagement Feedback

The linked github comment is hidden inside the w3f grants repository. I would
consider a post in the polkadot forum or some other way to reach pallet
developers directly in order to find priorities / new vulnerability classes.
