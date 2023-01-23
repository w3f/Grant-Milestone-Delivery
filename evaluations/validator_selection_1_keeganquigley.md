
# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/validators_selection.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley


| Number | Deliverable   | Accepted | Link                                                                                 | Notes |
|--------|---------------|----------|----------------------------------------------------------------------------|-------|
| 0a.     | License   | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/LICENSE                            | Apache 2.0    |
| 0b.     | Documentation       | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/README.md                                                                        | Could be improved.   |
| 0c.     | Tests         | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/tree/main/tests                 | Currently failing.      |
| 0d.     | Docker | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/Dockerfile | Currently failing. 
| 0e.     | Article | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/README.md |
| 1.      | Next Pair | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/src/polkadot.py |
| 2.      | Ranking Calculation | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/src/polkadot.py |
| 3.      | New data | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/src/polkadot.py |
| 4.      | Internal testing | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/tree/main/tests |

## General Notes

Running `docker build -t "validators_selection:Dockerfile" .` fails with the following:

```javascript
Sending build context to Docker daemon  170.5kB
Step 1/7 : FROM python:3.8-slim-buster
 ---> b042dbfaaece
Step 2/7 : WORKDIR /python-docker
 ---> Using cache
 ---> d7bc39070ee8
Step 3/7 : COPY requirements.txt requirements.txt
 ---> Using cache
 ---> a627ce5c5141
Step 4/7 : RUN pip3 install -r requirements.txt
 ---> Using cache
 ---> 9dc9f59cd5ea
Step 5/7 : COPY . .
 ---> Using cache
 ---> 7c04960692e4
Step 6/7 : RUN python -m unittest discover
 ---> Running in cb956a4f77b1
.....Fn:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
(array([2.0000000e+00, 3.0000000e+00, 2.1675125e+06, 8.8000000e+02,
       8.0000000e+00, 9.0000000e+02]), array([8.0000000e+00, 1.0000000e+00, 1.9423917e+06, 9.4000000e+02,
       1.0000000e+00, 4.0900000e+02]))
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
domination
domination
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
domination
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0 .
======================================================================
FAIL: test_fileuploadWrongFormat (tests.test_ValidatorSelection.ValidatorsSelectionTest)
----------------------------------------------------------------------
Traceback (most recent call last):
  File "/python-docker/tests/test_ValidatorSelection.py", line 20, in test_fileuploadWrongFormat
    self.assertEqual(result.data, b"Invalid file structure, exptected 7 columns, got 6")
AssertionError: b'Invalid file structure, expected 7 columns, got 6' != b'Invalid file structure, exptected 7 columns, got 6'

----------------------------------------------------------------------
Ran 7 tests in 44.650s

FAILED (failures=1)
  z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
domination
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
n:  34   mi: 92   me: 0   z: 250
n:  34   mi: 93   me: 0   z: 250
The command '/bin/sh -c python -m unittest discover' returned a non-zero code: 1
```

Running `python -m unittest discover` also fails with:

```javascript
python -m unittest discover
EEE
======================================================================
ERROR: test_Cache (unittest.loader._FailedTest)
----------------------------------------------------------------------
ImportError: Failed to import test module: test_Cache
Traceback (most recent call last):
  File "/usr/lib/python3.8/unittest/loader.py", line 436, in _find_test_path
    module = self._get_module_from_name(name)
  File "/usr/lib/python3.8/unittest/loader.py", line 377, in _get_module_from_name
    __import__(name)
  File "/home/keegan/validators_selection/tests/test_Cache.py", line 1, in <module>
    from Cache import Cache
ModuleNotFoundError: No module named 'Cache'


======================================================================
ERROR: test_Selector (unittest.loader._FailedTest)
----------------------------------------------------------------------
ImportError: Failed to import test module: test_Selector
Traceback (most recent call last):
  File "/usr/lib/python3.8/unittest/loader.py", line 436, in _find_test_path
    module = self._get_module_from_name(name)
  File "/usr/lib/python3.8/unittest/loader.py", line 377, in _get_module_from_name
    __import__(name)
  File "/home/keegan/validators_selection/tests/test_Selector.py", line 1, in <module>
    from Selector import Selector
ModuleNotFoundError: No module named 'Selector'


======================================================================
ERROR: test_ValidatorSelection (unittest.loader._FailedTest)
----------------------------------------------------------------------
ImportError: Failed to import test module: test_ValidatorSelection
Traceback (most recent call last):
  File "/usr/lib/python3.8/unittest/loader.py", line 436, in _find_test_path
    module = self._get_module_from_name(name)
  File "/usr/lib/python3.8/unittest/loader.py", line 377, in _get_module_from_name
    __import__(name)
  File "/home/keegan/validators_selection/tests/test_ValidatorSelection.py", line 2, in <module>
    import polkadot
ModuleNotFoundError: No module named 'polkadot'


----------------------------------------------------------------------
Ran 3 tests in 0.000s

FAILED (errors=3)
```
