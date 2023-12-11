# Evaluation

- **Status:** In progress
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/lastic-price-simulation-2.md
- **Milestone:** 1
- **Previously successfully merged evaluation:** All by keeganquigley

| Number | Deliverable | Accepted | Specification | Link | Comments
| -----: | ----------- | ------------- | ------------- | ------------- | ------------- |
| **0a.** | License | <ul><li>[x] </li></ul> | GPLv3 Open Source License. | [License](https://github.com/LasticXYZ/price-simulation/blob/master/LICENSE) |
| **0b.** | Documentation | <ul><li>[x] </li></ul> | Detailed guide including usage, configurations, and setup. | [Documentation](https://docs.lastic.xyz/price-simulator/) | Great docs!
| **0d.** | Article Publishing | <ul><li>[x] </li></ul> | An article on the Coretime Price Simulator's development and impact. | [Article](https://blog.lastic.xyz/discover-polkadots-coretime-pricing-with-the-lastic-simulator-32e371203d1b) | Ok.
| **1.** | Streamlit-based Application | <ul><li>[x] </li></ul> | An interactive web application with UI elements for simulating Coretime pricing. | [Application](https://lastic.streamlit.app/) | Ok.
| **2a.** | Real-time Graph Visualization | <ul><li>[x] </li></ul> | Graph visualization of Coretime pricing using Matplotlib. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Ok.
| **2b.** | UI - Sliders | <ul><li>[x] </li></ul> | Configurable sliders for adjusting Coretime pricing parameters. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Ok.
| **2c.** | Configuration Management | <ul><li>[x] </li></ul> | System for customizing parameters like region length, bulk proportion. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Ok.
| **2d.** | Price Calculation Models | <ul><li>[x] </li></ul> | Linear and exponential price calculation functions with a toggle feature. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Ok.
| **2e.** | Monthly Adjustments | <ul><li>[x] </li></ul> | Feature for adjusting bulk coretime renewals and sales on a monthly basis. | [Github](https://github.com/LasticXYZ/price-simulation) or [Application](https://lastic.streamlit.app/) | Ok.
| **3.** | Functionality Comparison | <ul><li>[x] </li></ul> | Validation against the [`Broker pallet`](https://github.com/paritytech/polkadot-sdk/tree/master/substrate/frame/broker) implementation. | [Github](https://github.com/LasticXYZ/price-simulation) | Ok.

# General Notes

Price Simulation app works great. Not finding any unit or e2e tests. Also am not finding the last deliverable for "Functionality Comparison".
