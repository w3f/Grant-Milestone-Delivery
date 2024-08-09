# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Solang_Playground.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| https://github.com/hyperledger-labs/solang-playground/blob/main/LICENSE |
| **0b.** | Documentation | <ul><li>[x] </li></ul>| https://github.com/hyperledger-labs/solang-playground/blob/main/docs/interact_with_contracts_on_chain.md |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| https://github.com/hyperledger-labs/solang-playground/blob/main/README.md#testing |
| **0d.** | Docker | <ul><li>[x] </li></ul>| https://github.com/hyperledger-labs/solang-playground/blob/main/README.md#docker |
| 1. | Solang Playground with `interact` functionality | <ul><li>[x] </li></ul>| -Repo: https://github.com/hyperledger-labs/solang-playground <br> -Demo: https://drive.google.com/file/d/1LL6LuPbAvg8r_hCWeWop2Gl_tvgy_KpI/view?usp=sharing <br> -amd64 docker image: https://hub.docker.com/repository/docker/salaheldin18/solang-playground-amd64 .<br> You can find a link to the hosted editor in the repo's readme |  |
## Evaluation V2

The grantee answered our question [here](https://github.com/w3f/Grant-Milestone-Delivery/pull/1204#issuecomment-2263452176). The UI for interacting with the contract will be delivered in the next milestone.

## Evaluation V1


We have a question about this milestone. 
Shouldn't the deploy and interaction with the contract functions be on the UI of the IDE for this milestone? Or these functions are planned for Milestone 4?



### Docker

We tested the application using Docker and without it.

Log showing the Docker working.
```
ditavia@localhost:~/Documents/w3f/solang-playground$ cargo make docker-run
[cargo-make] INFO - cargo make 0.37.15
[cargo-make] INFO - Calling cargo metadata to extract project info
[cargo-make] INFO - Cargo metadata done
[cargo-make] INFO - Build File: Makefile.toml
[cargo-make] INFO - Task: docker-run
[cargo-make] INFO - Profile: development
[cargo-make] INFO - Running Task: docker-run
9fed5b4fa0fd0b5b04dd0397bf0777df495b5d23a324a4145b9da6e30a25a2cf
[cargo-make] INFO - Build Done in 1.50 seconds.

ditavia@localhost:~/Documents/w3f/solang-playground$ docker ps
CONTAINER ID   IMAGE           	COMMAND              	CREATED     	STATUS     	PORTS                                           	NAMES
9fed5b4fa0fd   solang-playground   "on-start.sh"        	9 seconds ago   Up 8 seconds   22/tcp, 0.0.0.0:9000->9000/tcp, :::9000->9000/tcp   playground
```

### Manual Testing

We compiled the `result.contract` with the flip example.

![unnamed (3)](https://github.com/user-attachments/assets/253cedeb-59eb-4e39-a818-e37556f03ed6)


We uploaded the contract on [contract UI](https://ui.use.ink/) and interacted with it without problems.


![unnamed (4)](https://github.com/user-attachments/assets/20918c5f-7459-4983-a04e-155d42058e54)


We also tested with another [simple example](https://github.com/solidity-by-example/solidity-by-example.github.io/blob/gh-pages/contracts/src/first-app/Counter.sol). We didn't have any problems deploying this example and using it.

![unnamed (5)](https://github.com/user-attachments/assets/ed580383-0b9e-4173-916a-023bb291e97a)

We have a suggestion to improve the interface. We noticed when the contract doesn't compile the error line is highlighted but would be nice to have the error messages of the compilation in the console for debugging.

![unnamed (6)](https://github.com/user-attachments/assets/cefb140f-af6e-4586-855c-9b7f0dd4db6d)

### Automated Tests

We ran the tests, and all passed.

<details>
<summary>Test results</summary>

```
ditavia@localhost:~/Documents/w3f/solang-playground$ cargo make test
[cargo-make] INFO - cargo make 0.37.15
[cargo-make] INFO - Calling cargo metadata to extract project info
[cargo-make] INFO - Cargo metadata done
[cargo-make] INFO - Build File: Makefile.toml
[cargo-make] INFO - Task: test
[cargo-make] INFO - Profile: development
[cargo-make] INFO - Running Task: test-backend
	Finished test [unoptimized + debuginfo] target(s) in 0.10s
 	Running unittests src/lib.rs (target/debug/deps/demo_lsp_browser-9238cc0d5d391dfb)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

 	Running tests/server_tests.rs (target/debug/deps/server_tests-c1d149787a3e8446)

running 1 test
test tests::language_server_workflow ... ok

test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.01s

   Doc-tests demo-lsp-browser

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

[cargo-make] INFO - Running Task: test-app

> monaco-lsp-streams@0.0.0 test
> jest

 PASS  tests/api.test.ts (9.668 s)
  Ensuring the server serves the built frontend
	✓ Verifying a successful response upon making a request (35 ms)
  Ensuring the server’s compile endpoint is operational
	✓ Verifying a successful compile request (7899 ms)

Test Suites: 1 passed, 1 total
Tests:   	2 passed, 2 total
Snapshots:   0 total
Time:    	9.724 s
Ran all test suites.
[cargo-make] INFO - Build Done in 11.14 seconds.
```

</details>

We also ran the command cargo tarpaulin to check the code coverage. The tests only cover a few cases. The test coverage could be better.

<details>

<summary>Code Coverage Results</summary>

```
Jul 31 09:17:46.583  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| crates/browser/src/lib.rs: 0/34
|| crates/solang/solang-parser/src/diagnostics.rs: 4/34
|| crates/solang/solang-parser/src/doccomment.rs: 39/69
|| crates/solang/solang-parser/src/helpers/fmt.rs: 12/779
|| crates/solang/solang-parser/src/helpers/loc.rs: 20/209
|| crates/solang/solang-parser/src/helpers/ord.rs: 0/5
|| crates/solang/solang-parser/src/lexer.rs: 108/524
|| crates/solang/solang-parser/src/lib.rs: 12/29
|| crates/solang/solang-parser/src/pt.rs: 22/154
|| crates/solang/src/abi/anchor.rs: 9/264
|| crates/solang/src/abi/ethereum.rs: 0/43
|| crates/solang/src/abi/mod.rs: 0/17
|| crates/solang/src/abi/polkadot.rs: 0/293
|| crates/solang/src/codegen/array_boundary.rs: 0/19
|| crates/solang/src/codegen/cfg.rs: 146/839
|| crates/solang/src/codegen/constant_folding.rs: 230/783
|| crates/solang/src/codegen/constructor.rs: 0/47
|| crates/solang/src/codegen/dead_storage.rs: 151/315
|| crates/solang/src/codegen/dispatch/mod.rs: 3/4
|| crates/solang/src/codegen/dispatch/polkadot.rs: 0/250
|| crates/solang/src/codegen/dispatch/solana.rs: 127/163
|| crates/solang/src/codegen/encoding/borsh_encoding.rs: 14/69
|| crates/solang/src/codegen/encoding/buffer_validator.rs: 21/64
|| crates/solang/src/codegen/encoding/mod.rs: 87/881
|| crates/solang/src/codegen/encoding/scale_encoding.rs: 0/256
|| crates/solang/src/codegen/events/mod.rs: 0/8
|| crates/solang/src/codegen/events/polkadot.rs: 0/88
|| crates/solang/src/codegen/events/solana.rs: 0/15
|| crates/solang/src/codegen/expression.rs: 14/1343
|| crates/solang/src/codegen/external_functions.rs: 22/80
|| crates/solang/src/codegen/mod.rs: 114/733
|| crates/solang/src/codegen/polkadot.rs: 0/62
|| crates/solang/src/codegen/reaching_definitions.rs: 55/104
|| crates/solang/src/codegen/revert.rs: 3/132
|| crates/solang/src/codegen/solana_accounts/account_collection.rs: 47/191
|| crates/solang/src/codegen/solana_accounts/account_management.rs: 21/76
|| crates/solang/src/codegen/solana_accounts/mod.rs: 0/21
|| crates/solang/src/codegen/solana_deploy.rs: 69/260
|| crates/solang/src/codegen/statements/mod.rs: 42/428
|| crates/solang/src/codegen/statements/try_catch.rs: 0/187
|| crates/solang/src/codegen/storage.rs: 0/168
|| crates/solang/src/codegen/strength_reduce/expression_values.rs: 42/395
|| crates/solang/src/codegen/strength_reduce/mod.rs: 29/239
|| crates/solang/src/codegen/strength_reduce/reaching_values.rs: 17/72
|| crates/solang/src/codegen/strength_reduce/value.rs: 4/68
|| crates/solang/src/codegen/subexpression_elimination/anticipated_expressions.rs: 18/52
|| crates/solang/src/codegen/subexpression_elimination/available_expression.rs: 2/82
|| crates/solang/src/codegen/subexpression_elimination/available_expression_set.rs: 24/261
|| crates/solang/src/codegen/subexpression_elimination/available_variable.rs: 0/12
|| crates/solang/src/codegen/subexpression_elimination/common_subexpression_tracker.rs: 11/88
|| crates/solang/src/codegen/subexpression_elimination/expression.rs: 9/137
|| crates/solang/src/codegen/subexpression_elimination/instruction.rs: 8/255
|| crates/solang/src/codegen/subexpression_elimination/mod.rs: 70/87
|| crates/solang/src/codegen/subexpression_elimination/operator.rs: 0/51
|| crates/solang/src/codegen/undefined_variable.rs: 16/43
|| crates/solang/src/codegen/unused_variable.rs: 0/26
|| crates/solang/src/codegen/vartable.rs: 48/87
|| crates/solang/src/codegen/vector_to_slice.rs: 38/90
|| crates/solang/src/codegen/yul/builtin.rs: 0/234
|| crates/solang/src/codegen/yul/expression.rs: 0/109
|| crates/solang/src/codegen/yul/mod.rs: 0/32
|| crates/solang/src/codegen/yul/statements.rs: 0/185
|| crates/solang/src/file_resolver.rs: 42/113
|| crates/solang/src/languageserver.rs: 323/1478
|| crates/solang/src/lib.rs: 19/44
|| crates/solang/src/sema/address.rs: 0/17
|| crates/solang/src/sema/ast.rs: 71/393
|| crates/solang/src/sema/builtin.rs: 414/991
|| crates/solang/src/sema/builtin_structs.rs: 0/143
|| crates/solang/src/sema/contracts.rs: 175/573
|| crates/solang/src/sema/diagnostics.rs: 19/124
|| crates/solang/src/sema/dotgraphviz.rs: 0/1190
|| crates/solang/src/sema/eval.rs: 20/326
|| crates/solang/src/sema/expression/arithmetic.rs: 0/376
|| crates/solang/src/sema/expression/assign.rs: 0/229
|| crates/solang/src/sema/expression/constructor.rs: 0/281
|| crates/solang/src/sema/expression/function_call.rs: 0/1112
|| crates/solang/src/sema/expression/integers.rs: 0/115
|| crates/solang/src/sema/expression/literals.rs: 10/404
|| crates/solang/src/sema/expression/member_access.rs: 0/408
|| crates/solang/src/sema/expression/mod.rs: 12/695
|| crates/solang/src/sema/expression/resolve_expression.rs: 3/289
|| crates/solang/src/sema/expression/retrieve_type.rs: 2/15
|| crates/solang/src/sema/expression/strings.rs: 9/57
|| crates/solang/src/sema/expression/subscript.rs: 0/68
|| crates/solang/src/sema/expression/variable.rs: 0/87
|| crates/solang/src/sema/file.rs: 16/45
|| crates/solang/src/sema/format.rs: 0/111
|| crates/solang/src/sema/function_annotation.rs: 14/179
|| crates/solang/src/sema/functions.rs: 112/575
|| crates/solang/src/sema/mod.rs: 110/281
|| crates/solang/src/sema/mutability.rs: 30/242
|| crates/solang/src/sema/namespace.rs: 58/715
|| crates/solang/src/sema/solana_accounts.rs: 6/26
|| crates/solang/src/sema/statements.rs: 91/1137
|| crates/solang/src/sema/symtable.rs: 14/72
|| crates/solang/src/sema/tags.rs: 21/115
|| crates/solang/src/sema/types.rs: 101/1089
|| crates/solang/src/sema/unused_variable.rs: 22/221
|| crates/solang/src/sema/using.rs: 0/247
|| crates/solang/src/sema/variables.rs: 72/405
|| crates/solang/src/sema/yul/ast.rs: 0/37
|| crates/solang/src/sema/yul/block.rs: 0/35
|| crates/solang/src/sema/yul/builtin.rs: 0/21
|| crates/solang/src/sema/yul/expression.rs: 0/345
|| crates/solang/src/sema/yul/for_loop.rs: 0/38
|| crates/solang/src/sema/yul/functions.rs: 0/133
|| crates/solang/src/sema/yul/mod.rs: 0/14
|| crates/solang/src/sema/yul/statements.rs: 0/163
|| crates/solang/src/sema/yul/switch.rs: 0/81
|| crates/solang/src/sema/yul/types.rs: 0/49
|| crates/solang/src/sema/yul/unused_variable.rs: 0/18
||
12.30% coverage, 3514/28567 lines covered
```
</details>
