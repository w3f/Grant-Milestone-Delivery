# Evaluation


- **Status:**  Approved
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crossbow.md
- **Milestone:** 1
- **Kusama Identity:** Ha27MB4gKH36ieRPa1T1ASqhUz4sVxMoVmK7o5CS6tXDqjW
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License |<ul><li>[ X ] </li></ul>| https://github.com/dodorare/crossbow/blob/main/LICENSE| Correct Licence Apache 2.0 |
| 0b.  | Documentation |<ul><li>[ X ] </li> </ul>| https://github.com/dodorare/crossbow/wiki | Missing documentation about generating and signing AAB file. The documentation for generating a project is sufficient. |
| 0c. | Testing |<ul><li>[ X ] </li></ul>| https://github.com/dodorare/crossbow/tree/main/crossbundle/tools/tests | Missing test guide documentation on how to run tests. Test guide was included as part of the proposal. |
| 0d. | Docker |<ul><li>[ X ] </li></ul>| https://github.com/creator-rs/crossbow/pkgs/container/android | Building the project via docker as described in the documentation, throws the following error: <br> error: Creator Tools errorcaused by: Failed to find manifest: Found argument '--message-format' which wasn't expected, or isn't valid in this contextUSAGE:    cargo locate-project [OPTIONS]For more information try --help <br> I cloned the project from main branch: https://github.com/dodorare/crossbow.git |
| 1. | aapt2 tool wrapper |<ul><li>[ X ] </li></ul>| https://github.com/dodorare/android-tools-rs/tree/main/src/aapt2 | ...|
| 2. | bundletool wrapper |<ul><li>[ X ] </li></ul>| https://github.com/dodorare/android-tools-rs/tree/main/src/bundletool | ...|
| 3. | Support AAB |<ul><li>[ X ] </li></ul>| https://github.com/dodorare/crossbow/blob/main/crossbundle/cli/src/commands/build/android.rs#L155 | ...|
| 4. | Support Macroquad engine |<ul><li>[ X ] </li></ul>|https://github.com/dodorare/crossbow/blob/main/crossbundle/cli/src/commands/build/mod.rs#L56 | ...|
| 5. | Enhance documentation |<ul><li>[ X ] </li></ul>| https://github.com/dodorare/crossbow/tree/main/crossbundle/cli#readme| Ambiguous deliverable. The wiki documentation is present, but can always be enhanced more.  |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

<i>This project is aimed more at Rust ecosystem rather than substrate ecosystem, but I can see how growing Rust will lead into growth of Substrate.</i>

The intended functionality has been delivered in principle. What is missing is the following: 
* extended documentation how to generate and sign AAB. 
* Test guide documentation on how to run existing tests.
* Building the application from docker throws error. Investigate the root cause for error and update code/documentation appropriately.

##### Error details

Docker build seems to fail due to a missing manifest when running the following command at repo root: 

```
docker run --rm -it -v "$(pwd)/:/src" -w /src/examples/macroquad-3d ghcr.io/dodorare/crossbundle crossbundle build android --quad --release
```
The error that I got was the following: 
```
WARNING: The requested image's platform (linux/amd64) does not match the detected host platform (linux/arm64/v8) and no specific platform was requested
error: Creator Tools error
caused by: Failed to find manifest: Found argument '--message-format' which wasn't expected, or isn't valid in this contextUSAGE:    cargo locate-project [OPTIONS]For more information try --help
```

