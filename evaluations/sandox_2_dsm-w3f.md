# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.  | License | <ul><li>[x] </li></ul>| [LICENSE]( https://github.com/sandoxio/sandox/blob/main/LICENSE) |  |
| 0b.  | Documentation | <ul><li>[x] </li></ul>| [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) |  |
| 0c.  | Testing Guide | <ul><li>[x] </li></ul>| [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) |  |
| 1.  | “Project” panel | <ul><li>[x] </li></ul>| [See here](https://github.com/sandoxio/sandox/blob/main/src/components/panels/projectInfo/projectInfo.js) |  | 
| 2.  | Polkadot js implementation | <ul><li>[x] </li></ul>| https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L399 |  
| 3.  | Project compiling feature | <ul><li>[x] </li></ul>| [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) |  |  

## Evaluation V3

The remainder problems with Firefox were fixed.

## Evaluation V2

### Testing

The functions of this milestone are working fine. I could run the code using Firefox but in this browser the error messages are not displayed.

- Example 1
    
    <details>

    app.js

    ```
    console.logERROR("Test")
    ```

    Firefox

    ```
    12:29:29    >   Launched "app.js"
    12:29:29    >   @app.js:2:9
    ```

    Chrome

    ```
    12:30:59	>	Launched "app.js"
    12:30:59	>	TypeError: console.logERROR is not a function
                    at app.js:1:9
    ```
    </details>

- Example 2

    <details>

    app.js

    ```
    console.logERROR(Test")
    ```

    Firefox

    ```
    12:45:23    >   Launched "app.js"
    12:45:23    >
    ```

    Chrome

    ```
    12:45:07	>	Launched "app.js"
    12:45:07	>	SyntaxError: missing ) after argument list
    ```

    </details>

- Example 3

    <details>

    blockchain.js

    ```
    import {ApiPromise, WsProvider} from '@polkadot/api';
    import {cryptoWaitReady} from '@polkadot/util-crypto';


    cryptoWaitReady().then(async () => {
        const wsProvider = new WsProviderERROR('wss://rpc.polkadot.io');
        const api = await ApiPromise.create({ provider: wsProvider }); 

        const chain = await api.rpc.system.chain();
        console.log('You are connected to chain ' + chain);
    });
    ```

    Firefox

    ```
    12:36:03    >   Launched "app.js"
    12:36:03    >   @src/blockchain.js:6:24
    ```

    Chrome

    ```
    12:35:38	>	Launched "app.js"
    12:35:38	>	ReferenceError: WsProviderERROR is not defined
                    at src/blockchain.js:6:24
    ```

    </details>

I recommend displaying the column number of the cursor somewhere to help the user find the problems when there is a syntax error.

## Evaluation V1

### Documentation 

The [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) seems outdated. The instructions to build are working, but it doesn't have new information about this milestone. Would be good to have a video showing the usage for this milestone.

### Testing

I ran `./cmd/build.sh` and I received the `permission denied` for the `./cmd/libsBuild.sh`. Giving the permission to execute the build was finished.

I ran `http-server dist/` and the application started. Adding this command to the Documentation would be good, or other instructions to start the application.

I tested the application using Firefox and Chrome. Using Chrome, I didn't have any problem, but using Firefox, I couldn't compile the code example. I didn't receive any error in the console log.

Using Chrome


![pasted image 0 (7)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/76ac3e1a-6050-41fa-95d3-14fbe6816e2a)


Using Firefox


![pasted image 0 (8)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/a98b311d-b198-4a32-8889-52c5ea770b3e)



Console Log Firefox


![pasted image 0 (9)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/4d7e81d3-f234-4ba8-9eee-c98602fcc55d)


