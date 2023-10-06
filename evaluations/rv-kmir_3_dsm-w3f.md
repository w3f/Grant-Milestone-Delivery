# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/rv-kmir.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License |<ul><li>[x] </li></ul>| [BSD-3](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/LICENSE) | |
| **0b.** | Documentation |<ul><li>[x] </li></ul>| [kmir CLI instructions](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/README.md) | Not fully evaluated yet. |
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>| [Testing Instructions with Docker](https://github.com/runtimeverification/mir-semantics/tree/milestone3-deliverable#running-integration-tests-with-docker) | |
| **0d.** | Docker |<ul><li>[x] </li></ul>| [Dockerfile](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/Dockerfile) | |
| 1. | KMIR semantics |<ul><li>[ ] </li></ul>| [mir.md](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/k-src/mir.md)) | Not fully evaluated yet. |
| 2. | **kmir** executable extension |<ul><li>[ ] </li></ul>| [**kmir run** implementation](https://github.com/runtimeverification/mir-semantics/blob/e5060a191fabe20799317ad4bd1ed50b4bf1adb9/kmir/src/kmir/__main__.py#L59), [** kmir run ** command](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/README.md#kmir-commands) | Not fully evaluated yet. |

## Evaluation V1

### Testing

I could run the tests using Docker without problems. I would like to know why so many skipped tests.

<details>

```

platform linux -- Python 3.10.12, pytest-7.4.2, pluggy-1.3.0 -- /home/user/.cache/pypoetry/virtualenvs/kmir-3fIw2bCi-py3.10/bin/python
cachedir: .pytest_cache
rootdir: /home/user/kmir
plugins: xdist-3.3.1, mock-3.11.1, pyk-0.1.431, timeout-2.1.0
4 workers [2695 items]  
scheduling tests via LoadScheduling

src/tests/integration/test_parse.py::test_handwritten_syntax[handwritten-mir/parsing/terminator-call-generic-args.mir]
src/tests/integration/test_parse.py::test_compiletest[compiletest-rs/ui/no-warn-on-field-replace-issue-34101.mir]
src/tests/integration/test_parse.py::test_compiletest[compiletest-rs/ui/drop/drop-on-ret.mir]
src/tests/integration/test_parse.py::test_compiletest[compiletest-rs/ui/unused-move-capture.mir]

...

1173 passed, 1522 skipped in 152.32s (0:02:32)

platform linux -- Python 3.10.12, pytest-7.4.2, pluggy-1.3.0 -- /home/user/.cache/pypoetry/virtualenvs/kmir-3fIw2bCi-py3.10/bin/python
cachedir: .pytest_cache
rootdir: /home/user/kmir
plugins: xdist-3.3.1, mock-3.11.1, pyk-0.1.431, timeout-2.1.0
4 workers [2555 items]  
scheduling tests via LoadScheduling

src/tests/integration/test_run.py::test_compiletest[compiletest-rs/ui/lazy-and-or.mir]
src/tests/integration/test_run.py::test_handwritten[handwritten-mir/execution/arithm-simple.mir]
src/tests/integration/test_run.py::test_compiletest[compiletest-rs/ui/hygiene/trait_items-2.mir]
src/tests/integration/test_run.py::test_compiletest[compiletest-rs/ui/let-else/let-else-binding-explicit-mut-pass.mir]

...

375 passed, 2180 skipped in 177.97s (0:02:57)

platform linux -- Python 3.10.12, pytest-7.4.2, pluggy-1.3.0 -- /home/user/.cache/pypoetry/virtualenvs/kmir-3fIw2bCi-py3.10/bin/python
cachedir: .pytest_cache
rootdir: /home/user/kmir
plugins: xdist-3.3.1, mock-3.11.1, pyk-0.1.431, timeout-2.1.0
4 workers [1 item] 	 
scheduling tests via LoadScheduling

src/tests/integration/test_prove.py::test_pyk_prove[.]

...

1 passed in 129.03s (0:02:09) 

```

</details>

I would like to know how to check the coverage of these tests.

### KMIR Semantics

I have some questions about the [mir.md](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/k-src/mir.md). Why the `MIR-EXECUTION`, the [data definitions](https://github.com/runtimeverification/mir-semantics/blob/milestone3-deliverable/kmir/k-src/mir.md#function-definition-processing), Negative assertions and Bindings declaration aren't fully implemented? 

### Kmir Run

I didn't fully understand what the command should do. Could you explain this to me? The command `kmir run` seems to work fine, except when I use `--output program`.

- `--output pretty`

    <details>

    ```
    (kmir-py3.10) user@localhost:~/Documents/kmir/mir-semantics/kmir$ kmir run --definition-dir $(poetry run kbuild which llvm) --output pretty src/tests/integration/test-data/handwritten-rust/const-arithm-simple.mir 
    <generatedTop>
    <k>
        .
    </k>
    <returncode>
        0
    </returncode>
    <mir>
        <simulator>
        <callStack>
            .List
        </callStack>
        <currentBasicBlock>
            3
        </currentBasicBlock>
        <phase>
            Finalization
        </phase>
        </simulator>
        <data>
        <functions>
            <function>
            <fnKey>
                Fn ( main :: .FunctionPath )
            </fnKey>
            <localDecls>
                <localDecl>
                <index>
                    0
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    ( )
                </ty>
                <value>
                    Unit
                </value>
                </localDecl> <localDecl>
                <index>
                    1
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    usize 
                </ty>
                <value>
                    42
                </value>
                </localDecl> <localDecl>
                <index>
                    2
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    usize 
                </ty>
                <value>
                    0
                </value>
                </localDecl> <localDecl>
                <index>
                    3
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    bool 
                </ty>
                <value>
                    true
                </value>
                </localDecl> <localDecl>
                <index>
                    4
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    bool 
                </ty>
                <value>
                    false
                </value>
                </localDecl> <localDecl>
                <index>
                    5
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    bool 
                </ty>
                <value>
                    true
                </value>
                </localDecl> <localDecl>
                <index>
                    6
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    !
                </ty>
                <value>
                    Never
                </value>
                </localDecl>
            </localDecls>
            <basicBlocks>
                <basicBlock>
                <bbName>
                    0
                </bbName>
                <bbBody>
                    { _1 = const 42_usize ;  _2 = const 0_usize ;  .Statements _3 = test :: .ExpressionPathList ( _1 , _2 , .ArgumentList ) -> bb1  ; }
                </bbBody>
                </basicBlock> <basicBlock>
                <bbName>
                    1
                </bbName>
                <bbBody>
                    { _5 = _3 ;  _4 = Not ( move _5 ) ;  .Statements switchInt ( move _4 ) -> [ 0 : bb3  , .SwitchTargets , otherwise : bb2  ] ; }
                </bbBody>
                </basicBlock> <basicBlock>
                <bbName>
                    2
                </bbName>
                <bbBody>
                    { .Statements _6 = core :: panicking :: panic :: .ExpressionPathList ( const "assertion failed: z" , .ArgumentList ) ; }
                </bbBody>
                </basicBlock> <basicBlock>
                <bbName>
                    3
                </bbName>
                <bbBody>
                    { .Statements return ; }
                </bbBody>
                </basicBlock>
            </basicBlocks>
            </function> <function>
            <fnKey>
                Fn ( test :: .FunctionPath )
            </fnKey>
            <localDecls>
                <localDecl>
                <index>
                    0
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    bool 
                </ty>
                <value>
                    true
                </value>
                </localDecl> <localDecl>
                <index>
                    1
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    usize 
                </ty>
                <value>
                    42
                </value>
                </localDecl> <localDecl>
                <index>
                    2
                </index>
                <mutability>
                    Not
                </mutability>
                <internal>
                    false
                </internal>
                <ty>
                    usize 
                </ty>
                <value>
                    0
                </value>
                </localDecl>
            </localDecls>
            <basicBlocks>
                <basicBlock>
                <bbName>
                    0
                </bbName>
                <bbBody>
                    { _0 = Gt ( _1 , _2 ) ;  .Statements return ; }
                </bbBody>
                </basicBlock>
            </basicBlocks>
            </function>
        </functions>
        </data>
    </mir>
    <generatedCounter>
    0
    </generatedCounter>
    ```

    </details>

- `--outupt program`

    <details>

    ```
    (kmir-py3.10) user@localhost:~/Documents/kmir/mir-semantics/kmir$ kmir run --definition-dir $(poetry run kbuild which llvm) --output program src/tests/integration/test-data/handwritten-mir/execution/arithm-simple.mir

    [Error] Internal: Uncaught exception thrown of type AssertionError.
    Please rerun your program with the --debug flag to generate a stack trace, and
    file a bug report at https://github.com/runtimeverification/k/issues
    (AssertionError: null)
    [Error] kore-print: 
    /nix/store/vqfg3dg6fba73bgcwzq4cp2hqilbxphs-k-5.6.110-f2f25ce7986f0c783f6ceeda42
    8d561a42b87f13-maven/bin/kast --input kore --definition 
    /home/user/.kbuild/mir-semantics/672f79c/target/v5.6.110/llvm --output 
    program .krun-2023-10-05-11-43-07-zVjgM9Pwxs/result.kore --color off
    [Error] krun: kore-print --definition 
    /home/user/.kbuild/mir-semantics/672f79c/target/v5.6.110/llvm --output 
    program .krun-2023-10-05-11-43-07-zVjgM9Pwxs/result.kore --color off

    Command krun exited with code 1 for: /tmp/tmplcgjle3k
    ```

    </details>

I will ask for a specialist in formal verification to look at this project.
