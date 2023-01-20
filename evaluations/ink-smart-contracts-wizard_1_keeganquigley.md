
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/ink-smart-contract-wizard.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.     | License   | <ul><li>[x] </li></ul> | Apache 2.0                            |       |
| 0b.     | Documentation       | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/blob/main/README.md                                                                        | Documentation could be improved to show how to use it.   |
| 0c.     | Tests         | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/tree/main/tests/template_generators                 | Tests are successful locally on Apple M2 as well as Ubuntu x86/64. See [testing notes](https://github.com/w3f/Grant-Milestone-Delivery/blob/master/evaluations/ink-smart-contracts-wizard_1_keeganquigley.md?plain=1#L75).   |
| 0d.     | Docker | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/blob/main/Dockerfile | Builds and runs container successfully.      |
| 0.      | Conversion of OpenBrush smart contracts written in Ink to it's templates and sub-templates. | <ul><li>[x] </li></ul> | https://github.com/Supercolony-net/openbrush-contracts | Looks good.
| 1.      | Creation of code generation logic for Ink smart contracts. | <ul><li>[x] </li></ul> | https://github.com/avirajkhare00/ink-wizard/tree/main/ink_wizard/template_generators | Looks good.
## General Notes

### Tests

1. `./test.sh` runs python tests successfully. Works in Docker as well. However the contracts themselves don't contain cargo tests as far as I can tell.

```
./test.sh
...
----------------------------------------------------------------------
Ran 3 tests in 0.003s

OK
....
----------------------------------------------------------------------
Ran 4 tests in 0.019s

OK
....
----------------------------------------------------------------------
Ran 4 tests in 0.013s

OK
....
----------------------------------------------------------------------
Ran 4 tests in 0.013s

OK
.
----------------------------------------------------------------------
Ran 1 test in 0.000s

OK
.
----------------------------------------------------------------------
Ran 1 test in 0.002s

OK
psp22 contract scaffolded
.
----------------------------------------------------------------------
Ran 1 test in 0.005s

OK
psp34 contract scaffolded
.
----------------------------------------------------------------------
Ran 1 test in 0.004s

OK
psp37 contract scaffolded
.
----------------------------------------------------------------------
Ran 1 test in 0.004s

OK
```
2. Despite no Rust unit tests being present, some errors still occur when running `cargo +nightly test`. I believe the "conflicting implementations of trait" errors are occuring due to a naming conflict between the cargo.toml file and the contract name that is input by the user (I named this one coin). Can you check to see if these can be resolved? They are occuring on every scaffolded contract except `flipper`.
```rust
error[E0119]: conflicting implementations of trait `TraitCallForwarderFor<[const error]>` for type `my_psp22::_::CallBuilder`
 --> lib.rs:4:1
  |
4 | #[openbrush::contract]
  | ^^^^^^^^^^^^^^^^^^^^^^
  | |
  | first implementation here
  | conflicting implementation for `my_psp22::_::CallBuilder`
  |
  = note: this error originates in the attribute macro `openbrush::contract` (in Nightly builds, run with -Z macro-backtrace for more info)

error[E0119]: conflicting implementations of trait `openbrush::openbrush_contracts::psp22::PSP22` for type `coin`
  --> lib.rs:23:2
   |
23 |     impl PSP22 for coin {}
   |     ^^^^^^^^^^^^^^^^^^^
   |
   = note: conflicting implementation in crate `openbrush_contracts`:
           - impl<T> openbrush::openbrush_contracts::psp22::PSP22 for T
             where T: Storage<openbrush::openbrush_contracts::psp22::Data>;
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeDecode` for type `std::option::Option<()>` in future versions
   = note: upstream crates may add a new impl of trait `std::ops::Deref` for type `std::option::Option<()>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeEncode` for type `std::option::Option<()>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeDecode` for type `ink_storage_traits::impls::ManualKey<1117114132>` in future versions
   = note: upstream crates may add a new impl of trait `std::ops::Deref` for type `ink_storage_traits::impls::ManualKey<1117114132>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeEncode` for type `ink_storage_traits::impls::ManualKey<1117114132>` in future versions
   = note: upstream crates may add a new impl of trait `parity_scale_codec::WrapperTypeDecode` for type `ink_storage_traits::impls::ResolverKey<_, ink_storage_traits::impls::ManualKey<3064586736, ink_storage_traits::impls::ManualKey<1117114132>>>` in future versions
   ```

**UPDATE:** The team made changes to fix the build issues. Also, to deploy them without error I needed to switch to `cargo-contract v2.0.0-beta`.
## Other

Minor note: Using `ink-wizard new psp22` and the like still bring up the menu to choose. Would be cool to see it shortcut directly to the appropriate contract.
