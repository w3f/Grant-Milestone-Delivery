# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** [OpenBrush follow-up](https://github.com/w3f/Grants-Program/pull/621).
* **Milestone Number:** 1 milestone of the grant and 3 milestone of the OpenBrush

**Context**

In the scope of that milestone, we investigated what takes most of the code and tried to reduce it or provide a report about potential optimization processes.

A lot of space was taken by the blob from `ink_storage::collections::StorageHashMap`. 
So we implemented a lightweight version without caching of elements(`SimpleHashMap`) 
and provided a report in [the issue](https://github.com/paritytech/ink/issues/945#issuecomment-930427082) to ink!.
Later the ink! team created their own implementation of `Mapping` by using our example of it.

The dispatching logic of messages and constructors in the ink! generates a lot of code. We found several moments that can be optimized:

- [Replacing `#[inline(always)]` by `#[inline]`](https://github.com/paritytech/ink/pull/1012)
  helped to reduce the size of contracts with a lot of messages. 
  It helped because the compiler decided by self where better to inline to reduce the size of the contract.
  [The report about size reduction](https://github.com/paritytech/ink/pull/1012#pullrequestreview-804747290).
- [That change](https://github.com/paritytech/ink/pull/1017) contains many small optimizations 
  that allow reducing the size of the code well. We can't extract them to 
  separate PRs because they depend on each other. The main idea is to move common
  parts of each message to one place instead of duplicating them. Reworking of 
  `scale::Decode::decode` logic for arguments also improves the size. 
  Initially, this change was implemented by [the PR](https://github.com/paritytech/ink/pull/999). 
  But later we found how it can be optimized more and created a [new PR](https://github.com/paritytech/ink/pull/1017). 
  Description of the PR contains a report about the size and [this comment](https://github.com/paritytech/ink/pull/1017#issuecomment-970575796).

During the implementation of the [PR](https://github.com/paritytech/ink/pull/1017) 
we found out that sub-contracts from the `delegator` example take a lot of space 
in comparison to other simple contracts. We investigated that point and found  out 
the reason in `workspace`. We created [that report](https://github.com/paritytech/ink/pull/1054) 
and later created the fix in [`cargo-contract`](https://github.com/paritytech/cargo-contract/pull/378).

During debugging of `#[inline]` methods we figured out that applying of `-Clinker-plugin-lto` 
flag during compilation reduces the size of the contract. For small contracts, 
it is ~200 bytes, for big ~900 bytes. We heve done [PR](https://github.com/paritytech/cargo-contract/pull/358) 
in the `cargo-contract` repository with that fix.

During analyzing of the dispatching WASM blob, we explored that `scale:::Decode` 
is not optimally implemented for `AccountId`(and for all arrays like `[u8; N]` structures). 
We heve done a [change](https://github.com/paritytech/ink/pull/1016) in ink! repository([report](https://github.com/paritytech/ink/pull/1016#issuecomment-970425793)). 
But later we implemented that change in [`parity-scale-codec`](https://github.com/paritytech/parity-scale-codec/pull/299). 
It also [improved the performance](https://github.com/paritytech/parity-scale-codec/pull/299#issuecomment-974819024) 
during runtime for all WASM-based code(so it also improved some stuff in `substrate`).

**Deliverables**

| Number | Deliverable | Link | Notes |
| ------------- | ------------- | ------------- |------------- |
| 0b. | Documentation | In context section | Each pull request and the issue contains information about size-reduction. | 
| 1.  | Reduce the size of Erc20 contract | In context section | We did several changes to reduce the size of the contract. A detailed report in the context section. | 

**Additional Information**

We did more progress than specified in the grant application.

What was specified:
> We want to briefly(not full change, only minimal changes to reduce the size) implement them and provide a report(re-working data structure, reducing monomorphization, using dynamic dispatch in some cases).

In the description of the milestone, we mentioned that we're going to do "not full change, 
only minimal changes to reduce the size", but we implemented them fully and it took more time.
Is it possible to increase payment for that milestone from 9,000 USD to 15,000?
