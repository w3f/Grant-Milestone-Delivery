# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/galaxy.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License |<ul><li>[x] </li></ul>| [LICENSE](https://github.com/7flash/galaxy-polkadot/blob/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9/LICENSE) |  |
| **0b.** | Documentation |<ul><li>[x] </li></ul>|  [README](https://github.com/7flash/galaxy-polkadot/blob/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9/README.md) |  |
| **0c.** | Testing and Testing Guide |<ul><li>[x] </li></ul>|  [Galaxy.test.js](https://github.com/7flash/galaxy-polkadot/blob/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9/tests/Galaxy.test.js) |  |
| **0d.** | Docker |<ul><li>[x] </li></ul>|  [Dockerfile](https://github.com/7flash/galaxy-polkadot/blob/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9/Dockerfile) |  |
| 0e. | Article |<ul><li>[x] </li></ul>|  [Telegraph](https://telegra.ph/Galaxy-Browser-v111-09-28) |  |
| 0e. | Video |<ul><li>[x] </li></ul>|  [Youtube](https://www.youtube.com/watch?v=U1TshR00K8Q) |  |
| 1. | Galaxy Browser |<ul><li>[x] </li></ul>|  [Main Repository](https://github.com/7flash/galaxy-polkadot/tree/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9) |  |
| 2. | Smart contract |<ul><li>[x] </li></ul>|  [Smart Contract Submodule](https://github.com/7flash/galaxy-polkadot-contract/tree/74b38eafc673a9f1b5d8541a4f43b31cd644db01) |  |

## Evaluation V4

All remaining attention points were fix or justified. The documentation could be improved but this doesn't prevent the acceptance of the milestone.

## Evaluation V3

### Docker

This time, I was able to build the image. In the logs below you can see that it couldn't find some files. However, I was able to publish the frame and load it, but I couldn't save the frame locally. Here is the docker log:

<details>

```
/docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
/docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
/docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
/docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
/docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
/docker-entrypoint.sh: Configuration complete; ready for start up
2023/10/02 11:41:55 [notice] 1#1: using the "epoll" event method
2023/10/02 11:41:55 [notice] 1#1: nginx/1.24.0
2023/10/02 11:41:55 [notice] 1#1: built by gcc 12.2.1 20220924 (Alpine 12.2.1_git20220924-r4)
2023/10/02 11:41:55 [notice] 1#1: OS: Linux 5.10.60
2023/10/02 11:41:55 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
2023/10/02 11:41:55 [notice] 1#1: start worker processes
2023/10/02 11:41:55 [notice] 1#1: start worker process 30
2023/10/02 11:41:55 [notice] 1#1: start worker process 31
2023/10/02 11:41:55 [notice] 1#1: start worker process 32
2023/10/02 11:41:55 [notice] 1#1: start worker process 33
2023/10/02 11:41:55 [notice] 1#1: start worker process 34
2023/10/02 11:41:55 [notice] 1#1: start worker process 35
2023/10/02 11:41:55 [notice] 1#1: start worker process 36
2023/10/02 11:41:55 [notice] 1#1: start worker process 37
2023/10/02 11:41:55 [notice] 1#1: start worker process 38
2023/10/02 11:41:55 [notice] 1#1: start worker process 39
2023/10/02 11:41:55 [notice] 1#1: start worker process 40
2023/10/02 11:41:55 [notice] 1#1: start worker process 41
2023/10/02 11:41:55 [notice] 1#1: start worker process 42
2023/10/02 11:41:55 [notice] 1#1: start worker process 43
2023/10/02 11:41:55 [notice] 1#1: start worker process 44
2023/10/02 11:41:55 [notice] 1#1: start worker process 45
172.17.0.1 - - [02/Oct/2023:11:42:33 +0000] "GET / HTTP/1.1" 304 0 "-" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
2023/10/02 11:42:33 [error] 31#31: *2 open() "/usr/share/nginx/html/webui.js" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /webui.js HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [02/Oct/2023:11:42:33 +0000] "GET /webui.js HTTP/1.1" 404 153 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
172.17.0.1 - - [02/Oct/2023:11:42:33 +0000] "GET /assets/index-512aca53.js HTTP/1.1" 304 0 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
172.17.0.1 - - [02/Oct/2023:11:42:33 +0000] "GET /assets/index-08362418.css HTTP/1.1" 304 0 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
2023/10/02 11:42:34 [error] 31#31: *2 open() "/usr/share/nginx/html/webui.js" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /webui.js HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [02/Oct/2023:11:42:34 +0000] "GET /webui.js HTTP/1.1" 404 153 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
2023/10/02 11:42:34 [error] 31#31: *2 open() "/usr/share/nginx/html/public/excalidraw-assets/vendor-ef3c5d81a00ef582b871.js" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /public/excalidraw-assets/vendor-ef3c5d81a00ef582b871.js HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [02/Oct/2023:11:42:34 +0000] "GET /public/excalidraw-assets/vendor-ef3c5d81a00ef582b871.js HTTP/1.1" 404 153 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
172.17.0.1 - - [02/Oct/2023:11:42:34 +0000] "GET /vite.svg HTTP/1.1" 200 1497 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
172.17.0.1 - - [02/Oct/2023:11:42:34 +0000] "GET /vite.svg HTTP/1.1" 304 0 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
2023/10/02 11:42:34 [error] 30#30: *1 open() "/usr/share/nginx/html/public/excalidraw-assets/Assistant-Regular.woff2" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /public/excalidraw-assets/Assistant-Regular.woff2 HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [02/Oct/2023:11:42:34 +0000] "GET /public/excalidraw-assets/Assistant-Regular.woff2 HTTP/1.1" 404 153 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
2023/10/02 11:42:34 [error] 30#30: *1 open() "/usr/share/nginx/html/public/excalidraw-assets/Assistant-Bold.woff2" failed (2: No such file or directory), client: 172.17.0.1, server: localhost, request: "GET /public/excalidraw-assets/Assistant-Bold.woff2 HTTP/1.1", host: "localhost:8080", referrer: "http://localhost:8080/"
172.17.0.1 - - [02/Oct/2023:11:42:34 +0000] "GET /public/excalidraw-assets/Assistant-Bold.woff2 HTTP/1.1" 404 153 "http://localhost:8080/" "Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/115.0" "-"
```

</details>

Does the Docker only run the frontend without backend? It shouldn't run the backend as well? For example, running both with docker compose would be possible to spin up all system parts locally. 

### Backend

I ran the commands.

```
git clone https://github.com/7flash/galaxy-polkadot.git
cd galaxy-polkadot
git checkout milestone2
git submodule update --init --recursive
pnpm install
```

After that, `cd desktop/webui && make` and I changed [the file](https://github.com/7flash/galaxy-desktop-app/blob/9763b504caf094f1f4000300185c9594a05b560e/main.ts#L8) to `./webui/dist/webui-2.so` and I ran `pnpm dev-deno`. It opens a blank Chrome window. I ran `pnpm dev-desktop` and moved the folder `excalidraw-assets` to the folder `dist`. The command to generate this folder shouldn't be the command below?

```
npm install react react-dom @excalidraw/excalidraw

or

yarn add react react-dom @excalidraw/excalidraw
```

After that, I ran `pnpm dev-deno again` and the application with Backend worked fine. I was able to save locally and load. I think the repository is using a [branch](https://github.com/7flash/galaxy-dist/tree/a02cde286d6f0b50935e4d8ba75d4f0b958dd8e2) for the `dist` folder that isn't working properly, but the [new one](https://github.com/7flash/galaxy-dist/tree/01ccb930b88083dc0539244ba7de6f2935049c89) is working fine.

![image (42)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/f2b65338-5d5a-4bfd-ace0-792f3ff82012)


The loaded frame has a minor problem. It seems to load images in the corner of the frame. It isn't like when you load from a published one.

## Evaluation V2

### Docker

I tried to run the Docker, but I had some problems.

<details>

```
user@localhost:~/Documents/galaxy/galaxy-polkadot$ docker build -t galaxy:latest .
[+] Building 11.5s (11/13)                                                                                                                                                                                         
 => [internal] load .dockerignore                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.0s
 => => transferring dockerfile: 226B                                                                                                                                                                          0.0s
 => [internal] load metadata for docker.io/library/nginx:stable-alpine                                                                                                                                        1.2s
 => [internal] load metadata for docker.io/library/node:18                                                                                                                                                    1.2s
 => CACHED [production 1/2] FROM docker.io/library/nginx:stable-alpine@sha256:76ca7f6bfe01c3e22e3af85fd37c30149ece3ac2a444973687cab1765abca115                                                                0.0s
 => [build 1/6] FROM docker.io/library/node:18@sha256:ee0a21d64211d92d4340b225c556e9ef1a8bce1d5b03b49f5f07bf1dbbaa5626                                                                                        0.0s
 => [internal] load build context                                                                                                                                                                             2.0s
 => => transferring context: 9.37MB                                                                                                                                                                           1.9s
 => CACHED [build 2/6] WORKDIR /app                                                                                                                                                                           0.0s
 => CACHED [build 3/6] COPY package.json ./                                                                                                                                                                   0.0s
 => CACHED [build 4/6] RUN yarn install                                                                                                                                                                       0.0s
 => ERROR [build 5/6] COPY . .                                                                                                                                                                                8.3s
------
 > [build 5/6] COPY . .:
------
Dockerfile:5
--------------------
   3 |     COPY package.json ./
   4 |     RUN yarn install
   5 | >>> COPY . .
   6 |     RUN yarn build
   7 |     
--------------------
ERROR: failed to solve: cannot replace to directory /var/lib/docker/overlay2/b6476nn9qlvrj61jimm7lhold/merged/app/node_modules/@babel/preset-env with file
```

</details>

Adding the `node_modules` to `.dockerignore` or excluding the folder solved this problem. You can add the `.dockerignore` for this. However, after doing this change, I had this other the problem.

```
 => ERROR [build 6/6] RUN yarn build                                                                                                                                                                      	0.5s
------
 > [build 6/6] RUN yarn build:
#0 0.431 yarn run v1.22.19
#0 0.468 error Command "build" not found.
#0 0.468 info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
------
Dockerfile:6
--------------------
   4 | 	RUN yarn install
   5 | 	COPY . .
   6 | >>> RUN yarn build
   7 |	 
   8 | 	FROM nginx:stable-alpine AS production
--------------------
ERROR: failed to solve: process "/bin/sh -c yarn build" did not complete successfully: exit code: 1
```

### Manual Test

I built and deployed the contract without a problem. I changed the contract address. The documentation is missing the instructions to change [this line of code](https://github.com/7flash/galaxy-polkadot/blob/milestone2/src/GalaxyAPI.ts#L43) to change the contract.

This time, I was able to add more than one of the same shape, publish the frame, and load all shapes.

*image*

The commands `pnpm dev-deno` and pnpm `dev-desktop` still have the problem with the file `./webui/dist/webui-2.dylib`.

```
user@localhost:~/Documents/galaxy/galaxy-polkadot$ pnpm dev-deno

> galaxydo@0.0.2 dev-deno /home/user/Documents/galaxy/galaxy-polkadot
> cd desktop && DEV=true deno run --allow-all --unstable main.ts

DEBUG Checking for Deno configurations...
error: Uncaught (in promise) Error: File not found "./webui/dist/webui-2.dylib"
  	throw new WebUIError(`File not found "${options.libPath}"`);
        	^
	at new WebUI (file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/deno-webui/src/webui.ts:51:13)
	at file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:6:21
	at eventLoopTick (ext:core/01_core.js:183:11)
 ELIFECYCLE  Command failed with exit code 1.
```

And the command `dev-desktop` overwrite the folder `dist` and generate a new one without the `excalidraw-assets`.

<details>

```
user@localhost:~/Documents/galaxy/galaxy-polkadot$ pnpm dev-desktop

> galaxydo@0.0.2 dev-desktop /home/user/Documents/galaxy/galaxy-polkadot
> vite build && cd desktop && DEV=true deno run --allow-all --unstable main.ts

▲ [WARNING] Duplicate key "skipLibCheck" in object literal [duplicate-object-key]

	tsconfig.json:22:2:
  	22 │   "skipLibCheck": true,
     	╵   ~~~~~~~~~~~~~~

  The original key "skipLibCheck" is here:

	tsconfig.json:6:4:
  	6 │ 	"skipLibCheck": true,
    	╵ 	~~~~~~~~~~~~~~

▲ [WARNING] Duplicate key "noUnusedLocals" in object literal [duplicate-object-key]

	tsconfig.json:23:2:
  	23 │   "noUnusedLocals": false,
     	╵   ~~~~~~~~~~~~~~~~

  The original key "noUnusedLocals" is here:

	tsconfig.json:18:4:
  	18 │ 	"noUnusedLocals": true,
     	╵ 	~~~~~~~~~~~~~~~~

▲ [WARNING] Duplicate key "noUnusedParameters" in object literal [duplicate-object-key]

	tsconfig.json:24:2:
  	24 │   "noUnusedParameters": false
     	╵   ~~~~~~~~~~~~~~~~~~~~

  The original key "noUnusedParameters" is here:

	tsconfig.json:19:4:
  	19 │ 	"noUnusedParameters": true,
     	╵ 	~~~~~~~~~~~~~~~~~~~~

vite v4.3.0 building for production...
<script src="/webui.js"> in "/index.html" can't be bundled without type="module" attribute
transforming (32) node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs[plugin:vite:resolve] Module "util" has been externalized for browser compatibility, imported by "/home/user/Documents/galaxy/galaxy-polkadot/node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs". See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] Module "crypto" has been externalized for browser compatibility, imported by "/home/user/Documents/galaxy/galaxy-polkadot/node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs". See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
transforming (764) node_modules/.pnpm/@polkadot+networks@12.1.1/node_modules/@polkadot/networks/defaults/ledger.jsnode_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js (12:18) Use of eval in "node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js" is strongly discouraged as it poses security risks and may cause issues with minification.
node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs (15570:69) "webcrypto" is not exported by "__vite-browser-external", imported by "node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs".
✓ 787 modules transformed.
dist/index.html                 	0.49 kB │ gzip:   0.31 kB
dist/assets/index-0aca65c4.css  	2.65 kB │ gzip:   0.93 kB
dist/assets/index-e9f786d2.js 	289.17 kB │ gzip: 194.27 kB
dist/assets/index-e6f0b75e.js   2,701.49 kB │ gzip: 829.95 kB

(!) Some chunks are larger than 500 kBs after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 8.21s
DEBUG Checking for Deno configurations...
[User] webui_new_window()...
[Core]   	 WebUI v2.4.0
[Core]   	 _webui_init()...
[Core]   	 _webui_get_current_path()...
[Core]   	 _webui_malloc([4096])...
[Core]   	 _webui_ptr_add(0x0x55ee4c4a1bb0) -> Allocate 8192 bytes
[Core]   	 _webui_malloc([4096])...
[Core]   	 _webui_ptr_add(0x0x55ee4c4a5940) -> Allocate 8192 bytes
[User] webui_get_new_window_id()...
[Core]   	 _webui_malloc([4288])...
[Core]   	 _webui_ptr_add(0x0x55ee4c4a7950) -> Allocate 8192 bytes
[Core]   	 _webui_malloc([4096])...
[Core]   	 _webui_ptr_add(0x0x55ee4c4a9960) -> Allocate 8192 bytes
[Core]   	 _webui_malloc([4096])...
[Core]   	 _webui_ptr_add(0x0x55ee4c4ab970) -> Allocate 8192 bytes
[Core]   	 _webui_is_empty()...
[User] webui_new_window() -> New window #1 @ 0x0x55ee4c4a7950
[User] webui_set_profile([], [])...
[Core]   	 _webui_strlen()...
[Core]   	 _webui_is_empty()...
[Core]   	 _webui_malloc([0])...
[Core]   	 _webui_ptr_add(0x0x55ee4c480200) -> Allocate 4 bytes
[Core]   	 _webui_strlen()...
[Core]   	 _webui_is_empty()...
[Core]   	 _webui_malloc([0])...
[Core]   	 _webui_ptr_add(0x0x55ee4c480220) -> Allocate 4 bytes
Last download date from metadata: 2023-09-28T12:02:27.244Z
Debug mode: Loading local files only...
.git 29
vite.svg 1497
index.html 492
index-e6f0b75e.js 2702776
index-0aca65c4.css 2653
index-e9f786d2.js 289172
error: Uncaught (in promise) NotFound: No such file or directory (os error 2): readdir '../dist/excalidraw-assets'
	for await (const entry of Deno.readDir(path)) {
                 	^
	at async Object.[Symbol.asyncIterator] (ext:deno_fs/30_fs.js:161:19)
	at async loadFilesAsync (file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:126:22)
	at async getFiles (file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:158:14)
	at async file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:180:17
 ELIFECYCLE  Command failed with exit code 1.
```

</details>

## Evaluation V1

### Documentation

In the [setup](https://github.com/7flash/galaxy-polkadot/blob/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9/README.md#setup) I think it should be:

```
git clone https://github.com/7flash/galaxy-polkadot.git
cd galaxy-polkadot
git checkout milestone2
git submodule update --init --recursive
pnpm install
```

The [Backend](https://github.com/7flash/galaxy-polkadot/blob/f97d5e2e5eab3322782f72d3b469d11cbf7e94a9/README.md#backend) needs the [instructions to install demo](https://docs.deno.com/runtime/manual/getting_started/installation)

The documentation misses the instructions to build, deploy, and change the contract and the Docker instructions.

### Docker

I tried to build with `docker build .` and got this error:

<details>

```
user@localhost:~/Documents/galaxy/galaxy-polkadot$ docker build .
[+] Building 286.5s (10/13)                                                                                                                                                                                        
 => [internal] load build definition from Dockerfile                                                                                                                                                          0.0s
 => => transferring dockerfile: 226B                                                                                                                                                                          0.0s
 => [internal] load .dockerignore                                                                                                                                                                             0.0s
 => => transferring context: 2B                                                                                                                                                                               0.0s
 => [internal] load metadata for docker.io/library/nginx:stable-alpine                                                                                                                                        1.5s
 => [internal] load metadata for docker.io/library/node:16                                                                                                                                                    1.5s
 => CACHED [production 1/2] FROM docker.io/library/nginx:stable-alpine@sha256:76ca7f6bfe01c3e22e3af85fd37c30149ece3ac2a444973687cab1765abca115                                                                0.0s
 => [build 1/6] FROM docker.io/library/node:16@sha256:f77a1aef2da8d83e45ec990f45df50f1a286c5fe8bbfb8c6e4246c6389705c0b                                                                                        0.0s
 => [internal] load build context                                                                                                                                                                             1.9s
 => => transferring context: 9.20MB                                                                                                                                                                           1.7s
 => CACHED [build 2/6] WORKDIR /app                                                                                                                                                                           0.0s
 => CACHED [build 3/6] COPY package.json ./                                                                                                                                                                   0.0s
 => ERROR [build 4/6] RUN yarn install                                                                                                                                                                      283.1s
------                                                                                                                                                                                                             
 > [build 4/6] RUN yarn install:                                                                                                                                                                                   
#0 0.409 yarn install v1.22.19                                                                                                                                                                                     
#0 0.431 info No lockfile found.                                                                                                                                                                                   
#0 0.437 [1/4] Resolving packages...                                                                                                                                                                               
#0 48.98 warning kubo-rpc-client > ipfs-core-utils@0.18.1: js-IPFS has been deprecated in favour of Helia - please see https://github.com/ipfs/js-ipfs/issues/4336 for details                                     
#0 52.87 warning kubo-rpc-client > ipfs-core-utils > ipfs-core-types@0.14.1: js-IPFS has been deprecated in favour of Helia - please see https://github.com/ipfs/js-ipfs/issues/4336 for details
#0 129.3 [2/4] Fetching packages...
#0 148.4 warning @puppeteer/browsers@0.5.0: Invalid bin entry for "@puppeteer/browsers" (in "@puppeteer/browsers").
#0 281.8 error @multiformats/multiaddr@12.1.7: The engine "node" is incompatible with this module. Expected version ">=18.0.0". Got "16.20.2"
#0 281.8 error Found incompatible module.
#0 281.8 info Visit https://yarnpkg.com/en/docs/cli/install for documentation about this command.
------
Dockerfile:4
--------------------
   2 |     WORKDIR /app
   3 |     COPY package.json ./
   4 | >>> RUN yarn install
   5 |     COPY . .
   6 |     RUN yarn build
--------------------
ERROR: failed to solve: process "/bin/sh -c yarn install" did not complete successfully: exit code: 1
```

</details>

### Test

All tests passed:

```
 PASS  tests/Galaxy.test.js (18.547 s)
  Galaxy Macros Engine
    ✓ JS Macros (3864 ms)
    ✓ Deno macros (2899 ms)
    ✓ Python macros (2926 ms)
    ✓ Open Macro (2607 ms)
    ✓ Publish Macro (2836 ms)
    ✓ Save Macro (2544 ms)

Test Suites: 1 passed, 1 total
Tests:       6 passed, 6 total
Snapshots:   0 total
Time:        18.603 s, estimated 20 s
Ran all test suites matching /tests\/Galaxy.test.js/i.
```

### Manual Test

I had problems with the command `pnpm dev-deno` and `pnpm dev-desktop`.

<details>

pnpm dev-deno
```
user@localhost:~/Documents/galaxy/galaxy-polkadot$ pnpm dev-deno

> galaxydo@0.0.2 dev-deno /home/user/Documents/galaxy/galaxy-polkadot
> cd desktop && DEV=true deno run --allow-all --unstable main.ts

DEBUG Checking for Deno configurations...
error: Uncaught (in promise) Error: File not found "./webui/dist/webui-2.dylib"
  	throw new WebUIError(`File not found "${options.libPath}"`);
        	^
	at new WebUI (file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/deno-webui/src/webui.ts:51:13)
	at file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:6:21
	at eventLoopTick (ext:core/01_core.js:183:11)
 ELIFECYCLE  Command failed with exit code 1.
```

I changed the file `webui-2.so` to `webui-2.dylib`, and the backend seems to work with this change. Correct me if this is wrong.

pnpm dev-desktop
```
> galaxydo@0.0.2 dev-desktop /home/user/Documents/galaxy/galaxy-polkadot
> vite build && cd desktop && DEV=true deno run --allow-all --unstable main.ts

▲ [WARNING] Duplicate key "skipLibCheck" in object literal [duplicate-object-key]

    tsconfig.json:22:2:
      22 │   "skipLibCheck": true,
         ╵   ~~~~~~~~~~~~~~

  The original key "skipLibCheck" is here:

    tsconfig.json:6:4:
      6 │     "skipLibCheck": true,
        ╵     ~~~~~~~~~~~~~~

▲ [WARNING] Duplicate key "noUnusedLocals" in object literal [duplicate-object-key]

    tsconfig.json:23:2:
      23 │   "noUnusedLocals": false,
         ╵   ~~~~~~~~~~~~~~~~

  The original key "noUnusedLocals" is here:

    tsconfig.json:18:4:
      18 │     "noUnusedLocals": true,
         ╵     ~~~~~~~~~~~~~~~~

▲ [WARNING] Duplicate key "noUnusedParameters" in object literal [duplicate-object-key]

    tsconfig.json:24:2:
      24 │   "noUnusedParameters": false
         ╵   ~~~~~~~~~~~~~~~~~~~~

  The original key "noUnusedParameters" is here:

    tsconfig.json:19:4:
      19 │     "noUnusedParameters": true,
         ╵     ~~~~~~~~~~~~~~~~~~~~

vite v4.3.0 building for production...
<script src="/webui.js"> in "/index.html" can't be bundled without type="module" attribute
transforming (51) node_modules/.pnpm/nanoid@5.0.1/node_modules/nanoid/url-alphabet/index.js[plugin:vite:resolve] Module "util" has been externalized for browser compatibility, imported by "/home/user/Documents/galaxy/galaxy-polkadot/node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs". See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
[plugin:vite:resolve] Module "crypto" has been externalized for browser compatibility, imported by "/home/user/Documents/galaxy/galaxy-polkadot/node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs". See http://vitejs.dev/guide/troubleshooting.html#module-externalized-for-browser-compatibility for more details.
transforming (765) node_modules/.pnpm/@polkadot+networks@12.1.1/node_modules/@polkadot/networks/defaults/testnets.jsnode_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js (12:18) Use of eval in "node_modules/.pnpm/@protobufjs+inquire@1.1.0/node_modules/@protobufjs/inquire/index.js" is strongly discouraged as it poses security risks and may cause issues with minification.
node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs (15570:69) "webcrypto" is not exported by "__vite-browser-external", imported by "node_modules/.pnpm/useink@1.14.1_react@18.2.0_ws@8.14.2/node_modules/useink/dist/chunk-CFOEQQMR.mjs".
✓ 787 modules transformed.
dist/index.html                     0.49 kB │ gzip:   0.31 kB
dist/assets/index-0aca65c4.css      2.65 kB │ gzip:   0.93 kB
dist/assets/index-e9f786d2.js     289.17 kB │ gzip: 194.27 kB
dist/assets/index-4dec8ed1.js   2,701.47 kB │ gzip: 829.95 kB

(!) Some chunks are larger than 500 kBs after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
✓ built in 8.49s
DEBUG Checking for Deno configurations...
[User] webui_new_window()...
[Core]		WebUI v2.4.0 
[Core]		_webui_init()...
[Core]		_webui_get_current_path()...
[Core]		_webui_malloc([4096])...
[Core]		_webui_ptr_add(0x0x55f6338c0430) -> Allocate 8192 bytes
[Core]		_webui_malloc([4096])...
[Core]		_webui_ptr_add(0x0x55f6338c2440) -> Allocate 8192 bytes
[User] webui_get_new_window_id()...
[Core]		_webui_malloc([4288])...
[Core]		_webui_ptr_add(0x0x55f6338c4450) -> Allocate 8192 bytes
[Core]		_webui_malloc([4096])...
[Core]		_webui_ptr_add(0x0x55f6338c6460) -> Allocate 8192 bytes
[Core]		_webui_malloc([4096])...
[Core]		_webui_ptr_add(0x0x55f6338c8470) -> Allocate 8192 bytes
[Core]		_webui_is_empty()...
[User] webui_new_window() -> New window #1 @ 0x0x55f6338c4450
[User] webui_set_profile([], [])...
[Core]		_webui_strlen()...
[Core]		_webui_is_empty()...
[Core]		_webui_malloc([0])...
[Core]		_webui_ptr_add(0x0x55f63389dfa0) -> Allocate 4 bytes
[Core]		_webui_strlen()...
[Core]		_webui_is_empty()...
[Core]		_webui_malloc([0])...
[Core]		_webui_ptr_add(0x0x55f63389dfc0) -> Allocate 4 bytes
Last download date from metadata: 2023-09-28T12:02:27.244Z
Debug mode: Loading local files only...
.git 29
vite.svg 1497
index.html 492
index-4dec8ed1.js 2702757
index-0aca65c4.css 2653
index-e9f786d2.js 289172
error: Uncaught (in promise) NotFound: No such file or directory (os error 2): readdir '../dist/excalidraw-assets'
    for await (const entry of Deno.readDir(path)) {
                     ^
    at async Object.[Symbol.asyncIterator] (ext:deno_fs/30_fs.js:161:19)
    at async loadFilesAsync (file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:126:22)
    at async getFiles (file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:158:14)
    at async file:///home/user/Documents/galaxy/galaxy-polkadot/desktop/main.ts:180:17
 ELIFECYCLE  Command failed with exit code 1.
```

The rebuild isn't generating the excalidraw-assets.

</details>

I had a problem with the application. When I add two of the same shape, only the first appears when opened. The same behavior occurred in the video.

![pasted image 0 (15)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/8be59708-3065-4bfe-9ed5-a35d9069ba5c)
