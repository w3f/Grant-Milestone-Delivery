# Evaluation


* **Status:** In Progress
* **PR Link:** [https://github.com/w3f/Open-Grants-Program/pull/64](https://github.com/w3f/Open-Grants-Program/pull/64)
* **Milestone:** 1
* **Kusama Identity:** [EdAnXzJGJcfNATWahgMgewkSA84nGHZwANpVzGVXtDYetsw](https://polkascan.io/kusama/account/EdAnXzJGJcfNATWahgMgewkSA84nGHZwANpVzGVXtDYetsw)
* **Previously successfully merged evaluation:** none

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------------- | ------------- | ------------- | ------------- |------------- |
| 1. | Embedded code | <ul><li>[ ] </li></ul> |?| No URL parsing as proposed is done as far as I can tell |
| 2. | Connecting to PolkadotJS extension | <ul><li>[ ] </li></ul> |[Connect.svelte](https://github.com/Shard-Labs/kusama-tips-widget/blob/e2e1629ba77449c4141d5a7c1374cbd3874ba623/src/components/modals/Connect.svelte)| Works like a charm, see UX suggestion below |

## General Notes

Apache 2.0 LICENSE file in the repo.

### URL Parsing

Perhaps I'm missing something, but I can't see this being done anywhere in the code.

Currently, `window.location.origin` is being used as the URL in the reason submitted, which contains only the base URL and will not work as intended when using tips to reward efforts on content sharing networks, for example. Instead, at least the full URL should be used if not sanitized as initially described.

Sanitization would also have the added benefit of allowing to verify that no tip for the same web page is currently open. This was specified in the original RFP and the application, though I'm not sure it's really strictly required. Will clarify.

### Detecting extension

Everything working here. UX could be slightly improved by getting rid of the widget "landing page". I.e. if polkadot{.js} is installed, ask directly for permission to connect to it when the button is clicked, then show the list of accounts. There is no need to show the installation instructions if the extension is already installed. This would also more closely resemble the user journey described for this deliverable in the application.
