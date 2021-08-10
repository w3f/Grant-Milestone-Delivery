# Evaluation

- **Status:** In Progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/multisignature_management_tool.md
- **Milestone:** 2
- **Kusama Identity:** [HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve](https://polkascan.io/pre/kusama/account/HFG4FvoJv8uanizzetS1tPA6wigNAiKuEHKcm1NaKNNDwve)
- **Previously successfully merged evaluation:** All evaluations by Noc2

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| --- | --- | --- | --- | --- |
| 0 | Apache License 2.0 | <ul><li>[x] </li></ul> | [License](https://github.com/itering/subscan-multisig-react/blob/master/LICENSE), [subscan-multisig-backend License](https://github.com/itering/subscan-multisig-backend/blob/master/LICENSE) | The [icon shows the wrong license](https://github.com/itering/subscan-multisig-react#subscan-multisig-ui---react), but the repo actually has the correct license |
| 1 | Multisig wallet support more kinds of Extrinsic such as staking, Democracy | <ul><li>[x] </li></ul> | [1](https://github.com/itering/subscan-multisig-react/commit/51bf80353820f989733aa0e9f188848691c7600c) [2](https://github.com/itering/subscan-multisig-react/commit/8dd5602fa53f502fff34d52cc3d41bfcf3e05cd4) [3](https://github.com/itering/subscan-multisig-react/commit/eec95e36cc40ade15c5fcf5c5edde0b08cef2b41) [4](https://github.com/itering/subscan-multisig-react/commit/6f111c7a75d28ae0eab8e15b5bca14a9bff55521) [5](https://github.com/itering/subscan-multisig-react/commit/2f3e638d6d7197ea35a2592405c6026750c9a8ff) | All Extrinsic are supported |
| 2 | Support kusama ,Darwinia and other network which base on Substrate 2.0 | <ul><li>[x] </li></ul> | [pr](https://github.com/itering/subscan-multisig-react/commit/20d2630204189756b1d5df831e79dba46343a252) | Supports different networks |
| 3 | Docker Files and Images | <ul><li>[x] </li></ul> | [Dockerfile](https://github.com/itering/subscan-multisig-react/blob/master/Dockerfile) | Works |
| 4 | Unit tests and integration test | <ul><li>[ ] </li></ul> | [Unit Test](https://github.com/itering/subscan-multisig-react/tree/master/src/__tests__) [E2E](https://github.com/itering/subscan-multisig-react/tree/master/cypress) | yarn error, see below |
| 5 | Tutorials | <ul><li>[ ] </li></ul> | [Readme](https://github.com/itering/subscan-multisig-react/blob/master/README.md) | The tutorial doesn’t seem to be correct. For example "*Currently, only transfer operations are supported. We will support more types of extrinsic in the second stage." |

## General Notes

The current initiate extrinsic user screen isn't really user friendly. It’s actually now more complicated than just using polkadot.js. However it seems not to be required to store the call data, which is definitely an advantage. 

 
<pre><font color="#AAAAAA">[2/4] Fetching packages...</font>
<font color="#C01C28">error</font> extract-files@11.0.0: The engine &quot;node&quot; is incompatible with this module. Expected version &quot;^12.20 || &gt;= 14.13&quot;. Got &quot;14.9.0&quot;
<font color="#C01C28">error</font> Found incompatible module.
<font color="#12488B">info</font> Visit <b>https://yarnpkg.com/en/docs/cli/install</b> for documentation about this command.
</pre>


<pre><font color="#C01C28">error</font> @edgeware/node-types@3.5.1-erup-4: The engine &quot;node&quot; is incompatible with this module. Expected version &quot;^14.0.0&quot;. Got &quot;16.6.1&quot;
<font color="#C01C28">error</font> Found incompatible module.
</pre>