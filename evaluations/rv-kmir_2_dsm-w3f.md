# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/rv-kmir.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[x] </li></ul>| [BSD-3](https://github.com/runtimeverification/mir-semantics/blob/master/LICENSE)  | |
| **0b.** | Documentation |<ul><li>[x] </li></ul>|[kmir CLI instructions](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/kmir/README.md) |  |
| **0c.** | Testing and Testing Guide | <ul><li>[x] </li></ul>| [Testing Instructions with Docker](https://github.com/runtimeverification/mir-semantics/tree/milestone2-deliverable#running-integration-tests-with-docker) |  |
| **0d.** | Docker | <ul><li>[x] </li></ul>| [Dockerfile](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/Dockerfile) | 
| 1. | KMIR syntax | <ul><li>[x] </li></ul>| [mir-syntax.k](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/kmir/k-src/mir-syntax.k) |  |
| 2. | **kmir** executable extension | <ul><li>[x] </li></ul>| [**kmir parse** implementation](https://github.com/runtimeverification/mir-semantics/blob/bd09e9d1716904afbbab2c0e27735202689d788e/kmir/src/kmir/__main__.py#L23), [**kmir parse** examples](https://github.com/runtimeverification/mir-semantics/blob/milestone2-deliverable/kmir/README.md#examples) |  |

## Evaluation V3

### Docker

The steps you sent me are missing the `make build` command, resulting in the path problem. The `kmir parse` doesn't result in this problem if I run `make build` before `poetry shell`.


kmir parse

```
(kmir-py3.10) user@7034ba919a44:~/kmir$ kmir parse --definition-dir $(kbuild which llvm) src/tests/integration/test-data/handwritten-mir/execution/assert-true.mir
Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'Mir'Unds'MirComponent'Unds'Mir{}(inj{SortFunction{}, SortMirComponent{}}(Lbl'UndsLBraUndsRBraUnds'MIR-SYNTAX'Unds'Function'Unds'FunctionSignature'Unds'FunctionBody{}(Lblfn'UndsLParUndsRPar'-'-GT-UndsUnds'MIR-SYNTAX'Unds'FunctionSignature'Unds'FunctionPath'Unds'ParameterList'Unds'Type{}(Lbl'UndsColnColnUndsUnds'MIR-SYNTAX'Unds'FunctionPath'Unds'FunctionPathComponent'Unds'FunctionPath{}(inj{SortIdentifierToken{}, SortFunctionPathComponent{}}(\dv{SortIdentifierToken{}}("main")),Lbl'Stop'List'LBraQuotUndsColnColnUndsUnds'MIR-SYNTAX'Unds'FunctionPath'Unds'FunctionPathComponent'Unds'FunctionPath'QuotRBraUnds'FunctionPath{}()),Lbl'Stop'List'LBraQuotUndsCommUndsUnds'MIR-SYNTAX'Unds'ParameterList'Unds'Parameter'Unds'ParameterList'QuotRBraUnds'ParameterList{}(),inj{SortTupleType{}, SortType{}}(Lbl'LParRParUnds'MIR-SYNTAX'Unds'TupleType{}())),Lbl'UndsUndsUndsUndsUnds'MIR-SYNTAX'Unds'FunctionBody'Unds'DebugList'Unds'BindingList'Unds'ScopeList'Unds'BasicBlockList{}(Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'DebugList'Unds'Debug'Unds'DebugList'QuotRBraUnds'DebugList{}(),Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BindingList'Unds'Binding'Unds'BindingList{}(Lbllet'UndsUndsColnUndsSClnUnds'MIR-SYNTAX'Unds'Binding'Unds'OptMut'Unds'Local'Unds'Type{}(Lblmut'Unds'MIR-SYNTAX'Unds'OptMut{}(),inj{SortLocalToken{}, SortLocal{}}(\dv{SortLocalToken{}}("_0")),inj{SortTupleType{}, SortType{}}(Lbl'LParRParUnds'MIR-SYNTAX'Unds'TupleType{}())),Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BindingList'Unds'Binding'Unds'BindingList{}(Lbllet'UndsUndsColnUndsSClnUnds'MIR-SYNTAX'Unds'Binding'Unds'OptMut'Unds'Local'Unds'Type{}(Lblmut'Unds'MIR-SYNTAX'Unds'OptMut{}(),inj{SortLocalToken{}, SortLocal{}}(\dv{SortLocalToken{}}("_1")),inj{SortTypePathEndSegment{}, SortType{}}(Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'TypePathEndSegment'Unds'PathIdentSegment'Unds'PathIdentSegmentEndSuffix{}(inj{SortIdentifierToken{}, SortPathIdentSegment{}}(\dv{SortIdentifierToken{}}("bool")),inj{SortPathIdentSegmentSuffix{}, SortPathIdentSegmentEndSuffix{}}(Lbl'Unds'MIR-SYNTAX'Unds'PathIdentSegmentSuffix{}())))),Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'BindingList'Unds'Binding'Unds'BindingList'QuotRBraUnds'BindingList{}())),Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'ScopeList'Unds'Scope'Unds'ScopeList'QuotRBraUnds'ScopeList{}(),Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BasicBlockList'Unds'BasicBlock'Unds'BasicBlockList{}(Lbl'UndsColnUndsUnds'MIR-SYNTAX'Unds'BasicBlock'Unds'BB'Unds'BasicBlockBody{}(Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BB'Unds'BBName'Unds'MaybeBBCleanup{}(inj{SortBBToken{}, SortBBName{}}(\dv{SortBBToken{}}("bb0")),Lbl'Unds'MIR-SYNTAX'Unds'MaybeBBCleanup{}()),Lbl'LBraUndsUndsSClnRBraUnds'MIR-SYNTAX'Unds'BasicBlockBody'Unds'StatementList'Unds'Terminator{}(Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'StatementList'Unds'TerminatedStatement'Unds'StatementList{}(Lbl'UndsSClnUnds'MIR-SYNTAX'Unds'TerminatedStatement'Unds'Statement{}(Lbl'UndsEqlsUndsUnds'MIR-SYNTAX'Unds'Statement'Unds'Place'Unds'RValue{}(inj{SortLocalToken{}, SortPlace{}}(\dv{SortLocalToken{}}("_1")),inj{SortConstant{}, SortRValue{}}(Lblconst'UndsUnds'MIR-SYNTAX'Unds'Constant'Unds'ConstantValue{}(inj{SortBool{}, SortConstantValue{}}(\dv{SortBool{}}("true")))))),Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'StatementList'Unds'TerminatedStatement'Unds'StatementList'QuotRBraUnds'StatementList{}()),Lbl'Unds'-'-GT-UndsUnds'MIR-SYNTAX'Unds'Terminator'Unds'CallLike'Unds'TerminatorDestination{}(inj{SortAssertCall{}, SortCallLike{}}(Lblassert'LParUndsRParUnds'MIR-SYNTAX'Unds'AssertCall'Unds'AssertArgumentList{}(Lbl'UndsCommUndsUnds'MIR-SYNTAX'Unds'AssertArgumentList'Unds'AssertArgument'Unds'AssertArgumentList{}(inj{SortLocalToken{}, SortAssertArgument{}}(\dv{SortLocalToken{}}("_1")),Lbl'Stop'List'LBraQuotUndsCommUndsUnds'MIR-SYNTAX'Unds'AssertArgumentList'Unds'AssertArgument'Unds'AssertArgumentList'QuotRBraUnds'AssertArgumentList{}()))),inj{SortBB{}, SortTerminatorDestination{}}(Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BB'Unds'BBName'Unds'MaybeBBCleanup{}(inj{SortBBToken{}, SortBBName{}}(\dv{SortBBToken{}}("bb1")),Lbl'Unds'MIR-SYNTAX'Unds'MaybeBBCleanup{}()))))),Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BasicBlockList'Unds'BasicBlock'Unds'BasicBlockList{}(Lbl'UndsColnUndsUnds'MIR-SYNTAX'Unds'BasicBlock'Unds'BB'Unds'BasicBlockBody{}(Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'BB'Unds'BBName'Unds'MaybeBBCleanup{}(inj{SortBBToken{}, SortBBName{}}(\dv{SortBBToken{}}("bb1")),Lbl'Unds'MIR-SYNTAX'Unds'MaybeBBCleanup{}()),Lbl'LBraUndsUndsSClnRBraUnds'MIR-SYNTAX'Unds'BasicBlockBody'Unds'StatementList'Unds'Terminator{}(Lbl'UndsUndsUnds'MIR-SYNTAX'Unds'StatementList'Unds'TerminatedStatement'Unds'StatementList{}(Lbl'UndsSClnUnds'MIR-SYNTAX'Unds'TerminatedStatement'Unds'Statement{}(Lbl'UndsEqlsUndsUnds'MIR-SYNTAX'Unds'Statement'Unds'Place'Unds'RValue{}(inj{SortLocalToken{}, SortPlace{}}(\dv{SortLocalToken{}}("_0")),inj{SortConstant{}, SortRValue{}}(Lblconst'UndsUnds'MIR-SYNTAX'Unds'Constant'Unds'ConstantValue{}(inj{SortTupleConstant{}, SortConstantValue{}}(Lbl'LParRParUnds'MIR-SYNTAX'Unds'TupleConstant{}()))))),Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'StatementList'Unds'TerminatedStatement'Unds'StatementList'QuotRBraUnds'StatementList{}()),Lblreturn'Unds'MIR-SYNTAX'Unds'Terminator{}())),Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'BasicBlockList'Unds'BasicBlock'Unds'BasicBlockList'QuotRBraUnds'BasicBlockList{}()))))),Lbl'Stop'List'LBraQuotUndsUndsUnds'MIR-SYNTAX'Unds'Mir'Unds'MirComponent'Unds'Mir'QuotRBraUnds'Mir{}())
```

kmir parse --output pretty

```
(kmir-py3.10) user@7034ba919a44:~/kmir$ kmir parse --definition-dir $(kbuild which llvm) src/tests/integration/test-data/handwritten-mir/execution/assert-true.mir --output pretty
fn main :: .FunctionPath ( .ParameterList ) -> ( ) { .DebugList let mut _0 : ( ) ;  let mut _1 : bool  ;  .BindingList .ScopeList bb0  : { _1 = const true ;  .StatementList assert ( _1 , .AssertArgumentList ) -> bb1  ; }  bb1  : { _0 = const ( ) ;  .StatementList return ; }  .BasicBlockList }  .Mir
```

I got the same results without Docker.

Please, adjust the documentation, adding the `make build` to the instructions.

## Evaluation V2

### Testing

I ran the tests and noticed most of the tests was removed, keeping only the `test_handwritten`. This was to only run tests related to the KMIR syntax and Kmir parse?

```
[gw0] [ 98%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[statement-storage-live.mir]
src/tests/integration/test_parse.py::test_handwritten_syntax[builtins-deref_copy.mir]
[gw0] [ 99%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[builtins-deref_copy.mir]
src/tests/integration/test_parse.py::test_handwritten_syntax[type-array-identifier-len.mir]
[gw0] [100%] PASSED src/tests/integration/test_parse.py::test_handwritten_syntax[type-array-identifier-len.mir]

================================================================================================ slowest durations ================================================================================================
63.03s setup	src/tests/integration/test_parse.py::test_handwritten_syntax[terminator-call-generic-args.mir]
62.30s setup	src/tests/integration/test_parse.py::test_handwritten_syntax[type-async.mir]
62.12s setup	src/tests/integration/test_parse.py::test_handwritten_syntax[rvalue-variable.mir]
61.39s setup	src/tests/integration/test_parse.py::test_handwritten_syntax[statement-const-eval-counter.mir]
0.03s teardown src/tests/integration/test_parse.py::test_compiletest[test_id0-input_path0]
0.02s call 	src/tests/integration/test_parse.py::test_handwritten_syntax[type-impl-reference-sum.mir]
0.01s call 	src/tests/integration/test_parse.py::test_handwritten_syntax[rust-expression-precedence.mir]

(430 durations < 0.005s hidden.  Use -vv to show these durations.)
==================================================================================== 145 passed, 1 skipped in 63.57s (0:01:03) ====================================================================================
```

### Kmir parse

I had the same problems again. 

Here is the list of versions:

```
user@localhost:~/Documents/kmir/k/mir-semantics$ kup list
┌───────────┬──────────────────────────────────────────┬──────────────┐
│ Package   │ Installed version                        │ Status       │
├───────────┼──────────────────────────────────────────┼──────────────┤
│ kup       │ f6363845418afc73d13c6b940d8e987c3fce5c67 │ 🟢 installed │
│ k         │ f2f25ce7986f0c783f6ceeda428d561a42b87f13 │ 🟢 installed │
│ pyk       │ ce5421ac331f0e191d32b54697294f54a7b38baf │ 🟢 installed │
│ kavm      │                                          │ 🔵 available │
│ kevm      │                                          │ 🔵 available │
│ kplutus   │                                          │ 🔵 available │
│ kore-exec │                                          │ 🔵 available │
│ kore-rpc  │                                          │ 🔵 available │
└───────────┴──────────────────────────────────────────┴──────────────┘
user@localhost:~/Documents/kmir/mir-semantics/kmir$ poetry --version
Poetry (version 1.5.0)
user@localhost:~/Documents/kmir/mir-semantics/kmir$ pip --version
pip 22.2.2 from /home/user/.pyenv/versions/3.10.8/lib/python3.10/site-packages/pip (python 3.10)
user@localhost:~/Documents/kmir/mir-semantics/kmir$ python -V
Python 3.10.8
```

Is the Python version in the prerequisites correct? Could you provide the versions that you are using? Usually, when we have problems reproducing the steps to install the software under evaluation we ask for a demo video to help in this task. Can you provide a demo video showing how to install and use the application? Otherwise, we will wait for the docker ticket to be solved to try again with docker, which is a more controlled environment. 



## Evaluation V1

### Testing

When I ran the docker run command, I got this error:

```
user@localhost:~/Documents/kmir/mir-semantics$ docker run --name mir-semantics --rm -it -u user --workdir /home/user mir-semantics:$(cat ./deps/k_release) make -C kmir test-integration
make: Entering directory '/home/user/kmir'
poetry install
Creating virtualenv kmir-3fIw2bCi-py3.10 in /home/user/.cache/pypoetry/virtualenvs
Installing dependencies from lock file

Unable to read the lock file (Invalid statement (at line 477, column 1)).
make: *** [Makefile:21: poetry-install] Error 1
make: Leaving directory '/home/user/kmir'
```

This problem is because poetry.lock has some conflicts. I fixed this by keeping the more recent versions of the packages. Please fix this problem in the repository in the branch used for this delivery.

The result of the test_parse.py was 3113 passed and 84 skipped. Could you explain better why these tests were skipped? Here is the list of the skipped tests:

```
compiletest-rs/ui/ufcs-polymorphic-paths.mir
compiletest-rs/ui/utf8_idents.mir
compiletest-rs/ui/weird-exprs.mir
compiletest-rs/ui/async-await/issue-105501.mir
compiletest-rs/ui/autoref-autoderef/autoderef-method-twice-but-not-thrice.mir
compiletest-rs/ui/cast/cast-rfc0401.mir
compiletest-rs/ui/const-generics/issue-70408.mir
compiletest-rs/ui/const-generics/generic_const_exprs/issue-100360.mir
compiletest-rs/ui/const-generics/issues/issue-87076.mir
compiletest-rs/ui/const-generics/min_const_generics/macro.mir
compiletest-rs/ui/consts/const-block-item-macro-codegen.mir
compiletest-rs/ui/consts/const-block-item.mir
compiletest-rs/ui/consts/const-block.mir
compiletest-rs/ui/consts/const-cast.mir
compiletest-rs/ui/consts/const-extern-function.mir
compiletest-rs/ui/consts/const-float-classify.mir
compiletest-rs/ui/consts/const-fn-val.mir
compiletest-rs/ui/consts/const-typeid-of-rpass.mir
compiletest-rs/ui/consts/const-vec-of-fns.mir
compiletest-rs/ui/consts/const_cmp_type_id.mir
compiletest-rs/ui/consts/ice-zst-static-access.mir
compiletest-rs/ui/consts/issue-104396.mir
compiletest-rs/ui/consts/issue-27890.mir
compiletest-rs/ui/consts/issue-58435-ice-with-assoc-const.mir
compiletest-rs/ui/consts/issue-73976-monomorphic.mir
compiletest-rs/ui/consts/unwind-abort.mir
compiletest-rs/ui/consts/const_constructor/const-construct-call.mir
compiletest-rs/ui/consts/const_in_pattern/issue-44333.mir
compiletest-rs/ui/deriving/issue-58319.mir
compiletest-rs/ui/destructuring-assignment/drop-order.mir
compiletest-rs/ui/drop/dynamic-drop.mir
compiletest-rs/ui/dyn-keyword/dyn-2015-no-warnings-without-lints.mir
compiletest-rs/ui/dyn-star/box.mir
compiletest-rs/ui/dyn-star/check-size-at-cast-polymorphic.mir
compiletest-rs/ui/dyn-star/const.mir
compiletest-rs/ui/dyn-star/dont-unsize-coerce-dyn-star.mir
compiletest-rs/ui/dyn-star/drop.mir
compiletest-rs/ui/dyn-star/dyn-star-to-dyn.mir
compiletest-rs/ui/dyn-star/issue-102430.mir
compiletest-rs/ui/dyn-star/make-dyn-star.mir
compiletest-rs/ui/dyn-star/method.mir
compiletest-rs/ui/dyn-star/return.mir
compiletest-rs/ui/dyn-star/syntax.mir
compiletest-rs/ui/errors/issue-89280-emitter-overflow-splice-lines.mir
compiletest-rs/ui/extern/issue-64655-allow-unwind-when-calling-panic-directly.mir
compiletest-rs/ui/extern/issue-64655-extern-rust-must-allow-unwind.mir
compiletest-rs/ui/fmt/format-args-capture.mir
compiletest-rs/ui/function-pointer/sized-ret-with-binder.mir
compiletest-rs/ui/functions-closures/closure-to-fn-coercion.mir
compiletest-rs/ui/generator/issue-53548-1.mir
compiletest-rs/ui/generic-associated-types/generic-associated-type-bounds.mir
compiletest-rs/ui/generic-associated-types/issue-80433-reduced.mir
compiletest-rs/ui/higher-rank-trait-bounds/issue-90177.mir
compiletest-rs/ui/hygiene/thread-local-not-in-prelude.mir
compiletest-rs/ui/impl-trait/closure-in-impl-trait-arg.mir
compiletest-rs/ui/impl-trait/closure-in-impl-trait.mir
compiletest-rs/ui/impl-trait/lifetimes.mir
compiletest-rs/ui/impl-trait/nesting.mir
compiletest-rs/ui/inference/type-infer-generalize-ty-var.mir
compiletest-rs/ui/iterators/issue-58952-filter-type-length.mir
compiletest-rs/ui/iterators/iter-map-fold-type-length.mir
compiletest-rs/ui/lifetimes/bare-trait-object-borrowck.mir
compiletest-rs/ui/lifetimes/bare-trait-object.mir
compiletest-rs/ui/macros/issue-95533.mir
compiletest-rs/ui/methods/method-trait-object-with-hrtb.mir
compiletest-rs/ui/mir/issue-29227.mir
compiletest-rs/ui/mir/issue-66930.mir
compiletest-rs/ui/mir/mir_coercions.mir
compiletest-rs/ui/mir/mir_raw_fat_ptr.mir
compiletest-rs/ui/mir/validate/needs-reveal-all.mir
compiletest-rs/ui/numbers-arithmetic/float-nan.mir
compiletest-rs/ui/numbers-arithmetic/u128-as-f32.mir
compiletest-rs/ui/pattern/usefulness/issue-88747.mir
compiletest-rs/ui/recursion/issue-86784.mir
compiletest-rs/ui/rfcs/rfc1623.mir
compiletest-rs/ui/rfcs/rfc-2151-raw-identifiers/basic.mir
compiletest-rs/ui/rfcs/rfc-2151-raw-identifiers/items.mir
compiletest-rs/ui/statics/static-function-pointer.mir
compiletest-rs/ui/traits/normalize-supertrait.mir
compiletest-rs/ui/traits/parameterized-with-bounds.mir
compiletest-rs/ui/traits/privacy.mir
compiletest-rs/ui/traits/alias/object.mir
compiletest-rs/ui/traits/associated_type_bound/check-trait-object-bounds-2-ok.mir
compiletest-rs/ui/union/union-transmute.mir
```

I tried to test the Derivable 2 using Docker, but I got this error:

```
(kmir-py3.10) user@d382aa3469fa:~/kmir$ kmir parse --definition-dir $(kbuild which llvm) src/tests/integration/test-data/handwritten-mir/execution/assert-true.mir
Directory does not exist: /home/user/.kbuild/mir-semantics/7afaf5d/target/v5.5.147/llvm
usage: kmir parse [-h] [--definition-dir DEFINITION_DIR] [--input {program,binary,json,kast,kore}] [--output {pretty,program,json,kore,kast,none}] input_file
kmir parse: error: argument --definition-dir: invalid dir_path value: 'src/tests/integration/test-data/handwritten-mir/execution/assert-true.mir'
```

I tried with a local installation using python 3.10.8 without Docker and got the same problem.

```  
(kmir-py3.10) user@localhost:~/Documents/kmir/mir-semantics/kmir$ kmir parse --definition-dir $(kbuild which llvm) src/tests/integration/test-data/handwritten-mir/execution/assert-true.mir
Directory does not exist: /home/user/.kbuild/mir-semantics/672f79c/target/v5.6.100/llvm
usage: kmir parse [-h] [--definition-dir DEFINITION_DIR] [--input {program,binary,json,kast,kore}] [--output {pretty,program,json,kore,kast,none}] input_file
kmir parse: error: argument --definition-dir: invalid dir_path value: 'src/tests/integration/test-data/handwritten-mir/execution/assert-true.mir'
```

Could you explain to me how do I get this Directory? I also tried using python 3.8.10 and 3.9 but got some errors for kmir commands. Is the python version in prerequisites correct? Because Docker also uses python 3.10.8

python 3.9
```
(kmir-py3.9) user@localhost:~/Documents/kmir/mir-semantics/kmir$ kmir --help
Traceback (most recent call last):
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.9/bin/kmir", line 3, in <module>
    from kmir.__main__ import main
  File "/home/user/Documents/kmir/mir-semantics/kmir/src/kmir/__init__.py", line 1, in <module>
    from .kmir import KMIR
  File "/home/user/Documents/kmir/mir-semantics/kmir/src/kmir/kmir.py", line 13, in <module>
    from pyk.ktool.kprint import KAstInput, KAstOutput, _kast, gen_glr_parser
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.9/lib/python3.9/site-packages/pyk/ktool/kprint.py", line 37, in <module>
    from ..konvert import kast_to_kore, kore_to_kast
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.9/lib/python3.9/site-packages/pyk/konvert.py", line 10, in <module>
    from .kore.prelude import BYTES as KORE_BYTES
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.9/lib/python3.9/site-packages/pyk/kore/prelude.py", line 215
    match data:
          ^
SyntaxError: invalid syntax
```

python 3.8
```
(kmir-py3.8) user@localhost:~/Documents/kmir/mir-semantics/kmir$ kmir --help
Traceback (most recent call last):
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.8/bin/kmir", line 3, in <module>
    from kmir.__main__ import main
  File "/home/user/Documents/kmir/mir-semantics/kmir/src/kmir/__init__.py", line 1, in <module>
    from .kmir import KMIR
  File "/home/user/Documents/kmir/mir-semantics/kmir/src/kmir/kmir.py", line 12, in <module>
    from pyk.kast.inner import KInner
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.8/lib/python3.8/site-packages/pyk/kast/__init__.py", line 1, in <module>
    from .inner import KInner
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.8/lib/python3.8/site-packages/pyk/kast/inner.py", line 11, in <module>
    from ..utils import EMPTY_FROZEN_DICT, FrozenDict, some
  File "/home/user/.cache/pypoetry/virtualenvs/kmir-h-L5_2TT-py3.8/lib/python3.8/site-packages/pyk/utils.py", line 33, in <module>
    class FrozenDict(Mapping[K, V]):
TypeError: 'ABCMeta' object is not subscriptable
```
