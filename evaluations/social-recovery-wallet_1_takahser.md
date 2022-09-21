# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/social_recovery_wallet.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/hypha-dao/hashed-wallet/blob/b79f9a85626bbfd3f00749c72a4fa60c753e3aa2/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/b79f9a85626bbfd3f00749c72a4fa60c753e3aa2/documentation/tutorial.md) <BR> [Code](https://github.com/hypha-dao/hashed-wallet/tree/b79f9a85626bbfd3f00749c72a4fa60c753e3aa2)  <BR> [Architecture Overview](https://github.com/hypha-dao/hashed-wallet/blob/b79f9a85626bbfd3f00749c72a4fa60c753e3aa2/documentation/architecture.md) | Inline comments are not omnipresent in all parts of the code base. But given the nature of this grant, I don't think it's neccessary. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/hypha-dao/hashed-wallet/blob/b79f9a85626bbfd3f00749c72a4fa60c753e3aa2/documentation/testing_guide.md) | See [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | App Binaries | <ul><li>[x] </li></ul> | [APK for Android](https://github.com/hypha-dao/hashed-wallet/releases/download/1.0.0_prerelease_M1/app-release.apk), [Android Testing Track (Permissioned)](https://play.google.com/apps/internaltest/4701631300800602818)  | iOS binary was not uploaded but can be built using flutter. The reason being, that it's not very helpful, since side loading is not common on iOS. Instead, Testflight is used (tested successfully). |
| 0e. | Video | <ul><li>[x] </li></ul> | [Video Presentation](https://github.com/hypha-dao/hashed-wallet/blob/v1.0.0_M1_00/documentation/videos/milestone_1_delivery.md) | Video, introducing and explaining the app. |
| 1. | Screen Designs | <ul><li>[x] </li></ul> | [Wireframes](https://github.com/hypha-dao/hashed-wallet/raw/v1.0.0_M1_00/documentation/Milestone%201%20Screens.pdf) | - |  
| 2. | Configure Recovery | <ul><li>[x] </li></ul> | [Flutter app code](https://github.com/hypha-dao/hashed-wallet/tree/b79f9a85626bbfd3f00749c72a4fa60c753e3aa2) |  Functionality for a user to add recovery configuration to their account is implemented. Identify a list of existing accounts to serve as guardians, and select threshold is implemented as well. |  



Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Testing Guide Feedback

- After updating docker, the unit tests pass. However, there is no information about which unit tests actually ran. This should be improved for M2.

    ```bash
    % docker build -t flutterdocker .
    [+] Building 353.6s (24/24) FINISHED                                                                                     
    => [internal] load build definition from Dockerfile                                                                0.0s
    => => transferring dockerfile: 37B                                                                                 0.0s
    => [internal] load .dockerignore                                                                                   0.0s
    => => transferring context: 2B                                                                                     0.0s
    => [internal] load metadata for docker.io/library/ubuntu:20.04                                                     3.2s
    => [builder  1/16] FROM docker.io/library/ubuntu:20.04@sha256:af5efa9c28de78b754777af9b4d850112cad01899a5d37d2617  0.0s
    => CACHED https://api.github.com/repos/hypha-dao/hashed-wallet/commits?per_page=1                                  0.0s
    => CACHED [builder  2/16] RUN ln -snf /usr/share/zoneinfo/Asia/Dubai /etc/localtime && echo Asia/Dubai > /etc/tim  0.0s
    => CACHED [builder  3/16] RUN apt update && apt install -y curl git unzip xz-utils zip libglu1-mesa openjdk-8-jdk  0.0s
    => CACHED [builder  4/16] RUN useradd -ms /bin/bash user                                                           0.0s
    => CACHED [builder  5/16] WORKDIR /home/user                                                                       0.0s
    => CACHED [builder  6/16] RUN mkdir -p Android/sdk                                                                 0.0s
    => CACHED [builder  7/16] RUN mkdir -p .android && touch .android/repositories.cfg                                 0.0s
    => CACHED [builder  8/16] RUN wget -O sdk-tools.zip https://dl.google.com/android/repository/sdk-tools-linux-4333  0.0s
    => CACHED [builder  9/16] RUN unzip sdk-tools.zip && rm sdk-tools.zip                                              0.0s
    => CACHED [builder 10/16] RUN mv tools Android/sdk/tools                                                           0.0s
    => CACHED [builder 11/16] RUN cd Android/sdk/tools/bin && yes | ./sdkmanager --licenses                            0.0s
    => CACHED [builder 12/16] RUN cd Android/sdk/tools/bin && ./sdkmanager "build-tools;29.0.2" "patcher;v4" "platfor  0.0s
    => [builder 13/16] RUN git clone https://github.com/flutter/flutter.git                                          100.2s
    => [builder 14/16] RUN flutter channel stable                                                                     87.1s 
    => [builder 15/16] RUN flutter upgrade                                                                            70.6s
    => [builder 16/16] RUN flutter doctor                                                                             16.6s 
    => [test 1/3] ADD https://api.github.com/repos/hypha-dao/hashed-wallet/commits?per_page=1 latest_commit            0.0s 
    => [test 2/3] RUN git clone https://github.com/hypha-dao/hashed-wallet.git                                        22.0s 
    => [test 3/3] RUN cd hashed-wallet && flutter test                                                                50.7s 
    => exporting to image                                                                                              3.2s 
    => => exporting layers                                                                                             3.2s 
    => => writing image sha256:cfde87760c72a7e34f4747daadd06b66751306b7587f89abddefb5b1a78a61f8                        0.0s 
    => => naming to docker.io/library/flutterdocker    
    ```

- the flutter build passes (`flutter run`)

- the app was tested on iOS, everything works, however, there were 2 bugs identified and reported to the grantee:

    - [Enter key phrase not working on iOS 14, iPhone 8](https://github.com/hypha-dao/hashed-wallet/issues/106)
    - [Loss of connection, does not recover (e.g. when resetting guardians)](https://github.com/hypha-dao/hashed-wallet/issues/107)

- the app was tested on an emulated Android device, everything works, however, there was 1 bug identified and reported to the grantee:

    - ["Import account" hangs on nickname](https://github.com/hypha-dao/hashed-wallet/issues/108)

- all 3 bugs mentioned above are not relevant to the acceptance of M1, since the base functionality still works
- the grantee commited himself to include fixes for all these bugs into the M2 delivery
- visual feedback: the "Active" labels in the "My Guardians" view look like buttons and are clickable, which might be misleading