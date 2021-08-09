# Evaluation

* **Status:** In progress 
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/Polkadot_Web_UI.md
* **Milestone:** 1
* **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
* **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 0a. | Apache License 2.0 | <ul><li>[x] </li></ul>| [Apache License 2.0 Web-identicon](https://github.com/RidOne-technologies/polkadot-web-identicon/blob/main/license), [Apache License 2.0 Angular](https://github.com/RidOne-technologies/polkadot-angular-identicon/blob/main/licence)| Correct license | 
| 0b. | Documentation | <ul><li>[ ] </li></ul>|[polkadot-angular-identicon](https://github.com/RidOne-technologies/polkadot-angular-identicon), [polkadot-web-identicon](https://github.com/RidOne-technologies/polkadot-web-identicon) | Initially very basic readme. The readme was improved. Still no inline documentation  | 
| 0c. | Testing guide | <ul><li>[ ] </li></ul>| [Testing guide](https://github.com/RidOne-technologies/polkadot-angular-identicon/blob/main/README.md) | No explanation on how to run the unit tests. "The code will have unit-test coverage (min. 70%) to ensure functionality and robustness. In the guide we will describe how to run these tests" | 
| 0d. | Article/Tutorial |<ul><li>[ ] </li></ul>| [Polkadot Angular Identicon tutorial](https://dev.to/morgueye4/how-to-use-polkadot-angular-identicon-4659) / [Polkadot Web Identicon tutorial](https://dev.to/morgueye4/how-to-use-polkadot-web-identicon-2344) | Initially no article or tutorial, but this was fixed. However the current tutorial says "npm i polkadot-angular-dependency" instead of npm i polkadot-angular-identicon (see errors below) | 
| 1. | Angular_Identicon | <ul><li>[ ] </li></ul>|[polkadot-angular-identicon](https://github.com/RidOne-technologies/polkadot-angular-identicon)| See below error | 
| 2. | Web_Identicon | <ul><li>[ ] </li></ul>|[polkadot-web-identicon](https://github.com/RidOne-technologies/polkadot-web-identicon)| See below error | 
| 3. | publishing into NPM registry | <ul><li>[x] </li></ul>| [Angular Identicon npm package](https://www.npmjs.com/package/polkadot-angular-identicon) / [Web Identicon npm package](https://www.npmjs.com/package/polkadot-web-identicon) | Published but doesn't install | 
| 4. | Documentation/ Tutorials | <ul><li>[ ] </li></ul>| [ ]()| - | 

## General Notes

**Error 09.08.21**


<pre><font color="#12488B"><b>RidOne/pai</b></font>$ npm i polkadot-angular-dependency
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">code</font> E404
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font> Not Found - GET https://registry.npmjs.org/polkadot-angular-dependency - Not found
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font> 
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font>  &apos;polkadot-angular-dependency@*&apos; is not in the npm registry.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font> You should bug the author to publish it (or use the name yourself!)
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font> 
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font> Note that you can also install from a
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">404</font> tarball, folder, http url, or git url.

<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> A complete log of this run can be found in:
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span>     /home/david/.npm/_logs/2021-08-09T10_12_30_919Z-debug.log
<font color="#26A269"><b>david@noc2</b></font>:<font color="#12488B"><b>~/source/web3/evaluation/RidOne/pai</b></font>$ npm i polkadot-angular-identicon
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">code</font> ERESOLVE
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">ERESOLVE</font> unable to resolve dependency tree
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> 
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> While resolving: <b>pai</b>@<b>0.0.0</b>
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> Found: <b>@angular/common</b>@<b>12.2.0</b>
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> node_modules/@angular/common
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span>   <b>@angular/common</b>@&quot;<b>~12.2.0</b>&quot; from the root project
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> 
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> Could not resolve dependency:
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> <font color="#A347BA">peer</font> <b>@angular/common</b>@&quot;<b>^11.2.9</b>&quot; from <b>polkadot-angular-identicon</b>@<b>1.0.2-rc1</b>
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> node_modules/polkadot-angular-identicon
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span>   <b>polkadot-angular-identicon</b>@&quot;<b>*</b>&quot; from the root project
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> 
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> Fix the upstream dependency conflict, or retry
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> this command with --force, or --legacy-peer-deps
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> to accept an incorrect (and potentially broken) dependency resolution.
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> 
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> See /home/david/.npm/eresolve-report.txt for a full report.

<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span> A complete log of this run can be found in:
<span style="background-color:#171421"><font color="#D0CFCC">npm</font></span> <span style="background-color:#171421"><font color="#C01C28">ERR!</font></span>     /home/david/.npm/_logs/2021-08-09T10_17_59_456Z-debug.log
</pre>


<pre><font color="#12488B"><b>polkadot-angular-identicon</b></font>$ ng test
<font color="#A2734C">Your global Angular CLI version (12.2.0) is greater than your local version (11.2.14). The local Angular CLI version is used.</font>

<font color="#A2734C">To disable this warning use &quot;ng config -g cli.warnings.versionMismatch false&quot;.</font>
Compiling @angular/core/testing : es2015 as esm2015
Compiling @angular/platform-browser-dynamic : es2015 as esm2015
Compiling @angular/platform-browser/testing : es2015 as esm2015
Compiling @angular/compiler/testing : es2015 as esm2015
Compiling @angular/platform-browser-dynamic/testing : es2015 as esm2015
<font color="#2AA1B3">⠋</font> Generating browser application bundles...<font color="#A2734C">09 08 2021 14:09:34.827:WARN [karma]: </font>No captured browser, open http://localhost:9876/
<font color="#26A269">09 08 2021 14:09:34.832:INFO [karma-server]: </font>Karma v6.1.2 server started at http://localhost:9876/
<font color="#26A269">09 08 2021 14:09:34.832:INFO [launcher]: </font>Launching browsers Chrome with concurrency unlimited
<font color="#2AA1B3">⠙</font> Generating browser application bundles (phase: building)...<font color="#26A269">09 08 2021 14:09:34.835:INFO [launcher]: </font>Starting browser Chrome
<font color="#F66151">09 08 2021 14:09:34.836:ERROR [launcher]: </font>No binary for Chrome browser on your platform.
  Please, set &quot;CHROME_BIN&quot; env variable.
<font color="#26A269">✔</font> Browser application bundle generation complete.

<font color="#F66151">Error: </font><font color="#33C7DE">projects/polkadot-angular-identicon/src/lib/render-helper.ts</font>:<font color="#E9AD0C">1</font>:<font color="#E9AD0C">45</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>1</b></font></span> import { polkadotIcon, beachballIcon } from &apos;@polkadot/ui-shared/icons&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>


<font color="#F66151">Error: </font><font color="#33C7DE">projects/polkadot-angular-identicon/src/lib/render-helper.ts</font>:<font color="#E9AD0C">2</font>:<font color="#E9AD0C">24</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons/types&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>2</b></font></span> import { Circle } from &apos;@polkadot/ui-shared/icons/types&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>


<font color="#F66151">Error: </font><font color="#33C7DE">projects/polkadot-angular-identicon/src/lib/render-helper.ts</font>:<font color="#E9AD0C">3</font>:<font color="#E9AD0C">28</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;jdenticon&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>3</b></font></span> import * as jdenticon from &apos;jdenticon&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                           ~~~~~~~~~~~</font>


<font color="#F66151">Error: </font>Module not found: Error: Can&apos;t resolve &apos;@polkadot/ui-shared/icons&apos; in &apos;/home/david/source/web3/evaluation/RidOne/polkadot-angular-identicon/projects/polkadot-angular-identicon/src/lib&apos;

<font color="#F66151">Error: </font>Module not found: Error: Can&apos;t resolve &apos;jdenticon&apos; in &apos;/home/david/source/web3/evaluation/RidOne/polkadot-angular-identicon/projects/polkadot-angular-identicon/src/lib&apos;


<font color="#26A269">✔</font> Browser application bundle generation complete.

<font color="#F66151">Error: </font><font color="#33C7DE">projects/polkadot-angular-identicon/src/lib/render-helper.ts</font>:<font color="#E9AD0C">1</font>:<font color="#E9AD0C">45</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>1</b></font></span> import { polkadotIcon, beachballIcon } from &apos;@polkadot/ui-shared/icons&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>


<font color="#F66151">Error: </font><font color="#33C7DE">projects/polkadot-angular-identicon/src/lib/render-helper.ts</font>:<font color="#E9AD0C">2</font>:<font color="#E9AD0C">24</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;@polkadot/ui-shared/icons/types&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>2</b></font></span> import { Circle } from &apos;@polkadot/ui-shared/icons/types&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                       ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~</font>


<font color="#F66151">Error: </font><font color="#33C7DE">projects/polkadot-angular-identicon/src/lib/render-helper.ts</font>:<font color="#E9AD0C">3</font>:<font color="#E9AD0C">28</font> - <font color="#F66151">error</font><font color="#5E5C64"> TS2307: </font>Cannot find module &apos;jdenticon&apos; or its corresponding type declarations.

<span style="background-color:#C01C28"><font color="#300A24"><b>3</b></font></span> import * as jdenticon from &apos;jdenticon&apos;;
<span style="background-color:#C01C28"><font color="#300A24"><b> </b></font></span> <font color="#F66151">                           ~~~~~~~~~~~</font>


<font color="#F66151">Error: </font>Module not found: Error: Can&apos;t resolve &apos;@polkadot/ui-shared/icons&apos; in &apos;/home/david/source/web3/evaluation/RidOne/polkadot-angular-identicon/projects/polkadot-angular-identicon/src/lib&apos;

<font color="#F66151">Error: </font>Module not found: Error: Can&apos;t resolve &apos;jdenticon&apos; in &apos;/home/david/source/web3/evaluation/RidOne/polkadot-angular-identicon/projects/polkadot-angular-identicon/src/lib&apos;</pre>



**Notes 5.08.21**

*Error polkadot-web-identicon*

<pre><font color="#12488B"><b>/polkadot-web-identicon</b></font>$ ng build
<font color="#C01C28"><b>An unhandled exception occurred: Cannot find module &apos;@angular-devkit/build-angular/package.json&apos;</b></font>
</pre>

*Error polkadot-angular-identicon*

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