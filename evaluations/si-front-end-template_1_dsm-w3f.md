# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/si-front-end-template.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| **0a.** | License | <ul><li>[ ] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/LICENSE) | Is the license correct? |
| **0b.** | Documentation | <ul><li>[ ] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/README.md) |   It doesn't have instructions to run the Docker |
| **0c.** | Docker | <ul><li>[ ] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/Dockerfile) | It doesn't have instructions, and I had problems to run.  |
| 1. | Menu Header | <ul><li>[ ] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/AccountSelector.tsx) | I have an doubt. |
| 2. | Footer | <ul><li>[ ] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/App.tsx) | The design of the Template Module could be better.  |
| 3. | Polkadot Extension| <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/substrate-lib/SubstrateContext.tsx) |   |
| 4. | Light/Dark Mode| <ul><li>[ ] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/src/theme/theme.ts) | The toggle could have an icon. |
| 5. | Typescript Migration | <ul><li>[x] </li></ul>| [Link](https://github.com/stojanov-igor/substrate-front-end-template/blob/material-design-update/tsconfig.json) |   |

## Evaluation V1

### License

In the [application](https://github.com/w3f/Grants-Program/blob/master/applications/si-front-end-template.md#milestone-1---design--initial-code) was specified the license Apache 2.0 and the license on the repository is unlicensed. Could you tell me if the license is correct?

### Docker

The documentation doesn't have instructions to run using Docker. Please add the instructions to the documentation. I was able to build the image without problems, but I couldn't run with success.

```
user@localhost:~/Documents/substrate-front-end-template$ docker build .
[+] Building 160.4s (11/11) FINISHED                                                                                                                                      	 
 => [internal] load build definition from Dockerfile                                                                                                                  	0.0s
 => => transferring dockerfile: 332B                                                                                                                                  	0.0s
 => [internal] load .dockerignore                                                                                                                                     	0.0s
 => => transferring context: 91B                                                                                                                                      	0.0s
 => [internal] load metadata for docker.io/library/node:18-alpine                                                                                                     	2.1s
 => [1/6] FROM docker.io/library/node:18-alpine@sha256:ca9f6cb0466f9638e59e0c249d335a07c867cd50c429b5c7830dda1bed584649                                               	4.2s
 => => resolve docker.io/library/node:18-alpine@sha256:ca9f6cb0466f9638e59e0c249d335a07c867cd50c429b5c7830dda1bed584649                                               	0.0s
 => => sha256:ca9f6cb0466f9638e59e0c249d335a07c867cd50c429b5c7830dda1bed584649 1.43kB / 1.43kB                                                                        	0.0s
 => => sha256:affdf979bd8ec516bf189d451b8ac68dd50adc49adc4c4014963556c11efeda4 1.16kB / 1.16kB                                                                        	0.0s
 => => sha256:24d8fcd7167fb06e91dc7228311105013dc042f6875ff2528ff7a41c04770112 7.14kB / 7.14kB                                                                        	0.0s
 => => sha256:4abcf20661432fb2d719aaf90656f55c287f8ca915dc1c92ec14ff61e67fbaf8 3.41MB / 3.41MB                                                                        	2.0s
 => => sha256:e7ced292c644a1f7bc776dcc401164b67c9224f8592cc83b8c42e237668a0c7f 40.25MB / 40.25MB                                                                      	3.2s
 => => sha256:b32c0114bba5af3e85af37dbc23b1e026850aba590099b81bf75946327b3a9e8 2.34MB / 2.34MB                                                                        	1.8s
 => => sha256:f3748d9674b0ca905fe23e1cb4ad0e49d6a605dbbfb9d0cf485f300a03f1eeff 450B / 450B                                                                            	2.1s
 => => extracting sha256:4abcf20661432fb2d719aaf90656f55c287f8ca915dc1c92ec14ff61e67fbaf8                                                                             	0.1s
 => => extracting sha256:e7ced292c644a1f7bc776dcc401164b67c9224f8592cc83b8c42e237668a0c7f                                                                             	0.6s
 => => extracting sha256:b32c0114bba5af3e85af37dbc23b1e026850aba590099b81bf75946327b3a9e8                                                                             	0.1s
 => => extracting sha256:f3748d9674b0ca905fe23e1cb4ad0e49d6a605dbbfb9d0cf485f300a03f1eeff                                                                             	0.0s
 => [internal] load build context                                                                                                                                     	1.3s
 => => transferring context: 234.11MB                                                                                                                                 	1.3s
 => [2/6] WORKDIR /app                                                                                                                                                	1.5s
 => [3/6] COPY package.json ./                                                                                                                                        	0.0s
 => [4/6] COPY yarn.lock ./                                                                                                                                           	0.0s
 => [5/6] RUN yarn install                                                                                                                                          	126.2s
 => [6/6] COPY . ./                                                                                                                                                   	0.9s
 => exporting to image                                                                                                                                               	25.2s
 => => exporting layers                                                                                                                                              	25.2s
 => => writing image sha256:df0323f7e5c524e232a94b831b9cf1e9bc66ec65d2aef55c925cb7e599572fb2                                                                          	0.0s

user@localhost:~/Documents/substrate-front-end-template$ docker images
REPOSITORY   TAG   	IMAGE ID   	CREATED          	SIZE                                                                                                           	 
<none>   	<none>	df0323f7e5c5   About a minute ago   1.72GB


user@localhost:~/Documents/substrate-front-end-template$ docker run df0323f7e5c5
Usage Error: Couldn't find the node_modules state file - running an install might help (findPackageLocation)

$ yarn run [--inspect] [--inspect-brk] [-T,--top-level] [-B,--binaries-only] <scriptName> …
```

### Menu Header

I think the toggle to Light/Dark Mode should have some icon to tell the user what the toggle does.
I have a question about the icons on the header. The two icons notification and menu should do something? 

![pasted image 0 (24)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/5c2de4a4-c77b-418b-af4f-5725567dc66c)


### Footer

The design of the Template Module could be better. I think it could have more space between the Pallet Interactor Buttons and the Template Module, and the Template Module could be more organized.

![pasted image 0 (25)](https://github.com/dsm-w3f/Grant-Milestone-Delivery/assets/112647953/8ee0132d-3f02-41ce-8e4c-144eea3c36f7)

