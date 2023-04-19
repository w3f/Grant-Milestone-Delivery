# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/GenesisDAO.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | Licence |<ul><li>[x] </li></ul>| n/a |  | 
| 0b. | Documentation |<ul><li>[ ] </li></ul>| n/a | Not fully evaluated yet | 
| 0c. | Testing and Testing Guide |<ul><li>[ ] </li></ul>| https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md | There is no testing guide for the frontend  |
| 0d. | Docker |<ul><li>[ ] </li></ul>| [node Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/Dockerfile), [frontend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/Dockerfile), [backend Dockerfile](https://github.com/deep-ink-ventures/genesis-dao-service/blob/main/Dockerfile) | Some failures running docker. |
| 1. | Substrate module: pallet_dao_asset |<ul><li>[ ] </li></ul>| [pallet](https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-assets) with [checkpoint functionality](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/pallets/dao-assets/src/functions.rs#L56-L130) | Not fully evaluated yet |
| 2. | Substrate module: pallet_dao_vote	|<ul><li>[ ] </li></ul>| https://github.com/deep-ink-ventures/genesis-dao-node/tree/main/pallets/dao-votes | Not fully evaluated yet | 
| 3. | Frontend Implementation	 |<ul><li>[ ] </li></ul>| https://genesis-dao.org | Not fully evaluated yet |
| 4. | Design and Product Flow |<ul><li>[ ] </li></ul>| https://github.com/deep-ink-ventures/genesis-dao-frontend/blob/main/design/Proposal.pdf | Not fully evaluated yet |

## Evaluation V2

### Docker

I still have the same problems with Docker for the node and service. This time, the `listener` service started but still have errors with `worker` one. I tried to visit `http://127.0.0.1:8000/redoc/` and got a blank page.

```
worker	| Operations to perform:
worker	|   Apply all migrations: admin, auth, contenttypes, core, sessions
worker	| Running migrations:
worker	|   No migrations to apply.
listener  | Syncing initial accounts...
worker	| Traceback (most recent call last):
worker	|   File "/usr/src/app/manage.py", line 22, in <module>
worker	| 	main()
worker	|   File "/usr/src/app/manage.py", line 18, in main
worker	| 	execute_from_command_line(sys.argv)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/__init__.py", line 446, in execute_from_command_line
worker	| 	utility.execute()
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/__init__.py", line 440, in execute
worker	| 	self.fetch_command(subcommand).run_from_argv(self.argv)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/base.py", line 402, in run_from_argv
worker	| 	self.execute(*args, **cmd_options)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/base.py", line 448, in execute
worker	| 	output = self.handle(*args, **options)
worker	|          	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
worker	|   File "/venv/lib/python3.11/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 209, in handle
worker	| 	collected = self.collect()
worker	|             	^^^^^^^^^^^^^^
worker	|   File "/venv/lib/python3.11/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 135, in collect
worker	| 	handler(path, prefixed_path, storage)
worker	|   File "/venv/lib/python3.11/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 378, in copy_file
worker	| 	self.storage.save(prefixed_path, source_file)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/files/storage.py", line 56, in save
worker	| 	name = self._save(name, content)
worker	|        	^^^^^^^^^^^^^^^^^^^^^^^^^
worker	|   File "/venv/lib/python3.11/site-packages/django/core/files/storage.py", line 295, in _save
worker	| 	os.makedirs(directory, exist_ok=True)
worker	|   File "<frozen os>", line 215, in makedirs
worker	|   File "<frozen os>", line 215, in makedirs
worker	|   File "<frozen os>", line 225, in makedirs
worker	| PermissionError: [Errno 13] Permission denied: '/usr/src/app/static'
worker exited with code 1
listener  | Catching up | number: 0
listener  | Catching up | number: 1
listener  | Catching up | number: 2
listener  | Catching up | number: 3
```

### Service

I tried without Docker, and this time I received this error when I ran `make start-dev`:

```
(venv) user@localhost:~/Documents/genesisdao/genesis-dao-service$ make start-dev
Traceback (most recent call last):
  File "/home/user/Documents/genesisdao/genesis-dao-service/manage.py", line 22, in <module>
    main()
  File "/home/user/Documents/genesisdao/genesis-dao-service/manage.py", line 18, in main
    execute_from_command_line(sys.argv)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/__init__.py", line 446, in execute_from_command_line
    utility.execute()
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/__init__.py", line 440, in execute
    self.fetch_command(subcommand).run_from_argv(self.argv)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/base.py", line 402, in run_from_argv
    self.execute(*args, **cmd_options)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/base.py", line 448, in execute
    output = self.handle(*args, **options)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/base.py", line 96, in wrapped
    res = handle_func(*args, **kwargs)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/commands/migrate.py", line 97, in handle
    self.check(databases=[database])
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/management/base.py", line 475, in check
    all_issues = checks.run_checks(
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/checks/registry.py", line 88, in run_checks
    new_errors = check(app_configs=app_configs, databases=databases)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/checks/urls.py", line 14, in check_url_config
    return check_resolver(resolver)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/checks/urls.py", line 24, in check_resolver
    return check_method()
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/urls/resolvers.py", line 494, in check
    for pattern in self.url_patterns:
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/utils/functional.py", line 57, in __get__
    res = instance.__dict__[self.name] = self.func(instance)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/urls/resolvers.py", line 715, in url_patterns
    patterns = getattr(self.urlconf_module, "urlpatterns", self.urlconf_module)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/utils/functional.py", line 57, in __get__
    res = instance.__dict__[self.name] = self.func(instance)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/urls/resolvers.py", line 708, in urlconf_module
    return import_module(self.urlconf_name)
  File "/usr/lib/python3.9/importlib/__init__.py", line 127, in import_module
    return _bootstrap._gcd_import(name[level:], package, level)
  File "<frozen importlib._bootstrap>", line 1030, in _gcd_import
  File "<frozen importlib._bootstrap>", line 1007, in _find_and_load
  File "<frozen importlib._bootstrap>", line 986, in _find_and_load_unlocked
  File "<frozen importlib._bootstrap>", line 680, in _load_unlocked
  File "<frozen importlib._bootstrap_external>", line 790, in exec_module
  File "<frozen importlib._bootstrap>", line 228, in _call_with_frames_removed
  File "/home/user/Documents/genesisdao/genesis-dao-service/service/urls.py", line 22, in <module>
    from core import urls as core_urls
  File "/home/user/Documents/genesisdao/genesis-dao-service/core/urls.py", line 4, in <module>
    from core import views
  File "/home/user/Documents/genesisdao/genesis-dao-service/core/views.py", line 15, in <module>
    from core import models, serializers
  File "/home/user/Documents/genesisdao/genesis-dao-service/core/serializers.py", line 143
    match vote.in_favor:
          ^
SyntaxError: invalid syntax
make: *** [Makefile:17: run-migration] Error 1
```

### Frontend

I was able to test the front end using the external node and service. The functions are working fine, I was able to create a DAO, Edit its metadata, and transfer some tokens. But I noticed the page with Review Details is missing. After the creation, the message "Congratulations!" was presented, and another message as well "Sorry, you are not the admin of [Dao Name]". This this last one I think should't be presented. 

## Evaluation V1


### License

The License in the genesis-dao-service repository is missing.

### Documentation

The readme in the root of the repositories needs instructions on how to run the system using docker. 

Please provide a `.env.example` and a testing guide with examples and expected results for the frontend.

### Docker

The docker is working for the frontend but has some problems with the node and service.

Node Logs:
```
genesis-dao  | error: failed to run custom build command for `local-runtime v4.0.0-dev (/var/www/genesis-dao/runtime/local)`
genesis-dao  |
genesis-dao  | Caused by:
genesis-dao  |   process didn't exit successfully: `/var/www/genesis-dao/target/release/build/local-runtime-220d662ede7528cd/build-script-build` (exit status: 1)
genesis-dao  |   --- stderr
genesis-dao  |   Rust WASM toolchain not installed, please install it!
genesis-dao  |
genesis-dao  |   Further error information:
genesis-dao  |   ------------------------------------------------------------
genesis-dao  |  	Compiling wasm-test v1.0.0 (/tmp/.tmpCoNSpM)
genesis-dao  |   error[E0463]: can't find crate for `std`
genesis-dao  | 	|
genesis-dao  | 	= note: the `wasm32-unknown-unknown` target may not be installed
genesis-dao  | 	= help: consider downloading the target with `rustup target add wasm32-unknown-unknown`
genesis-dao  | 	= help: consider building the standard library from source with `cargo build -Zbuild-std`
genesis-dao  |
genesis-dao  |   error: cannot find macro `println` in this scope
genesis-dao  |	--> src/main.rs:3:5
genesis-dao  | 	|
genesis-dao  |   3 |             	println!("{}", env!("RUSTC_VERSION"));
genesis-dao  | 	|             	^^^^^^^
genesis-dao  |
genesis-dao  |   error: requires `sized` lang_item
genesis-dao  |
genesis-dao  |   For more information about this error, try `rustc --explain E0463`.
genesis-dao  |   error: could not compile `wasm-test` due to 3 previous errors
genesis-dao  |   ------------------------------------------------------------
genesis-dao  |
genesis-dao  | warning: build failed, waiting for other jobs to finish...
genesis-dao exited with code 101
```

Service Logs:
```
user@localhost:~/Documents/genesisdao/genesis-dao-service$ docker compose up
[+] Running 4/0
 ✔ Container redis 	Created                                                                                                                                                                            	0.0s
 ✔ Container postgres  Created                                                                                                                                                                            	0.0s
 ✔ Container worker	Created                                                                                                                                                                            	0.0s
 ✔ Container app   	Created                                                                                                                                                                            	0.0s
Attaching to app, postgres, redis, worker
redis 	| 1:C 14 Apr 2023 14:25:52.926 # oO0OoO0OoO0Oo Redis is starting oO0OoO0OoO0Oo
redis 	| 1:C 14 Apr 2023 14:25:52.926 # Redis version=5.0.14, bits=64, commit=00000000, modified=0, pid=1, just started
redis 	| 1:C 14 Apr 2023 14:25:52.926 # Configuration loaded
redis 	| 1:M 14 Apr 2023 14:25:52.927 * Running mode=standalone, port=6379.
redis 	| 1:M 14 Apr 2023 14:25:52.927 # Server initialized
redis 	| 1:M 14 Apr 2023 14:25:52.927 # WARNING overcommit_memory is set to 0! Background save may fail under low memory condition. To fix this issue add 'vm.overcommit_memory = 1' to /etc/sysctl.conf and then reboot or run the command 'sysctl vm.overcommit_memory=1' for this to take effect.
redis 	| 1:M 14 Apr 2023 14:25:52.928 # WARNING you have Transparent Huge Pages (THP) support enabled in your kernel. This will create latency and memory usage issues with Redis. To fix this issue run the command 'echo never > /sys/kernel/mm/transparent_hugepage/enabled' as root, and add it to your /etc/rc.local in order to retain the setting after a reboot. Redis must be restarted after THP is disabled.
redis 	| 1:M 14 Apr 2023 14:25:52.928 * Ready to accept connections
postgres  |
postgres  | PostgreSQL Database directory appears to contain a database; Skipping initialization
postgres  |
postgres  | 2023-04-14 14:25:52.957 UTC [1] LOG:  starting PostgreSQL 14.1 on x86_64-pc-linux-musl, compiled by gcc (Alpine 10.3.1_git20211027) 10.3.1 20211027, 64-bit
postgres  | 2023-04-14 14:25:52.957 UTC [1] LOG:  listening on IPv4 address "0.0.0.0", port 5432
postgres  | 2023-04-14 14:25:52.957 UTC [1] LOG:  listening on IPv6 address "::", port 5432
postgres  | 2023-04-14 14:25:52.960 UTC [1] LOG:  listening on Unix socket "/var/run/postgresql/.s.PGSQL.5432"
postgres  | 2023-04-14 14:25:52.964 UTC [21] LOG:  database system was interrupted; last known up at 2023-04-14 13:58:29 UTC
postgres  | 2023-04-14 14:25:53.080 UTC [21] LOG:  database system was not properly shut down; automatic recovery in progress
postgres  | 2023-04-14 14:25:53.081 UTC [21] LOG:  redo starts at 0/16FB250
postgres  | 2023-04-14 14:25:53.085 UTC [21] LOG:  invalid record length at 0/17A6248: wanted 24, got 0
postgres  | 2023-04-14 14:25:53.085 UTC [21] LOG:  redo done at 0/17A6220 system usage: CPU: user: 0.00 s, system: 0.00 s, elapsed: 0.00 s
postgres  | 2023-04-14 14:25:53.120 UTC [1] LOG:  database system is ready to accept connections
app   	| 2023-04-14 14:25:54,796 INFO 	Starting server at tcp:port=8000:interface=0.0.0.0
app   	| 2023-04-14 14:25:54,797 INFO 	HTTP/2 support not enabled (install the http2 and tls Twisted extras)
app   	| 2023-04-14 14:25:54,797 INFO 	Configuring endpoint tcp:port=8000:interface=0.0.0.0
app   	| 2023-04-14 14:25:54,797 INFO 	Listening on TCP address 0.0.0.0:8000
worker	| Operations to perform:
worker	|   Apply all migrations: admin, auth, contenttypes, core, sessions
worker	| Running migrations:
worker	|   No migrations to apply.
worker	| Traceback (most recent call last):
worker	|   File "/usr/src/app/manage.py", line 22, in <module>
worker	| 	main()
worker	|   File "/usr/src/app/manage.py", line 18, in main
worker	| 	execute_from_command_line(sys.argv)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/__init__.py", line 446, in execute_from_command_line
worker	| 	utility.execute()
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/__init__.py", line 440, in execute
worker	| 	self.fetch_command(subcommand).run_from_argv(self.argv)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/base.py", line 402, in run_from_argv
worker	| 	self.execute(*args, **cmd_options)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/management/base.py", line 448, in execute
worker	| 	output = self.handle(*args, **options)
worker	|          	^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
worker	|   File "/venv/lib/python3.11/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 209, in handle
worker	| 	collected = self.collect()
worker	|             	^^^^^^^^^^^^^^
worker	|   File "/venv/lib/python3.11/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 135, in collect
worker	| 	handler(path, prefixed_path, storage)
worker	|   File "/venv/lib/python3.11/site-packages/django/contrib/staticfiles/management/commands/collectstatic.py", line 378, in copy_file
worker	| 	self.storage.save(prefixed_path, source_file)
worker	|   File "/venv/lib/python3.11/site-packages/django/core/files/storage.py", line 56, in save
worker	| 	name = self._save(name, content)
worker	|        	^^^^^^^^^^^^^^^^^^^^^^^^^
worker	|   File "/venv/lib/python3.11/site-packages/django/core/files/storage.py", line 295, in _save
worker	| 	os.makedirs(directory, exist_ok=True)
worker	|   File "<frozen os>", line 215, in makedirs
worker	|   File "<frozen os>", line 215, in makedirs
worker	|   File "<frozen os>", line 225, in makedirs
worker	| PermissionError: [Errno 13] Permission denied: '/usr/src/app/static'
worker exited with code 1
```

### Automate Testing

The Unit tests and the integration tests passed, some with good coverage and other could be improved. 

Dao-Core
```
test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.80s
Apr 14 08:18:37.661  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/dao-assets/src/benchmarking.rs: 0/32
|| pallets/dao-assets/src/functions.rs: 114/352
|| pallets/dao-assets/src/impl_fungibles.rs: 10/61
|| pallets/dao-assets/src/lib.rs: 17/102
|| pallets/dao-assets/src/types.rs: 0/2
|| pallets/dao-assets/src/weights.rs: 7/226
|| pallets/dao-core/src/benchmarking.rs: 0/14
|| pallets/dao-core/src/functions.rs: 4/6
|| pallets/dao-core/src/lib.rs: 82/96
|| pallets/dao-core/src/weights.rs: 0/32
|| pallets/dao-votes/src/benchmarking.rs: 0/48
|| pallets/dao-votes/src/lib.rs: 0/128
|| pallets/dao-votes/src/weights.rs: 0/20
||
20.78% coverage, 234/1126 lines covered
```

Dao-Assets
```
test result: ok. 29 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.30s
Apr 14 08:22:21.111  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/dao-assets/src/benchmarking.rs: 0/32
|| pallets/dao-assets/src/functions.rs: 312/358
|| pallets/dao-assets/src/impl_fungibles.rs: 18/63
|| pallets/dao-assets/src/lib.rs: 76/102
|| pallets/dao-assets/src/types.rs: 2/2
|| pallets/dao-assets/src/weights.rs: 14/226
|| pallets/dao-core/src/benchmarking.rs: 0/14
|| pallets/dao-core/src/functions.rs: 0/6
|| pallets/dao-core/src/lib.rs: 0/88
|| pallets/dao-core/src/weights.rs: 0/16
|| pallets/dao-votes/src/benchmarking.rs: 0/48
|| pallets/dao-votes/src/lib.rs: 0/128
|| pallets/dao-votes/src/weights.rs: 0/20
||
38.02% coverage, 422/1110 lines covered
```

Dao-Vote
```
test result: ok. 7 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.10s
Apr 14 08:25:51.107  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/dao-assets/src/benchmarking.rs: 0/32
|| pallets/dao-assets/src/functions.rs: 160/355
|| pallets/dao-assets/src/impl_fungibles.rs: 4/61
|| pallets/dao-assets/src/lib.rs: 11/102
|| pallets/dao-assets/src/types.rs: 2/2
|| pallets/dao-assets/src/weights.rs: 0/226
|| pallets/dao-core/src/benchmarking.rs: 0/14
|| pallets/dao-core/src/functions.rs: 3/6
|| pallets/dao-core/src/lib.rs: 44/96
|| pallets/dao-core/src/weights.rs: 0/32
|| pallets/dao-votes/src/benchmarking.rs: 0/48
|| pallets/dao-votes/src/lib.rs: 107/137
|| pallets/dao-votes/src/weights.rs: 0/40
||
28.58% coverage, 331/1158 lines covered
```

Integration Test
```
test result: ok. 1 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 230.26s
Apr 14 08:41:06.845  INFO cargo_tarpaulin::report: Coverage Results:
|| Tested/Total Lines:
|| integration-wrapper/src/lib.rs: 86/86
|| node/src/chain_spec.rs: 0/2
|| node/src/rpc.rs: 0/5
|| pallets/dao-assets/src/benchmarking.rs: 0/32
|| pallets/dao-assets/src/functions.rs: 0/331
|| pallets/dao-assets/src/impl_fungibles.rs: 0/59
|| pallets/dao-assets/src/lib.rs: 0/86
|| pallets/dao-assets/src/weights.rs: 0/113
|| pallets/dao-core/src/benchmarking.rs: 0/14
|| pallets/dao-core/src/functions.rs: 0/6
|| pallets/dao-core/src/lib.rs: 0/88
|| pallets/dao-core/src/weights.rs: 0/16
|| pallets/dao-votes/src/benchmarking.rs: 0/48
|| pallets/dao-votes/src/lib.rs: 0/128
|| pallets/dao-votes/src/weights.rs: 0/20
||
8.32% coverage, 86/1034 lines covered
```

I ran `yarn test` in the frontend, and all tests passed too.

### Manual Testing 

I tested following [this guide](https://github.com/deep-ink-ventures/genesis-dao-node/blob/main/docs/testing.md#manual-voting), and all these functions are working fine.

I ran the frontend without problems, but when I tried to create a dao got this message "Sorry you need at least 10 DOT tokens to create a DAO. You will get them back if you destroy the DAO.". Even that I get more balance for the connected account, the error msg remains.

I tried to run the services using docker and got the error mentioned above. So I tried to run without docker and got this error:
```
(venv) user@localhost:~/Documents/genesisdao/genesis-dao-service$ make start-dev
Operations to perform:
  Apply all migrations: admin, auth, contenttypes, core, sessions
Running migrations:
  No migrations to apply.
Watching for file changes with StatReloader
Performing system checks...
System check identified no issues (0 silenced).
April 14, 2023 - 14:32:42
Django version 4.1.7, using settings 'settings.settings'
Starting ASGI/Daphne version 4.0.0 development server at http://127.0.0.1:8000/
Quit the server with CONTROL-C.
Internal Server Error: /
Traceback (most recent call last):
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 715, in connect
	sock = self.retry.call_with_retry(
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/retry.py", line 46, in call_with_retry
	return do()
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 716, in <lambda>
	lambda: self._connect(), lambda error: self.disconnect(error)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 781, in _connect
	raise err
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 769, in _connect
	sock.connect(socket_address)
ConnectionRefusedError: [Errno 111] Connection refused
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/asgiref/sync.py", line 486, in thread_handler
	raise exc_info[1]
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/handlers/exception.py", line 43, in inner
	response = await get_response(request)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/utils/deprecation.py", line 154, in __acall__
	response = await sync_to_async(
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/asgiref/sync.py", line 448, in __call__
	ret = await asyncio.wait_for(future, timeout=None)
  File "/usr/lib/python3.9/asyncio/tasks.py", line 442, in wait_for
	return await fut
  File "/usr/lib/python3.9/concurrent/futures/thread.py", line 52, in run
	result = self.fn(*self.args, **self.kwargs)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/asgiref/sync.py", line 490, in thread_handler
	return func(*args, **kwargs)
  File "/home/user/Documents/genesisdao/genesis-dao-service/core/middleware.py", line 16, in process_response
	if current_block := cache.get("current_block"):
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/cache/backends/redis.py", line 187, in get
	return self._cache.get(key, default)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/cache/backends/redis.py", line 99, in get
	value = client.get(key)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/commands/core.py", line 1790, in get
	return self.execute_command("GET", name)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/client.py", line 1255, in execute_command
	conn = self.connection or pool.get_connection(command_name, **options)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 1481, in get_connection
	connection.connect()
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 721, in connect
	raise ConnectionError(self._error_message(e))
redis.exceptions.ConnectionError: Error 111 connecting to 0.0.0.0:6379. Connection refused.
Internal Server Error: /
Traceback (most recent call last):
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 715, in connect
	sock = self.retry.call_with_retry(
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/retry.py", line 46, in call_with_retry
	return do()
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 716, in <lambda>
	lambda: self._connect(), lambda error: self.disconnect(error)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 781, in _connect
	raise err
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 769, in _connect
	sock.connect(socket_address)
ConnectionRefusedError: [Errno 111] Connection refused
During handling of the above exception, another exception occurred:
Traceback (most recent call last):
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/asgiref/sync.py", line 486, in thread_handler
	raise exc_info[1]
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/handlers/exception.py", line 43, in inner
	response = await get_response(request)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/utils/deprecation.py", line 154, in __acall__
	response = await sync_to_async(
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/asgiref/sync.py", line 448, in __call__
	ret = await asyncio.wait_for(future, timeout=None)
  File "/usr/lib/python3.9/asyncio/tasks.py", line 442, in wait_for
	return await fut
  File "/usr/lib/python3.9/concurrent/futures/thread.py", line 52, in run
	result = self.fn(*self.args, **self.kwargs)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/asgiref/sync.py", line 490, in thread_handler
	return func(*args, **kwargs)
  File "/home/user/Documents/genesisdao/genesis-dao-service/core/middleware.py", line 16, in process_response
	if current_block := cache.get("current_block"):
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/cache/backends/redis.py", line 187, in get
	return self._cache.get(key, default)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/django/core/cache/backends/redis.py", line 99, in get
	value = client.get(key)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/commands/core.py", line 1790, in get
	return self.execute_command("GET", name)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/client.py", line 1255, in execute_command
	conn = self.connection or pool.get_connection(command_name, **options)
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 1481, in get_connection
	connection.connect()
  File "/home/user/Documents/genesisdao/genesis-dao-service/venv/lib/python3.9/site-packages/redis/connection.py", line 721, in connect
	raise ConnectionError(self._error_message(e))
redis.exceptions.ConnectionError: Error 111 connecting to 0.0.0.0:6379. Connection refused.
HTTP GET / 500 [0.08, 127.0.0.1:57252]
```
