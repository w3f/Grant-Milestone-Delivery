# Milestone Delivery :mailbox:

**The [invoice form :pencil:](https://docs.google.com/forms/d/e/1FAIpQLSfmNYaoCgrxyhzgoKQ0ynQvnNRoTmgApz9NrMp-hd8mhIiO0A/viewform) has been filled out correctly for this milestone and the delivery is according to the official [milestone delivery guidelines](https://github.com/w3f/Grants-Program/blob/master/docs/milestone-deliverables-guidelines.md).**  

* **Application Document:**  [cScale.md](https://github.com/w3f/Grants-Program/blob/master/applications/cScale.md)
* **Milestone Number:** 1

---

**Context**
> Basic working implementation of a scale data encoding library in C.

> Pull Request: https://github.com/w3f/Grants-Program/pull/625

---

| Number | Deliverable | Link | Notes |
| ------ | ------------------------ | ------------------------------------------------------------------------------------------ | ----------- |
| 0a. | License | https://github.com/MatthewDarnell/cScale/blob/main/LICENSE |
| 0b. | Documentation | https://github.com/MatthewDarnell/cScale/tree/main/doc | doc folder contains a `.md` file for each data type |
| 1, 2, 3. | Intermediate Structs, Encode, Decode  | https://github.com/MatthewDarnell/cScale/blob/main/src/scale.h | scale.h contains all user facing structs and functions |
| 4. | Testing  | https://github.com/MatthewDarnell/cScale/blob/main/Makefile#L16 | Makefile target, testing app |
| 5. | Basic CLI | https://github.com/MatthewDarnell/cScale/blob/main/Makefile#L19 | Makefile target, CLI app currently supporting fixed and compact ints | 

**Additional Information**
> Makefile target `libcScale.a` can be included in other projects.
