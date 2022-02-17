# Evaluation

- **Status:** In progress
- **Application Link:** https://github.com/w3f/Grants-Program/blob/master/applications/DotPay.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [bytepay](https://github.com/bytepayment/bytepay/blob/main/LICENSE) | Correct License |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [overview](https://bytepay.online/docs/bytepay-overview) [userguide](https://bytepay.online/docs/bytepay-userguide) | **08.02.22:** Can’t access the documentation or see anything without login via github and sharing my data. **14.02.22:** Access no longer requires a log in and according to the contract |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [how-to-run-test](https://github.com/bytepayment/bytepay#how-to-run-test) | Only description on how to run tests inside docker. **14.02.22:** Added description on how to run it local |
| 1. | User management, create an polkadot account for each developer | <ul><li>[x] </li></ul> | [Link](https://github.com/bytepayment/bytepay#how-to-run-this-project-dev-mode), [get_polkdot_keyring](https://github.com/bytepayment/bytepay/blob/main/cloudfuncs/get_polkdot_keyring/index.ts) | **08.02.22:** Docker set up doesn't seem to work for me, see below. http://bytepay.local-dev.host/ doesn't open **14.02.22** Works. Not sure where it’s implemented in the backend. **16.02.22:** They shared the links |
| 2. | Repo & webhook management| <ul><li>[x] </li></ul> | [Link](https://bytepay.online/bind), [webhooks](https://github.com/bytepayment/bytepay/blob/main/cloudfuncs/webhooks/index.ts) | Works. Not sure where it’s implemented in the backend. **16.02.22:** They shared the links |
| 3. | Address binding | <ul><li>[x] </li></ul> | [Link](https://bytepay.online/settings/address), [bind_polka_address](https://github.com/bytepayment/bytepay/blob/main/cloudfuncs/bind_polka_address/index.ts) | Works. Not sure where it’s implemented in the backend. **16.02.22:** They shared the links | 
| 4. | Recharge management | <ul><li>[ ] </li></ul> | [Link](https://bytepay.online/property) | **08.02.22:** Shows a substrate account instead of a polkakdot address, not sure how to fund this account **17.02.22:** New Docker Error |
| 5. | Transfer ink! contract| <ul><li>[x] </li></ul> | [smart-contract](https://github.com/bytepayment/bytepay/tree/main/smart-contract) | **08.02.22:** Test fail, the contract seems mostly to be a copy of [contract-transfer](https://github.com/paritytech/ink/blob/ba7e8edbae4a3dd8460b37d4ee30cf31f00a2fc3/examples/contract-transfer/lib.rs). The documentation should be updated at least **14.02.22:** The documentation was updated. But I’m not sure how the smart contract is actually integrated. Given there is now way to deploy this on Polkadot and the live version works with DOTs! **16.02.22:** The contract is actually not integrated
 | 

## General Notes

The team fixed things very quickly and seems to be motivated. However, the service is centralized (no use of the contract on polkadot) and requests github access, so users should be aware that this evaluation didn’t check the security of the setup. It also has a lot of smaller issues, like password changing worked even though I typed two different words, which is fine given that this is only the first milestone. 

**17.02.22 Docker Error** 

<pre><font color="#12488B"><b>bytepay</b></font>$ sudo docker-compose up
Starting bytepay_bytepay_1 ... <font color="#26A269">done</font>
Attaching to bytepay_bytepay_1
<font color="#2AA1B3">bytepay_1  |</font> /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
<font color="#2AA1B3">bytepay_1  |</font> /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
<font color="#2AA1B3">bytepay_1  |</font> /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
<font color="#2AA1B3">bytepay_1  |</font> 10-listen-on-ipv6-by-default.sh: info: IPv6 listen already enabled
<font color="#2AA1B3">bytepay_1  |</font> /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
<font color="#2AA1B3">bytepay_1  |</font> /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
<font color="#2AA1B3">bytepay_1  |</font> /docker-entrypoint.sh: Configuration complete; ready for start up
<font color="#2AA1B3">bytepay_1  |</font> 2022/02/17 12:55:28 [emerg] 1#1: cannot load certificate &quot;/cert/bytepay.online.fullchain.pem&quot;: BIO_new_file() failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen(&apos;/cert/bytepay.online.fullchain.pem&apos;,&apos;r&apos;) error:2006D080:BIO routines:BIO_new_file:no such file)
<font color="#2AA1B3">bytepay_1  |</font> nginx: [emerg] cannot load certificate &quot;/cert/bytepay.online.fullchain.pem&quot;: BIO_new_file() failed (SSL: error:02001002:system library:fopen:No such file or directory:fopen(&apos;/cert/bytepay.online.fullchain.pem&apos;,&apos;r&apos;) error:2006D080:BIO routines:BIO_new_file:no such file)
<font color="#2AA1B3">bytepay_bytepay_1 exited with code 1</font>
</pre>

**08.02.22 General Comments:**

Documentation for local testing would be nice 

Version is currently 0.0.0, see  
 "name": "dot-pay-client",
  "version": "0.0.0",


**08.02.22 Docker**

  <pre><font color="#12488B"><b>bytepay</b></font>$ sudo docker run --rm -p 80:80 sulnong/bytepay:app
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2022/02/08 11:55:20 [warn] 1#1: conflicting server name &quot;localhost&quot; on 0.0.0.0:80, ignored
nginx: [warn] conflicting server name &quot;localhost&quot; on 0.0.0.0:80, ignored
2022/02/08 11:55:20 [notice] 1#1: using the &quot;epoll&quot; event method
2022/02/08 11:55:20 [notice] 1#1: nginx/1.21.3
2022/02/08 11:55:20 [notice] 1#1: built by gcc 8.3.0 (Debian 8.3.0-6) 
2022/02/08 11:55:20 [notice] 1#1: OS: Linux 5.13.0-28-generic
2022/02/08 11:55:20 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2022/02/08 11:55:20 [notice] 1#1: start worker processes
2022/02/08 11:55:20 [notice] 1#1: start worker process 32
2022/02/08 11:55:20 [notice] 1#1: start worker process 33
2022/02/08 11:55:20 [notice] 1#1: start worker process 34
2022/02/08 11:55:20 [notice] 1#1: start worker process 35
2022/02/08 11:55:20 [notice] 1#1: start worker process 36
2022/02/08 11:55:20 [notice] 1#1: start worker process 37
2022/02/08 11:55:20 [notice] 1#1: start worker process 38
2022/02/08 11:55:20 [notice] 1#1: start worker process 39
2022/02/08 11:55:20 [notice] 1#1: start worker process 40
2022/02/08 11:55:20 [notice] 1#1: start worker process 41
2022/02/08 11:55:20 [notice] 1#1: start worker process 42
2022/02/08 11:55:20 [notice] 1#1: start worker process 43
2022/02/08 11:55:20 [notice] 1#1: start worker process 44
2022/02/08 11:55:20 [notice] 1#1: start worker process 45
2022/02/08 11:55:20 [notice] 1#1: start worker process 46
2022/02/08 11:55:20 [notice] 1#1: start worker process 47
</pre>

**08.02.22 Failed Test**

<pre>running 5 tests
test bytepay::tests::transfer_works ... <font color="#26A269">ok</font>
test bytepay::tests::contract_init_works ... <font color="#26A269">ok</font>
test bytepay::tests::set_whitelist_works ... <font color="#26A269">ok</font>
test bytepay::tests::deposit_works ... <font color="#26A269">ok</font>
test bytepay::tests::withdraw_works ... <font color="#C01C28">FAILED</font>

failures:

---- bytepay::tests::withdraw_works stdout ----
thread &apos;bytepay::tests::withdraw_works&apos; panicked at &apos;assertion failed: self.env().transfer(caller, amount).is_ok()&apos;, lib.rs:69:13
note: run with `RUST_BACKTRACE=1` environment variable to display a backtrace


failures:
    bytepay::tests::withdraw_works

test result: <font color="#C01C28">FAILED</font>. 4 passed; 1 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s

<font color="#C01C28"><b>error</b></font><b>:</b> test failed, to rerun pass &apos;--lib&apos;
</pre>
