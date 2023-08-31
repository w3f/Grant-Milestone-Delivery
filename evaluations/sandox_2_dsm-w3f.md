# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/sandox.md 
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a.  | License | <ul><li>[x] </li></ul>| [LICENSE]( https://github.com/sandoxio/sandox/blob/main/LICENSE) |  |
| 0b.  | Documentation | <ul><li>[ ] </li></ul>| [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md) | Could be improved |
| 0c.  | Testing Guide | <ul><li>[ ] </li></ul>| [Readme.md](https://github.com/sandoxio/sandox/blob/main/README.md#how-to) | Could be improved |
| 1.  | “Project” panel | <ul><li>[x] </li></ul>| [See here](https://github.com/sandoxio/sandox/blob/main/src/components/panels/projectInfo/projectInfo.js) |  | 
| 2.  | Polkadot js implementation | <ul><li>[ ] </li></ul>| https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js#L399 | Some problems using Firefox. 
| 3.  | Project compiling feature | <ul><li>[ ] </li></ul>| [See here](https://github.com/sandoxio/sandox/blob/main/src/service/projectManager.js) | Some problems using Firefox. |  

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


