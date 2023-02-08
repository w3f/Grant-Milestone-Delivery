# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/project_aurras_mvp_phase_2.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>| https://github.com/HugoByte/aurras/blob/master/LICENSE | |
| 0b. | Documentation | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/openwhisk-client-rust#usage <br/> https://github.com/HugoByte/aurras/tree/next/workflow/composer#usage | |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/openwhisk-client-rust#test <br/> https://github.com/HugoByte/aurras/tree/next/workflow/composer#test | |
| 1a. | Workflow Composer: Rust OpenWhisk Client Library | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/openwhisk-client-rust | |
| 1b. | Workflow Composer: Composer | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/tree/next/workflow/composer | |
| 1c. | Workflow Composer: Pipe | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/workflow_macro/src/lib.rs#L85 | |
| 1d. | Workflow Composer: structured YAML file | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/examples/STRUCTURED_YAML.yaml | |
| 1e. | Workflow Composer: Concat Operator | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/providers/hooks/functions.py#L362 | |
| 1f. | Workflow Composer: Map Operator | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/providers/hooks/functions.py#L538 | |
| 2.  | Predefined boiler plate | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/tree/next/workflow/boilerplate | |
| 3a. | Flow Provider | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/providers/hooks/flow.py | |
| 3b. | Task Provider | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/providers/hooks/task.py | |
| 3c. | Workflow Provider | <ul><li>[ ] </li></ul>| https://github.com/HugoByte/aurras/blob/next/workflow/providers/hooks/workflow.py | |

## Evaluation V1

### Documentation

Please add a complete step-by-step guide to run the application and check the deliverables. This guide can include print screens or videos explaining how to run the system and use the features included.  For example, we need:
- Need some examples or explanations on how to run the application.
- In the configuration, the parameters of API_HOST, NAMESPACE, and AUTH_TOKEN need some explanation on how to set up these values.
- Need a better explanation on how to run the composer to perform the tests.
- After running the system, how to use each feature delivered and check the results if they are working?

### Testing

System tests and tests from composer were not performed due to the lack of complete explanation on how to run the application and tests.

I tried to run some tests with `cargo test` but they are failing. 

When used `cargo build` got this warning:

```
user@localhost:~/Documents/OpenWhisk/openwhisk-client-rust$ cargo build --release
   Compiling autocfg v1.1.0
   Compiling proc-macro2 v1.0.51
   Compiling quote v1.0.23
   Compiling unicode-ident v1.0.6
   ...
   Compiling hyper v0.14.24
   Compiling hyper-tls v0.5.0
   Compiling reqwest v0.11.14
   Compiling openwhisk-rust v0.1.5 (/home/user/Documents/OpenWhisk/openwhisk-client-rust)
warning: function `default_0` is never used
 --> src/api/trigger.rs:8:4
  |
8 | fn default_0() -> String {
  |    ^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: `openwhisk-rust` (lib) generated 1 warning
    Finished release [optimized] target(s) in 26.83s

```

Some unit tests are failing. When used `cargo test` got this:

```
user@localhost:~/Documents/OpenWhisk/openwhisk-client-rust$ cargo test
   Compiling proc-macro2 v1.0.51
   Compiling autocfg v1.1.0
   Compiling unicode-ident v1.0.6
   Compiling quote v1.0.23
   ...
   Compiling serde_urlencoded v0.7.1
   Compiling hyper-tls v0.5.0
   Compiling reqwest v0.11.14
   Compiling openwhisk-rust v0.1.5 (/home/user/Documents/OpenWhisk/openwhisk-client-rust)
warning: function `default_0` is never used
 --> src/api/trigger.rs:8:4
  |
8 | fn default_0() -> String {
  |    ^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: `openwhisk-rust` (lib) generated 1 warning
warning: unused imports: `Action`, `Trigger`
 --> tests/test_rules.rs:1:68
  |
1 | ...skProperties,NativeClient, Trigger, Action, Rule};
  |                               ^^^^^^^  ^^^^^^
  |
  = note: `#[warn(unused_imports)]` on by default

warning: unused import: `serde_json::json`
 --> tests/test_rules.rs:2:5
  |
2 | use serde_json::json;
  |     ^^^^^^^^^^^^^^^^

warning: `openwhisk-rust` (lib test) generated 1 warning (1 duplicate)
warning: `openwhisk-rust` (test "test_rules") generated 2 warnings (run `cargo fix --test "test_rules"` to apply 2 suggestions)
    Finished test [unoptimized + debuginfo] target(s) in 24.01s
     Running unittests src/lib.rs (target/debug/deps/openwhisk_rust-ac4b90b20b37a342)

running 0 tests

test result: ok. 0 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

     Running tests/test_actions.rs (target/debug/deps/test_actions-cd1cc0ff731aaeeb)

running 4 tests
test test_create_action ... FAILED
test test_delete_action_native_client has been running for over 60 seconds
test test_get_action_property_native_client has been running for over 60 seconds
test test_list_actions_native_client has been running for over 60 seconds
test test_list_actions_native_client ... FAILED
test test_get_action_property_native_client ... FAILED
test test_delete_action_native_client ... FAILED

failures:

---- test_create_action stdout ----
thread 'test_create_action' panicked at 'File not found: Os { code: 2, kind: NotFound, message: "No such file or directory" }', tests/test_actions.rs:68:69
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace

---- test_list_actions_native_client stdout ----
thread 'test_list_actions_native_client' panicked at 'called `Result::unwrap()` on an `Err` value: "Failed to fetch the list of actions error sending request for url (https://65.20.70.146:31001/api/v1/namespaces/guest/actions): error trying to connect: tcp connect error: Connection timed out (os error 110)"', tests/test_actions.rs:15:64

---- test_get_action_property_native_client stdout ----
thread 'test_get_action_property_native_client' panicked at 'called `Result::unwrap()` on an `Err` value: "Failed to get action properties error sending request for url (https://65.20.70.146:31001/api/v1/namespaces/guest/actions/cars?code=false): error trying to connect: tcp connect error: Connection timed out (os error 110)"', tests/test_actions.rs:32:76

---- test_delete_action_native_client stdout ----
thread 'test_delete_action_native_client' panicked at 'called `Result::unwrap()` on an `Err` value: "Failed to get action properties error sending request for url (https://65.20.70.146:31001/api/v1/namespaces/guest/actions/cars?code=false): error trying to connect: tcp connect error: Connection timed out (os error 110)"', tests/test_actions.rs:49:37


failures:
    test_create_action
    test_delete_action_native_client
    test_get_action_property_native_client
    test_list_actions_native_client

test result: FAILED. 0 passed; 4 failed; 0 ignored; 0 measured; 0 filtered out; finished in 130.64s

error: test failed, to rerun pass `--test test_actions`

```



### Code Quality

The Static analysis (cargo clippy) returned some warning.

```
warning: function `default_0` is never used
 --> src/api/trigger.rs:8:4
  |
8 | fn default_0() -> String {
  |    ^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` on by default

warning: unneeded `return` statement
   --> src/api/action.rs:125:35
    |
125 | ...=> return Err(format!("Failed to deserailize actions {}", error)),
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return
    = note: `#[warn(clippy::needless_return)]` on by default
    = help: remove `return`

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:125:46
    |
125 | ...turn Err(format!("Failed to deserailize actions {}", error)),
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
    = note: `#[warn(clippy::uninlined_format_args)]` on by default
help: change this to
    |
125 -                     Err(error) => return Err(format!("Failed to deserailize actions {}", error)),
125 +                     Err(error) => return Err(format!("Failed to deserailize actions {error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:129:31
    |
129 | ...> Err(format!("Failed to fetch the list of actions {}", error)),
    |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
129 -             Err(error) => Err(format!("Failed to fetch the list of actions {}", error)),
129 +             Err(error) => Err(format!("Failed to fetch the list of actions {error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:169:35
    |
169 | ...) => Err(format!("Failed to deserailize actions {}", error)),
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
169 -                 Err(error) => Err(format!("Failed to deserailize actions {}", error)),
169 +                 Err(error) => Err(format!("Failed to deserailize actions {error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:171:31
    |
171 | ... => Err(format!("Failed to get action properties {}", error)),
    |            ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
171 -             Err(error) => Err(format!("Failed to get action properties {}", error)),
171 +             Err(error) => Err(format!("Failed to get action properties {error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:208:33
    |
208 | ...r) => Err(format!("Failed to deserailize actions {}", err)),
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
208 -                 Err(err) => Err(format!("Failed to deserailize actions {}", err)),
208 +                 Err(err) => Err(format!("Failed to deserailize actions {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:210:27
    |
210 | ...   Err(x) => Err(format!("Failed to get action properties {}", x)),
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
210 -             Err(x) => Err(format!("Failed to get action properties {}", x)),
210 +             Err(x) => Err(format!("Failed to get action properties {x}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:251:33
    |
251 | ...r) => Err(format!("Failed to deserailize actions {}", err)),
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
251 -                 Err(err) => Err(format!("Failed to deserailize actions {}", err)),
251 +                 Err(err) => Err(format!("Failed to deserailize actions {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:253:27
    |
253 | ...   Err(x) => Err(format!("Failed to get action properties {}", x)),
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
253 -             Err(x) => Err(format!("Failed to get action properties {}", x)),
253 +             Err(x) => Err(format!("Failed to get action properties {x}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:300:33
    |
300 | ...r) => Err(format!("Failed to deserailize actions {}", err)),
    |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
300 -                 Err(err) => Err(format!("Failed to deserailize actions {}", err)),
300 +                 Err(err) => Err(format!("Failed to deserailize actions {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/action.rs:302:27
    |
302 |             Err(x) => Err(format!("Failed to invoke action {}", x)),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
302 -             Err(x) => Err(format!("Failed to invoke action {}", x)),
302 +             Err(x) => Err(format!("Failed to invoke action {x}")),
    |

warning: variables can be used directly in the `format!` string
  --> src/api/namespace.rs:40:33
   |
40 |                 Err(err) => Err(format!("Failed to deserailize {}", err)),
   |                                 ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
40 -                 Err(err) => Err(format!("Failed to deserailize {}", err)),
40 +                 Err(err) => Err(format!("Failed to deserailize {err}")),
   |

warning: variables can be used directly in the `format!` string
  --> src/api/namespace.rs:42:27
   |
42 |               Err(x) => Err(format!(
   |  ___________________________^
43 | |                 "Failed to fetch the list of available namespaces {}",
44 | |                 x
45 | |             )),
   | |_____________^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:120:33
    |
120 | ...   Err(err) => Err(format!("Failed to deserailize Rules {}", err)),
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
120 -                 Err(err) => Err(format!("Failed to deserailize Rules {}", err)),
120 +                 Err(err) => Err(format!("Failed to deserailize Rules {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:122:27
    |
122 | ...) => Err(format!("Failed to fetch the list of Rules {}", x)),
    |             ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
122 -             Err(x) => Err(format!("Failed to fetch the list of Rules {}", x)),
122 +             Err(x) => Err(format!("Failed to fetch the list of Rules {x}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:149:38
    |
149 | ... return Err(format!("Failed deserailize body {}", error)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
149 -             Err(error) => return Err(format!("Failed deserailize body {}", error)),
149 +             Err(error) => return Err(format!("Failed deserailize body {error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:165:33
    |
165 | ...   Err(err) => Err(format!("Failed to deserailize rule {}", err)),
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
165 -                 Err(err) => Err(format!("Failed to deserailize rule {}", err)),
165 +                 Err(err) => Err(format!("Failed to deserailize rule {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:167:27
    |
167 |             Err(x) => Err(format!("Failed to create rule {}", x)),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
167 -             Err(x) => Err(format!("Failed to create rule {}", x)),
167 +             Err(x) => Err(format!("Failed to create rule {x}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:203:33
    |
203 | ...   Err(err) => Err(format!("Failed to deserailize rule {}", err)),
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
203 -                 Err(err) => Err(format!("Failed to deserailize rule {}", err)),
203 +                 Err(err) => Err(format!("Failed to deserailize rule {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:205:27
    |
205 |             Err(x) => Err(format!("Failed to get rule properties{}", x)),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
205 -             Err(x) => Err(format!("Failed to get rule properties{}", x)),
205 +             Err(x) => Err(format!("Failed to get rule properties{x}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:241:33
    |
241 | ...   Err(err) => Err(format!("Failed to deserailize rule {}", err)),
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
241 -                 Err(err) => Err(format!("Failed to deserailize rule {}", err)),
241 +                 Err(err) => Err(format!("Failed to deserailize rule {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:243:27
    |
243 |             Err(x) => Err(format!("Failed to get rule properties{}", x)),
    |                           ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
243 -             Err(x) => Err(format!("Failed to get rule properties{}", x)),
243 +             Err(x) => Err(format!("Failed to get rule properties{x}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:276:42
    |
276 | ... return Err(format!("Failed deserailize body {}", error)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
276 -                 Err(error) => return Err(format!("Failed deserailize body {}", error)),
276 +                 Err(error) => return Err(format!("Failed deserailize body {error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:292:37
    |
292 | ...   Err(err) => Err(format!("Failed to deserailize rule {}", err)),
    |                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
292 -                     Err(err) => Err(format!("Failed to deserailize rule {}", err)),
292 +                     Err(err) => Err(format!("Failed to deserailize rule {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/rule.rs:294:31
    |
294 | ...   Err(x) => Err(format!("Failed to SetState for Rule {}", x)),
    |                     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
294 -                 Err(x) => Err(format!("Failed to SetState for Rule {}", x)),
294 +                 Err(x) => Err(format!("Failed to SetState for Rule {x}")),
    |

warning: variables can be used directly in the `format!` string
  --> src/api/trigger.rs:95:35
   |
95 | ...r) => Err(format!("Failed deserailize triggers {}", error)),
   |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
95 -                 Err(error) => Err(format!("Failed deserailize triggers {}", error)),
95 +                 Err(error) => Err(format!("Failed deserailize triggers {error}")),
   |

warning: variables can be used directly in the `format!` string
  --> src/api/trigger.rs:98:31
   |
98 | ...> Err(format!("Failed to fetch the list of triggers {}", error)),
   |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
98 -             Err(error) => Err(format!("Failed to fetch the list of triggers {}", error)),
98 +             Err(error) => Err(format!("Failed to fetch the list of triggers {error}")),
   |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:125:36
    |
125 | ... return Err(format!("failed to serialize body {}", err)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
125 -             Err(err) => return Err(format!("failed to serialize body {}", err)),
125 +             Err(err) => return Err(format!("failed to serialize body {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:135:36
    |
135 | ... return Err(format!("failed to create request {}", err)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
135 -             Err(err) => return Err(format!("failed to create request {}", err)),
135 +             Err(err) => return Err(format!("failed to create request {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:141:40
    |
141 | ...=> return Err(format!("falied to deserilaize {}", err)),
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
141 -                 Err(err) => return Err(format!("falied to deserilaize {}", err)),
141 +                 Err(err) => return Err(format!("falied to deserilaize {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:143:36
    |
143 | ... return Err(format!("falied to insert trigger {}", err)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
143 -             Err(err) => return Err(format!("falied to insert trigger {}", err)),
143 +             Err(err) => return Err(format!("falied to insert trigger {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:181:40
    |
181 | ...=> return Err(format!("falied to deserilaize {}", err)),
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
181 -                 Err(err) => return Err(format!("falied to deserilaize {}", err)),
181 +                 Err(err) => return Err(format!("falied to deserilaize {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:183:36
    |
183 | ... return Err(format!("falied to insert trigger {}", err)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
183 -             Err(err) => return Err(format!("falied to insert trigger {}", err)),
183 +             Err(err) => return Err(format!("falied to insert trigger {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:219:40
    |
219 | ...=> return Err(format!("falied to deserilaize {}", err)),
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
219 -                 Err(err) => return Err(format!("falied to deserilaize {}", err)),
219 +                 Err(err) => return Err(format!("falied to deserilaize {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:221:36
    |
221 | ... return Err(format!("falied to insert trigger {}", err)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
221 -             Err(err) => return Err(format!("falied to insert trigger {}", err)),
221 +             Err(err) => return Err(format!("falied to insert trigger {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:260:40
    |
260 | ...=> return Err(format!("falied to deserilaize {}", err)),
    |                  ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
260 -                 Err(err) => return Err(format!("falied to deserilaize {}", err)),
260 +                 Err(err) => return Err(format!("falied to deserilaize {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/api/trigger.rs:262:36
    |
262 | ... return Err(format!("falied to insert trigger {}", err)),
    |                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
262 -             Err(err) => return Err(format!("falied to insert trigger {}", err)),
262 +             Err(err) => return Err(format!("falied to insert trigger {err}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/client/common.rs:203:5
    |
203 |     format!(": Error -> [ Status :{}, Message : {} ]", code, message)
    |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
203 -     format!(": Error -> [ Status :{}, Message : {} ]", code, message)
203 +     format!(": Error -> [ Status :{code}, Message : {message} ]")
    |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:49:51
   |
49 | ...   let bse64_encode = base64::encode(format!("{}:{}", user, pass));
   |                                         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
49 -                 let bse64_encode = base64::encode(format!("{}:{}", user, pass));
49 +                 let bse64_encode = base64::encode(format!("{user}:{pass}"));
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:55:58
   |
55 | ...   .header("Authorization", format!("Basic {}", bse64_encode))
   |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
55 -                                 .header("Authorization", format!("Basic {}", bse64_encode))
55 +                                 .header("Authorization", format!("Basic {bse64_encode}"))
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:61:51
   |
61 | ...                   Err(error) => Err(format!("{}", error)),
   |                                         ^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
61 -                                 Err(error) => Err(format!("{}", error)),
61 +                                 Err(error) => Err(format!("{error}")),
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:66:58
   |
66 | ...   .header("Authorization", format!("Basic {}", bse64_encode))
   |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
66 -                                 .header("Authorization", format!("Basic {}", bse64_encode))
66 +                                 .header("Authorization", format!("Basic {bse64_encode}"))
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:72:51
   |
72 | ...                   Err(error) => Err(format!("{}", error)),
   |                                         ^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
72 -                                 Err(error) => Err(format!("{}", error)),
72 +                                 Err(error) => Err(format!("{error}")),
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:77:58
   |
77 | ...   .header("Authorization", format!("Basic {}", bse64_encode))
   |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
77 -                                 .header("Authorization", format!("Basic {}", bse64_encode))
77 +                                 .header("Authorization", format!("Basic {bse64_encode}"))
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:83:51
   |
83 | ...                   Err(error) => Err(format!("{}", error)),
   |                                         ^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
83 -                                 Err(error) => Err(format!("{}", error)),
83 +                                 Err(error) => Err(format!("{error}")),
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:88:58
   |
88 | ...   .header("Authorization", format!("Basic {}", bse64_encode))
   |                                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
88 -                                 .header("Authorization", format!("Basic {}", bse64_encode))
88 +                                 .header("Authorization", format!("Basic {bse64_encode}"))
   |

warning: variables can be used directly in the `format!` string
  --> src/client/wasmtime_client.rs:94:51
   |
94 | ...                   Err(error) => Err(format!("{}", error)),
   |                                         ^^^^^^^^^^^^^^^^^^^^
   |
   = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
   |
94 -                                 Err(error) => Err(format!("{}", error)),
94 +                                 Err(error) => Err(format!("{error}")),
   |

warning: variables can be used directly in the `format!` string
   --> src/client/wasmtime_client.rs:107:47
    |
107 | ...                   Err(error) => Err(format!("{}", error)),
    |                                         ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
107 -                             Err(error) => Err(format!("{}", error)),
107 +                             Err(error) => Err(format!("{error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/client/wasmtime_client.rs:114:47
    |
114 | ...                   Err(error) => Err(format!("{}", error)),
    |                                         ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
114 -                             Err(error) => Err(format!("{}", error)),
114 +                             Err(error) => Err(format!("{error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/client/wasmtime_client.rs:121:47
    |
121 | ...                   Err(error) => Err(format!("{}", error)),
    |                                         ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
121 -                             Err(error) => Err(format!("{}", error)),
121 +                             Err(error) => Err(format!("{error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/client/wasmtime_client.rs:128:47
    |
128 | ...                   Err(error) => Err(format!("{}", error)),
    |                                         ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
128 -                             Err(error) => Err(format!("{}", error)),
128 +                             Err(error) => Err(format!("{error}")),
    |

warning: unneeded `return` statement
   --> src/client/wasmtime_client.rs:152:35
    |
152 |                     Err(error) => return Err(format!("{}", error)),
    |                                   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#needless_return
    = help: remove `return`

warning: variables can be used directly in the `format!` string
   --> src/client/wasmtime_client.rs:152:46
    |
152 |                     Err(error) => return Err(format!("{}", error)),
    |                                              ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
152 -                     Err(error) => return Err(format!("{}", error)),
152 +                     Err(error) => return Err(format!("{error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/client/wasmtime_client.rs:159:50
    |
159 |                         Err(error) => return Err(format!("{}", error)),
    |                                                  ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
159 -                         Err(error) => return Err(format!("{}", error)),
159 +                         Err(error) => return Err(format!("{error}")),
    |

warning: variables can be used directly in the `format!` string
   --> src/client/native_client.rs:114:31
    |
114 |             Err(error) => Err(format!("{}", error)),
    |                               ^^^^^^^^^^^^^^^^^^^^
    |
    = help: for further information visit https://rust-lang.github.io/rust-clippy/master/index.html#uninlined_format_args
help: change this to
    |
114 -             Err(error) => Err(format!("{}", error)),
114 +             Err(error) => Err(format!("{error}")),
    |

warning: `openwhisk-rust` (lib) generated 56 warnings (run `cargo clippy --fix --lib -p openwhisk-rust` to apply 55 suggestions)
    Finished dev [unoptimized + debuginfo] target(s) in 34.80s
```
