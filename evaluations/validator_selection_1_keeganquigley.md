
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
| 0d.     | Docker | <ul><li>[x] </li></ul> | https://github.com/miepsik/validators_selection/blob/main/Dockerfile | Builds/runs successfully. 
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
## V2

- I'm now running the tests from the main dir, but was getting multiple errors about failing to import modules. Turns out I had to manually install Flask, NumPy, pandas, scipy, matplotlib, mhar, torch, and sklearn modules. Is this because I needed to run `pip3 install -r requirements.txt` first? If so, can you please include this command in the guide?
- After installing all the modules the tests still fail with: 
```js
python -m unittest discover
..n:  34   mi: 92   me: 0   z: 250
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
(array([5.0000000e+00, 1.9209000e+03, 2.1677018e+06, 9.2000000e+02,
       1.0000000e+00, 7.0300000e+02]), array([1.500000e+00, 3.801300e+03, 2.167745e+06, 8.600000e+02,
       1.000000e+00, 1.166000e+03]))
.E
======================================================================
ERROR: tests.test_ValidatorSelection (unittest.loader._FailedTest)
----------------------------------------------------------------------
ImportError: Failed to import test module: tests.test_ValidatorSelection
Traceback (most recent call last):
  File "/usr/lib/python3.8/unittest/loader.py", line 436, in _find_test_path
    module = self._get_module_from_name(name)
  File "/usr/lib/python3.8/unittest/loader.py", line 377, in _get_module_from_name
    __import__(name)
  File "/home/keegan/validators_selection/tests/test_ValidatorSelection.py", line 2, in <module>
    import polkadot
  File "/home/keegan/validators_selection/src/polkadot.py", line 12, in <module>
    from sklearn.preprocessing import StandardScaler
ModuleNotFoundError: No module named 'sklearn'


----------------------------------------------------------------------
Ran 4 tests in 4.885s

FAILED (errors=1)
```
I don't understand why though because I already installed `sklearn`:
```js
pip install sklearn
Collecting sklearn
  Downloading sklearn-0.0.post1.tar.gz (3.6 kB)
Building wheels for collected packages: sklearn
  Building wheel for sklearn (setup.py) ... done
  Created wheel for sklearn: filename=sklearn-0.0.post1-py3-none-any.whl size=2342 sha256=5cd6146cdaeed8a7ac64d33c06690d10e7481ec80212aafb2c7627536f353f26
  Stored in directory: /home/keegan/.cache/pip/wheels/14/25/f7/1cc0956978ae479e75140219088deb7a36f60459df242b1a72
Successfully built sklearn
Installing collected packages: sklearn
Successfully installed sklearn-0.0.post1
```
- The Dockerfile builds successfully now and the tests seem to pass. Again, I'm not sure what commands I should be using here but running the container results in this:
```js
docker run dc2b3dd84423
 * Serving Flask app 'polkadot' (lazy loading)
 * Environment: production
   WARNING: This is a development server. Do not use it in a production deployment.
   Use a production WSGI server instead.
 * Debug mode: off
WARNING: This is a development server. Do not use it in a production deployment. Use a production WSGI server instead.
 * Running on all addresses (0.0.0.0)
 * Running on http://127.0.0.1:14237
 * Running on http://172.17.0.2:14237
Press CTRL+C to quit
```
