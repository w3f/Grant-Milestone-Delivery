# Evaluation

- **Status:** In Progress/Accepted/Rejected
- **PR Link:** https://github.com/w3f/Open-Grants-Program/pull/182 
- **Milestone:** 1
- **Kusama Identity:** None
- **Previously successfully merged evaluation:** None

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0 | Gluon Website and Web Portal Framework | <ul><li>[ ] </li></ul> | website: http://www.gluonwallet.com website <br>website repo: [github](https://github.com/tearust/gluon-website) | Website looks ok. Some subjective feedback about the appearence: <ul><li>first picture looks trashy and the big bitcoins don't match the context as we're in the polkadot ecosystem.</li><li>Some of the images could be scaled down a bit so that the font size is closer to the text font-size (e.g. the wallet comparison table)</li><li>The image that instructs how to use blog links in the document tab is more confusing than helpful</li></ul> Building from the repo (by running `./build_docker.sh`) fails on my system for two reasons: <br/>`Error: Cannot find module '@vue/cli-plugin-babel'` and <br/>`Building wheel for cryptography (PEP 517): finished with status 'error'`<br/>I can provide the full log if that would be helpful for you.|
| 1 | Milestone1 feature list and test instruction | <ul><li>[ ] </li></ul> | Instructions: [github](https://github.com/tearust/gluon-app/blob/milestone1/readme.md)  <br>Video demo: [youtube video](https://www.youtube.com/watch?v=wV4Q1-wTvFE) | The walkthrough video is concise and clear. <br/>There is no list of features anywhere but a step by step walkthrough that covers all current features. |
| 2 | Test docker-compose | <ul><li>[ ] </li></ul> | gluon-app [docker-compose.yml](https://github.com/tearust/gluon-app/blob/main/docker-compose.yml) | The web app "gluon-wallet" can be built and works ok. <br/>Building the mobile app for android does not work for me (see [build error below](#android-build-error)).|
| 3 | Source code on GitHub | <ul><li>[ ] </li></ul> | gluon-app: [github](https://github.com/tearust/gluon-app/tree/milestone1) <br>gluon-pellet: [github](https://github.com/tearust/gluon-pallet/tree/milestone-1) <br>tea-layer1: [github](https://github.com/tearust/tea-layer1/tree/milestone-1) | |


Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

The LICENSE files in gluon-website, gluon-app, gluon-pallet are missing copyright year and owner (line 189 each). 

I struggled building the website and the mobile app. The readme files are sketchy and sometimes incomplete. E.g. there are no instructions in `gluon-app/mobile/readme.md` how to build the mobile app for android at the moment.


## Appendix
### android build error
<details>
```
$ npm run android

> mobile@0.0.1 android
> NODE_OPTIONS=--max_old_space_size=8192 react-native run-android

info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
Jetifier found 1208 file(s) to forward-jetify. Using 16 workers...
info JS server already running.
info Installing the app...

Deprecated Gradle features were used in this build, making it incompatible with Gradle 7.0.
Use '--warning-mode all' to show the individual deprecation warnings.
See https://docs.gradle.org/6.5/userguide/command_line_interface.html#sec:command_line_warnings

FAILURE: Build failed with an exception.

* What went wrong:
Could not determine the dependencies of task ':app:compileDebugJavaWithJavac'.
> Could not resolve all task dependencies for configuration ':app:debugCompileClasspath'.
   > Could not resolve project :react-native-camera.
     Required by:
         project :app
      > The consumer was configured to find an API of a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug'. However we cannot choose between the following variants of project :react-native-camera:
          - generalDebugApiElements
          - mlkitDebugApiElements
        All of them match the consumer attributes:
          - Variant 'generalDebugApiElements' capability mobile:react-native-camera:unspecified declares an API of a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug':
              - Unmatched attributes:
                  - Provides attribute 'com.android.build.api.attributes.VariantAttr' with value 'generalDebug' but the consumer didn't ask for it
                  - Provides attribute 'react-native-camera' with value 'general' but the consumer didn't ask for it
          - Variant 'mlkitDebugApiElements' capability mobile:react-native-camera:unspecified declares an API of a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug':
              - Unmatched attributes:
                  - Provides attribute 'com.android.build.api.attributes.VariantAttr' with value 'mlkitDebug' but the consumer didn't ask for it
                  - Provides attribute 'react-native-camera' with value 'mlkit' but the consumer didn't ask for it
        The following variants were also considered but didn't match the requested attributes:
          - Variant 'generalReleaseApiElements' capability mobile:react-native-camera:unspecified declares an API of a component:
              - Incompatible because this component declares a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'release' and the consumer needed a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug'
          - Variant 'generalReleaseRuntimeElements' capability mobile:react-native-camera:unspecified declares a runtime of a component:
              - Incompatible because this component declares a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'release' and the consumer needed a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug'
          - Variant 'mlkitReleaseApiElements' capability mobile:react-native-camera:unspecified declares an API of a component:
              - Incompatible because this component declares a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'release' and the consumer needed a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug'
          - Variant 'mlkitReleaseRuntimeElements' capability mobile:react-native-camera:unspecified declares a runtime of a component:
              - Incompatible because this component declares a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'release' and the consumer needed a component, as well as attribute 'com.android.build.api.attributes.BuildTypeAttr' with value 'debug'

* Try:
Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output. Run with --scan to get full insights.

* Get more help at https://help.gradle.org

BUILD FAILED in 2s

error Failed to install the app. Make sure you have the Android development environment set up: https://reactnative.dev/docs/environment-setup. Run CLI with --verbose flag for more details.
Error: Command failed: ./gradlew app:installDebug -PreactNativeDevServerPort=8081

npm ERR! code 1
npm ERR! path /home/felix/web3/eval/gluon/milestone/1/testground/gluon-app/mobile
npm ERR! command failed
npm ERR! command sh -c NODE_OPTIONS=--max_old_space_size=8192 react-native run-android

npm ERR! A complete log of this run can be found in:
npm ERR!     /home/felix/.npm/_logs/2021-03-25T14_07_28_643Z-debug.log
```
</details>