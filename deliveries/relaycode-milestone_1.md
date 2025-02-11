# Milestone Delivery :mailbox:

**The delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/Support%20Docs/milestone-deliverables-guidelines.md).**  

* **Application Document:** In the case of a public [Grants Program](https://github.com/w3f/Grants-Program) application, please provide a link to the merged contract (the `.md` file in the [applications](https://github.com/w3f/Grants-Program/tree/master/applications) directory). In the case of a private application, please provide the name of the project. 
* **Milestone Number:** e.g. 1

**Context** (optional)
> Please provide a short paragraph or two connecting the deliverables in this milestone and describing their purpose.

**Deliverables**

| Number | Deliverable | Link | Notes |
|--------|-------------|------|-------|
| 0a.    | License     | [License](https://github.com/itsyogesh/relaycode/blob/master/LICENSE.md) | Apache 2.0 license for Relaycode. |
| 0b.    | Documentation | [Documentation](https://github.com/itsyogesh/relaycode/tree/master/docs) | Basic documentation including inline code docs and a simple tutorial explaining how to use the MVP version of Relaycode. |
| 0c.    | Testing and Testing Guide | [Testing Guide](https://github.com/itsyogesh/relaycode/tree/master/__tests__) | Unit tests covering core encoding and decoding functions, with a basic testing guide provided in the repository. |
| 0d.    | Docker      | [Dockerfile](https://github.com/itsyogesh/relaycode/tree/master/Dockerfile) | Dockerfile to easily run the MVP version of Relaycode. |
| 1.     | Basic UI Implementation | [UI Code](https://github.com/itsyogesh/relaycode/tree/master/app/) [Demo]([Demo Site](https://relaycode.org/builder) | Implement basic split-view interface using React, Tailwind CSS, and shadcn/ui components. |
| 2.     | Pallet and Function Selection | [Pallets Dropdown](https://github.com/itsyogesh/relaycode/blob/master/components/builder/combobox.tsx) | Implement dropdown menus for selecting pallets and their respective functions. |
| 3.     | Parameter Input Fields | [Parameter Inputs](https://github.com/itsyogesh/relaycode/tree/master/components/params) | Create dynamic input fields for extrinsic parameters based on selected function. |
| 4.     | Encoding and Decoding | [Encoding/Decoding Logic](https://github.com/itsyogesh/relaycode/blob/master/app/builder/page.tsx) | Implement real-time encoding and decoding of extrinsic data using dedot. |
| 5.     | Information Pane | [Information Display](https://github.com/itsyogesh/relaycode/blob/master/components/builder/information-pane.tsx) | Display encoded call data and call hash in the information pane. |
| 6.     | Demo Deployment | [Demo Site](https://relaycode.org/) | Deploy MVP version of Relaycode to a cloud platform for demonstration purposes. |

**Additional Information**
> The deliverables in this milestones essentially did the work of setting up the architecture and data flow of the builder.
> A bunch of work for the second milestone was also covered by setting up the UI design, branding, copy and UI development of the project during this milestone. 
> The new website is still under works, but you can find a preview which can be found here [Demo](https://relaycode.vercel.app) and [Code](https://github.com/itsyogesh/relaycode/tree/feature/homepage)
