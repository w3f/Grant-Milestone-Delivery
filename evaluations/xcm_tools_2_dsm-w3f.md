
# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/xcm-tools.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.    | License                   | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/LICENSE    |            |
| 0b.    | Documentation             | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/README.md  |  |
| 0c.    | Testing and Testing Guide | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools#test                 |            |
| 0d.    | Docker                    | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/Dockerfile |            |
| 1.     | Send UMP message          | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/ump.go  |  |
| 2.     | Send DMP message          | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/dmp.go  |  |
| 3.     | Send HRMP message         | <ul><li>[x] </li></ul>| https://github.com/gmajor-encrypt/xcm-tools/blob/main/tx/hrmp.go |  |

## Evaluation V2

Now the example provided worked well. 

Asset Hub


![image](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/4bf7da0d-b779-4ef6-a8ce-3706ef02dec8)



Rococo


![image](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/0a489b9c-b3de-4325-acd9-0a8ed98111fe)



## Evaluation V1

### Docker

I was able to build and run the tests using Docker without problems.

### Testing

All tests passed with good coverage.

<details>

```
user@localhost:~/Documents/xcm-tools$ go test -v ./... -cover
?  	 github.com/gmajor-encrypt/xcm-tools/cli    [no test files]
?  	 github.com/gmajor-encrypt/xcm-tools/cmd    [no test files]
?  	 github.com/gmajor-encrypt/xcm-tools/example    [no test files]
?  	 github.com/gmajor-encrypt/xcm-tools/tracker    [no test files]
=== RUN   Test_Dmp_func
=== RUN   Test_Dmp_func/LimitedReserveTransferAssets
=== RUN   Test_Dmp_func/ReserveTransferAssets
=== RUN   Test_Dmp_func/LimitedTeleportAssets
=== RUN   Test_Dmp_func/TeleportAssets
=== RUN   Test_Dmp_func/Send
--- PASS: Test_Dmp_func (0.00s)
	--- PASS: Test_Dmp_func/LimitedReserveTransferAssets (0.00s)
	--- PASS: Test_Dmp_func/ReserveTransferAssets (0.00s)
	--- PASS: Test_Dmp_func/LimitedTeleportAssets (0.00s)
	--- PASS: Test_Dmp_func/TeleportAssets (0.00s)
	--- PASS: Test_Dmp_func/Send (0.00s)
=== RUN   Test_HRMP_func
=== RUN   Test_HRMP_func/LimitedReserveTransferAssets
=== RUN   Test_HRMP_func/ReserveTransferAssets
=== RUN   Test_HRMP_func/LimitedTeleportAssets
=== RUN   Test_HRMP_func/TeleportAssets
=== RUN   Test_HRMP_func/Send
--- PASS: Test_HRMP_func (0.00s)
	--- PASS: Test_HRMP_func/LimitedReserveTransferAssets (0.00s)
	--- PASS: Test_HRMP_func/ReserveTransferAssets (0.00s)
	--- PASS: Test_HRMP_func/LimitedTeleportAssets (0.00s)
	--- PASS: Test_HRMP_func/TeleportAssets (0.00s)
	--- PASS: Test_HRMP_func/Send (0.00s)
=== RUN   Test_ConvertMultiLocationAccountId32
--- PASS: Test_ConvertMultiLocationAccountId32 (0.00s)
=== RUN   Test_SimplifyMultiLocationParaId
--- PASS: Test_SimplifyMultiLocationParaId (0.00s)
=== RUN   Test_SimplifyMultiLocationRelayChain
--- PASS: Test_SimplifyMultiLocationRelayChain (0.00s)
=== RUN   Test_SimplifyMultiAssets
--- PASS: Test_SimplifyMultiAssets (0.00s)
=== RUN   Test_Client
--- PASS: Test_Client (25.14s)
=== RUN   TestXcmTransfer
=== RUN   TestXcmTransfer/Test_XCM_Ump_Transfer
=== RUN   TestXcmTransfer/Test_XCM_HRMP_Send
--- PASS: TestXcmTransfer (9.75s)
	--- PASS: TestXcmTransfer/Test_XCM_Ump_Transfer (1.49s)
	--- PASS: TestXcmTransfer/Test_XCM_HRMP_Send (1.40s)
=== RUN   TestDmpTransfer
=== RUN   TestDmpTransfer/Test_XCM_Dmp_Transfer
--- PASS: TestDmpTransfer (13.56s)
	--- PASS: TestDmpTransfer/Test_XCM_Dmp_Transfer (1.32s)
=== RUN   Test_Ump_func
=== RUN   Test_Ump_func/LimitedReserveTransferAssets
=== RUN   Test_Ump_func/ReserveTransferAssets
=== RUN   Test_Ump_func/LimitedTeleportAssets
=== RUN   Test_Ump_func/TeleportAssets
=== RUN   Test_Ump_func/Send
--- PASS: Test_Ump_func (0.00s)
	--- PASS: Test_Ump_func/LimitedReserveTransferAssets (0.00s)
	--- PASS: Test_Ump_func/ReserveTransferAssets (0.00s)
	--- PASS: Test_Ump_func/LimitedTeleportAssets (0.00s)
	--- PASS: Test_Ump_func/TeleportAssets (0.00s)
	--- PASS: Test_Ump_func/Send (0.00s)
=== RUN   TestXcmSend
=== RUN   TestXcmSend/Test_XCM_Ump_Send
=== RUN   TestXcmSend/Test_XCM_HRMP_Send
--- PASS: TestXcmSend (72.87s)
	--- PASS: TestXcmSend/Test_XCM_Ump_Send (31.03s)
	--- PASS: TestXcmSend/Test_XCM_HRMP_Send (30.00s)
=== RUN   Test_XCM_Dmp_Send
--- PASS: Test_XCM_Dmp_Send (17.93s)
PASS
    github.com/gmajor-encrypt/xcm-tools/tx    coverage: 76.2% of statements
ok 	 github.com/gmajor-encrypt/xcm-tools/tx    139.258s    coverage: 76.2% of statements
=== RUN   Test_ToInt
--- PASS: Test_ToInt (0.00s)
PASS
    github.com/gmajor-encrypt/xcm-tools/util    coverage: 100.0% of statements
ok 	 github.com/gmajor-encrypt/xcm-tools/util    (cached)    coverage: 100.0% of statements
```

</details>

I also tried to run the example for ump. I put the endpoint `wss://rococo-asset-hub-rpc.polkadot.io` and my private key. I ran `go run example/send_xcm.go`, and nothing returned in the terminal. I checked the events in the Rococo asset hub and found this.

![Screenshot 2023-08-24 at 09-02-43 Polkadot_Substrate Portal](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/50630cc3-3480-4303-ae67-8cbe73ac5dcf)

Is this example working? Let me know if I'm doing something wrong.
