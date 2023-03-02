# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/social_recovery_wallet.md
- **Milestone:** 3
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/tutorial.md), [Architecture](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/architecture.md), [Substrate Signing Request Specification](https://github.com/hypha-dao/hashed-wallet/wiki/Substrate-Signing-Request-Specification) | Inline comments are rather spare, but sufficient for this use case. |
| 0c. | Testing Guide | <ul><li>[x] </li></ul> | [Testing Guide](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/testing_guide.md) | see [Testing Guide Feedback](#testing-guide-feedback) |
| 0d. | App Binaries | <ul><li>[x] </li></ul> | [APK for Android](https://github.com/hypha-dao/hashed-wallet/releases/tag/1.0.0_M2), [Android Testing Track](https://play.google.com/apps/internaltest/4701631300800602818), [iOS Testflight App](https://testflight.apple.com/join/NKhGqqxE) | All delivered functions were successfully tested on iOS. |
| 0e. | Video | <ul><li>[x] </li></ul> | [Video Tutorial](https://github.com/hypha-dao/hashed-wallet/blob/c734af03d6a24e4e3d385a106a1ab385b3daacaf/documentation/videos/milestone_3_delivery.md) | - |
| 1. | QR Code Format  | <ul><li>[x] </li></ul> | [signing_request_repository.dart](https://github.com/hypha-dao/hashed-wallet/blob/b79d0a142f1566b04f6201683fa5b75e1d902693/lib/datasource/local/signing_request_repository.dart) | - |  
| 2. | Node Selector  | <ul><li>[x] </li></ul> | ['switch_network' package](https://github.com/hypha-dao/hashed-wallet/tree/fca1fcb28d54b2c59f990e0cb540e60229eb7002/lib/screens/profile_screens/switch_network) | - |  
| 3. | Sign and Broadcast  | <ul><li>[x] </li></ul> | ['scan' package](https://github.com/hypha-dao/hashed-wallet/tree/fca1fcb28d54b2c59f990e0cb540e60229eb7002/lib/screens/transfer/scan) | - |  
| 4. | Deployment  | <ul><li>[x] </li></ul> | [iOS](https://testflight.apple.com/join/NKhGqqxE), [Google Play store](https://play.google.com/apps/internaltest/4701631300800602818) | - |  

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

- during testing, there were a couple of bugs that were reported to the grantee
- the grantee created tickets and fixed the bugs promptly
- for deliverable 1-4 I'm currently waiting for the grantee to include the links

### Testing Guide Feedback

- test coverage sufficient
- unit tests pass:

    ```bash
    %   flutter test -r expanded
    Running "flutter pub get" in flutter_tools...
    Resolving dependencies in ../../development/flutter/packages/flutter_tools... (16.0s)
    _fe_analyzer_shared 50.0.0 (54.0.0 available)
    analyzer 5.2.0 (5.6.0 available)
    archive 3.3.2 (3.3.6 available)
    args 2.3.1 (2.4.0 available)
    built_value 8.4.2 (8.4.3 available)
    checked_yaml 2.0.1 (2.0.2 available)
    collection 1.17.0 (1.17.1 available)
    completion 1.0.0 (1.0.1 available)
    coverage 1.6.1 (1.6.3 available)
    dds 2.5.0 (2.7.5 available)
    dds_service_extensions 1.3.1 (1.3.3 available)
    devtools_shared 2.18.0 (2.21.1 available)
    dwds 16.0.2+1 (18.0.0 available)
    fixnum 1.0.1 (1.1.0 available)
    frontend_server_client 3.1.0 (3.2.0 available)
    intl 0.17.0 (0.18.0 available)
    io 1.0.3 (1.0.4 available)
    js 0.6.5 (0.6.7 available)
    json_annotation 4.7.0 (4.8.0 available)
    logging 1.1.0 (1.1.1 available)
    matcher 0.12.13 (0.12.14 available)
    meta 1.8.0 (1.9.0 available)
    mime 1.0.2 (1.0.4 available)
    multicast_dns 0.3.2+2 (0.3.2+3 available)
    native_stack_traces 0.5.2 (0.5.5 available)
    path 1.8.2 (1.8.3 available)
    petitparser 5.1.0 (5.2.0 available)
    source_maps 0.10.11 (0.10.12 available)
    sse 4.1.1 (4.1.2 available)
    test 1.22.0 (1.23.1 available)
    test_api 0.4.16 (0.4.18 available)
    test_core 0.4.20 (0.4.24 available)
    vm_service 9.4.0 (11.2.0 available)
    web_socket_channel 2.2.0 (2.3.0 available)
    webdriver 3.0.1 (3.0.2 available)
    Got dependencies in ../../development/flutter/packages/flutter_tools!
    "es": 16 untranslated message(s).
    "he": 116 untranslated message(s).
    "pt": 62 untranslated message(s).
    To see a detailed report, use the untranslated-messages-file 
    option in the l10n.yaml file:
    untranslated-messages-file: desiredFileName.txt
    <other option>: <other selection> 


    This will generate a JSON format file containing all messages that 
    need to be translated.
    Running "flutter pub get" in hashed-wallet...
    Resolving dependencies... (22.1s)
    _fe_analyzer_shared 38.0.0 (54.0.0 available)
    analyzer 3.4.1 (5.6.0 available)
    > archive 3.3.2 (was 3.1.11) (3.3.6 available)
    args 2.3.1 (2.4.0 available)
    > async 2.10.0 (was 2.8.2)
    bloc 8.1.0 (8.1.1 available)
    > boolean_selector 2.1.1 (was 2.1.0)
    build 2.3.0 (2.3.1 available)
    build_config 1.1.0 (1.1.1 available)
    build_daemon 3.1.0 (3.1.1 available)
    build_resolvers 2.0.9 (2.2.0 available)
    build_runner 2.2.0 (2.4.0 available)
    build_runner_core 7.2.3 (7.2.7 available)
    built_value 8.4.1 (8.4.3 available)
    cached_network_image 3.2.1 (3.2.3 available)
    cached_network_image_platform_interface 1.0.0 (2.0.0 available)
    cached_network_image_web 1.0.1 (1.0.2 available)
    carousel_slider 4.1.1 (4.2.1 available)
    > characters 1.2.1 (was 1.2.0) (1.3.0 available)
    checked_yaml 2.0.1 (2.0.2 available)
    > clock 1.1.1 (was 1.1.0)
    cloud_firestore 3.4.5 (4.4.3 available)
    cloud_firestore_platform_interface 5.7.2 (5.11.3 available)
    cloud_firestore_web 2.8.5 (3.3.3 available)
    code_builder 4.2.0 (4.4.0 available)
    > collection 1.17.0 (was 1.16.0) (1.17.1 available)
    convert 3.0.2 (3.1.1 available)
    > coverage 1.6.3 (was 1.2.0)
    cross_file 0.3.3+1 (0.3.3+4 available)
    > crypto 3.0.2 (was 3.0.1)
    dart_style 2.2.3 (2.2.4 available)
    > fake_async 1.3.1 (was 1.3.0)
    > file 6.1.4 (was 6.1.2)
    firebase_core 1.21.0 (2.7.0 available)
    > firebase_core_platform_interface 4.5.1 (was 4.5.0) (4.5.3 available)
    firebase_core_web 1.7.1 (2.2.1 available)
    > firebase_dynamic_links 4.3.8 (was 3.0.2) (5.0.15 available)
    + firebase_dynamic_links_platform_interface 0.2.3+13 (0.2.3+30 available)
    firebase_messaging 11.4.4 (14.2.5 available)
    firebase_messaging_platform_interface 3.5.4 (4.2.14 available)
    firebase_messaging_web 2.4.4 (3.2.15 available)
    firebase_storage 10.3.6 (11.0.14 available)
    firebase_storage_platform_interface 4.1.14 (4.1.30 available)
    firebase_storage_web 3.3.4 (3.3.23 available)
    fixnum 1.0.1 (1.1.0 available)
    flutter_bloc 8.1.1 (8.1.2 available)
    flutter_inappwebview 5.4.3+7 (5.7.2+3 available)
    flutter_launcher_icons 0.10.0 (0.12.0 available)
    flutter_native_splash 2.2.8 (2.2.18 available)
    flutter_plugin_android_lifecycle 2.0.7 (2.0.8 available)
    flutter_secure_storage 5.1.2 (8.0.0 available)
    flutter_secure_storage_linux 1.1.1 (1.1.3 available)
    flutter_secure_storage_macos 1.1.1 (3.0.0 available)
    flutter_secure_storage_platform_interface 1.0.0 (1.0.1 available)
    flutter_secure_storage_web 1.0.2 (1.1.1 available)
    flutter_secure_storage_windows 1.1.2 (2.0.0 available)
    flutter_svg 1.1.4 (2.0.2 available)
    frontend_server_client 2.1.3 (3.2.0 available)
    glob 2.1.0 (2.1.1 available)
    google_fonts 3.0.1 (4.0.3 available)
    graphs 2.1.0 (2.2.0 available)
    html 0.15.0 (0.15.1 available)
    http_parser 4.0.1 (4.0.2 available)
    i18n_extension 5.0.0 (8.0.0 available)
    image 3.2.0 (4.0.15 available)
    image_picker 0.8.5+3 (0.8.6+3 available)
    image_picker_android 0.8.5+2 (0.8.5+7 available)
    image_picker_for_web 2.1.8 (2.1.11 available)
    image_picker_ios 0.8.5+6 (0.8.6+9 available)
    image_picker_platform_interface 2.6.1 (2.6.3 available)
    intl 0.17.0 (0.18.0 available)
    io 1.0.3 (1.0.4 available)
    > js 0.6.5 (was 0.6.4) (0.6.7 available)
    json_annotation 4.6.0 (4.8.0 available)
    json_class 2.1.2+8 (2.1.5+2 available)
    json_schema2 2.0.2+8 (2.0.3+4 available)
    json_serializable 6.3.1 (6.6.1 available)
    lint 1.10.0 (2.1.1 available)
    local_auth 2.1.2 (2.1.5 available)
    local_auth_android 1.0.11 (1.0.19 available)
    local_auth_ios 1.0.9 (1.0.13 available)
    local_auth_platform_interface 1.0.4 (1.0.7 available)
    local_auth_windows 1.0.3 (1.0.6 available)
    logging 1.0.2 (1.1.1 available)
    lottie 1.4.1 (2.2.0 available)
    > matcher 0.12.13 (was 0.12.11) (0.12.14 available)
    > material_color_utilities 0.2.0 (was 0.1.4)
    > meta 1.8.0 (was 1.7.0) (1.9.0 available)
    mime 1.0.2 (1.0.4 available)
    mockito 5.3.0 (5.3.2 available)
    palette_generator 0.3.3+1 (0.3.3+2 available)
    > path 1.8.2 (was 1.8.1) (1.8.3 available)
    path_provider 2.0.11 (2.0.13 available)
    path_provider_android 2.0.19 (2.0.23 available)
    path_provider_linux 2.1.7 (2.1.9 available)
    path_provider_macos 2.0.6 (2.0.7 available)
    path_provider_platform_interface 2.0.4 (2.0.6 available)
    path_provider_windows 2.1.2 (2.1.4 available)
    permission_handler 10.0.0 (10.2.0 available)
    permission_handler_android 10.0.0 (10.2.0 available)
    permission_handler_apple 9.0.4 (9.0.7 available)
    permission_handler_platform_interface 3.7.0 (3.9.0 available)
    permission_handler_windows 0.1.0 (0.1.2 available)
    petitparser 5.0.0 (5.2.0 available)
    plugin_platform_interface 2.1.2 (2.1.4 available)
    pointycastle 3.6.1 (3.6.2 available)
    provider 6.0.3 (6.0.5 available)
    pub_semver 2.1.1 (2.1.3 available)
    qr 2.1.0 (3.0.1 available)
    quiver 3.1.0 (3.2.1 available)
    rest_client 2.1.5 (2.2.1+4 available)
    rxdart 0.27.5 (0.27.7 available)
    share 2.0.4 (discontinued)
    shared_preferences 2.0.15 (2.0.18 available)
    shared_preferences_android 2.0.12 (2.0.16 available)
    shared_preferences_linux 2.1.1 (2.1.4 available)
    shared_preferences_macos 2.0.4 (2.0.5 available)
    shared_preferences_platform_interface 2.0.0 (2.1.1 available)
    shared_preferences_web 2.0.4 (2.0.5 available)
    shared_preferences_windows 2.1.1 (2.1.4 available)
    shelf 1.3.2 (1.4.0 available)
    shelf_web_socket 1.0.2 (1.0.3 available)
    source_gen 1.2.2 (1.2.7 available)
    source_helper 1.3.2 (1.3.3 available)
    source_map_stack_trace 2.1.0 (2.1.1 available)
    source_maps 0.10.10 (0.10.12 available)
    > source_span 1.9.1 (was 1.8.2)
    sprintf 6.0.2 (7.0.0 available)
    sqflite 2.0.3+1 (2.2.5 available)
    sqflite_common 2.2.1+1 (2.4.2+2 available)
    > stack_trace 1.11.0 (was 1.10.0)
    > stream_channel 2.1.1 (was 2.1.0)
    stream_transform 2.0.0 (2.1.0 available)
    > string_scanner 1.2.0 (was 1.1.0)
    > sync_http 0.3.1 (was 0.3.0)
    synchronized 3.0.0+2 (3.0.1 available)
    > term_glyph 1.2.1 (was 1.2.0)
    > test 1.22.0 (was 1.21.1) (1.23.1 available)
    > test_api 0.4.16 (was 0.4.9) (0.4.18 available)
    > test_core 0.4.20 (was 0.4.13) (0.4.24 available)
    timeago 3.3.0 (3.4.0 available)
    timing 1.0.0 (1.0.1 available)
    > typed_data 1.3.1 (was 1.3.0)
    universal_io 2.0.4 (2.2.0 available)
    uuid 3.0.6 (3.0.7 available)
    > vector_math 2.1.4 (was 2.1.2)
    > vm_service 9.4.0 (was 8.2.2) (11.2.0 available)
    watcher 1.0.1 (1.0.2 available)
    web_socket_channel 2.2.0 (2.3.0 available)
    > webdriver 3.0.1 (was 3.0.0) (3.0.2 available)
    webkit_inspection_protocol 1.1.0 (1.2.0 available)
    webview_flutter 3.0.4 (4.0.5 available)
    webview_flutter_android 2.9.5 (3.3.1 available)
    webview_flutter_platform_interface 1.9.2 (2.0.2 available)
    webview_flutter_wkwebview 2.9.3 (3.1.1 available)
    win32 2.7.0 (4.1.1 available)
    xdg_directories 0.2.0+1 (1.0.0 available)
    xml 6.1.0 (6.2.2 available)
    yaon 1.0.1+3 (1.0.2+1 available)
    These packages are no longer being depended on:
    - charcode 1.3.1
    - firebase_remote_config 0.11.0+2
    - firebase_remote_config_platform_interface 0.3.0+7
    - flutter_lints 1.0.4
    - geoflutterfire 3.0.3
    - image_cropper 2.0.3
    - image_cropper_for_web 0.0.4
    - image_cropper_platform_interface 2.0.0
    - in_app_review 2.0.4
    - in_app_review_platform_interface 2.0.3
    - lints 1.0.1
    - url_launcher 6.1.5
    - url_launcher_android 6.0.17
    - url_launcher_ios 6.0.17
    - url_launcher_linux 3.0.1
    - url_launcher_macos 3.0.1
    - url_launcher_platform_interface 2.1.0
    - url_launcher_web 2.0.13
    - url_launcher_windows 3.0.1
    Changed 50 dependencies!
    00:00 +0: /Users/xxx/repos/hashed-wallet/test/user_input_number_formatter_test.dart: Input: 45 should return 45
    00:00 +1: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: mnemonic decode mnemonic
    00:00 +2: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: mnemonic decode mnemonic
    00:00 +3: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: mnemonic decode mnemonic
    00:00 +4: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: mnemonic decode mnemonic
    mnemonic: entire-poem-chief-response-act
    secret: c4e84c6bbb033f5bc3b672c33e5160deed018593bbe5f8d0383fad171b20f9d4
    secret2: c4e84c6bbb033f5bc3b672c33e5160deed018593bbe5f8d0383fad171b20f9d4
    00:00 +5: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: mnemonic decode mnemonic
    00:00 +6: /Users/xxx/repos/hashed-wallet/test/time_remaining_timer_test.dart: test time remaining
    00:00 +7: /Users/xxx/repos/hashed-wallet/test/time_remaining_timer_test.dart: test time remaining
    00:00 +8: /Users/xxx/repos/hashed-wallet/test/time_remaining_timer_test.dart: test time remaining
    00:00 +9: /Users/xxx/repos/hashed-wallet/test/account_service_test.dart: Test loadAccounts saveAccounts
    00:00 +10: /Users/xxx/repos/hashed-wallet/test/account_service_test.dart: Test loadAccounts saveAccounts
    00:00 +11: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +12: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +13: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +14: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +15: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +16: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +17: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +18: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +19: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +20: /Users/xxx/repos/hashed-wallet/test/mnemonic_test.dart: Seeds Global Passport Mnemonic Convert words from Seeds Global Passport
    00:00 +21: All tests passed!
    ```