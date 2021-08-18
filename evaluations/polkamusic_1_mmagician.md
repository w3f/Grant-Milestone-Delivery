# Evaluation

* **Status:** In progress
* **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkamusic.md
* **Milestone:** 1
* **Kusama Identity:** [H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85](https://polkascan.io/pre/kusama/account/H9M22FTqs1kKRAUiEk1BCVNQfWdMzVV3HbHuMwkirirxk85)
* **Previously successfully merged evaluation:** All by mmagician

| Number | Deliverable                       | Accepted               | Link                                                                           | Evaluation notes         |
|--------|-----------------------------------|------------------------|--------------------------------------------------------------------------------|--------------------------|
| 0a.    | License                           | <ul><li>[x] </li></ul> | https://github.com/polkamusic/PolkaMusic-Core/blob/main/LICENSE                |                          |
| 0b.    | Documentation                     | <ul><li>[x] </li></ul> | https://github.com/polkamusic/PolkaMusic-Core/blob/main/README.md              |                          |
| 0c.    | Testing Guide                     | <ul><li>[x] </li></ul> | https://github.com/polkamusic/PolkaMusic-Core/blob/main/doc/examples_data.md   |                          |
| 1.     | Contract Rights Management Pallet | <ul><li>[x] </li></ul> | https://github.com/polkamusic/PolkaMusic-Core/blob/main/pallets/crm/src/lib.rs |                          |
| 2.     | Rights Management Portal          | <ul><li>[ ] </li></ul> | https://github.com/polkamusic/Rights-Management-Portal                         | See the UI section below |

## Comments

### Code structure

Initially the codebase was largely illegible due to formatting issues as well as code duplication.
This has been somewhat improved in subsequent version, although the application logic is still very repetitive. There is lots of data unpacking, perhaps more effort could be put into serialisation/deserialisation the data structures, and thus separating application logic from data handling.

### Testing

Initially no unit tests. The second iteration has tests, but it is virtually impossible they cover a good portion of the application logic, mainly due to the copupling of application logic & data handling/unpacking as mentioned above. 

Also all tests have hardcoded strings. Could be improved by either compising the test data from parts (e.g. Bob always has the same account address), or loading fixtures from a separate file? 

### UI

Again subjective, but the UI seems very unintuitive. There is lots of fields that need filling out, without information on what these fields' function is, e.g.: "Master side royalty split", "Composition side royalty split" or "Other contracts royalty split". Some suggestions:
- tooltips for the fields
- default values where applicable?

I get warnings when I enter percentage values which are different from 100. In this case, if it's enforced to be 100, why do I have this field in the first place?

It is quite dificult to get rid of all error messages and submit the form.

During the process, I see multiple fields with "*" next to it, which from a UX perspective usually means the field is mandatory, yet I am able to submit the form anyway.

At the end I get the following info:
> Your form with contract id <ID> is submitted. If there's no error or form is filled, We will send your info to our ipfs and node servers, and will send you an update when your info has been verified.

How am I supposed to get this update? How can I check the status of the contract, if there was no question about any contact details etc.?

Lastly, the error messages that pop up in the top right hand corner are very easy to miss, and not informative at all, e.g.:
"Missing mp3, artowkr, or csv files, save error".
