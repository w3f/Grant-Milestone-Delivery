# Evaluation

- **Status:** In Progress 
- **Application Document:**  https://github.com/w3f/Open-Grants-Program/blob/master/applications/delmonicos.md
* **Milestone:** 3
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | :------: | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [charger-node](https://github.com/Delmonicos/charger-node/blob/milestone-2/LICENSE), [charging-management-platform](https://github.com/Delmonicos/charging-management-platform/blob/main/LICENSE.md), [frontend](https://github.com/Delmonicos/user-frontend/blob/master/LICENSE) | The front-end has no license file **Update 29.03.22:** Front-end now also has a license file |
| 0b. | Documentation | <ul><li>[ ] </li></ul> | []() | Documentation only for the previous milestones **31.03.22:** It general at least the readme files of the repos, should have some basic documentation |
| 0c. | Testing Guide | <ul><li>[ ] </li></ul> | [testing-guide.md](https://github.com/Delmonicos/charger-node/blob/milestone-3/Web3-Grant/milestone3/testing-guide.md) | No testing guide for milestone 3 **31.03.22:** They added a basic testing guide, but it doesn't explain how to run the node. No unit-test coverage, see contract (min. 70%)  |
| 0d. | Article/Tutorial |<ul><li>[ ] </li></ul> | [Article](https://github.com/Delmonicos/charger-node/blob/main/Web3-Grant/milestone2/Article.md) | Same article as for milestone 2 but they changed it a little bit |
| 1. | Substrate chain | <ul><li>[ ] </li></ul> | [charger-node](https://github.com/Delmonicos/charger-node) | No documentation on how to run it. Hasn't been updated in a long time |
| 2. | Admin Front-End | <ul><li>[ ] </li></ul> | [charging-management-platform](https://github.com/Delmonicos/charging-management-platform) | Wasn't updated in the last 7 month. No documentation on how to run it. See error below  |
| 3. | User Front-End | <ul><li>[ ] </li></ul> | [user-frontend](https://github.com/Delmonicos/user-frontend) | Barely any documentation |
| 4. | Docker | <ul><li>[ ] </li></ul> | [](https://github.com/Delmonicos/charger-node/blob/milestone-1/Dockerfile) |  |
| 5. | Demo | <ul><li>[x] </li></ul> | [Video](https://www.youtube.com/watch?v=AlJrFuhhVN4) | According to the contract |


## General Notes

Project wasn’t publicly updated since october 2021! Documentation, Testing Guide and Article only for milestone 1 and 2. 

**31.03.22:** They added a new testing guide

**Admin/User Front-end Error 04.04.22**

yarn run start

```
yarn run v1.22.18
$ react-scripts start
node:internal/modules/cjs/loader:488
      throw e;
      ^

Error [ERR_PACKAGE_PATH_NOT_EXPORTED]: Package subpath './lib/tokenize' is not defined by "exports" in /Users/davidhawig/source/evaluations/delmonicos/charging-management-platform/node_modules/postcss-safe-parser/node_modules/postcss/package.json
    at new NodeError (node:internal/errors:372:5)
    at throwExportsNotFound (node:internal/modules/esm/resolve:448:9)
    at packageExportsResolve (node:internal/modules/esm/resolve:727:3)
    at resolveExports (node:internal/modules/cjs/loader:482:36)
    at Function.Module._findPath (node:internal/modules/cjs/loader:522:31)
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:919:27)
    at Function.Module._load (node:internal/modules/cjs/loader:778:27)
    at Module.require (node:internal/modules/cjs/loader:999:19)
    at require (node:internal/modules/cjs/helpers:102:18)
    at Object.<anonymous> (/Users/davidhawig/source/evaluations/delmonicos/charging-management-platform/node_modules/postcss-safe-parser/lib/safe-parser.js:1:17) {
  code: 'ERR_PACKAGE_PATH_NOT_EXPORTED'
}

Node.js v17.8.0
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```

**Snyk Test** 
```
Testing /Users/davidhawig/source/evaluations/delmonicos/user-frontend...

Tested 1544 dependencies for known issues, found 47 issues, 234 vulnerable paths.


Issues to fix by upgrading:

  Upgrade react-scripts@4.0.3 to react-scripts@5.0.0 to fix
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-BROWSERSLIST-1090194] in browserslist@4.16.3
    introduced by react-scripts@4.0.3 > postcss-normalize@8.0.1 > browserslist@4.16.3 and 12 other path(s)
  ✗ Arbitrary Code Injection [Medium Severity][https://snyk.io/vuln/SNYK-JS-EJS-1049328] in ejs@2.7.4
    introduced by react-scripts@4.0.3 > workbox-webpack-plugin@5.1.4 > workbox-build@5.1.4 > @surma/rollup-plugin-off-main-thread@1.4.2 > ejs@2.7.4
  ✗ Prototype Pollution [Medium Severity][https://snyk.io/vuln/SNYK-JS-IMMER-1540542] in immer@8.0.1
    introduced by react-scripts@4.0.3 > react-dev-utils@11.0.4 > immer@8.0.1
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-PROMPTS-1729737] in prompts@2.4.0
    introduced by react-scripts@4.0.3 > prompts@2.4.0 and 2 other path(s)
  ✗ Remote Code Execution (RCE) [High Severity][https://snyk.io/vuln/SNYK-JS-SHELLQUOTE-1766506] in shell-quote@1.7.2
    introduced by react-scripts@4.0.3 > react-dev-utils@11.0.4 > shell-quote@1.7.2


Issues with no direct upgrade or patch:
  ✗ Regular Expression Denial of Service (ReDoS) [High Severity][https://snyk.io/vuln/SNYK-JS-ANSIHTML-1296849] in ansi-html@0.0.7
    introduced by react-scripts@4.0.3 > @pmmmwh/react-refresh-webpack-plugin@0.4.3 > ansi-html@0.0.7 and 1 other path(s)
  This issue was fixed in versions: 0.0.9
  ✗ Regular Expression Denial of Service (ReDoS) [High Severity][https://snyk.io/vuln/SNYK-JS-ANSIREGEX-1583908] in ansi-regex@4.1.0
    introduced by react-scripts@4.0.3 > eslint@7.20.0 > strip-ansi@6.0.0 > ansi-regex@5.0.0 and 2 other path(s)
  This issue was fixed in versions: 6.0.1, 5.0.1
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-COLORSTRING-1082939] in color-string@1.5.4
    introduced by react-scripts@4.0.3 > optimize-css-assets-webpack-plugin@5.0.4 > cssnano@4.1.10 > cssnano-preset-default@4.0.7 > postcss-colormin@4.0.3 > color@3.1.3 > color-string@1.5.4
  This issue was fixed in versions: 1.5.5
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-CSSWHAT-1298035] in css-what@3.4.2
    introduced by react-scripts@4.0.3 > @svgr/webpack@5.5.0 > @svgr/plugin-svgo@5.5.0 > svgo@1.3.2 > css-select@2.1.0 > css-what@3.4.2
  This issue was fixed in versions: 5.0.1
  ✗ Remote Memory Exposure [High Severity][https://snyk.io/vuln/SNYK-JS-DNSPACKET-1293563] in dns-packet@1.3.1
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > bonjour@3.5.0 > multicast-dns@6.2.3 > dns-packet@1.3.1
  This issue was fixed in versions: 1.3.4, 5.2.4
  ✗ Information Exposure [Medium Severity][https://snyk.io/vuln/SNYK-JS-FOLLOWREDIRECTS-2332181] in follow-redirects@1.13.2
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > http-proxy-middleware@0.19.1 > http-proxy@1.18.1 > follow-redirects@1.13.2
  This issue was fixed in versions: 1.14.7
  ✗ Information Exposure [Low Severity][https://snyk.io/vuln/SNYK-JS-FOLLOWREDIRECTS-2396346] in follow-redirects@1.13.2
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > http-proxy-middleware@0.19.1 > http-proxy@1.18.1 > follow-redirects@1.13.2
  This issue was fixed in versions: 1.14.8
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-GLOBPARENT-1016905] in glob-parent@3.1.0
    introduced by react-scripts@4.0.3 > eslint@7.20.0 > glob-parent@5.1.1 and 3 other path(s)
  This issue was fixed in versions: 5.1.2
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-HOSTEDGITINFO-1088355] in hosted-git-info@2.8.8
    introduced by react-scripts@4.0.3 > eslint-plugin-import@2.22.1 > read-pkg-up@2.0.0 > read-pkg@2.0.0 > normalize-package-data@2.5.0 > hosted-git-info@2.8.8
  This issue was fixed in versions: 3.0.8, 2.8.9
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-ISSVG-1085627] in is-svg@3.0.0
    introduced by react-scripts@4.0.3 > optimize-css-assets-webpack-plugin@5.0.4 > cssnano@4.1.10 > cssnano-preset-default@4.0.7 > postcss-svgo@4.0.2 > is-svg@3.0.0
  This issue was fixed in versions: 4.2.2
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-ISSVG-1243891] in is-svg@3.0.0
    introduced by react-scripts@4.0.3 > optimize-css-assets-webpack-plugin@5.0.4 > cssnano@4.1.10 > cssnano-preset-default@4.0.7 > postcss-svgo@4.0.2 > is-svg@3.0.0
  This issue was fixed in versions: 4.3.0
  ✗ Reverse Tabnabbing [Medium Severity][https://snyk.io/vuln/SNYK-JS-ISTANBULREPORTS-2328088] in istanbul-reports@3.0.2
    introduced by react-scripts@4.0.3 > jest@26.6.0 > @jest/core@26.6.3 > @jest/reporters@26.6.2 > istanbul-reports@3.0.2
  This issue was fixed in versions: 3.1.3
  ✗ Prototype Pollution [High Severity][https://snyk.io/vuln/SNYK-JS-JSONSCHEMA-1920922] in json-schema@0.2.3
    introduced by react-scripts@4.0.3 > jest@26.6.0 > @jest/core@26.6.3 > jest-config@26.6.3 > jest-environment-jsdom@26.6.2 > jsdom@16.4.0 > request@2.88.2 > http-signature@1.2.0 > jsprim@1.4.1 > json-schema@0.2.3
  This issue was fixed in versions: 0.4.0
  ✗ Command Injection [High Severity][https://snyk.io/vuln/SNYK-JS-LODASHTEMPLATE-1088054] in lodash.template@4.5.0
    introduced by react-scripts@4.0.3 > postcss-preset-env@6.7.0 > postcss-initial@3.0.2 > lodash.template@4.5.0 and 1 other path(s)
  No upgrade or patch available
  ✗ Prototype Pollution [Low Severity][https://snyk.io/vuln/SNYK-JS-MINIMIST-2429795] in minimist@1.2.5
    introduced by react-scripts@4.0.3 > @babel/core@7.12.3 > json5@2.2.0 > minimist@1.2.5 and 5 other path(s)
  This issue was fixed in versions: 1.2.6
  ✗ Information Exposure [Medium Severity][https://snyk.io/vuln/SNYK-JS-NANOID-2332193] in nanoid@3.1.20
    introduced by react-scripts@4.0.3 > postcss-safe-parser@5.0.2 > postcss@8.2.6 > nanoid@3.1.20
  This issue was fixed in versions: 3.1.31
  ✗ Information Exposure [Medium Severity][https://snyk.io/vuln/SNYK-JS-NODEFETCH-2342118] in node-fetch@2.6.1
    introduced by @polkadot/api@5.4.1 > @polkadot/api-derive@5.4.1 > @polkadot/api@5.4.1 > @polkadot/rpc-core@5.4.1 > @polkadot/rpc-provider@5.4.1 > @polkadot/x-fetch@7.1.2 > node-fetch@2.6.1
  This issue was fixed in versions: 2.6.7, 3.1.1
  ✗ Open Redirect [Medium Severity][https://snyk.io/vuln/SNYK-JS-NODEFORGE-2330875] in node-forge@0.10.0
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > selfsigned@1.10.8 > node-forge@0.10.0
  This issue was fixed in versions: 1.0.0
  ✗ Prototype Pollution [Medium Severity][https://snyk.io/vuln/SNYK-JS-NODEFORGE-2331908] in node-forge@0.10.0
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > selfsigned@1.10.8 > node-forge@0.10.0
  This issue was fixed in versions: 1.0.0
  ✗ Improper Verification of Cryptographic Signature [Medium Severity][https://snyk.io/vuln/SNYK-JS-NODEFORGE-2430337] in node-forge@0.10.0
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > selfsigned@1.10.8 > node-forge@0.10.0
  This issue was fixed in versions: 1.3.0
  ✗ Improper Verification of Cryptographic Signature [High Severity][https://snyk.io/vuln/SNYK-JS-NODEFORGE-2430339] in node-forge@0.10.0
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > selfsigned@1.10.8 > node-forge@0.10.0
  This issue was fixed in versions: 1.3.0
  ✗ Improper Verification of Cryptographic Signature [Medium Severity][https://snyk.io/vuln/SNYK-JS-NODEFORGE-2430341] in node-forge@0.10.0
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > selfsigned@1.10.8 > node-forge@0.10.0
  This issue was fixed in versions: 1.3.0
  ✗ Command Injection [Medium Severity][https://snyk.io/vuln/SNYK-JS-NODENOTIFIER-1035794] in node-notifier@8.0.1
    introduced by react-scripts@4.0.3 > jest@26.6.0 > @jest/core@26.6.3 > @jest/reporters@26.6.2 > node-notifier@8.0.1
  This issue was fixed in versions: 5.4.5, 8.0.2, 9.0.1
  ✗ Regular Expression Denial of Service (ReDoS) [High Severity][https://snyk.io/vuln/SNYK-JS-NTHCHECK-1586032] in nth-check@1.0.2
    introduced by react-scripts@4.0.3 > @svgr/webpack@5.5.0 > @svgr/plugin-svgo@5.5.0 > svgo@1.3.2 > css-select@2.1.0 > nth-check@1.0.2
  This issue was fixed in versions: 2.0.1
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-PATHPARSE-1077067] in path-parse@1.0.6
    introduced by react-scripts@4.0.3 > resolve@1.18.1 > path-parse@1.0.6 and 1 other path(s)
  This issue was fixed in versions: 1.0.7
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-POSTCSS-1090595] in postcss@7.0.21
    introduced by react-scripts@4.0.3 > css-loader@4.3.0 > postcss@7.0.35 and 77 other path(s)
  This issue was fixed in versions: 7.0.36, 8.2.10
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-POSTCSS-1255640] in postcss@7.0.21
    introduced by react-scripts@4.0.3 > css-loader@4.3.0 > postcss@7.0.35 and 77 other path(s)
  This issue was fixed in versions: 8.2.13, 7.0.36
  ✗ Regular Expression Denial of Service (ReDoS) [High Severity][https://snyk.io/vuln/SNYK-JS-SSRI-1246392] in ssri@6.0.1
    introduced by react-scripts@4.0.3 > webpack@4.44.2 > terser-webpack-plugin@1.4.5 > cacache@12.0.4 > ssri@6.0.1
  This issue was fixed in versions: 6.0.2, 7.1.1, 8.0.1
  ✗ Arbitrary File Overwrite [High Severity][https://snyk.io/vuln/SNYK-JS-TAR-1536528] in tar@6.1.0
    introduced by react-scripts@4.0.3 > terser-webpack-plugin@4.2.3 > cacache@15.0.5 > tar@6.1.0
  This issue was fixed in versions: 3.2.3, 4.4.15, 5.0.7, 6.1.2
  ✗ Arbitrary File Overwrite [High Severity][https://snyk.io/vuln/SNYK-JS-TAR-1536531] in tar@6.1.0
    introduced by react-scripts@4.0.3 > terser-webpack-plugin@4.2.3 > cacache@15.0.5 > tar@6.1.0
  This issue was fixed in versions: 3.2.2, 4.4.14, 5.0.6, 6.1.1
  ✗ Regular Expression Denial of Service (ReDoS) [Low Severity][https://snyk.io/vuln/SNYK-JS-TAR-1536758] in tar@6.1.0
    introduced by react-scripts@4.0.3 > terser-webpack-plugin@4.2.3 > cacache@15.0.5 > tar@6.1.0
  This issue was fixed in versions: 6.1.4, 5.0.8, 4.4.16
  ✗ Arbitrary File Write [High Severity][https://snyk.io/vuln/SNYK-JS-TAR-1579147] in tar@6.1.0
    introduced by react-scripts@4.0.3 > terser-webpack-plugin@4.2.3 > cacache@15.0.5 > tar@6.1.0
  This issue was fixed in versions: 6.1.7, 5.0.8, 4.4.16
  ✗ Arbitrary File Write [High Severity][https://snyk.io/vuln/SNYK-JS-TAR-1579152] in tar@6.1.0
    introduced by react-scripts@4.0.3 > terser-webpack-plugin@4.2.3 > cacache@15.0.5 > tar@6.1.0
  This issue was fixed in versions: 6.1.9, 5.0.10, 4.4.18
  ✗ Arbitrary File Write [High Severity][https://snyk.io/vuln/SNYK-JS-TAR-1579155] in tar@6.1.0
    introduced by react-scripts@4.0.3 > terser-webpack-plugin@4.2.3 > cacache@15.0.5 > tar@6.1.0
  This issue was fixed in versions: 6.1.9, 5.0.10, 4.4.18
  ✗ Regular Expression Denial of Service (ReDoS) [High Severity][https://snyk.io/vuln/SNYK-JS-TMPL-1583443] in tmpl@1.0.4
    introduced by react-scripts@4.0.3 > babel-jest@26.6.3 > @jest/transform@26.6.2 > jest-haste-map@26.6.2 > sane@4.1.0 > walker@1.0.7 > makeerror@1.0.11 > tmpl@1.0.4
  This issue was fixed in versions: 1.0.5
  ✗ Prototype Pollution [High Severity][https://snyk.io/vuln/SNYK-JS-UNSETVALUE-2400660] in unset-value@1.0.0
    introduced by react-scripts@4.0.3 > babel-jest@26.6.3 > @jest/transform@26.6.2 > jest-haste-map@26.6.2 > sane@4.1.0 > anymatch@2.0.0 > micromatch@3.1.10 > braces@2.3.2 > snapdragon@0.8.2 > base@0.11.2 > cache-base@1.0.1 > unset-value@1.0.0
  This issue was fixed in versions: 2.0.1
  ✗ Open Redirect [Medium Severity][https://snyk.io/vuln/SNYK-JS-URLPARSE-1533425] in url-parse@1.5.1
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > sockjs-client@1.5.0 > url-parse@1.5.1 and 1 other path(s)
  This issue was fixed in versions: 1.5.2
  ✗ Access Restriction Bypass [Medium Severity][https://snyk.io/vuln/SNYK-JS-URLPARSE-2401205] in url-parse@1.5.1
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > sockjs-client@1.5.0 > url-parse@1.5.1 and 1 other path(s)
  This issue was fixed in versions: 1.5.6
  ✗ Authorization Bypass [Medium Severity][https://snyk.io/vuln/SNYK-JS-URLPARSE-2407759] in url-parse@1.5.1
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > sockjs-client@1.5.0 > url-parse@1.5.1 and 1 other path(s)
  This issue was fixed in versions: 1.5.8
  ✗ Improper Input Validation [High Severity][https://snyk.io/vuln/SNYK-JS-URLPARSE-2407770] in url-parse@1.5.1
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > sockjs-client@1.5.0 > url-parse@1.5.1 and 1 other path(s)
  This issue was fixed in versions: 1.5.9
  ✗ Authorization Bypass Through User-Controlled Key [Medium Severity][https://snyk.io/vuln/SNYK-JS-URLPARSE-2412697] in url-parse@1.5.1
    introduced by react-scripts@4.0.3 > webpack-dev-server@3.11.1 > sockjs-client@1.5.0 > url-parse@1.5.1 and 1 other path(s)
  This issue was fixed in versions: 1.5.7
  ✗ Regular Expression Denial of Service (ReDoS) [Medium Severity][https://snyk.io/vuln/SNYK-JS-WS-1296835] in ws@6.2.1
    introduced by react-scripts@4.0.3 > jest@26.6.0 > @jest/core@26.6.3 > jest-config@26.6.3 > jest-environment-jsdom@26.6.2 > jsdom@16.4.0 > ws@7.4.3 and 1 other path(s)
  This issue was fixed in versions: 7.4.6, 6.2.2, 5.2.3
  ```