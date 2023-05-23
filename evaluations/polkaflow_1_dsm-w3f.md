# Evaluation

- **Status:** Accepted
- **Application Document:** https://github.com/w3f/Grants-Program/blob/master/applications/polkaflow.md
- **Milestone:** 1
- **Kusama Identity:** Address
- **Previously successfully merged evaluation:** N/A

| Number | Deliverable | Accepted | Link | Evaluation Notes |
| ------ | ----------- | -------- | ---- |----------------- |
| 0a. | License | <ul><li>[x] </li></ul>|[Frontend License](https://github.com/justmert/eco-flow-frontend/blob/master/LICENSE)<br>[Backend License](https://github.com/justmert/eco-flow-backend/blob/master/LICENSE)|  | 
| 0b. | Documentation | <ul><li>[x] </li></ul>|[Frontend Documentation](https://github.com/justmert/eco-flow-frontend/blob/master/README.md)<br>[Backend Documentation](https://github.com/justmert/eco-flow-backend/blob/master/README.md)|  | 
| 0c. | Testing and Testing Guide | <ul><li>[x] </li></ul>| [Backend Repo - Testing](https://github.com/justmert/eco-flow-backend#test-the-app) |  | 
| 0d. | Docker | <ul><li>[x] </li></ul>|  |  | 
| 1. | Database | <ul><li>[x] </li></ul>|[PolkaFlow Firebase Database Integration ](https://github.com/justmert/eco-flow-frontend/blob/master/src/App.js)|  | 
| 2. | Python Backend | <ul><li>[x] </li></ul>|[Backend Repo](https://github.com/justmert/eco-flow-backend)|  | 
| 3. | Frontend: Dashboard Page<br>Backend: Data Process - (Star Count)	 | <ul><li>[x] </li></ul>|[PolkaFlow Website Dashboard Page](https://polkaflow.xyz/dashboard/substrate) |  | 
| 4. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Commit History) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 5. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Code Frequency) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 6. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Top Contributors) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 7. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Issue Activity) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate) |  | 
| 8. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Issue Count) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 9. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Recent Issues) | <ul><li>[x] </li></ul>| [PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 10. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Recent Commits) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate) |  | 
| 11. | Frontend: Dashboard/Project Pages<br>Backend: Data Process - (Pull Request Count) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 12. | Frontend: Project Page<br>Backend: Data Process - (Pull Request Activity) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 13. | Frontend: Project Page<br>Backend: Data Process - (Project Info Card) | <ul><li>[x] </li></ul>|[PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate)|  | 
| 14. | Frontend: Project Page<br>Backend: Data Process - (Recent Stargazing) | <ul><li>[x] </li></ul>| [PolkaFlow Website Example Project Page](https://polkaflow.xyz/projects/paritytech/substrate) |  | 
| 15. | Frontend: Project List Page | <ul><li>[x] </li></ul>| [PolkaFlow Website Projects Page](https://polkaflow.xyz/projects)|  | 
| 16. | Integrate: Algolia | <ul><li>[x] </li></ul>| [Frontend Repo - Algolia Search Integration ](https://github.com/justmert/eco-flow-frontend/blob/master/src/components/Layouts/Search/search.js) |  | 
| 17. | Frontend: Categorization | <ul><li>[x] </li></ul>|[Frontend Repo - Typeform Integration Line ](https://github.com/justmert/eco-flow-frontend/blob/170707defb2e00fbb475a7e338593fd80c343636/src/components/Layouts/Navbar/navbar.js#L96) |  | 
| 18. | Integrate: Typeform | <ul><li>[x] </li></ul>| [Frontend Repo - Analytics Integration](https://github.com/justmert/eco-flow-frontend/blob/master/public/index.html) |  | 
| 19. | Integrate: Google Analytics | <ul><li>[x] </li></ul>| [Frontend Repo - Analytics Integration](https://github.com/justmert/eco-flow-frontend/blob/master/public/index.html) |  | 
| 20. | Backend: Schedule | <ul><li>[x] </li></ul>| [Backend Repo - Schedule](https://github.com/justmert/eco-flow-backend/blob/master/main.py) |  | 
| 21. | Frontend: UX & UI | <ul><li>[x] </li></ul>| [PolkaFlow Website](https://polkaflow.xyz/)|  | 

## Evaluation V3

### Backend

I tried to run the backend and got this error:

```
user@localhost:~/Documents/polkaflow/eco-flow-backend$ python3 seed.py --ecosystem polka
Traceback (most recent call last):
  File "/home/user/Documents/polkaflow/eco-flow-backend/seed.py", line 6, in <module>
  from projects import projects
ModuleNotFoundError: No module named 'projects'
```

The last commit excluded the file `projects.py`. I fixed this problem by adding this file again to the folder. Whould be nice to provide some explanations about this to the user be able to configure and run the application with their projects.

### Frontend

I was able to check the integration of Typeform in the frontend and view the data being stored.

After configuring the Search attributes in Algolia, I was able to search without problems. Would be nice if the documentation gives an explanation about this.

## Evaluation V2

### Backend

To successfully run the command `python3 seed.py --ecosystem <ecosystem_name>`, I needed to put "polka-" in the name of the collections in Firebase, for example, "polka-repositories-data".

After that, I was able to successfully run the backend and the Firebase has been updated with the information on paritytech/substrate, paritytech/polkadot, and paritytech/ink.

Please explain in the documentation what `<ecosystem_name>` means and how to setup a value for it.


### Frontend

I was able to view the dashboard and the project page but when I tried to view the projects list I got a blank page. That occurred because the `polka-repositories-info` in the Firebase had a document to permit the collection creation. After excluding this document on Firebase, the page worked fine. I could check all the information on these pages.

I tried to search "substrate" or other repository names but the search didn't returned anything. Algolia has information about the substrate and polkadot but not about ink. I also received no error in the developer tools that helped me to solve this problem.

![image (19)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/310b909e-53e0-4ed6-be8e-c9cd45d3df0f)


I checked the submit using the typeform and got this page:


![image (20)](https://github.com/w3f/Grant-Milestone-Delivery/assets/112647953/87298546-3be1-4111-93b9-a171b5f0a961)


I would like to know if Typeform and Algolia integration need more configuration and if it is possible to test the Typeform locally.

## Evaluation V1

### Documentation

The `.env` need some explanation of what each variable is and how to get them. 

### Backend

All tests passed:

```
user@localhost:~/Documents/justmert/eco-flow-backend$ pytest tests.py
=============================================================================================== test session starts ===============================================================================================
platform linux -- Python 3.9.2, pytest-7.3.1, pluggy-1.0.0
rootdir: /home/user/Documents/polkaflow/eco-flow-backend
collected 9 items                                                                                                                                                                                            	 

tests.py .........                                                                                                                                                                                      	[100%]

=============================================================================================== 9 passed in 22.97s ================================================================================================
```

I got this error when trying to run the backend:

```
user@localhost:~/Documents/polkaflow/eco-flow-backend$ python3 .
Traceback (most recent call last):
  File "/usr/lib/python3.9/runpy.py", line 197, in _run_module_as_main
	return _run_code(code, main_globals, None,
  File "/usr/lib/python3.9/runpy.py", line 87, in _run_code
	exec(code, run_globals)
  File "/home/user/Documents/polkaflow/eco-flow-backend/./__main__.py", line 8, in <module>
	main_p.update_db() # call the update_db method
  File "/home/user/Documents/polkaflow/eco-flow-backend/./main.py", line 34, in update_db
	self.fetch_ctx.seed()
AttributeError: 'Main' object has no attribute 'fetch_ctx'
```

### Frontend 

I could start the page, but I need to run the backend to test the frontend locally. So I checked the Derivable 3 to 15 using the web application, and it seems to be working, but I will need to test again running locally.

Could you provide me a print of the dashboard of Google Analytics for the derivable 19?

### Code Quality

When building, I received some warnings from EsLint, for example:

```
> yuugenlabs@0.1.0 build
> react-scripts build

Creating an optimized production build...
Compiled with warnings.

[eslint] 
src/App.js
  Line 13:10:  'doc' is defined but never used                 no-unused-vars
  Line 13:15:  'getDoc' is defined but never used              no-unused-vars
  Line 35:9:   'analytics' is assigned a value but never used  no-unused-vars

src/components/Dashboards/IssueActivity/issueActivity.js
  Line 5:8:  'axios' is defined but never used  no-unused-vars

src/components/Dashboards/StarCount/starCount.js
  Line 1:10:  'useState' is defined but never used  no-unused-vars

src/components/Layouts/Footer/footer.js
  Line 2:21:    'useState' is defined but never used                                                                       no-unused-vars
  Line 5:8:     'gitbubIcon2' is defined but never used                                                                    no-unused-vars
  Line 80:19:   img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 108:19:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

src/components/Layouts/Navbar/navbar.js
  Line 6:10:   'useLocation' is defined but never used                                                                    no-unused-vars
  Line 9:10:   'useState' is defined but never used                                                                       no-unused-vars
  Line 69:25:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

src/components/Projects/ProjectCard/projectCard.js
  Line 66:15:  img elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text

src/components/Repository/Chart/chart.js
  Line 1:10:  'useState' is defined but never used  no-unused-vars

src/components/Repository/CodeFrequency/codeFrequency.js
  Line 5:8:   'axios' is defined but never used    no-unused-vars
  Line 6:13:  'echarts' is defined but never used  no-unused-vars
```
