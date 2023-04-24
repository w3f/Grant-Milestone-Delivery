# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/crowdloan_frontend_template.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** All by takahser

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul> | [MIT](https://github.com/10clouds/parity-template/blob/478924c0d1eb1ae144722a1273e5b2eff0df8455/LICENSE) | - |
| 0b. | Documentation | <ul><li>[x] </li></ul> | [crowdloan-template README](https://github.com/10clouds/parity-template) | See [Documentation Feedback](#documentation-feedback) |
| 0c. | Article | <ul><li>[x] </li></ul> | [Article](https://docs.google.com/document/d/1agMrf_xRAsdb0MaXwAndnKO7Pr1n7LRAx9RPT5XV44g/edit#) | - |
| 1a. | Benchmarking | <ul><li>[x] </li></ul> | [Screenshots varioud web pages on Figma](https://www.figma.com/file/IOvq5AZ2vvls2m9gUQWySI/Parity?node-id=0-1) | I'm not sure if a collection of screenshots qualify as "design research" but I'll give it a pass. |
| 1b. | Design Direction Prototype | <ul><li>[x] </li></ul> | [Forum Discussion](https://forum.polkadot.network/t/templates-for-crowdloan-projects/1457) | - |
| 1c. | Repo Setup | <ul><li>[x] </li></ul> | [repo](https://github.com/10clouds/parity-template/tree/478924c0d1eb1ae144722a1273e5b2eff0df8455) | - |
| 2. | Jamstack implementation in Astro | <ul><li>[x] </li></ul> | [repo](https://github.com/10clouds/parity-template/tree/478924c0d1eb1ae144722a1273e5b2eff0df8455) | ~~Astro instead of Gatsby. Please amend.~~ approved after contract [amendment](https://github.com/w3f/Grants-Program/pull/1686) |
| 3. | Webflow implementation | <ul><li>[x] </li></ul> | [webflow template](https://webflow.com/made-in-webflow/website/parity-crowdloan) | ~~Contribute CTA is currently missing~~ approved after contract [amendment](https://github.com/w3f/Grants-Program/pull/1686) |
| 4. | Figma Template Publishing | <ul><li>[x] </li></ul> | [Figma design guide](https://www.figma.com/file/zDkzDVtnfg6d6zbv81Gp7M/Parity-Crowdloan-template?node-id=824-53626) | - |

Ideally all links inside the above table should include the commit hash,
which was used for testing the delivery. It should also be checked if the software is published under the correct open-source license.

## General Notes

Summarizes the overall performance plus additional feedback/comments

- ~~I'm not sure if "Parity Template" is a good name here. A more suitable name might include "Crowdloan" or "Parachain" or related concepts, rather than a company name.~~ renamed to [crowdloan-template](https://github.com/10clouds/crowdloan-template)

- ~~I don't think the timer should become negative, once the target date is met:~~ fixed
  ![image](https://user-images.githubusercontent.com/5393704/231820151-be58a35e-9c19-4eff-b24f-87525cdba22b.png)


### Documentation Feedback

- [x] ~~currently there is 1 npm package that has a high severity vulnerability:~~ fixed

    ```bash
    % npm audit
    found 0 vulnerabilities
    ```

- [x] dev preview works:

    ```bash
    parity-template % npm run dev


    > parity-crowdloan-template@0.0.1 dev
    > astro dev

    🚀  astro  v2.0.13 started in 407ms
    
    ┃ Local    http://127.0.0.1:3000/
    ┃ Network  use --host to expose
    ```

- [x] build passes:

    ```bash
    parity-template % npm run build


    > parity-crowdloan-template@0.0.1 build
    > astro build

    06:21:57 PM [content] No content directory found. Skipping type generation.
    06:21:57 PM [build] output target: static
    06:21:57 PM [build] Collecting build info...
    06:21:57 PM [build] Completed in 273ms.
    06:21:57 PM [build] Building static entrypoints...
    06:22:00 PM [build] Completed in 2.46s.

    building client 

    (!) Some chunks are larger than 500 kBs after minification. Consider:
    - Using dynamic import() to code-split the application
    - Use build.rollupOptions.output.manualChunks to improve chunking: https://rollupjs.org/configuration-options/#output-manualchunks
    - Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.
    Completed in 3.28s.


    generating static routes 
    ▶ src/pages/index.astro
    └─ /index.html (+434ms)
    ▶ src/pages/404.astro
    └─ /404.html (+2ms)
    optimizing 6 images in batches of 10 
    Completed in 3ms.

    Completed in 585ms.

    @astrojs/sitemap: `sitemap-index.xml` is created.

    06:22:04 PM [build] 2 page(s) built in 6.61s
    06:22:04 PM [build] Complete!
    ```

- [x] preview works:

    ```bash
    parity-template % npm run preview

    > parity-crowdloan-template@0.0.1 preview
    > astro preview

    🚀  astro  v2.0.13 started in 13ms
    
    ┃ Local    http://127.0.0.1:3000/
    ┃ Network  use --host to expose
    ```

    ![image](https://user-images.githubusercontent.com/5393704/231823560-3a6a7b47-265f-42db-ac11-0b5126198d6f.png)

