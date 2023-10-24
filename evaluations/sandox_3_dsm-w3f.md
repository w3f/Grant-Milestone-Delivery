# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md 
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[x] </li></ul>| [LICENSE]( https://github.com/sandoxio/sandox/blob/main/LICENSE) | |
| 0b. | Documentation |<ul><li>[x] </li></ul>| [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) | |
| 0c. | Testing Guide |<ul><li>[x] </li></ul>| [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) | |
| 0e. | Article |<ul><li>[x] </li></ul>| [SanDOx.io on Medium](https://medium.com/@sandox) | |
| 1. | File search |<ul><li>[x] </li></ul>| [Searchbox](https://github.com/sandoxio/sandox/blob/main/src/components/ui/aceEditor/ace/ext-searchbox.js) | |
| 2. | Hotkeys feature |<ul><li>[x] </li></ul>| See [keymap.js](https://github.com/sandoxio/sandox/blob/main/src/components/app/keymap/keymap.js) | |
| 3. | Themes support |<ul><li>[x] </li></ul>| [See here](https://github.com/sandoxio/sandox/blob/main/src/components/app/appearance/appearance.js) |  | 
| 4. | Settings and projects storage |<ul><li>[x] </li></ul>| See [projectmanager.js](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) | | 

## Evaluation V2

### Testing

All bugs reported in the Evaluation V1 are fixed. The `./cmd/libsBuild.sh` was added to the compilation script. I would suggest you, for future work, add unit tests and e2e tests to perform quality assurance. Fuzzing also can help to check if the IDE is accepting multiple constructions of the language. 


## Evaluation V1

### Documentation

Could you add the command `./cmd/libsBuild.sh` to the instructions and the video in the demo?

### Testing

I was not able to test using Firefox, only Chrome. I got this error in the console.

![image (51)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/02d3ebbc-965a-4321-951d-0e2c8d958a18)

All preferences for appearance are working. Besides the Tool window bar, that can't be disabled.

The Hotkeys feature is working fine.

I had a problem with the File search, it is deleting the code when I delete the input in the search bar.

https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/816a98de-b8c2-46e7-b0e8-373480e229e2

I was able to download the `.zip`.

I found other bugs in the application.

The video shows some difficulty in writing `if (4 == 4)` and in the final of the video, if I delete the last line, it deleted the `;` too.

https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/6ad254c1-a2ea-4859-be49-a3d9b56f6929

I will try to explain my input in the video.

<details>

```js
// | is the cursor
// I pressed "if("

if(|)

// I pressed "4==4"
if(4==4|)

//I pressed "<-"

if(4==|4)

// I pressed "space"

if(4= |=4)

// I pressed "<- <-"

if(4|= =4)

//I pressed "space"

if( |4= =4)

// I pressed "-> -> -> ->"
if( 4= =|4)

// I pressed "space"
if( 4= =4 |)

// I pressed "-> <-"
if( 4= =4 |)

// I pressed backspace 4 times
if|

// I pressed "(4==4"
if(4==4|)

// I pressed backspace 3 times
i|

// I pressed "f("
if(|)

// I pressed "-> <-"
if(|)

// I pressed "4==4"
if4==4|()

// For the ";" I only pressed "enter" to create a new line and deleted the new line and deleted ";" too.
```

</details>

The next video shows that I can't copy the code outside the IDE and use `ctrl+V` to paste, but I can use the mouse menu to paste the code. However, I can copy the code in the IDE and use `ctrl+V` to paste the code.


https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/cad8b35c-06b0-4b81-92a0-9a2ff552f8c0

