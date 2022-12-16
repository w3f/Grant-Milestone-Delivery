# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/typechain-polkadot-follow-up.md
- **Milestone:** 2
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a | License | <ul><li>[x] </li></ul> | [MIT License](https://github.com/Supercolony-net/typechain-polkadot/blob/3445db875d08a08a8d4ac60bbca40505e915a52c/LICENSE) | - |
| 0b | Documentation | <ul><li>[ ] </li></ul> | [Docs](https://github.com/Supercolony-net/typechain-polkadot/blob/3445db875d08a08a8d4ac60bbca40505e915a52c/docs/tech-specs.md) | See [Documentation Feedback](#documentation-feedback) |
| 1 | Investigation | <ul><li>[ ] </li></ul> | ? | At this point it's unclear which bugs with new versions of polkadot have been fixed. Please explain, as this might be of interest for other projects as well. |
| 2 | Parser & generators modules | <ul><li>[x] </li></ul> | [typechain-polkadot package](https://github.com/727-Ventures/typechain-polkadot/tree/master/packages/typechain-polkadot), [typechain-polkadot-parser package](https://github.com/727-Ventures/typechain-polkadot/tree/master/packages/typechain-polkadot-parser) | It would be nice if you could add some more information to your docs or article on how you leveraged handlebars in your [templates](https://github.com/727-Ventures/typechain-polkadot/tree/b8ea970b10325d96b0f6953e25023e3e0798c52c/packages/typechain-polkadot/src/templates) and what role they play in the stack of your solution. |
| 3 | Contract deployment | <ul><li>[ ] </li></ul> | [constructors template](https://github.com/727-Ventures/typechain-polkadot/blob/b8ea970b10325d96b0f6953e25023e3e0798c52c/packages/typechain-polkadot/src/templates/constructors.hbs) | It's not clear to me how a contract can be deployed using `typechain-polkadot`. |
| 4a | Contract classes extension | <ul><li>[ ] </li></ul> | [contract handlebars template](https://github.com/727-Ventures/typechain-polkadot/blob/b8ea970b10325d96b0f6953e25023e3e0798c52c/packages/typechain-polkadot/src/templates/contract.hbs) | - |
| 4b | Methods' names | <ul><li>[x] </li></ul> | [`preprocessABI` function](https://github.com/727-Ventures/typechain-polkadot/blob/b8ea970b10325d96b0f6953e25023e3e0798c52c/packages/typechain-polkadot/src/output-generators/_utils.ts#L88-L139) | - |
| 5 | Testing | <ul><li>[ ] </li></ul> | [Unit Tests](https://github.com/727-Ventures/typechain-polkadot/tree/b8ea970b10325d96b0f6953e25023e3e0798c52c/packages/typechain-polkadot) | See [Testing Feedback](#testing-feedback) |
| 6 | Article | <ul><li>[ ] </li></ul> | [Medium Article](https://medium.com/727-ventures/typechain-polkadot-overview-7c184067523f) | See [Article Feedback](#article-feedback) |
| 7 | Branding | <ul><li>[ ] </li></ul> | [Medium Article](https://medium.com/727-ventures/typechain-polkadot-overview-7c184067523f) | See [Article Feedback](#article-feedback) |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

### Documentation Feedback

- there is currently no README present in the [typechain-polkadot package](https://github.com/727-Ventures/typechain-polkadot/tree/b8ea970b10325d96b0f6953e25023e3e0798c52c/packages/typechain-polkadot)
- currently the code is copyrighted to _Supercolony_, feel free to update these to the new name of your organisation (note that this is not mandatory for the acceptance of the grant)

### Testing Feedback

- smoke testing succeeded thanks to the support of the grantee (see [convo](https://github.com/w3f/Grant-Milestone-Delivery/pull/623) in the delivery PR), however, it would be nice to see this information incorporated into the docs, incl. compiling an example ink! contract (generating the `.contract` and `.json` artifacts) before generating the TypeScript files
- tests are currently failing:

    ```bash
    ~/repos/typechain-polkadot/packages/typechain-polkadot$ npm i

    added 598 packages, and audited 599 packages in 30s

    105 packages are looking for funding
    run `npm fund` for details

    found 0 vulnerabilities
    npm notice 
    npm notice New major version of npm available! 8.1.2 -> 9.2.0
    npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.2.0
    npm notice Run npm install -g npm@9.2.0 to update!
    npm notice 
    ~/repos/typechain-polkadot/packages/typechain-polkadot$ npm run test

    > @727-ventures/typechain-polkadot@0.1.2 test
    > jest --no-cache --maxWorkers 1

    FAIL  tests/psp22/general.test.ts
    ● Test suite failed to run

        tests/psp22/general.test.ts:1:22 - error TS2307: Cannot find module '../generated/contracts/my_psp22' or its corresponding type declarations.

        1 import Contract from '../generated/contracts/my_psp22';
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp22/general.test.ts:2:26 - error TS2307: Cannot find module '../generated/constructors/my_psp22' or its corresponding type declarations.

        2 import Constructors from '../generated/constructors/my_psp22';
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    FAIL  tests/psp34/query.test.ts
    ● Test suite failed to run

        tests/psp34/query.test.ts:2:22 - error TS2307: Cannot find module '../generated/contracts/my_psp34' or its corresponding type declarations.

        2 import Contract from "../generated/contracts/my_psp34";
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp34/query.test.ts:3:25 - error TS2307: Cannot find module '../generated/types-arguments/my_psp34' or its corresponding type declarations.

        3 import {IdBuilder} from "../generated/types-arguments/my_psp34";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp34/query.test.ts:4:26 - error TS2307: Cannot find module '../generated/constructors/my_psp34' or its corresponding type declarations.

        4 import Constructors from "../generated/constructors/my_psp34";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    FAIL  tests/psp22/query.test.ts
    ● Test suite failed to run

        tests/psp22/query.test.ts:1:22 - error TS2307: Cannot find module '../generated/contracts/my_psp22' or its corresponding type declarations.

        1 import Contract from '../generated/contracts/my_psp22';
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp22/query.test.ts:2:26 - error TS2307: Cannot find module '../generated/constructors/my_psp22' or its corresponding type declarations.

        2 import Constructors from '../generated/constructors/my_psp22';
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    FAIL  tests/psp34/tx.test.ts
    ● Test suite failed to run

        tests/psp34/tx.test.ts:2:22 - error TS2307: Cannot find module '../generated/contracts/my_psp34' or its corresponding type declarations.

        2 import Contract from "../generated/contracts/my_psp34";
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp34/tx.test.ts:3:25 - error TS2307: Cannot find module '../generated/types-arguments/my_psp34' or its corresponding type declarations.

        3 import {IdBuilder} from "../generated/types-arguments/my_psp34";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp34/tx.test.ts:4:26 - error TS2307: Cannot find module '../generated/constructors/my_psp34' or its corresponding type declarations.

        4 import Constructors from "../generated/constructors/my_psp34";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    FAIL  tests/psp22/tx.test.ts
    ● Test suite failed to run

        tests/psp22/tx.test.ts:1:22 - error TS2307: Cannot find module '../generated/contracts/my_psp22' or its corresponding type declarations.

        1 import Contract from '../generated/contracts/my_psp22';
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/psp22/tx.test.ts:5:26 - error TS2307: Cannot find module '../generated/constructors/my_psp22' or its corresponding type declarations.

        5 import Constructors from "../generated/constructors/my_psp22";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    FAIL  tests/enums/general.test.ts
    ● Test suite failed to run

        tests/enums/general.test.ts:2:22 - error TS2307: Cannot find module '../generated/contracts/contract_with_enums' or its corresponding type declarations.

        2 import Contract from "../generated/contracts/contract_with_enums";
                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/enums/general.test.ts:3:54 - error TS2307: Cannot find module '../generated/types-arguments/contract_with_enums' or its corresponding type declarations.

        3 import {AnotherEnumBuilder, EnumExampleBuilder} from "../generated/types-arguments/contract_with_enums";
                                                            ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
        tests/enums/general.test.ts:4:26 - error TS2307: Cannot find module '../generated/constructors/contract_with_enums' or its corresponding type declarations.

        4 import Constructors from "../generated/constructors/contract_with_enums";
                                ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

    Test Suites: 6 failed, 6 total
    Tests:       0 total
    Snapshots:   0 total
    Time:        2.411 s
    Ran all test suites.
    ```

- there are currently a lot of lint issues:

    ```bash
    ~/repos/typechain-polkadot$ npm run lint

    > lint
    > eslint "{packages, examples}/**/*.{js,jsx,ts,tsx}"


    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot-parser/index.ts
    71:10  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    85:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    111:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    114:25  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    133:52  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    133:52  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    139:52  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    139:52  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    156:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    170:16  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    170:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    184:16  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    184:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    198:16  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    198:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    218:16  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    219:19  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    221:23  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    224:8   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    225:45  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    225:45  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    225:45  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    239:8   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    240:45  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    240:45  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    240:45  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    282:38  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    282:38  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    294:38  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    294:38  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot-parser/src/utils.ts
    43:45  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
    45:69  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
    50:53  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
    59:45  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
    61:69  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
    66:53  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/index.ts
    78:14  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/arguments.ts
    44:7   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    45:25  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    71:11  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/build-extrinsic.ts
    45:7   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    46:25  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    57:11  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/constructors.ts
    53:7   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    54:25  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    63:11  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/mixed-methods.ts
    45:7   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    46:25  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    58:12  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    69:12  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    72:28  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    72:28  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    73:10  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    73:10  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/query.ts
    45:7   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    46:25  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    57:11  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    60:27  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    60:27  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    61:9   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    61:9   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/return-values.ts
    40:76  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion
    40:76  warning  Forbidden non-null assertion  @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/generators/tx-sign-and-send.ts
    45:7   warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    46:25  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    57:11  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/output-generators/raw/_sdk/query.ts
    77:10  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    77:10  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    126:10  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    157:20  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    203:11  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/src/output-generators/raw/_sdk/tx.ts
    85:31  warning  Forbidden non-null assertion    @typescript-eslint/no-non-null-assertion
    106:24  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    159:18  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/tests/psp34/query.test.ts
    40:23  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    56:23  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    70:23  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    97:23  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions

    /home/xxx/repos/typechain-polkadot/packages/typechain-polkadot/tests/psp34/tx.test.ts
    41:24  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    56:23  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    70:23  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions
    81:28  warning  Do not use any type assertions  @typescript-eslint/consistent-type-assertions

    ✖ 82 problems (0 errors, 82 warnings)
    ```

### Article Feedback

- Currently, the link to the repo is [broken](https://github.com/Supercolony-net/typechain-polkadot,) due to the comma at the end
- It would be nice to link to some example contract(s) so the reader could test it right away, even if they are not familiar with ink! smart contracts yet
