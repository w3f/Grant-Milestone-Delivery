# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/subxt-python.md
- **Milestone:** 2

**Deliverables**

| Number | Deliverable               | Accepted | Link                                                                           | Notes
| -----: |---------------------------|---------------------------|--------------------------------------------------------------------------------|---------------------------|
| **0a.** | License                   | <ul><li>[x] </li></ul> | [Apache 2.0](https://github.com/philoniare/subxtpy/blob/main/LICENSE.md)       | 
| **0b.** | Documentation             | <ul><li>[x] </li></ul> | [Readme](https://github.com/philoniare/subxtpy/blob/main/README.md)            | ok, what about ``patchelf``?
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul> | [Tests folder](https://github.com/philoniare/subxtpy/tree/main/tests)    , [Testing Guide](https://github.com/philoniare/subxtpy/blob/main/README.md)    | all passing
| 0e. | Article                   | <ul><li>[x] </li></ul> | [Article](https://www.philoniare.com/blog/real-time-subxtpy)                             | nice
| 1. | Subscription API              | <ul><li>[x] </li></ul> | [Source Code](https://github.com/philoniare/subxtpy/blob/442dfafa6164d3a01da7fdb58fc018930a936a00/src/lib.rs#L597)           | 
| 2. | Streaming Support              | <ul><li>[x] </li></ul> | [Source Code](https://github.com/philoniare/subxtpy/blob/442dfafa6164d3a01da7fdb58fc018930a936a00/src/lib.rs#L597)      |
| 3. | Documentation Website         | <ul><li>[ ] </li></ul> | [github.io/subxtpy](https://philoniare.github.io/subxtpy/)       | check notes
| 4. | Example Scripts   | <ul><li>[x] </li></ul> | [Sample Python Scripts](https://github.com/philoniare/subxtpy/tree/main/tests) | ok
| 5. | Integration Guides               | <ul><li>[ ] </li></ul> | [Flask example](https://github.com/philoniare/subxtpy-flask-example)       | 
| 6. | Published pypi package      | <ul><li>[x] </li></ul> | [pypi](https://pypi.org/project/subxtpy/) | nice 

# General Notes


## Documentation
The documentation under this link https://philoniare.github.io/subxtpy/ is not that convenient to read.
I'm surprised that the code blocks you are trying to create with "```" are not visually different from the remaining text. This even works better in markdown. I would love it if this could be improved. I'm not familiar with Sphinx but having looked at a few examples I think there are some formatting issues with the current site. 

## Build
builds, but on top of the details in the readme the build process needs ``pip install patchelf``

See here 
```
 Warning: Failed to set rpath for /home/ubuntu/subxtpy/target/debug/libsubxtpy.so: Failed to execute 'patchelf', did you install it? Hint: Try `pip install maturin[patchelf]` (or just `pip install patchelf`)
```
once done, succesfully builds.
````
(.venv) ubuntu@ip-172-31-18-251:~/subxtpy$ maturin develop
⚠️  Warning: You specified maturin ==1.5.1 in pyproject.toml under `build-system.requires`, but the current maturin version is 1.7.4
📦 Including license file "/home/ubuntu/subxtpy/LICENSE.md"
🔗 Found pyo3 bindings
🐍 Found CPython 3.12 at /home/ubuntu/subxtpy/.venv/bin/python
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 0.34s
📦 Built wheel for CPython 3.12 to /tmp/.tmpgibyAN/subxtpy-0.2.0-cp312-cp312-linux_x86_64.whl
✏️  Setting installed package as editable
🛠 Installed subxtpy-0.2.0
````


## Test
all passing.
```
========================================================================== test session starts ==========================================================================
platform linux -- Python 3.12.3, pytest-8.3.2, pluggy-1.5.0
rootdir: /home/ubuntu/subxtpy
configfile: pyproject.toml
plugins: asyncio-0.24.0
asyncio: mode=Mode.STRICT, default_loop_scope=None
collected 8 items                                                                                                                                                       

tests/test_constants_dynamic.py .                                                                                                                                 [ 12%]
tests/test_events.py .                                                                                                                                            [ 25%]
tests/test_runtime_api_call.py .                                                                                                                                  [ 37%]
tests/test_storage_fetch_dynamic.py ..                                                                                                                            [ 62%]
tests/test_storage_iterating_dynamic.py .                                                                                                                         [ 75%]
tests/test_subscription.py .                                                                                                                                      [ 87%]
tests/test_tx_basic.py .                                                                                                                                          [100%]

=========================================================================== 8 passed in 0.27s ===========================================================================
(.venv) ubuntu@ip-172-31-18-251:~/subxtpy$ 
```


