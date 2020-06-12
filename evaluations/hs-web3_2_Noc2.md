# Evaluation

* **Status:** In Progress
* **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/15 
* **Milestone:** 2
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0. | Apache License 2.0 | <ul><li>[x] </li></ul>|[License](https://github.com/airalab/hs-web3/blob/cf25e9038684438325e7c4fa75009e11a983875a/LICENSE)| Initially BSD 3-Clause, but now published under two licenses |
| 1. | 	Haskell SCALE codec |<ul><li>[ ] </li></ul>|[implementation](https://github.com/airalab/hs-web3/tree/master/src/Codec/Scale), [tests](https://github.com/airalab/hs-web3/tree/master/unit/Codec/Scale/Test)| | 
| 2.  | SCALE codec documentation |<ul><li>[ ] </li></ul>|http://hackage.haskell.org/package/web3-0.9.1.0| | 
| 3. | Codec examples |<ul><li>[ ] </li></ul>|https://github.com/airalab/hs-web3/tree/master/examples/scale| stack build currently doesn't work | 
| 4. | Docker image |<ul><li>[x] </li></ul>|https://hub.docker.com/repository/docker/akru/hs-web3| Works | 

## General Notes

In Progress, current issue
```
hs-web3/examples/scale$ stack build
web3         > configure (lib)
web3         > Configuring web3-0.9.1.0...
web3         > Warning: The 'license-file' field refers to the file 'LICENSE' which does not
web3         > exist.
web3         > build (lib)
web3         > Preprocessing library for web3-0.9.1.0..
web3         > Building library for web3-0.9.1.0..
web3         > copy/register
web3         > LICENSE: copyFile: does not exist (No such file or directory)
'cabal copy' failed.  Error message:

--  While building package web3-0.9.1.0 using:
      /home/noc2/.stack/setup-exe-cache/x86_64-linux-tinfo6/Cabal-simple_mPHDZzAJ_3.0.1.0_ghc-8.8.3 --builddir=.stack-work/dist/x86_64-linux-tinfo6/Cabal-3.0.1.0 copy
    Process exited with code: ExitFailure 1

Possible causes of this issue:
* No module named "Main". The 'main-is' source file should usually have a header indicating that it's a 'Main' module.
* A cabal file that refers to nonexistent other files (e.g. a license-file that doesn't exist). Running 'cabal check' may point out these issues.

Progress 1/2
```
