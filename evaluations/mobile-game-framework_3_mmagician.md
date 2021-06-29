# Evaluation

* **Status:** In progress
* **Application Document:** https://github.com/w3f/Open-Grants-Program/blob/master/applications/mobile-game-framework.md
* **Milestone:** 3
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                                                                                       | Accepted               | Link | Evaluation Notes |
|--------|---------------------------------------------------------------------------------------------------|------------------------|------|------------------|
|     1. | Simple interface of creation of Android and iOS projects                                          | <ul><li>[ ] </li></ul> |      |                  |
|     2. | Templates for Android and iOS projects to make it possible to create projects from it in one call | <ul><li>[ ] </li></ul> |      |                  |
|     3. | CLI and build utilities                                                                           | <ul><li>[x] </li></ul> |      |                  |
|     4. | Support of CD with Fastlane                                                                       | <ul><li>[ ] </li></ul> |      |                  |
|     5. | Test Substrate network with test data                                                             | <ul><li>[ ] </li></ul> |      |                  |
|     6. | Documentation, tutorials and example project                                                      | <ul><li>[x] </li></ul> |      |                  |

## General Notes

### Fastlane
From the wiki:
> Install our fastlane plugin with the next command fastlane add_plugin creator.
> Create a test project (you can use our template) or add Fastlane to your project.

I think these should be clarified a little. If I understood correctly, fastlane only supports per-project plugins, so the first step should creating a project and only then adding fastlane.

Also, when creating a new project with `fastlane-example` template, I get the following error now:

``` shell
Error: liquid: Cannot read file
  with:
    path=/Users/marcin/dev/fastlane-project-test/res/apple/icon.png

error: Creator Tools error
caused by: Command '"cargo" "generate" "--git" "https://github.com/creator-rs/creator-templates.git" "--name" "fastlane-project-test" "--branch" "fastlane-example"' had a non-zero exit code. Stdout:  Stderr:
```

### Android

Currently failing with:

``` shell
 = note: ld: error: unable to find library -lgcc
          clang-12: error: linker command failed with exit code 1 (use -v to see invocation)
```

### iOS

Currently failing with:

``` shell
  -- Check for working C compiler: /usr/local/opt/llvm/bin/clang - broken
```
and also:
```
  cannot find native shaderc library on system
```

Perhaps I'm missing some libraries?
