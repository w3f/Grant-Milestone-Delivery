# General Notes

~~I'm able to compile the circuits w/ some warnings:~~

UPDATE: Team fixed warnings.

<details>
  <summary>Output</summary>

```ts
circom circuits/zkLogin.circom --r1cs --wasm --sym --c
template instances: 919
non-linear constraints: 1048569
linear constraints: 0
public inputs: 1
private inputs: 2082 (2061 belong to witness)
public outputs: 0
wires: 1020160
labels: 5677224
Written successfully: ./zkLogin.r1cs
Written successfully: ./zkLogin.sym
Written successfully: ./zkLogin_cpp/zkLogin.cpp and ./zkLogin_cpp/zkLogin.dat
Written successfully: ./zkLogin_cpp/main.cpp, circom.hpp, calcwit.hpp, calcwit.cpp, fr.hpp, fr.cpp, fr.asm and Makefile
Written successfully: ./zkLogin_js/zkLogin.wasm
Everything went okay
```
</details>
