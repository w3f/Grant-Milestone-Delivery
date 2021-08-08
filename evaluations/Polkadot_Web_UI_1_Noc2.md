# Evaluation

* **Status:** In progress 
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadot_Web_UI.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul>| [Apache License 2.0 Web-identicon](https://github.com/RidOne-technologies/polkadot-web-identicon/blob/main/license), [Apache License 2.0 Angular](https://github.com/RidOne-technologies/polkadot-angular-identicon/blob/main/licence)| Correct license | 
| 0b. | Documentation | <ul><li>[ ] </li></ul>|[polkadot-web-identicon readme](https://github.com/RidOne-technologies/polkadot-web-identicon/tree/main/dist/polkadot-web-identicon) | Very basic readme, no “ inline documentation of the code and a basic tutorial that explains how a user can use the Web or Angular Identicon for its polkadot.js library based application” as far as I can see it | 
| 0c. | Testing guide | <ul><li>[ ] </li></ul>|[README](https://github.com/RidOne-technologies/polkadot-web-identicon/blob/main/dist/polkadot-web-identicon/README.md#testing)| No explanation how to install ng  | 
| 0d. | Article/Tutorial |<ul><li>[ ] </li></ul>|[ ]()|  No article or tutorial | 
| 1. | Angular_Identicon | <ul><li>[ ] </li></ul>|[polkadot-angular-identicon](https://github.com/RidOne-technologies/polkadot-angular-identicon)| See below error | 
| 2. | Web_Identicon | <ul><li>[ ] </li></ul>|[polkadot-web-identicon](https://github.com/RidOne-technologies/polkadot-web-identicon)| See below error | 
| 3. | publishing into NPM registry | <ul><li>[ ] </li></ul>| [NPM angular-identicon](https://www.npmjs.com/package/polkadot-angular-identicon)| - | 
| 4. | Documentation/ Tutorials | <ul><li>[ ] </li></ul>|[ ]()| - | 

## General Notes

**Error polkadot-web-identicon**

<pre><font color="#12488B"><b>/polkadot-web-identicon</b></font>$ ng build
<font color="#C01C28"><b>An unhandled exception occurred: Cannot find module &apos;@angular-devkit/build-angular/package.json&apos;</b></font>
</pre>

**Error polkadot-angular-identicon**

<pre>ng build polkadot-angular-identicon --prod
<font color="#C01C28"><b>An unhandled exception occurred: Cannot find module &apos;@angular-devkit/build-angular/package.json&apos;</b></font>
<font color="#C01C28"><b>Require stack:</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/node_modules/@angular-devkit/architect/node/node-modules-architect-host.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/node_modules/@angular-devkit/architect/node/index.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/models/architect-command.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/commands/build-impl.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/node_modules/@angular-devkit/schematics/tools/export-ref.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/node_modules/@angular-devkit/schematics/tools/index.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/utilities/json-schema.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/models/command-runner.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/lib/cli/index.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/lib/init.js</b></font>
<font color="#C01C28"><b>- /home/david/.nvm/versions/node/v14.17.4/lib/node_modules/@angular/cli/bin/ng</b></font>
<font color="#C01C28"><b>See &quot;/tmp/ng-RpUd92/angular-errors.log&quot; for further details.</b></font>
<font color="#26A269"><b>david@noc2</b></font>:<font color="#12488B"><b>~/source/web3/evaluation/RidOne/polkadot-angular-identicon</b></font>$ npm install --save-dev @angular-devkit/build-angular
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> har-validator@5.1.5: this library is no longer supported
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> chokidar@2.1.8: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> querystring@0.2.0: The querystring API is considered Legacy. new code should use the URLSearchParams API instead.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> uuid@3.4.0: Please upgrade  to version 7 or higher.  Older versions may use Math.random() in certain circumstances, which is known to be problematic.  See https://v8.dev/blog/math-random for details.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#A2734C"><font color="#171421">WARN</font></span> <font color="#A347BA">deprecated</font> tslint@6.1.3: TSLint has been deprecated in favor of ESLint. Please see https://github.com/palantir/tslint/issues/4534 for more information.

added 1633 packages, and audited 1634 packages in 31s

107 packages are looking for funding
  run `npm fund` for details

8 <font color="#A2734C"><b>moderate</b></font> severity vulnerabilities

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
<font color="#26A269"><b>david@noc2</b></font>:<font color="#12488B"><b>~/source/web3/evaluation/RidOne/polkadot-angular-identicon</b></font>$ ng build polkadot-angular-identicon --prod
<font color="#A2734C">Your global Angular CLI version (12.2.0) is greater than your local version (11.2.14). The local Angular CLI version is used.</font>

<font color="#A2734C">To disable this warning use &quot;ng config -g cli.warnings.versionMismatch false&quot;.</font>
<font color="#12488B">Building Angular Package</font>

<font color="#D0CFCC">------------------------------------------------------------------------------</font>
<font color="#D0CFCC">Building entry point &apos;polkadot-angular-identicon&apos;</font>
<font color="#D0CFCC">------------------------------------------------------------------------------</font>
<font color="#C01C28">✖</font> Compiling TypeScript sources through NGC
<font color="#C01C28"><b>ERROR: </b></font><font color="#33C7DE"><b>projects/polkadot-angular-identicon/src/lib/render-helper.ts</b></font>:<font color="#E9AD0C">1</font>:<font color="#E9AD0C">45</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>1</b></font></span> import { polkadotIcon, beachballIcon } from &apos;@polkadot/ui-shared/icons&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>
<font color="#33C7DE"><b>projects/polkadot-angular-identicon/src/lib/render-helper.ts</b></font>:<font color="#E9AD0C">2</font>:<font color="#E9AD0C">24</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons/types&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>2</b></font></span> import { Circle } from &apos;@polkadot/ui-shared/icons/types&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>
<font color="#33C7DE"><b>projects/polkadot-angular-identicon/src/lib/render-helper.ts</b></font>:<font color="#E9AD0C">3</font>:<font color="#E9AD0C">28</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;jdenticon&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>3</b></font></span> import * as jdenticon from &apos;jdenticon&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                           ~~~~~~~~~~~</font>

<font color="#C01C28"><b>An unhandled exception occurred: </b></font><font color="#33C7DE"><b>projects/polkadot-angular-identicon/src/lib/render-helper.ts</b></font>:<font color="#E9AD0C">1</font>:<font color="#E9AD0C">45</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>1</b></font></span> import { polkadotIcon, beachballIcon } from &apos;@polkadot/ui-shared/icons&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>
<font color="#33C7DE"><b>projects/polkadot-angular-identicon/src/lib/render-helper.ts</b></font>:<font color="#E9AD0C">2</font>:<font color="#E9AD0C">24</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons/types&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>2</b></font></span> import { Circle } from &apos;@polkadot/ui-shared/icons/types&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>
<font color="#33C7DE"><b>projects/polkadot-angular-identicon/src/lib/render-helper.ts</b></font>:<font color="#E9AD0C">3</font>:<font color="#E9AD0C">28</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;jdenticon&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>3</b></font></span> import * as jdenticon from &apos;jdenticon&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                           ~~~~~~~~~~~</font>

<font color="#C01C28"><b>See &quot;/tmp/ng-bKoqG0/angular-errors.log&quot; for further details.</b></font>
</pre>