# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Subcoin.md
- **Milestone:** 1

**Deliverables**

| Number | Deliverable               | Accepted | Link                                                                           | Notes
| -----: |---------------------------|---------------------------|--------------------------------------------------------------------------------|---------------------------|
| **0a.** | License                   | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/philoniare/subxtpy/blob/main/LICENSE.md)       | 
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | [Readme](https://github.com/philoniare/subxtpy/blob/main/README.md)            | Nice docs!
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests folder](https://github.com/philoniare/subxtpy/tree/main/tests)          | Tests all passing
| 0e. | Article                   | <ul><li>[x] </li></ul> | [Article](https://www.philoniare.com/blog/subxtpy)                             | Ok
| 1. | Project Setup             | <ul><li>[x] </li></ul> | [README](https://github.com/philoniare/subxtpy/blob/main/README.md)            | Ok
| 2. | PyO3 Bindings             | <ul><li>[x] </li></ul> | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs)      | Ok
| 3. | Client Functionality       | <ul><li>[x] </li></ul> | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs)      | Ok
| 4. | Storage API           | <ul><li>[x] </li></ul> | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs#L143) | Ok
| 5. | Extrinsics API              | <ul><li>[x] </li></ul> | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs#L292) | Ok
| 6. | Error Handling      | <ul><li>[x] </li></ul> | [Source code](https://github.com/philoniare/subxtpy/blob/main/src/lib.rs) | Ok

# General Notes

Grantee resolved all issues, and the tool runs successfully when a local node is running. 

## Tests

Unit tests all passing:

```python
================================================================== test session starts ==================================================================
platform linux -- Python 3.8.10, pytest-8.3.2, pluggy-1.5.0
rootdir: /home/ubuntu/subxtpy
configfile: pyproject.toml
plugins: asyncio-0.24.0
asyncio: mode=strict, default_loop_scope=None
collected 7 items                                                                                                                                       

tests/test_constants_dynamic.py .                                                                                                                 [ 14%]
tests/test_events.py .                                                                                                                            [ 28%]
tests/test_runtime_api_call.py .                                                                                                                  [ 42%]
tests/test_storage_fetch_dynamic.py ..                                                                                                            [ 71%]
tests/test_storage_iterating_dynamic.py .                                                                                                         [ 85%]
tests/test_tx_basic.py .                                                                                                                          [100%]

=================================================================== 7 passed in 0.14s ===================================================================
```
