# Evaluation

- **Status:** Accepted
- **Application Document:** [w3f/Grants-Program#1726](https://github.com/w3f/Grants-Program/blob/master/applications/Security_Marketplace.md)
- **Milestone:** 1
- **Kusama Identity:** [FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5](https://sub.id/FdAoQzuxaG2nsXFGpvXfzzUDYueKqYK1B1LShZ874N2vhv5)
- **Previously successfully merged evaluation:** N/A

**Deliverables**


| Number | Deliverable | Link | Notes |
| -----: | ----------- | ----- | ------- |
| **0a.** | License | Unlicense | Unlicensed |
| **0b.** | Documentation | >[Escrow Contract Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Smartcontract/blob/main/escrow/Escrow%20Doc.pdf) >[Reward Token Contract Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Smartcontract/blob/main/reward_token/Reward%20Token.pdf) >[Node Services Documentation](https://github.com/ParthChaudhary31/Security_Marketplace_Backend/blob/main/AuditBazaarBackendArchitecture.docx) | The documentations are meant to explain the working of the application till this milestone. |
| **0c.** | Testing and Testing Guide | - | The respective Test files can be found alongside the project repositories with guidelines in readme files. |
| **0d.** | Docker | - | The dockerfiles can be found alongside the project repositories.  |
| 1 | UI/UX | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | The link leads to the repository of the front end of the application, the guidelines to operate it can be found in readme file. |
| 2 | Reputation Token Contract | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | This link leads to the reputation token's smart contract.  |
| 3 | Escrow Contract| [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Frontend) | This link leads to the Escrow Contract's smart contract. |
| 4 | Audit Directory Contract | - | This contract is not in the planned ecosystem anymore and it's functionality has been shifted in to that of escrow contract's |
| 5 | Arbiters Contract | - | This contract is not in the planned ecosystem anymore either with it's functionality shifted in the back end to make it cost efficient for Arbiters. |
| 6 | Node Services | [Github Repository](https://github.com/ParthChaudhary31/Security_Marketplace_Backend) | The link leads to the repository of the front end of the application, the guidelines to operate it can be found in readme file. |

## General Notes

Overall, this is a solid project, well documented and scripts, and all promised features work as expected with a good UI/UX. 

But it's still in a non-open source state, so there's no license yet.

## Logs

### Smart contracts

<details>

<summary> Reward token contract Unit tests </summary>

```bash

warning: function `random_acoount_id` is never used
  --> lib.rs:83:8
   |
83 |     fn random_acoount_id() -> AccountId {
   |        ^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(dead_code)]` on by default

warning: module `testCases` should have a snake case name
  --> lib.rs:77:5
   |
77 | mod testCases {
   |     ^^^^^^^^^ help: convert the identifier to snake case: `test_cases`
   |
   = note: `#[warn(non_snake_case)]` on by default

warning: unused `std::result::Result` that must be used
  --> lib.rs:94:9
   |
94 |         contract.mint(accounts.alice,1);
   |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: this `Result` may be an `Err` variant, which should be handled
   = note: `#[warn(unused_must_use)]` on by default

warning: unused `std::result::Result` that must be used
   --> lib.rs:107:9
    |
107 |         contract.mint(accounts.alice,1);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled

warning: unused `std::result::Result` that must be used
   --> lib.rs:120:9
    |
120 |         contract.mint(accounts.alice,1);
    |         ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    |
    = note: this `Result` may be an `Err` variant, which should be handled

warning: variable `Error1` should have a snake case name
   --> lib.rs:134:13
    |
134 |         let Error1 = contract.mint(accounts.charlie, 1000);
    |             ^^^^^^ help: convert the identifier to snake case: `error1`

warning: `reward_token` (lib test) generated 6 warnings
    Finished test [unoptimized + debuginfo] target(s) in 1m 39s
     Running unittests lib.rs (target/debug/deps/reward_token-7de3b7d8c4071858)

running 4 tests
test testCases::test_case_4 ... ok
test testCases::test_case_1 ... ok
test testCases::test_case_3 ... ok
test testCases::test_case_2 ... ok

test result: ok. 4 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out; finished in 0.00s


```

</details>

### Backend

<details>

<summary> Backend integration tests </summary>

```bash
(node:14073) [MONGODB DRIVER] Warning: keepAlive is a deprecated option: Will not be able to turn off in the future.
(Use `node --trace-warnings ...` to show where the warning was created)
  console.log
    Server is running on port 9000

      at Server.log (src/server.ts:39:15)

  console.log
    config {
      emailAddress: 'áweraaty@yopmail.com',
      firstName: 'dfuer',
      lastName: 'qwert',
      password: 'Asdervf@12r',
      confirmPassword: 'Asdervf@12r'
    } {
      emailAddress: 'áwerty@yopmail.com',
      firstName: 'dffrehghfhf',
      lastName: 'qwertyy',
      password: 'Asdervf@@@123456',
      confirmPassword: 'Asdervf@@@123456'
    }

      at Object.log (src/test/userController.test.ts:14:13)

  console.log
    response.message {
      message: 'Logged in successfully',
      status: 200,
      error: false,
      token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IsOhd2VyYWF0eUB5b3BtYWlsLmNvbSIsIl9pZCI6IjY0ZDA4MjJiYzk5NGNhNmZhODFjY2JmNSIsImlhdCI6MTY5MTM4NjQxMSwiZXhwIjoxNjkxNDE1MjExfQ.arUrS85FS2FIpt5NppqP1A44jaxVE50cJoiIL1Noxjk',
      data: {
        emailAddress: 'áweraaty@yopmail.com',
        walletAddress: '',
        firstName: 'dfuer',
        lastName: 'qwert',
        gitHub: '',
        linkedIn: '',
        telegram: '',
        bio: '',
        profilePicture: ''
      }
    }

      at Object.log (src/test/userController.test.ts:66:13)

  console.log
    <ref *2> Response {
      _events: [Object: null prototype] {},
      _eventsCount: 0,
      _maxListeners: undefined,
      res: <ref *1> IncomingMessage {
        _readableState: ReadableState {
          objectMode: false,
          highWaterMark: 16384,
          buffer: BufferList { head: null, tail: null, length: 0 },
          length: 0,
          pipes: [],
          flowing: true,
          ended: true,
          endEmitted: true,
          reading: false,
          constructed: true,
          sync: true,
          needReadable: false,
          emittedReadable: false,
          readableListening: false,
          resumeScheduled: false,
          errorEmitted: false,
          emitClose: true,
          autoDestroy: true,
          destroyed: true,
          errored: null,
          closed: true,
          closeEmitted: true,
          defaultEncoding: 'utf8',
          awaitDrainWriters: null,
          multiAwaitDrain: false,
          readingMore: true,
          dataEmitted: true,
          decoder: [StringDecoder],
          encoding: 'utf8',
          [Symbol(kPaused)]: false
        },
        _events: [Object: null prototype] {
          end: [Array],
          data: [Array],
          error: [Array],
          close: [Function: bound emit]
        },
        _eventsCount: 4,
        _maxListeners: undefined,
        socket: Socket {
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: null,
          _closeAfterHandlingError: false,
          _readableState: [ReadableState],
          _events: [Object: null prototype],
          _eventsCount: 7,
          _maxListeners: undefined,
          _writableState: [WritableState],
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: null,
          _server: null,
          parser: null,
          _httpMessage: [ClientRequest],
          [Symbol(async_id_symbol)]: 645,
          [Symbol(kHandle)]: [TCP],
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: null,
          [Symbol(kBuffer)]: null,
          [Symbol(kBufferCb)]: null,
          [Symbol(kBufferGen)]: null,
          [Symbol(kCapture)]: false,
          [Symbol(kSetNoDelay)]: true,
          [Symbol(kSetKeepAlive)]: false,
          [Symbol(kSetKeepAliveInitialDelay)]: 0,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(RequestTimeout)]: undefined
        },
        httpVersionMajor: 1,
        httpVersionMinor: 1,
        httpVersion: '1.1',
        complete: true,
        rawHeaders: [
          'X-Powered-By',
          'Express',
          'Access-Control-Allow-Origin',
          '*',
          'Content-Type',
          'application/json; charset=utf-8',
          'Content-Length',
          '86',
          'ETag',
          'W/"56-/23N2lZHemAsMBOB3nw1KisCtHg"',
          'Vary',
          'Accept-Encoding',
          'Date',
          'Mon, 07 Aug 2023 05:33:31 GMT',
          'Connection',
          'close'
        ],
        rawTrailers: [],
        aborted: false,
        upgrade: false,
        url: '',
        method: null,
        statusCode: 400,
        statusMessage: 'Bad Request',
        client: Socket {
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: null,
          _closeAfterHandlingError: false,
          _readableState: [ReadableState],
          _events: [Object: null prototype],
          _eventsCount: 7,
          _maxListeners: undefined,
          _writableState: [WritableState],
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: null,
          _server: null,
          parser: null,
          _httpMessage: [ClientRequest],
          [Symbol(async_id_symbol)]: 645,
          [Symbol(kHandle)]: [TCP],
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: null,
          [Symbol(kBuffer)]: null,
          [Symbol(kBufferCb)]: null,
          [Symbol(kBufferGen)]: null,
          [Symbol(kCapture)]: false,
          [Symbol(kSetNoDelay)]: true,
          [Symbol(kSetKeepAlive)]: false,
          [Symbol(kSetKeepAliveInitialDelay)]: 0,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(RequestTimeout)]: undefined
        },
        _consuming: false,
        _dumped: false,
        req: ClientRequest {
          _events: [Object: null prototype],
          _eventsCount: 3,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
          writable: true,
          destroyed: false,
          _last: true,
          chunkedEncoding: false,
          shouldKeepAlive: false,
          maxRequestsOnConnectionReached: false,
          _defaultKeepAlive: true,
          useChunkedEncodingByDefault: true,
          sendDate: false,
          _removedConnection: false,
          _removedContLen: false,
          _removedTE: false,
          strictContentLength: false,
          _contentLength: 64,
          _hasBody: true,
          _trailer: '',
          finished: true,
          _headerSent: true,
          _closed: false,
          socket: [Socket],
          _header: 'POST /api/v1/login HTTP/1.1\r\n' +
            'Host: 127.0.0.1:43873\r\n' +
            'Accept-Encoding: gzip, deflate\r\n' +
            'Content-Type: application/json\r\n' +
            'Content-Length: 64\r\n' +
            'Connection: close\r\n' +
            '\r\n',
          _keepAliveTimeout: 0,
          _onPendingData: [Function: nop],
          agent: [Agent],
          socketPath: undefined,
          method: 'POST',
          maxHeaderSize: undefined,
          insecureHTTPParser: undefined,
          path: '/api/v1/login',
          _ended: true,
          res: [Circular *1],
          aborted: false,
          timeoutCb: null,
          upgradeOrConnect: false,
          parser: null,
          maxHeadersCount: null,
          reusedSocket: false,
          host: '127.0.0.1',
          protocol: 'http:',
          [Symbol(kCapture)]: false,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(kEndCalled)]: true,
          [Symbol(kNeedDrain)]: false,
          [Symbol(corked)]: 0,
          [Symbol(kOutHeaders)]: [Object: null prototype],
          [Symbol(kUniqueHeaders)]: null
        },
        text: '{"message":"User not found, Please register yourself first","status":400,"error":true}',
        [Symbol(kCapture)]: false,
        [Symbol(kHeaders)]: {
          'x-powered-by': 'Express',
          'access-control-allow-origin': '*',
          'content-type': 'application/json; charset=utf-8',
          'content-length': '86',
          etag: 'W/"56-/23N2lZHemAsMBOB3nw1KisCtHg"',
          vary: 'Accept-Encoding',
          date: 'Mon, 07 Aug 2023 05:33:31 GMT',
          connection: 'close'
        },
        [Symbol(kHeadersCount)]: 16,
        [Symbol(kTrailers)]: null,
        [Symbol(kTrailersCount)]: 0,
        [Symbol(RequestTimeout)]: undefined
      },
      request: Test {
        _events: [Object: null prototype] { abort: [Function (anonymous)] },
        _eventsCount: 1,
        _maxListeners: undefined,
        _enableHttp2: false,
        _agent: false,
        _formData: null,
        method: 'POST',
        url: 'http://127.0.0.1:43873/api/v1/login',
        _header: { 'content-type': 'application/json' },
        header: { 'Content-Type': 'application/json' },
        writable: true,
        _redirects: 0,
        _maxRedirects: 0,
        cookies: '',
        qs: {},
        _query: [],
        qsRaw: [],
        _redirectList: [],
        _streamRequest: false,
        _lookup: undefined,
        _buffer: true,
        app: Server {
          maxHeaderSize: undefined,
          insecureHTTPParser: undefined,
          _events: [Object: null prototype],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 0,
          _handle: null,
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          noDelay: false,
          keepAlive: false,
          keepAliveInitialDelay: 0,
          httpAllowHalfOpen: false,
          timeout: 0,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          maxRequestsPerSocket: 0,
          headersTimeout: 60000,
          requestTimeout: 0,
          _connectionKey: '6::::0',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(kCapture)]: false,
          [Symbol(async_id_symbol)]: 643,
          [Symbol(kUniqueHeaders)]: null
        },
        _asserts: [],
        _server: Server {
          maxHeaderSize: undefined,
          insecureHTTPParser: undefined,
          _events: [Object: null prototype],
          _eventsCount: 2,
          _maxListeners: undefined,
          _connections: 0,
          _handle: null,
          _usingWorkers: false,
          _workers: [],
          _unref: false,
          allowHalfOpen: true,
          pauseOnConnect: false,
          noDelay: false,
          keepAlive: false,
          keepAliveInitialDelay: 0,
          httpAllowHalfOpen: false,
          timeout: 0,
          keepAliveTimeout: 5000,
          maxHeadersCount: null,
          maxRequestsPerSocket: 0,
          headersTimeout: 60000,
          requestTimeout: 0,
          _connectionKey: '6::::0',
          [Symbol(IncomingMessage)]: [Function: IncomingMessage],
          [Symbol(ServerResponse)]: [Function: ServerResponse],
          [Symbol(kCapture)]: false,
          [Symbol(async_id_symbol)]: 643,
          [Symbol(kUniqueHeaders)]: null
        },
        _data: { emailAddress: 'áwe1rty@yopmail.com', password: 'Asdervf@12r' },
        req: ClientRequest {
          _events: [Object: null prototype],
          _eventsCount: 3,
          _maxListeners: undefined,
          outputData: [],
          outputSize: 0,
          writable: true,
          destroyed: false,
          _last: true,
          chunkedEncoding: false,
          shouldKeepAlive: false,
          maxRequestsOnConnectionReached: false,
          _defaultKeepAlive: true,
          useChunkedEncodingByDefault: true,
          sendDate: false,
          _removedConnection: false,
          _removedContLen: false,
          _removedTE: false,
          strictContentLength: false,
          _contentLength: 64,
          _hasBody: true,
          _trailer: '',
          finished: true,
          _headerSent: true,
          _closed: false,
          socket: [Socket],
          _header: 'POST /api/v1/login HTTP/1.1\r\n' +
            'Host: 127.0.0.1:43873\r\n' +
            'Accept-Encoding: gzip, deflate\r\n' +
            'Content-Type: application/json\r\n' +
            'Content-Length: 64\r\n' +
            'Connection: close\r\n' +
            '\r\n',
          _keepAliveTimeout: 0,
          _onPendingData: [Function: nop],
          agent: [Agent],
          socketPath: undefined,
          method: 'POST',
          maxHeaderSize: undefined,
          insecureHTTPParser: undefined,
          path: '/api/v1/login',
          _ended: true,
          res: [IncomingMessage],
          aborted: false,
          timeoutCb: null,
          upgradeOrConnect: false,
          parser: null,
          maxHeadersCount: null,
          reusedSocket: false,
          host: '127.0.0.1',
          protocol: 'http:',
          [Symbol(kCapture)]: false,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(kEndCalled)]: true,
          [Symbol(kNeedDrain)]: false,
          [Symbol(corked)]: 0,
          [Symbol(kOutHeaders)]: [Object: null prototype],
          [Symbol(kUniqueHeaders)]: null
        },
        protocol: 'http:',
        host: '127.0.0.1:43873',
        _endCalled: true,
        _callback: [Function (anonymous)],
        _fullfilledPromise: Promise { [Circular *2] },
        res: <ref *1> IncomingMessage {
          _readableState: [ReadableState],
          _events: [Object: null prototype],
          _eventsCount: 4,
          _maxListeners: undefined,
          socket: [Socket],
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          rawHeaders: [Array],
          rawTrailers: [],
          aborted: false,
          upgrade: false,
          url: '',
          method: null,
          statusCode: 400,
          statusMessage: 'Bad Request',
          client: [Socket],
          _consuming: false,
          _dumped: false,
          req: [ClientRequest],
          text: '{"message":"User not found, Please register yourself first","status":400,"error":true}',
          [Symbol(kCapture)]: false,
          [Symbol(kHeaders)]: [Object],
          [Symbol(kHeadersCount)]: 16,
          [Symbol(kTrailers)]: null,
          [Symbol(kTrailersCount)]: 0,
          [Symbol(RequestTimeout)]: undefined
        },
        _resBuffered: true,
        response: [Circular *2],
        called: true,
        [Symbol(kCapture)]: false
      },
      req: <ref *3> ClientRequest {
        _events: [Object: null prototype] {
          drain: [Function],
          error: [Function (anonymous)],
          finish: [Function: requestOnFinish]
        },
        _eventsCount: 3,
        _maxListeners: undefined,
        outputData: [],
        outputSize: 0,
        writable: true,
        destroyed: false,
        _last: true,
        chunkedEncoding: false,
        shouldKeepAlive: false,
        maxRequestsOnConnectionReached: false,
        _defaultKeepAlive: true,
        useChunkedEncodingByDefault: true,
        sendDate: false,
        _removedConnection: false,
        _removedContLen: false,
        _removedTE: false,
        strictContentLength: false,
        _contentLength: 64,
        _hasBody: true,
        _trailer: '',
        finished: true,
        _headerSent: true,
        _closed: false,
        socket: Socket {
          connecting: false,
          _hadError: false,
          _parent: null,
          _host: null,
          _closeAfterHandlingError: false,
          _readableState: [ReadableState],
          _events: [Object: null prototype],
          _eventsCount: 7,
          _maxListeners: undefined,
          _writableState: [WritableState],
          allowHalfOpen: false,
          _sockname: null,
          _pendingData: null,
          _pendingEncoding: '',
          server: null,
          _server: null,
          parser: null,
          _httpMessage: [Circular *3],
          [Symbol(async_id_symbol)]: 645,
          [Symbol(kHandle)]: [TCP],
          [Symbol(lastWriteQueueSize)]: 0,
          [Symbol(timeout)]: null,
          [Symbol(kBuffer)]: null,
          [Symbol(kBufferCb)]: null,
          [Symbol(kBufferGen)]: null,
          [Symbol(kCapture)]: false,
          [Symbol(kSetNoDelay)]: true,
          [Symbol(kSetKeepAlive)]: false,
          [Symbol(kSetKeepAliveInitialDelay)]: 0,
          [Symbol(kBytesRead)]: 0,
          [Symbol(kBytesWritten)]: 0,
          [Symbol(RequestTimeout)]: undefined
        },
        _header: 'POST /api/v1/login HTTP/1.1\r\n' +
          'Host: 127.0.0.1:43873\r\n' +
          'Accept-Encoding: gzip, deflate\r\n' +
          'Content-Type: application/json\r\n' +
          'Content-Length: 64\r\n' +
          'Connection: close\r\n' +
          '\r\n',
        _keepAliveTimeout: 0,
        _onPendingData: [Function: nop],
        agent: Agent {
          _events: [Object: null prototype],
          _eventsCount: 2,
          _maxListeners: undefined,
          defaultPort: 80,
          protocol: 'http:',
          options: [Object: null prototype],
          requests: [Object: null prototype] {},
          sockets: [Object: null prototype],
          freeSockets: [Object: null prototype] {},
          keepAliveMsecs: 1000,
          keepAlive: false,
          maxSockets: Infinity,
          maxFreeSockets: 256,
          scheduling: 'lifo',
          maxTotalSockets: Infinity,
          totalSocketCount: 1,
          [Symbol(kCapture)]: false
        },
        socketPath: undefined,
        method: 'POST',
        maxHeaderSize: undefined,
        insecureHTTPParser: undefined,
        path: '/api/v1/login',
        _ended: true,
        res: <ref *1> IncomingMessage {
          _readableState: [ReadableState],
          _events: [Object: null prototype],
          _eventsCount: 4,
          _maxListeners: undefined,
          socket: [Socket],
          httpVersionMajor: 1,
          httpVersionMinor: 1,
          httpVersion: '1.1',
          complete: true,
          rawHeaders: [Array],
          rawTrailers: [],
          aborted: false,
          upgrade: false,
          url: '',
          method: null,
          statusCode: 400,
          statusMessage: 'Bad Request',
          client: [Socket],
          _consuming: false,
          _dumped: false,
          req: [Circular *3],
          text: '{"message":"User not found, Please register yourself first","status":400,"error":true}',
          [Symbol(kCapture)]: false,
          [Symbol(kHeaders)]: [Object],
          [Symbol(kHeadersCount)]: 16,
          [Symbol(kTrailers)]: null,
          [Symbol(kTrailersCount)]: 0,
          [Symbol(RequestTimeout)]: undefined
        },
        aborted: false,
        timeoutCb: null,
        upgradeOrConnect: false,
        parser: null,
        maxHeadersCount: null,
        reusedSocket: false,
        host: '127.0.0.1',
        protocol: 'http:',
        [Symbol(kCapture)]: false,
        [Symbol(kBytesWritten)]: 0,
        [Symbol(kEndCalled)]: true,
        [Symbol(kNeedDrain)]: false,
        [Symbol(corked)]: 0,
        [Symbol(kOutHeaders)]: [Object: null prototype] {
          host: [Array],
          'accept-encoding': [Array],
          'content-type': [Array],
          'content-length': [Array]
        },
        [Symbol(kUniqueHeaders)]: null
      },
      text: '{"message":"User not found, Please register yourself first","status":400,"error":true}',
      files: undefined,
      buffered: true,
      headers: {
        'x-powered-by': 'Express',
        'access-control-allow-origin': '*',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '86',
        etag: 'W/"56-/23N2lZHemAsMBOB3nw1KisCtHg"',
        vary: 'Accept-Encoding',
        date: 'Mon, 07 Aug 2023 05:33:31 GMT',
        connection: 'close'
      },
      header: {
        'x-powered-by': 'Express',
        'access-control-allow-origin': '*',
        'content-type': 'application/json; charset=utf-8',
        'content-length': '86',
        etag: 'W/"56-/23N2lZHemAsMBOB3nw1KisCtHg"',
        vary: 'Accept-Encoding',
        date: 'Mon, 07 Aug 2023 05:33:31 GMT',
        connection: 'close'
      },
      statusCode: 400,
      status: 400,
      statusType: 4,
      info: false,
      ok: false,
      redirect: false,
      clientError: true,
      serverError: false,
      error: Error: cannot POST /api/v1/login (400)
          at Response.Object.<anonymous>.Response.toError (/opt/src/Whisker17/w3f-test/security/Security_Marketplace_Backend/Backend/node_modules/superagent/src/node/response.js:110:17)
          at Response.toError [as _setStatusProperties] (/opt/src/Whisker17/w3f-test/security/Security_Marketplace_Backend/Backend/node_modules/superagent/src/response-base.js:107:48)
          at new _setStatusProperties (/opt/src/Whisker17/w3f-test/security/Security_Marketplace_Backend/Backend/node_modules/superagent/src/node/response.js:41:8)
          at Test.Object.<anonymous>.Request._emitResponse (/opt/src/Whisker17/w3f-test/security/Security_Marketplace_Backend/Backend/node_modules/superagent/src/node/index.js:953:20)
          at _emitResponse (/opt/src/Whisker17/w3f-test/security/Security_Marketplace_Backend/Backend/node_modules/superagent/src/node/index.js:1166:38)
          at IncomingMessage.fn (/opt/src/Whisker17/w3f-test/security/Security_Marketplace_Backend/Backend/node_modules/superagent/src/node/parsers/json.js:19:7)
          at IncomingMessage.emit (node:events:525:35)
          at endReadableNT (node:internal/streams/readable:1358:12)
          at processTicksAndRejections (node:internal/process/task_queues:83:21) {
        status: 400,
        text: '{"message":"User not found, Please register yourself first","status":400,"error":true}',
        method: 'POST',
        path: '/api/v1/login'
      },
      created: false,
      accepted: false,
      noContent: false,
      badRequest: true,
      unauthorized: false,
      notAcceptable: false,
      forbidden: false,
      notFound: false,
      unprocessableEntity: false,
      type: 'application/json',
      charset: 'utf-8',
      links: {},
      setEncoding: [Function: bound ],
      redirects: [],
      _body: {
        message: 'User not found, Please register yourself first',
        status: 400,
        error: true
      },
      pipe: [Function (anonymous)],
      [Symbol(kCapture)]: false
    } .#################

      at Object.log (src/test/userController.test.ts:100:13)

  console.log
    login data eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IsOhd2VyYWF0eUB5b3BtYWlsLmNvbSIsIl9pZCI6IjY0ZDA4MjJiYzk5NGNhNmZhODFjY2JmNSIsImlhdCI6MTY5MTM4NjQxMSwiZXhwIjoxNjkxNDE1MjExfQ.arUrS85FS2FIpt5NppqP1A44jaxVE50cJoiIL1Noxjk

      at Object.log (src/test/userController.test.ts:109:13)

  console.log
    response.message {
      message: 'Success',
      status: 200,
      error: false,
      data: {
        emailAddress: 'áweraaty@yopmail.com',
        walletAddress: '5En7yhgG9E8vCrnyZMdxc7ToJdYqRyeCzfgjNXoAS8rkG16r',
        firstName: 'admin',
        lastName: 'qwerfty',
        gitHub: 'https://github.com/Sriharsh1103',
        linkedIn: '',
        telegram: '',
        bio: 'good guy ultra max pro',
        profilePicture: ''
      }
    }

      at Object.log (src/test/userController.test.ts:116:13)

  console.log
    response ... {
      message: 'Success',
      status: 200,
      error: false,
      data: {
        response: {
          emailAddress: 'áweraaty@yopmail.com',
          status: 'PENDING',
          auditType: [Array],
          gitHub: 'https://github.com/pass-the-baton/derivatives/tree/main/contractsgithub.com',
          offerAmount: 1,
          postID: 7281,
          estimatedDelivery: '05/10/2023',
          description: 'great project',
          socialLink: 'googlecom',
          auditorEmail: '',
          _id: '64d0822bc994ca6fa81ccc04',
          createdAt: '2023-08-07T05:33:31.659Z',
          updatedAt: '2023-08-07T05:33:31.659Z'
        },
        firstName: 'admin',
        lastName: 'qwerfty'
      }
    }

      at Object.log (src/test/userController.test.ts:146:13)

  console.log
    response ... {
      message: 'Success',
      status: 200,
      error: false,
      count: 1,
      data: [
        {
          emailAddress: 'áweraaty@yopmail.com',
          _id: '64d0822bc994ca6fa81ccc04',
          firstName: 'admin',
          lastName: 'qwerfty',
          createdAt: '2023-08-07T05:33:31.659Z',
          auditType: [Array],
          gitHub: 'https://github.com/pass-the-baton/derivatives/tree/main/contractsgithub.com',
          postID: 7281,
          offerAmount: 1,
          estimatedDelivery: '05/10/2023'
        }
      ]
    }

      at Object.log (src/test/userController.test.ts:166:13)

  console.log
    response ... {
      message: 'Success',
      status: 200,
      error: false,
      count: 1,
      data: [
        {
          emailAddress: 'áweraaty@yopmail.com',
          _id: '64d0822bc994ca6fa81ccc04',
          firstName: 'admin',
          lastName: 'qwerfty',
          createdAt: '2023-08-07T05:33:31.659Z',
          auditType: [Array],
          gitHub: 'https://github.com/pass-the-baton/derivatives/tree/main/contractsgithub.com',
          postID: 7281,
          offerAmount: 1,
          estimatedDelivery: '05/10/2023'
        }
      ]
    }

      at Object.log (src/test/userController.test.ts:186:13)

  console.log
    response ... {
      message: 'Success',
      status: 200,
      error: false,
      data: {
        response: {
          _id: '64d0822cc994ca6fa81ccc1e',
          emailAddress: 'áweraaty@yopmail.com',
          status: 'PENDING',
          auditType: [Array],
          gitHub: 'https://github.com/pass-the-baton/derivatives/tree/main/contractsgithub.com',
          offerAmount: 1,
          postID: 83184,
          estimatedDelivery: '05/10/2023',
          description: 'great project',
          socialLink: 'googlecom',
          auditorEmail: '',
          createdAt: '2023-08-07T05:33:32.206Z',
          updatedAt: '2023-08-07T05:33:32.206Z'
        },
        firstName: 'admin',
        lastName: 'qwerfty'
      }
    }

      at Object.log (src/test/userController.test.ts:268:13)

 PASS  src/test/userController.test.ts
  user Controller
    ✓ register with new email: Pass (181 ms)
    ✓ register with empty email: Fail (5 ms)
    ✓ register with empty password: Fail (4 ms)
    ✓ register with mismatched passwords: Fail (4 ms)
    ✓ re-register with same email: Fail (4 ms)
    ✓ login with registered email: Pass (56 ms)
    ✓ login with empty email: Fail (3 ms)
    ✓ login with empty password: Fail (4 ms)
    ✓ login with registered email and wrong password: Fail (54 ms)
    ✓ login with unregistered email: Fail (42 ms)
    ✓ update profile  with registered email after login: Pass (78 ms)
    ✓ getUser  with registered email after login: Pass (65 ms)
    ✓ Register audit (68 ms)
    ✓ Get details of all audit PUBLIC (63 ms)
    ✓ Get details of all audit (62 ms)
    ✓ change password  with registered email after login: Pass (218 ms)
    ✓ Update Audit Status (71 ms)
    ✓ Update Auditor ID (67 ms)
    ✓ Get Details of Audit (68 ms)

Test Suites: 1 passed, 1 total
Tests:       19 passed, 19 total
Snapshots:   0 total
Time:        2.008 s, estimated 72 s
Ran all test suites.

```

</details>

#### Screenshots

- Main page

![main page](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/a33d47d3-15a9-46c9-8e34-f9f06ec65dcf)

- Connect wallet

![connect wallet](https://github.com/w3f/Grant-Milestone-Delivery/assets/12571049/fee3504e-c9d2-47bf-bc68-192ac5a9aa67)
