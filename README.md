# class_management_system

## Steps for CRUD

1) make ui structure left side navigation and right tables/form
2) use create browser router (https://reactrouter.docschina.org/routers/create-browser-router/) to link the routes and use outlet to display the forms
3) check router.jsx for router flow and App.jsx to understand how to use outlet and sidebar in my code
4) In router.jsx there will be path and element(component to render on that path)
5) In those component first add a table which will be binded with the data that we will get from hitting get api to read all data
6) Call this api on useEffect of that component
7) use useState to store the data got from API
8) wile binding table add an extra column name <th>ACTIONS</th>
9) this column will contain 3 buttons (View Edit Delete)
10) on click of this buttons a function should be called in which we will pass id as parameter and in that get data by id api will be called for view edit and for delete delete by id should be called
11) if we click edit we will get  data based on id that data we need to show on a form containing required fields
12) on submit of that form update by id should be called in which we will pass the data
13) also add create button above table if we click it a form should appear with empty fields and if we click submit create post req should be called with the data of form