# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/rv-kmir.md
- **Milestone:** 4 
- **Kusama Identity:** 
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
|-|-|-|-|-|
| **0a.** | License | <ul><li>[x] </li></ul>| [BDS-3](https://github.com/runtimeverification/mir-semantics/blob/ee4f434814ea255219c58a9995ee6f6d254811e7/LICENSE) | - |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| | See [Documentation Feedback](#documentation-feedback) |
| **0c.** | Testing and Testing Guide | <ul><li>[ ] </li></ul>| | See [Docker Feedback](#docker-feedback) |
| **0d.** | Docker | <ul><li>[x] </li></ul>| | See [Docker Feedback](#docker-feedback) |
| 1. | KMIR documentation | <ul><li>[ ] </li></ul>| | (to be evaluated after 0b.-0d. are fixed) |
| 2. | **kup** integration | <ul><li>[ ] </li></ul>| | (to be evaluated after 0b.-0d. are fixed) |
| 3. | Blog post | <ul><li>[ ] </li></ul>| | (to be evaluated after 0b.-0d. are fixed) |

## General Notes

- the machine used for this evaluation is a MacBook Pro M2

## Documentation Feedback

- [x] install instructions for the prerequsites ~~are missing~~ have been [added](https://github.com/runtimeverification/mir-semantics/issues/271) (python, pip, poetry)
- [ ] `make build` fails, whether I run it on the repos root path or inside the `kmir` directory:
    ```bash
    # make build
    make: *** No rule to make target 'build'.  Stop.
    ```

    ```bash
    ~/mir-semantics/kmir# make build
    poetry install

    RuntimeError

    The Poetry configuration is invalid:
        - Additional properties are not allowed ('group' was unexpected)
    

    at /usr/lib/python3/dist-packages/poetry/core/factory.py:43 in create_poetry
        39│             message = ""
        40│             for error in check_result["errors"]:
        41│                 message += "  - {}\n".format(error)
        42│ 
        →  43│             raise RuntimeError("The Poetry configuration is invalid:\n" + message)
        44│ 
        45│         # Load package
        46│         name = local_config["name"]
        47│         version = local_config["version"]
    make: *** [Makefile:30: poetry-install] Error 1
```

## Docker Feedback

- [x] build passes:
    ```zsh
    % docker build . --build-arg K_COMMIT=$(cat ./deps/k_release) --tag mir-semantics:$(cat ./deps/k_release)
    [+] Building 1.4s (10/10) FINISHED docker:desktop-linux
    => [internal] load build definition from Dockerfile 0.0s
    => => transferring dockerfile: 498B 0.0s
    => [internal] load .dockerignore 0.0s
    => => transferring context: 65B 0.0s
    => [internal] load metadata for docker.io/runtimeverificationinc/kframework-k:ubuntu-jammy-6.1.21 1.1s
    => [1/5] FROM docker.io/runtimeverificationinc/kframework-k:ubuntu-jammy-6.1.21@sha256:0cf763bf5b297a882fdbd93fdf78c94ff5df16f1d9242c4112285ad27a05e641 0.0s
    => [internal] load build context 0.3s
    => => transferring context: 1.28MB 0.3s
    => CACHED [2/5] RUN    apt-get update && apt-get upgrade --yes     && apt-get install --yes curl 0.0s
    => CACHED [3/5] RUN curl -sSL https://install.python-poetry.org | POETRY_HOME=/usr python3 - --version 1.3.2 0.0s
    => CACHED [4/5] RUN groupadd -g 1000 user && useradd -m -u 1000 -s /bin/sh -g user user 0.0s
    => CACHED [5/5] COPY --chown=user:user . /home/user 0.0s
    => exporting to image 0.0s
    => => exporting layers 0.0s
    => => writing image sha256:194d7b0e642295e2a0dd0f05a11be12facfd38f59d84efbc82abeb0a2d66b5aa 0.0s
    => => naming to docker.io/library/mir-semantics:6.1.21 0.0s

    What's Next?
    1. Sign in to your Docker account → docker login
    2. View a summary of image vulnerabilities and recommendations → docker scout quickview
    ```
- [ ] currently there are lots of errors when running the tests using docker on MacOS, however, they pass when running them on ubuntu:

    ```bash
    # docker run --name kmir-container --rm --interactive --tty --detach --workdir /home/user kmir-tests &&
    docker cp . kmir-container:/home/user &&
    docker exec kmir-container chown -R user:user /home/user &&
    docker exec --user user kmir-container make -C kmir test-integration
    b7088d1dbf406aca16e6cc3b466cbe8780166434975f6bdc55911a4e5cb4f5ad
    Successfully copied 3.18MB to kmir-container:/home/user
    make: Entering directory '/home/user/kmir'
    poetry install
    Creating virtualenv kmir-3fIw2bCi-py3.10 in /home/user/.cache/pypoetry/virtualenvs

    (...)

    poetry run pytest -ra                                              \
            src/tests/integration/test_parse.py                               \
            src/tests/integration/test_run.py                                 \
            src/tests/integration/test_prove.py                               \
            --numprocesses=4 --durations=0 --maxfail=1 --verbose  \

    ============================= test session starts ==============================
    platform linux -- Python 3.10.12, pytest-7.4.3, pluggy-1.3.0 -- /home/user/.cache/pypoetry/virtualenvs/kmir-3fIw2bCi-py3.10/bin/python
    cachedir: .pytest_cache
    rootdir: /home/user/kmir
    plugins: xdist-3.5.0, timeout-2.1.0, pyk-0.1.540, mock-3.12.0
    created: 4/4 workers
    4 workers [185 items]

    scheduling tests via LoadScheduling

    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-param-type.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-repeat.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-alignof.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-qualified-path.mir] 

    [gw1] [  0%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-qualified-path.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-tuple.mir] 
    [gw1] [  1%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-tuple.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/blocks-basic.mir] 
    [gw1] [  1%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/blocks-basic.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-parameters.mir] 
    [gw1] [  2%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-parameters.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-storage-dead.mir] 
    [gw1] [  2%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-storage-dead.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-float.mir] 
    [gw1] [  3%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-float.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-move.mir] 
    [gw1] [  3%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-move.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-reference.mir] 
    [gw1] [  4%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-reference.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-complex.mir] 
    [gw1] [  4%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-complex.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-indexing.mir] 
    [gw1] [  5%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-indexing.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-empty.mir] 
    [gw1] [  5%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-empty.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-struct.mir] 
    [gw1] [  6%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-struct.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-len.mir] 
    [gw1] [  7%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-len.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-multiline.mir] 
    [gw1] [  7%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-multiline.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-sizeof.mir] 
    [gw1] [  8%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-sizeof.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-generator.mir] 
    [gw1] [  8%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-generator.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-empty.mir] 
    [gw1] [  9%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-empty.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-trait-object.mir] 
    [gw1] [  9%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-trait-object.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-never.mir] 
    [gw1] [ 10%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-never.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-assume.mir] 
    [gw1] [ 10%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-assume.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-unary.mir] 
    [gw1] [ 11%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-unary.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-literal-as.mir] 
    [gw1] [ 11%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-literal-as.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/bindings.mir] 
    [gw1] [ 12%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/bindings.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-generator.mir] 
    [gw1] [ 12%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-generator.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-assert.mir] 
    [gw1] [ 13%] SKIPPED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-assert.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-tuple.mir] 
    [gw1] [ 14%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-tuple.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-as.mir] 
    [gw1] [ 14%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-as.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-mir-closure.mir] 
    [gw1] [ 15%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-mir-closure.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-named.mir] 
    [gw1] [ 15%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-named.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-reference.mir] 
    [gw1] [ 16%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-reference.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-args.mir] 
    [gw1] [ 16%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-args.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope.mir] 
    [gw1] [ 17%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-slice.mir] 
    [gw1] [ 17%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-slice.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-static.mir] 
    [gw1] [ 18%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-static.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-bool.mir] 
    [gw1] [ 18%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-bool.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-enum-cast.mir] 
    [gw1] [ 19%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-enum-cast.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-segment.mir] 
    [gw1] [ 20%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-segment.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-typed-field-complex.mir] 
    [gw1] [ 20%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-typed-field-complex.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-struct-hex-field.mir] 
    [gw1] [ 21%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-struct-hex-field.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-with-name.mir] 
    [gw1] [ 21%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-with-name.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-scope.mir] 
    [gw1] [ 22%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-scope.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-list.mir] 
    [gw1] [ 22%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-list.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-function.mir] 
    [gw1] [ 23%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-function.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-variable.mir] 
    [gw1] [ 23%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-variable.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-goto.mir] 
    [gw1] [ 24%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-goto.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-param-lifetime.mir] 
    [gw1] [ 24%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-param-lifetime.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-return.mir] 
    [gw1] [ 25%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-return.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-const.mir] 
    [gw1] [ 25%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-const.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-path-impl-type.mir] 
    [gw1] [ 26%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-path-impl-type.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-path-fn.mir] 
    [gw1] [ 27%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-path-fn.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-parenthesis.mir] 
    [gw1] [ 27%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-parenthesis.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-move.mir] 
    [gw1] [ 28%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-move.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array-identifier-len.mir] 
    [gw1] [ 28%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array-identifier-len.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-function-pointer.mir] 
    [gw1] [ 29%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-function-pointer.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-arguments.mir] 
    [gw1] [ 29%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-arguments.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call.mir] 
    [gw1] [ 30%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-precedence.mir] 
    [gw1] [ 30%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-precedence.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-fn.mir] 
    [gw1] [ 31%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-fn.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-move.mir] 
    [gw1] [ 31%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-move.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-simple.mir] 
    [gw1] [ 32%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-simple.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-empty-tuple.mir] 
    [gw1] [ 32%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-empty-tuple.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-dereference.mir] 
    [gw1] [ 33%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-dereference.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-closure-reference.mir] 
    [gw1] [ 34%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-closure-reference.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-raw-pointer.mir] 
    [gw1] [ 34%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-raw-pointer.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-debug.mir] 
    [gw1] [ 35%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-debug.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-resume.mir] 
    [gw3] [ 35%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-alignof.mir] 
    [gw1] [ 36%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-resume.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-reference-double.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-binding.mir] 
    [gw3] [ 36%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-binding.mir] 
    [gw1] [ 37%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-reference-double.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-location.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-enum-same-as-builtin.mir] 
    [gw1] [ 37%] SKIPPED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-enum-same-as-builtin.mir] 
    [gw3] [ 38%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-location.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-reference.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array-expr.mir] 
    [gw1] [ 38%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array-expr.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lifetime.mir] 
    [gw3] [ 39%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-reference.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-constant-closure.mir] 
    [gw1] [ 40%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lifetime.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/struct-constructor.mir] 
    [gw3] [ 40%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-constant-closure.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-cast.mir] 
    [gw1] [ 41%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/struct-constructor.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-slice.mir] 
    [gw3] [ 41%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-cast.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-intrinsic-assume.mir] 
    [gw1] [ 42%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-slice.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-destination-int-list.mir] 
    [gw3] [ 42%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-intrinsic-assume.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl-reference-sum.mir] 
    [gw1] [ 43%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-destination-int-list.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-tuple.mir] 
    [gw3] [ 43%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl-reference-sum.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-dereference-complex.mir] 
    [gw1] [ 44%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-tuple.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-struct.mir] 
    [gw3] [ 44%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-dereference-complex.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-anonymous.mir] 
    [gw1] [ 45%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-struct.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-assignment-destination.mir] 
    [gw3] [ 45%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-anonymous.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-opaque.mir] 
    [gw1] [ 46%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-assignment-destination.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-literal.mir] 
    [gw3] [ 47%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-opaque.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc.mir] 
    [gw1] [ 47%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-literal.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-mutable.mir] 
    [gw1] [ 48%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-mutable.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-shim.mir] 
    [gw3] [ 48%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl.mir] 
    [gw1] [ 49%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-shim.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-dyn.mir] 
    [gw1] [ 49%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-dyn.mir] 
    [gw3] [ 50%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-strings.mir] 
    [gw3] [ 50%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-generic-args.mir] 
    [gw1] [ 51%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-strings.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-const.mir] 
    [gw3] [ 51%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-generic-args.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-path-int.mir] 
    [gw1] [ 52%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-const.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-arithmetic.mir] 
    [gw3] [ 52%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-path-int.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-storage-live.mir] 
    [gw3] [ 53%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-storage-live.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-alloc.mir] 
    [gw1] [ 54%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-arithmetic.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/promoted-definition.mir] 
    [gw3] [ 54%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-alloc.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/mir-multiple-functions.mir] 
    [gw1] [ 55%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/promoted-definition.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array.mir] 
    [gw3] [ 55%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/mir-multiple-functions.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/debug-complex.mir] 
    [gw3] [ 56%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/debug-complex.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-operators.mir] 
    [gw1] [ 56%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-function-path.mir] 
    [gw3] [ 57%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-operators.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-constructor.mir] 
    [gw3] [ 57%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-constructor.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-as-variant.mir] 
    [gw3] [ 58%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-as-variant.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-deinit.mir] 
    [gw1] [ 58%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-function-path.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-empty-generic-args.mir] 
    [gw3] [ 59%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-deinit.mir] 
    [gw1] [ 60%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-empty-generic-args.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-assignment.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-simple.mir] 
    [gw1] [ 60%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-simple.mir] 
    [gw3] [ 61%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-assignment.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-deref_copy.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-discriminant.mir] 
    [gw3] [ 61%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-deref_copy.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-async.mir] 
    [gw1] [ 62%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-discriminant.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-const-eval-counter.mir] 
    [gw3] [ 62%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-async.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-static.mir] 
    [gw3] [ 63%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-static.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-grouped.mir] 
    [gw1] [ 63%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-const-eval-counter.mir] 
    [gw3] [ 64%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-grouped.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-uninitialized.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-constant-index.mir] 
    [gw1] [ 64%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-constant-index.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/arrays/array.mir] 
    [gw1] [ 65%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/arrays/array.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/traits/derive-copy-struct.mir] 
    [gw1] [ 65%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/traits/derive-copy-struct.mir] 
    [gw3] [ 66%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-uninitialized.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-ampersand.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/traits/defined-trait.mir] 
    [gw1] [ 67%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/traits/defined-trait.mir] 
    [gw3] [ 67%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-ampersand.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/debug.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/fibonacci.mir] 
    [gw3] [ 68%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/debug.mir] 
    src/tests/integration/test_parse.py::test_compiletest[test_id0-input_path0] 
    [gw3] [ 68%] SKIPPED src/tests/integration/test_parse.py::test_compiletest[test_id0-input_path0] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/recursion-simple.mir] 
    [gw1] [ 69%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/fibonacci.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/mutual_recursion.mir] 
    [gw2] [ 69%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-repeat.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-field.mir] 
    [gw2] [ 70%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-field.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-assignment.mir] 
    [gw2] [ 70%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-assignment.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-int.mir] 
    [gw2] [ 71%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-int.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-intrinsic-copy-non-overlapping.mir] 
    [gw2] [ 71%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-intrinsic-copy-non-overlapping.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-call.mir] 
    [gw2] [ 72%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-call.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-unreachable.mir] 
    [gw2] [ 72%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-unreachable.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-closure.mir] 
    [gw2] [ 73%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-closure.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/blocks-cleanup.mir] 
    [gw2] [ 74%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/blocks-cleanup.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-shallow-init-box.mir] 
    [gw2] [ 74%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-shallow-init-box.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-destination.mir] 
    [gw2] [ 75%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-destination.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/slices/slice.mir] 
    [gw2] [ 75%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/slices/slice.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/enums/enum.mir] 
    [gw2] [ 76%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/enums/enum.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/closures/closure-no-args.mir] 
    [gw2] [ 76%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/closures/closure-no-args.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/closures/closure-args.mir] 
    [gw2] [ 77%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/closures/closure-args.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/assert/assert_eq.mir] 
    [gw3] [ 77%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/recursion-simple.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/memory/box.mir] 
    [gw3] [ 78%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/memory/box.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/structs/struct.mir] 
    [gw3] [ 78%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/structs/struct.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/tuples/tuple-eq.mir] 
    [gw3] [ 79%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/tuples/tuple-eq.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/tuples/tuples-simple.mir] 
    [gw1] [ 80%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/mutual_recursion.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/recursion-simple-match.mir] 
    [gw2] [ 80%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/assert/assert_eq.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/generics/generic.mir] 
    [gw2] [ 81%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/generics/generic.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/ref-deref.mir] 
    [gw3] [ 81%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/tuples/tuples-simple.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/strange-ref-deref.mir] 
    [gw1] [ 82%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/recursion-simple-match.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/double-ref-deref.mir] 
    [gw2] [ 82%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/ref-deref.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/functions/sum-to-n.mir] 
    [gw3] [ 83%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/strange-ref-deref.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/integers/modulo.mir] 
    [gw3] [ 83%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/integers/modulo.mir] 
    [gw1] [ 84%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/double-ref-deref.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/integers/binop.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/integers/primitive-type-bounds.mir] 
    [gw2] [ 84%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/functions/sum-to-n.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/integers/div.mir] 
    [gw2] [ 85%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/integers/div.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/str-empty.mir] 
    [gw2] [ 85%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/str-empty.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/std-string-empty.mir] 
    [gw2] [ 86%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/std-string-empty.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/char-trivial.mir] 
    [gw2] [ 87%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/char-trivial.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/std-to-string.mir] 
    [gw2] [ 87%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/std-to-string.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/str-trivial.mir] 
    [gw2] [ 88%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/strings-chars/str-trivial.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/option/option-construction.mir] 
    [gw1] [ 88%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/integers/primitive-type-bounds.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/integers/const-arithm-simple.mir] 
    [gw3] [ 89%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/integers/binop.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/integers/shl_min.mir] 
    [gw3] [ 89%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/integers/shl_min.mir] 
    src/tests/integration/test_prove.py::test_handwritten[prove-rs/empty-program.k] 
    [gw2] [ 90%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/option/option-construction.mir] 
    src/tests/integration/test_run.py::test_handwritten[run-rs/floats/float.mir] 
    [gw2] [ 90%] SKIPPED src/tests/integration/test_run.py::test_handwritten[run-rs/floats/float.mir] 
    src/tests/integration/test_prove.py::test_handwritten[prove-rs/simple-spec.k] 
    [gw1] [ 91%] PASSED src/tests/integration/test_run.py::test_handwritten[run-rs/integers/const-arithm-simple.mir] 
    src/tests/integration/test_run.py::test_compiletest[test_id0-input_path0] 
    [gw1] [ 91%] SKIPPED src/tests/integration/test_run.py::test_compiletest[test_id0-input_path0] 
    [gw0] [ 92%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-param-type.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-fn-ambiguity.mir] 
    [gw0] [ 92%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-fn-ambiguity.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl-trait.mir] 
    [gw0] [ 93%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl-trait.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-const.mir] 
    [gw0] [ 94%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-const.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-as-type.mir] 
    [gw0] [ 94%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-as-type.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-anonymous-closure.mir] 
    [gw0] [ 95%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-anonymous-closure.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-typed-field.mir] 
    [gw0] [ 95%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-typed-field.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-variable.mir] 
    [gw0] [ 96%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-variable.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-switchInt.mir] 
    [gw0] [ 96%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-switchInt.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-enum.mir] 
    [gw0] [ 97%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-enum.mir] 
    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-discriminant.mir] 
    [gw0] [ 97%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-discriminant.mir] 
    [gw3] [ 98%] PASSED src/tests/integration/test_prove.py::test_handwritten[prove-rs/empty-program.k] 
    src/tests/integration/test_prove.py::test_handwritten[prove-rs/verify.k] 
    [gw3] [ 98%] SKIPPED src/tests/integration/test_prove.py::test_handwritten[prove-rs/verify.k] 
    [gw2] [ 99%] PASSED src/tests/integration/test_prove.py::test_handwritten[prove-rs/simple-spec.k] 
    src/tests/integration/test_prove.py::test_handwritten[prove-rs/lemmas.k] 
    [gw2] [100%] PASSED src/tests/integration/test_prove.py::test_handwritten[prove-rs/lemmas.k] 

    ============================== slowest durations ===============================
    247.08s setup    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-param-type.mir]
    243.44s setup    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-repeat.mir]
    243.18s setup    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-alignof.mir]
    242.52s setup    src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-qualified-path.mir]
    218.38s call     src/tests/integration/test_prove.py::test_handwritten[prove-rs/simple-spec.k]
    44.05s call     src/tests/integration/test_prove.py::test_handwritten[prove-rs/lemmas.k]
    35.16s call     src/tests/integration/test_prove.py::test_handwritten[prove-rs/empty-program.k]
    0.20s call     src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/mutual_recursion.mir]
    0.20s call     src/tests/integration/test_run.py::test_handwritten[run-rs/integers/const-arithm-simple.mir]
    0.17s call     src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/recursion-simple.mir]
    0.14s call     src/tests/integration/test_run.py::test_handwritten[run-rs/integers/binop.mir]
    0.13s call     src/tests/integration/test_run.py::test_handwritten[run-rs/assert/assert_eq.mir]
    0.12s call     src/tests/integration/test_run.py::test_handwritten[run-rs/tuples/tuples-simple.mir]
    0.11s call     src/tests/integration/test_run.py::test_handwritten[run-rs/recursion/recursion-simple-match.mir]
    0.10s call     src/tests/integration/test_run.py::test_handwritten[run-rs/option/option-construction.mir]
    0.10s call     src/tests/integration/test_run.py::test_handwritten[run-rs/functions/sum-to-n.mir]
    0.09s call     src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/strange-ref-deref.mir]
    0.09s call     src/tests/integration/test_run.py::test_handwritten[run-rs/integers/primitive-type-bounds.mir]
    0.09s call     src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/double-ref-deref.mir]
    0.09s call     src/tests/integration/test_run.py::test_handwritten[run-rs/ref-deref/ref-deref.mir]
    0.04s teardown src/tests/integration/test_run.py::test_compiletest[test_id0-input_path0]
    0.04s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/generic-args.mir]
    0.03s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-empty-tuple.mir]
    0.03s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/lvalue-indexing.mir]
    0.02s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/blocks-basic.mir]
    0.02s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-empty.mir]
    0.02s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope.mir]
    0.02s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-tuple.mir]
    0.02s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-len.mir]
    0.02s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-mir-closure.mir]
    0.02s teardown src/tests/integration/test_prove.py::test_handwritten[prove-rs/verify.k]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-slice.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/const-struct.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-path-simple.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-multiline.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-array.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/data-alloc-uninitialized.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-path-fn.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-parameters.mir]
    0.01s teardown src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-discriminant.mir]
    0.01s teardown src/tests/integration/test_prove.py::test_handwritten[prove-rs/lemmas.k]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-generator.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-array-move.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-static.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/terminator-call-function-path.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-closure-reference.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rvalue-tuple.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/scope-debug.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-const-eval-counter.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/builtins-sizeof.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/promoted-definition.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-qualified-path.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-reference.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-impl.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/mir-multiple-functions.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/function-for-constant-named.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/type-raw-pointer.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/rust-expression-precedence.mir]
    0.01s call     src/tests/integration/test_parse.py::test_handwritten_syntax[parse-mir/statement-discriminant.mir]

    (494 durations < 0.005s hidden.  Use -vv to show these durations.)
    =========================== short test summary info ============================
    SKIPPED [2] src/tests/integration/test_parse.py:26: Skipped
    SKIPPED [21] src/tests/integration/test_run.py:33: Skipped
    SKIPPED [1] src/tests/integration/test_parse.py:46: got empty parameter set ('test_id', 'input_path'), function test_compiletest at /home/user/kmir/src/tests/integration/test_parse.py:45
    SKIPPED [1] src/tests/integration/test_run.py:47: got empty parameter set ('test_id', 'input_path'), function test_compiletest at /home/user/kmir/src/tests/integration/test_run.py:46
    SKIPPED [1] src/tests/integration/test_prove.py:36: Skipped
    ================= 159 passed, 26 skipped in 507.41s (0:08:27) ==================
    make: Leaving directory '/home/user/kmir'
    ```
